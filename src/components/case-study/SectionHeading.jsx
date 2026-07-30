import React from 'react'

/** Best-effort slug from heading children so every section gets a scroll anchor. */
function slugify(node) {
  if (typeof node === 'string' || typeof node === 'number') return String(node)
  if (Array.isArray(node)) return node.map(slugify).join(' ')
  if (node && node.props) return slugify(node.props.children)
  return ''
}
function toId(node) {
  return slugify(node)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

/**
 * Consistent section title with hierarchy + a scroll anchor. Also mapped to
 * markdown `##` so plain `## Heading` in MDX renders here. Optional `eyebrow`
 * for a small mono kicker above the title.
 */
export function SectionHeading({ children, eyebrow, id, ...rest }) {
  const anchor = id || toId(children)
  return (
    <div className="cs-heading" id={anchor} {...rest}>
      {eyebrow ? <div className="cs-heading-eyebrow">{eyebrow}</div> : null}
      <h2 className="cs-heading-title">
        <a href={`#${anchor}`} className="cs-heading-anchor">{children}</a>
      </h2>
    </div>
  )
}

/** In-section sub-title (maps to markdown `###`). */
export function SubHeading({ children, id, ...rest }) {
  const anchor = id || toId(children)
  return (
    <h3 className="cs-subheading" id={anchor} {...rest}>{children}</h3>
  )
}
