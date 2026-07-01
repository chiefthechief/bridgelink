import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PageShell } from './components/PageShell'
import { ScrollToTop } from './components/ScrollToTop'
import { HomePage } from './pages/HomePage'
import { ServicesPage } from './pages/ServicesPage'
import { ServiceDetailPage } from './pages/ServiceDetailPage'
import { ProcessPage } from './pages/ProcessPage'
import { StoriesPage } from './pages/StoriesPage'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <PageShell>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/stories" element={<StoriesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </PageShell>
    </BrowserRouter>
  )
}

export default App
