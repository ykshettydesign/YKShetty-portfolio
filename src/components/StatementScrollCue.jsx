import React, { useEffect, useRef } from 'react'

const clamp01 = (v) => Math.max(0, Math.min(1, v))

// Statement reveal lights every line by this fraction of the section's scroll
// (mirrors useStatementReveal's FILL_END) — so the last line is fully lit here.
const FADE_START = 0.85
const FADE_END = 0.95 // cue is gone a beat after the last line finishes

/**
 * The hero's scroll cue — same visual and same bottom-centre position — placed
 * in the statement section. Rendered inside `.statement-sticky` so it sits at
 * the bottom of the pinned screen (position: absolute, via the shared
 * `.hero-scroll-cue` styles). Uses the light tone so it reads on purple.
 *
 * Fade timing differs from the hero: rather than fading on the first scroll,
 * the cue stays fully visible through the whole reveal and only fades out once
 * the last statement line has lit (FADE_START → FADE_END of section progress).
 *
 * `sectionRef` is the tall `.statement-section` track.
 */
export default function StatementScrollCue({ sectionRef }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    const section = sectionRef?.current
    if (!el || !section) return undefined

    let ticking = false
    const paint = () => {
      ticking = false
      const vh = window.innerHeight || 1
      const scrollable = section.offsetHeight - vh
      const progress = scrollable > 0 ? clamp01(-section.getBoundingClientRect().top / scrollable) : 0
      const opacity = 1 - clamp01((progress - FADE_START) / (FADE_END - FADE_START))
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
    <div ref={ref} className="hero-scroll-cue hero-scroll-cue--light" aria-hidden="true">
      <span className="hero-scroll-cue__label">Scroll</span>
      <span className="hero-scroll-cue__track">
        <span className="hero-scroll-cue__thumb" />
      </span>
    </div>
  )
}
