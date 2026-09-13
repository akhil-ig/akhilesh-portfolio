import SectionHead from './SectionHead'
import { DOMAINS } from '../data'

export default function Domains() {
  return (
    <section id="domains" className="border-y border-line bg-panel">
      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
        <SectionHead
          index="03"
          label="Domain Experience"
          title="Eight industries. One developer."
          right="Every domain taught me a different failure mode — and how to build software that survives it."
        />

        <div>
          {DOMAINS.map((d, i) => (
            <div
              key={d.name}
              className="domain-row flex items-baseline justify-between gap-6 py-6"
              data-reveal
              data-delay={i * 0.04}
            >
              <div className="flex items-baseline gap-6">
                <span className="label-mono text-accent">{String(i + 1).padStart(2, '0')}</span>
                <span className="domain-name font-display text-xl font-medium text-fog md:text-3xl">
                  {d.name}
                </span>
              </div>
              <span className="hidden text-sm text-faint sm:block">{d.note}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
