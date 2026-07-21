import React from 'react'
import { about } from '../data/content'
import Testimonials from './Testimonials'

const mono = { fontFamily: 'var(--font-mono)' }

export default function About() {
  return (
    <section id="about" style={{ position: 'relative', zIndex: 10, background: 'var(--bg-section-alt)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: 'clamp(56px,8vw,96px) clamp(22px,5vw,44px)' }}>
        <div style={{ ...mono, fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-tertiary)', marginBottom: 26 }}>
          Who I am
        </div>

        <div
          className="about-grid"
          data-reveal=""
          style={{ display: 'grid', gridTemplateColumns: '1.5fr 0.7fr', gap: 'clamp(28px,4vw,56px)', alignItems: 'start' }}
        >
          <div>
            <blockquote style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 'clamp(26px,3.4vw,42px)', fontWeight: 600, lineHeight: 1.14, letterSpacing: '-0.025em', maxWidth: '22ch', color: 'var(--text-primary)' }}>
              {about.quoteLead}
              <span style={{ color: 'var(--accent)' }}>{about.quoteAccent}</span>
              {about.quoteTail}
            </blockquote>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 15.5, lineHeight: 1.65, color: 'var(--text-secondary)', margin: '26px 0 0', maxWidth: '52ch' }}>
              {about.paragraphs[0]}
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.6, color: 'var(--text-secondary)', margin: '18px 0 0', maxWidth: '50ch' }}>
              {about.paragraphs[1]}
            </p>
          </div>

          <div>
            <div style={{ borderRadius: 16, overflow: 'hidden', background: 'var(--bg-surface)', boxShadow: 'var(--shadow-card)' }}>
              <img src={about.portrait} alt="Yogesh Shetty" style={{ width: '100%', aspectRatio: '855/1024', objectFit: 'cover', display: 'block' }} />
              <div style={{ padding: '16px 18px' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 600, color: 'var(--text-primary)' }}>Yogesh Shetty</div>
                <div style={{ ...mono, fontSize: 11, color: 'var(--accent)', marginTop: 2 }}>Senior Product Designer · Oslo</div>
              </div>
            </div>

            <div style={{ marginTop: 14 }}>
              {about.facts.map((f) => (
                <div key={f.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid var(--border-subtle)', fontFamily: 'var(--font-body)', fontSize: 13 }}>
                  <span style={{ color: 'var(--text-secondary)' }}>{f.label}</span>
                  <span style={{ color: f.accent === 'teal' ? 'var(--teal)' : 'var(--text-primary)' }}>{f.value}</span>
                </div>
              ))}
            </div>

            <a
              href={about.resume}
              download
              className="cta-pill"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 16, padding: '13px 18px', borderRadius: 10, fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600, textAlign: 'center' }}
            >
              ↓ Download résumé
            </a>
          </div>
        </div>

        {/* Testimonials */}
        <div data-reveal="" style={{ marginTop: 'clamp(40px,5vw,60px)', paddingTop: 28, borderTop: '1px solid var(--border-subtle)', transitionDelay: '0.12s' }}>
          <Testimonials />
        </div>

        {/* Career line */}
        <div style={{ marginTop: 'clamp(28px,3.5vw,40px)', paddingTop: 20, borderTop: '1px dashed var(--border-strong)', fontFamily: 'var(--font-body)', fontSize: 13, lineHeight: 1.8, color: 'var(--text-secondary)' }}>
          {about.careerLine}
          <span style={{ color: 'var(--teal)', fontWeight: 600 }}>{about.careerHighlight}</span>
        </div>
      </div>
    </section>
  )
}
