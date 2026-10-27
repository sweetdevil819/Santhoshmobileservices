import React from 'react';
import { Smartphone, Phone, Mail, MapPin, MessageSquare, Instagram, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-950 text-slate-300 pt-12 pb-24 md:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top bar with 4 quick columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-slate-800/80">
          
          {/* Col 1: Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-md">
                <Smartphone className="w-6 h-6 stroke-[2]" />
              </div>
              <div>
                <h4 className="text-xl font-black text-white tracking-tight">Santhosh Kumar</h4>
                <p className="text-xs text-amber-400 font-semibold tracking-wide">Mobile_Melodies Repair</p>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Professional doorstep smartphone repair across Bhimavaram, Andhra Pradesh. Fast turnaround, transparent pricing, and 100% genuine spare parts.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold pt-1">
              <ShieldCheck className="w-4 h-4" />
              <span>Doorstep Service in Bhimavaram</span>
            </div>
          </div>

          {/* Col 2: Phone & WhatsApp */}
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-indigo-400 flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                Call &amp; WhatsApp
              </div>
              <a
                href="tel:7036945947"
                className="text-base font-bold text-white hover:text-indigo-400 transition-colors block mt-0.5"
              >
                +91 7036945947
              </a>
              <a
                href="https://wa.me/917036945947?text=Hi%20Santhosh,%20I%20need%20doorstep%20mobile%20repair%20service%20in%20Bhimavaram"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors inline-flex items-center gap-1 mt-1"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Active (7036945947)</span>
              </a>
            </div>
          </div>

          {/* Col 3: Email */}
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-indigo-400 flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                Email Inquiry
              </div>
              <a
                href="mailto:santhoshkumarpolisettyy@gmail.com"
                className="text-sm font-semibold text-white hover:text-indigo-400 transition-colors block mt-0.5 break-all"
              >
                santhoshkumarpolisettyy@gmail.com
              </a>
              <span className="text-xs text-slate-500 block mt-1">
                Mon - Sun: 8:00 AM - 9:00 PM
              </span>
            </div>
          </div>

          {/* Col 4: Location & Social */}
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-indigo-400 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                Service Location
              </div>
              <div className="text-sm font-bold text-white mt-0.5">
                Bhimavaram, Andhra Pradesh
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Balusumudi, Gunupudi, SRKR Road, DNR College &amp; all local areas
              </p>

              {/* Social icons: Instagram mobile_melodies and WhatsApp; Facebook removed */}
              <div className="flex flex-col gap-2 mt-3">
                <span className="text-xs text-slate-400">Instagram:</span>
                <div className="flex items-center gap-2">
                  <a
                    href="https://instagram.com/mobile_melodies"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-r from-purple-600 via-pink-600 to-amber-600 hover:opacity-90 text-white text-xs font-bold shadow transition-opacity"
                    aria-label="Instagram @mobile_melodies"
                  >
                    <Instagram className="w-4 h-4" />
                    <span>mobile_melodies</span>
                  </a>
                  <a
                    href="https://wa.me/917036945947"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-emerald-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                    aria-label="WhatsApp"
                    title="WhatsApp"
                  >
                    <MessageSquare className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Santhosh Kumar • Mobile_Melodies. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <span>Doorstep Mobile Repair in Bhimavaram, AP</span>
            <span>Phone: +91 7036945947</span>
            <span>Instagram: @mobile_melodies</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
