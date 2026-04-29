# nexteducationai.org

Сайт NextEducationAI — освітньої ініціативи NGO "Демократична інформаційна ініціатива".

## Stack
- Next.js 15 (App Router) with `output: 'export'`
- TypeScript
- Tailwind CSS
- GitHub Pages deploy via Actions
- Custom domain: `nexteducationai.org`

## Local dev
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```
Output goes to `out/` and is published to `gh-pages` branch by GitHub Actions.

## Deploy
Push to `main` → GitHub Action builds and pushes static output to `gh-pages` branch.
DNS for `nexteducationai.org` should point A-records at GitHub Pages IPs (see `01_PROJECTS/NextEDUAI/03_site/site_rebuild_plan.md` in the Obsidian vault).

## Structure
- `app/` — Next.js App Router pages, locale-segmented under `[locale]/`
- `lib/content.ts` — all copy in UA + EN as a single source of truth
- `components/` — shared Header, Footer, and section components
- `public/` — `CNAME`, `.nojekyll`, static assets
