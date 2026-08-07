// The short version, per jurisdiction. Three or four plain-language items that
// explain what the state actually built, for a reader who will not open the
// detailed sections. Authored by hand from the verified jurisdiction analyses.
// Rules: every item traces to the analysis, jargon is explained rather than
// repeated, nothing here asserts a fact the analysis does not carry, and where
// guidance is voluntary the item says so plainly.
export const SHORT_VERSIONS = {
  'Alabama': [
    { lead: 'Alabama wrote a model policy for administrators, not a classroom guide.', text: 'The state template is organized around eight pillars covering strategy, governance, privacy, procurement, and risk, built on the federal NIST risk framework. It reads like a compliance manual a district adopts, not a guide a teacher uses.' },
    { lead: 'Students get a formal way to contest an AI-generated grade.', text: 'The template requires a process for challenging grades produced with AI. Few university grade-appeal policies say anything about this yet.' },
    { lead: 'A computer science credit becomes a graduation requirement, but not soon.', text: 'The requirement starts with the class of 2032, and the state now defines computer science to include AI. A completed course can also satisfy a math or science admission requirement at public universities in the state.' }
  ],
  'Alaska': [
    { lead: 'Alaska built its framework on seven values rather than rules.', text: 'Human-centered design, fair access, transparency, oversight, security, ethical use, and cultural responsiveness. The state deliberately rejects both a ban and a free-for-all.' },
    { lead: 'Cultural responsiveness is a first-class requirement.', text: 'AI tools must affirm rather than diminish Alaska Native cultures, aligned with the state standards for culturally responsive schools. No other state elevates this the same way.' },
    { lead: 'The document discloses that AI helped write it.', text: 'The framework practices the transparency it recommends. It is voluntary, so what a student actually experienced depends on their district.' }
  ],
  'Arizona': [
    { lead: 'A university wrote the state guidance.', text: 'Northern Arizona University’s education institute authored it, with input from a peer-led survey of Arizona high school students.' },
    { lead: 'The students surveyed prefer teachers over AI.', text: 'Arizona students said they want guidance, feedback, and grades to come from a teacher, not from AI. The guidance agrees, holding that grading should rest on a teacher’s judgment.' },
    { lead: 'It warns about detectors and about thinking less.', text: 'AI detectors should never be the sole evidence, and they disproportionately flag non-native English speakers and neurodivergent students. The document also addresses cognitive offloading directly, the risk that students hand their thinking to the tool.' }
  ],
  'Arkansas': [
    { lead: 'The state published no classroom guidance.', text: 'The most-used planning guide in Arkansas schools comes from Virtual Arkansas and was originally written by Michigan Virtual, a nonprofit in another state.' },
    { lead: 'What planning happened used a borrowed maturity rubric.', text: 'Districts that organized their AI work likely used the Michigan-lineage self-assessment, which rates a district as investigating, implementing, or innovating across eight areas.' },
    { lead: 'The state’s AI energy is in workforce strategy.', text: 'Arkansas runs an AI Center of Excellence focused on government services and an AI-ready workforce, which touches schools only at the talent-pipeline level.' }
  ],
  'California': [
    { lead: 'California layered two documents four years apart.', text: 'The 2023 guidance frames learning with AI and learning about AI, and treats students as potential builders of AI, not just users. The 2026 model policy adds roughly two dozen detailed principles.' },
    { lead: 'The model policy reads like a university policy already.', text: 'Disclosure and citation rules, a caution that detector output is not sole evidence, per-assignment discretion for instructors, and a bar on student data training public AI models.' },
    { lead: 'Timing matters.', text: 'The model policy arrived in June 2026, so students entering college in the next few years mostly predate it. Both documents are voluntary.' }
  ],
  'Colorado': [
    { lead: 'Colorado put student voices in the state document.', text: 'The roadmap quotes five students by name of state, including one who practices foreign-language conversation with AI. Its stance is that AI should make learning more human, not less.' },
    { lead: 'It ships two usable checklists.', text: 'An If and How checklist for deciding whether to use AI at all, and a tool-evaluation instrument adapted from ISTE. Both were built to be lifted.' },
    { lead: 'Students can appeal AI decisions, and detectors get no trust.', text: 'The roadmap recommends an appeal process for AI grading and AI-use accusations, and states that current detection tools are already failing to be helpful.' }
  ],
  'Connecticut': [
    { lead: 'Connecticut published a compact orientation, not a rulebook.', text: 'The state commission’s guidance explains what AI is, where it shows up in schools, and how to pick software responsibly. It points to other documents for specifics.' },
    { lead: 'It names social and emotional risk as its own category.', text: 'Alongside academic and legal risk, the state calls out how AI affects student wellbeing, a distinction most states do not draw.' },
    { lead: 'State law ordered a pilot program.', text: 'A 2024 act directed the education department to run an AI education tool pilot in a limited number of schools, with teacher professional development attached.' }
  ],
  'Delaware': [
    { lead: 'Delaware publishes its guidance as web pages, not a PDF.', text: 'The pages reportedly cover understanding AI, integrating it, classroom management, and allowable-use statements, organized around the SAMR integration model.' },
    { lead: 'Allowable-use statements suggest per-context permission language exists.', text: 'That is the shape of a real instrument, but the live pages were not captured, so what students were actually taught cannot be characterized from this project’s records.' }
  ],
  'District of Columbia': [
    { lead: 'DC has no citywide AI framework, but DCPS has enforceable rules.', text: 'The district’s acceptable use policy says AI must supplement rather than substitute for learning, and bans AI impersonation, submitting AI work as original, and AI on tests unless a teacher directs it.' },
    { lead: 'The rules are conduct rules, not teaching.', text: 'They say what DCPS students may not do, not what AI skills they were taught.' },
    { lead: 'Charter students are not covered.', text: 'A large share of DC students attend charter schools outside the DCPS policy, so there is no uniform DC experience. A state-board resolution urging a citywide strategy remains aspirational.' }
  ],
  'Florida': [
    { lead: 'A university leads Florida’s statewide AI effort.', text: 'The K-12 AI task force is coordinated by the University of Florida’s CS Everyone Center, not the state education agency. That is itself a higher-education story.' },
    { lead: 'The task force runs a policy tracker and collects district blueprints.', text: 'Its materials live as working web documents aligned to the externally developed SAFE framework. They were not captured in this project’s records, so the content is not characterized here.' },
    { lead: 'The agency is moving through rulemaking.', text: 'FLDOE is reported to be requiring districts to fold AI into their internet-safety policies, with specifics unverified.' }
  ],
  'Georgia': [
    { lead: 'Georgia ships instruments a faculty member can lift.', text: 'A table separating high-stakes uses from routine ones, where AI may draft a rubric but not do subjective grading or evaluations, and a seven-criterion rubric for vetting AI tools.' },
    { lead: 'The famous traffic light is not in the state documents.', text: 'A red-yellow-green permission system is widely attributed to Georgia, but it appears in neither captured primary document. This project no longer asserts it.' },
    { lead: 'Teacher-preparation programs are in the loop.', text: 'The professional standards commission grounds AI ethics in the educator code of ethics and involves university teacher-prep programs. All of it is voluntary.' }
  ],
  'Hawaii': [
    { lead: 'Hawaii has guidance, but it sits behind an employee login.', text: 'The department issued statewide AI guidance in two parts, for employees and for students. The public page lists topics like accountability, fairness, human oversight, and data protection, but the documents themselves were not retrievable.' },
    { lead: 'A pending bill would put the University of Hawaii in charge of a task force.', text: 'If enacted, that would be a direct higher-education role. Neither the bill nor the guidance content could be confirmed in this project’s records.' }
  ],
  'Idaho': [
    { lead: 'Idaho made AI guidance a legal duty.', text: 'A 2026 statute requires the state education department to build a statewide framework and requires every district and charter school to adopt a policy governing AI use by students and staff.' },
    { lead: 'Students will be assessed on AI understanding.', text: 'The law directs the state to develop AI literacy standards and assessment guidelines, one of the few places student AI knowledge will be formally evaluated.' },
    { lead: 'The substance does not exist yet.', text: 'The statute orders the framework built, so near-term graduates predate any guaranteed baseline. The law’s standing rule is that human judgment remains the final authority.' }
  ],
  'Illinois': [
    { lead: 'Illinois wrote its guidance around people, not technology.', text: 'Four tenets anchor it, starting with the idea that teaching and learning are shaped by human relationships. The law that ordered the guidance requires preserving those relationships in so many words.' },
    { lead: 'A detector result is one data point, not proof.', text: 'The guidance warns against gotcha approaches and false positives, and drew a line between AI supporting evaluation, like drafting rubrics, and AI making high-stakes judgments about people.' },
    { lead: 'It takes struggle seriously.', text: 'The document treats over-reliance and reduced productive struggle as design concerns, asking educators to preserve originality and student voice.' }
  ],
  'Indiana': [
    { lead: 'Indiana states AI literacy as things a student can do.', text: 'The guidance is written as I CAN statements, like properly citing AI use and ethically evaluating AI systems for bias.' },
    { lead: 'The state ran real pilots and published the data.', text: 'An AI platform pilot grant ran in 2023-24 with a public final report, followed by a larger grant program with an educator survey report. A spotlight series shares what Indiana schools, teachers, and students are doing.' },
    { lead: 'Fold AI into existing policy, and do not lean on detectors.', text: 'Indiana advises districts against standalone AI policies and against detection tools as the sole basis for an integrity intervention.' }
  ],
  'Iowa': [
    { lead: 'Iowa published no classroom guidance, then deployed an AI tutor statewide.', text: 'The state spent 3 million dollars to give every elementary school a voice-recognition reading tutor. A digital avatar named Amira listens to students read aloud and intervenes when they struggle.' },
    { lead: 'A graduation requirement is pending, not law.', text: 'Bills would require a semester of computer science and AI starting with the class of 2030-31, covering what AI is, how it works, and its societal impacts.' },
    { lead: 'For now, everything depends on the district.', text: 'There is no state baseline, so an Iowa graduate’s AI rules came from local choices. The pending bills invite input from universities that prepare CS teachers.' }
  ],
  'Kansas': [
    { lead: 'The state agency has said plainly it has no guidance and no plans for any.', text: 'Kansas is a confirmed absence, not an oversight. Whatever rules a Kansas graduate met were invented by their district.' },
    { lead: 'The state’s biggest AI story is a student lawsuit.', text: 'Lawrence students sued their district in federal court over Gaggle, the AI system scanning student accounts, and a judge has already ordered the district to pay their attorney fees over open-records violations.' },
    { lead: 'A university wrote the nearest thing to a framework.', text: 'The University of Kansas presented a PreK-20 responsible AI framework to the state board. It is a university product, not state policy.' }
  ],
  'Kentucky': [
    { lead: 'Kentucky treats AI as one technology among many.', text: 'The state argues that treating AI as exceptional creates unnecessary anxiety, so it folds AI into existing digital-citizenship and technology practice.' },
    { lead: 'Three paradigms describe who is in charge.', text: 'AI-directed, where the learner receives. AI-supported, where the learner collaborates. AI-empowered, where the learner leads. The model comes from academic literature and maps cleanly onto course design.' },
    { lead: 'Students demonstrate AI skills in a state program.', text: 'The Student Technology Leadership Program runs AI-based challenges where students show responsible AI use. The guidance also names universities as partners.' }
  ],
  'Louisiana': [
    { lead: 'Louisiana built a four-tier assignment scale.', text: 'AI-Prohibited, AI-Assisted, AI-Enhanced, and AI-Empowered, each tied to a level of the SAMR integration model. It is a genuine per-assignment permission instrument.' },
    { lead: 'It is the one state that recommends detection tools.', text: 'Where most states warn against AI detectors, Louisiana’s guidance recommends plagiarism-detection tools as part of its integrity strategy. Students from Louisiana may expect detection to be normal.' },
    { lead: 'Governance runs on a four-part cycle.', text: 'Purpose and research, policy and guidance, stakeholder engagement, and evaluation. The guide is voluntary.' }
  ],
  'Maine': [
    { lead: 'Maine’s toolkit is interactive, with memorable frameworks.', text: 'Its banner principle is keep the human in AI. Leaders get ROOTS, covering responsibility, oversight, opportunity, transparency, and sustainability. Decisions get HUMAN, halt, utilize, monitor, authenticate, note.' },
    { lead: 'The mnemonics travel well.', text: 'ROOTS reads naturally as a department or college leadership checklist, and HUMAN is a compact decision heuristic anyone can teach.' },
    { lead: 'Much of the toolkit could not be captured.', text: 'It is a web application rather than a document, so its full examples and any student-use rules are unverified in this project’s records.' }
  ],
  'Maryland': [
    { lead: 'Maryland gave a university a legal job.', text: 'State law provides that Morgan State University or another four-year institution shall support certifying and evaluating the AI tools K-12 schools use. Few states put a university into statute this way.' },
    { lead: 'Every district must have an AI policy and a named AI coordinator.', text: 'The law also creates a statewide AI education collaborative, and AI literacy must reach state standards by mid-2027.' },
    { lead: 'Detectors are called unreliable and inequitable.', text: 'Maryland does not endorse detection tools for integrity. Instead it requires AI-resilient assessment that emphasizes reasoning, analysis, reflection, and process over recall.' }
  ],
  'Massachusetts': [
    { lead: 'Five principles anchor the guidance.', text: 'Data privacy, transparency, bias awareness, human oversight, and academic integrity, written for district leaders and extended into operations like budgeting and procurement.' },
    { lead: 'The advice on detectors is blunt.', text: 'Detection tools are called inaccurate and punitive, and districts are told to discourage them and eliminate reliance on them.' },
    { lead: 'The sharpest idea is the design divide.', text: 'Beyond gaps in access and use, Massachusetts names a third gap, teacher capacity to design meaningful AI-based learning. That gap applies to university faculty at least as much as to teachers.' }
  ],
  'Michigan': [
    { lead: 'Michigan’s instrument is a self-assessment, not a rulebook.', text: 'A rubric rates a district as investigating, implementing, or innovating across eight areas from leadership to student use. A district locates itself and plans its next step.' },
    { lead: 'It is the most directly adoptable instrument for a university.', text: 'Swap district for institution and the rubric works as a campus AI-readiness self-assessment with no other changes.' },
    { lead: 'Its lineage spread to other states.', text: 'Arkansas republished an adapted version, and North Dakota’s checklists follow the same shape. The rubric is voluntary and prescribes no tools or student rules.' }
  ],
  'Minnesota': [
    { lead: 'People stay at the center of decisions.', text: 'Minnesota’s five principles put educators, students, and families in charge, with AI serving their choices rather than making them.' },
    { lead: 'The offloading warning is unusually clear.', text: 'Without boundaries, students may hand AI the tasks they should be practicing, bypassing the repetition that builds foundational skill. Guidelines should distinguish AI as a learning aid from AI as a replacement for thinking.' },
    { lead: 'Bans are rejected, and borrowing is encouraged.', text: 'The state says outright bans shut down learning, and it openly points districts to other states’ work and a statewide portal of shared examples.' }
  ],
  'Mississippi': [
    { lead: 'Mississippi organized AI under its existing digital-learning model.', text: 'Five components, from digital citizenship to formative assessment, each with concrete strategies for students, teachers, and administrators at once.' },
    { lead: 'Doing nothing is named as the real risk.', text: 'The guidance argues banning AI is impractical because AI already runs inside ordinary software, and quotes the view that the biggest risk is inaction.' },
    { lead: 'Detector warnings include English learners.', text: 'The state cautions that detection tools falsely flag English language learners. University partners reviewed the document, but permission rules stay local, so student experience varies by district.' }
  ],
  'Missouri': [
    { lead: 'Missouri wrote a guide for writing policies.', text: 'The document helps a district draft its own AI policy. It offers no classroom permission scale, though it encourages districts to adopt rating scales of their own.' },
    { lead: 'Prompting is taught as a skill, with a named method.', text: 'The Five S model walks students and teachers through setting the scene, being specific, simplifying language, structuring the output, and sharing feedback.' },
    { lead: 'University faculty helped write it.', text: 'The authoring council includes faculty from four Missouri universities. The firmest rule in the document bars AI from standardized testing without state approval.' }
  ],
  'Montana': [
    { lead: 'Montana refused to import anyone’s framework.', text: 'The guidance treats external models as adaptable references, not mandates, on the grounds that they may not fit Montana’s cultural, legal, or rural context.' },
    { lead: 'Tribal sovereignty is built into AI policy.', text: 'Indigenous data sovereignty and the Indian Education for All act are embedded directly, a treatment no other state gives.' },
    { lead: 'Higher education is a named partner.', text: 'The Board of Regents appears in the governance map, and the roadmap assigns the university system, community colleges, and tribal colleges roles in training and research.' }
  ],
  'Nebraska': [
    { lead: 'Nebraska set no state baseline at all.', text: 'No scale, no prohibition list, no shared vocabulary. Whatever a Nebraska graduate learned about AI rules came entirely from their district.' },
    { lead: 'What exists is training, not policy.', text: 'The education department links third-party AI literacy resources and runs an internal self-paced AI course for staff. Neither is a framework for students.' }
  ],
  'Nevada': [
    { lead: 'STELLAR is the framework, and it is an acronym.', text: 'Security, transparency, empowerment, learning, leadership, achievement, and responsible use, each its own chapter, with separate best-practice pages for districts, teachers, parents, and students.' },
    { lead: 'Students get a one-page poster.', text: 'Its first rule teaches disclosure. Use AI as an assistant, not a substitute, and inform your teacher if AI helps generate ideas or content.' },
    { lead: 'Higher education helped write it.', text: 'Faculty from UNLV, the College of Southern Nevada, and Western Nevada College sat on the steering committee. The guidance ties AI into the state’s existing competency-based learning model.' }
  ],
  'New Hampshire': [
    { lead: 'The state endorsed a document it did not write.', text: 'A coalition of school associations produced AI guidance, and the education commissioner endorsed it rather than issuing state guidance. It carries no state force.' },
    { lead: 'The document itself could not be retrieved.', text: 'So whatever common ground New Hampshire graduates share is real but unverifiable from this project’s records. The planning assumption is no state baseline.' }
  ],
  'New Jersey': [
    { lead: 'The state agency offers resources, not rules.', text: 'A curated page of explainers, a webinar, and an innovation grant, explicitly informational. No scale, no prohibition list.' },
    { lead: 'A pending bill would bind universities directly.', text: 'As introduced, it requires every public college and university to offer AI certificate and degree programs, with the state developing model curricula to help. It also requires AI instruction in every K-12 grade. It is pending, not law.' },
    { lead: 'That is the strongest direct higher-education obligation in the country.', text: 'No other state’s pending or enacted education legislation reaches into university degree offerings this way.' }
  ],
  'New Mexico': [
    { lead: 'New Mexico adapted a peer-reviewed scale, nearly verbatim.', text: 'Its five-level AI Assessment Scale runs from no AI to AI exploration, printed with attribution to the published academic source. A faculty member can adopt the same scale from the journal article.' },
    { lead: 'The rest of the toolkit is unusually complete.', text: 'A four-step human-in-the-loop reasoning cycle, a tool-vetting mnemonic called MAZE, and a grade-banded AI literacy progression, all grounded in a human-centric commitment.' },
    { lead: 'It is voluntary.', text: 'Districts adapt it locally, so a New Mexico graduate may or may not have met the scale. Those who did will recognize per-assignment AI levels immediately.' }
  ],
  'New York': [
    { lead: 'New York has issued nothing statewide for K-12.', text: 'The education department has no classroom AI guidance in this project’s records. Policy is entirely legislative and entirely pending.' },
    { lead: 'One pending bill would ban classroom AI before ninth grade.', text: 'With carve-outs for diagnostics and disability interventions. Another would create a working group to produce guidance and a model policy. Neither is enacted.' },
    { lead: 'The real influence is New York City.', text: 'The city district’s own guidance likely shapes more graduates than any state action, but it is web-rendered and could not be verified here.' }
  ],
  'North Carolina': [
    { lead: 'The scale runs from zero to infinity.', text: 'Five levels, from AI Free through AI Exploration, adapted with attribution from the same peer-reviewed source as Oklahoma’s and New Mexico’s scales, with separate teacher and student versions.' },
    { lead: 'Detectors get great caution.', text: 'The guidance says detectors should never be the only factor and flags false positives against non-native English speakers.' },
    { lead: 'The document runs through grade 13.', text: 'North Carolina deliberately scopes its framework past high school into the community-college level, and gates young children away from chatbots entirely.' }
  ],
  'North Dakota': [
    { lead: 'Five checklists instead of one framework.', text: 'Role-based checklists for school leaders, educators, IT, policy, and outreach, plus a compact grade-band guide. The state calls AI the latest in a long list of teaching tools.' },
    { lead: 'The grade bands are blunt.', text: 'Youngest students learn AI is not a real person. Middle grades critique AI output. For high school, the advice is to teach how AI works rather than police its use.' },
    { lead: 'Overreliance is named early.', text: 'The elementary band warns that leaning on AI can short-circuit problem-solving development. No permission scale and no higher-education connection appear.' }
  ],
  'Ohio': [
    { lead: 'Every Ohio district must have an AI policy.', text: 'State law required a model policy by the end of 2025 and requires every district, community school, and STEM school to adopt some AI policy by July 2026. The content is locally decided, but the existence is guaranteed.' },
    { lead: 'The model is fill-in-the-blank.', text: 'Ten sections cover literacy, privacy, procurement, ethics, acceptable use, and integrity. It is a board policy template, not a classroom scale.' },
    { lead: 'Postsecondary institutions are invited to the table.', text: 'The model policy recommends district AI workgroups that include local businesses and postsecondary institutions. A coalition strategy document separately spotlights districts like Butler Tech, where students work with AI-infused robots.' }
  ],
  'Oklahoma': [
    { lead: 'The clearest scale in the country, with receipts.', text: 'Five levels from no AI to full AI use with oversight, each with disclosure requirements. From level one up, students submit links to their AI chats. The scale prints its adaptation from the peer-reviewed AI Assessment Scale.' },
    { lead: 'A real statute sits behind it.', text: 'From 2027-28, Oklahoma law requires classroom AI to be educator-directed with a human in the loop, bars AI as the primary basis for grades, discipline, or placement, and gives parents an opt-out without penalty.' },
    { lead: 'Oklahoma students may arrive documenting their AI use.', text: 'The chat-link habit is the most granular disclosure practice any state teaches. A syllabus that asks for process transparency builds on habits these students already have.' }
  ],
  'Oregon': [
    { lead: 'Equity is the organizing lens.', text: 'The 2023 guidance centers equity implications, and the 2025 policy workbook is built on the three digital divides, access, use, and design.' },
    { lead: 'Educators are the decision makers.', text: 'Oregon frames AI as an electric bike, not a robot vacuum. The rider still pedals and steers. Districts are pointed to external scales, including the peer-reviewed AI Assessment Scale, rather than given a state one.' },
    { lead: 'Detector advice is tolerant with caveats.', text: 'Educators may consider detectors with the understanding that they often detect incorrectly, a softer line than the anti-detector states. A University of Oregon professor is a named contributor.' }
  ],
  'Pennsylvania': [
    { lead: 'Pennsylvania regulates the teachers, not the classroom.', text: 'Its instrument is a 12-credit AI endorsement added to a teaching certificate, offered by universities. It defines what teacher-preparation programs must teach about AI.' },
    { lead: 'Six competency domains, including one rare one.', text: 'The final domain requires candidates to examine how offloading thinking to AI affects attention, memory, and problem solving. Cognitive offloading as a certification competency exists nowhere else in the set.' },
    { lead: 'University faculty built it.', text: 'Millersville, St. Vincent, and Moravian led the advisory committee, and a Penn State process is separately producing statewide guidance recommendations.' }
  ],
  'Puerto Rico': [
    { lead: 'Puerto Rico translated Washington’s scale into Spanish.', text: 'Its five levels, from no AI assistance to AI as co-creator, come from Washington OSPI’s classroom guide under a Creative Commons license, named in the document.' },
    { lead: 'One platform, supervised.', text: 'Students 13 and older use MS Copilot as the single authorized platform, with unsupervised use prohibited. That is more prescriptive than any state’s voluntary guidance.' },
    { lead: 'Students get their own manual.', text: 'A 2026 student-facing guide builds a pedagogical model called SENSE with assessment rubrics, giving students a structured integrity vocabulary.' }
  ],
  'Rhode Island': [
    { lead: 'Rhode Island surveyed its own students before writing.', text: 'The results are in the document. 20% of students were using AI for schoolwork against 6% of educators, and a student is quoted demanding integrity enforcement.' },
    { lead: 'Guidance is organized by age, borrowed openly.', text: 'A grade-band table sets developmentally appropriate uses, and the appendix reproduces North Carolina’s acceptable-use guide with credit.' },
    { lead: 'College readiness is an explicit section.', text: 'The state argues students will perform better in college with AI literacy skills, and that schools failing to teach them are not preparing students adequately. High schoolers must still prove they can perform without AI.' }
  ],
  'South Carolina': [
    { lead: 'No classroom guidance exists.', text: 'What South Carolina published is a career-and-technical curriculum for building AI, with proficiency levels describing deepening technical mastery, not permission rules for using AI on assignments.' },
    { lead: 'Some graduates bring real technical skill.', text: 'Students who took the CTE sequence may arrive able to program models and work with data, a narrow but genuine capability distinct from general AI literacy.' },
    { lead: 'An internal framework is planned.', text: 'The agency is reported to be building one through a 12-week process. Until then, classroom AI norms came from the district.' }
  ],
  'South Dakota': [
    { lead: 'The quietest state in the record.', text: 'The education agency’s site carries no AI content at all. No framework, no guidance, no vocabulary.' },
    { lead: 'A school-boards model policy fills some of the gap.', text: 'The association published a model AI policy in 2024, which many districts likely adopted. Its text is members-only, so what it says cannot be verified here.' }
  ],
  'Tennessee': [
    { lead: 'The legislature put universities on the same clock as schools.', text: 'State law required the University of Tennessee board, the board of regents, and every state university board to adopt AI policies covering students, faculty, and staff by July 2025.' },
    { lead: 'The requirement has teeth.', text: 'Boards must post the policy publicly and file it with legislative committees, and a board that fails must appear at a noncompliance hearing within sixty days.' },
    { lead: 'K-12 actually moved first.', text: 'The same act required school boards to implement AI policies by the 2024-25 school year, a year ahead of the universities, with annual compliance reports.' }
  ],
  'Texas': [
    { lead: 'No state guidance, by observation and by design.', text: 'The education agency has published nothing, and districts operate without state direction. The largest districts, like Houston, wrote their own guidebooks.' },
    { lead: 'The state’s big AI law does not reach education.', text: 'The Texas Responsible AI Governance Act contains no education mandates, and it expressly excludes public universities from the governmental-entity duties it imposes.' },
    { lead: 'A Texas graduate’s rules were local rules.', text: 'Assume nothing about a shared baseline. District variation is the whole story.' }
  ],
  'Utah': [
    { lead: 'AI literacy is now required by law in middle school.', text: 'A 2026 statute added AI literacy, including capabilities and limitations, to the required grade 7 or 8 digital skills course. Every future Utah graduate gets at least one mandated exposure.' },
    { lead: 'The framework rejects both extremes.', text: 'Unrestricted access falls short of protection, and an outright ban impedes workforce skills. Eight principles written in the first person set the middle path.' },
    { lead: 'Over-reliance is a prohibited use.', text: 'Utah lists leaning on AI among prohibited uses and requires a human in the loop for anything that offloads decision making or cognitive effort.' }
  ],
  'Vermont': [
    { lead: 'Vermont takes thinking-for-yourself as its central problem.', text: 'Cognitive offloading gets its own section. Just as a student learning multiplication should not reach for a calculator, some tasks should stay AI-free, and teachers are told they may say so.' },
    { lead: 'Age gates are strict and reasoned.', text: 'The youngest students should not use chatbots at all, and open-ended chatbots wait until middle school. By grade nine, AI becomes a thinking partner the student manages while keeping intellectual ownership.' },
    { lead: 'Every Vermont school runs on Google.', text: 'The guidance notes all schools use Google for Education, where Gemini is built into Classroom and Docs. Exposure is the default environment. Detectors get a flat warning, do not rely on them.' }
  ],
  'Virginia': [
    { lead: 'Virginia wrote one document for K-12 and higher education together.', text: 'Colleges and universities are named as partners from the first page, and the roles section assigns responsibilities to the higher-education council, the community college system, and every public campus leadership team.' },
    { lead: 'Six principles, no scale.', text: 'Do no harm, prioritize integrity, augment rather than replace humans, empower student success, work in partnership, and stay discerning.' },
    { lead: 'Community colleges get a concrete task.', text: 'The guidance assigns the community college system the job of designing micro-credential AI training. Two 2026 statutes build on the guidance, though their text is unverified here.' }
  ],
  'Washington': [
    { lead: 'Five levels, from no AI to co-creator.', text: 'Washington’s student scale runs from no AI assistance through AI-assisted brainstorming and drafting to full co-creation, and an educator matrix shows what each level looks like for essays, video, research, and math.' },
    { lead: 'The strongest anti-detector line in the country.', text: 'Educators are highly recommended not to use detection software, with university research cited on inaccuracy and bias against non-native English speakers.' },
    { lead: 'Human at the start, human at the end.', text: 'The framework’s rule is that AI work begins with human inquiry and ends with human reflection and edits. Puerto Rico adopted this scale wholesale, translating it into Spanish.' }
  ],
  'West Virginia': [
    { lead: 'Principles in the first person.', text: 'Educators commit to I will statements and districts to we will statements, adapted from the national TeachAI toolkit, with a prohibited-use list anchored to existing board policies.' },
    { lead: 'Detectors are out.', text: 'Educators are advised to refrain from programs claiming to detect AI writing, due to reliability concerns.' },
    { lead: 'Higher education sits on the board by design.', text: 'The chancellor who leads both the higher-education commission and the community-college council holds an ex officio seat on the state board that issued this guidance.' }
  ],
  'Wisconsin': [
    { lead: 'One document serves schools and public libraries together.', text: 'Wisconsin wrote its guidance for teachers, librarians, students, and adult library patrons at once. The idea is that learning about AI does not stop at graduation, so the state treats it as a community skill, not just a school subject.' },
    { lead: 'There is no permission scale and no banned list.', text: 'Each district and library sets its own rules, guided by a checklist of policy areas covering integrity, privacy, copyright, equity, and vendor compliance.' },
    { lead: 'Teacher training is the main instrument.', text: 'Five named training pillars take an educator from AI basics through hands-on practice to ongoing adaptation, each tied to Wisconsin professional networks.' },
    { lead: 'Students are taught to question AI output.', text: 'The guidance runs on information and media literacy, taught through a librarian’s lens, and trains students to critically examine what AI produces.' }
  ],
  'Wyoming': [
    { lead: 'A four-level continuum with escalating disclosure.', text: 'AI Free, AI Assisted, AI Enhanced, and AI Empowered. From the assisted level up, students submit a disclosure statement and links to their AI chats with the final product.' },
    { lead: 'The lineage is printed on the page.', text: 'The continuum is adapted from the peer-reviewed AI Assessment Scale, the same source as Oklahoma, New Mexico, and North Carolina, and Wyoming’s attribution even shares Oklahoma’s misspellings, pointing to a common source.' },
    { lead: 'A local college gets a committee seat.', text: 'The recommended district AI-policy committee includes a local college representative, and preparing students for college is a named principle.' }
  ]
}
