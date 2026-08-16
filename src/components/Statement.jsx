import React, { useRef } from 'react'
import { statement } from '../data/content'
import { useStatementReveal } from '../hooks/useStatementReveal'
import StatementScrollCue from './StatementScrollCue'
import ClientLogos from './ClientLogos'

/**
 * Montone-style scroll-reveal statement. A tall section acts as the scroll
 * "track"; the inner block is position: sticky so the text pins centered on
 * screen while the track scrolls past, and each line brightens in sequence
 * (see useStatementReveal). Background is the brand primary color.
 */
export default function Statement() {
  const sectionRef = useRef(null)
  const lineRefs = useRef([])

  useStatementReveal(sectionRef, lineRefs)

  return (
    <section ref={sectionRef} className="statement-section" aria-label="Statement">
      <div className="statement-sticky">
        <div className="statement-content">
          <p className="statement-text">
            {statement.lines.map((line, i) => (
              <span
                key={i}
                ref={(el) => {
                  lineRefs.current[i] = el
                }}
                className="statement-line"
                style={{ color: 'rgba(255, 255, 255, 1)' }}
              >
                {line}
              </span>
            ))}
          </p>
          {/* Client / experience logos, on the accent background (montone-style). */}
          <ClientLogos onAccent />
        </div>
        {/* Exact copy of the hero scroll cue — same position & fade behaviour. */}
        <StatementScrollCue sectionRef={sectionRef} />
      </div>
    </section>
  )
}
