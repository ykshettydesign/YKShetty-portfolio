import React, { useRef, useState } from 'react'
import { caseStudies } from '../data/content'
import { isProtected } from '../case-studies/access'
import { Link } from '../router'
import { useCaseDeck, DECK_HOLD_VH } from '../hooks/useCaseDeck'

/** Small "client-confidential" badge shown on gated case-study cards, so the
 *  password gate reads as intentional (and signals NDA respect) before a click. */
const lockBadgeStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 5,
  marginTop: 9,
  fontFamily: 'var(--font-mono)',
  fontSize: 9.5,
  fontWeight: 700,
  letterSpacing: '0.09em',
  textTransform: 'uppercase',
  color: 'var(--text-tertiary)',
  border: '1px solid var(--border-strong)',
  borderRadius: 100,
  padding: '3px 9px',
  width: 'fit-content',
}

/** Placeholder cover gradients, used for cards without a real cover image so
 *  every card carries an image band. Picked by card index. */
const PH_GRADIENTS = [
  'linear-gradient(135deg, #8b7bff 0%, #5b46c4 100%)',
  'linear-gradient(135deg, #35c2b0 0%, #0d7d72 100%)',
  'linear-gradient(135deg, #7c8bff 0%, #3b3aa0 100%)',
  'linear-gradient(135deg, #b58bff 0%, #7a3fd0 100%)',
]

/**
 * Case studies as a scroll-driven *advancing* deck (netgiro.is-style, but
 * dependency-free — see useCaseDeck). A two-column stage pins while you scroll:
 * the left column shows the active case's outcome headline, and the right
 * column is a stack of cards where the front (white) card is the active case
 * and the ones behind peek out, progressively darker. As you scroll, the front
 * card advances to the next case and the deck reshuffles forward.
 */
export default function CaseStack() {
  const trackRef = useRef(null)
  // A card's `cover` may point at a file that isn't dropped in yet; if it 404s,
  // fall back to the gradient placeholder instead of showing a broken image.
  const [failed, setFailed] = useState({})

  useCaseDeck(trackRef)

  return (
    <section id="work" className="case-stack-section">
      <div className="case-stack__intro" data-reveal="">
        <div className="case-stack__eyebrow">Case studies</div>
        <h2 className="case-stack__heading">Real problems, solved at the root.</h2>
      </div>

      <div ref={trackRef} className="deck-track" style={{ height: `${caseStudies.length * 90 + DECK_HOLD_VH}vh` }}>
        <div className="deck-sticky">
          <div className="deck-inner">
            {/* LEFT: the active case's problem statement. Rolls into centre and
                brightens as it settles (--reveal, set per-case by useCaseDeck). */}
            <div className="deck-lead" aria-hidden="true">
              {caseStudies.map((c) => (
                <div key={c.id} className="deck-lead__item">
                  <div className="lead-problem">
                    <span className="lead-problem__label">The problem</span>
                    <p className="lead-problem__text">{c.problem}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT: the advancing card deck. */}
            <div className="deck">
              {caseStudies.map((c, i) => {
                const hasCover = c.cover && !failed[c.id]
                return (
                <article key={c.id} className="deck__card" style={{ zIndex: caseStudies.length - i }}>
                  <div className="deck__tint" aria-hidden="true" />
                  <Link
                    to={c.href || '#work'}
                    className="deck__content"
                    aria-label={`Read case study: ${c.card}`}
                  >
                    <div className="deck__meta">{c.metaLong || c.meta}</div>
                    {isProtected(c.id) && (
                      <div style={lockBadgeStyle}>🔒 NDA-protected</div>
                    )}
                    <div className="deck__label">Design solution</div>
                    <p className="deck__solution-headline">{c.solution}</p>
                    <div
                      className={`deck__media${hasCover ? '' : ' deck__media--ph'}`}
                      style={hasCover ? undefined : { backgroundImage: PH_GRADIENTS[i % PH_GRADIENTS.length] }}
                    >
                      {hasCover ? (
                        <img src={c.cover} alt="" onError={() => setFailed((f) => ({ ...f, [c.id]: true }))} />
                      ) : (
                        <span className="deck__ph-index" aria-hidden="true">{c.index}</span>
                      )}
                      {/* Success metrics — fade in over the image on hover. */}
                      <div className="deck__metrics" aria-hidden="true">
                        {c.stats.map((s) => (
                          <div key={s.label} className="deck__metric">
                            <span className="deck__metric-value">{s.value}</span>
                            <span className="deck__metric-label">{s.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Link>
                </article>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
