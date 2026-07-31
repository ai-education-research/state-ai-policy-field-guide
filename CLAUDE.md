# State AI Policy Field Map — Project Context

## What this is

An interactive single-file HTML map of US state-level K-12 artificial intelligence
policy, built for national release to university faculty. The author is
Dr. Sidaard Gunasekaran, Hans von Ohain Endowed Chair, University of Dayton.

The argument the artifact makes: K-12 built the governance vocabulary for AI in
the classroom while higher education was still debating whether to allow it.
State education agencies have already produced scaffolded use scales, tool
vetting rubrics, prohibition lists, and district policy mandates with hard
deadlines. Most university syllabi still say "ask your instructor."

The reader is a professor. They should be able to click their state and learn
what their incoming freshmen were actually taught and governed by.

## Status

**v1 is built and renders correctly.** `state-ai-policy-field-map.html` covers
all 51 jurisdictions with a working choropleth, filter, search, and detail panel.

**v1 is not accurate enough to ship.** A verification pass on July 28 2026 found
confirmed factual errors in the content, including in the material the artifact
promotes most heavily. See `VERIFICATION.md`, which is now the authoritative
record for this project. Read it before writing anything.

The headline finding: of the ten student-use instruments the artifact features,
**three reached primary source, and all three were wrong as written.** The other
seven could not be confirmed at all.

**A full deep-research pass exists** covering all 50 states plus DC and Puerto
Rico in six fields. Get it from the user and save it to
`research/state-policy-dataset.md`. Treat it as a strong draft, not as verified
truth. It inherited several tracker errors that the July 28 pass caught.

## The job

Rebuild the dataset at depth **and** at verified provenance. Order matters, and
it is not the order a legal reviewer would choose. The reader is a professor, not
an administrator.

1. **Instruments.** Rebuild the ten student-use scales from primary documents.
   Build the library on Perkins et al. 2024 as the spine (see below).
2. **Higher ed hooks.** Eight claims, listed in `VERIFICATION.md` Tier A. Small,
   fast, and they carry the argument. Tennessee first.
3. **The thirty guidance states.** Roughly 150 claims. Largest error surface and
   the content faculty actually read. Batch it.
4. **Deadlines.** Only because the compliance clock is a prominent design element.
5. **Remaining absence claims.** Nebraska, New Hampshire, South Dakota.

Alongside that, three structural additions:

- **An instruments library layer**, where scales are written out level by level
  so a faculty member can lift one onto a syllabus.
- **A three-state provenance badge** on every claim: primary verified,
  tracker-sourced, unverified. This is the project's biggest liability converted
  into a credibility feature. No other state AI tracker does it.
- **Primary source links** per state.

## The framing discovery

Oklahoma's scale is documented as adapted by Dr. Karen Leonard at OSDE from
**Perkins, M., Furze, L., Roe, J., & MacVaugh, J. (2024), "The Artificial
Intelligence Assessment Scale (AIAS)."** New Mexico calls its instrument an AI
Assessment Scale as well.

The states are not independently converging on a good idea. They are adapting one
2024 academic paper. Build the instruments library on Perkins et al. and present
state versions as adaptations of it. This is both more accurate and a better
story, since faculty can cite the peer-reviewed source rather than reverse
engineering a state PDF.

## Verification method that works

Use two independent search indexes. The original pass used Anthropic
`web_search` only, and re-running the same index mostly re-confirms your own
results.

The AIBMM connector supplies the second index (You.com):

- `run_tool(slug="search_web_grounded", ...)` — synchronous, cheap, fast. This
  resolved Florida, Pennsylvania, DC, Maryland, and Texas in one call each. Use
  it for single lookups.
- `run_tool(slug="deep_research", ...)` — async, agentic, cited. Returns a
  `job_id`; poll with `wait_for_job(job_id, timeout_ms=50000)`. Use `standard`
  effort for batches. `deep` and `exhaustive` cost significantly more credits, so
  ask the user before either.

Ready-to-run prompts for every remaining tier are in `RESEARCH-PROMPTS.md`.

**The limit of tooling, stated plainly.** `deep_research` is an LLM reading web
pages. Running it against LLM-written content is one model checking another. It
genuinely helps and it caught real errors. But for the verbatim instrument
levels, the only real verification is opening the state PDF. Six primary
documents have now failed automated retrieval more than once and need human
eyes. They are listed in `VERIFICATION.md`.

