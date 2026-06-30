import { Award, Building2, TrendingUp, Users } from 'lucide-react'
import { AnimatedSection } from './AnimatedSection'
import { useInView } from '../hooks/useInView'

const stats = [
  { icon: TrendingUp, value: '94%', label: 'Placement rate' },
  { icon: Users, value: '3200+', label: 'Careers advanced' },
  { icon: Building2, value: '400+', label: 'Partner firms' },
  { icon: Award, value: '17yrs', label: 'Industry experience' },
]

function StatItem({
  stat,
  index,
}: {
  stat: (typeof stats)[0]
  index: number
}) {
  const { ref, isInView } = useInView<HTMLDivElement>()
  const Icon = stat.icon

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center bg-navy px-6 py-12 text-center fade-in-view ${isInView ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Icon size={24} className="text-gold" strokeWidth={1.5} />
      <p className="font-display mt-4 text-4xl font-light text-white md:text-5xl">
        {stat.value}
      </p>
      <p className="mt-2 text-xs uppercase tracking-widest text-white/50">
        {stat.label}
      </p>
    </div>
  )
}

export function StatsBand() {
  return (
    <AnimatedSection className="bg-navy">
      <div className="grid gap-px bg-white/10 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <StatItem key={stat.label} stat={stat} index={i} />
        ))}
      </div>
    </AnimatedSection>
  )
}
