import { EMAIL } from '../data'

export default function Contact() {
  const year = new Date().getFullYear()
  return (
    <section id="contact" className="relative overflow-hidden border-t border-line">
      <div className="glow-orb top-[20%] left-1/2 h-[420px] w-[560px] -translate-x-1/2 bg-accent/10" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6 py-32 text-center lg:px-10">
        <p className="label-mono mb-8" data-reveal>05 — Contact</p>
        <h2 className="headline text-[clamp(2.6rem,8vw,7rem)] text-fog" data-reveal>
          Have an idea?
          <br />
          <span className="text-accent">Let's wire it up.</span>
        </h2>
        <p className="mx-auto mt-8 max-w-lg text-lg text-dim" data-reveal>
          Whether it's a full product build or making two stubborn platforms finally talk to each
          other — one email starts it.
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-4" data-reveal>
          <a href={`mailto:${EMAIL}`} className="btn-accent !px-9 !py-4 !text-sm">
            {EMAIL}
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