## Files in this directory

| File | Purpose |
|---|---|
| `VERIFICATION.md` | **Read first.** Claim ledger, confirmed errors, what is still unverified. |
| `RESEARCH-PROMPTS.md` | Ready-to-run research prompts for each remaining tier. |
| `state-ai-policy-field-map.html` | The built v1 artifact. Contains known errors. Do not ship. |
| `template.html` | Source template with `__DATA__` and `__PATHS__` placeholders. |
| `data.js` | The state dataset. Edit this, not the built HTML. |
| `gen-paths.js` | Generates `paths.json` (SVG geometry) from us-atlas. |
| `build.js` | Injects `data.js` + `paths.json` into `template.html`. |

Build: `npm install us-atlas topojson-client topojson-simplify`, then
`node gen-paths.js && node build.js`.

## Critical technical note, read before touching the map

**Use `states-albers-10m.json`, never `states-10m.json`.**

The `us-atlas` package ships both. `states-albers-10m.json` is pre-projected to a
975 by 610 canvas and is what you want. `states-10m.json` is raw longitude and
latitude. Using the wrong one draws every state as a speck near the origin,
far outside the viewBox, and the map renders as an empty rectangle.

This bug already shipped once in this project. It shipped because the check was
a rendered PNG that came back blank and got read as fine. **An empty canvas and a
correct canvas look similar at a glance, so do not check by glancing.**

Verify geometry numerically:

```bash
# coordinate bbox should be roughly x: -58..957, y: 13..606
node -e "const P=require('./paths.json');
const n=Object.values(P).join('').match(/-?\d+\.?\d*/g).map(Number);
let xs=[],ys=[]; for(let i=0;i<n.length;i+=2){xs.push(n[i]);ys.push(n[i+1]);}
console.log('X',Math.min(...xs).toFixed(0),Math.max(...xs).toFixed(0));
console.log('Y',Math.min(...ys).toFixed(0),Math.max(...ys).toFixed(0));"
```

And if you render a preview, measure it:

```python
# non-background coverage should be ~50%, not ~0%
from PIL import Image
im=Image.open('preview.png').convert('RGB'); px=im.load(); w,h=im.size
bg=(12,23,32)
c=sum(1 for y in range(0,h,3) for x in range(0,w,3) if px[x,y]!=bg)
print('%.1f%%'%(100*c/(len(range(0,h,3))*len(range(0,w,3)))))
```

Other geometry settings that are already correct and should not be changed
without reason:

- Simplification tolerance `3` via `topojson-simplify`, yields ~34KB of path data.
- `viewBox="-62 0 1040 615"`. The negative min-x exists to include Alaska's
  Aleutian tail, which extends to x = -58. Do not reset this to `0 0 975 610`.
- `aspect-ratio: 1040/615` on the SVG, guards against height collapsing to zero.
- Label placement uses `getBBox()`, wrapped in try/catch with a
  `requestAnimationFrame` retry. `getBBox()` throws when the frame is not yet
  rendered. Keep the guard.

## Current data schema

```js
"Ohio": {
  ab: "OH",                    // two-letter code, used for map labels
  status: "mandate",           // "mandate" | "guidance" | "pending"
  doc: "...",                  // document name, agency, date
  deadline: "..." | null,      // compliance deadline, renders in amber
  points: [ "...", "..." ],    // 2-4 substantive bullets
  sig: "..." | null,           // "Signature move" callout
  he: "..."                    // "What this means for higher ed"
}
```

### Proposed v2 schema

Map these onto the research report's six fields:

```js
"Ohio": {
  ab, status, deadline,
  framework:   { name, agency, date, url, principles: [ ... ] },
  instruments: [ { name, type, levels: [ { label, permits } ] } ],
  prohibitions:[ "..." ],
  classroom:   [ "..." ],
  legal:       { statutes: [ { bill, signed, effect } ], pending: [ ... ] },
  he:          "...",
  verified:    true | "flag text"   // renders an unverified badge
}
```

The `instruments` array is what feeds the new instruments library layer. Types
worth modelling separately: `scale` (ordered levels), `rubric` (criteria list),
`gate` (grade band to permission), `checklist`.

## Corrections already applied to `data.js`

Nine entries now carry a `verified` field. Two were rewritten outright because
they were confirmed wrong. Seven are flagged as tracker-sourced with a note
explaining exactly what is and is not confirmed.

