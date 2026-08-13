# Postbox — image drop-in guide

Real images go in **`public/case-studies/postbox/images/`** (served at the URL
`/case-studies/postbox/images/<file>`). Vite serves everything in `public/` as-is,
so add or replace files here without touching any layout code — just match the
filenames below. Until a file exists, its figure renders a clearly-styled
placeholder showing the alt text, so the layout never breaks.

Map from the Postbox screens you exported → the filename to save it as:

| Filename | Which of your exports | Where it appears | Module |
|---|---|---|---|
| `01-hero.png` | The redesigned **Postbox home** — phone + web, opening on the search field with recent documents beneath | Hero | `HeroShowcase` (bare) |
| `02-current-journey.png` | The **old retrieval journey / friction map** — folder navigation → weak search → failed export → "contact RM" | The problem | `ImageFigure` (wide) |
| `03-journey-map.png` | The synthesised **customer journey map + persona**, annotated with the three drop-off points | Define | `ImageFigure` (wide) |
| `04-workshops.png` | **Workshop wall / low-fi sketches** — search-led layout explorations with stakeholder notes | Ideate | `ImageFigure` |
| `05-prototype.png` | The **high-fidelity prototype** — search-first landing, cross-folder results, bulk-download/archive controls | Ideate | `ImageFigure` (wide) |
| `06-usability-test.png` | The **two web versions + one app version** shown together, annotated with tester ratings (mark the 8.5/10 winner) | Usability testing | `ImageFigure` (wide) |
| `07-search-first.png` | Final **search-first landing** returning live cross-folder results (single phone) | Decision 01 · Interaction | `DecisionBlock` media (portrait) |
| `08-naming-limits.png` | A **document row** with a human-readable name + the **download-limit** message shown up front | Decision 02 · Clarity | `DecisionBlock` media |
| `09-bulk-actions.png` | The list in **multi-select mode** with **bulk download / archive** as primary actions | Decision 03 · Interaction | `DecisionBlock` media |
| `10-notification-center.png` | The **Notification Preference Center** — channel (email / SMS / push) + frequency toggles (single phone) | Decision 04 · Trust | `DecisionBlock` media (portrait) |
| `11-app-designs.png` | The **final app screens** across iOS & Android in the premium visual language (composite is fine) | Visual design | `ImageFigure` (wide) |
| `12-landing-web.png` | The **Postbox landing on web** — same search-first structure on the larger canvas | Visual design | `ImageFigure` |

Notes:
- **Portrait vs. wide:** `07` and `10` are set as `portrait` device shots (single
  phone screens). `08` and `09` render as standard figures — use a cropped
  component/detail rather than a full screen so they read at that size.
- **Optional cover for the home page:** save a `cover.jpg` here too — the
  `postbox` entry in `src/data/content.js` already points `cover` at
  `/case-studies/postbox/images/cover.jpg`. Until the file exists the home card
  shows a neutral placeholder.
- If you only have a **combined app + web hero**, `01-hero.png` alone is enough —
  the hero is `bare`, so it renders your image full-width without a device frame.
- No image is wired for the **Discover** section by design — the analytics and
  research findings live in an `InsightGrid` (text + icons), which reads more
  cleanly than a screenshot of a dashboard.

The base path is defined once in `index.mdx` as `IMAGES`. Alt text lives inline
in the MDX next to each image.
