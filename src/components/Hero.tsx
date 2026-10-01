import React, { useState } from 'react';
import { ChevronRight, Dumbbell } from 'lucide-react';
import heroImg from '../assets/images/hero_gym_luxury_1790595753822.jpg';

interface HeroProps {
  onJoinClick: () => void;
  onViewPlansClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onJoinClick, onViewPlansClick }) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#0c0d12]">
      {/* Background Image with Cinematic Measured Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Good Life Health Club luxury gym interior"
          referrerPolicy="no-referrer"
          onLoad={() => setImgLoaded(true)}
          className={`w-full h-full object-cover object-center transform scale-105 duration-1000 transition-opacity ${
            imgLoaded ? 'opacity-40' : 'opacity-20'
          }`}
        />
        {/* Measured Scrim for WCAG AA readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d12] via-[#0c0d12]/75 to-[#0c0d12]/40" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#0c0d12]/50 to-[#0c0d12]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Editorial Eyebrow */}
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#d4af37] uppercase mb-3">
          <Dumbbell className="w-3.5 h-3.5 text-[#2dd4bf]" />
          <span>Premier Health Club & Performance Center</span>
          <span aria-hidden="true" className="text-neutral-500">·</span>
          <span>Kayamkulam</span>
        </div>

        {/* Primary Gym Name */}
        <h2 className="text-sm md:text-base font-semibold tracking-[0.3em] uppercase text-neutral-400 mb-2 font-display">
          Welcome to
        </h2>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight uppercase leading-[1.08] mb-6 max-w-4xl text-balance font-display">
          Good Life <span className="bg-gradient-to-r from-[#ffd700] via-[#d4af37] to-[#e6a836] bg-clip-text text-transparent">Health Club</span>
        </h1>

        {/* Fitness Tagline */}
        <p className="text-xl sm:text-2xl lg:text-3xl text-neutral-200 font-light max-w-2xl text-balance mb-8">
          “Build Your Strength. <span className="text-[#ffd700] font-medium">Transform Your Life.</span>”
        </p>

        {/* Sub-description */}
        <p className="text-sm sm:text-base text-neutral-400 max-w-xl text-balance mb-6 leading-relaxed">
          State-of-the-art heavy iron, specialized resistance machinery, and certified personal coaching tailored for real athletic and physical transformation.
        </p>

        {/* New Expansion Announcement Quick Link */}
        <a 
          href="#sports-zone"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#141824]/90 border border-[#2dd4bf]/40 hover:border-[#2dd4bf] text-xs text-[#2dd4bf] font-medium transition-all mb-8 shadow-lg shadow-[#2dd4bf]/5 hover:bg-[#191e2e] group cursor-pointer"
        >
          <span className="w-2 h-2 rounded-full bg-[#2dd4bf] animate-ping" />
          <span className="font-bold uppercase tracking-wider text-[11px] text-white">NEW</span>
          <span className="text-neutral-300">Sports & Rec Zone: Badminton, Cricket Nets & Basketball Court</span>
          <ChevronRight className="w-3.5 h-3.5 text-[#2dd4bf] group-hover:translate-x-0.5 transition-transform" />
        </a>

        {/* Dual CTA Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={onJoinClick}
            className="w-full sm:w-auto px-8 py-3.5 text-sm font-bold text-black uppercase tracking-wider bg-gradient-to-r from-[#e5a93b] via-[#d4af37] to-[#ffd700] rounded-xl shadow-lg shadow-[#d4af37]/25 hover:shadow-xl hover:shadow-[#d4af37]/35 hover:scale-[1.02] active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Join Now</span>
            <ChevronRight className="w-4 h-4 text-black" />
          </button>

          <button
            onClick={onViewPlansClick}
            className="w-full sm:w-auto px-7 py-3.5 text-sm font-semibold text-neutral-200 border border-neutral-700/80 hover:border-[#d4af37] bg-neutral-900/60 hover:bg-neutral-900 backdrop-blur-sm rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>View Membership Plans</span>
          </button>
        </div>
      </div>
    </section>
  );
};
