import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Award, Phone, Mail, Clock, Instagram } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';

interface FounderStoryProps {
  onOpenQuote: () => void;
}

export const FounderStory: React.FC<FounderStoryProps> = ({ onOpenQuote }) => {
  return (
    <section id="story" className="py-24 sm:py-32 bg-[#FAFBF8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image & Accreditation Badge */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-[#171918]/10 aspect-4/5 bg-gray-900 relative group">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
                alt="Adrian - AG Joinery & Building Maintenance"
                className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1110]/95 via-[#0F1110]/25 to-transparent pointer-events-none" />

              {/* Founder Tag Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-white/50 shadow-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-[#171918] font-display">
                      Adrian
                    </h3>
                    <p className="text-xs text-[#686E6A] font-semibold">
                      AG Joinery & Building Maintenance
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-[#CAA356]/15 text-[#CAA356] flex items-center justify-center">
                    <Award className="w-5 h-5 text-[#CAA356]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Accreditation Badge */}
            <div className="absolute -top-4 -right-4 bg-[#171918] text-white px-4 py-2 rounded-2xl shadow-xl flex items-center gap-2 border border-[#CAA356]/40">
              <ShieldCheck className="w-4 h-4 text-[#CAA356]" />
              <span className="text-xs font-bold">SafeContractor Approved</span>
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#171918]/8 border border-[#171918]/15 text-[#171918] text-xs font-bold tracking-wide uppercase mb-3">
                <Sparkles className="w-3.5 h-3.5 text-[#CAA356]" />
                <span>ABOUT AG JOINERY & BUILDING MAINTENANCE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#171918] tracking-tight font-display">
                Professional Maintenance & Trade Solutions.{' '}
                <span className="text-[#CAA356] block">Domestic & Commercial.</span>
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-[#686E6A] leading-relaxed">
              <p>
                Led by Adrian, AG Joinery & Building Maintenance provides trusted trade services for homeowners, landlords, and commercial businesses across Yorkshire and surrounding regions.
              </p>
              <p>
                Our core capability spans five comprehensive categories: <strong>Joinery</strong> (services, repairs, and general joinery work), <strong>Building Services</strong> (general building work, minor repairs, and property maintenance), <strong>Plumbing</strong> (repairs and maintenance), <strong>Decorating</strong> (interior decorating and property finishing), and <strong>Property Maintenance</strong> (both planned programmes and swift reactive repairs).
              </p>
              <p className="text-[#171918] font-bold">
                As a SafeContractor Approved contractor, we operate to rigorous safety, compliance, and workmanship standards.
              </p>
              <p>
                To support our domestic and commercial customers during unforeseen emergencies, we advertise and operate a dedicated <strong>24-hour call-out service</strong> across the region, making it straightforward to reach Adrian directly whenever urgent repairs are needed.
              </p>
            </div>

            {/* Direct Contact Bar */}
            <div className="pt-4 border-t border-gray-200 flex flex-wrap items-center justify-between gap-6">
              <div className="space-y-1.5">
                <span className="text-xs uppercase tracking-wider font-bold text-[#686E6A]">
                  Direct Contractor Lines:
                </span>
                <div className="flex flex-wrap items-center gap-4 text-sm font-bold text-[#171918]">
                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="inline-flex items-center gap-1.5 text-[#171918] hover:text-[#CAA356] transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#CAA356]" />
                    <span>{BUSINESS_INFO.phone} (Adrian)</span>
                  </a>
                  <span className="text-gray-300">•</span>
                  <a
                    href={`mailto:${BUSINESS_INFO.email}`}
                    className="inline-flex items-center gap-1.5 text-[#686E6A] hover:text-[#171918] transition-colors"
                  >
                    <Mail className="w-4 h-4 text-[#CAA356]" />
                    <span>{BUSINESS_INFO.email}</span>
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#CAA356] hover:bg-[#B69043] text-[#0F1110] text-sm font-extrabold shadow-md hover:shadow-lg transition-all"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  <span>Call 07568 140167</span>
                </a>
                <button
                  onClick={onOpenQuote}
                  id="founder-story-cta"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#171918] hover:bg-[#252927] text-white text-sm font-bold shadow-md transition-all cursor-pointer"
                >
                  <span>Request Enquiry</span>
                  <ArrowRight className="w-4 h-4 text-[#CAA356]" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
