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
const PACE = 1 // higher = snappier swap beat
const HERO_STAGE = 3.2 // viewports of scroll budget for the hero swing
const CASE_STAGE = 0.8 // viewports per subsequent case
const LIFT_VH = -28 // card lift at mid-swing
const TILT = -5 // card tilt (deg) at mid-swing
const AUTO_AT = 0.55 // auto-finish trigger point in the hero stage
const CASE_LIFT_PX = -44 // gentle lift between cases

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

    // ── on-load hero sequence ──
    let raf1 = null
    const playHero = () => {
      clearTimers(); autoRef.current = false; phaseRef.current = 0; setPhase(0); setStep(0)
      if (prefersReduced) { setStep(4); return }
      raf1 = requestAnimationFrame(() => {
        raf1 = requestAnimationFrame(() => {
          [[1, 400], [2, 1700], [3, 2900], [4, 4400]].forEach(([s, ms]) => timersRef.current.push(setTimeout(() => setStep(s), g(ms))))
        })
      })
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
      autoRef.current = false
      if (phaseRef.current === 0) return
      clearTimers(); phaseRef.current = 0; setPhase(0); setStep(4)
    }

    // ── auto-finish: glide to the stage end, then swap ──
    const autoFinish = (start, target) => {
      autoRef.current = true
      const t0 = performance.now(); const dur = 480
      const ease = (k) => 1 - Math.pow(1 - k, 3)
      const stepFn = (now) => {
        if (!autoRef.current) return
        const k = clamp01((now - t0) / dur)
        window.scrollTo(0, start + (target - start) * ease(k))
        if (k < 1) requestAnimationFrame(stepFn)
        else { autoRef.current = false; if (phaseRef.current === 0) playBeat(1) }
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

    // ── case settle (cases 2..N) ──
    let idle = null
    const caseIndex = () => {
      const vh = window.innerHeight || 1
      const cs = (window.scrollY - track.offsetTop) - HERO_STAGE * vh
      return Math.min(N, 1 + Math.floor(cs / (CASE_STAGE * vh)))
    }
    const onIdle = () => {
      if (autoRef.current) return
      const s = (window.scrollY - track.offsetTop)
      if (s < HERO_STAGE * (window.innerHeight || 1)) return
      const ph = caseIndex()
      if (prefersReduced) { phaseRef.current = ph; setPhase(ph); setStep(4) } else playBeat(ph)
    }

    // ── per-frame scroll handler ──
    const frame = () => {
      const vh = window.innerHeight || 1
      const heroBudget = HERO_STAGE * vh
      const s = window.scrollY - track.offsetTop
      const rawHero = clamp01(s / heroBudget)

      const y = window.scrollY
      const goingDown = lastYRef.current == null || y >= lastYRef.current
      lastYRef.current = y

      if (!autoRef.current) {
        if (phaseRef.current === 0 && goingDown && rawHero >= AUTO_AT) autoFinish(y, track.offsetTop + heroBudget)
        else if (phaseRef.current >= 1 && !goingDown && s < heroBudget && rawHero < 0.4) toHero()
      }

      // eased displayed progress for the swing
      dispRef.current += (rawHero - dispRef.current) * 0.1
      if (Math.abs(rawHero - dispRef.current) < 0.0004) dispRef.current = rawHero

      // card transform: swing (hero) or gentle lift (cases)
      if (cardRef.current) {
        if (phaseRef.current === 0) {
          const wave = Math.sin(Math.PI * dispRef.current)
          cardRef.current.style.transform = `translate(-50%, -50%) translateY(${(LIFT_VH * wave).toFixed(2)}vh) rotate(${(TILT * wave).toFixed(2)}deg)`
        } else {
          const cs = s - heroBudget
          const frac = clamp01((cs - (phaseRef.current - 1) * CASE_STAGE * vh) / (CASE_STAGE * vh))
          cardRef.current.style.transform = `translate(-50%, -50%) translateY(${(CASE_LIFT_PX * frac).toFixed(1)}px)`
        }
      }

      // paragraph: rise + fade + word-by-word colour (hero stage only)
      const para = paraRef.current
      if (para) {
        const riseVh = 26 + (-62 - 26) * clamp01(rawHero / 0.8)
        const op = phaseRef.current !== 0 ? 0 : 1 - clamp01((rawHero - 0.58) / 0.2)
        para.style.transform = `translateY(${riseVh.toFixed(2)}vh)`
        para.style.opacity = String(op)
        const spans = para.querySelectorAll('.rc-word')
        spans.forEach((el, i) => {
          const threshold = (i / Math.max(1, spans.length - 1)) * 0.5
          const local = clamp01((rawHero - threshold) / 0.05)
          el.style.color = local >= 1 ? 'var(--text-body)' : `color-mix(in srgb, var(--text-body) ${Math.round(local * 100)}%, var(--border-fade))`
        })
      }

      bumpDrift()
      if (idle) clearTimeout(idle)
      idle = setTimeout(onIdle, 140)
    }

    window.scrollTo(0, 0)
    playHero()
    frame()
    window.addEventListener('scroll', frame, { passive: true })
    window.addEventListener('resize', frame)
    return () => {
      window.removeEventListener('scroll', frame)
      window.removeEventListener('resize', frame)
      clearTimers()
      if (idle) clearTimeout(idle)
      if (raf1) cancelAnimationFrame(raf1)
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
                <span key={i} className="rc-word" style={{ color: 'var(--border-fade)' }}>{w}{i < paraWords.length - 1 ? ' ' : ''}</span>
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
