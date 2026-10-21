import React, { useState, useRef, useCallback } from 'react';
import { ArrowRight, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';
import { FEATURED_PROJECT, RECENT_PROJECTS } from '../data/mockData';

interface ProjectsProps {
  onOpenQuote: (service?: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenQuote }) => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging && e.buttons !== 1) return;
    handleMove(e.clientX);
  };

  return (
    <section id="projects" className="py-24 sm:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#171918]/8 border border-[#171918]/15 text-[#171918] text-xs font-bold tracking-wide uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#CAA356]" />
            <span>PORTFOLIO & CASE STUDIES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#171918] tracking-tight font-display">
            Commercial Workmanship in Action.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#686E6A] leading-relaxed">
            A look at recent retail shopfitting, architectural joinery installations, and commercial maintenance overhauls executed across Yorkshire.
          </p>
        </div>

        {/* Featured Project Showcase with Interactive Draggable Before/After Slider */}
        <div className="bg-[#FAFBF8] rounded-3xl p-6 sm:p-10 border border-[#171918]/10 shadow-xl mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Interactive Before/After Image Slider */}
            <div className="lg:col-span-7">
              <div
                ref={containerRef}
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                onMouseLeave={() => setIsDragging(false)}
                onMouseMove={handleMouseMove}
                onTouchMove={handleTouchMove}
                className="relative h-72 sm:h-96 md:h-[420px] rounded-2xl overflow-hidden shadow-md select-none cursor-ew-resize border border-[#171918]/10 bg-gray-950"
              >
                {/* AFTER image (Full background) */}
                <img
                  src={FEATURED_PROJECT.afterImage}
                  alt={`${FEATURED_PROJECT.title} After Commercial Fit-Out`}
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80';
                  }}
                />

                {/* BEFORE image (Hardware-accelerated clip-path) */}
                <img
                  src={FEATURED_PROJECT.beforeImage}
                  alt={`${FEATURED_PROJECT.title} Before Commercial Fit-Out`}
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none filter brightness-90 saturate-75"
                  style={{
                    clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
                  }}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&w=1200&q=80';
                  }}
                />

                {/* Badges */}
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-lg pointer-events-none border border-white/10 shadow-sm">
                  BEFORE: Worn Retail Fixtures
                </div>
                <div className="absolute top-4 right-4 bg-[#CAA356] text-[#0F1110] text-xs font-extrabold px-3 py-1 rounded-lg pointer-events-none shadow-md border border-white/20">
                  AFTER: Bespoke Joinery & Overhaul
                </div>

                {/* Slider Handle Divider Line */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl pointer-events-none"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-white text-[#171918] shadow-2xl border-2 border-[#CAA356] flex items-center justify-center pointer-events-auto cursor-ew-resize hover:scale-110 transition-transform">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current" strokeWidth="2.5">
                      <path d="M8 7l-5 5 5 5M16 7l5 5-5 5" />
                    </svg>
                  </div>
                </div>

                {/* Hint Bar at bottom */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/75 backdrop-blur-md text-white text-[11px] font-medium px-3.5 py-1 rounded-full pointer-events-none border border-white/15">
                  ↔ Drag slider to compare transformation
                </div>
              </div>
            </div>

            {/* Right: Featured Project Story */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#CAA356] uppercase tracking-wider mb-2">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{FEATURED_PROJECT.location} • {FEATURED_PROJECT.category}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#171918] font-display">
                  {FEATURED_PROJECT.title}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-[#686E6A] leading-relaxed">
                {FEATURED_PROJECT.description}
              </p>

              <div className="space-y-2.5 pt-2">
                <div className="flex items-center gap-2.5 text-xs font-semibold text-[#171918]">
                  <CheckCircle2 className="w-4 h-4 text-[#CAA356]" />
                  <span>Bespoke timber cash counter & flush perimeter display fitting</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-semibold text-[#171918]">
                  <CheckCircle2 className="w-4 h-4 text-[#CAA356]" />
                  <span>Executed on scheduled night shifts to prevent trading loss</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-semibold text-[#171918]">
                  <CheckCircle2 className="w-4 h-4 text-[#CAA356]" />
                  <span>Full dust extraction & vacuumed clean prior to morning opening</span>
                </div>
              </div>

              <div className="pt-3">
                <button
                  onClick={() => onOpenQuote('Retail Shopfitting')}
                  className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#171918] hover:bg-[#252927] text-white text-sm font-bold shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  <span>Request Shopfitting or Joinery Consultation</span>
                  <ArrowRight className="w-4 h-4 text-[#CAA356] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* 4 Additional Yorkshire Project Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {RECENT_PROJECTS.map((proj) => (
            <div
              key={proj.id}
              className="bg-[#FAFBF8] rounded-2xl overflow-hidden border border-gray-200 shadow-xs hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <img
                  src={proj.afterImage}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80';
                  }}
                />
                <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1 rounded-md border border-white/10">
                  {proj.category}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#686E6A] mb-1">
                    <MapPin className="w-3.5 h-3.5 text-[#CAA356]" />
                    <span>{proj.location}</span>
                  </div>
                  <h4 className="text-base font-bold text-[#171918] leading-snug">
                    {proj.title}
                  </h4>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-200 flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#171918] group-hover:text-[#CAA356] transition-colors">
                    Commercial Grade Fit-Out
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#CAA356] group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
