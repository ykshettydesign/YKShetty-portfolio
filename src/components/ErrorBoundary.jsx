import React from 'react'

/**
 * Generic error boundary. Catches render/lifecycle/effect-commit errors from
 * its subtree so a single failing component can't blank the whole page —
 * important on restrictive/virtualized corporate browsers (e.g. Zscaler
 * isolation) where WebGL and other capabilities may be unavailable.
 *
 * `fallback` may be a React node or a function `(error) => node`. When omitted
 * the boundary renders nothing on failure, which is the right choice for
 * decorative subtrees (the surrounding page keeps rendering).
 */
export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }

  static getDerivedStateFromError(error) {
    return { error }
  }

  componentDidCatch(error, info) {
    if (import.meta.env && import.meta.env.DEV) {
      // Dev-only surface; no third-party reporter by design.
      console.error('[ErrorBoundary]', error, info)
    }
  }

  render() {
    const { error } = this.state
    if (error) {
      const { fallback } = this.props
      if (typeof fallback === 'function') return fallback(error)
      return fallback !== undefined ? fallback : null
    }
    return this.props.children
  }
}
