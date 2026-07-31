import React from 'react'
import { Icon } from './Icon'

/**
 * Large emphasised quote. Two variants:
 *   • user      — a real quote (operator/stakeholder): a big decorative quote
 *                 glyph, italic voice, neutral rule.
 *   • principle — a design-principle statement: a lightbulb chip + accent voice.
 * `cite` renders a small attribution line beneath.
 */
export function PullQuote({ children, variant = 'principle', cite, ...rest }) {
  const v = variant === 'user' ? 'user' : 'principle'
  return (
    <figure className={`cs-pullquote cs-pullquote--${v}`} {...rest}>
      {v === 'user' ? (
        <span className="cs-pullquote-glyph" aria-hidden="true">
          <Icon name="quote" size={40} />
        </span>
      ) : (
        <span className="cs-pullquote-chip" aria-hidden="true">
          <Icon name="lightbulb" size={18} />
        </span>
      )}
      <blockquote className="cs-pullquote-text">{children}</blockquote>
      {cite ? <figcaption className="cs-pullquote-cite">{cite}</figcaption> : null}
    </figure>
  )
}
