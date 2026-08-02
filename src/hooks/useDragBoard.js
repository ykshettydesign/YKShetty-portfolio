import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

/**
 * Runs the reframe reveal on an active detail block: strike-through the
 * "obvious" brief, fade it back, then float the insight in. Uses the Web
 * Animations API with fill:'both' so the end state sticks.
 */
export function playReframe(block) {
  if (!block) return
  const strike = block.querySelector('[data-strike]')
  const obvious = block.querySelector('[data-obvious]')
  const insight = block.querySelector('[data-insight]')
  if (strike) {
    strike.animate(
      [{ transform: 'scaleX(0)' }, { transform: 'scaleX(1)' }],
      { duration: 500, easing: 'cubic-bezier(.65,.05,.25,1)', fill: 'both' },
    )
  }
  if (obvious) {
    obvious.animate([{ opacity: 1 }, { opacity: 0.5 }], {
      duration: 420, delay: 440, easing: 'ease', fill: 'both',
    })
  }
  if (insight) {
    insight.animate(
      [{ opacity: 0, transform: 'translateY(10px)' }, { opacity: 1, transform: 'translateY(0)' }],
      { duration: 620, delay: 540, easing: 'cubic-bezier(.2,.7,.2,1)', fill: 'both' },
    )
  }
}

const ACCENT = '#7C5CFC'
const SHADOW_REST = '0 2px 12px -4px rgba(0,0,0,.08)'
const SHADOW_ACTIVE = `0 0 0 1px ${ACCENT}, 0 8px 24px -6px rgba(124,92,252,.18)`
const clamp01 = (v) => Math.max(0, Math.min(1, v))

/**
 * Physics drag-and-drop case board. Cards scatter in the left pane and can
 * be dragged (or clicked) into the reader on the right, where the matching
 * case study animates in. A self-terminating rAF loop eases every card
 * toward its target transform; an IntersectionObserver nudges the first
 * card to hint interactivity.
 *
 * The imperative machinery (layout, pointer handlers, rAF, nudge, resize)
 * lives inside one effect and is fully torn down on unmount. React state
 * holds only the active case id, which drives the reader render.
 */
