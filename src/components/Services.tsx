import React, { useState } from 'react';
import { ArrowRight, Check, Phone, Sparkles, Clock, Home, Building2, ShieldCheck } from 'lucide-react';
import { SERVICES, BUSINESS_INFO } from '../data/mockData';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Domestic' | 'Commercial' | 'Emergency'>('All');

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#F6F7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#171918]/8 border border-[#171918]/15 text-[#171918] text-xs font-bold tracking-wide uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#CAA356]" />
            <span>COMPLETE TRADE SERVICES</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#171918] tracking-tight font-display">
            Joinery, Building, Plumbing, Decorating &{' '}
            <span className="text-[#CAA356] block sm:inline">Property Maintenance.</span>
          </h2>
          
          <p className="mt-4 text-base sm:text-lg text-[#686E6A] leading-relaxed">
            Professional trade services for domestic homeowners and commercial clients across Yorkshire and surrounding regions. SafeContractor Approved with a 24-hour emergency call-out service.
          </p>
        </div>

        {/* Audience Pathways Highlight Cards */}
        <div id="customer-pathways" className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {/* Domestic Box */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#171918]/10 shadow-sm relative overflow-hidden">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-[#CAA356]/15 text-[#CAA356] flex items-center justify-center">
                <Home className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#CAA356]">Homeowners & Private Residencies</span>
                <h3 className="text-xl font-bold text-[#171918]">Domestic Maintenance & Repairs</h3>
              </div>
            </div>
            <p className="text-sm text-[#686E6A] leading-relaxed mb-4">
              Joinery, plumbing, decorating, building repairs and general property maintenance for private households and homeowners.
            </p>
            <div className="flex flex-wrap gap-2 text-xs font-semibold text-[#171918]">
              <span className="bg-[#FAFBF8] border border-gray-200 px-3 py-1 rounded-full">General Joinery Work</span>
              <span className="bg-[#FAFBF8] border border-gray-200 px-3 py-1 rounded-full">Minor Building Repairs</span>
              <span className="bg-[#FAFBF8] border border-gray-200 px-3 py-1 rounded-full">Plumbing Repairs</span>
              <span className="bg-[#FAFBF8] border border-gray-200 px-3 py-1 rounded-full">Interior Decorating</span>
            </div>
          </div>

          {/* Commercial Box */}
          <div id="commercial-maintenance" className="bg-[#171918] text-white rounded-3xl p-6 sm:p-8 border border-[#CAA356]/30 shadow-md relative overflow-hidden">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-[#CAA356] text-[#0F1110] flex items-center justify-center font-bold">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#CAA356]">Facilities & Business Premises</span>
                <h3 className="text-xl font-bold text-white">Commercial Maintenance & Support</h3>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed mb-4">
              Building maintenance, joinery, reactive repairs and ongoing property support for commercial premises and facility operators.
            </p>
            <div className="flex flex-wrap gap-2 text-xs font-semibold text-white">
              <span className="bg-white/10 border border-white/15 px-3 py-1 rounded-full">Planned Maintenance</span>
              <span className="bg-white/10 border border-white/15 px-3 py-1 rounded-full">Reactive Repairs</span>
              <span className="bg-white/10 border border-white/15 px-3 py-1 rounded-full">Commercial Joinery</span>
              <span className="bg-white/10 border border-white/15 px-3 py-1 rounded-full">SafeContractor Approved</span>
            </div>
          </div>
        </div>

        {/* Complete Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              id={service.id}
              onClick={() => onSelectService(service.name)}
              className="group bg-white rounded-3xl overflow-hidden border border-[#171918]/10 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between cursor-pointer relative"
            >
              {/* Gold accent line on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#CAA356] opacity-0 group-hover:opacity-100 transition-opacity z-20" />

              {/* Service Image Container */}
              <div className="relative h-48 sm:h-52 overflow-hidden bg-[#171918]/5">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Number Badge */}
                <div className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-xl text-xs font-extrabold text-[#171918] shadow-xs">
                  {service.number}
                </div>

                {/* Scope Badge */}
                <div className="absolute top-3.5 right-3.5 bg-[#CAA356] text-[#0F1110] px-2.5 py-1 rounded-xl text-[11px] font-bold shadow-xs">
                  {service.scopeBadge || service.tag}
                </div>

                {/* Title on photo */}
                <div className="absolute bottom-3.5 left-4 right-4">
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#CAA356] block">
                    {service.category}
                  </span>
                  <h3 className="text-xl font-bold text-white font-display leading-tight drop-shadow-xs">
                    {service.name}
                  </h3>
                </div>
              </div>

              {/* Service Description, Bullet List & CTA */}
              <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                <div>
                  <p className="text-sm text-[#686E6A] leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>

                  <ul className="space-y-1.5 mb-6 text-xs text-[#171918] font-medium">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#CAA356] shrink-0 stroke-[2.5]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#171918] group-hover:text-[#CAA356] transition-colors">
                    Discuss {service.name}
                  </span>
                  
                  <div className="w-8 h-8 rounded-full bg-[#171918]/5 group-hover:bg-[#CAA356] group-hover:text-[#0F1110] text-[#171918] flex items-center justify-center transition-all duration-200">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 24-Hour Emergency Call-Out Prominent Banner */}
        <div id="emergency-callout-banner" className="mt-16 bg-[#171918] rounded-3xl p-6 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl border border-[#CAA356]/40">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#CAA356] text-[#0F1110] flex items-center justify-center shrink-0 shadow-md">
              <Clock className="w-6 h-6 animate-pulse" />
            </div>
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#CAA356]/20 text-[#CAA356] text-[11px] font-bold uppercase tracking-wider">
                Emergency Trade Response
              </div>
              <h4 className="text-xl sm:text-2xl font-bold font-display">
                Need an Emergency 24-Hour Call-Out?
              </h4>
              <p className="text-sm text-gray-300 max-w-xl">
                We advertise and deliver a dedicated 24-hour call-out service across Yorkshire for urgent building, joinery, and plumbing repairs.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              id="emergency-call-cta"
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-[#CAA356] hover:bg-[#B69043] text-[#0F1110] font-extrabold text-sm shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Call Adrian: {BUSINESS_INFO.phone}</span>
            </a>
            <button
              onClick={() => onSelectService('24-Hour Emergency Call-Outs')}
              className="w-full sm:w-auto px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm transition-colors cursor-pointer"
            >
              Request Call-Out
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
