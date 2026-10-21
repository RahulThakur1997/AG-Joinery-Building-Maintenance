import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { Services } from './components/Services';
import { ReedMowStandard } from './components/ReedMowStandard';
import { ComparisonTable } from './components/ComparisonTable';
import { DetailsSection } from './components/DetailsSection';
import { Projects } from './components/Projects';
import { Reviews } from './components/Reviews';
import { FounderStory } from './components/FounderStory';
import { FAQ } from './components/FAQ';
import { ContactSection } from './components/ContactSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { QualificationModal } from './components/QualificationModal';
import { Phone, ArrowRight, Clock } from 'lucide-react';
import { BUSINESS_INFO } from './data/mockData';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalService, setModalService] = useState<string | undefined>(undefined);

  const handleOpenQuote = (service?: string) => {
    setModalService(service);
    setModalOpen(true);
  };

  const handleSelectService = (serviceName: string) => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const rect = contactSection.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    handleOpenQuote(serviceName);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F7F2] selection:bg-[#CAA356]/30 selection:text-[#171918]">
      {/* Main Header */}
      <Header onOpenQuote={handleOpenQuote} />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenQuote={handleOpenQuote} />

        {/* 2. Trust Bar */}
        <TrustBar />

        {/* 3. Services Section with Domestic & Commercial Pathways */}
        <Services onSelectService={handleSelectService} />

        {/* 4. The AG Contractor Standard (SafeContractor Approved) */}
        <ReedMowStandard onOpenQuote={handleOpenQuote} />

        {/* 5. Why AG / Comparison Table */}
        <ComparisonTable onOpenQuote={handleOpenQuote} />

        {/* 6. The Details Matter Section */}
        <DetailsSection />

        {/* 7. Projects & Before/After Slider */}
        <Projects onOpenQuote={handleOpenQuote} />

        {/* 8. Domestic & Commercial Reviews */}
        <Reviews />

        {/* 9. Founder Story - Adrian */}
        <FounderStory onOpenQuote={handleOpenQuote} />

        {/* 10. FAQ Section */}
        <FAQ />

        {/* 11. Dedicated Highly Visible Contact Section */}
        <ContactSection />

        {/* 12. Final CTA Banner */}
        <FinalCTA onOpenQuote={handleOpenQuote} />
      </main>

      {/* Footer */}
      <Footer onSelectService={handleSelectService} />

      {/* Interactive Modal Quote Form */}
      <QualificationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialService={modalService}
      />

      {/* Floating Mobile Sticky Quick-Action Bar with Click-to-Call */}
      <div className="md:hidden fixed bottom-3 left-3 right-3 z-40 bg-[#0F1110]/95 backdrop-blur-lg p-2 rounded-2xl shadow-2xl border border-white/20 flex items-center gap-2">
        <a
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          id="mobile-sticky-call-btn"
          className="flex-1 flex items-center justify-center gap-2 py-3 px-2 rounded-xl bg-[#CAA356] hover:bg-[#B69043] text-[#0F1110] text-xs font-black shadow-md"
        >
          <Phone className="w-4 h-4 fill-current shrink-0" />
          <span className="truncate">Call Adrian: {BUSINESS_INFO.phone}</span>
        </a>
        <button
          onClick={() => handleOpenQuote()}
          id="mobile-sticky-enquiry-btn"
          className="flex-1 flex items-center justify-center gap-1.5 py-3 px-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold cursor-pointer"
        >
          <Clock className="w-3.5 h-3.5 text-[#CAA356] shrink-0" />
          <span className="truncate">24/7 Enquiry</span>
          <ArrowRight className="w-3 h-3 text-[#CAA356] shrink-0" />
        </button>
      </div>
    </div>
  );
}
