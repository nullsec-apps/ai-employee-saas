import { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { ErrorBoundary } from './components/ErrorBoundary'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import AIEmployeeCatalog from './components/AIEmployeeCatalog'
import CapabilityDemo from './components/CapabilityDemo'
import HowItWorks from './components/HowItWorks'
import StatsBand from './components/StatsBand'
import IntegrationsMarquee from './components/IntegrationsMarquee'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import EmployeeDetailDialog from './components/EmployeeDetailDialog'
import { Employee } from './lib/employees'

export default function App() {
  const [selected, setSelected] = useState<Employee | null>(null)
  return (
    <ErrorBoundary>
      <div className="min-h-screen overflow-x-hidden bg-[#0A0A0F]">
        <Toaster position="bottom-right" toastOptions={{ style: { background: '#15131f', color: '#EDEDF2', border: '1px solid rgba(255,255,255,0.1)' } }} />
        <Navbar />
        <main>
          <Hero />
          <TrustBar />
          <AIEmployeeCatalog onSelect={setSelected} />
          <CapabilityDemo />
          <HowItWorks />
          <StatsBand />
          <IntegrationsMarquee />
          <Pricing />
          <Testimonials />
          <FAQ />
          <CTASection />
        </main>
        <Footer />
        <EmployeeDetailDialog employee={selected} onClose={() => setSelected(null)} />
      </div>
    </ErrorBoundary>
  )
}