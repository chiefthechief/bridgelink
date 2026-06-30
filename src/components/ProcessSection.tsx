import { CheckCircle2 } from 'lucide-react'
import { AnimatedSection } from './AnimatedSection'
import { SectionLabel } from './SectionLabel'

const steps = [
  {
    number: '01',
    title: 'Discovery & Assessment',
    description:
      'We begin with a confidential consultation to understand your career trajectory, ambitions, and the market landscape relevant to your sector.',
  },
  {
    number: '02',
    title: 'Strategy & Positioning',
    description:
      'Our advisors develop a tailored career strategy — refining your narrative, target roles, and approach to market engagement.',
  },
  {
    number: '03',
    title: 'Active Placement',
    description:
      'Through our partner network and direct outreach, we introduce you to opportunities aligned with your criteria and compensation expectations.',
  },
  {
    number: '04',
    title: 'Offer & Transition',
    description:
      'We support negotiation, onboarding preparation, and the first 90 days — ensuring your move delivers lasting professional impact.',
  },
]

export function ProcessSection() {
  return (
    <AnimatedSection id="process" className="bg-muted-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionLabel>Our Process</SectionLabel>
            <h2 className="font-display mt-4 text-4xl font-light text-navy md:text-5xl">
              A disciplined path to your next chapter.
            </h2>

            <div className="mt-12">
              {steps.map((step, i) => (
                <div
                  key={step.number}
                  className={`py-8 ${i < steps.length - 1 ? 'border-b border-border' : ''}`}
                >
                  <span className="font-display text-5xl font-light text-gold/30">
                    {step.number}
                  </span>
                  <h3 className="font-display mt-2 text-xl font-light text-navy">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-text">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-4 -top-4 z-10 h-24 w-24 border-2 border-gold" />
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=1067&fit=crop&auto=format"
                alt="Executive team in strategy meeting"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 bg-white p-5 shadow-lg">
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-gold"
                    strokeWidth={1.5}
                  />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-text">
                      Placement Confirmed
                    </p>
                    <p className="font-display mt-1 text-lg font-light text-navy">
                      Managing Director, Investment Banking
                    </p>
                    <p className="mt-1 text-sm font-medium text-gold">
                      £285,000 base + bonus
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
