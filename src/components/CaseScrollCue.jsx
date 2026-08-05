import React, { useEffect, useRef } from 'react'

const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v))

/**
 * "Case studies" scroll cue, pinned to the bottom of the viewport (it does NOT
 * scroll). It fades in once the statement's last line finishes highlighting,
 * then — like the hero's "Scroll" cue — disappears the moment the user scrolls
 * on into the case-study section. Its job is done as soon as they start moving.
 *
 * The cue reuses the hero's scroll-cue visual (mono label + animated line),
 * relabelled and light-toned for the purple background.
 */
export default function CaseScrollCue() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined

    let ticking = false
    const paint = () => {
      ticking = false
      const stmt = document.querySelector('.statement-section')
      if (!stmt) return
      const vh = window.innerHeight
      // Statement reveal progress (mirrors useStatementReveal): the last line is
      // lit around 0.72 → 0.85, so fade the cue in across that window.
      const sScrollable = stmt.offsetHeight - vh
      const sProgress = sScrollable > 0 ? clamp(-stmt.getBoundingClientRect().top / sScrollable, 0, 1) : 0
      let opacity = clamp((sProgress - 0.72) / (0.85 - 0.72), 0, 1)
      // Dismiss on scroll (same feel as the hero cue): as the case-study section
      // rises up into the viewport, fade the cue out over a short distance so it
      // vanishes the moment the user scrolls on rather than lingering over the cards.
      const work = document.getElementById('work')
      if (work) {
        const wTop = work.getBoundingClientRect().top
        const out = clamp((vh * 0.75 - wTop) / (vh * 0.2), 0, 1)
        opacity *= 1 - out
      }
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
  }, [])

  return (
    <div ref={ref} className="case-scroll-cue-layer" aria-hidden="true" style={{ opacity: 0 }}>
      <div className="hero-scroll-cue hero-scroll-cue--light">
        <span className="hero-scroll-cue__label">Case studies</span>
        <span className="hero-scroll-cue__track">
          <span className="hero-scroll-cue__thumb" />
        </span>
      </div>
    </div>
  )
}
