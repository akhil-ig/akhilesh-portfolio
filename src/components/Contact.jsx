import { EMAIL, PHONE, PHONE_LINK, LINKEDIN } from '../data'

export default function Contact() {
  const year = new Date().getFullYear()
  return (
    <section id="contact" className="relative overflow-hidden border-t border-line">
      <div className="glow-orb top-[20%] left-1/2 h-[420px] w-[560px] -translate-x-1/2 bg-accent/10" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6 py-32 text-center lg:px-10">
        <p className="badge-pill label-mono mx-auto mb-8 w-fit" data-reveal>
          <span className="pulse-dot text-accent" />
          05 — Contact
        </p>
        <h2 className="headline text-[clamp(2.6rem,8vw,7rem)] text-fog" data-reveal>
          Have an idea?
          <br />
          <span className="text-gradient">Let's wire it up.</span>
        </h2>
        <p className="mx-auto mt-8 max-w-lg text-lg text-dim" data-reveal>
          Whether it's a full product build or making two stubborn platforms finally talk to each
          other — one email starts it.
        </p>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4" data-reveal>
          <a href={`mailto:${EMAIL}`} className="btn-accent btn-glow !px-8 !py-4 !text-sm">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m2 7 10 7 10-7" />
            </svg>
            {EMAIL}
          </a>
          <a href={PHONE_LINK} className="btn-ghost !px-8 !py-4 !text-sm">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
            </svg>
            {PHONE}
          </a>
          <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="btn-ghost !px-8 !py-4 !text-sm">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
            </svg>
            LinkedIn
          </a>
        </div>
      </div>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row lg:px-10">
          <span className="font-mono text-xs tracking-widest text-faint">
            © {year} AKHILESH CHAUHAN
          </span>
          <span className="font-mono text-xs tracking-widest text-faint">
            LARAVEL · PHP · SAAS · INTEGRATIONS
          </span>
        </div>
      </footer>
    </section>
  )
}
