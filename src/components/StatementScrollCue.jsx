import React, { useEffect, useRef } from 'react'

const clamp01 = (v) => Math.max(0, Math.min(1, v))

/**
 * A direct copy of the hero's scroll cue — same visual, same bottom-centre
 * position, and the same fade-out-on-scroll behaviour — placed in the statement
 * section. Rendered inside `.statement-sticky` so it sits at the bottom of the
 * pinned screen (position: absolute, via the shared `.hero-scroll-cue` styles).
 *
 * Behaviour mirrors useHeroScroll: fully visible at rest, then opacity fades
 * 1 → 0 over the first 15% of a viewport of scroll. The hero measures this from
 * `window.scrollY` (0 = hero at rest); here we measure the statement's own local
 * scroll (0 = its top at the viewport top) so it behaves identically once the
 * section becomes the active screen. Uses the light tone so it reads on purple.
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
      const local = -section.getBoundingClientRect().top // 0 at the section's top, grows on scroll
      const cueOut = clamp01(local / (vh * 0.15))
      el.style.opacity = (1 - cueOut).toFixed(3)
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
