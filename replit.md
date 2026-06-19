# Qrux Studios — Web Design Agency Landing Page

Electric Brutalist web design agency landing page for Qrux Studios (Bangalore, India), heavily inspired by nvrmndstudio.com. Built with React + Vite + Tailwind CSS + custom fonts.

## Run & Operate

- `pnpm --filter @workspace/agency-landing run dev` — run the landing page (uses PORT env var)
- `pnpm run typecheck` — full typecheck across all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite + Tailwind CSS (no backend needed — static landing page)
- Fonts: SF Pro Display (all 18 weights/styles), OffBit Trial, OffBit 101, OffBit Dot
- No database (static content)

## Where things live

- `artifacts/agency-landing/src/pages/Home.tsx` — main page assembling all sections
- `artifacts/agency-landing/src/components/` — Nav, Hero, About, Work, Process, Services, Testimonials, Pricing, Contact, Footer
- `artifacts/agency-landing/src/index.css` — all font-face declarations + CSS custom properties + all responsive breakpoints
- `artifacts/agency-landing/public/fonts/sf-pro/` — all SF Pro Display .otf files
- `artifacts/agency-landing/public/fonts/offbit/` — all OffBit .ttf files

## Architecture decisions

- Static landing page only — no API or DB needed.
- All fonts loaded via @font-face from `/public/fonts/` — no Google Fonts or CDN dependency.
- CSS custom properties (`--color-*`, `--font-*`) for all design tokens.
- 4-column grid overlay via fixed position `div.grid-overlay`.
- Contact form uses `window.location.href = mailto:...` — opens system email client with all fields pre-filled. No backend or third-party service required.
- OffBit Dot Bold used for the giant footer wordmark "QRUX".

## Brand / Content

- Agency: Qrux Studios
- Location: Bangalore, India
- Email: yuvarajdhongadi@gmail.com
- Phone/WhatsApp: +91 7892653131
- Projects showcased: Oviguide.in, AlphaJEE.com, IsotopeAI.in, OviBattle.in
- Price: ₹15,000 one-time (Qrux Foundation Package)
- Testimonials: Ramesh Iyer (CA firm), Ananya Krishnan (interior design), Dr. Priya Reddy (dental clinic)
- YouTube embed: https://www.youtube.com/embed/_YuEK6fhidE in contact section

## Product

A single-page landing page with: hero, about, work showcase (4 case studies), process (MAP/MAKE/MOVE), services (3 tiers), testimonials (slider with 3 Indian clients), pricing (₹15,000 package + newsletter), contact form (3-section NVRMND-style with mailto), footer with QRUX dot-matrix wordmark.

## Responsive breakpoints

- `≤1024px` (tablet): process 2-col, contact/pricing stack
- `≤768px` (mobile): all sections single column, grid overlay hidden, "BANGALORE, INDIA" label hidden, contact form fields stack
- `≤480px` (small phone): smaller headline, smaller footer labels

## User preferences

- Exactly replicate nvrmndstudio.com layout, spacing, and typography
- Use SF Pro Display + OffBit fonts (uploaded as zips)
- React + Vite + Tailwind CSS
- No emojis anywhere — use SVG graphics instead
- Content from PRD (Qrux Studios), not redesign
- Contact form uses mailto: yuvarajdhongadi@gmail.com (no Formspree or other external)

## Gotchas

- Fonts are served from `/public/fonts/` — if fonts don't load, check that the workflow is running
- SF Pro Display has 18 variants (9 weights × 2 styles) — all declared in index.css
- OffBit has 4 sub-families: Trial, 101, Dot — each registered separately
- Contact form: `window.location.href = mailto:...` — opens system email client. Works on desktop. On some mobile browsers, may need user to have a mail app installed.
- Always run typecheck before building: `pnpm --filter @workspace/agency-landing run typecheck`

## Pointers

- See the `pnpm-workspace` skill for workspace structure
