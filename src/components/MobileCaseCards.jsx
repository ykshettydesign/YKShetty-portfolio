import React, { useState } from 'react'
import { caseStudies } from '../data/content'

const mono = {
  fontFamily: 'var(--font-mono)',
}

/** Mobile-only accordion list of case studies (desktop uses the drag board). */
export default function MobileCaseCards() {
  const [openId, setOpenId] = useState(null)

  return (
    <div
      className="mobile-cards"
      style={{ display: 'none', flexDirection: 'column', gap: 12 }}
    >
      {caseStudies.map((c) => {
        const expanded = openId === c.id
        return (
          <div
            key={c.id}
            className="lift-hover"
            onClick={() => setOpenId((prev) => (prev === c.id ? null : c.id))}
            style={{
              borderRadius: 14,
              overflow: 'hidden',
              background: 'var(--bg-surface)',
              cursor: 'pointer',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '18px 20px',
              }}
            >
              <div>
                <div style={{ ...mono, fontSize: 10, letterSpacing: '0.04em', color: 'var(--text-secondary)', marginBottom: 6 }}>
                  {c.meta}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 16,
                    fontWeight: 500,
                    lineHeight: 1.3,
                    letterSpacing: '-0.01em',
                    color: 'var(--text-primary)',
                  }}
                >
                  {c.card}
                </div>
              </div>
              <div style={{ fontSize: 22, color: 'var(--text-tertiary)', flex: 'none', marginLeft: 16 }}>
                {expanded ? '−' : '+'}
              </div>
            </div>

            {expanded && (
              <div style={{ padding: '0 20px 22px', borderTop: '1px solid var(--border-subtle)' }}>
                <div style={{ paddingTop: 18 }}>
                  <div style={{ ...mono, fontSize: 9, fontWeight: 700, letterSpacing: '0.09em', textTransform: 'uppercase', color: 'var(--text-muted)', margin: '0 0 5px' }}>
                    The problem
                  </div>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: 17, fontWeight: 400, lineHeight: 1.3, color: 'var(--text-secondary)', margin: 0 }}>
                    {c.problem}
                  </p>
                  <div style={{ ...mono, fontSize: 9, fontWeight: 700, letterSpacing: '0.09em', textTransform: 'uppercase', color: 'var(--accent)', margin: '18px 0 5px' }}>
                    How I solved it
                  </div>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 600, lineHeight: 1.2, letterSpacing: '-0.02em', color: 'var(--text-primary)', margin: 0 }}>
                    {c.solution}
                  </p>
                  <div className="case-cover case-cover--placeholder" style={{ position: 'relative', overflow: 'hidden', margin: '16px 0 0' }} aria-hidden="true">
                    <span>Cover image</span>
                    {c.cover && (
                      <img
                        key={c.cover}
                        src={c.cover}
                        alt=""
                        onError={(e) => { e.currentTarget.style.display = 'none' }}
                        style={{ position: 'absolute', inset: -1, objectFit: 'cover' }}
                      />
                    )}
                  </div>
                  <div style={{ display: 'flex', gap: 32, margin: '20px 0 18px' }}>
                    {c.stats.map((s) => (
                      <div key={s.label}>
                        <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px,3vw,30px)', fontWeight: 600, color: 'var(--accent)' }}>
                          {s.value}
                        </div>
                        <div style={{ ...mono, fontSize: 10, color: 'var(--text-secondary)', marginTop: 6 }}>{s.label}</div>
                      </div>
                    ))}
                  </div>
                  <a
                    href={c.mailto}
                    onClick={(e) => e.stopPropagation()}
                    style={{ fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 500, color: 'var(--accent)' }}
                  >
                    Request full case study →
                  </a>
                </div>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
