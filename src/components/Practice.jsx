import React, { useRef } from 'react'
import { processCards, processDots } from '../data/content'
import { useProcessCards } from '../hooks/useProcessCards'
import { useTheme } from '../theme/ThemeContext'
import WebGLCanvas from './WebGLCanvas'

const mono = { fontFamily: 'var(--font-mono)' }
const STACK_ROTS = [-3, -1.5, 1.5, 3]
const STACK_OFF_Y = [12, 6, 3, 0]

const chipHuman = {
  fontFamily: 'var(--font-body)',
  fontSize: 11.5,
  fontWeight: 500,
  color: 'var(--chip-text)',
  border: '1px solid var(--chip-border)',
  borderRadius: 999,
  padding: '4px 10px',
}
const chipAI = {
  fontFamily: 'var(--font-body)',
  fontSize: 11.5,
  fontWeight: 500,
  color: 'var(--teal-ink)',
  background: 'var(--teal-bg)',
  borderRadius: 999,
  padding: '4px 10px',
}
const humanLabel = {
  ...mono,
  fontSize: 8.5,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: 'var(--accent)',
  fontWeight: 700,
  marginBottom: 10,
}

function cardTransform(idx, active) {
  if (idx === active) return { transform: 'rotate(0deg) scale(1)', opacity: 1, zIndex: 20 }
  if (idx < active) {
    const dist = active - idx
    const rot = STACK_ROTS[idx % STACK_ROTS.length]
    const s = 1 - Math.min(0.08, dist * 0.025)
    return {
      transform: `translateY(${STACK_OFF_Y[idx] || 0}px) rotate(${rot}deg) scale(${s})`,
      opacity: 1,
      zIndex: 19 - dist,
    }
  }
  return { transform: 'translateY(120%) rotate(0deg) scale(1)', opacity: 0, zIndex: 1 }
}

function ProcessCard({ card, dynamic }) {
  const body = (
    <>
      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 600, letterSpacing: '-0.02em', margin: '0 0 12px', color: 'var(--text-primary)' }}>
        {card.title}
      </h3>

      {card.rethink && (
        <div style={{ borderLeft: '2px solid var(--accent)', padding: '2px 0 2px 14px', marginBottom: 10 }}>
          <span style={{ display: 'block', ...mono, fontSize: 9, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 4 }}>
            ↺ The rethink
          </span>
          <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 13.5, lineHeight: 1.4, color: 'var(--accent-hover)' }}>
            {card.rethink}
          </p>
        </div>
      )}

      <div style={humanLabel}>Human leads</div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 10 }}>
        {card.human.map((h) => (
          <span key={h} style={chipHuman}>{h}</span>
        ))}
      </div>

      <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: 14 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
          <span style={{ fontSize: 11, color: 'var(--teal-glyph)' }}>✦</span>
          <span style={{ ...mono, fontSize: 8.5, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--teal-accent)', fontWeight: 700 }}>
            AI accelerates
          </span>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {card.ai.map((a) => (
            <span key={a} style={chipAI}>{a}</span>
          ))}
        </div>
      </div>
    </>
  )

  return (
    <article
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        background: 'var(--bg-surface)',
        borderRadius: 20,
        padding: card.accentBar ? 0 : '20px 22px 18px',
        boxShadow: 'var(--shadow-lift)',
        transition: 'transform 0.65s cubic-bezier(.22,1,.36,1), opacity 0.5s ease',
        willChange: 'transform, opacity',
        transformOrigin: 'center bottom',
        overflow: card.accentBar ? 'hidden' : undefined,
        ...dynamic,
      }}
    >
      {card.accentBar ? (
        <>
          <div style={{ height: 3, background: 'linear-gradient(90deg, var(--accent), var(--accent-2))' }} />
          <div style={{ padding: '20px 22px 18px' }}>{body}</div>
        </>
      ) : (
        body
      )}
    </article>
  )
}

export default function Practice() {
  const sectionRef = useRef(null)
  const stage = useProcessCards(sectionRef, processCards.length)
  const { theme } = useTheme()

  return (
    <section
      id="practice"
      ref={sectionRef}
      className="practice-section"
      style={{ position: 'relative', zIndex: 10, height: 'calc(100vh + 600px)' }}
    >
      <div className="practice-grid" style={{ position: 'sticky', top: 0, height: '100vh' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', height: '100%' }}>
          {/* Left: WebGL stage */}
          <div className="practice-webgl" style={{ background: 'var(--bg-inverse)', position: 'relative', overflow: 'hidden' }}>
            <WebGLCanvas theme={theme} style={{ position: 'absolute', inset: 0 }} />
            <div style={{ position: 'absolute', top: 'clamp(32px,4vw,56px)', left: 'clamp(22px,4vw,48px)', zIndex: 2 }}>
              <div style={{ ...mono, fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: 10 }}>
                02 · Practice
              </div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px,2.8vw,36px)', fontWeight: 600, lineHeight: 1.08, letterSpacing: '-0.03em', margin: 0, color: '#fff' }}>
                The process,
                <br />
                end to end.
              </h2>
            </div>
          </div>

          {/* Right: card stack + dots */}
          <div style={{ position: 'relative', background: 'var(--bg-section-alt)', display: 'flex', flexDirection: 'column', padding: 'clamp(32px,4vw,56px) clamp(22px,4vw,48px)', overflow: 'hidden' }}>
            <div style={{ position: 'relative', flex: 1, minHeight: 0, overflow: 'hidden' }}>
              <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', width: 'min(420px, 90%)', height: 340 }}>
                {processCards.map((card, i) => (
                  <ProcessCard key={card.id} card={card} dynamic={cardTransform(i, stage)} />
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 20, paddingTop: 16 }}>
              {processDots.map((label, i) => {
                const activeDot = i === stage
                return (
                  <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 8, opacity: activeDot ? 1 : 0.4, transition: 'opacity 0.3s' }}>
                    <span
                      style={{
                        display: 'block',
                        width: activeDot ? 28 : 20,
                        height: 3,
                        borderRadius: 2,
                        background: activeDot ? 'var(--accent)' : 'var(--border-strong)',
                        transition: 'all 0.4s ease',
                      }}
                    />
                    <span style={{ ...mono, fontSize: 10, fontWeight: 600, color: activeDot ? 'var(--text-primary)' : 'var(--text-tertiary)', transition: 'color 0.3s' }}>
                      {label}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
