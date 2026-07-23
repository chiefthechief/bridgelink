import { Hero } from '../components/Hero'
import { ServicesGrid } from '../components/ServicesGrid'
import { Testimonials } from '../components/Testimonials'
import { OpportunitiesSection } from '../components/OpportunitiesSection'
import { AboutSection } from '../components/AboutSection'
import { CTABanner } from '../components/CTABanner'
import { WhyBridgeLinkSection } from '../components/WhyBridgeLinkSection'

export function HomePage() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <ServicesGrid />
      <WhyBridgeLinkSection />
      <Testimonials variant="teaser" />
      <OpportunitiesSection />
      <CTABanner />
    </main>
  );
}

