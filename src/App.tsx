import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { FacilitiesSection } from './components/FacilitiesSection';
import { SportsZoneSection } from './components/SportsZoneSection';
import { MembershipPlans } from './components/MembershipPlans';
import { FitnessCalculator } from './components/FitnessCalculator';
import { RegistrationForm } from './components/RegistrationForm';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [selectedPlanId, setSelectedPlanId] = useState<string>('adult-monthly');
  const [withTrainer, setWithTrainer] = useState<boolean>(false);

  const scrollToRegistration = (planId?: string, trainer?: boolean) => {
    if (planId) {
      setSelectedPlanId(planId);
    }
    if (trainer !== undefined) {
      setWithTrainer(trainer);
    }
    const elem = document.getElementById('register');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPlans = () => {
    const elem = document.getElementById('memberships');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleApplyFitnessGoal = (goalText: string, suggestedPlanId: string) => {
    setSelectedPlanId(suggestedPlanId);
    const elem = document.getElementById('register');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0c0d12] text-[#e5e7eb] flex flex-col font-sans selection:bg-[#d4af37]/30 selection:text-[#ffd700]">
      {/* Navigation */}
      <Navbar onJoinClick={() => scrollToRegistration()} />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero 
          onJoinClick={() => scrollToRegistration()} 
          onViewPlansClick={scrollToPlans} 
        />

        {/* 2. About Our Gym */}
        <AboutSection />

        {/* 3. Facilities & Zones Showcase */}
        <FacilitiesSection />

        {/* 4. New Sports & Recreation Zone (Badminton, Cricket Nets, Basketball & Open Turf) */}
        <SportsZoneSection />

        {/* 5. Membership Plans & Rates */}
        <MembershipPlans 
          onSelectPlan={(planId, trainer) => scrollToRegistration(planId, trainer)} 
        />

        {/* 5. Interactive Fitness & Goal Blueprint Calculator */}
        <FitnessCalculator onApplyGoal={handleApplyFitnessGoal} />

        {/* 6. Membership Registration Form */}
        <RegistrationForm 
          selectedPlanId={selectedPlanId} 
          withTrainerDefault={withTrainer} 
        />

        {/* 7. Contact Us & Google Maps */}
        <ContactSection />
      </main>

      {/* 8. Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Action */}
      <FloatingWhatsApp />
    </div>
  );
}
