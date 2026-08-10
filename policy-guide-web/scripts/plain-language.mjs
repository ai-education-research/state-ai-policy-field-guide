// Plain-language layer for every reader-facing string the site generates.
//
// The corpus was written by and for researchers, so it is dense with agency
// acronyms, statute shorthand, and terms of art. A professor reading a state
// page has no way to decode "LEA", "SAMR", or "PD". This expands them.
//
// CRITICAL: verbatim quotations are never touched. Rewriting inside quotation
// marks would misquote the source document, which is the one thing this project
// cannot do. Anything between " " or “ ” passes through unchanged.

// Proper names that merely contain an abbreviation must survive intact.
const PROTECT = [
  'CS Advisory Council', 'CS Everyone Center', 'CS for All', 'CSforAR',
  'AI for Education', 'Digital Promise', 'Common Sense Media',
]

const TERMS = [
  // an agency abbreviation used as an adjective reads badly when expanded in
  // full, so "ALSDE template" becomes "state template", not "the state
  // education department template"
  [/\b(OSPI|NCDPI|MSDE|ALSDE|WVDE|NMPED|HIDOE|OSDE|NJDOE|NHED|TDOE|KSDE|NYSED|FLDOE|SCDE|ISBE|IDOE|LDOE|DEPR|OSSE|NDE|RIDE|GaDOE|PDE|KDE|TEA|WDE|ADE|DEW|SDE|MDE|ODE|CDE|DESE)\s+(template|guidance|framework|policy|policies|document|documents|toolkit|brief|roadmap|standards|website|page|pages|model|resources?)\b/g, 'state $2'],
  [/\bNo\s+(?:OSPI|NCDPI|MSDE|ALSDE|WVDE|NMPED|HIDOE|OSDE|NJDOE|NHED|TDOE|KSDE|NYSED|FLDOE|SCDE|ISBE|IDOE|LDOE|DEPR|OSSE|NDE|RIDE|GaDOE|PDE|KDE|TEA|WDE|ADE|DEW|SDE|MDE|ODE|CDE|DESE)\b/g, 'No state'],

  // --- education shorthand -------------------------------------------------
  [/\bLEAs\b/g, 'school districts'],
  [/\bLEA\b/g, 'school district'],
  [/\bEPPs\b/g, 'teacher-preparation programs'],
  [/\bEPP\b/g, 'teacher-preparation program'],
  [/\bAUPs\b/g, 'acceptable use policies'],
  [/\bAUP\b/g, 'acceptable use policy'],
  [/\bIEPs\b/g, 'individualized education programs'],
  [/\bIEP\b/g, 'individualized education program'],
  [/\bpersonal identifiable information \(PII\)/gi, 'personal information'],
  [/\bFERPA\/COPPA\b/g, 'the federal student-privacy laws'],
  [/\bPII\b/g, 'personal information'],
  [/\bHITL\b/g, 'a human in the loop'],
  [/\bK-16\b/g, 'school through college'],
  [/\bPreK\b/g, 'prekindergarten'],
  [/\bPK-(\d)/g, 'prekindergarten through grade $1'],
  [/\bCTE\b/g, 'career and technical education'],
  [/\bPD\b/g, 'professional development'],
  [/\bCS\/AI\b/g, 'computer science and AI'],
  [/\bCS\b/g, 'computer science'],
  [/\bK12\b/g, 'K-12'],
  [/\bAI\/CS\b/g, 'AI and computer science'],
  [/\bML\b/g, 'machine learning'],
  [/\bunivs\./g, 'universities'],
  [/\buniv\./g, 'university'],
  [/\beff\./g, 'effective'],
  [/\byr\b/g, 'year'],

  // --- federal laws, named in plain terms ---------------------------------
  [/\bFERPA\b/g, 'the federal student-records privacy law'],
  [/\bCOPPA\b/g, 'the federal children’s online privacy law'],
  [/\bCIPA\b/g, 'the federal school internet-safety law'],
  [/\bPPRA\b/g, 'the federal student-survey privacy law'],
  [/\bIDEA\b/g, 'the federal special-education law'],
  [/\bWCAG\b/g, 'web accessibility standards'],
  [/\bSection 504\b/g, 'the federal disability-access rule'],

  // --- frameworks and models ----------------------------------------------
  [/\bthe SAMR model\b/g, 'a model that sorts technology use from doing old work a new way up to work that would not be possible without it'],
  [/\bSAMR\b/g, 'a model of how far technology changes a task'],
  [/\bthe AIAS\b/g, 'the AI Assessment Scale, a published academic paper'],
  [/\bAIAS\b/g, 'the published AI Assessment Scale'],
  [/\bNIST\b/g, 'a federal cybersecurity standard'],
  [/\bTeachAI\b/g, 'a widely used national template'],
  [/\bISTE\b/g, 'a national education-technology association'],
  [/\bEDSAFE\b/g, 'an outside education-safety group'],
  [/\bMLA\b/g, 'the Modern Language Association'],
  [/\bAPA\b/g, 'American Psychological Association'],

  // --- state agencies: the reader already knows which state they are on ----
  [/\b(OSPI|NCDPI|MSDE|ALSDE|WVDE|NMPED|HIDOE|OSDE|NJDOE|NHED|TDOE|KSDE|NYSED|FLDOE|SCDE|ISBE|IDOE|LDOE|DEPR|OSSE|NDE|RIDE|GaDOE|PDE|KDE|TEA|WDE|ADE|DEW|SDE|MDE|ODE|CDE|DESE)\b/g,
   'the state education department'],
  [/\bDCPS\b/g, 'the DC public school district'],
  [/\bNYC\b/g, 'New York City'],
  [/\bGaPSC\b/g, 'the state teacher-standards commission'],
  [/\bWVBE\b/g, 'the state board of education'],
  [/\b(TSBA|ASBSD|MTSBA|CABE)\b/g, 'the state school-boards association'],
  [/\bSCHEV\b/g, 'the state higher-education council'],
  [/\bVCCS\b/g, 'the Virginia Community College System'],
  [/\bUF\b/g, 'the University of Florida'],
  [/\bNAU\b/g, 'Northern Arizona University'],
  [/\bKU\b/g, 'the University of Kansas'],
  [/\bPSU\b/g, 'Penn State'],
  [/\bUNLV\b/g, 'the University of Nevada, Las Vegas'],
  [/\bUAA\b/g, 'the University of Alaska Anchorage'],
  [/\bCELT\b/g, 'its teaching-and-learning center'],
  [/\bSTLP\b/g, 'the Student Technology Leadership Program'],
  [/\bPCBL\b/g, 'the state’s competency-based learning model'],
  [/\bTRAIGA\b/g, 'the Texas Responsible AI Governance Act'],
  [/\bORC\b/g, 'the Ohio Revised Code'],

  // --- research register ---------------------------------------------------
  [/\bcognitive offloading\b/gi, 'handing your thinking to the tool'],
  [/\bthe corpus\b/gi, 'the documents reviewed'],
  [/\bprovenance\b/gi, 'where a claim came from'],
  [/\bposture\b/gi, 'position'],
  [/\ban? instrument\b/gi, 'a tool'],
  [/\binstruments\b/gi, 'tools'],
]

export function plainLanguage(text) {
  if (!text) return ''
  // shield protected proper names behind placeholders
  const shields = []
  for (const name of PROTECT) {
    if (text.includes(name)) {
      const key = `\u0000${shields.length}\u0000`
      shields.push(name)
      text = text.split(name).join(key)
    }
  }
  const restore = out => shields.reduce((acc, name, i) => acc.split(`\u0000${i}\u0000`).join(name), out)
  // Odd-indexed parts are quoted spans and pass through untouched.
  return restore(text
    .split(/("[^"]*"|“[^”]*”)/g)
    .map((part, i) => {
      if (i % 2 === 1) return part
      let t = part
      for (const [rx, rep] of TERMS) t = t.replace(rx, rep)
      return t
    })
    .join('')
    .replace(/\bthe the\b/g, 'the')
    .replace(/\bvoluntary the state/g, 'voluntary state')
    .replace(/[ \t]{2,}/g, ' ')
    // an expansion at the start of a sentence needs its capital back
    .replace(/(^|[.!?]\s+|\n\s*[-*]\s+|\*\*)([a-z])/g, (m, pre, ch) => pre + ch.toUpperCase())
    )
}
