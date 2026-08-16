import React, { useCallback, useEffect, useRef, useState } from 'react'
import { practiceStory } from '../data/content'
import { useTheme } from '../theme/ThemeContext'
import PracticeTree from './PracticeTree'
import ErrorBoundary from './ErrorBoundary'
import { usePracticeWindow } from '../hooks/usePracticeWindow'

// Number of viewport-heights of scroll track that drive the growth sequence.
const TRACK_VH = 560

// Fixed resting transform per card — keyed ONLY by the card's own index.
// A card settles at its own angle/offset once placed and never moves again,
// even as newer cards stack on top of it.
const CARD_ROT = [0, -1.5, 1.5, -2, 2]
const CARD_OFF_X = [0, -6, 5, -5, 6]

function cardStyle(k, active, isMobile) {
  const restY = isMobile ? '0px' : '-50%'
  // Placed card (current or already passed): hold its fixed resting pose.
  if (k <= active) {
    const rot = CARD_ROT[k] ?? 0
    const ox = CARD_OFF_X[k] ?? 0
    const ty = isMobile ? '0px' : restY
    // Newer cards sit on top; a placed card keeps its exact pose forever.
    return { transform: `translate(${ox}px, ${ty}) rotate(${rot}deg)`, opacity: 1, zIndex: 10 + k }
  }
  // Upcoming card: waiting off-screen below.
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
  const [webglFailed, setWebglFailed] = useState(false)
  const handleWebGLUnavailable = useCallback(() => setWebglFailed(true), [])
  const trackRef = useRef(null)

  // "Window" reveal: the dark section grows from a rounded inset panel to
  // full-bleed as it scrolls into view (drives clip-path via CSS vars).
  usePracticeWindow(sectionRef)

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
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: 'clamp(40px,6vw,72px) clamp(22px,5vw,44px) clamp(28px,4.5vw,52px)', textAlign: 'center' }}>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: 'var(--text-on-inverse-soft)',
            marginBottom: 14,
          }}
        >
          Practice
        </div>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(28px,3.8vw,44px)',
            fontWeight: 600,
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            margin: '0 auto',
            maxWidth: '18ch',
            color: 'var(--text-on-inverse)',
          }}
        >
          Five things I believe.
        </h2>
      </div>

      {/* Animation track: the scroll distance that drives the growth. The stage
          pins within it, so progress starts exactly when the tree is on screen
          (the intro has scrolled away). */}
      <div ref={trackRef} style={{ position: 'relative', height: `${TRACK_VH}vh` }}>
        <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden' }}>
          {webglFailed && <div className="practice-tree-fallback" aria-hidden="true" />}

          <ErrorBoundary fallback={null}>
            <PracticeTree
              sectionRef={trackRef}
              onStageChange={handleStage}
              onWebGLUnavailable={handleWebGLUnavailable}
            />
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
