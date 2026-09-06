# Home of Creativity — Company Profile

Premium bilingual (Arabic / English) company profile for **Home of Creativity (Creativation Source)** — a brand architect and creative-tech partner.

## Live site

**https://ammarshamea.github.io/home-of-creativity-profile/**

This is a GitHub Pages **project** site. Next.js is configured with `basePath` and `assetPrefix` set to `/home-of-creativity-profile`, so routes, `next/image`, and public assets (`/profile-pages/…`, `/hummingbird.svg`) resolve under that prefix.

Local `npm run dev` is at **http://localhost:3000/home-of-creativity-profile/** — not the server root.

## Stack

- Next.js App Router (static export), TypeScript, Tailwind CSS v4, Framer Motion

## Run

```bash
npm install
npm run dev
```

Production is a static export (`output: 'export'`). GitHub Actions runs `npm ci && npm run build` and deploys the `out/` folder.

```bash
npm run build
npx --yes serve out
```

Do not use `next start` for this project; there is no Node server in production.

## GitHub Pages source

Pages must use **GitHub Actions** as the publishing source (not “Deploy from a branch”). The workflow is `.github/workflows/deploy-pages.yml` and runs on push to `main`.

If the site still serves raw repository files after merge, switch **Settings → Pages → Source** to **GitHub Actions**.

## Design system

Brand tokens live as CSS variables on `:root` in `app/globals.css` (`--brand-purple`, `--brand-orange`, `--brand-teal`, fonts, `--logo-path`). The hummingbird mark is an SVG in `components/brand.tsx` and `public/hummingbird.svg` so identity can be swapped later.

Language preference persists in `localStorage` (`hoc-locale`) and sets `dir` / `lang` on `<html>`.

Portfolio art is mapped from `public/profile-pages/page-01.jpg` … `page-50.jpg`.
