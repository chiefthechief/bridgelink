import { ArrowRight, BriefcaseBusiness, MapPin, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import { AnimatedSection } from './AnimatedSection'
import { SectionLabel } from './SectionLabel'
import { partnerOpportunities } from '../data/content'

export function OpportunitiesSection() {
  const featured = partnerOpportunities.slice(0, 3)

  return (
    <AnimatedSection id="opportunities" className="bg-muted-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <SectionLabel>Careers & Placements</SectionLabel>
            <h2 className="font-display mt-4 text-4xl font-light text-navy md:text-5xl">
              Job opportunities across Ghana, West Africa, and beyond.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-text">
              Through contract agreements with partner companies, Bridge Link
              connects qualified professionals with roles in Ghana and
              international placements abroad.
            </p>
          </div>
          <Link
            to="/careers"
            className="inline-flex items-center gap-2 text-sm font-medium text-gold transition-colors hover:text-navy"
          >
            View all open positions <ArrowRight size={16} />
          </Link>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {featured.map((listing) => (
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
                Placed via Bridge Link contract agreement
              </div>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
