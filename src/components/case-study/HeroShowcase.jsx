import React from 'react'
import { Media } from './Media'

/**
 * A crafted, art-directed hero: a brand backdrop (deep gradient + accent glow +
 * a faint scan/grid motif) with a device frame that holds the real product
 * screenshot. Turns a flat UI export into a premium hero without any image
 * editing — and every case study inherits the same treatment. Falls back to a
 * styled placeholder inside the device until the screenshot is dropped in.
 */
export function HeroShowcase({ src, alt = '', chip, ...rest }) {
  return (
    <div className="cs-hero" {...rest}>
      <span className="cs-hero-grid" aria-hidden="true" />
      <span className="cs-hero-glow" aria-hidden="true" />
      <div className="cs-hero-stage">
        <div className="cs-hero-device">
          <div className="cs-hero-screen">
            <Media src={src} alt={alt} />
          </div>
        </div>
      </div>
      {chip ? (
        <span className="cs-hero-chip">
          <span className="cs-hero-chip-dot" aria-hidden="true" />
          {chip}
        </span>
      ) : null}
    </div>
  )
}
