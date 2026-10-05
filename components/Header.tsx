'use client'

import { useState, useEffect } from 'react'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Education', href: '#education' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    let ticking = false

    // Passive + rAF-throttled. setIsScrolled with an unchanged value is a no-op
    // in React, so this only re-renders on the two transitions rather than on
    // every scroll event.
    const update = () => {
      setIsScrolled(window.scrollY > 50)
      ticking = false
    }

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update)
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    update()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isMobileMenuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isMobileMenuOpen])

  // The pill gets denser once the page has scrolled under it.
  const surface = isScrolled
    ? 'bg-ink-deep/85 border-foreground/12 shadow-[0_8px_30px_rgb(0_0_0/0.35)]'
    : 'bg-ink-deep/55 border-foreground/8'

  return (
    <header className="fixed inset-x-0 top-3 z-50 flex justify-center px-3 sm:top-4">
      <a
        href="#main"
        className="sr-only rounded-full bg-foreground px-5 py-3 text-sm font-medium text-ink-deep focus:not-sr-only focus:absolute focus:left-3 focus:top-0"
      >
        Skip to content
      </a>

      {/* Desktop: one floating pill */}
      <nav
        aria-label="Main"
        className={`hidden md:flex items-center gap-1 rounded-[18px] border p-1.5 backdrop-blur-md transition-[background-color,border-color,box-shadow] duration-300 ${surface}`}
      >
        <a href="#" className="font-display px-4 text-lg leading-none tracking-wide">
          LK<span className="sr-only"> Levent Kurtis, back to top</span>
        </a>
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="whitespace-nowrap rounded-[18px] px-2.5 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted lg:px-3.5 transition-colors duration-200 hover:bg-foreground/5 hover:text-foreground"
          >
            {item.label}
          </a>
        ))}
        <a
          href="/levent_kurtis_cv.pdf"
          download
          className="ml-1 whitespace-nowrap rounded-[18px] bg-foreground px-4 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-ink-deep transition-colors duration-200 hover:bg-accent-text"
        >
          Download CV
        </a>
      </nav>

      {/* Mobile: a compact pill that morphs into a panel */}
      <nav
        aria-label="Main"
        className={`md:hidden overflow-hidden border backdrop-blur-md transition-[width,background-color,border-color,box-shadow] duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] ${
          isMobileMenuOpen
            ? 'w-full rounded-[18px] bg-ink-deep/95 border-foreground/12'
            : `w-64 rounded-[18px] ${surface}`
        }`}
      >
        <div className="flex h-14 items-center gap-1 pl-2 pr-1.5">
          <a href="#" className="font-display flex h-11 min-w-11 items-center justify-center px-3 text-lg leading-none tracking-wide">
            LK<span className="sr-only"> Levent Kurtis, back to top</span>
          </a>
          <a
            href="/levent_kurtis_cv.pdf"
            download
            className={`ml-auto flex h-11 items-center rounded-[18px] bg-foreground px-4 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-ink-deep transition-opacity duration-300 ${
              isMobileMenuOpen ? 'pointer-events-none opacity-0' : ''
            }`}
            tabIndex={isMobileMenuOpen ? -1 : undefined}
            aria-hidden={isMobileMenuOpen || undefined}
          >
            CV
            <span className="sr-only"> (PDF download)</span>
          </a>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-[18px] font-mono text-[11px] uppercase tracking-[0.14em] text-muted hover:text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
          >
            <span className="relative block h-2.5 w-4" aria-hidden="true">
              <span
                className={`absolute left-0 h-px w-4 bg-current transition-transform duration-300 ${
                  isMobileMenuOpen ? 'top-1 rotate-45' : 'top-0'
                }`}
              />
              <span
                className={`absolute left-0 h-px w-4 bg-current transition-transform duration-300 ${
                  isMobileMenuOpen ? 'top-1 -rotate-45' : 'top-2'
                }`}
              />
            </span>
          </button>
        </div>

        <div
          id="mobile-menu"
          className={`grid transition-[grid-template-rows,visibility] duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] ${
            isMobileMenuOpen ? 'grid-rows-[1fr] visible' : 'grid-rows-[0fr] invisible'
          }`}
        >
          <div className="min-h-0">
            <div className="px-5 pt-2 pb-5">
              {navItems.map((item, i) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex items-baseline gap-3 border-t border-border py-3 font-display text-2xl uppercase"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="font-mono text-[10px] text-muted" aria-hidden="true">
                    0{i + 1}
                  </span>
                  {item.label}
                </a>
              ))}
              <a
                href="/levent_kurtis_cv.pdf"
                download
                className="mt-3 flex min-h-11 items-center justify-center rounded-[18px] bg-foreground px-4 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-ink-deep"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
