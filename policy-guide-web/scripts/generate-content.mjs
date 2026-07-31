import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const here = path.dirname(fileURLToPath(import.meta.url))
const appRoot = path.resolve(here, '..')
const projectRoot = path.resolve(appRoot, '..')
const analysisDir = path.join(projectRoot, 'analysis')
const outputDir = path.join(appRoot, 'src', 'generated')

const abbreviations = {
  Alabama:'AL', Alaska:'AK', Arizona:'AZ', Arkansas:'AR', California:'CA', Colorado:'CO',
  Connecticut:'CT', Delaware:'DE', 'District of Columbia':'DC', Florida:'FL', Georgia:'GA',
  Hawaii:'HI', Idaho:'ID', Illinois:'IL', Indiana:'IN', Iowa:'IA', Kansas:'KS', Kentucky:'KY',
  Louisiana:'LA', Maine:'ME', Maryland:'MD', Massachusetts:'MA', Michigan:'MI', Minnesota:'MN',
  Mississippi:'MS', Missouri:'MO', Montana:'MT', Nebraska:'NE', Nevada:'NV', 'New Hampshire':'NH',
  'New Jersey':'NJ', 'New Mexico':'NM', 'New York':'NY', 'North Carolina':'NC', 'North Dakota':'ND',
  Ohio:'OH', Oklahoma:'OK', Oregon:'OR', Pennsylvania:'PA', 'Puerto Rico':'PR', 'Rhode Island':'RI',
  'South Carolina':'SC', 'South Dakota':'SD', Tennessee:'TN', Texas:'TX', Utah:'UT', Vermont:'VT',
  Virginia:'VA', Washington:'WA', 'West Virginia':'WV', Wisconsin:'WI', Wyoming:'WY'
}

const read = p => fs.readFileSync(p, 'utf8')

