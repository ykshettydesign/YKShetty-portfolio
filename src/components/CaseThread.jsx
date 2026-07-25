import React, { useEffect, useRef, useState } from 'react'
import { caseStudies } from '../data/content'

const Dots = () => (
  <div className="typing-dots" style={{ display: 'flex', gap: 5 }}>
    <span /><span /><span />
  </div>
)

/**
 * CaseThread — the case studies as a continuation of the hero chat.
 *
 * One tall scroll track (one viewport of budget per case) with a sticky
 * stage pinned inside it. The top label is the fixed anchor; the ask bubble
 * and the reply card grow *downward* from it, so swapping a short ask for a
 * taller card never jumps the layout.
 *
 * Scroll drives the active index directly (instant content swap while the
 * user is moving). A trailing idle timer (~140ms after the last scroll)
 * reconciles the active case against absolute scroll position and plays the
 * one "settle" beat: thinking-dots, then the reply card pops in with the
 * same overshoot ease as the hero. This single idle reconcile is the safety
 * net that keeps the thread from ever resting between two cases.
 *
 * Snapping and the word-by-word paragraph reveal are deliberately left for a
 * later pass — this is the continuity core.
 */
export default function CaseThread() {
  const trackRef = useRef(null)
  const [active, setActive] = useState(0)
  // 'live' = show reply instantly (mid-scroll); 'dots' = thinking; 'reply' = settled pop
  const [phase, setPhase] = useState('reply')

  const activeRef = useRef(0)
  const idleRef = useRef(null)
  const beatRef = useRef(null)
  const settledRef = useRef(-1)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return undefined

    const N = caseStudies.length
    const prefersReduced =
      window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const clampIdx = (i) => Math.max(0, Math.min(N - 1, i))
    const indexFromScroll = () => {
      const vh = window.innerHeight || 1
      const top = track.offsetTop
      // round to nearest stage so we resolve to the closest case, not step-per-pixel
      return clampIdx(Math.round((window.scrollY - top) / vh))
    }

    const clearBeat = () => {
      if (beatRef.current) { clearTimeout(beatRef.current); beatRef.current = null }
    }

    // The one settle beat: dots briefly, then pop the reply in.
    const playBeat = (i) => {
      if (settledRef.current === i) return
      settledRef.current = i
      clearBeat()
      setPhase('dots')
      beatRef.current = setTimeout(() => setPhase('reply'), 460)
    }

    const onScroll = () => {
      const i = indexFromScroll()
      if (i !== activeRef.current) {
        activeRef.current = i
        setActive(i)
        settledRef.current = -1        // a new case — its beat hasn't played yet
        if (!prefersReduced) {
          clearBeat()
          setPhase('live')             // instant swap while moving, no typing
        }
      }
      if (idleRef.current) clearTimeout(idleRef.current)
      idleRef.current = setTimeout(onIdle, 140)
    }

    // Trailing reconcile — the safety net. Fires ~140ms after motion stops.
    const onIdle = () => {
      const i = indexFromScroll()
      if (i !== activeRef.current) {
        activeRef.current = i
        setActive(i)
      }
      if (prefersReduced) { setPhase('reply'); return }
      playBeat(i)
    }

    // initial state
    activeRef.current = indexFromScroll()
    setActive(activeRef.current)
    settledRef.current = prefersReduced ? activeRef.current : -1
    if (prefersReduced) setPhase('reply')
    else { setPhase('dots'); beatRef.current = setTimeout(() => setPhase('reply'), 460) }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (idleRef.current) clearTimeout(idleRef.current)
      clearBeat()
    }
  }, [])

  const study = caseStudies[active]
  const showDots = phase === 'dots'
  // reply is visible mid-scroll ('live') and once settled ('reply'); hidden only while "thinking"
  const showReply = phase !== 'dots'

  return (
    <section
      id="work"
      ref={trackRef}
      style={{ position: 'relative', zIndex: 10, marginTop: '-100vh', height: `${caseStudies.length * 100}vh` }}
    >
      <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden', background: 'var(--bg-page)' }}>
        <div className="thread-cluster">
          <div className="thread-label">The problem</div>

          <div className="thread-ask-wrap">
            <div className="thread-ask">{study.problem}</div>
          </div>

          <div className="thread-reply-zone">
            <div className="thread-dots" style={{ opacity: showDots ? 1 : 0 }}>
              <Dots />
            </div>

            <div
              className="thread-reply thread-fade"
              style={{ opacity: showReply ? 1 : 0, pointerEvents: showReply ? 'auto' : 'none' }}
            >
              <article className={`case-card${phase === 'reply' ? ' thread-pop' : ''}`} key={`${study.id}-${phase === 'reply' ? 'pop' : 'live'}`}>
                <div className="case-eyebrow">{study.metaLong}</div>
                <div className="case-title">{study.solution}</div>
                <div className="case-logo" aria-label="Case study logo placeholder">LOGO</div>
                <a href={study.mailto} className="case-view cta-pill">View case study →</a>
              </article>
            </div>
          </div>
        </div>

        <div className="thread-progress" role="presentation">
          {caseStudies.map((c, i) => (
            <span key={c.id} className={i === active ? 'on' : ''} />
          ))}
        </div>
      </div>
    </section>
  )
}
