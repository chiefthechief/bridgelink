import { ChevronDown } from 'lucide-react'
import { SectionLabel } from './SectionLabel'

const stats = [
  { value: '94%', label: 'Placement rate' },
  { value: '3200+', label: 'Careers advanced' },
  { value: '400+', label: 'Partner firms' },
  { value: '17yrs', label: 'Industry experience' },
]

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col bg-navy">
      <div className="absolute inset-x-0 top-0 h-px bg-gold" />

      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop&auto=format)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/80 to-transparent" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 pb-24 pt-32 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionLabel>Career Consultancy</SectionLabel>
            <h1 className="font-display mt-6 text-5xl font-light leading-[1.1] text-white md:text-6xl lg:text-7xl">
              Your next role
              <br />
              <span className="gold-emphasis">deserves</span> the
              <br />
              right strategy.
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/60">
              Bridgelink partners with senior professionals and rising executives
              to navigate career transitions with precision, discretion, and
              measurable outcomes.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="bg-gold px-7 py-3.5 text-sm font-medium text-navy transition-colors hover:bg-gold/90"
              >
                Start Your Journey
              </a>
              <a
                href="#services"
                className="border border-white/30 px-7 py-3.5 text-sm font-medium text-white transition-colors hover:border-white/60 hover:bg-white/5"
              >
                Explore Services
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
                <p className="mt-2 text-xs uppercase tracking-widest text-white/50">
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
  )
}
