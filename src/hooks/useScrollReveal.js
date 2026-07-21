import { useEffect } from 'react'

/**
 * Observes every [data-reveal] element within `rootRef` and flips it to
 * [data-reveal="visible"] once it scrolls into view (one-shot).
 * Cleans the observer up on unmount — safe under StrictMode double-mount.
 */
export function useScrollReveal(rootRef) {
  useEffect(() => {
    const root = rootRef.current
    if (!root || typeof IntersectionObserver === 'undefined') return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-reveal', 'visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -20px 0px' },
    )

    root.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [rootRef])
}

export default useScrollReveal
