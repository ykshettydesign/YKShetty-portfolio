import React, { useEffect, useRef } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Work from '../components/Work'
import Practice from '../components/Practice'
import Instruments from '../components/Instruments'
import About from '../components/About'
import Footer from '../components/Footer'
import { useScrollReveal } from '../hooks/useScrollReveal'

/** The portfolio home page — the original single-page composition. */
export default function Home() {
  const rootRef = useRef(null)
  useScrollReveal(rootRef)

  // Deep-linked hash (e.g. arriving at "/#work" from a case study): the browser
  // tries to scroll before React has rendered the target, so it lands at the top.
  // Scroll to it after mount, re-trying a few times while the sticky hero and
  // reveal animations settle the layout. Bails as soon as the user scrolls.
  useEffect(() => {
    const id = window.location.hash.slice(1)
    if (!id) return undefined
    let userScrolled = false
    const onScroll = () => { userScrolled = true }
    window.addEventListener('wheel', onScroll, { passive: true, once: true })
    window.addEventListener('touchmove', onScroll, { passive: true, once: true })
    const timers = [0, 120, 300, 600].map((delay) =>
      setTimeout(() => {
        if (userScrolled) return
        document.getElementById(id)?.scrollIntoView()
      }, delay),
    )
    return () => {
      timers.forEach(clearTimeout)
      window.removeEventListener('wheel', onScroll)
      window.removeEventListener('touchmove', onScroll)
    }
  }, [])

  return (
    <div
      id="top"
      ref={rootRef}
      style={{ minHeight: '100vh', background: 'var(--bg-page)', color: 'var(--text-primary)', fontFamily: 'var(--font-display)', fontWeight: 400 }}
    >
      <Header />
      <main>
        <Hero />
        <Work />
        <Practice />
        <Instruments />
        <About />
      </main>
      <Footer />
    </div>
  )
}
