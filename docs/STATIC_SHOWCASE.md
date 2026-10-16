# Static showcase deployment

This browser-only edition preserves industry mapping, company filtering, evidence dialogs, source links, comparison matrices, scenario calculations, and research snapshot export. It makes no application API requests, uses no database or API credentials, and hides AI/data integration controls. The full server implementation remains unchanged in app/ and lib/.

Build: `npm run build:showcase`
Output directory: `showcase-dist`
Framework preset: Vite / Other
Root directory: repository root
No server deployment command is needed for static hosting. Upload the contents of showcase-dist, with index.html at the hosting root. All rendering assets are bundled locally; original evidence and GitHub links remain external.

Verification: TypeScript check and static production build passed on 2026-10-16. No browser QA or mainland-China network verification has been completed for this edition. A live hosting URL is still required. Use a free plan; task budget is no more than CNY20 total, and no paid resource has been purchased.
