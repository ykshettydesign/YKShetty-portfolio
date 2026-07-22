import React, { useCallback, useEffect, useRef, useState } from 'react'
import { practiceStory } from '../data/content'
import { useTheme } from '../theme/ThemeContext'
import PracticeTree from './PracticeTree'
import ErrorBoundary from './ErrorBoundary'

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
  const trackRef = useRef(null)

  return (
    <section
      id="practice"
      ref={sectionRef}
      className="practice-section"
      style={{ position: 'relative', zIndex: 10, background: 'var(--practice-bg)' }}
    >
      {/* Intro heading — normal flow, aligned to the page's 1100px column so it
          sits on-grid with the rest of the site, then scrolls away as the
          animation track pins below it. Text is light because the Practice
          backdrop is always dark (in both themes). */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: 'clamp(64px,9vw,120px) clamp(22px,5vw,44px) clamp(40px,6vw,72px)' }}>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--text-on-inverse-soft)',
            marginBottom: 14,
          }}
        >
          02 · Practice
        </div>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(28px,3.8vw,44px)',
            fontWeight: 600,
            lineHeight: 1.02,
            letterSpacing: '-0.03em',
            margin: 0,
            maxWidth: '18ch',
            color: 'var(--text-on-inverse)',
          }}
        >
          The process, end to end.
        </h2>
      </div>

      {/* Animation track: the scroll distance that drives the growth. The stage
          pins within it, so progress starts exactly when the tree is on screen
          (the intro has scrolled away). */}
      <div ref={trackRef} style={{ position: 'relative', height: `${TRACK_VH}vh` }}>
        <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden' }}>
          <ErrorBoundary fallback={null}>
            <PracticeTree sectionRef={trackRef} onStageChange={handleStage} />
          </ErrorBoundary>

          {/* story cards */}
          <div className="practice-card-layer" aria-live="polite">
            <div className="practice-card-shell">
              {practiceStory.map((card, i) => (
                <StoryCard key={card.id} card={card} style={cardStyle(i, stage, isMobile)} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* keep theme referenced for future scene use without remount churn */}
      <span data-theme-marker={theme} style={{ display: 'none' }} />
    </section>
  )
}
