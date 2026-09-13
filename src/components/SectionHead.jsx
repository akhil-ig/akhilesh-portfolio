export default function SectionHead({ index, label, title, right }) {
  return (
    <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between" data-reveal>
      <div>
        <p className="label-mono mb-4 flex items-center gap-3">
          <span className="text-accent">{index}</span>
          <span className="inline-block h-px w-10 bg-accent/50" aria-hidden="true" />
          {label}
        </p>
        <h2 className="headline text-4xl text-fog md:text-6xl">{title}</h2>
      </div>
      {right && <p className="max-w-sm text-sm leading-relaxed text-dim">{right}</p>}
    </div>
  )
}
