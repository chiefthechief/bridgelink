import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { AnimatedSection } from './AnimatedSection'
import { SectionLabel } from './SectionLabel'

export function OpportunitiesSection() {
  return (
    <AnimatedSection
      id="opportunities"
      className="bg-muted-surface py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <SectionLabel>Careers & Placements</SectionLabel>
          <h2 className="font-display mt-4 text-4xl font-light text-navy md:text-5xl">
            Job opportunities across Ghana, West Africa, and beyond.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-text">
            Through contract agreements with partner companies, BridgeLink
            connects qualified professionals with roles in Ghana and
            international placements abroad.
          </p>
          <Link
            to="/careers"
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-gold transition-colors hover:text-navy"
          >
            View all open positions <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </AnimatedSection>
  )
}
