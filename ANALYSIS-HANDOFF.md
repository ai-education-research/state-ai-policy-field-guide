# Project Handoff — K-12 AI Policy for Higher Education

**Read this first.** Self-contained handoff so a fresh session can continue without re-deriving anything.

Last updated: 2026-07-30, end of the analysis-and-authoring session.

**Status: the research and writing phases are COMPLETE. The next phase is website design.**

---

## 1. What is done

**All 52 jurisdictions analyzed (50 states + DC + Puerto Rico).** Coverage verified 1:1 against `resources/`, zero missing, no duplicates. Every file carries the same nine template sections, claim tagging (Requirement / Recommendation / Instructional guidance / Example / Unresolved), filename-plus-page citations, and "Higher-education implication:" labels.

**Six audience-facing documents written on top of the analyses** (inventory in §3).

**A five-lens adversarial review was run on the two main documents** (goal fit, evidence integrity, usability, the readiness verdict, blind spots), with the top findings verified against the files. Four high-severity findings confirmed; three of the four are now fixed. Outstanding items are in §7.

**The argument has been refined and settled** (§4). Do not re-open it without reason; it survived adversarial review in its current form.

---

## 2. The one-line project thesis

> **K-12 education has standardized what higher education only advised. Universities wrote the research on governing AI in the classroom, and it now governs high-school assignments in four states while most of our own syllabi say nothing at all.**

Compressed: **our own scholarship now governs high-school classrooms and not our own.**

