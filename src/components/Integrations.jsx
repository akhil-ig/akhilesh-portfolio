import SectionHead from './SectionHead'
import { INTEGRATIONS, INTEGRATION_TARGETS } from '../data'

export default function Integrations() {
  return (
    <section id="integrations" className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
      <SectionHead
        index="04"
        label="Integration Lab"
        title={<>The <span className="text-gradient">API whisperer</span> section.</>}
        right="Accounting, ERP, POS and CRM platforms — wired into Shopify, WordPress and custom Laravel apps."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {INTEGRATIONS.map((it, i) => (
          <div key={it.name} className="glass-card p-7" data-reveal data-delay={i * 0.08}>
            <div className="flex items-center justify-between">
              <span
                className={`font-mono text-[0.65rem] tracking-widest uppercase ${
                  it.level === 'Expert'
                    ? 'badge-pill !py-1 !px-2.5 font-semibold text-accent-2'
                    : 'text-faint'
                }`}
              >
                {it.level === 'Expert' && <span className="pulse-dot text-accent-2" />}
                {it.level}
              </span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent" aria-hidden="true">
                <path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7" />
                <path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7" />
              </svg>
            </div>
            <h3 className="mt-5 font-display text-2xl font-semibold text-fog">{it.name}</h3>
            <p className="mt-3 text-sm leading-relaxed text-dim">{it.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-3" data-reveal>
        <span className="label-mono">Connected with</span>
        <span className="inline-block h-px w-8 bg-accent/50" aria-hidden="true" />
        {INTEGRATION_TARGETS.map((t) => (
          <span key={t} className="badge-pill font-mono text-xs tracking-wider text-fog uppercase">
            {t}
          </span>
        ))}
      </div>
    </section>
  )
}
