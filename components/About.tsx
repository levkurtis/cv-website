import SectionHeading from './SectionHeading'

export default function About() {
  return (
    <section id="about" className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto grid max-w-[1440px] gap-10 border-t border-border pt-8 lg:grid-cols-12 lg:gap-8">
        <SectionHeading index="01" label="About" title="About Me" />

        <div className="lg:col-span-8">
          <p className="max-w-3xl text-xl leading-relaxed text-foreground/90 sm:text-2xl sm:leading-relaxed">
            As a Consultant at Accenture, I advise clients on data-driven transformation and implement the solutions that follow. I
            translate complex data challenges into action, from data migration and quality frameworks to analytics, automation and ML/
            AI adoption. With hands-on technical expertise and a digital business background, I bridge the gap between technical
            teams and executive stakeholders. Driven by curiosity, I explore GenAI tools like LM Studio and Ollama outside of work.
          </p>
        </div>
      </div>
    </section>
  )
}
