# reynel.pro — Reynel Elerio portfolio

Two pages: Home (/) and Work (/work). React 18 + Vite + Tailwind + Framer Motion on the client, Express on the server (serves the site and the contact form API).

## Editing content
All copy, builds, reports, dashboards, experience and toolkit live in `client/src/lib/content.ts`.
- Add a build screenshot: drop a .webp/.png in `client/src/assets/builds/`, import it at the top of content.ts, add it to that build's `shots`.
- Report images: `client/src/assets/reports/<report-id>-<n>.webp` are picked up automatically.
- Dashboards: `client/src/assets/dashboards/dash-<n>.webp`.

## Design
- Colors: original light-blue theme tokens in `client/src/index.css` (light primary 205 85% 41% for AA contrast; dark 205 80% 55%).
- Font: Schibsted Grotesk, self-hosted via @fontsource-variable.
- Theme follows the visitor's system setting; the nav toggle overrides and remembers it.
- Motion: decrypting hero headline (DecryptText.tsx; hover a line to re-scramble), scroll-pinned screenshot deck (desktop), canvas data flow through the pipeline (DataFlow.tsx), sticky crossfade on /work. All motion respects reduced-motion; the canvas only runs while on screen.

## Old routes
/about, /experience, /skills -> /#about; /contact -> /#contact; /projects -> /work#analysis; /dashboards -> /work#dashboards.

## Contact form
POST /api/contact sends via the Replit Resend integration to ibecomewhatithink@gmail.com (reply-to = sender).

## Running
`npm install`, then `npm run dev` (port 5000). Deploy: build `npm run build`, run `node ./dist/index.cjs` (already set in .replit).
