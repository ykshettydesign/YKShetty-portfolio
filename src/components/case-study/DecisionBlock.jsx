import React from 'react'

/**
 * A titled design-decision block. Body content is passed as children (markdown).
 * The optional `tradeoff` prop renders a visually distinct
 * "Alternative considered / Why we didn’t" note — the strongest signal in the
 * case study, so it gets its own readable treatment rather than living in prose.
 *
 *   tradeoff = { considered, why }
 */
export function DecisionBlock({ title, index, tradeoff, children, ...rest }) {
  return (
    <section className="cs-decision" {...rest}>
      {index ? <div className="cs-decision-index">{index}</div> : null}
      {title ? <h3 className="cs-decision-title">{title}</h3> : null}
      <div className="cs-decision-body">{children}</div>
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
    </section>
  )
}
