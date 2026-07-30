import React from 'react'

/**
 * Highlighted band that front-loads impact — a short list of outcome bullets
 * (typically 3) in a visually distinct panel near the top of a case study.
 * `items` is an array of nodes (plain text or JSX with <strong>).
 */
export function OutcomeBand({ label = 'The outcome', items = [], ...rest }) {
  return (
    <section className="cs-outcomeband" aria-label={label} {...rest}>
      <div className="cs-outcomeband-label">{label}</div>
      <div className="cs-outcomeband-list">
        {items.map((item, i) => (
          <div className="cs-outcomeband-item" key={i}>
            <span className="cs-outcomeband-mark" aria-hidden="true" />
            <div className="cs-outcomeband-text">{item}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
