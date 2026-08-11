// Hand-rewritten detail sections, per jurisdiction. The six sections below the
// short version, rewritten in plain language from analysis/<State>.md.
// Citation convention: name the document in prose (the framework, the law)
// rather than filename and page, keep verbatim quotes exactly as captured in
// the analysis, express force through verbs (the law requires, the framework
// expects), and let the Source Documents block carry provenance. Bracketed
// force tags and page numbers do not appear in reader-facing text.
// Rules: every claim traces to the analysis, nothing inside quotation marks
// is ever altered, and honest caveats stay in. The generator prefers these
// sections and falls back to the extracted ones for states not yet written.
export const DETAIL_SECTIONS = {
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
  }
}
