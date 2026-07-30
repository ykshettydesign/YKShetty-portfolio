import React from 'react'

/**
 * Body-text wrapper. Holds the reading measure (~65–75ch) and paragraph rhythm
 * for any run of markdown prose. `lead` renders a slightly larger opener.
 * Most copy in a case study lives inside one of these.
 */
export function Prose({ children, lead = false, className = '', ...rest }) {
  return (
    <div className={`cs-prose${lead ? ' cs-prose--lead' : ''}${className ? ` ${className}` : ''}`} {...rest}>
      {children}
    </div>
  )
}
