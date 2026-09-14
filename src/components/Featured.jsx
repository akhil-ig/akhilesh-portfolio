import { useCallback, useEffect, useState } from 'react'
import { FEATURED } from '../data'

const ICONS = {
  qr: <path d="M4 4h6v6H4V4Zm10 0h6v6h-6V4ZM4 14h6v6H4v-6Zm10 3h3m0 0v3m0-3h3v-3m-6 0h3" />,
  clock: <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-13.5V12l3 2" />,
  calendar: <path d="M7 3v3m10-3v3M3.5 9h17M5 5.5h14A1.5 1.5 0 0 1 20.5 7v12A1.5 1.5 0 0 1 19 20.5H5A1.5 1.5 0 0 1 3.5 19V7A1.5 1.5 0 0 1 5 5.5Zm3.5 8h2m5 0h2m-9 4h2m5 0h2" />,
  wallet: <path d="M3.5 8.5A2 2 0 0 1 5.5 6.5h13a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2v-9Zm0 0V6a1.5 1.5 0 0 1 1.5-1.5h11M16.5 13h1.5" />,
}

const ACCENTS = ['var(--color-accent)', 'var(--color-accent-2)', 'var(--color-accent-pink)', 'var(--color-accent)']

function Lightbox({ shot, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={shot.alt} onClick={onClose}>
      <button className="lightbox-close" onClick={onClose} aria-label="Close preview">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M6 6l12 12M18 6 6 18" />
        </svg>
      </button>
      <figure className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
        <img src={shot.src} alt={shot.alt} />
        <figcaption className="label-mono mt-4 text-center">{shot.caption}</figcaption>
      </figure>
    </div>
  )
}

export default function Featured() {
  const [shot, setShot] = useState(null)
  const close = useCallback(() => setShot(null), [])

  return (
    <div className="relative mb-16">
      <div className="glow-orb top-0 left-1/4 h-[340px] w-[520px] bg-accent/16" aria-hidden="true" />
      <div className="glow-orb right-0 bottom-10 h-[300px] w-[420px] bg-accent-2/12" aria-hidden="true" />

      <div className="relative grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        {/* ---- copy ---- */}
        <div data-reveal>
          <span className="badge-pill font-mono text-[0.65rem] font-semibold tracking-widest text-accent-2 uppercase">
            <span className="pulse-dot text-accent-2" />
            Featured Build
          </span>

          <h3 className="headline mt-6 text-3xl text-fog lg:text-4xl">
            SSPOC <span className="text-gradient">Attendance</span> &amp; Payroll
          </h3>
          <p className="mt-3 font-mono text-xs tracking-wider text-accent uppercase">{FEATURED.tagline}</p>
          <p className="mt-5 text-[0.95rem] leading-relaxed text-dim">{FEATURED.desc}</p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {FEATURED.features.map((f, i) => (
              <div key={f.label} className="feature-chip">
                <span className="feature-icon" style={{ '--chip': ACCENTS[i % ACCENTS.length] }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {ICONS[f.icon]}
                  </svg>
                </span>
                <span>
                  <span className="block text-sm font-semibold text-fog">{f.label}</span>
                  <span className="block text-xs text-faint">{f.note}</span>
                </span>
              </div>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-2">
            {FEATURED.tags.map((t) => (
              <span key={t} className="border border-line px-2.5 py-1 font-mono text-[0.68rem] tracking-wider text-dim uppercase">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* ---- laptop hero ---- */}
        <figure className="relative" data-reveal data-delay="0.15">
          <button
            type="button"
            className="hero-shot float-slow"
            onClick={() => setShot({ ...FEATURED.hero, caption: 'Admin Dashboard' })}
            aria-label="Open larger preview of the admin dashboard"
          >
            <img src={FEATURED.hero.src} alt={FEATURED.hero.alt} loading="lazy" />
            <span className="zoom-hint">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-3.5-3.5M11 8.5v5M8.5 11h5" />
              </svg>
              Expand
            </span>
          </button>
        </figure>
      </div>

      {/* ---- employee app mockup ---- */}
      <div className="relative mt-16" data-reveal>
        <p className="label-mono mb-6 flex items-center gap-3">
          Employee mobile app
          <span className="inline-block h-px w-12 bg-accent-pink/40" aria-hidden="true" />
        </p>
        <button
          type="button"
          className="app-shot"
          onClick={() => setShot(FEATURED.app)}
          aria-label="Open larger preview of the employee mobile app"
        >
          <img src={FEATURED.app.src} alt={FEATURED.app.alt} loading="lazy" />
          <span className="zoom-hint">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
              <circle cx="11" cy="11" r="7" />
              <path d="M20 20l-3.5-3.5M11 8.5v5M8.5 11h5" />
            </svg>
            Expand
          </span>
        </button>
      </div>

      {/* ---- admin screens gallery ---- */}
      <div className="relative mt-14" data-reveal>
        <p className="label-mono mb-6 flex items-center gap-3">
          Inside the admin panel
          <span className="inline-block h-px w-12 bg-accent/40" aria-hidden="true" />
        </p>

        <div className="grid gap-5 sm:grid-cols-2">
          {FEATURED.screens.map((s, i) => (
            <button
              key={s.src}
              type="button"
              className="screen-tile"
              onClick={() => setShot(s)}
              data-reveal
              data-delay={i * 0.07}
              aria-label={`Open larger preview — ${s.caption}`}
            >
              <span className="screen-media">
                <img src={s.src} alt={s.alt} loading="lazy" />
              </span>
              <span className="label-mono mt-3 block text-left !text-[0.62rem]">{s.caption}</span>
            </button>
          ))}
        </div>
      </div>

      {shot && <Lightbox shot={shot} onClose={close} />}
    </div>
  )
}
