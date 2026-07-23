import { AnimatedSection } from '../components/AnimatedSection'
import { JobListingCard } from '../components/JobListingCard'
import { SectionLabel } from '../components/SectionLabel'
import { partnerOpportunities } from '../data/content'

export function CareersPage() {
  return (
    <main>
      <AnimatedSection className="bg-muted-surface pt-32 pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <SectionLabel>Careers & Placements</SectionLabel>
            <h1 className="font-display mt-4 text-4xl font-light text-navy md:text-5xl">
              Job opportunities across Ghana, West Africa, and beyond.
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted-text">
              Through contract agreements with partner companies, BridgeLink
              connects qualified professionals with roles in Ghana and
              international placements abroad.
            </p>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {partnerOpportunities.map((listing) => (
              <JobListingCard key={listing.title} listing={listing} />
            ))}
          </div>
        </div>
      </AnimatedSection>
    </main>
  )
}
