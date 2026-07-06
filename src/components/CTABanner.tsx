import { AnimatedSection } from './AnimatedSection'
import { SectionLabel } from './SectionLabel'

export function CTABanner() {
  return (
    <AnimatedSection className="relative overflow-hidden bg-navy py-24 lg:py-32">
      <div
        className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-white/5"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-white/5"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
        <div className="flex items-center justify-center gap-4">
          <span className="h-px w-12 bg-gold" />
          <SectionLabel>Begin Today</SectionLabel>
          <span className="h-px w-12 bg-gold" />
        </div>

        <h2 className="font-display mt-8 text-4xl font-light leading-tight text-white md:text-5xl lg:text-6xl">
          Your next chapter deserves
          <br />a more considered introduction.
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-white/60">
          Schedule a confidential consultation with a Bridgelink partner and
          discuss the next role, board appointment, or compensation strategy
          that deserves your full attention.
        </p>
        <a
          href="/contact"
          className="mt-10 inline-block bg-gold px-8 py-4 text-sm font-medium text-navy transition-colors hover:bg-gold/90"
        >
          Book a Confidential Consultation
        </a>
      </div>
    </AnimatedSection>
  );
}
