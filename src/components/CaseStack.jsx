import React, { useRef } from 'react'
import { caseStudies } from '../data/content'
import { Link } from '../router'
import { useCardStack } from '../hooks/useCardStack'

/** Placeholder cover gradients, used for cards without a real cover image so
 *  every card carries an image band. Picked by card index. */
const PH_GRADIENTS = [
  'linear-gradient(135deg, #8b7bff 0%, #5b46c4 100%)',
  'linear-gradient(135deg, #35c2b0 0%, #0d7d72 100%)',
  'linear-gradient(135deg, #7c8bff 0%, #3b3aa0 100%)',
  'linear-gradient(135deg, #b58bff 0%, #7a3fd0 100%)',
]

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
          <h2 className="case-stack__heading">Real problems, solved at the root.</h2>
        </div>

        {caseStudies.map((c, i) => (
          <div key={c.id} className="case-stack__slot">
            <Link to={c.href || '#work'} className="case-stack__link" aria-label={`Read case study: ${c.card}`}>
              <article
                ref={(el) => { cardRefs.current[i] = el }}
                className="stack-card"
                style={{ top: `calc(11vh + ${i * 18}px)`, zIndex: i + 1 }}
              >
                {c.cover ? (
                  <div className="stack-card__cover">
                    <img src={c.cover} alt="" loading="lazy" />
                  </div>
                ) : (
                  <div
                    className="stack-card__cover stack-card__cover--ph"
                    style={{ backgroundImage: PH_GRADIENTS[i % PH_GRADIENTS.length] }}
                    aria-hidden="true"
                  >
                    <span className="stack-card__ph-index">{c.index}</span>
                  </div>
                )}
                <div className="stack-card__body">
                  <div className="stack-card__meta">
                    <span className="stack-card__index">{c.index}</span>
                    <span>{c.meta}</span>
                  </div>
                  <h3 className="stack-card__headline">{c.card}</h3>
                  <div className="stack-card__footer">
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
                </div>
              </article>
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
