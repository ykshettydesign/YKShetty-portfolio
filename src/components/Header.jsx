import React, { useCallback, useEffect, useState } from 'react'
import { navLinks, profile, CONTACT_EMAIL } from '../data/content'
import { useTheme } from '../theme/ThemeContext'
import { Link } from '../router'

// Grotesk, sentence-case nav labels (inspired by bou.co) — a deliberate move
// away from the old mono/uppercase/tracked treatment.
const navLinkStyle = {
  fontFamily: 'var(--font-display)',
  fontSize: 14,
  fontWeight: 400,
  letterSpacing: '-0.01em',
  textTransform: 'none',
}

/**
 * The one site nav, used on every page.
 *
 * `subpage` switches it between its two forms:
 *   - home (default): the logo scrolls to #top and the section links are bare
 *     in-page anchors (#work …); the bar auto-hides on scroll into content.
 *   - subpage (case studies / gate): the logo routes home via SPA, and the
 *     section links point back to the home page (/#work …) so they scroll
 *     correctly from another route; the bar stays put (no auto-hide).
 * Everything else — layout, width, theme toggle — is shared, so the two forms
 * can never drift apart.
 */
export default function Header({ subpage = false }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  const toggleMobile = useCallback(() => setMobileOpen((v) => !v), [])
  const closeMenu = useCallback(() => setMobileOpen(false), [])

  // Auto-hide on scroll (home only): slide the bar up when scrolling down into
  // content, slide it back on scroll up. Always visible near the very top.
  // `scrolled` also drives the chrome: transparent overlay at the very top
  // (bou.co-style), fading into the glass bar once you leave the hero.
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    if (subpage) return undefined
    let lastY = window.scrollY
    let raf = null
    const update = () => {
      raf = null
      const y = window.scrollY
      const delta = y - lastY
      setScrolled(y > 8)
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
  }, [subpage])

  // Scroll-spy (home only): light up the nav item whose section is in view, so
  // the active link gets bou.co's small dot indicator.
  const [activeId, setActiveId] = useState(null)
  useEffect(() => {
    if (subpage) return undefined
    const els = navLinks
      .map((l) => document.getElementById(l.href.replace('#', '')))
      .filter(Boolean)
    if (!els.length) return undefined
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActiveId(e.target.id) })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [subpage])

  // Section links are bare anchors at home, home-prefixed on a subpage.
  const sectionHref = (href) => (subpage ? `/${href}` : href)
  // Chrome reads as solid on subpages (content starts immediately) and once
  // scrolled on the home page; transparent while sitting over the hero.
  const solid = subpage || scrolled

  const logoInner = (
    <>
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
    </>
  )
  const logoStyle = { display: 'flex', alignItems: 'center', gap: 10, height: 20 }

  return (
    <header
      className={mobileOpen ? 'mobile-menu-open' : ''}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 60,
        background: solid || mobileOpen ? 'var(--nav-bg)' : 'transparent',
        backdropFilter: solid || mobileOpen ? 'blur(16px) saturate(180%)' : 'none',
        WebkitBackdropFilter: solid || mobileOpen ? 'blur(16px) saturate(180%)' : 'none',
        borderBottom: `1px solid ${solid || mobileOpen ? 'var(--border-subtle)' : 'transparent'}`,
        transform: hidden && !mobileOpen ? 'translateY(-100%)' : 'translateY(0)',
        transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease',
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
          {subpage ? (
            <Link to="/" style={logoStyle}>{logoInner}</Link>
          ) : (
            <a href="#top" style={logoStyle}>{logoInner}</a>
          )}
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
          {navLinks.map((link) => {
            const isActive = !subpage && activeId === link.href.replace('#', '')
            return (
              <a
                key={link.href}
                href={sectionHref(link.href)}
                onClick={closeMenu}
                className={`nav-link${isActive ? ' is-active' : ''}`}
                style={navLinkStyle}
              >
                {link.label}
              </a>
            )
          })}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            onClick={closeMenu}
            className="cta-arrow"
            aria-label="Get in touch"
          >
            <span className="cta-arrow__label">Get in touch</span>
            <span className="cta-arrow__circle" aria-hidden="true">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
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
