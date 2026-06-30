import { Navigation } from './components/Navigation'
import { Hero } from './components/Hero'
import { ClientMarquee } from './components/ClientMarquee'
import { ServicesGrid } from './components/ServicesGrid'
import { StatsBand } from './components/StatsBand'
import { ProcessSection } from './components/ProcessSection'
import { Testimonials } from './components/Testimonials'
import { AboutSection } from './components/AboutSection'
import { CTABanner } from './components/CTABanner'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <ClientMarquee />
        <ServicesGrid />
        <StatsBand />
        <ProcessSection />
        <Testimonials />
        <AboutSection />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
