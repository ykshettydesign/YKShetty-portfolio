import React, { useState } from 'react'

/**
 * A paired prototype recording — a landscape web clip beside a portrait mobile
 * clip in a phone shell — so one flow reads across both form factors. Both play
 * as muted, looping, inline autoplay videos (no controls, so they read as
 * ambient demos). A missing/failed file degrades to the shared placeholder, so
 * the layout holds until the real recordings are dropped in.
 *
 * <PrototypeShowcase
 *   web={{ src, poster, alt }}
 *   mobile={{ src, poster, alt }}
 *   caption="…"
 * />
 */
function Clip({ src, poster, alt }) {
  const [failed, setFailed] = useState(false)
  const file = typeof src === 'string' ? src.split('/').pop() : null

  if (src && !failed) {
    return (
      <video
        src={src}
        poster={poster}
        aria-label={alt}
        playsInline
        loop
        muted
        autoPlay
        preload="metadata"
        onError={() => setFailed(true)}
      />
    )
  }
  return (
    <div className="cs-placeholder" role="img" aria-label={alt || 'Prototype recording placeholder'}>
      <span className="cs-placeholder-tag">Video</span>
      {alt ? <span className="cs-placeholder-alt">{alt}</span> : null}
      {file ? <span className="cs-placeholder-file">{file}</span> : null}
    </div>
  )
}

export function PrototypeShowcase({
  web,
  mobile,
  caption,
  webLabel = 'Web',
  mobileLabel = 'Mobile',
  ...rest
}) {
  return (
    <figure className="cs-figure cs-figure--wide cs-protoshow" {...rest}>
      <div className="cs-protoshow-grid">
        <div className="cs-protoshow-col">
          <span className="cs-figure-media cs-protoshow-web">
            <Clip src={web?.src} poster={web?.poster} alt={web?.alt} />
          </span>
          <span className="cs-protoshow-label">{webLabel}</span>
        </div>
        <div className="cs-protoshow-col cs-protoshow-col--mobile">
          <span className="cs-phone">
            <span className="cs-phone-screen">
              <Clip src={mobile?.src} poster={mobile?.poster} alt={mobile?.alt} />
            </span>
          </span>
          <span className="cs-protoshow-label">{mobileLabel}</span>
        </div>
      </div>
      {caption ? <figcaption className="cs-caption">{caption}</figcaption> : null}
    </figure>
  )
}
