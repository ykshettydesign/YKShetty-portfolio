import React from 'react'
import { Media } from './Media'

/**
 * A crafted, art-directed hero: a brand backdrop (deep gradient + accent glow +
 * a faint scan/grid motif) with a device frame that holds the real product
 * screenshot. Turns a flat UI export into a premium hero without any image
 * editing — and every case study inherits the same treatment.
 *
 * Pass `secondary` = { src, alt } to render a second, smaller device beside the
 * primary (e.g. the handheld TC57 next to the tablet — telegraphs the
 * "two form factors" story up front). Falls back to styled placeholders.
 */
export function HeroShowcase({ src, alt = '', chip, secondary, bare, light, ...rest }) {
  const cls = [
    'cs-hero',
    secondary && !bare ? 'cs-hero--multi' : '',
    bare ? 'cs-hero--bare' : '',
    light ? 'cs-hero--light' : '',
  ].filter(Boolean).join(' ')

  return (
    <div className={cls} {...rest}>
      <span className="cs-hero-grid" aria-hidden="true" />
      <span className="cs-hero-glow" aria-hidden="true" />
      <div className="cs-hero-stage">
        {bare ? (
          <Media src={src} alt={alt} loading="eager" />
        ) : (
          <>
            <div className="cs-hero-device cs-hero-device--tablet">
              <div className="cs-hero-screen">
                <Media src={src} alt={alt} loading="eager" />
              </div>
            </div>
            {secondary ? (
              <div className="cs-hero-device cs-hero-device--phone">
                <div className="cs-hero-screen cs-hero-screen--phone">
                  <Media src={secondary.src} alt={secondary.alt} />
                </div>
              </div>
            ) : null}
          </>
        )}
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
