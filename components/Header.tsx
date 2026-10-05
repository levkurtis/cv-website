'use client'

import { useState, useEffect, useLayoutEffect, useRef, useCallback } from 'react'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Education', href: '#education' },
]

// A section is active once its top passes this line (fraction of viewport
// height), so the highlight moves when a section is properly in view.
const FOCUS_LINE = 0.4

// The section under the focus line, or null in the hero and the footer.
function sectionInFocus(): string | null {
  const line = window.innerHeight * FOCUS_LINE
  let current: { href: string; bottom: number } | null = null
  for (const item of navItems) {
    const el = document.getElementById(item.href.slice(1))
    if (!el) continue
    const rect = el.getBoundingClientRect()
    if (rect.top <= line) current = { href: item.href, bottom: rect.bottom }
  }
  return current && current.bottom > line ? current.href : null
}

interface Pill {
  left: number
  right: number
  visible: boolean
  // Which way it last travelled; picks the leading edge for the stretch.
  dir: 'left' | 'right' | 'none'
}

// Liquid stretch: the edge facing the destination leaves first and fast, the
// trailing edge follows slower, so the pill stretches across the gap and
// settles. Appearing from hidden skips the travel and only fades/scales in.
const LEAD = '380ms cubic-bezier(0.16, 1, 0.3, 1)'
const TRAIL = '560ms cubic-bezier(0.65, 0, 0.35, 1) 40ms'
const FADE = 'opacity 250ms ease-out, transform 300ms cubic-bezier(0.16, 1, 0.3, 1)'
const PILL_TRANSITION = {
  right: `right ${LEAD}, left ${TRAIL}, ${FADE}`,
  left: `left ${LEAD}, right ${TRAIL}, ${FADE}`,
  none: FADE,
}

// Hover: each letter thickens from 400 to 700, rippling out from the centre
// of the word (see .weight-letter in globals.css). The mono face keeps every
// letter the same width, so nothing shifts as the weight changes.
const RIPPLE_STEP_MS = 30

