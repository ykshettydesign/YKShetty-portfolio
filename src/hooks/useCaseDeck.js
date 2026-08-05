import { useEffect } from 'react'

const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v))

const MAX_TINT = 0.5 // opacity of the lavender ghost overlay at the back of the deck

/**
 * Scroll-driven "advancing deck" for the case studies — the netgiro.is effect,
 * but dependency-free (same approach as the old useCardStack: a passive scroll
 * listener writing transforms straight to the DOM, rAF-throttled).
 *
 * A tall `.deck-track` is the scroll distance; a sticky `.deck-sticky` pins the
 * two-column stage while you scroll through it. Progress 0→1 maps to a
 * continuous stack index `s = progress * (n - 1)`. For each card, its relative
 * depth `d = i - s` drives the look:
 *   - front  (d ≈ 0): full size, white, content + left headline lit
 *   - behind (d > 0): nudged up + scaled down + lavender-tinted (deeper = darker)
 *   - passed (d < 0): fades out on top, revealing the promoted card beneath
 * The matching left-column headline cross-fades 1:1 with the front card.
 *
 * Bails on reduced-motion / narrow screens (clearing any inline styles) — CSS
 * then lays the cards out as a plain vertical list.
 */
export function useCaseDeck(trackRef) {
  useEffect(() => {
    const track = trackRef.current
    if (!track) return undefined
    const cards = Array.from(track.querySelectorAll('.deck__card'))
    const leads = Array.from(track.querySelectorAll('.deck-lead__item'))
    const n = cards.length
    if (n === 0) return undefined

    const isStatic = () =>
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      window.matchMedia('(max-width: 760px)').matches

    const clearAll = () => {
      cards.forEach((card) => {
        card.style.transform = ''
        card.style.opacity = ''
        card.style.zIndex = ''
        card.style.pointerEvents = ''
        const tint = card.querySelector('.deck__tint')
        if (tint) tint.style.opacity = ''
        const content = card.querySelector('.deck__content')
        if (content) content.style.opacity = ''
      })
      leads.forEach((lead) => { lead.style.opacity = ''; lead.style.transform = '' })
    }

    let ticking = false
    const paint = () => {
      ticking = false
      if (isStatic()) { clearAll(); return }

      const vh = window.innerHeight
      const scrollable = track.offsetHeight - vh
      if (scrollable <= 0) return
      const progress = clamp(-track.getBoundingClientRect().top / scrollable, 0, 1)
      const s = progress * (n - 1)

      cards.forEach((card, i) => {
        const d = i - s
        let tx = 0
        let ty
        let rot
        let scale
        let opacity
        let z
        if (d >= 0) {
          // Resting fan: each card behind is tilted + nudged up + shrunk a touch,
          // so the deck reads as a rotated stack (like netgiro.is).
          const dd = Math.min(d, 3) // only ever show ~3 cards deep
          rot = -dd * 4.5
          ty = -dd * 9
          scale = 1 - dd * 0.035
          opacity = d > 3.4 ? 0 : 1
          z = 100 - Math.round(dd * 10)
        } else {
          // Leaving card: stays fully opaque and just rotates and flies straight
          // up off the top of the stage (no fade) — the stage clips it cleanly.
          const t = Math.min(-d, 1) // 0 → 1 as it departs
          rot = t * 14
          ty = -t * (vh * 1.25) // travel fully past the viewport top
          tx = -t * 60
          scale = 1 + t * 0.05
          opacity = 1
          z = 160
        }
        // Front + leaving cards keep their content crisp (the card opacity fades
        // the leaving one); only the cards still stacked behind fade their content.
        const contentOpacity = clamp(1 - Math.max(d, 0), 0, 1)
        const tintOpacity = d >= 0 ? clamp(Math.min(d, 3) / 3, 0, 1) * MAX_TINT : 0

        card.style.transform =
          `translate(${tx.toFixed(2)}px, ${ty.toFixed(2)}px) rotate(${rot.toFixed(2)}deg) scale(${scale.toFixed(4)})`
        card.style.opacity = opacity.toFixed(3)
        card.style.zIndex = String(z)
        card.style.pointerEvents = contentOpacity > 0.6 ? 'auto' : 'none'
        const tint = card.querySelector('.deck__tint')
        if (tint) tint.style.opacity = tintOpacity.toFixed(3)
        const content = card.querySelector('.deck__content')
        if (content) content.style.opacity = contentOpacity.toFixed(3)
      })

      leads.forEach((lead, i) => {
        const d = i - s
        lead.style.opacity = clamp(1 - Math.abs(d), 0, 1).toFixed(3)
        lead.style.transform = `translateY(${(d * 18).toFixed(2)}px)`
      })
    }

    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(paint) } }

    paint()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [trackRef])
}

export default useCaseDeck
