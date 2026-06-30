import { Check } from 'lucide-react'
import { AnimatedSection } from './AnimatedSection'
import { SectionLabel } from './SectionLabel'

const features = [
  'Former Big Four and bulge-bracket advisors',
  'Confidential, partner-led engagements',
  'Sector specialists across finance & consulting',
  'Outcome-based fee structures available',
]

export function AboutSection() {
  return (
    <AnimatedSection id="about" className="bg-muted-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <div className="aspect-square overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=800&fit=crop&auto=format"
                alt="Bridgelink advisory team"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-navy px-8 py-6">
              <p className="font-display text-4xl font-light text-gold">17</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-white/60">
                Years of Excellence
              </p>
            </div>
          </div>

          <div>
            <SectionLabel>About Bridgelink</SectionLabel>
            <h2 className="font-display mt-4 text-4xl font-light leading-tight text-navy md:text-5xl">
              Built by advisors.
              <br />
              Driven by outcomes.
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-muted-text">
              Founded in London in 2009, Bridgelink was established by senior
              recruiters and career strategists who saw a gap in the market for
              genuinely advisory career consultancy — not transactional
              placement, but strategic partnership.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-text">
              Today we work with professionals across investment banking,
              management consulting, private equity, and corporate finance. Every
              engagement is led by a named partner, with full confidentiality
              guaranteed from first conversation to signed offer.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center bg-gold">
                    <Check size={14} className="text-navy" strokeWidth={2.5} />
                  </span>
                  <p className="text-sm text-navy">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
