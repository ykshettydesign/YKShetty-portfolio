import React from 'react'
import { Media } from './Media'

/**
 * One design decision, rendered as a left-rail row: the title (+ index) sits in
 * a narrow left rail; the body, an optional inline image, and the trade-off note
 * flow in the right column. Borderless — rows are separated by a hairline via
 * `.cs-decision + .cs-decision`. Compose several inside <DecisionList>.
 *
 *   media    = { src, alt, caption? }   inline, height-capped
 *   tradeoff = { considered, why }      compact "Alternative considered /
 *                                        Why we didn’t" note (kept visually
 *                                        distinct — it's the strongest signal)
 *   tag      = "Strategy"               optional category chip in the left rail
 *                                        (e.g. Strategy / Interaction / Trust) —
 *                                        aids scanning; omit to leave it off.
 */
export function DecisionBlock({ title, index, tag, media, tradeoff, children, ...rest }) {
  return (
    <section className="cs-decision" {...rest}>
      <div className="cs-decision-rail">
        {index ? <div className="cs-decision-index">{index}</div> : null}
        {title ? <h3 className="cs-decision-title">{title}</h3> : null}
        {tag ? <span className="cs-decision-tag">{tag}</span> : null}
      </div>

      <div className="cs-decision-main">
        <div className="cs-decision-body">{children}</div>

        {media ? (
          <div className={`cs-decision-media${media.portrait ? ' cs-decision-media--portrait' : ''}`}>
            <Media src={media.src} alt={media.alt} />
            {media.caption ? <div className="cs-caption">{media.caption}</div> : null}
          </div>
        ) : null}

        {tradeoff ? (
          <div className="cs-tradeoff">
            {tradeoff.considered ? (
              <div className="cs-tradeoff-row">
                <span className="cs-tradeoff-label">Alternative considered</span>
                <p className="cs-tradeoff-text">{tradeoff.considered}</p>
              </div>
            ) : null}
            {tradeoff.why ? (
              <div className="cs-tradeoff-row">
                <span className="cs-tradeoff-label">Why we didn’t</span>
                <p className="cs-tradeoff-text">{tradeoff.why}</p>
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  )
}
