import React from 'react';
import { GymLogo } from './GymLogo';
import { GYM_CONFIG } from '../data/gymData';
import { MessageCircle, Mail, Instagram, MapPin, Phone, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#08090d] text-neutral-400 border-t border-neutral-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-neutral-800/60">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <GymLogo size="lg" showTagline={true} />
            <p className="text-xs sm:text-sm text-neutral-400 max-w-sm leading-relaxed mt-1">
              Good Life Health Club is Kayamkulam's premier fitness destination for progressive strength training, cardio conditioning, and customized certified personal coaching.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={GYM_CONFIG.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-emerald-500/50 hover:text-emerald-400 flex items-center justify-center transition-colors"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={GYM_CONFIG.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-rose-500/50 hover:text-rose-400 flex items-center justify-center transition-colors"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${GYM_CONFIG.contact.email}`}
                className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-blue-500/50 hover:text-blue-400 flex items-center justify-center transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={GYM_CONFIG.contact.mapDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-[#d4af37] hover:text-[#d4af37] flex items-center justify-center transition-colors"
                title="Google Maps"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#about" className="hover:text-[#d4af37] transition-colors">
                  About Our Gym
                </a>
              </li>
              <li>
                <a href="#memberships" className="hover:text-[#d4af37] transition-colors">
                  Membership Plans
                </a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-[#d4af37] transition-colors">
                  Facilities & Equipment
                </a>
              </li>
              <li>
                <a href="#register" className="hover:text-[#d4af37] transition-colors">
                  Registration Portal
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#d4af37] transition-colors">
                  Location & Hours
                </a>
              </li>
            </ul>
          </div>

          {/* Pricing Tiers Quick Ref */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Memberships
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li className="flex justify-between">
                <span>Student (≤17):</span>
                <span className="text-white font-mono">₹1,000/mo</span>
              </li>
              <li className="flex justify-between">
                <span>Adult Monthly:</span>
                <span className="text-white font-mono">₹1,300/mo</span>
              </li>
              <li className="flex justify-between">
                <span>3 Months:</span>
                <span className="text-white font-mono">₹3,500</span>
              </li>
              <li className="flex justify-between">
                <span>6 Months:</span>
                <span className="text-white font-mono">₹6,500</span>
              </li>
              <li className="flex justify-between">
                <span>1 Year Elite:</span>
                <span className="text-[#d4af37] font-mono">₹12,500</span>
              </li>
              <li className="flex justify-between pt-1 border-t border-neutral-800">
                <span>Trainer Add-on:</span>
                <span className="text-white font-mono">₹3,000/mo</span>
              </li>
            </ul>
          </div>

          {/* Contact Summary */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Direct Desk
            </h4>
            <div className="space-y-2 text-xs text-neutral-400">
              <p>
                <strong className="text-neutral-300 block">WhatsApp / Phone:</strong>
                <a href={GYM_CONFIG.contact.whatsappUrl} className="hover:text-emerald-400 font-mono">
                  +91 {GYM_CONFIG.contact.rawPhone}
                </a>
              </p>
              <p>
                <strong className="text-neutral-300 block">Email:</strong>
                <a href={`mailto:${GYM_CONFIG.contact.email}`} className="hover:text-blue-400 break-all">
                  {GYM_CONFIG.contact.email}
                </a>
              </p>
              <p>
                <strong className="text-neutral-300 block">Location:</strong>
                <span>Good Life Health Club, Kayamkulam, Kerala</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>
            © {new Date().getFullYear()} Good Life Health Club. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
