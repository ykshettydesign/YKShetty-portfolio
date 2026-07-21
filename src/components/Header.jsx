import React, { useCallback, useState } from 'react'
import { navLinks, profile, CONTACT_EMAIL } from '../data/content'
import { useTheme } from '../theme/ThemeContext'

const labelStyle = {
  fontFamily: 'var(--font-mono)',
  fontSize: 10,
  fontWeight: 400,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  const toggleMobile = useCallback(() => setMobileOpen((v) => !v), [])
  const closeMenu = useCallback(() => setMobileOpen(false), [])

  return (
    <header
      className={mobileOpen ? 'mobile-menu-open' : ''}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 60,
        background: 'var(--nav-bg)',
        backdropFilter: 'blur(16px) saturate(180%)',
        WebkitBackdropFilter: 'blur(16px) saturate(180%)',
        borderBottom: '1px solid var(--border-subtle)',
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: '0 clamp(22px,5vw,44px)',
          height: 56,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: 10, height: 20 }}>
            <img
              src={profile.logo}
              alt={profile.name}
              style={{ height: 22, width: 22, display: 'block' }}
            />
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 14,
                fontWeight: 700,
                letterSpacing: '0.02em',
                color: 'var(--text-primary)',
              }}
            >
              {profile.name}
            </span>
          </a>
        </div>

        <button
          className="hamburger"
          onClick={toggleMobile}
          aria-label="Menu"
          aria-expanded={mobileOpen}
          style={{
            display: 'none',
            alignItems: 'center',
            justifyContent: 'center',
            width: 36,
            height: 36,
            background: 'none',
            border: '1px solid var(--border-input)',
            borderRadius: 8,
            cursor: 'pointer',
            color: 'var(--text-primary)',
            fontSize: 15,
            padding: 0,
          }}
        >
          ☰
        </button>

        <nav
          className="nav-links"
          style={{ display: 'flex', alignItems: 'center', gap: 28 }}
        >
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu} className="nav-link" style={labelStyle}>
              {link.label}
            </a>
          ))}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            onClick={closeMenu}
            className="cta-pill"
            style={{
              ...labelStyle,
              fontWeight: 500,
              letterSpacing: '0.06em',
              padding: '8px 18px',
              borderRadius: 100,
            }}
          >
            Get in touch
          </a>
          <button
            type="button"
            onClick={toggleTheme}
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="icon-btn"
            style={{
              width: 32,
              height: 32,
              borderRadius: '50%',
              border: '1px solid var(--border-input)',
              display: 'grid',
              placeItems: 'center',
              fontSize: 14,
              color: 'var(--text-primary)',
              background: 'none',
              cursor: 'pointer',
              flex: 'none',
              padding: 0,
            }}
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </nav>
      </div>
    </header>
  )
}
