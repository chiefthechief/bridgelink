import { Star } from 'lucide-react'
import { AnimatedSection } from './AnimatedSection'
import { SectionLabel } from './SectionLabel'
import { useInView } from '../hooks/useInView'

const testimonials = [
  {
    quote:
      "Bridgelink mapped the market before I had even decided to move. Their discretion and precision gave me access to roles that were never public and helped me secure a package uplift that exceeded the board’s expectations.",
    name: "Confidential Executive",
    role: "Chief Financial Officer",
    company: "Global FinTech Group",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop&auto=format",
  },
  {
    quote:
      "What stood out was the quality of the market intelligence. Every conversation felt deliberate, and every recommendation was calibrated to my leadership profile rather than a generic search brief.",
    name: "Confidential Executive",
    role: "Vice President",
    company: "Private Equity Portfolio Company",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&auto=format",
  },
  {
    quote:
      "Their network is exceptional, but the real value was the calm, high-level counsel around negotiation. I walked into the final conversation with clarity, leverage, and a package that truly reflected my contribution.",
    name: "Confidential Executive",
    role: "Managing Director",
    company: "International Advisory Firm",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&auto=format",
  },
];

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonials)[0]
  index: number
}) {
  const { ref, isInView } = useInView<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`group border border-border bg-white p-8 transition-colors hover:border-gold/40 md:p-10 fade-in-view ${isInView ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={14}
            className="fill-gold text-gold"
            strokeWidth={0}
          />
        ))}
      </div>
      <blockquote className="mt-6 text-sm leading-relaxed text-navy">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <div className="mt-8 border-t border-border pt-6">
        <div className="flex items-center gap-4">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="h-12 w-12 object-cover"
          />
          <div>
            <p className="text-sm font-medium text-navy">{testimonial.name}</p>
            <p className="text-xs text-muted-text">
              {testimonial.role}, {testimonial.company}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Testimonials() {
  return (
    <AnimatedSection id="testimonials" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <SectionLabel>Success Stories</SectionLabel>
          <h2 className="font-display mt-4 text-4xl font-light text-navy md:text-5xl">
            Outcomes that speak for themselves.
          </h2>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              index={i}
            />
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
