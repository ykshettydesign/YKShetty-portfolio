import React, { createContext, useContext } from 'react'
import { Icon } from './Icon'

/**
 * Provides a slug → icon-name map to every SectionHeading, so a case study can
 * assign section icons from its `meta` (via CaseStudyPage) while still authoring
 * headings as plain markdown `##`. Empty by default.
 */
export const SectionIconsContext = createContext({})

/** Best-effort slug from heading children so every section gets a scroll anchor. */
function slugify(node) {
  if (typeof node === 'string' || typeof node === 'number') return String(node)
  if (Array.isArray(node)) return node.map(slugify).join(' ')
  if (node && node.props) return slugify(node.props.children)
  return ''
}
function toId(node) {
  return slugify(node).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

/**
 * Consistent section title with hierarchy + a scroll anchor. Renders an eyebrow
 * row carrying an auto section number (CSS counter) and an icon — resolved from
 * an explicit `icon` prop or the SectionIconsContext by slug. Also mapped to
 * markdown `##`.
 */
export function SectionHeading({ children, eyebrow, icon, id, ...rest }) {
  const anchor = id || toId(children)
  const iconMap = useContext(SectionIconsContext)
  const iconName = icon || iconMap[anchor]
  return (
    <div className="cs-heading" id={anchor} {...rest}>
      <div className="cs-heading-eyebrow">
        <span className="cs-heading-num" aria-hidden="true" />
        {iconName ? <Icon name={iconName} size={14} className="cs-heading-icon" /> : null}
        {eyebrow ? <span>{eyebrow}</span> : null}
      </div>
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
