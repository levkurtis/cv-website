import DataFlow from './DataFlow'

const PROOF = [
  { figure: 'Team Lead', label: '2025–2026' },
  { figure: '6', label: 'consultants onboarded' },
  { figure: '350M+ DKK', label: 'in frozen cases unlocked' },
]

const PHOTO_SIZES = '(min-width: 1024px) min(46vw, 640px), (min-width: 640px) 50vw, 60vw'

// Each letter rises out of its line's mask, staggered by --i. The letters
// sit directly next to each other, so the h1's text is still "Levent Kurtis".
function RevealWord({ word, offset }: { word: string; offset: number }) {
  return (
    <span className="reveal-line">
      {word.split('').map((letter, i) => (
        <span
          key={i}
          className="reveal-letter"
          style={{ '--i': offset + i } as React.CSSProperties}
        >
          {letter}
        </span>
      ))}
    </span>
  )
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Steel glow behind the name */}
      <div
        className="pointer-events-none absolute -left-[20%] top-[10%] h-[80%] w-[110%] bg-[radial-gradient(ellipse_at_center,rgb(127_166_207/0.14),transparent_60%)]"
        aria-hidden="true"
      />
      <DataFlow />

      <div className="relative mx-auto max-w-[1440px] px-5 pt-24 pb-16 sm:px-8 sm:pt-28 lg:px-12 lg:pb-16">
        {/* Location */}
        <p
          className="reveal-fade font-mono text-[11px] uppercase tracking-[0.16em] text-muted"
          style={{ '--d': '0.2s' } as React.CSSProperties}
        >
          Copenhagen, Denmark
        </p>

        <div className="mt-8 grid sm:mt-10 lg:mt-8 lg:grid-cols-12">
          <h1 className="font-display relative z-10 uppercase leading-[0.82] text-[30vw] sm:text-[24vw] lg:col-start-1 lg:col-end-10 lg:row-start-1 lg:text-[min(18vw,16rem)]">
            <RevealWord word="Levent" offset={0} />{' '}
            <RevealWord word="Kurtis" offset={6} />
          </h1>

          {/* Portrait. The lower edge fades into the page via .photo-fade. */}
          <div className="reveal-photo relative ml-auto -mt-[16vw] w-[60%] sm:-mt-[14vw] sm:w-[50%] lg:col-start-7 lg:col-end-13 lg:row-start-1 lg:row-end-3 lg:-mt-10 lg:w-full lg:max-w-[640px]">
            <picture>
              <source
                type="image/avif"
                srcSet="/photo-hero-720.avif 720w, /photo-hero-1080.avif 1080w"
                sizes={PHOTO_SIZES}
              />
              <img
                src="/photo-hero-720.jpg"
                srcSet="/photo-hero-720.jpg 720w, /photo-hero-1080.jpg 1080w"
                sizes={PHOTO_SIZES}
                alt="Portrait of Levent Kurtis"
                width={720}
                height={900}
                fetchPriority="high"
                decoding="async"
                className="photo-fade aspect-[4/5] h-auto w-full object-cover grayscale brightness-[0.88] contrast-[1.05] lg:max-h-[74svh]"
              />
            </picture>
          </div>

          <div className="relative z-10 -mt-4 lg:col-start-1 lg:col-end-8 lg:row-start-2 lg:mt-8 lg:self-end">
            <div className="reveal-rule h-px bg-foreground/20" aria-hidden="true" />

            <div className="reveal-fade mt-5" style={{ '--d': '0.55s' } as React.CSSProperties}>
              <p className="text-[clamp(1.375rem,2.6vw,2rem)] font-medium leading-tight text-balance">
                Data &amp; AI Lead at Accenture
              </p>
              <p className="mt-2 max-w-[56ch] text-[15px] leading-snug text-foreground/75 text-pretty sm:text-base">
                Currently Data Migration Stream Lead on an energy sector ERP migration.
              </p>
            </div>

            <div
              className="reveal-fade mt-6 flex flex-wrap items-center gap-3 sm:mt-8"
              style={{ '--d': '0.7s' } as React.CSSProperties}
            >
              <a
                href="/levent_kurtis_cv.pdf"
                download
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-foreground px-6 text-sm font-medium text-ink-deep transition-colors duration-200 hover:bg-accent-text"
              >
                Download CV
                <span className="font-mono text-[11px] text-ink-deep/60">PDF</span>
              </a>
              <a
                href="#contact"
                className="inline-flex min-h-11 items-center rounded-full border border-foreground/25 px-6 text-sm font-medium transition-colors duration-200 hover:border-foreground/60"
              >
                Get in touch
              </a>
            </div>

            {/* Seniority as evidence: each figure comes straight from Experience. */}
            <ul
              className="reveal-fade mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted"
              style={{ '--d': '0.75s' } as React.CSSProperties}
            >
              {PROOF.map((item) => (
                <li key={item.figure}>
                  <span className="font-medium text-foreground">{item.figure}</span> {item.label}
                </li>
              ))}
            </ul>

            <p
              className="reveal-fade mt-3 flex flex-wrap gap-x-5 font-mono text-xs text-muted"
              style={{ '--d': '0.8s' } as React.CSSProperties}
            >
              <a
                href="mailto:levkurtis@gmail.com"
                className="inline-flex min-h-11 items-center transition-colors duration-200 hover:text-foreground"
              >
                levkurtis@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/leventkurtis"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center transition-colors duration-200 hover:text-foreground"
              >
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
