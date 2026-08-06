import { useEffect } from 'react'

const MIN_ALPHA = 0.18 // resting (dim) text opacity
const MAX_ALPHA = 1 // fully lit
const FILL_END = 1 // the reveal fills the whole scroll track, so the last line
//                    lights right as the section releases and the next section
//                    starts scrolling in — no dead pinned scroll afterwards.
const BLUR_MAX = 6 // px — each line resolves from soft-focus to sharp as it lights
const LIFT_MAX = 10 // px — and settles up into place while it does

const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v))

/**
 * Scroll-driven, line-by-line color reveal for the statement section.
 * `sectionRef` is the tall scroll "track"; `lineRefs.current` is the array
 * of the individual line <span>s inside the pinned inner block.
 *
 * As the track scrolls past, each line's text-color alpha ramps
 * MIN_ALPHA → MAX_ALPHA within its own slice of the scroll range, so the
 * lines brighten in sequence. Mirrors the montone.studio effect; a short
 * CSS `transition` on the spans smooths the per-frame updates.
 *
 * Respects prefers-reduced-motion: lights every line fully and skips the
 * scroll listener entirely.
 */
export function useStatementReveal(sectionRef, lineRefs) {
  useEffect(() => {
    const section = sectionRef.current
    const lines = lineRefs.current?.filter(Boolean) ?? []
    if (!section || lines.length === 0) return undefined

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      lines.forEach((el) => {
        el.style.color = `rgba(255, 255, 255, ${MAX_ALPHA})`
        el.style.filter = 'none'
        el.style.transform = 'none'
      })
      return undefined
    }

    const lastIndex = lines.length - 1

    let ticking = false

    const paint = () => {
      ticking = false
      const scrollable = section.offsetHeight - window.innerHeight
      if (scrollable <= 0) return
      // How far the section's top has travelled above the viewport top, 0→1.
      const scrolled = -section.getBoundingClientRect().top
      const progress = clamp(scrolled / scrollable, 0, 1)
      const eased = clamp(progress / FILL_END, 0, 1)

      const step = 1 / lines.length
      lines.forEach((el, i) => {
        const local = clamp((eased - i * step) / step, 0, 1)
        const alpha = MIN_ALPHA + (MAX_ALPHA - MIN_ALPHA) * local
        const blur = (1 - local) * BLUR_MAX
        const lift = (1 - local) * LIFT_MAX
        el.style.color = `rgba(255, 255, 255, ${alpha.toFixed(3)})`
        el.style.filter = blur > 0.05 ? `blur(${blur.toFixed(2)}px)` : 'none'
        el.style.transform = `translateY(${lift.toFixed(2)}px)`
        // The final line lands with a beat: a soft white glow blooms in over the
        // last stretch of its reveal, so the payoff line "arrives" rather than
        // just brightening like the rest.
        if (i === lastIndex) {
          const glow = clamp((local - 0.6) / 0.4, 0, 1)
          el.style.textShadow = glow > 0
            ? `0 0 ${(glow * 24).toFixed(1)}px rgba(255, 255, 255, ${(glow * 0.5).toFixed(3)})`
            : 'none'
        }
      })
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
  }, [sectionRef, lineRefs])
}

export default useStatementReveal
