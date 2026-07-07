import { Link } from 'react-router-dom'
import { PageHeader } from '../components/PageHeader'
import { insights } from '../data/content'

export function InsightsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Perspectives"
        title="Insights and briefings for institutional decision-makers."
        description="Regulatory updates, sector outlooks, and governance notes from the Bridge Link advisory team — practical counsel for enterprises operating across Ghana and West Africa."
      >
        <Link
          to="/contact"
          className="bg-navy px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-navy/90"
        >
          Request full archive
        </Link>
      </PageHeader>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="grid gap-6 lg:grid-cols-3">
          {insights.map((item) => (
            <article
              key={item.title}
              className="border border-border bg-white p-8 shadow-[0_12px_40px_rgba(25,86,190,0.06)]"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
                {item.category}
              </p>
              <h2 className="font-display mt-4 text-2xl font-light text-navy">
                {item.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-700">
                {item.summary}
              </p>
              <p className="mt-6 text-sm text-muted-text">
                {item.date} · {item.readTime}
              </p>
              <Link
                to="/contact"
                className="mt-6 inline-flex text-sm font-medium text-gold transition-colors hover:text-navy"
              >
                Read →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
