import { useEffect, useState } from 'react'
import { NAV_LINKS, EMAIL } from '../data'

export function scrollToHash(e, href) {
  e.preventDefault()
  const el = document.querySelector(href)
  if (!el) return
  if (window.__lenis) window.__lenis.scrollTo(el, { offset: -72, duration: 1.4 })
  else el.scrollIntoView({ behavior: 'smooth' })
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 lg:px-8">
      <nav
        className={`glass-card nav-glass mx-auto flex max-w-6xl items-center justify-between !rounded-full px-5 py-3 transition-shadow duration-300 ${
          scrolled ? 'shadow-[0_10px_40px_-20px_rgba(143,123,255,0.5)]' : ''
        }`}
      >
        <a
          href="#top"
          onClick={(e) => scrollToHash(e, '#top')}
          className="font-mono text-sm font-semibold tracking-widest text-fog"
          aria-label="Back to top"
        >
          AC<span className="text-gradient">._</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={(e) => scrollToHash(e, l.href)} className="nav-link">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href={`mailto:${EMAIL}`} className="btn-accent hidden !px-5 !py-2.5 md:inline-flex">
          Hire Me
        </a>

        {/* mobile toggle */}
        <button
          className="flex h-10 w-10 cursor-pointer flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className={`h-px w-6 bg-fog transition-transform ${open ? 'translate-y-[3.5px] rotate-45' : ''}`} />
          <span className={`h-px w-6 bg-fog transition-transform ${open ? '-translate-y-[3.5px] -rotate-45' : ''}`} />
        </button>
      </nav>

      {open && (
        <div className="glass-card nav-glass mx-auto mt-2 max-w-6xl !rounded-3xl md:hidden">
          <ul className="flex flex-col gap-5 px-6 py-6">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="nav-link text-base"
                  onClick={(e) => {
                    scrollToHash(e, l.href)
                    setOpen(false)
                  }}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${EMAIL}`} className="btn-accent !px-5 !py-2.5">Hire Me</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
