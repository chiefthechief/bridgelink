import { Link } from 'react-router-dom'
import { PageHeader } from '../components/PageHeader'
import { services } from '../data/content'

export function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Service Portfolios"
        title="Five statutory service portfolios for sovereign and private enterprise."
        description="From corporate governance and agricultural venture advisory to real estate, healthcare infrastructure, and logistics — Bridge Link delivers disciplined, multi-sector counsel across West Africa."
      >
        <div className="flex flex-wrap gap-3">
          <Link
            to="/contact"
            className="bg-navy px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-navy/90"
          >
            Initiate consultation
          </Link>
          <Link
            to="/process"
            className="border border-border px-6 py-3 text-sm font-medium text-navy transition-colors hover:border-gold hover:text-gold"
          >
            See our approach
          </Link>
        </div>
      </PageHeader>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="border border-border bg-white p-8 shadow-[0_12px_40px_rgba(25,86,190,0.06)]"
            >
              <p className="font-display text-3xl font-light text-gold/60">
                {service.number}
              </p>
              <h2 className="mt-4 font-display text-2xl font-light text-navy">
                {service.title}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-slate-700">
                {service.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-border px-3 py-1 text-xs uppercase tracking-[0.2em] text-muted-text"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                to={`/services/${service.slug}`}
                className="mt-6 inline-flex text-sm font-medium text-gold transition-colors hover:text-navy"
              >
                Explore →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
