import { useEffect } from 'react'

const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v))

const MAX_RADIUS = 34 // px — window corner radius when fully inset

// Entrance window (in fractions of the viewport height, measured from the
// section's top edge): the clip is fully windowed at START and fully open
// (full-bleed) by END, so the panel "grows" as it scrolls up into view.
const START = 0.4 // section top 40% up from the viewport bottom → windowed
const END = -0.15 // section scrolled 15%vh past the top → full-bleed

/**
 * "Window" reveal for the dark Practice section. As the section scrolls up into
 * view it starts as a rounded inset panel (the light page showing through as
 * margins) and grows to full-bleed. Drives `--practice-inset` / `--practice-radius`
 * (consumed by the clip-path in global.css) from the section's scroll position.
 *
 * clip-path is a visual mask only — the full-viewport WebGL canvas is never
 * resized, so the 3D tree is unaffected.
 *
 * Respects prefers-reduced-motion: clears the vars (full-bleed) and skips the
 * scroll listener.
 */
export function usePracticeWindow(sectionRef) {
  useEffect(() => {
    const section = sectionRef.current
    if (!section) return undefined

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      section.style.setProperty('--practice-inset', '0px')
      section.style.setProperty('--practice-radius', '0px')
      return undefined
    }

    let ticking = false
    const paint = () => {
      ticking = false
      const vh = window.innerHeight
      const top = section.getBoundingClientRect().top
      // 0 while the section is still low (windowed) → 1 once it settles (open).
      const p = clamp((START * vh - top) / ((START - END) * vh), 0, 1)
      // Side/edge margin: a touch of the container, easing to nothing.
      const maxInset = clamp(window.innerWidth * 0.035, 16, 60)
      const inset = maxInset * (1 - p)
      const radius = MAX_RADIUS * (1 - p)
      section.style.setProperty('--practice-inset', `${inset.toFixed(1)}px`)
      section.style.setProperty('--practice-radius', `${radius.toFixed(1)}px`)
    }

    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(paint)
    }

    paint() // set initial state
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [sectionRef])
}

export default usePracticeWindow
