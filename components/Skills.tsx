import SectionHeading from './SectionHeading'

interface SkillCategory {
  title: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Data & Analytics',
    skills: [
      'SQL',
      'Python (pandas, numpy, matplotlib)',
      'Databricks',
      'Data Analysis',
      'Automation',
      'Power BI',
      'Excel',
    ],
  },
  {
    title: 'GenAI & ML/AI',
    skills: [
      'LM Studio',
      'Ollama',
      'KNIME',
      'Sentiment Analysis',
    ],
  },
  {
    title: 'Delivery & Project Management',
    skills: [
      'Agile Delivery',
      'Azure DevOps',
      'JIRA',
      'PI Planning',
      'SAFe',
    ],
  },
  {
    title: 'Leadership & Strategy',
    skills: [
      'Team Leadership',
      'Stakeholder Management',
      'Digital Transformation',
      'Digital Strategy',
    ],
  },
  {
    title: 'Languages',
    skills: [
      'Danish (Native)',
      'English (Bilingual)',
      'Turkish (Bilingual)',
      'Macedonian (Full)',
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto grid max-w-[1440px] gap-10 border-t border-border pt-8 lg:grid-cols-12 lg:gap-8">
        <SectionHeading index="03" label="Skills" title="Skills" />

        <div className="border-t border-border lg:col-span-8 lg:border-t-0">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="grid gap-4 border-b border-border py-6 sm:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] sm:gap-8"
            >
              <h3 className="text-lg font-semibold">{category.title}</h3>
              <ul className="flex flex-wrap content-start items-start gap-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-foreground/15 px-3 py-1 font-mono text-xs text-foreground/85 transition-colors duration-200 hover:border-accent hover:text-accent-text"
                  >
                    {skill}
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