This replaced the earlier, weaker framing ("K-12 acted while higher ed did nothing"), which fails against four counterexamples: higher ed published teaching guidance in 2023 before most state K-12 documents; the AIAS is higher-ed scholarship; several state K-12 guidances were authored by universities (NAU wrote Arizona's, UF coordinates Florida's, KU drafted Kansas's); and Tennessee bound its public universities early. The refined premise concedes all four and still lands, because the claim is about **form** (standardized instruments vs. dispersed advice), not about who moved first.

> **Correction, 2026-07-30, primary source.** The fourth counterexample used to read
> "Tennessee bound its public universities before most K-12 district deadlines."
> That is not true as written. Public Chapter 550 bound Tennessee's K-12 districts
> **first**, by the 2024-25 school year with reporting from July 1 2024, and its
> public universities a year later, by July 1 2025. The counterexample may still
> hold against *other states'* K-12 deadlines, but it cannot be stated against
> Tennessee's own. Reworded above pending a decision on how far to press it.

---

## 3. File inventory

### Audience-facing deliverables (project root)

| File | What it is | State |
|---|---|---|
| `cross-state-ai-policy-comparison.md` | The 52-jurisdiction comparison. 14 sections, 52-row matrix, archetypes, offloading tiers. Evidence rule: K-12 corpus only, no outside facts. | Complete, detector taxonomy repaired |
| `higher-education-ai-readiness-guidelines.md` | Translation for higher ed. Includes the Collision framing section, the "Is Higher Education Ready?" verdict, faculty/administrator guidelines, Annex A (scales written out level by level), Annex B (primary-source URLs). | Complete |
| `k12-to-higher-ed-brief.md` | Two-page brief in release voice. Leads with the two-student vignette. | Complete |
| `is-higher-ed-ready-oped.md` | ~950-word op-ed. Rewritten under the Imagineering review to provoke thought, **not** to hand over solutions. Ends by refusing the numbered-list convention on purpose. Includes a fact-checker appendix. | Complete |
| `k12-frameworks-universities-can-adopt.md` | Adoption catalog. ~40 instruments in 10 sections, organized by university function. | Complete |
| `ai-readiness-brief.md` | **SUPERSEDED.** Earlier, longer draft of the brief ("The Week-One Collision"). | **Decide: merge its stronger passages into `k12-to-higher-ed-brief.md`, then delete** |

### Research base

- `analysis/` — 52 jurisdiction files + `_cross-state-comparison.md` (an earlier, looser comparison superseded by the root-level one; keep for its correction notes).
- `resources/<Jurisdiction>/sources.md` — 52 provenance ledgers with verified URLs, retrieval notes, and **provenance flags that must be respected**.
- `resources/` also holds ~69 downloaded primary documents (PDF/docx/html) plus `_DOWNLOADS.md` and `README.md`.
- `US State-Level K-12 Artificial Intelligence Policy A Primary-Source Dataset for Higher Education Faculty.md` — the deep-research dataset. Treat as a strong draft, not verified truth (it inherited tracker errors).

### The map artifact (the website's likely centerpiece)

- `state-ai-policy-field-map.html` — built v1. **Contains known factual errors. Do not ship as is.**
- `template.html` (has `__DATA__` / `__PATHS__` placeholders), `data.js` (the dataset, edit this not the built HTML), `gen-paths.js`, `build.js`.
- Build: `npm install us-atlas topojson-client topojson-simplify`, then `node gen-paths.js && node build.js`.

### Project records

- `CLAUDE.md` — project context, design system, style rules, **critical map technical note**.
- `VERIFICATION.md` — claim ledger. Has pending corrections (§7).
- `RESEARCH-PROMPTS.md` — research prompts for any remaining verification.

---

## 4. Settled decisions (do not re-litigate without reason)

**Titles.** Article: *The High Schools Have a Policy. We Have a Suggestion.* Website: *Before They Get Here*, subtitle *K-12 AI policy in all 52 US school systems, and what it means for higher education*. The interactive map keeps its own name inside the site: **State AI Policy Field Map**. Container and instrument should not share a name.

**Scope discipline.** The comparison and the 52 analyses are **K-12 evidence documents**. They deliberately say nothing about higher education's condition. That is the author's premise, supplied by him, and is labeled `[Author framing]` where it appears in the guidelines. Do not "fix" this by adding higher-ed characterization to the K-12 documents.

**The op-ed does not offer solutions.** By explicit instruction. Its job is to make faculty and administrators think. It converts the verdict into three questions the reader cannot answer about their own institution, then names its refusal of the solutions genre as the thesis.

**Evidence labels.** `[Evidence]` / `[K-12 Evidence]`, `[Synthesis]`, `[Inference]`, `[Recommendation]`, `[Author framing]`. Silence in a state document is a **gap, not a rejection**. Nothing is called "unique" unless it appears in exactly one state file.

---

## 5. THE NEXT TASK: design the website

**Goal.** Share all of this in a form useful to higher-education faculty and administrators. Audience is a professor or provost who will give the site ninety seconds before deciding whether to stay.

### Content architecture (recommended, not yet built)

The site has five distinct jobs and should not blur them:

1. **The hook** — the two-student collision vignette, above the fold. This is the lede for every audience, confirmed by review. Do not open with methodology.
2. **The map** — "click your state," the project's public-facing centerpiece. Per-state panel should surface: status, instruments (any scale), detector stance, higher-ed hook, and a link to the full analysis.
3. **The instruments library** — the highest-utility layer for faculty. Scales written out level by level so a professor can lift one onto a syllabus. Source material already exists in `higher-education-ai-readiness-guidelines.md` Annex A and `k12-frameworks-universities-can-adopt.md`.
4. **The argument** — brief, op-ed, readiness verdict.
5. **The evidence** — the comparison, the 52 analyses, and the primary-source URLs.

### Design decisions still open

- Static site vs. the existing single-file HTML approach. The current artifact is one self-contained HTML file, which is portable and matches the existing build pipeline.
- Whether the 52 analyses ship publicly (they were written for this audience, so they can) and where they live.
- Whether the provenance badge (primary verified / tracker-sourced / unverified) that `CLAUDE.md` describes gets built. **It is the project's biggest liability converted into a credibility feature, and no other state AI tracker does it.** Strongly recommended.
- Author byline, affiliation, date of record, and version. Currently missing from every document and mandatory for a national release under a named endowed chair.

### Non-negotiable before launch

- **The map must be rebuilt from corrected `data.js`.** The built v1 has known errors.
- Citations must be reader-facing (URLs, not `.md` filenames). Annex B is the starting point.
- The Perkins et al. (2024) journal citation and DOI must be verified against the publisher.

---

## 6. CRITICAL technical note for the map

**Use `states-albers-10m.json`, never `states-10m.json`.** The wrong file draws every state as a speck near the origin and renders an empty rectangle. **This bug already shipped once in this project**, because the check was a rendered PNG that came back blank and was read as fine. An empty canvas and a correct canvas look similar at a glance, so verify numerically:

```bash
# coordinate bbox should be roughly x: -58..957, y: 13..606
node -e "const P=require('./paths.json');
const n=Object.values(P).join('').match(/-?\d+\.?\d*/g).map(Number);
let xs=[],ys=[]; for(let i=0;i<n.length;i+=2){xs.push(n[i]);ys.push(n[i+1]);}
console.log('X',Math.min(...xs).toFixed(0),Math.max(...xs).toFixed(0));
console.log('Y',Math.min(...ys).toFixed(0),Math.max(...ys).toFixed(0));"
```

Settings that are already correct and should not change without reason: simplification tolerance `3`, `viewBox="-62 0 1040 615"` (the negative min-x includes Alaska's Aleutian tail), `aspect-ratio: 1040/615`, and the `getBBox()` try/catch with `requestAnimationFrame` retry for label placement.

Full design system (palette, type, signature elements) is in `CLAUDE.md`. Do not restyle without reason.

---

## 7. Outstanding items

### Corrections still pending in `data.js` and `VERIFICATION.md`

These were found during the analysis pass, are recorded in the per-state files and the comparison, and have **not** been folded back:

- **Washington** — five-level student scale confirmed; the July 28 "four-step teacher-support matrix" correction was wrong. Restore Washington to the scaffolded-scale group. (Reportedly actioned; verify.)
- **Puerto Rico** — the "nivel 1 tutor de apoyo básico" wording does not exist. PR's five levels are a Spanish translation of Washington OSPI's scale. No "Conecta y CRECE."
- **Louisiana** — one SAMR-aligned four-tier model, not two. "Foundational/Synergistic" labels do not exist.
- **New Jersey** — A4352 as introduced would require public institutions to **offer** AI degree/certificate programs. Stronger than the "model curricula only" correction. Still pending, not enacted.
- **Utah** — SB 322 **failed** March 6, 2026 (not pending). The USBE framework is the **March 2026 edition and text-extractable**, contrary to the old "not extractable" note.
- **Ohio** — the InnovateOhio AI Toolkit that currently leads the entry is orphaned (404). The DEW model policy should lead.
- **Georgia** — "SB 179" appears in neither document. Likely a citation error. Do not assert a GA AI graduation statute.
- **Texas** — TRAIGA's carve-out is **higher-ed-specific**, not a blanket education exclusion.
- **Four consumer-protection statutes mis-scoped as school law:** Washington ESHB 2225, Oregon SB 1546, Tennessee SB 1580/PC 647, Vermont Act 156. Re-scope or drop.

### Review findings not yet addressed

- **Bridge populations are missing** from the guidelines: dual enrollment (living the collision now, and the strongest urgency evidence available), transfer students (bypass the entry diagnostic the whole onboarding architecture depends on), community colleges as receiving institutions, international students (no state profile, highest false-positive exposure, no taught detector skepticism), and graduate TAs who enforce policy in practice.
- **The five-concurrent-syllabi student experience** is not written into any document. It exists in conversation only. It is the strongest motivation for the single-institutional-scale recommendation.
- **No engagement with the first objections** a faculty senate raises: academic freedom, shared-governance timelines, disciplinary variation, cost, and the category objection that K-12 governs minors in a compliance system while higher ed governs adults under faculty autonomy.
- **Minor precision items:** a composite AI-free-floor quote cited to six states is verbatim only in Oklahoma's file; a Level-0-vs-AIAS-Level-1 numbering clash inside the guidelines' model syllabus clause; the Tier-5 offloading count (13) does not reconcile with the matrix (16 "not captured"); "independent convergence" claims sit awkwardly beside the borrowing-network section.
- **Style drift:** both long documents violate the author's own rules (em-dashes and semicolons throughout). The brief and op-ed comply. Fix before release.
- **Two instrument readings have flipped across verification passes** (Washington's scale, Louisiana's tier model). They verify cleanly against the captured PDFs, but deserve one human-eyes pass before national release, since this is exactly the content category where the project previously shipped errors.

### Documents still needing human eyes (from `sources.md` flags)

New Hampshire's coalition PDF, NYC's JS-rendered district guidance, Virginia's JS-rendered bill texts (HB 1186 / SB 394), and South Dakota's members-only ASBSD model policy.

---

## 8. Author style rules (apply to all prose)

No em-dashes. No semicolons. No colons in prose (fine in labels and citations). Punchy declarative sentences. Faculty member and student are the active agents; AI is the instrument. Avoid parataxis, chiasmus, and asyndetic tricolon, which read as AI tells.

**Working preferences:** surface options before committing to structural or naming decisions; report findings before making changes; Sid makes his own edits and brings revised versions back, so leave the seams visible rather than over-polishing.

---

## 9. Suggested first moves in the next session

1. Read this file, then `CLAUDE.md` for the design system and the map warning.
2. Skim `k12-to-higher-ed-brief.md` and `is-higher-ed-ready-oped.md` to absorb the voice and the argument in five minutes.
3. Decide the site architecture with the author before building anything (§5). Surface options first.
4. Fold the §7 corrections into `data.js`, then rebuild the map and **verify geometry numerically**.
5. Build the instruments library layer, which is the highest-utility content for the target audience and already drafted in Annex A.
6. Resolve the superseded `ai-readiness-brief.md`.
