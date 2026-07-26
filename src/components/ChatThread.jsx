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
const CASE_SWING_VH = -14 // case→case swing amplitude (vh) — same shape as the hero, lighter since it repeats
const CASE_SWING_TILT = -3 // case→case swing tilt (deg)
const EASE = 0.26 // per-frame easing for the displayed swing (higher = snappier, less lag) — raised to keep the faster ascent tracking tightly

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
  const meterRef = useRef(null) // fill element of the scroll-progress line

  const [step, setStep] = useState(0) // 1 label · 2 ask · 3 dots · 4 reply
  const [phase, setPhase] = useState(0) // 0 hero · 1..N cases

  const phaseRef = useRef(0)
  const timersRef = useRef([])
  const autoRef = useRef(false)
  const dispRef = useRef(0)
  const lastYRef = useRef(null)
  const landedRef = useRef(false) // current stage's reveal has finished (blocks committing mid-beat)

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
      clearTimers(); autoRef.current = false; phaseRef.current = 0; setPhase(0); setStep(0)
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
      landedRef.current = false // don't allow the next hand-off until this reply lands
      setStep(1)
      timersRef.current.push(setTimeout(() => setPhase(ph), g(480)))
      timersRef.current.push(setTimeout(() => setStep(2), g(560)))
      timersRef.current.push(setTimeout(() => setStep(3), g(1020)))
      timersRef.current.push(setTimeout(() => setStep(4), g(1900)))
      timersRef.current.push(setTimeout(() => { landedRef.current = true }, g(1900) + 560))
    }
    // Snap directly to a stage, fully-formed (no typing beat). Used going BACKWARD
    // (restore an already-seen card) and for fast flings clean past a stage.
    // dispRef is snapped to the new stage's current scroll progress so the swing
    // doesn't jump or play a phantom lift.
    const toStage = (np) => {
      autoRef.current = false
      if (phaseRef.current === np) return
      clearTimers(); phaseRef.current = np; setPhase(np); setStep(4)
      landedRef.current = true // fully formed — ready to hand off again
      const vh = window.innerHeight || 1
      const heroBudget = HERO_STAGE * vh, caseBudget = CASE_STAGE * vh
      const st = np === 0 ? 0 : heroBudget + (np - 1) * caseBudget
      const en = np === 0 ? heroBudget : heroBudget + np * caseBudget
      dispRef.current = clamp01(((window.scrollY - track.offsetTop) - st) / (en - st))
    }

    // ── unified hand-off glide: bring the swing home over an easeOutCubic timeline,
    //    then swap to the target stage. Used FORWARD for every stage (hero→case1
    //    AND case→case), so the whole thread hands off identically.
    //    CRITICAL: the card's swing is driven by this timeline (dispRef), NOT by
    //    window.scrollY — during the glide the browser's residual momentum scroll
    //    fights our scrollTo and makes scrollY oscillate; reading it would jitter
    //    the card. Decoupled, the card decelerates cleanly to rest while the page
    //    catches up underneath it. ──
    const autoFinishTo = (targetY, targetPhase) => {
      autoRef.current = true
      const dispStart = dispRef.current // continue the swing seamlessly from where it visibly is
      const startY = window.scrollY
      const t0 = performance.now(); const dur = RETURN_MS
      const ease = (k) => 1 - Math.pow(1 - k, 3)
      const stepFn = (now) => {
        if (!autoRef.current) return
        const k = clamp01((now - t0) / dur)
        dispRef.current = dispStart + (1 - dispStart) * ease(k) // swing home to rest (disp→1, wave→0)
        window.scrollTo(0, startY + (targetY - startY) * ease(k)) // page glides to the stage boundary
        if (k < 1) requestAnimationFrame(stepFn)
        else {
          autoRef.current = false
          if (prefersReduced) { phaseRef.current = targetPhase; setPhase(targetPhase); setStep(4); landedRef.current = true }
          else playBeat(targetPhase)
          dispRef.current = 0 // new stage begins at rest (wave 0 → translateY 0; seamless, old end was also flat)
        }
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

    // ── per-frame scroll handler ──
    const frame = () => {
      const vh = window.innerHeight || 1
      const heroBudget = HERO_STAGE * vh
      const caseBudget = CASE_STAGE * vh
      const rect = track.getBoundingClientRect()
      if (rect.bottom < 0 || rect.top > vh) return // section off-screen — skip

      // current stage + progress THROUGH it (0→1). Hero and every case are treated
      // identically — this is what makes the hand-offs feel the same.
      const p = phaseRef.current
      const stageStart = p === 0 ? 0 : heroBudget + (p - 1) * caseBudget
      const stageEnd = p === 0 ? heroBudget : heroBudget + p * caseBudget
      const s = window.scrollY - track.offsetTop
      const rawProgRaw = (s - stageStart) / (stageEnd - stageStart) // unclamped (can go <0 above the stage)
      const rawProg = clamp01(rawProgRaw)
      const rawHero = clamp01(s / heroBudget) // hero-only, for the paragraph parallax

      const y = window.scrollY
      const goingDown = lastYRef.current == null || y >= lastYRef.current
      lastYRef.current = y

      // displayed swing progress — eased toward the scroll-derived stage progress.
      // During a hand-off glide the swing is owned by autoFinishTo's timeline
      // (immune to scroll jitter) — don't touch dispRef then.
      if (!autoRef.current) {
        dispRef.current += (rawProg - dispRef.current) * EASE
        if (Math.abs(rawProg - dispRef.current) < 0.0004) dispRef.current = rawProg
      }

      // ── unified hand-off: every stage commits the SAME way — scroll past AUTO_AT
      //    → glide + swing home → swap. No settle-wait, so the swap flows out of the
      //    scroll instead of waiting for you to stop. ──
      if (!autoRef.current) {
        if (p < N && rawProg >= 1 && landedRef.current) {
          toStage(p + 1) // already scrolled clean past this stage (fast fling) — snap, no glide
        } else if (goingDown && p < N && rawProg >= AUTO_AT && landedRef.current) {
          if (prefersReduced) toStage(p + 1)
          else autoFinishTo(track.offsetTop + stageEnd, p + 1) // glide into the next stage
        } else if (p > 0 && rawProgRaw <= -0.08) {
          // scrolled ~8% back into the previous stage (hysteresis so boundary jitter
          // can't undo a fresh commit) — restore that card fully-formed
          toStage(p - 1)
        }
      }

      // card transform: the SAME swing for hero and cases (cases use a lighter
      // amplitude). rest → lift → rest via sin(π·disp); flat (wave 0) at both stage
      // boundaries, so swaps are seamless. `p`→transform only; the beat→opacity only.
      const amp = p === 0 ? LIFT_VH : CASE_SWING_VH
      const tlt = p === 0 ? TILT : CASE_SWING_TILT
      const wave = Math.sin(Math.PI * dispRef.current)
      if (cardRef.current) cardRef.current.style.transform = `translateX(-50%) translateY(${(amp * wave).toFixed(2)}vh) rotate(${(tlt * wave).toFixed(2)}deg)`

      // scroll-progress line: fills 0→1 as you approach this stage's hand-off (AUTO_AT),
      // so a full bar == "next section is about to load".
      if (meterRef.current) meterRef.current.style.transform = `scaleX(${clamp01(rawProg / AUTO_AT).toFixed(4)})`

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

        {/* scroll-progress line — fills as you scroll toward the next hand-off */}
        <div className="scroll-meter" role="presentation" aria-hidden="true">
          <i ref={meterRef} />
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
