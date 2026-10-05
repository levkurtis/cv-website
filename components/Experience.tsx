import SectionHeading from './SectionHeading'

interface Role {
  title: string
  period: string
  description: string
  achievements: string[]
}

interface Job {
  company: string
  // The employer's official title, when it differs from the roles held.
  formalTitle?: string
  location?: string
  roles: Role[]
  internalInitiatives?: string[]
}

const experiences: Job[] = [
  {
    company: 'Accenture',
    formalTitle: 'Senior Business Architecture Analyst',
    roles: [
      {
        title: 'Data Migration Stream Lead',
        period: '06/2026 – Current',
        description: 'Leads the Dynamics 365 data migration workstream on an energy sector ERP migration.',
        achievements: [
          'Completed one full migration mock run and leading readiness preparations for the second.',
          'Resolved 30+ migration impediments end-to-end across master data domains.',
          'Co-designed a data quality gate framework for migration readiness validation.',
          'Liaison between the client and the offshore ETL team.',
          'Analysed and scoped 15 migration decisions into effort-estimated implementation tasks ahead of the mock run.',
        ],
      },
      {
        title: 'Team Lead',
        period: '01/2025 – 05/2026',
        description: 'Team Lead on a large-scale public sector data initiative, leading a team of 3 consultants and responsible for delivery, onboarding, and professional development.',
        achievements: [
          'Led data delivery for a cross-agency go-live between two public sector agencies: investigative analysis, go-live execution, and post-implementation validation, with one Data Consultant reporting in.',
          'Led PI planning for the data team, defining priorities and allocating resources with client stakeholders.',
          'Onboarded and trained 6 consultants.',
          'Owned delivery of dashboards, data analyses, and data quality efforts, aligning legal, technical, and business stakeholders.',
          'Co-led a task force identifying use cases for ML-based classification and advanced analytics.',
          'Led workshops on technology adoption, including local LLMs, GitHub, and automation.',
          'Oversaw database development with data engineers, legal experts, and business teams.',
          'Drove development of an automation tool streamlining data analysis and business processes.',
        ],
      },
      {
        title: 'Data & AI Consultant',
        period: '09/2023 – 12/2024',
        description: 'Consultant on a large-scale public sector data initiative.',
        achievements: [
          'Led data analysis efforts on a cross-agency initiative to resolve complex data quality issues previously deemed unresolvable. Efforts unlocked 350M+ DKK in frozen cases.',
          'Managed analytical engagements end-to-end, from data collection to presenting findings and recommendations to stakeholders.',
          'Built Power BI dashboards communicating key metrics to senior stakeholders.',
          'Facilitated knowledge-sharing workshops for a team of 10+ consultants.',
        ],
      },
    ],
    internalInitiatives: [
      'Founded Accenture\'s partnership with Multicultural Students of CBS, leading a team of 6 to deliver 5 events (30-40+ attendees each).',
      'Co-lead monthly department community meetings and support recruitment for the Tech Talent Program.',
    ],
  },
  {
    company: 'Marcher Markholt',
    roles: [
      {
        title: 'Researcher',
        period: '11/2021 – 08/2023',
        description: 'Headhunting agency specialised in marketing, communication, tech, and media.',
        achievements: [
          'Owned end-to-end recruitment processes for 4+ roles simultaneously, from candidate sourcing and assessment to client presentation.',
          'Served as assistant to a partner, supporting business development and recruitment operations.',
          'Built automations for the agency\'s Trello workflows, improving task management across the team.',
          'Conducted a boolean search workshop and built a library of reusable search templates, improving sourcing efficiency and becoming the go-to technical expert at the agency.',
        ],
      },
    ],
  },
  {
    company: 'Accord',
    roles: [
      {
        title: 'E-commerce Assistant',
        period: '12/2020 – 10/2021',
        description: 'Supported the launch and daily operations of a new webshop for Denmark\'s largest retailer of second-hand music and movies.',
        achievements: [
          'Managed end-to-end e-commerce operations, including inventory control, order fulfilment, and coordination with physical stores.',
          'Streamlined workflows by automating key operational processes with JavaScript.',
        ],
      },
    ],
  },
  {
    company: 'Retail Brands',
    roles: [
      {
        title: 'E-commerce Assistant',
        period: '08/2019 – 08/2020',
        description: 'Supported the online presence of luxury brands Hotel Chocolat and Swarovski across the Nordic region.',
        achievements: [
          'Managed daily webshop operations, including product updates, order processing, and customer support.',
          'Led content creation for online campaigns during COVID lockdown, driving webshop sales to 40% of typical physical store revenue in Copenhagen.',
        ],
      },
    ],
  },
]

