import Marker from './Marker'
import SectionHeading from './SectionHeading'

// Label on the left, content on the right, hairline between rows.
function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-3 border-b border-border py-6 sm:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] sm:gap-8">
      <h4 className="text-lg font-semibold">{label}</h4>
      <div>{children}</div>
    </div>
  )
}

export default function Education() {
  return (
    <section id="education" className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto grid max-w-[1440px] gap-10 border-t border-border pt-8 lg:grid-cols-12 lg:gap-8">
        <SectionHeading title="Education" />

        <div className="lg:col-span-8">
          <div className="flex flex-col gap-4 border-b border-border pb-8 md:flex-row md:items-end md:justify-between">
            <div>
              <h3 className="font-display text-3xl uppercase leading-none sm:text-4xl">
                MSc in Business Administration and E-business
              </h3>
              <p className="mt-3 font-medium text-accent-text">Copenhagen Business School</p>
            </div>
            <p className="shrink-0 font-mono text-xs uppercase tracking-[0.14em] text-muted">Copenhagen, Denmark</p>
          </div>

          <Row label="Thesis">
            <p className="text-[15px] leading-relaxed text-foreground/85">
              The Digital Transformation of Traditional Retail: Advancing Digital Maturity with E-commerce Capability-Building
            </p>
          </Row>

          <Row label="Projects">
            <ul className="space-y-2">
              <li className="flex text-[15px] text-foreground/85">
                <Marker />
                <span>Sentiment Analysis of Spotify&apos;s Brand Perception</span>
              </li>
              <li className="flex text-[15px] text-foreground/85">
                <Marker />
                <span>AI in the Danish Marketing Industry</span>
              </li>
            </ul>
          </Row>

          <Row label="Data & AI Courses">
            <ul className="space-y-2 text-[15px] text-foreground/85">
              <li>Data Analytics in Digital Business</li>
              <li>Big Social Data Analytics</li>
              <li>AI in Business and Society</li>
            </ul>
          </Row>

          <Row label="Digital Business & Strategy Courses">
            <ul className="space-y-2 text-[15px] text-foreground/85">
              <li>Digital Transformation Management</li>
              <li>Digital Platforms</li>
              <li>Strategic Tools for Digital Business</li>
            </ul>
          </Row>
        </div>
      </div>
    </section>
  )
}
