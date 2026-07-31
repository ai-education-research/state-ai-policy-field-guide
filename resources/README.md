# Resources — Primary-Source Link Ledger

One folder per jurisdiction (50 states + District of Columbia + Puerto Rico = 52).
Each `sources.md` records every primary document with a verified URL, its
`link_status`, and a `downloaded: [ ]` checkbox for documents worth holding in
original form.

Built 2026-07-29 by a parallel research pass. Rule applied: every URL recorded
was actually fetched by an agent, or is recorded with the error it returned.
No URLs were guessed or constructed.

## link_status legend

| Status | Meaning |
|---|---|
| `verified-pdf` | A real PDF (or .docx) binary was fetched at this URL. Ready to download. |
| `verified-page` | An agency/legislature web page was fetched; content is web-native or JS-rendered, so capture via print-to-PDF or authenticated access. |
| `unretrievable` | The document exists but the canonical URL 403'd, 404'd, or is bot-blocked. Needs human eyes or an archive. |
| `not-found` | No official document located. For absence states this supports the "no guidance" claim; for others it flags a gap. |

## Corrections and findings that surfaced during this pass

These change what VERIFICATION.md and data.js currently say. Listed most load-bearing first.

1. **Georgia traffic light — CONFIRMED at primary source (reverses the July 28 correction).**
   Read directly from the machine-readable Jan 2025 GaDOE PDF, page 12. RED/YELLOW/GREEN
   is real, but it is adapted from Phil Hintz's THINK guide, not original to GaDOE.
   The tool-evaluation rubric is also confirmed (page 10). See `Georgia/sources.md`.

2. **Georgia SB 179 — likely a citation error.** No GA SB 179 on K-12 AI exists;
   the deadline attributed to it needs re-sourcing. See `Georgia/sources.md`.

3. **New Jersey — the bill DOES mandate degree/certificate programs.** The introduced
   A4352 text reads "Each public institution of higher education shall offer certificate
   and degree programs in artificial intelligence." This partially reverses the July 28
   correction; the higher-ed hook is stronger, not weaker. See `New Jersey/sources.md`.

4. **Washington — RESOLVED, and it reverses the July 28 correction.** OSPI's scale is a
   FIVE-level student AI-permission scale (No AI Assistance / AI-Assisted Brainstorming /
   AI-Supported Drafting / AI-Collaborative Creation / AI as Co-Creator), confirmed from
   primary text in the main guidance AND both standalone companion PDFs. There is NO
   four-step teacher-support matrix anywhere in OSPI's documents. The July 28 rewrite was
   wrong; the original v1 claim was right. The two companions were never dead — the prior
   404 was a mistyped URL (missing hyphens). Both are now downloaded. Revert the Washington
   change in VERIFICATION.md and data.js. See `Washington/sources.md`.

5. **New Mexico, Wyoming, Wisconsin — upgraded tracker → primary.** All three PDFs
   (previously dead/inaccessible) were retrieved and read. New Mexico's AIAS level names,
   Wyoming's four-stage continuum with its explicit Perkins/Furze/Roe/MacVaugh attribution,
   and Wisconsin's five training pillars are now verbatim-confirmed.

6. **Utah SB 322 — FAILED March 6, 2026,** not "pending" as data.js states. And the Utah
   framework has an edition ambiguity (2024 vs Feb 2026). See `Utah/sources.md`.

7. **Texas HB 149 carve-out is specifically higher-ed,** not a blanket K-12 exclusion.
   See `Texas/sources.md`.

8. **Washington ESHB 2225 mis-scoped** in data.js — it regulates consumer AI companion
   chatbots, not K-12 reporting. See `Washington/sources.md`.

## Documents still needing human eyes

- **Washington** — v1 (Jan 2024) scale + the two 404'd instrument download PDFs.
- **Utah** — framework PDF (text not extractable; confirm 2024 vs 2026 edition).
- **Illinois** — the 409-page guidance (too large to auto-read; the teacher-eval distinction).
- **North Carolina** — living Google Doc (CRAFT framework unconfirmed).
- **Hawaii** — guidance Google Docs behind HIDOE login.
- **Michigan** — michigan.gov / Michigan Virtual URLs bot-blocked (403).
- **Illinois / Virginia** — JS-rendered legislature pages need LegiScan fallback or browser.
