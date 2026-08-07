# Post-office portal — image drop-in guide

Real images go in **`public/case-studies/postoffice/images/`** (served at the URL
`/case-studies/postoffice/images/<file>`). Vite serves everything in `public/`
as-is, so you can add or replace files here without touching any layout code —
just match the filenames below. Until a file exists, its figure renders a
clearly-styled placeholder showing the alt text, so the layout never breaks.

| Filename | Where it appears | Module |
|---|---|---|
| `01-hero.png` | Top of page — the portal on desktop + mobile | `HeroShowcase` |
| `02-counter-lock.png` | "The problem" — the counter-lock / paper notebook | `ImageFigure` |
| `03-site-visit.png` | "How I approached it" — physical store visits | `ImageFigure` (wide) |
| `04-export-feature.png` | "Eliminating the shadow system" — Download/Export | `ImageFigure` |
| `05-role-inheritance.png` | Decision 01 — role inheritance logic | `ImageFigure` |
| `06-full-row-click.png` | Decision 02 — full-row click targets on mobile | `ImageFigure` |
| `07-delete-before.png` | "What testing changed" — the old hard-delete | `BeforeAfter` |
| `08-delete-after.png` | "What testing changed" — the 7-day safety-net modal | `BeforeAfter` |
| `09-final-responsive.png` | "The impact" — final designs across breakpoints | `ImageFigure` (wide) |
| `10-bulk-create.png` | Decision 04 — bulk / import user creation | `ImageFigure` |
| `11-usability-testing.png` | "What testing changed" — testing session / annotated flows | `ImageFigure` (wide) |

The base path is defined once in `index.mdx` as `IMAGES`. Alt text lives inline
in the MDX next to each image.
</content>
</invoke>
