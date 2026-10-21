import React, { useState, useEffect } from 'react';
import { Phone, ArrowRight, Menu, X, ShieldCheck, Clock, ChevronDown, Mail } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';

interface HeaderProps {
  onOpenQuote: (service?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const serviceLinks = [
    { name: 'Joinery', href: '#joinery', desc: 'Repairs, installations & general joinery' },
    { name: 'Building Services', href: '#building-services', desc: 'General building & minor repairs' },
    { name: 'Plumbing', href: '#plumbing', desc: 'Plumbing repairs & maintenance' },
    { name: 'Decorating', href: '#decorating', desc: 'Interior decorating & finishing' },
    { name: 'Property Maintenance', href: '#property-maintenance', desc: 'Planned & reactive maintenance' },
    { name: 'Commercial Maintenance', href: '#commercial-maintenance', desc: 'Facility & business property care' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-2.5 border-b border-[#171918]/10'
          : 'bg-[#0F1110]/90 backdrop-blur-md py-3.5 border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Mini Utility Strip */}
        <div className="hidden lg:flex items-center justify-between pb-2 mb-2 border-b border-white/10 text-xs">
          <div className="flex items-center gap-4 text-white/80">
            <span className="flex items-center gap-1.5 font-bold text-[#CAA356]">
              <Clock className="w-3.5 h-3.5 animate-pulse" />
              <span>24-Hour Call-Out Service</span>
            </span>
            <span className="text-white/30">•</span>
            <span>Domestic & Commercial • Yorkshire & Surrounding Regions</span>
            <span className="text-white/30">•</span>
            <span className="inline-flex items-center gap-1 text-white font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-[#CAA356]" />
              <span>SafeContractor Approved</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`mailto:${BUSINESS_INFO.email}`}
              className="text-white/80 hover:text-[#CAA356] transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5 text-[#CAA356]" />
              <span>{BUSINESS_INFO.email}</span>
            </a>
            <span className="text-white/30">•</span>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="text-[#CAA356] font-bold hover:underline flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Direct: {BUSINESS_INFO.phone} (Adrian)</span>
            </a>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero-section"
            id="header-logo"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#CAA356] rounded-lg p-1"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full p-0.5 bg-gradient-to-br from-[#CAA356] via-[#E2C37E] to-[#9E7A32] shadow-md shrink-0 flex items-center justify-center">
              <div className="w-full h-full rounded-full overflow-hidden bg-[#171918] flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="AG Joinery & Building Maintenance Logo"
                  className="w-full h-full object-cover rounded-full"
                  loading="eager"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://i.postimg.cc/yNHqDv6X/1769634591180.jpg';
                    (e.target as HTMLImageElement).style.clipPath = 'circle(48.5% at 50% 50%)';
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span
                className={`text-base sm:text-xl font-extrabold tracking-tight leading-none font-display ${
                  isScrolled ? 'text-[#171918]' : 'text-white'
                }`}
              >
                AG <span className="text-[#CAA356]">JOINERY</span>{' '}
                <span className="text-xs sm:text-sm font-semibold opacity-90">& BUILDING MAINTENANCE</span>
              </span>
              <span
                className={`text-[9px] sm:text-[10px] tracking-wider uppercase font-bold mt-1 ${
                  isScrolled ? 'text-[#686E6A]' : 'text-[#CAA356]'
                }`}
              >
                DOMESTIC & COMMERCIAL • 24-HOUR CALL-OUT
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6" id="desktop-nav">
            <a
              href="#hero-section"
              className={`text-sm font-semibold transition-colors hover:text-[#CAA356] ${
                isScrolled ? 'text-[#171918]' : 'text-white/90'
              }`}
            >
              Home
            </a>

            <a
              href="#story"
              className={`text-sm font-semibold transition-colors hover:text-[#CAA356] ${
                isScrolled ? 'text-[#171918]' : 'text-white/90'
              }`}
            >
              About Us
            </a>

            {/* Services Dropdown */}
            <div className="relative group" onMouseLeave={() => setServicesDropdownOpen(false)}>
              <button
                type="button"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                className={`flex items-center gap-1 text-sm font-semibold transition-colors hover:text-[#CAA356] py-1 cursor-pointer ${
                  isScrolled ? 'text-[#171918]' : 'text-white/90'
                }`}
              >
                <span>Services</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {servicesDropdownOpen && (
                <div
                  className="absolute top-full left-0 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 p-2.5 mt-1 animate-in fade-in zoom-in-95 duration-150 z-50 text-[#171918]"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                >
                  <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#CAA356] border-b border-gray-100">
                    Trade Categories
                  </div>
                  {serviceLinks.map((s) => (
                    <a
                      key={s.name}
                      href={s.href}
                      onClick={() => setServicesDropdownOpen(false)}
                      className="block px-3 py-2 rounded-xl hover:bg-[#FAFBF8] hover:text-[#CAA356] transition-colors"
                    >
                      <span className="block font-bold text-xs">{s.name}</span>
                      <span className="block text-[11px] text-[#686E6A]">{s.desc}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#commercial-maintenance"
              className={`text-sm font-semibold transition-colors hover:text-[#CAA356] ${
                isScrolled ? 'text-[#171918]' : 'text-white/90'
              }`}
            >
              Commercial
            </a>

            <a
              href="#contact"
              className={`text-sm font-semibold transition-colors hover:text-[#CAA356] ${
                isScrolled ? 'text-[#171918]' : 'text-white/90'
              }`}
            >
              Contact
            </a>
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Phone Button */}
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              id="header-call-btn"
              className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-[#CAA356]/20 border border-[#CAA356]/40 transition-colors"
            >
              <div className="w-7 h-7 rounded-lg bg-[#CAA356] text-[#0F1110] flex items-center justify-center font-bold">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <div className="text-left">
                <span className={`block text-[10px] font-bold uppercase leading-none ${
                  isScrolled ? 'text-[#686E6A]' : 'text-white/70'
                }`}>
                  Call Adrian 24/7
                </span>
                <span className={`text-xs sm:text-sm font-extrabold ${
                  isScrolled ? 'text-[#171918]' : 'text-white'
                }`}>
                  {BUSINESS_INFO.phone}
                </span>
              </div>
            </a>

            {/* Enquiry Button */}
            <button
              id="header-enquiry-btn"
              onClick={() => onOpenQuote()}
              className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#CAA356] hover:bg-[#B69043] text-[#0F1110] text-xs sm:text-sm font-extrabold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
            >
              <span>Enquire</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#0F1110] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu & Quick Call Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              aria-label="Call Adrian"
              className="p-2 rounded-xl bg-[#CAA356] text-[#0F1110] shadow-sm flex items-center gap-1 font-bold text-xs"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call</span>
            </a>
            <button
              id="mobile-menu-toggle"
              aria-label="Toggle Navigation Menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white/10 border border-white/20 text-white shadow-sm hover:bg-white/20 transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden bg-[#0F1110]/98 backdrop-blur-xl border-b border-white/15 px-6 py-6 space-y-4 shadow-2xl animate-in slide-in-from-top-4 duration-200 text-white max-h-[85vh] overflow-y-auto"
        >
          <div className="flex flex-col gap-1.5 p-3 rounded-2xl bg-white/5 border border-[#CAA356]/30 text-xs">
            <div className="flex items-center gap-2 text-[#CAA356] font-bold">
              <Clock className="w-4 h-4" />
              <span>24-Hour Call-Out Service Advertised</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <ShieldCheck className="w-4 h-4 text-[#CAA356]" />
              <span>SafeContractor Approved • Domestic & Commercial</span>
            </div>
          </div>

          {/* Phone highlight */}
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="w-full flex items-center justify-between p-3.5 rounded-xl bg-[#CAA356] text-[#0F1110] font-extrabold text-sm shadow-lg"
          >
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>Call Adrian: {BUSINESS_INFO.phone}</span>
            </div>
            <span className="text-[11px] bg-[#0F1110] text-[#CAA356] px-2 py-0.5 rounded-md uppercase font-bold">
              24/7
            </span>
          </a>

          <div className="flex flex-col space-y-2 pt-2 text-sm font-semibold">
            <a
              href="#hero-section"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 border-b border-white/10 hover:text-[#CAA356]"
            >
              Home
            </a>
            <a
              href="#story"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 border-b border-white/10 hover:text-[#CAA356]"
            >
              About Us
            </a>

            <div className="py-1 text-xs text-[#CAA356] uppercase tracking-wider font-bold">Services:</div>
            {serviceLinks.map((s) => (
              <a
                key={s.name}
                href={s.href}
                onClick={() => setMobileMenuOpen(false)}
                className="pl-3 py-1 text-white/80 hover:text-[#CAA356] border-l-2 border-[#CAA356]/40"
              >
                {s.name}
              </a>
            ))}

            <a
              href="#commercial-maintenance"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 border-b border-white/10 hover:text-[#CAA356] pt-2"
            >
              Commercial Maintenance
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 border-b border-white/10 hover:text-[#CAA356]"
            >
              Contact
            </a>
          </div>

          <div className="pt-2 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/10 border border-white/20 text-white font-bold text-sm hover:bg-white/15 cursor-pointer"
            >
              <span>Request an Enquiry</span>
              <ArrowRight className="w-4 h-4 text-[#CAA356]" />
            </button>
            <a
              href={`mailto:${BUSINESS_INFO.email}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs text-white/80 hover:text-white"
            >
              <Mail className="w-3.5 h-3.5 text-[#CAA356]" />
              <span>{BUSINESS_INFO.email}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
