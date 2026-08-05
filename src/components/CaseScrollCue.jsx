import React, { useEffect, useRef } from 'react'

const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v))

/**
 * "Case studies" scroll cue — the exact hero-cue treatment, reused for the
 * purple statement section. It is rendered INSIDE `.statement-sticky` and
 * anchored to its bottom (position: absolute), so it behaves just like the
 * hero's "Scroll" cue: it sits at the bottom edge while the statement is
 * pinned, then — as the pinned block releases — scrolls up and clips out of
 * view with the rest of the section. It is NOT fixed to the viewport.
 *
 * `sectionRef` is the tall `.statement-section` track; its scroll progress
 * fades the cue in as the last line finishes highlighting.
 */
export default function CaseScrollCue({ sectionRef }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    const stmt = sectionRef?.current
    if (!el || !stmt) return undefined

    let ticking = false
    const paint = () => {
      ticking = false
      const vh = window.innerHeight
      // Statement reveal progress (mirrors useStatementReveal): the last line is
      // lit around 0.72 → 0.85, so fade the cue in just after that. Past that the
      // pinned block releases and the cue scrolls away on its own — no opacity
      // fade-out needed, exactly like the hero cue.
      const sScrollable = stmt.offsetHeight - vh
      const sProgress = sScrollable > 0 ? clamp(-stmt.getBoundingClientRect().top / sScrollable, 0, 1) : 0
      const opacity = clamp((sProgress - 0.75) / (0.92 - 0.75), 0, 1)
      el.style.opacity = opacity.toFixed(3)
    }
    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(paint) } }

    paint()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [sectionRef])

  return (
    <div ref={ref} className="hero-scroll-cue hero-scroll-cue--light" aria-hidden="true" style={{ opacity: 0 }}>
      <span className="hero-scroll-cue__label">Case studies</span>
      <span className="hero-scroll-cue__track">
        <span className="hero-scroll-cue__thumb" />
      </span>
    </div>
  )
}
