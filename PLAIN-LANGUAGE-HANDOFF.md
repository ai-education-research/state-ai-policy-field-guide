# Handoff — plain-language rewrite of the state pages

**Read this first.** Self-contained, so a fresh session can start work without
re-deriving anything. Last updated 2026-08-07.

**The site is live and public.** Anything you change ships to a national audience.

- Site: https://ai-education-research.github.io/state-ai-policy-field-guide/
- Repo: https://github.com/ai-education-research/state-ai-policy-field-guide
- Short link used in talks and posts: `bit.ly/K-12AIFieldGuide`

---

## 1. The task in one paragraph

Every reader-facing surface of this site was written in the research corpus's
own register. An acronym-expansion pass on 2026-08-07 fixed the abbreviations
but **did not fix the sentences**. The author's verdict, which is correct:
"apart from abbreviations, did you reword complicated sentences? Did you observe
it from a faculty perspective who has no idea about any of this?" The answer was
no. The remaining job is real editing, judged from the perspective of a professor
who has never seen this project and wants something useful in ninety seconds.

---

## 2. What is already done, do not redo

| Layer | Status |
|---|---|
| **Short versions** (`scripts/short-versions.mjs`) | **Done.** 52 hand-authored blocks, 3-4 plain items each. This is the model to imitate. |
| **Acronym expansion** (`scripts/plain-language.mjs`) | **Done.** 136 acronyms expanded across all generated text. Quote-safe. |
| **Exposure evidence** (14 states) | Done, hand-authored. |
| **Provenance ledger** → site badges | Done. Reads `provenance.json` at build time. |
| **Internal apparatus stripped** | Done. `.md` citations, `§` refs, `[Inference]` tags all gone. |
| Evidence-gaps section | Removed from the UI and from the build payload. |

---

## 3. What is left, with exact counts

Measured 2026-08-07 on the current build, **outside quotation marks**.

### Graduate profile — 150 items across 52 states. **Highest priority.**

This is the first thing on every state page, under "What a student arriving from
X may bring."

