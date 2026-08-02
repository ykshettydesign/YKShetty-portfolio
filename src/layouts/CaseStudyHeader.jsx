import React from 'react'
import Header from '../components/Header'

/**
 * The site nav in its subpage form (case studies / password gate). This is just
 * the shared Header with `subpage` set, so the two can never drift apart —
 * kept as a named wrapper so existing subpage imports stay stable.
 */
export default function CaseStudyHeader() {
  return <Header subpage />
}
