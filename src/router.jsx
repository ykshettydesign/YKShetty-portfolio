import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'

/* ============================================================
   MINIMAL HISTORY ROUTER
   ------------------------------------------------------------
   The site is a single-page portfolio; case studies live at
   /case-studies/<slug>. This keeps that working without pulling
   in a routing dependency: one <RouterProvider>, a usePath()
   hook, a navigate() helper, and a <Link> that intercepts
   same-origin clicks and falls back to a normal anchor for
   modified clicks / new tabs. A Vercel SPA rewrite (vercel.json)
   makes deep links resolve to index.html on refresh.
   ============================================================ */

const RouterContext = createContext({ path: '/', navigate: () => {} })

export function RouterProvider({ children }) {
  const [path, setPath] = useState(() => window.location.pathname)

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname)
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  const navigate = useCallback((to, { replace = false } = {}) => {
    if (to === window.location.pathname) return
    window.history[replace ? 'replaceState' : 'pushState']({}, '', to)
    setPath(to)
    window.scrollTo(0, 0)
  }, [])

  return (
    <RouterContext.Provider value={{ path, navigate }}>
      {children}
    </RouterContext.Provider>
  )
}

export function useRouter() {
  return useContext(RouterContext)
}

export function usePath() {
  return useContext(RouterContext).path
}

/**
 * Internal link. Renders a real <a href> (crawlable, right-click friendly) but
 * intercepts plain left-clicks to route client-side. Hash links (#work) and
 * external URLs pass straight through to the browser.
 */
export function Link({ to, children, onClick, ...rest }) {
  const { navigate } = useRouter()
  const isInternal = to && to.startsWith('/') && !to.startsWith('//')

  const handleClick = (e) => {
    onClick?.(e)
    if (!isInternal) return
    if (e.defaultPrevented) return
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
    e.preventDefault()
    navigate(to)
  }

  return (
    <a href={to} onClick={handleClick} {...rest}>
      {children}
    </a>
  )
}
