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

/** Roughly the sticky header's height — leave this much room above a jump
 *  target so a section's title isn't tucked under the bar. */
const HEADER_OFFSET = 72

/** The live Lenis instance (or null when smooth-scroll is off / not yet
 *  loaded), so other code — e.g. the deep-link scroll on Home — can route its
 *  programmatic scrolls through Lenis instead of fighting it. */
let lenisInstance = null
export function getLenis() {
  return lenisInstance
}

/**
 * Delegated handler so in-page hash links (#work, and /#work while already on
 * home) scroll through Lenis. Without this the browser's native anchor jump is
 * overridden by Lenis holding its own position — the URL changes but the page
 * doesn't move. Returns a detach fn.
 */
function attachAnchorHandler(lenis) {
  // Track the follow-ups from the most recent jump so a new click cancels them.
  let pending = []
  const clearPending = () => {
    pending.forEach(clearTimeout)
    pending = []
  }

  /**
   * Scroll to `target`, then re-issue a couple of times while the layout settles.
   * The Practice section is sized in `vh` and other blocks reveal on scroll, so
   * a target clicked mid-load can shift by thousands of px after the first jump;
   * re-targeting lands it correctly. Bails the moment the visitor scrolls.
   */
  const scrollToResilient = (target) => {
    clearPending()
    const restingTop = HEADER_OFFSET // where the element's top should end up
    let bailed = false
    const bail = () => {
      bailed = true
      clearPending()
      window.removeEventListener('wheel', bail)
      window.removeEventListener('touchstart', bail)
    }
    window.addEventListener('wheel', bail, { passive: true, once: true })
    window.addEventListener('touchstart', bail, { passive: true, once: true })

    lenis.scrollTo(target, { offset: -HEADER_OFFSET })
    pending = [180, 420, 720, 1100].map((delay, i, arr) =>
      setTimeout(() => {
        if (bailed) return
        // Only re-issue if we're not already resting at the target — avoids
        // restarting (and stuttering) the glide once it has arrived.
        if (Math.abs(target.getBoundingClientRect().top - restingTop) > 8) {
          lenis.scrollTo(target, { offset: -HEADER_OFFSET })
        }
        if (i === arr.length - 1) {
          window.removeEventListener('wheel', bail)
          window.removeEventListener('touchstart', bail)
        }
      }, delay),
    )
  }

  const onClick = (e) => {
    // Respect modified clicks / new-tab intents and anything already handled.
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
      return
    }
    const a = e.target.closest('a[href]')
    if (!a) return
    const href = a.getAttribute('href') || ''

    // Same-page hash target: "#work", or "/#work" when we're already on home.
    let hash = ''
    if (href.startsWith('#')) hash = href
    else if (href.startsWith('/#') && window.location.pathname === '/') hash = href.slice(1)
    if (hash.length < 2) return // "" or bare "#"

    let target
    try {
      target = document.querySelector(hash)
    } catch {
      return // malformed selector — let the browser deal with it
    }
    if (!target) return

    e.preventDefault()
    scrollToResilient(target)
    try {
      window.history.pushState(null, '', hash)
    } catch {
      /* history unavailable — non-fatal, the scroll still happened */
    }
  }
  document.addEventListener('click', onClick)
  return () => {
    clearPending()
    document.removeEventListener('click', onClick)
  }
}

export function useLenis(enabled) {
  useEffect(() => {
    if (!enabled) return undefined
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    let lenis
    let rafId
    let cancelled = false
    let detachClicks = () => {}

    import('lenis').then(({ default: Lenis }) => {
      if (cancelled) return
      lenis = new Lenis({ lerp: 0.1, smoothWheel: true })
      lenisInstance = lenis
      const loop = (time) => {
        lenis.raf(time)
        rafId = requestAnimationFrame(loop)
      }
      rafId = requestAnimationFrame(loop)
      detachClicks = attachAnchorHandler(lenis)
    })

    return () => {
      cancelled = true
      detachClicks()
      if (rafId) cancelAnimationFrame(rafId)
      if (lenis) lenis.destroy()
      lenisInstance = null
    }
  }, [enabled])
}

export default useLenis
