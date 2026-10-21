import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, Mail, ArrowRight, Clock } from 'lucide-react';
import { FAQS, BUSINESS_INFO } from '../data/mockData';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 sm:py-32 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#171918]/8 border border-[#171918]/15 text-[#171918] text-xs font-bold tracking-wide uppercase mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#CAA356]" />
            <span>COMMONLY ASKED QUESTIONS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#171918] tracking-tight font-display">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#686E6A] leading-relaxed">
            Information regarding our 24-hour call-out service, domestic and commercial capabilities, and SafeContractor Approved standards.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-[#CAA356] bg-[#FAFBF8] shadow-sm'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <h3 className="text-base sm:text-lg font-bold text-[#171918] font-display">
                    {faq.question}
                  </h3>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-[#CAA356] text-[#0F1110] rotate-180'
                        : 'bg-gray-100 text-[#171918]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-[#686E6A] leading-relaxed border-t border-gray-100 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Contact Callout */}
        <div className="mt-12 p-6 rounded-3xl bg-[#FAFBF8] border border-[#171918]/10 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="text-left space-y-1">
            <div className="flex items-center gap-2 text-xs font-bold text-[#CAA356]">
              <Clock className="w-4 h-4" />
              <span>24-Hour Emergency Service Active</span>
            </div>
            <span className="block text-sm font-bold text-[#171918]">
              Have an urgent repair or maintenance requirement?
            </span>
            <span className="text-xs text-[#686E6A]">
              Speak directly with Adrian or submit your enquiry online.
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#CAA356] hover:bg-[#B69043] text-[#0F1110] text-xs sm:text-sm font-extrabold shadow-sm transition-transform hover:-translate-y-0.5"
            >
              <Phone className="w-3.5 h-3.5 fill-current" />
              <span>Call Adrian: {BUSINESS_INFO.phone}</span>
            </a>

            <a
              href="#contact"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-[#171918] hover:bg-[#252927] text-white text-xs sm:text-sm font-bold transition-colors"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#CAA356]" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
