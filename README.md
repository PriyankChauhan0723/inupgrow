# INUPGRO

Next.js frontend for INUPGRO: Learn Smarter. Teach Better. Grow Digitally.

## Tech stack

- **Next.js** 16 (App Router)
- **TypeScript**
- **Tailwind CSS** v4

## Setup & run

```bash
# Install dependencies
npm install

# Development (with Turbopack)
npm run dev

# Production build
npm run build

# Start production server (after build)
npm start
```

- Dev: [http://localhost:3000](http://localhost:3000)
- Lint: `npm run lint`

## Project structure

- `app/` – App Router: `page.tsx`, `layout.tsx`, `globals.css`
- `components/` – Reusable UI: Header, HeroSection, Footer, section components, ArrowButton, SectionTitle, StatsSlider, ScrollProgressBar
- `data/` – Shared data (e.g. `sliderData.ts`)
- `public/` – Static assets and images

## Design & quality

- **Component-based**: Header, Hero, sections, cards, Footer, and buttons are separate components.
- **Responsive**: Layout from 320px upward; no horizontal scroll (overflow-x hidden).
- **Animations**: Scroll-based (e.g. stats slider), hover/click transitions, CSS/Tailwind utilities.
- **Accessibility**: Semantic HTML, `aria-label` / `aria-hidden` where needed, visible keyboard focus (`:focus-visible`), labeled form inputs.
- **Performance**: Next.js `Image` with `priority` on hero asset; optimized production build.

## Deployment

After `npm run build`, run `npm start` or deploy the `.next` output to any Node-compatible host vercel.