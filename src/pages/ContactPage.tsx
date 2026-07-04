import { PageHeader } from '../components/PageHeader'
import { contactPoints } from '../data/content'

export function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let’s discuss your next move with discretion and clarity."
        description="Share a bit about your situation and we will follow up with a thoughtful next step tailored to your goals."
      />

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="border border-border bg-[#f8f9fc] p-8">
            <h2 className="font-display text-3xl font-light text-navy">
              Speak with our team
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-700">
              We work with senior professionals, founders, and ambitious teams who want a more strategic approach to their next opportunity.
            </p>
            <div className="mt-8 space-y-4">
              {contactPoints.map((point) => (
                <div key={point.label}>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
                    {point.label}
                  </p>
                  <p className="mt-1 text-base text-navy">{point.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-border bg-white p-8 shadow-[0_12px_40px_rgba(25,86,190,0.06)]">
            <form className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <label className="text-sm text-slate-700">
                  <span className="mb-2 block font-medium text-navy">Name</span>
                  <input className="w-full border border-border bg-muted-surface px-4 py-3 text-base text-navy outline-none" placeholder="Your name" />
                </label>
                <label className="text-sm text-slate-700">
                  <span className="mb-2 block font-medium text-navy">Email</span>
                  <input className="w-full border border-border bg-muted-surface px-4 py-3 text-base text-navy outline-none" placeholder="you@example.com" />
                </label>
              </div>
              <label className="block text-sm text-slate-700">
                <span className="mb-2 block font-medium text-navy">What would you like help with?</span>
                <textarea className="min-h-36 w-full border border-border bg-muted-surface px-4 py-3 text-base text-navy outline-none" placeholder="Tell us about your role, goals, and timeline." />
              </label>
              <button type="button" className="bg-gold px-6 py-3 text-sm font-medium text-navy transition-colors hover:bg-gold/90">
                Send inquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
