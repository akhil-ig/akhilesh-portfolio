import { EMAIL } from '../data'

export default function CtaBanner() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-10">
      <div className="glass-card relative flex flex-col items-center gap-6 overflow-hidden px-8 py-12 text-center sm:flex-row sm:justify-between sm:text-left" data-reveal>
        <div className="glow-orb top-1/2 left-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 bg-accent/12" aria-hidden="true" />
        <div className="relative">
          <h3 className="headline text-2xl text-fog md:text-3xl">
            Have an integration to <span className="text-gradient">wire up?</span>
          </h3>
          <p className="mt-2 text-sm text-dim">Let's talk about your platform, your APIs, and what's slowing them down.</p>
        </div>
        <a href={`mailto:${EMAIL}`} className="btn-ghost relative shrink-0 !border-accent/40">
          Talk to Me
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
            <path d="M7 17L17 7M17 7H8M17 7v9" />
          </svg>
        </a>
      </div>
    </div>
  )
}
