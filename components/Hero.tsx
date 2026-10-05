import DataFlow from './DataFlow'
import LocalTime from './LocalTime'

const PHOTO_SIZES = '(min-width: 1024px) min(40vw, 640px), 72vw'

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

      <div className="relative mx-auto max-w-[1440px] px-5 pt-28 pb-16 sm:px-8 lg:px-12 lg:pt-28 lg:pb-16">
        {/* Status row */}
        <div
          className="reveal-fade flex items-start justify-between gap-6 font-mono text-[11px] uppercase tracking-[0.16em] text-muted"
          style={{ '--d': '0.2s' } as React.CSSProperties}
        >
          <p className="flex items-start gap-2.5">
            <span className="status-dot mt-[0.5em] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
            <span>
              Currently: <span className="text-foreground">Data Migration Stream Lead, Accenture</span>
            </span>
          </p>
          <p className="hidden shrink-0 sm:block">
            Copenhagen <LocalTime className="ml-2 text-foreground" />
          </p>
        </div>

        <div className="mt-10 grid lg:mt-8 lg:grid-cols-12">
          <h1 className="font-display relative z-10 uppercase leading-[0.82] text-[30vw] sm:text-[24vw] lg:col-start-1 lg:col-end-10 lg:row-start-1 lg:text-[min(18vw,16rem)]">
            <RevealWord word="Levent" offset={0} />{' '}
            <RevealWord word="Kurtis" offset={6} />
          </h1>

          {/* Portrait. Edges dissolve into the grain via .photo-dissolve. */}
          <div className="reveal-photo relative ml-auto -mt-[14vw] w-[72%] sm:w-[60%] lg:col-start-7 lg:col-end-13 lg:row-start-1 lg:row-end-3 lg:-mt-10 lg:w-full lg:max-w-[640px]">
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
                alt="Levent Kurtis, Senior Business Architecture Analyst at Accenture"
                width={720}
                height={900}
                fetchPriority="high"
                decoding="async"
                className="photo-dissolve aspect-[4/5] h-auto w-full object-cover grayscale brightness-[0.88] contrast-[1.05] lg:max-h-[74svh]"
              />
            </picture>
          </div>

          <div className="relative z-10 -mt-4 lg:col-start-1 lg:col-end-8 lg:row-start-2 lg:mt-8 lg:self-end">
            <div className="reveal-rule h-px bg-foreground/20" aria-hidden="true" />

            <ul
              className="reveal-fade mt-5 grid gap-3 text-[15px] leading-snug text-foreground/85 sm:grid-cols-3 sm:gap-6"
              style={{ '--d': '0.55s' } as React.CSSProperties}
            >
              <li>Senior Business Architecture Analyst, Accenture</li>
              <li>Based in Copenhagen, Denmark</li>
              <li>Tech Leader at the Intersection of Data &amp; AI, People, and Delivery</li>
            </ul>

            <div
              className="reveal-fade mt-8 flex flex-wrap items-center gap-3"
              style={{ '--d': '0.7s' } as React.CSSProperties}
            >
              <a
                href="/levent_kurtis_cv.pdf"
                download
                className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-ink-deep transition-colors duration-200 hover:bg-accent-text"
              >
                Download CV <span aria-hidden="true">↓</span>
              </a>
              <a
                href="#contact"
                className="rounded-full border border-foreground/25 px-6 py-3 text-sm font-medium transition-colors duration-200 hover:border-foreground/60"
              >
                Get in touch <span aria-hidden="true">↗</span>
              </a>
            </div>

            <p
              className="reveal-fade mt-6 flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs text-muted"
              style={{ '--d': '0.8s' } as React.CSSProperties}
            >
              <a href="mailto:levkurtis@gmail.com" className="transition-colors duration-200 hover:text-foreground">
                levkurtis@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/leventkurtis"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200 hover:text-foreground"
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
