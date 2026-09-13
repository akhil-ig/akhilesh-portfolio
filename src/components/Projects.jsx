import SectionHead from './SectionHead'
import { PROJECTS, SYSTEMS, FEATURED } from '../data'

const PENDING =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="640" height="400"><rect width="640" height="400" fill="#12121f"/><text x="320" y="196" fill="#5d5b75" font-family="monospace" font-size="15" letter-spacing="4" text-anchor="middle">SCREENSHOT</text><text x="320" y="222" fill="#5d5b75" font-family="monospace" font-size="15" letter-spacing="4" text-anchor="middle">COMING SOON</text></svg>`
  )

function Shot(props) {
  return <img {...props} onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = PENDING }} />
}

function Featured() {
  return (
    <div className="glass-card mb-10 overflow-hidden" data-reveal>
      <div className="grid gap-0 lg:grid-cols-[1fr_1.5fr]">
        <div className="flex flex-col justify-between p-8 lg:p-10">
          <div>
            <span className="badge-pill font-mono text-[0.65rem] font-semibold tracking-widest text-accent-2 uppercase">
              <span className="pulse-dot text-accent-2" />
              Featured Build
            </span>
            <h3 className="mt-6 font-display text-2xl font-semibold text-fog lg:text-3xl">
              {FEATURED.name}
            </h3>
            <p className="mt-2 font-mono text-xs tracking-wider text-accent uppercase">{FEATURED.tagline}</p>
            <p className="mt-5 text-sm leading-relaxed text-dim">{FEATURED.desc}</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {FEATURED.tags.map((t) => (
              <span key={t} className="border border-line px-2.5 py-1 font-mono text-[0.68rem] tracking-wider text-dim uppercase">
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="border-t border-line bg-panel-2 p-4 lg:border-t-0 lg:border-l">
          <Shot
            src={FEATURED.admin}
            alt="SSPOC admin dashboard — attendance system"
            loading="lazy"
            className="w-full border border-line object-cover"
          />
          <div className="mt-4 grid grid-cols-3 gap-4">
            {FEATURED.mobiles.map((m) => (
              <div key={m.src} className="phone-frame">
                <Shot src={m.src} alt={m.alt} loading="lazy" className="aspect-[9/16] w-full object-cover object-top" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ p, i }) {
  return (
    <a
      href={p.url}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card group block"
      data-reveal
      data-delay={(i % 2) * 0.1}
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-panel-2">
        <img
          src={p.shot}
          alt={`Screenshot of ${p.name}`}
          loading="lazy"
          className="shot h-full w-full object-cover object-top"
        />
        <span className="visit absolute right-4 bottom-4 inline-flex items-center gap-2 bg-gradient-to-r from-accent to-accent-2 px-3 py-1.5 font-mono text-[0.7rem] font-semibold tracking-widest text-ink uppercase">
          Visit
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" aria-hidden="true">
            <path d="M7 17L17 7M17 7H8M17 7v9" />
          </svg>
        </span>
      </div>
      <div className="p-7">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-display text-xl font-semibold text-fog transition-colors group-hover:text-accent">
            {p.name}
          </h3>
          <span className="label-mono shrink-0">{p.domain}</span>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-dim">{p.desc}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <span key={t} className="border border-line px-2.5 py-1 font-mono text-[0.68rem] tracking-wider text-dim uppercase">
              {t}
            </span>
          ))}
        </div>
      </div>
    </a>
  )
}

export default function Projects() {
  return (
    <section id="work" className="relative mx-auto max-w-7xl px-6 py-28 lg:px-10">
      <SectionHead
        index="02"
        label="Selected Work"
        title="Shipped & live."
        right="Public projects you can click through right now — plus the private systems running behind closed doors."
      />

      <Featured />

      <div className="grid gap-8 md:grid-cols-2">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.name} p={p} i={i} />
        ))}
      </div>

      <div className="mt-16" data-reveal>
        <p className="label-mono mb-6">Private / In-house systems</p>
        <div className="grid gap-4 md:grid-cols-3">
          {SYSTEMS.map((s) => (
            <div key={s.name} className="glass-card p-7">
              <div className="flex items-center gap-3">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent" aria-hidden="true">
                  <rect x="4" y="10" width="16" height="10" rx="1.5" />
                  <path d="M8 10V7a4 4 0 0 1 8 0v3" />
                </svg>
                <h3 className="font-display text-base font-semibold text-fog">{s.name}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-dim">{s.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
