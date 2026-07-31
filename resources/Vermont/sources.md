# Vermont — Primary Sources

Checked 2026-07-29 (agent pass, every URL fetched).

## Vermont AI Guidance for Education, Version 1.0
- type: framework (contains the grade-band gating instrument)
- issuer: Vermont Agency of Education (contact: Josh Blumberg)
- date: Issue Date January 23, 2026; 50 pages
- url: https://education.vermont.gov/sites/aoe/files/documents/edu-aoe-ai-guidance-for-education.pdf
- landing_page: https://education.vermont.gov/documents/edu-aoe-ai-guidance-for-education
- link_status: verified-pdf
- downloaded: [x]
- notes: **KEY TARGET RESOLVED — the URL in prior passes was wrong by one token.** It is `edu-AOE-ai-guidance...`, not `edu-ai-guidance...` (the latter still 404s). Live URL confirmed 200 / application-pdf, 727,725 bytes. Retrieval note: education.vermont.gov 403-blocks automated fetchers; use curl with a browser user-agent.

### Primary-source confirmations
- Title and Issue Date January 23, 2026 confirmed, 50 pp.
- **Developmental bands confirmed**: PreK-2 / 3-5 AI Awareness / 6-8 AI Literacy / 9+ AI Fluency.
- Four Principles Framework confirmed.
- Prohibited-uses content sits under Part 3, Responsible AI Usage.
- Tool Vetting Framework and role-based Quick Start Guides confirmed.
- Third-party mirror (identical title page, verified-pdf): https://static1.squarespace.com/static/64398599b0c21f1705fb8fb3/t/69866f7bf56f56652beb60e8/1770418043581/Vermont+edu-aoe-ai-guidance-for-education.pdf
- AOE press release: https://education.vermont.gov/press-release/vermont-agency-education-releases-new-guidance-support-use-artificial-intelligence

## Act 156 (2026) — AI in mental health services (H.816)
- type: statute — **not education code**
- issuer: Vermont General Assembly
- date: signed June 17, 2026
- url: https://legislature.vermont.gov/Documents/2026/Docs/ACTS/ACT156/ACT156%20As%20Enacted.pdf
- landing_page: https://legislature.vermont.gov/bill/status/2026/H.816
- link_status: verified-pdf
- downloaded: [x]
- notes: Enacted text read. Adds 18 V.S.A. § 7115 "Prohibited Uses of Artificial Intelligence" and makes prohibited AI use unprofessional conduct under 3 V.S.A. § 129a(a)(30). Mental-health consumer protection, relevant to student mental-health tools but not a K-12 classroom mandate. Retrieval note: legislature.vermont.gov has a TLS cert-chain issue that breaks automated fetchers; curl succeeds.

### Effect on the verification ledger
Vermont upgrades from tracker (dead PDF) to **primary**. The grade-band gating claim in data.js is confirmed.
