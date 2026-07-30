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

/**
 * The "reader" content for a single active case study: a clean
 * Problem → How I solved it → Results read, with a cover image on top.
 * The whole block fades in (owned by the parent's opacity transition) — no
 * strike-out gimmick.
 */
export default function CaseReader({ study }) {
  if (!study) return null
  return (
    <div data-detail={study.id}>
      {/* cover — real image when present, neutral placeholder otherwise */}
      {study.cover ? (
        <img src={study.cover} alt={`${study.id} cover`} className="case-cover" />
      ) : (
        <div className="case-cover case-cover--placeholder" aria-hidden="true">
          <span>Cover image</span>
        </div>
      )}

      <div style={{ ...mono, fontSize: 9, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-tertiary)', margin: '20px 0 22px' }}>
        {study.metaLong}
      </div>

      <div style={{ ...label, color: 'var(--text-muted)' }}>The problem</div>
      <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(17px,2vw,22px)', fontWeight: 400, lineHeight: 1.25, color: 'var(--text-secondary)', margin: 0 }}>
        {study.problem}
      </p>

      <div style={{ ...label, color: 'var(--accent)', margin: '22px 0 6px' }}>How I solved it</div>
      <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(19px,2.3vw,26px)', fontWeight: 600, lineHeight: 1.18, letterSpacing: '-0.02em', color: 'var(--text-primary)', margin: 0 }}>
        {study.solution}
      </p>
      <p style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, lineHeight: 1.7, color: 'var(--text-body)', margin: '14px 0 0', maxWidth: '52ch' }}>
        {study.body}
      </p>

      <div style={{ ...label, color: 'var(--text-muted)', margin: '24px 0 10px' }}>Results</div>
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

      <a
        href={study.mailto}
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
        Request full case study →
      </a>
    </div>
  )
}
