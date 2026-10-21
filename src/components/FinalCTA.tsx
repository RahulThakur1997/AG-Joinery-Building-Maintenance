import React from 'react';
import { ArrowRight, Sparkles, Phone, Mail, Clock, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';

interface FinalCTAProps {
  onOpenQuote: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenQuote }) => {
  return (
    <section id="final-cta" className="relative py-28 sm:py-36 overflow-hidden bg-[#0F1110] text-white">
      {/* Background Architectural Image */}
      <img
        src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1800&q=80"
        alt="AG Joinery & Building Maintenance in Yorkshire"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-20 filter brightness-90"
        referrerPolicy="no-referrer"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F1110] via-[#171918]/90 to-[#0F1110]/95" />

      {/* Decorative radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#CAA356]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-[#CAA356]/40 text-[#CAA356] text-xs font-bold tracking-wide uppercase">
          <Clock className="w-3.5 h-3.5 animate-pulse" />
          <span>24-HOUR CALL-OUT • DOMESTIC & COMMERCIAL • YORKSHIRE</span>
        </div>

        {/* Big Bold Headline */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight font-display leading-[1.12]">
          Need Help With Maintenance or Repairs?{' '}
          <span className="text-[#CAA356] block mt-1 sm:inline sm:mt-0">
            Call Adrian Directly.
          </span>
        </h2>

        {/* Subheading */}
        <p className="text-xl sm:text-2xl font-medium text-white/90 font-display">
          Joinery, Building, Plumbing, Decorating & Property Maintenance
        </p>

        {/* Supporting copy */}
        <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
          Professional maintenance services for homeowners and commercial businesses across Yorkshire and surrounding regions. SafeContractor Approved.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            id="final-cta-primary-phone"
            className="w-full sm:w-auto group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-[#CAA356] hover:bg-[#B69043] text-[#0F1110] text-base font-extrabold shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
          >
            <Phone className="w-5 h-5 fill-current" />
            <span>Call Adrian — {BUSINESS_INFO.phone}</span>
          </a>

          <button
            onClick={onOpenQuote}
            id="final-cta-enquiry-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/25 text-white text-base font-bold backdrop-blur-md transition-all duration-200 cursor-pointer"
          >
            <Mail className="w-4 h-4 text-[#CAA356]" />
            <span>Request an Enquiry</span>
          </button>
        </div>

        {/* Bottom Commercial & Domestic Assurance Pill */}
        <div className="pt-6">
          <div className="inline-flex flex-wrap items-center justify-center gap-4 px-6 py-2.5 rounded-full bg-black/40 border border-white/10 text-xs font-semibold text-white/80">
            <span className="text-[#CAA356] font-bold">24-Hour Call-Out Service</span>
            <span className="hidden sm:inline text-white/30">•</span>
            <span>Domestic & Commercial</span>
            <span className="hidden sm:inline text-white/30">•</span>
            <span>SafeContractor Approved</span>
            <span className="hidden sm:inline text-white/30">•</span>
            <a href={`mailto:${BUSINESS_INFO.email}`} className="text-white hover:underline">
              {BUSINESS_INFO.email}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
