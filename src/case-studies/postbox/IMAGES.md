# Postbox — image drop-in guide

Real images go in **`public/case-studies/postbox/images/`** (served at the URL
`/case-studies/postbox/images/<file>`). Vite serves everything in `public/` as-is,
so add or replace files here without touching any layout code — just match the
filenames below. Until a file exists, its figure renders a clearly-styled
placeholder showing the alt text, so the layout never breaks.

**Status:** every slot below is filled from the detailed "mailbox" version of the
case study. Swap any file for a better export by keeping the same filename.

| Filename | What it is | Where it appears | Module |
|---|---|---|---|
| `01-hero.png` | Postbox on phone + desktop under ABN AMRO branding, with the "1" notification badge | Hero | `HeroShowcase` (bare) |
| `02-persona.png` | The **persona "Peter"** — bio, core needs, frustrations, platform, savviness/literacy meters | Define | `ImageFigure` |
| `03-journey-map.png` | The full **customer journey map** — phases, touchpoints, the emotion curve (Normal → Disappointed → Confused → Angry → slightly happy), Critical Points paired with Solutions | Define | `ImageFigure` (wide) |
| `04-workshops.png` | **Workshop sketches + low-fi wireframes** (paper sketches above, digital lo-fi below) | Ideate | `ImageFigure` |
| `05-prototype.png` | The **high-fidelity web prototype** — task landing, report view, and the tested version screens | Ideate | `ImageFigure` (wide) |
| `06-usability-test.png` | The tested **desktop + mobile versions annotated** with tester feedback (what held up / what to change) | Usability testing | `ImageFigure` (wide) |
| `07-search-first.png` | Mobile **search-first landing** — search field above Inbox/Archive tabs, sort + filter, document list | Decision 01 · Interaction | `DecisionBlock` media |
| `08-naming-limits.png` | Multi-select download screen with the **"56mb / 50mb" limit warning** in orange | Decision 02 · Clarity | `DecisionBlock` media |
| `09-bulk-actions.png` | Multi-select → **bulk export as one ZIP** via the native share sheet | Decision 03 · Interaction | `DecisionBlock` media |
| `11-app-designs.png` | The **responsive UI across phone / laptop / tablet** on the Emerald design system (also used as the home-page cover) | Visual design | `ImageFigure` (wide) |
| `12-landing-web.png` | The **full Postbox web page** — filter panel, document list, pagination | Visual design | `ImageFigure` |

Notes:
- **`10-notification-center.png` is intentionally unused.** Decision 04
  (customisable notification preferences) is text-only — the source deck had no
  dedicated notification-settings screenshot. If you export one later, drop it in
  as `10-notification-center.png` and re-add a `media={…}` block to that
  `DecisionBlock`.
- The app screens (`07`–`09`) already include an iPhone bezel, so they render as
  plain figures — **no `portrait` device shell** is applied (that would double the
  frame).
- **The problem** section is intentionally text-only — a verbatim Usabilla client
  quote, no figure.
- No image is wired for the **Discover** section by design — the analytics and
  Usabilla findings live in an `InsightGrid` (text + icons), which reads more
  cleanly than a dashboard screenshot.
- **Home-page cover:** `src/data/content.js` points the `postbox` cover at
  `11-app-designs.png`. Swap it there if you'd prefer a different card image.

The base path is defined once in `index.mdx` as `IMAGES`. Alt text lives inline
in the MDX next to each image.
