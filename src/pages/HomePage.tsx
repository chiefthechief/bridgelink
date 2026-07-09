import { Hero } from '../components/Hero'
import { ServicesGrid } from '../components/ServicesGrid'

import { ProcessSection } from '../components/ProcessSection'
import { OpportunitiesSection } from "../components/OpportunitiesSection";
import { Testimonials } from "../components/Testimonials";
import { AboutSection } from "../components/AboutSection";
import { CTABanner } from "../components/CTABanner";
import { Contact } from "../components/Contact";
import { WhyBridgeLinkSection } from "../components/WhyBridgeLinkSection";

export function HomePage() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <ServicesGrid />
      {/* Why BridgeLink section (request) */}
      <WhyBridgeLinkSection />
      {/* StatsBand removed per request */}
      <ProcessSection />

      <Testimonials />
      <OpportunitiesSection />
      <CTABanner />
      <Contact />
    </main>
  );
}
