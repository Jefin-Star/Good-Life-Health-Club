import React, { useState, useEffect } from 'react';
import { GymLogo } from './GymLogo';
import { GYM_CONFIG } from '../data/gymData';
import { Menu, X, MessageCircle } from 'lucide-react';

interface NavbarProps {
  onJoinClick: (planId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onJoinClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Facilities', href: '#facilities' },
    { label: 'Sports & Rec Zone', href: '#sports-zone', isNew: true },
    { label: 'Memberships', href: '#memberships' },
    { label: 'Register', href: '#register' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0c0d12]/95 backdrop-blur-md border-b border-neutral-800/80 py-3 shadow-xl shadow-black/40' 
          : 'bg-gradient-to-b from-[#0c0d12]/90 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Zone 1: Brand Wordmark with Permanent Official Logo */}
        <div className="flex items-center gap-2.5">
          <a href="#" className="flex items-center group">
            <GymLogo size="md" />
          </a>
        </div>

        {/* Zone 2: Clean Text Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-300">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              className="hover:text-[#d4af37] transition-colors relative py-1 flex items-center gap-1.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#d4af37] hover:after:w-full after:transition-all after:duration-200"
            >
              <span>{link.label}</span>
              {link.isNew && (
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.2 bg-[#2dd4bf]/20 text-[#2dd4bf] border border-[#2dd4bf]/40 rounded">
                  NEW
                </span>
              )}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={GYM_CONFIG.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-800/50 rounded-lg hover:bg-emerald-900/50 transition-colors whitespace-nowrap"
            title="Chat directly on WhatsApp"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>WhatsApp</span>
          </a>

          <button
            onClick={() => onJoinClick()}
            className="px-5 py-2 text-xs font-bold text-black uppercase tracking-wider bg-gradient-to-r from-[#e5a93b] via-[#d4af37] to-[#f3c859] rounded-lg shadow-md shadow-[#d4af37]/20 hover:brightness-110 active:scale-95 transition-all whitespace-nowrap cursor-pointer"
          >
            Join Now
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => onJoinClick()}
            className="px-3 py-1.5 text-xs font-bold text-black bg-[#d4af37] rounded-md"
          >
            Join
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-neutral-300 hover:text-white rounded-md bg-neutral-900 border border-neutral-800"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#0c0d12]/98 border-b border-neutral-800 px-6 py-5 shadow-2xl backdrop-blur-xl">
          <nav className="flex flex-col gap-4 text-base font-medium text-neutral-200">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-1 hover:text-[#d4af37] transition-colors border-b border-neutral-800/40 flex items-center justify-between"
              >
                <span>{link.label}</span>
                {link.isNew && (
                  <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 bg-[#2dd4bf]/20 text-[#2dd4bf] border border-[#2dd4bf]/40 rounded">
                    NEW EXPANSION
                  </span>
                )}
              </a>
            ))}

            <div className="pt-2 flex flex-col gap-2.5">
              <a
                href={GYM_CONFIG.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-800/50 rounded-lg"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp ({GYM_CONFIG.contact.rawPhone})</span>
              </a>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onJoinClick();
                }}
                className="w-full py-3 text-sm font-bold text-black uppercase tracking-wider bg-gradient-to-r from-[#e5a93b] to-[#d4af37] rounded-lg shadow-md"
              >
                Join Now - Get Membership
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
