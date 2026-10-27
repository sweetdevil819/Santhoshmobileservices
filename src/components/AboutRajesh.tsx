import React from 'react';
import { Award, Home, Clock, Phone, CheckCircle, Shield } from 'lucide-react';

interface AboutRajeshProps {
  onOpenBooking: () => void;
}

export const AboutRajesh: React.FC<AboutRajeshProps> = ({ onOpenBooking }) => {
  return (
    <div id="about" className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-sm flex flex-col justify-between h-full">
      <div>
        <h3 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center justify-between">
          <span>About Santhosh Kumar</span>
          <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
            Certified Pro
          </span>
        </h3>

        {/* Technician Avatar & Details with permanent image */}
        <div className="flex items-center gap-4 mb-4">
          <div className="relative shrink-0">
            <img
              src="/assets/aistudio/bava_281f316e.jpg"
              alt="Santhosh Kumar - Mobile Repair Technician in Bhimavaram, Andhra Pradesh"
              className="w-20 h-20 sm:w-22 sm:h-22 rounded-full object-cover border-2 border-indigo-600 p-0.5 shadow-md"
            />
            <div className="absolute -bottom-1 -right-1 bg-indigo-600 text-white p-1 rounded-full border-2 border-white">
              <Shield className="w-3.5 h-3.5" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-slate-900 leading-tight">
              Santhosh Kumar
            </h4>
            <p className="text-xs font-semibold text-slate-500 mt-0.5">
              Mobile Chip Level Technician
            </p>
            <div className="flex items-center gap-1 text-amber-500 text-xs font-bold mt-1">
              <span>★ 4.9</span>
              <span className="text-slate-400 font-normal">(Verified Doorstep Expert)</span>
            </div>
          </div>
        </div>

        {/* Bullet Specs */}
        <div className="space-y-2.5 my-4 bg-slate-50/80 p-3.5 rounded-xl border border-slate-100 text-xs sm:text-sm">
          <div className="flex items-center gap-2.5 text-slate-700 font-medium">
            <Award className="w-4 h-4 text-indigo-600 shrink-0" />
            <span><strong>5+ Years</strong> Professional Experience</span>
          </div>
          <div className="flex items-center gap-2.5 text-slate-700 font-medium">
            <Home className="w-4 h-4 text-indigo-600 shrink-0" />
            <span>Base in <strong>Bhimavaram, Andhra Pradesh</strong> • Doorstep Service</span>
          </div>
          <div className="flex items-center gap-2.5 text-slate-700 font-medium">
            <Clock className="w-4 h-4 text-indigo-600 shrink-0" />
            <span><strong>Flexible Hours:</strong> 8:00 AM – 9:00 PM (All 7 Days)</span>
          </div>
        </div>

        {/* Bio paragraph */}
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          I am Santhosh Kumar, a mobile chip-level repair technician providing doorstep service in Bhimavaram, Andhra Pradesh with 5+ years of hands-on expertise in iPhone and Android hardware diagnostics, motherboard IC repair, display replacement, and component fixes. All repairs are done transparently in front of your eyes at your doorstep.
        </p>

        {/* Key trust checklist */}
        <div className="grid grid-cols-2 gap-2 mt-4 text-[11px] font-semibold text-slate-700">
          <div className="flex items-center gap-1.5 text-emerald-700">
            <CheckCircle className="w-3.5 h-3.5 shrink-0" />
            <span>100% Genuine Spares</span>
          </div>
          <div className="flex items-center gap-1.5 text-emerald-700">
            <CheckCircle className="w-3.5 h-3.5 shrink-0" />
            <span>No Data Loss</span>
          </div>
          <div className="flex items-center gap-1.5 text-emerald-700">
            <CheckCircle className="w-3.5 h-3.5 shrink-0" />
            <span>Post-Repair Warranty</span>
          </div>
          <div className="flex items-center gap-1.5 text-emerald-700">
            <CheckCircle className="w-3.5 h-3.5 shrink-0" />
            <span>Transparent Pricing</span>
          </div>
        </div>
      </div>

      {/* Direct Contact Button */}
      <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
        <button
          onClick={onOpenBooking}
          className="flex-1 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
        >
          <span>Book Repair</span>
        </button>
        <a
          href="tel:7036945947"
          className="border border-slate-200 hover:border-slate-300 text-slate-700 font-bold p-2.5 rounded-xl text-xs transition-colors flex items-center justify-center cursor-pointer"
          title="Direct Phone Call (7036945947)"
        >
          <Phone className="w-4 h-4 text-indigo-600" />
        </a>
      </div>
    </div>
  );
};
