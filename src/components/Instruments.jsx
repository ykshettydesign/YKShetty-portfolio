import React from 'react'
import { instruments } from '../data/content'

const mono = { fontFamily: 'var(--font-mono)' }

export default function Instruments() {
  return (
    <section id="instruments" style={{ position: 'relative', zIndex: 10, background: 'var(--bg-page)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: 'clamp(56px,8vw,96px) clamp(22px,5vw,44px)' }}>
        <div data-reveal="" style={{ marginBottom: 'clamp(36px,5vw,52px)' }}>
          <div style={{ ...mono, fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-tertiary)', marginBottom: 14 }}>
            03 · Instruments
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px,3.8vw,44px)', fontWeight: 600, lineHeight: 1.02, letterSpacing: '-0.03em', margin: 0, maxWidth: '22ch', color: 'var(--text-primary)' }}>
            When the work repeats, the tool gets built.
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(15px,1.6vw,17px)', lineHeight: 1.55, color: 'var(--text-secondary)', margin: '18px 0 0', maxWidth: '52ch' }}>
            Three tools I designed and built for my own workflow — then published to the{' '}
            <span style={{ color: 'var(--text-primary)' }}>Figma Community</span>, where other designers use them too.
          </p>
        </div>

        <div
          className="instruments-grid"
          data-reveal=""
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 'clamp(14px,2vw,20px)', transitionDelay: '0.12s' }}
        >
          {instruments.map((tool) => (
            <a
              key={tool.id}
              href={tool.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${tool.alt} on the Figma Community`}
              className="instrument-card"
              style={{ background: 'var(--bg-surface)', borderRadius: 16, padding: '28px 24px', display: 'flex', flexDirection: 'column', minHeight: 280, boxShadow: 'var(--shadow-card)', color: 'inherit' }}
            >
              <div style={{ height: 28, display: 'flex', alignItems: 'center' }}>
                <img src={tool.logo} alt={tool.alt} className="theme-logo" style={{ ...tool.logoStyle, opacity: 1 }} />
              </div>
              <div style={{ marginTop: 'auto', paddingTop: 28 }}>
                <div style={{ ...mono, fontSize: 9, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-tertiary)', fontWeight: 700, marginBottom: 8 }}>
                  The problem
                </div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.55, color: 'var(--text-secondary)' }}>
                  {tool.problem}
                </div>
                <div style={{ height: 1, background: 'var(--border-subtle)', margin: '18px 0' }} />
                <div style={{ ...mono, fontSize: 9, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 700, marginBottom: 8 }}>
                  The result
                </div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.5, color: 'var(--text-primary)' }}>
                  {tool.result}
                </div>
                <div className="instrument-cta" style={{ ...mono, fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: 20, display: 'flex', alignItems: 'center', gap: 6 }}>
                  View on Figma Community <span className="instrument-cta-arrow" aria-hidden="true">↗</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
