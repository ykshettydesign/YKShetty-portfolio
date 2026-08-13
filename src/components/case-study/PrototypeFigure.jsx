import React, { useState } from 'react'
import { Icon } from './Icon'

/**
 * A recorded walkthrough of an interactive prototype — a real <video> framed to
 * read as a clickable prototype recording rather than a plain clip. On a
 * missing/failed file it degrades to a styled placeholder (mirroring Media) so
 * the layout holds until the recording is dropped in. `wide` uses the wide
 * content track to match ImageFigure.
 *
 * Defaults suit a short, silent loop that plays inline; pass `controls` (and
 * drop `autoPlay`) for a longer walkthrough the reader scrubs themselves.
 */
export function PrototypeFigure({
  src,
  poster,
  alt = '',
  caption,
  label = 'Clickable prototype',
  wide = true,
  loop = true,
  autoPlay = true,
  muted = true,
  controls = false,
  ...rest
}) {
  const [failed, setFailed] = useState(false)
  const cls = `cs-figure cs-prototype${wide ? ' cs-figure--wide' : ''}`
  const hasVideo = src && !failed
  const file = typeof src === 'string' ? src.split('/').pop() : null

  return (
    <figure className={cls} {...rest}>
      <div className="cs-prototype-frame">
        <span className="cs-prototype-tag">
          <Icon name="play" size={11} />
          <span>{label}</span>
        </span>
        {hasVideo ? (
          <span className="cs-figure-media cs-prototype-media">
            <video
              src={src}
              poster={poster}
              aria-label={alt}
              playsInline
              loop={loop}
              // muting is required for autoplay to be allowed by browsers
              muted={autoPlay ? true : muted}
              autoPlay={autoPlay}
              controls={controls}
              preload="metadata"
              onError={() => setFailed(true)}
            />
          </span>
        ) : (
          <div
            className="cs-placeholder cs-prototype-placeholder"
            role="img"
            aria-label={alt || 'Prototype recording placeholder'}
          >
            <span className="cs-placeholder-tag">Prototype recording</span>
            {alt ? <span className="cs-placeholder-alt">{alt}</span> : null}
            {file ? <span className="cs-placeholder-file">{file}</span> : null}
          </div>
        )}
      </div>
      {caption ? <figcaption className="cs-caption">{caption}</figcaption> : null}
    </figure>
  )
}
