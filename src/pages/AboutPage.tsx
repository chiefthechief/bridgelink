import { Link } from 'react-router-dom'
import { PageHeader } from '../components/PageHeader'
import { SectionLabel } from "../components/SectionLabel";
import { values, leadership } from "../data/content";

export function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Bridge Link"
        title="A single point of trust for multi-sector enterprise across West Africa."
        description="We advise government bodies, institutional partners, and private investors with disciplined governance, full regulatory transparency, and evidence-led counsel."
      >
        <div className="flex flex-wrap gap-3">
          <Link
            to="/services"
            className="bg-navy px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-navy/90"
          >
            Explore service portfolios
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
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="border border-border bg-white p-8 shadow-sm">
            <h2 className="font-display text-3xl font-light text-navy">
              Who We Are
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-text">
              Bridge Link Services UG Ltd was founded on a simple premise: that
              government bodies, institutional partners, and private investors
              deserve a single, accountable advisory relationship across the
              sectors that matter most to national development — corporate
              governance, agriculture, healthcare, education, real estate, and
              logistics.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-text">
              Since incorporation under the Companies Act 2019 (Act 992), we have
              built our practice on disciplined governance, full regulatory
              transparency, and a quiet preference for substance over
              self-promotion.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="border border-border bg-[#f8f9fc] p-6">
                <h3 className="font-display text-xl font-light text-navy">Our Mission</h3>
                <p className="mt-2 text-base leading-relaxed text-slate-700">
                  To engineer the operational infrastructure that lets sovereign
                  and private capital move with confidence across West Africa.
                </p>
              </div>
              <div className="border border-border bg-[#f8f9fc] p-6">
                <h3 className="font-display text-xl font-light text-navy">Our Vision</h3>
                <p className="mt-2 text-base leading-relaxed text-slate-700">
                  To be the region&apos;s most trusted multi-sector advisory,
                  known equally to ministries and institutional investors.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-2xl font-light text-navy">Our Values</h3>
            {values.map((value) => (
              <div
                key={value.title}
                className="border border-border bg-[#f8f9fc] p-6"
              >
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

        <div id="governance" className="mt-16 border-t border-border pt-16">
          <div className="max-w-2xl">
            <SectionLabel>Governance</SectionLabel>
            <h2 className="font-display mt-4 text-4xl font-light text-navy md:text-5xl">
              Executive Leadership
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-text">
              Independent auditors: Karts Consult (Verified Profile)
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {leadership.map((member) => (
              <div
                key={member.name}
                className="border border-border bg-white p-8 shadow-sm"
              >
                <h3 className="font-display text-2xl font-light text-navy">
                  {member.name}
                </h3>
                <p className="mt-2 text-sm font-medium uppercase tracking-[0.2em] text-gold">
                  {member.title}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-slate-700">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
