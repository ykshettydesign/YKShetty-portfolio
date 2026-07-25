import React, { useEffect, useRef, useState } from 'react'
import { hero, caseStudies, profile, CONTACT_EMAIL } from '../data/content'

// gradient blobs — carried over from the hero so the animated backdrop is
// continuous across the whole thread
const BLOBS = [
  { w: '34vw', maxW: 420, top: '16%', left: '24%', color: 'var(--blob-1)', blur: 70, anim: 'drift1 9s ease-in-out infinite' },
  { w: '26vw', maxW: 340, top: '34%', right: '22%', color: 'var(--blob-2)', blur: 70, anim: 'drift2 11s ease-in-out infinite' },
  { w: '36vw', maxW: 440, bottom: '12%', left: '32%', color: 'var(--blob-3)', blur: 90, anim: 'drift3 13s ease-in-out infinite' },
  { w: '22vw', maxW: 280, top: '26%', right: '34%', color: 'var(--blob-4)', blur: 80, anim: 'drift4 10s ease-in-out infinite' },
]

// ── tunables ──
const PACE = 1.875 // higher = snappier chat-bubble beat (label→ask→dots→reply). 1.875 ≈ 1.5× the old 1.25
const HERO_STAGE = 0.5 // viewports of scroll budget for the hero swing — halved from 1.0 so the card rises to peak in half the scroll (2× faster ascent)
const CASE_STAGE = 0.8 // viewports per subsequent case
const LIFT_VH = -28 // card lift at mid-swing
const TILT = -5 // card tilt (deg) at mid-swing
const AUTO_AT = 0.5 // auto-finish trigger point in the hero stage (peak of the swing)
const RETURN_MS = 500 // auto-finish return-glide duration (independent of PACE) — faster swing-back, still smooth (well above the janky ~300 range)
const CASE_LIFT_PX = -44 // gentle lift between cases
const EASE = 0.26 // per-frame easing for the displayed swing (higher = snappier, less lag) — raised to keep the faster ascent tracking tightly
const SETTLED = 0.99 // displayed progress at which the swing counts as visually re-centred

// paragraph parallax — travels faster than the card so it overtakes it
const PARA_FROM = 26 // vh at p=0
const PARA_TO = -96 // vh at full travel (bigger span = faster than the card)
const PARA_SPAN = 0.62 // fraction of the stage it takes to complete the rise
const PARA_DIM_SPAN = 0.55 // scroll range over which words dim, from the first scroll

const clamp01 = (v) => Math.max(0, Math.min(1, v))

const reveal = (on, from = 'translateY(14px) scale(0.96)', dur = 520) => ({
  opacity: on ? 1 : 0,
  transform: on ? 'translateY(0) scale(1)' : from,
  transformOrigin: 'left center',
  transition: `opacity ${dur}ms cubic-bezier(0.16,1,0.3,1), transform ${dur}ms cubic-bezier(0.34,1.56,0.64,1)`,
  willChange: 'opacity, transform',
})

const Dots = () => (
  <div className="typing-dots" style={{ display: 'flex', gap: 5 }}>
    <span /><span /><span />
  </div>
)

/**
 * ChatThread — the hero exchange and case studies as ONE continuous chat, on a
 * single card that is never remounted.
 *
 * HERO STAGE (~3 viewports): the card is vertically centred and performs one
 * sine swing tied 1:1 to scroll — lifts to −28vh + tilts −5°, then returns to
 * centre by the end (`sin(π·p)`). The paragraph reveals behind it, rising and
 * fading before the swap. Past 55% of the stage (going down) the scroll
 * auto-finishes to the end so the card reliably re-centres, and the swap beat
 * fires: hero bubbles fade → content swaps while hidden → thinking dots → the
 * case reply pops in. Scrolling back up restores the hero.
 *
 * CASE STAGES: cases 2..N chain with the lighter beat (a ~44px lift + the same
 * think→reply), resolved on a trailing idle so fast scrolling doesn't restart
 * the typing on every event.
 *
 * Per-frame visuals are written to the DOM; React state holds only step/phase.
 */
