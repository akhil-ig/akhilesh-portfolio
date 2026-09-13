import SectionHead from './SectionHead'

const POINTS = [
  {
    title: 'Backend-first engineering',
    desc: '6+ years of Laravel & PHP. Queues, multi-tenancy, clean data models — the invisible parts done right.',
  },
  {
    title: 'API integration specialist',
    desc: 'My sharpest skill. If a platform has an API, I make it talk to yours — auth, webhooks, sync, retries, all of it.',
  },
  {
    title: 'SaaS product experience',
    desc: '2+ years building and scaling SaaS platforms — billing, tenants, roles, and the operations behind them.',
  },
  {
    title: 'AI-augmented workflow',
    desc: 'I ship faster with Claude, ChatGPT, Codex and Gemini in the loop — used deliberately, reviewed by hand.',
  },
]

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-6 py-28 lg:px-10">
      <SectionHead index="01" label="About" title={<>Systems that <span className="text-accent">talk</span> to each other.</>} />

      <div className="grid gap-16 lg:grid-cols-[1.1fr_1fr]">
        <div data-reveal>
          <p className="text-xl leading-relaxed text-dim md:text-2xl">
            Most developers build websites. <span className="text-fog">I build the plumbing behind
            businesses</span> — ERPs syncing with storefronts, POS terminals feeding accounting
            software, clinics running on dashboards I wrote from scratch.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-dim">
            From fintech ledgers to hospital software, my work lives where reliability matters more
            than trends. Frontend when it's needed — Vue, Livewire, Tailwind — backend always.
          </p>
          <div className="mt-10 border-l-2 border-accent pl-6">
            <p className="font-mono text-sm leading-relaxed text-fog">
              "If a platform has an API,<br />I can integrate it."
            </p>
          </div>
        </div>

        <div className="grid gap-px border border-line bg-line sm:grid-cols-2">
          {POINTS.map((p, i) => (
            <div key={p.title} className="bg-panel p-7" data-reveal data-delay={i * 0.08}>
              <span className="label-mono text-accent">0{i + 1}</span>
              <h3 className="mt-4 font-display text-lg font-semibold text-fog">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-dim">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
