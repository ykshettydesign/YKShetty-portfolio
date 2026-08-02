import React from 'react'

const mono = { fontFamily: 'var(--font-mono)' }
const label = {
  ...mono,
  fontSize: 9,
  fontWeight: 700,
  letterSpacing: '0.09em',
  textTransform: 'uppercase',
  marginBottom: 7,
}
const probPara = {
  fontFamily: 'var(--font-display)',
  fontSize: 'clamp(17px,2vw,22px)',
  fontWeight: 400,
  lineHeight: 1.3,
  color: 'var(--text-secondary)',
  margin: 0,
  // leave the top-right clear so the dropped card stays visible over it
  maxWidth: 'calc(100% - 170px)',
}
const solPara = {
  fontFamily: 'var(--font-display)',
  fontSize: 'clamp(19px,2.3vw,26px)',
  fontWeight: 600,
  lineHeight: 1.2,
  letterSpacing: '-0.02em',
  color: 'var(--text-primary)',
  margin: 0,
}

/**
 * The "reader" content for a single active case study — a tight, scannable read:
 *   title → The problem → How I solved it → cover image → Results → CTA.
 * One paragraph each; the deeper detail lives behind the full-case-study link.
 * The block fades in (owned by the parent's opacity transition).
 */
export default function CaseReader({ study }) {
  if (!study) return null
  return (
    <div data-detail={study.id}>
      {/* title / meta */}
      <div style={{ ...mono, fontSize: 9, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-tertiary)', marginBottom: 20 }}>
        {study.metaLong}
      </div>

      {/* 1 · the problem */}
      <div style={{ ...label, color: 'var(--text-muted)' }}>The problem</div>
      <p style={probPara}>{study.problem}</p>

      {/* 2 · how I solved it */}
      <div style={{ ...label, color: 'var(--accent)', margin: '18px 0 6px' }}>How I solved it</div>
      <p style={solPara}>{study.solution}</p>

      {/* 3 · cover image — a banner between the solution and the results. A real
          image fills it when present; otherwise the accent gradient shows. If it
          fails to load, onError hides it and the gradient shows through. */}
      <div className="case-cover-strip case-cover-strip--plain" style={{ margin: '20px 0 0' }} aria-hidden="true">
        {study.cover && (
          <img
            key={study.cover}
            src={study.cover}
            alt=""
            onError={(e) => { e.currentTarget.style.display = 'none' }}
          />
        )}
      </div>

      {/* 4 · results */}
      <div style={{ ...label, color: 'var(--text-muted)', margin: '20px 0 10px' }}>Results</div>
      <div style={{ display: 'flex', gap: 44, marginBottom: 26 }}>
        {study.stats.map((s) => (
          <div key={s.label}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px,3vw,34px)', fontWeight: 600, color: 'var(--accent)' }}>
              {s.value}
            </div>
            <div style={{ ...mono, fontSize: 10, color: 'var(--text-secondary)', marginTop: 8 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* single CTA — read the full case study when there's a page for it,
          otherwise request it by email. */}
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 16 }}>
        <a
          href={study.href || study.mailto}
          className="cta-pill"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '11px 20px',
            borderRadius: 10,
            fontFamily: 'var(--font-body)',
            fontSize: 14,
            fontWeight: 600,
          }}
        >
          {study.href ? 'Read the full case study →' : 'Request full case study →'}
        </a>
      </div>
    </div>
  )
}
