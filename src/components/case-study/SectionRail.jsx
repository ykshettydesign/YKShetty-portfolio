import React, { useCallback, useEffect, useState } from 'react'

/* ============================================================
   SECTION RAIL — quick jump-navigation for a case study
   ------------------------------------------------------------
   Auto-discovers the section headings inside `.cs-content` (each
   SectionHeading / DecisionList already carries an id + title), so
   there's no per-case-study list to maintain — every study gets it.

   • Scroll-spy highlights the section you're in (last heading past a
     small top threshold), rAF-throttled.
   • Click smooth-scrolls to a section (respects reduced-motion) and
     updates the hash so the position is deep-linkable.
   • Desktop: a slim rail in the right margin (a subtle floating panel
     so it stays legible over full-width media). Narrow screens: a
     "Contents" pill that opens a sheet — no wasted width.
   ============================================================ */
export function SectionRail({ keySections = [] }) {
  const [sections, setSections] = useState([])
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)
  const keySet = new Set(keySections)

  useEffect(() => {
    const nodes = document.querySelectorAll(
      '.cs-content .cs-heading[id], .cs-content .cs-decisionlist[id]',
    )
    const items = []
    nodes.forEach((n) => {
      const label = (
        n.querySelector('.cs-heading-title, .cs-decisionlist-title')?.textContent || ''
      ).trim()
      if (n.id && label) items.push({ id: n.id, label })
    })
    setSections(items)
    if (!items.length) return undefined

    const els = items.map((s) => document.getElementById(s.id))
    const computeActive = () => {
      const threshold = 130 // clears the sticky header, gives a little lead
      let current = items[0].id
      for (let i = 0; i < els.length; i += 1) {
        if (els[i] && els[i].getBoundingClientRect().top - threshold <= 0) current = items[i].id
        else break
      }
      return current
    }
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => setActive(computeActive()))
    }
    setActive(computeActive()) // initial highlight, synchronous (no wait for a frame)
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  const go = useCallback((id) => {
    const el = document.getElementById(id)
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
    setOpen(false)
    try {
      window.history.replaceState(null, '', `#${id}`)
    } catch {
      /* history unavailable — non-fatal, scroll still happened */
    }
  }, [])

  // Not worth the chrome for a short page.
  if (sections.length < 3) return null

  const item = (s, withDot) => {
    const isKey = keySet.has(s.id)
    return (
      <li key={s.id}>
        <button
          type="button"
          className={`cs-rail-item${active === s.id ? ' is-active' : ''}${isKey ? ' is-key' : ''}`}
          aria-current={active === s.id ? 'true' : undefined}
          title={isKey ? `${s.label} — key section` : s.label}
          onClick={() => go(s.id)}
        >
          {withDot ? <span className="cs-rail-dot" aria-hidden="true" /> : null}
          <span className="cs-rail-label">{s.label}</span>
        </button>
      </li>
    )
  }

  return (
    <>
      <nav className="cs-rail" aria-label="On this page">
        <div className="cs-rail-title">On this page</div>
        <ul className="cs-rail-list">{sections.map((s) => item(s, true))}</ul>
      </nav>

      <div className={`cs-rail-mobile${open ? ' is-open' : ''}`}>
        {open ? (
          <ul className="cs-rail-sheet" aria-label="On this page">
            {sections.map((s) => item(s, false))}
          </ul>
        ) : null}
        <button
          type="button"
          className="cs-rail-pill"
          aria-expanded={open}
          aria-label={open ? 'Close section list' : 'Open section list'}
          onClick={() => setOpen((o) => !o)}
        >
          <span className="cs-rail-pill-icon" aria-hidden="true">{open ? '×' : '☰'}</span>
          Contents
        </button>
      </div>
    </>
  )
}
