import React from 'react'
import { Media } from './Media'

/**
 * A single image with an optional caption. `fullBleed` widens it to a hero/wide
 * shot; `wide` uses the wide content track. Missing files degrade to a styled
 * placeholder (see Media) so authors can swap/add images without touching layout.
 */
export function ImageFigure({ src, alt = '', caption, fullBleed = false, wide = false, ...rest }) {
  const cls = `cs-figure${fullBleed ? ' cs-figure--full' : wide ? ' cs-figure--wide' : ''}`
  return (
    <figure className={cls} {...rest}>
      <Media src={src} alt={alt} />
      {caption ? <figcaption className="cs-caption">{caption}</figcaption> : null}
    </figure>
  )
}
