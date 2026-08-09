import React, { useEffect, useRef } from 'react'
import CaseStudyHeader from './CaseStudyHeader'
import { contact } from '../data/content'
import { Link } from '../router'
import { Icon, SectionRail } from '../components/case-study'
import { useScrollReveal } from '../hooks/useScrollReveal'

/** Default icon per standard glance label (a case study can override via meta). */
const GLANCE_ICONS = {
  Role: 'user',
  Team: 'users',
  Region: 'pin',
  Platform: 'device',
  Timeline: 'calendar',
  Tools: 'wrench',
}

/**
 * The shared case-study shell — identical on every case study. Only the content
 * modules passed as children change between stories. Everything else (nav,
 * reading-progress bar, title/subtitle, tags, the icon-anchored
 * Project-at-a-glance block, and the next-project + contact footer) is driven by
 * the `meta` object a case study's MDX file exports.
 */
export default function CaseStudyLayout({ meta = {}, next, children }) {
  const { title, subtitle, tags = [], glance = [], accent } = meta
  const rootStyle = accent ? { '--cs-accent': accent } : undefined
  const rootRef = useRef(null)

  // Progressive reveal: stamp each top-level content block with [data-reveal] so
  // the site's IntersectionObserver fades them in on scroll. The masthead is
  // above-the-fold (LCP) content — left untouched so it paints instantly — and
  // the full-bleed hero is skipped (it owns a transform the reveal would fight).
  // Runs before useScrollReveal so the observer sees the marks.
  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    root.querySelectorAll('.cs-content > *').forEach((el) => {
      // Skip blocks that own a transform (full-bleed figure, hero) — the
      // reveal's translateY would fight their centering.
      if (!el.classList.contains('cs-figure--full') && !el.classList.contains('cs-hero')) {
        el.setAttribute('data-reveal', '')
      }
    })
  }, [])
  useScrollReveal(rootRef)

  return (
    <div className="cs-page" style={rootStyle} ref={rootRef}>
      <ReadingProgress />
      <CaseStudyHeader />

      <main>
        {/* Masthead: tags → title → subtitle */}
        <header className="cs-wrap">
          <div className="cs-masthead">
            {tags.length ? <div className="cs-tags">{tags.join('  ·  ')}</div> : null}
            {title ? <h1 className="cs-title">{title}</h1> : null}
            {subtitle ? <p className="cs-subtitle">{subtitle}</p> : null}
          </div>

          {/* Project at a glance */}
          {glance.length ? (
            <dl className="cs-glance">
              {glance.map((item) => (
                <div className="cs-glance-item" key={item.label}>
                  <span className="cs-glance-icon" aria-hidden="true">
                    <Icon name={item.icon || GLANCE_ICONS[item.label]} size={16} />
                  </span>
                  <div className="cs-glance-textwrap">
                    <dt className="cs-glance-label">{item.label}</dt>
                    <dd className="cs-glance-value">{item.value}</dd>
                  </div>
                </div>
              ))}
            </dl>
          ) : null}
        </header>

        {/* Composed content (the modules) */}
        <div className="cs-wrap">
          <article className="cs-content">{children}</article>
        </div>
      </main>

      <SectionRail />


      <CaseStudyFooter next={next} />
    </div>
  )
}

/** Thin scroll-linked reading-progress bar pinned to the top edge. */
function ReadingProgress() {
  const ref = useRef(null)
  useEffect(() => {
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const h = document.documentElement
        const max = h.scrollHeight - h.clientHeight
        const p = max > 0 ? Math.min(Math.max(h.scrollTop / max, 0), 1) : 0
        if (ref.current) ref.current.style.transform = `scaleX(${p})`
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])
  return (
    <div className="cs-progress" aria-hidden="true">
      <i ref={ref} />
    </div>
  )
}

function CaseStudyFooter({ next }) {
  return (
    <footer className="cs-footer">
      <div className="cs-footer-inner">
        <div className="cs-next-label">{next ? 'Next project' : 'More work'}</div>
        {next ? (
          <Link to={`/case-studies/${next.slug}`} className="cs-next-link">
            <span>{next.meta?.title || next.slug}</span>
            <span className="cs-next-arrow" aria-hidden="true">→</span>
          </Link>
        ) : (
          <a href="/#work" className="cs-next-link">
            <span>See all work</span>
            <span className="cs-next-arrow" aria-hidden="true">→</span>
          </a>
        )}

        <div className="cs-footer-contact">
          {contact.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-link ${link.variant === 'primary' ? 'text-link--primary' : 'text-link--muted'}`}
              style={link.variant === 'primary' ? { paddingBottom: 3 } : undefined}
              {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              {...(link.download ? { download: true } : {})}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="cs-footer-meta">
          <span>{contact.copyright}</span>
          <a href="/#top" className="text-link text-link--muted">Back to top ↑</a>
        </div>
      </div>
    </footer>
  )
}
