import React from 'react'

function toId(node) {
  if (typeof node === 'string' || typeof node === 'number') {
    return String(node).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
  }
  return ''
}

/**
 * The decisions section as one cohesive, left-aligned unit at the wide track:
 * its own heading + intro share the left edge with the decision rail below, so
 * titles, bodies and media all line up. `coda` renders a closing note (e.g.
 * "Designed for an industrial floor") in the same left-aligned column.
 * Children are <DecisionBlock> rows.
 */
export function DecisionList({ heading, eyebrow, intro, coda, id, children, ...rest }) {
  const anchor = id || toId(heading)
  return (
    <section className="cs-decisionlist" id={anchor} {...rest}>
      <div className="cs-decisionlist-head">
        {eyebrow ? <div className="cs-heading-eyebrow">{eyebrow}</div> : null}
        {heading ? (
          <h2 className="cs-decisionlist-title">
            <a href={`#${anchor}`} className="cs-heading-anchor">{heading}</a>
          </h2>
        ) : null}
        {intro ? <div className="cs-prose cs-decisionlist-intro">{intro}</div> : null}
      </div>

      <div className="cs-decisionlist-rows">{children}</div>

      {coda ? (
        <div className="cs-decisionlist-coda">
          {coda.title ? <h3 className="cs-subheading cs-decisionlist-coda-title">{coda.title}</h3> : null}
          {coda.body ? <div className="cs-prose cs-decisionlist-coda-body">{coda.body}</div> : null}
        </div>
      ) : null}
    </section>
  )
}
