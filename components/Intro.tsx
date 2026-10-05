/**
 * Once-per-session loader. Rendered in the static HTML but display:none
 * unless the inline head script in layout.tsx set html[data-intro="play"],
 * so crawlers, no-JS visitors and reduced-motion users never see it.
 *
 * Everything is CSS (see "Intro overlay" in globals.css), so it plays before
 * hydration and can't get stuck.
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

      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">Data &amp; AI Lead</p>
    </div>
  )
}
