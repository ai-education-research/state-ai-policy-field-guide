const STATES = {
"Alabama":{ab:"AL",status:"mandate",doc:"ALSDE AI Policy Template (June 2024) + H.B. 329 (2026)",deadline:"CS-with-AI course required to graduate, class of 2032",
points:["Eight foundational pillars covering strategy, governance, data privacy, procurement, implementation, competency, risk, and effectiveness.","Risk management framework built on NIST standards.","Specific contract language for AI vendors, and a prohibition on unauthorized use of school data to train models.","Requires district AI Governance Committees, compliance audits, and corrective action plans."],
sig:"A process for contesting an AI-generated grade. Alabama wrote student appeal rights into the template.",
he:"Your incoming Alabama students will have had a formal route to challenge an algorithmic grade. Most university grade-appeal policies say nothing about AI-assisted assessment."},

"Alaska":{ab:"AK",status:"guidance",doc:"Alaska K-12 AI Framework (Oct 2025), AKDEED",deadline:null,
points:["Seven guiding principles including human-centered design, fair access, transparency, oversight, security, ethical use, and cultural responsiveness.","Explicitly written as recommendations rather than mandates, encouraging districts to move past blanket bans.","Addresses rural broadband disparity as a first-order equity issue, not a footnote.","Aligns with Alaska Standards for Culturally Responsive Schools and requires engagement with elders and community members."],
sig:"Mandates that AI tools affirm rather than diminish Alaska Native cultures, and warns against misappropriation of local context.",
he:"A working model for how an AI policy can name a specific cultural community rather than gesturing at diversity in the abstract."},

"Arizona":{ab:"AZ",status:"guidance",doc:"Arizona Institute for Education and the Economy GenAI Guide",deadline:null,
points:["Organized around understanding GenAI, teaching and learning, AI literacy, and ethical implementation.","Five named ethical considerations covering bias, misinformation, intellectual property, data privacy, and equitable access.","Three-stage rollout of foundation, momentum, and continuous improvement."],
sig:"The human agency and oversight imperative runs as a repeated thread through the whole document rather than sitting in one section.",
he:"H.B. 4005 would require instruction on ethical AI use including prompt development. H.B. 4040 would extend AI coursework policy requirements to public universities."},

"Arkansas":{ab:"AR",status:"pending",doc:"AI task force report (2025). No department-issued framework confirmed.",deadline:null,
points:["Task force report prioritizes AI literacy curriculum, educator professional development, equitable access, and student data protection.","The widely circulated AI planning guide comes from Virtual Arkansas rather than the Arkansas Department of Education.","Instructional practice remains district-driven with no statewide professional development requirement confirmed."],
sig:"CSforAR gives the state existing computer science infrastructure to hang AI standards on, but no binding timeline yet.",
he:"Arkansas students arrive with wide district-to-district variation. Do not assume a shared baseline."},

"California":{ab:"CA",status:"guidance",doc:"Learning with AI, Learning about AI (CDE, Sept 2023)",deadline:null,
points:["Emphasizes human relationships in education alongside AI literacy and equity.","Integrates AI skills with California computer science standards.","Covers developing AI in schools, not only using existing tools.","Built on the 5 Big Ideas of AI framework for K-12."],
sig:"One of the earliest state documents, and one of the few that treats students as potential builders of AI rather than only consumers of it.",
he:"A.B. 1159 would prohibit using student data to train AI models and extends new protections to college students, with a private right of action. Watch this one."},

"Colorado":{ab:"CO",status:"guidance",doc:"Colorado Roadmap for AI in K-12 Education (Aug 2024)",deadline:null,
points:["Recommendations tailored separately for districts and for statewide organizations.","Student voices and perspectives are included throughout the document.","Written around Colorado's local control structure."],
sig:"The If and How Checklist and the AI Resource Evaluation Tool, both built by working groups as usable instruments rather than principles.",
he:"Colorado repealed its AI Act in May 2026 and replaced it with a narrower disclosure framework that carves out FERPA-covered institutions. The state-law backstop is thinning."},

"Connecticut":{ab:"CT",status:"guidance",doc:"Guidance on Artificial Intelligence, CT Commission for Educational Technology",deadline:null,
points:["Covers AI types and applications, instructional and decision-making practices, risks, and policy considerations.","Explicit treatment of social and emotional risks of AI use among students.","References state laws and pending legislation directly."],
sig:"One of the few state documents that treats student emotional risk as a distinct category from academic integrity risk.",
he:"Reported 2026 movement toward mandating AI instruction. Confirm current statutory status before citing."},

"Delaware":{ab:"DE",status:"guidance",doc:"Delaware DOE Generative AI Guidance",deadline:null,
points:["Implementation strategies for districts and charter schools, with classroom integration and professional learning paths.","Uses the SAMR model to illustrate levels of AI integration.","Separates short-term from long-term implementation actions.","Carries a version history table so districts can track what changed."],
sig:"An AI assurance lab that tests and evaluates AI tools for district use within state-set parameters.",
he:"Delaware's assurance lab is the closest K-12 analogue to a campus IT security review for AI tools. Worth studying as a procurement model."},

"District of Columbia":{ab:"DC",status:"pending",doc:"No district-wide AI guidance confirmed in this pass.",deadline:null,
points:["Not covered in the major state guidance compilations reviewed.","Verify directly with OSSE before citing."],
sig:null,
he:"Treat as unverified rather than absent."},

"Florida":{ab:"FL",status:"pending",doc:"No department-issued AI guidance confirmed. Legislation active.",deadline:null,
points:["C.S./C.S./H.B. 1503 and S.B. 1694 would require AI instruction within computer science coursework.","Florida would also require opportunities for responsible AI application inside general education courses, not only CS.","Reported alongside New York as moving to restrict classroom AI use."],
sig:"The general-education requirement is unusual. Most states confine AI instruction to the CS track.",
he:"If Florida's general-education provision passes, it is the closest K-12 parallel to embedding AI across a university core curriculum."},

"Georgia":{ab:"GA",status:"mandate",doc:"Leveraging AI in the K-12 Setting (Jan 2025) + S.B. 179",deadline:"District plans aligned before 2026-27 school year. CS with AI required to graduate from 2031-32.",
points:["Clear split between high-stakes and non-high-stakes AI uses with named examples on both sides.","Prohibits AI for IEP goals, educator evaluations, and subjective grading. Permits lesson planning, rubric development, and multiple-choice grading.","Evaluation rubric for AI tools covering educational value, privacy, usability, cost, scalability, vendor reputation, and age restrictions.","June 2025 companion document on ethical AI use for educators, built on seven core principles."],
sig:null,
he:"Georgia's confirmed contribution is the high-stakes boundary. AI supports judgment about a student, it does not make it. That principle transfers to university advising, admissions review, and grading.",verified:"UNVERIFIED CLAIM REMOVED 2026-07-30. Both captured primary documents were searched and contain no red light, yellow light, green light, or traffic light language. The traffic-light chart and the prohibition list were tracker-sourced only and are no longer asserted. CONFIRMED from the GaDOE PDF: use AI in a supportive, not high-stakes manner; enhance rather than replace human judgment; promote transparency; respect privacy."},

"Hawaii":{ab:"HI",status:"guidance",doc:"HIDOE AI Guidance for Employees",deadline:null,
points:["Covers accountability, fairness, human oversight, assessment, professional development, and data protection.","Recommends citing AI-generated content to uphold ethical use.","Guidance on using AI to transform assessment rather than police it."],
sig:"Explicitly advises against AI detection tools for plagiarism because of their limitations.",
he:"S.B. 2212 would require all juniors and seniors to complete a six-week AI literacy course from 2027-28, with a $5M grant program. Those students reach campus in 2029."},

"Idaho":{ab:"ID",status:"mandate",doc:"S.B. 1227 (2026), enacted",deadline:"District AI frameworks required. State framework in development.",
points:["Directs the state education department to build a comprehensive generative AI framework covering privacy, procurement safeguards, transparency, academic integrity, AI literacy standards, and professional development.","Every district must adopt a framework covering instruction, administration, student data privacy, tool approval, and a designated governance role.","Prohibits AI from replacing human teachers."],
sig:"A template alone does not satisfy the requirement. The statute asks for evidence of operational governance including defined roles, vendor protocols, and staff training.",
he:"Idaho drew a distinction higher ed has largely avoided. A policy document on file is not the same as a governance function that runs."},

"Illinois":{ab:"IL",status:"guidance",doc:"ISBE AI guidance (July 2026), 409 pages",deadline:"Legislature directed ISBE to produce guidance by July 2026. Delivered.",
points:["One of the longest state guidance documents in the country.","Openly written with assistance from ChatGPT, Claude, and Gemini, and says so.","Reported to draw a line inside the task itself, permitting AI to support a teacher evaluation while prohibiting AI from scoring one.","H.B. 4411 would require a full year of computer science and AI beginning with ninth graders in 2028-29."],
sig:"Disclosing its own AI-assisted authorship. The document models the transparency it asks for.",
he:"S.B. 3735 would give families the right to opt out of AI grading decisions and restrict retention of student data for AI training."},

"Indiana":{ab:"IN",status:"guidance",doc:"Indiana AI Guidance Document",deadline:null,
points:["Organized around AI literacy, instruction and learning, impact, security, and resources.","Integrates AI literacy with computer science concepts and skills.","Side-by-side comparison of student and educator experiences with AI.","FERPA and COPPA compliance and PII protection are treated as security requirements."],
sig:"Frames AI literacy as a civic capability for empowered learners and citizens, not only a workforce skill.",
he:"The student-versus-educator comparison is a useful faculty development device. Most faculty have never seen their AI use mapped against their students'."},

"Iowa":{ab:"IA",status:"pending",doc:"No department-issued guidance confirmed. Multiple bills active.",deadline:null,
points:["H.S.B. 610, H.F. 2540, and S.F. 2094 would require a semester of computer science and AI coursework for the graduating class of 2030-31 onward.","Coursework would cover foundational concepts, ethics, and societal impacts.","Bills also strengthen teacher preparation requirements."],
sig:"Iowa pairs the student requirement with a teacher preparation requirement. Several states do only the first.",
he:"Watch the teacher preparation clause. It is the mechanism that determines whether the student requirement means anything."},

"Kansas":{ab:"KS",status:"pending",doc:"No department-issued guidance confirmed. Active federal litigation.",deadline:null,
points:["Lawrence Public Schools faces a pending federal case challenging K-12 AI monitoring on Fourth Amendment grounds.","The first US lawsuit testing whether AI surveillance of student communications violates constitutional protections.","Outcome will affect every district running Gaggle, GoGuardian, Securly, or similar tools."],
sig:"Kansas is where the constitutional question gets asked first.",
he:"Campus AI monitoring, proctoring, and wellness-flagging tools sit on the same legal ground. This case is worth tracking regardless of your state."},

"Kentucky":{ab:"KY",status:"guidance",doc:"KDE AI Guidance Brief",deadline:null,
points:["Covers emerging technology considerations, guiding principles, application paradigms, and post-adoption monitoring.","References the Kentucky Educational Technology Systems master plan.","Connects AI literacy to digital citizenship and computer science initiatives."],
sig:"Three paradigms of AI-directed, AI-supported, and AI-empowered learning, plus a deliberate move to treat AI like any other emerging technology in order to defuse unfounded fear.",
he:"The three paradigms map cleanly onto course design. Who is directing the learning, and does AI change that answer?"},

"Louisiana":{ab:"LA",status:"guidance",doc:"LDOE AI Guidance (Fall 2024)",deadline:null,
points:["Four-component cyclical framework covering purpose and research, policy and guidance, stakeholder engagement, and evaluation and monitoring.","[VERIFIED] SAMR alignment belongs to the integration-tier table, not the AI-Empowered permission model. AI for Education merged the two and most trackers inherited the error.","Detailed safeguards at both system and classroom level, including data storage, software approval, and monitoring protocols.","Technical implementation guidance covering bandwidth, cybersecurity, and digital citizenship.","References Louisiana student privacy law R.S. 17:3914 alongside federal regulation."],
sig:"[VERIFIED] Two separate four-tier models in one document. The SAMR-aligned table is Foundational/Substitution, Enhanced/Augmentation, Transformative/Modification, Synergistic/Redefinition. A separate permission model uses AI-Empowered, AI-Enhanced, AI-Assisted, AI-Prohibited. These are NOT the same table.",verified:"primary",
he:"The four-tier scale is assignment-level, not course-level. That granularity is what most university syllabi are missing."},

"Maine":{ab:"ME",status:"guidance",doc:"Maine DOE interactive AI toolkit",deadline:null,
points:["Five ethical principles covering critical thinking, ethical practice, human agency, lifelong learning, and modeling behavior.","Grounds AI education in computer science, computational thinking, and digital citizenship.","Interactive clickable structure rather than a static PDF.","Highlights AI-resistant teaching strategies that hold their value regardless of the technology."],
sig:"An explicit rejection of technology prohibitions. Maine argues bans prevent students from learning skills they need and do not prepare them for reality.",
he:"Maine's ROOTS leadership framework covering responsibility, oversight, opportunity, transparency, and sustainability translates directly to a department or college level.",verified:"tracker: KEEP THE HUMAN IN AI, the five ethical principles, and the ROOTS framework are all tracker-sourced. Toolkit existence and the Feb 20 2025 release are confirmed via Maine DOE news release."},

"Maryland":{ab:"MD",status:"mandate",doc:"S.B. 720, Artificial Intelligence Ready Schools Act (signed May 26, 2026)",deadline:"AI literacy in state standards by June 1, 2027. Coordinator designation required now.",
points:["Every local school system must designate a non-instructional, central-office AI coordinator. The most comprehensive coordinator requirement in the country.","MSDE must develop and regularly update AI guidance, plus a rubric to help districts evaluate the AI tools they already use.","Establishes a statewide AI Education Collaborative to study district use and recommend standards updates.","Supports university-backed evaluation and certification of compliant AI tools, and aligns procurement to state guidance."],
sig:"Compensated statewide professional development delivered through a train-the-trainer model. The state pays for the capacity it requires.",
he:"Maryland created a named, funded, non-teaching AI role in every district. Ask whether your institution has an equivalent, or whether the work is spread across people who already have other jobs."},

"Massachusetts":{ab:"MA",status:"guidance",doc:"DESE Guidance for Artificial Intelligence in K-12 Education",deadline:null,
points:["Five core ethical principles covering privacy, transparency, bias mitigation, human oversight, and academic integrity.","Distinguishes teaching about AI from teaching with AI and treats both as necessary.","Addresses three digital divides of access, use, and design, drawn from the 2024 National Educational Technology Plan.","Extends ethical AI principles beyond instruction into budgeting, hiring, dashboards, and procurement."],
sig:"Explicit guidance against AI detection tools because of unreliability and punitive effects, replaced with trust-based and process-oriented assessment.",
he:"The design divide is the one higher ed keeps skipping. Access and use get attention. Faculty capacity to design AI-integrated learning experiences does not."},

"Michigan":{ab:"MI",status:"guidance",doc:"Michigan Virtual guidance, endorsed by MDE",deadline:null,
points:["Three-stage maturity model of investigating, implementing, and innovating across eight domains.","Domains span leadership, policy and ethics, instructional framework, assessment, professional learning, student use, business operations, and outreach.","Planning guide requires dedicated implementation teams, board involvement, and risk assessments naming job displacement, privacy, and bias.","Parent communication resources including FAQ templates and multilingual materials."],
sig:"A rubric, not a policy. Districts locate themselves on a maturity scale rather than checking a compliance box.",
he:"The maturity rubric is the most directly adoptable instrument here for a college or university. Swap the domains and it works.",verified:"tracker: Three stages and eight domains are tracker-sourced. The Michigan Virtual rubric PDF returns 404. Confirmed instead: eleven AI-integration micro-credentials and the AI4MI statewide workgroup, launched February 2024."},

"Minnesota":{ab:"MN",status:"guidance",doc:"Artificial Intelligence in Education, MDE",deadline:null,
points:["Guiding principles centered on people in decision-making and advancing equity.","Recommends starting from existing guidance and policy rather than writing from scratch.","Prioritizes AI literacy for all staff and students, not only for students."],
sig:"Encourages knowledge sharing between districts and cites other states' work openly.",
he:"Start from what you already have. Most institutions have academic integrity, accessibility, and data governance policies that already cover more AI ground than they realize."},

"Mississippi":{ab:"MS",status:"guidance",doc:"MDE AI Guidance",deadline:"S.B. 2294 would require CS or CTE credit with emerging technology instruction from the 2029-30 ninth-grade class.",
points:["Organized around five components of digital learning covering citizenship, standards-aligned content, active learning, formative assessment, and accessibility.","Separate strategies for students, teachers, and administrators inside each of the five components.","AI training needs named for all stakeholders including informed use, accuracy checking, and bias awareness."],
sig:"Building AI into an existing digital learning structure rather than creating a parallel AI framework.",
he:"Mississippi's approach argues against standing up a separate AI committee. Put it where the teaching and learning work already happens."},

"Missouri":{ab:"MO",status:"guidance",doc:"DESE AI Guidance for LEAs, v1.0 for 2025-26",deadline:"H.B. 3139 would add a half-unit AI requirement starting 2027-28.",
points:["Cyclical seven-step policy development process covering purpose, compliance, knowledge, balance, integrity, agency, and evaluation.","Multi-level analysis separating student, building, district, and stakeholder concerns.","Eight focus areas for professional development spanning ethics, access, productivity, and pedagogy.","Regulatory compliance mapped across FERPA, COPPA, IDEA, CIPA, Section 504, and ADA."],
sig:"Detailed prompt engineering instruction inside a state policy document. Missouri treats prompting as a teachable professional skill.",
he:"Prompting guidance inside a governance document is unusual and useful. Policy and capability arrive together instead of separately."},

"Montana":{ab:"MT",status:"guidance",doc:"Montana AI in K-12 Education Guidelines, OPI and MTDA",deadline:"Biannual review cycle.",
points:["Five core principles covering privacy, transparency, bias awareness, human oversight, and academic integrity.","Five-phase implementation roadmap from foundation building through continuous improvement.","Explicit attention to small districts with limited technology staff, constrained budgets, and intermittent connectivity.","Compliance with the Montana Pupil Online Personal Information Protection Act alongside FERPA and COPPA."],
sig:"Tribal sovereignty consultation and Indigenous data sovereignty are constitutional commitments here, with clear direction that AI tools must not alter or remix tribally authored materials.",
he:"Montana wrote data sovereignty into an education AI policy. Institutions holding community-owned or Indigenous research data should read this one."},

"Nebraska":{ab:"NE",status:"pending",doc:"No department-issued AI guidance confirmed in this pass.",deadline:null,
points:["Not present in the state guidance compilations reviewed.","No active 2026 AI-in-education legislation surfaced in the trackers reviewed."],
sig:null,
he:"Treat as unverified. Confirm with NDE before citing absence."},

"Nevada":{ab:"NV",status:"guidance",doc:"Nevada DOE PreK-12 AI guidance, STELLAR framework",deadline:null,
points:["Seven principles of security, transparency, empowerment, learning, leadership, achievement, and responsible use.","Stakeholder-specific practices written separately for districts, administrators, teachers, parents, and students.","Four-stage AI literacy framework of understand, apply, integrate, and grow.","Built from town halls, focus groups, and a Student Voice Group run January through May 2024."],
sig:"Connects AI directly to Nevada's Personalized Competency-Based Learning initiative, so AI serves an existing pedagogical commitment rather than arriving as its own agenda.",
he:"Distinguishes the digital access divide from the digital use divide, where students engage as passive consumers rather than creators. That distinction survives the transition to college intact."},

"New Hampshire":{ab:"NH",status:"pending",doc:"No department-issued AI guidance confirmed in this pass.",deadline:null,
points:["Not present in the state guidance compilations reviewed.","Verify directly with NHED before citing."],
sig:null,
he:"Treat as unverified rather than absent."},

"New Jersey":{ab:"NJ",status:"guidance",doc:"NJDOE curated AI resources. Not formal guidance.",deadline:null,
points:["Glossary of AI terms with worked examples.","Classification of AI systems into narrow and general categories.","Curated resources for educators to learn about AI and to teach AI concepts.","Pre-recorded technical assistance webinar on AI in education."],
sig:"New Jersey published resources without publishing policy, which is itself a position.",
he:"A.4352 and S.2862 would require AI instruction across K-12 and require public institutions of higher education to offer AI certificate and degree programs. This bill names higher ed directly."},

"New Mexico":{ab:"NM",status:"guidance",doc:"New Mexico AI Guidance for K-12 Education 1.0 (May 2025), NMPED",deadline:null,
points:["Age-appropriate AI strategies broken out for K-5, 6-8, and 9-12.","Five core protections drawn from the AI Bill of Rights covering safe systems, discrimination protection, privacy, transparency, and human alternatives.","Four-step human-in-the-loop cycle of inquiry, input, interpretation, and insight.","Developed with the Friday Institute for Educational Innovation at NC State."],
sig:"A five-level AI Assessment Scale running from No AI to AI Exploration, plus the M.A.Z.E. adoption framework for monitoring privacy, assessing accuracy, zeroing in on bias, and evaluating value.",
he:"The five-level scale is the assignment-level instrument. Print it, adapt it, put it on your syllabus.",verified:"tracker: M.A.Z.E. wording is tracker-sourced. The five-level AI Assessment Scale and its level names are NOT confirmed from the NMPED document. Name suggests derivation from Perkins et al. 2024 AIAS."},

"New York":{ab:"NY",status:"pending",doc:"No department-issued guidance confirmed. Restriction bills active.",deadline:null,
points:["A.9190 would prohibit most classroom AI use below ninth grade, with limited exceptions for diagnostics and special education interventions.","Staff would remain permitted to use AI for administrative and planning work.","A.6972 would create a statewide AI Working Group inside the State Education Department.","New York City schools faced public pressure to pause student-facing AI for two years, and the district moved to freeze ed-tech purchasing."],
sig:"New York is the clearest test of the restriction path. Most states are building guardrails. New York is considering a floor age.",
he:"If New York holds the line at ninth grade, a cohort arrives on campus in the 2030s with no formal AI instruction before high school. Plan for uneven baselines."},

"North Carolina":{ab:"NC",status:"guidance",doc:"NCDPI Generative AI Implementation Recommendations for PK-13",deadline:null,
points:["Covers leadership and vision, human capacity, curriculum and instruction, data privacy and cybersecurity, and technology infrastructure.","AI literacy recommendations broken out by grade span.","Detailed implementation roadmap for public schools.","Guidance on evaluating generative AI edtech tools at the individual school level."],
sig:"The PK-13 framing. North Carolina explicitly extends the guidance past twelfth grade toward the transition point.",
he:"North Carolina's governor created an AI Leadership Council and a cross-agency AI Accelerator. This is the state most likely to build a K-16 through-line."},

"North Dakota":{ab:"ND",status:"guidance",doc:"North Dakota K-12 AI Guidance Framework, DPI",deadline:null,
points:["Implementation roadmap and checklist for schools.","Specific considerations by grade band across K-2, 3-5, 6-8, and 9-12.","Discussion of AI for accessibility and personalized learning for students with special needs."],
sig:"Leads with strengths and weaknesses of AI as a technology before addressing classroom policy.",
he:"The accessibility framing is underused in higher ed. AI as assistive technology is a different policy conversation than AI as academic integrity risk."},

"Ohio":{ab:"OH",status:"mandate",doc:"Ohio AI Toolkit + H.B. 96",deadline:"Board-adopted district AI policy required by July 1, 2026. Deadline passed.",
points:["Every school district must adopt a formal, board-approved AI policy. Over 600 districts affected.","A compliant document is required, not aspirational guidance.","The toolkit provides a step-by-step policy development approach from landscape analysis through implementation.","Summarizes and analyzes 21 sets of AI guidelines, both education-specific and general."],
sig:"A comparison table showing which of the 21 guideline sets covers which policy development step, and which stakeholder each serves.",
he:"Ohio's first hard deadline has now passed. Every district in the state has an AI policy on file. Ask what your institution has, and whether anyone had to sign it."},

"Oklahoma":{ab:"OK",status:"mandate",doc:"S.B. 1734, Responsible Technology in Schools Act + 2024 guidance",deadline:"Written district AI policy required before the 2027-28 school year. Educator supervision rules in effect now.",
points:["Requires educator-directed, human-in-the-loop AI use, with supervision requirements already in force.","Prohibits AI from serving as the primary basis for grading, discipline, placement, or other high-stakes decisions.","Preserves a parent's right to opt a student out of student-facing AI tools without academic penalty.","Requires annual disclosure to families of all AI tools in use and the student data those tools collect."],
sig:"The opt-out without academic penalty. Oklahoma made refusing AI a protected choice rather than a disadvantage.",
he:"The opt-out is the hardest question higher ed has not asked. If a course requires an AI tool, what does a student who declines actually receive?",verified:true,
scale:{name:"AI Acceptable Use Rating Scale",source:"OSDE, Guidance and Considerations for Using Artificial Intelligence in Oklahoma K-12 Schools, Version 2.0, July 2025, p.17",
attribution:"Adapted by Dr. Karen Leonard for the Oklahoma State Department of Education (OSDE) from the work of Dr. Leon Furze, Dr. Mike Perkins, Dr. Jasper Roe FHEA, & Dr. Jason Mcvaugh.",
levels:[
{n:0,label:"NO AI Use",permits:"This activity is to be completed entirely without AI assistance. AI MAY NOT be used at any point during the activity. This level ensures that students rely solely on their own knowledge, understanding, and skills.",disclose:"No AI disclosure required. May require an academic honesty pledge that AI was not used."},
{n:1,label:"AI-Assisted Idea Generation and Structuring",permits:"No AI content is allowed in the final submission. AI can be used in the activity for brainstorming, creating structures, and generating ideas for improving work.",disclose:"AI disclosure statement must be included disclosing how AI was used. Link(s) to AI chat(s) must be submitted with final submission."},
{n:2,label:"AI-Assisted Editing",permits:"No new content can be created using AI. AI can be used to make improvements to the clarity or quality of student-created work to improve the final output.",disclose:"AI disclosure statement must be included disclosing how AI was used. Link(s) to AI chat(s) must be submitted with final submission."},
{n:3,label:"AI for Specified Task Completion",permits:"AI is used to complete certain elements of the task, as specified by the teacher. This level requires critical engagement with AI-generated content and evaluating its output.",disclose:"All AI-created content must be cited using a proper citation. Link(s) to AI chat(s) must be submitted with final submission."},
{n:4,label:"Full AI Use with Human Oversight",permits:"Students may use AI throughout the activity to support their own work in any way the educator allows. AI should be a 'co-pilot' to enhance human creativity.",disclose:"Cite the use of AI using a proper citation. Link(s) to AI chat(s) must be submitted with final submission."}]}},

"Oregon":{ab:"OR",status:"guidance",doc:"Generative AI in K-12 Classrooms, ODE (2023)",deadline:null,
points:["Defines generative AI and addresses equity implications and data privacy.","Table of strategies to address equity impacts covering bias, inaccuracy, and plagiarism.","Table of instructional strategies for generative AI across subject areas.","Support for students with disabilities and multilingual learners.","References the Oregon Student Information Protection Act."],
sig:"Equity impact appears as a table of concrete strategies rather than a statement of values.",
he:"Enacted S.B. 1546 requires design features protecting minors, including measures reducing compulsive use. Product design regulation is arriving alongside education policy."},

"Pennsylvania":{ab:"PA",status:"pending",doc:"No department-issued AI guidance confirmed in this pass.",deadline:null,
points:["Not present in the state guidance compilations reviewed.","Verify directly with PDE before citing."],
sig:null,
he:"Treat as unverified. Pennsylvania is a large state to have no confirmed framework, so check before making the claim publicly."},

"Rhode Island":{ab:"RI",status:"guidance",doc:"RIDE AI guidance",deadline:null,
points:["Built on 1,252 survey respondents plus focus groups and town halls across the state.","Developmentally appropriate use cases by grade band with supervision requirements attached.","Procurement checklist addressing privacy, FERPA, COPPA, CIPA, bias mitigation, and vendor accountability.","Sample acceptable use policies and parent letters in English and Spanish."],
sig:"Ready-to-send parent communication in two languages. Rhode Island shipped the artifact rather than describing it.",
he:"The procurement checklist is directly reusable. So is the practice of publishing the parent-facing letter alongside the policy."},

"South Carolina":{ab:"SC",status:"pending",doc:"No department-issued guidance confirmed. The strongest proposed guardrails in the country.",deadline:null,
points:["H.B. 5253 would require written parental opt-in consent, not opt-out.","Would require annual public disclosure of AI tools and data practices.","Would prohibit AI from replacing licensed teachers in core instruction or grading, and ban automated high-stakes decisions without meaningful human oversight.","Would impose strict data minimization and deletion, restrict student profiling, and prohibit commercial use of student data.","Parents would gain enforcement rights including injunctive relief and damages."],
sig:"Opt-in consent plus a private right of action. If this passes, it becomes the national high-water mark.",
he:"H.B. 4582 would authorize age-appropriate AI instruction statewide. Watch both bills. South Carolina is where the strictest version gets tested."},

"South Dakota":{ab:"SD",status:"pending",doc:"No department-issued AI guidance confirmed in this pass.",deadline:null,
points:["Not present in the state guidance compilations reviewed.","Verify directly with DOE before citing."],
sig:null,
he:"Treat as unverified rather than absent."},

"Tennessee":{ab:"TN",status:"mandate",doc:"Public Chapter 550 (2024) + S.B. 1580",deadline:"District policies were due at the start of 2024-25. Annual reports to TDOE by July 1.",
points:["Mandates that all districts, public charter schools, and universities adopt their own AI policies. Higher education is named in the statute.","TSBA Model Policy 4.214 was adopted in full by most districts. Metro Nashville personalized its own version.","Only approved AI programs may be used for student work, with technology staff reviewing for privacy compliance.","Districts must give parents notice about AI use and an approved list of AI programs.","S.B. 1580 restricts AI tools used to assess or screen student mental health, and carries a private right of action."],
sig:"Tennessee is the state where higher education was already required to act. Public Chapter 550 covered universities in 2024.",
he:"Read this one first. Tennessee's legislature did not treat K-12 and higher ed as separate problems, and neither will the next state that copies it."},

"Texas":{ab:"TX",status:"pending",doc:"TEA has issued no AI guidance. District activity is substantial.",deadline:null,
points:["Houston ISD announced nine AI-focused schools, with the superintendent describing a vision of 100 campuses with AI programming.","Duncanville ISD runs a multistep approval workflow starting with a teacher ticket to a systems engineer for technical compatibility review.","Northside ISD in San Antonio requires vendor data privacy agreements and uses AI translation to reach families it previously struggled to contact.","The Texas Education Agency itself uses AI to grade standardized tests."],
sig:"The state grades with AI while offering districts limited guidance on teaching with it.",
he:"Texas sends more students to college than almost anywhere. Those students arrive with district-level norms that vary enormously and no state baseline to reference."},

"Utah":{ab:"UT",status:"mandate",doc:"USBE AI Framework for P-12 + H.B. 218",deadline:"Required grade 7 or 8 digital skills course including AI literacy.",
points:["Framework covers guiding principles, responsible and prohibited uses, and security, privacy, and safety considerations.","Includes a dedicated section on prohibited uses of AI tools.","Emphasizes maintaining both student and teacher agency.","H.B. 218 pairs AI literacy with cybersecurity and digital privacy in a single required course."],
sig:"S.B. 322 would create a five-year educational technology regulatory sandbox, allowing voluntary pilots under strict privacy and human-in-the-loop requirements with statewide expansion contingent on independent evaluation.",
he:"The sandbox model is worth borrowing. Pilot, evaluate independently, then decide, rather than adopting and hoping."},

"Vermont":{ab:"VT",status:"guidance",doc:"Vermont AOE AI Guidance (Jan 23, 2026), 50 pages",deadline:null,
points:["Four principles covering administrative streamlining, personalized learning, student AI literacy, and cognitively demanding tasks.","Extensive treatment of cognitive offloading as a distinct risk from academic dishonesty.","Tool vetting framework across general purpose tools, education-specific chatbots, and AI-embedded applications.","Explicit guidance on when not to use AI, naming high-stakes grading, sensitive student situations, legal documentation, and medical information."],
sig:"A developmental floor. No AI chatbot use in PreK-2, curriculum-embedded AI only in grades 3-5, structured education-specific chatbots in 6-8, and broader fluency in 9-12.",
he:"Vermont argues AI literacy depends on content mastery, and that students need strong foundational skills to use AI well. That claim sits directly under every general education debate happening in higher ed right now.",verified:"tracker: Grade-band labels and the when-NOT-to-use-AI list are tracker-sourced. The AOE PDF returns 404. Guidance existence and Jan 23 2026 date are confirmed."},

"Virginia":{ab:"VA",status:"mandate",doc:"VDOE AI Education Guidelines + H.B. 1186 and S.B. 394",deadline:"District policies must align to forthcoming state guidance.",
points:["H.B. 1186 establishes an AI Innovation in Education Pilot Program to fund, evaluate, and scale AI for instruction, tutoring, engagement, operations, and teacher support.","S.B. 394 directs the state education agency to provide guidance that includes teacher training.","Districts are required to adopt aligned policies.","Existing guidelines cover AI literacy, ethics, responsible implementation, and supporting educators."],
sig:"Virginia funded the evaluation. The pilot program is designed to produce evidence, not just permission.",
he:"Fund, evaluate, scale. That sequence is rarer than it should be, and it is a defensible model for institutional AI investment."},

"Washington":{ab:"WA",status:"guidance",doc:"Human-Centered AI Guidance for K-12 Public Schools (v3.0, July 2024), OSPI",deadline:null,
points:["Built on the Human AI Human model that opens and closes every process with human inquiry and judgment.","Ships two standalone instruments students and teachers can lift directly, a five-level student scale and an educator assignment matrix built on the same five levels.","Sample classroom protocols, a student AI code of conduct, and professional ethics for educators.","Acknowledges its own AI-assisted creation in a disclaimer."],
sig:"[VERIFIED] The 5 Step Scaffolding Scale for Students. Five levels of student AI permission running from Level 1 No AI Assistance to Level 5 AI as Co-Creator, through AI-Assisted Brainstorming, AI-Supported Drafting, and AI-Collaborative Creation. It fixes what a student may do with AI on a given assignment.",verified:"primary",
he:"Washington wrote the assignment-level permission scale higher ed keeps asking for. A faculty member can lift these five levels onto a syllabus and tell a student exactly how much AI a task allows."},

"West Virginia":{ab:"WV",status:"guidance",doc:"WVDE AI Guidance v1.0",deadline:"H.B. 5205 would apply model state policies automatically to districts that fail to adopt their own by July 2027.",
points:["Uses computational thinking as the framework for teaching AI literacy.","Detailed list of prohibited uses of AI tools.","Version history table tracking updates as AI evolves.","Canvas self-enrolling resource directory for educator professional development."],
sig:"The proposed default. If a district does not write a policy, the state's model policy applies automatically.",
he:"An automatic default is an elegant compliance mechanism. It removes the option of doing nothing without requiring enforcement."},

"Wisconsin":{ab:"WI",status:"guidance",doc:"AI Guidance for Enhancing K-12 and Library Education, DPI",deadline:null,
points:["Covers both K-12 schools and public libraries in a single document.","Five training pillars for educators including hands-on AI experience and continuous learning.","AI literacy recommendations broken out by elementary, middle, and high school.","Wisconsin-specific professional development through SLATE conferences and CESA workshops."],
sig:"The Human greater than AI greater than Human mnemonic, and the decision to treat libraries as part of the same information literacy problem.",
he:"Including libraries is the move higher ed should copy. Academic librarians are already the strongest AI literacy educators on most campuses."},

"Wyoming":{ab:"WY",status:"guidance",doc:"Guidance for AI Policy Development, WDE",deadline:null,
points:["Focused on how to build a policy rather than what the policy should say.","Cyclical process for policy development emphasizing continuous improvement.","Detailed guidance on forming an AI guidance team with diverse stakeholders.","Aligned to the state Digital Learning Plan."],
sig:"A Student AI Usage Continuum for Empowered Learning to help determine appropriate use in individual classrooms.",
he:"Wyoming wrote a process document instead of a rules document. For institutions with strong shared governance, that is the more realistic starting point.",verified:"tracker: Continuum exists per AI for Education. The four stage labels (AI FREE, AI ASSISTED, AI ENHANCED, AI EMPOWERED) are tracker-sourced. No WDE primary document retrieved."}
};
module.exports = STATES;