function WeightLetters({ text }: { text: string }) {
  const centre = (text.length - 1) / 2
  return (
    <>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {text.split('').map((letter, i) => (
          <span
            key={i}
            className="weight-letter"
            style={{ '--ripple': `${Math.round(Math.abs(i - centre)) * RIPPLE_STEP_MS}ms` } as React.CSSProperties}
          >
            {letter}
          </span>
        ))}
      </span>
    </>
  )
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [active, setActive] = useState<string | null>(null)
  const [pill, setPill] = useState<Pill | null>(null)
  const navRef = useRef<HTMLElement>(null)
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({})
  // While a nav click is smooth-scrolling, the highlight holds on the
  // destination instead of chasing every section it passes.
  const lockRef = useRef(false)

  useEffect(() => {
    let ticking = false

    // Passive + rAF-throttled. Setting unchanged state is a no-op in React,
    // so this only re-renders when isScrolled or the active section changes.
    const update = () => {
      setIsScrolled(window.scrollY > 50)
      if (!lockRef.current) setActive(sectionInFocus())
      ticking = false
    }

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update)
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })
    update()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  const goTo = useCallback((href: string) => {
    setActive(href)
    lockRef.current = true
    let done = false
    const release = () => {
      if (done) return
      done = true
      lockRef.current = false
      window.removeEventListener('scrollend', release)
      setActive(sectionInFocus())
    }
    window.addEventListener('scrollend', release)
    // Fallback for browsers without scrollend, or a click that doesn't scroll.
    window.setTimeout(release, 1200)
  }, [])

  // Measure the active link and move the pill to it.
  const placePill = useCallback(() => {
    const nav = navRef.current
    const link = active ? linkRefs.current[active] : null
    if (!nav || !link || !nav.offsetParent) {
      setPill((p) => (p && p.visible ? { ...p, visible: false } : p))
      return
    }
    const left = link.offsetLeft
    const right = nav.clientWidth - left - link.offsetWidth
    setPill((p) => {
      if (p && p.visible && p.left === left && p.right === right) return p
      const dir = !p || !p.visible ? 'none' : left > p.left ? 'right' : left < p.left ? 'left' : p.dir
      return { left, right, visible: true, dir }
    })
  }, [active])

  useLayoutEffect(placePill, [placePill])

  // Re-measure when the nav changes size (fonts loading, breakpoint changes).
  useEffect(() => {
    const nav = navRef.current
    if (!nav) return
    const observer = new ResizeObserver(() => placePill())
    observer.observe(nav)
    return () => observer.disconnect()
  }, [placePill])

  useEffect(() => {
    if (!isMobileMenuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isMobileMenuOpen])

  const activeLabel = navItems.find((item) => item.href === active)?.label

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
        ref={navRef}
        aria-label="Main"
        className={`relative hidden md:flex items-center gap-1 rounded-[18px] border p-1.5 backdrop-blur-md transition-[background-color,border-color,box-shadow] duration-300 ${surface}`}
      >
        {/* Active-section pill, behind the links */}
        {pill && (
          <span
            className="pointer-events-none absolute inset-y-1.5 rounded-[18px] bg-foreground/[0.09]"
            style={{
              left: pill.left,
              right: pill.right,
              opacity: pill.visible ? 1 : 0,
              transform: pill.visible ? 'scale(1)' : 'scale(0.9)',
              transition: PILL_TRANSITION[pill.dir],
            }}
            aria-hidden="true"
          />
        )}
        <a href="#" className="relative font-display px-4 text-lg leading-none tracking-wide">
          LK<span className="sr-only"> Levent Kurtis, back to top</span>
        </a>
        {navItems.map((item) => (
          <a
            key={item.href}
            ref={(el) => {
              linkRefs.current[item.href] = el
            }}
            href={item.href}
            onClick={() => goTo(item.href)}
            aria-current={active === item.href ? 'location' : undefined}
            className={`weight-hover relative whitespace-nowrap rounded-[18px] px-2.5 py-2 font-mono text-[11px] uppercase tracking-[0.14em] lg:px-3.5 transition-colors duration-300 hover:text-foreground ${
              active === item.href ? 'text-foreground' : 'text-muted hover:bg-foreground/5'
            }`}
          >
            <WeightLetters text={item.label} />
          </a>
        ))}
        <a
          href="/levent_kurtis_cv.pdf"
          download
          className="relative ml-1 whitespace-nowrap rounded-[18px] bg-foreground px-4 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-ink-deep transition-colors duration-200 hover:bg-accent-text"
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
            : `w-72 max-w-full rounded-[18px] ${surface}`
        }`}
      >
        <div className="flex h-14 items-center gap-1 pl-2 pr-1.5">
          <a href="#" className="font-display flex h-11 min-w-11 items-center justify-center px-3 text-lg leading-none tracking-wide">
            LK<span className="sr-only"> Levent Kurtis, back to top</span>
          </a>
          {/* Current section, swapped in as it changes. Visual only: the
              open menu marks it with aria-current. */}
          <span
            className={`min-w-0 overflow-hidden transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}
            aria-hidden="true"
          >
            {activeLabel && (
              <span
                key={activeLabel}
                className="nav-label-in block truncate font-mono text-[11px] uppercase tracking-[0.14em] text-muted"
              >
                {activeLabel}
              </span>
            )}
          </span>
          <a
            href="/levent_kurtis_cv.pdf"
            download
            className={`ml-auto flex h-11 shrink-0 items-center rounded-[18px] bg-foreground px-4 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-ink-deep transition-opacity duration-300 ${
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
                  aria-current={active === item.href ? 'location' : undefined}
                  className={`flex items-baseline gap-3 border-t border-border py-3 font-display text-2xl uppercase transition-colors duration-200 ${
                    active && active !== item.href ? 'text-foreground/50' : ''
                  }`}
                  onClick={() => {
                    goTo(item.href)
                    setIsMobileMenuOpen(false)
                  }}
                >
                  <span
                    className={`font-mono text-[10px] ${active === item.href ? 'text-accent-text' : 'text-muted'}`}
                    aria-hidden="true"
                  >
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
