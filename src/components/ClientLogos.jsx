import React from 'react'
import { clientLogos } from '../data/content'

/**
 * Continuous logo marquee (montone-style) for the companies/products worked on.
 * The item list is rendered twice so the track can loop seamlessly by
 * translating exactly one copy width (-50%); the duplicate half is hidden from
 * assistive tech. Single-tint wordmarks by default (real SVGs swap in via the
 * `logo` field). Pauses on hover; under prefers-reduced-motion the marquee
 * stops and wraps into a static, centred row (see global.css).
 */
export default function ClientLogos({ onAccent = false }) {
  const { heading, items } = clientLogos
  const loop = [...items, ...items]

  return (
    <section
      className={`clients${onAccent ? ' clients--on-accent' : ''}`}
      aria-label="Products and companies worked with"
    >
      {heading && <div className="clients__eyebrow">{heading}</div>}
      <div className="clients__marquee">
        <ul className="clients__track">
          {loop.map((c, i) => {
            const isDupe = i >= items.length
            return (
              <li key={`${c.name}-${i}`} className="clients__item" aria-hidden={isDupe ? 'true' : undefined}>
                {c.logo ? (
                  <img src={c.logo} alt={c.name} className="clients__logo" loading="lazy" />
                ) : (
                  <span className="clients__word">{c.name}</span>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
