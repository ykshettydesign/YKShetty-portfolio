import React, { useEffect } from 'react'
import { MDXProvider } from '@mdx-js/react'
import CaseStudyLayout from '../layouts/CaseStudyLayout'
import { mdxComponents } from '../components/case-study'
import { getCaseStudy, getNextCaseStudy } from '../case-studies/registry'
import { Link } from '../router'

/**
 * Renders one case study: the fixed shell (CaseStudyLayout) wrapping the MDX
 * body, with the module kit provided to MDX so plain markdown maps onto styled
 * components (h2 → SectionHeading, blockquote/table/etc.). All per-story data
 * comes from the MDX file's `meta` export.
 */
export default function CaseStudyPage({ slug }) {
  const entry = getCaseStudy(slug)

  useEffect(() => {
    if (entry?.meta?.title) {
      const prev = document.title
      document.title = `${entry.meta.title} · Yogesh Shetty`
      return () => { document.title = prev }
    }
  }, [entry])

  if (!entry) return <NotFound slug={slug} />

  const { Component, meta } = entry
  const next = getNextCaseStudy(slug)

  return (
    <CaseStudyLayout meta={meta} next={next}>
      <MDXProvider components={mdxComponents}>
        <Component />
      </MDXProvider>
    </CaseStudyLayout>
  )
}

function NotFound({ slug }) {
  return (
    <div style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', padding: 24, background: 'var(--bg-page)', color: 'var(--text-primary)', fontFamily: 'var(--font-display)', textAlign: 'center' }}>
      <div style={{ maxWidth: 460 }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 14 }}>
          Case study not found
        </div>
        <h1 style={{ fontSize: 28, fontWeight: 600, margin: '0 0 16px', letterSpacing: '-0.02em' }}>
          No case study “{slug}”
        </h1>
        <Link to="/" className="text-link text-link--primary" style={{ fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 500, paddingBottom: 3 }}>
          ← Back to portfolio
        </Link>
      </div>
    </div>
  )
}
