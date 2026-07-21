import React from 'react'
import { contact } from '../data/content'

const mono = { fontFamily: 'var(--font-mono)' }

export default function Footer() {
  return (
    <footer id="contact" style={{ position: 'relative', zIndex: 10, background: 'var(--bg-page)', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.4 }}>
        <div style={{ position: 'absolute', width: '40vw', height: '40vw', maxWidth: 500, maxHeight: 500, top: '-20%', right: '10%', borderRadius: '50%', background: 'radial-gradient(circle, var(--blob-contact-1), transparent 70%)', filter: 'blur(80px)' }} />
        <div style={{ position: 'absolute', width: '30vw', height: '30vw', maxWidth: 400, maxHeight: 400, bottom: '10%', left: '20%', borderRadius: '50%', background: 'radial-gradient(circle, var(--blob-contact-2), transparent 70%)', filter: 'blur(80px)' }} />
      </div>

      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1100, margin: '0 auto', padding: 'clamp(72px,11vw,150px) clamp(22px,5vw,44px) clamp(40px,5vw,56px)' }}>
        <div data-reveal="" style={{ ...mono, fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-tertiary)', marginBottom: 24 }}>
          Got a brief?
        </div>
        <h2 data-reveal="" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px,6.5vw,84px)', fontWeight: 600, lineHeight: 1.02, letterSpacing: '-0.035em', margin: 0, maxWidth: '15ch', color: 'var(--text-primary)', transitionDelay: '0.08s' }}>
          {contact.heading} <span style={{ color: 'var(--accent)' }}>{contact.headingAccent}</span>
        </h2>

        <div data-reveal="" style={{ display: 'flex', gap: 28, flexWrap: 'wrap', alignItems: 'center', marginTop: 'clamp(36px,5vw,52px)', fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 500, transitionDelay: '0.14s' }}>
          {contact.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-link ${link.variant === 'primary' ? 'text-link--primary' : 'text-link--muted'}`}
              style={link.variant === 'primary' ? { paddingBottom: 3 } : undefined}
              {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              {...(link.download ? { download: true } : {})}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div style={{ marginTop: 'clamp(56px,9vw,100px)', paddingTop: 18, borderTop: '1px solid var(--border-subtle)', ...mono, fontSize: 11, letterSpacing: '0.04em', color: 'var(--text-muted)' }}>
          {contact.copyright}
        </div>
      </div>
    </footer>
  )
}
