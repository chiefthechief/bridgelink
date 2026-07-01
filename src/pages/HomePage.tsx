import { Hero } from '../components/Hero'
import { ServicesGrid } from '../components/ServicesGrid'
import { StatsBand } from '../components/StatsBand'
import { ProcessSection } from '../components/ProcessSection'
import { Testimonials } from '../components/Testimonials'
import { AboutSection } from '../components/AboutSection'
import { CTABanner } from '../components/CTABanner'
import { Contact } from '../components/Contact'

export function HomePage() {
  return (
    <main>
      <Hero />
      <ServicesGrid />
      <StatsBand />
      <ProcessSection />
      <Testimonials />
      <AboutSection />
      <CTABanner />
      <Contact />
    </main>
  )
}
