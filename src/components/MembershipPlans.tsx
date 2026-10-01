import React from 'react';
import { MEMBERSHIP_PLANS, PERSONAL_TRAINER_INFO, MembershipPlan, GYM_CONFIG } from '../data/gymData';
import { Check, Star, Zap, UserCheck, Sparkles, ArrowRight } from 'lucide-react';

interface MembershipPlansProps {
  onSelectPlan: (planId: string, withTrainer?: boolean) => void;
}

export const MembershipPlans: React.FC<MembershipPlansProps> = ({ onSelectPlan }) => {
  return (
    <section id="memberships" className="py-20 sm:py-28 bg-[#0c0d12] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#d4af37] uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transparent Investment</span>
            <span aria-hidden="true">·</span>
            <span>No Hidden Surcharges</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase font-display text-balance">
            Membership Plans & Rates
          </h2>
          <p className="mt-4 text-base text-neutral-400 text-balance leading-relaxed">
            Select the tier that aligns with your discipline. Enjoy full gym floor access, locker amenities, and professional coaching environment.
          </p>

          {/* Admission Fee Notice */}
          <div className="mt-6 inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#171923] border border-neutral-700/80 text-xs sm:text-sm text-neutral-300">
            <span className="w-2 h-2 rounded-full bg-[#d4af37]" />
            <span>
              One-Time Admission Fee: <strong className="text-white font-mono font-bold">₹{GYM_CONFIG.admissionFee}</strong> (Applies to monthly plans)
            </span>
          </div>
        </div>

        {/* 5 Membership Plan Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch mb-12">
          {MEMBERSHIP_PLANS.map((plan: MembershipPlan) => {
            const isFeatured = plan.isPopular || plan.isBestValue;
            return (
              <div
                key={plan.id}
                className={`relative flex flex-col justify-between rounded-2xl p-6 sm:p-7 transition-all duration-300 ${
                  isFeatured
                    ? 'bg-[#151722] border-2 border-[#d4af37] shadow-xl shadow-[#d4af37]/10 -translate-y-1'
                    : 'bg-[#11131a] border border-neutral-800 hover:border-neutral-700'
                }`}
              >
                {/* Top Badge */}
                {plan.badge && (
                  <div className="absolute -top-3 right-6">
                    <span className={`px-3 py-1 text-[11px] font-bold tracking-wider uppercase rounded-full shadow-md ${
                      plan.isBestValue
                        ? 'bg-gradient-to-r from-[#ffd700] to-[#e6a836] text-black'
                        : 'bg-[#d4af37] text-black'
                    }`}>
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Plan Name & Tagline */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white font-display">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-neutral-400 mt-1 min-h-[32px]">
                      {plan.description}
                    </p>
                  </div>

                  {/* Pricing Display */}
                  <div className="py-4 my-2 border-y border-neutral-800/80">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-sm font-semibold text-neutral-400">₹</span>
                      <span className="text-4xl sm:text-5xl font-extrabold text-white font-mono tabular-nums tracking-tight">
                        {plan.price.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs text-neutral-400 font-medium">
                        / {plan.period}
                      </span>
                    </div>

                    {/* Admission fee subtext */}
                    <div className="mt-1.5 text-xs">
                      {plan.admissionFee > 0 ? (
                        <span className="text-neutral-400">
                          + ₹{plan.admissionFee} one-time admission fee
                        </span>
                      ) : (
                        <span className="text-emerald-400 font-medium">
                          ✓ Admission fee waived
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card CTA Button */}
                <div className="pt-6 mt-4 border-t border-neutral-800/60">
                  <button
                    onClick={() => onSelectPlan(plan.id)}
                    className={`w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      isFeatured
                        ? 'bg-gradient-to-r from-[#e5a93b] via-[#d4af37] to-[#ffd700] text-black shadow-lg shadow-[#d4af37]/20 hover:brightness-110'
                        : 'bg-neutral-800 hover:bg-neutral-700 text-white'
                    }`}
                  >
                    <span>Join Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Personal Trainer Feature Spotlight Card */}
        <div className="relative rounded-2xl bg-gradient-to-r from-[#171a25] via-[#151722] to-[#12141c] border border-[#d4af37]/40 p-6 sm:p-8 lg:p-10 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-[#d4af37] uppercase">
                <UserCheck className="w-4 h-4" />
                <span>Dedicated 1-on-1 Guidance</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display uppercase tracking-tight">
                Personal Trainer Add-on · ₹3,000 / month
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed max-w-2xl">
                Accelerate your progress with certified personal coaches. Receive customized daily workout routines, form supervision, body fat tracking, and targeted nutrition advice.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {PERSONAL_TRAINER_INFO.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-neutral-300">
                    <Check className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center">
              <div className="text-center lg:text-right mb-4">
                <span className="text-xs text-neutral-400 uppercase tracking-widest block">Coaching Fee</span>
                <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono tabular-nums">
                  ₹{PERSONAL_TRAINER_INFO.fee.toLocaleString('en-IN')}
                </span>
                <span className="text-xs text-neutral-400 block">per month (add-on to any plan)</span>
              </div>
              <button
                onClick={() => onSelectPlan('adult-monthly', true)}
                className="w-full sm:w-auto px-7 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-black bg-[#d4af37] hover:bg-[#ffd700] rounded-xl transition-all shadow-md shadow-[#d4af37]/20 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Register with Trainer</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
