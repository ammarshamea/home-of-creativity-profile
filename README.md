# Home of Creativity — Company Profile

Premium bilingual (Arabic / English) company profile for **Home of Creativity (Creativation Source)** — a brand architect and creative-tech partner.

## Stack

- Next.js App Router, TypeScript, Tailwind CSS v4, Framer Motion

## Run

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm start
```

## Design system

Brand tokens live as CSS variables on `:root` in `app/globals.css` (`--brand-purple`, `--brand-orange`, `--brand-teal`, fonts, `--logo-path`). The hummingbird mark is an SVG in `components/brand.tsx` and `public/hummingbird.svg` so identity can be swapped later.

Language preference persists in `localStorage` (`hoc-locale`) and sets `dir` / `lang` on `<html>`.

Portfolio art is mapped from `public/profile-pages/page-01.jpg` … `page-50.jpg`.
