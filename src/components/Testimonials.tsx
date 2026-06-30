import { Star } from 'lucide-react'
import { AnimatedSection } from './AnimatedSection'
import { SectionLabel } from './SectionLabel'
import { useInView } from '../hooks/useInView'

const testimonials = [
  {
    quote:
      'Bridgelink understood exactly what I needed at a pivotal moment in my career. Within twelve weeks, I had three offers from tier-one firms — and negotiated a package 22% above my initial expectation.',
    name: 'Catherine Whitfield',
    role: 'Partner',
    company: 'Clifford Chance',
    avatar:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop&auto=format',
  },
  {
    quote:
      'The interview preparation was exceptional. Every session was tailored to the specific competency frameworks used by the banks I was targeting. I felt genuinely prepared, not rehearsed.',
    name: 'James Okonkwo',
    role: 'Director of Strategy',
    company: 'Barclays',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&auto=format',
  },
  {
    quote:
      'After fifteen years in consulting, I wanted a board advisory role without compromising on compensation. Bridgelink\'s network and negotiation support made that transition seamless and entirely confidential.',
    name: 'Eleanor Marsh',
    role: 'Non-Executive Director',
    company: 'FTSE 100 Financial Services',
    avatar:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&auto=format',
  },
]

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
