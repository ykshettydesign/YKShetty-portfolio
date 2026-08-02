import React, { useEffect, useRef } from 'react'
import { caseStudies } from '../data/content'
import { useDragBoard } from '../hooks/useDragBoard'
import MobileCaseCards from './MobileCaseCards'
import CaseReader from './CaseReader'

const mono = { fontFamily: 'var(--font-mono)' }

const signalDots = [
  { color: 'var(--accent)', opacity: 0.5 },
  { color: 'var(--dot-amber)', opacity: 0.4 },
  { color: 'var(--teal)', opacity: 0.4 },
]

/** Base card style; the drag hook owns transform / boxShadow / zIndex / width. */
const cardBase = {
  position: 'absolute',
  left: 0,
  top: 0,
  width: 276,
  cursor: 'grab',
  userSelect: 'none',
  willChange: 'transform',
  zIndex: 5,
  background: 'var(--bg-surface)',
  boxShadow: 'var(--shadow-float)',
  padding: '16px 18px 18px',
  borderRadius: 14,
}

export default function Work() {
  const boardRef = useRef(null)
  const scatterRef = useRef(null)
  const targetRef = useRef(null)
  const emptyRef = useRef(null)
  const detailRef = useRef(null)

  const { active, setCardRefs, closeActive, setDropProgress } = useDragBoard(
    { boardRef, scatterRef, targetRef, emptyRef, detailRef },
    caseStudies,
  )

  const activeStudy = caseStudies.find((c) => c.id === active) || null

  // Scroll-linked drop: map the board's rise through the viewport to 0→1 and
  // hand it to the drag board, which flings the first card along an arc into
  // the reader as you scroll up (and back out as you scroll down). rAF-throttled.
  useEffect(() => {
    const board = boardRef.current
    if (!board) return undefined
    const clamp01 = (v) => Math.max(0, Math.min(1, v))
    let raf = null
    const update = () => {
      raf = null
      const r = board.getBoundingClientRect()
      const vh = window.innerHeight || 1
      // 0 when the board top sits at the viewport bottom → 1 once it has risen
      // so the board sits comfortably in view (top ~15% down).
      const p = clamp01((vh - r.top) / (vh * 0.85))
      // Hold the card in the scatter a little longer, then run the drop over a
      // shorter stretch — so it starts later and lands fast once it goes.
      const DROP_START = 0.34
      const DROP_END = 0.58
      const drop = clamp01((p - DROP_START) / (DROP_END - DROP_START))
      setDropProgress(drop)
    }
    const onScroll = () => { if (raf == null) raf = requestAnimationFrame(update) }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    update()
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [setDropProgress])

  return (
    <section id="work" style={{ position: 'relative', zIndex: 10, marginTop: '-100vh' }}>
      <div style={{ maxWidth: 1164, margin: '0 auto', padding: '0 clamp(22px,5vw,44px) 81px' }}>
        <MobileCaseCards />

        <div
          data-reveal=""
          style={{
            borderRadius: '28px 28px 18px 18px',
            overflow: 'hidden',
            background: 'var(--bg-surface)',
            boxShadow: 'var(--shadow-panel)',
            transitionDelay: '0.1s',
          }}
        >
          {/* window chrome */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '12px 20px',
              borderBottom: '1px solid var(--border-subtle)',
              background: 'var(--bg-surface-alt)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{ display: 'flex', gap: 5 }}>
                {signalDots.map((d, i) => (
                  <span key={i} style={{ width: 7, height: 7, borderRadius: '50%', background: d.color, opacity: d.opacity }} />
                ))}
              </div>
              <div style={{ ...mono, fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-tertiary)' }}>
                01 · Case studies
              </div>
            </div>
            <div style={{ ...mono, fontSize: 9, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
              <span className="drag-desktop">Drop or click a card to the right panel</span>
              <span className="drag-mobile" style={{ display: 'none' }}>Tap a card to open</span>
            </div>
          </div>

          {/* board */}
          <div
            ref={boardRef}
            className="board"
            style={{
              position: 'relative',
              touchAction: 'none',
              display: 'grid',
              gridTemplateColumns: 'minmax(250px,0.72fr) minmax(0,1.28fr)',
              /* fits the card stack (~569px) and reader content (~548px) with a
                 little breathing room; the taller of the two binds. */
              minHeight: 580,
              overflow: 'hidden',
            }}
          >
            {/* scatter (left) */}
            <div
              ref={scatterRef}
              className="scatter"
              style={{
                position: 'relative',
                padding: '20px 16px',
                borderRight: '1px solid var(--border-subtle)',
                background: 'var(--bg-surface-alt)',
                overflow: 'hidden',
              }}
            >
              <div style={{ ...mono, fontSize: 9, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                Cases · 04
              </div>
              {caseStudies.map((c, i) => (
                <div
                  key={c.id}
                  ref={setCardRefs[i]}
                  data-card={c.id}
                  className={`case-card${active === c.id ? '' : ' case-card-float'}`}
                  style={{ ...cardBase, animationDelay: `${i * 0.6}s` }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12, ...mono, fontSize: 10, color: 'var(--text-secondary)' }}>
                    <span>{c.meta}</span>
                    {/* draggable signifier — grip handle, brightens on hover */}
                    <svg className="case-card-grip" width="10" height="14" viewBox="0 0 10 14" aria-hidden="true">
                      <g fill="currentColor">
                        <circle cx="2" cy="2" r="1.25" /><circle cx="8" cy="2" r="1.25" />
                        <circle cx="2" cy="7" r="1.25" /><circle cx="8" cy="7" r="1.25" />
                        <circle cx="2" cy="12" r="1.25" /><circle cx="8" cy="12" r="1.25" />
                      </g>
                    </svg>
                  </div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 400, lineHeight: 1.3, letterSpacing: '-0.01em', color: 'var(--text-primary)' }}>
                    {c.card}
                  </div>
                </div>
              ))}
            </div>

            {/* reader (right) */}
            <div
              ref={targetRef}
              style={{ position: 'relative', padding: '26px 32px 32px', background: 'var(--bg-surface)', transition: 'background .25s' }}
            >
              {/* empty state */}
              <div
                ref={emptyRef}
                style={{
                  position: 'absolute',
                  inset: '30px 32px 32px',
                  border: '1px dashed var(--border-dashed)',
                  borderRadius: 12,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 12,
                  transition: 'opacity .3s',
                  pointerEvents: 'none',
                  opacity: active ? 0 : 1,
                }}
              >
                <div style={{ fontSize: 28, lineHeight: 1, color: 'var(--border-fade)', fontWeight: 300 }}>↳</div>
                <div style={{ textAlign: 'center' }}>
                  <div className="drop-desktop" style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 500, color: 'var(--text-primary)' }}>
                    Drop a case to read it
                  </div>
                  <div className="drop-mobile" style={{ display: 'none', fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 500, color: 'var(--text-primary)' }}>
                    Tap a card to open
                  </div>
                  <div style={{ ...mono, fontSize: 10, color: 'var(--text-muted)', marginTop: 6 }}>the case opens</div>
                </div>
              </div>

              {/* detail — opacity/pointer-events owned by the drag hook so the
                  scroll-linked drop can fade the reader in over its last stretch */}
              <div ref={detailRef} style={{ position: 'relative', paddingTop: 0 }}>
                <CaseReader study={activeStudy} />
              </div>

              {/* drop-zone affordance — ring + label fade in while a card hovers
                  the reader (toggled by the drag hook). pointer-events:none. */}
              <div className="drop-ring" aria-hidden="true" />
              <div className="drop-label" aria-hidden="true" />

              {/* close */}
              <button
                type="button"
                onClick={closeActive}
                aria-label="Close case study"
                className="replay-btn"
                style={{
                  position: 'absolute',
                  top: 22,
                  right: 28,
                  zIndex: 12,
                  width: 28,
                  height: 28,
                  background: 'var(--bg-hover)',
                  color: 'var(--text-secondary)',
                  border: 'none',
                  borderRadius: '50%',
                  display: 'grid',
                  placeItems: 'center',
                  cursor: 'pointer',
                  opacity: active ? 1 : 0,
                  pointerEvents: active ? 'auto' : 'none',
                  fontSize: 14,
                  transition: 'opacity .25s',
                }}
              >
                ×
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
