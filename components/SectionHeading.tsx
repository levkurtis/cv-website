interface SectionHeadingProps {
  index: string
  label: string
  title: string
}

/**
 * Left column of the editorial section grid: a mono index label over a
 * condensed heading. Sticks while the content column scrolls on desktop.
 */
export default function SectionHeading({ index, label, title }: SectionHeadingProps) {
  return (
    <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted" aria-hidden="true">
        <span className="text-accent-text">[{index}]</span> {label}
      </p>
      <h2 className="font-display uppercase leading-[0.9] mt-4 text-[clamp(2.5rem,4.4vw,4.25rem)]">
        {title}
      </h2>
    </div>
  )
}
