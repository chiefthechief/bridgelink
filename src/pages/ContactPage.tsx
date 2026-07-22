import { PageHeader } from '../components/PageHeader'
import { contactPoints } from '../data/content'

export function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Secure Communications Node"
        title="Let's Start a Conversation."
        description="Whether you’re seeking expert advice or a trusted partner, Bridge Link is ready to help. Every enquiry is treated with professionalism, discretion, and strict confidentiality."
      />

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="border border-border bg-[#f8f9fc] p-8">
            <h2 className="font-display text-3xl font-light text-navy">
              Phone
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-700">
              We work with government bodies, institutional investors, private
              enterprises, and qualified professionals seeking advisory or
              placement support across Ghana and West Africa.
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
              <label className="block text-sm text-slate-700">
                <span className="mb-2 block font-medium text-navy">
                  Full Name
                </span>
                <input
                  className="w-full border border-border bg-muted-surface px-4 py-3 text-base text-navy outline-none"
                  placeholder="Full name"
                />
              </label>
              <label className="block text-sm text-slate-700">
                <span className="mb-2 block font-medium text-navy">
                  Organization / Institution
                </span>
                <input
                  className="w-full border border-border bg-muted-surface px-4 py-3 text-base text-navy outline-none"
                  placeholder="Organization"
                />
              </label>
              <label className="block text-sm text-slate-700">
                <span className="mb-2 block font-medium text-navy">
                  Email
                </span>
                <input
                  className="w-full border border-border bg-muted-surface px-4 py-3 text-base text-navy outline-none"
                  placeholder="name@institution.gov.gh"
                />
              </label>
              <label className="block text-sm text-slate-700">
                <span className="mb-2 block font-medium text-navy">
                  How Can We Help?
                </span>
                <textarea
                  className="min-h-36 w-full border border-border bg-muted-surface px-4 py-3 text-base text-navy outline-none"
                  placeholder="Briefly describe the engagement"
                />
              </label>
              <button
                type="button"
                className="bg-gold px-6 py-3 text-sm font-medium text-navy transition-colors hover:bg-gold/90"
              >
                Send Email
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