// Reader-facing prose should not carry the project's internal provenance
// apparatus. `.md` filenames mean nothing to a professor, `§` references point at
// documents that are not published, and claim tags are quality controls for the
// author rather than signals for the reader. Provenance survives in each state's
// recorded source URLs and documents, and in VERIFICATION.md.
//
// This strips scaffolding only. It never rewrites a sentence.
const CLAIM_TAGS = 'Inference|Synthesis|Recommendation|Recommendation — model language|Evidence|K-12 Evidence|Author framing|Example|Instrument|Example / instrument'
function stripApparatus(md) {
  if (!md) return ''
  return md
    // parentheticals that exist only to cite internal files or sections
    .replace(/\s*\((?:[^()]*?(?:\.md|§)[^()]*?)\)/g, '')
    // bold or italic claim tags, with or without a leading dash
    .replace(new RegExp(`\\s*[—-]?\\s*(?:\\*\\*|\\*)?\\[(?:${CLAIM_TAGS})\\](?:\\*\\*|\\*)?`, 'g'), '')
    // inline filename references outside parentheses, so
    // "Georgia.md's high-stakes table" becomes "Georgia's high-stakes table"
    .replace(/\.md\b/g, '')
    // bare section references left in running prose
    .replace(/\s*§+\s*[A-Z][^;,.)\n]*?(?:#\d+(?:-\d+)?)?(?=[;,.)\n]|$)/g, '')
    // tidy the punctuation the removals leave behind
    .replace(/\s+([,.;:])/g, '$1')
    .replace(/\(\s*\)/g, '')
    .replace(/[ \t]{2,}/g, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

function sections(markdown) {
  const out = {}
  const matches = [...markdown.matchAll(/^## (.+)$/gm)]
  matches.forEach((m, index) => {
    const start = m.index + m[0].length
    const end = index + 1 < matches.length ? matches[index + 1].index : markdown.length
    out[m[1].trim()] = markdown.slice(start, end).trim()
  })
  return out
}

function plain(value = '') {
  return value
    .replace(/\|[^\n]+\|/g, ' ')
    .replace(/\*\*|__|\*|`|~~/g, '')
    .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1')
    .replace(/^[-#>]+\s*/gm, '')
    .replace(/\([^\)]*\.(?:pdf|docx|md)[^\)]*\)/gi, '')
    .replace(/\s+/g, ' ')
    .trim()
}

// The "Expected Graduate AI Profile" section answers the question a professor
// actually has, which is what a student arriving from this state may already have
// been taught. The Executive Summary answers a different question, namely what the
// state published, and reads as document architecture. This pulls the graduate
// bullets so the profile can lead with the useful one.
function graduateProfile(section = '') {
  return section.split('\n')
    .filter(line => /^\s*[-*]\s+/.test(line))
    .map(line => plain(line.replace(/^\s*[-*]\s+/, '')))
    .filter(t => t && !/^higher-education implication/i.test(t))
    .map(t => t
      .replace(/\s*Basis:.*$/i, '')
      .replace(/\s*\((?:model policy|guidance|student scale)[^)]*\)/gi, '')
      .replace(/\s+([,.;])/g, '$1')
      .trim())
    .map(t => {
      if (t.length <= 200) return t
      // prefer a sentence boundary over a hard cut
      const cut = t.slice(0, 200)
      const stop = cut.lastIndexOf('. ')
      return stop > 90 ? cut.slice(0, stop + 1) : cut.replace(/[ ,;.]+$/, '') + '…'
    })
    .filter(Boolean)
    .slice(0, 5)
}

function firstParagraph(value = '') {
  return plain(value.split(/\n\s*\n/).find(p => !p.trim().startsWith('|')) || value).slice(0, 760)
}

function tableRows(markdown) {
  return markdown.split('\n').filter(line => /^\|/.test(line) && !/^\|[-| :]+\|?$/.test(line))
    .map(line => line.split('|').slice(1, -1).map(cell => cell.trim()))
}

function sourceDocs(sourceSection = '') {
  return tableRows(sourceSection).slice(1).map(row => ({
    filename: plain(row[0]), title: plain(row[1]), issuer: plain(row[2]), date: plain(row[3]), type: plain(row[4])
  })).filter(doc => doc.filename && doc.filename !== 'sources.md')
}

function sourceUrls(state) {
  const ledger = path.join(projectRoot, 'resources', state, 'sources.md')
  if (!fs.existsSync(ledger)) return []
  const text = read(ledger)
  return [...new Set(text.match(/https?:\/\/[^\s)>]+/g) || [])].map(url => url.replace(/[.,;]+$/, ''))
}

// The provenance ledger is the authority on how far each jurisdiction has been
// verified. It is maintained by hand in provenance.json and audited against
// resources/<state>/. Before 2026-07-30 the site inferred this from a keyword scan
// of the analysis text, which overclaimed: it reported "primary documents reviewed"
// for jurisdictions whose documents nobody had opened.
const provenance = JSON.parse(read(path.join(projectRoot, 'provenance.json')))

const comparison = read(path.join(projectRoot, 'cross-state-ai-policy-comparison.md'))
const matrixBlock = comparison.match(/\| Jurisdiction \| Authority \/ force[\s\S]*?\n\n---/)?.[0] || ''
const matrix = Object.fromEntries(tableRows(matrixBlock).slice(1).map(row => [plain(row[0]), {
  authority: plain(row[1]), instrument: plain(row[2]), detector: plain(row[3]), offloading: plain(row[4]), higherEdHook: plain(row[5])
}]))

function posture(authority = '') {
  const lower = authority.toLowerCase()
  if (lower.includes('statute') || lower.includes('territory-wide directive') || lower.includes('binding')) return 'mandate'
  if ((lower.includes('pending') || lower.includes('bills')) && (lower.includes('no ') || lower.includes('resource page'))) return 'pending'
  if (lower.includes('absence') || lower.includes('no state guidance') || lower.includes('no current guidance') || lower.includes('no nysed') || lower.includes('no tea') || lower.includes('no use guidance')) return 'absent'
  return 'guidance'
}

const stateFiles = fs.readdirSync(analysisDir)
  .filter(name => name.endsWith('.md') && !name.startsWith('_'))
  .sort((a,b) => a.localeCompare(b))

const states = stateFiles.map(filename => {
  const name = filename.replace(/\.md$/, '')
  const markdown = read(path.join(analysisDir, filename))
  const s = sections(markdown)
  const meta = matrix[name] || {authority:'Evidence profile in state analysis', instrument:'See state analysis', detector:'See state analysis', offloading:'See state analysis', higherEdHook:'See state analysis'}
  const docs = sourceDocs(s['Source Documents'])
  const led = provenance.jurisdictions[name] || {status:'none', documents:[], note:null, checkedOn:null}
  const fullText = plain(markdown).toLowerCase()
  const tags = []
  if (/aias|permission scale|use continuum|scaffolding scale|redlight|red light/.test(fullText)) tags.push('Assignment instrument')
  if (!/not addressed|not captured|silent|not found/.test(meta.detector.toLowerCase())) tags.push('Detector position')
  if (meta.higherEdHook && !/^(none|not captured|not found)/i.test(meta.higherEdHook)) tags.push('Higher-ed connection')
  if (/grade band|prek|pre-k|elementary|developmental/.test(fullText)) tags.push('Developmental guidance')
  if (/privacy|ferpa|coppa|data/.test(fullText)) tags.push('Privacy')
  return {
    name,
    abbreviation: abbreviations[name] || name.slice(0,2).toUpperCase(),
    posture: posture(meta.authority),
    authority: meta.authority,
    provenance: {status: led.status, documents: led.documents || [], checkedOn: led.checkedOn || null, note: led.note || null},
    summary: stripApparatus(firstParagraph(s['Executive Summary'])),
    graduateProfile: graduateProfile(stripApparatus(s['Expected Graduate AI Profile'])),
    instrument: meta.instrument,
    detector: meta.detector,
    offloading: meta.offloading,
    higherEdHook: meta.higherEdHook,
    tags,
    documents: docs,
    sourceUrls: sourceUrls(name),
    sections: {
      policy: stripApparatus(s['K–12 AI Policy and Guidance'] || s['K-12 AI Policy and Guidance']),
      offloading: stripApparatus(s['Learning and Cognitive-Offloading Strategies']),
      graduate: stripApparatus(s['Expected Graduate AI Profile']),
      implications: stripApparatus(s['Implications for Higher Education']),
      response: stripApparatus(s['Recommended Higher-Education Response']),
      unique: stripApparatus(s['Unique Aspects']),
      gaps: stripApparatus(s['Evidence Gaps and Uncertainties'])
    }
  }
})

const frameworkMd = read(path.join(projectRoot, 'k12-frameworks-universities-can-adopt.md'))
const frameworkSections = sections(frameworkMd)
const stateNames = states.map(s => s.name)
const frameworks = Object.entries(frameworkSections)
  .filter(([heading]) => /^\d+\./.test(heading))
  .map(([heading, body], index) => ({
    id: heading.replace(/^\d+\.\s*/, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
    number: index + 1,
    title: heading.replace(/^\d+\.\s*/, ''),
    body: stripApparatus(body),
    summary: stripApparatus(firstParagraph(body)),
    states: stateNames.filter(name => new RegExp(`\\b${name.replace(/[.*+?^${}()|[\\]\\]/g, '\\$&')}\\b`).test(body))
  }))

const briefMd = read(path.join(projectRoot, 'ai-readiness-brief.md'))
const briefSections = sections(briefMd)
const readinessMd = read(path.join(projectRoot, 'higher-education-ai-readiness-guidelines.md'))
const readinessSections = sections(readinessMd)

// Curated instrument transcriptions. These are NOT parsed out of the analyses,
// because instrument levels are the one content category this project has
// previously shipped errors in. Each entry is transcribed by hand from the
// issuing agency's own document and recorded in VERIFICATION.md.
const instruments = [
  {
    id: 'oklahoma-aaurs',
    state: 'Oklahoma',
    name: 'AI Acceptable Use Rating Scale',
    agency: 'Oklahoma State Department of Education',
    source: 'Guidance and Considerations for Using Artificial Intelligence in Oklahoma K-12 Schools, Version 2.0, July 2025, page 17',
    url: 'https://oklahoma.gov/content/dam/ok/en/osde/ai-and-digital-learning/Guidance%20and%20Considerations%20for%20Using%20Artificial%20Intelligence%20in%20Oklahoma%20K-12%20Schools%202.0.pdf',
    attribution: 'Adapted by Dr. Karen Leonard for the Oklahoma State Department of Education (OSDE) from the work of Dr. Leon Furze, Dr. Mike Perkins, Dr. Jasper Roe FHEA, & Dr. Jason Mcvaugh.',
    verified: 'primary',
    verifiedOn: '2026-07-30',
    levels: [
      { n: '0', label: 'NO AI Use',
        permits: 'This activity is to be completed entirely without AI assistance. AI MAY NOT be used at any point during the activity. This level ensures that students rely solely on their own knowledge, understanding, and skills.',
        disclose: 'No AI disclosure required. May require an academic honesty pledge that AI was not used.' },
      { n: '1', label: 'AI-Assisted Idea Generation and Structuring',
        permits: 'No AI content is allowed in the final submission. AI can be used in the activity for brainstorming, creating structures, and generating ideas for improving work.',
        disclose: 'AI disclosure statement. Link(s) to AI chat(s) must be submitted.' },
      { n: '2', label: 'AI-Assisted Editing',
        permits: 'No new content can be created using AI. AI can be used to make improvements to the clarity or quality of student-created work to improve the final output.',
        disclose: 'AI disclosure statement. Link(s) to AI chat(s) must be submitted.' },
      { n: '3', label: 'AI for Specified Task Completion',
        permits: 'AI is used to complete certain elements of the task, as specified by the teacher. This level requires critical engagement with AI-generated content and evaluating its output.',
        disclose: 'All AI-created content cited. Link(s) to AI chat(s) must be submitted.' },
      { n: '4', label: 'Full AI Use with Human Oversight',
        permits: 'Students may use AI throughout the activity to support their own work in any way the educator allows. AI should be a co-pilot to enhance human creativity.',
        disclose: 'Cite the use of AI. Link(s) to AI chat(s) must be submitted.' }
    ]
  }
]

// The exposure diagnostic. Authored copy, not parsed from the guidelines, because
// re-voicing for a faculty reader is an editorial act a regex cannot perform. The
// substance is the six syllabus questions from `Guidelines for Faculty`, turned from
// prescription into diagnosis. Provenance stays in the `evidence` field rather than
// being printed into body prose.
//
// `objection.draft: true` marks argument written for this site that does NOT exist
// anywhere in the research corpus. It needs author approval before release.
const exposure = {
  headline: 'They spent four years under a written AI rule.',
  headlineEm: 'Yours is the first one they cannot find.',
  preshow: [
    'This is a diagnosis, not a checklist. Each point below names one thing your incoming students were taught to expect, one thing your syllabus or handbook probably does not say, and who the mismatch fails.',
    'Nothing here assumes every student arrived trained. Adoption varies by district and most K-12 guidance is voluntary, so you cannot tell which students were taught a rule and which were not. A syllabus that says nothing about AI fails both of them, in opposite directions. The trained student concludes your course expects less than her high school did. The untrained student concludes anything is allowed.'
  ],
  noHook: 'No state requirement reaches your institution. The case rests entirely on merits, and your students were taught these rules anyway.',
  points: [
    {
      id: 'permission',
      topic: 'permission', field: 'instrument',
      owner: 'faculty',
      title: 'Permission is a property of the assignment, not the course.',
      taught: 'Each task carries a posted level, from an AI-free floor up to full disclosed collaboration. The level was taught, not inferred.',
      says: 'One rule for the whole course, or nothing at all.',
      fails: 'The trained student, who reads a blanket rule as less rigorous than their high school.',
      position: 'Post a level on every assignment rather than one rule for the term. Where your institution has not chosen a vocabulary, use the AI Assessment Scale, since it is the peer-reviewed source four states already print.',
      evidence: 'Seven jurisdictions publish a leveled permission scale. Four attribute it to Perkins, Furze, Roe and MacVaugh (2024). Oklahoma runs Level 0 through Level 4 and requires disclosure that escalates with the level.',
      chips: ['OK five levels, 0 to 4', 'NM five-level AIAS', 'NC 0 to Infinity', 'WA five-level OSPI', 'WY four-level continuum', 'PR translated from WA', 'LA four-tier SAMR'],
      objection: {
        draft: true,
        q: 'This is micromanagement, and it intrudes on academic freedom.',
        a: [
          'Academic freedom covers what you decide, not whether students can find out what you decided. A posted level does not tell you which level to pick. It makes the choice you already made legible to the person being graded on it.',
          'The current alternative is not freedom. Each student privately guesses what you allow, and is then graded against the guess. Publishing the level costs one line per assignment and removes the guessing.'
        ]
      }
    },
    {
      id: 'disclosure',
      topic: 'disclosure', field: null,
      owner: 'faculty',
      title: 'Disclosure has a named format.',
      taught: 'A citation format, a disclosure statement, and in two states a retained link to the AI chat itself.',
      says: 'Cite your sources.',
      fails: 'The honest student, who wants to disclose and cannot find out how.',
      position: 'Name the disclosure format in the syllabus. State where the disclosure goes, what it must say, and whether you want the chat transcript.',
      evidence: 'Oklahoma requires a disclosure statement plus links to the AI chats at every level from 1 upward, meaning any AI contact at all obliges the student to hand over the conversation. Wyoming carries the same chat-link convention.',
      chips: ['OK chat links from Level 1', 'WY chat-link disclosure', 'UT, WV, OH, NC citation formats'],
      objection: {
        draft: true,
        q: 'Students will simply lie about it.',
        a: [
          'Some will. Disclosure is not detection and does not pretend to be. What it changes is the default for the students who were going to be honest and currently have nowhere to put it.',
          'A chat link is also a verifiable artifact rather than an assertion, which is a stronger evidentiary position than the one you hold now.'
        ]
      }
    },
    {
      id: 'parity',
      topic: 'parity', field: null,
      owner: 'institution',
      title: 'If a tool is required, it is provided.',
      taught: 'Tool parity. A school that requires a tool supplies it, so the paying student holds no advantage.',
      says: 'Nothing about who pays for the tool it assumes you have.',
      fails: 'The student on the free tier, graded against classmates on the paid one.',
      position: 'Adopt a parity rule. Either the institution supplies the tool an assignment requires, or the assignment cannot require it. Audit what free-tier access actually produces before assuming it is equivalent.',
      evidence: 'Utah, West Virginia, North Dakota and Ohio publish tool-parity expectations, and several states pair them with a vetting rubric covering privacy and vendor accountability.',
      chips: ['UT parity', 'WV parity', 'ND parity', 'OH parity', 'RI procurement checklist'],
      objection: {
        draft: true,
        q: 'We cannot afford site licenses for every tool a faculty member wants.',
        a: [
          'Then the rule bites in the other direction. Parity is a design constraint on assignments, not a budget line. An assignment that requires a paid tool the institution will not buy is an assignment that grades household income.',
          'K-12 systems with far smaller budgets reached this conclusion first, which makes it difficult to argue the principle is unaffordable rather than unexamined.'
        ]
      }
    },
    {
      id: 'floor',
      topic: 'floor', field: 'offloading',
      owner: 'faculty',
      title: 'Some work is AI-free, and the reason is taught.',
      taught: 'An explicit rationale for protecting unaided work, including the calculator analogy and the argument from repetition.',
      says: 'AI is prohibited on this assignment, with no reason given.',
      fails: 'Every student, who reads an unexplained ban as distrust rather than as pedagogy.',
      position: 'Keep an AI-free floor and say why it exists. Tie it to the specific skill the assessment is meant to demonstrate rather than to integrity in general.',
      evidence: 'Every leveled scale in the corpus preserves an AI-free floor. Oklahoma states that Level 0 "ensures that students rely solely on their own knowledge, understanding, and skills." Vermont borrows the calculator analogy and Minnesota argues from repetition.',
      chips: ['OK Level 0', 'NC Level 0 AI Free', 'WA Level 1 No AI', 'VT calculator analogy', 'MN repetition argument'],
      objection: {
        draft: true,
        q: 'Explaining the reason just invites students to negotiate it.',
        a: [
          'They negotiate now, and they do it from a worse starting position, because an unexplained prohibition looks arbitrary and arbitrary rules attract challenge.',
          'A stated reason converts the conversation from whether the rule is fair into whether the skill matters, which is a conversation you are equipped to win and they were taught to have.'
        ]
      }
    },
    {
      id: 'detector',
      topic: 'detector', field: 'detector',
      owner: 'institution',
      title: 'A detector result is not proof, and they were told so.',
      taught: 'Seven jurisdictions publish detector skepticism in writing. Maryland calls detectors unreliable and inequitable. Illinois calls a result one data point.',
      says: 'Nothing, while the detector runs inside your LMS by default.',
      fails: 'The multilingual student, who carries the highest false-positive exposure and was never taught to expect it here.',
      position: 'Publish your detector stance before a case arises. State that detector output never stands alone as evidence, that concerns begin with a conversation anchored to the posted level of that assignment, and that a student may contest any AI-related finding.',
      evidence: 'Seven jurisdictions publish caution about detectors and 22 are silent, which this project records as a gap rather than as endorsement. No state guidance in the corpus instructs a teacher to treat a detector result as sufficient evidence of misconduct. Washington and North Carolina describe the response as a conversation, and North Carolina names it a teachable moment.',
      chips: ['MD unreliable and inequitable', 'IL one data point, not proof', 'OK false positives named', 'MA discourage reliance', 'MS English-learner false positives', 'CA not sole evidence', 'UT one of several tools'],
      objection: {
        draft: true,
        q: 'We already have an academic integrity office and the detector is built into the LMS. This is solved.',
        a: [
          'The detector being available is not a position on what it proves. Your integrity office has a process for adjudicating a charge. It does not have a published standard of evidence for this particular charge, and the difference surfaces the first time a multilingual student is flagged and asks what the threshold was.',
          'Seven state education agencies wrote that standard down for teenagers. A faculty member enforcing an unpublished one is exposed personally, and so is the institution on appeal. Publishing the stance costs a paragraph and removes the improvisation.'
        ]
      }
    },
    {
      id: 'appeal',
      topic: 'appeal', field: null,
      owner: 'institution',
      title: 'There is a way to contest the finding.',
      taught: 'An appeal path, including for a grade that AI helped produce.',
      says: 'Appeals exist for grades, and no one has said whether this counts.',
      fails: 'The wrongly accused student, who cannot tell which office to go to.',
      position: 'Name the appeal route for AI-related findings explicitly, and cover AI-assisted grading as well as AI-use allegations. If the existing grade appeal covers it, say so in those words.',
      evidence: 'Alabama and Colorado publish appeal paths. Several states bar AI from serving as the sole basis for consequential judgments about students, including Oklahoma by statute and Utah, which rules that AI "will not be solely responsible for grading."',
      chips: ['AL appeal path', 'CO appeal path', 'OK statutory bar on high-stakes AI', 'UT not solely responsible for grading', 'GA high-stakes table'],
      objection: {
        draft: true,
        q: 'Our existing grade appeal process already covers this.',
        a: [
          'Then the fix is a sentence, not a process. The problem is not that the route is missing. It is that no student can tell whether an AI allegation is a grade dispute, a conduct charge, or both, and the two run on different clocks with different standards.',
          'Students arriving from states that published the route will look for yours, and not finding it reads as a decision rather than an oversight.'
        ]
      }
    }
  ]
}

const content = {
  generatedAt: new Date().toISOString(),
  states,
  frameworks,
  instruments,
  exposure,
  featuredFrameworks: stripApparatus(frameworkSections['If you adopt only three things']),
  overview: {
    scene: stripApparatus(briefSections['The scene']),
    thesis: stripApparatus(briefSections['The thesis, stated precisely']),
    moves: stripApparatus(briefSections['Five moves for the first term'])
  },
  readiness: {
    verdict: stripApparatus(readinessSections['Is Higher Education Ready? The Verdict']),
    faculty: stripApparatus(readinessSections['Guidelines for Faculty']),
    administrators: stripApparatus(readinessSections['Guidelines for Administrators']),
    roadmap: stripApparatus(readinessSections['Institutional Implementation Roadmap']),
    limitations: stripApparatus(readinessSections['Evidence Gaps and Limitations'])
  }
}

const legacyHtml = read(path.join(projectRoot, 'state-ai-policy-field-map.html'))
const pathMatch = legacyHtml.match(/const PATHS = (\{[\s\S]*?\});\nconst SMALL/)
if (!pathMatch) throw new Error('Could not locate embedded map geometry in the legacy HTML')
const mapPaths = JSON.parse(pathMatch[1])

fs.mkdirSync(outputDir, {recursive:true})
fs.writeFileSync(path.join(outputDir, 'content.json'), JSON.stringify(content))
fs.writeFileSync(path.join(outputDir, 'paths.json'), JSON.stringify(mapPaths))
console.log(`Generated ${states.length} state profiles, ${frameworks.length} framework families, and ${Object.keys(mapPaths).length} map paths.`)
