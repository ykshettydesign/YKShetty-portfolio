import { useEffect, useState } from 'react'

/**
 * Maps scroll progress through the (tall, sticky) Practice section to a
 * discrete stage index 0..3, driving the card-stack + progress dots.
 * Returns the active stage; the component derives per-card transforms
 * from it. Listener is capture+passive and removed on unmount.
 */
export function useProcessCards(sectionRef, count = 4) {
  const [stage, setStage] = useState(0)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return undefined

    const maxStage = count - 1
    let last = -1

    const onScroll = () => {
      const rect = section.getBoundingClientRect()
      const total = section.offsetHeight - window.innerHeight
      const scrolled = Math.max(0, Math.min(total, -rect.top))
      const progress = total > 0 ? scrolled / total : 0
      const next = Math.max(0, Math.min(maxStage, Math.round(progress * maxStage)))
      if (next !== last) {
        last = next
        setStage(next)
      }
    }

    document.addEventListener('scroll', onScroll, { capture: true, passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    onScroll()

    return () => {
      document.removeEventListener('scroll', onScroll, { capture: true })
      window.removeEventListener('resize', onScroll)
    }
  }, [sectionRef, count])

  return stage
}

export default useProcessCards
