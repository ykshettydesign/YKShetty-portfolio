import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ErrorBoundary from './components/ErrorBoundary'
import { ThemeProvider } from './theme/ThemeContext'
import { CONTACT_EMAIL } from './data/content'
import './styles/tokens.css'
import './styles/global.css'

// Last-resort fallback if anything above throws during render/mount. Kept
// self-contained (no theme/CSS-var dependency) so it always renders legibly,
// and never leaves visitors on a blank page.
function AppFallback() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
        padding: 24,
        background: '#f4f4f7',
        color: '#1a1a22',
        fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, sans-serif',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: 520 }}>
        <h1 style={{ fontSize: 24, fontWeight: 600, margin: '0 0 12px' }}>
          Yogesh Shetty · Senior Product Designer
        </h1>
        <p style={{ margin: '0 0 20px', lineHeight: 1.6, color: '#6a6a78' }}>
          The interactive version of this page didn't load in your browser, but
          you can still reach me directly:
        </p>
        <p style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap', margin: 0 }}>
          <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: '#5b4be0', fontWeight: 500 }}>
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/ykshetty/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#5b4be0', fontWeight: 500 }}
          >
            LinkedIn
          </a>
        </p>
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<AppFallback />}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </React.StrictMode>,
)
