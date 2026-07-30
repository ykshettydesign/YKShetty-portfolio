import React from 'react'

/**
 * Large emphasised quote. Two variants:
 *   • user      — a real quote (operator/stakeholder), italic, neutral rule
 *   • principle — a design-principle statement, accent-forward
 * `cite` renders a small attribution line beneath.
 */
export function PullQuote({ children, variant = 'principle', cite, ...rest }) {
  const v = variant === 'user' ? 'user' : 'principle'
  return (
    <figure className={`cs-pullquote cs-pullquote--${v}`} {...rest}>
      <blockquote className="cs-pullquote-text">{children}</blockquote>
      {cite ? <figcaption className="cs-pullquote-cite">{cite}</figcaption> : null}
    </figure>
  )
}
