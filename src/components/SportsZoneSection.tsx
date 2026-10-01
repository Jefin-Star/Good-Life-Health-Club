import React, { useState } from 'react';
import { SPORTS_AMENITIES, SportsAmenity, GYM_CONFIG } from '../data/gymData';
import { 
  Trophy, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  MessageCircle, 
  ShieldCheck, 
  ChevronRight 
} from 'lucide-react';

interface SportsZoneSectionProps {
  onBookClick?: (sportId?: string) => void;
}

export const SportsZoneSection: React.FC<SportsZoneSectionProps> = ({ onBookClick }) => {
  const [selectedSportId, setSelectedSportId] = useState<string>(SPORTS_AMENITIES[0].id);

  const activeSport: SportsAmenity = 
    SPORTS_AMENITIES.find(s => s.id === selectedSportId) || SPORTS_AMENITIES[0];

  const handleWhatsAppInquiry = (sportName: string) => {
    const text = encodeURIComponent(
      `Hi Good Life Health Club! I am inquiring about booking a slot / rates for the new ${sportName} in your Sports & Recreation Zone.`
    );
    window.open(`https://wa.me/${GYM_CONFIG.contact.rawPhone}?text=${text}`, '_blank');
  };

  return (
    <section id="sports-zone" className="relative py-24 bg-[#0a0b10] border-t border-neutral-800/80 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#2dd4bf]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#f6c343]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Expansion Announcement Banner */}
        <div className="relative mb-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-neutral-900/90 via-[#131722]/90 to-neutral-900/90 border border-[#d4af37]/30 shadow-2xl backdrop-blur-md">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-[#d4af37] uppercase">
                <span className="w-2 h-2 rounded-full bg-[#2dd4bf] animate-ping" />
                <span className="text-[#2dd4bf] font-extrabold">NEW EXPANSION</span>
                <span className="text-neutral-500">·</span>
                <span>SPORTS & RECREATION ARENA</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight uppercase font-display">
                Welcome to the New Sports & Recreation Zone
              </h2>
              
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
                We are expanding our facilities to include premium amenities, featuring <strong className="text-white font-semibold">professional badminton courts</strong>, <strong className="text-white font-semibold">dedicated cricket net practice facilities</strong>, a <strong className="text-white font-semibold">high quality basketball court</strong>, and a <strong className="text-white font-semibold">versatile open playing area</strong>.
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3">
              <button
                onClick={() => handleWhatsAppInquiry(activeSport.name)}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-neutral-950 font-bold text-xs sm:text-sm tracking-wider uppercase shadow-lg shadow-emerald-500/20 active:scale-95 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-neutral-950" />
                <span>Reserve Court / Net</span>
              </button>

              <button
                onClick={() => {
                  const elem = document.getElementById('register');
                  if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-neutral-700/80 hover:border-[#d4af37] bg-neutral-900/60 hover:bg-neutral-800 text-neutral-200 text-xs sm:text-sm font-semibold tracking-wide transition-all cursor-pointer"
              >
                <span>Register Interest</span>
                <ChevronRight className="w-4 h-4 text-[#d4af37]" />
              </button>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="text-xs font-semibold tracking-[0.25em] text-[#d4af37] uppercase mb-2">
              Athletic Facilities
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase font-display">
              Four Signature Sports Arenas
            </h3>
          </div>
          <p className="text-sm text-neutral-400 max-w-md mt-3 md:mt-0 leading-relaxed">
            Engineered to tournament standards with shock-cushioned surfaces, safety netting, and arena lighting.
          </p>
        </div>

        {/* 4 Interactive Selector Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {SPORTS_AMENITIES.map((sport) => {
            const isSelected = selectedSportId === sport.id;
            return (
              <button
                key={sport.id}
                onClick={() => setSelectedSportId(sport.id)}
                className={`text-left p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer relative overflow-hidden flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#151926] border-[#2dd4bf] shadow-xl shadow-[#2dd4bf]/10 ring-1 ring-[#2dd4bf]'
                    : 'bg-[#0f1118] border-neutral-800/80 hover:border-neutral-700 hover:bg-[#131520]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] sm:text-xs font-mono font-semibold tracking-wider text-[#d4af37] uppercase">
                      {sport.category}
                    </span>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-[#2dd4bf]" />
                    )}
                  </div>
                  <h4 className={`text-sm sm:text-base font-bold tracking-tight font-display leading-snug ${
                    isSelected ? 'text-white' : 'text-neutral-300'
                  }`}>
                    {sport.name}
                  </h4>
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-800/60 flex items-center justify-between text-xs text-neutral-400">
                  <span>View Details</span>
                  <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'translate-x-1 text-[#2dd4bf]' : 'text-neutral-500'}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Sport Showcase Card */}
        <div className="bg-[#11131c] border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Visual Media Column (Image) */}
            <div className="lg:col-span-6 relative min-h-[300px] sm:min-h-[400px] lg:min-h-full bg-neutral-950 overflow-hidden">
              <img
                src={activeSport.image}
                alt={activeSport.name}
                className="w-full h-full object-cover object-center transition-all duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#11131c] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#11131c]" />
              
              {/* Category Badge on Image */}
              <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-md border border-neutral-700/80 text-xs font-semibold text-white">
                <Trophy className="w-3.5 h-3.5 text-[#f6c343]" />
                <span>{activeSport.category}</span>
              </div>
            </div>

            {/* Detailed Description & Technical Specs */}
            <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#2dd4bf] uppercase mb-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Competition Standard Specification</span>
                </div>

                <h4 className="text-2xl sm:text-3xl font-extrabold text-white font-display uppercase tracking-tight mb-3">
                  {activeSport.name}
                </h4>

                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-6 font-light">
                  {activeSport.longDesc}
                </p>

                {/* Key Technical Specs Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {activeSport.specs.map((spec, idx) => (
                    <div 
                      key={idx} 
                      className="p-3 rounded-xl bg-black/40 border border-neutral-800/80 flex flex-col"
                    >
                      <span className="text-[11px] text-[#d4af37] font-medium uppercase tracking-wider">
                        {spec.label}
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-neutral-200 mt-0.5">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Highlights List */}
                <div className="space-y-2 mb-6">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                    Included Highlights & Amenities
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeSport.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-neutral-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2dd4bf] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Operational Details */}
                <div className="p-3.5 rounded-xl bg-[#161a26] border border-neutral-800 text-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-neutral-200">
                    <Clock className="w-3.5 h-3.5 text-[#f6c343]" />
                    <span className="font-semibold text-white">Operating Slots:</span> {activeSport.slotsAvailable}
                  </div>
                  <div className="flex items-center gap-2 text-neutral-400">
                    <Sparkles className="w-3.5 h-3.5 text-[#2dd4bf]" />
                    <span>{activeSport.pricingNote}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-neutral-800/80">
                <button
                  onClick={() => handleWhatsAppInquiry(activeSport.name)}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-neutral-950 font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-neutral-950" />
                  <span>Book {activeSport.name}</span>
                </button>

                <button
                  onClick={() => {
                    const elem = document.getElementById('contact');
                    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl border border-neutral-700 hover:border-neutral-500 text-neutral-300 text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Visit Sports Desk</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
