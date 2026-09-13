import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { STATS, EMAIL } from '../data'
import { scrollToHash } from './Nav'

const NAME_LINES = ['AKHILESH', 'CHAUHAN']

export default function Hero() {
  const root = useRef(null)

  useLayoutEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = gsap.context(() => {
      if (reduced) {
        gsap.set('.h-anim, .h-letter', { opacity: 1, y: 0 })
        return
      }
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })
      tl.fromTo('.h-status', { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.7 }, 0.15)
        .fromTo(
          '.h-letter',
          { yPercent: 110, opacity: 1 },
          { yPercent: 0, duration: 1.1, stagger: 0.045 },
          0.3
        )
        .fromTo('.h-role', { opacity: 0, y: 22 }, { opacity: 1, y: 0, duration: 0.9 }, '-=0.55')
        .fromTo('.h-cta', { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 }, '-=0.5')
        .fromTo('.h-stat', { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.09 }, '-=0.45')
        .fromTo('.h-scroll', { opacity: 0 }, { opacity: 1, duration: 0.8 }, '-=0.2')

      // stat count-up
      document.querySelectorAll('.h-num').forEach((el) => {
        const target = Number(el.dataset.value)
        const obj = { n: 0 }
        gsap.to(obj, {
          n: target,
          duration: 1.6,
          delay: 1.2,
          ease: 'power2.out',
          onUpdate: () => { el.textContent = Math.round(obj.n) },
        })
      })

      gsap.to('.h-orb', {
        x: 60, y: -40, duration: 9, yoyo: true, repeat: -1, ease: 'sine.inOut',
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section id="top" ref={root} className="relative flex min-h-screen flex-col justify-center overflow-hidden">
      <div className="bg-grid absolute inset-0" aria-hidden="true" />
      <div className="h-orb glow-orb top-[-10%] right-[-5%] h-[480px] w-[480px] bg-accent/14" aria-hidden="true" />
      <div className="glow-orb bottom-[-20%] left-[-10%] h-[420px] w-[420px] bg-[#2b4a6f]/25" aria-hidden="true" />

      {/* twinkling star dots */}
      <span className="star-dot top-[18%] left-[8%] h-1.5 w-1.5 text-accent" style={{ animationDelay: '0s' }} aria-hidden="true" />
      <span className="star-dot top-[32%] left-[42%] h-1 w-1 text-accent-2" style={{ animationDelay: '0.6s' }} aria-hidden="true" />
      <span className="star-dot top-[12%] left-[65%] h-1 w-1 text-accent-pink" style={{ animationDelay: '1.2s' }} aria-hidden="true" />
      <span className="star-dot top-[58%] left-[22%] h-1.5 w-1.5 text-accent-2" style={{ animationDelay: '1.8s' }} aria-hidden="true" />
      <span className="star-dot top-[74%] left-[52%] h-1 w-1 text-accent" style={{ animationDelay: '2.4s' }} aria-hidden="true" />
      <span className="star-dot top-[44%] left-[88%] h-1.5 w-1.5 text-accent-pink" style={{ animationDelay: '3s' }} aria-hidden="true" />

      {/* floating glass info cards — desktop only */}
      <div className="pointer-events-none absolute top-40 right-8 z-10 hidden w-64 rotate-2 xl:block" data-reveal data-delay="1.4">
        <div className="glass-card p-5">
          <div className="flex items-center justify-between">
            <span className="label-mono text-accent-2">MYOB Advanced</span>
            <span className="ring-orbit h-8 w-8" style={{ '--ring-color': 'var(--color-accent-2)' }}>
              <span className="ring-core h-4 w-4" />
            </span>
          </div>
          <p className="mt-3 text-xs leading-relaxed text-dim">My deepest integration specialty — full API setup, both ways.</p>
          <div className="waveform mt-4" style={{ '--wave-color': 'var(--color-accent-2)' }}>
            <span /><span /><span /><span /><span /><span />
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute top-88 right-24 z-10 hidden w-56 -rotate-3 xl:block" data-reveal data-delay="1.6">
        <div className="glass-card p-5">
          <div className="flex items-center justify-between">
            <span className="label-mono text-accent-pink">SaaS Platforms</span>
            <span className="ring-orbit h-8 w-8" style={{ '--ring-color': 'var(--color-accent-pink)' }}>
              <span className="ring-core h-4 w-4" />
            </span>
          </div>
          <p className="mt-3 text-xs leading-relaxed text-dim">2+ years shipping billing, tenants & roles at scale.</p>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 pt-32 pb-16 lg:px-10">
        <p className="h-status badge-pill mb-8 opacity-0">
          <span className="pulse-dot text-accent" />
          <span className="label-mono !text-inherit">Available for projects — India · Remote</span>
        </p>

        <h1 className="headline text-[clamp(2.3rem,8.2vw,7.2rem)] text-fog" aria-label="Akhilesh Chauhan">
          {NAME_LINES.map((line, li) => (
            <span key={line} className="block overflow-hidden pb-1" aria-hidden="true">
              {line.split('').map((ch, i) => (
                <span
                  key={i}
                  className={`h-letter inline-block will-change-transform ${li === 1 ? 'outline-text' : ''}`}
                >
                  {ch}
                </span>
              ))}
            </span>
          ))}
        </h1>

        <div className="mt-8 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <p className="h-role max-w-xl text-lg leading-relaxed text-dim opacity-0 md:text-xl">
            Full-Stack Developer with a <span className="text-fog">backend-first</span> mindset —
            <span className="text-gradient font-semibold"> Laravel · PHP · SaaS</span>. I connect the platforms your
            business runs on: MYOB, NetSuite, Lightspeed, HubSpot, Shopify &amp; more.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#work" onClick={(e) => scrollToHash(e, '#work')} className="h-cta btn-accent btn-glow opacity-0">
              View Work
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                <path d="M7 17L17 7M17 7H8M17 7v9" />
              </svg>
            </a>
            <a href={`mailto:${EMAIL}`} className="h-cta btn-ghost opacity-0">Get in Touch</a>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-4 md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="h-stat glass-card px-6 py-7 opacity-0">
              <div className="headline text-4xl text-accent md:text-5xl">
                <span className="h-num" data-value={s.value}>0</span>
                {s.suffix}
              </div>
              <div className="label-mono mt-3">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="h-scroll absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0" aria-hidden="true">
        <div className="flex flex-col items-center gap-2">
          <span className="label-mono">Scroll</span>
          <span className="block h-8 w-px animate-pulse bg-accent/60" />
        </div>
      </div>
    </section>
  )
}
