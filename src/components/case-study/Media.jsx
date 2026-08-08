import React, { useState } from 'react'

/**
 * A single image slot shared by every media module. Renders a real <img> when
 * `src` resolves; on a missing/failed file it swaps to a clearly-styled
 * placeholder that keeps the layout intact and shows the alt text + filename so
 * intent stays legible until the real asset is dropped in.
 */
export function Media({ src, alt = '', loading = 'lazy', phone = false }) {
  const [failed, setFailed] = useState(false)
  const inner =
    src && !failed ? (
      <span className="cs-figure-media">
        <img src={src} alt={alt} loading={loading} decoding="async" onError={() => setFailed(true)} />
      </span>
    ) : (
      <Placeholder alt={alt} file={src} />
    )
  // `phone` wraps the screen in a device shell — for bare single-screen mobile
  // shots that should read as an intentional mockup, not a floating rectangle.
  if (phone) {
    return (
      <span className="cs-phone">
        <span className="cs-phone-screen">{inner}</span>
      </span>
    )
  }
  return inner
}

/** Standalone placeholder — also usable directly for non-image slots. */
export function Placeholder({ alt = '', file, bare = false }) {
  const name = typeof file === 'string' ? file.split('/').pop() : null
  return (
    <div
      className={`cs-placeholder${bare ? ' cs-placeholder--bare' : ''}`}
      role="img"
      aria-label={alt || 'Image placeholder'}
    >
      <span className="cs-placeholder-tag">Image</span>
      {alt ? <span className="cs-placeholder-alt">{alt}</span> : null}
      {name ? <span className="cs-placeholder-file">{name}</span> : null}
    </div>
  )
}
