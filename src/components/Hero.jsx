import React, { useRef } from 'react'
import { hero, profile, CONTACT_EMAIL } from '../data/content'
import { useHeroSequence } from '../hooks/useHeroSequence'
import { useHeroScroll } from '../hooks/useHeroScroll'

const blobs = [
  { w: '34vw', maxW: 420, top: '16%', left: '24%', color: 'var(--blob-1)', blur: 70, anim: 'drift1 9s ease-in-out infinite' },
  { w: '26vw', maxW: 340, top: '34%', right: '22%', color: 'var(--blob-2)', blur: 70, anim: 'drift2 11s ease-in-out infinite' },
  { w: '36vw', maxW: 440, bottom: '12%', left: '32%', color: 'var(--blob-3)', blur: 90, anim: 'drift3 13s ease-in-out infinite' },
  { w: '22vw', maxW: 280, top: '26%', right: '34%', color: 'var(--blob-4)', blur: 80, anim: 'drift4 10s ease-in-out infinite' },
]

const TypingDots = () => (
  <div className="typing-dots" style={{ display: 'flex', gap: 5 }}>
    <span />
    <span />
    <span />
  </div>
)

export default function Hero() {
  const { step, replay } = useHeroSequence()
  const heroInnerRef = useRef(null)
  const driftRootRef = useRef(null)
  const paraRef = useRef(null)

  useHeroScroll(paraRef, driftRootRef)

  return (
    <div style={{ position: 'relative', height: '200vh' }}>
      <section
        className="hero-section"
        data-hero-step={step}
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          height: '100vh',
          overflow: 'hidden',
          background: 'var(--bg-page)',
        }}
      >
        <div
          ref={driftRootRef}
          style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', top: -28 }}
        >
          {blobs.map((b, i) => (
            <div
              key={i}
              data-drift=""
              style={{
                position: 'absolute',
                width: b.w,
                height: b.w,
                maxWidth: b.maxW,
                maxHeight: b.maxW,
                top: b.top,
                bottom: b.bottom,
                left: b.left,
                right: b.right,
                borderRadius: '50%',
                background: `radial-gradient(circle, ${b.color}, transparent 70%)`,
                filter: `blur(${b.blur}px)`,
                animation: b.anim,
                willChange: 'transform',
              }}
            />
          ))}
        </div>

        <div ref={heroInnerRef} className="hero-cluster">
          <div
            className="hero-req-label"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--text-tertiary)',
              marginBottom: 10,
            }}
          >
            {hero.askLabel}
          </div>

          <div className="hero-bubble-wrap-1" style={{ position: 'relative', minHeight: 46, marginBottom: 16 }}>
            <div className="hero-typing-1" style={{ position: 'absolute', left: 0, top: 20 }}>
              <TypingDots />
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 10 }}>
              <div
                className="hero-bubble-1"
                style={{
                  background: 'var(--bg-surface)',
                  color: 'var(--text-primary)',
                  padding: '16px 24px',
                  borderRadius: '4px 20px 20px 20px',
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(18px,2.2vw,24px)',
                  fontWeight: 500,
                  lineHeight: 1.3,
                  boxShadow: 'var(--shadow-float)',
                }}
              >
                {hero.brief}
              </div>
            </div>
          </div>

          <div style={{ position: 'relative', minHeight: 72 }}>
            <div
              className="hero-typing-2"
              style={{ position: 'absolute', left: 0, top: 16, display: 'flex', alignItems: 'center', gap: 8 }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 9,
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                  opacity: 0.7,
                }}
              >
                Thinking
              </div>
              <TypingDots />
            </div>
            <div
              className="hero-bubble-2"
              style={{
                color: 'var(--text-primary)',
                borderRadius: '20px 20px 4px 20px',
                boxShadow: 'var(--shadow-lift)',
                background: 'var(--bg-surface)',
                textAlign: 'left',
                padding: '21px 31px',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                  marginBottom: 12,
                }}
              >
                {hero.replyLabel}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(21px,2.9vw,32px)',
                  fontWeight: 600,
                  lineHeight: 1.15,
                  letterSpacing: '-0.02em',
                }}
              >
                {hero.replyMain}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 13,
                  lineHeight: 1.5,
                  color: 'var(--text-muted)',
                  marginTop: 12,
                }}
              >
                {hero.replyFoot}
              </div>
            </div>
          </div>
        </div>

        <div className="hero-para-layer">
          <div ref={paraRef} className="hero-post">
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 15,
                lineHeight: 1.65,
                color: 'var(--text-body)',
                margin: '0 0 24px',
                textAlign: 'center',
              }}
            >
              {profile.tagline}
            </p>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 22,
                alignItems: 'center',
                fontFamily: 'var(--font-body)',
                fontSize: 14,
                fontWeight: 500,
                justifyContent: 'center',
              }}
            >
              <a href="#work" className="text-link text-link--primary" style={{ paddingBottom: 3 }}>
                Case studies ↓
              </a>
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-link text-link--muted">
                Say hello
              </a>
              <span
                onClick={replay}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && replay()}
                className="replay-btn"
                style={{ cursor: 'pointer', userSelect: 'none', fontSize: 12, color: 'var(--text-muted)' }}
              >
                ↻ replay
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
