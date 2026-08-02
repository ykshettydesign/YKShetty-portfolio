/* ============================================================
   CASE-STUDY ACCESS
   ------------------------------------------------------------
   Client-side password gate for selected case studies.

   NOTE: this is a light "please knock first" gate, not real
   security — the case-study content still ships in the JS bundle,
   so a determined visitor can read it. It's meant to keep the
   work behind a shared password for recruiters / on request,
   which is the standard expectation for a portfolio.

   To protect a case study: add its slug to PROTECTED_SLUGS.
   To change who gets in: edit PASSWORDS (any one of them works).
   ============================================================ */

/** Slugs (folder names under src/case-studies/) that require a password. */
export const PROTECTED_SLUGS = new Set([
  'swiftsort',
])

/** Any one of these unlocks the protected case studies. Add more freely. */
export const PASSWORDS = [
  'YKShetty',
  'yks-carft',
]

const STORAGE_KEY = 'cs-unlocked'

/** Does this slug sit behind the password gate? */
export function isProtected(slug) {
  return PROTECTED_SLUGS.has(slug)
}

/** Case-sensitive check against the allowed passwords. */
export function isValidPassword(input) {
  return PASSWORDS.includes((input ?? '').trim())
}

/**
 * Whether the visitor has already unlocked protected case studies this session.
 * One correct password unlocks every protected study until the tab is closed.
 */
export function isUnlocked() {
  try {
    return sessionStorage.getItem(STORAGE_KEY) === '1'
  } catch {
    return false
  }
}

/** Persist the unlock for the rest of the browser session. */
export function unlock() {
  try {
    sessionStorage.setItem(STORAGE_KEY, '1')
  } catch {
    /* storage unavailable (private mode etc.) — gate stays for the session */
  }
}
