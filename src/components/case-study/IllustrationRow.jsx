import React from 'react'
import { Media } from './Media'

/**
 * A row of 2–4 images sharing one caption below (e.g. a comic strip).
 * `items` = [{ src, alt, title?, tag?, tone? }]. When an item carries a `title`
 * and/or `tag`, a caption block renders under that image — letting a labelled
 * strip replace a separate table. `tone` colours the tag ('neutral' | 'mental'
 * | 'bottleneck') to encode escalation. Responsive: the grid collapses to a
 * single stacked column on narrow screens rather than squashing.
 */
export function IllustrationRow({ items = [], caption, ...rest }) {
  const cols = Math.min(Math.max(items.length, 1), 4)
  return (
    <figure className="cs-illrow" style={{ '--cs-cols': cols }} {...rest}>
      <div className="cs-illrow-grid">
        {items.map((item, i) => (
          <div className="cs-illrow-cell" key={i}>
            <Media src={item.src} alt={item.alt} />
            {item.title || item.tag ? (
              <div className="cs-illrow-meta">
                {item.title ? <div className="cs-illrow-title">{item.title}</div> : null}
                {item.tag ? (
                  <span className={`cs-illrow-tag cs-illrow-tag--${item.tone || 'neutral'}`}>{item.tag}</span>
                ) : null}
              </div>
            ) : null}
          </div>
        ))}
      </div>
      {caption ? <figcaption className="cs-caption">{caption}</figcaption> : null}
    </figure>
  )
}
