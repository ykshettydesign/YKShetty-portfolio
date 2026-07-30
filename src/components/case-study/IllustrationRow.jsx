import React from 'react'
import { Media } from './Media'

/**
 * A row of 2–4 images sharing one caption below (e.g. a comic strip).
 * `items` = [{ src, alt }]. Responsive: the grid collapses to a single
 * stacked column on narrow screens rather than squashing.
 */
export function IllustrationRow({ items = [], caption, ...rest }) {
  const cols = Math.min(Math.max(items.length, 1), 4)
  return (
    <figure className="cs-illrow" style={{ '--cs-cols': cols }} {...rest}>
      <div className="cs-illrow-grid">
        {items.map((item, i) => (
          <div className="cs-illrow-cell" key={i}>
            <Media src={item.src} alt={item.alt} />
          </div>
        ))}
      </div>
      {caption ? <figcaption className="cs-caption">{caption}</figcaption> : null}
    </figure>
  )
}
