// Files in public/ aren't rewritten by Vite, so they need the base prefix
// themselves — without it they 404 when the site is served from a subpath.
const asset = (path) => import.meta.env.BASE_URL + path

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Domains', href: '#domains' },
  { label: 'Integrations', href: '#integrations' },
  { label: 'Contact', href: '#contact' },
]

export const STATS = [
  { value: 6, suffix: '+', label: 'Years · PHP & Laravel' },
  { value: 2, suffix: '+', label: 'Years · SaaS Platforms' },
  { value: 8, suffix: '+', label: 'Industry Domains' },
  { value: 6, suffix: '+', label: 'Platform Integrations' },
]

export const TECH = [
  'PHP', 'Laravel', 'Livewire', 'Vue.js', 'Tailwind CSS', 'Bootstrap',
  'HTML / CSS', 'WebRTC', 'MySQL', 'REST APIs', 'Git & GitLab',
  'Shopify', 'WordPress', 'Claude / GPT / Gemini',
]

export const PROJECTS = [
  {
    name: 'CloudLink Systems',
    url: 'https://cloudlinksys.in/',
    domain: 'cloudlinksys.in',
    shot: asset('shots/cloudlinksys.webp'),
    desc: 'Corporate platform for an IT & cloud solutions company — designed, built and shipped end-to-end.',
    tags: ['Full-Stack', 'PHP', 'Responsive'],
  },
  {
    name: 'SS Physiotherapy & Ortho Care',
    url: 'https://ssphysiotherapyandorthocare.in/',
    domain: 'ssphysiotherapyandorthocare.in',
    shot: asset('shots/ssphysio.webp'),
    desc: 'Clinic website plus a complete private admin panel — appointments, patients and clinic operations in one dashboard.',
    tags: ['Laravel', 'Admin Panel', 'Healthcare'],
  },
  {
    name: 'VSS Logistic',
    url: 'https://vsslogistic.co.in/',
    domain: 'vsslogistic.co.in',
    shot: asset('shots/vsslogistic.webp'),
    desc: 'Fast-loading static corporate site for a logistics company — clean sections, service pages, enquiry flow.',
    tags: ['Static', 'Bootstrap', 'Logistics'],
  },
  {
    name: 'SquareEdge Consulting',
    url: 'https://squareedgeconsulting.com/',
    domain: 'squareedgeconsulting.com',
    shot: asset('shots/squareedge.webp'),
    desc: 'Static website for a global recruitment consulting firm — crisp identity, conversion-focused layout.',
    tags: ['Static', 'HTML / CSS', 'Recruitment'],
  },
]

export const FEATURED = {
  name: 'SSPOC Attendance & Payroll',
  tagline: 'One system. Admin panel + employee mobile app.',
  desc: 'A full HR engine built from scratch — QR-code attendance, shift rules, leave workflows, salary structures and payroll. Admins run everything from a command-center dashboard; employees scan in, apply for leave and track their history from their phone.',
  hero: { src: asset('shots/sspoc-laptop.webp'), alt: 'SSPOC admin dashboard shown on a laptop' },
  features: [
    { icon: 'qr', label: 'QR Check-in', note: 'Scan & mark in seconds' },
    { icon: 'clock', label: 'Shift Rules', note: 'Rosters, late & overtime logic' },
    { icon: 'calendar', label: 'Leave Workflows', note: 'Apply, approve, track balance' },
    { icon: 'wallet', label: 'Payroll Engine', note: 'Salary structures to payslips' },
  ],
  app: {
    src: asset('shots/sspoc-app-banner.webp'),
    alt: 'SSPOC Attendance employee app — mark attendance, history calendar and leave screens',
    caption: 'Employee Mobile App',
  },
  screens: [
    { src: asset('shots/sspoc-admin-dash.webp'), alt: 'Admin dashboard — attendance overview', caption: 'Admin — Dashboard' },
    { src: asset('shots/sspoc-admin-employees.webp'), alt: 'Admin panel — employee directory', caption: 'Admin — Employees' },
  ],
  tags: ['QR Attendance', 'Leave Management', 'Payroll', 'Shift Rules', 'Mobile App', 'Laravel'],
}

export const SYSTEMS = [
  { name: 'Hospital Management Software', note: 'OPD, patients, billing — built from scratch' },
  { name: 'SaaS Integration Platform', note: '2+ years building multi-tenant SaaS integrations' },
  { name: 'MYOB ↔ Shopify Middleware', note: 'Orders, inventory and accounting kept in lockstep' },
]

export const DOMAINS = [
  { name: 'Fintech', note: 'Payments, ledgers, reconciliation' },
  { name: 'Portfolio Management Systems', note: 'Investments, holdings, reporting' },
  { name: 'E-commerce', note: 'Storefronts, carts, order pipelines' },
  { name: 'ERP Systems', note: 'Operations, finance, workflows' },
  { name: 'POS Systems', note: 'Retail billing & terminals' },
  { name: 'Inventory Management', note: 'Stock, warehouses, movement' },
  { name: 'Healthcare / HMS', note: 'Hospital & clinic software' },
  { name: 'HR — Attendance & Payroll', note: 'Attendance engines with payroll' },
]

export const INTEGRATIONS = [
  { name: 'MYOB Advanced', level: 'Expert', desc: 'Full API setup & integration — my deepest specialisation' },
  { name: 'Lightspeed', level: 'Proficient', desc: 'Retail POS data synced with commerce platforms' },
  { name: 'NetSuite', level: 'Proficient', desc: 'ERP records flowing both ways, reliably' },
  { name: 'HubSpot', level: 'Proficient', desc: 'CRM pipelines wired into web platforms' },
]

export const INTEGRATION_TARGETS = ['Shopify', 'WordPress', 'Custom Laravel Apps']

export const EMAIL = 'akhileshdevloper@gmail.com'
export const PHONE = '+91 95791 72752'
export const PHONE_LINK = 'tel:+919579172752'
export const LINKEDIN = 'https://www.linkedin.com/in/akhilesh-chauhan-895b8a249/'
