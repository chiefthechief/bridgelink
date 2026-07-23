import { AnimatedSection } from './AnimatedSection'
import { SectionLabel } from './SectionLabel'

export function CTABanner() {
  return (
    <AnimatedSection className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />

      <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
        <div className="flex items-center justify-center gap-4">
          <span className="h-px w-12 bg-gold" />
          <SectionLabel>Ready to Engage</SectionLabel>
          <span className="h-px w-12 bg-gold" />
        </div>

        <h2 className="font-display mt-8 text-4xl font-light leading-tight text-navy md:text-5xl lg:text-6xl">
          Every successful partnership begins
          <br />
          with a conversation.
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-navy/60">
          Whether you're seeking strategic advisory services, exploring
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
