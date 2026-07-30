# SwiftSort — image drop-in guide

Real images go in **`public/case-studies/swiftsort/images/`** (served at the URL
`/case-studies/swiftsort/images/<file>`). Vite serves everything in `public/`
as-is, so you can add or replace files here without touching any layout code —
just match the filenames below. Until a file exists, its `<ImageFigure>` renders
a clearly-styled placeholder showing the alt text, so the layout never breaks.

| Filename | Where it appears | Module |
|---|---|---|
| `01-hero.png` | Top of page — final SwiftSort tablet screen | `ImageFigure` (fullBleed) |
| `02-illustration-scan.png` | "What the old workflow looked like" — comic panel 1 | `IllustrationRow` |
| `03-illustration-read.png` | …comic panel 2 | `IllustrationRow` |
| `04-illustration-mental-lookup.png` | …comic panel 3 | `IllustrationRow` |
| `05-research-synthesis.png` | "How I approached it" | `ImageFigure` (wide) |
| `06-reframe-before.png` | "The moment that changed the design" — before | `BeforeAfter` |
| `07-reframe-after.png` | …after | `BeforeAfter` |
| `08-workflow-after.png` | "How the workflow shrank" | `ImageFigure` (wide) |
| `09-qr-scan-or-tap.png` | Decision 01 | `ImageFigure` |
| `10-lifo-layout.png` | Decision 03 | `ImageFigure` |
| `11-stacking-mode.png` | Decision 05 | `ImageFigure` |
| `12-tc57-stacking.png` | "One solution, two form factors" | `ImageFigure` |
| `13-tablet-vs-tc57.png` | …side-by-side | `ImageFigure` (wide) |
| `14-discarded-variants.png` | "Exploring, then discarding" | `ImageFigure` (wide) |
| `15-round1-vs-round2.png` | "Testing on the floor" | `ImageFigure` (wide) |

The base path is defined once in `index.mdx` as `IMAGES`. Alt text lives inline
in the MDX next to each image.
