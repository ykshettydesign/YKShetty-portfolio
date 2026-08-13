import React from 'react'

/* ============================================================
   ICON SET — inline SVG, no dependency, CSP-safe
   ------------------------------------------------------------
   Lucide-style stroke glyphs on a 24×24 grid, drawn in currentColor
   so they inherit text/accent colour. Used to anchor key segments
   (outcomes, glance, metrics, section eyebrows, quotes) — visual
   handles that aid scanning (Law of Proximity / Von Restorff).
   ============================================================ */

const P = (d) => <path d={d} key={d} />

const ICONS = {
  // — people / project meta —
  user: [P('M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2'), <circle cx="12" cy="7" r="4" key="c" />],
  users: [
    P('M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2'),
    <circle cx="9" cy="7" r="4" key="c" />,
    P('M22 21v-2a4 4 0 0 0-3-3.87'),
    P('M16 3.13a4 4 0 0 1 0 7.75'),
  ],
  pin: [P('M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z'), <circle cx="12" cy="10" r="3" key="c" />],
  device: [<rect x="5" y="2" width="14" height="20" rx="2" key="r" />, P('M12 18h.01')],
  calendar: [<rect x="3" y="4" width="18" height="18" rx="2" key="r" />, P('M16 2v4M8 2v4M3 10h18')],
  wrench: [
    P('M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z'),
  ],

  // — outcomes / impact —
  rocket: [
    P('M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z'),
    P('M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z'),
    P('M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0'),
    P('M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5'),
  ],
  trendUp: [<polyline points="22 7 13.5 15.5 8.5 10.5 2 17" key="a" />, <polyline points="16 7 22 7 22 13" key="b" />],
  cube: [
    P('M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z'),
    P('M3.27 6.96 12 12.01l8.73-5.05'),
    P('M12 22.08V12'),
  ],
  layers: [
    <polygon points="12 2 2 7 12 12 22 7 12 2" key="a" />,
    <polyline points="2 17 12 22 22 17" key="b" />,
    <polyline points="2 12 12 17 22 12" key="c" />,
  ],
  check: [P('M22 11.08V12a10 10 0 1 1-5.93-9.14'), <polyline points="22 4 12 14.01 9 11.01" key="p" />],
  ban: [<circle cx="12" cy="12" r="10" key="c" />, <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" key="l" />],
  shield: [P('M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z')],
  zap: [<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" key="p" />],

  // — section eyebrows —
  alert: [
    P('M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z'),
    <line x1="12" y1="9" x2="12" y2="13" key="a" />,
    <line x1="12" y1="17" x2="12.01" y2="17" key="b" />,
  ],
  compass: [<circle cx="12" cy="12" r="10" key="c" />, <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" key="p" />],
  eye: [P('M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z'), <circle cx="12" cy="12" r="3" key="c" />],
  refresh: [
    P('M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8'),
    P('M21 3v5h-5'),
    P('M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16'),
    P('M8 16H3v5'),
  ],
  merge: [<circle cx="18" cy="18" r="3" key="a" />, <circle cx="6" cy="6" r="3" key="b" />, P('M6 21V9a9 9 0 0 0 9 9')],
  minimize: [
    <polyline points="4 14 10 14 10 20" key="a" />,
    <polyline points="20 10 14 10 14 4" key="b" />,
    <line x1="14" y1="10" x2="21" y2="3" key="c" />,
    <line x1="3" y1="21" x2="10" y2="14" key="d" />,
  ],
  sliders: [
    <line x1="4" y1="21" x2="4" y2="14" key="a" />,
    <line x1="4" y1="10" x2="4" y2="3" key="b" />,
    <line x1="12" y1="21" x2="12" y2="12" key="c" />,
    <line x1="12" y1="8" x2="12" y2="3" key="d" />,
    <line x1="20" y1="21" x2="20" y2="16" key="e" />,
    <line x1="20" y1="12" x2="20" y2="3" key="f" />,
    <line x1="1" y1="14" x2="7" y2="14" key="g" />,
    <line x1="9" y1="8" x2="15" y2="8" key="h" />,
    <line x1="17" y1="16" x2="23" y2="16" key="i" />,
  ],
  filter: [<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" key="p" />],
  sparkles: [
    P('M12 3l1.9 4.8L18 9.5l-4.1 1.7L12 16l-1.9-4.8L6 9.5l4.1-1.7L12 3z'),
    P('M19 15l.6 1.6L21 17.2l-1.4.6L19 19l-.6-1.6L17 17.8l1.4-.6L19 15z'),
  ],
  flask: [P('M9 3h6'), P('M10 3v6.5L4.5 19a2 2 0 0 0 1.8 3h11.4a2 2 0 0 0 1.8-3L14 9.5V3'), P('M7 15h10')],
  chart: [
    <line x1="12" y1="20" x2="12" y2="10" key="a" />,
    <line x1="18" y1="20" x2="18" y2="4" key="b" />,
    <line x1="6" y1="20" x2="6" y2="16" key="c" />,
  ],
  flag: [P('M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z'), <line x1="4" y1="22" x2="4" y2="15" key="l" />],
  target: [<circle cx="12" cy="12" r="10" key="a" />, <circle cx="12" cy="12" r="6" key="b" />, <circle cx="12" cy="12" r="2" key="c" />],
  smartphone: [<rect x="5" y="2" width="14" height="20" rx="2" key="r" />, P('M12 18h.01')],
  lightbulb: [
    P('M9 18h6'),
    P('M10 22h4'),
    P('M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14'),
  ],
}

/** Filled decorative glyphs (rendered with fill, not stroke). */
const FILLED = {
  quote: 'M9.5 5C6.5 5 4 7.5 4 10.9c0 3.1 2.2 5.1 5 5.1.3 0 .6 0 .9-.1-.7 1.6-2.3 2.8-4.4 3.2-.4.1-.6.5-.5.9.1.4.5.6.9.5C9.6 19.5 13 16 13 10.6 13 7.3 11.6 5 9.5 5Zm10 0C16.5 5 14 7.5 14 10.9c0 3.1 2.2 5.1 5 5.1.3 0 .6 0 .9-.1-.7 1.6-2.3 2.8-4.4 3.2-.4.1-.6.5-.5.9.1.4.5.6.9.5C19.6 19.5 23 16 23 10.6 23 7.3 21.6 5 19.5 5Z',
}

/**
 * <Icon name="rocket" size={18} />  — inherits currentColor.
 * Unknown names render nothing (never breaks layout).
 */
export function Icon({ name, size = 18, strokeWidth = 1.75, className, style, ...rest }) {
  if (FILLED[name]) {
    return (
      <svg
        className={className}
        style={style}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        focusable="false"
        {...rest}
      >
        <path d={FILLED[name]} />
      </svg>
    )
  }
  const paths = ICONS[name]
  if (!paths) return null
  return (
    <svg
      className={className}
      style={style}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {paths}
    </svg>
  )
}
