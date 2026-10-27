import React from 'react';
import { Home, ArrowRight, MessageSquare, ShieldCheck, Zap, MapPin, Award } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section id="home" className="relative pt-6 pb-12 lg:pt-12 lg:pb-16 overflow-hidden bg-gradient-to-b from-slate-50/70 via-white to-white">
      {/* Decorative background blurs */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-40 left-0 w-80 h-80 bg-indigo-50/60 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 space-y-6">
            {/* Tagline */}
            <div className="inline-flex items-center gap-2">
              <span className="text-xs sm:text-sm font-bold text-blue-600 tracking-wide">
                Fast &nbsp;|&nbsp; Reliable &nbsp;|&nbsp; At Your Doorstep in Bhimavaram
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12]">
              Mobile Repair Services <br />
              <span className="text-indigo-600">at Your Doorstep</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
              <strong className="text-slate-900 font-semibold">Santhosh Kumar</strong> comes to your home in Bhimavaram, Andhra Pradesh and provides fast, chip-level smartphone repair services. No need to visit a shop!
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={onOpenBooking}
                className="bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white px-7 py-3.5 rounded-2xl font-bold text-base shadow-lg shadow-indigo-200 hover:shadow-indigo-300 transition-all flex items-center justify-center gap-3 cursor-pointer group"
              >
                <Home className="w-5 h-5 fill-white/10" />
                <span>Book Home Repair</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="https://wa.me/917036945947?text=Hi%20Santhosh,%20I%20need%20doorstep%20mobile%20repair%20service%20in%20Bhimavaram"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white px-6 py-3.5 rounded-2xl font-bold text-base shadow-md shadow-emerald-100 hover:shadow-emerald-200 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <MessageSquare className="w-5 h-5 fill-white/10" />
                <span>WhatsApp Santhosh Kumar</span>
              </a>
            </div>

            {/* Mini Trust Highlights under buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-800">5+ Years Exp</div>
                  <div className="text-[11px] text-slate-500">Certified Tech</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-800">30-60 Mins</div>
                  <div className="text-[11px] text-slate-500">Fast Doorstep</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-800">Home Service</div>
                  <div className="text-[11px] text-slate-500">Bhimavaram &amp; AP</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual with photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Image Frame with permanent image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-indigo-100 border-4 border-white bg-slate-900 select-none">
                <img
                  src="/assets/aistudio/bava_281f316e.jpg"
                  alt="Santhosh Kumar - Mobile Chip Level Technician in Bhimavaram"
                  className="w-full h-auto aspect-[4/5] object-cover object-center"
                />

                {/* Subtle gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80 pointer-events-none" />

                {/* Badge overlay */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-md border border-white/50 flex items-center gap-2 pointer-events-none">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-xs font-bold text-slate-800">Available Today in Bhimavaram, AP</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white pointer-events-none">
                  <div className="bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 text-xs font-bold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>Doorstep Technician</span>
                  </div>
                  <span className="text-xs font-bold text-indigo-300 bg-indigo-950/80 px-2.5 py-1 rounded-lg border border-indigo-500/30">
                    Santhosh Kumar
                  </span>
                </div>
              </div>

              {/* Decorative Trust Badge floating below */}
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl p-3.5 shadow-xl border border-slate-100 hidden sm:flex items-center gap-3 max-w-xs animate-bounce-subtle z-20">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">100% On-Spot Repair</div>
                  <div className="text-[11px] text-slate-500">Repaired in front of you</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
