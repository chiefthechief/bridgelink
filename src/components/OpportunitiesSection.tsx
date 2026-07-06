import { ArrowRight, BriefcaseBusiness, MapPin, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import { AnimatedSection } from './AnimatedSection'
import { SectionLabel } from './SectionLabel'

const listings = [
  {
    title: 'Chief Operating Officer',
    company: 'PE-backed Healthtech Scale-Up',
    location: 'London',
    type: 'Confidential Executive Search',
    description:
      'A high-growth healthcare platform is seeking a hands-on COO to lead operations, M&A readiness, and international expansion.',
  },
  {
    title: 'VP, Strategy & Transformation',
    company: 'Global Industrial Group',
    location: 'Manchester',
    type: 'Board-Level Advisory Mandate',
    description:
      'An international industrial business is recruiting a senior transformation leader to shape operating model change and growth strategy.',
  },
  {
    title: 'Non-Executive Director',
    company: 'FinTech Scale-Up',
    location: 'Remote / London',
    type: 'Governance Opportunity',
    description:
      'A fast-scaling financial services firm is seeking a commercially astute NED with strong growth and regulatory experience.',
  },
  {
    title: 'Chief Financial Officer',
    company: 'Global Energy Transition Platform',
    location: 'Edinburgh',
    type: 'Executive Leadership Search',
    description:
      'A private-equity backed energy business is recruiting a CFO to lead capital strategy, reporting, and international scaling.',
  },
]

export function OpportunitiesSection() {
  return (
    <AnimatedSection id="opportunities" className="bg-muted-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <SectionLabel>Job Listings & Opportunities</SectionLabel>
            <h2 className="font-display mt-4 text-4xl font-light text-navy md:text-5xl">
              Executive opportunities that are discreet, relevant, and time-sensitive.
            </h2>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-sm font-medium text-gold transition-colors hover:text-navy"
          >
            Request confidential access <ArrowRight size={16} />
          </Link>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {listings.map((listing) => (
            <article key={listing.title} className="border border-border bg-white p-8 shadow-sm">
              <div className="flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-gold">
                <BriefcaseBusiness size={16} />
                {listing.type}
              </div>
              <h3 className="font-display mt-6 text-2xl font-light text-navy">{listing.title}</h3>
              <p className="mt-3 text-sm font-medium text-muted-text">{listing.company}</p>
              <p className="mt-4 text-sm leading-relaxed text-slate-700">{listing.description}</p>
              <div className="mt-6 flex items-center gap-2 text-sm text-navy">
                <MapPin size={16} className="text-gold" />
                {listing.location}
              </div>
              <div className="mt-6 flex items-center gap-2 text-sm text-navy">
                <ShieldCheck size={16} className="text-gold" />
                Confidential introductions available
              </div>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
