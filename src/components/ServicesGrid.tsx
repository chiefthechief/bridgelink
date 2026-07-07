import { Link } from 'react-router-dom'
import { AnimatedSection } from './AnimatedSection'
import { SectionLabel } from './SectionLabel'
import { useInView } from '../hooks/useInView'
import { services } from '../data/content'

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
      <Link
        to={`/services/${service.slug}`}
        className="mt-6 inline-flex text-sm font-medium text-gold transition-colors group-hover:text-navy"
      >
        Learn more →
      </Link>
    </div>
  )
}

export function ServicesGrid() {
  return (
    <AnimatedSection id="services" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <SectionLabel>Our Mandate</SectionLabel>
          <h2 className="font-display mt-4 text-4xl font-light leading-tight text-navy md:text-5xl">
            Five Statutory Service <span className="gold-emphasis">Portfolios</span>
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
