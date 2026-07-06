import { Link } from 'react-router-dom'
import { PageHeader } from '../components/PageHeader'
import { SectionLabel } from "../components/SectionLabel";
import { values } from "../data/content";

const teamMembers = [
  {
    name: "Eleanor Vance",
    title: "Managing Partner",
    bio: "Eleanor spent two decades leading executive search and people strategy for global financial institutions before joining Bridgelink. She advises clients on board-level appointments, succession planning, and high-stakes leadership moves with exceptional discretion.",
  },
  {
    name: "Adrian Mercer",
    title: "Partner, Board Advisory",
    bio: "Adrian brings deep experience in governance, executive positioning, and board-readiness strategy from both private-equity-backed and listed environments. He is known for helping leaders transition into roles that require stronger influence and broader fiduciary accountability.",
  },
  {
    name: "Nadia Holloway",
    title: "Partner, Compensation Strategy",
    bio: "Nadia has led complex negotiation work for founders, executives, and chairmen across technology, consulting, and financial services. She specialises in shaping package structures that reward leadership scope while protecting commercial leverage.",
  },
];

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
              Bridgelink blends executive search intelligence with personal
              advisory support. Our clients are professionals navigating change
              at the highest level, and they expect judgement, access, and
              precision rather than generic process.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-text">
              Our approach is deeply discreet and data-led. We map markets,
              evaluate leadership fit, and shape the narrative around each move
              so the right opportunity becomes visible at the right moment and
              is approached with confidence.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-text">
              Whether you are preparing for a board appointment, an executive
              transition, or a compensation negotiation of strategic importance,
              Bridgelink ensures that the path forward is both ambitious and
              thoughtfully managed.
            </p>
          </div>

          <div className="space-y-4">
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

        <div className="mt-16 border-t border-border pt-16">
          <div className="max-w-2xl">
            <SectionLabel>Leadership Team</SectionLabel>
            <h2 className="font-display mt-4 text-4xl font-light text-navy md:text-5xl">
              Partner-led counsel from senior operators.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {teamMembers.map((member) => (
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
