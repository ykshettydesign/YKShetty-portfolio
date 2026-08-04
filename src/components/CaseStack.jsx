import React, { useRef } from 'react'
import { caseStudies } from '../data/content'
import { Link } from '../router'
import { useCardStack } from '../hooks/useCardStack'

/**
 * Case studies as a scroll-driven stacked-cards deck (ported from Skiper UI's
 * Skiper16 to plain JSX — no Tailwind, no framer-motion). Each card is
 * position: sticky so the cards pin and pile up; useCardStack scales the
 * earlier ones down into a graduated deck as you scroll. Cards link to their
 * full case-study page.
 */
export default function CaseStack() {
  const containerRef = useRef(null)
  const cardRefs = useRef([])

  useCardStack(containerRef, cardRefs)

  return (
    <section id="work" className="case-stack-section">
      <div ref={containerRef} className="case-stack">
        <div className="case-stack__intro" data-reveal="">
          <div className="case-stack__eyebrow">Case studies</div>
          <div className="case-stack__hint">Scroll to explore</div>
        </div>

        {caseStudies.map((c, i) => (
          <div key={c.id} className="case-stack__slot">
            <Link to={c.href || '#work'} className="case-stack__link" aria-label={`Read case study: ${c.card}`}>
              <article
                ref={(el) => { cardRefs.current[i] = el }}
                className="stack-card"
                style={{ top: `calc(12vh + ${i * 16}px)`, zIndex: i + 1 }}
              >
                {c.cover && (
                  <div className="stack-card__cover">
                    <img src={c.cover} alt="" loading="lazy" />
                  </div>
                )}
                <div className="stack-card__body">
                  <div className="stack-card__meta">
                    <span className="stack-card__index">{c.index}</span>
                    <span>{c.meta}</span>
                  </div>
                  <h3 className="stack-card__headline">{c.card}</h3>
                  <div className="stack-card__stats">
                    {c.stats.map((s, si) => (
                      <div key={si} className="stack-card__stat">
                        <span className="stack-card__stat-value">{s.value}</span>
                        <span className="stack-card__stat-label">{s.label}</span>
                      </div>
                    ))}
                  </div>
                  <span className="stack-card__cta">Read case →</span>
                </div>
              </article>
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
