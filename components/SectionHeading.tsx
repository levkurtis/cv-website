interface SectionHeadingProps {
  title: string
}

/**
 * Left column of the editorial section grid: a condensed heading that
 * sticks while the content column scrolls on desktop.
 */
export default function SectionHeading({ title }: SectionHeadingProps) {
  return (
    <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
      <h2 className="font-display uppercase leading-[0.9] text-[clamp(2.5rem,4.4vw,4.25rem)]">{title}</h2>
    </div>
  )
}
