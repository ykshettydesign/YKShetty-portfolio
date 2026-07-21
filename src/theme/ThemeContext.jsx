import React, { createContext, useContext, useCallback, useEffect, useMemo, useState } from 'react'

/**
 * ThemeContext
 * ------------------------------------------------------------------
 * Holds the active theme ('light' | 'dark'), a toggle, and an explicit
 * setter. The chosen theme is written to `document.documentElement`
 * as `data-theme`, which flips the CSS custom-property token set
 * defined in styles/tokens.css. Preference is persisted to
 * localStorage and falls back to the OS `prefers-color-scheme`.
 */

const STORAGE_KEY = 'ys-theme'

const ThemeContext = createContext({
  theme: 'light',
  setTheme: () => {},
  toggleTheme: () => {},
})

function getInitialTheme() {
  if (typeof window === 'undefined') return 'light'
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === 'light' || stored === 'dark') return stored
  } catch {
    /* localStorage may be unavailable (private mode) — ignore */
  }
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark'
  }
  return 'light'
}

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(getInitialTheme)

  // Reflect theme onto <html data-theme> so tokens.css can respond.
  useEffect(() => {
    const root = document.documentElement
    root.setAttribute('data-theme', theme)
    root.style.colorScheme = theme
    try {
      window.localStorage.setItem(STORAGE_KEY, theme)
    } catch {
      /* ignore persistence failures */
    }
  }, [theme])

  // Respect live OS changes only while the user hasn't set an explicit choice.
  useEffect(() => {
    if (!window.matchMedia) return undefined
    const mql = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = (e) => {
      let hasStored = false
      try {
        hasStored = Boolean(window.localStorage.getItem(STORAGE_KEY))
      } catch {
        hasStored = false
      }
      if (!hasStored) setThemeState(e.matches ? 'dark' : 'light')
    }
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [])

  const setTheme = useCallback((next) => {
    setThemeState((prev) => (next === 'light' || next === 'dark' ? next : prev))
  }, [])

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }, [])

  const value = useMemo(
    () => ({ theme, setTheme, toggleTheme }),
    [theme, setTheme, toggleTheme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  return useContext(ThemeContext)
}

export default ThemeContext
