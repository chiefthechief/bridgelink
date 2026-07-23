import { Link } from 'react-router-dom'
import { AnimatedSection } from './AnimatedSection'
import { SectionLabel } from './SectionLabel'
import { testimonials } from '../data/content'

interface TestimonialsProps {
  variant?: 'teaser' | 'full'
}

export function Testimonials({ variant = 'full' }: TestimonialsProps) {
  const isTeaser = variant === 'teaser'
  const displayed = isTeaser ? [testimonials[0]] : testimonials

  return (
    <AnimatedSection
      id={isTeaser ? undefined : 'testimonials'}
      className="scroll-mt-28 bg-white py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <SectionLabel>Trusted Relationships</SectionLabel>
          <h2 className="font-display mt-4 text-4xl font-light text-navy md:text-5xl">
            Partner &amp; Client Confidence
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-text">
            {isTeaser
              ? 'One reflection from the institutional and private clients we are privileged to advise. Identifying details withheld at client request, consistent with our discretion policy.'
              : 'Sample reflections from the institutional and private clients we are privileged to advise. Identifying details withheld at client request, consistent with our discretion policy.'}
          </p>
        </div>

        <div
          className={`mt-16 grid gap-6 ${isTeaser ? 'max-w-xl' : 'lg:grid-cols-3'}`}
        >
          {displayed.map((testimonial) => (
            <blockquote
              key={testimonial.company}
              className="border border-border bg-white p-8 transition-colors hover:border-gold/40 md:p-10"
            >
              <p className="text-sm leading-relaxed text-navy">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <footer className="mt-8 border-t border-border pt-6">
                <p className="text-sm font-medium text-navy">
                  {testimonial.role}
                </p>
                <p className="text-xs text-muted-text">{testimonial.company}</p>
              </footer>
            </blockquote>
          ))}
        </div>

        {isTeaser ? (
          <div className="mt-10">
            <Link
              to="/about#testimonials"
              className="inline-flex text-sm font-medium text-gold transition-colors hover:text-navy"
            >
              Read more client stories →
            </Link>
          </div>
        ) : (
          <p className="mt-12 text-center text-xs text-muted-text">
            Client and partner identities, transaction details, and banking
            particulars are disclosed only through verified, direct channels and
            are never published.
          </p>
        )}
      </div>
    </AnimatedSection>
  )
}