export function useDragBoard(refs, cards) {
  const { boardRef, scatterRef, targetRef, emptyRef, detailRef } = refs

  const [active, setActive] = useState(null)
  const activeRef = useRef(null)
  const applyActiveRef = useRef(() => {})
  const setDropProgressRef = useRef(() => {})

  const cardElsRef = useRef([])
  const setCardRefs = useMemo(
    () => cards.map((_, i) => (el) => { cardElsRef.current[i] = el }),
    [cards],
  )

  useEffect(() => {
    const board = boardRef.current
    const scatter = scatterRef.current
    const target = targetRef.current
    if (!board || !scatter || !target) return undefined

    const cardEls = cardElsRef.current
    if (cardEls.length < cards.length || cardEls.some((el) => !el)) return undefined

    const state = cards.map((c) => ({ id: c.id, seed: c.seed }))
    let bounds = null
    let slotX
    let slotY
    let slotR = -1
    let slotScale = 0.62
    let cardW = 240

    let raf = null
    let running = false
    let stopped = false
    let dragOver = false // the dragged card is currently over the reader drop zone

    // Scroll-linked drop of the first card: `scrub` (0→1) places it along a
    // quadratic-bezier arc between its scatter spot and the reader slot. Any
    // manual activation sets `scrubReleased`, handing the board to the user.
    let scrub = null
    let scrubReleased = false
    let scrubActive = false
    const ARC_LIFT = 90 // px the arc bows upward at its peak
    const arcPoint = (x0, y0, x2, y2, t) => {
      const cx = (x0 + x2) / 2
      const cy = Math.min(y0, y2) - ARC_LIFT
      const mt = 1 - t
      return [mt * mt * x0 + 2 * mt * t * cx + t * t * x2, mt * mt * y0 + 2 * mt * t * cy + t * t * y2]
    }

    const emptyEl = () => emptyRef.current
    const detailEl = () => detailRef.current

    const layout = () => {
      const s = scatter.getBoundingClientRect()
      const b = board.getBoundingClientRect()
      const CARD_W = Math.min(276, Math.max(170, (s.width || 300) - 80))
      const left = s.left - b.left + 14
      const right = s.right - b.left - 14
      const top = s.top - b.top + 44
      const bottom = s.bottom - b.top - 20
      bounds = {
        minX: left,
        maxX: right - CARD_W - 14,
        minY: top,
        maxY: Math.max(top, bottom - 150),
      }
      const usableW = Math.max(0, bounds.maxX - bounds.minX)
      // Set widths first so heights measure correctly, then stack the cards
      // with an EQUAL gap using each card's real height — this keeps the
      // *visible* gaps even even though the cards hold different amounts of
      // text. seed.x still offsets them horizontally; seed.r keeps the tilt.
      state.forEach((c, i) => { cardEls[i].style.width = `${CARD_W}px` })
      const heights = state.map((c, i) => cardEls[i].offsetHeight)
      const totalH = heights.reduce((sum, h) => sum + h, 0)
      const gap = state.length > 1
        ? Math.min(16, Math.max(24, (bottom - top - totalH) / (state.length - 1)))
        : 0
      let cy = top
      state.forEach((c, i) => {
        c.sx = bounds.minX + c.seed.x * usableW
        c.sy = cy
        c.sr = c.seed.r
        cy += heights[i] + gap
        if (c.x === undefined) { c.x = c.sx; c.y = c.sy; c.r = c.sr }
      })
      const t = target.getBoundingClientRect()
      slotScale = 0.62
      const visW = CARD_W * slotScale
      slotX = t.right - b.left - visW - 30
      slotY = t.top - b.top + 42
      slotR = -1
      cardW = CARD_W
    }

    const isOverTarget = (x, y) => {
      const t = target.getBoundingClientRect()
      return x > t.left - 28 && x < t.right + 28 && y > t.top - 28 && y < t.bottom + 28
    }

    const loop = () => {
      if (stopped) { running = false; return }
      let moving = false
      state.forEach((c, i) => {
        const el = cardEls[i]
        if (!el) return
        let tx
        let ty
        let tr
        let targetScale
        const scrubbing = i === 0 && scrub !== null && !scrubReleased && !c.drag && slotX !== undefined
        if (c.drag && c.dragX !== undefined) {
          // lift + tilt the card while it hovers the drop zone, so both sides
          // acknowledge the drop.
          tx = c.dragX; ty = c.dragY; tr = dragOver ? -1 : 0; targetScale = dragOver ? 1.04 : 1; moving = true
        } else if (scrubbing) {
          const [ax, ay] = arcPoint(c.sx, c.sy, slotX, slotY, scrub)
          tx = ax; ty = ay; tr = c.sr + (slotR - c.sr) * scrub
          targetScale = 1 + (slotScale - 1) * scrub
        } else if (c.id === activeRef.current && slotX !== undefined) {
          tx = slotX; ty = slotY; tr = slotR; targetScale = slotScale
        } else {
          tx = c.sx; ty = c.sy; tr = c.sr; targetScale = 1
        }
        if (c.scale === undefined) c.scale = 1
        const k = c.drag ? 0.55 : scrubbing ? 0.4 : c.id === activeRef.current ? 0.2 : 0.16
        c.x += (tx - c.x) * k
        c.y += (ty - c.y) * k
        c.r += (tr - c.r) * k
        c.scale += (targetScale - c.scale) * k
        if (
          Math.abs(tx - c.x) + Math.abs(ty - c.y) + Math.abs(tr - c.r) + Math.abs(targetScale - c.scale) >
          0.05
        ) {
          moving = true
        }
        el.style.transformOrigin = 'top left'
        el.style.transform = `translate(${c.x}px,${c.y}px) rotate(${c.r}deg) scale(${c.scale})`
      })
      if (moving) raf = requestAnimationFrame(loop)
      else running = false
    }

    const ensureLoop = () => {
      if (running || stopped) return
      running = true
      raf = requestAnimationFrame(loop)
    }

    const applyActive = (id) => {
      scrubReleased = true // any manual activation hands the board to the user
      activeRef.current = id
      setActive(id)
      state.forEach((c, i) => {
        const el = cardEls[i]
        if (!el) return
        const on = c.id === id
        el.style.boxShadow = on ? SHADOW_ACTIVE : SHADOW_REST
        el.style.zIndex = on ? '9' : '5'
        c.dragX = undefined
      })
      if (detailEl()) {
        detailEl().style.transition = 'opacity .35s'
        detailEl().style.opacity = id ? '1' : '0'
        detailEl().style.pointerEvents = id ? 'auto' : 'none'
      }
      scatter.style.overflow = id ? 'visible' : 'hidden'
      if (emptyEl()) emptyEl().style.opacity = id ? '0' : '1'
      ensureLoop()
    }
    applyActiveRef.current = applyActive

    // Scroll-driven drop: place the first card along the arc by scroll progress,
    // mounting/unmounting the reader at the boundary and fading its content in
    // once the card is placed at the end of the arc.
    const setDropProgress = (p) => {
      if (scrubReleased || state[0].drag) return
      const t = clamp01(p)
      scrub = t
      const firstId = state[0].id
      if (t > 0.02 && activeRef.current !== firstId) {
        activeRef.current = firstId
        setActive(firstId)
        const el0 = cardEls[0]
        if (el0) { el0.style.boxShadow = SHADOW_ACTIVE; el0.style.zIndex = '9' }
        if (detailEl()) { detailEl().style.transition = 'opacity .4s ease'; detailEl().style.pointerEvents = 'auto' }
        scatter.style.overflow = 'visible'
        if (emptyEl()) emptyEl().style.opacity = '0'
      } else if (t <= 0.02 && scrubActive) {
        activeRef.current = null
        setActive(null)
        const el0 = cardEls[0]
        if (el0) { el0.style.boxShadow = SHADOW_REST; el0.style.zIndex = '5' }
        if (detailEl()) detailEl().style.pointerEvents = 'none'
        if (emptyEl()) emptyEl().style.opacity = '1'
      }
      scrubActive = t > 0.02
      // Reveal the reader content only once the card is essentially placed
      // (end of the arc) — the .4s transition fades it in cleanly on landing,
      // and back out if you scroll away before it settles.
      if (detailEl()) detailEl().style.opacity = t > 0.9 ? '1' : '0'
      ensureLoop()
    }
    setDropProgressRef.current = setDropProgress

    const cardCleanups = []
    const wireCard = (c, i) => {
      const el = cardEls[i]
      let downX = 0
      let downY = 0
      let moved = false
      el.style.touchAction = 'none'

      const onDown = (e) => {
        e.preventDefault()
        c.drag = true
        moved = false
        downX = e.clientX
        downY = e.clientY
        const b = board.getBoundingClientRect()
        c.grabDX = c.x - (e.clientX - b.left)
        c.grabDY = c.y - (e.clientY - b.top)
        el.setPointerCapture(e.pointerId)
        el.style.cursor = 'grabbing'
        el.style.zIndex = '50'
        scatter.style.zIndex = '10'
        scatter.style.overflow = 'visible'
        ensureLoop()
      }
      const onMove = (e) => {
        if (!c.drag) return
        if (Math.abs(e.clientX - downX) + Math.abs(e.clientY - downY) > 6) moved = true
        const b = board.getBoundingClientRect()
        c.dragX = e.clientX - b.left + c.grabDX
        c.dragY = e.clientY - b.top + c.grabDY
        ensureLoop()
        const over = isOverTarget(e.clientX, e.clientY)
        dragOver = over
        // drop-zone affordance on the reader itself (works empty or occupied)
        target.classList.toggle('drop-target-active', over)
        if (over) {
          const lbl = target.querySelector('.drop-label')
          if (lbl) lbl.textContent = activeRef.current ? 'Drop to swap' : 'Release to open'
        }
      }
      const onUp = (e) => {
        if (!c.drag) return
        c.drag = false
        el.style.cursor = 'grab'
        el.style.zIndex = '5'
        scatter.style.zIndex = ''
        const over = isOverTarget(e.clientX, e.clientY)
        dragOver = false
        target.classList.remove('drop-target-active')
        if (over) {
          // release flash on the ring, then clean it up
          target.classList.add('drop-flash')
          setTimeout(() => target.classList.remove('drop-flash'), 300)
        }
        if (!moved || over) {
          applyActive(c.id)
        } else {
          if (activeRef.current === c.id) applyActive(null)
          c.dragX = undefined
        }
        ensureLoop()
      }

      el.addEventListener('pointerdown', onDown)
      el.addEventListener('pointermove', onMove)
      el.addEventListener('pointerup', onUp)
      cardCleanups.push(() => {
        el.removeEventListener('pointerdown', onDown)
        el.removeEventListener('pointermove', onMove)
        el.removeEventListener('pointerup', onUp)
      })
    }

    layout()
    if (detailEl()) { detailEl().style.opacity = '0'; detailEl().style.pointerEvents = 'none' }
    state.forEach((c, i) => wireCard(c, i))
    ensureLoop()

    const onResize = () => layout()
    window.addEventListener('resize', onResize, { passive: true })

    // ── Nudge: hint that the first card is grabbable ──
    let nudgeInterval = null
    let nudgeKick = null
    let nudgeBusy = false
    let nudgeIO = null
    const first = state[0]
    const doNudge = () => {
      if (scrub !== null || activeRef.current || first.drag || nudgeBusy) return
      nudgeBusy = true
      const baseX = first.sx
      const baseY = first.sy
      const baseR = first.sr
      first.sx = baseX + 46
      first.sy = baseY - 22
      first.sr = baseR + 1.5
      const el = cardEls[0]
      if (el && el.animate) {
        el.animate(
          [
            { boxShadow: '0 2px 12px -4px rgba(0,0,0,.08)' },
            { boxShadow: '0 8px 24px -4px rgba(124,92,252,.18)' },
            { boxShadow: '0 2px 12px -4px rgba(0,0,0,.08)' },
          ],
          { duration: 1200, easing: 'ease-in-out' },
        )
      }
      ensureLoop()
      setTimeout(() => {
        if (!(activeRef.current || first.drag)) {
          first.sx = baseX; first.sy = baseY; first.sr = baseR; ensureLoop()
        }
        nudgeBusy = false
      }, 760)
    }
    if (typeof IntersectionObserver !== 'undefined') {
      nudgeIO = new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => {
            if (en.isIntersecting) {
              if (!nudgeInterval) {
                nudgeKick = setTimeout(doNudge, 600)
                nudgeInterval = setInterval(doNudge, 3200)
              }
            } else if (nudgeInterval) {
              clearInterval(nudgeInterval)
              nudgeInterval = null
              if (nudgeKick) { clearTimeout(nudgeKick); nudgeKick = null }
            }
          })
        },
        { threshold: 0.35 },
      )
      nudgeIO.observe(board)
    }

    return () => {
      stopped = true
      if (raf) cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
      cardCleanups.forEach((fn) => fn())
      if (nudgeInterval) clearInterval(nudgeInterval)
      if (nudgeKick) clearTimeout(nudgeKick)
      if (nudgeIO) nudgeIO.disconnect()
      applyActiveRef.current = () => {}
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cards])

  const closeActive = useCallback(() => applyActiveRef.current(null), [])
  const activateCard = useCallback((id) => applyActiveRef.current(id), [])
  const setDropProgress = useCallback((p) => setDropProgressRef.current(p), [])

  return { active, setCardRefs, closeActive, activateCard, setDropProgress }
}

export default useDragBoard
