import { Link } from 'react-router-dom'
import { PageHeader } from '../components/PageHeader'
import { processSteps } from '../data/content'

export function ProcessPage() {
  return (
    <>
      <PageHeader
        eyebrow="Methodology"
        title="A disciplined engagement model for institutional accountability."
        description="Our four-stage approach is designed for sovereign bodies, institutional investors, and private enterprises that require evidence-led counsel at every step."
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
            Initiate consultation
          </Link>
        </div>
      </PageHeader>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="grid gap-6 md:grid-cols-2">
          {processSteps.map((step, index) => (
            <div key={step.title} className="border border-border bg-[#f8f9fc] p-8 shadow-[0_10px_30px_rgba(25,86,190,0.05)]">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
                Step 0{index + 1}
              </p>
              <h2 className="mt-3 font-display text-2xl font-light text-navy">
                {step.title}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-slate-700">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 border border-border bg-white p-8 text-center shadow-sm">
          <h2 className="font-display text-2xl font-light text-navy">
            Bespoke Engagement
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-text">
            A dedicated advisory team structured around your mandate. Every
            engagement is tailored to the regulatory context, stakeholder
            objectives, and sector requirements of your institution.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-block bg-gold px-6 py-3 text-sm font-medium text-navy transition-colors hover:bg-gold/90"
          >
            Request a Briefing
          </Link>
        </div>
      </section>
    </>
  )
}
