# Yogesh Shetty — Portfolio (Nocturne) · React + Vite

## Folder structure

```
react-portfolio/
├── index.html                  # Vite entry point
├── package.json
├── vite.config.js
├── public/
│   └── assets/                 # Static assets (images, SVGs, resume PDF)
│       ├── portrait.png
│       ├── tokenmap.svg
│       ├── intent.svg
│       ├── logos_focal.svg
│       └── resume.pdf
└── src/
    ├── main.jsx                # React root
    ├── App.jsx                 # Layout assembly
    ├── styles/
    │   └── global.css          # Reset, keyframes, responsive, class-toggle states
    └── components/
        ├── Header.jsx          # Sticky nav + mobile hamburger (useState)
        ├── Hero.jsx            # Sequenced chat animation (useEffect timers)
        ├── Work.jsx            # Drag-drop card board + detail reader (useRef + pointer events + rAF loop)
        ├── Practice.jsx        # Process timeline (static)
        ├── Instruments.jsx     # Figma plugin cards (static)
        ├── About.jsx           # Bio + testimonial spread (mouseover + dynamic stylesheet)
        └── Footer.jsx          # Contact + links (static)
```

## Setup

```bash
cd react-portfolio
npm install
npm run dev
```

## Before running — asset setup

Copy your assets into `public/assets/`:
- `portrait.png` — your headshot
- `tokenmap.svg`, `intent.svg`, `logos_focal.svg` — instrument logos
- `resume.pdf` — downloadable résumé

All `src` references use `/assets/…` which Vite resolves from `public/`.

## How animations were preserved

| Original mechanism | React equivalent |
|---|---|
| `data-hero-step` body attribute + CSS selectors | `useState(step)` → className `hero-step-N` on `<section>` + same CSS selectors in `global.css` |
| `setTimeout` chains for hero sequence | `useEffect` + `useRef` timer array, cleanup on unmount |
| Pointer events on card DOM nodes + `requestAnimationFrame` loop | `useEffect` wires `pointerdown/move/up` on card refs, rAF loop reads/writes `useRef` state objects |
| `IntersectionObserver` nudge | Created inside `useEffect`, disconnected on cleanup |
| Spread card hover via injected `<style>` sheet | `useEffect` creates `<style>` element, `mouseover`/`click` handlers call `applySpread(idx)` |
| `el.animate()` Web Animations API (strike-through, bubble) | Same API called via `useRef` inside `useEffect` |
| Mobile menu toggle via body attribute | `useState(mobileOpen)` → className on `<header>` |

**Zero `document.getElementById` / `querySelector` in component render paths** — all direct DOM access uses React refs. The spread testimonial uses `document.querySelectorAll('[data-spread-card]')` only inside event handlers (outside React's tree) to find hover index.

## CSS strategy

- `global.css` holds: reset, `@keyframes`, hero step transitions, card classes, spread card base styles, and responsive `@media` queries.
- All component styles are **inline** (matching the original), so no CSS modules or styled-components needed.
- Class toggles (`.mobile-menu-open`, `.hero-step-N`) are driven by React state and applied via `className`.

## Build for production

```bash
npm run build     # outputs to dist/
npm run preview   # serves the build locally
```
