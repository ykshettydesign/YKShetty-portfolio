import React from 'react'
import { usePath } from './router'
import Home from './pages/Home'
import CaseStudyPage from './pages/CaseStudyPage'

/**
 * Top-level route switch. Home for "/", the case-study reader for
 * "/case-studies/<slug>". Kept deliberately tiny — see src/router.jsx.
 */
export default function App() {
  const path = usePath()
  const match = path.match(/^\/case-studies\/([^/]+)\/?$/)

  if (match) return <CaseStudyPage slug={decodeURIComponent(match[1])} />
  return <Home />
}
