# Verification Ledger

Authoritative record of what has been checked, against what, and with what result.
Update this file as verification proceeds. Nothing ships without a row here.

**Provenance values**

| Value | Meaning |
|---|---|
| `primary` | Read in the issuing agency's own document or the enacted bill text. |
| `tracker` | Appears only in a compilation, tracker, or news summary. Not confirmed at source. |
| `unverified` | Not confirmed anywhere, or the source document could not be retrieved. |
| `corrected` | Was wrong. Now fixed against a primary source. |

---

## Verified July 28, 2026

Method: AIBMM `deep_research` (You.com agentic, standard tier) plus seven
`search_web_grounded` calls, cross-checked against the original Anthropic
`web_search` pass. Two independent search indexes.

### Instruments — the ten student-use scales

| State | Claim | Status | Notes |
|---|---|---|---|
| Washington | Five-step scale, no AI → co-creator | **primary** | ~~corrected~~ **REVERSED 2026-07-29.** The original claim was RIGHT. Read from primary text in the v3.0 guidance (p.20) and both standalone companion PDFs (now downloaded): a five-level student AI-permission scale, Level 1 No AI Assistance · Level 2 AI-Assisted Brainstorming · Level 3 AI-Supported Drafting · Level 4 AI-Collaborative Creation · Level 5 AI as Co-Creator. The "four steps of teacher support" note was wrong (conflated OSPI's scale with the generic gradual-release-of-responsibility model). Keep in the scaffolded-scale pattern group. |
| Louisiana | Four tiers AI-Empowered→AI-Prohibited, SAMR-aligned | **corrected** | Two different four-tier models in one document. SAMR table is Foundational/Substitution, Enhanced/Augmentation, Transformative/Modification, Synergistic/Redefinition. The AI-Empowered set is a separate permission model. AI for Education merged them. |
| Puerto Rico | Five steps, no AI → co-creation | **corrected** | Nivel 1 tutor de apoyo básico · 2 co-piloto en la generación de ideas · 3 herramienta de revisión y crítica · 4 colaborador en la síntesis y creación · 5 herramienta avanzada de investigación y análisis profundo. **No zero level.** Requires authorized platforms (MS Copilot). Not currently in `data.js`. |
| Georgia | Red/yellow/green traffic light + prohibition list | **tracker** | Not in accessible primary text. Primary *does* confirm: supportive not high-stakes use; enhance not replace human judgment; transparency; privacy; educators model attribution. |
| Oklahoma | Five levels 0–4 with named labels | **primary** | ~~tracker~~ **UPGRADED 2026-07-30.** The "not machine readable" note was wrong. `resources/Oklahoma/OSDE-AI-Guidance-v2.0.pdf` extracts cleanly via `pdftotext -layout`. Full scale transcribed verbatim from the table on p.17 and the level list on pp.18–19. See the Oklahoma scale block below. |
| Wyoming | Four stages AI FREE → AI EMPOWERED | **tracker** | No WDE primary document retrieved. |
| New Mexico | Five-level AI Assessment Scale; M.A.Z.E. | **tracker** | NMPED PDF not accessed. |
| Vermont | PreK-2 / 3-5 / 6-8 / 9+ gating; when-not-to-use list | **tracker** | AOE PDF returns **404**. Existence and Jan 23 2026 date confirmed. |
| Michigan | Three stages × eight domains rubric | **tracker** | Michigan Virtual rubric PDF returns **404**. Confirmed instead: eleven AI-integration micro-credentials, AI4MI workgroup (Feb 2024). |
| Maine | KEEP THE HUMAN IN AI; five principles; ROOTS | **tracker** | Toolkit existence and Feb 20 2025 release confirmed via Maine DOE news release. Slogans and frameworks not confirmed. |

**Score: 3 of 10 reached primary source. All 3 were wrong as written.**

> **Update 2026-07-29.** That headline no longer holds. A source-download pass reached
> primary text for all ten and reversed Washington. Of the original three, only **two**
> were genuinely wrong (Louisiana's merge, Puerto Rico's missing zero level). Washington
> was correct all along and the July 28 review erred. Georgia, Wyoming, New Mexico, and
> Wisconsin have since also reached primary source. Row-by-row status is being updated
> above; see `resources/<state>/sources.md` for the confirming documents.

## Instrument verification pass, 2026-07-30

Every captured document was text-extracted (67 of 68 succeeded, the exception being
Nevada's ethics statement, which is a scan with no text layer). The eight states
that publish a student-use instrument were then checked line by line against their
own documents.

**Result. Seven of eight confirmed. One is not in the primary text at all, and two
long-running ledger disputes are now settled.**

| State | Site claim | Verdict |
|---|---|---|
| Oklahoma | 5 levels 0–4, AIAS-attributed | **Confirmed**, with one error found and fixed |
| Washington | 5-level OSPI scale plus educator matrix | **Confirmed** |
| Wyoming | 4-level continuum, AIAS-attributed | **Confirmed** |
| New Mexico | 5-level AIAS, verbatim Perkins names | **Confirmed** |
| North Carolina | 5-level "0 to Infinity", AIAS-attributed | **Confirmed** |
| Puerto Rico | 5-level scale translated from Washington | **Confirmed** |
| Louisiana | 4-tier SAMR-aligned | **Confirmed**, and the "two models" claim is dead |
| Georgia | Redlight system | **NOT CONFIRMED. Not in either document.** |

### The three findings that change the record

**1. Georgia's traffic light is not in the primary documents.** Neither
`Leveraging-AI-in-K12-Setting.pdf` nor the GaPSC document contains the words red
light, yellow light, green light, or traffic light. The site's `instrument` field
still asserts "Redlight system" as fact, and `data.js` still calls it "the single
most portable artifact in this entire dataset." **That claim must come down or be
labelled unverified before release.** It is the most quotable thing in the project
and it rests on trackers alone.

**2. Louisiana is one model, not two.** Settled at primary source. The document
presents a single four-tier model in which each tier is explicitly paired with a
SAMR component: AI-Empowered (Redefinition), AI-Enhanced (Modification),
AI-Assisted (Augmentation), AI-Prohibited (Substitution). The July 28 "two separate
four-tier models" correction was wrong, and the Foundational/Synergistic labels do
not appear anywhere in the text. `CLAUDE.md` is stale on this point.

**3. Puerto Rico is a translation of Washington, confirmed.** Nivel 1 Sin
Asistencia de IA through Nivel 5 IA como Cocreador, mapping one to one onto
Washington's Level 1 to Level 5, and cited to OSPI in footnote 24 of the primary
document. The "nivel 1 tutor de apoyo básico" wording recorded on July 28 appears
nowhere in the file.

### Also worth recording

Wyoming's AIAS credit line misspells the authors the same way Oklahoma's does
("Mcvaugh"), and additionally misspells Perkins as "Perkings". Two states copying
the same two misspellings is strong evidence of a shared intermediate source rather
than independent adaptation from the paper.

## Detector pass, 2026-07-30

Checked every state with a captured document, in both directions.

**No false silences.** Not one state that the site records as silent on detectors
turned out to discuss them. That negative result matters, because it means the 22
silent jurisdictions are genuinely silent rather than unread.

**Positive claims confirmed at source for 16 states.** Arizona, California,
Colorado, Illinois, Indiana, Maryland, Massachusetts, Mississippi, New Mexico,
North Carolina, Oklahoma, Oregon, Utah, Vermont, Washington, West Virginia. Several
are quotable verbatim, including Illinois ("one data point, not as definitive proof
of cheating"), North Carolina ("should never be used as the only factor"), and
Vermont ("do not rely on AI auto-detection tools").

**Louisiana confirmed as the sole outlier.** The document actively recommends
plagiarism detection tools and carries a section headed "Tools and Methods for
Detection". Louisiana runs against the national pattern, and that is now
primary-source fact rather than inference.

**One claim does not hold. North Dakota.** The site records a "neutral mention" of
detectors. The five captured checklists raise plagiarism as a question a district
should answer and contain no detector discussion at all. Downgrade or drop it.

**One near miss worth recording.** Utah's claim initially appeared unsupported
because the document says "AI plagiarism checkers" rather than "detectors". The
claim is correct. Vocabulary, not absence.

## Higher-ed hook pass (Tier A), 2026-07-30

**Tennessee is confirmed, and it is stronger than the site says.** Public Chapter
550(b) provides that the University of Tennessee board, the board of regents, and
each state university board **"shall adopt a policy regarding the use of artificial
intelligence technology by students, faculty, and staff for instructional and
assignment purposes"**, implemented no later than July 1 2025. Subsection (d)
additionally requires posting it publicly and submitting it to named legislative
committees, with a noncompliance hearing before the joint government operations
committee within sixty days.

> **A nuance the argument should absorb.** The same act bound K-12 districts
> *earlier*, by the 2024-25 school year, with reporting from July 1 2024. So within
> Tennessee, K-12 was regulated first and higher education followed about a year
> later. The handoff lists "Tennessee bound its public universities before most K-12
> district deadlines" as a counterexample to the thesis. Against Tennessee's own
> K-12 deadline that is not true. It may still hold against other states' deadlines,
> but the sentence needs rewording.

Also confirmed at source: Ohio (postsecondary institutions named as workgroup
representatives), Virginia (colleges and universities named, "Work in partnership"),
Arizona (guidance authored by NAU with an ASU core team member), Montana (Board of
Regents named, dedicated higher-ed section), West Virginia (HEPC and the Community
and Technical College Council named), and Wyoming ("Local College Representative"
appears verbatim in the stakeholder list on p.3).

**Maryland is only partly confirmed.** The guidance references postsecondary
success and is issued by the Division of College and Career Pathways, but the
specific Morgan State tool-certification claim was not located in the captured text.

## Remaining-states pass, 2026-07-30

All 41 jurisdictions with a captured document have now been opened. **39 verified,
2 carry a claim that is not in the document.**

### New Jersey — our own correction was wrong

A4352 section 2(a), verbatim: **"Each public institution of higher education shall
offer certificate and degree programs in artificial intelligence."** The model
curricula in section 2(b) exist to *assist* institutions in meeting that
requirement, not to replace it.

The "Tracker errors to not inherit" table below says MultiState was wrong to report
an offer-degrees mandate and that the bill only develops model curricula. **That
entry is itself wrong and should be struck.** `CLAUDE.md` repeats the same error.
The bill is still pending, not enacted, and that part stands.

### Confirmed at source

| State | Claim verified |
|---|---|
| Michigan | Three stages (Investigating, Implementing, Innovating) across eight domains |
| Kentucky | Three paradigms verbatim: AI-directed, AI-supported, AI-empowered |
| Nevada | Understand / Apply / Integrate / Grow confirmed. STELLAR = Security, Transparency, Empowerment, Learning, Leadership, Achievement, Responsible Use |
| Idaho | SB 1227 §33-7004: "Each local school district and public charter school shall adopt a policy" |
| Pennsylvania | Endorsement guidelines addressed to certificate-granting institutions |
| District of Columbia | DCPS Acceptable Use Policy defines AI and lists prohibited activities |
| Iowa | Both bills name higher-ed institutions offering CS teacher-prep pathways |
| Arkansas | Michigan lineage confirmed in the document's own acknowledgements |
| Minnesota | Guiding principles, explicitly based on the US ED OET report |
| South Carolina | A standards framework of Themes and Standards, correctly not a use scale |

**Michigan's eight domains** are Leadership & Vision; Policy, Ethical & Legal
Considerations; Instructional Framework; Learning Assessments; Professional
Learning; Student Use; Business & Technology Operations; Public Outreach. North
Dakota's five checklists are named along the same lines, and Arkansas credits
Michigan Virtual directly, so three states share one rubric lineage. That is a
second borrowing network alongside the AIAS one and it is worth a mention in the
comparison.

### ~~The two claims that failed~~ — BOTH REVERSED 2026-08-06

**The July 31 sweep was wrong on both, and the original claims are confirmed at
primary source.** The failures were search-pattern failures, not document
failures, and they are recorded here as a caution about automated checking.

| State | Claim | What actually happened |
|---|---|---|
| Missouri | "Five S" prompting | **CONFIRMED.** The DESE guidance presents "The Five "S" Model presented by AI for Education (aiforeducation.io, 2023)" with all five steps verbatim (Set the scene, Be specific, Simplify your language, Structure the output, Share the feedback). The sweep grepped for the plain string `Five S` and the document uses curly quotes around the S. |
| North Dakota | Detector "neutral mention" | **CONFIRMED.** Checklist-Educators, under the plagiarism item, verbatim: "The internet has multiple tools to help educators recognize original or AI generated content." Neither endorsement nor caution, which is exactly a neutral mention. The sweep's keyword net (detector, checker, Turnitin, GPTZero) missed a sentence that describes detection tools without using any detector vocabulary. Also confirmed from `content.md`: the four grade bands K-2, 3-5, 6-8, 9-12, verbatim. |

**The lesson, again.** A grep can only refute a claim phrased in the words the
grep expected. Refutations, like confirmations, need the passage read in
context. Two claims were wrongly published as failed for six days because the
refuting search was trusted the way the original tracker claims never were.

## Texas — retrieved and checked, 2026-07-30

HB 149 (TRAIGA) was retrieved from `capitol.texas.gov` and is now in
`resources/Texas/`. Checked against the site's claim.

**The statute contains zero occurrences of "higher education" and zero of
"school".** There is no express education carve-out clause anywhere in the text.

The site says "TRAIGA carves higher ed OUT of governance duties." That overstates
what the document does. The accurate statement is that **the statute never reaches
education at all**, which is an absence rather than an act of carving. The
"education was deliberately excluded per cosponsor Sen. Royce West" point below is
a reported legislative statement, not statutory text, and should be labelled as
such wherever it appears.

Kansas was reattempted at the same time. The recorded KSDE board-materials URL now
returns an HTML error page rather than a PDF, so the Kansas absence claim still
rests on the KSDE statement already in this ledger.

### Scope of this pass, stated plainly

This checked the **instrument claim only**. The other roughly 150 guidance claims
across the 52 profiles are not yet verified, and 33 jurisdictions have a downloaded
document that nobody has opened. Status per jurisdiction is in `provenance.json`.

---

### Oklahoma — AI Acceptable Use Rating Scale, transcribed from primary source

Verified 2026-07-30 against `resources/Oklahoma/OSDE-AI-Guidance-v2.0.pdf`.
Oklahoma State Department of Education, *Guidance and Considerations for Using
Artificial Intelligence in Oklahoma K-12 Schools*, Version 2.0, July 2025.
Scale table p.17, restated as a list pp.18–19. Text below is quoted from p.17.

| Level | Name | What it permits | Disclosure required |
|---|---|---|---|
| 0 | NO AI Use | "This activity is to be completed entirely without AI assistance. AI MAY NOT be used at any point during the activity. This level ensures that students rely solely on their own knowledge, understanding, and skills." | "No AI disclosure required. May require an academic honesty pledge that AI was not used." |
| 1 | AI-Assisted Idea Generation and Structuring | "No AI content is allowed in the final submission. AI can be used in the activity for brainstorming, creating structures, and generating ideas for improving work." | AI disclosure statement. "Link(s) to AI chat(s) must be submitted with final submission." |
| 2 | AI-Assisted Editing | "No new content can be created using AI. AI can be used to make improvements to the clarity or quality of student-created work to improve the final output." | AI disclosure statement. Link(s) to AI chat(s) must be submitted. |
| 3 | AI for Specified Task Completion | "AI is used to complete certain elements of the task, as specified by the teacher. This level requires critical engagement with AI-generated content and evaluating its output." | "All AI-created content must be cited using a proper citation." Link(s) to AI chat(s) must be submitted. |
| 4 | Full AI Use with Human Oversight | "Students may use AI throughout the activity to support their own work in any way the educator allows. AI should be a 'co-pilot' to enhance human creativity." | "Cite the use of AI using a proper citation." Link(s) to AI chat(s) must be submitted. |

**The finding that matters for the site.** Chat-link submission is required at
**every level from 1 upward**, not only at the top level. Any AI contact at all
obliges the student to hand over the conversation. Earlier drafts of the web
mockup understated this and were corrected on 2026-07-30.

**Attribution, verbatim from p.17.** "Adapted by Dr. Karen Leonard for the
Oklahoma State Department of Education (OSDE) from the work of Dr. Leon Furze,
Dr. Mike Perkins, Dr. Jasper Roe FHEA, & Dr. Jason Mcvaugh." The misspelling of
MacVaugh is in the original. Wyoming carries the same misspelling, which points
to a shared intermediate source rather than independent adaptation from the
paper.

**Detector position, p.19.** AI detection tools "are not always reliable and may
produce false positives, incorrectly flagging human-written work as
AI-generated," and "frequently miss sophisticated AI-generated content." The
document directs educators to baseline writing samples and process-based
assessment instead of detection software.

### The systemic finding

Oklahoma's scale is documented as adapted by Dr. Karen Leonard (OSDE) from
**Perkins, M., Furze, L., Roe, J., & MacVaugh, J. (2024). "The Artificial
Intelligence Assessment Scale (AIAS): A Framework for Ethical Integration of
Generative AI in Educational Assessment."**

New Mexico names its instrument an "AI Assessment Scale" as well.

These states are not converging independently. They are adapting one 2024
academic paper. Build the instruments library on Perkins et al. as the spine and
present state versions as adaptations. Faculty can then cite the peer-reviewed
source directly instead of a state PDF.

### States — Tier 3 absence and status claims

| State | Prior claim | Status | Correction |
|---|---|---|---|
| Florida | No framework | **corrected** | Florida K-12 AI Education Task Force with published guidance, coordinated through the **CS Everyone Center at the University of Florida** (Maya Israel; Roberto Alonso, Miami-Dade board). Has a SAFE Framework and an FL AI Policy Tracker. Separately, FLDOE rulemaking workshop **Aug 5, 2026** to require districts to add AI to internet safety policies. |
| Pennsylvania | Unverified | **corrected** | No statewide classroom framework, confirmed by Penn State July 27 2026. But PDE has an **AI Program Endorsement framework** for teacher certification, PaTTAN runs an AI Toolkit, and PDE sponsors a Penn State listening tour (Mar–Jun 2026) that will produce statewide guidance recommendations. |
| District of Columbia | Unverified | **corrected** | No OSSE guidance. DC State Board passed **SR24-12** (2024) and has a draft AI policy. DCPS Acceptable Use Policy sets expectations on responsible AI use, superseding its 2024 version. |
| Maryland | Guidance pending | **corrected** | Guidance **is published**. Framework "grounded in human judgment, equity, privacy, academic integrity, and continuous improvement." Compliance spans FERPA, COPPA, PPRA, IDEA, ADA, Section 504, COMAR. Built by Richard Kincaid, Division of College and Career Pathways, since fall 2025. Sponsor Sen. Katie Fry Hester. 24 school systems. **Exact 120-day clock start still not public.** |
| Texas | No guidance | **primary** | Confirmed. New: education was **deliberately excluded** from HB 149 per cosponsor Sen. Royce West. Duncanville workflow **confirmed** (JaDorian Richardson, TCEA 2026). |
| Kansas | No guidance | **primary** | KSDE has explicitly stated it has issued none and has no plans to. |
| Nebraska, New Hampshire, South Dakota | No guidance | **unverified** | Still not confirmed either way. |

### Tracker errors to not inherit

| Claim | Source of error | Reality |
|---|---|---|
| ~~NJ requires universities to *offer* AI degree programs~~ | ~~MultiState tracker~~ | **THIS ENTRY IS WRONG. STRUCK 2026-07-30.** A4352 §2(a) reads "Each public institution of higher education shall offer certificate and degree programs in artificial intelligence." The model curricula in §2(b) assist institutions in meeting that requirement. MultiState was right. Still pending, not enacted. |
| Arizona HB 4005 / HB 4040 are live | Various | HB 4005 **vetoed** June 19 2026. HB 4040 **died** in House Rules. |
| Ohio's toolkit is the main artifact | Our own v1 | DEW published an **AI in Education Model Policy Dec 30 2025**. That is the operative document. |
| "36 states have guidance" | Our own v1 | Five values in circulation: 31 (Ballotpedia Jan 2026), 33 (AI for Education current), 34+PR (AI for Education Oct 2025), "more than 30" (NASBE), 35+ (Working Educators Jun 2026). **Publish a sourced range.** |

### ~~Dead or unreadable primary sources~~ — SUPERSEDED 2026-07-30

**This list was wrong.** It recorded failures from the July 28 pass and was never
updated after the source-download pass retrieved the files. A folder-by-folder
audit on 2026-07-30 found the documents present on disk.

| Was recorded as | Actual status on disk |
|---|---|
| Vermont AOE PDF — 404 | **Present.** `AOE-AI-Guidance-for-Education.pdf`, 50pp, plus `Act156-as-enacted.pdf` |
| Michigan Virtual rubric — 404 | **Present.** `MichiganVirtual-AI-Integration-Framework.pdf` |
| Oklahoma OSDE v2.0 — not machine readable | **Present and extractable.** Full scale transcribed above |
| Wisconsin DPI — 404 | **Present.** `WI-DPI-AI-Guidance.docx` |
| Georgia GaDOE — not in indexed text | **Present.** Two documents captured |
| Maine DOE toolkit — no retrievable PDF | **Still absent.** Only `sources.md` |

**The lesson, and the reason the ledger now lives in a file the site reads.** A
document sitting in `resources/` is not a verified claim. Oklahoma's PDF was on
disk from July 29 and the site still carried a wrong disclosure column until
someone opened it on July 30. Retrieval and verification are different states and
must be recorded separately.

### Provenance ledger — `provenance.json`

Authoritative machine-readable status for all 52 jurisdictions, generated
2026-07-30 by auditing `resources/<state>/` and intended to be corrected by hand.
Three values:

| Value | Meaning | Count |
|---|---|---|
| `read` | Someone opened the primary document and checked the site's claims against it | **1** |
| `downloaded` | The document is captured but its claims have not been checked | **40** |
| `none` | No primary document captured | **11** |

`read` is Oklahoma only.

`none` covers Connecticut, Delaware, Florida, Hawaii, Kansas, Maine, Nebraska,
New Hampshire, New York, South Dakota, and Texas. Several of those are correct
absences rather than gaps, since Kansas and Texas published nothing to capture,
but the file does not yet distinguish "nothing exists" from "nothing retrieved."
That distinction needs a human pass.

---

## Not yet verified

### Tier A — higher ed hooks (run first, small and load-bearing)

These eight carry the argument. If Tennessee does not bind universities, the
thesis loses its best evidence.

- [ ] Tennessee Public Chapter 550 — does it actually name universities?
- [ ] Ohio DEW model policy — postsecondary institutions on the district workgroup
- [ ] Maryland SB 720 — $150,000 higher education partnership
- [ ] Pennsylvania — AI endorsement standards reaching teacher prep programs
- [ ] Florida — UF authorship of the state task force guidance
- [ ] New Jersey A.4352 / S.2862 — Secretary of Higher Education, model curricula
- [ ] Arizona HB 4040 — Board of Regents scope (died, but scope matters if revived)
- [ ] Virginia — "work in partnership" naming colleges and universities

### Tier B — the thirty guidance states

Roughly 150 claims. Principle lists, classroom guidance, prohibitions. This is
the largest error surface and the content faculty actually read. Run in batches
of eight to ten so results stay readable.

Batch 1: Alabama, Alaska, Arizona, California, Colorado, Connecticut, Delaware, Hawaii
Batch 2: Illinois, Indiana, Kentucky, Massachusetts, Minnesota, Mississippi, Missouri, Montana
Batch 3: Nevada, New Jersey, North Carolina, North Dakota, Oregon, Rhode Island, Utah, West Virginia
Batch 4: Wisconsin, Virginia, Idaho, Ohio, Tennessee, plus the seven flagged instrument states re-run against primary PDFs

### Tier C — deadlines

Only because the compliance clock is a prominent design element and visibly
wrong dates would undercut the whole page. Nine statutes.

### Tier D — remaining absence claims

Nebraska, New Hampshire, South Dakota.
