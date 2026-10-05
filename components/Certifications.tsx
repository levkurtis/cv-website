import SectionHeading from './SectionHeading'

interface Certification {
  name: string
  issuer: string
  year: string
}

interface CertificationCategory {
  title: string
  certifications: Certification[]
}

export const certificationCategories: CertificationCategory[] = [
  {
    title: 'Generative AI & Agentic AI',
    certifications: [
      { name: 'Agentic AI for Delivery Practitioners: Level 3A', issuer: 'Accenture', year: '2025' },
      { name: 'Generative AI Leader Certification', issuer: 'Google', year: '2025' },
      { name: 'Reinvention with Agentic AI', issuer: 'Accenture', year: '2025' },
    ],
  },
  {
    title: 'Data & AI',
    certifications: [
      // { name: 'Databricks Certified Data Engineer Professional', issuer: 'Databricks', year: '2026' },
      // { name: 'Databricks Certified Data Engineer Associate', issuer: 'Databricks', year: '2026' },
      { name: 'Databricks Certified Data Analyst Associate', issuer: 'Databricks', year: '2026' },
      { name: 'Databricks Fundamentals Accreditation', issuer: 'Databricks', year: '2025' },
      { name: 'Business Intelligence Specialisation', issuer: 'Google', year: '2024' },
      { name: 'Data Analytics Specialisation', issuer: 'Google', year: '2024' },
      { name: 'Digital Shaper Program, Data Science & AI', issuer: 'TechLabs', year: '2022' },
    ],
  },
  {
    title: 'Project Delivery',
    certifications: [
      { name: 'Certified SAFe® 6 Scrum Master', issuer: 'Scaled Agile, Inc.', year: '2026' },
      { name: 'Professional Scrum Master PSM I', issuer: 'Scrum.org', year: '2025' },
      { name: 'Certified SAFe® 6 Practitioner', issuer: 'Scaled Agile, Inc.', year: '2023' },
    ],
  },
  {
    title: 'Consulting & Leadership',
    certifications: [
      { name: 'People Leadership Credential - Level 1', issuer: 'Accenture', year: '2025' },
      { name: 'Consultant Virtual Experience Program', issuer: 'Accenture', year: '2022' },
    ],
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto grid max-w-[1440px] gap-10 border-t border-border pt-8 lg:grid-cols-12 lg:gap-8">
        <SectionHeading index="04" label="Certifications" title="Certifications" />

        <div className="space-y-12 lg:col-span-8">
          {certificationCategories.map((category) => (
            <div key={category.title}>
              <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent-text">
                {category.title}
              </h3>
              <ul className="mt-3 border-t border-border">
                {category.certifications.map((cert, idx) => (
                  <li
                    key={idx}
                    className="grid grid-cols-[minmax(0,1fr)_auto] gap-x-6 gap-y-1 border-b border-border py-4 sm:grid-cols-[minmax(0,1fr)_12rem_3rem]"
                  >
                    <p className="text-[15px] font-medium text-foreground/90">{cert.name}</p>
                    <p className="col-start-1 row-start-2 text-sm text-muted sm:col-start-2 sm:row-start-1">{cert.issuer}</p>
                    <p className="col-start-2 row-start-1 text-right font-mono text-xs leading-6 text-muted sm:col-start-3">
                      {cert.year}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
