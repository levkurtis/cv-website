import LocalTime from './LocalTime'

const links = [
  { label: 'LinkedIn', detail: 'in/leventkurtis', href: 'https://linkedin.com/in/leventkurtis', external: true },
  { label: 'Email', detail: 'levkurtis@gmail.com', href: 'mailto:levkurtis@gmail.com' },
  { label: 'GitHub', detail: 'levkurtis', href: 'https://github.com/levkurtis', external: true },
  { label: 'CV', detail: 'Download PDF', href: '/levent_kurtis_cv.pdf', download: true },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="relative overflow-hidden bg-ink-deep">
      {/* Steel glow rising from the bottom edge */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[70%] bg-[radial-gradient(ellipse_70%_100%_at_50%_100%,rgb(127_166_207/0.3),transparent_70%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1440px] px-5 pt-24 sm:px-8 lg:px-12 lg:pt-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted" aria-hidden="true">
              <span className="text-accent-text">[06]</span> Contact
            </p>
            <h2 className="font-display mt-4 text-[clamp(2.5rem,4.4vw,4.25rem)] uppercase leading-[0.9]">
              Get in touch
            </h2>
          </div>

          <ul className="border-t border-foreground/10 lg:col-span-5">
            {links.map((link) => (
              <li key={link.label} className="border-b border-foreground/10">
                <a
                  href={link.href}
                  {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  {...(link.download ? { download: true } : {})}
                  className="group flex items-baseline justify-between gap-4 py-4 font-mono text-xs uppercase tracking-[0.14em] transition-colors duration-200 hover:text-accent-text"
                >
                  <span>
                    <span className="mr-3 text-accent" aria-hidden="true">++</span>
                    {link.label}
                  </span>
                  <span className="normal-case tracking-normal text-muted transition-colors duration-200 group-hover:text-accent-text">
                    {link.detail}
                    {link.external && <span aria-hidden="true"> ↗</span>}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="flex justify-between gap-8 font-mono text-xs uppercase tracking-[0.14em] text-muted lg:col-span-3 lg:flex-col lg:items-end lg:justify-start lg:text-right">
            <p>
              Local time, Copenhagen
              <LocalTime className="mt-1 block text-2xl tracking-normal text-foreground" />
            </p>
            <p>© {currentYear} Levent Kurtis</p>
          </div>
        </div>
      </div>

      {/* Full-bleed name, cropped by the bottom edge */}
      <p
        className="font-display relative mt-20 select-none whitespace-nowrap text-center uppercase leading-[0.78] text-[17.5vw] -mb-[0.12em] text-foreground"
        aria-hidden="true"
      >
        Levent Kurtis
      </p>
    </footer>
  )
}
