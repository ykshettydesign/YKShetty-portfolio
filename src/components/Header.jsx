import React, { useCallback, useEffect, useState } from 'react'
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

  // Auto-hide on scroll: slide the bar up when scrolling down into content,
  // slide it back on scroll up. Always visible near the very top. (To use the
  // literal inverse, swap the two setHidden calls below.)
  const [hidden, setHidden] = useState(false)
  useEffect(() => {
    let lastY = window.scrollY
    let raf = null
    const update = () => {
      raf = null
      const y = window.scrollY
      const delta = y - lastY
      if (y < 80) setHidden(false)
      else if (delta > 4) setHidden(true)
      else if (delta < -4) setHidden(false)
      lastY = y
    }
    const onScroll = () => { if (raf == null) raf = requestAnimationFrame(update) }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

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
        transform: hidden && !mobileOpen ? 'translateY(-100%)' : 'translateY(0)',
        transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
        willChange: 'transform',
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
              className="theme-logo"
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
              color: 'var(--text-primary)',
              background: 'none',
              cursor: 'pointer',
              flex: 'none',
              padding: 0,
            }}
          >
            {theme === 'dark' ? (
              // sun — switch to light
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="4.2" />
                <path d="M12 2v2.2M12 19.8V22M4.9 4.9l1.5 1.5M17.6 17.6l1.5 1.5M2 12h2.2M19.8 12H22M4.9 19.1l1.5-1.5M17.6 6.4l1.5-1.5" />
              </svg>
            ) : (
              // moon — switch to dark
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
              </svg>
            )}
          </button>
        </nav>
      </div>
    </header>
  )
}
