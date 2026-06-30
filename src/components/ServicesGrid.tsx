import { AnimatedSection } from './AnimatedSection'
import { SectionLabel } from './SectionLabel'
import { useInView } from '../hooks/useInView'

const services = [
  {
    number: '01',
    title: 'Career Consulting',
    description:
      'One-to-one advisory for professionals at inflection points — role changes, industry pivots, and long-term career architecture.',
    tags: ['Strategy', 'Roadmapping', 'Advisory'],
  },
  {
    number: '02',
    title: 'Executive Placement',
    description:
      'Discreet access to board-level and C-suite opportunities through our network of 400+ partner organisations across finance and consulting.',
    tags: ['C-Suite', 'Board Roles', 'Confidential'],
  },
  {
    number: '03',
    title: 'CV & Brand Development',
    description:
      'Positioning documents and personal brand narratives crafted for senior audiences — from executive summaries to LinkedIn authority.',
    tags: ['Personal Brand', 'CV Writing', 'LinkedIn'],
  },
  {
    number: '04',
    title: 'Interview Mastery',
    description:
      'Structured preparation for panel interviews, case assessments, and competency frameworks used by top-tier employers.',
    tags: ['Mock Interviews', 'Case Prep', 'Feedback'],
  },
  {
    number: '05',
    title: 'Salary Negotiation',
    description:
      'Evidence-based negotiation strategy to secure compensation packages that reflect your market value and scope of responsibility.',
    tags: ['Compensation', 'Equity', 'Benefits'],
  },
  {
    number: '06',
    title: 'Graduate Transition',
    description:
      'Accelerated pathways for high-potential graduates entering competitive sectors — from application strategy to offer conversion.',
    tags: ['Graduate Roles', 'Internships', 'Mentorship'],
  },
]

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0]
  index: number
}) {
  const { ref, isInView } = useInView<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`group bg-white p-8 transition-colors hover:bg-muted-surface/50 md:p-10 fade-in-view ${isInView ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <span className="font-display text-[3rem] font-light leading-none text-gold/30 transition-colors group-hover:text-gold">
        {service.number}
      </span>
      <h3 className="font-display mt-4 text-xl font-light text-navy">
        {service.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-text">
        {service.description}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="border border-border px-3 py-1 text-xs uppercase tracking-wider text-muted-text transition-colors group-hover:border-gold/40 group-hover:bg-gold/5 group-hover:text-navy"
          >
            {tag}
          </span>
        ))}
      </div>
      <p className="mt-6 text-sm font-medium text-gold opacity-0 transition-opacity group-hover:opacity-100">
        Learn more →
      </p>
    </div>
  )
}

export function ServicesGrid() {
  return (
    <AnimatedSection id="services" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <SectionLabel>What We Offer</SectionLabel>
          <h2 className="font-display mt-4 text-4xl font-light leading-tight text-navy md:text-5xl">
            Services built around <span className="gold-emphasis">your</span>{' '}
            career.
          </h2>
        </div>

        <div className="mt-16 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.number} service={service} index={i} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
