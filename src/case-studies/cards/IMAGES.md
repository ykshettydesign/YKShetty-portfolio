# Card Management — image drop-in guide

Real images go in **`public/case-studies/cards/images/`** (served at the URL
`/case-studies/cards/images/<file>`). Vite serves everything in `public/` as-is,
so add or replace files here without touching any layout code — just match the
filenames below. Until a file exists, its figure renders a clearly-styled
placeholder showing the alt text, so the layout never breaks.

Map from the screens you already exported → the filename to save it as:

| Filename | Which of your exports | Where it appears | Module |
|---|---|---|---|
| `01-hero.png` | Final **Manage card** landing (single phone: card + “This card is active” + limits) | Hero, primary device | `HeroShowcase` |
| `02-all-cards.png` | **All cards** overview (grid of debit-card tiles with search) | Hero, secondary device | `HeroShowcase` |
| `03-current-journey.png` | The **service blueprint / current customer journey** for changing a card limit (touchpoints · actions · pain points · questions) | The problem | `ImageFigure` (wide) |
| `04-workshop.png` | A **whiteboard** photo from the workshop (Usage / Problem clusters + “How might we…”) | How I approached it | `ImageFigure` |
| `05-landing-explorations.png` | The **six landing-page variations** (light backgrounds) | The hard part was translation | `ImageFigure` (wide) |
| `06-limit-explorations.png` | The **limit-change component variations** (5 cards: preset chips, amount fields, keypad) | The hard part was translation | `ImageFigure` (wide) |
| `08-manage-card-final.png` | Final **Manage card** landing showing limits + Manage payments + Delete (can be the taller/scrolled composite) | Decision 01 | `DecisionBlock` media |
| `09-manage-payments.png` | The **Manage payments** toggles (Remote payment / Cash withdraw / Payment abroad) | Decision 02 | `DecisionBlock` media |
| `10-limit-change-final.png` | The final **Limit Change** flow (6 screens on dark bg: amount → summary → PIN → success) | Decision 03 | `DecisionBlock` media |
| `11-block-card.png` | The **Block Card** screens (confirm sheet + blocked state with padlock + Unblock) | Decision 04 | `DecisionBlock` media |
| `13-emerald-cards.png` | The **card family** art (Visa Classic / Infinite / Business / Premier) | Built on Emerald | `ImageFigure` |
| `14-delete-card.png` | The final **Delete Card** flow (6 screens: reason → replacement/PIN → confirm details → summary → success) | What we kept with a human | `ImageFigure` (wide) |

Notes:
- `07` and `12` are intentionally unused (kept the numbering aligned to the flows
  above); no file needed for them.
- **Optional cover for the home page:** save a `cover.jpg` here too, then set
  `cover: '/case-studies/cards/images/cover.jpg'` on the `cards` entry in
  `src/data/content.js`. Until then the home card shows a neutral placeholder.
- The user-flow diagrams (Limit change / Block & manage payments) aren't wired in
  by default. If you'd like one in, add e.g. `12-flow-limit-change.png` and I can
  slot an `ImageFigure` into “How I approached it”.

The base path is defined once in `index.mdx` as `IMAGES`. Alt text lives inline
in the MDX next to each image.
