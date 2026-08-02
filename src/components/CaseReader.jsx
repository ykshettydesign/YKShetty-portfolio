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
  fontWeight: 400,
  lineHeight: 1.3,
  color: 'var(--text-secondary)',
  margin: 0,
  // leave the top-right clear so the dropped card stays visible over it
  maxWidth: 'calc(100% - 170px)',
}
/**
 * The "reader" content for a single active case study — a tight, scannable read:
 *   title → The problem → cover (with the solution set over it) → Results → CTA.
 * The cover is the payoff: a tall banner with "How I solved it" + the solution
 * statement laid over the bottom in white, so the claim lands on the evidence.
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

      {/* 2 · the solution, set over the cover — "How I solved it" kicker + the
          statement in white on a frosted panel. A real image fills the banner
          when present; otherwise the accent gradient shows. If the image fails
          to load, onError hides it and the gradient carries the text. */}
      <div className="case-cover-hero" style={{ margin: '18px 0 0' }}>
        {study.cover && (
          <img
            key={study.cover}
            src={study.cover}
            alt=""
            onError={(e) => { e.currentTarget.style.display = 'none' }}
          />
        )}
        {/* dedicated blur layer — masked on its own so the blur feathers into
            the image (a mask on a combined background+blur+text element won't). */}
        <div className="case-cover-hero__blur" aria-hidden="true" />
        <div className="case-cover-hero__panel">
          <div className="case-cover-hero__kicker">How I solved it</div>
          <p className="case-cover-hero__solution">{study.solution}</p>
        </div>
      </div>

      {/* 4 · results + CTA share one row — stats left, action right */}
      <div style={{ ...label, color: 'var(--text-muted)', margin: '20px 0 10px' }}>Results</div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', gap: 44 }}>
          {study.stats.map((s) => (
            <div key={s.label}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px,3vw,34px)', fontWeight: 600, color: 'var(--text-primary)' }}>
                {s.value}
              </div>
              <div style={{ ...mono, fontSize: 10, color: 'var(--text-secondary)', marginTop: 8 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* single CTA — read the full case study when there's a page for it,
            otherwise request it by email. Short label so it fits the row. */}
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
            whiteSpace: 'nowrap',
          }}
        >
          {study.href ? 'Read case study →' : 'Request case study →'}
        </a>
      </div>
    </div>
  )
}
