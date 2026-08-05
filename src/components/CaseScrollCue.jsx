import React, { useEffect, useRef } from 'react'

const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v))

/**
 * Fixed dark fade + "Case studies" scroll cue, pinned to the bottom of the
 * viewport (it does NOT scroll). It fades in once the statement's last line
 * finishes highlighting, stays put while the case-study cards scroll up over
 * the purple, and fades out as the Practice/tree section arrives.
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
      // Fade back out as the tree section rises into view.
      const tree = document.getElementById('practice')
      if (tree) {
        const treeIn = clamp((vh - tree.getBoundingClientRect().top) / (vh * 0.6), 0, 1)
        opacity *= 1 - treeIn
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
      <div className="case-scroll-cue-layer__fade" />
      <div className="hero-scroll-cue hero-scroll-cue--light">
        <span className="hero-scroll-cue__label">Case studies</span>
        <span className="hero-scroll-cue__track">
          <span className="hero-scroll-cue__thumb" />
        </span>
      </div>
    </div>
  )
}
