import React from 'react'
import CaseStudyHeader from './CaseStudyHeader'
import { contact } from '../data/content'
import { Link } from '../router'

/**
 * The shared case-study shell — identical on every case study. Only the content
 * modules passed as children change between stories. Everything else (nav,
 * title/subtitle, tags, the Project-at-a-glance meta block, and the
 * next-project + contact footer) is driven by the `meta` object a case study's
 * MDX file exports.
 *
 *   meta  = { title, subtitle, tags[], glance[{label,value}], accent? }
 *   next  = { slug, meta } | null   (the next case study, for the footer link)
 */
export default function CaseStudyLayout({ meta = {}, next, children }) {
  const { title, subtitle, tags = [], glance = [], accent } = meta
  const rootStyle = accent ? { '--cs-accent': accent } : undefined

  return (
    <div className="cs-page" style={rootStyle}>
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
                  <dt className="cs-glance-label">{item.label}</dt>
                  <dd className="cs-glance-value" style={{ margin: 0 }}>{item.value}</dd>
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

      <CaseStudyFooter next={next} />
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
