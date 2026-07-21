import { useEffect } from 'react'

/**
 * Two scroll-linked hero behaviours, ported 1:1 from the source:
 *  1. As the page scrolls, the hero inner scales down + fades (parallax exit).
 *  2. The drifting gradient blobs speed up with scroll velocity, then ease
 *     back to their resting playback rate.
 *
 * Everything is driven off a single passive scroll listener plus a
 * self-terminating rAF loop; all of it is torn down on unmount.
 */
export function useHeroScroll(heroInnerRef, driftRootRef) {
  useEffect(() => {
    const heroInner = heroInnerRef.current
    const driftRoot = driftRootRef.current
    const blobs = driftRoot ? Array.from(driftRoot.querySelectorAll('[data-drift]')) : []

    let driftRate = 1
    let driftTarget = 1
    let driftRaf = null
    let driftRunning = false
    let lastScrollY = window.scrollY
    let lastScrollT = performance.now()

    const updateHeroScale = () => {
      if (!heroInner) return
      const vh = window.innerHeight || 1
      const progress = Math.min(1, Math.max(0, window.scrollY / vh))
      const scale = 1 - progress * 0.28
      const opacity = 1 - progress * 0.65
      heroInner.style.transform = `scale(${scale.toFixed(3)})`
      heroInner.style.opacity = opacity.toFixed(3)
    }

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
  }, [heroInnerRef, driftRootRef])
}

export default useHeroScroll
