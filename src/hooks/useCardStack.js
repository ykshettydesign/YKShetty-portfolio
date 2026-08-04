import { useEffect } from 'react'

const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v))

/**
 * Scroll-driven stacked-cards effect — a plain-JS port of the Framer Motion
 * `useScroll` + `useTransform` logic in Skiper UI's card-stack (Skiper16).
 *
 * `containerRef` is the tall scroll "track"; `cardRefs.current` is the array of
 * the inner card elements (the ones that scale). Each card wrapper is
 * position: sticky so the cards pin and stack; this hook drives the *scale*:
 * as scroll progresses through the track (0 → 1, matching Framer's
 * ["start start", "end end"]), each card shrinks from 1 → its targetScale within
 * its own slice of the range, so earlier cards recede into a graduated deck
 * while the latest card stays full size.
 *
 *   range i      = [i * 0.25, 1]                         (when card i shrinks)
 *   targetScale  = max(0.5, 1 - (n - 1 - i) * 0.1)       (how far it shrinks)
 *
 * Scaling uses transform-origin: top (set in CSS) so a shrinking card lifts its
 * bottom edge and tucks behind the one in front. Respects reduced-motion
 * (leaves every card at scale 1) and is rAF-throttled.
 */
export function useCardStack(containerRef, cardRefs) {
  useEffect(() => {
    const container = containerRef.current
    const cards = cardRefs.current?.filter(Boolean) ?? []
    if (!container || cards.length === 0) return undefined

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const n = cards.length
    const targetScale = cards.map((_, i) => Math.max(0.5, 1 - (n - 1 - i) * 0.1))
    const rangeStart = cards.map((_, i) => i * 0.25)

    let ticking = false

    const paint = () => {
      ticking = false
      // On compact screens the cards fall back to a plain list (CSS) — skip the
      // scale entirely and clear any leftover transform.
      if (window.matchMedia('(max-width: 640px)').matches) {
        cards.forEach((card) => { card.style.transform = '' })
        return
      }
      const vh = window.innerHeight
      const scrollable = container.offsetHeight - vh
      if (scrollable <= 0) return
      // progress 0 when the track's top hits the viewport top, 1 when its
      // bottom hits the viewport bottom — Framer's ["start start","end end"].
      const scrolled = -container.getBoundingClientRect().top
      const progress = clamp(scrolled / scrollable, 0, 1)

      cards.forEach((card, i) => {
        const rs = rangeStart[i]
        const span = 1 - rs
        const local = span <= 0 ? 1 : clamp((progress - rs) / span, 0, 1)
        const scale = 1 + (targetScale[i] - 1) * local
        card.style.transform = `scale(${scale.toFixed(4)})`
      })
    }

    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(paint)
    }

    paint()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [containerRef, cardRefs])
}

export default useCardStack
