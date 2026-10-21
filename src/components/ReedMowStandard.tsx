import React from 'react';
import { CheckCircle2, ArrowRight, ShieldCheck, Sparkles, Award, Phone, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';

interface AGStandardProps {
  onOpenQuote: () => void;
}

export const ReedMowStandard: React.FC<AGStandardProps> = ({ onOpenQuote }) => {
  const standards = [
    { 
      title: 'SafeContractor Approved', 
      desc: 'Formally accredited health and safety practices protecting homeowners, staff, and commercial premises.' 
    },
    { 
      title: '24-Hour Call-Out Service', 
      desc: 'Rapid trade response for domestic emergencies and reactive commercial property issues across Yorkshire.' 
    },
    { 
      title: 'Domestic & Commercial Coverage', 
      desc: 'Equally adept at residential domestic joinery and building work as ongoing commercial property maintenance.' 
    },
    { 
      title: 'Multi-Trade Competence', 
      desc: 'Seamless coordination of joinery, general building, plumbing, decorating, and property repairs.' 
    },
    { 
      title: 'Minimal Disruption & Clean Site', 
      desc: 'Industrial dust control, respectful working methods, and thorough site cleanup before handover.' 
    },
    { 
      title: 'Direct Contractor Communication', 
      desc: 'Deal directly with Adrian on 07568 140167 from initial scope to completion—no call-centre runarounds.' 
    },
    { 
      title: 'Planned & Reactive Solutions', 
      desc: 'Structured maintenance programmes to prevent deterioration, plus swift reactive troubleshooting.' 
    },
    { 
      title: 'Yorkshire Regional Dispatch', 
      desc: 'Dedicated regional coverage across Leeds, Sheffield, York, Bradford, and surrounding communities.' 
    }
  ];

  return (
    <section id="the-standard" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-[#CAA356]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Accreditation Badge & Master Joinery Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#171918]/10 aspect-4/5 bg-[#171918]/5 group">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
                alt="The AG Standard - Joinery, Building and Property Maintenance"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1110]/95 via-[#0F1110]/35 to-transparent pointer-events-none" />
              
              {/* Overlay card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-white/50 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#171918] text-[#CAA356] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-6 h-6 text-[#CAA356]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#171918]">
                      SafeContractor Approved
                    </h4>
                    <p className="text-xs text-[#686E6A]">
                      Accredited health, safety & quality standard on all sites.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 24-Hour Callout Badge */}
            <div className="absolute -top-4 -left-4 bg-[#171918] text-white px-4 py-2 rounded-2xl shadow-xl flex items-center gap-2 border border-[#CAA356]/40">
              <Clock className="w-4 h-4 text-[#CAA356] animate-pulse" />
              <span className="text-xs font-bold">24-Hour Call-Out Service</span>
            </div>
          </div>

          {/* Right Column: Copy & Checklist */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#171918]/8 border border-[#171918]/15 text-[#171918] text-xs font-bold tracking-wide uppercase mb-3">
                <Sparkles className="w-3.5 h-3.5 text-[#CAA356]" />
                <span>THE AG CONTRACTOR STANDARD</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#171918] tracking-tight font-display">
                Trade Excellence for Domestic & Commercial Properties.
              </h2>
              
              <p className="mt-4 text-base sm:text-lg text-[#686E6A] leading-relaxed">
                Whether completing general joinery work in a private residence or managing reactive building maintenance for commercial premises, we operate to verified trade and safety standards.
              </p>
            </div>

            {/* Checklist Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {standards.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-[#FAFBF8] border border-gray-100 hover:border-[#CAA356]/50 hover:bg-[#CAA356]/5 transition-colors group"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 rounded-full bg-[#CAA356]/15 text-[#171918] group-hover:bg-[#CAA356] group-hover:text-[#0F1110] p-1 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-[#CAA356] group-hover:text-[#0F1110]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#171918] leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#686E6A] mt-0.5 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Action CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="group inline-flex items-center gap-3 px-7 py-4 rounded-2xl bg-[#CAA356] hover:bg-[#B69043] text-[#0F1110] text-base font-extrabold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                <Phone className="w-5 h-5 fill-current" />
                <span>Call Adrian — {BUSINESS_INFO.phone}</span>
              </a>

              <button
                onClick={onOpenQuote}
                id="ag-standard-cta"
                className="group inline-flex items-center gap-2.5 px-6 py-4 rounded-2xl bg-[#171918] hover:bg-[#252927] text-white text-base font-bold shadow-md transition-all cursor-pointer"
              >
                <span>Request an Enquiry</span>
                <ArrowRight className="w-4 h-4 text-[#CAA356] group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export const AGStandard = ReedMowStandard;
