import React, { useCallback, useEffect, useRef, useState } from 'react'
import { practiceStory } from '../data/content'
import { useTheme } from '../theme/ThemeContext'
import PracticeTree from './PracticeTree'

// Number of viewport-heights of scroll track that drive the growth sequence.
const TRACK_VH = 560

// Card-stack offsets — ported from the concept's applyCards().
const STACK_ROTS = [-4, -1.5, 2, 5]
const STACK_OFF_X = [-10, -4, 4, 10]
const STACK_OFF_Y = [8, 4, 2, 0]

function cardStyle(k, active, isMobile) {
  const restY = isMobile ? '0px' : '-50%'
  if (k === active) {
    return { transform: `translate(0, ${restY}) rotate(0deg) scale(1)`, opacity: 1, zIndex: 20 }
  }
  if (k < active) {
    const dist = active - k
    const ox = STACK_OFF_X[k]
    const s = 1 - Math.min(0.06, dist * 0.02)
    if (isMobile) {
      const oy = -(6 + dist * 11)
      return { transform: `translate(${ox}px, ${oy}px) rotate(${STACK_ROTS[k]}deg) scale(${s})`, opacity: 1, zIndex: 19 - dist }
    }
    const oy = STACK_OFF_Y[k] + dist * 14
    return { transform: `translate(${ox}px, calc(-50% + ${oy}px)) rotate(${STACK_ROTS[k]}deg) scale(${s})`, opacity: 1, zIndex: 19 - dist }
  }
  const hideY = isMobile ? '45%' : '90%'
  return { transform: `translate(0, ${hideY}) rotate(2deg) scale(.96)`, opacity: 0, zIndex: 1 }
}

function StoryCard({ card, style }) {
  return (
    <article className="story-card" style={style}>
      <div className="sc-accent" />
      <div className="sc-body">
        <p className="sc-num">{card.num}</p>
        <h3 className="sc-title">{card.title}</h3>
        {card.callout && (
          <div className="sc-callout">
            <span className="sc-callout-label">{card.callout.label}</span>
            <p className="sc-callout-text">{card.callout.text}</p>
          </div>
        )}
        <div className="sc-chips">
          {card.human.map((h) => (
            <span key={h} className="chip chip-human">{h}</span>
          ))}
        </div>
        <div className="sc-ai">
          <div className="sc-ai-head">
            <span className="sc-ai-star">✦</span>
            <span className="sc-ai-label">AI accelerates</span>
          </div>
          <div className="sc-chips" style={{ margin: 0 }}>
            {card.ai.map((a) => (
              <span key={a} className="chip chip-ai">{a}</span>
            ))}
          </div>
        </div>
        <p className="sc-desc">{card.desc}</p>
      </div>
    </article>
  )
}

export default function Practice() {
  const sectionRef = useRef(null)
  const { theme } = useTheme()
  const [stage, setStage] = useState(0)
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 821 : false,
  )

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 821)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const handleStage = useCallback((s) => setStage(s), [])

  return (
    <section
      id="practice"
      ref={sectionRef}
      className="practice-section"
      style={{ position: 'relative', zIndex: 10, height: `${TRACK_VH}vh`, background: 'var(--practice-bg)' }}
    >
      {/* Pinned stage: transparent WebGL canvas + story cards, held for the
          section's scroll range. The themed section background shows through. */}
      <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden' }}>
        <PracticeTree sectionRef={sectionRef} onStageChange={handleStage} />

        {/* section label */}
        <div style={{ position: 'absolute', top: 'clamp(32px,4vw,56px)', left: 'clamp(22px,4vw,48px)', zIndex: 6 }}>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--text-primary)',
              marginBottom: 10,
              opacity: 0.7,
            }}
          >
            02 · Practice
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(24px,2.8vw,36px)',
              fontWeight: 600,
              lineHeight: 1.08,
              letterSpacing: '-0.03em',
              margin: 0,
              color: 'var(--text-primary)',
            }}
          >
            The process,
            <br />
            end to end.
          </h2>
        </div>

        {/* story cards */}
        <div className="practice-card-layer" aria-live="polite">
          <div className="practice-card-shell">
            {practiceStory.map((card, i) => (
              <StoryCard key={card.id} card={card} style={cardStyle(i, stage, isMobile)} />
            ))}
          </div>
        </div>
      </div>

      {/* keep theme referenced for future scene use without remount churn */}
      <span data-theme-marker={theme} style={{ display: 'none' }} />
    </section>
  )
}
