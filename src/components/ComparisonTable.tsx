import React from 'react';
import { X, ShieldAlert, Sparkles, CheckCircle2, ShieldCheck, Phone, ArrowRight } from 'lucide-react';
import { COMPARISON_DATA, BUSINESS_INFO } from '../data/mockData';

interface ComparisonTableProps {
  onOpenQuote: () => void;
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({ onOpenQuote }) => {
  return (
    <section
      id="why-ag"
      className="py-24 sm:py-32 bg-[#171918] text-white relative overflow-hidden"
    >
      {/* Background glow textures */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#CAA356]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/60 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#CAA356]/40 text-[#CAA356] text-xs font-bold tracking-wide uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>WHY CHOOSE AG JOINERY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display">
            The Contractor Advantage.{' '}
            <span className="text-[#CAA356] block sm:inline">Domestic & Commercial Reliability.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
            SafeContractor Approved, 24-hour emergency response, and comprehensive multi-trade capability under one accountable contractor.
          </p>
        </div>

        {/* 3-Column Comparison Grid Table */}
        <div className="overflow-x-auto pb-4">
          <div className="min-w-[760px] lg:min-w-full">
            
            {/* Table Header Row */}
            <div className="grid grid-cols-12 gap-4 items-end mb-4 px-4">
              <div className="col-span-3 text-sm font-semibold text-white/60 uppercase tracking-wider">
                Comparison Factor
              </div>

              {/* Standard Tradesperson */}
              <div className="col-span-3 bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
                <span className="text-xs uppercase tracking-wider font-semibold text-white/60 block">Typical Handyman</span>
                <h3 className="text-lg font-bold text-white mt-1">Standard Tradesperson</h3>
                <span className="text-xs text-white/60">Limited hours & single trade</span>
              </div>

              {/* AG Dominant Center Column Header */}
              <div className="col-span-3 bg-white text-[#171918] rounded-2xl p-5 text-center shadow-2xl relative border-2 border-[#CAA356] -translate-y-2">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#CAA356] text-[#0F1110] text-[11px] font-extrabold uppercase tracking-wider px-3 py-0.5 rounded-full shadow-md">
                  SafeContractor Approved
                </div>
                <div className="flex items-center justify-center gap-1.5 mt-1">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#171918] font-display">
                    AG <span className="text-[#CAA356]">JOINERY</span>
                  </h3>
                </div>
                <span className="text-xs font-semibold text-[#171918]/80 block mt-0.5">Domestic & Commercial • 24/7</span>
              </div>

              {/* National Chain Column Header */}
              <div className="col-span-3 bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
                <span className="text-xs uppercase tracking-wider font-semibold text-white/60 block">Corporate Conglomerate</span>
                <h3 className="text-lg font-bold text-white mt-1">National FM Helpdesk</h3>
                <span className="text-xs text-white/60">Impersonal & high markup</span>
              </div>
            </div>

            {/* Table Body Rows */}
            <div className="space-y-3">
              {COMPARISON_DATA.map((row, index) => (
                <div
                  key={index}
                  className="grid grid-cols-12 gap-4 items-center bg-white/5 hover:bg-white/8 rounded-2xl p-4 border border-white/10 transition-colors"
                >
                  {/* Feature Label */}
                  <div className="col-span-3">
                    <span className="text-sm font-bold text-white block">{row.feature}</span>
                  </div>

                  {/* Standard Handyman Column */}
                  <div className="col-span-3 text-xs sm:text-sm text-white/70 flex items-start gap-2 bg-black/20 p-3.5 rounded-xl min-h-[68px] items-center">
                    <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <span>{row.standardHandyman}</span>
                  </div>

                  {/* AG Dominant Column */}
                  <div className="col-span-3 text-xs sm:text-sm font-semibold text-[#171918] flex items-start gap-2.5 bg-white p-3.5 rounded-xl min-h-[68px] items-center shadow-md border-l-4 border-[#CAA356]">
                    <CheckCircle2 className="w-5 h-5 text-[#CAA356] shrink-0" />
                    <span className="leading-snug">{row.agContractor}</span>
                  </div>

                  {/* National Conglomerate Column */}
                  <div className="col-span-3 text-xs sm:text-sm text-white/70 flex items-start gap-2 bg-black/20 p-3.5 rounded-xl min-h-[68px] items-center">
                    <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{row.nationalConglomerate}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Dominant Banner Summary */}
            <div className="mt-8 bg-gradient-to-r from-[#252927] via-[#171918] to-[#252927] p-6 sm:p-8 rounded-3xl border border-[#CAA356]/40 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4 text-center md:text-left">
                <div className="w-12 h-12 rounded-2xl bg-[#CAA356] text-[#0F1110] flex items-center justify-center shrink-0 shadow-md">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-white font-display">
                    SafeContractor Approved & Available 24/7
                  </h4>
                  <p className="text-sm text-[#CAA356] font-medium mt-0.5">
                    Call Adrian directly on {BUSINESS_INFO.phone} for immediate assistance.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="px-6 py-3.5 rounded-2xl bg-[#CAA356] hover:bg-[#B69043] text-[#0F1110] font-extrabold text-sm shadow-lg transition-transform hover:-translate-y-0.5 flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  <span>Call {BUSINESS_INFO.phone}</span>
                </a>
                <button
                  onClick={onOpenQuote}
                  id="comparison-cta-btn"
                  className="px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm transition-colors cursor-pointer flex items-center gap-2"
                >
                  <span>Request an Enquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
