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
          <SectionLabel>Ready to Engage</SectionLabel>
          <span className="h-px w-12 bg-gold" />
        </div>

        <h2 className="font-display mt-8 text-4xl font-light leading-tight text-white md:text-5xl lg:text-6xl">
          Every successful partnership begins
          <br />
          with a conversation.
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-white/60">
          Whether you’re seeking strategic advisory services, exploring
          investment opportunities, or looking for a trusted partner to support
          your organization, our team is ready to discuss your objectives and
          recommend practical solutions tailored to your needs.
        </p>
        <a
          href="/contact"
          className="mt-10 inline-block bg-gold px-8 py-4 text-sm font-medium text-navy transition-colors hover:bg-gold/90"
        >
          Request a Consultation
        </a>
      </div>
    </AnimatedSection>
  );
}
