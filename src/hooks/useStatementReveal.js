import { useEffect } from 'react'

const MAX_ALPHA = 1 // fully lit

/**
 * Statement lines are rendered fully lit and sharp — the scroll-driven
 * blur/brighten reveal has been removed in favour of a static statement.
 * `lineRefs.current` is the array of the individual line <span>s.
 */
export function useStatementReveal(sectionRef, lineRefs) {
  useEffect(() => {
    const lines = lineRefs.current?.filter(Boolean) ?? []
    if (lines.length === 0) return undefined

    // Render every line fully lit and sharp — no scroll-driven blur/brighten.
    lines.forEach((el) => {
      el.style.color = `rgba(255, 255, 255, ${MAX_ALPHA})`
      el.style.filter = 'none'
      el.style.transform = 'none'
      el.style.textShadow = 'none'
    })
    return undefined
  }, [sectionRef, lineRefs])
}

export default useStatementReveal
