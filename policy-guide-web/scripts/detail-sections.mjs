// Hand-rewritten detail sections, per jurisdiction. The six sections below the
// short version, rewritten in plain language from analysis/<State>.md.
// Citation convention: name the document in prose (the framework, the law)
// rather than filename and page, keep verbatim quotes exactly as captured in
// the analysis, express force through verbs (the law requires, the framework
// expects), and let the Source Documents block carry provenance. Bracketed
// force tags and page numbers do not appear in reader-facing text.
// Rules: every claim traces to the analysis, nothing inside quotation marks
// is ever altered, and honest caveats stay in. A missing key falls back to
// the extracted text for that section.
export const DETAIL_SECTIONS = {
  'Alabama': {
    policy: `Alabama splits into a voluntary template and a law with a long fuse. The state education department published an AI policy template in June 2024 that districts "are encouraged to adopt and customize". House Bill 329 is enacted law. It defines computer science to include artificial intelligence and requires a computer science credit for graduation, but that requirement starts with the class of 2032.

#### What the state is trying to do

- The template's stated goal is responsible integration that gets the benefit while managing the risk. "AI systems will be used to supplement, not replace, human instruction."
- It is built for administrators, organized around eight pillars. Strategy, governance, data privacy and security, procurement, rollout, competency development, risk management, and utility and effectiveness. The risk work follows the federal AI risk-management framework.
- The law pushes past mere use. "Content should focus on teaching students how to create new technologies, not simply how to use technology."

#### Who it covers

- The template addresses district leadership and defines users broadly, taking in parents and guardians, students, educators, administrators, and management.
- The law applies to all Alabama public K-12 schools.

#### What is allowed and what is not

- The template's default is permissive with conditions. "All users are allowed to use AI systems."
- The conditions are real. Users must say when work came from AI, "cite in their works the AI systems used", and "verify and validate the content before it is submitted". Teachers tell students "when AI system(s) will be in their classrooms and how the AI system(s) work".
- Where law does not authorize it, districts adopting the template promise that AI systems "do not track student's behaviors and are not used for profiling students".
- A model contract clause bars vendors from using district data "for the purpose of training a new AI System to be used in a new product".
- None of this binds statewide. A rule takes force only where a district adopts it.

#### Privacy, fairness, and honesty

- Data privacy and security is one of the eight pillars, tied to federal, state, and local law, with compliance audits and corrective action plans from vendors.
- Honesty runs on disclosure and citation, not detection software.
- Procurement asks vendors to state they "have taken steps to minimize bias" and kept a "human-in-the-loop during model development".
- The template commits that "everyone gets access to the AI System". A deeper equity or accessibility framework is not captured in this project's records.

#### Training, curriculum, and rollout

- Districts develop training so all users understand how AI works, reaching across computer science, mathematics, social studies, and the sciences.
- Teachers who grade with AI must "verify and validate the accuracy and completeness of the grading", and districts must build a process for students to contest a grade an AI system produced.
- The law directs the state education department to approve computer science courses and to "develop and publish a set of minimum standards" for courses with embedded computer science. The AI content of those standards is not yet published.
- The template's governance model is an AI governance committee and a risk register with low, medium, and high risk levels.`,

    offloading: `Alabama's documents are governance and compliance manuals, not teaching guides, so the guard against students handing their thinking to the tool is structural rather than pedagogical.

- The template's repeated principle is that AI systems "supplement, not replace, human instruction".
- Districts adopting it are "committed to using human judgment during the implementation and use of AI systems" and must decide why and when a person stays involved.
- Users must check AI content before submitting or using it, a light guard against accepting AI output uncritically.
- The law's create-not-just-use definition of computer science is the closest thing in statute to protecting higher-order skill.
- A developed treatment of memory, reasoning, and over-reliance, of the kind some states wrote, is not captured in this project's records.`,

    graduate: `Alabama's guaranteed baseline is dated. Until the class of 2032 arrives, what a student knows depends on their district.

- Students arriving now have no guaranteed statewide AI or computer science exposure. The template is voluntary, and how many districts adopted it is not captured in this project's records.
- A student from an adopting district lived under a permissive-with-conditions rulebook. They said when work came from AI, cited the systems they used, and checked AI content before turning it in.
- Their teachers told them when AI would be used in class, and their district owed them a formal way to contest a grade an AI system produced.
- From the class of 2032 onward, every graduate arrives with at least one approved computer science credit, under a definition of computer science that includes artificial intelligence and stresses creating technology rather than just using it.
- Classes arriving in the late 2020s and early 2030s will straddle both worlds inside a single first-year class.`,

    implications: `- Alabama students from adopting districts may arrive expecting a right to contest an algorithmic grade. Most university grade-appeal policies say nothing about AI-assisted assessment, so these students may expect a step their institution has not yet defined.
- The template's vendor clause, barring district data from training a vendor's next product, is a ready-made model for a university's own AI contracts.
- The law already reaches into higher education twice. A completed computer science course can satisfy a math or science freshman-admission requirement at a public in-state university, and higher-education institutions are named as eligible providers of professional learning for K-12 computer science teachers.
- Because the guaranteed baseline starts with the class of 2032, incoming classes will mix students with and without the required credit for several admission cycles.`,

    response: `- **Procurement.** Adopt the template's vendor data-protection language so student and faculty data are contractually barred from training vendor products.
- **Onboarding.** Run an entry AI-literacy check rather than assuming prior instruction. Revisit that assumption once the class of 2032 arrives.
- **Integrity.** Mirror the disclosure-and-citation expectation the template taught, so the college rule is continuous with the school rule. Consider a defined appeals path for AI-assisted grades.
- **Governance.** The eight-pillar structure, risk register, and audit cycle transfer directly to an institutional AI governance committee.
- **Partnership.** Position the institution as a professional-learning provider for K-12 computer science teachers, a role the law names universities for.
- **Keep the center.** Build on the law's create-not-just-use framing and the template's human-judgment rules to keep AI a tool under human direction.`,

    unique: `- A required process for students to contest AI-generated grades. Due process for algorithmic grading is rare among the states reviewed.
- Detailed model contract language barring a vendor from using district data to train a new AI product, with an approval process for district-specific changes.
- An eight-pillar governance architecture built on the federal AI risk-management framework, with a formal risk register and vendor corrective action plans.
- A statute that links K-12 computer science to university admission and names higher-education institutions as teacher-training providers.
- A legal definition of computer science that includes artificial intelligence, effective October 1, 2026, with the graduation requirement starting with the class of 2032.`
  },
  'Alaska': {
    policy: `Alaska works from one document, a framework the state education department presented to the state board in October 2025. It states its own status plainly, offering "recommendations and considerations rather than strict mandates". Nothing in it binds a district.

#### What the state is trying to do

- Seven principles carry the framework. Human-centered, fair access, transparency, oversight, security, ethical use, and cultural responsiveness.
- The stance is a deliberate middle path. The framework holds that "an outright ban impedes skill and career development, while unrestricted access falls short of needed protections".
- The human-centered principle leads. AI must "augment human capabilities, critical thinking, and creativity, never replacing human judgment or decision-making".
- Cultural responsiveness is a first-class principle. AI tools should "affirm, rather than diminish, the diverse cultures of Alaska", in line with the state's standards for culturally responsive schools.

#### Who it covers

- The framework is written as "a flexible resource for school boards, administrators, educators, and students", with each audience assigned a use. Boards for policy, administrators for rollout and teacher training, educators for classroom practice.
- It reaches "all students, teachers, staff, administrators, and third parties who develop, implement, or interact with AI technologies", covering generative AI, tutoring systems, conversational agents, automation, and analytics tools.

#### What is allowed and what is not

- Districts "should move beyond outright bans and instead develop a balanced approach".
- High-stakes automation gets the firmest line in the document. "Robust human oversight is mandatory for any decisions that directly impact students, such as grading or disciplinary actions."
- On data, the framework is blunt. "Explicit prohibitions against entering sensitive student data, PII, or confidential information into publicly accessible AI tools are essential." Its do's and don'ts advise anonymized data in prompts and "never uploading documents containing confidential school or district information".
- The framework tells districts they "can utilize an AI Acceptable Use Scale to build clear expectations for AI use on specific assignments", but the scale's levels are not reproduced in the document.

#### Privacy, fairness, and honesty

- Security is a dedicated principle, covering cybersecurity, protection of personal information, and compliance with the federal student-records privacy law and the federal school internet-safety law.
- Fair access confronts "the digital divide, particularly concerning equitable broadband access and device availability in Alaska's diverse and often remote regions".
- On honesty, the line is direct. "Submitting AI-generated work as original without proper citation is considered plagiarism." Policies should require disclosure and citation.

#### Training, curriculum, and rollout

- Teacher judgment is protected. "Educators must have the autonomy to make professional decisions regarding AI use in their classrooms."
- AI literacy is for everyone, staff and students alike, covering "basic AI principles and applications", recognizing when AI is at work and knowing its limits, and "ethical and responsible AI use, including topics of safety, bias, and disinformation".
- Two named prompting frameworks build accountability into practice. EVERY ends with "You are responsible", and PREP walks through prompt, role, explicit information, and parameters.
- The framework ships with ready templates, a sample board policy, school handbook language, and a family AI question-and-answer sheet, plus a companion website.`,

    offloading: `Alaska's guard against handing thinking to the tool is a principle, not a program.

- The human-centered principle does the main work. "All AI use should begin with human inquiry and culminate in human reflection and insight."
- The EVERY prompting framework builds accountability into everyday practice, ending with "You are responsible".
- Districts are told to watch AI's effect on "student engagement, motivation, cognition, and deep learning", with the honest note that "robust, large-scale independent evidence on AI's effectiveness in education is still limited".
- The framework casts AI as a lever for "problem-solving, innovative design, and creative expression" rather than task completion.
- A developed treatment of memory, over-reliance, and thinking about one's own thinking, of the kind New Mexico wrote, is not in the document.`,

    graduate: `The framework itself shows districts going different directions, so an Alaska student's experience is a district story.

- The document lists divergent district approaches by name, Fairbanks, Mat-Su, Wrangell, and Anchorage, rather than one state standard. Two Alaska students can arrive with opposite experiences.
- A student from an adopting district was expected to disclose and cite AI use, and met AI expectations set assignment by assignment, possibly through an acceptable use scale the framework pointed districts toward.
- Their AI literacy instruction, where it happened, covered AI's limits, safety, bias, and disinformation.
- Some were taught the named prompting frameworks, EVERY and PREP, which end in the student's own responsibility for the output.
- Students from remote regions may have had limited device or broadband access no matter what their district decided, so hands-on experience cannot be assumed.`,

    implications: `- Students from adopting districts experienced AI governed per assignment with disclosure and citation, not banned outright. A silent or blanket-ban syllabus will contrast with that experience.
- Cultural responsiveness is a named principle, so some Alaska students, particularly Alaska Native students, may have been taught to question AI tools for cultural bias, misappropriation, and missing local context. That critical stance deserves support, not surprise.
- The framework was co-written with higher-education voices, including an engineering professor from the University of Alaska Anchorage and the leader of the Alaska Native Science and Engineering Program. In-state institutions are already connected to the effort.
- The equity emphasis means assuming students bring their own AI access will disadvantage rural Alaska students. Sanctioned, no-cost access matters more here than in most states.`,

    response: `- **Access.** Provide institution-sanctioned, no-cost AI tools on reliable infrastructure. Alaska's own framework treats access as an equity precondition.
- **Onboarding.** Check entry AI literacy against the framework's own definition, basic principles, recognizing AI and its limits, and ethical use, since exposure varies widely by district.
- **Assessment.** Set AI permissions per assignment, the same structure Alaska districts were pointed toward, and pair each assignment with disclosure and citation expectations.
- **Integrity.** Run on disclosure and attribution rather than detection, matching what adopting districts taught.
- **Cultural responsiveness.** Extend the framework's principle into course and tool choices, especially for Alaska Native students, and involve community and cultural expertise in AI-integrated course design.
- **Governance.** The seven principles, plus the framework's question of how much human oversight a tool requires and allows, make a ready scaffold for institutional tool vetting.
- **Keep the center.** Carry the human-inquiry-to-human-reflection framing into college work so the habit continues from high school.`,

    unique: `- Cultural responsiveness as a named guiding principle, requiring AI to "affirm, rather than diminish, the diverse cultures of Alaska" and engaging elders and community members. The framework names a specific cultural community rather than gesturing at diversity in the abstract.
- An explicit rejection of both outright bans and unrestricted access.
- Named prompting frameworks, EVERY and PREP, with user accountability built in.
- The framework practices the transparency it preaches. It discloses that it "was drafted with the assistance of artificial intelligence".
- Higher-education co-authorship through the advisory group, including the University of Alaska Anchorage.`
  },
  'Arizona': {
    policy: `Arizona's main document is not a state education agency product. The guidance comes from the Arizona Institute for Education and the Economy at Northern Arizona University, first issued in May 2024 and updated in June 2026, and it says of itself that it "provides information rather than instructions". State education department staff appear among the named reviewers, but no agency framework and no statute governs Arizona classrooms. A bill that would have required AI instruction across the grade span was vetoed by the governor in June 2026.

#### What the state is trying to do

- The guidance is built around "a core value of human agency and oversight at every stage of GenAI use and implementation".
- AI literacy is the central call. It "includes technical understanding, ethical reasoning, and human judgment needed to engage thoughtfully with AI systems".
- The stance is balanced by design, naming both the opportunities and the questions of bias, misinformation, privacy, security, mental well-being, and access. "Both realities deserve our thoughtful attention."
- Instruction anchors to Arizona's own academic standards and the State 48 Graduate Profile.

#### Who it covers

- It is written for Arizona education leaders, with role-based uses. Boards for policy, administrators for rollout and teacher training, educators for classroom practice.
- It covers instruction, operations, and administration, and addresses generative, multimodal, reasoning, and agentic AI.

#### What is allowed and what is not

- No statewide permission or prohibition rules exist. The guidance models district-level approaches instead, pointing to Chandler Unified's AI integration model, Brophy College Preparatory's usage guide, and Maricopa Unified's student-use system.
- On data it is firm. Board policy should "mandate that no personally identifiable information (PII) be entered into non-vetted or public AI platforms".

#### Privacy, fairness, and honesty

- Eight ethical considerations form the document's spine. Bias, false and misleading content, intellectual property, data privacy, equitable access, mental well-being, environmental impact, and cybersecurity.
- The bias chapter is unsparing. "GenAI will never be bias-free."
- Privacy honors "the data authority of the state's 22 sovereign tribal nations", and the intellectual-property chapter treats Indigenous cultural knowledge as governed by community-specific protocols.
- On honesty, the guidance holds that AI detectors "should never be used as the sole source" and disproportionately punish "non-native English speakers and neurodivergent students". Integrity runs on disclosure and citation, not a hunt for violations.
- Equitable access names three gaps, in use, design, and access, and ties tools to the federal special-education law, the federal disability-access rule, and web accessibility standards.

#### Training, curriculum, and rollout

- Five AI-literacy goals map to state standards. Foundational understanding of AI systems, intentional and strategic use, ethical and human-centered use, critical evaluation of AI outputs, and human agency and the human advantage.
- On grading, large language models are called "unreliable for grading", and, citing the Modern Language Association's statement on AI and assessment, "the primary evaluation of student work should rely on a teacher's judgment". Arizona students "tend to prefer teachers, as opposed to AI, to provide guidance, feedback, and grades".
- The early moves for districts are plain. Determine and communicate approved tools, train staff on the guardrails, and clarify expectations for AI use.`,

    offloading: `Arizona gives handing thinking to the tool the most direct treatment of any state document this project reviewed, with published research behind it.

- The guidance argues that "not all cognitive offloading is harmful" and reframes the question as "not whether students offload thinking, but which thinking they offload and why".
- It cites published research on both sides. Students who "complete entire tasks from beginning to end... may retain less understanding", while "purposefully-designed AI tutors may help students manage cognitive load... resulting in higher achievement".
- Its answer is productive friction. Teachers decide "which cognitive muscles to focus on and which ones rest", design tasks where students "explain their reasoning, defend their choices, or apply ideas in performance-based tasks", and use "checkpoints and reflection to make thinking visible".
- Over-reliance is named as a risk in its own right. "Offloading mental tasks can... remove productive struggle that helps learners develop persistence and strengthen problem-solving skills."
- The redesign chapter protects higher-order learning through "authentic creation and problem-solving", portfolios, exhibitions, and performance-based assessment, with teachers as "Designers of Learning, Coaches of Growth, and Expert Guides".`,

    graduate: `No statute and no state mandate stands behind any of this, so an Arizona student's exposure tracks their district's choices.

- The guidance is voluntary and university-authored, and the bill that would have required AI instruction was vetoed. There is no guaranteed baseline.
- A student from an adopting district met per-assignment AI expectations through models like Chandler Unified's, carried a disclosure-and-citation habit, and was taught to evaluate AI output critically, including for bias.
- They may distrust AI detectors, because the guidance calls them unreliable and biased against non-native English speakers and neurodivergent students.
- Some absorbed the offloading vocabulary directly, tool not crutch, productive struggle as part of learning. Student voices quoted in the document itself use that framing.
- The students most shaped by this guidance arrive fluent in the exact vocabulary a well-designed college syllabus uses. Others had little formal exposure. Expect both in one classroom.`,

    implications: `- Students from adopting districts were taught disclosure-based integrity and per-assignment permissions, and were told AI detectors are unreliable and discriminatory. A course that leans on detector reports as primary evidence will collide with that teaching.
- Some Arizona students already distinguish productive from unproductive AI use. Faculty can build on that language rather than introduce it cold.
- The guidance itself is a higher-education product, authored at Northern Arizona University with reviewers from Arizona State University and the state education department. Arizona higher education is already a producer of K-12 AI guidance, and institutions can align entry expectations to the five literacy goals.
- Students may expect accessible, sanctioned AI access, while rural and tribal students may have had constrained access despite the guidance's aims.
- Some students, particularly from the state's 22 sovereign tribal nations, were taught that cultural knowledge carries community-specific use protocols. Institutions handling Indigenous materials should expect and respect that stance.`,

    response: `- **Integrity.** Move from detector-based enforcement to disclosure and process, and set AI permissions per assignment, continuous with the district models students saw.
- **Assessment.** Specify which cognitive work students must do unaided and where AI may assist, and favor performance-based tasks, portfolios, and defending one's reasoning.
- **Access.** Provide sanctioned, accessible AI tools so access does not depend on ability to pay.
- **Onboarding.** Use the five AI-literacy goals as an entry rubric and a faculty-development scaffold, since incoming students may already have met them.
- **Governance.** The human-agency imperative and the eight-consideration ethics map transfer directly to institutional AI governance, including tribal data sovereignty where relevant.
- **Keep the center.** Import the document's central question, which thinking students offload and why, into course design so AI supports targeted skills while core reasoning stays with the student.`,

    unique: `- An explicit, research-cited treatment of handing thinking to the tool, rare depth for a state-level document, with a worked model of productive friction.
- Five AI-literacy goals mapped item by item to state academic standards and the State 48 Graduate Profile's essential skills.
- An ethics chapter that covers tribal data sovereignty across 22 sovereign nations, environmental impact with Arizona data-center specifics, and mental well-being, including the note that "72% of teens have used AI companions".
- University authorship. The state's working guidance comes from Northern Arizona University, not the state education department.
- A direct anti-detector stance with an equity rationale, and a plain statement that large language models are "unreliable for grading".`
  },
  'Arkansas': {
    policy: `Arkansas published no state K-12 AI classroom guidance. The most education-relevant document is not a state product. Virtual Arkansas, a virtual-education provider, adapted a district planning guide from Michigan Virtual, saying openly that "An earlier version of this publication was authored by our good friends at Michigan Virtual and has been modified for this release".

The guide reproduces Michigan's three-stage maturity rubric, investigating, implementing, and innovating, across the same eight planning domains. It helps a district rate its own progress. It sets no student rules, and it is not state policy.

The state's AI energy sits elsewhere. An Arkansas AI and Analytics Center of Excellence delivered a government-wide strategy to the governor with three objectives, "Protect Arkansans and Their Data", "Improve Government Services", and "Prepare Arkansas for the AI Economy". It is a workforce and government-services plan, not classroom guidance.`,

    offloading: `Nothing at the state level addresses how students keep thinking for themselves. The planning guide districts may have used measures district readiness, not student habits, and it is a third-party adaptation of Michigan's.`,

    graduate: `With no state guidance, an Arkansas student's AI schooling was set entirely by their district.

- There is no shared baseline to assume. Exposure varies district to district, and this project's records say nothing about how any one district ruled.
- Districts that planned with the Virtual Arkansas guide followed the Michigan-lineage maturity model, so their students' experience resembles Michigan's stage-dependent picture. The guide rates district progress and says little about what any student was taught.`,

    implications: `- Arkansas students will range widely in AI literacy and governance experience. An institution should set its own common entry baseline rather than assume prior instruction.
- Because the state's main planning resource is a Michigan adaptation, Arkansas and Michigan graduates from guide-using districts may share the same maturity-model framing. Useful if an institution enrolls from both states.
- The state's actual AI strategy is about workforce and government services, including a recommendation to build employer-aligned AI talent pipelines. Higher education's tie-in here is workforce development, not classroom preparation.`,

    response: `- **Onboarding.** Run an explicit AI-literacy orientation and assume wide variation among Arkansas students.
- **Integrity.** Set clear per-assignment AI permissions, since Arkansas students are unlikely to arrive with a shared AI-use framework.
- **Governance.** If a maturity self-assessment is useful, the Michigan-lineage rubric Arkansas districts may have used is a ready model.
- **Workforce.** Engage the state's talent-pipeline agenda through the AI Center of Excellence, the state's real higher-education-adjacent hook.`,

    unique: `- A third-party planning guide stands in for state guidance, the same Michigan rubric adapted for Arkansas. A clear case of one state borrowing another state's framework.
- The state's AI effort lives in a government-wide center of excellence, with data governance, a proposed chief AI officer, and workforce plans, rather than in education guidance.
- The absence itself. No state education department K-12 classroom AI guidance exists in this project's records.`
  },
  'California': {
    policy: `California layers two voluntary documents. The 2023 guidance, Learning with AI, Learning about AI, frames the field. The June 2026 model policy, developed with a state working group under Senate Bill 1288, is one of the most detailed model AI policies any state has produced. Both carry the statutory disclaimer that "compliance with any information or guidance in this document is not mandatory". Districts and charter schools may adopt and customize them, or not.

#### What the state is trying to do

- Human relationships come first. "AI or any other technology cannot replace the value of a student's relationship with a caring educator", and "AI must be used to support human-centered learning environments, not replace them".
- The 2023 guidance sets twin goals, learning with AI and learning about AI, and treats students as potential AI creators, not just consumers.
- The model policy treats AI literacy as a core academic competency for every student and educator, tied to the state education code.
- Equity and the digital divide run through both documents, tied to the state's existing digital-divide and antibias work.

#### Who it covers

- The 2023 guidance addresses educators, administrators, and education leaders.
- The model policy is written for a district or charter school governing board to adopt, covering students, educators, and staff.

#### What is allowed and what is not

- AI "should not substitute for critical thinking or required academic work", and tools must be authorized by the district or charter school.
- Teachers hold the per-assignment call. "Permitted AI use may vary from one assignment to another."
- The model policy states that "submitting AI-generated content without clear disclosure constitutes plagiarism and academic dishonesty".
- Safety rules bar using AI to "harm individuals, encourage self-harm, or cause harm to the school community".
- Students and educators "should not enter education records or other confidential information into AI tools unless expressly authorized", and personal AI accounts stay out of student data and student work.

#### Privacy, fairness, and honesty

- California rejects the detector shortcut. Detection software "should not be used as the sole basis for disciplinary action or grade penalty". Authorship questions rest on "educator evaluation of student engagement, alternative assessment, and documented evidence of authorship", with "clear criteria for rebutting claims" available to students and parents.
- Privacy is built in by design. Tools should "protect student data, prohibit its use for training public AI models or advertising, and maintain strong security safeguards", in compliance with the federal student-records privacy law and California's own education code.
- Parents hold review rights. Guardians "should have the right to request timely human review of any AI-generated outputs that inform decisions about their child", and autonomous AI tools that interact with students require annual informed consent.
- Vendors face pre-deployment evaluation for educational value, bias, and equity, plus enforceable contract terms covering breach notification, audit rights, and data deletion.

#### Training, curriculum, and rollout

- Students "should be informed when their work will be submitted to AI to support grading or feedback", and "the educator of record retains sole authority to determine final grades".
- Curriculum and assessment redesign should emphasize "human thinking, process, equity, and insight... over easily AI-generated products", with AI concepts threaded through every grade from transitional kindergarten to grade twelve.
- AI literacy is named in concrete skills, "claim extraction, confidence calibration, source triangulation, and mismatch detection", plus analysis of misinformation, disinformation, and malinformation.
- The 2023 guidance builds curriculum on the state's computer science standards and the five big ideas of AI, and the model policy requires "ongoing professional development and user training addressing AI literacy, data fluency, and learning science".`,

    offloading: `California never writes a single named section on handing thinking to the tool, but the guard runs through both documents.

- The 2023 guidance urges educators and students "to leverage AI to foster and not inhibit critical thinking".
- The model policy's acceptable-use line holds that AI "should not substitute for critical thinking or required academic work".
- Redesign is the main defense. Curriculum and assessment should emphasize "human thinking, process, equity, and insight... over easily AI-generated products".
- Teachers "should model the difference between using AI for efficiency and using AI to support learning, giving students opportunities to practice and demonstrate both".
- The 2023 guidance goes one step further, framing students as "becoming creators and innovators" so AI is an object of study, not a shortcut.`,

    graduate: `Timing matters as much as adoption in California. The detailed model policy appeared June 25, 2026, so the students it shaped are still years from a college classroom.

- Most students arriving now were governed, if at all, by the 2023 guidance as their district chose to apply it. Both documents are voluntary, and adoption is not captured in this project's records.
- A student from an adopting district may know the five big ideas of AI and the difference between learning with AI and learning about AI, and may have met AI as something to build and study under the state's computer science standards.
- Students shaped by the model policy carry per-assignment permission habits, disclosure norms, and a taught skepticism of AI detectors.
- The most California-shaped students arrive fluent in the exact checking skills the policy names, "claim extraction, confidence calibration, source triangulation, and mismatch detection". That is an unusually strong foundation. Expect a wide range around it.`,

    implications: `- California's model policy anticipates the debates a university is having now. Students from adopting districts were taught that detectors are not sole evidence and that authorship questions rest on process and engagement. A detector-first course will be out of step with that teaching.
- These students may expect per-assignment AI permission clarity and disclosure norms. A silent syllabus will contrast with that.
- The 2023 guidance already connected K-12 and college, including a webinar with educators from both. California higher education is positioned as a partner in the pipeline, not a bystander.
- Students may expect privacy by design, meaning their data will not train public models. An institution should confirm its sanctioned tools meet that expectation.
- A separate state law recorded in this project's sources, described as a "natural person" law taking effect January 2027, is not a ban on classroom AI. Its exact scope is not captured in this project's records, so do not overstate it.`,

    response: `- **Integrity.** Follow the state's lead. Do not treat detector output as sole evidence, rely on process, engagement, and authorship evidence, and give students clear criteria for rebutting a claim.
- **Assessment.** Set AI permissions per assignment and redesign tasks to favor human process over easily generated products.
- **Onboarding.** Use California's named literacy skills as an entry rubric, since some students will already have them.
- **Privacy.** Provide sanctioned tools that bar student data from training public models, matching the expectation these students bring.
- **Governance.** The model policy's principles, from vendor safeguards to pre-deployment evaluation, transfer nearly whole to an institutional AI policy.
- **Keep the center.** Teach the difference between using AI for efficiency and using AI to support learning, and keep AI a subject of study, not a shortcut.`,

    unique: `- A two-layer approach, an early conceptual guidance from 2023 plus a detailed 2026 model policy written under state legislation. Few states have both.
- An explicit rule that AI detectors are never sole evidence, paired with rebuttal criteria for students and parents.
- A parent's right to timely human review of AI outputs that inform decisions about their child, and annual informed consent before autonomous AI tools interact with students.
- AI literacy treated as a core academic competency tied to the state education code, named in concrete, checkable skills.
- A students-as-creators framing built on the five big ideas of AI, with AI concepts threaded through every grade.`
  },
  'Colorado': {
    policy: `Colorado works from one document, the August 2024 roadmap for AI in K-12 education. The Colorado Education Initiative, a nonprofit, produced it with the state education department, with funding from the Gill Foundation. It is voluntary. Colorado is a strong local-control state, and the roadmap itself notes the limits on "the state department of education's ability to dictate local technology policies". It is "designed to support our local school districts as they develop their own approaches". Nothing in it is a mandate.

#### What the state is trying to do

- AI should deepen thinking, not shortcut it. The roadmap wants AI to "support students to build deeper critical thinking skills, not just stop at the easily accessible answer".
- Four skills anchor the vision. Critical thinking, creativity, communication, and collaboration are "core to a student navigating an AI-infused future".
- Equity across a largely rural state, framed through three digital divides.
- Principles over policy, on the argument that the tools change faster than rules can.

#### Who it covers

- Written for K-12 public education and addressed to "educators, stakeholders, and community members", with role-based recommendations for districts and statewide organizations.
- More than 100 contributors across five working groups shaped it, along with a student advisory panel.
- Higher education helped govern the work. The University of Colorado Denver and the CU Boulder Institute of Cognitive Science sit on the steering committee.

#### What is allowed and what is not

- The framing is deliberately positive. Districts should "focus on a list of 'yes's' and 'do's' rather than 'no's' and 'don'ts'".
- Districts should "define specific use cases for both students and staff" that "delineate permissible, cautious, and prohibited uses of AI", and disclose when AI shapes critical decisions.
- The roadmap warns against locking students out. "Limit the use of blocking tools, as students will likely use AI at home, which could inadvertently deepen the access divide."
- There is no statewide prohibition list. Bans are local decisions made inside acceptable use and conduct policies.

#### Privacy, fairness, and honesty

- The roadmap discourages AI detectors. "Current AI detection tools are already failing to be helpful to districts as AI 'learns' and improves. A more effective approach is to establish guidelines for the ethical use of AI and integrate these into existing conduct policies."
- It recommends an appeal process "allowing students to contest AI grading and accusations of AI use". Few states offer students that protection.
- On honesty, it asks schools to fold AI into existing definitions of plagiarism and responsible use, "eliminating the need for a separate AI plagiarism policy".
- Colorado's "current Student Data Privacy rules are among the most protective in the nation", and the roadmap recommends regular review of policies and vendor contracts.
- Three digital divides get named. Access to devices and connectivity, teacher capacity to design technology-rich learning, and whether students use technology to create or only to consume.
- On purchasing, districts should "avoid long-term vendor contracts and instead opt for pilot windows", with student feedback used to guard against bias.
- Accessibility runs through AI assistive tools like screen readers and text-to-speech, aligned with designing lessons that work for all learners.

#### Training, curriculum, and rollout

- AI literacy is defined through a widely used national template and illustrated with national examples, including the AI4K12 Five Big Ideas and a Georgia district's AI learning framework.
- The roadmap recommends updating "local graduation requirements to include AI literacy, data literacy, and ethical AI use", building on the state's computer science standards.
- A balanced capability map lists eight ways AI can support students, seven ways it can support teachers, and five areas "where AI falls short", including emotional and cultural nuance and the need for human oversight.
- Two ready-to-use tools come with it. The If and How Checklist, "a guide to 'if and how' for AI usage in the classroom", and an AI Resource Evaluation Tool built on one from a national education-technology association.
- Teachers get dedicated time and coaching to "experiment with AI in low-risk ways", with ongoing training as tools evolve.
- Rollout advice includes reviewing AI plans twice a year, auditing device access, and building task forces that include students.`,

    offloading: `Colorado's roadmap puts protecting student thinking at the center of its case for AI.

- The core commitment is explicit. AI should "support students to build deeper critical thinking skills, not just stop at the easily accessible answer".
- Critical thinking, creativity, communication, and collaboration are held up as the durable human skills AI must reinforce, not replace.
- Reflection is a taught habit. Schools should "Teach students to leverage AI productively and ethically, including through reflection on their own academic skill development", and should "teach students and educators to critically evaluate AI outputs".
- A guiding tenet called "First Draft Thinking" encourages safe experimentation while protecting personal information and guarding against bias.
- The roadmap frames passive use as its own equity problem. Students should use technology "to analyze, build, produce, and create", not "solely as passive consumers".
- No single section gathers this up. The position is real but spread across the document.`,

    graduate: `The roadmap is voluntary and Colorado leaves technology policy to its districts, so any one graduate's experience is a district story.

- A student from an adopting district was grounded in the four skills the roadmap centers, critical thinking, creativity, communication, and collaboration, and met AI under responsible-use expectations rather than a ban.
- They may carry a taught habit of verifying AI output and reflecting on their own skill development, because the roadmap makes both explicit recommendations.
- They may expect a formal way to contest an AI-produced grade or an accusation of AI use, since the roadmap recommends districts build one.
- The roadmap also recommends folding AI literacy, data literacy, and ethical AI use into local graduation requirements, so some graduates met AI as a named part of finishing school.
- Access was not even. The roadmap counts 64,878 Colorado households without reliable internet, so some students had little hands-on AI time no matter what their district decided.`,

    implications: `- Students from adopting districts were taught that AI detectors do not work well and that concerns get handled through guidelines and conduct policy, not detection software. A course that leans on detector reports will collide with that experience.
- The recommended appeal process for AI grading and AI-use accusations is more protective than most university integrity processes. Colorado students may expect a defined way to contest an accusation, so an institution should decide and state how it handles one.
- Colorado wrote higher education into the roadmap's governance and recommends AI literacy in graduation requirements. In-state institutions are positioned to align entry expectations with that pipeline.
- Some Colorado students experienced AI as encouraged with guardrails, a culture of yes's and do's. Courses that state their AI expectations plainly will meet those students where they are.`,

    response: `- **Integrity.** Follow Colorado's lead. Do not rely on AI detectors, define AI expectations inside existing integrity policy rather than a separate AI plagiarism rule, and give students an explicit way to contest an AI-use accusation.
- **Assessment.** Define permissible, cautious, and prohibited AI uses per context, and design tasks that reward analysis, building, and creation over passive completion.
- **Access.** Provide sanctioned, no-cost AI tools and avoid over-blocking. The rural access gap the roadmap documents does not end at high school graduation.
- **Onboarding.** The four-skills framing, the If and How Checklist, and the AI Resource Evaluation Tool are ready scaffolds for student orientation and for vetting the institution's own tools.
- **Governance.** Borrow the roadmap's tenets. Transparency, a positive approach, regular review, principles over policy, and pilot windows instead of long vendor contracts.
- **Keep the center.** Deeper critical thinking, not the easily accessible answer. Carrying that framing forward, along with reflection on skill development, gives students continuity from high school to college.`,

    unique: `- A recommended student appeal process for AI grading and for accusations of AI use, a notably student-protective idea few states match.
- Two ready-to-use tools, the If and How Checklist and an AI Resource Evaluation Tool based on one from a national education-technology association.
- A stated positive approach, yes's and do's rather than no's and don'ts, paired with a principles-over-policy stance.
- A three-part equity model covering access, teaching design, and passive versus creative use, with an explicit push against over-blocking.
- Student voice built in, through an advisory panel and student quotes, and higher education built into governance through two University of Colorado campuses.
- A clear position against AI detection tools.`
  },
  'Connecticut': {
    policy: `Connecticut's guidance is a single web page from the Connecticut Commission for Educational Technology, an advisory body, rather than a framework from the state education agency. Nothing on it is a mandate. It orients readers rather than prescribing practice.

The page sorts AI into six categories and maps thirteen places it shows up in schools, from "Classroom Instruction" to "Facility Management" and "Teacher Evaluation". It offers five best practices for choosing and using software. Platform selection, privacy and data collection, training and support, community engagement and input, and incident reporting.

It also names the risks schools should weigh. Bias, inaccuracy, intellectual property and plagiarism, legal risk, social and emotional risk, and equity of access. The captured heading said five risk categories but six items were transcribed, so the exact list needs checking against the live page.

For the specifics, the page points outward. A sample school-board policy from the state school-boards association and the state's Responsible AI Policy Framework carry the substance, and neither was captured in this project's records. The page itself contains no student permission scale, no grade-band progression, and no stated position on AI detection tools.`,

    offloading: `The captured page does not take up the risk that students hand their thinking to the tool.

- The nearest content is the "Social and Emotional" and inaccuracy risk categories, which imply reading AI output critically.
- That implies a skeptical stance but stops short of a plan for protecting how students learn. If Connecticut has one, it lives in the linked documents this project did not capture.`,

    graduate: `Connecticut set an orientation, not a rulebook, so what any graduate was actually taught is a district story.

- Unlike students from states with permission scales, Connecticut students are unlikely to arrive with a shared per-assignment AI vocabulary. The state built none.
- At most, expect general familiarity with the risks the page names, bias, inaccuracy, plagiarism, social and emotional effects, and unequal access.
- Where a district adopted the linked school-boards sample policy or the state's Responsible AI Policy Framework, students may have met disclosure and responsible-use expectations. Those documents were not captured in this project's records, so that cannot be confirmed here.`,

    implications: `- Connecticut names "Social and Emotional" risk as its own category, separate from academic honesty. Some Connecticut students were taught to think about AI's effect on wellbeing, not only on integrity. An institution can connect its AI onboarding to wellbeing and counseling supports rather than framing AI purely as an integrity matter.
- Because the state baseline is light and carries no shared tools, incoming Connecticut students are less likely than students from scale-carrying states to arrive with per-assignment AI habits. A course should teach its AI expectations explicitly rather than assume prior structure.
- Connecticut institutions can reference the same state Responsible AI Policy Framework and school-boards sample policy that districts were pointed to, which makes governance alignment with the K-12 pipeline easier.`,

    response: `- **Onboarding.** Run an explicit AI-literacy orientation. Assume no prior structure.
- **Assessment.** Give every assignment a clear AI-permission statement, since Connecticut students are unlikely to arrive with that vocabulary.
- **Wellbeing.** Build on the state's social and emotional framing by linking AI guidance to student wellbeing resources.
- **Governance.** Reference the state's Responsible AI Policy Framework and the school-boards sample policy for continuity with what Connecticut districts were given.
- **Access.** Provide sanctioned tools. Equity of access is a risk the state itself names.
- **Keep the center.** The state page offers no model for protecting how students learn, so the institution supplies one, with explicit expectations for productive struggle and defending one's own reasoning.`,

    unique: `- "Social and Emotional" as a named, distinct AI risk category, one of the few state documents to separate student emotional risk from academic-integrity risk.
- Issued by an advisory commission for educational technology rather than the state education agency.
- A delegation-by-reference model. The substance lives in linked documents, a school-boards sample policy and a state framework, rather than on the page itself.`
  },
  'Delaware': {
    policy: `Delaware has statewide guidance, "Generative AI in Delaware Education," announced August 7, 2024 by the state education department and the Delaware Council on Educational Technology. It is delivered as a set of linked web pages rather than a downloadable document, with sections reported as "Understanding AI," "Integrating AI," "Classroom Management," and "Allowable Use Statements". Classroom integration is framed through a model that sorts technology use from doing old work a new way up to work that would not be possible without it.

That is the extent of what this project could verify. The pages themselves were not captured in this project's records, so the guidance's principles, permissions, and prohibitions cannot be described here. The gap is a limit of the records, not evidence the guidance is thin. Delaware is a guidance state whose specifics need confirming against the live pages.`,

    graduate: `What a Delaware graduate was actually taught cannot be pinned down from this project's records, but the shape of the guidance says something.

- The guidance includes a named "Allowable Use Statements" section, which suggests students in adopting districts met real permission language, structured AI use rather than silence or a blanket ban.
- The integration model the state chose points the same way, toward AI folded into classroom work by degrees rather than treated as one undifferentiated thing.
- Both points are inferences from the guidance's structure, not its text. Confirm rather than infer. Until the live pages are captured, treat any one student's exposure as unknown and variable.`,

    implications: `- Delaware students may arrive having lived under allowed-use permissioning, so a course that sets AI permissions per assignment may feel familiar to them. That should be confirmed against the live guidance, not assumed.
- The capture gap is itself the lesson. A state can have real guidance that is invisible to document-based review because it lives on web pages. Anyone relying on tracker-style summaries should verify against the live Delaware pages before making claims about Delaware graduates.`,

    response: `- **First step.** Read the live guidance pages before assuming a Delaware baseline. The four reported sections are the place to start.
- **Onboarding.** Until then, run an explicit AI-literacy orientation rather than assuming what Delaware students already know.
- **Assessment.** Give every assignment a clear AI-permission statement. If Delaware's allowed-use model proves compatible, align to it so students see continuity.
- **Governance.** Note the integration model Delaware chose when aligning institutional language with what incoming students may have met.`,

    unique: `- A web-native, multi-page guidance model rather than a single document, notable both as a design choice and as the reason its content resists document-based review.
- "Allowable Use Statements" as a named component, which, if it works as a permission structure, is the piece most relevant to higher education. Pending capture.
- Classroom integration framed through a model of how far technology changes a task, rather than a permission scale.`
  },
  'District of Columbia': {
    policy: `The District of Columbia has no citywide AI framework. The Office of the State Superintendent of Education, the city's state-level education office, has issued no AI guidance in this project's records. What exists is two-layered. A State Board of Education resolution recommends building a citywide approach, and the DCPS acceptable use policy, effective January 20, 2026, sets binding conduct rules. DCPS is one school district among many in DC.

#### What the city is trying to do

- The State Board resolution is candid about the gap. It states "there is currently no comprehensive, citywide strategy for integrating Artificial Intelligence into the educational curriculum and operations within the District".
- It recommends that DC "establish a common student use policy that addresses ethical concerns, privacy, anonymity, and safety", and calls on the state-level education office, DCPS, and the Deputy Mayor for Education to work together. It is aspirational, not binding, and the copy in this project's records is a draft.
- The DCPS policy is operative. One of its four stated aims is to "Set expectations around the responsible use of artificial intelligence".

#### Who it covers

- The DCPS policy "applies to all DCPS students, staff, visitors, and others who use the DCPS network or DCPS devices".
- It does not cover DC's charter schools, which answer to their own boards. A large share of DC students attend them, so no single rulebook covers the city.

#### What is allowed and what is not

- The governing principle is that "AI tools should be used by students and staff as a supplement, not a substitute, for learning".
- Impersonation is banned. "Using AI tools to manipulate media to impersonate others is prohibited."
- Students are barred from "submitting AI-generated work as their original work" and from "using AI to answer test, exam, or other assignment questions" unless the teacher directs it.
- Discipline starts small, "beginning with the least severe appropriate response", ranging "from providing an opportunity to re-submit the work, to grade reduction".
- Staff work from an approved list. DCPS "maintains a list of approved AI-enhanced tools for student learning", tools off the list need a formal approval form, and staff "must verify the truthfulness of any AI-produced content".

#### Privacy, fairness, and honesty

- Purchasing has a hard gate. The policy requires that "any applications or websites procured by schools must undergo a full security review and receive approval by DCPS' Office of Data and Technology", especially systems holding student information.
- The policy is grounded in the federal school internet-safety law, the federal children's online privacy law, and DC's Protecting Students Digital Privacy Act. Staff who share student data without approval violate the federal student-records privacy law.
- Monitoring is broad. DCPS runs "a safety management system" that reviews online file storage, school email, and web links.
- Students with disabilities receive accommodations through their individualized education programs, including for the required digital citizenship courses, and assistive technology can go home when the program team approves it.
- No position on AI detection tools appears in the captured records.

#### Training, curriculum, and rollout

- "DCPS will provide students with lessons on the benefits and risks of AI through Digital Citizenship and AI-specific courses." Some students must finish digital citizenship coursework before receiving a school device.
- DCPS promises professional development for the approved AI tools.
- The policy is a conduct rulebook, not a curriculum framework. Grade bands, literacy progressions, and assessment guidance are not in it.`,

    offloading: `The DCPS policy guards against wholesale offloading without building a learning strategy around it.

- The one relevant principle is that AI serves "as a supplement, not a substitute, for learning".
- The bar on using AI for test and assignment answers without teacher direction reinforces it.
- Beyond those two provisions there is nothing on productive struggle, self-monitoring, or how students keep their own reasoning sharp. The policy governs conduct, not learning habits.`,

    graduate: `A DC student's AI schooling depends on which of the city's many school systems they attended, and the two main paths look nothing alike on paper.

- A DCPS graduate lived under enforceable rules. AI as a supplement to learning, no impersonation, no AI on tests or assignments without the teacher's direction. They also took digital citizenship lessons covering AI's benefits and risks, sometimes as a condition of receiving a school device.
- Their experience of AI misuse was disciplinary, starting with the mildest response, often a chance to resubmit the work. They may connect AI trouble with conduct consequences rather than an integrity hearing.
- The policy governed what they could do, not what they could build. It says little about the AI skills a DCPS graduate actually developed.
- A charter graduate lived under separate rules this project has not captured. The State Board itself says the common citywide policy is still to be built, so there is no uniform DC experience to assume.`,

    implications: `- DCPS students learned a teacher-permission model. AI on tests and assignments was barred unless the teacher said otherwise. A syllabus that states AI permission per assignment will feel continuous with that. A silent syllabus will not.
- DCPS framed AI misuse inside a conduct and discipline structure, so some DC students associate consequences with resubmission and grade reduction rather than an integrity process. An institution should spell out how its own AI-integrity process works.
- DC students arrive from many different rulebooks, DCPS and dozens of charter systems, with no citywide strategy yet. Do not treat "from DC" as one policy background.
- The State Board has called for a common citywide student-use policy. Institutions enrolling many DC students should watch for it, since it would create the shared baseline that does not yet exist.`,

    response: `- **Onboarding.** Run an explicit AI-literacy orientation. DC's fragmented landscape means no assumed baseline.
- **Assessment.** Use clear per-assignment AI-permission language, continuous with the teacher-permission model DCPS students know.
- **Integrity.** Define the AI-integrity process explicitly. DCPS students met AI misuse as discipline, and the institution's process may work differently.
- **Procurement.** The DCPS security-review gate is a usable model for vetting the institution's own AI tools, especially anything touching student data.
- **Access.** Provide sanctioned tools with accessibility support, in the spirit of the DCPS accommodations model.
- **Keep the center.** Build on the supplement-not-substitute principle with the fuller model for protecting learning that the district policy itself does not supply.`,

    unique: `- A state-board resolution that documents its own jurisdiction's gap, stating plainly that no comprehensive citywide AI strategy exists, and calls for a common student-use policy. An unusually candid official artifact.
- A district conduct policy that names AI explicitly, with a definition, a supplement-not-substitute principle, bans on impersonation and on unauthorized test use, and a staff tool-approval process.
- A strong purchasing gate. Every application a school buys must pass a full security review by the district's data and technology office.`
  },
  'Florida': {
    policy: `Florida's statewide effort runs on two tracks, and neither is a published state framework. The Florida K-12 AI Education Task Force is coordinated through the CS Everyone Center at the University of Florida, with backing from the state education department. Its guidance aligns to the SAFE Framework, published by an outside education-safety group, rather than an original Florida document, and its working materials, including a Florida AI policy tracker, live as shared web documents. None were captured in this project's records.

Separately, the state education department is reported to be writing a rule that would have districts fold AI into their existing internet-safety policies. The rule's specifics, including reported dates and bill numbers, could not be verified, so this project does not assert them.

Florida is not an absence state. Its guidance is real but university-led rather than agency-issued, and its substance was not captured, so what it tells students and teachers cannot be described here.`,

    graduate: `What Florida students were actually taught cannot be described from this project's records, so the profile is mostly a caution.

- The task force and the rulemaking both exist, but their content is uncaptured, so no claim about permissions, prohibitions, or taught skills can be made.
- If the state rule frames AI mainly as an internet-safety matter, Florida students may have met AI chiefly as a safety-and-restriction topic rather than a literacy-and-creation one. That is a possibility to verify, not a finding.
- Do not assume a Florida baseline. Confirm against the task force's live materials before building on one.`,

    implications: `- Florida's most substantive statewide AI-education guidance is authored by a university, not the state agency. A Florida university is shaping the K-12 AI readiness of the students Florida colleges will enroll. In-state institutions can engage with or build on that task force directly.
- If the state rulemaking treats AI primarily as internet safety and filtering, Florida students may arrive with narrower prior exposure than students from states with rich classroom guidance. Verify before planning around it.
- The evidence gap is itself the lesson. Florida's guidance is real but invisible to document-based review because it lives in university-hosted web documents. Verify against those sources rather than concluding Florida has no framework.`,

    response: `- **First step.** Read the task force's live working document and the SAFE Framework it aligns to before assuming a Florida baseline.
- **Partnership.** A Florida university already coordinates the K-12 effort. In-state institutions can coordinate entry expectations with the CS Everyone Center's framework rather than working alone.
- **Onboarding.** Until the materials are captured, run an explicit AI-literacy orientation and assume no Florida baseline.
- **Integrity and assessment.** Give every assignment a clear AI-permission statement, since no shared Florida student-use tool is confirmed.
- **Governance.** For continuity with the state's K-12 work, the SAFE Framework is the reference Florida's task force uses.`,

    unique: `- University authorship of the statewide effort. The task force is coordinated by the University of Florida's CS Everyone Center with state education department backing rather than state authorship, a pattern Florida shares with Arizona, where Northern Arizona University wrote the guidance.
- Alignment to an external framework, the SAFE Framework, rather than an original state tool.
- A separate state rulemaking track that would fold AI into district internet-safety policies, with specifics still unverified.`
  },
  'Georgia': {
    policy: `Georgia works from two voluntary documents. The state education department's January 2025 guidance covers classroom and district practice. The state teacher-standards commission's June 2025 ethics guidance grounds AI use in the Georgia Code of Ethics for Educators. Neither is a mandate. Districts may adopt them, adapt them, or pass.

#### What the state is trying to do

- The framing is settled from the first page. "AI is a tool to increase efficiencies and effectiveness, not a replacement for human interaction during the teaching and learning process."
- The guidance names four ethical musts. Use AI "in a supportive, not high-stakes manner", "enhance, not replace, human judgment", "promote transparency", and "respect privacy".
- The ethics guidance adds two anchors. "AI is not a primary source", and it "should not take the place of the teacher".

#### Who it covers

- The state guidance addresses district and school leaders and educators across Georgia's public schools.
- The ethics guidance reaches further. It covers current and future administrators, educators, and staff, and it explicitly includes the university programs that prepare teachers.

#### What is allowed and what is not

- The main line runs between high-stakes and everyday uses. Schools are told to refrain from the high-stakes ones. Do not use AI to write goals for a student's individualized education program, to "Evaluate educators", to "Grade student assignments or projects that are subjective", or to "Analyze student data to predict future success, recommend class placements, or flag potential disciplinary issues".
- Everyday uses stay open. Creating learning targets, helping with lesson plans, developing rubrics, giving feedback on ungraded work, grading multiple choice exams, and adjusting the reading level of a text.
- The data rule is absolute. "Never input PII, such as social security numbers, home addresses, health information, academic information... into AI systems."

#### Privacy, fairness, and honesty

- A dedicated privacy section points schools to anonymized data, annual privacy training, and the federal rules that already apply, including the student-records privacy law, the children's online privacy law, the student-survey privacy law, and the disability-access requirements.
- Vendors face a formal vetting process with a review committee and formal agreements.
- On bias, the ethics guidance expects educators to evaluate AI output for bias, choose vendors that document bias mitigation, and make sure tools "do not exacerbate disparities".
- Honesty runs on attribution. Proper attribution of AI-generated content is called "crucial", and schools are told to fold AI into their existing integrity, acceptable-use, grading, and conduct policies rather than write a separate rule.
- A position on AI detection software does not appear in the captured documents.

#### Training, curriculum, and rollout

- Tool vetting gets its own rubric with seven criteria. Educational value, data privacy, usability, cost, scalability, vendor reputation, and age restrictions.
- Districts get a policy-adoption path. Involve the community, assess needs, draft, pilot, finalize, and review on a schedule.
- Teacher training is meant to be ongoing, because "effective professional development regarding AI cannot be accomplished in single, standalone sessions".
- On assessment, the ethics guidance holds the line. "Humans should always review and take responsibility for the output of AI tools when they are used to make decisions about student performance, placement, and/or discipline."`,

    offloading: `Georgia's guard against students handing their thinking to the tool is boundary setting, not cognitive science.

- The classroom section ties clear rules to preserved thinking. "Clear guidelines help maintain academic integrity and ensure that students develop their own critical thinking and problem-solving skills."
- Educators are told to "Encourage critical thinking about AI limitations".
- Students are expected to show their own understanding on exams and assessments without leaning on AI.
- The ethics guidance says it directly. "Aid students in understanding AI should be used as a tool and not a replacement for learning."
- There is no developed treatment of memory, productive struggle, or over-reliance research. The guard is the high-stakes line plus clear classroom boundaries.`,

    graduate: `Both Georgia documents are voluntary, so what any one student learned depends on the district they came from.

- A student from an adopting district was taught to attribute AI-assisted work, because the state guidance calls proper attribution "crucial".
- They were taught not to use AI on assessments meant to show their own understanding. Exams were the place to rely on their own knowledge.
- They may bring general AI literacy, including a habit of questioning AI output for limitations and bias, since both documents press that point.
- A red-yellow-green permission signal is widely attributed to Georgia. It does not appear in the captured state documents, so do not count on Georgia students knowing it. Build on the attribution habit instead, which is confirmed.`,

    implications: `- Georgia's high-stakes table transfers to a university almost unchanged. It is a ready decision rule for what a faculty member or administrator should never hand to AI. Subjective grading, evaluating people, and individualized high-stakes calls about a student.
- Georgia students from adopting districts may expect AI use to be attributed rather than silently banned. A syllabus that says nothing about AI leaves them without the convention they were taught.
- The ethics guidance names the university programs that prepare teachers as part of its audience and urges districts to work closely with them. Georgia colleges of education are already positioned inside this pipeline.
- Faculty may encounter a traffic-light permission system credited to Georgia. It is absent from the documents this project captured, so syllabus language is safer built on the confirmed material, the high-stakes line and the attribution rule.`,

    response: `- **Assessment.** Say clearly, assignment by assignment, whether AI is allowed, and keep assessments where students demonstrate their own understanding unaided.
- **Integrity.** Require attribution of AI-assisted work, and fold AI into existing integrity policy rather than writing a separate rule, as both Georgia documents advise.
- **Procurement.** Reuse the seven-criterion vetting rubric and the high-stakes line as institutional decision tools.
- **Faculty development.** Treat AI training as ongoing. Georgia says in so many words that single standalone sessions do not work.
- **Teacher prep.** A Georgia college of education can align with the ethics guidance's seven principles, since teacher-preparation programs are named participants.
- **Keep the center.** AI is a tool, not a primary source, and not a replacement for learning. That framing transfers whole.`,

    unique: `- A high-stakes versus everyday-use table that names specific uses to avoid, including writing individualized education program goals, evaluating educators, subjective grading, and predictive uses of student data.
- A seven-criterion rubric for vetting AI tools before they reach a classroom.
- Two complementary state documents, operational guidance from the education department and educator-ethics guidance from the teacher-standards commission, grounded in the Georgia Code of Ethics for Educators.
- Explicit inclusion of the university programs that prepare teachers, a soft higher-education hook few states write down.
- A red-yellow-green permission system is widely attributed to Georgia but does not appear in the captured state documents. This project does not assert it.`
  },
  'Hawaii': {
    policy: `Hawaii has statewide guidance, but this project could not read it. The state education department publishes two documents, "AI Guidance for Employees" and "AI Guidance for Students". Both sit behind an employee login with no public link, so their content was not captured.

The public landing page says the guidance covers "accountability, fairness/equity, human oversight, assessment, professional development" and data protection. That sketches a conventional responsible-use framework. The actual principles, rules, and any student permission structure cannot be described from the captured records. A separate AI readiness toolkit is referenced and also uncaptured.

The gap is a limit of access, not evidence that Hawaii did nothing. The state built guidance and aimed part of it directly at students. This project simply could not open it.`,

    graduate: `Hawaii students were likely governed by explicit AI expectations whose content this project cannot describe.

- The state publishes guidance written specifically for students, so rules existed. What they permitted, prohibited, or taught is behind the login.
- The listed focus areas hint at human oversight, assessment, and data protection, but nothing about what a student actually learned can be confirmed from them.
- Treat a Hawaii student's AI schooling as governed but not described. Confirm against the real documents rather than inferring from their absence.`,

    implications: `- Hawaii students likely arrived under some explicit AI-use expectations, but a college cannot assume their content. The safe move is to state your own expectations explicitly and early.
- A reported bill would place an AI-in-education task force within the University of Hawaii. That would be a direct higher-education hook, but this project could not verify the bill. Worth watching, not worth citing yet.
- The login gate is itself the lesson. Real state guidance can be invisible to document-based review. A missing public document is not a missing policy.`,

    response: `- **Sources.** Ask the state education department for the student and employee guidance and the AI readiness toolkit before drawing conclusions about Hawaii graduates.
- **Onboarding.** Run an explicit AI-literacy orientation and do not assume a Hawaii baseline either way.
- **Integrity.** Give students clear per-assignment AI rules, since no shared Hawaii permission structure is confirmed.
- **Governance.** Watch the reported University of Hawaii task force bill. If it becomes law, in-state institutions should coordinate entry expectations with the task force.`,

    unique: `- Separate guidance for students and for employees, an audience split fewer states make explicit.
- Login-gated delivery. The guidance is not publicly downloadable, which sets Hawaii's access model apart from most states.
- A reported bill would host a statewide AI-in-education task force at the University of Hawaii. Unverified, but a potential direct higher-education hook.`
  },
  'Idaho': {
    policy: `Idaho wrote its AI rules into law. Senate Bill 1227 adds a new chapter on generative AI to the state education code and took effect July 1, 2026. It is binding, but it is an enabling law. It orders the framework, the standards, and the training built rather than containing them, and none of that material had been published in the records this project captured.

#### What the state is trying to do

- The law states its purpose, to "safeguard student privacy, protect the role of the educator, promote human-centered learning, increase transparency, and prepare Idaho students for success in an economy increasingly influenced by generative artificial intelligence".
- It aims at "responsible, ethical, safe, and effective use".
- The definition itself keeps people in charge. Generative AI in education means responsible use "while ensuring that human judgment remains the final authority".

#### Who it covers

- The law reaches every Idaho public school and public charter school.
- It governs "students and employees in school buildings, on school grounds, during school activities, and on school-issued devices".
- Every district and charter must adopt a policy governing how students and employees use generative AI.

#### What is allowed and what is not

- The law lists no uses itself. It requires each district policy to "Define appropriate and prohibited uses of generative AI for instructional, administrative, and communication purposes".
- The actual definitions will live in local policies aligned to the coming state framework. None were in the captured records.

#### Privacy, fairness, and honesty

- District policies must include "safeguards for student privacy, data security, accessibility, and academic integrity" and comply with Idaho's student-data privacy law, the federal student-records privacy law, the federal school internet-safety law, and the federal children's online privacy law.
- Vendors must disclose machine-learning, predictive, and generative features in their products and give "assurances regarding data protection, algorithmic transparency, and responsible use".
- The framework must "Address accessibility, accommodations, and access to generative AI tools".
- The law takes no stated position on AI detection tools.

#### Training, curriculum, and rollout

- The state education department must develop generative AI literacy standards for K-12 students, covering "what generative AI is, how it works, its appropriate and age-appropriate uses, and how to use it ethically, securely, and transparently".
- It must also develop "Assessment guidelines to evaluate student understanding of generative AI concepts, ethics, and responsible use". Idaho is one of the few states to require that student AI understanding be evaluated, not just taught.
- A professional development plan for educators and a guidance document for parents are required deliverables.
- The framework serves as "the foundation for local school district and public charter school policies, professional development, procurement practices, and statewide standards".`,

    offloading: `Idaho's protection for student thinking is written into the law's definitions rather than its lesson plans.

- The controlling idea is that "human judgment remains the final authority". The law's stated purpose includes "protect the role of the educator" and "promote human-centered learning".
- The framework must cover academic integrity, digital citizenship, and "responsible student use".
- The detailed strategy for keeping students thinking is delegated to the framework the state has not yet published. What the law guarantees is that the strategy must exist.`,

    graduate: `Idaho made AI guidance a legal duty, but the substance is still being built, so the graduate profile splits cleanly in two.

- Students arriving now finished school before the framework, the standards, or any district policy aligned to them existed. Assume no guaranteed baseline.
- Future graduates will, by law, have lived under a district policy that defined appropriate and prohibited AI uses, and have been taught to state literacy standards covering what generative AI is, how it works, and how to use it ethically.
- They may also have been formally evaluated on their understanding of AI concepts, ethics, and responsible use, since the law requires assessment guidelines, not just teaching.
- Classroom rollout could begin as early as the 2027-28 school year. When it does, Idaho graduates may arrive with a stronger and more uniform grounding than students from voluntary-guidance states.`,

    implications: `- Idaho drew a distinction worth borrowing. A policy on file is not the same as governance that runs. The law requires district policies, standards, assessments, teacher training, and procurement rules as a working system, not a statement.
- If Idaho follows through on evaluating student AI understanding, future Idaho applicants may carry documented AI-literacy outcomes. Admissions and placement could eventually treat AI literacy as a measured competency rather than an assumption.
- The statute names no university and no teacher-preparation program. Idaho's relevance to higher education runs through its future graduates, not through any direct role for institutions.
- Because the framework is still pending, nothing specific should be assumed about a current Idaho student's AI competency. The guaranteed baseline is a future-tense fact.`,

    response: `- **Governance.** Borrow the governance-that-runs model. Pair any institutional AI policy with defined roles, standards, training, and procurement rules rather than a standalone statement.
- **Onboarding.** Treat current Idaho students as arriving before the baseline. Run an AI-literacy entry check, and revisit once the state's standards and assessments are live.
- **Assessment.** Give explicit allowed-and-prohibited definitions per assignment, mirroring what every Idaho district will be required to define.
- **Procurement.** Reuse the law's vendor rules. Require disclosure of machine-learning, predictive, and generative features, plus assurances on data protection and algorithmic transparency.
- **Monitoring.** Track the release of Idaho's framework, literacy standards, and assessment guidelines, and align entry expectations to them when they land.`,

    unique: `- A statutory duty, not guidance. Every Idaho district and public charter school must adopt an AI policy by law, one of the first states to require it.
- Mandated evaluation of student AI understanding. The state must develop guidelines to assess AI literacy, not just teach it, an unusually strong provision.
- A statutory definition that centers human authority, with "human judgment remains the final authority" written into the code.
- An emergency clause put the law into effect July 1, 2026, signaling urgency.
- A required guidance document for parents as its own deliverable.`
  },
  'Illinois': {
    policy: `Illinois published its guidance in June 2026 through the Illinois State Board of Education, working with a Blue Ribbon Panel of outside experts. A state law, Public Act 104-0399, ordered the guidance written. The document makes recommendations, not rules, and at roughly 409 pages it is the longest in this project's records. Each district decides for itself what to adopt.

#### What the state is trying to do

- The law charged the state board with guidance on AI use "while preserving the human relationships essential to effective teaching and learning".
- Four tenets organize the whole document. Teaching and learning are shaped by human relationships and each child's experiences and interests. Schools serve academic, developmental, and civic purposes at once. AI "must remain a means to inform teaching and learning rather than a substitute for educator judgment, student relationships, or the developmental and civic purposes of public schooling". And informed use is "deliberate, context-sensitive, and locally determined".

#### Who it covers

- Prekindergarten through grade 12, at the district, school, and classroom levels.
- The document is deliberately multi-audience. Its question-and-answer sections are tagged for superintendents, principals, teachers, parents and caregivers, and the wider community.

#### What is allowed and what is not

- There is no single statewide permission scale. The document models informed, locally decided use rather than issuing rules.
- The high-stakes line is firm. AI should not be the basis for "student discipline outcomes, teacher evaluations, hiring decisions, or other high-stakes" calls.
- AI may help with the supporting pieces of evaluation, such as drafting rubrics, while the evaluation itself stays on the high-stakes list.
- On detection software, the guidance expects schools to "use AI-detection tools as one data point, not as definitive proof of cheating".

#### Privacy, fairness, and honesty

- The guidance foregrounds "equity, accessibility, privacy, safety, accountability, and civic responsibility".
- Honesty runs on disclosure rather than detection. It warns that "early reliance on detection or 'gotcha' approaches" can produce false accusations.
- Students with individualized education programs and disability-access plans get specific safeguards, including "cognitive load safeguards" and triggers to review AI output for misinformation.
- It treats AI's fabricated answers seriously, noting they are "difficult to detect without verification", and asks schools to monitor for harm, error patterns, uneven quality, and misuse.

#### Training, curriculum, and rollout

- Writing AI prompts is treated as a skill twice over, a thread of teacher professional learning and a component of student digital citizenship.
- Bloom's Taxonomy is offered as a lens for planning instruction with AI.
- AI literacy and digital citizenship form a major section, framed as growth of the student as an individual and a citizen.
- Assessment looks past grades. The guidance values participation, persistence, and cognitive engagement "beyond grades or scores alone" and calls for "metacognitive challenge while preserving originality and student voice".
- Numbered classroom case studies walk through real situations, including one on AI detection.
- The document discloses that AI assisted its own drafting, modeling the transparency it asks of schools.`,

    offloading: `Illinois takes the risk of students handing their thinking to the tool head-on, as a design question for every district.

- Before adopting AI, districts are prompted to weigh what "might decrease (over-reliance, reduced struggle)" and to treat over-reliance as a named risk.
- Good assessment design centers "metacognitive challenge while preserving originality and student voice", and engagement is measured in persistence and cognitive effort, not grades alone.
- The guidance cautions that "instructional design should not separate cognitive demand from context" and links AI use to students' cognitive, social, and emotional growth.
- It grounds the concern in published research on over-reliance rather than asserting it.
- The structural guard is the third tenet, AI as a means and never an end, paired with the preference for learning-centered expectations over detection-driven enforcement.`,

    graduate: `The Illinois guidance is voluntary and arrived in June 2026, so the profile of an arriving student depends heavily on timing and district.

- Most students arriving now finished school before their district could act on the guidance. Expect a wide range in any Illinois group.
- A student from an adopting district was taught that teaching is a human relationship first, with AI as one means inside it, never the point.
- Their school likely handled honesty through disclosure. They were taught that detection tools are one data point, never proof, so they may expect to explain their AI use rather than face a detector's verdict.
- Writing AI prompts was part of their digital citizenship lessons, so some arrive with deliberate prompt-writing practice.
- Some were also taught to notice when AI use erodes their own learning, since the guidance treats reduced struggle as a risk worth naming.`,

    implications: `- Illinois students from adopting districts were taught that a detector report is one data point, not proof. A course that treats detector output as decisive will sit at odds with what these students were taught, and the students can point to state guidance for their side.
- The high-stakes list transfers directly. Discipline, evaluations, and hiring are decisions AI should not make, in a university as in a school district.
- Some Illinois students were taught to watch their own learning for over-reliance and reduced struggle. A faculty member can build on that self-monitoring habit instead of starting from zero.
- The document discloses that AI assisted its own drafting. That is a transparency norm an institution can adopt wholesale, for faculty and students alike.`,

    response: `- **Integrity.** Follow the state's lead. Treat detectors as at most one data point, and favor disclosure and learning-centered expectations over enforcement built on detection.
- **Assessment.** Design for "metacognitive challenge while preserving originality and student voice", and value persistence and engagement, not only finished products.
- **Boundaries.** Reuse the high-stakes list to define what AI must not decide. Discipline, evaluations, hiring.
- **Onboarding.** Run an entry AI-literacy check, since adoption is uneven and the guidance is recent, and borrow the state's AI-literacy and digital-citizenship framing as ready scaffolding.
- **Governance.** The four tenets make a serviceable backbone for an institutional AI policy, keeping AI a means to teaching and learning.
- **Keep the center.** The teacher-student relationship is the centerpiece. That premise holds in a lecture hall as well as a classroom.`,

    unique: `- Scale and depth. Roughly 409 pages of statewide guidance, built with a Blue Ribbon Panel that included Brookings, Khan Academy, and Common Sense Media, organized around four tenets.
- An explicit caution against AI detection tools and against enforcement built on catching students.
- Bloom's Taxonomy as a planning lens, and a developmental framing of AI literacy as growth of the student as an individual and a citizen.
- Disclosed AI-assisted authorship. The document says AI helped draft it, modeling the transparency it recommends.
- Audience-tagged questions and numbered classroom case studies as practical navigation aids for a very long document.`
  },
  'Indiana': {
    policy: `Indiana's guidance is short, voluntary, and built around AI literacy. The state education department published it as a concise, resource-linked document rather than a long framework, and no state law stands behind it. Each district decides for itself.

#### What the state is trying to do

- The opening claim is about students, not tools. "Teaching AI literacy is imperative to developing empowered learners and citizens."
- AI literacy "transforms students into versatile problem-solvers and promotes critical thinking".
- AI supports rather than replaces human judgment, with a human in the loop named as the working model.
- On policy, the advice is to fold AI into the rules a district already has rather than write a standalone AI policy.

#### Who it covers

- The guidance addresses educators, students, administrators, and parents and caregivers, with educator and student framing set side by side throughout.
- Districts are told to "Provide clarity about who your policy applies to, including students, administrators, teachers".

#### What is allowed and what is not

- There is no statewide permission scale. The guidance steers local policy instead.
- Districts should "Define acceptable and unacceptable uses of AI, but avoid restricting innovative educational uses or instituting overly broad restrictions".
- Policies should avoid naming specific platforms, because "AI tools evolve quickly".
- On detection software, the advice is direct. "Reconsider the use of AI detection tools as the sole source of intervention related to academic dishonesty." The guidance links a resource titled "AI Detection Software Doesn't Work. Do This Instead."

#### Privacy, fairness, and honesty

- Keep personal information out of public AI tools, confirm compliance with the federal student-privacy laws before using AI with students, and use age-appropriate, approved tools.
- Students should "understand how data is used to train AI and how that can lead to biased results", and a named competency asks them to "Ethically evaluate AI systems to minimize bias".
- Honesty runs on citation. Students learn to "Properly cite AI usage when writing or creating".
- A dedicated accessibility section does not appear in the captured document.

#### Training, curriculum, and rollout

- AI is paired with computer science, with competencies like "Break down complex problems", "Analyze data critically", and "Identify patterns and trends".
- The state recommends an educator practice space. "Develop a 'sandbox' where educators can practice making decisions about security issues related to AI."
- AI can make feedback "more immediate and actionable" and free teacher time for "building relationships, developing content, and providing feedback".
- Policy work has prerequisites. Build AI literacy first, define goals before tools, and remember that "Simply using AI should not be the goal".
- The document links national templates and checklists and an Indiana Learning Lab collection for teachers.`,

    offloading: `Indiana states its commitment plainly. AI supports the student's thinking and never substitutes for it.

- Students "use AI to boost thinking and creativity, using tools to support, rather than replace, their own critical thought and original expression".
- Educators "design learning experiences that leverage AI to enhance content understanding while intentionally preserving academic rigor, promoting student independence, and cultivating transferable skills".
- The scaffold framing is explicit. "Students using AI tools as a scaffold can open up time for higher level thinking and problem solving."
- Teachers keep a human in the loop and model checking AI output rather than trusting it.
- There is no developed treatment of the cognitive science, no over-reliance studies or metacognition research. The guard is the support-not-replace framing itself.`,

    graduate: `The Indiana guidance is voluntary, so what a student learned depends on their district, but the taught profile is unusually concrete because the state wrote it in the student's own voice.

- AI literacy arrives as "I CAN" statements, things a student can do rather than concepts they heard about. Properly cite AI use, evaluate AI systems for bias, and "Act as an informed citizen".
- A student from an adopting district was taught that AI is a scaffold. It opens time for harder thinking, and it never replaces their "own critical thought and original expression".
- They may expect rigor and independence to be preserved on purpose, because the guidance tells educators to design for exactly that.
- They also carry privacy habits, keeping personal information out of public AI tools.`,

    implications: `- Indiana students from adopting districts were taught that detection software cannot be the sole evidence of dishonesty. A course that rests a case on a detector report alone will sit at odds with what these students were taught.
- The citation habit is the asset. Indiana teaches students to cite AI use when writing or creating, which is a disclosure-based integrity model a college can build on directly.
- The guidance frames its students as people who "will enroll in higher education, enlist in the military, or seek employment". The college-and-career framing is explicit, though no university is given a formal role.
- The shared vocabulary, a human in the loop and preserved rigor, gives a college continuity language its Indiana students already know.`,

    response: `- **Integrity.** Do not rest a dishonesty case on a detector alone, matching the state's caution, and require citation of AI use as Indiana teaches it.
- **Assessment.** Let AI serve as a scaffold while the assessment itself preserves rigor and student independence.
- **Onboarding.** Use the "I CAN" competencies as an entry rubric for what an Indiana student may already do.
- **Faculty development.** Give faculty a sandbox, a safe place to practice AI decisions before they carry stakes, mirroring the state's recommendation for educators.
- **Governance.** Fold AI into existing policies on integrity and acceptable use rather than writing a standalone rule, the same integrate-not-duplicate stance the state takes.
- **Keep the center.** AI supports thinking. It does not do the thinking. Indiana's line transfers to a syllabus without edits.`,

    unique: `- "I CAN" competency framing, with AI literacy written from the student's perspective as things they can do.
- An explicit caution against AI detection tools as the sole evidence, backed by a linked resource arguing detection software does not work.
- An educator sandbox for practicing AI security decisions before they count.
- A concise, clickable, resource-linked format built for busy educators instead of a long framework.
- An integrate-not-duplicate policy stance. Examine existing policies first, and fold AI in rather than bolting on a new rulebook.`
  },
  'Iowa': {
    policy: `Iowa has published no statewide classroom AI guidance. The state's activity sits in two other places. A pair of bills before the legislature, House File 2540 and Senate File 2094, and a deployed AI reading tutor.

The bills are introduced, not enacted, so nothing in them is current law. If passed, they would require one semester of computer science and AI for graduation, beginning with the class of 2030-31, covering "all students in school districts and accredited nonpublic schools". The stated aim is "setting a foundation for personal and professional success in a high-technology, knowledge-based Iowa economy". The course would teach what AI is, how it works, and "the societal and ethical impacts of artificial intelligence", and it could double-count as one semester of the math or science requirement. The bills would also direct the state education department to publish a list of qualifying courses and a teacher-capacity plan by June 30, 2027, with a provision that the plan "specifically address targeted support for schools with a total enrollment of less than five hundred students in grades nine through twelve".

Note the distinction. The bills treat AI as a subject to be taught, not as a tool whose classroom use needs rules. Iowa has no document defining what students may or may not do with AI. Separately, the state spent three million dollars to put a voice-recognition AI reading tutor, the EPS Reading Assistant, in elementary schools free of charge in 2024. Iowa adopted an AI tool before it wrote any AI guidance.`,

    offloading: `Iowa has no guidance addressing the risk that students hand their thinking to the tool. The pending bills teach students about AI rather than governing how they use it, so they carry no strategy for protecting learning either. Nothing at the state level fills this gap.`,

    graduate: `Iowa students arrive without a shared state baseline, and the guaranteed course is years away even if the bills pass.

- With no state guidance and no enacted requirement, an Iowa student's AI experience came entirely from their district. Two Iowa students can arrive with opposite experiences.
- The youngest students may have met AI early through the state-funded reading tutor, so familiarity with AI as a tool may run ahead of any formal instruction about it.
- If the bills become law, a graduate from the class of 2030-31 onward will have completed a semester covering what AI is, how it works, and its societal and ethical effects. That is well beyond current admissions cycles and depends on enactment.
- Until then, do not assume any Iowa student had formal AI instruction.`,

    implications: `- Iowa students will be unusually mixed in AI literacy. Plan for a common entry baseline rather than assuming prior instruction.
- The bills reach higher education directly. The state education department would have to consult "higher education institutions that offer computer science teacher preparation pathways" when building its teacher-capacity plan, and Senate File 2094 reportedly includes college-admissions provisions. Iowa teacher-preparation programs could be formally written into the rollout.
- The proposed course would double-count as a math or science credit. An admissions office reading an Iowa transcript should know that a computer science and AI course may occupy a math or science slot.
- Early AI-as-tool familiarity from the elementary reading tutor may arrive before any formal AI literacy.`,

    response: `- **Onboarding.** Treat Iowa students as arriving before any baseline exists. Run an explicit AI-literacy entry check, and revisit once the graduation requirement is enacted and running.
- **Integrity.** Set explicit per-assignment AI rules. Iowa students are unlikely to arrive with a shared AI-use vocabulary.
- **Teacher preparation.** Iowa programs that prepare computer science teachers should watch House File 2540 and Senate File 2094, which would name them as consulted parties.
- **Admissions.** Track the college-admissions provisions in Senate File 2094 and the math-or-science double-counting when evaluating Iowa transcripts.
- **Monitoring.** The bills are introduced, not law. Watch for enactment.`,

    unique: `- A proposed graduation requirement built to double-count. One semester of computer science and AI would also satisfy a semester of math or science, an unusual scheduling design.
- AI content standards written into the bill itself. Instruction on what AI is, how it works, and its societal and ethical effects.
- An explicit small-school provision. The proposed teacher-capacity plan must give targeted support to high schools with fewer than five hundred students.
- A statewide AI reading tutor in elementary schools, deployed before any AI guidance existed.
- Higher-education hooks in the pending bills, from teacher-preparation consultation to college-admissions provisions.`
  },
  'Kansas': {
    policy: `Kansas has no state education agency AI guidance. In October 2023 the Kansas education department told an education research center that it "has not issued any guidance to districts regarding AI technology and, as of right now, has not discussed any plans to do so". That statement is old, and it is third-party reported rather than posted by the agency, but no state guidance document has surfaced since.

What has surfaced is not agency guidance. In February 2026 the State Board of Education heard a framework for responsible AI integration spanning prekindergarten through college, written by University of Kansas researchers. It is a university product, not state policy, and its contents were not captured in this project's records. Separately, Kansas is home to the most prominent lawsuit over AI surveillance in schools. Families in the Lawrence school district sued in August 2025 over AI monitoring of student communications by software called Gaggle, raising free-speech and search-and-seizure claims under the First and Fourth Amendments along with claims under the Kansas Student Publications Act. That is litigation, not policy, but it is the state's most consequential AI-in-schools development.`,

    offloading: `Kansas offers no state strategy for protecting student thinking from being handed to the tool. With no agency guidance, nothing at the state level addresses over-reliance or learning preservation. The University of Kansas framework may take this up, but its contents were not captured in this project's records.`,

    graduate: `A Kansas student's AI schooling was set entirely by their district, and for some the defining AI experience was being watched.

- With no state guidance, district-to-district variation is as wide as anywhere in the country. Do not infer any common preparation from a Kansas diploma.
- Students from districts that ran AI monitoring software, including Lawrence, went to school with AI reading their communications. Their formative association may be AI as surveillance and discipline rather than AI as a learning tool.
- The university-authored framework now before the State Board spans prekindergarten through college, but it is not yet policy and shaped no current graduate.
- Nothing at the state level narrows the range. Ask, do not assume.`,

    implications: `- The absence of a state baseline is the core message. Expect wide variation in AI literacy within any Kansas group, and plan a common entry point rather than assuming prior instruction.
- The University of Kansas framework is a higher-education-authored attempt at a school-through-college through-line. Kansas institutions, especially the University of Kansas, are effectively originating the state's most substantive AI-education thinking. That is a direct opening for engagement, though the framework is not yet state policy.
- The Lawrence lawsuit is the clearest constitutional test of AI surveillance in schools, and campus AI monitoring, proctoring, and wellness-flagging tools sit on the same legal ground. Institutions using such tools should track the case whatever their state.
- Students who experienced school AI mainly as monitoring may need the difference between institutional AI-for-learning tools and surveillance made explicit at orientation.`,

    response: `- **Onboarding.** With no state baseline, run an explicit AI-literacy orientation and expect a wide range among Kansas students.
- **Integrity.** Provide clear per-assignment AI rules. Kansas students are unlikely to arrive with a shared AI-use framework.
- **Governance.** Treat the Lawrence lawsuit as a caution for the institution's own AI surveillance, proctoring, and monitoring tools. Review the free-speech, privacy, and search-and-seizure exposure, and be transparent about any monitoring.
- **Partnership.** Kansas institutions can engage the University of Kansas framework as a potential school-through-college through-line, since it explicitly reaches into higher education.
- **Keep the center.** With no state model to inherit, the institution must supply its own expectation that AI advances learning rather than replacing thinking.`,

    unique: `- The state's most substantive AI-education framework came from a university, not the education agency. A prekindergarten-through-college framework written at the University of Kansas and presented to the State Board.
- The marquee K-12 AI-surveillance lawsuit. The Lawrence case is a live First and Fourth Amendment test with direct relevance to campus monitoring tools.
- A documented, explicit absence. The Kansas education department stated on the record that it had issued no guidance and had no plans to, rather than leaving the gap untracked.`
  },
  'Kentucky': {
    policy: `Kentucky's guidance brief, published by the state education department and updated in December 2025, is voluntary. It "intends to provide an example of foundational guiding principles" and "can serve as an example to districts creating their own AI usage/integration policies". Nothing in it is a mandate, and no Kentucky statute requires anything of districts.

#### What the state is trying to do

- The signature move is to make AI ordinary. Kentucky treats AI as one emerging technology among many, arguing that "treating it differently than other emerging technologies can hinder its effective integration and create unnecessary anxieties".
- The goal comes from the state's education technology master plan. "Encourage, engage and empower the safe and responsible uses of Artificial Intelligence... ensuring humans remain in the loop with strong AI implementations."
- Teachers stay central. "AI is not a means to replace educators but could complement their strengths, automate routine tasks, and enhance their ability to differentiate."

#### Who it covers

- The brief addresses the state education department, districts, and school communities, with role-specific spotlights for technology chiefs, digital learning coaches, the Student Technology Leadership Program, library media specialists, and online and virtual programs.
- It is explicitly "not a one-size-fits-all approach". Districts keep their autonomy.

#### What is allowed and what is not

- There is no statewide permission scale. The brief models principles for districts to build local policy on.
- Seven guiding questions work as a screen before any AI use. Whether personal information is exposed, whether the tool is inside the state's vetted ecosystem or an unfamiliar third party, whether permissions are over-broad, whether a free tool is paid for with data, whether the output is ethical, whether it needs review for made-up content and bias, and whether a supervisor should be consulted about unseen risks.
- The disclosure rule draws a practical line. "It is best practice to disclose the use of generative AI tools in all formal publications, presentations, outputs... However, the informal use of generative AI does not require citation."

#### Privacy, fairness, and honesty

- Privacy runs through the federal student-records privacy law, the federal children's online privacy law, and House Bill 5, Kentucky's 2015 student-data law.
- On fairness, "AI systems should not perpetuate or exacerbate disparities", and AI-generated content should be checked for bias and inaccuracy.
- Ethics leans on UNESCO's AI ethics framework and the Partnership on AI for evaluating tools. People "should be able to understand how AI systems make decisions", and there should be "ways to hold them accountable".
- On honesty, students and teachers "should give credit to sources and tools and honestly present work that is genuinely their own". The brief takes no position on AI detection tools.

#### Training, curriculum, and rollout

- Kentucky follows a three-stage approach drawn from a widely used national template. Develop policies, help educators learn about AI, and use AI to improve outcomes, all pursued at once.
- AI literacy is wired into digital citizenship, the Student Technology Leadership Program, and computer science access in all Kentucky schools.
- After a tool is adopted, the brief applies a published evaluation framework centered on "investigation, fidelity, and effectiveness".
- Professional learning runs through partnerships "with universities, research institutions, and AI vendors" and communities of practice.`,

    offloading: `Kentucky's main guard is a three-part model of who is leading the learning, drawn from published research.

- The three paradigms name the learner's role. AI-directed, where the student receives. AI-supported, where the student collaborates. AI-empowered, where the student leads. How much thinking stays with the learner becomes a design choice a teacher makes deliberately.
- A human in the loop is a named tenet. AI "should not operate autonomously without human oversight and control, especially in applications where AI decisions could have significant consequences".
- The brief warns where unguided AI teaching leads. "GenAI-directed instruction could turn out to be 'just plain bad instruction,' or instruction centered around information hallucinations if left on its own and not guided by expert teachers."
- Technology should "amplify human capacity for collaboration, creativity, and communication", not "support outdated education strategies".
- Student competitions in the Student Technology Leadership Program "that require student original work still encourage AI use for inspiration", a worked example of AI feeding original work rather than replacing it.
- The brief offers no developed treatment of the research on over-reliance. The paradigm model and the human-in-the-loop tenet carry the whole load.`,

    graduate: `The brief is voluntary, so what a Kentucky student absorbed depends on whether their district built on it.

- A student from an adopting district was taught to meet AI without alarm. The state's deliberate position is that AI is one technology among many and that treating it as exceptional creates anxiety, so these students may resist both AI panic and AI hype.
- They may think in the three learner roles, receiving from AI, working alongside it, or leading it, and expect a course to say which role a given task calls for.
- Their disclosure habit has a built-in nuance. Formal work gets AI use disclosed, informal use did not require citation. Expect them to ask where that line sits in a college course.
- Their AI literacy likely arrived through digital citizenship lessons and programs like the Student Technology Leadership Program rather than a standalone AI course.
- None of this is guaranteed. Adoption was district by district, so expect a wide range.`,

    implications: `- Kentucky's three paradigms map directly onto course design. The underlying question, who is directing the learning and does AI change that answer, works at any level, and faculty can adopt AI-directed, AI-supported, and AI-empowered as a shared vocabulary for setting per-activity expectations.
- Kentucky explicitly names universities as partners in AI professional learning, and the brief points to the University of Kentucky's teaching-and-learning center as a resource. Kentucky institutions are already positioned inside the state's AI-education network.
- The formal-versus-informal disclosure rule is a nuanced model a college could adopt to avoid over-broad citation mandates that students quietly ignore.
- The normalize-AI stance means Kentucky-shaped students may respond best to a measured, integration-focused approach rather than either alarm or enthusiasm.`,

    response: `- **Assessment.** Use the directed, supported, empowered paradigm to specify, assignment by assignment, how much of the thinking stays with the student.
- **Integrity.** Adopt the formal-versus-informal disclosure distinction and the "genuinely their own" standard, and pair them with the seven guiding questions as a tool-vetting screen.
- **Procurement.** Reuse the seven guiding questions and the investigation, fidelity, and effectiveness evaluation cycle for the institution's own AI-tool decisions.
- **Faculty development.** Partner with in-state teaching-and-learning centers, extending Kentucky's engagement model into higher education.
- **Keep the center.** Hold the human-in-the-loop tenet, and remember the brief's own caution that unguided AI instruction can be "just plain bad instruction".`,

    unique: `- Three learner-role paradigms grounded in published research. AI-directed, AI-supported, and AI-empowered, naming the student as recipient, collaborator, or leader.
- A deliberate strategy of making AI ordinary. Consistency, balance, and normalization, intended to defuse fear rather than feed it.
- Seven guiding questions that work as a practical vetting screen before any AI use.
- The whole brief hangs off the state's education technology master plan and its verbs, encourage, engage, and empower.
- A formal-versus-informal disclosure distinction, plus a research-based framework for evaluating tools after adoption, not just before.`
  },
  'Louisiana': {
    policy: `Louisiana's guide, published by the state education department in fall 2024, is voluntary. It offers "recommendations... for general information purposes only" and states plainly that it "is not intended to provide... legal advice". Two companion pieces travel with it, a prompting framework called C.R.E.A.T.E. and a pre-work checklist for educators.

#### What the state is trying to do

- Teachers stay in charge. "AI is most effective as a supportive tool that empowers educators rather than serving as a replacement for their expertise."
- Five guiding principles anchor the guide. Data privacy and security, ethics, student-centered learning, transparency and explainability, and professional development. The student-centered principle asks schools to "promote agency and ownership over learning".
- Safe use is framed as a shared responsibility among educators, leaders, families, students, and outside partners.

#### Who it covers

- The guide addresses "school system leaders, school leaders, teachers and staff members, educational technology innovators, policymakers, and researchers", plus families. It binds no one.

#### What is allowed and what is not

- The centerpiece is a four-tier, assignment-level scale for student AI use. Each tier is paired with a step of a published model that sorts technology use from doing old work a new way up to work that would not be possible without it.
- **AI-Prohibited.** "AI tools are not permitted for assignments or tasks specifically designed to evaluate students' core knowledge and skills." Example, deliver a slideshow without AI.
- **AI-Assisted.** "Students may use AI as a feedback tool, but they should create all of the assignment's content themselves." Example, AI as a brainstorming thought partner.
- **AI-Enhanced.** "Students may use AI as a tool to transform the learning process, but sources should be cited, and all generated content should be reviewed for accuracy." Example, AI analyzing data for a science report.
- **AI-Empowered.** "Students are encouraged to fully engage with AI under human supervision, citing sources and carefully reviewing all generated content for accuracy." Example, AI-powered design software creating 3D models.

#### Privacy, fairness, and honesty

- On honesty, Louisiana goes where most states in this project do not. It recommends detection. "Plagiarism Detection Software: Use plagiarism detection tools like Turnitin or Grammarly" and "Lockdown Browsers: Implement software such as GoGuardian" sit alongside version control, and the same page also recommends redesigning assessments to be embedded, personalized, open-ended, and project-based, plus classroom habits like screens facing the teacher and regular check-ins.
- Privacy is grounded in Louisiana's own student-privacy statute, with safeguards recommended at both the system level and the classroom level.
- The ethics principle covers fairness and avoiding algorithmic bias. The federal disability-access rule is referenced, though the guide's accessibility treatment is thin.

#### Training, curriculum, and rollout

- The conceptual base is the published model of how far technology changes a task, adapted from its original authors.
- The guide adds a four-part governance cycle for school systems. Purpose and research, policy and guidance, engaging the school community, and evaluation and monitoring.
- Professional development is one of the five principles, and the companion prompting framework and checklist are the practical supports.`,

    offloading: `Louisiana protects unaided thinking chiefly through the bottom tier of its scale and through assessment design.

- The AI-Prohibited tier exists precisely to preserve unaided demonstration. AI is barred from tasks "specifically designed to evaluate students' core knowledge and skills".
- The student-centered learning principle asks schools to "promote agency and ownership over learning".
- The guide's assessment strategies make shortcuts harder by design. Open-ended questions requiring critical thinking, personalized assignments, and project-based assessments.
- AI is framed throughout as support for educator expertise, never a replacement for it.
- The guide offers no developed treatment of the research on over-reliance. The tiered scale and assessment redesign carry the position.`,

    graduate: `The guide is voluntary, so what a Louisiana student absorbed depends on their district. Where it took hold, the experience was structured and monitored.

- A student from an adopting district knows assignment-level AI tiers by name and expects the teacher to set the tier. They were taught that tasks testing core knowledge are strictly no-AI, and that the higher tiers come with duties, citing sources and checking AI output for accuracy.
- At the top tier they were encouraged to engage AI fully, but always under supervision. Independent, unsupervised AI use was not the taught norm.
- They may treat detection software and lockdown browsers as a normal part of testing, because their state recommended both. Students from states that call detectors unreliable were taught the opposite, and both kinds of student can sit in the same classroom.`,

    implications: `- Louisiana's four tiers are exactly the assignment-level granularity most university syllabi lack. A faculty member can adopt AI-Prohibited, AI-Assisted, AI-Enhanced, and AI-Empowered directly and expect partial prior familiarity from Louisiana students.
- The detection divergence is real and worth planning for. Louisiana students may arrive expecting detection tools and lockdown browsers as normal, while students taught under other states' guidance arrive distrusting the same tools. An institution's integrity process will face both expectations at once.
- The underlying technology-use model is already familiar in higher education, so Louisiana's scale translates cleanly to college course design.
- The guide contains no higher-education hook. Louisiana's relevance to a university is the portable scale, not any binding provision.`,

    response: `- **Assessment.** Adopt the four-tier, assignment-level scale, and preserve genuinely no-AI tasks where the goal is unaided demonstration of core skills.
- **Integrity.** Decide deliberately where the institution stands on detection tools. Louisiana students may expect them, but other states' reliability and bias concerns are serious. The guide's own assessment-redesign strategies, open-ended, personalized, and project-based work, are the more durable path.
- **Governance.** Reuse the four-part cycle, purpose and research, policy and guidance, engaging the community, and evaluation and monitoring, as an institutional AI-governance loop.
- **Onboarding.** Use the tier vocabulary for continuity with Louisiana students, and run an entry check since adoption was voluntary.
- **Keep the center.** Hold the student-centered principle, agency and ownership over learning, and keep the no-AI tier for core-skill assessment.`,

    unique: `- A single four-tier, assignment-level student scale, AI-Prohibited up to AI-Empowered, each tier paired with a step of a published technology-use model. Granular and directly portable to a syllabus.
- An explicit endorsement of detection tools and lockdown browsers, distinctive against the anti-detector trend in many other states.
- A four-part cyclical governance framework covering purpose, policy, community engagement, and evaluation.
- Companion working tools, a prompting framework called C.R.E.A.T.E. and a pre-work checklist for educators.
- Privacy grounded in Louisiana's own student-privacy statute, not only the federal laws.`
  },
  'Maine': {
    policy: `Maine's guidance is an interactive web toolkit, released by the state education department in February 2025, with no downloadable document. That format matters for what can be said here. The toolkit's full content was not captured in this project's records, so this entry rests on the portions of its text that could be confirmed.

What is confirmed. The toolkit is organized into three sections, Leadership, Teaching and Learning, and Ethics, under the banner principle "KEEP THE HUMAN IN AI". AI "enhances, rather than replaces our professional judgment". It carries two named memory aids. ROOTS, for school leaders, stands for Responsibility, Oversight, Opportunity, Transparency, and Sustainability. HUMAN, for in-the-moment decisions, stands for Halt, Utilize, Monitor, Authenticate, and Note.

Maine is reported to reject blanket technology prohibitions, which fits the human-centered framing, but the specific language was not captured. No student permission scale, prohibition list, or training plan could be confirmed. Those may exist inside the toolkit. This project could not see them.`,

    offloading: `Maine's confirmed position on protecting human thinking is the banner principle itself.

- "KEEP THE HUMAN IN AI" puts the commitment in five words. AI "enhances, rather than replaces our professional judgment".
- The HUMAN decision framework builds a pause into every AI decision. Its Halt and Authenticate steps imply a deliberate, verify-before-use habit rather than reflexive adoption.
- Anything more developed on over-reliance may exist in the toolkit, but it was not captured in this project's records.`,

    graduate: `What Maine students were actually taught cannot be described in detail, because the toolkit's full content was not captured. The honest profile is short.

- Maine has real, active state guidance. The gap here is in this project's records, not in the state's effort.
- A student from an adopting district likely met AI as a supervised, permitted tool rather than a forbidden one, given the human-centered framing and the reported rejection of blanket bans.
- They may recognize the memory aids, ROOTS for how school leaders govern AI and HUMAN for deciding whether to use it in the moment.
- Confirm any specific claim about Maine graduates against the live toolkit before building on it.`,

    implications: `- ROOTS translates directly to a department or college AI leadership structure. Responsibility, Oversight, Opportunity, Transparency, and Sustainability is a portable governance checklist.
- HUMAN is a compact heuristic a faculty member could hand to students for approaching any AI task. Halt, Utilize, Monitor, Authenticate, Note.
- Maine students from adopting districts likely experienced AI as supervised and permitted. A strictly restrictive college approach would contrast with what they knew in school.
- The capture gap carries its own lesson. An interactive toolkit is real guidance that a document review cannot reach. Check the live toolkit before making claims about Maine graduates.`,

    response: `- **First step.** Read the live toolkit before assuming a Maine baseline. What is known here rests on the portions that could be confirmed.
- **Borrow.** Adopt the memory aids, ROOTS for institutional AI leadership and HUMAN as a student-facing decision habit.
- **Onboarding.** Until the toolkit is captured, run an explicit AI-literacy orientation and assume no specific Maine baseline.
- **Integrity.** Provide clear per-assignment AI rules, since no Maine student permission scale is confirmed.
- **Keep the center.** Maine's own framing transfers whole. Keep the human in AI.`,

    unique: `- The guidance is an interactive web toolkit rather than a document, a delivery format no other state in this project used.
- A five-word banner principle, "KEEP THE HUMAN IN AI".
- Two named memory aids, ROOTS for leadership and HUMAN for decisions, both portable beyond K-12.
- A reported rejection of blanket technology prohibitions, consistent with the human-centered framing.`
  },
  'Maryland': {
    policy: `Maryland works from two documents. Senate Bill 720, the Artificial Intelligence Ready Schools Act, is law and creates duties. The June 2026 state framework explains how schools should meet them.

#### What the state is trying to do

- The framework puts people first. "Artificial intelligence should enhance, not replace, the educators, counselors, and school leaders who remain Maryland's primary decision makers."
- AI literacy is treated as a core skill. Students learn to "assess reliability, identify bias, understand underlying assumptions" about AI systems.
- The law orders the machinery built. Guidelines, professional development, and a statewide collaborative.
- Both documents align with the Blueprint for Maryland's Future and the state's computer science and digital literacy work.

#### Who it covers

- The framework addresses state leaders, district and school administrators, teachers, students and families, and vendors, and it "applies to all AI tools that interact with Maryland students, staff, or data".
- The law binds the state education department, county boards, local school systems, and one designated university.

#### What is allowed and what is not

- The framework "does not approve or prohibit specific tools". Each district decides what is permitted and what is banned.
- Data rules are firm. "Collection of biometric, behavioral, or location data is prohibited unless legally required and educationally justified", and personal information stays out of generative tools unless a tool is explicitly approved.
- Vendors face a gate. "Tools that fail to meet these standards must not be used."
- The law adds a certification step. AI tools used in schools must be certified with the support of a designated four-year university.

#### Privacy, fairness, and honesty

- Schools must follow the federal student-records, children's-online-privacy, and student-survey privacy laws along with Maryland's own regulations. "Algorithm-assisted decisions remain subject to nondiscrimination requirements."
- On cheating, Maryland rejects the detector shortcut. The framework calls detection tools "unreliable and inequitable", citing published research, and supports honesty "through instructional design, transparency, and human judgment". Concerns are addressed "through instruction rather than punishment".
- Equity and access get a dedicated section of the framework, and vendors must meet transparency, privacy, accessibility, equity, and security standards, including fairness testing.

#### Training, curriculum, and rollout

- Assessment must change. "Assessment practices must evolve to emphasize reasoning, analysis, reflection, and process over recall."
- Teacher training is role-specific and delivered through the state's AI Hub, with educator competencies aligned to a UNESCO framework.
- The law requires AI literacy standards and ties them to workforce preparation. AI literacy is due in state standards by June 1, 2027.
- The law also gives every district three fixtures. An adopted AI policy, a named central-office AI coordinator, and a statewide Maryland AI Education Collaborative to draw on.`,

    offloading: `Maryland treats the risk that students stop thinking for themselves as a first-order concern, not a footnote.

- The framework names "over-reliance on automated systems" among the core risks AI brings to schools.
- Its main answer is assessment design. Tasks should require "visible evidence of student thinking" and "reduce opportunities for AI substitution". Any AI use that "replaces essential skill development violates academic integrity".
- Teachers get the same caution as students. Professional learning must counter "the documented tendency to over-trust automated recommendations" and build habits of "critical evaluation, verification, and reflective practice".
- Students "must learn to critically evaluate AI outputs, verify information, and understand AI limitations".
- The framework never gathers this into one named section on offloading. The position is real but spread across the document.`,

    graduate: `Maryland sits between a voluntary state and a finished mandate, so the profile of an arriving student depends on when and where they graduated.

- The law is enacted, but AI literacy does not reach state standards until June 2027. A student arriving before then finished school while the requirements were still phasing in.
- A student from a district that moved early may know how to question an AI answer for reliability and bias, may be used to documenting their AI use, and lived under a district AI policy that named what was allowed.
- Their assignments may already have been built to resist AI shortcuts, asking for visible reasoning and process rather than recall.
- Once the standards land, Maryland graduates should arrive with one of the most uniform AI groundings in the country. Until then, treat any one student's experience as a district story, not a state story.`,

    implications: `- A Maryland university is written into the law. Morgan State University, or another four-year institution in the state, supports the certification and evaluation of the AI tools K-12 schools use. Maryland institutions are participants in this system, not just recipients of its graduates.
- Maryland students may arrive having been taught that AI detectors are "unreliable and inequitable". A course that leans on detector reports as primary evidence will collide with what these students were taught.
- The state's assessment standard, reasoning and process over recall with visible thinking, previews what incoming students will expect. It also reads as a ready template for redesigning a university course.
- The law gives every district a named, non-teaching AI coordinator. A university can fairly ask whether it has an equivalent dedicated role or whether the same work is spread across people who already have other jobs.`,

    response: `- **Partnership.** A Maryland institution can ask where it stands in the law's certification role and coordinate entry expectations with the schools that feed it. Institutions elsewhere can borrow the named-coordinator idea.
- **Integrity.** Follow the state's lead. Treat detector output as weak evidence, support honesty through assignment design and human judgment, and respond to concerns "through instruction rather than punishment".
- **Assessment.** Design tasks that show reasoning, reflection, and process, the same qualities Maryland requires of its schools.
- **Procurement and privacy.** Apply the state's vendor standards and its data-minimization rules to the institution's own tool purchases.
- **Faculty development.** Maryland trains by role. A university can do the same for faculty, advisors, and staff.
- **Keep the center.** AI should advance learning, not replace thinking. That is the framework's through line, and it transfers whole.`,

    unique: `- A university is named in the statute. Morgan State University, or another four-year institution, supports certifying and evaluating the AI tools K-12 schools use. It is among the most concrete higher-education roles any state has written.
- Every district must have a central-office AI coordinator whose job is not teaching. The role is mandated, not suggested.
- A statewide AI education collaborative exists by law.
- The state declines detector-driven enforcement and requires assessment designed to resist AI shortcuts instead.
- The June 2026 framework covers the full span, from roles and privacy through equity, integrity, training, literacy, operations, and purchasing, aligned to the Blueprint for Maryland's Future.`
  },
  'Massachusetts': {
    policy: `Massachusetts works from one document. The state guidance for AI in K-12 education is voluntary, written for district leaders, and developed with a task force drawn from fourteen districts and two national education associations. The state education department recommends. It does not require.

#### What the state is trying to do

- Five core principles anchor local policy. Data privacy and security. Transparency and accountability. Bias awareness and mitigation. Human oversight and educator judgment. Academic integrity.
- The human principle is stated plainly. "AI supports, but does not replace, educators. Teachers bring context, empathy, and moral reasoning that no machine can replicate."
- Integrity is defined by learning. "AI is used in ways that reinforce learning, not short-circuit it."
- An equity lens runs through the whole document, including explicit racial-equity-impact questions.

#### Who it covers

- Written for district leaders, who use it to build their own local guidance and policies.
- The principles reach past the classroom into operations, including purchasing, hiring, budgeting, and data dashboards.

#### What is allowed and what is not

- There is no statewide permission scale. Districts set expectations locally, using the five principles as "a checklist, filter, and compass".
- The clearest restriction is aimed at a practice, not at students. Districts are told to "Discourage AI detection tools" and "Eliminate reliance on AI detection tools".
- Tools should be approved only after vetting through a data-privacy-agreement process, and students should be protected from "unnecessary surveillance, data sharing, or automated decision-making without consent".

#### Privacy, fairness, and honesty

- Schools follow the federal student-records and children's online privacy laws, keep strong data governance, and publish a list of digital tools describing how each one is used.
- Transparency is owed to people. "Educators, students, and families deserve to know when AI is involved in learning, grading, decision-making, or access to services."
- Equity is framed as three digital divides, drawn from the 2024 National Educational Technology Plan. The Access Divide covers devices and internet. The Use Divide covers how students and teachers actually use AI. The Design Divide covers "gaps in teacher training on designing meaningful AI-based learning experiences".
- Bias gets working machinery. Purchasing includes bias analysis, teachers practice probing tools by "adopting different names and roles to observe and discuss variations in responses", and students get a channel to report biased or stereotypical outputs.
- On honesty, the guidance warns that "while AI detection tools may seem like a quick fix, they are often inaccurate, reinforce punitive mindsets".
- Students disclose instead. Work includes an "AI Used" section explaining which tools were used and how, teachers distinguish "AI-assisted brainstorming and AI-written content", and schools "teach and encourage thoughtful integration of AI rather than penalizing use outright".

#### Training, curriculum, and rollout

- Teaching about AI and teaching with AI are distinguished, and both are treated as necessary.
- The Design Divide names the training gap. Teachers need help designing AI-integrated learning, not just access to tools.
- The document supplies "tools, scenarios, questions, and models" along with district self-assessment and planning structures.
- Human oversight extends into school operations, with principals reviewing AI outputs for "rostering, scheduling, or communications".`,

    offloading: `Massachusetts guards learning through its integrity principle rather than a separate section on students handing their thinking to the tool.

- The core commitment is one line. "AI is used in ways that reinforce learning, not short-circuit it", with "an emphasis on originality, transparency, and reflection".
- Schools are directed to "move beyond detection and toward deeper engagement with thinking".
- The human role is protected in the same breath. "Teachers bring context, empathy, and moral reasoning that no machine can replicate."
- Disclosure through an "AI Used" section makes AI's role visible rather than hidden.
- A developed treatment of the learning science, memory, practice, and over-trust research, is not in the document. The guard is the principle plus engagement over detection.`,

    graduate: `The guidance is voluntary, so what a Massachusetts student actually met depends on whether their district picked it up.

- A student from an adopting district practiced disclosure as a habit, adding an "AI Used" section that explains which tools they used and how.
- They were taught AI literacy grounded in bias awareness and critical evaluation, and some had a way to report biased or stereotypical AI outputs to their school.
- Their school was told to teach and integrate AI use rather than penalize it outright, so they may treat questions about AI as normal classroom conversation rather than a risk.
- They may arrive expecting disclosure-based integrity and no detector surveillance, because their district was told to eliminate reliance on detection tools. Expect a wide range around all of this, since adoption was never required.`,

    implications: `- Students from adopting districts were taught that detection tools are "often inaccurate" and "reinforce punitive mindsets". A course that treats detector reports as primary evidence will collide with that schooling.
- The Design Divide names a gap higher education shares. Faculty capacity to design AI-integrated learning, not access to tools, is the scarce resource. It reads as a ready diagnostic for faculty-development priorities.
- The "AI Used" disclosure section is portable. A course could adopt it directly with almost no friction.
- Massachusetts extends its five principles into operations. An institution can apply the same principles to its own administrative AI use, from purchasing to dashboards.`,

    response: `- **Integrity.** Support honesty through disclosure and engagement rather than detection. An "AI Used" section on submitted work continues what adopting districts taught.
- **Faculty development.** Treat the Design Divide as the priority. Invest in faculty capacity to design AI-integrated learning, not just tool access.
- **Governance.** Adopt the five principles as an institutional checklist that spans instruction and operations.
- **Assessment.** Emphasize originality, transparency, and reflection, and teach the difference between AI-assisted brainstorming and AI-written content.
- **Equity.** Apply the three-divides lens and the racial-equity-impact questions to tool selection and training.
- **Keep the center.** AI should reinforce learning, not short-circuit it. That principle transfers whole.`,

    unique: `- The direction to "Discourage AI detection tools" and "Eliminate reliance on AI detection tools" is among the strongest anti-detector stances any state has taken.
- The three-divides framing, access, use, and design, comes from the 2024 National Educational Technology Plan, and the Design Divide points straight at teacher and faculty capacity.
- The five principles are built to be reused as "a checklist, filter, and compass" across instruction and operations.
- Student work carries an "AI Used" disclosure section.
- The guidance was co-developed with a task force of fourteen districts and two national education associations.`
  },
  'Michigan': {
    policy: `Michigan's official guidance is not a policy. It is a one-page self-assessment rubric, written by the nonprofit Michigan Virtual and endorsed by the state education department, that helps a district judge how ready it is for AI.

#### What the state is trying to do

- The rubric states its own purpose, "to outline key planning considerations for the use of AI in school districts... to assist educational leaders in assessing their preparedness".
- A district locates itself at one of three stages, Investigating, Implementing, or Innovating, across eight areas of work, then plans its next step. It is "a rubric, not a policy".
- The leadership goal keeps people in the picture. The most advanced stage envisions harnessing AI "while leveraging the distinct human talents of educators and staff".

#### Who it covers

- Addressed to district leaders, for planning across teaching, learning, and operations.
- The eight areas span leadership, policy and ethics and law, instruction, assessment, professional learning, student use, business and technology operations, and community outreach.

#### What is allowed and what is not

- Nothing, by design. The rubric contains no permission scale and no prohibition list. Rules for students live in local district policy, and the rubric only measures how mature that policy work is.

#### Privacy, fairness, and honesty

- These are areas to mature, not rules to follow. A district early in the work is in the "early stages of examining" risks and access. A district at the top holds "Board-approved policies, robust ethical guidelines, and a strong legal framework, demonstrating a commitment to accountability, data privacy, compliance", with a plan "to narrow educational equity gaps".
- Equity language recurs across the areas.
- A position on AI detectors, a list of privacy laws, or an academic-integrity rule is not in the document. The rubric does not operate at that level.

#### Training, curriculum, and rollout

- Professional learning matures from teachers seeking training on their own, to organized offerings and the expertise "to teach AI ethics to students", to AI generating "personalized professional development solutions".
- Instruction matures toward personalized learning, learner ownership, and intelligent tutoring.
- Assessment matures toward using AI to "holistically assess learning experiences and outcomes, including creativity, critical thinking, inventive problem-solving".`,

    offloading: `The rubric describes what mature AI use looks like rather than teaching tactics against students handing their thinking to the tool.

- Its learning-preservation signal sits in the top-stage descriptions. Assessment at the Innovating stage values "creativity, critical thinking, inventive problem-solving, and the application of knowledge in real-world situations".
- Student use at the top stage means "critically assessing AI's societal impact... and making informed judgments about the authenticity and origin of content".
- Leadership at the top stage preserves "the distinct human talents of educators and staff".
- A developed treatment of over-reliance is not in the document. The rubric names outcomes, not the classroom moves that produce them.`,

    graduate: `The rubric rates districts, not students, so a Michigan graduate's preparation tracks how far along their district was.

- From a district at the Innovating stage, a student used AI to support their learning goals while "critically assessing AI's societal impact, including biases, privacy concerns, and fairness issues" and judging "the authenticity and origin of content".
- From a district still Investigating, the same diploma may rest on scattered AI exposure in a few classes.
- Nothing in the rubric told any student what they could or could not do. Those rules were local, and this project has no data on how districts spread across the three stages. Plan for the full range in any Michigan group.`,

    implications: `- The rubric transfers to a campus almost unchanged. Its eight areas and three stages work as a university AI-readiness self-assessment with little adjustment.
- The top-stage student-use description doubles as a definition of an AI-ready first-year student. Critical assessment of bias, privacy, and fairness, plus judgment about the authenticity and origin of content. It works as both a target and a diagnostic.
- Michigan reframes the useful question. Not whether the state has guidance, but where a student's district sat on the readiness curve. The district is the real variable.
- The rubric was written by a nonprofit and endorsed by the state, not mandated by it. Weigh it as a planning tool, not a governing rule.`,

    response: `- **Governance.** Run the three-stage, eight-area rubric on the institution itself. Locate the current stage in each area and plan the next step.
- **Onboarding.** Use the top-stage student-use description as a target AI-literacy profile, and check incoming students against it expecting a wide range.
- **Faculty development.** Mirror the professional-learning progression, toward faculty who can teach AI ethics and design AI-integrated learning.
- **Assessment.** Move toward assessing creativity, critical thinking, and real-world application, the qualities the rubric's top stage names.
- **Keep the center.** The rubric's through line is "the distinct human talents of educators and staff". That framing transfers whole.`,

    unique: `- A maturity rubric instead of a policy. Three stages, Investigating, Implementing, and Innovating, across eight areas of work. Districts self-locate rather than comply.
- Written by the nonprofit Michigan Virtual and endorsed by the state education department, a governance arrangement few states share.
- Perhaps the most campus-ready document in the fifty-state set. It converts to an institutional self-assessment almost without edits.
- Its top stage contains a clear working definition of AI-literate student use.
- The rubric once failed retrieval and was flagged as tracker-sourced in this project's records. It has since been confirmed from the primary text, three stages across eight areas, exactly as reported.`
  },
  'Minnesota': {
    policy: `Minnesota works from one short document. The state education department's guidance, updated in June 2026, is voluntary and principles-based, built on the U.S. Department of Education's 2023 educational-technology report and a national framework for AI-powered learning environments.

#### What the state is trying to do

- Five guiding principles carry the document. Vision and values. Center people. Advance equity. Ensure safety, ethics, and effectiveness. Continuous improvement.
- Center People is the through line. "People, not machines, should be at the center of decision-making, and educators, students and families should retain their agency as the primary decision-makers."
- The framing objective is a single distinction, that "guidelines should distinguish between AI as a learning aid versus a replacement for thinking".

#### Who it covers

- Written for school leaders, teachers, and district decision-makers, with a section walking districts through creating their own guidance.

#### What is allowed and what is not

- No statewide permission scale. Districts are told to "begin with existing guidance, procedures, and policies", especially on data privacy, assessment, and academic integrity.
- The state warns that "outright bans can shut down opportunities for learning and growth".
- Teachers get a screen for choosing tools. Age-appropriateness, value to learning, unintended consequences, and data practices, checked before any purchase.

#### Privacy, fairness, and honesty

- Safety, ethics, and effectiveness form one of the five principles, with data privacy, security, and content appropriateness as primary considerations, alongside the state's own education-data law.
- Equity is both a named principle and a named challenge. The guidance flags AI's potential to widen the digital divide and warns about biased data.
- Accessibility is treated as an opportunity. AI can "translate lessons and provide language supports for English Learners" and "generate audio descriptions" for students with disabilities.
- Academic integrity is an area for districts to address with existing policy and community conversation before setting expectations. A position on AI detection tools is not in the captured document.
- One inclusion stands out. The resource list points districts to guidelines for AI youth mental-health tools from the Children's Hospital Association.

#### Training, curriculum, and rollout

- Staff learning is a priority, with "differentiated professional learning opportunities for not only teachers, but all staff".
- AI literacy is for all learners, including "how AI works and how it affects the world around us".
- Districts should create opportunities for ideas "to be shared, refined, and built upon", and include student voice in writing their guidance.
- The state models learning from others, pointing districts to a Digital Promise review of seven other states' guidance.`,

    offloading: `Minnesota states the risk of students handing their thinking to the tool more plainly than almost any state.

- The core passage is worth reading whole. "Without clear boundaries, students may rely on AI to complete tasks they should be practicing themselves, bypassing... the repetition necessary to build foundational skills and cognitive capacity. Guidelines should distinguish between AI as a learning aid versus a replacement for thinking, ensuring students develop genuine understanding rather than simply producing AI-assisted work."
- Overreliance on technology is named as its own challenge. "Excessive dependence on AI could reduce critical thinking, creativity and social interaction in the classroom."
- The Center People principle keeps teachers "guiding students' development of critical thinking, collaboration, and application of knowledge".
- The guidance does not cite the learning research behind the position. The position itself is unambiguous, and it functions as the state's answer to the problem.`,

    graduate: `The guidance is voluntary, so a Minnesota student's actual experience turns on their district's choices.

- A student from an adopting district absorbed a human-agency framing, that people and not machines make the decisions, and that teachers, students, and families keep that role.
- They were taught why some work stays unaided, that repetition is what builds foundational skills and thinking capacity, not just that a rule says no.
- Their AI literacy may reach past use into understanding, how AI works and how it affects the world around them.
- Because the state argued against outright bans, they are more likely to have met measured access than prohibition. Expect a wide range, since nothing was required.`,

    implications: `- The learning-aid-versus-replacement framing is ready-made for a syllabus. It explains in plain words why some coursework must stay unaided, and Minnesota students may already recognize it.
- The state's start-from-what-you-have stance transfers directly. Most institutions already hold integrity, accessibility, and data-governance policies that cover more AI ground than assumed.
- The youth mental-health procurement resource speaks to campus wellness and counseling tools. The vendor-evaluation framing is borrowable.
- Minnesota openly learns from other states. The same habit, institutions comparing AI policy across campuses, is a model worth copying.`,

    response: `- **Governance.** Start from existing policy rather than building a standalone AI regime, and put people at the center of decisions, the way the state's own principles do.
- **Assessment.** Use the learning-aid-versus-replacement line to mark where unaided work is required, and say so on each assignment.
- **Integrity.** Address honesty through expectations and community conversation. The state guidance builds no detection regime, and nothing in it invites one.
- **Onboarding.** Teach AI literacy explicitly, including how AI works and how it affects the world, and check what incoming students already know rather than assuming.
- **Support services.** Apply the youth mental-health AI procurement guidance to campus wellness tools.
- **Keep the center.** The overreliance caution and the foundational-skills language carry the whole argument. Some capacities are built only by practice.`,

    unique: `- Center People is a named guiding principle, human agency written into the state's own list.
- The statement distinguishing AI as a learning aid from a replacement for thinking is among the cleanest any state has produced.
- The state explicitly encourages learning from other states and knowledge-sharing between districts, and points to a published review of seven states' guidance.
- A youth mental-health AI procurement resource appears in the guidance, a rare inclusion.
- An anti-ban stance pairs with start-from-existing-policy pragmatism.`
  },
  'Mississippi': {
    policy: `Mississippi's guidance is a classroom-practice document, not a rulebook. The state education department's digital learning office wrote it, university partners reviewed it, and nothing in it binds a district. The operative rules live in each district's acceptable use policy. A separate 2025 law created a general state AI task force, but it sets no requirement on schools, and its text was not captured in this project's records.

#### What the state is trying to do

- The human element comes first. "AI-powered tools can never replace the human element of teaching."
- Intent, not the tool, is the test. "The tool, device, or process itself is not right or wrong... educators' and students' purpose and intent when using the technology determines its benefits and appropriateness."
- Inaction is named as the real hazard. The document quotes the argument that "the biggest risk is doing nothing" and calls banning AI tools "impractical" because AI already runs inside ordinary software.
- The guidance builds on the state's existing five components of digital learning rather than inventing a new regime. Digital citizenship, standards-aligned content and tools, active learning and engagement, formative assessment and feedback, and accessibility.

#### Who it covers

- Every section speaks to three audiences at once, students, teachers, and administrators, in parallel strategy lists.
- Scope is all K-12 classrooms, with no grade bands and no age-differentiated rules.
- Authority rests with districts. Students and teachers get one standing order. "Know and follow the acceptable use policies developed by the school district."
- The closing note says "local schools have discretion over which technology partners and products are used".

#### What is allowed and what is not

- There is no statewide permission scale and no statewide prohibition list. The line between allowed and not allowed is drawn district by district and assignment by assignment.
- Teachers are told to "determine what cheating or plagiarism looks like for each assignment" and then "clearly articulate the criteria to students and families".
- The per-assignment process is spelled out. "Before the assignment begins, review both appropriate and inappropriate uses of AI tools for the specific assignment. Be explicit with the websites or tools students can use."
- Prohibition is discussed only to argue against it as a blanket approach.

#### Privacy, fairness, and honesty

- Digital citizenship is the foundation, covering safe, kind, and responsible use, citing sources, and critically analyzing AI output.
- Privacy runs through federal law. Administrators protect student privacy under the federal children's online privacy and student-records privacy laws and examine tool privacy policies for compliance.
- Accessibility is elevated. "Perhaps the most powerful use of AI tools in place today is the ability to provide personalized, targeted support for students", through text-to-speech, translation, leveled explanations, and support for individualized education programs.
- Integrity strategies are pedagogical first. Know each student's writing style, require drafts and process documentation, review version history, redesign assessments to resist AI, and try the prompt in an AI tool yourself to see what comes back.
- On detectors the state is skeptical. "In most cases, these tools do not accurately detect AI-generated material, especially material that contains only a few hundred words." It warns that these tools "can falsely identify the writings of English Language students as generated material simply because their writing skills are still developing".
- The document is cautionary rather than opposed. One teacher strategy still points to plagiarism checkers, and administrators are told to "weigh the pros and cons" of detection tools, many of which it calls costly and "only somewhat effective".

#### Training, curriculum, and rollout

- Teacher training gets its own section, covering informed use, checking accuracy through lateral reading, evaluating response quality, acknowledging bias, detecting plagiarism, redesigning learning activities, and classroom policies.
- AI enters the curriculum by embedding into existing practice, not through a standalone course, with AI offered as a "thought partner" for building lessons aligned to the state's academic standards.
- Assessment advice cuts both ways. Redesign tasks so AI cannot simply answer them, and use AI to generate practice questions, give instant feedback, and build rubrics.
- District leaders get a checklist. Evaluate tools, follow security guidelines, monitor use, expand digital citizenship, and gather feedback in a "continuous feedback loop".`,

    offloading: `Mississippi names the risk of students handing their thinking to the tool and answers it with scaffolding and task design.

- The opening cautions say AI can "invite over reliance that may limit critical and original thinking".
- Its clearest instruction is a fade-out principle. Educators should be "mindful of properly scaffolding these supports, gradually reducing students' reliance on these tools". AI supports are temporary, withdrawn as the student gains competence.
- Thinking is protected through assessment redesign rather than prohibition, pushing toward tasks "difficult for AI to provide the answers", open-ended prompts, and student-built visual and collaborative work.
- Students build an interrogation habit, told to "check the validity of the information and sources" AI gives, with teacher training aimed at "lateral reading and fact-checking".
- Reflection is a recommended practice, where students "reflect on how AI tools were used for idea generation and feedback during the writing process and how this support impacted the final product".`,

    graduate: `The guidance is voluntary and the rules were local, so these are ceilings of possibility rather than guarantees.

- A Mississippi student's operative rulebook was their district's acceptable use policy. They are more likely to expect one institutional rulebook than a per-assignment permission scale, which the state never built.
- Where teachers followed the digital-citizenship guidance, the taught habit was to cite information acquired from AI and to check the validity of the sources AI provides.
- Students with support needs may have met AI first as accessibility help, text-to-speech, translation, dictation, and leveled explanations, with the expectation that the scaffolding fades as they progress.
- Where honesty was checked at all, it ran on drafts, version history, and AI-resistant assignments rather than detection software. Expect the full range, from districts with rich AI practice to districts with little beyond a short acceptable use policy.`,

    implications: `- Mississippi students learned AI norms as a district rulebook, not an assignment-by-assignment permission scale. A syllabus that sets AI permission per task will be a new pattern to teach, not a familiar one.
- Students were taught that inaction and blanket bans are both wrong answers. They may expect their institution to hold an active, articulated AI position rather than silence.
- Students may have been taught that AI detectors misfire, especially against developing writers and English learners. Detector-led enforcement will meet students schooled to distrust the tool doing the enforcing.
- Accessibility was framed as AI's most powerful use, so students with support needs may arrive expecting AI accommodations as normal classroom infrastructure, with scaffolding that fades as they gain skill.
- The integrity model was process-based, built on drafts, reflection, and AI-resistant design. Students from adopting classrooms may already document their writing process, a habit a course can build on rather than introduce.`,

    response: `- **Assessment.** State AI permission explicitly on every assignment, since Mississippi students likely never met a standardized scale. Where the goal is core-skill demonstration, use the AI-resistant designs the state already models, real-world projects, collaboration, and context-specific prompts.
- **Integrity.** Favor process and disclosure over detector reliance. That continues what many Mississippi students were taught, that detectors are costly, unreliable, and biased against English learners.
- **Onboarding.** Run a short entry check of AI literacy rather than assuming it. The rules were local, so the range will be wide.
- **Accessibility.** Confirm that sanctioned campus AI tools carry the features the state called most powerful, text-to-speech, translation, and leveled explanation, and that access does not depend on paying for a premium tier.
- **Faculty development.** Offer faculty the state's lateral-reading and fact-checking framing, and its technique of entering the assignment prompt into an AI tool to see what it produces.
- **Governance.** Assume no uniform prior training. Set a common baseline at entry.`,

    unique: `- Organized around the state's five existing components of digital learning rather than an AI permission scale, so AI reads as continuous with prior Mississippi digital-learning work.
- Every component carries parallel strategy lists for students, teachers, and administrators.
- Few states argue against bans this bluntly. Banning is called "impractical", and the document quotes the line that "the biggest risk is doing nothing".
- A scaffolding-fade principle ties AI supports to growing competence, "gradually reducing students' reliance on these tools".
- University partners reviewed the document, iTeach at Kennesaw State University and faculty from the Mississippi AI Collaborative powered by Microsoft, including Jackson State University.
- Personalized student support is called "the most powerful use of AI tools in place today", a stronger framing of assistive uses than most states give.`
  },
  'Missouri': {
    policy: `Missouri's guidance is a policy-writing aid, not a rulebook. The state education department published it for the 2025-26 school year, written by its computer science advisory council, and it rests on the state's local-control law. School boards write their own AI policies. The state encourages good use and mandates nothing. A separate 2026 bill on computer science course requirements was introduced, but its final status is not confirmed in this project's records.

#### What the state is trying to do

- The philosophy is supplement, not substitute. "While AI serves as a powerful tool, it should supplement human thought and decision-making rather than replace it."
- Workforce readiness organizes the whole case. The document leans on the World Economic Forum's finding that "75 percent of the companies surveyed intend to integrate generative AI by 2027" and argues that "educators must devise strategies to equip students for economic empowerment".
- The stated primary purpose of AI in schools is to enhance student outcomes.
- Local control is the legal frame. Under the state's local-control law, districts write their own AI policies, and the state only highlights points for them to consider.

#### Who it covers

- Addressed to districts, administrators, educators, and support personnel, with challenges and benefits organized by level, from students to schools to district leadership to parents and community.
- The state urges districts to "infuse AI literacy into all grade levels and curriculum areas", but supplies no grade-band rules.

#### What is allowed and what is not

- No statewide permission scale and no prohibition list. Allowed and disallowed uses live in each district's acceptable use policy.
- One line comes close to a rule. "AI should not be used in standardized testing without explicit state approval."
- Districts should "obtain explicit parental/guardian permission for students under 18", and the document notes that "many generative AI tools have age restrictions... usually on students under the age of 13".
- The guidance gestures at rating scales, telling educators to "encourage the use of AI acceptable rating scales for both students and overall school AI use", but it supplies none.

#### Privacy, fairness, and honesty

- The ethics section anchors on federal law, naming the federal student-records privacy law, the federal children's online privacy law, the federal special-education law, the federal school internet-safety law, the federal disability-access rule, and the Americans with Disabilities Act.
- Data privacy gets the most detail. Define personal information and keep it out of generative tools, train users, get parental permission, and negotiate contracts so vendors do not "use their data or information to train the vendor's models".
- Equity is framed as an AI-driven digital divide. "AI could create a divide between students who can access AI and those who can't."
- Integrity runs on redesign and honor. Teachers "restructure the learning environment", use conferences and formative assessment, and "assess and emphasize the student honor code".
- The document neither endorses nor cautions against AI detectors. Its integrity approach simply runs elsewhere, through process and honor codes.

#### Training, curriculum, and rollout

- Professional development is treated as the prerequisite, through workshops, "micro-credentials or micro-badges", and guided share sessions, with resources funded through a state computer science grant fund.
- Prompt writing is elevated to a "key skill for educators and students alike". The document teaches prompt types and the "Five S" model from AI for Education. Set the scene, be Specific, Simplify, Structure the output, Share the feedback.
- AI literacy embeds across subjects rather than living in a standalone course.
- Policy work is cyclical. Districts "should adopt a cyclical process for their AI policies to ensure continuous improvement", and the document recommends appointing "an AI Coordinator".
- Purchasing guidance covers alignment to learning goals, vendor data security, community input, and pilot testing.`,

    offloading: `Overreliance is one of the risks Missouri names most consistently.

- The student challenge is stated flat. "Students may use AI to write essays, complete assignments, or answer questions without fully understanding the underlying concepts." The document separately warns of a loss of human interaction leading to "loneliness, isolation, and anxiety".
- The central answer is teacher modeling, that "educators should model how they use AI as a starting point for writing to show students how to analyze AI responses so that they can craft appropriate prompts".
- Human oversight is its own named best practice, justified by bias, fabricated answers, lack of ethical judgment, and no contextual understanding. Both educators and students "must assess AI-generated results to ensure accuracy and avoid bias".
- The human educator is defended as irreplaceable. AI "cannot determine the context that exists within the learning environment or develop empathy", and "students still require a human presence to listen and show empathy".
- The Rigor principle turns AI toward harder work, not easier. "Rather than simplifying tasks, AI can provide students with opportunities to tackle more complex challenges."
- Self-regulation is taught directly, alongside "conferences, formative assessments, and opportunities for students to demonstrate mastery".`,

    graduate: `The guidance is voluntary and the operative rules were district-written, so these are ceilings of possibility, not guarantees.

- A Missouri student's AI rules came from a local acceptable use policy. Expect a district rulebook, not a portable leveled vocabulary, because the state supplied no scale.
- Where teachers followed the guidance, prompt writing was taught as an explicit skill, with named prompt types and the "Five S" method. Set the scene, be Specific, Simplify, Structure the output, Share the feedback.
- The state tied AI literacy to future jobs throughout, so these students may understand AI first as an economic and career competency.
- Some met AI as a study aid, through individualized explanations, summaries, instant feedback, and personalized tutoring.
- In formal testing, the taught expectation was that AI stays out without approval. Expect a wide range in everything else.`,

    implications: `- Missouri students likely never met a leveled AI-use scale. A per-assignment permission structure will need to be taught explicitly, not assumed.
- The workforce framing shapes expectations. Students may look for AI instruction that connects to careers and may value hands-on tool fluency over conceptual restraint. Tying course AI policy to disciplinary and professional practice meets them where they were taught.
- Students trained on the "Five S" model arrive with a shared prompt vocabulary a course can extend toward source evaluation and verification rather than reteach.
- The integrity model was process- and honor-code-based. Students from adopting districts may expect conferences, drafts, and mastery demonstrations rather than surveillance, and were taught AI is off-limits in formal testing without approval.
- University faculty helped write the document. Faculty from the University of Central Missouri, the University of Missouri-Columbia, Missouri State University, and Northwest Missouri State University sat on the authoring council, so Missouri institutions may already hold in-house expertise aligned to the K-12 guidance.`,

    response: `- **Assessment.** State AI permission per assignment, and preserve AI-free assessment where core skills must be demonstrated, mirroring the state's standardized-testing restriction.
- **Integrity.** Run on process and honor codes, which continues what many Missouri students were taught. Do not lean on AI detectors, which the state guidance neither endorses nor recommends.
- **Onboarding.** Give a short AI-literacy check at entry. The rules were local, so the range will be wide.
- **Prompt literacy.** Build on the "Five S" vocabulary rather than starting from zero, and extend it toward critical evaluation and citation.
- **Careers.** Connect course AI policy to disciplinary and professional norms, matching the framing Missouri students already carry.
- **Governance.** Set a common baseline at entry, and consider naming an AI point person, mirroring the state's recommendation that districts appoint an AI coordinator.`,

    unique: `- Written by a computer science advisory council with named university faculty from four Missouri institutions, now confirmed at the primary source after earlier tracker-only attribution.
- A workforce-readiness spine. Few state documents lean as hard on labor-market projections as the organizing case for AI literacy.
- Prompt writing treated as a core competency, with named prompt types and the "Five S" model made explicit.
- Five named best practices, Responsible Implementation, Transparency, Rigor, Curiosity, and Ensuring Human Oversight. The Rigor principle's insistence that AI raise task difficulty rather than lower it stands out.
- A firm testing restriction. "AI should not be used in standardized testing without explicit state approval."
- An explicit parental-permission threshold for students under 18, stronger than most state guidance.
- A recommended district AI coordinator, an administrative hook comparable to Maryland's mandated central-office coordinator.`
  },
  'Montana': {
    policy: `Montana works from one document. The October 2025 guidelines from the Montana Office of Public Instruction, written with the Frontier Learning Lab at the Montana Digital Academy, are voluntary guidance, a "living document" on a regular review cycle. Nothing in them binds a district. The state school-boards association is releasing companion model policies that districts are urged to consult.

#### What the state is trying to do

- Human-centered AI is the spine. The guidance holds that "AI should serve to strengthen human capabilities... rather than undermining human intelligence, agency, or the fundamental human-to-human relationships".
- Five core principles anchor local policy. Data privacy and security, transparency and accountability, bias awareness and information verification, human oversight and educator judgment, and academic integrity. Districts are encouraged to adopt them.
- Montana's rural, urban, and tribal context shapes the whole document, named on the cover and throughout.
- Local control governs. "AI decisions ultimately rest with individual school districts."
- The state declines to import outside frameworks as rules. They "should be treated as adaptable references, rather than mandates", because "not all frameworks align with Montana's cultural, legal, or rural context".

#### Who it covers

- The guidance is prepared for "Montana educators, administrators, families, and policymakers" and written primarily to help district leaders develop policy.
- It spans all of K-12, with AI meant to be woven across subjects and grade levels in age-appropriate, progressively scaffolded ways. There is no grade-band chart and no leveled scale.

#### What is allowed and what is not

- There is no statewide permission scale and no statewide prohibition list. Districts decide, and the state recommends each district ground its policy explicitly in Montana school law.
- One distinctive restriction protects tribal materials. Districts should use resources aligned with the Indian Education for All act as provided, "without altering or remixing them with AI tools".
- Personal information stays out of unauthorized tools, for students and staff alike.

#### Privacy, fairness, and honesty

- Privacy rests on both federal and Montana law. Beyond the federal student-records privacy law and the federal children's online privacy law, the guidance cites the Montana Pupil Online Personal Information Protection Act, which bars targeted advertising, sale of student information, and non-educational use, and requires privacy safeguards in vendor contracts. Those statutes bind districts even though the guidance itself does not.
- Indigenous data sovereignty is written into the privacy section. "Tribes maintain jurisdiction over their data and digital materials" and hold "the right to determine whether and how AI systems interact with their cultural knowledge".
- Accessibility is by design. Tools should meet web accessibility standards and federal accessibility rules and provide text-to-speech, translation, and adaptive interfaces.
- The guidance names AI's demands on "energy, materials, water, and... carbon emissions" as an ethics topic. Few state documents raise the environmental cost at all.
- Academic integrity is framed around "originality, transparency, and reflection", with clear expectations for "when and how students use AI tools" and an emphasis on "proper attribution, and acknowledging AI's contributions". The guidance never discusses AI detectors. Its integrity approach runs on expectations and reflection, not detection.

#### Training, curriculum, and rollout

- Professional learning follows five guiding ideas. Build foundational AI literacy, embed ethics and equity, support role-specific skills, emphasize human oversight, and encourage continuous growth. Recommended practices include tiered training, hands-on low-stakes practice, teacher learning communities and cross-district networks, and parallel learning for families.
- AI concepts sit inside regular subjects rather than a separate course, built on "basic literacy, numeracy, coding, and media and information literacy".
- A five-phase roadmap carries districts from vision through policy, training, and access to ongoing monitoring and improvement.
- Capacity building leans on shared infrastructure and higher education. The Montana Digital Academy, regional service cooperatives, state education organizations, and partnerships with universities, community colleges, and Montana's tribal colleges.`,

    offloading: `Montana names the risk of students handing their thinking to the tool and ties it to a value it wants protected, productive struggle.

- The risk list states it plainly. "Students depending too heavily on AI may bypass critical thinking and the deeper learning that comes from productive struggle."
- It adds a social dimension few states name. "Excessive AI use can reduce face-to-face interaction and social-emotional development, particularly in younger learners."
- The answer is human judgment. "AI should prompt deeper critical thinking, not diminish it." Students learn to check AI output for accuracy, relevance, and fairness against reliable sources.
- Age is a stated control. Integration "should account for students' cognitive and emotional development, especially their ability to critically evaluate AI outputs", and the ethics section flags "age limits for unsupervised AI interaction".
- Teachers stay in charge. "AI should support, but not replace, educators. Teachers bring context, empathy, and moral reasoning that no machine can replicate." Anything AI generates "should be critically reviewed before classroom use".`,

    graduate: `The guidance is voluntary and rural capacity varies widely, so these are ceilings of possibility, not guarantees.

- The rules a Montana student lived under came from a local board-approved policy, which the state urged districts to ground explicitly in Montana school law. There was no state scale to memorize.
- Where teachers followed the guidance, students met AI as a literacy running through regular subjects, built on reading, math, coding, and media literacy, and practiced checking AI output for accuracy, relevance, bias, and fairness against reliable sources.
- Students from tribal communities may carry a specific norm. Tribes decide whether and how AI systems touch their cultural knowledge, and materials from the Indian Education for All curriculum are used as provided, never remixed with AI.
- Students whose districts taught the ethics content may also know AI's environmental costs and the habit of naming AI's contribution to their work.
- Tool access tracks rural connectivity. Two Montana graduates can arrive with very different hands-on histories, so expect a genuinely mixed incoming class.`,

    implications: `- Montana writes higher education into K-12 AI governance more explicitly than most states. The Board of Regents is named among the state's "Constitutional Players", and the guidance says "The Montana University System plays a critical role in preparing teachers who can effectively integrate AI tools and in conducting research that informs K-12 AI implementation". A Montana institution may already be a formal partner in the pipeline that feeds it.
- Rural infrastructure limits hands-on AI experience regardless of aptitude. Plan for a common baseline at entry rather than assuming uniform prior fluency.
- Students from tribal communities may arrive holding a clear norm that cultural knowledge stays under tribal authority and does not get fed to or remixed by AI. Institutions handling Indigenous materials or working with tribal students can respect and build on that norm.
- Students from adopting districts learned AI as a cross-subject literacy tied to critical thinking and productive struggle. Course policies that protect difficulty and reward reasoning over output will feel familiar to them.
- The roadmap names universities and tribal colleges as partners for educator preparation and research, so teacher-preparation programs in the Montana University System are positioned to align their AI training with the state framework.`,

    response: `- **Partnership.** A Montana institution can confirm where it stands in the Board of Regents role and the University System's teacher-preparation and research charge, then align entry expectations with the state framework.
- **Onboarding.** Give a short AI-literacy check at entry. Differences between rural, tribal, and urban graduates will be wide.
- **Assessment.** State AI permission explicitly on each assignment, since Montana offered no standardized scale, and protect the assignments that require productive struggle. That mirrors the state's own stated concern.
- **Tribal sovereignty.** Programs working with Indigenous materials or tribal students can adopt handling norms consistent with what Montana students were taught, that cultural knowledge stays under tribal authority.
- **Integrity.** Favor reflection, attribution, and process. The state guidance offers no detector endorsement to build on.
- **Teacher preparation.** Align education coursework with Montana's five core principles and roadmap, and partner with tribal colleges as the roadmap envisions.`,

    unique: `- Tribal sovereignty and Indigenous data sovereignty are written directly into AI policy, grounded in the Montana Constitution and the Indian Education for All act, with a concrete restriction against remixing those materials with AI. This is Montana's most distinctive contribution.
- A governance map of "Constitutional Players" formally includes the Board of Regents of Higher Education alongside K-12 authorities, and a dedicated section connects the guidance to higher education and the workforce.
- Rural realities are treated as a design constraint. Intermittent connectivity, educators wearing several roles, and reliance on regional cooperatives and shared services.
- The environmental cost of AI is named as an ethics topic, rare among state guidance.
- Montana refuses to treat outside frameworks as mandates and deliberately adopts no leveled permission scale.
- Data privacy is anchored in Montana's own statute, the Montana Pupil Online Personal Information Protection Act, plus a state student-data privacy agreement where it applies.
- Named companion infrastructure exists. Model policies from the state school-boards association and statewide support from the Frontier Learning Lab at the Montana Digital Academy.`
  },
  'Nebraska': {
    policy: `Nebraska published no state K-12 AI guidance, and the absence was checked directly for this project. The state education department's technology and digital-resources pages, its own online staff course, and site-wide searches all turned up no framework, no scale, and no mandate for districts.

The nearest artifacts are not district guidance. The department's digital-resources page links to outside materials from a group called AI for Education, a "GenAI Literacy 101" resource and a "SEE Framework", and in February 2025 the department opened a self-paced "2025 AI Introduction" course for its own staff and district staff. Neither states policy for schools. Federal privacy law still applies to Nebraska districts as it does everywhere, but no state AI document restates or extends it.

The finding is confirmed absent to the limit of the search, not proven beyond it. What it means in practice is simple. Whatever AI rules a Nebraska student lived under were written by their district, with no state floor beneath them.`,

    offloading: `Nebraska has issued no state guidance on over-reliance, productive struggle, or protecting core skills. Any position a student met on this came from their district, not the state.`,

    graduate: `With no state guidance, there is no state-shaped profile to describe, only the shape of the gap.

- Nebraska set no permission scale, no shared vocabulary, and no stated expectations, so no common experience can be assumed across the state's graduates.
- The range runs the full width. One district may have sanctioned daily AI use while a neighboring district effectively banned it, and the state did nothing to narrow that spread.
- Nebraska students were not trained to expect AI detectors and were not taught to distrust them either. They carry no shared disclosure habit and no leveled per-assignment model.
- The one state AI investment on record was aimed at staff, not students, so a Nebraska teacher may have been more recently oriented to AI than the students in front of them.`,

    implications: `- No shared AI vocabulary, permission scale, or integrity norm can be assumed among incoming Nebraska students, because the state established none.
- The absence cuts both ways. These students bring no detector expectations and no leveled-use habits, in either direction. Prior AI instruction should be treated as unknown and district-specific.
- The likeliest common ground is low and uneven. That argues for an explicit, from-scratch AI orientation at entry rather than building on assumed prior instruction.`,

    response: `- **Onboarding.** Assume no common baseline. Give incoming Nebraska students an explicit AI-use orientation and a short literacy check rather than relying on prior instruction.
- **Assessment.** State AI permission explicitly on each assignment. These students are unlikely to have met a standardized scale and will not carry a shared vocabulary into class.
- **Integrity.** Set expectations from first principles. Do not assume Nebraska students were taught either to use or to distrust AI detectors.
- **Equity.** District differences are unbounded, so watch for gaps between students from well-resourced districts and those whose districts did little with AI, and provide a common floor of access and instruction on campus.`,

    unique: `- Nebraska is a confirmed-absence state. Its distinguishing feature in this project is how thoroughly the null result was checked, direct page and course fetches plus site-wide searches, which moves "no state guidance" from an assumption toward a verified finding.
- The state's one visible AI investment went to its own people first. A staff training course came before any public guidance for districts, and no public guidance has followed in the record.`
  },
  'Nevada': {
    policy: `Nevada works from one voluntary document. The STELLAR guidance, released in April 2025 by the state education department with the Nevada AI Alliance and the Nevada Community Foundation, is a "living document" built to help districts and charter schools write their own policies. A one-page ethics poster accompanies it. Nothing in either binds a district.

#### What the state is trying to do

- Amplify, never substitute. "Artificial intelligence is not a substitute for human intelligence; it is a tool to amplify human creativity and ingenuity." In the classroom, "AI should be used to empower educators, not to substitute their expertise and human connection".
- Seven principles spell the STELLAR name. Security, Transparency, Empowerment, Learning, Leadership, Achievement, and Responsible Use.
- Equity is a through line. "AI should help close equity gaps, not widen them."
- The document grew from research sessions and town halls the Nevada AI Alliance ran through 2024, so it reflects consultation rather than a single office's view.

#### Who it covers

- Teachers, students, parents, administrators, and educational leaders, each with a tailored best-practices page at the back of the document.
- Prekindergarten through grade 12, tied to Nevada's existing mastery-based learning model and its "Portrait of a Nevada Learner".

#### What is allowed and what is not

- There is no statewide permission scale and no prohibition list. Districts are urged to define "which AI tools are available, when and how they should be used, whether for assignments, assessments, or research, and setting clear expectations for ethical and appropriate use".
- Teachers are urged to "use a rubric to ensure responsible and ethical integration in assignments", but the state supplies no standardized rubric.
- Age limits are a stated gate. "Always check and follow age restrictions for any AI tools or resources."

#### Privacy, fairness, and honesty

- Security is the first principle and the most detailed. It calls for compliance with the federal student-records privacy law, protection of personal information, "Limiting data collection to only what is essential", scrutiny of vendors, and regular security reviews. A federal-law summary also covers the federal children's online privacy law, the federal school internet-safety law, and the federal student-survey privacy law, and notes the federal special-education law and civil-rights obligations.
- Transparency is its own principle. The guidance says "teachers, students, and parents need to understand how AI systems make decisions and influence learning".
- Equity and accessibility run throughout, with assistive tools like text-to-speech and real-time translation named as supports for inclusion.
- Integrity runs on honor codes and disclosure, not detection. "Students need to clearly understand what counts as plagiarism and what is considered responsible AI use", supported by "clear integrity policies and honor codes that define how AI can and should be used". The guidance never endorses detection software. Its plan is process-based. Revise assignments with clear skill guidelines, "track AI usage, collect regular writing samples to identify student styles, and enforce academic integrity policies".

#### Training, curriculum, and rollout

- Professional learning is continuous and structured. Webinars, peer networks, conferences, and hands-on workshops.
- Curriculum runs through the state's mastery-based model, where students "advance upon demonstrating mastery... regardless of time, place, or pace" and AI serves as an adaptive, self-paced aid.
- A four-part learning cycle, Understand, Apply, Integrate, and Grow, is the training spine for everyone from teachers to parents. It is a learning progression, not a permission ladder for assignments.
- Five AI-literacy goals close the loop, including process over result and keeping technology in service of learning.
- Prompt craft is taught through four named elements. Task, format, voice, and context.`,

    offloading: `Nevada puts its position against over-dependence in writing and states it bluntly.

- One literacy goal reads "Focus on critical thinking and reasoning, emphasizing the process, not the result". Another reads "Technology should serve learning, not define it. AI is a support for learning, not the foundation".
- The responsible-use chapter is direct, saying "it is crucial to ensure students do not become overly dependent on it. Teaching them how to think critically, generate original ideas, and evaluate AI-generated information helps build their confidence as independent learners".
- Administrators are told to watch for the problem, "monitoring student interactions to prevent misuse or overdependence".
- AI literacy includes evaluating and refining what the tool produces, "mitigating bias, verifying accuracy, and ensuring appropriate use".
- Teachers "remain the primary decision-makers", and AI "should complement, not replace, human interaction".
- The framing line captures the intended balance. "With AI, we don't replace effort, we amplify success."`,

    graduate: `The guidance is voluntary and carried out district by district, so these are ceilings of possibility, not guarantees.

- A student from an adopting district met AI inside Nevada's mastery-based model, advancing on demonstrated competency regardless of time, place, or pace, with AI as an adaptive, self-paced learning aid.
- Their prompt training had four named elements, task, format, voice, and context, a concrete skill a faculty member can build on.
- Where teachers followed the state's literacy goals, they learned to value the process over the finished product and to check AI output for bias and accuracy.
- Their integrity experience ran on honor codes and disclosure where districts adopted them. Nevada built no leveled permission vocabulary and gave no detector training.
- Some also used assistive AI, text-to-speech and real-time translation, presented as tools for inclusion rather than shortcuts.`,

    implications: `- Higher education helped write this document. Faculty from the University of Nevada, Las Vegas, the College of Southern Nevada, and Western Nevada College sat on its steering committee, and the University of Nevada, Reno library's "Citing AI" guide is a named resource. Nevada institutions may already own pieces of the framework their incoming students learned under.
- Nevada students may frame AI through process over product and mastery-based learning. A course policy that rewards reasoning and demonstrated understanding, rather than finished output, will feel continuous with their schooling.
- The state taught integrity through honor codes and disclosure and never endorsed detection software. Disclosure-based approaches map onto these students better than detector-driven ones.
- The Understand, Apply, Integrate, and Grow cycle gave everyone a shared way of talking about evaluating and refining AI output, which a university can extend rather than introduce.
- The document's workforce and future-ready framing suggests these students may respond well to AI instruction tied to careers and to real disciplinary practice.`,

    response: `- **Partnership.** A Nevada institution can confirm its role in the Nevada AI Alliance or the guidance's authorship and align entry expectations with the state framework it helped shape.
- **Assessment.** State AI permission explicitly on each assignment, since Nevada offered no standardized scale, and reward process and mastery, mirroring the state's process-over-result goal.
- **Integrity.** Favor honor-code and disclosure-based integrity, which continues what Nevada taught. Do not assume familiarity with detectors.
- **Onboarding.** Give a short AI-literacy check at entry, since district differences will be wide. The state's four-part learning cycle is a ready scaffold for a baseline.
- **Prompt skills.** Build on the task, format, voice, and context elements Nevada taught, extending them toward source verification and citation.`,

    unique: `- The STELLAR mnemonic itself, seven named principle chapters organizing the whole document.
- AI is woven into Nevada's existing mastery-based learning model rather than bolted on as a separate framework.
- Published best-practices pages for five audiences, districts, administrators, teachers, parents, and students, including a parent-facing emotional well-being practice few states address.
- Co-authorship spanned universities, community colleges, Google, Code.org, and student contributors, alongside the state education department.
- Blunt process-over-product literacy goals put the stance against over-dependence in writing.
- A federal-law summary unusual for its completeness, covering student records, children's online privacy, school internet safety, student surveys, special education, and civil rights.`
  },
  'New Hampshire': {
    policy: `New Hampshire authored no state K-12 AI guidance, and the record here is a confirmed absence with one twist. In June 2025 a coalition of education associations, coordinated by the NH Learning Institute and spanning school administrators, principals, school boards, special-education administrators, and technology-using educators, produced a 77-page guidance document. The state's education commissioner endorsed it but did not write it, and it carries no force as state policy.

That coalition document could not be retrieved for this project, so its content, including any student-use scale or integrity stance, is unverified. The only state-adjacent AI activity found on the New Hampshire education department's own site is a set of press releases about pilots of Khanmigo, the Khan Academy tutor. Whatever rules a New Hampshire student lived under were district decisions, with a possible coalition influence this project cannot confirm.`,

    offloading: `No state guidance addresses over-reliance, productive struggle, or protecting core skills. Whether the coalition document treats the topic is unknown, because the document could not be retrieved.`,

    graduate: `With no verified state guidance, no state-shaped profile can be described, only the conditions around it.

- A student's AI rules came from their district. The endorsed coalition document may have shaped some district practice, but adoption was voluntary and uneven, and the record shows nothing about uptake.
- The endorsement itself is soft ground. The commissioner backed the document without authoring it, so even coalition-influenced districts were following an association text, not state policy.
- Some students used Khanmigo through the pilots the state publicized. That is narrow, single-vendor experience, not a general AI-literacy baseline, and how many schools took part is not documented here.
- No state scale, vocabulary, or integrity norm exists to anchor any shared expectation.`,

    implications: `- For planning purposes New Hampshire is a no-state-guidance jurisdiction. No shared AI vocabulary, permission scale, or integrity norm can be assumed among its incoming students, because the state authored none.
- Any common ground is soft. Where the coalition document shaped district practice, adoption was voluntary and uneven, so prior AI instruction should be treated as unknown and district-specific.
- Some students bring deep familiarity with one vendor tool from the Khanmigo pilots. That is tool-specific experience and should not be read as general AI literacy.`,

    response: `- **Onboarding.** Assume no verified common baseline. Give incoming New Hampshire students an explicit AI-use orientation and a short literacy check rather than relying on prior instruction.
- **Assessment.** State AI permission explicitly on each assignment. These students are unlikely to share a standardized scale or vocabulary.
- **Integrity.** Set expectations from first principles. Do not assume any particular prior stance on detectors or disclosure.
- **Tool habits.** Where a student cites Khanmigo experience, treat it as narrow and build a broader AI-literacy floor on top of it.`,

    unique: `- An endorsed-but-not-authored model. New Hampshire's distinguishing feature is that the state endorsed a non-governmental coalition's AI guidance rather than issuing its own, a genuinely different path from both the guidance-writing states and the fully silent ones.
- A broad coalition behind the document. The NH Learning Institute coordinated administrators, principals, school boards, special-education administrators, and technology-using educators, suggesting cross-sector buy-in even without a state text.
- Vendor-pilot visibility. The most concrete state-adjacent AI activity is the Khanmigo pilots the education department publicized.`
  },
  'New Jersey': {
    policy: `New Jersey's story is legislative, not administrative. The state education department publishes no framework. Its innovation office runs an AI resources page, an AI glossary, an explainer on weak versus strong AI, a webinar, and links to outside organizations, and the page labels its own contents "for informational purposes only". The department also ran a 2025 AI innovation grant. None of that is a scale, a prohibition list, or a mandate.

The substance sits in a pending bill. Assembly Bill 4352, with a companion Senate bill, would do three things if enacted. It would require every district to "incorporate instruction on artificial intelligence" in every grade from kindergarten through twelfth, folded into the state's computer science and design-thinking standards. It would require the education commissioner to give districts "age-appropriate sample learning activities and resources". And it would require that "Each public institution of higher education shall offer certificate and degree programs in artificial intelligence", with the state's higher-education secretary developing model curricula for four-year institutions and county colleges.

The bill's classroom content includes "best practices to ensure the responsible, appropriate, and ethical use of artificial intelligence", but it defines no permitted or prohibited student uses and sets no privacy or integrity rules. It is introduced, not enacted. Every requirement in it is a proposal until it passes.`,

    offloading: `Neither the state's informational resources nor the pending bill takes a position on over-reliance or protecting core skills. The bill names "responsible, appropriate, and ethical use" as required instruction but goes no further.`,

    graduate: `The bill is pending, so the profile splits into now and later.

- Students arriving now finished school under district rules, with only informal state resources above them. No state scale, vocabulary, or integrity norm shaped their experience.
- If the bill passes, later graduates would arrive with a defined floor. AI instruction covering general concepts, foundational user skills, and responsible-use practices, taught inside the computer science and design-thinking standards rather than as a separate course.
- The gap between those two profiles is large, so the bill's status is worth watching from a registrar's distance. Until it passes, plan for the first profile.`,

    implications: `- The bill carries the most direct obligation on higher education in this dataset, pending passage. As introduced, "Each public institution of higher education shall offer certificate and degree programs in artificial intelligence". If enacted, every New Jersey public four-year institution and county college would have to stand up AI certificate and degree programs, supported by state model curricula.
- Read the operative text, not the summary. The bill pairs a K-12 instruction requirement with a program-offering requirement on public colleges. Compressed summaries have gotten it wrong in both directions, and this project's own earlier note understated it.
- The model curricula would be built with input from workforce agencies, the county-college council, and the state's presidents' council, and would have to "account for academic quality and other applicable standards required for accreditation". Institutions may face a state-shaped template for AI program design.
- For students entering before any enactment, there is no state AI baseline to assume. Entry planning should mirror the no-state-guidance states, an explicit orientation and a short check at entry.`,

    response: `- **Legislation.** New Jersey public institutions can watch Assembly Bill 4352 and its Senate companion. If the bill advances, they will need to plan AI certificate and degree programs and join the model-curriculum work.
- **Engagement.** The bill routes curriculum development through the state's presidents' council and county-college council. Institutions can shape the template through those bodies rather than receive it finished.
- **Onboarding.** Assume no state AI baseline for students entering now. Give an explicit AI-use orientation and a short literacy check.
- **Assessment.** State AI permission explicitly on each assignment. New Jersey students do not yet share a standardized state scale or vocabulary.
- **Preparation.** If the bill becomes law, align entry expectations to its required K-12 content, general concepts, user skills, and responsible-use practices, once those graduates arrive.`,

    unique: `- The strongest pending direct higher-education mandate in this dataset. The bill would require public colleges and universities to offer AI certificate and degree programs, not merely receive model curricula.
- A paired structure in a single bill. The same text mandates K-12 AI instruction and higher-education AI programs, with the model curricula framed as support for the program requirement.
- Workforce integration runs deep, involving the state's labor and economic-development agencies and even "artificial intelligence career pathway marketing materials".
- The education department deliberately keeps its role informational and leaves the substance to the legislature, a different division of labor from the guidance-writing states.`
  },
  'New Mexico': {
    policy: `New Mexico works from one document. The state guidance, published in May 2025 by the New Mexico Public Education Department with the Friday Institute at North Carolina State University, is voluntary throughout. It calls itself "a dynamic resource designed to help local school districts develop their own approaches", and even its centerpiece scale is "a framework example that educators and students can use". Nothing in it binds a district.

#### What the state is trying to do

- Human-centered AI is the spine of the document. "Human-centric AI values the person over the machine throughout the engagement process", and AI is positioned "as a tool to support rather than replace" human relationships.
- Digital equity is a first-order goal, tied to the state's 2023 Digital Equity in Education Act. The guidance warns that AI could widen gaps "particularly for students from under-resourced schools or rural areas".
- AI literacy is for teachers and students alike, modeled on a national framework from Digital Promise. Users should understand how AI systems work, weigh the potential and the risks, and apply AI thoughtfully in real situations.

#### Who it covers

- The guidance addresses "educators, administrators and communities" across all of K-12, with content split into early grades, middle grades, and high school.
- The state defers to local decisions. "Local governance allows schools to adapt AI guidelines to their unique needs."

#### What is allowed and what is not

- There is no statewide prohibition list. The closest thing to a permission structure is a five-level scale, adapted from the AI Assessment Scale that Perkins, Furze, Roe, and MacVaugh published in 2024, and offered as an adaptable example rather than a rule.
- The five levels run from NO AI, where "The assessment is completed entirely without AI assistance in a controlled environment... You must not use AI at any point", through AI Planning, AI Collaboration, and Full AI, up to AI Exploration, where "Students and educators co-design assessments to explore unique AI applications within the field of study".
- Tools face a recommended vetting process rather than a banned list. Educators "must evaluate tools with a critical lens" before purchase.

#### Privacy, fairness, and honesty

- Five ethical protections come from the 2022 White House Blueprint for an AI Bill of Rights. Safe and effective systems, protection from algorithmic discrimination, data privacy, notice and explanation, and human alternatives. On privacy, tools should respect "where data are stored, who owns the data, and how or when the data is deleted".
- Accessibility is written into purchasing. "Accessibility features, such as text-to-speech and translation tools powered by AI, must be incorporated into procurement processes."
- Honesty is a values question, not an enforcement question. The core principle is that "all submitted work should reflect a student's own understanding, effort and originality, even when supported by AI tools", and "Properly citing AI tools or providing disclosure... demonstrates honesty".
- On cheating detectors, the guidance says "AI detectors do not have high reliability in detecting plagiarism" and are frequently "biased against non-native English writers", citing published research. Teachers are told to "critically evaluate the validity, accuracy and ethical implications of AI detection tools".

#### Training, curriculum, and rollout

- Teacher training comes first. Professional development "should provide the knowledge, skills and confidence educators need", with a linked list of national resources.
- AI skills belong inside existing subjects. The guidance says "it is equally important to embed these skills into existing standards and core curriculum" rather than teaching AI only as a standalone unit.
- A table separates teaching with AI from teaching about AI and says schools need both.
- Districts are encouraged to build local AI rules on their existing acceptable use policies, review them through the year, and write "age-appropriate versions" for students.`,

    offloading: `New Mexico names the risk of students handing their thinking to the tool directly, which few states do.

- The guidance states the worry plainly, that "concerns persist that over-reliance on AI might erode essential skills by encouraging students to accept AI-generated outputs without questioning them or bypassing the process of independent reasoning".
- Its answer draws a line. "AI should be positioned as a tool or assistant, not as a partner or replacement for human thinking."
- Teachers are given questions to model out loud. "What assumptions does AI make?" and "How do these results compare to other evidence we've reviewed?"
- A four-step reasoning cycle, the 4-I framework, keeps a person at both ends. It starts from "human-driven curiosity" and requires students to weigh AI output for accuracy and bias before using it, so that "AI does not replace human judgment".
- The intended pattern is "beginning and ending AI use with human inquiry and reflection".
- The NO AI level of the scale preserves the option of assessing core skills and knowledge without AI at all.`,

    graduate: `Because nothing in the guidance binds a district, these are ceilings of possibility, not guarantees, and the range inside one New Mexico classroom can be wide.

- A student from an adopting district knows the full five-level vocabulary. NO AI, AI Planning, AI Collaboration, Full AI, and AI Exploration, with each assignment carrying a level. The scale is an adaptation of the published AI Assessment Scale, the same source a university syllabus can cite.
- In high school they may have studied "neural networks, deep learning and natural language processing", built text classifiers, audited AI systems for bias, and explored "Career Pathways" connecting AI to professions. In middle school, simple models in Scratch or Python and datasets checked for bias.
- Where districts adopted the guidance, citing and disclosing AI use was taught as a habit of honesty.
- If their teachers modeled the recommended questions, they interrogate AI output by default, asking what it assumes and how it squares with other evidence.
- The guidance spotlights Gadsden and Santa Fe as district examples. Those are illustrations, not proof of statewide practice.`,

    implications: `- Incoming New Mexico students may already speak the exact vocabulary of the published AI Assessment Scale. A faculty member who aligns a course to that peer-reviewed source can expect partial prior familiarity rather than starting from zero.
- Students from adopting districts may arrive expecting AI use to be specified assignment by assignment. A blanket ban or a silent syllabus reads as less clear than what they experienced.
- Students may have been taught that AI detectors are unreliable and biased. A course that leans on detector reports will meet students who were explicitly taught to distrust those tools, a position the state document itself takes.
- The state names a school-through-college pipeline. The New Mexico AI Consortium joins Los Alamos and Sandia National Laboratories with the University of New Mexico, New Mexico State University, New Mexico Tech, and Central New Mexico Community College "to establish pathways for AI research and education". A New Mexico institution may already be a named partner in the pipeline that feeds it.
- Because exposure is uneven, the safest planning assumption is a wide range within any New Mexico class, which argues for a common baseline at entry rather than assumed competence.`,

    response: `- **Assessment.** Adopt an explicit per-assignment AI scale. Using the same published AI Assessment Scale gives students continuity from high school to college. Keep true no-AI assessments where the goal is demonstrating core skills.
- **Integrity.** Favor disclosure and process over detector reports. That continues the exact habit the state tried to build, and it avoids tools the students' own schooling called unreliable.
- **Onboarding.** Test AI literacy at entry rather than assuming it. The state's own three-part definition, understand, evaluate, apply thoughtfully, is a ready rubric for a short diagnostic.
- **Equity.** Students may expect accessibility features like text-to-speech and translation as standard. Confirm the institution's sanctioned tools carry them and that access does not depend on a student's ability to pay.
- **Faculty development.** The teaching-with versus teaching-about distinction and the interrogation questions are ready-made pedagogy that incoming students may already have met.
- **Partnership.** A New Mexico institution can check whether it sits inside the AI consortium and coordinate entry expectations with that pipeline.
- **Keep the center.** The 4-I cycle keeps a person at the start and the end of every AI use. Adopting the same language lowers the translation cost for incoming students.`,

    unique: `- The five-level scale prints its academic source on the page, attributed to "Perkins, Furze, Roe & MacVaugh (2024). The AI Assessment Scale," with a Creative Commons mark. The lineage is confirmed at the primary source.
- The 4-I framework, Inquiry, Input, Interpretation, Insight, a named cycle for keeping a person in the loop.
- The M.A.Z.E. tool-vetting memory aid, "Monitor data privacy, Assess for accuracy, Zero-in on bias, Evaluate value", credited to the Friday Institute.
- A national-laboratory partnership. The New Mexico AI Consortium brings Los Alamos and Sandia into a school-through-college AI pipeline, a hook few other states can claim.
- Equity grounding in the state's 2023 Digital Equity in Education Act, with a three-part model of digital divides in use, design, and access.`
  },
  'New York': {
    policy: `New York State has published no K-12 AI guidance that this project could capture. The New York State Education Department's only AI page in the record covers licensed adult career schools, not K-12. What exists at the state level is pending legislation, two Assembly bills, neither enacted.

One bill, A9190, would prohibit AI in classrooms before ninth grade. It carves out diagnostic tools and certain teaching interventions for students with disabilities, along with staff administrative and planning use, and it would direct the state education commissioner to issue guidance on permissible uses. The other, A6972, would create a fifteen-member AI working group inside the education department, charged with producing guidance, a model policy, and a final report on a set schedule before the group dissolves in 2031.

Because neither bill has passed, no statewide requirement exists. A New York student's operative rules were district rules, and for a large share of students that means New York City's public school district, whose own guidance this project could not read from a primary source. One honest caveat applies throughout. The bill descriptions here rest on the project's verified source records, not on the read text of the bills.`,

    offloading: `New York has issued no statewide guidance on over-reliance, productive struggle, or preserving core skills, so there is nothing state-level to describe. The pending bill that would keep AI out of classrooms before ninth grade is, in effect, a developmental caution, but it is not enacted, and its captured record does not spell out that reasoning.`,

    graduate: `With no captured state guidance, no state-shaped profile exists. What can be said is structural.

- A New York graduate's AI exposure was set by their district. The state built no scale, no vocabulary, and no integrity stance for K-12 students.
- For the many students from New York City schools, the district's own guidance governed. Search results suggest it is split by grade band, elementary, middle, and high school, but no primary source confirmed that here, and a reported postponement of the final version could not be confirmed either.
- Students from upstate and other districts may share nothing with their New York City classmates. The state provides no common floor, so treat the range as wide and district-driven.`,

    implications: `- No statewide shared AI vocabulary, permission scale, or integrity norm can be assumed for incoming New York students, because the state education department authored none.
- The most important prior framework for many of these students is a district one, New York City's. Institutions that draw heavily from the city may find more common ground there, but the specifics could not be verified here and need checking directly.
- If the pre-ninth-grade prohibition were enacted, future students would arrive with their formal AI exposure compressed into high school. That is pending and speculative, but worth watching.
- State policy is still at the single-bill and working-group stage, so New York's baseline may shift substantially over the next few years. Entry planning should not treat today's absence as permanent.`,

    response: `- **Onboarding.** Assume no statewide baseline. Give incoming New York students an explicit AI-use orientation and a short literacy diagnostic.
- **Feeder check.** An institution that draws heavily from New York City should read the city district's guidance directly, since this project could not, to learn what a large share of its incoming students actually experienced.
- **Assessment.** State AI permission explicitly on every assignment. New York students share no statewide scale or vocabulary.
- **Integrity.** Set expectations from first principles. The state established no stance on AI detectors or disclosure.
- **Watch the bills.** Either pending bill could create a state baseline, an age gate or a model policy, that changes entry assumptions for future students.`,

    unique: `- A pending age-based prohibition. The proposed ban on AI in classrooms before ninth grade, with carve-outs for disability supports and staff use, would be the clearest age-gating rule in this project's records if it passed.
- A study-first path. The working-group bill lays out a full schedule, guidance, then a model policy, then a final report, before the group dissolves in 2031.
- A district center of gravity. New York's real K-12 AI practice concentrates in New York City's own guidance rather than a state framework, an unusual balance driven by the district's sheer size.
- The state education department has so far engaged AI rules only for licensed adult career schools, not for K-12.`
  },
  'North Carolina': {
    policy: `North Carolina works from one document, a living set of recommendations from the state education department, first published in January 2024 and updated continuously since. It covers prekindergarten through grade 13, and it binds no one. Each school system decides its own rules.

#### What the state is trying to do

- AI literacy is framed as "a must-have for every graduate" and a durable skill.
- The goal is "not to adapt education to AI, but to adapt education for the Intelligence Age", using "what AI does best... to unlock what humans do best (innovation, empathy, judgment, collaboration)".
- Age-appropriateness is a first-order design rule, with distinct expectations for each grade band.

#### Who it covers

- The scope runs from prekindergarten through grade 13, which reaches into community college, and it names educators explicitly. The top band is titled "Working ALONGSIDE AI (Grades 9-13 and Educators)".
- The document comes from the state's AI guidelines committee working with AI for Education, and it carries a dedicated appendix from the Office of Exceptional Children on AI use with students with disabilities.

#### What is allowed and what is not

- The permission structure is a five-level scale called the "0 to Infinity" AI Use Continuum, from Level 0 AI Free to Level 4 AI Exploration, offered for adoption rather than required. The document says the scale "is based on the work of Leon Furze, Dr. Mike Perkins, Dr. Jasper Roe and Dr. Jason McVaugh and has been adapted for the K12 environment". Those are the authors of the published AI Assessment Scale.
- At the bottom, "students rely solely on their own thinking, knowledge, and skills". In the middle, "AI and students work together in a collaborative loop... students remain the decision-makers". At the top sits "the transformative zone, where students use AI as a launchpad for innovation".
- The scale should be "explicitly taught and posted" so students know what level applies to a given task. There is both an educator version and a student version.
- The clearest restriction is developmental. For the youngest grades, "direct chatbot use is not recommended", because young children cannot yet separate make-believe from fact.
- For assessment design, assignments can be sorted as AI-Resistant, AI-Assisted, or AI-Partnered.

#### Privacy, fairness, and honesty

- Privacy is a throughline. Users must "never put PII (Personally Identifiable Information) into an AI tool", and the appendix on exceptional children governs AI in drafting individualized education programs under human review.
- Honesty runs on process and disclosure. The document teaches "mandatory AI-use disclosure statements", notes that purely AI-generated material cannot be copyrighted, and treats suspected over-reliance as "a teachable moment... rather than a 'gotcha'".
- On detectors, the stance is firm. "AI detectors have proven not to be dependable, therefore they should never be used as the only factor when determining if a student 'cheated'." The document flags false accusations against non-native English speakers and creative writers, and missed detections of skilled AI users.
- It even names the environmental cost of AI use, prompt by prompt.

#### Training, curriculum, and rollout

- A three-stage progression structures the curriculum. AI Awareness in the early grades, learning about AI with no direct chatbot use. AI Literacy in middle school, with heavily scaffolded chatbot use under teacher direction. AI Fluency in grades 9 through 13, working alongside AI as a "thinking partner".
- Named supports include the EVERY responsible-use checklist and the CRAFT prompting framework, with interactive teaching tools built around both.
- Assessment guidance favors process evidence. "Collect outlines, drafts, or chat links at Levels 2-4 to assess thinking, not just the final product", and start the year at the lower levels.
- Rollout support runs through the state's regional digital teaching and learning consultants.`,

    offloading: `North Carolina manages the risk that students hand their thinking to the tool through the scale's design and through age gating.

- Level 0 AI Free exists to preserve unaided thinking. It builds "essential cognitive habits, such as personal problem-solving, self-reliance, and academic integrity" and "creates a clear baseline".
- The no-chatbot recommendation for the early grades protects the youngest learners, on the argument that "young children are not developmentally ready to critically evaluate AI outputs" and that lifelike chatbots can "blur that boundary" between fantasy and fact.
- The EVERY checklist builds verification into every AI interaction. "Evaluate, Verify, Engage, Revise, and remember that You are responsible for the final product."
- Grading shifts toward process evidence, outlines, drafts, and chat links, so thinking gets assessed rather than only the finished product.
- Over-reliance is treated as teachable, not punishable. Suspected over-dependence "should be viewed as a teachable moment to reinforce the appropriate partnership with AI tools".
- The document also allows the flip side. When routine generation "can now be offloaded to AI, teachers and students can spend more time on deeper learning". Offloading is managed, not uniformly resisted.`,

    graduate: `The guidance is voluntary and adopted school system by school system, so these are ceilings of possibility, not guarantees.

- A student from an adopting system knows the "0 to Infinity" scale by name and by level. AI Free, AI for Planning, AI Collaboration, Full AI Use, and AI Exploration, posted in the classroom and taught directly.
- The scale they learned shares its source with the published AI Assessment Scale, so the vocabulary transfers to any syllabus built on that paper.
- They moved through a staged trajectory. Learning about AI without chatbots in elementary school, scaffolded use under teacher direction in middle school, and co-creation with AI as a "thinking partner" in high school.
- They may know the EVERY checklist by heart and expect to hand in process evidence, outlines, drafts, or links to their AI chats, alongside finished work.
- They were taught that AI detectors are undependable and that a flagged paper starts a conversation, not a verdict.`,

    implications: `- North Carolina's scale shares its lineage with the published AI Assessment Scale. A university that adopts the same source can expect students from adopting systems to recognize the level structure, from AI Free to AI Exploration, rather than starting from zero.
- The framework's top band already names grade 13, so it is explicitly aimed at the postsecondary edge. Community colleges and early-college programs may find the school and entry-level college vocabulary already aligned.
- Students were taught that AI detectors are unreliable and biased against non-native English writers. A course that leans on detector reports will meet students trained to distrust it, a position the state document takes.
- Students from adopting systems may expect AI permission to be specified per assignment and posted, and expect to submit drafts and chat links rather than only final products. A silent or blanket syllabus reads as less clear than what they experienced.
- The age gating means early AI exposure was deliberately limited. Formal fluency work concentrated in high school, so do not assume long AI histories.`,

    response: `- **Assessment.** Adopt an explicit per-assignment AI scale, ideally from the same published source the state used, and preserve AI-free tasks where demonstrating core skills is the goal.
- **Integrity.** Favor process and disclosure over detection, mirroring the EVERY checklist and the state's disclosure norm. Do not rely on detectors the students' own schooling called undependable.
- **Onboarding.** Give a short AI-literacy diagnostic at entry. The state's own progression, Awareness to Literacy to Fluency, is a ready rubric for placing students.
- **Prompt literacy.** Build on the prompting framework and the EVERY checklist students may already know, extending both toward source verification and citation.
- **Two-year alignment.** Because the framework names grade 13, community colleges and early-college programs can align entry expectations directly to the state's top band.`,

    unique: `- The "0 to Infinity" AI Use Continuum, a five-level student scale with both an educator version and a student version, attributed at the primary source to the authors of the published AI Assessment Scale.
- A scope that names grade 13 and educators, extending the framework into community-college territory explicitly.
- A staged grade-band progression, Awareness, Literacy, Fluency, with a firm no-direct-chatbot recommendation for the early grades grounded in child development.
- The EVERY responsible-use checklist and the CRAFT prompting framework, both with interactive tools.
- A firm anti-detector section with a stated rationale and a "teachable moment" alternative.
- A dedicated appendix on AI for students with disabilities, governing AI in drafting individualized education programs under human review.
- A genuine living-document practice, with a public update log tracking every revision.`
  },
  'North Dakota': {
    policy: `North Dakota publishes its framework as a web page with five companion checklists rather than a bound document. The North Dakota Department of Public Instruction offers it as "a springboard for local policies". Nothing in it is mandatory.

#### What the state is trying to do

- AI is framed as one more teaching tool, not a rupture. "Artificial Intelligence (AI) is the latest in a long and continuing list of tools that can be used to transform teaching, streamline business operations, and personalize learning."
- Age-appropriateness organizes the whole framework, through four grade bands.
- Equity recurs. The leadership checklist says AI "has the potential to address inequities. Without this focus, it can intensify existing inequities and make school more difficult for already marginalized students."

#### Who it covers

- The framework is K-12 and split by role. Five checklists address school leadership, teachers, business and technology operations, policy and legal questions, and public outreach separately.
- The outreach checklist reaches parents and the public, with events and take-home guides.

#### What is allowed and what is not

- There is no statewide permission scale and no prohibition list. The rules are delegated. Leaders are told to "help educators determine when, where, and how AI tools can be used on assignments", and teachers to "determine when and how AI tools can be used".
- The high-school stance is explicitly anti-policing. "Rather than police AI use, teach students about how AI works and its limitations, including the effects of bias, stereotypes, and inaccuracies."

#### Privacy, fairness, and honesty

- A dedicated checklist anchors legal compliance. It asks whether tools follow the federal student-records privacy law, the federal health-privacy law, and local privacy policies, how breaches of student and staff data are handled, and how copyright, licensing, and plagiarism will be addressed.
- Accessibility has a named section, and teachers are prompted to modify lessons to make them more accessible to all students.
- Equal access is explicit, down to "free and paid versions of tools" and whether "all students have equal access to tools both in and out of school".
- Honesty is handled by redesigning assignments and deciding how students will reference AI-generated material. On detectors, the framework is neutral. It notes only that "the internet has multiple tools to help educators recognize original or AI generated content", neither endorsing nor warning.

#### Training, curriculum, and rollout

- Curriculum follows the grade bands, with critique of AI output beginning in middle school.
- Teacher training is a leadership checklist item, covering administrative staff, classroom staff, and "IT staff, media specialists, and librarians".
- Districts are advised to pilot first. "It may be helpful to start with a single school or grade level/band before a districtwide roll-out", then gather feedback.
- Assessment guidance is process-minded. Teachers should "support students in sharing their writing processes" and "create opportunities for students to problem solve, analyze, and synthesize results".
- Librarians and media specialists are named to the recommended AI-policy team, a distinctive inclusion.`,

    offloading: `For so compact a document, North Dakota states the concern about students handing their thinking to the tool unusually directly.

- Upper elementary names it as the core risk. "Technology, powered by AI, can be good at answering questions, but an overreliance on that kind of technology can short-circuit students' development of problem-solving skills."
- The earliest grades guard against treating AI as human. Young students "need to understand that AI is not a real person", because children that age "are more likely to attribute human qualities to artificially intelligent technologies like smart speakers and chatbots".
- Middle school builds critique as the antidote. Students should "ask a generative AI chatbot to answer a question or write an essay and then critique it, looking for factual errors and the like".
- High school swaps surveillance for understanding. Teaching how AI works and where it fails replaces policing.
- The teacher checklist reinforces synthesis over generation, asking teachers to create chances for students to problem solve, analyze, and "critically analyze results".`,

    graduate: `The framework is voluntary and compact, so these are possibilities shaped by district choices, not guarantees.

- A North Dakota student's operative rules came from a local district policy the state framework encouraged, not from a state scale. There is no leveled vocabulary to count on.
- Where teachers followed the bands, the student traveled a trajectory. First learning that AI is not a person, then critiquing AI output for factual errors and bias, then learning how AI works rather than being policed over it.
- Some practiced sharing their writing process as the integrity habit, rather than facing detection software.
- The state took no stance on AI detectors, so a North Dakota student's expectations about detection tools are simply unknown. Do not assume the taught skepticism that students from some other states carry.`,

    implications: `- The framework contains no higher-education hook. No college, university, or postsecondary partnership appears anywhere in the captured text or the five checklists, so there is no pipeline and no shared school-to-college vocabulary to lean on.
- Students were taught to understand AI rather than be policed over it. AI policies framed as literacy and responsibility will land better with them than surveillance-first enforcement.
- With no state permission scale, incoming students are unlikely to share a leveled vocabulary. Spell out AI expectations on every assignment.
- The critique habit, checking AI output for factual errors and bias from middle school onward, is a foundation a university can extend toward disciplinary source evaluation and citation.
- Because the state stayed neutral on detectors, North Dakota graduates arrive with unknown expectations there, unlike students from states that taught distrust.`,

    response: `- **Onboarding.** Give a short AI-literacy diagnostic at entry. District differences will be large, and there is no state scale to anchor assumptions.
- **Assessment.** State AI permission explicitly per assignment, and keep tasks that demand independent problem-solving, echoing the state's own warning about short-circuiting that skill.
- **Integrity.** Continue the process-based habit, shared drafts and writing process, and do not assume any particular prior stance on detectors.
- **Framing.** Lean into the understand-don't-police approach these students may have absorbed, extending their critique habit toward source evaluation in each discipline.`,

    unique: `- A web-native framework with no single PDF. The state publishes a page plus five downloadable checklists instead of a bound document.
- Five role-based checklists, for school leadership, teachers, business and technology, policy and legal questions, and public outreach, a delivery model few states match.
- Compact but pointed grade-band cautions, from "AI is not a real person" in the earliest grades to the warning that over-reliance can "short-circuit" the growth of problem-solving skills.
- An explicitly anti-policing high-school stance.
- Librarians and media specialists named to the AI-policy team.
- A dedicated public-outreach checklist with concrete events, an AI literacy week, Hour of Code nights, and take-home parent guides.`
  },
  'Ohio': {
    policy: `Ohio pairs a real legal mandate with a ready-made template. Ohio law, enacted through House Bill 96, the state budget bill, requires every traditional public district, community school, and STEM school to adopt a policy on AI use by July 1, 2026. What the law requires is that a policy be adopted, not what it says. The law also required the Ohio Department of Education and Workforce to publish a model policy by the end of 2025, which it did on December 30, 2025. Districts "may adopt the department's model policy" or write their own.

#### What the state is trying to do

- The model puts people first. AI in schools "should be human-centered and should empower students, educators, and communities. It is a tool to support learning and teaching, not a substitute for student effort or the role of the educator."
- It aims to prepare students for an AI-shaped future while giving schools "consistent expectations, standards, and approval processes for safe and responsible implementation".
- The law's animating goal is coverage. Every covered school has an AI-use policy in force by the deadline.

#### Who it covers

- The mandate reaches traditional public districts, community schools, and STEM schools.
- The model is written for adoption by a local school board, as a fill-in-the-blank board policy rather than a narrative framework.
- It covers both classroom use and the school's back-office use of AI, including generative AI.

#### What is allowed and what is not

- There is no statewide leveled scale. The model hands the permission line to the teacher, assignment by assignment. Responsible uses "will vary depending on the context, including but not limited to grade level, subject, and/or the nature of the classroom activity", and expectations should appear "in course syllabi and assignment instructions when relevant".
- Where adopted, the model draws hard lines. "Use of tools that have not been approved is not permitted", and "Using AI tools for bullying, harassment, and any form of intimidation is strictly prohibited". No assignment may require a tool the school cannot provide.
- The model flags AI-generated intimate imagery shared without consent, pointing to Ohio's Braden's Law, which makes sexual extortion a felony.

#### Privacy, fairness, and honesty

- Data privacy is a full section. AI tools must follow existing privacy and security policies, including the federal student-records privacy law, collect no more data than needed, and pass vetting for encryption and access control.
- Purchasing runs through existing procurement rules plus AI-specific checks, and vendors must meet state and federal standards for data protection, ethical use, and accessibility.
- Ethical use asks every user to "critically analyze AI output, respect safeguards and rules, and be transparent about its use".
- On honesty, "AI-enabled tools may be used to support student work (such as brainstorming or feedback), but AI-generated work must not replace student work", with AI-assisted work cited "according to existing policies and expectations... (such as APA or MLA style formats)".
- The model never mentions AI detectors. It neither endorses nor cautions against them, leaving enforcement to existing academic-integrity procedures.

#### Training, curriculum, and rollout

- AI literacy for all is a policy section. The board commits to building AI literacy for every student and educator, through curriculum and professional learning.
- Teacher use is tied to professional standards. "Educator use should be in alignment with the Licensure Code of Conduct for Ohio's Educators."
- Teachers "should consider the impact on learning objectives and assessment of student learning when designing related instruction".
- An ongoing AI workgroup monitors developments and updates the policy, which "should be reviewed often". The model recommends the workgroup include "external representatives such as local businesses and postsecondary institutions".`,

    offloading: `Ohio's model addresses the risk of students handing their thinking to the tool through its honesty and ethics sections rather than a dedicated framework.

- AI is defined as no substitute for effort. "It is a tool to support learning and teaching, not a substitute for student effort or the role of the educator."
- Students "are expected to complete assignments and assessments in a manner that reflects their own understanding and effort, critically analyze AI-generated content and not misrepresent it as original work".
- Critically analyzing AI output is a standing obligation for every user, student and teacher alike.
- Unlike some states, the model builds no grade-by-grade progression. Its safeguards are statements of effort and honesty, not developmental scaffolding.`,

    graduate: `The adoption mandate raises the floor, but each district still chose its own content, so the profile splits into what is near-certain and what varies.

- From July 2026 onward, the student's school was legally required to have a board-adopted AI policy. That is a firmer baseline than any voluntary-guidance state offers.
- A student from a model-adopting district expects AI rules in the syllabus and in assignment instructions, because the model tells teachers to put them there.
- They carry a citation-and-effort habit. AI may assist, must not replace their own work, and gets cited in a standard format such as APA or MLA style.
- They expect an approved-tools list rather than open choice, and no assignment ever required a tool their school could not provide.
- The state model says nothing about AI detectors, so their expectations about detection tools were not shaped by state policy either way.`,

    implications: `- Ohio names higher education in the primary text. The model recommends that district AI workgroups include "external representatives such as local businesses and postsecondary institutions". An Ohio college or university may be invited onto a district workgroup, a direct if voluntary school-to-college hook.
- From July 2026 onward, faculty can reasonably assume an incoming Ohio student's school had an AI policy. That is a firmer starting point than the voluntary states give, though the content stays district-specific.
- Where districts adopted the model, students met an integrity norm that maps cleanly onto typical university expectations. AI may assist but not replace student work, and AI-assisted work is cited in APA or MLA style.
- Students from model-adopting districts may expect AI permission specified per syllabus and per assignment, using approved tools only. A university syllabus that states its AI expectations explicitly will feel continuous with that experience.
- The model's silence on detectors means Ohio students were neither trained to expect them nor taught to distrust them. Do not assume either.`,

    response: `- **Partnership.** Seek seats on district AI workgroups, which the model policy explicitly invites. It is a ready channel for aligning entry expectations with feeder districts.
- **Assessment.** State AI permission per assignment and per syllabus. Students from adopting districts will recognize the pattern.
- **Integrity.** Build on the assist-not-replace and cite-your-AI norms. They translate directly to university integrity policy.
- **Onboarding.** Assume a policy existed, not a shared scale. A short AI-literacy check at entry covers the many districts that wrote their own policies instead of adopting the model.
- **Detectors.** Set the institution's own integrity-tooling expectations explicitly, since the state model is silent on them.`,

    unique: `- A genuine statewide adoption mandate, one of the few in this project's records. Every district, community school, and STEM school must adopt an AI-use policy by July 1, 2026.
- A fill-in-the-blank model policy, a board template with placeholders rather than a narrative guidance document.
- A higher-education hook confirmed at the primary source, with colleges and universities named as recommended workgroup members.
- Explicit language on AI-generated intimate imagery shared without consent, tied to Ohio's Braden's Law on sexual extortion, a specific harm few state documents name.
- Tight integration with the board policies a district already has, on bullying, integrity, purchasing, and special education, rather than a standalone regime.
- Teacher AI use bound to the Licensure Code of Conduct for Ohio's Educators, linking AI to professional licensure standards.`
  },
  'Oklahoma': {
    policy: `Oklahoma works from two documents. The July 2025 guidance from the Oklahoma education department is voluntary and carries the AI Acceptable Use Rating Scale. Senate Bill 1734, the Oklahoma Responsible Technology in Schools Act, is law. It was signed May 12, 2026 and took effect July 1, 2026.

#### What the state is trying to do

- Both documents put people first. The guidance says "AI augments, never replaces, human instruction". The law finds that teachers "play an essential and irreplaceable role... artificial intelligence tools, when used in classrooms, should supplement educator-led instruction, not supplant it".
- The law's stated purpose is to set "principles and guardrails", protect student data and integrity, preserve "local control and educator discretion", and support transparency.
- The guidance ties the work to the governor's Emerging Technologies Task Force and to the 2025 federal executive order on AI education for youth.

#### Who it covers

- The guidance addresses prekindergarten through grade 12 schools statewide.
- The law binds every public school district and defines its own terms, including classroom AI tools, student-facing AI tools, educator-directed use, and human-in-the-loop review.

#### What is allowed and what is not

- The permission scale is the AI Acceptable Use Rating Scale, offered for schools to adapt rather than imposed. It runs from Level 0 to Level 4, and the document credits the authors of the published AI Assessment Scale as its source.
- **Level 0, no AI use.** Work is "completed entirely without AI assistance. AI MAY NOT be used at any point... students rely solely on their own knowledge." A teacher may ask for an academic-honesty pledge that AI was not used.
- **Level 1, AI-assisted idea generation and structuring.** "No AI content is allowed in the final submission. AI can be used... for brainstorming, creating structures, and generating ideas."
- **Level 2, AI-assisted editing.** "No new content can be created using AI. AI can be used to make improvements to the clarity or quality of student-created work."
- **Level 3, AI for specified task completion.** "AI is used to complete certain elements of the task, as specified by the teacher... requires critical engagement."
- **Level 4, full AI use with human oversight.** "Students may use AI throughout the activity... AI should be a 'co-pilot' to enhance human creativity."
- From Level 1 up, disclosure is required, a statement of how AI was used plus "link(s) to AI chat(s)".
- The law adds binding guardrails whenever AI is used. Deployment must be educator-directed, a human must review AI outputs before use, and AI may never be "the primary basis for student grading, discipline, placement, promotion, retention, or other high-stakes educational decisions". Student-facing tools must be age-appropriate.
- The guidance requires a "strict prohibition on using AI to create or distribute deepfakes or non-consensual imagery" and on using AI to impersonate others for bullying or harassment.

#### Privacy, fairness, and honesty

- The law requires compliance with the federal student-records privacy law, recognized security standards, and that districts "take reasonable steps to minimize the amount of student data shared".
- Parents must be told, at least once a year, which AI tools are in use, who the vendors are, what student data is collected and shared, and what each tool is for.
- Parents may opt a student out of student-facing AI tools "at any time", and an opted-out student "shall not be academically penalized or denied access to core instructional content".
- On honesty, the guidance directs schools to update integrity policies for AI, teach "proper attribution", and design assessments that "value process over final product".
- On detectors, the guidance is blunt. "While AI detection tools exist, they are not always reliable and may produce false positives, incorrectly flagging human-written work as AI-generated. These tools also frequently miss sophisticated AI-generated content. Instead of relying on detection software, educators should establish baseline writing samples."

#### Training, curriculum, and rollout

- The guidance spells out who does what, with school boards approving AI policies and acceptable-use guidelines.
- The law requires every district to adopt an AI policy before the 2027-2028 school year, and it lists the minimum contents. Responsible roles, instructional and prohibited uses, data protection, transparency to families, and periodic review.
- The law directs the state education department to develop guidance, and the July 2025 document is that guidance.
- Assessment advice favors process over product, with baseline writing samples and conversations about how the work was made.`,

    offloading: `Oklahoma builds its protection against students handing their thinking to the tool into the scale itself and into the law.

- Level 0 preserves unaided work by definition. It "ensures that students rely solely on their own knowledge, understanding, and skills".
- The scale's stated rationale is to keep "students remain active participants in the learning process, not passive recipients of machine-generated content".
- At the higher levels the student is "responsible for providing human oversight and evaluation of all AI-generated content". Permission to use AI comes with the duty to check it.
- The integrity advice is assessment redesign. "Develop assessment methods that value process over final product" and "Implement project designs that make inappropriate AI use less beneficial".
- The law keeps the consequential judgments human. AI "shall not be used as the primary basis for student grading, discipline, placement, promotion, retention".`,

    graduate: `The scale is voluntary and the law is recent, so what an Oklahoma student brings depends on their school and their graduation year.

- A student from an adopting school learned the full five-level vocabulary, not just the endpoints. Idea generation only, editing only, specified tasks only, or full use with oversight, each set per assignment by the teacher.
- The disclosure habit is unusually concrete. From Level 1 up they submitted a statement of how AI was used along with links to the actual chats, and at Level 0 they may have signed a pledge that AI was not used.
- Students who graduate under the law, from the 2027-28 school year onward, carry a firmer floor. They were legally protected from AI deciding their grades, placement, or discipline, their parents were told each year which AI tools their school used, and their parents could opt them out without penalty.
- Students arriving now finished school before the law's full effect, so for them the guidance-shaped habits are possibilities, not guarantees.
- If their teachers followed the guidance, they were taught that AI detectors produce false positives and miss sophisticated AI writing, and that baseline writing samples are the better check.`,

    implications: `- Oklahoma's scale credits the peer-reviewed AI Assessment Scale by name. A university that adopts the same published source can expect students from adopting schools to recognize the level vocabulary, from "NO AI Use" to "Full AI Use with Human Oversight", rather than starting from zero.
- Oklahoma students may arrive used to submitting links to their AI chats as disclosure. A faculty member who wants process transparency can build on that habit, and one who bans AI should know these students were taught that disclosure, not concealment, is the norm.
- Students covered by the law were protected from AI making high-stakes decisions about them. They may expect the same human accountability in college and may react against automated grading or placement.
- These students were taught that AI detectors are unreliable. A course that leans on detection software will meet students trained to distrust it.
- The guidance asks districts to "develop partnerships with local industry and higher education". Oklahoma colleges may be invited into that pipeline.`,

    response: `- **Assessment.** Adopt an explicit per-assignment AI-permission scale, ideally built on the same published AI Assessment Scale that Oklahoma credits, for direct continuity. Keep no-AI assessments where showing a core skill is the point.
- **Disclosure.** Consider Oklahoma's chat-link convention for AI-permitted assignments. Incoming students may already practice it.
- **Integrity.** Favor process- and disclosure-based integrity, and do not lean on AI detectors, which these students' own schooling called unreliable.
- **Human judgment.** Keep automated tools out of high-stakes calls about students, or disclose them clearly. Oklahoma students covered by the law expect a human decision-maker.
- **Onboarding and partnership.** Give a short AI-literacy check at entry, since the scale is voluntary and exposure varies. Where invited, join the district and industry partnerships the guidance envisions.`,

    unique: `- The AI Acceptable Use Rating Scale prints its lineage on the page, crediting the authors of the published AI Assessment Scale. It is the clearest primary-source link in this project between a state scale and the peer-reviewed original.
- Disclosure goes down to the chat itself. From Level 1 up, students submit links to their AI conversations, a level of transparency few states specify.
- The law is among the most prescriptive enacted anywhere. Educator-directed use, human review of outputs, a ban on AI as the primary basis for high-stakes decisions, annual parental disclosure, and a no-penalty opt-out.
- Every district must adopt an AI policy before the 2027-2028 school year, with the minimum contents listed in the statute.
- The attribution line on Oklahoma's scale matches Wyoming's, down to the same unusual spelling of one author's name, which suggests the two states adapted the scale from a shared source.
- The guidance takes a clear stand against detection software and offers a process-based alternative instead.`
  },
  'Oregon': {
    policy: `Oregon works from two voluntary documents from the state education department. The 2023 guidance lays the foundation. The March 2025 workbook walks districts through writing their own policy. Neither is a mandate, and Oregon has no classroom AI law on the books in this project's records.

#### What the state is trying to do

- The teacher stays in charge. "Whenever using AI... it is essential that educators are the decision makers and their knowledge and expertise is central." The guidance borrows a federal metaphor, AI as an electric bike rather than a robot vacuum, where "the human is fully aware and fully in control".
- Equity is the organizing lens. The 2023 guidance devotes a full section to equity implications, and the 2025 workbook is built on the National Educational Technology Plan's three digital divides, in use, in design, and in access.
- District policy should be "clear, attentive to the current moment, mindful of student data privacy and equity centered".
- The workbook makes the economic case plainly. "As AI literacy is becoming a necessary job skill for most careers, districts must consider both the benefits and risks."

#### Who it covers

- The 2023 guidance addresses districts, teachers, families, and support staff, including paraeducators and secretaries.
- The 2025 workbook is written for school and district leaders developing policy.
- Both focus on generative AI in K-12 classrooms.

#### What is allowed and what is not

- Oregon writes no permission scale of its own and no statewide prohibition list. Each district decides.
- The workbook asks districts to "define when AI can or cannot be used on an assessment" and recommends they "consider utilizing a scale for use of genAI on assessments", pointing to the published AI Assessment Scale and to the Kapor Center's classroom assignment norms tool as options. Oregon recommends these scales. It does not adopt one.
- The documents note the national arc from banning chatbots toward embracing them.

#### Privacy, fairness, and honesty

- Privacy rests on named laws. The Oregon Student Information Protection Act plus the federal student-records privacy law, the federal children's online privacy law, and the federal school internet-safety law.
- Equity turns into concrete district questions about creative use, time for teacher learning, and broadband and device access.
- The workbook asks whether AI-use rules should be "modified for students with certain learning needs... students on IEPs or 504 plans or multilingual learners".
- Honesty is handled through assignment design. The guidance recommends rethinking assignments and being "clear on what standards/skills are being addressed".
- On detectors, Oregon is more tolerant than most guidance states. It tells schools to "train educators to detect the presence of AI written communication" and to "consider using AI detectors, with an understanding that these detectors often incorrectly detect", naming tools with "mixed results". It cautions without discouraging use outright.

#### Training, curriculum, and rollout

- The 2025 workbook is the how-to. It walks districts through goals with recommended tasks, including forming an "AI-focused committee" and using a national readiness checklist as a self-assessment.
- Assessment advice favors process over product and points toward authentic, performance, and project-based assessment.
- The rollout advice is to pilot. "Implement the policy with fidelity, it might be helpful to start with one school or grade level band before rolling out district wide."
- The workbook links real policies from Oregon districts, including Salem-Keizer, North Clackamas, Tigard Tualatin, and Hillsboro, and points teachers to Stanford's classroom-ready AI teaching resources.`,

    offloading: `Oregon's protection against students handing their thinking to the tool runs through its human-in-control principle and process-based assessment.

- The electric-bike metaphor is the core stance. AI should leave "the human... fully aware and fully in control, but their burden is less", unlike a robot vacuum that frees "the human from involvement or oversight".
- Caution is built into the foundation. These tools "are subject to biases and inaccuracies... Caution must be exercised when considering a response".
- Assessment redesign toward process over product is the main mitigation for both honesty and thinking.
- Oregon writes no grade-band progression for AI reliance and no productive-struggle doctrine. The control is the teacher-in-charge principle plus process-focused assessment, and nothing more specific.`,

    graduate: `Both documents are voluntary and run through districts, so an Oregon student's experience is a district story.

- A student from an adopting district lived under a policy shaped by the state's equity lens, attentive to access and to learning differences, rather than under a state scale.
- Some may know a leveled permission vocabulary, but only if their district chose to adopt one of the scales Oregon pointed to. There is no shared vocabulary to count on.
- Where teachers followed the guidance, students learned that the teacher decides how AI is used, the electric-bike principle in practice.
- Where districts adopted the workbook's assessment advice, students experienced grading that weighed process over final product.
- Detector experience is genuinely mixed. Oregon permits detection tools with warnings about false results, so some students met them as accepted practice and some never did.`,

    implications: `- Oregon recommended the published AI Assessment Scale but did not adopt it. A university using that scale will find some Oregon students recognize it, but only those from districts that chose it. Expect partial familiarity, not a reliable baseline.
- Oregon students were taught inside an equity frame built on access, design, and use. They may be attuned to questions of who can afford which tools, and a campus whose sanctioned AI tools sit behind a paywall will feel discontinuous to them.
- They were taught that a named human decides how AI is used. A syllabus that says who decides and how will feel continuous. Blanket permission or blanket prohibition will not.
- Oregon took no strong stand against detectors, so its graduates carry no uniform prior view of them. Do not assume the detector skepticism that students from anti-detector states bring.
- Higher education helped write the foundational guidance. A University of Oregon professor is a named contributor, so Oregon institutions may already have faculty connected to the state's K-12 AI work.`,

    response: `- **Assessment.** State AI permission explicitly for every assignment. If adopting a scale, the published AI Assessment Scale gives continuity with the tool Oregon recommended. Favor process-based and authentic assessment, as the workbook does.
- **Equity.** Confirm that sanctioned campus AI tools are accessible and not paywalled, matching the lens Oregon students were taught.
- **Onboarding.** Give a short AI-literacy check at entry. District-to-district differences are wide and no state scale anchors expectations.
- **Integrity.** Favor process- and disclosure-based integrity, and set the institution's detector policy explicitly rather than assuming students share a view of detection tools.
- **Governance.** Oregon institutions can connect with the state education department's work, which their own faculty helped shape, and with the district policies the workbook surfaced.`,

    unique: `- A two-document, staged approach. A 2023 foundation plus a 2025 policy-development workbook meant to be used together.
- The electric bike versus robot vacuum metaphor for keeping the human in control of AI.
- An equity spine built on the three digital divides, in use, in design, and in access.
- A workbook of goals with tasks, guiding questions, and takeaways, plus links to real policies from named Oregon districts.
- A recommend-but-not-adopt stance toward scales, pointing districts to the published AI Assessment Scale and the Kapor Center tool rather than writing a state scale.
- A more detector-tolerant integrity stance than the states that warn schools off detection software.
- Higher-education co-authorship, with a University of Oregon professor among the named contributors.`
  },
  'Pennsylvania': {
    policy: `Pennsylvania published no classroom AI framework and no student-use rules. Its one substantive document works on teachers instead. In June 2025 the state education department's higher-education office published a framework for an AI endorsement, a voluntary 12-credit addition to an existing teaching certificate that universities design and deliver. The endorsement is "not required to perform service".

#### What the state is trying to do

- The aim is teacher preparation, not student regulation. The framework exists because "there are currently no professional organizations that have established specific standards for its use in PK-12 settings", and it fills that gap with a set of teacher competencies.
- AI literacy for teachers and students is framed as an urgent need, driven by the workforce and by equity.
- Partnership between people and AI is a stated value. Teachers who earn the endorsement must "articulate the principles of human-AI complementarity, demonstrating how AI can augment human capabilities and serve as an effective partner".

#### Who it covers

- The direct audience is teacher-preparation programs. Degree-granting institutions and community colleges, "alone or in cooperation with other institutions, community colleges or school entities", design and offer the program.
- The end audience is teachers who complete it and, through them, their students. The endorsement documents "knowledge in new and emerging areas where formal certification does not exist".

#### What is allowed and what is not

- There is no student permission scale and no prohibition list. Pennsylvania regulates what future teachers must understand, not what students may do.
- The nearest thing to a use rule is a teacher competency. Candidates must "demonstrate responsible AI decision-making by recognizing when to leverage AI assistance and when to prioritize human judgment and creativity".

#### Privacy, fairness, and honesty

- Ethics and privacy form one of the six competency areas. Candidates must "analyze terms of service and data usage policies of AI-powered educational platforms to assess their alignment with ethical guidelines and privacy regulations", including the federal student-records and children's online privacy laws, and must "identify and differentiate types of bias in AI models".
- Equity runs throughout. Candidates must "advocate for equitable AI integration... ensuring AI tools enhance learning opportunities rather than reinforce existing disparities" and support "learners with disabilities, multilingual learners, and neurodiverse students".
- Honesty is present but deliberately not the whole story. Candidates must "confront AI's potential societal impact by examining both its benefits and risks beyond academic integrity concerns". Pennsylvania frames AI as bigger than a cheating problem.
- The framework does not address AI detectors at all.

#### Training, curriculum, and rollout

- The document is a full teacher-preparation program specification, with six competency areas. Foundations of AI, ethical and responsible use, AI for teaching and assessment, AI literacy for students, AI leadership in schools, and AI's role in human and societal thriving.
- A capstone field experience in a school is required. Candidates "secure a PK-12 school partner" and complete a real-world project.
- The teaching-and-assessment area covers lesson planning, personalized learning, timely feedback, and reading "AI-generated learning analytics to refine instructional strategies".
- The leadership area prepares teachers to assess district AI initiatives and "design professional learning sessions" for colleagues.
- Related state-affiliated resources exist, a special-education AI toolkit and a general web page, but neither is a classroom framework.`,

    offloading: `Pennsylvania is unusual in making the risk of handing thinking to the tool a formal teacher competency rather than an aside.

- One competency area names the effect directly. Candidates must "analyze the cognitive and psychological effects of AI usage and reliance", including "examining how cognitive offloading to AI systems influences attention, memory, and problem-solving". Few states make this an assessed competency for anyone.
- Human agency is a required teaching stance. Candidates must "model the balance of AI augmentation with human agency in academic and professional settings".
- Knowing when not to use AI is itself a competency, recognizing "when to prioritize human judgment and creativity".
- The framework also flags AI's "impact on socialization, social-emotional well-being, and sense of belonging".
- All of this lives in what future teachers must understand, not in a student-facing scale. Pennsylvania protects student thinking by training the teacher.`,

    graduate: `Pennsylvania shapes teachers, not the student experience, so any profile of an arriving student is indirect.

- There is no state-set student baseline. A Pennsylvania graduate's AI exposure was decided entirely by their district, and this project's records capture no statewide student-use document.
- A student taught by an endorsement-trained teacher may have met AI literacy aligned to the six competency areas, especially critical evaluation of AI content and the habit of keeping human judgment in charge.
- That group is small. The endorsement launched in June 2025 and is voluntary, so it raises teacher capacity over the coming years rather than describing anyone arriving now.`,

    implications: `- This document creates work for higher education directly. Pennsylvania universities and community colleges are the bodies that design and deliver the AI endorsement, and the framework was developed with university faculty from Millersville, St. Vincent, and Moravian.
- The six competency areas are a ready-made scaffold a university could adopt for its own faculty development or an AI-in-teaching credential, and the competency on how AI reliance affects attention, memory, and problem-solving is a model worth borrowing whole.
- For incoming Pennsylvania students there is no state K-12 baseline to assume. Plan entry the way you would for a no-framework state, with explicit orientation.
- A university-run process is shaping the state's next step. Penn State ran a statewide listening tour on AI in education from March to June 2026, sponsored by the state education department, with a report and recommendations expected in fall 2026. Higher education is writing Pennsylvania's future K-12 guidance.`,

    response: `- **Teacher preparation.** Pennsylvania teacher-preparation programs can map their offerings to the six competency areas and consider offering the 12-credit endorsement, which positions their graduates to teach AI literacy in schools.
- **Curriculum.** Adopt the framework's competency on how relying on AI affects attention, memory, and problem-solving. It is a strong template for any institution's AI-literacy or faculty-development work.
- **Onboarding.** Assume no state student baseline. Give incoming Pennsylvania students an explicit AI-use orientation and a short literacy check.
- **Engagement.** Track or join the Penn State process producing the state's guidance, and align entry expectations early.
- **Assessment.** State AI permission explicitly for every assignment. Pennsylvania students share no statewide scale or vocabulary.`,

    unique: `- Pennsylvania is the clearest case in this project of a state acting on AI through teacher preparation and higher education rather than through a classroom framework.
- The framework came from the state education department's higher-education office, not a K-12 curriculum office.
- Six named teacher-competency areas, including one on AI's societal role that formally requires analyzing how offloading thinking to AI affects attention and memory.
- A required capstone field experience ties the university coursework to a real school.
- University faculty co-wrote it, with Millersville, St. Vincent, and Moravian among the named developers.
- A university-run statewide listening tour, sponsored by the state education department, is producing Pennsylvania's forthcoming K-12 recommendations.`
  },
  'Puerto Rico': {
    policy: `Puerto Rico is a US territory that runs one unified school system, so what its education department publishes lands closer to binding policy than a state's voluntary guidance. Two documents matter. The 2024 framework carries a five-level student scale as an annex. The 2026 student guide is built around a single authorized platform and a teaching model called SENSE. The platform and supervision rules bind the system. The teaching model and the scale are recommended. Both documents are in Spanish, and the quotes below are translated.

#### What the territory is trying to do

- The 2024 framework describes its approach as "centered on the human being".
- The 2026 guide's spine is safe, supervised use through one channel. Institutional AI use "must be carried out exclusively through authorized platforms, such as MS Copilot".
- Equity is a stated objective, to "reduce educational and digital gaps, ensuring that all students, regardless of socioeconomic context or geographic location, have guided and safe access to Gen AI".
- AI use is tied to the academic standards, with Spanish and English named as priority areas.

#### Who it covers

- The 2024 framework addresses the school system broadly. The 2026 guide is written for students, used under teacher supervision.
- The platform program covers students aged 13 and older, and the guide flags concern about younger students without setting out a program for them.

#### What is allowed and what is not

- The permission scale has five levels, translated directly from Washington state's, with the source credited under an open license.
- **Level 1, no AI assistance.** "No AI tools are used at any point. Students depend solely on their knowledge and skills."
- **Level 2, AI-assisted idea generation.** "AI tools can help generate ideas. The final content must be created by the student without direct AI input. AI assistance must be cited."
- **Level 3, AI supporting drafting.** "AI can help draft initial versions. The final version must be significantly revised by the student. There must be a clear distinction between the AI's contribution and the student's."
- **Level 4, AI collaborative creation.** "AI-generated content may be included. The student must critically evaluate and edit the AI's contributions. AI use must be transparent and cited."
- **Level 5, AI as co-creator.** "Extensive use of AI in content creation. The student provides a justification for the AI use and ensures original thinking. The work adheres to academic integrity with appropriate citations."
- Only authorized platforms may be used, in practice Microsoft Copilot. "Unsupervised use is prohibited to avoid technological dependence" and related harms, and using generative AI to produce prohibited kinds of content is barred.

#### Privacy, fairness, and honesty

- Privacy drives the platform choice. Copilot was selected because it meets the system's cybersecurity and privacy requirements, with attention to the laws that protect minors.
- Digital ethics is taught as part of the SENSE model, guiding students toward "legitimate, honest, and conscious use of Gen AI to avoid plagiarism, technological dependence, harassment, or disinformation".
- Academic integrity has its own scoring rubric, alongside rubrics for prompt quality, metacognition, and checking AI-generated information.
- The documents do not center AI detectors. Honesty runs through the scale's citation rules, the ethics teaching, and the rubrics.

#### Training, curriculum, and rollout

- SENSE structures the classroom work. The name stands for Safety, Ethics, Narrative, Human-AI Synergy, and Evaluation of results, and the model guides teachers through planning, teaching, and evaluating.
- Teacher training comes first. The guide expects "Prior training on the SENSE model, digital ethics, and safety in AI use" before classroom use.
- Assessment is rubric-rich, with scoring guides for SENSE progress, prompt quality, integrity, metacognition, and information checking.
- AI use is aligned to the territory's curriculum, with Spanish and English as the priority competency areas.`,

    offloading: `Puerto Rico works against dependence through its supervision rules, the scale's design, and the SENSE model.

- The ban on unsupervised use is an explicit anti-dependence control. It is "prohibited to avoid technological dependence" and related harms.
- Level 1 preserves unaided work by definition. "Students depend solely on their knowledge and skills."
- Responsibility escalates with permission. By the top level, "the student provides a justification for the AI use and ensures original thinking".
- The SENSE model keeps reflection central, through its human-AI synergy and evaluation components and a dedicated metacognition rubric.
- The ethics teaching names dependence as a harm to avoid, alongside plagiarism, harassment, and disinformation.`,

    graduate: `One unified system means a Puerto Rico graduate's experience is more consistent than any US state's, though schools and teachers still varied and the platform program covers students 13 and older.

- They know the five-level scale in detail, with a citation expectation written into nearly every level, from citing AI assistance at the idea stage to justifying extensive AI use at the top.
- They learned that vocabulary in Spanish. The levels run from Sin Asistencia de IA to IA como Cocreador, and the SENSE model's terms are Spanish too.
- Their sanctioned AI use ran through one platform, Microsoft Copilot, under supervision, with unsupervised use prohibited. Independent, open-ended AI experience may be thinner than a faculty member assumes.
- Where teachers used the rubrics, they picked up a structured vocabulary for integrity, prompt quality, and thinking about their own thinking.
- Students who left the system early, or whose exposure fell before age 13, carry less of this than the unified-system label suggests.`,

    implications: `- Puerto Rico students may arrive fluent in a five-level permission scale whose levels match Washington state's. A university adopting a leveled scale can expect partial recognition, though the vocabulary they learned is Spanish and the top level is "IA como Cocreador".
- They were trained on a single sanctioned platform under supervision. An open, multi-tool, largely unsupervised campus is a significant shift, and they may look for one approved tool and clearer boundaries than they find.
- The scale's citation rules mean these students may already expect to disclose and cite AI use. That maps well onto university integrity norms.
- Their independent AI experience may be limited and heavily scaffolded, especially for students who left the system early. Do not assume open-tool fluency.
- Language matters. These students learned AI vocabulary in Spanish, and a bilingual bridge to English AI-literacy terms eases the transition.`,

    response: `- **Assessment.** Adopt an explicit per-assignment AI-permission scale. Puerto Rico students will recognize a leveled structure with citation rules. Keep no-AI assessments where showing a core skill is the point.
- **Tools.** Say plainly which tools are allowed and how independent use is governed on campus. These students come from a one-platform, supervised environment.
- **Language.** Offer AI-literacy materials that connect the Spanish vocabulary, the SENSE model and the scale levels, to their English equivalents.
- **Onboarding.** Give a short AI-literacy check at entry. Even in a unified system, school-level practice varied, and the program's age-13 threshold means uneven independent experience.
- **Integrity.** Build on the disclosure-and-citation habit the scale and rubrics instilled, favoring process- and rubric-based integrity.`,

    unique: `- A unified system. Because one department runs every school, its rules on platforms and supervision function like district policy across the whole territory, not like voluntary state guidance.
- A single mandated AI platform, Microsoft Copilot, for students 13 and older, chosen for privacy and cybersecurity compliance. No US state in this project prescribes tools that tightly.
- The SENSE model, an original teaching framework covering safety, ethics, narrative, human-AI synergy, and evaluation, with a matching suite of scoring rubrics.
- A five-level scale translated word for word from Washington state's, with the source credited under an open license. The levels start at one, not zero.
- Spanish-language delivery, giving graduates their AI vocabulary in Spanish.`
  },
  'Rhode Island': {
    policy: `Rhode Island has one document, guidance from the state education department dated August 2025. It is voluntary and says so plainly. "The distribution of this guidance doesn't constitute formal recommendations or regulations." It is also unusually broad, covering instruction, equity, learners with different needs, security, and college and career readiness, and it borrows rather than builds. Instead of writing its own permission scale, Rhode Island reproduces North Carolina's acceptable-use guide in its appendix.

#### What the state is trying to do

- The goal is achievement, stated as using AI "to inspire higher and more equitable levels of achievement in our classrooms".
- Teaching "must be reimagined to effectively prepare students for postsecondary and career success".
- The instructional advice is organized by development, through four grade bands from kindergarten to grade 12.
- Equity for historically underserved students and for Differently-Abled Students runs through the whole document.

#### Who it covers

- The guidance addresses districts, with sections for instruction, operations, and family and community engagement.
- It covers K-12 and adds a full college and career readiness section that reaches toward what comes after graduation.

#### What is allowed and what is not

- Rhode Island wrote no permission scale and no prohibition list. It offers "four examples of guidelines for AI use by students", the first being North Carolina's "General Guide on Acceptable Use of AI", reproduced in full and credited to the North Carolina staff who wrote it.
- The grade-band table sets developmental expectations instead. In the earliest grades AI is "only used under direct supervision of a teacher with district-approved AI tools". By high school the accepted uses include "polishing papers, brainstorming ideas, research, worked examples".
- Age gating is noted in the middle grades. "Age 13 is when children can create a GenAI account with their parent's permission."

#### Privacy, fairness, and honesty

- Dedicated sections cover security and safety, and equity and bias.
- The equity stance reaches into grading. The guidance calls for "explicit instruction for Differently-Abled Students" on AI use and for grading approaches "that do not penalize students for accommodations or modifications that are supported by AI".
- Honesty is left to each district. The state encourages every district to develop "an academic integrity approach that makes sense in their context and culture", while surfacing one teacher's call for "a universal policy... defining what the meaning of cheating is".
- The guidance does not center AI detectors. Its integrity approach runs through policy and citation, not detection software.

#### Training, curriculum, and rollout

- Two checklists help districts start, one for getting started with AI and one for buying AI software.
- Assessment advice at the high school level favors in-person, performance-based demonstration, so students show what they can do without AI.
- Family engagement includes a sample parent letter, provided in English and Spanish.
- The guidance ships with companion resources, a podcast version, a custom chatbot trained on the document, and a six-part webinar series.
- Librarians are treated as partners in the work, quoted among the educator voices.`,

    offloading: `Rhode Island takes the risk that students stop thinking for themselves seriously, grade band by grade band, and it names productive struggle.

- The grade-band cautions are the main control. In grades 3-5, "Avoid overreliance on AI for answering questions that require critical thinking, as this will impede students' development of problem-solving skills". In high school, "Students should exercise self-discipline to avoid over-reliance on AI".
- It protects productive struggle by name and warns that leaning on AI content "may lead to a false sense of understanding" and inflated confidence.
- It flags the social cost too. "Over-reliance on AI systems may decrease valuable human interaction."
- It preserves unaided demonstration. High school students "demonstrate knowledge and skills with performance-based and in-person assessments to ensure they can perform without AI assistance".
- It teaches critique early. Middle schoolers "ask a generative AI chatbot to answer a question or write an essay and then critique it, looking for errors", and high schoolers examine AI text for "biases, stereotypes, and inaccuracies".`,

    graduate: `The guidance is voluntary and adopted district by district, so a Rhode Island student's experience varies.

- A student from an adopting district grew up along a taught trajectory. First that "AI is not a real person", then critiquing AI output for errors and bias, then exercising "self-discipline to avoid over-reliance".
- If their district adopted the North Carolina guide that Rhode Island reproduced, they may know that structure, but the vocabulary is North Carolina's, not a Rhode Island original.
- They may have shown their learning through in-person, performance-based assessment built to prove they "can perform without AI assistance".
- Where schools followed the college and career readiness section, they were taught AI literacy as preparation for college, not as a threat to be policed.`,

    implications: `- Rhode Island frames AI literacy as college preparation in so many words. The guidance argues "students will perform better in college with AI literacy skills" and that "schools who do not teach these skills are not adequately preparing students for college and career readiness". These students may arrive expecting AI to be treated as a competency, not only a risk.
- The guidance ties its case to the regional accreditation process for New England schools and colleges and quotes a university professor in support. Rhode Island institutions are part of the frame the state used.
- Students were taught to demonstrate ability without AI through in-person, performance-based assessment. They may expect, and be ready for, university assessments that verify unaided competence.
- They were taught that AI-supported accommodations are legitimate and should not cost points. Disability-services and grading practice should not contradict that.
- Any leveled vocabulary Rhode Island students carry likely traces to North Carolina's guide. A university adopting a scale in the style of the published AI Assessment Scale offers useful continuity.`,

    response: `- **Assessment.** State AI permission explicitly for every assignment, and keep performance-based, in-person assessments where unaided competence matters, mirroring the state's high school guidance.
- **Continuity.** Build on the college-readiness framing these students were taught, treating AI literacy as preparation rather than purely an integrity threat.
- **Disability services.** Align accommodation practice with what Rhode Island students learned, so AI-supported accommodations are not penalized.
- **Onboarding.** Give a short AI-literacy check at entry. District-to-district differences are wide and no state scale anchors expectations.
- **Integrity.** Favor citation- and policy-based integrity. Because the state pointed districts to North Carolina's guide, a leveled scale offers helpful continuity.`,

    unique: `- Cross-state borrowing as policy. Rhode Island reproduces North Carolina's acceptable-use guide in its appendix and credits its authors by name, a clear case of one state adopting another's work.
- A full college and career readiness section that treats AI literacy as preparation for what comes after graduation, with accreditation and college-application use cases.
- A developmental grade-band table with explicit cautions, ending in performance-based, in-person assessment in high school.
- A strong equity focus on Differently-Abled Students, including grading that does not penalize AI-supported accommodations.
- Two starter checklists for districts and a parent letter provided in English and Spanish.
- A rich set of companion resources, a podcast version, a custom chatbot trained on the guidance, and a six-part webinar series.`
  },
  'South Carolina': {
    policy: `South Carolina has published no rules for how AI may be used in its classrooms. The state education department has issued no classroom AI-use guidance, and none was found. What the state has published is easy to mistake for such guidance, and the distinction matters.

The one published document is a career-and-technical course framework. It sets standards for elective coursework that teaches AI and machine learning as a subject, covering computing systems, data and analytics, algorithms and programming, and security and privacy. Its aims are technical. Students "analyze the utilization of computing devices and investigate advancements in AI" and "evaluate the evolving legal and ethical tradeoffs that shape computing and AI practices". Each theme runs through four proficiency levels that describe deepening technical mastery, up to designing "domain-specific" AI and machine learning solutions. These levels measure skill at building AI. They are not permission levels for using AI on assignments, and a tracker could easily miscount this framework as an AI-use framework.

Two bills are pending, not enacted, and they pull in different directions. One would require opt-in written parental consent for student AI use, bar AI from replacing "licensed teachers in core instruction or final grading", and require annual public disclosure of AI tools and data practices. The other would permit AI electives from 2026-27 and require the state education department to issue guidance for putting them in place. Both sit in committee, so neither creates any current requirement.

The state education department reportedly plans its own internal AI framework, built with an outside group, U.S. Digital Response, through a twelve-week process. That framework is planned, not published.`,

    offloading: `South Carolina has no state position on students handing their thinking to AI, because it has issued no classroom AI-use guidance at all.

- The career-and-technical framework treats AI as a technical subject to learn, not a study tool to manage, so it says nothing about over-reliance in general instruction.
- One pending bill would bar AI from replacing "licensed teachers in core instruction or final grading". That is a keep-a-human-in-charge impulse, but it concerns the teacher's role rather than the student's thinking, and it is not law.`,

    graduate: `With no state classroom guidance, a South Carolina graduate's AI habits are a district story, and one group of graduates stands apart from the rest.

- Day-to-day AI rules, if any, came from the district. The state set no scale, no shared vocabulary, and no integrity norm for these students to carry.
- Students who completed the career-and-technical AI course sequence bring real technical skills. They coded in Python, R, or MATLAB, built computational models on large data sets, and designed AI and machine-learning solutions.
- That capability is narrow and elective-based, a distinct minority's experience, not general AI literacy. Do not generalize from them to every South Carolina graduate.
- The course framework's four levels measure how well a student can build AI. Do not read them as evidence that South Carolina students learned a permission scale for using it.`,

    implications: `- For everyday classroom AI use, South Carolina is a no-state-guidance jurisdiction. A faculty member cannot assume a shared AI vocabulary, permission scale, or integrity norm among incoming South Carolina students, because the state authored none.
- The career-and-technical group changes the picture in technical fields. Faculty in computing, data science, and engineering may find these students notably prepared while their classmates had no comparable exposure. The range is wide and course-driven.
- The state's direction could change soon. Two pending bills and a planned state framework could each establish a baseline, so entry assumptions about South Carolina students should be treated as provisional.
- If the restrictive bill became law, future students would arrive from a system where parental consent gated AI use and AI was barred from "final grading". That could shape expectations about consent and human grading, but it is a pending bill, not a fact about students arriving now.`,

    response: `- **Onboarding.** Assume no state baseline. Give incoming South Carolina students an explicit AI-use orientation and a short check of what they already know.
- **Placement.** In technical programs, look for students who completed the career-and-technical AI sequence. They may place beyond an introductory AI unit while their classmates need the general floor.
- **Assessment.** State the AI permission for every assignment in plain terms. South Carolina students share no statewide scale or vocabulary.
- **Integrity.** Set expectations from first principles. The state took no position on AI detectors or disclosure.
- **Watch the pipeline.** The two pending bills and the planned state framework could each change what future students arrive knowing.`,

    unique: `- The state's only published AI framework is a course curriculum that is easy to misread as use guidance. Its four levels grade technical proficiency at building AI, not permission to use it. Classifying it correctly is the key point about South Carolina.
- The state is mid-development rather than silent. The education department reportedly plans an internal AI framework through a twelve-week process with an outside partner, U.S. Digital Response.
- The two pending bills pull in opposite directions. One leans restrictive, with opt-in parental consent and a bar on AI in final grading. The other leans permissive, authorizing AI electives. Both sit in the same House committee.`
  },
  'South Dakota': {
    policy: `South Dakota's state education agency has published no AI guidance at all. Its website carries "no AI mentions or links anywhere on it", and searches found no state framework, mandate, or guidance document. The silence is unusually complete.

What fills the gap is not a state document. The state school-boards association released a model AI policy in May 2024 that reportedly addresses "expected student and staff AI use". The policy text sits behind a members-only login and could not be retrieved, so what it permits, prohibits, or teaches cannot be described here. Districts that adopted it may share some common ground, but that common ground is unverifiable from this project's records.

District practice is known only from news coverage. The Sioux Falls district reportedly runs its own process for vetting AI writing tools, but no primary document confirms it.`,

    offloading: `South Dakota has no state position on students handing their thinking to AI. The state issued no guidance on over-reliance, productive struggle, or preserving core skills, and whether the school-boards association's model policy addresses any of this is unknown, because its text could not be retrieved.`,

    graduate: `With no state guidance and an unretrievable model policy, no state-shaped profile of a South Dakota graduate can be drawn. What can be said is structural.

- A South Dakota graduate's AI exposure was set entirely by their district. There was no state floor beneath it.
- Where a district adopted the school-boards association's model policy, that policy shaped the rules. How many districts adopted it, and how faithfully, is not captured in this project's records.
- A model policy may have produced more consistency between districts than in a fully silent state. A faculty member still cannot rely on content that could not be read, so treat the range among South Dakota students as wide.`,

    implications: `- South Dakota is a no-state-guidance jurisdiction. A faculty member cannot assume any shared AI vocabulary, permission scale, or integrity norm among incoming South Dakota students, because the state authored none.
- The model policy may have created some common ground between districts, but its content is unverifiable here. Treat any assumed shared baseline as soft, and confirm it directly if it matters.
- Because the state agency is entirely silent on AI, incoming South Dakota students likely had no state-level AI-literacy framing at all. Plan an explicit, from-scratch AI orientation at entry.`,

    response: `- **Onboarding.** Assume no verified common baseline. Give incoming South Dakota students an explicit AI-use orientation and a short check of what they already know.
- **Assessment.** State the AI permission for every assignment in plain terms. South Dakota students are unlikely to share a scale or vocabulary.
- **Integrity.** Set expectations from first principles. The state took no stance on AI detectors or disclosure, and the model policy's stance is unknown.
- **Equity.** Because the district-to-district range is wide and unverifiable, provide a common floor of access and instruction on campus rather than assuming prior exposure.`,

    unique: `- A fully silent state agency. The education department's website carries no AI content whatsoever, a more complete state-level silence than most jurisdictions in this project's records.
- A model policy as the gap-filler. In place of state guidance, the school-boards association's May 2024 model policy reportedly gives districts a common template for student and staff AI use, a route to consistency that runs through the association rather than the state.`
  },
  'Tennessee': {
    policy: `Tennessee works from a law, not a guidance document. Public Chapter 550, enacted in 2024, requires three sets of boards to adopt AI-use policies. Public universities, local school boards, and public charter schools all fall under it. The law mandates that a policy exist. It leaves the content of each policy to the board that writes it. The Tennessee school-boards association's model policy shows what that content looks like in the districts that adopted it.

#### What the state is trying to do

- The law puts three sectors on one clock. Public universities, local school boards, and charter schools all had to adopt policies on AI use "for instructional and assignment purposes".
- All three sections of the law define AI the same way, as a "machine-based system that can... make predictions, recommendations, or decisions".
- The model policy's aim is safe, approved, disclosed use. "Only approved AI programs may be utilized in student instruction or in completing student work."

#### Who it covers

- The law reaches students, faculty, and staff at public universities, and students, teachers, and staff in districts and charter schools.
- The model policy addresses district staff and students in separate sections.

#### What is allowed and what is not

- The law itself draws no permitted-or-prohibited line. Each board writes its own rules.
- The model policy sets an approved-programs-only rule, with a process for submitting new programs and a technology-staff review for privacy-law compliance.
- Personal information stays out. Employees "shall not place personally identifiable information, financial information, intellectual property, or other confidential information into an AI system".

#### Privacy, fairness, and honesty

- The model policy ties AI-program review to "state and federal student data privacy laws" and requires secure storage.
- Access is stated as an equity rule. "Any approved programs shall be accessible to all students."
- Honesty runs on instruction, not detection. Students are taught responsible use, including "effective use of generative AI", when AI is appropriate in an assignment, "how to determine whether AI responses are accurate", and "the difference between cheating and seeking support". Neither the law nor the model policy mentions AI detectors.
- Staff disclose their own generative AI use when staying silent would violate a tool's terms, "mislead a supervisor or others as to the nature of the work", or be "inconsistent with the teacher code of ethics".

#### Training, curriculum, and rollout

- The district's director of schools "shall incorporate training programs on AI into professional development", focused on responsible use, personal information, and data-privacy compliance.
- Staff verify before they rely. "Outputs from AI programs shall be verified by reliable sources and reviewed prior to use."
- Parents are notified, and the district keeps an approved-programs list.
- The law sets a reporting rhythm. School boards report compliance to the Tennessee education department by each July 1, and the model policy builds that into a June board report submitted by the deadline.`,

    offloading: `Tennessee's law is structural rather than pedagogical, so its guardrails against students handing their thinking to AI live in the model policy, not the statute.

- Approved-tools-only use limits unsupervised offloading by design. Students work inside a vetted list, not the open market.
- Verification comes before reliance. "Outputs from AI programs shall be verified by reliable sources and reviewed prior to use."
- The integrity instruction teaches the line between support and dependence. Students learn "the difference between cheating and seeking support" and that "users assume responsibility for incorporating AI content responsibly".
- The law itself sets no doctrine on this. It requires that a policy exist and leaves the pedagogy to each board.`,

    graduate: `The law guarantees every recent Tennessee graduate lived under a formally adopted AI policy. It does not guarantee what that policy said, so the floor is real but thin.

- Every local school board and charter school had to put an AI policy in place by the 2024-25 school year and report compliance to the Tennessee education department each July. A recent graduate's district did not get to skip the question.
- Where the district adopted the school-boards association's model, the student worked from an approved-tools list, and their parents were notified about AI use from that list.
- Before using AI, they were taught responsible-use standards, including how to judge whether AI answers are accurate and "the difference between cheating and seeking support".
- Assume the policy existed. Treat its content as district-specific, because the mandate created a policy and a reporting habit, not a shared scale or vocabulary.`,

    implications: `- Tennessee law binds public universities directly. The University of Tennessee board of trustees, the board of regents, and every state university governing board "shall adopt a policy regarding the use of artificial intelligence technology by students, faculty, and staff for instructional and assignment purposes", implemented no later than July 1, 2025. A Tennessee public institution is not choosing whether to have an AI policy. It is complying with a statute.
- The requirement has teeth. Each board had to post its policy publicly and submit it to the legislature's education committee chairs, and a board that missed the deadline "must appear before the joint government operations committee no later than sixty (60) days after July 1, 2025, to report on the governing board's noncompliance".
- Tennessee put universities on the same statutory timeline as its schools, both landing by the summer of 2025. Faculty at a Tennessee public institution can point to an existing, legally required institutional AI policy.
- The statute covers faculty and staff, not just students. Tennessee university faculty are themselves governed by an adopted AI policy in how they use AI for instruction and assignments.
- The law encourages institutions to "collaborate in the development and implementation of policies", so similar language may run across Tennessee public institutions and may echo feeder-district policies.
- Incoming Tennessee students came from districts legally required to have AI policies and to teach responsible use. A university integrity policy can build on the cheating-versus-support framing rather than introduce it.`,

    response: `- **Know the obligation.** A Tennessee public institution should confirm its legally required AI policy is adopted, posted, and submitted, and align it with what incoming students expect.
- **Coordinate.** Feeder districts were required to adopt and report AI policies, and many used the school-boards association's model. Entry expectations can align with the approved-tools, disclosure, and integrity norms those students were taught.
- **Integrity.** Extend the taught "difference between cheating and seeking support" into course-level AI policy rather than starting from zero.
- **Assessment.** State the AI permission for every assignment in plain terms. The statute guarantees a policy existed, not a shared scale, so content varies district by district.
- **Faculty governance.** Because the law covers faculty and staff use, make sure faculty know the institution's adopted policy governs their own AI use in instruction.`,

    unique: `- A statute that binds public universities to adopt AI policies, the only case in this project's records where enacted law reaches higher education directly, and on the same timeline as K-12.
- An enforcement backstop. A noncompliant governing board must appear before the legislature's joint government operations committee within sixty days of the July 1, 2025 deadline.
- A three-sector sweep. One act covers universities, local school boards, and charter schools with parallel requirements.
- A procedural carve-out. The state's administrative-procedures law "does not apply" to the university policies, a change from the introduced bill's rulemaking approach.
- An annual K-12 compliance report to the Tennessee education department each July 1, which the model policy turns into a June board report and a July submission.
- A concrete model policy showing what district practice looks like. Approved tools only, conditional staff disclosure, and integrity instruction that names the cheating-versus-support line.`
  },
  'Texas': {
    policy: `Texas has published no statewide K-12 classroom AI guidance. The Texas Education Agency has authored none, and this project captured no primary document for Texas at all. What the record holds are verified web pages and two enacted statutes, neither of which is a classroom law.

House Bill 2060, from 2023, created an advisory council to study AI use by state agencies. House Bill 149, the Texas Responsible AI Governance Act, took effect January 1, 2026 and governs AI conduct generally. Its one education-relevant feature runs toward higher education, a carve-out that excludes public colleges and universities from the duties the act places on governmental entities. Neither statute sets a classroom rule.

That leaves the classroom to districts. There is no statewide permission scale and no statewide prohibition list, so what a student could and could not do with AI was set district by district, with no state floor. Large districts wrote their own materials, and news coverage points to a Houston district AI guidebook, but no district document was retrieved for this project.`,

    offloading: `Texas has no state position on students handing their thinking to AI. No statewide K-12 guidance addresses over-reliance, productive struggle, or preserving core skills, and neither of the state's enacted AI statutes touches classroom learning.`,

    graduate: `With no state K-12 guidance, no state-shaped profile of a Texas graduate can be drawn. The shape of the gap itself is worth knowing.

- A Texas graduate's AI exposure was set by their district. The most consequential rules came from large districts that wrote their own materials, like Houston's guidebook.
- The state established no scale, no vocabulary, and no integrity norm, so nothing narrows the district-to-district range.
- Given Texas's size and district autonomy, two Texas students from different districts may have had opposite experiences, and nothing at the state level narrows that range.`,

    implications: `- Texas is a no-state-guidance jurisdiction for K-12 classroom AI. A faculty member cannot assume any shared AI vocabulary, permission scale, or integrity norm among incoming Texas students, because the state education agency authored none.
- On the higher-education question, Texas is the near-inverse of Tennessee. Where Tennessee law required public universities to adopt AI policies, the Texas Responsible AI Governance Act excludes higher-education institutions from the duties it places on governmental entities. Texas public institutions are largely left to set their own course on AI governance, not directed by the state.
- The most influential prior frameworks are district products. An institution that draws heavily from a particular district, such as Houston, may find more common ground there, but the specifics were not retrievable here and should be checked directly.
- The state baseline may stay thin for some time. The state education agency has issued nothing, and the enacted statutes point away from classroom regulation, so entry planning should assume no state K-12 baseline for the foreseeable future.`,

    response: `- **Onboarding.** Assume no statewide baseline. Give incoming Texas students an explicit AI-use orientation and a short check of what they already know.
- **Check the big districts.** For an institution drawing heavily from a district like Houston, retrieve and review the district's own AI guidebook to see what many incoming students actually experienced.
- **Assessment.** State the AI permission for every assignment in plain terms. Texas students share no statewide scale or vocabulary.
- **Integrity.** Set expectations from first principles. The state took no position on AI detectors or disclosure.
- **Governance.** Because the state's AI-governance act leaves higher education out of its duties, a Texas public institution should not wait for a state framework. It should write its own.`,

    unique: `- A general AI-governance act with a higher-education carve-out. The Texas Responsible AI Governance Act excludes "an institution of higher education, as defined by Section 61.003, Education Code" from its definition of a governmental entity, so the act's state duties largely do not reach public colleges.
- The Tennessee contrast. Texas is the clearest counterpoint to Tennessee's affirmative university mandate. Texas leaves higher education out of its AI-governance duties rather than binding it.
- A legislature focused on government, not classrooms. Both enacted statutes address state-government and general AI use, not K-12 instruction.
- District-led practice at scale. With no state guidance, large districts such as Houston produced their own AI guidebooks, so Texas practice is defined at the district level.`
  },
  'Utah': {
    policy: `Utah works from two documents with different force. The state board of education's March 2026 framework is voluntary guidance that applies "where permitted by local policy". House Bill 218, the Digital Skills Amendments, is enacted law and puts AI literacy into a required course.

#### What the state is trying to do

- The framework rejects both extremes. "Providing unrestricted access falls short of providing needed protection. Conversely, an outright ban on AI in schools impedes the development of essential future workforce skills."
- Eight guiding principles anchor it, from using AI to help all students achieve their goals through educating staff and students, advancing academic integrity, and keeping student and teacher agency intact.
- The framework is unusually grounded in state law, citing Utah statutes on internet policy, student data protection, and student-records privacy alongside federal law and federal cybersecurity standards.
- The law adds one firm requirement. The digital skills course every student takes in grade 7 or 8 must now include "artificial intelligence literacy, including understanding artificial intelligence" capabilities and limitations, alongside cybersecurity and safe online practices.

#### Who it covers

- The framework applies to "all students, teachers, staff, administrators, and third parties who develop, implement, or interact with AI technologies", across instruction, administration, and operations, wherever local policy permits.
- The law covers the required grade 7 or 8 digital skills course statewide.

#### What is allowed and what is not

- Utah built no leveled permission scale. The framework sorts use into responsible and prohibited, and hands the specifics to teachers. "Teachers will clarify if, when, and how AI tools will be used, with input from students and families."
- Responsible uses include creativity, collaboration, translation, tutoring, assessment design, and differentiation, with human review throughout.
- Prohibited uses are explicit. Using AI to "manipulate media to impersonate others for bullying, harassment, or any form of intimidation", over-reliance, plagiarism and cheating, diminishing student and teacher agency, and privacy violations.
- Access follows permission. "If an assignment permits the use of AI tools, the tools will be made available to all students."

#### Privacy, fairness, and honesty

- The privacy line is bright. "We will not share personally identifiable information with consumer-based AI systems."
- Equity is named in the first principle, including "bridging the digital divide" and evaluating tools "for biases and ethical concerns".
- Academic integrity is grounded in "honesty, trust, fairness, respect, and responsibility", with AI credited in the school's preferred citation style.
- On detectors, Utah takes a middle position. "Use caution when using AI plagiarism checkers, because they can sometimes produce false positives. Consider using plagiarism checkers as one of several tools in a comprehensive approach."
- The framework also describes a safety use. AI "could have the ability to monitor written student communications" on school-provided accounts to flag distress and alert school personnel.

#### Training, curriculum, and rollout

- The law's AI-literacy requirement lands in a course every student already takes, a statewide curriculum floor rather than an elective.
- The law lets the state superintendent establish an advisory technology council to recommend digital-skills standards. The word is "may", so the council is discretionary.
- Grading stays human. "Teachers will ultimately be responsible for evaluation, feedback, and grading... AI will not be solely responsible for grading."
- Professional development is supported, including simulation-based training for teachers.`,

    offloading: `Utah treats over-reliance as a named prohibited use and speaks to the offloading problem more directly than most states.

- Over-reliance sits on the prohibited list. "Dependence on AI tools can decrease human discretion and oversight. Important nuances and context can be overlooked and accepted." Teachers clarify use and review outputs.
- The framework names the problem outright. "Teachers and students need to understand how agentic AI, or any AI system, that offloads decision making and/or cognitive effort in the classroom, operate and how to use them appropriately with a human in the loop."
- Agency is a guiding principle. Staff and students serve as "critical consumers" and stay accountable for decisions, core teaching practices remain the teacher's responsibility, and students remain active participants in their own learning.
- The answer to plagiarism is assignment design. Teachers "restructure assignments to reduce opportunities for plagiarism by requiring personal context, original arguments, or original data collection".
- Human review of AI output runs through the whole framework.`,

    graduate: `Utah pairs voluntary habits with one legal floor, so the profile has a firm part and a soft part.

- The firm part is the law. A student covered by House Bill 218 met a required dose of AI literacy in grade 7 or 8, covering what AI can and cannot do and its ethical and societal implications.
- The soft part is the framework. Where a district followed it, the student learned a responsible-versus-prohibited framing rather than a leveled scale, so they may lack a permission vocabulary but carry a strong human-in-charge orientation.
- They may bring a citation habit, crediting substantial AI-generated text in the school's preferred format.
- Detector expectations are genuinely uncertain. Utah permits detection tools with a false-positive warning, so one student may have met them and another never did.
- Treat the framework habits as possibilities and the grade 7 or 8 AI-literacy exposure as the firmer floor for recent graduates covered by the law.`,

    implications: `- Utah is one of the few states that requires AI literacy in a specific course by law. Incoming Utah students covered by the statute had at least one mandated exposure to AI capabilities, limitations, and ethics in grade 7 or 8. A university can build on that shared floor rather than assume none.
- Utah students may frame AI use through human agency and avoiding over-reliance rather than through a permission scale. A course policy that emphasizes keeping the human in the loop and reviewing AI output will feel continuous with what they were taught.
- The framework contains no higher-education hook, and the enacted statute does not reach public universities. This is the opposite of Tennessee. Utah institutions are not directed by the state on AI governance and should not expect a state framework to bind them.
- Utah's detector position is permissive with caveats, so Utah students were not uniformly taught to distrust detection tools. Do not assume a fixed prior view either way.
- The framework is grounded in specific state privacy statutes, so Utah students may arrive with clear expectations about keeping personal information out of AI tools.`,

    response: `- **Onboarding.** Expect a real baseline. Students covered by the law had a mandated AI-literacy unit in middle school, so use a short check to place them rather than starting from zero.
- **Assessment.** State the AI permission for every assignment in plain terms, and keep assignments that require personal context and original work, mirroring the framework's answer to plagiarism.
- **Agency.** Build on the human-in-the-loop orientation Utah students were taught, and extend it into disciplinary practice.
- **Integrity.** Favor citation-based and process-based honesty. Because Utah's detector position is permissive with caveats, set the institution's own detector policy explicitly.
- **Governance.** The state does not direct higher-education AI governance, so a Utah institution should write its own policy rather than wait for a state framework.`,

    unique: `- An enacted AI-literacy curriculum requirement. The law embeds AI literacy in the required grade 7 or 8 digital skills course, a firmer step than voluntary guidance.
- A responsible-versus-prohibited structure under eight first-person "We" principles, a deliberate choice against a leveled student-use scale.
- Unusually deep grounding in Utah statute, including the state's own student-privacy laws, plus federal cybersecurity standards.
- Explicit language about AI that "offloads decision making and/or cognitive effort", naming a problem most frameworks only circle.
- A described AI safety-monitoring use that flags signs of student distress to school personnel.
- A guiding principle that follows AI use outside the classroom, with the state board committing to support families with students' personal-device AI use.`
  },
  'Vermont': {
    policy: `Vermont works from one main document. The state education agency's guidance, issued January 2026, is voluntary. It helps schools decide, it mandates nothing. A separate 2026 state law, Act 156, restricts AI in mental-health services. It protects patients and consumers and sets no classroom rules.

#### What the state is trying to do

- Age comes first. The guidance organizes everything around what students of each age are ready for, from prekindergarten through high school.
- Four principles sort how AI can be used. Streamline planning and administrative work, support personalized learning, develop students' AI literacy, and use AI for "cognitively demanding tasks".
- Doing nothing is treated as a risk of its own. The responsible-use part opens with a section called "Risk of Doing Nothing", rejecting inaction while insisting on careful use.
- Learning goals drive AI decisions. Before assigning an AI task, teachers ask what skill they want students to develop and whether AI "will perform the skill for them".

#### Who it covers

- The guidance serves educators, school leaders, and staff, with quick-start guides written for each role.
- It runs from prekindergarten through high school and covers instruction, operations, and leadership.

#### What is allowed and what is not

- There is no leveled permission scale. Permission follows the student's age and the learning goal.
- The youngest students are kept away from chatbots entirely. "Students in grades PreK-2 should not use AI chatbots."
- In grades 3 to 5, "Students should not use open-ended AI chatbots". Only constrained AI built into the curriculum, with teachers free to demonstrate.
- Middle schoolers use age-appropriate, education-specific chatbots "under a teacher's direction", fully scaffolded.
- High schoolers use AI as "a cognitive assistant tool" for research, learning, and co-creation, with academic-integrity systems in place.
- Teachers can say no. "Teachers should feel empowered to say when AI usage is inappropriate."

#### Privacy, fairness, and honesty

- Privacy goes beyond stripping names. Schools must follow the federal student-records privacy law and the federal children's online privacy law, and the guidance warns that "it is not enough to remove student-identifiable information" because student work still trains the system. Districts should hold vendor privacy agreements.
- Fairness gets dedicated sections on ethics, bias, and equity of access.
- Academic honesty is called "the single most cited concern". The guidance recommends reviewing honesty policies for AI, modeling transparency, and "treating the academic honesty issue as a cry for help from students".
- On detection software the position is plain. "Do not rely on AI auto-detection tools. These tools are not reliable enough to be used in academic honesty disputes, sometimes show false positives."
- Mental-health risks get their own section, including AI companion toys with which "kids can form intense relationships". That concern connects to the state's mental-health law.

#### Training, curriculum, and rollout

- A tool-vetting framework helps schools sort general-purpose chatbots from education-specific ones before anything reaches students.
- A needs assessment walks school leaders through policy, staff readiness, student learning, infrastructure, and community engagement.
- High school assessment is expected to change. The guidance says "teachers need time to adjust assessments to respond to student usage of AI".`,

    offloading: `Vermont engages the risk of students handing their thinking to the tool more directly, and more by name, than any other state in this project's records.

- The question gets its own section. "AI gives us the ability to 'cognitively offload' tasks, essentially outsourcing our thinking to a tool... offloading the wrong tasks can interfere with learning and skill development."
- The framing is crutch versus tool. "The central challenge for educators is to determine when AI serves as a valuable learning tool and when it becomes a crutch that hinders skill development."
- It cites published writing directly, Ethan Mollick's essay "Against Brain Damage", and reaches for the calculator. "Just as we wouldn't want a student to use a calculator when they are first learning multiplication and division, there are situations where AI usage... is harmful to the learning process."
- A two-question test comes before any AI task. What skill should students develop, and "will AI's role in this task help them practice that skill, or will it perform the skill for them?"
- The age bands are themselves controls. Each warns that premature or unstructured AI use "may serve as a crutch, bypassing the struggle necessary for the learning process".
- It also reminds teachers that students are "not always the best judges of how well they are learning".`,

    graduate: `The guidance is voluntary and arrived in January 2026, so treat these habits as possibilities rather than guarantees. Most students arriving now finished school before it could take hold, and its influence will grow year by year.

- Where a school followed it, the student's AI history is deliberately staged. No chatbots through grade 5, scaffolded education-specific chatbots in middle school, and managed use as a "thinking partner" in high school. Do not assume a long, unstructured AI history. Structured fluency is concentrated in the high school years.
- They may know the crutch-versus-tool distinction in so many words, because the guidance teaches it directly, down to the calculator analogy and the two-question test.
- At the top band they were expected to manage AI "while maintaining intellectual ownership", a framing built for the workplace that carries straight into university work.
- They were taught that AI detectors are unreliable and should not decide honesty disputes.`,

    implications: `- Vermont students may arrive already fluent in the vocabulary that motivates university AI policy, when AI is a "crutch" and when it is a "thinking partner". Faculty can build on a shared frame rather than introduce one.
- The age gating means younger students had deliberately limited early exposure, with no open chatbots through grade 5. Faculty should not assume long AI histories.
- Vermont students were taught that AI detectors are unreliable and should stay out of honesty disputes. A course that leans on detection software will meet students explicitly trained to distrust it.
- The high school band prepares students "for a workforce where AI usage will be expected" while "maintaining intellectual ownership". Faculty can extend that ownership framing into their own disciplines.
- The state gives higher education no direction on AI. The guidance has no higher-education hook, and the 2026 law covers mental-health services, so Vermont institutions write their own policies.`,

    response: `- **Continuity.** Adopt Vermont's two-question test, does AI help students practice the skill or perform it for them, as a shared design principle. Incoming Vermont students may already know it.
- **Assessment.** State AI permission explicitly per assignment and reserve AI-free work where core skills are the goal, mirroring the productive-struggle logic of the age bands.
- **Integrity.** Do not lean on AI detectors, consistent with what Vermont students were taught. Favor process and transparency, and treat suspected misuse as a moment to teach and support.
- **Onboarding.** Give a short AI-literacy check at entry. The guidance is new and voluntary, exposure varies, and early-grade experience was deliberately limited.
- **Governance.** Since the state does not direct universities on AI, Vermont institutions build their own policies. The structure of the state framework is a usable starting point.`,

    unique: `- A dedicated section on students handing their thinking to the tool, citing Ethan Mollick's "Against Brain Damage" and the calculator analogy. It is the most direct treatment of that concern in any state document this project reviewed.
- Strict age gating with reasons attached. No chatbots through grade 2 and no open-ended chatbots through grade 5, with explicit worries about children treating AI as a person and skipping the "essential struggle" that learning requires.
- A four-principles framework, including a principle on using AI for "cognitively demanding tasks".
- An anti-detector stance paired with a compassionate reading of honesty violations as "a cry for help from students".
- A tool-vetting framework and role-based quick-start guides for putting the guidance to work.
- A privacy position that goes past removing names, protecting student work itself from becoming training data.
- A companion mental-health law, Act 156, prohibiting certain AI uses in mental-health services.`
  },
  'Virginia': {
    policy: `Virginia works from one document, guidance issued by the Governor's office in January 2024 under an executive order. It is voluntary, and it covers all of Virginia education, kindergarten through university, in a single frame. Two 2026 laws build on it, though their enacted text could not be read for this project.

#### What the state is trying to do

- Education stays human. "AI should never fully replace teachers, who nurture students' critical thinking, values and character development."
- Six guiding principles anchor the document, led by "Do no harm" and "Prioritize integrity". The others are augment rather than replace humans, harness AI to empower student success, work in partnership, and be constantly discerning.
- The case for AI literacy is economic, preparing "a workforce that can leverage AI to its full potential".
- The document calls itself a living approach, "not a one-and-done", with roles that will "continue to be refined by the Advisory Group".

#### Who it covers

- The scope is all of Virginia education. Duties are assigned to the state education department, the state higher-education council, the Virginia Community College System, the 131 school divisions, and "the boards of visitors/presidents/leadership teams at every public college and university".
- The audience runs from state agencies and governing boards to higher-education faculty and classroom leaders.

#### What is allowed and what is not

- There is no permission scale and no statewide prohibition list. Schools set the rules locally. The guidance directs them to "clearly outline the school or system's policies and protocols around data privacy, honor code, student code of conduct, acceptable use, and ethical considerations... including those related to plagiarism".
- The main constraint is "Do no harm", which allows AI "only when its use has the potential to contribute positive good/improvement to the status quo".

#### Privacy, fairness, and honesty

- "Do no harm" requires "safeguarding of the privacy, security, and confidentiality of personally identifiable information" and algorithms "not based on inherent biases that lead to discriminatory outcomes".
- Access for every learner is built into the student-success principle, "ensuring access for all learners".
- Integrity stands alone as a principle. Education must "teach about morality, ethics, honor, cheating, and how artificial intelligence can lead to perverse and destructive outcomes".
- The guidance says nothing about AI detection software. Honesty runs through honor codes and locally set conditions instead.

#### Training, curriculum, and rollout

- Five strategies carry the rollout. Encourage hands-on exploration by teachers, provide professional development through workshops and micro-credentials, spotlight success, host conversations across the community, and set the right conditions.
- The Virginia Community College System is tasked with designing "micro-badging and micro-credential training opportunities for the field".
- The guidance borrows a classroom resource from Oregon and points readers to it for K-12 and higher education alike.`,

    offloading: `Virginia guards against over-reliance through its principles rather than a dedicated section.

- **The core principle is augment, not replace.** AI "should not overpower/over-ride the critical thinking, judgement, and morality of the learner" and "will never replace teachers who provide wisdom, context, feedback, empathy".
- **Integrity instruction does part of the work.** Teaching "morality, ethics, honor, cheating" is treated as part of bringing AI into education.
- **Human judgment is reserved.** Faculty and staff are asked to keep "human judgement" central.
- There is no standalone treatment of students handing their thinking to the tool and no age gating. The protection is the augment-not-replace principle plus the conditions each school division sets.`,

    graduate: `The guidance is voluntary and each of Virginia's school divisions applied it in its own way, so treat these habits as possibilities rather than guarantees.

- A Virginia student's actual rules lived in their division's honor code, acceptable use policy, and plagiarism protocols. The state directed divisions to set those conditions but did not write them itself.
- Where the principles took hold, students learned that AI augments their own thinking and never replaces it, and they met integrity as a matter of ethics and honor rather than detection.
- They carry no leveled AI vocabulary, because the state set none. Expect division-by-division differences instead of a shared scale.
- The state's argument for AI literacy runs through the economy, so these students may see AI first through jobs and the workforce.
- Two 2026 laws, a pilot program and a guidance requirement, took effect in July 2026. Students arriving now finished school before those laws could shape their classrooms, so the baseline behind future students is still forming.`,

    implications: `- Virginia is the clearest school-through-college case in the documents this project reviewed. Higher education is named as a governance partner from the first page, and the partnership principle says "AI researchers and experts in Virginia colleges and universities and employers are key partners and guides around building the skills and knowledge required to be successful in the new economy". A Virginia institution is an assigned actor, not a bystander.
- The Virginia Community College System holds a defined AI credentialing role, designing micro-badges and micro-credentials, that four-year institutions can connect to.
- Incoming Virginia students and the institutions receiving them were addressed by the same document. Faculty can align entry expectations with a framework their own institution was named in.
- Students may arrive with the augment-not-replace and integrity-first framing but no leveled vocabulary, so a per-assignment permission structure needs to be taught explicitly.
- House Bill 1186 and Senate Bill 394 took effect July 1, 2026 and will firm up the state baseline. Their enacted text could not be verified for this project, so entry assumptions deserve a fresh look as they take hold.`,

    response: `- **Partnership.** Virginia institutions can act on their named roles, engage the state higher-education council and the community college system, and connect to the micro-credential design work.
- **Onboarding.** Give a short AI-literacy check at entry. Division differences are wide and no state scale anchors expectations.
- **Assessment.** State AI permission explicitly per assignment. Build on the augment-not-replace and integrity framing Virginia students may share.
- **Integrity.** The guidance is silent on detectors, so set the institution's own detector policy explicitly. Favor honor-code and condition-based honesty, matching the state's approach.
- **Watch the laws.** Two statutes took effect July 1, 2026. Their full text could not be read for this project, so confirm their substance directly before building on it.`,

    unique: `- A single framework for all of education, issued by the Governor's office under an executive order, assigning formal AI roles to higher education alongside the schools.
- A partnership principle naming Virginia's colleges and universities as "key partners and guides", a higher-education hook confirmed at the primary source.
- A task for the community colleges. The Virginia Community College System designs micro-badging and micro-credential AI training for the field.
- A six-principle spine led by "Do no harm" and "Prioritize integrity".
- Cross-state borrowing. Virginia points its readers to Oregon's classroom resource for both K-12 and higher education.
- A national-security and research framing grounded in the state's concentration of intelligence institutions and research universities.`
  },
  'Washington': {
    policy: `Washington works from one voluntary document, the Washington education department's human-centered AI guidance, version 3.0 from July 2024, plus two companions. A five-level student permission scale and an educator matrix of worked examples. Nothing in it is a mandate. A 2026 state law on AI companion chatbots protects consumers and sets no classroom rules.

#### What the state is trying to do

- Human-centered is the spine. "A human-centered AI learning environment always starts with human inputs and inquiry, and always concludes with human reflection and edits."
- Leadership priorities are AI literacy, "ethical, equitable, and safe use", and teacher training.
- Students get a say. "Empower students in how and to what degree AI is utilized in their learning journey."
- The purpose frame is readiness "for college, career, and life".

#### Who it covers

- The guidance addresses education leaders, teachers, students, and administrators across K-12 public schools, with the scale written for students and the matrix for teachers.

#### What is allowed and what is not

- The five-step scale sets permission per assignment. The levels, word for word.
- **Level 1, No AI Assistance.** "No AI tools are used at any point. Students rely solely on their knowledge and skills."
- **Level 2, AI-Assisted Brainstorming.** "AI tools can help generate ideas. Final content must be created by the student without direct AI input. AI assistance must be cited."
- **Level 3, AI-Supported Drafting.** "AI can help with drafting initial versions. The final version must be significantly revised by the student. Clear distinction between AI input and student's contributions."
- **Level 4, AI-Collaborative Creation.** "AI-generated content can be included. Student must critically evaluate and edit AI contributions. AI usage must be transparent and cited."
- **Level 5, AI as Co-Creator.** "Extensive use of AI in content creation. Student provides a rationale for AI use and ensures original thought. Work adheres to academic integrity with proper citations."
- The educator matrix crosses those five levels against real assignment types, from longform essays to podcasts to math word problems, with a worked example in each cell.
- Teachers are also encouraged to "co-create and share an AI decision-making rubric with students".

#### Privacy, fairness, and honesty

- Ethics, equity, and safety are leadership priorities, protecting data privacy and security and "addressing potential biases and harms".
- Students receiving special-education services are named directly. Schools should "Empower students receiving special education services to use AI to personalize and increase their access to learning".
- Honesty is built into the scale itself. Citation and transparency are required from level 2 up.
- On detection software the state takes one of the firmest positions in the country. "It is highly recommended that educators do not utilize AI detection software in evaluating student work", citing research from Vanderbilt and Stanford that the tools are "less accurate than advertised, as well as biased against non-native English speakers and writers". Teachers should instead know "students' voice and writing style through samples of work gathered over time" and resolve suspicion through a conversation.

#### Training, curriculum, and rollout

- Professional development for weaving AI into "pedagogy, curriculum, and assessment" is a leadership priority.
- The matrix ties the scale to assessment, and honesty conversations have footing where "an AI Matrix has been implemented and clearly communicated".
- Career and technical education is called "crucial in preparing students for the AI workforce".`,

    offloading: `Washington's protection against students handing their thinking to the tool is built into its human-centered spine and the scale's design.

- The human-in-the-loop principle bookends every AI interaction. Learning starts with human inquiry and ends with human reflection and edits, by rule.
- Level 1 preserves unaided work by definition. "Students rely solely on their knowledge and skills."
- Responsibility climbs with the levels. By level 5 the student "provides a rationale for AI use and ensures original thought".
- Critical evaluation is required at the upper levels. At level 4 the "student must critically evaluate and edit AI contributions".
- The state directs schools toward "supporting student agency, fostering collaboration, enhancing feedback, and promoting critical thinking".
- There is no standalone section on the risk by name. The leveled scale is itself the management tool.`,

    graduate: `The guidance is voluntary and adopted district by district, so treat these habits as possibilities rather than guarantees.

- A student from an adopting district can name the level an assignment sits at, from "No AI Assistance" through brainstorming, drafting, and collaboration up to "AI as Co-Creator", and expects every assignment to carry one.
- Citation is a habit, not an afterthought. From level 2 up they were told "AI assistance must be cited", and at the top level they justified their AI use and vouched for the originality of the work.
- They were taught that AI use starts with their own inquiry and ends with their own reflection and edits.
- They may hold a research-backed distrust of AI detectors and expect suspected misuse to be settled by a conversation about their work, not a software verdict.
- Their scale traveled. Puerto Rico translated it word for word into Spanish, so students arriving from there share the same vocabulary.`,

    implications: `- The five-level scale is ready to lift. A university can adopt the same structure, expect adopting-district students to recognize it, and use the educator matrix's worked examples. Puerto Rico's translation extends the reach beyond Washington.
- Students were taught, with research citations, that detectors are unreliable and biased against non-native English writers. A course that leans on detector reports will meet students confidently trained to distrust them.
- Students from adopting districts may expect AI permission to be specified per assignment, cited, and transparent. A syllabus that stays silent will read as less clear than what they had in high school.
- The state's higher-education connection is readiness framing, not governance. The guidance assigns no roles to universities, so there is a college-readiness frame to build on but no state pipeline to plug into.
- Students receiving special-education services may arrive having been encouraged to use AI for access and personalization. Disability services can align with that experience.`,

    response: `- **Assessment.** Adopt an explicit per-assignment AI-permission scale. Washington's five levels and its educator matrix are ready to lift and give continuity for adopting-district students. Keep true no-AI assessments where core skills are the goal.
- **Integrity.** Do not lean on AI detectors, consistent with what these students were taught and the research their state cited. Know students' voices through samples of their work over time and resolve doubts in conversation.
- **Onboarding.** Give a short AI-literacy check at entry. The five levels double as a placement rubric.
- **Framing.** Build on starts-with-inquiry, ends-with-reflection. It maps cleanly onto university expectations of original thought.
- **Access.** Continue the access-and-personalization framing that students receiving special-education services may have experienced.`,

    unique: `- A complete pair of tools, a five-level student permission scale plus an educator matrix organized by real assignment types with a worked example at every level.
- Cross-border reach. Puerto Rico's five-level scale is a word-for-word Spanish translation of Washington's.
- One of the firmest anti-detector positions in the country, naming Vanderbilt and Stanford research and the bias against non-native English writers.
- A crisp human-centered rule that bookends AI use with human inquiry and human reflection.
- Explicit encouragement for students receiving special-education services to use AI for access to learning.
- A homegrown scale. Washington's levels carry no credit to the published AI Assessment Scale, yet the structure proved portable enough for another jurisdiction to translate whole.`
  },
  'West Virginia': {
    policy: `West Virginia works from one voluntary document, the state education department's guidance, version 1.2 from March 2025, adapted from a widely used national template. The guidance itself mandates nothing, but it repeatedly anchors district policy to West Virginia board of education rules that already bind schools.

#### What the state is trying to do

- The principles are written in the first person. Educators commit to five "I will" statements, and schools and districts get a parallel "We will" set.
- Educators commit to using AI "in alignment with existing policies and regulations".
- AI literacy is central. "I will educate myself about AI. Promoting AI literacy among students is central to addressing the risks of AI use."
- Integrity is treated as a culture. "I will use AI in my classroom to advance a culture of academic integrity", built on honesty, trust, fairness, respect, and responsibility.
- Students "should be informed of the possible ways in which AI will impact the job market they will eventually enter".

#### Who it covers

- Educators through the "I will" principles, schools and districts through the "We will" set, across West Virginia public schools, grounded in the state board's existing policies.

#### What is allowed and what is not

- There is no leveled permission scale. Teachers "may decide to permit the use of generative AI tools for certain parts or types of assignments, providing clear explanations for its restricted use".
- A prohibited-use section draws the hard lines, each tied to a binding board policy. Bullying or harassment through AI-manipulated media is "strictly prohibited". Over-reliance on AI is itself a named prohibited use. Plagiarism and cheating fall under the board policy that bans plagiarism and requires teaching its consequences.
- Access is a condition of permission. "If an assignment permits the use of AI tools, the tools will be made available to all students."

#### Privacy, fairness, and honesty

- Educators "will not share personally identifiable information with consumer-based AI".
- The integrity section recommends permitting AI selectively with clear explanations and requiring citation of AI use, with formats from the Modern Language Association, the American Psychological Association, and Chicago provided.
- On detection software, teachers are advised to "refrain from using programs that claim to detect the use of generative AI for cheating or plagiarism purposes due to concerns about their reliability".

#### Training, curriculum, and rollout

- Curriculum work is grounded in the board's existing college- and career-readiness standards for technology and computer science.
- A companion online course hub supports teacher development.
- Assessment advice favors redesign. Teachers "restructure assignments to reduce opportunities for plagiarism by requiring personal context, original arguments, or original data collection".
- The document is a living one, with a version history that tracks its updates.`,

    offloading: `West Virginia names over-reliance as a predictable risk, then goes further and lists it as a prohibited use.

- The guidance flags it early, noting that "predictable risks include over-reliance on AI".
- The prohibited-use entry spells out why. "Dependence on AI tools can decrease human discretion and oversight. Important nuances and context can be overlooked and accepted." Teachers clarify if, when, and how AI is used, and "teachers and students are expected to review outputs generated by AI before use".
- Humans stay accountable. Staff and students serve as "critical consumers" of AI, and "humans, and not the AI, will be responsible and accountable for pedagogical or decision-making processes".
- Assignment redesign protects original work, asking for "personal context, original arguments, or original data collection".
- There is no dedicated section on handing thinking to the tool and no age gating. The over-reliance prohibition and the human-agency principle carry the load.`,

    graduate: `The guidance is voluntary and applied district by district, so treat these habits as possibilities rather than guarantees.

- A West Virginia student's rules came from district policy built on board rules that already existed, the same ones covering plagiarism and student conduct. AI arrived as an extension of familiar rules, not a new regime.
- Where the guidance took hold, citing AI use was the taught habit, with the major style guides offered as the formats.
- They were told to watch their own dependence on the tool. Over-reliance was a named prohibited use, and reviewing AI output before using it was the expectation.
- They may not expect detector-based enforcement, since their teachers were advised away from detection software over reliability concerns.
- They may connect AI literacy to career readiness, because the state grounded the work in its college- and career-readiness standards.`,

    implications: `- West Virginia has a built-in school-through-college governance link. The state board that issued this guidance seats, by virtue of office, the chancellor who leads both the state's higher-education policy commission and its community and technical college council. Higher education sits at the table where K-12 AI policy is made, though the guidance assigns universities no working roles.
- Students were taught that AI detectors are unreliable and best avoided. An institution that leans on detection software will meet students trained to distrust it.
- Students from adopting districts may expect selective, per-assignment AI permission with required citation and a human-in-charge framing. A syllabus that names AI rules per assignment and requires citation will feel continuous with school.
- Incoming students may tie AI literacy to career readiness rather than to a standalone AI regime, following the state's standards grounding.
- West Virginia adapted the same national template as several other states, including Utah. A university drawing students from those states may find a common principle vocabulary worth building on.`,

    response: `- **Assessment.** State AI permission explicitly per assignment with required citation, mirroring the guidance. Keep assignments that demand personal context, original arguments, or original data.
- **Integrity.** Do not lean on AI detectors, consistent with what these students were taught. Favor citation, disclosure, and process.
- **Onboarding.** Give a short AI-literacy check at entry. District differences are wide and no state scale anchors expectations.
- **Governance.** West Virginia institutions can use higher education's seat on the state board to align entry expectations with the schools that feed them.
- **Framing.** Build on the "critical consumers" and human-accountability language these students may share.`,

    unique: `- Higher education sits inside K-12 governance by design. The chancellor for higher education holds a seat, by virtue of office, on the state board that issued this guidance.
- First-person principles. Five "I will" commitments for educators and a parallel "We will" set for schools and districts, a structure shared with other states that adapted the same national template.
- A prohibited-use section anchored to binding board policies, tying voluntary guidance to rules that already had force.
- A clear advisory against detectors, with citation offered as the alternative.
- AI grounded in the state's existing college- and career-readiness standards rather than a separate regime.
- A version-controlled living document with a change history.`
  },
  'Wisconsin': {
    policy: `Wisconsin works from one voluntary document, the state education department's guidance from June 2024. Its scope is unusual. It covers K-12 schools and libraries together, public libraries included, under the banner of lifelong learning. Nothing in it is a mandate, and the document is "regularly updated", so details may shift over time.

#### What the state is trying to do

- People stay irreplaceable. "AI supports human teaching and learning but cannot replace educators." The point extends to librarians, whose ability "to inspire, motivate, and respond to individual needs" cannot be automated.
- AI literacy is framed as lifelong, reaching "across Wisconsin's schools, libraries, and communities".
- Responsible use means facing "plagiarism, false resources, and biases" directly.
- Media and information literacy is the critical-thinking backbone, guiding "staff and students in critically examining AI-generated results".

#### Who it covers

- The audience is "K-12 educators, librarians, students, and administrators", plus "Library Staff and Patrons". The scope spans schools and public libraries and reaches into community learning.

#### What is allowed and what is not

- There is no statewide permission scale and no prohibition list. Districts and libraries set the specifics, and the state offers a policy checklist rather than a permission ladder.

#### Privacy, fairness, and honesty

- The policy checklist covers conduct and academic integrity, digital citizenship, transparency and consent, data encryption and storage, copyright and citation, digital equity and student access, compliance with the federal student-records and children's online privacy laws, vendor compliance, and continuous monitoring.
- The privacy advice is specific. Restrict who can see student data, remove personal information from datasets, set retention periods, keep a breach-response plan, and meet accessibility standards.
- The guidance does not center AI detectors. Honesty runs through policy, citation, and media literacy.

#### Training, curriculum, and rollout

- Five training pillars structure professional development for school and library staff alike. Understanding AI and machine-learning basics, integrating AI into subject areas, hands-on AI experiences, collaboration and networking, and continuous learning and adaptability.
- Each pillar names concrete tools, like Teachable Machine and Machine Learning for Kids for hands-on work.
- AI belongs across the curriculum, "not just computer science", from math to social studies to science.
- The rollout advice is modest. "Start small: Begin by implementing AI in a controlled setting before a full-scale integration."
- Named Wisconsin professional networks, from library and education-technology associations to the state's digital learning collaborative, support the ongoing work.`,

    offloading: `Wisconsin's safeguard is the librarian's habit of questioning sources, applied to AI.

- The human component is irreplaceable. Teachers and librarians inspire, motivate, and respond to individual needs, and AI supports that work without replacing it.
- Critical examination is the core habit. The guidance promotes "information and media literacy efforts to guide staff and students in critically examining AI-generated results".
- Understanding comes before use. The first training pillar gives educators "foundational knowledge about AI and machine learning, including how these technologies work, their capabilities, and their limitations".
- Ethical reflection is built into use. AI work "presents opportunities to reflect on ethical concerns, such as plagiarism, false resources, and biases".
- There is no dedicated over-reliance section and no age gating. Media literacy plus the human-irreplaceability principle carry the protection.`,

    graduate: `The guidance is voluntary and applied district by district and library by library, so treat these habits as possibilities rather than guarantees.

- Their rules were district rules, shaped at most by the state's policy checklist. There is no shared scale or leveled vocabulary to count on.
- Where the guidance took hold, they were taught to examine AI output the way a librarian examines any source, for reliability, falsity, and bias. That media-literacy habit may be stronger than average.
- Some got hands-on time with tools that show how machine learning works, like Teachable Machine and Machine Learning for Kids, so they may know a little about how AI works, not just how to use it.
- They met AI across subjects, math to social studies to science, not only in computer science.
- Their experience with AI detectors is unknown. The state took no position, so it varied by district.`,

    implications: `- Wisconsin reframes AI literacy as lifelong and community-wide, delivered partly through public libraries. That is not a university-governance hook, but incoming students grew up in a state that treated AI literacy as an adult and community capability, and academic libraries are positioned as natural continuing partners.
- The media-literacy emphasis, driven by librarian authors, may leave Wisconsin students better prepared than average to evaluate AI output critically. University librarians can build directly on that foundation.
- The state set no scale, so incoming students share no leveled AI vocabulary. Per-assignment expectations need to be spelled out.
- Students may expect AI to appear across subjects rather than confined to computing courses, because that is how the state taught it.
- The guidance is silent on AI detectors, so prior detector experience is district-dependent. Do not assume a fixed prior stance either way.`,

    response: `- **Libraries.** The university library is the natural continuation of the model these students grew up with. Put AI-literacy onboarding there.
- **Media literacy.** Build on the critical-examination habit Wisconsin students may share, extending it to disciplinary source evaluation and citation.
- **Onboarding.** Give a short AI-literacy check at entry. Local differences are wide and no state scale anchors expectations.
- **Assessment.** State AI permission explicitly per assignment. No statewide scale exists to lean on.
- **Integrity.** Favor policy-, citation-, and media-literacy-based honesty, matching the state's approach, and set the institution's own detector policy explicitly, since the state took no position.`,

    unique: `- The only guidance in this project's records that covers schools and public libraries together, with a school-library consultant and a public-library consultant among the named authors.
- Five named training pillars, each with concrete tools attached, serving school and library staff alike.
- A librarian-led media- and information-literacy core as the main critical-thinking safeguard.
- Named Wisconsin professional networks written in as partners for the rollout.
- A detailed policy checklist running from conduct and privacy to copyright and vendor compliance.
- An across-the-curriculum stance, AI "not just computer science".`
  },
  'Wyoming': {
    policy: `Wyoming works from one voluntary document, a compact nine-page guide from the state education department, released in June 2024, that helps districts write their own AI policies. Nothing in it is a mandate. Its centerpiece is a four-level student AI usage continuum adapted, with the credit printed on the page, from the published AI Assessment Scale, the peer-reviewed paper several states have built on.

#### What the state is trying to do

- Seven principles anchor the guide, borrowed from a widely used national template. Purpose, compliance, knowledge, balance, integrity, agency, and evaluation.
- Humans keep deciding. The agency principle maintains "human decision-making when using AI" and asks how district guidance "ensures that students retain appropriate agency".
- AI literacy is framed around "preparing students for college" and the workforce.

#### Who it covers

- The guide is written for Wyoming school districts developing AI policy, working through guiding questions rather than rules. The recommended district advisory committee includes a "Local College Representative".

#### What is allowed and what is not

- The continuum sets permission per assignment across four named levels, offered as a model districts may adopt or adapt.
- **AI FREE.** "Work must be completed entirely without any AI assistance. Students must rely entirely on their own knowledge, understanding, and skills." Any AI use at this level violates academic integrity, and an honesty pledge that AI was not used may be required.
- **AI ASSISTED.** "AI is used for tasks as specified such as brainstorming, planning, or feedback. No AI content is allowed in the final submission." A disclosure statement and links to the student's AI chats go in with the final product.
- **AI ENHANCED.** AI is used interactively throughout. The student "must provide human oversight and evaluation of all AI generated content" and answers for its accuracy and fairness, with detailed disclosure and chat links.
- **AI EMPOWERED.** Full integration, "enabling previously impossible creations", with the student responsible for accuracy, fairness, and originality, plus detailed disclosure and chat links.

#### Privacy, fairness, and honesty

- Compliance is a full principle, naming privacy and federal law among the key policy areas.
- Integrity is both a principle, addressing "plagiarism, and proper attribution issues", and a feature of the continuum, where every level defines its own boundary.
- The knowledge principle commits to "safe, equitable, and ethical use of AI".
- The nine-page guide takes no position on AI detectors. Honesty runs through disclosure, chat links, and pledges instead.

#### Training, curriculum, and rollout

- A recommended district AI-policy committee structures the work and seats a local college representative.
- Guiding questions under each principle drive the drafting, such as "How does our guidance highlight the purposeful use of AI to achieve our shared education vision?"
- The continuum doubles as an assessment tool, letting the teacher set the AI level per assignment with matching disclosure.
- Evaluation is standing business. Districts are asked to "regularly assess the impacts of AI".`,

    offloading: `Wyoming's protection against students handing their thinking to the tool is built into the continuum's design and the agency principle.

- AI FREE preserves unaided work by definition. Students "must rely entirely on their own knowledge, understanding, and skills", and any AI use at that level is an integrity violation.
- Oversight climbs with the levels. From AI ENHANCED up, students "must provide human oversight and evaluation of all AI generated content".
- The agency principle keeps humans deciding, maintaining "human decision-making when using AI".
- Disclosure and chat links make AI use visible and accountable at every level above AI FREE.
- There is no dedicated section on the risk by name and no age gating. The leveled continuum and the agency principle carry the load.`,

    graduate: `The guidance is voluntary and adopted district by district, so treat these habits as possibilities rather than guarantees.

- A student from an adopting district can name the four levels, AI FREE, AI ASSISTED, AI ENHANCED, and AI EMPOWERED, and expects every assignment to carry one.
- The disclosure habit is unusually concrete. Above AI FREE they submitted a disclosure statement and links to their actual AI chats with the finished work, the same practice Oklahoma teaches. The two states appear to have drawn on a common source.
- At the higher levels they answered for the accuracy, fairness, and originality of everything AI produced, and for no-AI work they may know honesty pledges.
- Their vocabulary descends from the published AI Assessment Scale, so it transfers to any campus that adopts that scale.
- They may frame AI literacy as college and career preparation, because the guide does.`,

    implications: `- Wyoming's continuum shares its lineage with the peer-reviewed AI Assessment Scale, credited in print. A university adopting that scale can expect adopting-district Wyoming students to recognize the structure, and it can cite the same peer-reviewed source for continuity.
- Wyoming builds higher education into district AI governance by recommending a local college seat on the policy committee. A Wyoming college may already be a named partner in the districts that feed it.
- Students may arrive used to submitting links to their AI chats as disclosure. Faculty who want process transparency can build on the habit rather than introduce it.
- Students from adopting districts may expect AI permission specified per assignment along a four-level continuum with matching disclosure. A syllabus that stays silent will read as less clear than what they had.
- The college-preparation framing means these students may already connect AI literacy to university readiness.`,

    response: `- **Assessment.** Adopt an explicit per-assignment AI-permission scale. The published AI Assessment Scale gives direct continuity with Wyoming's continuum. Keep AI-free assessments where core skills are the goal.
- **Disclosure.** Consider adopting the chat-link convention Wyoming and Oklahoma teach, since incoming students may already practice it.
- **Partnership.** Wyoming colleges can use the local-college committee seat to align entry expectations with feeder districts.
- **Onboarding.** Give a short AI-literacy check at entry. The continuum's four levels are a ready placement rubric.
- **Integrity.** Favor disclosure- and continuum-based honesty, matching the state's approach, and set the institution's own detector policy explicitly, since the guide takes no position.`,

    unique: `- A four-level continuum with the credit to the AI Assessment Scale authors printed on the page, the third state in this project's records with a confirmed link to the peer-reviewed source.
- A shared-source signal with Oklahoma. Both states print the same misspelling of one author's name and both require chat links, pointing to a common source behind their adaptations.
- A "Local College Representative" recommended on every district's policy committee, a concrete higher-education hook.
- Seven principles adapted from a widely used national template, DNA shared with other adapting states.
- Definitions borrowed from Washington's guidance, showing adaptation from more than one source.
- A compact nine-page format built entirely around helping districts write their own policy.`
  }
}
