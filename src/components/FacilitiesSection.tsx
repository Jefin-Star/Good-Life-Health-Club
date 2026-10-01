import React, { useState } from 'react';
import cardioImg from '../assets/images/equipment_cardio_floor_1790595787464.jpg';
import strengthImg from '../assets/images/about_strength_zone_1790595774766.jpg';
import trainerImg from '../assets/images/trainer_coaching_1790595802318.jpg';
import { Dumbbell, Activity, UserCheck, Flame } from 'lucide-react';

export const FacilitiesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'strength' | 'cardio' | 'pt'>('strength');

  const facilityTabs = [
    {
      id: 'strength' as const,
      label: 'Strength & Free Weights',
      icon: Dumbbell,
      image: strengthImg,
      title: 'Precision Heavy Iron & Hypertrophy Machinery',
      desc: 'Our free-weight zone is engineered for real progressive resistance. Complete with multiple flat, incline, and decline Olympic benches, heavy-gauge power cages, deadlift platforms with shock-absorbent rubber flooring, and calibrated dumbbells.',
      features: [
        'Commercial dumbbell pairs with solid knurled grip',
        'Olympic power cages and squat racks with safety spotters',
        'Plate-loaded leg press, hack squat, and seated chest presses',
        'Dual adjustable cable pulleys and lat pulldown towers',
      ],
    },
    {
      id: 'cardio' as const,
      label: 'Cardio & Conditioning',
      icon: Activity,
      image: cardioImg,
      title: 'Cardiovascular Endurance & Fat Burning Floor',
      desc: 'Sleek, low-impact cardio stations designed for fat burning, heart health, and high-intensity interval training (HIIT). Ambient LED lighting creates an invigorating training atmosphere.',
      features: [
        'Commercial treadmills with high-grade shock absorption',
        'Air rowers and spin cycles for conditioning circuits',
        'Integrated heart-rate monitoring and calorie counters',
        'Optimal ventilation and cooling for peak sustained output',
      ],
    },
    {
      id: 'pt' as const,
      label: 'Personal Coaching',
      icon: UserCheck,
      image: trainerImg,
      title: '1-on-1 Certified Personal Training (₹3,000 / month)',
      desc: 'Train with qualified fitness mentors who craft customized periodized training routines, assess movement limitations, and monitor your nutrition and body composition every step of the journey.',
      features: [
        'Bi-weekly body fat & muscle circumference measurements',
        'Customized nutritional macronutrient meal guide',
        'Direct form correction and progressive overload charting',
        'Motivational accountability to break through plateaus',
      ],
    },
  ];

  const currentFacility = facilityTabs.find(tab => tab.id === activeTab) || facilityTabs[0];

  return (
    <section id="facilities" className="py-20 bg-[#0e1017] border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="text-xs font-semibold tracking-[0.2em] text-[#d4af37] uppercase mb-2">
              World-Class Equipment
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight uppercase font-display">
              Gym Facilities & Training Zones
            </h2>
          </div>
          <p className="text-sm text-neutral-400 max-w-md mt-3 md:mt-0">
            Engineered layout prioritizing safety, flow, and peak training intensity.
          </p>
        </div>

        {/* Interactive Filter Tabs */}
        <div className="flex flex-wrap gap-2 p-1.5 bg-[#141620] rounded-xl border border-neutral-800 max-w-xl mb-8">
          {facilityTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-[#e5a93b] to-[#d4af37] text-black shadow-md shadow-[#d4af37]/20 font-bold'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800/50'
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span className="whitespace-nowrap">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Facility Display Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#12141d] border border-neutral-800 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl">
          <div className="lg:col-span-6 space-y-5">
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
              {currentFacility.title}
            </h3>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              {currentFacility.desc}
            </p>
            
            <div className="pt-2 space-y-2.5">
              {currentFacility.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37] mt-2 shrink-0" />
                  <span className="text-xs sm:text-sm text-neutral-300">{feat}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-3 text-xs text-neutral-400">
              <Flame className="w-4 h-4 text-[#d4af37]" />
              <span>Sanitized daily · Maintained for flawless smooth operation</span>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-xl overflow-hidden aspect-[4/3] border border-neutral-700/60 shadow-lg bg-neutral-900">
              <img
                src={currentFacility.image}
                alt={currentFacility.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transition-all duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