**Rewritten (were wrong):**

- **Washington.** OSPI's matrix is **four** steps measuring *teacher support*,
  not five steps of AI permission. Modeling and Direct Instruction, Guided
  Practice, Collaborative Practice, Independent Practice. It is a gradual release
  of responsibility model. Remove Washington from the scaffolded-scale pattern
  group in the artifact.
- **Louisiana.** ~~Two separate four-tier models.~~ **CORRECTED 2026-07-30 at primary
  source.** There is ONE four-tier model. Each tier is paired with a SAMR component:
  AI-Empowered (Redefinition), AI-Enhanced (Modification), AI-Assisted
  (Augmentation), AI-Prohibited (Substitution). The Foundational and Synergistic
  labels do not appear anywhere in the document.

**Flagged tracker-sourced:** Georgia, Oklahoma, Wyoming, New Mexico, Vermont,
Michigan, Maine. Each carries a note in its `verified` field. Georgia matters
most, since v1 calls the traffic light the most portable artifact in the dataset
and it does not appear in the accessible primary text.

**Not yet in `data.js`:** Puerto Rico's five levels are now primary-source
confirmed and are recorded in `VERIFICATION.md`. Add if you extend the map to
territories.

## Corrections still to apply

- **Florida.** Not "no framework." University of Florida's CS Everyone Center
  coordinates a statewide task force with published guidance, and FLDOE holds a
  rulemaking workshop Aug 5 2026. Full detail in `VERIFICATION.md`.
- **Pennsylvania.** No classroom framework, but PDE runs an AI Program
  Endorsement for teacher certification and is sponsoring a Penn State process to
  produce guidance.
- **District of Columbia.** No OSSE guidance, but SR24-12 and a DCPS acceptable
  use policy covering AI.
- **Maryland.** Guidance is published. Add the framework language and the
  compliance list.
- **Texas.** Education was deliberately excluded from HB 149. Duncanville
  workflow confirmed.
- **New Jersey.** ~~Bill develops model curricula only.~~ **THIS CORRECTION WAS WRONG,
  reversed 2026-07-30 at primary source.** A4352 §2(a) reads "Each public institution
  of higher education shall offer certificate and degree programs in artificial
  intelligence." The model curricula in §2(b) assist institutions in meeting that
  requirement. MultiState was right. Still pending, not enacted.
- **Arizona.** HB 4005 vetoed June 19 2026. HB 4040 died in committee.
- **Ohio.** Add the DEW model policy, published Dec 30 2025.
- **California.** Add AB 2148 and the CDE model policy of June 25 2026.
- **The headline count.** Five values are in circulation, from 31 to 35+. Publish
  a sourced range. Do not put a number in the masthead.

## Design system

Do not restyle without reason. The current treatment is deliberate.

**Palette.** Ground `#0C1720`, panel `#132635`, panel-2 `#193243`.
Status colors carry the whole choropleth: mandate `#E9A13B` amber,
guidance `#4FB3A6` teal, no-framework `#6E86A8` indigo.
Text `#E9F1F6`, muted `#90A9BC`.

**Type.** Fraunces for display, Public Sans for body, IBM Plex Mono for data and
labels. Public Sans is the US federal design system typeface, chosen because the
subject is US government education policy. Keep it.

**Signature elements.** The compliance clock rail across the top, showing enacted
deadlines in the order they bite with passed ones filled in. The per-state
"Signature move" callout. The "What this means for higher ed" block.

## Author style rules, apply to all prose in the artifact

- No em-dashes.
- No colons in prose.
- No semicolons.
- Punchy declarative sentences.
- Faculty member and student are the active agents. AI is the instrument.
- Avoid parataxis, chiasmus, and asyndetic tricolon. They read as AI tells.

## Working preferences

Surface options before committing to structural or naming decisions. Report
findings before making changes. Sid makes his own edits and brings revised
versions back, so leave the seams visible rather than over-polishing.

## Suggested first moves in Claude Code

1. `node gen-paths.js && node build.js`, open the HTML, confirm the map renders.
2. Restructure `data.js` to the v2 schema with Ohio, Georgia, Washington,
   New Mexico, Wyoming, and Oklahoma filled in first. Those six carry the
   instruments that matter most.
3. Build the instruments library layer against those six, get the interaction
   right, then backfill the rest.
4. Apply the corrections above.
5. Add the unverified badge and wire it to the four unverified jurisdictions.
