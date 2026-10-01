import React, { useState } from 'react';
import { GYM_CONFIG } from '../data/gymData';
import { 
  MessageCircle, 
  Mail, 
  Instagram, 
  MapPin, 
  Clock, 
  Phone, 
  ExternalLink, 
  Copy, 
  Check,
  Send
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [quickMsg, setQuickMsg] = useState('');

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleQuickWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickMsg.trim()) return;
    const url = `https://wa.me/91${GYM_CONFIG.contact.rawPhone}?text=${encodeURIComponent(
      `Hello Good Life Health Club! Inquiry: ${quickMsg.trim()}`
    )}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setQuickMsg('');
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#0c0d12] border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold tracking-[0.2em] text-[#d4af37] uppercase mb-2">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase font-display">
            Contact & Location
          </h2>
          <p className="mt-3 text-base text-neutral-400">
            Have questions about memberships, schedule, or equipment? Reach out directly or visit our facility in Kayamkulam.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Channels & Quick Message */}
          <div className="lg:col-span-5 space-y-6">
            {/* Clickable Channel Cards */}
            <div className="space-y-3.5">
              {/* WhatsApp Card */}
              <div className="group p-5 rounded-2xl bg-[#12141c] border border-neutral-800 hover:border-emerald-500/50 transition-all shadow-md">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-950/60 border border-emerald-800/60 flex items-center justify-center text-emerald-400">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider text-neutral-400 font-semibold block">
                        Official WhatsApp
                      </span>
                      <a
                        href={GYM_CONFIG.contact.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors inline-flex items-center gap-1 font-mono"
                      >
                        +91 {GYM_CONFIG.contact.rawPhone}
                        <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(GYM_CONFIG.contact.rawPhone, 'whatsapp')}
                    className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors"
                    title="Copy phone number"
                  >
                    {copiedField === 'whatsapp' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Email Card */}
              <div className="group p-5 rounded-2xl bg-[#12141c] border border-neutral-800 hover:border-blue-500/50 transition-all shadow-md">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-950/60 border border-blue-800/60 flex items-center justify-center text-blue-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider text-neutral-400 font-semibold block">
                        Email Desk
                      </span>
                      <a
                        href={`mailto:${GYM_CONFIG.contact.email}`}
                        className="text-sm sm:text-base font-bold text-white group-hover:text-blue-400 transition-colors inline-flex items-center gap-1 break-all"
                      >
                        {GYM_CONFIG.contact.email}
                        <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(GYM_CONFIG.contact.email, 'email')}
                    className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors shrink-0"
                    title="Copy email"
                  >
                    {copiedField === 'email' ? <Check className="w-4 h-4 text-blue-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Instagram Card */}
              <div className="group p-5 rounded-2xl bg-[#12141c] border border-neutral-800 hover:border-rose-500/50 transition-all shadow-md">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-rose-950/60 border border-rose-800/60 flex items-center justify-center text-rose-400">
                      <Instagram className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider text-neutral-400 font-semibold block">
                        Instagram Profile
                      </span>
                      <a
                        href={GYM_CONFIG.contact.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base font-bold text-white group-hover:text-rose-400 transition-colors inline-flex items-center gap-1 font-mono"
                      >
                        {GYM_CONFIG.contact.instagramHandle}
                        <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                      </a>
                    </div>
                  </div>
                  <a
                    href={GYM_CONFIG.contact.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 text-xs font-semibold text-rose-300 bg-rose-950/50 border border-rose-800/50 rounded-lg hover:bg-rose-900/50 transition-colors"
                  >
                    Follow
                  </a>
                </div>
              </div>

              {/* Operating Hours Card */}
              <div className="p-5 rounded-2xl bg-[#12141c] border border-neutral-800 shadow-md">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-950/60 border border-amber-800/60 flex items-center justify-center text-[#d4af37]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs uppercase tracking-wider text-neutral-400 font-semibold block mb-1">
                      Operating Hours
                    </span>
                    <div className="space-y-1 text-xs sm:text-sm text-neutral-200">
                      {GYM_CONFIG.timings.map((time, idx) => (
                        <div key={idx} className="flex justify-between border-b border-neutral-800/40 pb-1 last:border-0">
                          <span className="text-neutral-400">{time.days}</span>
                          <span className="font-medium text-white">{time.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Instant Inquiry over WhatsApp */}
            <div className="p-5 rounded-2xl bg-[#141620] border border-neutral-800">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#d4af37] mb-2 flex items-center gap-2">
                <Send className="w-3.5 h-3.5" />
                <span>Quick WhatsApp Inquiry</span>
              </h4>
              <form onSubmit={handleQuickWhatsAppSend} className="space-y-3">
                <textarea
                  rows={2}
                  value={quickMsg}
                  onChange={(e) => setQuickMsg(e.target.value)}
                  placeholder="Ask any question about trial visits, timings, or personal coaching..."
                  className="w-full px-3 py-2 bg-[#0c0d12] rounded-xl border border-neutral-700/80 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#d4af37]"
                />
                <button
                  type="submit"
                  disabled={!quickMsg.trim()}
                  className="w-full py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-black bg-[#d4af37] hover:bg-[#ffd700] disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Send directly to WhatsApp</span>
                </button>
              </form>
            </div>
          </div>

          {/* Right Column: Google Maps Embed with Location details */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            <div className="bg-[#12141c] border border-neutral-800 rounded-2xl p-4 shadow-xl overflow-hidden">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 mb-2 border-b border-neutral-800/80 gap-2">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-300">
                  <MapPin className="w-4 h-4 text-[#d4af37] shrink-0" />
                  <span className="font-semibold text-white">Good Life Health Club</span>
                  <span className="text-neutral-500">·</span>
                  <span className="text-neutral-400">Kayamkulam, Kerala</span>
                </div>
                <a
                  href={GYM_CONFIG.contact.mapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#d4af37] hover:underline flex items-center gap-1"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Exact Google Maps Embed as requested */}
              <div className="relative w-full rounded-xl overflow-hidden border border-neutral-800 aspect-[16/10] sm:aspect-[16/9] bg-neutral-900">
                <iframe
                  src={GYM_CONFIG.contact.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="Good Life Health Club Location Map"
                  className="w-full h-full grayscale-[20%] contrast-110"
                />
              </div>

              <div className="mt-3 text-[11px] text-neutral-400 flex items-center justify-between px-1">
                <span>Coordinates: {GYM_CONFIG.contact.coordinates}</span>
                <span>Near Kayamkulam Town Center</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
