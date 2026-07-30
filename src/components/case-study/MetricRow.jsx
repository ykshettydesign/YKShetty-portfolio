import React from 'react'

/**
 * A styled way to present outcomes as label + status/value pairs. `items` is an
 * array of:
 *   { value, valueText, label, note }
 * where `value` is the headline (accent figure by default; set `valueText` for a
 * textual status rendered in ink), `label` a small mono caption, and `note` a
 * supporting line. Cards flow responsively (auto-fit) and never squash.
 */
export function MetricRow({ items = [], ...rest }) {
  return (
    <div className="cs-metricrow" {...rest}>
      <div className="cs-metricrow-grid">
        {items.map((item, i) => (
          <div className="cs-metric" key={i}>
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
