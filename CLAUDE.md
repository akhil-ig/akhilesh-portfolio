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

## Pending work (priority order)

1. **Glassmorphism + more-colorful redesign** — owner's explicit last feedback: "aur attractive, glass effect, colorful, aur animations". Not started.
2. SSPOC screenshots missing: owner must add `public/shots/sspoc-admin.png`, `sspoc-home.png`, `sspoc-history.png`, `sspoc-leave.png`. Featured card in `src/components/Projects.jsx` auto-falls-back to a "coming soon" SVG until then.
3. `npm run build` never run yet — test before deploy.
4. Deploy target: Hostinger Business plan (supports Vite/React Node web apps).
5. Admin panel (admin.ssphysiotherapyandorthocare.in) inner screenshots — owner logs in himself; Claude must never enter credentials.

## Notes

- Live-site screenshots in `public/shots/` were captured with playwright-core + system Chrome (`channel: 'chrome'`), viewport 1440×900; squareedgeconsulting.com needs ~9s extra wait for its loader.
- Owner profile (portfolio content source): 6+ yrs PHP/Laravel; 2+ yrs SaaS; integrations expert — MYOB Advanced (expert), Lightspeed, NetSuite, HubSpot ↔ Shopify/WordPress; domains: fintech, PMS, e-commerce, ERP, POS, inventory, hospital software, attendance+payroll; tech: Livewire, Vue, WebRTC, Bootstrap, Tailwind; email akhilesh@saasintegrator.com.
