import { Link } from 'react-router-dom'
import { PageHeader } from '../components/PageHeader'
import { processSteps } from '../data/content'

export function ProcessPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Process"
        title="A calm, structured path to the right opportunity."
        description="We pair high-touch advisory with rigorous preparation so your transition feels deliberate, confident, and well-supported."
      >
        <div className="flex flex-wrap gap-3">
          <Link
            to="/stories"
            className="bg-navy px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-navy/90"
          >
            View client outcomes
          </Link>
          <Link
            to="/contact"
            className="border border-border px-6 py-3 text-sm font-medium text-navy transition-colors hover:border-gold hover:text-gold"
          >
            Talk to our team
          </Link>
        </div>
      </PageHeader>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="grid gap-6 md:grid-cols-2">
          {processSteps.map((step, index) => (
            <div key={step.title} className="border border-border bg-[#f8f9fc] p-8 shadow-[0_10px_30px_rgba(13,31,74,0.05)]">
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
      </section>
    </>
  )
}
