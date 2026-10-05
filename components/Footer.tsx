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
      {/* Steel glow behind the contact links */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_95%_at_50%_80%,rgb(127_166_207/0.28),transparent_72%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1440px] px-5 pt-24 pb-12 sm:px-8 lg:px-12 lg:pt-32 lg:pb-16">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <h2 className="font-display text-[clamp(2.5rem,4.4vw,4.25rem)] uppercase leading-[0.9]">
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
                  <span>{link.label}</span>
                  <span className="normal-case tracking-normal text-muted transition-colors duration-200 group-hover:text-accent-text">
                    {link.detail}
                    {link.external && <span aria-hidden="true"> ↗</span>}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted lg:col-span-3 lg:text-right">
            © {currentYear} Levent Kurtis
          </p>
        </div>
      </div>
    </footer>
  )
}
