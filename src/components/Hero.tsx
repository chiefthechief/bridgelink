import { ChevronDown } from 'lucide-react'
import { SectionLabel } from './SectionLabel'

const stats = [
  { value: "$150M+", label: "Negotiated packages" },
  { value: "300+", label: "Board placements" },
  { value: "98%", label: "Retained search success" },
  { value: "12wks", label: "Average mandate delivery" },
];

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col bg-navy">
      <div className="absolute inset-x-0 top-0 h-px bg-gold" />

      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop&auto=format)",
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(25,86,190,0.95)_0%,rgba(25,86,190,0.82)_45%,rgba(25,86,190,0.65)_100%)]" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 pb-24 pt-32 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionLabel>Bridgelink Career Consultancy</SectionLabel>
            <h1 className="font-display mt-6 text-5xl font-light leading-[1.1] text-white md:text-6xl lg:text-7xl">
              The next move
              <br />
              should define your
              <br />
              <span className="gold-emphasis">legacy.</span>
            </h1>
            <div className="mt-6 max-w-xl space-y-3 text-base leading-relaxed text-white/80">
              <p>
                Executive Search: discreetly identifying the right opportunity
                before the market has fully recognised it.
              </p>
              <p>
                Board Placement: positioning exceptional leaders for governance
                roles that demand credibility, foresight, and influence.
              </p>
              <p>
                Elite Compensation Negotiation: securing market-leading packages
                with equity, cash, and terms structured around long-term value.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="bg-gold px-7 py-3.5 text-sm font-medium text-navy transition-colors hover:bg-gold/90"
              >
                Book a Confidential Consultation
              </a>
              <a
                href="/services"
                className="border border-white/30 px-7 py-3.5 text-sm font-medium text-white transition-colors hover:border-white/60 hover:bg-white/5"
              >
                Explore Advisory Services
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-px bg-white/10">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="border border-white/10 bg-white/5 p-6 backdrop-blur-sm md:p-8"
              >
                <p className="font-display text-3xl font-light text-white md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs uppercase tracking-widest text-white/70">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <ChevronDown
          size={24}
          className="animate-bounce-subtle text-white/40"
        />
      </div>
    </section>
  );
}
