/* ============================================================
   CASE-STUDY REGISTRY
   ------------------------------------------------------------
   Auto-discovers every src/case-studies/<slug>/index.mdx at build
   time. A new case study is literally a new folder with an index.mdx
   that `export`s a `meta` object — no edits here, no layout work.

   Each MDX file exports:
     • default  → the composed content (modules)
     • meta     → { title, subtitle, tags[], glance[], order?, accent? }
   The slug comes from the folder name.
   ============================================================ */

const modules = import.meta.glob('./*/index.mdx', { eager: true })

export const caseStudies = Object.entries(modules)
  .map(([path, mod]) => {
    const slug = path.match(/\.\/([^/]+)\/index\.mdx$/)?.[1]
    return {
      slug,
      Component: mod.default,
      meta: { slug, ...(mod.meta || {}) },
    }
  })
  .filter((c) => c.slug)
  .sort((a, b) => (a.meta.order ?? 999) - (b.meta.order ?? 999))

export function getCaseStudy(slug) {
  return caseStudies.find((c) => c.slug === slug) || null
}

/** The next case study in registry order, wrapping around; null if only one. */
export function getNextCaseStudy(slug) {
  if (caseStudies.length < 2) return null
  const i = caseStudies.findIndex((c) => c.slug === slug)
  if (i === -1) return null
  return caseStudies[(i + 1) % caseStudies.length]
}
