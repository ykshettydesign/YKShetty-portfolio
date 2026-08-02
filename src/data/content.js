/* ============================================================
   CONTENT
   ------------------------------------------------------------
   All copy, links and structured data live here so markup stays
   decoupled from content. Edit text / URLs in this file only.
   ============================================================ */

export const CONTACT_EMAIL = 'ykshetty.design@gmail.com'

export const profile = {
  name: 'Yogesh Shetty',
  role: 'Senior Product Designer',
  location: 'Oslo',
  logo: '/logos/header_logo.svg',
  tagline:
    'Senior Product Designer. I practice systems thinking — looking past the apparent problem to the root cause, then designing the simplest fix the system already supports.',
}

export const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Practice', href: '#practice' },
  { label: 'Instruments', href: '#instruments' },
  { label: 'About', href: '#about' },
]

export const hero = {
  askLabel: 'What the client asked for',
  brief: 'Make the button bigger.',
  replyLabel: 'What the system revealed →',
  replyMain: "Can't tap with gloves on — so I used the scanner they had.",
  replyFoot: 'Warehouse sorting — solved the system, not the screen.',
}

/* ── 01 · Case studies ── */
export const caseStudies = [
  {
    id: 'swiftsort',
    index: '01',
    meta: 'Posten Bring · 2026',
    metaLong: '01 · Posten Bring · Oslo · 2026 · SwiftSort',
    href: '/case-studies/swiftsort', // full case study page
    brief: 'Make the button bigger.',
    card: "Sorting sped up ~40% — decisions moved from workers' memory to the moment of scan.",
    cover: '/case-studies/swiftsort/images/cover.jpg',
    insight: "Delete touch — the scanner's already on their hand.",
    problem: 'Sorting decisions lived in workers’ heads, so every new hire needed weeks to get up to speed.',
    solution: 'Replaced memory with real-time, system-guided sorting — zero touch, no new hardware.',
    body:
      "Sorting lived in the veterans' memory and a mounted tablet died in trials — hands full, gloves on. I printed a static QR at every drop-off and let the ProGlove workers already wore do the reading. Zero new hardware, zero training.",
    stats: [
      { value: '~40%', label: 'Faster sort · pilot' },
      { value: 'wks→days', label: 'Onboarding' },
    ],
    mailto: `mailto:${CONTACT_EMAIL}?subject=SwiftSort`,
    seed: { x: 0.04, y: 0.05, r: -2.5 },
  },
  {
    id: 'cards',
    index: '02',
    meta: 'ABN AMRO · 2024',
    metaLong: '02 · ABN AMRO · Neuflize OBC · 2024',
    brief: 'Wall off the whole flow.',
    card: 'A 2-hour banking task cut to 60 seconds of self-service.',
    cover: null, // neutral placeholder until a real cover image is dropped in
    insight: 'Gate only the destructive action.',
    problem: 'Clients waited two hours on the phone just to block a lost card, and compliance wanted a login on everything.',
    solution: 'Added authentication only where the real risk was — browsing stays free, blocking takes seconds.',
    body:
      'Private-bank clients waited two hours on the phone just to block a card, and compliance wanted authentication over everything. I authenticated at the point of commitment instead — browsing stays free, and risk signed off in a single round.',
    stats: [
      { value: '2h→60s', label: 'Resolution time' },
      { value: '~90%', label: 'Calls deflected' },
    ],
    mailto: `mailto:${CONTACT_EMAIL}?subject=Self-service%20cards`,
    seed: { x: 0.96, y: 0.33, r: 2 },
  },
  {
    id: 'postoffice',
    index: '03',
    meta: 'Posten Bring · 2025',
    metaLong: '03 · Posten Bring · Oslo · 2025',
    brief: 'Rebuild it screen by screen.',
    card: 'Onboarding 65% faster — a legacy terminal re-architected as a cloud portal.',
    cover: null, // neutral placeholder until a real cover image is dropped in
    insight: 'Map the system first, then design the shared frame.',
    problem: 'A legacy desktop terminal chained managers to one location and took weeks to learn.',
    solution: 'Mapped the system first, then built one shared portal — now reused across the whole Nordic suite.',
    body:
      'A desk-bound legacy terminal chained managers to one location. Before drawing screens I mapped the dependencies between driver tools and regional management — and the portal became the foundation for the whole Nordic ProdApp suite.',
    stats: [
      { value: '65%', label: 'Faster onboarding' },
      { value: '1 system', label: 'Reused across suite' },
    ],
    mailto: `mailto:${CONTACT_EMAIL}?subject=Post-office%20portal`,
    seed: { x: 0.02, y: 0.61, r: 1.6 },
  },
  {
    id: 'postbox',
    index: '04',
    meta: 'ABN AMRO · multi',
    metaLong: '04 · ABN AMRO · iOS · Android · Web',
    brief: 'Sort by document type.',
    card: 'A complex document archive made self-service — across all three platforms.',
    cover: null, // neutral placeholder until a real cover image is dropped in
    insight: "Organise by life event — the client's mental model.",
    problem: 'Clients needed their banker to find every document, because files were sorted the bank’s way, not theirs.',
    solution: 'Reorganised around life events — the way clients actually think — so they self-serve.',
    body:
      'High-net-worth clients leaned on their banker for every document. I built retrieval around life events rather than the compliance taxonomy — which stays underneath, invisible, doing its job.',
    stats: [
      { value: '3 platforms', label: 'iOS · Android · Web' },
      { value: 'Self-serve', label: 'Was banker-led' },
    ],
    mailto: `mailto:${CONTACT_EMAIL}?subject=Postbox`,
    seed: { x: 0.98, y: 0.89, r: -1.6 },
  },
]

