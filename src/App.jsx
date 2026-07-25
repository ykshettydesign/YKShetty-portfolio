import React, { useRef } from 'react'
import Header from './components/Header'
import ChatThread from './components/ChatThread'
import Practice from './components/Practice'
import Instruments from './components/Instruments'
import About from './components/About'
import Footer from './components/Footer'
import { useScrollReveal } from './hooks/useScrollReveal'

export default function App() {
  const rootRef = useRef(null)
  useScrollReveal(rootRef)

  return (
    <div
      id="top"
      ref={rootRef}
      style={{ minHeight: '100vh', background: 'var(--bg-page)', color: 'var(--text-primary)', fontFamily: 'var(--font-display)', fontWeight: 400 }}
    >
      <Header />
      <main>
        <ChatThread />
        <Practice />
        <Instruments />
        <About />
      </main>
      <Footer />
    </div>
  )
}
