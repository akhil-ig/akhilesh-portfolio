import { TECH } from '../data'

export default function Marquee() {
  const items = [...TECH, ...TECH]
  return (
    <div className="relative overflow-hidden border-y border-line bg-panel py-5" aria-label="Technologies">
      <div className="marquee-track">
        {items.map((t, i) => (
          <span key={i} className="flex shrink-0 items-center" aria-hidden={i >= TECH.length}>
            <span className="badge-pill mx-2 font-mono text-sm tracking-[0.1em] text-dim uppercase">{t}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