| Problem | Count |
|---|---|
| Sentences cut off mid-clause with `…` | 35 |
| References to things the reader cannot see, `(Tenet 4)`, `(p.12)` | 36 |
| Nominalizations (`implementation`, `posture`, `variance`) | 39 |
| Semicolons (banned by the author's style rules) | 26 |
| Research register (`cohorts`, `predate`) | 7 |
| Acronyms the expansion list missed (MCA, ARM, EO, PC) | 6 |
| Em-dashes (banned) | 3 |

Real examples, verbatim from the live site:

> **Maryland:** "Becoming a mandated baseline, but phasing in. SB 720 is enacted,
> but AI literacy in state standards is due June 1, 2027, so near-term Maryland
> graduates predate a fully standardized baseline; district…"

Opens on a fragment, never defines "mandated baseline," contains a banned
semicolon, and stops mid-sentence.

> **Illinois:** "Uneven and recent. The guidance is voluntary and locally
> determined (Tenet 4), and it posted June 2026, so near-term incoming cohorts
> largely predate district implementation."

"Tenet 4" points at an invisible document. "Cohorts predate district
implementation" is three nominalizations in four words.

### Detail sections — the six sections below the short version

| Problem | Count |
|---|---|
| References to invisible things | 553 |
| Nominalizations | 382 |
| Semicolons | 342 |
| Em-dashes | 208 |
| Missed acronyms | 87 |
| Research register | 50 |

**These are not lightly editable.** 553 page citations means they are research
documents. See §5 for the decision the author needs to make.

---

## 4. How to do the work

### The model to imitate

`scripts/short-versions.mjs` is the standard. Read three entries before writing
anything. The pattern is a bolded plain claim, then one or two sentences that
*explain* rather than *name*.

Good: "Michigan asks districts to rate themselves rather than follow rules. A
single chart asks whether the district is just starting, underway, or well along."

Bad: "Michigan's instrument is a maturity rubric across eight domains."

### Recommended approach for the graduate profile

Do **not** try to fix it with more regex rules. No rule turns "predate a fully
standardized baseline" into English. Create `scripts/graduate-profiles.mjs`
following the exact shape of `short-versions.mjs`, hand-author 52 entries of
2-4 items each, and have the generator prefer the curated entry, falling back to
the extracted one only if a state is missing.

Source material for each state is `analysis/<State>.md`, section
`## Expected Graduate AI Profile`. It is accurate. It is just written for a
researcher.

### Hard rules

1. **Never rewrite inside quotation marks.** Text between `"` or `“ ”` is a
   verbatim quote from a state document. Altering it misquotes the source, which
   is the one thing this project cannot do. `plainLanguage()` already shields
   quotes and filenames; preserve that behavior.
2. **No em-dashes, no semicolons, no colons in prose.** Labels and citations may
   use colons. Check with `grep -c "—\|;"`.
3. **No blame framing.** Never cast higher ed, the professor, or AI as the party
   at fault. Frame gaps structurally. Students arrive with expectations; the
   information never crossed between the two systems.
4. **Plainest wording wins**, every time. The author has rejected clever copy
   repeatedly. See both memory files in
   `~/.claude/projects/-Users-sidg-Downloads-K12-AI-Policies---Guide-for-Higher-Ed/memory/`.
5. **Do not invent facts.** Every claim must trace to the analysis file. Where
   guidance is voluntary, say so.
6. **Leave the honest caveats in.** "Not captured in this project's records" is a
   feature, not a gap to paper over.

---

## 5. The one decision the author still owes you

**What happens to the detail sections?** Two defensible options, his call:

- **Demote them.** Put the six sections behind a "Read the full analysis"
  disclosure so the short version and graduate profile carry the page. Fast, and
  the plain layers already do the work.
- **Rewrite them.** Genuinely large. 52 states x 6 sections, and the 553 page
  citations would each need a decision.

Recommendation on record: rewrite the graduate profiles, demote the detail
sections. Do not start rewriting detail sections without asking.

---

## 6. Build, verify, deploy

```bash
cd policy-guide-web
pnpm bundle          # generates content, builds, writes release/ AND ../docs/
```

`pnpm bundle` writes `docs/index.html` itself. Pushing anything under `docs/`
triggers `.github/workflows/pages.yml`, which deploys in seconds.

```bash
git add -A && git commit -m "..." && git push origin main
gh run list --workflow=pages.yml --limit 1     # watch it
curl -s -L "https://ai-education-research.github.io/state-ai-policy-field-guide/?cb=$RANDOM" | grep -c "some new string"
```

### Regression checks, run every time

```bash
# posture counts must stay exactly this, or the map is miscolored
node -e "const c=require('./src/generated/content.json');const t={};c.states.forEach(s=>t[s.posture]=(t[s.posture]||0)+1);console.log(JSON.stringify(t))"
# expected: {"mandate":10,"guidance":32,"absent":6,"pending":4}
```

**Why this matters.** `posture()` classifies on the *raw* comparison-matrix
wording, because it looks for literal strings like "No TEA guidance". An earlier
version ran it on transformed text and silently flipped Texas from "no guidance"
to "guidance". `meta.authorityRaw` exists solely to prevent that. Do not remove it.

```bash
# filenames must never be mangled by the expansion layer
node -e "const c=require('./src/generated/content.json');let a='';c.states.forEach(s=>a+=Object.values(s.sections).join(' '));console.log('mangled:',(a.match(/the state education department-[A-Za-z0-9-]+\.(pdf|docx)/g)||[]).length)"
# expected: 0
```

Also verify on the **live public URL**, not just the build. This session shipped
two bugs that a local check would have missed.

---

## 7. Files that matter

| File | Purpose |
|---|---|
| `policy-guide-web/scripts/short-versions.mjs` | The 52 hand-authored plain blocks. **The style model.** |
| `policy-guide-web/scripts/plain-language.mjs` | Acronym expansion. Quote-safe and filename-safe. |
| `policy-guide-web/scripts/generate-content.mjs` | Builds `content.json` from the corpus. |
| `policy-guide-web/src/App.tsx` | All UI. Single file. |
| `analysis/<State>.md` | 52 verified jurisdiction analyses. The source of truth. |
| `provenance.json` | Per-jurisdiction verification status. Drives the site badges. |
| `VERIFICATION.md` | Claim ledger, including claims that failed and reversals. |
| `exposure-candidates.md` | Mining trail for the "already happening" evidence. |

---

## 8. Current state of the record

- **Provenance:** 42 of 52 jurisdictions checked against their own primary
  documents. 10 have no document captured.
- **Exposure evidence:** 14 jurisdictions carry verified "already happening" items.
- **Posture:** 10 mandate, 32 guidance, 4 pending, 6 no guidance.
- **Byline is live**, with an AI-use disclosure in the footer.

### Two known issues, unrelated to this task

1. The footer says "All claims were verified against primary documents." The
   provenance page says 10 jurisdictions have no document. The author was told
   twice and chose to keep the wording. **Do not change it without asking.**
2. Six exposure leads remain unmined: Minnesota's success-story portal, Indiana's
   spotlight videos, Maine's toolkit, Hawaii's page, the Kansas court filings, and
   the Illinois task force report.

---

## 9. Suggested first moves

1. Read this file, then three entries in `short-versions.mjs` to absorb the voice.
2. Open the live site and read Maryland, Illinois, and Montana state pages cold,
   as a professor who has never seen the project.
3. Ask the author the §5 question about the detail sections before touching them.
4. Start `scripts/graduate-profiles.mjs`. Do five states, show the author, adjust
   the register, then do the remaining 47.
5. Run the §6 regression checks, deploy, verify on the live URL.
