import React, { useState, useEffect } from 'react';
import { MEMBERSHIP_PLANS, PERSONAL_TRAINER_INFO, GYM_CONFIG } from '../data/gymData';
import { 
  Send, 
  CheckCircle, 
  AlertCircle, 
  Copy, 
  Check, 
  MessageCircle, 
  Calendar, 
  User, 
  Mail, 
  Phone, 
  Target,
  Sparkles 
} from 'lucide-react';

interface RegistrationFormProps {
  selectedPlanId?: string;
  withTrainerDefault?: boolean;
}

export const RegistrationForm: React.FC<RegistrationFormProps> = ({ 
  selectedPlanId, 
  withTrainerDefault = false 
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [planId, setPlanId] = useState(selectedPlanId || 'adult-monthly');
  const [includeTrainer, setIncludeTrainer] = useState(withTrainerDefault);
  const [startDate, setStartDate] = useState('');
  const [fitnessGoals, setFitnessGoals] = useState('');
  const [selectedSports, setSelectedSports] = useState<string[]>([]);
  
  // Validation and Submission State
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionData, setSubmissionData] = useState<any>(null);
  const [copied, setCopied] = useState(false);

  // Sync selectedPlanId from external buttons
  useEffect(() => {
    if (selectedPlanId) {
      setPlanId(selectedPlanId);
    }
  }, [selectedPlanId]);

  useEffect(() => {
    if (withTrainerDefault !== undefined) {
      setIncludeTrainer(withTrainerDefault);
    }
  }, [withTrainerDefault]);

  // Set default start date to today
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setStartDate(today);
  }, []);

  const currentPlan = MEMBERSHIP_PLANS.find(p => p.id === planId) || MEMBERSHIP_PLANS[1];

  // Calculate pricing breakdown
  const planFee = currentPlan.price;
  const admissionFee = currentPlan.admissionFee;
  const trainerFee = includeTrainer ? PERSONAL_TRAINER_INFO.fee : 0;
  const totalFirstPay = planFee + admissionFee + trainerFee;

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!fullName.trim() || fullName.trim().length < 2) {
      errs.fullName = 'Please enter your full name.';
    }

    const cleanPhone = phone.replace(/[^0-9]/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      errs.phone = 'Please enter a valid 10-digit mobile number.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email)) {
      errs.email = 'Please provide a valid email address.';
    }

    if (!startDate) {
      errs.startDate = 'Please select your preferred start date.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const generateWhatsAppMessage = () => {
    return `*NEW REGISTRATION - GOOD LIFE HEALTH CLUB*%0A` +
      `------------------------------------%0A` +
      `*Name:* ${encodeURIComponent(fullName.trim())}%0A` +
      `*Phone:* ${encodeURIComponent(phone.trim())}%0A` +
      `*Email:* ${encodeURIComponent(email.trim())}%0A` +
      `*Membership Plan:* ${encodeURIComponent(currentPlan.name)} (₹${currentPlan.price})%0A` +
      `*Admission Fee:* ₹${admissionFee}%0A` +
      `*Personal Trainer:* ${includeTrainer ? 'YES (+₹3,000/mo)' : 'NO'}%0A` +
      `*Total Estimated Due:* ₹${totalFirstPay}%0A` +
      `*Start Date:* ${encodeURIComponent(startDate)}%0A` +
      `*Fitness Goals:* ${encodeURIComponent(fitnessGoals.trim() || 'General Strength & Health')}%0A` +
      (selectedSports.length > 0 ? `*Sports Zone Interests:* ${encodeURIComponent(selectedSports.join(', '))}%0A` : '') +
      `------------------------------------%0A` +
      `_Sent from website registration portal_`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const refCode = `GLHC-${Math.floor(1000 + Math.random() * 9000)}`;
    const submission = {
      refCode,
      fullName: fullName.trim(),
      phone: phone.trim(),
      email: email.trim(),
      plan: currentPlan,
      includeTrainer,
      startDate,
      fitnessGoals: fitnessGoals.trim() || 'General Fitness',
      selectedSports,
      totalFirstPay,
      dateSubmitted: new Date().toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      }),
    };

    // Save locally
    try {
      const existing = JSON.parse(localStorage.getItem('glhc_registrations') || '[]');
      existing.unshift(submission);
      localStorage.setItem('glhc_registrations', JSON.stringify(existing.slice(0, 10)));
    } catch {
      // ignore local storage errors
    }

    setSubmissionData(submission);
    setIsSubmitted(true);

    // Automatically trigger WhatsApp URL
    const whatsappUrl = `https://wa.me/91${GYM_CONFIG.contact.rawPhone}?text=${generateWhatsAppMessage()}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleCopyDetails = () => {
    if (!submissionData) return;
    const textToCopy = `GOOD LIFE HEALTH CLUB REGISTRATION\nRef: ${submissionData.refCode}\nName: ${submissionData.fullName}\nPhone: ${submissionData.phone}\nPlan: ${submissionData.plan.name} (₹${submissionData.plan.price})\nPersonal Trainer: ${submissionData.includeTrainer ? 'Yes' : 'No'}\nStart Date: ${submissionData.startDate}\nTotal: ₹${submissionData.totalFirstPay}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="register" className="py-20 sm:py-28 bg-[#0e1017] border-t border-neutral-800 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#d4af37] uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Join The Good Life Family</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase font-display">
            Membership Registration Form
          </h2>
          <p className="mt-3 text-sm text-neutral-400 max-w-xl mx-auto text-balance">
            Fill in your details below to reserve your membership. Your registration connects directly with our official gym desk for instant onboarding.
          </p>
        </div>

        {/* Success Modal / State */}
        {isSubmitted && submissionData ? (
          <div className="bg-[#141622] border-2 border-emerald-500/80 rounded-2xl p-6 sm:p-10 shadow-2xl animate-fade-in text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/40">
              <CheckCircle className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold text-white font-display mb-2">
              Registration Received Successfully!
            </h3>
            <p className="text-sm text-neutral-300 max-w-md mx-auto mb-6">
              Welcome to Good Life Health Club, <strong className="text-white">{submissionData.fullName}</strong>. Your membership intake summary has been drafted for WhatsApp.
            </p>

            {/* Registration Summary Card */}
            <div className="bg-[#0c0d12] border border-neutral-800 rounded-xl p-5 max-w-md mx-auto text-left space-y-3 mb-6">
              <div className="flex justify-between items-center pb-2 border-b border-neutral-800 text-xs">
                <span className="text-neutral-400 uppercase tracking-wider">Registration Ref</span>
                <span className="text-[#d4af37] font-mono font-bold">{submissionData.refCode}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-neutral-400">Plan:</span>
                <span className="text-white font-medium">{submissionData.plan.name}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-neutral-400">Preferred Start Date:</span>
                <span className="text-white font-medium">{submissionData.startDate}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-neutral-400">Personal Trainer:</span>
                <span className="text-white font-medium">
                  {submissionData.includeTrainer ? 'Yes (+₹3,000/mo)' : 'Standard Gym Access'}
                </span>
              </div>
              {submissionData.selectedSports && submissionData.selectedSports.length > 0 && (
                <div className="flex justify-between items-start text-xs pt-1 border-t border-neutral-800/60">
                  <span className="text-[#2dd4bf]">Sports Zone Interests:</span>
                  <span className="text-neutral-300 text-right max-w-[60%] font-medium">
                    {submissionData.selectedSports.join(', ')}
                  </span>
                </div>
              )}
              <div className="flex justify-between items-center pt-2 border-t border-neutral-800 text-base font-bold">
                <span className="text-white">Estimated First Payment:</span>
                <span className="text-[#d4af37] font-mono">₹{submissionData.totalFirstPay.toLocaleString('en-IN')}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`https://wa.me/91${GYM_CONFIG.contact.rawPhone}?text=${generateWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/30 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Confirm on WhatsApp ({GYM_CONFIG.contact.phone})</span>
              </a>

              <button
                onClick={handleCopyDetails}
                className="w-full sm:w-auto px-5 py-3 text-xs sm:text-sm font-semibold text-neutral-300 bg-neutral-800 hover:bg-neutral-700 rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Copied to Clipboard' : 'Copy Details'}</span>
              </button>

              <button
                onClick={() => setIsSubmitted(false)}
                className="w-full sm:w-auto px-4 py-3 text-xs text-neutral-400 hover:text-white underline transition-colors cursor-pointer"
              >
                Register Another Member
              </button>
            </div>
          </div>
        ) : (
          /* The Form */
          <div className="bg-[#12141c] border border-neutral-800/90 rounded-2xl p-6 sm:p-10 shadow-2xl">
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-neutral-500 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => {
                        setFullName(e.target.value);
                        if (errors.fullName) setErrors({ ...errors, fullName: '' });
                      }}
                      placeholder="e.g. Rahul Sharma"
                      className={`w-full pl-10 pr-4 py-3 bg-[#0c0d12] rounded-xl border text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 transition-colors ${
                        errors.fullName 
                          ? 'border-red-500/80 focus:ring-red-500' 
                          : 'border-neutral-700/80 focus:border-[#d4af37] focus:ring-[#d4af37]'
                      }`}
                    />
                  </div>
                  {errors.fullName && (
                    <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                    Phone Number (WhatsApp) <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-neutral-500 absolute left-3.5 top-3.5" />
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        if (errors.phone) setErrors({ ...errors, phone: '' });
                      }}
                      placeholder="10-digit mobile (e.g. 9961020029)"
                      className={`w-full pl-10 pr-4 py-3 bg-[#0c0d12] rounded-xl border text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 transition-colors ${
                        errors.phone 
                          ? 'border-red-500/80 focus:ring-red-500' 
                          : 'border-neutral-700/80 focus:border-[#d4af37] focus:ring-[#d4af37]'
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Email Address */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-neutral-500 absolute left-3.5 top-3.5" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      placeholder="e.g. athlete@gmail.com"
                      className={`w-full pl-10 pr-4 py-3 bg-[#0c0d12] rounded-xl border text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 transition-colors ${
                        errors.email 
                          ? 'border-red-500/80 focus:ring-red-500' 
                          : 'border-neutral-700/80 focus:border-[#d4af37] focus:ring-[#d4af37]'
                      }`}
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Preferred Start Date */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                    Preferred Start Date <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-neutral-500 absolute left-3.5 top-3.5" />
                    <input
                      type="date"
                      value={startDate}
                      onChange={(e) => {
                        setStartDate(e.target.value);
                        if (errors.startDate) setErrors({ ...errors, startDate: '' });
                      }}
                      className={`w-full pl-10 pr-4 py-3 bg-[#0c0d12] rounded-xl border text-sm text-white focus:outline-none focus:ring-1 transition-colors ${
                        errors.startDate 
                          ? 'border-red-500/80 focus:ring-red-500' 
                          : 'border-neutral-700/80 focus:border-[#d4af37] focus:ring-[#d4af37]'
                      }`}
                    />
                  </div>
                  {errors.startDate && (
                    <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.startDate}
                    </p>
                  )}
                </div>
              </div>

              {/* Membership Plan (Dropdown) */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                  Membership Plan <span className="text-red-400">*</span>
                </label>
                <select
                  value={planId}
                  onChange={(e) => setPlanId(e.target.value)}
                  className="w-full px-4 py-3 bg-[#0c0d12] rounded-xl border border-neutral-700/80 text-sm text-white focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-colors"
                >
                  {MEMBERSHIP_PLANS.map((plan) => (
                    <option key={plan.id} value={plan.id}>
                      {plan.name} — ₹{plan.price.toLocaleString('en-IN')} / {plan.period} {plan.admissionFee > 0 ? `(+ ₹${plan.admissionFee} admission)` : '(admission waived)'}
                    </option>
                  ))}
                </select>
              </div>

              {/* Personal Trainer Add-on Checkbox */}
              <div className="p-4 rounded-xl bg-[#0c0d12] border border-neutral-800 flex items-start gap-3">
                <input
                  type="checkbox"
                  id="includeTrainer"
                  checked={includeTrainer}
                  onChange={(e) => setIncludeTrainer(e.target.checked)}
                  className="mt-1 w-4 h-4 rounded text-[#d4af37] focus:ring-[#d4af37] bg-neutral-900 border-neutral-700 accent-[#d4af37]"
                />
                <label htmlFor="includeTrainer" className="text-xs sm:text-sm cursor-pointer select-none">
                  <span className="font-bold text-white block">
                    Add 1-on-1 Personal Trainer (+₹{PERSONAL_TRAINER_INFO.fee.toLocaleString('en-IN')} / month)
                  </span>
                  <span className="text-neutral-400 block text-xs mt-0.5">
                    Includes dedicated technique coaching, tailored workouts, and daily macro/nutrition supervision.
                  </span>
                </label>
              </div>

              {/* Sports & Recreation Zone Amenities Interest */}
              <div className="p-4 sm:p-5 rounded-xl bg-[#0c0d12] border border-neutral-800 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#d4af37] block">
                    Sports & Recreation Zone (New Amenities)
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 bg-[#2dd4bf]/20 text-[#2dd4bf] border border-[#2dd4bf]/40 rounded">
                    EXPANSION
                  </span>
                </div>
                <p className="text-xs text-neutral-400">
                  Select sports facilities you are interested in for court priority & booking alerts:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  {[
                    { id: 'badminton', label: '🏸 Professional Badminton Courts' },
                    { id: 'cricket', label: '🏏 Cricket Net Practice' },
                    { id: 'basketball', label: '🏀 High Quality Basketball Court' },
                    { id: 'open-area', label: '🏟️ Versatile Open Playing Area' },
                  ].map((sport) => {
                    const isChecked = selectedSports.includes(sport.label);
                    return (
                      <label 
                        key={sport.id}
                        className={`flex items-center gap-2.5 p-2.5 rounded-lg border text-xs cursor-pointer transition-all ${
                          isChecked 
                            ? 'bg-[#151926] border-[#2dd4bf] text-white font-medium' 
                            : 'bg-neutral-900/60 border-neutral-800 text-neutral-300 hover:border-neutral-700'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedSports([...selectedSports, sport.label]);
                            } else {
                              setSelectedSports(selectedSports.filter(s => s !== sport.label));
                            }
                          }}
                          className="w-4 h-4 rounded text-[#2dd4bf] border-neutral-700 focus:ring-[#2dd4bf]"
                        />
                        <span>{sport.label}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Message / Fitness Goals */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                  Message / Fitness Goals
                </label>
                <div className="relative">
                  <Target className="w-4 h-4 text-neutral-500 absolute left-3.5 top-3.5" />
                  <textarea
                    rows={3}
                    value={fitnessGoals}
                    onChange={(e) => setFitnessGoals(e.target.value)}
                    placeholder="Tell us what you want to accomplish (e.g. Muscle Gain, Fat Loss, Strength Training, Marathon conditioning, or any prior injuries)..."
                    className="w-full pl-10 pr-4 py-3 bg-[#0c0d12] rounded-xl border border-neutral-700/80 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-colors resize-none"
                  />
                </div>
              </div>

              {/* Price Calculation Summary Box */}
              <div className="p-4 rounded-xl bg-[#171923] border border-neutral-800 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm">
                <div className="text-neutral-300">
                  <span className="font-semibold text-white">Estimated Intake Due:</span>{' '}
                  <span className="text-neutral-400">
                    Plan ₹{planFee} {admissionFee > 0 ? `+ Admission ₹${admissionFee}` : ''} {includeTrainer ? `+ Trainer ₹${trainerFee}` : ''}
                  </span>
                </div>
                <div className="text-lg sm:text-xl font-extrabold text-[#d4af37] font-mono tabular-nums">
                  ₹{totalFirstPay.toLocaleString('en-IN')}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 text-sm font-bold tracking-wider uppercase text-black bg-gradient-to-r from-[#e5a93b] via-[#d4af37] to-[#ffd700] rounded-xl shadow-lg shadow-[#d4af37]/20 hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Submit Registration & Connect via WhatsApp</span>
              </button>

              <p className="text-center text-[11px] text-neutral-500">
                🔒 Your details are handled confidentially and dispatched to Good Life Health Club's official WhatsApp desk ({GYM_CONFIG.contact.phone}).
              </p>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};
