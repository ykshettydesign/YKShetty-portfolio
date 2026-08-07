import React from 'react'
import { Icon } from './Icon'

/**
 * A compact "read-me-first" strip: one framed card split into labelled cells,
 * built for the 15-second skim (Problem / My role / Result — or any label→value
 * set, e.g. What I owned / What was collaborative).
 *
 * Distinct from OutcomeBand on purpose — that's a row of separate outcome cards;
 * this is a single divided strip, like a spec sheet, so the two never read as
 * duplicates. The cell count drives the column count (2 or 3).
 *
 *   eyebrow          — small mono label above the strip (optional)
 *   icon             — icon chip beside the eyebrow (optional)
 *   items = [{ label, value }]   value may be plain text or JSX
 */
export function Snapshot({ eyebrow, icon, items = [], ...rest }) {
  return (
    <section className="cs-snapshot" {...(eyebrow ? { 'aria-label': eyebrow } : {})} {...rest}>
      {eyebrow ? (
        <div className="cs-snapshot-eyebrow">
          {icon ? <Icon name={icon} size={14} /> : null}
          <span>{eyebrow}</span>
        </div>
      ) : null}
      <div className="cs-snapshot-grid" data-cells={items.length}>
        {items.map((it, i) => (
          <div className="cs-snapshot-cell" key={i}>
            <div className="cs-snapshot-label">{it.label}</div>
            <div className="cs-snapshot-value">{it.value}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
