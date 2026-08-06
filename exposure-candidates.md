# Exposure evidence — mining passes

**Status after the full sweep of 2026-07-31: 14 states carry exposure evidence
that passed the filter.** The five-state pilot pass is preserved below, followed
by the full-sweep results.

---

# Part 1 — five-state pilot pass

Candidates for the "what students are already doing" layer. Mined 2026-07-31 from
the captured primary documents for Ohio, Rhode Island, North Carolina, Washington,
and Nevada.

**The filter.** A report of something happening qualifies. A recommendation that
something happen does not. Excluded items are listed with reasons so the filter
itself can be judged and corrected.

Page numbers are PDF page indices from `pdftotext`. Printed page numbers can be
off by one where a document has cover matter.

---

## Rhode Island — the richest yield

Source: `resources/Rhode Island/RIDE-AI-Guidance-2025-08-15.pdf`. RIDE surveyed
students, educators, administrators, and families (survey basis recorded in the
document, PDF p.6).

| # | Kind | Fact, verbatim where quoted | Page |
|---|---|---|---|
| RI-1 | stat | "20% of students are using AI for schoolwork, while only 6% of educators and administrators are using AI in their work." | p.10 |
| RI-2 | practice | "Students are using tools such as Grammarly, ChatGPT, and PhotoMath to provide assistance in areas such as writing, research, and step-by-step problem solving in math." | p.10 |
| RI-3 | stat | "36% of students surveyed say AI helps them learn more when completing an assignment," against 32% who do not yet know how and 32% not using AI at all. | p.10 |
| RI-4 | stat | 78% of educators and administrators have substantial concerns about students' ethical use of AI. Only 44% believe AI presents compelling new opportunities. | p.10 |
| RI-5 | voice | Rhode Island student, verbatim: "there is nothing more frustrating than when I know a kid used AI to write a paper and received an equal or better grade than me." | p.10 |

**Why RI-5 matters most.** A student demanding integrity enforcement is the
inversion of what faculty expect, and it is a direct quote a professor can read
aloud in a senate meeting. RI-1 pairs with it: students adopted AI at three times
the rate of their own teachers.

## Ohio — the exemplar plus the number

Source: `resources/Ohio/AI+In+Education+Strategy.pdf` (Ohio AI in Education
Coalition).

| # | Kind | Fact | Page |
|---|---|---|---|
| OH-1 | stat | "72% of students want guidance on how to responsibly use AI tools for schoolwork" (poll, cited in the guiding-principles section). | p.14 |
| OH-2 | program | Spotlight Example, verbatim: "Butler Tech is using AI in practical ways to meet district goals and improve learning experiences. For example, in Butler Tech's advanced manufacturing labs, students get to work with AI-infused robots, learning programming, data collection, and how to integrate software with physical equipment." | p.20 |

## North Carolina — one, with a flag

Source: `resources/North Carolina/NCDPI-GenAI-Recommendations-livingdoc.pdf`.

| # | Kind | Fact | Page |
|---|---|---|---|
| NC-1 | stat (national, cited by the state) | NCDPI quotes Common Sense Media: "72% of teens have used AI companions, with 52% using them multiple times a month." NCDPI pairs it with a strong discouragement of companion AI under 18. | p.19 |

**Flag.** This is national data the state teaches its educators, not a North
Carolina measurement. If used, it must be labelled that way. It is also the most
arresting number in the whole pass, because it is about companionship rather than
homework.

## Washington — zero in the PDFs, then the links flipped it

The captured OSPI documents are instrument-rich and exposure-poor. The only
percentage is a 2030 labor-market projection. **Zero candidates from the PDFs.**

Then the uncaptured OSPI landing page in `sources.md` surfaced an official
**"AI Stories" series** on OSPI's Medium channel. One story is a district
spotlight in exactly the Butler Tech genre.

| # | Kind | Fact | Source |
|---|---|---|---|
| WA-1 | program | Brinnon School District, a rural district of about 80 students, has students designing 3D dragon models in Blender with a 3D printer planned, teachers building AI-personalized state-compliant assessments, and AI-generated custom art projects for students with disabilities. Named and quoted: Jake Rember, Director of Special Education and Technology ("They're getting used to failing and moving past the point of failure while building these models") and Superintendent Trish Beathard. | OSPI "AI Stories," Medium (waospi). **Extract archived 2026-07-31** in `resources/Washington/web-captures/` (Medium blocks raw capture). |

## Nevada — zero in the extracted text, then an image PDF flipped it

The STELLAR guidance yielded nothing student-side. But `sources.md` listed two
never-downloaded PDFs. One, retrieved 2026-07-31, is **"AI Best Practices for
Students,"** a one-page student-facing poster rendered as images, which is why
text extraction found five words.

| # | Kind | Fact | Source |
|---|---|---|---|
| NV-1 | taught artifact | The NDE student poster teaches five rules. The first is a disclosure norm, verbatim: "Use AI as an assistant, not a substitute... If AI helps generate ideas or content, inform your teacher." The others: keep personal information out of AI tools, check for mistakes and bias, follow school rules, ask for help. | Now captured as `resources/Nevada/NDE-AI-Best-Practices-Students.pdf` |

