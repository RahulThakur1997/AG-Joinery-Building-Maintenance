import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles, ShieldCheck } from 'lucide-react';
import { REVIEWS } from '../data/mockData';

export const Reviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
  };

  return (
    <section
      id="reviews"
      className="py-24 sm:py-32 bg-[#171918] text-white relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#CAA356]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header & Overall Rating Pill */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#CAA356]/40 text-[#CAA356] text-xs font-bold tracking-wide uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>COMMERCIAL REPUTATION</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display">
              Trusted by Commercial Operators &{' '}
              <span className="text-[#CAA356] block sm:inline">Facilities Managers Across Yorkshire.</span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-white/80 leading-relaxed">
              When business continuity, high-spec joinery, and reliable contractor response are non-negotiable.
            </p>
          </div>

          {/* Social Proof Aggregate Badge */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/15 shadow-xl flex items-center gap-6 shrink-0">
            <div>
              <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#CAA356] text-[#CAA356]" />
                ))}
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-extrabold text-white font-display">5.0</span>
                <span className="text-sm text-white/70">/ 5.0 Rating</span>
              </div>
            </div>
            <div className="h-10 w-px bg-white/20" />
            <div>
              <span className="block text-2xl font-bold text-[#CAA356] font-display">20+</span>
              <span className="text-xs text-white/70 uppercase tracking-wider font-semibold">Years On Site</span>
            </div>
          </div>
        </div>

        {/* Carousel Showcase */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Active Review Card */}
          <div className="bg-white text-[#171918] rounded-3xl p-8 sm:p-12 shadow-2xl relative border-2 border-[#CAA356]/40 min-h-[290px] flex flex-col justify-between">
            {/* Quote watermark */}
            <Quote className="w-16 h-16 text-[#CAA356]/15 absolute top-6 right-8 pointer-events-none" />

            <div>
              {/* Star rating */}
              <div className="flex items-center gap-1.5 mb-6">
                {[...Array(REVIEWS[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#CAA356] text-[#CAA356]" />
                ))}
                <span className="ml-2 text-xs font-bold uppercase tracking-wider text-[#CAA356] bg-[#CAA356]/15 px-2.5 py-0.5 rounded-md">
                  {REVIEWS[currentIndex].date}
                </span>
              </div>

              {/* Quote Copy */}
              <p className="text-xl sm:text-2xl md:text-3xl font-medium text-[#111512] leading-snug tracking-tight font-display italic">
                "{REVIEWS[currentIndex].quote}"
              </p>
            </div>

            {/* Author Footer */}
            <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-full bg-[#171918] text-[#CAA356] flex items-center justify-center font-bold text-lg shadow-sm">
                  {REVIEWS[currentIndex].author.charAt(0)}
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#171918]">
                    {REVIEWS[currentIndex].author}
                  </h4>
                  <p className="text-xs text-[#686E6A]">
                    {REVIEWS[currentIndex].role} • {REVIEWS[currentIndex].location}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-semibold text-[#171918] bg-[#FAFBF8] px-3.5 py-1.5 rounded-full border border-gray-200">
                <ShieldCheck className="w-4 h-4 text-[#CAA356]" />
                <span>{REVIEWS[currentIndex].serviceUsed}</span>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Pagination Dots */}
            <div className="flex items-center gap-2.5">
              {REVIEWS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to review ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === idx
                      ? 'w-8 bg-[#CAA356]'
                      : 'w-2.5 bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                aria-label="Previous review"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer border border-white/15"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next review"
                className="w-11 h-11 rounded-full bg-[#CAA356] hover:bg-[#B69043] text-[#0F1110] flex items-center justify-center transition-colors cursor-pointer shadow-md"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
