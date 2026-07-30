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
const para = {
  fontFamily: 'var(--font-body)',
  fontSize: 14.5,
  lineHeight: 1.7,
  color: 'var(--text-body)',
  margin: 0,
  maxWidth: '54ch',
}

/**
 * The "reader" content for a single active case study — a tight, scannable read:
 *   Title → The problem → How I solved it → cover image → Results.
 * One paragraph each; the deeper detail lives behind "Request full case study".
 * The whole block fades in (owned by the parent's opacity transition).
 */
export default function CaseReader({ study }) {
  if (!study) return null
  return (
    <div data-detail={study.id}>
      {/* 1 · title */}
      <div style={{ ...mono, fontSize: 9, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-tertiary)', marginBottom: 22 }}>
        {study.metaLong}
      </div>

      {/* 2 · the problem */}
      <div style={{ ...label, color: 'var(--text-muted)' }}>The problem</div>
      <p style={para}>{study.problem}</p>

      {/* 3 · how I solved it */}
      <div style={{ ...label, color: 'var(--accent)', margin: '20px 0 6px' }}>How I solved it</div>
      <p style={{ ...para, color: 'var(--text-secondary)' }}>{study.solution}</p>

      {/* 4 · cover image (real when present, else a neutral placeholder) */}
      {study.cover ? (
        <img src={study.cover} alt={`${study.id} cover`} className="case-cover" style={{ margin: '22px 0 0' }} />
      ) : (
        <div className="case-cover case-cover--placeholder" style={{ margin: '22px 0 0' }} aria-hidden="true">
          <span>Cover image</span>
        </div>
      )}

      {/* 5 · results */}
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
