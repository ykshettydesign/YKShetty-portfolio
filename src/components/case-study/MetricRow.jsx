import React from 'react'
import { Icon } from './Icon'

/**
 * Outcomes as label + status/value cards, each anchored by an icon chip.
 *   items = [{ before, icon, value, valueText, label, note }]
 * `value` is the headline (accent figure by default; `valueText` renders a
 * textual status in ink). `before` renders a struck-through "old" value above
 * it, so a card reads as a before → after delta. Cards flow responsively.
 *   band    — wraps the row in a tinted container (for a highlighted outcome)
 *   caption — a small line beneath (e.g. source/attribution of the figures)
 */
export function MetricRow({ items = [], band = false, caption, ...rest }) {
  return (
    <div className={`cs-metricrow${band ? ' cs-metricrow--band' : ''}`} {...rest}>
      <div className="cs-metricrow-grid">
        {items.map((item, i) => (
          <div className="cs-metric" key={i}>
            {item.before ? <div className="cs-metric-before">{item.before}</div> : null}
            {item.icon ? (
              <span className="cs-metric-icon" aria-hidden="true">
                <Icon name={item.icon} size={18} />
              </span>
            ) : null}
            {item.value != null ? (
              <div className={`cs-metric-value${item.valueText ? ' cs-metric-value--text' : ''}`}>
                {item.value}
              </div>
            ) : null}
            {item.label ? <div className="cs-metric-label">{item.label}</div> : null}
            {item.note ? <div className="cs-metric-note">{item.note}</div> : null}
          </div>
        ))}
      </div>
      {caption ? <div className="cs-metricrow-caption">{caption}</div> : null}
    </div>
  )
}
