import React, { useEffect, useRef, useState } from 'react'
import CaseStudyHeader from '../layouts/CaseStudyHeader'
import { isValidPassword, unlock } from '../case-studies/access'

const LINKEDIN = 'https://www.linkedin.com/in/ykshetty/'

/** Two eyes whose pupils track the cursor; expression is driven by `mood`. */
function Avatar({ mood = '', avatarRef }) {
  const cls = `gate-avatar${mood ? ` is-${mood}` : ''}`
  return (
    <div className={cls} ref={avatarRef} aria-hidden="true">
      <div className="gate-eye l"><span className="gate-pupil" /></div>
      <div className="gate-eye r"><span className="gate-pupil" /></div>
    </div>
  )
}

/**
 * Password prompt for a protected case study, styled as a continuation of the
 * Hero chat: an incoming request, my first-person reply, and the password field
 * as the chat composer. On a correct password it persists the unlock for the
 * session and calls onUnlock() so the page swaps in the real content.
 */
export default function CaseStudyGate({ title, onUnlock }) {
  const [value, setValue] = useState('')
  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)
  const [replied, setReplied] = useState(false)   // typing dots → my reply
  const [mood, setMood] = useState('')            // '', 'closed', 'squint', 'happy'

  const inputRef = useRef(null)
  const avatarRefs = useRef([])
  const registerAvatar = (el) => { if (el && !avatarRefs.current.includes(el)) avatarRefs.current.push(el) }

  const reduce = typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches

  // reveal my reply after a short "typing" beat
  useEffect(() => {
    const t = setTimeout(() => setReplied(true), reduce ? 200 : 1200)
    return () => clearTimeout(t)
  }, [reduce])

  // cursor-tracking pupils (rAF loop; paused under reduced-motion)
  useEffect(() => {
    if (reduce) return undefined
    let raf = 0
    let mx = window.innerWidth / 2
    let my = window.innerHeight / 2
    const onMove = (e) => { mx = e.clientX; my = e.clientY }
    window.addEventListener('mousemove', onMove)
    const tick = () => {
      avatarRefs.current.forEach((av) => {
        const r = av.getBoundingClientRect()
        if (!r.width) return
        const cx = r.left + r.width / 2
        const cy = r.top + r.height / 2
        const a = Math.atan2(my - cy, mx - cx)
        const d = Math.min(2.6, Math.hypot(mx - cx, my - cy) / 40)
        av.querySelectorAll('.gate-pupil').forEach((p) => {
          p.style.transform = `translate(calc(-50% + ${Math.cos(a) * d}px), calc(-50% + ${Math.sin(a) * d}px))`
        })
      })
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => { window.removeEventListener('mousemove', onMove); cancelAnimationFrame(raf) }
  }, [reduce])

  const onChange = (e) => {
    const v = e.target.value
    setValue(v)
    if (error) setError(false)
    // privacy: close eyes while a password is being typed
    if (mood !== 'happy') setMood(v.length ? 'closed' : '')
  }

  const submit = async (e) => {
    e.preventDefault()
    if (await isValidPassword(value)) {
      unlock()
      setMood('happy')
      setTimeout(onUnlock, reduce ? 0 : 420)
      return
    }
    setError(true)
    setMood('squint')
    setTimeout(() => setMood(value ? 'closed' : ''), 700)
  }

  return (
    <div className="cs-page">
      <CaseStudyHeader />
      <div className="gate-stage">
        <div className="gate-card">
          <div className="gate-chrome">
            <div className="gate-dots"><span /><span /><span /></div>
            <div className="gate-chrome-label">{title ? `${title.split(' ')[0]} · protected` : 'Protected case study'}</div>
          </div>

          <div className="gate-thread">
            <div className="gate-row them" style={{ animationDelay: '.05s' }}>
              <div className="gate-bubble">Can I read the full case study?</div>
            </div>

            {!replied ? (
              <div className="gate-row me">
                <Avatar avatarRef={registerAvatar} mood={mood} />
                <div className="gate-typing"><span /><span /><span /></div>
              </div>
            ) : (
              <div className="gate-row me">
                <Avatar avatarRef={registerAvatar} mood={mood} />
                <div className="gate-bubble">
                  <span className="gate-kicker">A quick note</span>
                  This one belongs to the client — I keep it behind a password out of respect for their confidentiality.
                  <small>
                    You’ll find the password in my résumé or cover letter. Otherwise, just{' '}
                    <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">ping me on LinkedIn</a>.
                  </small>
                </div>
              </div>
            )}

            {error && (
              <div className="gate-row me" role="alert">
                <Avatar avatarRef={registerAvatar} mood={mood} />
                <div className="gate-bubble">That’s not the one — check the résumé header, it’s there. 🙂</div>
              </div>
            )}
          </div>

          <div className="gate-composer">
            <form className={`gate-field${error ? ' is-err' : ''}`} onSubmit={submit} autoComplete="off">
              <input
                ref={inputRef}
                type={show ? 'text' : 'password'}
                value={value}
                onChange={onChange}
                placeholder="Type the password…"
                aria-label="Case study password"
                aria-invalid={error}
                autoFocus
              />
              <button
                type="button"
                className="gate-peek"
                onClick={() => setShow((s) => !s)}
                aria-label={show ? 'Hide password' : 'Show password'}
                title={show ? 'Hide' : 'Show'}
              >
                {show ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" /><line x1="1" y1="1" x2="23" y2="23" /></svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" /><circle cx="12" cy="12" r="3" /></svg>
                )}
              </button>
              <button type="submit" className="gate-send" aria-label="Unlock case study" title="Unlock">↑</button>
            </form>
            <a href="/#work" className="gate-back">‹ Back to work</a>
          </div>
        </div>
      </div>
    </div>
  )
}
