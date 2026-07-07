import { AnimatedSection } from './AnimatedSection'
import { SectionLabel } from './SectionLabel'
import { testimonials } from '../data/content'

export function Testimonials() {
  return (
    <AnimatedSection id="testimonials" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <SectionLabel>Trusted Relationships</SectionLabel>
          <h2 className="font-display mt-4 text-4xl font-light text-navy md:text-5xl">
            Partner &amp; Client Confidence
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-text">
            Sample reflections from the institutional and private clients we are
            privileged to advise. Identifying details withheld at client
            request, consistent with our discretion policy.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <blockquote
              key={testimonial.company}
              className="border border-border bg-white p-8 transition-colors hover:border-gold/40 md:p-10"
            >
              <p className="text-sm leading-relaxed text-navy">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <footer className="mt-8 border-t border-border pt-6">
                <p className="text-sm font-medium text-navy">{testimonial.role}</p>
                <p className="text-xs text-muted-text">{testimonial.company}</p>
              </footer>
            </blockquote>
          ))}
        </div>

        <p className="mt-12 text-center text-xs text-muted-text">
          Client and partner identities, transaction details, and banking
          particulars are disclosed only through verified, direct channels and
          are never published.
        </p>
      </div>
    </AnimatedSection>
  )
}
