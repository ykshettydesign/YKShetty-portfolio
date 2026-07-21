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
  logo: './assets/yogilogo.svg',
  tagline:
    'Senior Product Designer. I look past the brief to find the real problem — then design the system that solves it.',
}

export const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Practice', href: '#practice' },
  { label: 'Instruments', href: '#instruments' },
  { label: 'About', href: '#about' },
]

export const hero = {
  brief: 'Make the button bigger',
  shift: "Let's make it work without a tap!",
}

/* ── 01 · Case studies ── */
export const caseStudies = [
  {
    id: 'swiftsort',
    index: '01',
    meta: 'Posten Bring · 2026',
    metaLong: '01 · Posten Bring · Oslo · 2026 · SwiftSort',
    brief: 'Make the button bigger.',
    insight: "Delete touch — the scanner's already on their hand.",
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
    insight: 'Gate only the destructive action.',
    body:
      'Private-bank clients waited two hours on the phone just to block a card, and compliance wanted authentication over everything. I authenticated at the point of commitment instead — browsing stays free, and risk signed off in a single round.',
    stats: [
      { value: '2h→60s', label: 'Resolution time' },
      { value: '~90%', label: 'Calls deflected' },
    ],
    mailto: `mailto:${CONTACT_EMAIL}?subject=Self-service%20cards`,
    seed: { x: 0.96, y: 0.32, r: 2 },
  },
  {
    id: 'postoffice',
    index: '03',
    meta: 'Posten Bring · 2025',
    metaLong: '03 · Posten Bring · Oslo · 2025',
    brief: 'Rebuild it screen by screen.',
    insight: 'Map the system first, then design the shared frame.',
    body:
      'A desk-bound legacy terminal chained managers to one location. Before drawing screens I mapped the dependencies between driver tools and regional management — and the portal became the foundation for the whole Nordic ProdApp suite.',
    stats: [
      { value: '65%', label: 'Faster onboarding' },
      { value: '1 system', label: 'Reused across suite' },
    ],
    mailto: `mailto:${CONTACT_EMAIL}?subject=Post-office%20portal`,
    seed: { x: 0.02, y: 0.62, r: 1.6 },
  },
  {
    id: 'postbox',
    index: '04',
    meta: 'ABN AMRO · multi',
    metaLong: '04 · ABN AMRO · iOS · Android · Web',
    brief: 'Sort by document type.',
    insight: "Organise by life event — the client's mental model.",
    body:
      'High-net-worth clients leaned on their banker for every document. I built retrieval around life events rather than the compliance taxonomy — which stays underneath, invisible, doing its job.',
    stats: [
      { value: '3 platforms', label: 'iOS · Android · Web' },
      { value: 'Self-serve', label: 'Was banker-led' },
    ],
    mailto: `mailto:${CONTACT_EMAIL}?subject=Postbox`,
    seed: { x: 0.98, y: 0.92, r: -1.6 },
  },
]

/* ── 02 · Practice / process ── */
export const processCards = [
  {
    id: 'discover',
    title: 'Discover',
    accentBar: false,
    rethink: null,
    human: ['Stakeholder discovery', 'Field interviews', 'Context & pain mapping', 'Goals & success criteria'],
    ai: ['Cluster interview notes', 'Surface recurring themes'],
  },
  {
    id: 'define',
    title: 'Define',
    accentBar: true,
    rethink: 'When the brief is a solution, go back for the problem.',
    human: ['Problem statement', "Must / Should / Won't", 'Feasibility alignment'],
    ai: ['Edge-case inventory', 'Constraint pre-check'],
  },
  {
    id: 'design',
    title: 'Design',
    accentBar: false,
    rethink: null,
    human: ['Ideate variants', 'Craft & visual design', 'Systematize into tokens', 'Component review'],
    ai: ['Variant exploration', 'First-draft microcopy', 'Token & doc automation'],
  },
  {
    id: 'ship',
    title: 'Ship & learn',
    accentBar: false,
    rethink: null,
    human: ['Usability testing', 'MVP scope · UI validation', 'Pilot & monitor', 'Feed the next brief'],
    ai: ['Error-state & QA sweep', 'Metrics → next brief'],
  },
]

export const processDots = ['Discover', 'Define', 'Design', 'Ship']

/* ── 03 · Instruments ── */
export const instruments = [
  {
    id: 'tokenmap',
    logo: 'uploads/tokenmap.svg',
    alt: 'Token Map',
    logoStyle: { height: 22, width: 140 },
    problem: 'Token migrations were manual, slow and error-prone across files.',
    result: 'Migrations that took a day now run in minutes.',
  },
  {
    id: 'intent',
    logo: 'uploads/intent.svg',
    alt: 'Intent',
    logoStyle: { height: 30, width: 95 },
    problem: 'Detached components quietly broke consistency across the system.',
    result: 'Detached instances detected and healed automatically.',
  },
  {
    id: 'focal',
    logo: 'uploads/logos_focal.svg',
    alt: 'Focal AI',
    logoStyle: { height: 28, width: 152 },
    problem: 'Attention and visual hierarchy were argued, not measured.',
    result: 'Predicts where the eye lands in ~1 second.',
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
  portrait: 'assets/portrait.png',
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
