/**
 * Fine bézier lines streaming across the hero, pinching to a waist and
 * fanning out again, with short dashes travelling along them. Pure SVG + CSS
 * (stroke-dashoffset, see .flow-dash in globals.css); paused under reduced
 * motion. Fixed values so the markup is identical on every build.
 */
const LINES = [
  { dur: 9, delay: -2.1, dash: true },
  { dur: 12, delay: -7.4, dash: false },
  { dur: 7.5, delay: -4.8, dash: true },
  { dur: 11, delay: -1.2, dash: true },
  { dur: 10, delay: -8.9, dash: false },
  { dur: 8.5, delay: -5.5, dash: true },
  { dur: 13, delay: -3.3, dash: true },
  { dur: 9.5, delay: -6.6, dash: false },
  { dur: 10.5, delay: -0.4, dash: true },
  { dur: 8, delay: -9.7, dash: true },
]

function linePath(i: number, count: number) {
  const t = i / (count - 1)
  const left = 120 + t * 640
  const waist = 405 + t * 120
  const right = 210 + t * 520
  return `M -40 ${left} C 360 ${left}, 520 ${waist}, 820 ${waist} S 1180 ${right}, 1480 ${right}`
}

export default function DataFlow() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 1440 900"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      {LINES.map((line, i) => {
        const d = linePath(i, LINES.length)
        return (
          <g key={i} stroke="var(--color-accent)">
            <path d={d} strokeWidth={1} strokeOpacity={0.1} vectorEffect="non-scaling-stroke" />
            {line.dash && (
              <path
                d={d}
                className="flow-dash"
                pathLength={1000}
                strokeWidth={1.25}
                strokeOpacity={0.55}
                strokeDasharray="60 940"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
                style={{ '--dur': `${line.dur}s`, '--delay': `${line.delay}s` } as React.CSSProperties}
              />
            )}
          </g>
        )
      })}
    </svg>
  )
}
