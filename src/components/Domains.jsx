import SectionHead from './SectionHead'
import { DOMAINS } from '../data'

const COLORS = ['var(--color-accent)', 'var(--color-accent-2)', 'var(--color-accent-pink)']

const ICONS = [
  // Fintech — coins
  <path key="fintech" d="M8 12a4 4 0 1 0 8 0 4 4 0 0 0-8 0Zm-4 0a4 4 0 0 0 4 4M20 12a4 4 0 0 1-4 4" />,
  // Portfolio Management — bar chart
  <path key="pms" d="M5 19V10M12 19V5M19 19v-7" />,
  // E-commerce — cart
  <path key="ecom" d="M4 6h2l1.6 9.6a2 2 0 0 0 2 1.4h7.7a2 2 0 0 0 2-1.6L21 9H7M9 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm8 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />,
  // ERP — gear
  <path key="erp" d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm8.4 4a8.4 8.4 0 0 1-.14 1.5l1.9 1.5-1.9 3.3-2.24-.9a8.5 8.5 0 0 1-1.3.75L16.4 21H9.6l-.32-2.35a8.5 8.5 0 0 1-1.3-.75l-2.24.9-1.9-3.3 1.9-1.5A8.4 8.4 0 0 1 5.6 12c0-.5.05-1 .14-1.5l-1.9-1.5 1.9-3.3 2.24.9c.4-.3.84-.55 1.3-.75L9.6 3h6.8l.32 2.35c.46.2.9.45 1.3.75l2.24-.9 1.9 3.3-1.9 1.5c.09.5.14 1 .14 1.5Z" />,
  // POS — terminal
  <path key="pos" d="M4 5h16v10H4V5Zm3 14h10M9 19v-4m6 4v-4" />,
  // Inventory — box
  <path key="inv" d="M21 8 12 3 3 8l9 5 9-5Zm0 0v8l-9 5-9-5V8m9 5v8" />,
  // Healthcare — pulse/heart
  <path key="health" d="M20.8 8.6a4.2 4.2 0 0 0-7.2-3 4.2 4.2 0 0 0-7.2 3c0 4.6 7.2 9.9 7.2 9.9s7.2-5.3 7.2-9.9ZM4 12h3l1.5-3L11 15l1.5-4 1.5 2h4" />,
  // HR — users
  <path key="hr" d="M17 20v-1.6a3.4 3.4 0 0 0-3.4-3.4H8.4A3.4 3.4 0 0 0 5 18.4V20M10.7 11.6a3.1 3.1 0 1 0 0-6.2 3.1 3.1 0 0 0 0 6.2ZM19 20v-1.6a3.4 3.4 0 0 0-2.5-3.28M15.3 5.5a3.1 3.1 0 0 1 0 6" />,
]

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

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {DOMAINS.map((d, i) => {
            const color = COLORS[i % COLORS.length]
            return (
              <div key={d.name} className="glass-card p-6" data-reveal data-delay={i * 0.06}>
                <span className="ring-orbit h-12 w-12" style={{ '--ring-color': color }}>
                  <svg
                    className="ring-core h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={color}
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {ICONS[i % ICONS.length]}
                  </svg>
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-fog">{d.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-dim">{d.note}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
