import { type ReactNode } from 'react'
import { useInView } from '../hooks/useInView'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  id?: string
  delay?: number
}

export function AnimatedSection({
  children,
  className = '',
  id,
  delay = 0,
}: AnimatedSectionProps) {
  const { ref, isInView } = useInView<HTMLElement>()

  return (
    <section
      id={id}
      ref={ref}
      className={`fade-in-view ${isInView ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </section>
  )
}
