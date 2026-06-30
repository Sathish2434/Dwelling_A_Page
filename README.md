# Dwelling

A single-page, responsive web application for **Dwelling** — a premium, modern
real-estate platform that showcases curated apartments, lofts and independent
houses for working professionals.

Built as a frontend assignment for **Pegasus Consulting** (Junior Frontend
Developer). The focus is on UI/UX execution: typography, colour harmony, visual
hierarchy, component polish and responsiveness.

## Highlights

- **Brand introduction & hero** — editorial typography (Fraunces + Inter), a warm
  premium palette, floating accent cards and clear primary CTAs.
- **Featured properties** — filterable collection (Apartment / Loft / House /
  Penthouse) with rich cards: price, location, BHK, square footage, tags and
  hover interactions (image zoom, lift, reveal CTA).
- **Locality insights (interactive)** — switch between localities to see live
  market signals: average price/sq ft, YoY price trend with up/down indicators,
  animated safety & walkability scores, metro distance and nearby amenities.
- **Schedule a visit** — a polished contact form with custom focus states,
  pick-a-property dropdown, date picker, validation and an animated success state.
- **Fully responsive** — adapts cleanly from wide desktop down to mobile.

## Tech stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)

Imagery: [Unsplash](https://unsplash.com/). Icons: custom inline SVG.

## Getting started

```bash
npm install
npm run dev        # start the dev server
npm run build      # type-check + production build
npm run preview    # preview the production build
npm run lint       # lint with oxlint
```

## Deployment

The app deploys automatically to **GitHub Pages** via GitHub Actions
(`.github/workflows/deploy.yml`) on every push to `main`. The Vite `base` path is
derived from the repository name at build time (`VITE_BASE`), so it works under a
project-pages URL such as `https://<user>.github.io/<repo>/`.
