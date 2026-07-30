import React from 'react'
import { Media } from './Media'

/**
 * Two images side by side, labelled Before / After, with one shared caption.
 * `before` / `after` = { src, alt }. Labels are overridable. Stacks vertically
 * on narrow screens (Before above After).
 */
export function BeforeAfter({
  before = {},
  after = {},
  caption,
  beforeLabel = 'Before',
  afterLabel = 'After',
  ...rest
}) {
  return (
    <figure className="cs-beforeafter" {...rest}>
      <div className="cs-beforeafter-grid">
        <div className="cs-ba-col">
          <span className="cs-ba-tag cs-ba-tag--before">{beforeLabel}</span>
          <Media src={before.src} alt={before.alt} />
        </div>
        <div className="cs-ba-col">
          <span className="cs-ba-tag cs-ba-tag--after">{afterLabel}</span>
          <Media src={after.src} alt={after.alt} />
        </div>
      </div>
      {caption ? <figcaption className="cs-caption">{caption}</figcaption> : null}
    </figure>
  )
}
