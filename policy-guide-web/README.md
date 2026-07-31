# State AI Policy Field Guide website

Maintainable source for the interactive higher-education guide. The application is generated from the research corpus one directory above and produces a self-contained HTML deliverable.

## Content sources

- `../analysis/*.md`: 52 jurisdiction profiles
- `../cross-state-ai-policy-comparison.md`: comparison matrix and posture metadata
- `../k12-frameworks-universities-can-adopt.md`: ten practice families
- `../ai-readiness-brief.md`: overview narrative
- `../higher-education-ai-readiness-guidelines.md`: readiness guidance and roadmap
- `../resources/<Jurisdiction>/sources.md`: recorded primary-source URLs
- `../state-ai-policy-field-map.html`: existing SVG map geometry only

Generated content is written to `src/generated/`. Do not edit those JSON files by hand.

## Commands

```bash
pnpm generate  # refresh structured content from the research corpus
pnpm dev       # local development server
pnpm build     # production application build
pnpm bundle    # rebuild and create the self-contained bundle.html
```

The directly openable distributable is `release/index.html`. `bundle.html` is an identical copy.

The project-root `index.html` is a development entry point and requires `pnpm dev`; it is not intended to be opened directly from Finder.
