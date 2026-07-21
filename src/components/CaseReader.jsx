import React from 'react'

const mono = { fontFamily: 'var(--font-mono)' }

/**
 * The "reader" content for a single active case study. The reframe
 * animation (see playReframe) targets [data-obvious]/[data-strike]/
 * [data-insight] once this mounts for a given case.
 */
export default function CaseReader({ study }) {
  if (!study) return null
  return (
    <div data-detail={study.id}>
      <div style={{ ...mono, fontSize: 9, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-tertiary)', marginBottom: 22 }}>
        {study.metaLong}
      </div>

      <div style={{ ...mono, fontSize: 9, fontWeight: 700, letterSpacing: '0.09em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 7 }}>
        The brief
      </div>
      <div
        data-obvious=""
        style={{
          position: 'relative',
          display: 'inline-block',
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(18px,2.2vw,26px)',
          fontWeight: 400,
          lineHeight: 1.15,
          color: 'var(--text-secondary)',
        }}
      >
        {study.brief}
        <span
          data-strike=""
          style={{
            position: 'absolute',
            left: -1,
            right: -1,
            top: '53%',
            height: 2,
            background: 'var(--accent)',
            transform: 'scaleX(0)',
            transformOrigin: 'left',
          }}
        />
      </div>

      <div style={{ ...mono, fontSize: 9, fontWeight: 700, letterSpacing: '0.09em', textTransform: 'uppercase', color: 'var(--accent)', margin: '20px 0 6px' }}>
        The shift
      </div>
      <div
        data-insight=""
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(20px,2.4vw,28px)',
          fontWeight: 600,
          lineHeight: 1.15,
          letterSpacing: '-0.02em',
          color: 'var(--text-primary)',
          opacity: 0,
        }}
      >
        {study.insight}
      </div>

      <p style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, lineHeight: 1.7, color: 'var(--text-body)', margin: '20px 0 0', maxWidth: '50ch' }}>
        {study.body}
      </p>

      <div style={{ display: 'flex', gap: 44, margin: '24px 0' }}>
        {study.stats.map((s) => (
          <div key={s.label}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px,3vw,34px)', fontWeight: 600, color: 'var(--accent)' }}>
              {s.value}
            </div>
            <div style={{ ...mono, fontSize: 10, color: 'var(--text-secondary)', marginTop: 8 }}>{s.label}</div>
          </div>
        ))}
      </div>

      <a href={study.mailto} style={{ fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 500, color: 'var(--accent)' }}>
        Request full case study →
      </a>
    </div>
  )
}
