import React from 'react'
import { Icon } from './Icon'

/**
 * Outcomes as label + status/value cards, each anchored by an icon chip.
 *   items = [{ icon, value, valueText, label, note }]
 * `value` is the headline (accent figure by default; `valueText` renders a
 * textual status in ink). Cards flow responsively (auto-fit) and never squash.
 */
export function MetricRow({ items = [], ...rest }) {
  return (
    <div className="cs-metricrow" {...rest}>
      <div className="cs-metricrow-grid">
        {items.map((item, i) => (
          <div className="cs-metric" key={i}>
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
    </div>
  )
}
