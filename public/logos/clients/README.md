# Client / experience logos

Drop **monochrome SVG** logos here to replace the text wordmarks in the marquee
(the "Products I've contributed to" strip).

## How to add one

1. Save the logo as an SVG in this folder, e.g. `microsoft.svg`.
   - Prefer a **single-colour** mark (flat black or white on transparent). The
     marquee renders it grayscale and lifts it to full on hover, so a plain
     one-tone SVG looks best. Full-colour SVGs work too but look busier.
2. Open `src/data/content.js`, find the `clientLogos.items` array, and add a
   `logo` path to the matching entry:

   ```js
   { name: 'Microsoft', logo: '/logos/clients/microsoft.svg' },
   ```

   (The path is relative to `public/`, so `public/logos/clients/microsoft.svg`
   is written as `/logos/clients/microsoft.svg`.)

3. That's it — the component swaps the wordmark for the image automatically.
   Entries **without** a `logo` keep showing the styled text wordmark, so you
   can mix real logos and text while you gather them.

## Sizing

You don't need to resize the art — CSS caps each logo's height (~19–27px) and
keeps the aspect ratio. Just make sure the SVG has a sensible `viewBox`.

## Where to find brand SVGs

Official brand/press kits, or a source like svgl.app / worldvectorlogo.com.
Use the plain monochrome variant where offered.
