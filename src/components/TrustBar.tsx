import React from 'react';
import { Users, Clock, Hammer, ShieldCheck } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const trustItems = [
    {
      id: 'customer-types',
      icon: Users,
      title: 'Domestic & Commercial',
      subtitle: 'Homeowners & business properties',
      badge: 'All Sectors',
      color: 'bg-[#CAA356]/15 text-[#CAA356]'
    },
    {
      id: 'emergency-callout',
      icon: Clock,
      title: '24-Hour Call-Out',
      subtitle: 'Emergency repairs & response',
      badge: '24/7 Available',
      color: 'bg-[#171918]/10 text-[#171918]'
    },
    {
      id: 'core-trades',
      icon: Hammer,
      title: 'Joinery & Building',
      subtitle: 'Plumbing, decorating & maintenance',
      badge: 'Complete Trades',
      color: 'bg-[#CAA356]/15 text-[#CAA356]'
    },
    {
      id: 'accreditation',
      icon: ShieldCheck,
      title: 'SafeContractor Approved',
      subtitle: 'Verified health & safety standard',
      badge: 'Accredited',
      color: 'bg-[#171918]/10 text-[#171918]'
    }
  ];

  return (
    <section className="relative z-20 -mt-6 sm:-mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="trust-bar">
      <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl border border-[#171918]/10">
        
        {/* 4 Verified Business Trust Items */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className={`flex items-center gap-3.5 ${idx > 0 ? 'pt-3 sm:pt-0 sm:pl-6' : ''} group`}
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-xs transition-transform group-hover:scale-105 ${item.color}`}>
                  <Icon className="w-6 h-6 stroke-[2.2]" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-base sm:text-lg font-bold text-[#171918] tracking-tight font-display">
                      {item.title}
                    </span>
                  </div>
                  <span className="block text-xs sm:text-sm text-[#686E6A] font-medium truncate">
                    {item.subtitle}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
