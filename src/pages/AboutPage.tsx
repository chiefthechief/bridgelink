import { Link } from 'react-router-dom'
import { PageHeader } from '../components/PageHeader'
import { SectionLabel } from "../components/SectionLabel";
import { values, leadership } from "../data/content";

export function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Bridge Link"
        title="Strategic advisory services that help businesses, institutions, and investors make confident decisions."
        description="We provide professional advisory and consultancy services to businesses, public institutions, investors, and development organizations. 
        We combine strategic insight, regulatory awareness, and practical expertise to help clients achieve sustainable growth, strengthen governance, and improve operational performance."
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
              Bridge Link Services UG Ltd was established to address a growing
              need for integrated advisory services across sectors that are
              fundamental to economic and institutional development. Rather than
              operating within a single discipline, we bring together expertise
              across business advisory, agribusiness, healthcare, education,
              real estate, and transportation to help clients make informed
              decisions and execute sustainable strategies. We believe that
              organizations achieve better outcomes when strategic planning,
              regulatory compliance, operational efficiency, and long-term
              development are considered together. Our approach combines
              professional integrity, practical insight, and collaborative
              partnership to deliver solutions tailored to each client’s
              objectives.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-text">
              As a Ghanaian company with a regional outlook, we are committed to
              supporting businesses, public institutions, investors, and
              development partners in building resilient organizations and
              contributing to sustainable economic growth. Bridge Link exists to
              bridge the gap between opportunity and execution; helping
              organizations transform ambition into sustainable, measurable
              results.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="border border-border bg-[#f8f9fc] p-6">
                <h3 className="font-display text-xl font-light text-navy">
                  Our Mission
                </h3>
                <p className="mt-2 text-base leading-relaxed text-slate-700">
                  To provide trusted advisory and consultancy services that
                  enable businesses, institutions, and public-sector
                  organizations to improve performance, strengthen governance,
                  and achieve sustainable growth through practical, ethical, and
                  evidence-based solutions.
                </p>
              </div>
              <div className="border border-border bg-[#f8f9fc] p-6">
                <h3 className="font-display text-xl font-light text-navy">
                  Our Vision
                </h3>
                <p className="mt-2 text-base leading-relaxed text-slate-700">
                  To become one of West Africa’s most trusted multidisciplinary
                  advisory firms, recognized for professional excellence,
                  integrity, innovation, and lasting client impact.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-2xl font-light text-navy">
              Our Values
            </h3>
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
            <SectionLabel>Leadership & Governance</SectionLabel>
            <h2 className="font-display mt-4 text-4xl font-light text-navy md:text-5xl">
              Executive Leadership
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-text">
              Bridge Link is committed to transparency, accountability, and
              sound corporate governance. The company maintains independent
              financial oversight through external auditors and operates in
              accordance with applicable legal and regulatory requirements in
              Ghana.
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
