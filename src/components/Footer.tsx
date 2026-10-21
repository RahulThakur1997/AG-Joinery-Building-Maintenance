import React from 'react';
import { Phone, Mail, MapPin, ArrowUp, ShieldCheck, Clock, Instagram, ArrowRight } from 'lucide-react';
import { SERVICES, SERVICE_AREAS, BUSINESS_INFO } from '../data/mockData';

interface FooterProps {
  onSelectService: (serviceName: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectService }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0F1110] text-white pt-20 pb-12 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Row with Logo & Quick Contact Actions */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-14 border-b border-white/10">
          <div className="space-y-3">
            {/* Logo */}
            <div className="flex items-center gap-3.5">
              <div className="relative w-11 h-11 rounded-full p-0.5 bg-gradient-to-br from-[#CAA356] via-[#E2C37E] to-[#9E7A32] shadow-md shrink-0 flex items-center justify-center">
                <div className="w-full h-full rounded-full overflow-hidden bg-[#171918] flex items-center justify-center">
                  <img
                    src="/logo.png"
                    alt="AG Joinery & Building Maintenance Logo"
                    className="w-full h-full object-cover rounded-full"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://i.postimg.cc/yNHqDv6X/1769634591180.jpg';
                      (e.target as HTMLImageElement).style.clipPath = 'circle(48.5% at 50% 50%)';
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-white font-display">
                  AG <span className="text-[#CAA356]">JOINERY</span>{' '}
                  <span className="text-sm sm:text-base font-bold text-white/90">& BUILDING MAINTENANCE</span>
                </span>
                <span className="text-[10px] tracking-wider uppercase font-bold text-[#CAA356] mt-0.5">
                  DOMESTIC & COMMERCIAL • 24-HOUR CALL-OUT • YORKSHIRE
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-400 font-medium max-w-xl font-display">
              Joinery, building services, plumbing, decorating, and property maintenance for domestic and commercial properties across Yorkshire and surrounding regions. SafeContractor Approved.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#CAA356] hover:bg-[#B69043] text-[#0F1110] font-extrabold text-sm shadow-md transition-colors"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
            <a
              href={`mailto:${BUSINESS_INFO.email}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm border border-white/10 transition-colors"
            >
              <Mail className="w-4 h-4 text-[#CAA356]" />
              <span>{BUSINESS_INFO.email}</span>
            </a>
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top of page"
              className="w-11 h-11 rounded-xl bg-white/5 hover:bg-white/10 text-white/70 hover:text-white flex items-center justify-center border border-white/10 transition-colors cursor-pointer"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 4 Main Link Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-14 border-b border-white/10 text-sm">
          
          {/* Column 1: Core Services */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-4 text-[#CAA356]">
              Trade Services
            </h4>
            <ul className="space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => onSelectService(s.name)}
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer text-left text-xs sm:text-sm"
                  >
                    {s.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Regional Coverage */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-4 text-[#CAA356]">
              Service Coverage
            </h4>
            <ul className="space-y-2.5 text-gray-400 text-xs sm:text-sm">
              {SERVICE_AREAS.map((area) => (
                <li key={area.name} className="flex items-center justify-between">
                  <span>{area.name}</span>
                  <span className="text-[10px] bg-white/5 px-2 py-0.5 rounded text-[#CAA356] border border-white/5">
                    {area.tag}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company & Standards */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-4 text-[#CAA356]">
              Company & Accreditations
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#hero-section" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#story" className="text-gray-400 hover:text-white transition-colors">
                  About Adrian
                </a>
              </li>
              <li>
                <a href="#customer-pathways" className="text-gray-400 hover:text-white transition-colors">
                  Domestic Maintenance
                </a>
              </li>
              <li>
                <a href="#commercial-maintenance" className="text-gray-400 hover:text-white transition-colors">
                  Commercial Maintenance
                </a>
              </li>
              <li>
                <a href="#the-standard" className="text-gray-400 hover:text-white transition-colors">
                  SafeContractor Approved
                </a>
              </li>
              <li>
                <a href="#why-ag" className="text-gray-400 hover:text-white transition-colors">
                  Why Choose AG Joinery
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-white transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className="space-y-4">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-4 text-[#CAA356]">
              Contact Adrian
            </h4>
            
            <div className="space-y-2.5 text-gray-300 text-xs sm:text-sm">
              <p className="font-bold text-white text-base">AG Joinery & Building Maintenance</p>
              <p className="text-xs text-[#CAA356] font-semibold">Main Contact: Adrian</p>
              
              <div className="pt-2 space-y-2 text-xs">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-center gap-2 text-white hover:text-[#CAA356] transition-colors font-bold text-sm"
                >
                  <Phone className="w-3.5 h-3.5 text-[#CAA356]" />
                  <span>{BUSINESS_INFO.phone}</span>
                </a>
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="flex items-center gap-2 text-gray-300 hover:text-[#CAA356] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#CAA356]" />
                  <span>{BUSINESS_INFO.email}</span>
                </a>
                <div className="flex items-center gap-2 text-gray-400">
                  <Clock className="w-3.5 h-3.5 text-[#CAA356]" />
                  <span>24-Hour Call-Out Service</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <MapPin className="w-3.5 h-3.5 text-[#CAA356]" />
                  <span>Yorkshire and surrounding regions</span>
                </div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-gray-300 flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-[#CAA356] shrink-0" />
              <span>SafeContractor Approved Accreditation</span>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© 2026 AG Joinery & Building Maintenance. SafeContractor Approved. Yorkshire, UK.</p>
          <div className="flex items-center gap-6">
            <a href="#the-standard" className="hover:text-white transition-colors">SafeContractor Standards</a>
            <a href="#services" className="hover:text-white transition-colors">Service Scope</a>
            <a href="#contact" className="hover:text-white transition-colors">Emergency Call-Out</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