/* ── 02 · Practice — seed→sprout story cards (scroll-driven) ── */
export const practiceStory = [
  {
    id: 'alignment',
    num: '01 · THE SEED',
    title: 'Alignment',
    callout: {
      label: '◎ Find the overlap',
      text: 'The business wants a metric to move; users want a task to disappear. I use research and data to find the one change that does both — not a compromise between them.',
    },
    human: ['User research', 'Read the data', 'Find the real need'],
    ai: ['Cluster the notes', 'Surface patterns'],
    desc: 'A hand drops the signal. I read the soil — business goals, user pain, the data underneath — and plant.',
  },
  {
    id: 'foundation',
    num: '02 · THE ROOTS',
    title: 'Foundation',
    callout: {
      label: '↺ Find the real problem',
      text: "Sometimes a brief already comes with a solution attached. I hand it back and ask what problem we're really solving.",
    },
    human: ['Problem statement', 'In / out of scope', 'Feasibility check'],
    ai: ['Edge-case list', 'Flag tech limits'],
    desc: 'Roots anchor down, a first stem breaks ground. The invisible structure that holds everything up.',
  },
  {
    id: 'explore',
    num: '03 · THE SPROUT',
    title: 'Explore',
    callout: {
      label: '⚑ Try many, keep one',
      text: "I sketch several rough directions before I commit to one — then prototype it and put it in front of real users, while it's still cheap to be wrong.",
    },
    human: ['Explore directions', 'Prototype', 'Usability testing'],
    ai: ['Mockup variants', 'First-draft copy'],
    desc: 'First shoots test the air in every direction. The strongest one keeps growing.',
  },
  {
    id: 'scale',
    num: '04 · THE CANOPY',
    title: 'Scale',
    callout: {
      label: '⧉ Build it once',
      text: 'I turn each decision into a design system, so the team can build the rest without me in the room.',
    },
    human: ['Craft & visual', 'Design system', 'Component review'],
    ai: ['Token propagation', 'Doc automation'],
    desc: 'Branches spread and repeat the same pattern. The system carries it across every limb.',
  },
  {
    id: 'loop',
    num: '05 · THE HARVEST',
    title: 'Loop',
    callout: {
      label: '⟳ Learn from real use',
      text: "Once it's live, I stop guessing and measure. If the numbers didn't move, I say so — and that honesty writes the next brief.",
    },
    human: ['Track metrics', 'Watch real sessions', 'Feed the next brief'],
    ai: ['Error & QA sweep', 'Analytics → insight'],
    desc: 'Fruit ripens and falls, dissolving back into soil — feeding the next brief.',
  },
]

