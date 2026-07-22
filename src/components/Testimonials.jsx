import React from 'react'
import { testimonials, recommendationsUrl } from '../data/content'
import { useCardSpread } from '../hooks/useCardSpread'

const tilts = testimonials.map((t) => t.rot)

export default function Testimonials() {
  const { focus, rest, getTransform } = useCardSpread(tilts)
  const total = testimonials.length

  return (
    <>
      <div style={{ ...MONO, fontSize: 9, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-tertiary)', fontWeight: 700, marginBottom: 22 }}>
        In their words
      </div>

      <div
        className="spread"
        onMouseLeave={rest}
        style={{ position: 'relative', height: 370, display: 'flex', alignItems: 'center', justifyContent: 'flex-start', overflow: 'visible' }}
      >
        <div style={{ position: 'relative', width: 1000, height: 240, left: 0 }}>
          {testimonials.map((t, i) => {
            const tf = getTransform(i, total)
            return (
              <article
                key={t.id}
                onMouseEnter={() => focus(i)}
                onClick={() => focus(i)}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: 278,
                  minHeight: 220,
                  background: 'var(--bg-surface)',
                  borderRadius: 18,
                  padding: '22px 24px',
                  boxShadow: 'var(--shadow-float)',
                  transformOrigin: '50% 92%',
                  willChange: 'transform',
                  cursor: 'default',
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  transition: 'transform 500ms cubic-bezier(0.16,1,0.3,1)',
                  transform: `translateX(${tf.x}px) rotate(${tf.rot}deg) scale(${tf.scale})`,
                  zIndex: tf.z,
                }}
              >
                <div style={{ fontSize: 26, lineHeight: 0, color: 'var(--border-strong)', height: 14 }}>&ldquo;</div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.55, color: 'var(--text-body)', margin: '8px 0 16px' }}>
                  {t.quote}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 'auto', paddingTop: 13, borderTop: '1px solid var(--border-card)' }}>
                  <span style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--accent-soft-bg)', color: 'var(--accent)', display: 'grid', placeItems: 'center', ...MONO, fontSize: 10, fontWeight: 700, flex: 'none' }}>
                    {t.initials}
                  </span>
                  <div style={{ fontSize: 11.5, lineHeight: 1.45 }}>
                    <span style={{ fontFamily: 'var(--font-body)', color: 'var(--text-primary)', fontWeight: 600 }}>{t.name}</span>
                    <br />
                    <span style={{ fontFamily: 'var(--font-body)', color: 'var(--text-secondary)' }}>{t.title}</span>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>

      <div style={{ marginTop: 16, textAlign: 'right' }}>
        <a href={recommendationsUrl} target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--accent)', fontWeight: 500 }}>
          Read all recommendations on LinkedIn <span style={{ fontSize: 11 }}>↗</span>
        </a>
      </div>
    </>
  )
}

const MONO = { fontFamily: 'var(--font-mono)' }
