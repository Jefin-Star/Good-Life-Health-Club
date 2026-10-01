import React, { useState } from 'react';
import { Calculator, ArrowRight, Activity, Flame, Dumbbell } from 'lucide-react';

interface FitnessCalculatorProps {
  onApplyGoal: (goalText: string, suggestedPlanId: string) => void;
}

export const FitnessCalculator: React.FC<FitnessCalculatorProps> = ({ onApplyGoal }) => {
  const [height, setHeight] = useState<number>(172);
  const [weight, setWeight] = useState<number>(70);
  const [goalType, setGoalType] = useState<'hypertrophy' | 'fatloss' | 'strength' | 'general'>('hypertrophy');

  // BMI Calculation
  const heightInMeters = height / 100;
  const bmi = heightInMeters > 0 ? (weight / (heightInMeters * heightInMeters)).toFixed(1) : '0';
  const bmiNum = parseFloat(bmi);

  let bmiCategory = 'Healthy Weight';
  let categoryColor = 'text-emerald-400';
  if (bmiNum < 18.5) {
    bmiCategory = 'Underweight (Mass Building Priority)';
    categoryColor = 'text-blue-400';
  } else if (bmiNum >= 25 && bmiNum < 30) {
    bmiCategory = 'Overweight (Recomposition Recommended)';
    categoryColor = 'text-amber-400';
  } else if (bmiNum >= 30) {
    bmiCategory = 'High BMI (Targeted Fat Loss Priority)';
    categoryColor = 'text-rose-400';
  }

  const goals = {
    hypertrophy: {
      title: 'Lean Muscle Hypertrophy',
      days: '4-5 Days/week',
      focus: 'Progressive overload, 8-12 rep ranges, high-protein intake',
      planId: 'half-yearly-6m',
      planName: '6 Months Transformation Plan',
    },
    fatloss: {
      title: 'Fat Loss & Conditioning',
      days: '4-6 Days/week',
      focus: 'Resistance circuit training + 25 min cardio conditioning deck',
      planId: 'quarterly-3m',
      planName: '3 Months Consistency Plan',
    },
    strength: {
      title: 'Raw Strength & Powerlifting',
      days: '3-4 Days/week',
      focus: 'Barbell compounds (squat, bench press, deadlift, overhead press)',
      planId: 'annual-1y',
      planName: '1 Year Elite Plan',
    },
    general: {
      title: 'General Health & Longevity',
      days: '3 Days/week',
      focus: 'Full body functional strength, cardio mobility, mental resilience',
      planId: 'adult-monthly',
      planName: 'Adult Monthly Plan',
    },
  };

  const currentGoal = goals[goalType];

  const handleApplyToRegistration = () => {
    const summary = `${currentGoal.title} (Target: ${currentGoal.days}, BMI: ${bmi} - ${bmiCategory})`;
    onApplyGoal(summary, currentGoal.planId);
  };

  return (
    <section className="py-16 bg-[#10121a] border-t border-neutral-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#d4af37] uppercase mb-2">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Goal Planner</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase font-display">
            Calculate Your Target & Training Blueprint
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-neutral-400">
            Estimate your body metrics and select your primary objective to receive a customized gym roadmap.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-[#141622] border border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-xl">
          {/* Sliders on Left */}
          <div className="md:col-span-6 space-y-6">
            <div>
              <div className="flex justify-between text-xs font-semibold uppercase text-neutral-300 mb-2">
                <span>Height</span>
                <span className="text-[#d4af37] font-mono text-sm">{height} cm</span>
              </div>
              <input
                type="range"
                min="130"
                max="215"
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
                className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-[#d4af37]"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold uppercase text-neutral-300 mb-2">
                <span>Body Weight</span>
                <span className="text-[#d4af37] font-mono text-sm">{weight} kg</span>
              </div>
              <input
                type="range"
                min="35"
                max="150"
                value={weight}
                onChange={(e) => setWeight(Number(e.target.value))}
                className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-[#d4af37]"
              />
            </div>

            {/* Goal Selector Buttons */}
            <div>
              <label className="block text-xs font-semibold uppercase text-neutral-400 mb-2">
                Primary Goal
              </label>
              <div className="grid grid-cols-2 gap-2">
                {(['hypertrophy', 'fatloss', 'strength', 'general'] as const).map((type) => (
                  <button
                    key={type}
                    onClick={() => setGoalType(type)}
                    className={`px-3 py-2 text-xs font-semibold rounded-lg border text-left transition-all cursor-pointer ${
                      goalType === type
                        ? 'bg-[#d4af37]/20 border-[#d4af37] text-white'
                        : 'bg-[#0c0d12] border-neutral-800 text-neutral-400 hover:text-white'
                    }`}
                  >
                    {goals[type].title}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Metric Blueprint Summary on Right */}
          <div className="md:col-span-6 bg-[#0c0d12] border border-neutral-800/90 rounded-xl p-5 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
              <div>
                <span className="text-xs uppercase text-neutral-400 block">Body Mass Index</span>
                <span className="text-3xl font-extrabold text-white font-mono tabular-nums">{bmi}</span>
              </div>
              <div className="text-right">
                <span className="text-xs uppercase text-neutral-400 block">Classification</span>
                <span className={`text-xs font-bold ${categoryColor}`}>{bmiCategory}</span>
              </div>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <Activity className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span className="text-neutral-300">
                  <strong className="text-white">Recommended Frequency:</strong> {currentGoal.days}
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Flame className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span className="text-neutral-300">
                  <strong className="text-white">Training Focus:</strong> {currentGoal.focus}
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Dumbbell className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span className="text-neutral-300">
                  <strong className="text-white">Suggested Tier:</strong> {currentGoal.planName}
                </span>
              </div>
            </div>

            <button
              onClick={handleApplyToRegistration}
              className="w-full py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-black bg-[#d4af37] hover:bg-[#ffd700] rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <span>Apply This Blueprint to Registration</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
