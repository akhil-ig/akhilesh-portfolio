# Akhilesh Chauhan — Portfolio Website

Animated developer-portfolio for Akhilesh Chauhan (Full-Stack Laravel/PHP dev, SaaS-integration specialist). Owner communicates in **Hinglish — reply in Hinglish**.

## Stack & commands

- Vite + React 19, Tailwind CSS v4 (`@tailwindcss/vite` plugin — design tokens live in `src/index.css` under `@theme`, NO tailwind.config file)
- GSAP + ScrollTrigger (scroll reveals via `[data-reveal]` handled centrally in `src/App.jsx`), Lenis smooth scroll (`window.__lenis`)
- `npm run dev` → port 5173 · `npm run build` → `dist/`
- All content (projects, stats, integrations, email) lives in `src/data.js` — edit content there, not in components.

## Design state

- Current: v2 — dark indigo-black `#07070e`, violet accent `#8f7bff` (`--color-accent`), fonts Unbounded (display) / Outfit (body) / JetBrains Mono (labels)
- v1 (OLED black + lime `#c9f24b` + Clash Display) was REJECTED by owner — don't reintroduce lime.
- Owner's taste: colorful, effect-heavy, maximalist — vivid gradients (violet + cyan/pink), glassmorphism (backdrop-blur frosted cards), glows, generous animations. His own product (SSPOC app) uses indigo→purple gradients. Show bold versions and iterate on reaction; he dislikes option-picker dialogs.
- Respect `prefers-reduced-motion` (already wired in App.jsx + CSS).

## Deployment

Live at **https://akhil-ig.github.io/akhilesh-portfolio/** via GitHub Pages.
`.github/workflows/deploy.yml` builds and deploys on every push to `main` — nothing to do by hand.

`base: './'` plus the `asset()` helper in `src/data.js` keep the same build working at both a repo
subpath and a domain root, so adding a custom domain later needs no rebuild config change.

Pending: owner is claiming **akki.is-a.dev** (free) — PR to `is-a-dev/register` with a CNAME to
`akhil-ig.github.io`. Once merged, add `public/CNAME` containing `akki.is-a.dev` and set the custom
domain in repo settings. Note: is-a.dev's README asks people **not** to use AI to generate the
request JSON, so let the owner write that file himself.

## Pending work

1. Admin panel (admin.ssphysiotherapyandorthocare.in) inner screenshots — owner logs in himself; Claude must never enter credentials.
2. More real screenshots for the remaining private systems (hospital software, etc.) if he wants them showcased.

## Notes

- Screenshots in `public/shots/` are all webp. Live-site shots were captured with playwright-core +
  system Chrome (`channel: 'chrome'`) at 1440×900; squareedgeconsulting.com needs ~9s extra wait for its
  loader. SSPOC images came from the owner (laptop + 3-phone mockups he made) and were downscaled to
  webp via a canvas pass in headless Chrome — same trick works for any future image.
- Owner profile (portfolio content source): 6+ yrs PHP/Laravel; 2+ yrs SaaS; integrations expert — MYOB Advanced (expert), Lightspeed, NetSuite, HubSpot ↔ Shopify/WordPress; domains: fintech, PMS, e-commerce, ERP, POS, inventory, hospital software, attendance+payroll; tech: Livewire, Vue, WebRTC, Bootstrap, Tailwind.
- Contact details for the site live in `src/data.js` (EMAIL / PHONE / LINKEDIN). **Never put his employer's
  domain or company name anywhere in this portfolio** — it is his personal site, and the company domain
  that appears in some tooling contexts is his employer's, not his. Use his personal Gmail only.
