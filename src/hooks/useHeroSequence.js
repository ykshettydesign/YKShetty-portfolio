import { useCallback, useEffect, useRef, useState } from 'react'

const STEP_TIMINGS = [
  [1, 400],
  [2, 1700],
  [3, 2900],
  [4, 4400],
  [5, 5600],
]

/**
 * Drives the 5-step hero "brief → shift" chat sequence.
 * Returns the current step (bound to [data-hero-step] in markup) and a
 * replay() callback. All timers are tracked and cleared on unmount /
 * replay so StrictMode's double invoke can't leak or double-fire.
 */
export function useHeroSequence() {
  const [step, setStep] = useState(0)
  const timersRef = useRef([])
  const rafRef = useRef(null)

  const clearTimers = useCallback(() => {
    timersRef.current.forEach((t) => clearTimeout(t))
    timersRef.current = []
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = null
    }
  }, [])

  const play = useCallback(() => {
    clearTimers()
    setStep(0)
    // Two rAFs mirror the original, letting the initial state paint first.
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = requestAnimationFrame(() => {
        STEP_TIMINGS.forEach(([n, ms]) => {
          timersRef.current.push(setTimeout(() => setStep(n), ms))
        })
      })
    })
  }, [clearTimers])

  useEffect(() => {
    play()
    return clearTimers
  }, [play, clearTimers])

  return { step, replay: play }
}

export default useHeroSequence
