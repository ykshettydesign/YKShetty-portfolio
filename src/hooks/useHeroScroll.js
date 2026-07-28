import { useEffect } from 'react'

/**
 * Two scroll-linked hero behaviours (the original drag-and-drop hero):
 *  1. Zoom-out: as the page scrolls one viewport, the hero cluster (chat
 *     bubbles) and the tagline scale down 1 → 0.72 and fade 1 → 0.35, so the
 *     drag board reads as rising up over a receding hero.
 *  2. The drifting gradient blobs speed up with scroll velocity, then ease
 *     back to their resting playback rate.
 *
 * A single passive scroll listener drives both, rAF-throttled for the scale.
 */
export function useHeroScroll(heroInnerRef, paraRef, driftRootRef) {
  useEffect(() => {
    const heroInner = heroInnerRef.current
    const driftRoot = driftRootRef.current
    const blobs = driftRoot ? Array.from(driftRoot.querySelectorAll('[data-drift]')) : []

    const clamp01 = (v) => Math.max(0, Math.min(1, v))

    // ── 1. hero zoom-out on scroll (runs directly in the scroll handler, as the
    //    original did — a scale + opacity write is cheap enough not to need rAF) ──
    const updateHeroScale = () => {
      const vh = window.innerHeight || 1
      const progress = clamp01(window.scrollY / vh)
      const scale = 1 - progress * 0.28 // 1 → 0.72
      const opacity = 1 - progress * 0.65 // 1 → 0.35
      if (heroInner) {
        // preserve the cluster's translateX(-50%) centering, add the zoom
        heroInner.style.transform = `translateX(-50%) scale(${scale.toFixed(3)})`
        heroInner.style.opacity = opacity.toFixed(3)
      }
      const para = paraRef && paraRef.current
      if (para) {
        para.style.transform = `scale(${scale.toFixed(3)})`
        para.style.opacity = opacity.toFixed(3)
      }
    }
    // ── 2. blob drift velocity ──
    let driftRate = 1
    let driftTarget = 1
    let driftRaf = null
    let driftRunning = false
    let lastScrollY = window.scrollY
    let lastScrollT = performance.now()

    const driftLoop = () => {
      driftRate += (driftTarget - driftRate) * 0.12
      driftTarget += (1 - driftTarget) * 0.04
      blobs.forEach((el) => {
        if (el.getAnimations) el.getAnimations().forEach((a) => { a.playbackRate = driftRate })
      })
      if (Math.abs(driftRate - 1) > 0.02 || Math.abs(driftTarget - 1) > 0.02) {
        driftRaf = requestAnimationFrame(driftLoop)
      } else {
        driftRate = 1
        driftTarget = 1
        blobs.forEach((el) => {
          if (el.getAnimations) el.getAnimations().forEach((a) => { a.playbackRate = 1 })
        })
        driftRunning = false
      }
    }
    const ensureDriftLoop = () => {
      if (driftRunning || !blobs.length) return
      driftRunning = true
      driftRaf = requestAnimationFrame(driftLoop)
    }
    const updateDriftSpeed = () => {
      const now = performance.now()
      const dy = Math.abs(window.scrollY - lastScrollY)
      const dt = Math.max(16, now - lastScrollT)
      const velocity = dy / dt
      driftTarget = Math.min(9, 1 + velocity * 20)
      lastScrollY = window.scrollY
      lastScrollT = now
      ensureDriftLoop()
    }

    const onScroll = () => {
      updateHeroScale()
      updateDriftSpeed()
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    updateHeroScale()

    return () => {
      window.removeEventListener('scroll', onScroll)
      if (driftRaf) cancelAnimationFrame(driftRaf)
    }
  }, [heroInnerRef, paraRef, driftRootRef])
}

export default useHeroScroll
