import { Check } from 'lucide-react'
import { AnimatedSection } from './AnimatedSection'
import { SectionLabel } from './SectionLabel'

const features = [
  "Incorporated under the Companies Act 2019 (Act 992), Republic of Ghana",
  "Multi-sector advisory across governance, agriculture, healthcare, and logistics",
  "Contract-based job placements connecting Ghanaian talent with local and international employers",
  "Audited governance with Karts Consult as independent corporate auditor",
];

export function AboutSection() {
  return (
    <AnimatedSection id="about" className="bg-muted-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <div className="aspect-square overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=800&fit=crop&auto=format"
                alt="Bridge Link advisory team"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-navy px-8 py-6">
              <p className="font-display text-4xl font-light text-gold">2024</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-white/60">
                Year of Incorporation
              </p>
            </div>
          </div>

          <div>
            <SectionLabel>Who We Are</SectionLabel>
            <h2 className="font-display mt-4 text-4xl font-light leading-tight text-navy md:text-5xl">
              A Single Point of Trust
              <br />
              for Multi-Sector Enterprise
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-muted-text">
              Bridge Link Services UG Ltd was founded on a simple premise: that
              government bodies, institutional partners, and private investors
              deserve a single, accountable advisory relationship across the
              sectors that matter most to national development — corporate
              governance, agriculture, healthcare, education, real estate, and
              logistics.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-text">
              Since incorporation under the Companies Act 2019 (Act 992), we have
              built our practice on disciplined governance, full regulatory
              transparency, and a quiet preference for substance over
              self-promotion.
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
  );
}
