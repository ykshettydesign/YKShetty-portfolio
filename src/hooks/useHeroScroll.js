import { useEffect } from 'react'

/**
 * Two scroll-linked hero behaviours:
 *  1. The bottom paragraph is scrubbed 1:1 with scroll — it rises upward
 *     (from ~+26vh toward −62vh) behind the chat cluster and fades out over
 *     p 0.58 → 0.78, so it's gone before the case-study handoff. The chat
 *     cluster itself never moves or re-animates while this happens.
 *  2. The drifting gradient blobs speed up with scroll velocity, then ease
 *     back to their resting playback rate.
 *
 * `p` is scroll progress across the hero's one-viewport pin budget. A single
 * rAF-throttled scroll handler reads scroll once and derives the paragraph
 * transform + opacity from that one value.
 */
export function useHeroScroll(paraRef, driftRootRef) {
  useEffect(() => {
    const driftRoot = driftRootRef.current
    const blobs = driftRoot ? Array.from(driftRoot.querySelectorAll('[data-drift]')) : []

    // ── tunables ──
    const RISE_FROM = 26 // vh at p=0 (below the card)
    const RISE_TO = -62 // vh at p=1 (up and out of view)
    const FADE_START = 0.58
    const FADE_END = 0.78

    const clamp01 = (v) => Math.max(0, Math.min(1, v))

    // ── 1. paragraph scrub (rAF-throttled) ──
    let paraRaf = null
    const updatePara = () => {
      paraRaf = null
      const para = paraRef.current
      if (!para) return
      const vh = window.innerHeight || 1
      const p = clamp01(window.scrollY / vh)
      const riseVh = RISE_FROM + (RISE_TO - RISE_FROM) * p
      para.style.transform = `translateY(${riseVh.toFixed(2)}vh)`
      if (p <= FADE_START) {
        // let the entrance (data-hero-step CSS) own opacity before the fade window
        para.style.opacity = ''
      } else if (p >= FADE_END) {
        para.style.opacity = '0'
      } else {
        para.style.opacity = (1 - (p - FADE_START) / (FADE_END - FADE_START)).toFixed(3)
      }
    }
    const requestPara = () => {
      if (paraRaf == null) paraRaf = requestAnimationFrame(updatePara)
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
      requestPara()
      updateDriftSpeed()
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    updatePara()

    return () => {
      window.removeEventListener('scroll', onScroll)
      if (paraRaf) cancelAnimationFrame(paraRaf)
      if (driftRaf) cancelAnimationFrame(driftRaf)
    }
  }, [paraRef, driftRootRef])
}

export default useHeroScroll
