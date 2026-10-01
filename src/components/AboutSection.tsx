import React from 'react';
import aboutImg from '../assets/images/about_strength_zone_1790595774766.jpg';
import { Dumbbell, ShieldCheck, Users, Zap, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      title: "01. Progressive Strength Training",
      desc: "Equipped with Olympic barbells, heavy-grade dumbbells, multi-angle benches, and dedicated power racks designed for biomechanically safe progressive overload.",
      icon: Dumbbell,
    },
    {
      title: "02. Supportive & Disciplined Culture",
      desc: "A motivating, zero-ego atmosphere where beginner fitness enthusiasts, students, and seasoned lifters push each other toward real physical longevity.",
      icon: Users,
    },
    {
      title: "03. Modern Biomechanical Equipment",
      desc: "Curated pin-loaded and plate-loaded machines providing optimal resistance curves, alongside high-intensity cardio endurance equipment.",
      icon: Zap,
    },
    {
      title: "04. Form & Technique First",
      desc: "Our trainers emphasize injury-free movement mechanics, posture correction, and tailored exercise variations suited to your anatomy.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#0c0d12] border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#d4af37] uppercase mb-3">
            <span>About Good Life Health Club</span>
            <span aria-hidden="true">·</span>
            <span>Est. Kayamkulam</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight uppercase leading-tight font-display text-balance">
            Where Ambition Meets World-Class Iron
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400 leading-relaxed text-balance">
            Good Life Health Club was built on a single uncompromising standard: providing Kayamkulam with an exceptional training environment that elevates both physical performance and everyday mental resilience.
          </p>
        </div>

        {/* 2-Column Editorial Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl bg-neutral-950 aspect-[4/3]">
              <img
                src={aboutImg}
                alt="Strength training zone at Good Life Health Club"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d12]/90 via-transparent to-transparent" />
              
              {/* Photo Caption / Anchor */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-neutral-900/80 backdrop-blur-md border border-neutral-800 text-left">
                <p className="text-sm font-semibold text-white">Precision Free Weights & Dumbbell Gallery</p>
                <p className="text-xs text-neutral-400 mt-0.5">Heavy calibrated weights designed for powerlifting, bodybuilding, and athletic conditioning.</p>
              </div>
            </div>

            {/* Background Accent glow */}
            <div className="absolute -bottom-6 -right-6 w-56 h-56 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none" />
          </div>

          {/* Right Column: Pillars of Excellence */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white font-display uppercase tracking-wide">
                Built For Those Who Demand Results
              </h3>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                Whether your goal is building lean muscle, dropping body fat, preparing for athletic trials, or establishing lifetime mobility, Good Life Health Club provides the exact tools, environment, and guidance required to succeed.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#12141c] border border-neutral-800/80 hover:border-[#d4af37]/40 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] mb-3">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold text-white font-display mb-1.5">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Checklist Trust Banner */}
            <div className="pt-2 flex flex-wrap gap-y-2 gap-x-6 text-xs text-neutral-300">
              <span className="flex items-center gap-1.5 text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
                Clean & Sanitized Daily
              </span>
              <span className="flex items-center gap-1.5 text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
                Personalized Induction
              </span>
              <span className="flex items-center gap-1.5 text-[#2dd4bf] font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#2dd4bf]" />
                New Badminton, Cricket & Basketball Arena
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
