/* ============================================================
   CASE-STUDY ACCESS
   ------------------------------------------------------------
   Client-side password gate for selected case studies.

   NOTE: this is a light "please knock first" gate, not real
   security. Passwords are stored as SHA-256 hashes (below) so the
   plaintext isn't sitting in the JS bundle — but the case-study
   content itself still ships client-side, so a determined visitor
   can bypass the check or read the content directly. It's meant to
   keep work behind a shared password for recruiters / on request,
   which is the standard expectation for a portfolio.

   To protect a case study: add its slug to PROTECTED_SLUGS.
   To change who gets in: replace PASSWORD_HASHES. Generate a hash
   for a new password (any one of them unlocks) with, e.g.:
     printf '%s' 'YourPassword' | shasum -a 256
   ============================================================ */

/** Slugs (folder names under src/case-studies/) that require a password. */
export const PROTECTED_SLUGS = new Set([
  'swiftsort',
  'cards',
  'postoffice',
  'postbox',
])

/**
 * SHA-256 hashes of the accepted passwords (case-sensitive, trimmed).
 * Any one of them unlocks. Keep the plaintext out of this file.
 */
export const PASSWORD_HASHES = [
  // SHA-256 of 'designcraft'
  '5a1b2eac748aaf5c54ba0cac0dc8a7711fe1f03c15bcbc2854ada724e0412b29',
]

/** sessionStorage key holding the per-session unlock flag. */
const STORAGE_KEY = 'cs-unlocked'

/** Does this slug sit behind the password gate? */
export function isProtected(slug) {
  return PROTECTED_SLUGS.has(slug)
}

/** SHA-256 → lowercase hex, using the browser's built-in Web Crypto. */
async function sha256Hex(text) {
  const bytes = new TextEncoder().encode(text)
  const digest = await crypto.subtle.digest('SHA-256', bytes)
  return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, '0')).join('')
}

/** Async, case-sensitive check of a password against the stored hashes. */
export async function isValidPassword(input) {
  const value = (input ?? '').trim()
  if (!value) return false
  try {
    const hash = await sha256Hex(value)
    return PASSWORD_HASHES.includes(hash)
  } catch {
    return false
  }
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
