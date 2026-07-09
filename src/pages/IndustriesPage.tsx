import { Link } from 'react-router-dom'
import { PageHeader } from '../components/PageHeader'

const industries = [
  {
    title: 'Corporate Governance',
    description:
      'Strengthening statutory compliance, audited governance, and board-ready decision support across sovereign and private enterprises.',
  },
  {
    title: 'Agribusiness & Value Chains',
    description:
      'Advisory for modernization, investment modeling, and value chain structuring across farms, processing, logistics, and distribution.',
  },
  {
    title: 'Healthcare Infrastructure',
    description:
      'Licensing, procurement frameworks, and operational scaling for medical and healthcare institutions seeking compliant, future-ready facilities.',
  },
  {
    title: 'Education & Institutional Development',
    description:
      'Institutional capacity building for facilities planning, governance, and procurement — designed to support sustainable long-term operations.',
  },
  {
    title: 'Real Estate & Development',
    description:
      'Strategic advisory for asset valuation, development strategy, and portfolio oversight across commercial and premium property investments.',
  },
  {
    title: 'Transportation & Logistics',
    description:
      'Operational counsel for fleet management, supply chain visibility, and distribution network engineering across national and regional markets.',
  },
]

export function IndustriesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Industries We Serve"
        title="Cross-sector advisory for institutional accountability."
        description="Bridge Link supports enterprises and institutions across West Africa with disciplined governance, regulatory clarity, and bespoke operational structuring."
      >
        <div className="flex flex-wrap gap-3">
          <Link
            to="/services"
            className="bg-navy px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-navy/90"
          >
            View service portfolios
          </Link>
          <Link
            to="/contact"
            className="border border-border px-6 py-3 text-sm font-medium text-navy transition-colors hover:border-gold hover:text-gold"
          >
            Request a briefing
          </Link>
        </div>
      </PageHeader>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <article
              key={industry.title}
              className="border border-border bg-white p-8 shadow-[0_12px_40px_rgba(25,86,190,0.06)]"
            >
              <h2 className="font-display text-2xl font-light text-navy">
                {industry.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-700">
                {industry.description}
              </p>
              <div className="mt-6">
                <Link
                  to="/contact"
                  className="inline-flex text-sm font-medium text-gold transition-colors hover:text-navy"
                >
                  Discuss this industry →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

