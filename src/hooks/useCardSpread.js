import { useCallback, useState } from 'react'

/**
 * Fanned testimonial deck interaction. Tracks which card is focused
 * (hover on desktop, tap on touch); the component computes each card's
 * translate/rotate/scale/z-index from the active index. Pure state — no
 * listeners to leak.
 */
const OVERLAP = 144
const PUSH = 40

export function useCardSpread(tilts) {
  const [activeIndex, setActiveIndex] = useState(-1)

  const focus = useCallback((i) => setActiveIndex(i), [])
  const rest = useCallback(() => setActiveIndex(-1), [])

  const getTransform = useCallback(
    (j, total) => {
      const bx = j * OVERLAP
      const tilt = tilts[j % tilts.length]
      if (activeIndex === -1) {
        return { x: bx, rot: tilt, scale: 1, z: j }
      }
      const d = j - activeIndex
      if (d === 0) return { x: bx, rot: 0, scale: 1.04, z: 100 }
      return { x: bx + (d < 0 ? -PUSH : PUSH), rot: tilt, scale: 0.98, z: 50 - Math.abs(d) }
    },
    [activeIndex, tilts],
  )

  return { activeIndex, focus, rest, getTransform }
}

export default useCardSpread
