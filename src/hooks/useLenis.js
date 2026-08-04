import { useEffect } from 'react'

/**
 * Optional Lenis smooth-scroll — the same library montone.studio runs for its
 * "gliding" scroll feel. Off by default (see SMOOTH_SCROLL in Home.jsx); flip
 * it on to compare against native scrolling.
 *
 * Lenis still scrolls the real window, so window.scrollY / scroll events keep
 * firing — the statement reveal and the sticky hero work unchanged whether this
 * is on or off. Skipped under prefers-reduced-motion. Lenis is dynamically
 * imported so it only ships in the bundle when actually enabled.
 */
export function useLenis(enabled) {
  useEffect(() => {
    if (!enabled) return undefined
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    let lenis
    let rafId
    let cancelled = false

    import('lenis').then(({ default: Lenis }) => {
      if (cancelled) return
      lenis = new Lenis({ lerp: 0.1, smoothWheel: true })
      const loop = (time) => {
        lenis.raf(time)
        rafId = requestAnimationFrame(loop)
      }
      rafId = requestAnimationFrame(loop)
    })

    return () => {
      cancelled = true
      if (rafId) cancelAnimationFrame(rafId)
      if (lenis) lenis.destroy()
    }
  }, [enabled])
}

export default useLenis
