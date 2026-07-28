import React, { useEffect, useRef } from 'react'
import { caseStudies } from '../data/content'
import { useDragBoard, playReframe } from '../hooks/useDragBoard'
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
  width: 240,
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

  const { active, setCardRefs, closeActive } = useDragBoard(
    { boardRef, scatterRef, targetRef, emptyRef, detailRef },
    caseStudies,
  )

  const activeStudy = caseStudies.find((c) => c.id === active) || null

  // Run the reframe reveal whenever a new case becomes active.
  useEffect(() => {
    if (!active) return undefined
    const t = setTimeout(() => {
      const block = detailRef.current?.querySelector(`[data-detail="${active}"]`)
      playReframe(block)
    }, 180)
    return () => clearTimeout(t)
  }, [active])

  return (
    <section id="work" style={{ position: 'relative', zIndex: 10 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 clamp(22px,5vw,44px) 81px' }}>
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
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 500, color: 'var(--text-secondary)', marginLeft: 4 }}>
                — The brief vs. the shift
              </div>
            </div>
            <div style={{ ...mono, fontSize: 9, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
              <span className="drag-desktop">Drag a brief into the reader — or click one</span>
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
              gridTemplateColumns: 'minmax(280px,0.86fr) minmax(0,1.14fr)',
              minHeight: 600,
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
                Briefs · 04
              </div>
              {caseStudies.map((c, i) => (
                <div key={c.id} ref={setCardRefs[i]} data-card={c.id} style={cardBase}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14, ...mono, fontSize: 10, color: 'var(--text-secondary)' }}>
                    <span>{c.meta}</span>
                    <span style={{ fontWeight: 700, color: 'var(--border-fade)' }}>{c.index}</span>
                  </div>
                  <div style={{ ...mono, fontSize: 9, fontWeight: 700, letterSpacing: '0.09em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 8 }}>
                    The brief
                  </div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 500, lineHeight: 1.2, color: 'var(--text-primary)' }}>
                    {c.brief}
                  </div>
                </div>
              ))}
            </div>

            {/* reader (right) */}
            <div
              ref={targetRef}
              style={{ position: 'relative', padding: '26px 32px 32px', background: 'var(--bg-surface)', transition: 'background .25s' }}
            >
              <div style={{ ...mono, fontSize: 9, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                The shift
              </div>

              {/* empty state */}
              <div
                ref={emptyRef}
                style={{
                  position: 'absolute',
                  inset: '52px 32px 32px',
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
                    Drop a card to read the case study
                  </div>
                  <div className="drop-mobile" style={{ display: 'none', fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 500, color: 'var(--text-primary)' }}>
                    Tap a card to open
                  </div>
                  <div style={{ ...mono, fontSize: 10, color: 'var(--text-muted)', marginTop: 6 }}>the answer glows</div>
                </div>
              </div>

              {/* detail */}
              <div
                ref={detailRef}
                style={{ position: 'relative', opacity: active ? 1 : 0, transition: 'opacity .35s', pointerEvents: active ? 'auto' : 'none', paddingTop: 22 }}
              >
                <CaseReader study={activeStudy} />
              </div>

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
