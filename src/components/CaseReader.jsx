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
 * The "reader" content for a single active case study — a tight, scannable read
 * that fits in one view without scrolling:
 *   [cover backdrop + title] → The problem → How I solved it → Results.
 * The cover is a compact header strip (title overlaid) rather than a tall
 * mid-flow banner, so the whole panel stays above the fold. One paragraph each;
 * the deeper detail lives behind "Request full case study". The block fades in
 * (owned by the parent's opacity transition).
 */
export default function CaseReader({ study }) {
  if (!study) return null
  return (
    <div data-detail={study.id}>
      {/* 1 · cover backdrop — compact header strip with the title overlaid. A
          real image fills it when present; otherwise the accent gradient shows.
          If the image fails to load, onError hides it and the gradient + scrim
          keep the title legible. */}
      <div className="case-cover-strip">
        {study.cover && (
          <img
            key={study.cover}
            src={study.cover}
            alt=""
            onError={(e) => { e.currentTarget.style.display = 'none' }}
          />
        )}
        <div className="case-cover-strip__meta">{study.metaLong}</div>
      </div>

      {/* 2 · the problem */}
      <div style={{ ...label, color: 'var(--text-muted)', marginTop: 22 }}>The problem</div>
      <p style={probPara}>{study.problem}</p>

      {/* 3 · how I solved it */}
      <div style={{ ...label, color: 'var(--accent)', margin: '18px 0 6px' }}>How I solved it</div>
      <p style={solPara}>{study.solution}</p>

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

      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 16 }}>
        {study.href ? (
          <a
            href={study.href}
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
            Read the full case study →
          </a>
        ) : null}
        <a
          href={study.mailto}
          className={study.href ? 'text-link text-link--muted' : 'cta-pill'}
          style={
            study.href
              ? { fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 500 }
              : {
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '11px 20px',
                  borderRadius: 10,
                  fontFamily: 'var(--font-body)',
                  fontSize: 14,
                  fontWeight: 600,
                }
          }
        >
          {study.href ? 'Request full case study' : 'Request full case study →'}
        </a>
      </div>
    </div>
  )
}
