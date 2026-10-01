import React, { useState } from 'react';
import { GYM_CONFIG } from '../data/gymData';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-center gap-3">
      {/* Tooltip banner */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-neutral-900 border border-neutral-700 shadow-xl text-xs text-white">
          <span>Need help? Chat with gym desk</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-neutral-400 hover:text-white p-0.5 rounded"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={GYM_CONFIG.contact.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Good Life Health Club on WhatsApp"
        className="w-13 h-13 rounded-full bg-emerald-500 hover:bg-emerald-400 active:scale-95 text-white flex items-center justify-center shadow-lg shadow-emerald-950/60 transition-transform duration-200 group"
      >
        <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform" />
      </a>
    </div>
  );
};