/* ── 03 · Instruments ── */
export const instruments = [
  {
    id: 'tokenmap',
    logo: '/logos/tokenmap.svg',
    alt: 'Token Map',
    logoStyle: { height: 20, width: 126 },
    problem: 'Token migrations were manual, slow and error-prone across files.',
    result: 'Migrations that took a day now run in minutes.',
    href: 'https://www.figma.com/community/plugin/1614997660400970378/token-map',
  },
  {
    id: 'intent',
    logo: '/logos/intent.svg',
    alt: 'Intent',
    logoStyle: { height: 26, width: 82 },
    problem: 'Detached components quietly broke consistency across the system.',
    result: 'Detached instances detected and healed automatically.',
    href: 'https://www.figma.com/community/plugin/1610840315625561207/intent',
  },
  {
    id: 'focal',
    logo: '/logos/focalai.svg',
    alt: 'Focal AI',
    logoStyle: { height: 18, width: 99 },
    problem: 'Attention and visual hierarchy were argued, not measured.',
    result: 'Predicts where the eye lands in ~1 second.',
    href: 'https://www.figma.com/community/plugin/1651583678533726308/focal-ai',
  },
]

/* ── About ── */
export const about = {
  quoteLead: '"Good enough isn\'t the bar. If the design doesn\'t ',
  quoteAccent: 'beat the alternative',
  quoteTail: ', it isn\'t finished."',
  paragraphs: [
    'Thirteen years embedded inside regulated enterprises across India, the Netherlands and Norway. The ambiguous, unscoped brief tends to land on my desk — I turn it into a system the team can build on, keeping engineers and stakeholders in one conversation so what ships is what everyone agreed to.',
    'Off the clock I paint watercolours — no undo, so you commit. Same instinct I bring to a room full of stakeholders.',
  ],
  portrait: '/assets/portrait.jpg',
  facts: [
    { label: 'Status', value: 'EU citizen (NL)', accent: 'teal' },
    { label: 'Open to', value: 'Senior · Lead' },
    { label: 'Off-hours', value: 'Badminton · biryani' },
  ],
  resume: 'assets/Yogesh-Shetty-Resume.pdf',
  careerLine: "HCLTech '12 → TCS '15 → Qualcomm · J&J · JPMorgan · ABN AMRO → ",
  careerHighlight: "Posten Bring '25",
}

/* ── Testimonials ── */
export const testimonials = [
  {
    id: 't1',
    quote:
      'Worked on a variety of topics and always delivered great designs. A pleasure to work with — always seeking the best solution.',
    initials: 'JH',
    name: 'Jennie Huijboom',
    title: 'Head of Bankwide UX · ABN AMRO',
    rot: -2.4,
  },
  {
    id: 't2',
    quote:
      "I've always been able to trust him with new topics, knowing he'll fully commit and deliver high-quality designs.",
    initials: 'FD',
    name: 'Femke van Drooge',
    title: 'Lead Design Strategy · ABN AMRO',
    rot: 1.9,
  },
  {
    id: 't3',
    quote:
      'His guidance was invaluable — balancing technical and design aspects while collaborating with stakeholders.',
    initials: 'RV',
    name: 'Rutger Vos',
    title: 'Product Owner · Private Banking',
    rot: -1.3,
  },
  {
    id: 't4',
    quote: 'An exceptional mentor. Approachability and investing time in others sets him apart.',
    initials: 'NK',
    name: 'Nikita Jaiswal',
    title: 'UX/UI Designer',
    rot: 2.6,
  },
  {
    id: 't5',
    quote:
      "One of the most talented and dependable designers I've collaborated with — calm, responsible, solution-focused.",
    initials: 'DT',
    name: 'Douglas Tarasconi',
    title: 'UX Designer · ABN AMRO',
    rot: -2,
  },
  {
    id: 't6',
    quote:
      'Takes complex problems and distills them into simple, elegant design solutions — an incredible eye for detail.',
    initials: 'NC',
    name: 'Niovi D. Chatzipoufli',
    title: 'Senior UX / Product Designer',
    rot: 1.4,
  },
]

export const recommendationsUrl = 'https://linkedin.com/in/ykshetty/details/recommendations/'

/* ── Footer / contact ── */
export const contact = {
  heading: 'Got something to figure out?',
  headingAccent: "Let's find it.",
  links: [
    { label: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}`, variant: 'primary' },
    { label: 'LinkedIn ↗', href: 'https://www.linkedin.com/in/ykshetty/', external: true },
    { label: 'Medium ↗', href: 'https://medium.com/@ykshetty', external: true },
    { label: 'Dribbble ↗', href: 'https://dribbble.com/yogik4all', external: true },
    { label: 'Résumé ↓', href: 'uploads/assets-1782636208625.pdf', download: true },
  ],
  copyright: '© 2026 · Yogesh Shetty · v48',
}