A Nevada freshman may have had exactly this poster on a classroom wall. It is
the literal artifact behind the phrase "what your students were taught."

---

## Excluded, with reasons

| Item | Reason |
|---|---|
| Ohio: InnovateOhio and aiEDU launched Ohio's AI Toolkit; Lt. Governor launched the Coalition (p.6) | Infrastructure, not student exposure |
| Ohio: healthcare IT company using co-pilot tools (p.8) | Industry workforce framing, no students |
| NC: "Students create a short video... with the assistance of AI tools" (p.49) | Continuum activity template. Aspirational, fails the filter |
| NC: NCDPI discourages CharacterAI under 18 (p.19) | Recommendation, not a report. The Common Sense stat it responds to is NC-1 |
| Nevada: AI Alliance town halls | Adult-side process |
| Washington: 65% of job skill sets change by 2030 | Projection, not exposure |

---

## What the pass says about the design

All five states yielded usable material, but two of them only after following
the uncaptured URLs in their `sources.md` ledgers. The captured PDFs alone
would have called Washington and Nevada empty, and both verdicts were wrong.

Consequences:

1. **The mining unit is the ledger, not the PDF folder.** 195 URLs are recorded
   across the 52 ledgers against 69 captured documents. The full sweep must
   walk the uncaptured URLs, especially agency landing pages, news channels,
   and student-facing handouts.
2. **A new evidence genre exists: the agency story channel.** OSPI publishes
   district spotlights on an official Medium channel. Other states likely run
   equivalents, and none of them live in guidance PDFs.
3. **Image PDFs hide student-facing artifacts.** Nevada's poster extracted as
   five words of text. Any captured document under ~200 words of extracted
   text needs visual reading, not dismissal. Nevada's `AI-Ethics-Statement.pdf`
   (146 bytes of text) is the standing suspect.
4. Web-native evidence can vanish. Each web find needs an archival capture
   with a retrieval date, same discipline as the PDFs.
5. The per-state block renders only where evidence exists. No filler.
6. Rhode Island's survey should still anchor the feature nationally. It is the
   only state in this pass that measured its own students.

---

# Part 2 — full sweep, 2026-07-31

Method: all 72 captured documents text-mined, low-text image PDFs flagged for
visual reading, then 15 of the highest-value uncaptured URLs from the
`sources.md` ledgers fetched and mined. Same filter throughout.

## The headline find: Iowa

Iowa's site profile says the state has no classroom AI guidance. True, and it
buries the real story.

| # | Kind | Fact | Source |
|---|---|---|---|
| IA-1 | program, statewide | The Iowa Department of Education made a $3 million investment to provide an AI reading tutor to **all public and nonpublic elementary schools** through summer 2025, at no cost to schools. Verbatim: "As students read aloud, a digital avatar named Amira listens, assesses and intervenes when a student struggles." Voice-recognition based (Amira / EPS Reading Assistant). First wave: 41 elementary schools in 29 districts via Summer Reading Grants, each of which committed to using the tutor. | IDOE press release, 2024-08-27. **Primary source (agency release), archived 2026-07-31** in `resources/Iowa/web-captures/`. |

**Why this leads the feature.** A state that published no rules about students
using AI deployed an AI that listens to six-year-olds read. The youngest cohort
of Iowa students will arrive at university having been *taught by* AI before
anyone taught them *about* it. No policy document in the corpus says anything
this concrete.

## Kansas: exposure includes being watched

| # | Kind | Fact | Source |
|---|---|---|---|
| KS-1 | lived experience, litigation | Nine current and former students of Lawrence High and Free State High filed a federal civil rights lawsuit (August 2025) over the district's use of Gaggle, the AI system scanning everything in the district's Google Workspace, alleging First and Fourth Amendment violations. The district bought Gaggle in August 2023 for $162,000 over three years. U.S. District Judge Kathryn Vratil found the district violated the Kansas Open Records Act in bad faith and ordered it to pay $113,000 in the students' attorney fees (2026 rulings). The Student Press Law Center named four of the student journalists 2024 Courage in Student Journalism finalists, and the Kansas Scholastic Press Association gave them its Courage in Journalism Awards. Three are plaintiffs. | **VERIFIED 2026-07-31 across two independent outlets** (Lawrence Times 2025-08-01, Lawrence Journal-World 2026-06-04), both archived in `resources/Kansas/web-captures/`. Merits case still pending. Court filings themselves not yet captured, so publish with news attribution, not as court record. |

**Why it matters.** Kansas is a confirmed no-guidance state, yet its students'
actual AI exposure includes being monitored by one and organizing litigation
against it. Exposure evidence is not only classroom tools, and students are not
only subjects of policy. Some arrive having fought one.

## Indiana: pilots with published data