export default function ChatThread() {
  const N = caseStudies.length
  const trackRef = useRef(null)
  const paraRef = useRef(null)
  const driftRef = useRef(null)
  const cardRef = useRef(null)

  const [step, setStep] = useState(0) // 1 label · 2 ask · 3 dots · 4 reply
  const [phase, setPhase] = useState(0) // 0 hero · 1..N cases

  const phaseRef = useRef(0)
  const timersRef = useRef([])
  const autoRef = useRef(false)
  const dispRef = useRef(0)
  const lastYRef = useRef(null)
  const landedRef = useRef(false) // hero has finished its entrance
  const pendingBeatRef = useRef(false) // scroll parked at stage end; waiting for the swing to visually re-centre before the swap beat

  const paraWords = profile.tagline.split(' ')

  useEffect(() => {
    const track = trackRef.current
    const drift = driftRef.current
    if (!track) return undefined
    const blobEls = drift ? Array.from(drift.querySelectorAll('[data-drift]')) : []
    const prefersReduced =
      window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (history.scrollRestoration) history.scrollRestoration = 'manual'

    const g = (ms) => Math.round(ms / PACE)
    const clearTimers = () => { timersRef.current.forEach(clearTimeout); timersRef.current = [] }

    // ── on-load hero sequence (timers scheduled directly so a throttled
    //    rAF can't stall the reveal) ──
    const playHero = () => {
      clearTimers(); autoRef.current = false; pendingBeatRef.current = false; phaseRef.current = 0; setPhase(0); setStep(0)
      landedRef.current = false
      if (prefersReduced) { setStep(4); landedRef.current = true; return }
      ;[[1, 400], [2, 1700], [3, 2900], [4, 4400]].forEach(([s, ms]) => timersRef.current.push(setTimeout(() => setStep(s), g(ms))))
      // the reply's entrance runs 560ms past step 4 — only then has it "landed"
      timersRef.current.push(setTimeout(() => { landedRef.current = true }, g(4400) + 620))
    }

    // ── the swap beat: fade bubbles → swap while hidden → dots → reply ──
    const playBeat = (ph) => {
      if (phaseRef.current === ph) return
      phaseRef.current = ph
      clearTimers()
      setStep(1)
      timersRef.current.push(setTimeout(() => setPhase(ph), g(480)))
      timersRef.current.push(setTimeout(() => setStep(2), g(560)))
      timersRef.current.push(setTimeout(() => setStep(3), g(1020)))
      timersRef.current.push(setTimeout(() => setStep(4), g(1900)))
    }
    const toHero = () => {
      autoRef.current = false; pendingBeatRef.current = false
      if (phaseRef.current === 0) return
      clearTimers(); phaseRef.current = 0; setPhase(0); setStep(4)
      landedRef.current = true // restored fully formed — ready to swap again
    }

    // ── auto-finish: bring the swing home over an easeOutCubic timeline.
    //    CRITICAL: the card's swing is driven by this timeline (dispRef), NOT by
    //    window.scrollY. During the glide the browser's residual inertial/momentum
    //    scroll fights our scrollTo and makes scrollY oscillate; if the card read
    //    scrollY it would jitter. Decoupled, the card decelerates cleanly from its
    //    current lifted/tilted position to dead-centre while the page catches up
    //    underneath it. `p`→transform only; the timed beat→opacity only. ──
    const autoFinish = (start, target) => {
      autoRef.current = true
      const dispStart = dispRef.current // continue the swing seamlessly from where it visibly is
      const t0 = performance.now(); const dur = RETURN_MS
      const ease = (k) => 1 - Math.pow(1 - k, 3)
      const stepFn = (now) => {
        if (!autoRef.current) return
        const k = clamp01((now - t0) / dur)
        dispRef.current = dispStart + (1 - dispStart) * ease(k) // smooth card return, jitter-proof
        window.scrollTo(0, start + (target - start) * ease(k)) // page glides to the stage end
        if (k < 1) requestAnimationFrame(stepFn)
        else { dispRef.current = 1; autoRef.current = false; if (phaseRef.current === 0) playBeat(1) }
      }
      requestAnimationFrame(stepFn)
    }

    // ── blob drift velocity ──
    let driftRate = 1, driftTarget = 1, driftRaf = null, driftRunning = false
    let lastBlobY = window.scrollY, lastBlobT = performance.now()
    const driftLoop = () => {
      driftRate += (driftTarget - driftRate) * 0.12
      driftTarget += (1 - driftTarget) * 0.04
      blobEls.forEach((el) => { if (el.getAnimations) el.getAnimations().forEach((a) => { a.playbackRate = driftRate }) })
      if (Math.abs(driftRate - 1) > 0.02 || Math.abs(driftTarget - 1) > 0.02) driftRaf = requestAnimationFrame(driftLoop)
      else { driftRate = 1; driftTarget = 1; blobEls.forEach((el) => { if (el.getAnimations) el.getAnimations().forEach((a) => { a.playbackRate = 1 }) }); driftRunning = false }
    }
    const bumpDrift = () => {
      const now = performance.now()
      driftTarget = Math.min(9, 1 + (Math.abs(window.scrollY - lastBlobY) / Math.max(16, now - lastBlobT)) * 20)
      lastBlobY = window.scrollY; lastBlobT = now
      if (!driftRunning && blobEls.length) { driftRunning = true; driftRaf = requestAnimationFrame(driftLoop) }
    }

    // ── case index + settle bookkeeping (cases 2..N) ──
    const caseIndex = () => {
      const vh = window.innerHeight || 1
      const cs = (window.scrollY - track.offsetTop) - HERO_STAGE * vh
      return Math.min(N, 1 + Math.floor(cs / (CASE_STAGE * vh)))
    }
    let stableFrames = 0
    let lastFrameY = window.scrollY

    // ── per-frame scroll handler ──
    const frame = () => {
      const vh = window.innerHeight || 1
      const heroBudget = HERO_STAGE * vh
      const rect = track.getBoundingClientRect()
      if (rect.bottom < 0 || rect.top > vh) return // section off-screen — skip

      const s = window.scrollY - track.offsetTop
      const rawHero = clamp01(s / heroBudget)

      const y = window.scrollY
      const goingDown = lastYRef.current == null || y >= lastYRef.current
      lastYRef.current = y
      if (y === lastFrameY) stableFrames += 1
      else stableFrames = 0
      lastFrameY = y

      // displayed progress for the swing. During auto-finish the return is owned
      // by autoFinish's timeline (immune to scroll jitter) — don't touch dispRef.
      // Manual scrubbing eases dispRef toward the scroll-derived progress.
      if (!autoRef.current) {
        dispRef.current += (rawHero - dispRef.current) * EASE
        if (Math.abs(rawHero - dispRef.current) < 0.0004) dispRef.current = rawHero
      }

      if (!autoRef.current) {
        if (phaseRef.current === 0) {
          // HERO. `p` (rawHero/dispRef) only ever drives the transform below.
          // The swap beat — the ONLY thing that fades the bubbles — fires
          // strictly after the swing has re-centred, never from scroll.
          if (pendingBeatRef.current) {
            // parked at the stage end: wait for the displayed swing to settle
            // at centre, THEN fade+swap. Abandon if the user scrolls back up.
            if (rawHero < 0.9) pendingBeatRef.current = false
            else if (dispRef.current >= SETTLED) {
              pendingBeatRef.current = false
              if (prefersReduced) { phaseRef.current = 1; setPhase(1); setStep(4) } else playBeat(1)
            }
          } else if (goingDown && rawHero >= AUTO_AT && landedRef.current) {
            // never interrupt the hero mid-landing — let it fully arrive first
            autoFinish(y, track.offsetTop + heroBudget)
          } else if (s >= heroBudget && stableFrames > 8) {
            // scrolled clean past the stage without auto-finishing (e.g. a fast
            // fling before the entrance landed): arm the beat so it fires once
            // dispRef has settled at centre.
            pendingBeatRef.current = true
          }
        } else {
          // CASE phases (1..N)
          if (!goingDown && s < heroBudget && rawHero < 0.4) toHero()
          else if (s >= heroBudget && stableFrames > 8) {
            const ph = caseIndex()
            if (ph !== phaseRef.current) { if (prefersReduced) { phaseRef.current = ph; setPhase(ph); setStep(4) } else playBeat(ph) }
          }
        }
      }

      // card transform: swing (hero) or gentle lift (cases)
      if (cardRef.current) {
        if (phaseRef.current === 0) {
          const wave = Math.sin(Math.PI * dispRef.current)
          cardRef.current.style.transform = `translateX(-50%) translateY(${(LIFT_VH * wave).toFixed(2)}vh) rotate(${(TILT * wave).toFixed(2)}deg)`
        } else {
          const cs = s - heroBudget
          const frac = clamp01((cs - (phaseRef.current - 1) * CASE_STAGE * vh) / (CASE_STAGE * vh))
          cardRef.current.style.transform = `translateX(-50%) translateY(${(CASE_LIFT_PX * frac).toFixed(1)}px)`
        }
      }

      // paragraph: starts dark and fully readable, then travels up FASTER than
      // the card while each word dims in turn — the dimming begins on the very
      // first scroll (threshold 0 for the first word).
      const para = paraRef.current
      if (para) {
        const riseVh = PARA_FROM + (PARA_TO - PARA_FROM) * clamp01(rawHero / PARA_SPAN)
        const op = phaseRef.current !== 0 ? 0 : 1 - clamp01((rawHero - 0.58) / 0.2)
        para.style.transform = `translateY(${riseVh.toFixed(2)}vh)`
        para.style.opacity = String(op)
        const spans = para.querySelectorAll('.rc-word')
        const n = Math.max(1, spans.length - 1)
        spans.forEach((el, i) => {
          const threshold = (i / n) * PARA_DIM_SPAN
          const dim = clamp01((rawHero - threshold) / 0.06) // 0 = dark, 1 = faded
          const next = dim <= 0
            ? 'var(--text-body)'
            : `color-mix(in srgb, var(--text-body) ${Math.round((1 - dim) * 100)}%, var(--border-fade))`
          if (el._c !== next) { el.style.color = next; el._c = next } // only repaint changed words
        })
      }

      bumpDrift()
    }

    // continuous rAF loop keeps the eased swing smooth every frame; the
    // scroll/resize listeners are fallbacks for when rAF is throttled
    let running = true
    let loopRaf = null
    const loop = () => { if (!running) return; loopRaf = requestAnimationFrame(loop); frame() }

    window.scrollTo(0, 0)
    playHero()
    loop()
    window.addEventListener('scroll', frame, { passive: true })
    window.addEventListener('resize', frame)
    return () => {
      running = false
      window.removeEventListener('scroll', frame)
      window.removeEventListener('resize', frame)
      clearTimers()
      if (loopRaf) cancelAnimationFrame(loopRaf)
      if (driftRaf) cancelAnimationFrame(driftRaf)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const isHero = phase === 0
  const study = isHero ? null : caseStudies[phase - 1]
  const label = isHero ? hero.askLabel : 'The problem'
  const ask = isHero ? hero.brief : study.problem
  const askStyle = isHero
    ? { fontSize: 'clamp(18px,2.2vw,24px)', fontWeight: 500, lineHeight: 1.3 }
    : { fontSize: 'clamp(16px,2vw,18px)', fontWeight: 500, lineHeight: 1.35 }

  return (
    <section
      id="work"
      ref={trackRef}
      data-thread-step={step}
      style={{ position: 'relative', zIndex: 10, height: `${Math.round((HERO_STAGE + N * CASE_STAGE) * 100)}vh` }}
    >
      <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden', background: 'var(--bg-page)' }}>
        {/* gradient backdrop */}
        <div ref={driftRef} style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', top: -28 }}>
          {BLOBS.map((b, i) => (
            <div
              key={i}
              data-drift=""
              style={{
                position: 'absolute', width: b.w, height: b.w, maxWidth: b.maxW, maxHeight: b.maxW,
                top: b.top, bottom: b.bottom, left: b.left, right: b.right, borderRadius: '50%',
                background: `radial-gradient(circle, ${b.color}, transparent 70%)`, filter: `blur(${b.blur}px)`,
                animation: b.anim, willChange: 'transform',
              }}
            />
          ))}
        </div>

        {/* bottom paragraph — behind the card, rises + word-lights on scroll */}
        <div className="hero-para-layer">
          <div ref={paraRef} className="hero-post">
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.65, margin: '0 0 24px', textAlign: 'center' }}>
              {paraWords.map((w, i) => (
                <span key={i} className="rc-word" style={{ color: 'var(--text-body)' }}>{w}{i < paraWords.length - 1 ? ' ' : ''}</span>
              ))}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 22, alignItems: 'center', fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 500, justifyContent: 'center' }}>
              <a href="#work" className="text-link text-link--primary" style={{ paddingBottom: 3 }}>Case studies ↓</a>
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-link text-link--muted">Say hello</a>
            </div>
          </div>
        </div>

        {/* the morphing chat card — centred, swings then re-centres for the swap */}
        <div ref={cardRef} className="hero-cluster" style={{ willChange: 'transform' }}>
          <div className="thread-label" style={reveal(step >= 1, 'translateY(8px)', 380)}>{label}</div>

          <div className="thread-ask-wrap" style={{ marginBottom: 16 }}>
            <div className="thread-ask" style={{ ...askStyle, ...reveal(step >= 2) }}>{ask}</div>
          </div>

          <div className="thread-reply-zone">
            <div className="thread-dots" style={{ opacity: step === 3 ? 1 : 0, transition: 'opacity .25s' }}>
              <Dots />
            </div>
            <div style={reveal(step >= 4, 'translateY(20px) scale(0.92)', 560)}>
              {isHero ? (
                <div className="case-card" style={{ borderRadius: '20px 20px 4px 20px' }}>
                  <div className="case-eyebrow">{hero.replyLabel}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(21px,2.9vw,32px)', fontWeight: 600, lineHeight: 1.15, letterSpacing: '-0.02em' }}>
                    {hero.replyMain}
                  </div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, lineHeight: 1.5, color: 'var(--text-muted)', marginTop: 12 }}>
                    {hero.replyFoot}
                  </div>
                </div>
              ) : (
                <div className="case-card">
                  <div className="case-eyebrow">{study.metaLong}</div>
                  <div className="case-title">{study.solution}</div>
                  <div className="case-snippet" aria-label="Design snippet placeholder">DESIGN SNIPPET</div>
                  <a href={study.mailto} className="case-view cta-pill">View case study →</a>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="thread-progress" role="presentation">
          <span className={phase === 0 ? 'on' : ''} />
          {caseStudies.map((c, i) => (
            <span key={c.id} className={phase === i + 1 ? 'on' : ''} />
          ))}
        </div>
      </div>
    </section>
  )
}
