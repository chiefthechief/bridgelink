import { Link } from 'react-router-dom'
import { BriefcaseBusiness, MapPin } from 'lucide-react'
import { PageHeader } from '../components/PageHeader'
import { openPositions, partnerOpportunities } from '../data/content'

export function CareersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Careers at Bridge Link"
        title="Mandates that touch real institutions, not theoretical case studies."
        description="We recruit selectively for advisors and operators who hold themselves to sovereign-grade standards of rigor and discretion. We also connect professionals with partner companies in Ghana and abroad through structured contract agreements."
      >
        <div className="flex flex-wrap gap-3">
          <Link
            to="/contact"
            className="bg-navy px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-navy/90"
          >
            Submit an application
          </Link>
          <Link
            to="/about"
            className="border border-border px-6 py-3 text-sm font-medium text-navy transition-colors hover:border-gold hover:text-gold"
          >
            Learn about Bridge Link
          </Link>
        </div>
      </PageHeader>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-light text-navy">
            Open Positions at Bridge Link
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-text">
            Roles span our five statutory portfolios and our internal governance
            functions. A short, structured process: review, interview, reference,
            offer.
          </p>
        </div>

        <div className="mt-10 space-y-4">
          {openPositions.map((position) => (
            <article
              key={position.title}
              className="flex flex-col gap-4 border border-border bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <h3 className="font-display text-xl font-light text-navy">
                  {position.title}
                </h3>
                <p className="mt-2 text-sm text-muted-text">
                  {position.portfolio} · {position.location} · {position.type}
                </p>
              </div>
              <Link
                to="/contact"
                className="shrink-0 bg-gold px-5 py-2.5 text-sm font-medium text-navy transition-colors hover:bg-gold/90"
              >
                Apply Now
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-20 max-w-2xl">
          <h2 className="font-display text-3xl font-light text-navy">
            Partner Company Placements
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-text">
            Through contract agreements with companies in Ghana and abroad, Bridge
            Link facilitates job placements for qualified professionals. These
            roles are offered by our partner organizations and managed through
            structured placement contracts.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {partnerOpportunities.map((listing) => (
            <article
              key={listing.title}
              className="border border-border bg-white p-8 shadow-[0_12px_40px_rgba(25,86,190,0.06)]"
            >
              <div className="flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-gold">
                <BriefcaseBusiness size={16} />
                {listing.type}
              </div>
              <h3 className="font-display mt-4 text-2xl font-light text-navy">
                {listing.title}
              </h3>
              <p className="mt-2 text-sm font-medium text-muted-text">
                {listing.company}
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-700">
                {listing.description}
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm text-navy">
                <MapPin size={16} className="text-gold" />
                {listing.location}
              </div>
              <Link
                to="/contact"
                className="mt-6 inline-flex text-sm font-medium text-gold transition-colors hover:text-navy"
              >
                Express interest →
              </Link>
            </article>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-muted-text">
          Don&apos;t see a fit? We welcome speculative applications from
          candidates with relevant sector experience — write to us directly at{" "}
          <a
            href="mailto:bridgelinkservices@gmail.com"
            className="text-gold hover:text-navy"
          >
            bridgelinkservices@gmail.com
          </a>
          .
        </p>
      </section>
    </>
  )
}