| # | Kind | Fact | Source |
|---|---|---|---|
| IN-1 | program | IDOE ran an **AI-Powered Platform Pilot Grant** in 2023-24 with a published final report carrying teacher feedback data and vendor data, followed by a 2024-25 Digital Learning Grant with its own AI Educator Survey final report. | IDOE digital-learning page, **archived 2026-07-31** in `resources/Indiana/web-captures/` |
| IN-2 | program | IDOE hosts an **AI District Implementation Spotlight Series**, described as administrators, coaches, teachers, **and students** across Indiana sharing strategies, plus an "AI in the Classroom Spotlight Session Collection" of "practical examples and demonstrations of AI tools and instructional applications used in Indiana schools." | Same page. The spotlight videos are unmined and likely rich. |

## Arizona: the students were surveyed, and they want the teacher

| # | Kind | Fact | Source |
|---|---|---|---|
| AZ-1 | stat basis | The 2026 guidance "incorporates insights gathered through a peer-led survey of Arizona high school students." | NAU/AIEE guidance, PDF p.6 |
| AZ-2 | stat | Verbatim: "survey results from Arizona students suggest that they tend to prefer teachers, as opposed to AI, to provide guidance, feedback, and grades (AIEE, 2026)." | Same document, PDF p.27. Raw data unpublished per p.39. |

AZ-2 belongs beside Rhode Island's integrity quote. Students asking for human
judgment is the counter-story to the assumption that students want AI everywhere.

## Vermont: the platform fact

| # | Kind | Fact | Source |
|---|---|---|---|
| VT-1 | environment | Verbatim: "as of the writing of this document all Vermont schools are using the Google for Education platform," with Gemini and NotebookLM free for education and Gemini "baked into Google Classroom and Google Docs." | AOE guidance, PDF p.34 |

Every Vermont student works inside a platform with a frontier chatbot built in.
Exposure by default, no adoption decision required.

## Colorado: the students speak in the state's own document

| # | Kind | Fact | Source |
|---|---|---|---|
| CO-1 | voice | Verbatim: "I think a key part of using AI as a student is using it as a tool … creating things like flashcards based off your notes … sort of helping you be more efficient at a particular task." | CDE Roadmap, PDF p.11, one of five attributed student quotes |
| CO-2 | voice | Verbatim: "I use it to help learn languages by having a back and forth verbal conversation with the AI in a foreign language, asking lots of questions to nurture curiosity, explain things in a simpler manner." | Same document |

## Connecticut: a statutory pilot

| # | Kind | Fact | Source |
|---|---|---|---|
| CT-1 | program | Public Act 24-151 directed CSDE to create "an artificial intelligence education tool pilot program" in a limited number of schools by the end of the 2024-25 school year, with educator professional development. | CT EdTech Commission page, **archived 2026-07-31** in `resources/Connecticut/web-captures/`. **Follow-up: did the pilot run, and where?** |

## Kentucky: a student program

| # | Kind | Fact | Source |
|---|---|---|---|
| KY-1 | program | Policy-in-Action Spotlight, verbatim: "AI-based challenges have been introduced that encourage students to demonstrate their AI skills in a responsible manner" for participants in STLP, Kentucky's Student Technology Leadership Program. | KDE guidance brief, PDF p.6 region |

## Puerto Rico: the student manual

| # | Kind | Fact | Source |
|---|---|---|---|
| PR-1 | taught artifact | DEPR publishes an entire student-facing document, "Manual de IA para Estudiantes" (2026), already captured in the corpus. Like Nevada's poster, it is the literal artifact of what students were taught, in this case a full manual. | `resources/Puerto Rico/Manual-AI-para-Estudiantes-2026.pdf` |

---

## Leads that need more than fetching

| State | Lead | Blocker |
|---|---|---|
| Minnesota | MDE portal hosts "success stories of AI use from across the state" on a discussion board | JS-rendered, did not surface in the fetch |
| Indiana | The spotlight video series | Video, unmined |
| Maine | Interactive Genially toolkit | Web app, needs human eyes |
| Hawaii | DOE student-programs AI page | JS-rendered nav shell only |
| Kansas | Court filings in the Gaggle case | Primary legal source for KS-1 |
| Illinois | The 2025 task force report behind the guidance | Holds the underlying survey data the guidance only gestures at |

## States with nothing after both phases

Alabama, Alaska, Arkansas, California, Delaware, DC, Florida, Georgia, Idaho,
Louisiana, Maryland, Massachusetts, Michigan, Mississippi, Missouri, Montana,
Nebraska, New Hampshire, New Jersey, New Mexico, New York, North Dakota,
Oklahoma, Oregon, Pennsylvania, South Carolina, South Dakota, Tennessee, Texas,
Utah, West Virginia, Wisconsin, Wyoming. Mostly aspirational documents, adult-side
process, or workforce projections. Their blocks do not render.

## Final tally

**14 of 52 jurisdictions carry exposure evidence**: Arizona, Colorado,
Connecticut, Indiana, Iowa, Kansas, Kentucky, Nevada, North Carolina, Ohio,
Puerto Rico, Rhode Island, Vermont, Washington. Squarely inside the 15-to-20
estimate, and the two best finds (Iowa, Kansas) came from states whose captured
documents said nothing at all.
