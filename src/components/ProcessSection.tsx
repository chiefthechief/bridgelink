import { CheckCircle2 } from 'lucide-react'
import { AnimatedSection } from './AnimatedSection'
import { SectionLabel } from './SectionLabel'
import { processSteps } from '../data/content'

export function ProcessSection() {
  return (
    <AnimatedSection id="process" className="bg-muted-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionLabel>Methodology</SectionLabel>
            <h2 className="font-display mt-4 text-4xl font-light text-navy md:text-5xl">
              How We Work
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-text">
              A disciplined, four-stage engagement model designed for
              institutional accountability at every step.
            </p>

            <div className="mt-12">
              {processSteps.map((step, i) => (
                <div
                  key={step.title}
                  className={`py-8 ${i < processSteps.length - 1 ? 'border-b border-border' : ''}`}
                >
                  <span className="font-display text-5xl font-light text-gold/30">
                    0{i + 1}
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
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=1067&fit=crop&auto=format"
                alt="Advisory team in strategy session"
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
                      Mandate Confirmed
                    </p>
                    <p className="font-display mt-1 text-lg font-light text-navy">
                      Agricultural Value Chain Restructuring
                    </p>
                    <p className="mt-1 text-sm font-medium text-gold">
                      Regional Agribusiness Group
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
