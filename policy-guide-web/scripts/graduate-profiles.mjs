// The graduate profile, per jurisdiction. Two to four plain-language items
// answering the one question a professor actually has, which is what a student
// arriving from this state may already have been taught. Authored by hand from
// the verified jurisdiction analyses in analysis/<State>.md, section
// "Expected Graduate AI Profile".
// Rules: every item traces to the analysis, nothing inside quotation marks is
// ever altered, voluntary guidance is called voluntary, and honest caveats
// stay in. The generator prefers these entries and falls back to the extracted
// ones only when a state is missing.
export const GRADUATE_PROFILES = {
  'Illinois': [
    'The Illinois guidance is voluntary, each district decides for itself, and it only appeared in June 2026. Most students arriving now finished school before their district could act on it.',
    'A student from an adopting district was taught to treat teaching as a human relationship first, with AI as a tool inside that relationship.',
    'Their school likely handled AI honesty through disclosure rather than detection. They may expect to say how they used AI, and may not expect a detector to get the final word.',
    'Some also practiced writing AI prompts as part of their digital citizenship lessons.'
  ],
  'Kansas': [
    'Kansas published no state guidance, so whatever AI rules a student lived under came entirely from their district. There is no shared baseline to assume.',
    'Some students, including in Lawrence, went to school under AI tools that scanned their accounts, and that use is now being litigated in federal court. Their formative AI experience may be monitoring, not learning.'
  ],
  'Maryland': [
    'Maryland is building a required baseline, but it is not finished. The law is enacted, and AI literacy must reach state standards by June 2027. Students arriving before then finished school while districts were still writing their policies.',
    'A student from a district that moved early may already know how to question an AI answer for reliability and bias, and may be used to disclosing when and how they used AI.',
    'Their assignments may already have been redesigned to show their own thinking, because the state framework asks for tasks AI cannot simply complete.',
    'Within a few years Maryland graduates may arrive with a more uniform AI grounding than students from voluntary-guidance states. For now, expect a wide range.'
  ],
  'Montana': [
    'Montana set principles and let each district write its own rules, anchored in existing Montana school law rather than a state permission scale. What a student experienced depends on their district.',
    'Where teachers followed the guidance, students practiced checking AI output for accuracy, bias, and fairness, and met AI inside their regular subjects rather than in a separate course.',
    'Students from tribal communities may hold a clear norm that cultural materials stay under tribal authority and are not fed to or remixed by AI.',
    'Access to tools varies with rural connectivity, so expect some of the widest student-to-student differences in the country.'
  ],
  'Oklahoma': [
    'A student from an adopting school knows a five-level permission scale running from "NO AI Use" to "Full AI Use with Human Oversight", and expects every assignment to carry a level. The scale is voluntary, so not every school taught it.',
    'They may bring the most detailed disclosure habit in the country. From level one up, students submit links to their actual AI chats along with the work.',
    'A newer state law adds firm rules for the classes it covers. AI cannot decide a student’s grades, placement, or discipline, and parents must be told about student-facing AI and can opt their child out.',
    'If their teachers followed the guidance, they were also taught that AI detectors are unreliable.'
  ]
}
