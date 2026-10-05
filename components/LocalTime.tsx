'use client'

import { useEffect, useState } from 'react'

/**
 * Current time in Copenhagen. The static HTML has a "--:--" placeholder and
 * the real time fills in after mount, so server and client markup match.
 */
export default function LocalTime({ className = '' }: { className?: string }) {
  const [time, setTime] = useState<string | null>(null)

  useEffect(() => {
    const format = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Europe/Copenhagen',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    })

    // Setting an unchanged string is a no-op, so a short interval only
    // re-renders when the minute actually turns over.
    const tick = () => setTime(format.format(new Date()))
    tick()
    const id = window.setInterval(tick, 10_000)

    return () => window.clearInterval(id)
  }, [])

  return <span className={`tabular-nums ${className}`}>{time ?? '--:--'}</span>
}
