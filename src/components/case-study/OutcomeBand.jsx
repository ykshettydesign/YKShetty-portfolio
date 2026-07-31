import React from 'react'
import { Icon } from './Icon'

/**
 * Front-loads impact as a row of icon-anchored outcome cards (typically 3).
 * Each card pairs an accent icon chip with a bold outcome + supporting text —
 * chunked and isolated so the payoff reads in one glance (Von Restorff).
 *
 *   items = [{ icon, text }]   text may be plain or JSX (with <strong> lead)
 */
export function OutcomeBand({ label = 'The outcome', icon = 'rocket', items = [], ...rest }) {
  return (
    <section className="cs-outcomeband" aria-label={label} {...rest}>
      <div className="cs-outcomeband-label">
        <Icon name={icon} size={15} />
        <span>{label}</span>
      </div>
      <div className="cs-outcomeband-list">
        {items.map((item, i) => (
          <div className="cs-outcome" key={i}>
            <span className="cs-outcome-icon" aria-hidden="true">
              <Icon name={item.icon} size={20} />
            </span>
            <div className="cs-outcome-text">{item.text}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
