import React from 'react';
import { Moon, Sparkles, ShieldCheck, UserCheck, CheckCircle2 } from 'lucide-react';

export const DetailsSection: React.FC = () => {
  const detailCards = [
    {
      id: 'disruption',
      icon: Moon,
      title: 'Zero Trading Disruption',
      subtitle: 'Out-of-hours execution.',
      desc: 'Work undertaken during early mornings, evenings, or scheduled closures so your trading operations and customers are never disrupted.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
      badge: 'Night & Weekend Shifts'
    },
    {
      id: 'cleanliness',
      icon: Sparkles,
      title: 'Spotless Handover',
      subtitle: 'Ready for customers.',
      desc: 'Industrial M-class dust extraction on all cutting tools and full site vacuuming before departure. Zero sawdust or discarded trims left in trading zones.',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
      badge: 'Clean Site Policy'
    },
    {
      id: 'durability',
      icon: ShieldCheck,
      title: 'Heavy-Duty Durability',
      subtitle: 'Built for footfall.',
      desc: 'Commercial-grade fixings, robust hardwood framing, high-traffic ironmongery, and commercial laminates engineered to withstand daily retail use.',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
      badge: 'Commercial Grade'
    },
    {
      id: 'oversight',
      icon: UserCheck,
      title: 'Direct Owner Oversight',
      subtitle: 'Adrian Griffiths on-site.',
      desc: 'No subcontracted guesswork or anonymous project managers. Adrian oversees scope, specifications, and execution with personal trade accountability.',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
      badge: 'Direct Accountability'
    }
  ];

  return (
    <section id="details" className="py-24 sm:py-32 bg-[#F6F7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#171918]/8 border border-[#171918]/15 text-[#171918] text-xs font-bold tracking-wide uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#CAA356]" />
            <span>OPERATIONAL RIGOUR</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#171918] tracking-tight font-display">
            The Details That Protect Your Business.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#686E6A] leading-relaxed">
            Commercial maintenance is about protecting trading revenue, customer impressions, and property compliance. Here is why facilities managers rely on our standard.
          </p>
        </div>

        {/* 4 Large Visual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {detailCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="bg-white rounded-3xl overflow-hidden border border-[#171918]/10 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Visual Image Header */}
                <div className="relative h-44 overflow-hidden bg-gray-100">
                  <img
                    src={card.image}
                    alt={`${card.title} - ${card.subtitle}`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Icon badge */}
                  <div className="absolute top-3.5 left-3.5 w-10 h-10 rounded-xl bg-white/95 backdrop-blur-md flex items-center justify-center text-[#171918] shadow-sm">
                    <Icon className="w-5 h-5 text-[#CAA356]" />
                  </div>

                  {/* Pill badge */}
                  <div className="absolute top-3.5 right-3.5 bg-[#CAA356] text-[#0F1110] text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full shadow-xs">
                    {card.badge}
                  </div>

                  {/* Title overlay */}
                  <div className="absolute bottom-3.5 left-4 right-4">
                    <span className="text-xs uppercase tracking-wider font-semibold text-white/80 block">
                      {card.title}
                    </span>
                    <h3 className="text-xl font-bold text-white font-display leading-none mt-0.5">
                      {card.subtitle}
                    </h3>
                  </div>
                </div>

                {/* Body description */}
                <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                  <p className="text-sm text-[#686E6A] leading-relaxed">
                    {card.desc}
                  </p>

                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-2 text-xs font-semibold text-[#171918]">
                    <CheckCircle2 className="w-4 h-4 text-[#CAA356]" />
                    <span>Enforced on every commercial job</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
