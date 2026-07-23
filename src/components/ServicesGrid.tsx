import { Link } from 'react-router-dom'
import { AnimatedSection } from './AnimatedSection'
import { useInView } from '../hooks/useInView'
import { serviceTeasers } from '../data/content'

function TeaserCard({
  service,
  index,
}: {
  service: (typeof serviceTeasers)[0]
  index: number
}) {
  const { ref, isInView } = useInView<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`group border border-border/60 bg-white p-8 transition-colors hover:bg-muted-surface/50 md:p-10 fade-in-view ${isInView ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <span className="font-display text-[3rem] font-light leading-none text-gold/30 transition-colors group-hover:text-gold">
        {service.number}
      </span>
      <h3 className="font-display mt-4 text-xl font-light text-navy">
        {service.title}
      </h3>
      <p className="mt-3 text-lg leading-relaxed text-muted-text">
        {service.description}
      </p>
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
          <h2 className="font-display mt-4 text-4xl font-light leading-tight text-navy md:text-5xl">
            Our Advisory Services
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {serviceTeasers.map((service, i) => (
            <TeaserCard key={service.number} service={service} index={i} />
          ))}
        </div>

        <div className="mt-10">
          <Link
            to="/services"
            className="inline-flex text-sm font-medium text-gold transition-colors hover:text-navy"
          >
            View all services →
          </Link>
        </div>
      </div>
    </AnimatedSection>
  )
}