// Plus sign that rotates into a cross when its <details> is open.
function Toggle({ open }: { open: string }) {
  return (
    <span
      className={`relative h-3.5 w-3.5 shrink-0 text-muted transition-transform duration-300 ${open}`}
      aria-hidden="true"
    >
      <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-current" />
      <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-current" />
    </span>
  )
}

// A short rule as the list marker.
function Marker() {
  return <span className="mt-[12px] mr-3 h-px w-3 shrink-0 bg-accent" aria-hidden="true" />
}

// Achievements are ordered strongest first; past this many the rest wait
// behind a disclosure so a scan reads outcomes, not a wall of bullets.
const VISIBLE_ACHIEVEMENTS = 3

function AchievementList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex text-[15px] leading-relaxed text-foreground/85">
          <Marker />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto grid max-w-[1440px] gap-10 border-t border-border pt-8 lg:grid-cols-12 lg:gap-8">
        <SectionHeading index="02" label="Experience" title="Work Experience" />

        <div className="border-t border-border lg:col-span-8 lg:border-t-0">
          {experiences.map((job) => (
            <details
              key={job.company}
              open={job.company === 'Accenture'}
              className="group border-b border-border"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-6 py-6 transition-colors duration-200 hover:text-accent-text">
                <div className="min-w-0">
                  <h3 className="font-display text-3xl uppercase leading-none sm:text-4xl">{job.company}</h3>
                  <p className="mt-2 text-sm text-muted">
                    {/* Oldest to newest, so a multi-role job reads as a progression. */}
                    {[...job.roles].reverse().map((role, i) => (
                      <span key={role.title}>
                        {i > 0 && (
                          <span className="mx-1.5 text-accent" aria-hidden="true">
                            →
                          </span>
                        )}
                        {i > 0 && <span className="sr-only">, then </span>}
                        <span className={i === job.roles.length - 1 ? 'text-foreground' : undefined}>{role.title}</span>
                      </span>
                    ))}
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-5">
                  <span className="font-mono text-xs text-muted">
                    {job.roles[job.roles.length - 1].period.split(' – ')[0]} – {job.roles[0].period.split(' – ')[1]}
                  </span>
                  <Toggle open="group-open:rotate-45" />
                </div>
              </summary>

              {job.formalTitle && (
                <p className="-mt-2 mb-6 text-sm text-muted">
                  {job.company} title: <span className="text-foreground/85">{job.formalTitle}</span>
                </p>
              )}
              <div className="space-y-10 pb-10 pt-2">
                {job.roles.map((role, idx) => (
                  <div key={idx}>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                      <h4 className="text-lg font-semibold">{role.title}</h4>
                      <span className="rounded-full border border-foreground/15 px-2.5 py-0.5 font-mono text-[11px] text-accent-text">
                        {role.period}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-muted">{role.description}</p>
                    <div className="mt-4">
                      <AchievementList items={role.achievements.slice(0, VISIBLE_ACHIEVEMENTS)} />
                      {role.achievements.length > VISIBLE_ACHIEVEMENTS && (
                        <details className="group/more mt-2.5">
                          <summary className="inline-flex min-h-11 cursor-pointer items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted transition-colors duration-200 hover:text-foreground">
                            <span className="group-open/more:hidden">
                              Show {role.achievements.length - VISIBLE_ACHIEVEMENTS} more
                            </span>
                            <span className="hidden group-open/more:inline">Show less</span>
                            <Toggle open="group-open/more:rotate-45" />
                          </summary>
                          <div className="mt-1">
                            <AchievementList items={role.achievements.slice(VISIBLE_ACHIEVEMENTS)} />
                          </div>
                        </details>
                      )}
                    </div>
                  </div>
                ))}

                {/* Internal Initiatives - Only for Accenture */}
                {job.internalInitiatives && (
                  <details className="group/init border-t border-border pt-5">
                    <summary className="flex cursor-pointer flex-wrap items-center gap-3">
                      <h4 className="text-lg font-semibold">Internal Initiatives</h4>
                      <span className="rounded-full border border-foreground/15 px-2.5 py-0.5 font-mono text-[11px] text-muted">
                        Leadership, D&I, Community
                      </span>
                      <Toggle open="group-open/init:rotate-45" />
                    </summary>

                    <div className="mt-4">
                      <AchievementList items={job.internalInitiatives} />
                    </div>
                  </details>
                )}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
