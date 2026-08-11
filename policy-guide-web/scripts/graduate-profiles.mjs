// The graduate profile, per jurisdiction. Two to four plain-language items
// answering the one question a professor actually has, which is what a student
// arriving from this state may already have been taught. Authored by hand from
// the verified jurisdiction analyses in analysis/<State>.md, section
// "Expected Graduate AI Profile".
// Rules: every item traces to the analysis, nothing inside quotation marks is
// ever altered, voluntary guidance is called voluntary, and honest caveats
// stay in. Where the project's verification record contradicts the analysis
// file (Georgia's traffic light), the verification record wins. The generator
// prefers these entries and falls back to the extracted ones only when a
// state is missing.
export const GRADUATE_PROFILES = {
  'Alabama': [
    'Alabama has a voluntary policy template, so whether a student lived under AI rules depends on their district. There is no guaranteed baseline for students arriving now.',
    'A student from an adopting district may be used to citing AI-assisted work, being told when a teacher uses AI in class, and having a formal way to contest a grade produced with AI.',
    'A guaranteed floor is coming, but not soon. Starting with the class of 2032, every graduate will have earned a computer science credit, and state law defines computer science to include AI.'
  ],
  'Alaska': [
    'The Alaska framework makes recommendations, not rules, and districts have gone different directions with it. Two Alaska students can arrive with opposite experiences.',
    'A student from an adopting district may be used to citing AI use and to teachers setting AI expectations assignment by assignment. Some were taught about AI’s limits, bias, and disinformation.',
    'Access matters as much as policy. Students from remote regions may have had little device or broadband access to AI tools, so hands-on experience cannot be assumed.'
  ],
  'Arizona': [
    'The Arizona guidance is voluntary, and a bill to require AI instruction was vetoed. Exposure depends on the district, so expect a wide range in any Arizona group.',
    'A student from an adopting district may be used to per-assignment AI expectations, to citing their AI use, and to questioning AI output for bias.',
    'They may also distrust AI detectors, because the guidance calls detectors unreliable and biased against non-native English speakers and neurodivergent students.',
    'Some were taught in so many words that AI is a tool and not a crutch, and that struggling with hard work is part of learning.'
  ],
  'Arkansas': [
    'Arkansas published no state guidance, so a student’s AI rules came entirely from their district. There is no shared baseline to assume.',
    'Districts that did plan mostly used a guide adapted from Michigan’s, which asks a district to rate its own progress rather than set student rules. It says little about what any student was taught.'
  ],
  'California': [
    'Both California documents are voluntary, and the detailed model policy only appeared in June 2026. Most students arriving now finished school before it existed.',
    'A student from an adopting district may know the difference between using AI as a tool and studying how AI works, and may be used to per-assignment permission rules and disclosing their AI use.',
    'The newest guidance also teaches skepticism of AI detectors and asks students to check AI claims against other sources. Students shaped by it arrive with an unusually strong foundation. Expect a wide range around them.'
  ],
  'Colorado': [
    'The Colorado roadmap is voluntary and the state runs on local control, so a student’s AI experience reflects district choices.',
    'A student from an adopting district may be used to a culture of responsible use rather than bans, and to checking AI output instead of trusting it.',
    'Some may expect a formal appeal process for AI grading and AI-use accusations, because the roadmap recommends one.',
    'Tens of thousands of Colorado households lack reliable internet, so some students had little hands-on AI access no matter what their district decided.'
  ],
  'Connecticut': [
    'Connecticut’s state guidance is a short orientation that leaves the specifics to districts and to linked policy documents. A Connecticut student’s actual rules were local.',
    'At most, assume general familiarity with AI risks like bias, inaccuracy, and plagiarism. The linked policies that would say more were not captured in this project’s records.'
  ],
  'Delaware': [
    'Delaware has state guidance that reportedly includes allowed-use statements for AI, which suggests students in adopting districts met real permission rules.',
    'The live pages were not captured in this project’s records, so what Delaware students were actually taught cannot be described here. Confirm rather than infer.'
  ],
  'District of Columbia': [
    'A DCPS graduate lived under conduct rules. Cite AI, do not impersonate anyone with it, and do not use it on tests unless the teacher allows it. The policy says little about what AI skills were taught.',
    'A large share of DC students attend charter schools with their own rules, which this project has not captured. There is no uniform DC experience.'
  ],
  'Florida': [
    'Florida has an active statewide effort, led by a University of Florida center, and the state education department is writing its own rule. What any of it says to students is not captured in this project’s records.',
    'Do not assume a Florida baseline. Confirm against the task force’s live materials before building on one.'
  ],
  'Georgia': [
    'Both Georgia documents are voluntary, so exposure depends on the district.',
    'A student from an adopting district may be used to attributing AI-assisted work, and may have been taught not to use AI on assessments meant to show their own understanding.',
    'A red-yellow-green permission system is widely attributed to Georgia, but it does not appear in the captured state documents. Do not count on students knowing it.'
  ],
  'Hawaii': [
    'Hawaii issued AI guidance for students, but it sits behind an employee login and could not be retrieved. Hawaii students were likely governed by explicit expectations whose content this project cannot describe.',
    'Treat a Hawaii student’s AI schooling as governed but not described. The documents exist, this project just could not open them.'
  ],
  'Idaho': [
    'Idaho made AI guidance a legal duty, but the framework and standards are still being built. Students arriving now finished school before any of it existed.',
    'Once the system is running, possibly as early as the 2027-28 school year, Idaho graduates will have lived under a required district policy and been taught, and even tested, to state AI literacy standards.',
    'For now assume no guaranteed baseline. In a few years Idaho students may arrive with one of the most uniform AI groundings in the country.'
  ],
  'Illinois': [
    'The Illinois guidance is voluntary, each district decides for itself, and it only appeared in June 2026. Most students arriving now finished school before their district could act on it.',
    'A student from an adopting district was taught to treat teaching as a human relationship first, with AI as a tool inside that relationship.',
    'Their school likely handled AI honesty through disclosure rather than detection. They may expect to say how they used AI, and may not expect a detector to get the final word.',
    'Some also practiced writing AI prompts as part of their digital citizenship lessons.'
  ],
  'Indiana': [
    'The Indiana guidance is voluntary, so exposure depends on the district.',
    'A student from an adopting district was taught AI literacy as things they can do, like properly citing AI use and checking AI systems for bias.',
    'They may also expect AI to be framed as support for their own thinking rather than a replacement for it, because the state guidance draws that line explicitly.'
  ],
  'Iowa': [
    'Iowa published no classroom guidance, so a student’s AI rules came entirely from their district.',
    'The youngest Iowa students may have met AI early. The state paid to put a voice-recognition reading tutor in every elementary school.',
    'A pending bill would require a semester of computer science and AI starting with the class of 2030-31. It is not law, so no arriving student is covered by it yet.'
  ],
  'Kansas': [
    'Kansas published no state guidance, so whatever AI rules a student lived under came entirely from their district. There is no shared baseline to assume.',
    'Some students, including in Lawrence, went to school under AI tools that scanned their accounts, and that use is now being litigated in federal court. Their formative AI experience may be monitoring, not learning.'
  ],
  'Kentucky': [
    'The Kentucky guidance is voluntary, so exposure depends on the district.',
    'A student from an adopting district was taught to treat AI as one technology among many, with neither hype nor panic. The state argues that treating AI as exceptional creates anxiety.',
    'They may know three labels for who is leading the work. AI-directed, where the student receives. AI-supported, where they work alongside it. AI-empowered, where they are in charge.',
    'Disclosing formal AI use was the taught habit where the guidance took hold.'
  ],
  'Louisiana': [
    'The Louisiana guide is voluntary, so exposure depends on the district.',
    'A student from an adopting district knows a four-tier assignment scale, from AI-Prohibited up to AI-Empowered, and expects some tasks to be strictly no-AI.',
    'They may also be used to detection software and lockdown browsers during tests. Louisiana is the rare state that recommends detection tools, so its students may expect monitoring that students from other states were taught to distrust.'
  ],
  'Maine': [
    'Maine’s toolkit is a web application rather than a document, and its full content was not captured in this project’s records.',
    'A student from an adopting district may have met the state’s human-centered framing, including the memory aids ROOTS for school leaders and HUMAN for in-the-moment decisions. The specifics of any student rules need confirming.'
  ],
  'Maryland': [
    'Maryland is building a required baseline, but it is not finished. The law is enacted, and AI literacy must reach state standards by June 2027. Students arriving before then finished school while districts were still writing their policies.',
    'A student from a district that moved early may already know how to question an AI answer for reliability and bias, and may be used to disclosing when and how they used AI.',
    'Their assignments may already have been redesigned to show their own thinking, because the state framework asks for tasks AI cannot simply complete.',
    'Within a few years Maryland graduates may arrive with a more uniform AI grounding than students from voluntary-guidance states. For now, expect a wide range.'
  ],
  'Massachusetts': [
    'The Massachusetts guidance is voluntary, so exposure depends on the district.',
    'A student from an adopting district may be used to adding an "AI Used" section to their work, and to schools that teach AI use rather than punish it.',
    'Their district was told to discourage AI detectors outright. The state calls detection tools inaccurate and punitive, so these students may not expect detector-based enforcement at all.'
  ],
  'Michigan': [
    'Michigan’s state tool rates district readiness rather than student behavior, so what a graduate knows depends on how far along their district was.',
    'A student from a district at the top stage used AI to support learning while weighing bias, privacy, and fairness. A student from a district just starting may have seen AI in only a handful of classes.',
    'Michigan is the clearest case of a general rule. A state having guidance tells you little about any one graduate. The district is the real variable.'
  ],
  'Minnesota': [
    'The Minnesota guidance is voluntary, so exposure depends on the district.',
    'A student from an adopting district was taught that AI is a learning aid, not a replacement for thinking, and that some tasks need unaided practice.',
    'Districts were steered away from outright bans, so these students may expect measured access rather than prohibition.'
  ],
  'Mississippi': [
    'Mississippi told students to follow their district’s acceptable use policy, so the rules were local. Expect a local rulebook, not a shared vocabulary.',
    'Where teachers followed the guidance, students learned to cite AI-acquired information and to check the sources AI gives.',
    'Some met AI mainly as a study and accessibility aid, from text-to-speech and translation to personalized study plans.',
    'Integrity checks leaned on process, like drafts and version history, rather than detection software.'
  ],
  'Missouri': [
    'Missouri delegated the rules to districts, so a student’s AI experience came from a local acceptable use policy.',
    'Where teachers followed the guidance, students may have been taught prompt writing as an explicit skill.',
    'The state frames AI literacy around jobs and careers, so these students may see AI first as a workplace competency.',
    'In formal testing, the taught expectation was that AI is off-limits without approval.'
  ],
  'Montana': [
    'Montana set principles and let each district write its own rules, anchored in existing Montana school law rather than a state permission scale. What a student experienced depends on their district.',
    'Where teachers followed the guidance, students practiced checking AI output for accuracy, bias, and fairness, and met AI inside their regular subjects rather than in a separate course.',
    'Students from tribal communities may hold a clear norm that cultural materials stay under tribal authority and are not fed to or remixed by AI.',
    'Access to tools varies with rural connectivity, so expect some of the widest student-to-student differences in the country.'
  ],
  'Nebraska': [
    'Nebraska published no scale, no vocabulary, and no expectations. A student’s AI exposure was set entirely by their district, with no state floor.',
    'Two students from adjacent districts may arrive with opposite experiences, from daily sanctioned AI use to an effective ban. There is nothing at the state level to narrow the range.'
  ],
  'Nevada': [
    'The Nevada guidance is voluntary and runs through districts, so exposure varies.',
    'A student from an adopting district may have used AI inside a mastery-based model, advancing on demonstrated competency, with AI as a self-paced learning aid.',
    'They may have been taught basic prompt craft and a process-over-product view of their own work.',
    'Integrity ran on honor codes and disclosure where districts adopted them, not on a permission scale. Nevada built no leveled vocabulary.'
  ],
  'New Hampshire': [
    'New Hampshire has no verified state guidance. A student’s AI rules were district decisions, possibly influenced by a coalition document this project could not verify.',
    'Some students used Khanmigo, the Khan Academy tutor, through pilots the state publicized. How many schools took part is not documented here.'
  ],
  'New Jersey': [
    'New Jersey students already in the pipeline were governed at the district level. The state offered informal resources, not a framework.',
    'A pending bill would require AI instruction in the standards, folded into computer science and design thinking. It is not enacted, so it covers no arriving student yet.'
  ],
  'New Mexico': [
    'The New Mexico guidance is voluntary and locally adaptable, so exposure is uneven.',
    'A student from an adopting district may know a leveled permission vocabulary, with each assignment carrying an explicit AI level from "No AI" to "AI Exploration".',
    'The high school content goes beyond using AI into how it works, recommending neural networks, building text classifiers, and auditing AI for bias.',
    'Some students ran district AI tools daily while other districts adopted little. Expect the full range in one classroom.'
  ],
  'New York': [
    'New York State published no captured K-12 AI guidance, so the rules came from districts. For a large share of students that means New York City’s.',
    'New York City students may have met guidance split by grade band, but this project could not confirm it from a primary source. Treat any New York baseline as unverified.'
  ],
  'North Carolina': [
    'The North Carolina guidance is voluntary, adopted school system by school system.',
    'A student from an adopting system knows a five-level permission scale, with assignments carrying an explicit level from "AI Free" to "AI Exploration", posted and taught.',
    'Their AI use was scaled by age, with no direct chatbot use before upper elementary and fuller co-creation in high school. Disclosure was modeled as mandatory.',
    'They were taught that AI detectors are unreliable and never decisive.'
  ],
  'North Dakota': [
    'North Dakota’s framework is voluntary and compact, so a student’s rules came from a district policy it encouraged.',
    'Where teachers followed the grade bands, young students learned that AI is not a real person, and older students practiced critiquing AI output for factual errors and bias.',
    'Some are used to sharing their writing process as the integrity practice, rather than facing detection software.'
  ],
  'Ohio': [
    'Every Ohio public district must formally adopt an AI policy from July 2026, so a recent Ohio graduate almost certainly lived under one. What it said still varies by district.',
    'A student from a district that used the state model expects AI rules to appear in the syllabus and in assignment instructions, and was taught to cite AI-assisted work in a standard format.',
    'They may also expect an approved-tools list rather than open choice.',
    'The mandate guarantees a policy exists. It does not guarantee a shared scale or vocabulary.'
  ],
  'Oklahoma': [
    'A student from an adopting school knows a five-level permission scale running from "NO AI Use" to "Full AI Use with Human Oversight", and expects every assignment to carry a level. The scale is voluntary, so not every school taught it.',
    'They may bring the most detailed disclosure habit in the country. From level one up, students submit links to their actual AI chats along with the work.',
    'A newer state law adds firm rules for the classes it covers. AI cannot decide a student’s grades, placement, or discipline, and parents must be told about student-facing AI and can opt their child out.',
    'If their teachers followed the guidance, they were also taught that AI detectors are unreliable.'
  ],
  'Oregon': [
    'Oregon’s two guidance documents are voluntary, so a student’s rules came from an equity-framed district policy rather than a state scale.',
    'Some districts adopted a leveled scale from the options Oregon pointed to, but there is no shared vocabulary to count on.',
    'Detector experience is genuinely mixed. Oregon permits detection tools with cautions, so some students met them and some did not. Do not assume uniform skepticism.'
  ],
  'Pennsylvania': [
    'Pennsylvania regulates teacher preparation, not the classroom. It published no student-use framework, so a student’s AI exposure was a district decision.',
    'The state runs a voluntary AI endorsement for teachers, but it launched in June 2025 and few teachers hold it yet. Its effect on any current graduate is minimal.'
  ],
  'Puerto Rico': [
    'Puerto Rico runs one unified school system, so its graduates may share a more consistent AI baseline than students from any US state.',
    'Students know a five-level scale, from "No AI Assistance" to "AI as Co-Creator", with citation expectations at each level. It was translated from Washington state’s.',
    'From age 13, sanctioned AI use ran through one platform, Microsoft Copilot, and students were told unsupervised AI use is prohibited.',
    'That baseline is platform-specific and supervision-heavy, which may not match a university’s open-tool environment.'
  ],
  'Rhode Island': [
    'The Rhode Island guidance is voluntary and offers grade-band use cases rather than a state scale.',
    'Where a district adopted the North Carolina guide that Rhode Island reproduced, students may know that structure. The vocabulary is North Carolina’s, not a Rhode Island original.',
    'Some students experienced in-person, performance-based assessment designed to show what they can do without AI.'
  ],
  'South Carolina': [
    'South Carolina published no classroom AI guidance, so day-to-day rules were district decisions.',
    'A distinct minority completed the state’s career-and-technical AI course sequence and bring real technical skills, coding in Python or R and building models on large data sets. Do not generalize from them to every South Carolina graduate.'
  ],
  'South Dakota': [
    'South Dakota has no verified state guidance. A school-boards association model policy may have created some consistency between districts, but it could not be retrieved, so its content is unknown.',
    'Treat a South Dakota student’s AI schooling as district-set, with a wide range.'
  ],
  'Tennessee': [
    'Tennessee required every district and charter school to adopt an AI policy by the 2024-25 school year, so a recent Tennessee graduate lived under one. The law mandates that a policy exists, not what it says.',
    'A student from a district using the school-boards association’s model expects an approved-tools list, and their parents were notified about AI use in class.',
    'They were taught the line between cheating with AI and being supported by it before being allowed to use it.'
  ],
  'Texas': [
    'Texas published no state K-12 AI guidance, so the rules came from districts. Large districts like Houston wrote their own guidebooks.',
    'Given the state’s size and district autonomy, two Texas students may arrive with opposite experiences. There is no state baseline to narrow the range.'
  ],
  'Utah': [
    'Utah pairs a voluntary framework with a firm legal floor. Students covered by the state law got a required dose of AI literacy in grade 7 or 8, covering what AI can and cannot do and its ethics.',
    'The framework sorts use into responsible and prohibited rather than levels, so Utah students may lack a leveled vocabulary but carry a strong human-in-charge orientation.',
    'Detectors sit in a middle position. Utah permits them with a warning about false positives, so student experience varies by district.'
  ],
  'Vermont': [
    'The Vermont guidance is voluntary and arrived in January 2026, so most students arriving now finished school before it took hold.',
    'Where it did take hold, AI use was scaled by age, from no chatbots in elementary school to managed use as a thinking partner in high school.',
    'These students may be unusually articulate about when AI helps learning and when it hollows it out, because the guidance teaches that distinction directly.',
    'They were also taught that AI detectors are unreliable and not used in disputes.'
  ],
  'Virginia': [
    'The Virginia guidance is voluntary, and the operative rules lived in division-level honor codes and acceptable use policies. There is no state scale.',
    'Where the guidance took hold, students were taught that AI augments rather than replaces their own work, with integrity framed as a matter of honor.',
    'The state’s case for AI literacy is economic, so Virginia students may see AI first through jobs and the workforce.'
  ],
  'Washington': [
    'The Washington guidance is voluntary, so exposure depends on the district.',
    'A student from an adopting district knows a five-level per-assignment scale, from "No AI Assistance" to "AI as Co-Creator", with a citation habit at the higher levels.',
    'They were taught that AI use begins and ends with human inquiry and reflection.',
    'Suspected misuse was handled by conversation, not software. The state calls detectors unreliable and biased.'
  ],
  'West Virginia': [
    'The West Virginia guidance is voluntary, and it grounds district policies in rules the state board already had. There is no state scale.',
    'A student from an adopting district was taught to cite AI use in a standard format and to watch their own over-reliance.',
    'Detectors were called unreliable and discouraged, so these students may not expect detector-based enforcement.'
  ],
  'Wisconsin': [
    'The Wisconsin guidance is voluntary and written with a librarian’s lens, so a student’s rules came from their district.',
    'Where it took hold, students learned to examine AI output the way they were taught to examine any source. The media-literacy habit may be stronger than average.',
    'Some got hands-on time with teaching tools that show how machine learning works, and met AI across subjects rather than only in computer science.'
  ],
  'Wyoming': [
    'The Wyoming guidance is voluntary, so exposure depends on the district.',
    'A student from an adopting district knows a four-level continuum, from AI FREE up to AI EMPOWERED, with each assignment carrying a level.',
    'Above the no-AI level, they submitted links to their actual AI chats along with the work. Wyoming shares this unusually detailed disclosure habit with Oklahoma.',
    'Higher levels came with a taught expectation that the student stays accountable for what AI produces.'
  ]
}
