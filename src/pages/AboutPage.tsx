import { Link } from 'react-router-dom'
import { PageHeader } from '../components/PageHeader'
import { values } from '../data/content'

export function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Bridgelink"
        title="A boutique consultancy designed for professionals who value discretion and momentum."
        description="We advise ambitious people through pivotal career moments with strategy, market insight, and calm execution."
      >
        <div className="flex flex-wrap gap-3">
          <Link
            to="/services"
            className="bg-navy px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-navy/90"
          >
            Explore our services
          </Link>
          <Link
            to="/contact"
            className="border border-border px-6 py-3 text-sm font-medium text-navy transition-colors hover:border-gold hover:text-gold"
          >
            Book a confidential conversation
          </Link>
        </div>
      </PageHeader>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="border border-border bg-white p-8 shadow-sm">
            <h2 className="font-display text-3xl font-light text-navy">
              We believe career decisions should feel clear, not chaotic.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-text">
              Bridgelink blends executive search intuition with personal advisory support. Our clients are professionals navigating change with high standards, and they expect judgement, access, and precision.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-text">
              Whether you are preparing for a promotion, exploring an industry move, or repositioning after a career break, we help you build a compelling path forward.
            </p>
          </div>

          <div className="space-y-4">
            {values.map((value) => (
              <div key={value.title} className="border border-border bg-[#f8f9fc] p-6">
                <h3 className="font-display text-xl font-light text-navy">
                  {value.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-slate-700">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
