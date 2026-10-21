import React from 'react';
import { ArrowRight, Phone, ShieldCheck, Clock, CheckCircle2, Home, Building2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';
import { QualificationForm } from './QualificationForm';

interface HeroProps {
  onOpenQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => {
  return (
    <section
      id="hero-section"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#0F1110]"
    >
      {/* 1. Atmospheric Architectural Background Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=2000&q=80"
          alt="AG Joinery & Building Maintenance in Yorkshire"
          className="w-full h-full object-cover object-center opacity-20 filter brightness-75 scale-105"
          referrerPolicy="no-referrer"
          loading="eager"
        />

        {/* 2. Charcoal Overlay with Contrast Weighting */}
        <div className="absolute inset-0 bg-[#0F1110]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F1110]/98 via-[#0F1110]/92 to-[#171918]/65" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F1110] via-transparent to-[#0F1110]" />
        
        {/* Decorative antique gold brand glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#CAA356]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-[#CAA356]/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* 3. Hero Content (Top Layer) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Hero Editorial & Value Props */}
          <div className="lg:col-span-7 space-y-5 lg:space-y-6 pt-1 sm:pt-2">
            
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#CAA356]/40 text-white text-xs sm:text-[13px] font-bold tracking-wide uppercase shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#CAA356] animate-pulse" />
              <span>YORKSHIRE & SURROUNDING REGIONS • SAFECONTRACTOR APPROVED</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[62px] font-extrabold text-white leading-[1.08] tracking-tight font-display drop-shadow-sm">
              Joinery, Building &{' '}
              <span className="text-[#CAA356] block mt-1 sm:inline sm:mt-0">
                Property Maintenance
              </span>
            </h1>

            {/* Supporting line badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-[#171918] border border-[#CAA356]/40 text-sm font-bold text-white shadow-sm">
              <Clock className="w-4 h-4 text-[#CAA356]" />
              <span className="text-[#CAA356]">Domestic & Commercial</span>
              <span className="text-white/40">•</span>
              <span>24-Hour Call-Out</span>
            </div>

            {/* Subheading */}
            <p className="text-base sm:text-lg lg:text-xl text-[#CBD5E1] max-w-2xl font-normal leading-relaxed drop-shadow-xs">
              Professional maintenance, joinery, plumbing and decorating services for domestic and commercial properties across Yorkshire and surrounding regions.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                id="hero-primary-cta"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-[#CAA356] hover:bg-[#B69043] text-[#0F1110] text-base font-extrabold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 cursor-pointer text-center"
              >
                <Phone className="w-5 h-5 text-[#0F1110] fill-current" />
                <span>Call Adrian — {BUSINESS_INFO.phone}</span>
              </a>

              <button
                type="button"
                onClick={onOpenQuote}
                id="hero-secondary-cta"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 text-white text-base font-bold shadow-sm transition-all duration-200 text-center cursor-pointer"
              >
                <span>Request an Enquiry</span>
                <ArrowRight className="w-4 h-4 text-[#CAA356]" />
              </button>
            </div>

            {/* Clear Customer Pathways: Domestic & Commercial */}
            <div className="pt-3">
              <p className="text-xs uppercase font-bold tracking-wider text-[#CAA356] mb-2.5">
                Targeted Services for Homeowners & Businesses:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl">
                {/* Domestic Pathway */}
                <div className="p-3.5 rounded-2xl bg-[#171918]/85 border border-white/10 hover:border-[#CAA356]/40 transition-colors">
                  <div className="flex items-center gap-2 mb-1">
                    <Home className="w-4 h-4 text-[#CAA356]" />
                    <h3 className="text-sm font-bold text-white">Domestic Maintenance</h3>
                  </div>
                  <p className="text-xs text-[#CBD5E1] leading-relaxed">
                    Joinery, plumbing, decorating, building repairs and property maintenance for private residences.
                  </p>
                </div>

                {/* Commercial Pathway */}
                <div className="p-3.5 rounded-2xl bg-[#171918]/85 border border-white/10 hover:border-[#CAA356]/40 transition-colors">
                  <div className="flex items-center gap-2 mb-1">
                    <Building2 className="w-4 h-4 text-[#CAA356]" />
                    <h3 className="text-sm font-bold text-white">Commercial Maintenance</h3>
                  </div>
                  <p className="text-xs text-[#CBD5E1] leading-relaxed">
                    Building maintenance, joinery, reactive repairs and ongoing property support for commercial premises.
                  </p>
                </div>
              </div>
            </div>

            {/* Trust Strip */}
            <div className="pt-2 border-t border-white/15 max-w-xl flex flex-wrap items-center gap-4 text-xs font-semibold text-white/90">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#CAA356]" />
                <span>SafeContractor Approved</span>
              </div>
              <span className="text-white/30">•</span>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#CAA356]" />
                <span>24-Hour Call-Out</span>
              </div>
              <span className="text-white/30">•</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#CAA356]" />
                <span>Yorkshire Wide</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Qualification Form Card */}
          <div className="lg:col-span-5 relative">
            {/* 24-Hour Callout Badge */}
            <div className="absolute -top-5 -right-2 hidden sm:flex items-center gap-2 bg-[#171918]/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-lg border border-[#CAA356]/40 z-20">
              <Clock className="w-3.5 h-3.5 text-[#CAA356] animate-pulse" />
              <span className="text-xs font-bold text-white">24-Hour Call-Out Active</span>
            </div>

            <QualificationForm />

            {/* Quick Contact Card */}
            <div className="mt-4 p-4 rounded-2xl bg-[#171918]/90 border border-white/15 shadow-xl flex items-center justify-between gap-3 text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#CAA356] text-[#0F1110] flex items-center justify-center font-bold shrink-0">
                  <Phone className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <span className="block text-[11px] font-bold uppercase text-[#CAA356]">
                    Immediate Assistance
                  </span>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="text-sm font-extrabold hover:text-[#CAA356] transition-colors"
                  >
                    Call Adrian: {BUSINESS_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="text-right">
                <span className="inline-block text-[10px] bg-white/10 px-2.5 py-1 rounded-md text-white font-medium border border-white/10">
                  SafeContractor
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
