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

const clamp01 = (v) => Math.max(0, Math.min(1, v))

// reveal styling driven by the step machine — same overshoot feel as the hero
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
 * ChatThread — the hero exchange and the case studies as ONE continuous chat.
 *
 * A single tall track with a sticky stage; a single card that MORPHS: phase 0
 * is the hero, phases 1..N are the case studies. The top label is the fixed
 * anchor (22vh); everything grows downward from it so short→tall swaps never
 * jump.
 *
 * Scroll drives `phase` directly (content swaps instantly while moving). When
 * scroll settles (~140ms idle) the one beat plays for the resting phase: the
 * bubbles hide, then re-reveal with thinking-dots → reply. Between cases the
 * card lifts ~44px (scroll-linked) — a gentle nudge, never a scroll takeover.
 * Scrolling back up restores the previous message instantly.
 *
 * Per-frame visuals (paragraph rise/fade + word-by-word colour, card lift,
 * blob velocity) are written straight to the DOM to avoid re-rendering on
 * every scroll event; React state only holds the infrequent step/phase.
 */
export default function ChatThread() {
  const N = caseStudies.length
  const trackRef = useRef(null)
  const stageRef = useRef(null)
  const paraRef = useRef(null)
  const driftRef = useRef(null)
  const cardRef = useRef(null)

  const [step, setStep] = useState(0) // 1 label · 2 ask · 3 dots · 4 reply
  const [phase, setPhase] = useState(0) // 0 hero · 1..N cases

  const phaseRef = useRef(0)
  const timersRef = useRef([])
  const settledRef = useRef(-1)

  const paraWords = profile.tagline.split(' ')

  useEffect(() => {
    const track = trackRef.current
    const drift = driftRef.current
    if (!track) return undefined
    const blobEls = drift ? Array.from(drift.querySelectorAll('[data-drift]')) : []
    const prefersReduced =
      window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (history.scrollRestoration) history.scrollRestoration = 'manual'

    const clearTimers = () => { timersRef.current.forEach(clearTimeout); timersRef.current = [] }

    // ── on-load hero sequence (label → ask → dots → reply), timed ──
    const HERO_SEQ = [[1, 400], [2, 1700], [3, 2900], [4, 4400]]
    let raf1 = null
    const playHero = () => {
      clearTimers()
      phaseRef.current = 0
      setPhase(0)
      setStep(0)
      settledRef.current = prefersReduced ? 0 : -1
      if (prefersReduced) { setStep(4); return }
      raf1 = requestAnimationFrame(() => {
        raf1 = requestAnimationFrame(() => {
          HERO_SEQ.forEach(([s, ms]) => timersRef.current.push(setTimeout(() => setStep(s), ms)))
        })
      })
    }

    // ── the settle beat: hide bubbles, then re-reveal with dots → reply ──
    const playBeat = (ph) => {
      if (settledRef.current === ph) return
      settledRef.current = ph
      clearTimers()
      setStep(1)
      timersRef.current.push(setTimeout(() => setStep(2), 120))
      timersRef.current.push(setTimeout(() => setStep(3), 640))
      timersRef.current.push(setTimeout(() => setStep(4), 1500))
    }

    // ── blob drift velocity (speeds up with scroll, eases back) ──
    let driftRate = 1, driftTarget = 1, driftRaf = null, driftRunning = false
    let lastY = window.scrollY, lastT = performance.now()
    const driftLoop = () => {
      driftRate += (driftTarget - driftRate) * 0.12
      driftTarget += (1 - driftTarget) * 0.04
      blobEls.forEach((el) => { if (el.getAnimations) el.getAnimations().forEach((a) => { a.playbackRate = driftRate }) })
      if (Math.abs(driftRate - 1) > 0.02 || Math.abs(driftTarget - 1) > 0.02) driftRaf = requestAnimationFrame(driftLoop)
      else { driftRate = 1; driftTarget = 1; blobEls.forEach((el) => { if (el.getAnimations) el.getAnimations().forEach((a) => { a.playbackRate = 1 }) }); driftRunning = false }
    }
    const bumpDrift = () => {
      const now = performance.now()
      const dy = Math.abs(window.scrollY - lastY)
      const dt = Math.max(16, now - lastT)
      driftTarget = Math.min(9, 1 + (dy / dt) * 20)
      lastY = window.scrollY; lastT = now
      if (!driftRunning && blobEls.length) { driftRunning = true; driftRaf = requestAnimationFrame(driftLoop) }
    }

    // ── per-frame scroll handler ──
    let idle = null
    const onIdle = () => {
      if (prefersReduced) { setStep(4); return }
      playBeat(phaseRef.current)
    }
    const frame = () => {
      const vh = window.innerHeight || 1
      const heroBudget = vh
      const caseBudget = 0.75 * vh
      const s = window.scrollY - track.offsetTop

      let ph, pHero, lift
      if (s < heroBudget) { ph = 0; pHero = clamp01(s / heroBudget); lift = 0 }
      else {
        const cs = s - heroBudget
        ph = Math.min(N, 1 + Math.floor(cs / caseBudget))
        const frac = clamp01((cs - (ph - 1) * caseBudget) / caseBudget)
        lift = -44 * frac
        pHero = 1
      }

      // paragraph: rise + fade + word-by-word colour (phase 0 only)
      const para = paraRef.current
      if (para) {
        const riseVh = 26 + (-62 - 26) * clamp01(pHero / 0.8)
        const op = ph !== 0 ? 0 : 1 - clamp01((pHero - 0.58) / 0.2)
        para.style.transform = `translateY(${riseVh.toFixed(2)}vh)`
        para.style.opacity = String(op)
        const spans = para.querySelectorAll('.rc-word')
        const span = 0.5
        spans.forEach((el, i) => {
          const threshold = (i / Math.max(1, spans.length - 1)) * span
          const local = clamp01((pHero - threshold) / 0.05)
          el.style.color = local >= 1 ? 'var(--text-body)' : `color-mix(in srgb, var(--text-body) ${Math.round(local * 100)}%, var(--border-fade))`
        })
      }

      // card lift between cases (keep the translateX that centres .hero-cluster)
      if (cardRef.current) cardRef.current.style.transform = `translateX(-50%) translateY(${lift.toFixed(1)}px)`

      // phase change → instant swap while scrolling; beat plays on settle
      if (ph !== phaseRef.current) {
        phaseRef.current = ph
        setPhase(ph)
        settledRef.current = -1
        if (!prefersReduced) { clearTimers(); setStep(4) }
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
      style={{ position: 'relative', zIndex: 10, height: `${100 + N * 75}vh` }}
    >
      <div
        ref={stageRef}
        style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden', background: 'var(--bg-page)' }}
      >
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

        {/* the morphing chat card */}
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
