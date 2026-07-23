import { BriefcaseBusiness, MapPin, ShieldCheck } from 'lucide-react'
import { partnerOpportunities } from '../data/content'

type JobListing = (typeof partnerOpportunities)[0]

export function JobListingCard({ listing }: { listing: JobListing }) {
  return (
    <article className="border border-border bg-white p-8 shadow-sm">
      <div className="flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-gold">
        <BriefcaseBusiness size={16} />
        {listing.type}
      </div>
      <h3 className="font-display mt-6 text-2xl font-light text-navy">
        {listing.title}
      </h3>
      <p className="mt-3 text-sm font-medium text-muted-text">
        {listing.company}
      </p>
      <p className="mt-4 text-sm leading-relaxed text-slate-700">
        {listing.description}
      </p>
      <div className="mt-6 flex items-center gap-2 text-sm text-navy">
        <MapPin size={16} className="text-gold" />
        {listing.location}
      </div>
      <div className="mt-6 flex items-center gap-2 text-sm text-navy">
        <ShieldCheck size={16} className="text-gold" />
        Placed via BridgeLink contract agreement
      </div>
    </article>
  )
}
