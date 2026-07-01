import { Link, useParams } from 'react-router-dom'
import { PageHeader } from '../components/PageHeader'
import { services } from '../data/content'

export function ServiceDetailPage() {
  const { slug } = useParams()
  const service = services.find((item) => item.slug === slug)

  if (!service) {
    return (
      <>
        <PageHeader
          eyebrow="Service"
          title="This service page is not available."
          description="The requested service could not be found. Please return to the services overview and choose another option."
        >
          <Link
            to="/services"
            className="bg-navy px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-navy/90"
          >
            Back to services
          </Link>
        </PageHeader>
      </>
    )
  }

  return (
    <>
      <PageHeader
        eyebrow="Service"
        title={service.detailTitle}
        description={service.intro}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            to="/contact"
            className="bg-navy px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-navy/90"
          >
            Book a consultation
          </Link>
          <Link
            to="/services"
            className="border border-border px-6 py-3 text-sm font-medium text-navy transition-colors hover:border-gold hover:text-gold"
          >
            View all services
          </Link>
        </div>
      </PageHeader>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-none border border-border bg-white p-8 shadow-[0_12px_40px_rgba(13,31,74,0.06)]">
            <p className="font-display text-3xl font-light text-gold/60">{service.number}</p>
            <h2 className="mt-4 font-display text-2xl font-light text-navy">{service.title}</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-700">{service.description}</p>
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
          </div>

          <div className="space-y-6">
            <div className="border border-border bg-muted-surface p-8">
              <h3 className="font-display text-xl font-light text-navy">What this looks like</h3>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700">
                {service.highlights.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 text-gold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-border bg-white p-8">
              <h3 className="font-display text-xl font-light text-navy">Our approach</h3>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700">
                {service.approach.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 text-gold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {service.outcomes.map((outcome) => (
            <div key={outcome} className="border border-border bg-white p-6">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-gold">Outcome</p>
              <p className="mt-3 text-base leading-relaxed text-slate-700">{outcome}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
