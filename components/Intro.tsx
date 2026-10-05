/**
 * Once-per-session loader. Rendered in the static HTML but display:none
 * unless the inline head script in layout.tsx set html[data-intro="play"],
 * so crawlers, no-JS visitors and reduced-motion users never see it.
 *
 * Everything is CSS (see "Intro overlay" in globals.css), including the
 * 000 to 100 counter, so it plays before hydration and can't get stuck.
 */
export default function Intro() {
  return (
    <div className="intro flex-col justify-between p-5 sm:p-8 lg:p-12" aria-hidden="true">
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
        Copenhagen, Denmark
      </p>

      <p className="intro-name font-display uppercase leading-[0.85] text-[22vw] sm:text-[15vw]">
        Levent
        <br />
        Kurtis
      </p>

      <div>
        <div className="flex justify-end font-mono">
          <span className="intro-count text-sm tabular-nums" />
        </div>
        <div className="intro-bar mt-3 h-px bg-accent" />
      </div>
    </div>
  )
}
