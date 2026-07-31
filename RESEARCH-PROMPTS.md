# Research Prompts

Paste these into the AIBMM `deep_research` tool from Claude Code. Run Tier A
first. It is small, fast, and load-bearing.

Tool call shape:

```
run_tool(slug="deep_research", inputs={
  "input": "<prompt below>",
  "research_effort": "standard"
})
```

`standard` runs about 30 seconds. `deep` runs about two minutes and costs
noticeably more credits. `exhaustive` is roughly ten times standard. Use
`standard` for the batches and reserve `deep` for anything that comes back
ambiguous.

`deep_research` is async. It returns a `job_id`. Poll with
`wait_for_job(job_id, timeout_ms=50000)`, repeating while status is `working`.

For single fast lookups use `search_web_grounded` instead. It is synchronous and
far cheaper, and it resolved Florida, Pennsylvania, DC, Maryland, and Texas in
one call each.

---

## TIER A — Higher education hooks

> Verify, from primary sources only, every point at which a US state's K-12
> artificial intelligence policy directly names, binds, funds, or involves
> HIGHER EDUCATION. This is for a national publication aimed at university
> faculty, and these specific claims carry the publication's central argument, so
> each must be traced to enacted bill text or the issuing agency's own document.
>
> Verify each of the following and quote the operative language:
>
> 1. TENNESSEE — Public Chapter 550 (2024). It is widely reported to require
> public universities, not only K-12 districts and charter schools, to adopt AI
> policies. Confirm from the enacted text whether universities are actually named
> and bound, what exactly they must do, and any reporting deadline. This is the
> single most important claim in the entire project.
>
> 2. OHIO — the Department of Education and Workforce "AI in Education Model
> Policy" published Dec 30 2025. Reported to name postsecondary institutions
> among external partners a district AI workgroup "should include." Confirm the
> actual wording and whether it is advisory or required.
>
> 3. MARYLAND — SB 720 (Ch. 634, signed May 26 2026). Reported to provide
> $150,000 in FY2027 for MSDE to partner with an institution of higher education
> to develop professional development. Confirm from the fiscal note or bill text.
> Also confirm any university role in evaluating or certifying AI tools.
>
> 4. PENNSYLVANIA — PDE's "Framework for Artificial Intelligence Program
> Endorsement Guidelines." Confirm this is an educator-certification endorsement
> reaching university teacher preparation programs, what it requires of those
> programs, and its current status.
>
> 5. FLORIDA — the Florida K-12 AI Education Task Force and its guidance,
> coordinated through the CS Everyone Center at the University of Florida.
> Confirm UF's authorship role, whether FLDOE has formally adopted or endorsed
> the guidance, and the status of the FLDOE rulemaking workshop scheduled Aug 5
> 2026.
>
> 6. NEW JERSEY — A.4352 and S.2862. The MultiState tracker says these require
> public institutions of higher education to OFFER AI certificate and degree
> programs. The legislature's own summary says the bill requires the Secretary of
> Higher Education to DEVELOP model curricula. Resolve this definitively from the
> bill text and state which is correct.
>
> 7. ARIZONA — HB 4040, which would have required universities under the Board of
> Regents to adopt AI policies by July 1 2027 with annual reporting. Confirm the
> scope, the statutory citation, and that it died in House Rules Committee.
> Separately confirm HB 4005 was vetoed by Gov. Hobbs on June 19 2026.
>
> 8. VIRGINIA — the "work in partnership" principle in the state AI education
> guidelines, reported to name AI researchers at Virginia colleges and
> universities. Confirm the wording.
>
> Also search deliberately for any OTHER state whose K-12 AI policy binds,
> funds, or formally involves higher education that is not on this list.
>
> For each item state whether you reached PRIMARY source (enacted text or agency
> document) or only SECONDARY. Give direct URLs. Where a reported claim is wrong,
> give the correct version. Where a document could not be retrieved, say so
> rather than inferring.

---

## TIER B — The thirty guidance states

Run once per batch, substituting the state list. Keep batches to eight to ten
states so the output stays detailed rather than compressed.

> Verify the substantive contents of state department of education K-12
> artificial intelligence guidance for the following states, working from each
> agency's own published document wherever possible: [STATE LIST].
>
> This is for a national publication aimed at university faculty. Summary-level
> descriptions are not useful. A professor should be able to read the entry and
> understand what that state's high school graduates were actually taught and
> governed by.
>
> For each state report:
>
> 1. FRAMEWORK — exact document title, issuing agency, release and revision
> dates, and the ACTUAL NAMED principles or pillars written out in full. If a
> state has "seven guiding principles," name all seven in the state's own
> wording. Note whether the principles are short labels or full sentences, since
> trackers frequently compress full sentences into invented labels.
>
> 2. INSTRUMENTS — any reusable tool spelled out completely. Student use scales
> with every level and what it permits. Tool evaluation rubrics with their actual
> criteria. Grade-band frameworks with what is permitted at each band. Maturity
> rubrics with all stages and domains. Decision trees and checklists.
>
> 3. PROHIBITIONS — explicit "do not use AI for X" statements, named
> specifically. Also each state's stated position on AI DETECTION TOOLS, since
> several states advise against them.
>
> 4. CLASSROOM GUIDANCE — what the document tells teachers to do. Named
> pedagogical frameworks (SAMR, TPACK, computational thinking, the 5 Big Ideas of
> AI). Disclosure and citation requirements. Assessment redesign advice. Prompt
> engineering guidance.
>
> 5. HIGHER ED HOOK — anything touching postsecondary education.
>
> CRITICAL: for every claim, state whether you reached the state's own document
> (PRIMARY) or only a compilation, tracker, or news summary (SECONDARY). The AI
> for Education state guidance compilation is a SECONDARY source and has been
> found to contain errors, including merging two separate Louisiana frameworks
> and mischaracterizing Washington's scaffolding matrix. Do not treat it as
> authoritative. Where a claim appears only there, say so explicitly.
>
> Give direct URLs to every primary document. Where a document could not be
> retrieved, say so rather than inferring its contents.

---

## TIER C — Statutes and deadlines

> Verify from enacted bill text the following US state statutes on artificial
> intelligence in K-12 education. For each, confirm the bill number, chapter
> number, signing date, effective date, exactly what districts are required to
> do, and the precise compliance deadline.
>
> Ohio HB 96 (ORC 3301.24) · Tennessee Public Chapter 550 · Idaho SB 1227 ·
> Maryland SB 720 Ch. 634 · Oklahoma SB 1734 · Virginia HB 1186 and SB 394 ·
> Utah HB 218 · Alabama HB 329 · Georgia SB 179 · California AB 2148 Ch. 45
>
> For each, distinguish clearly between a requirement on the state education
> agency and a requirement on local districts. Give the exact date each district
> obligation bites, and where a deadline depends on a triggering event (such as
> Maryland's 120 days from guidance release), state whether the trigger date is
> public and what it is.
>
> Also confirm which of these states has published a MODEL POLICY districts may
> adopt, and give its publication date and URL.
>
> Primary sources only. Cite the legislature's own text or the agency's own
> publication. Flag anything resting on news coverage.

---

## TIER D — Remaining absence claims

Use `search_web_grounded` rather than `deep_research`. One call per state.

```
search_web_grounded: "[State] Department of Education artificial intelligence
guidance K-12 schools districts"
```

Remaining: Nebraska, New Hampshire, South Dakota.

Treat a null result as unverified, not as confirmed absence. Florida looked
empty under exactly this kind of search and turned out to have a full
university-authored statewide framework.
