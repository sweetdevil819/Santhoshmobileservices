import React from 'react';
import { Home, ArrowRight, MessageSquare } from 'lucide-react';

interface MobileBottomBarProps {
  onOpenBooking: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenBooking }) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-900 border-t border-slate-800 p-2.5 shadow-2xl flex items-center justify-between gap-2">
      {/* Book Home Repair Button */}
      <button
        onClick={onOpenBooking}
        className="flex-1 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-bold py-3 px-3 rounded-xl flex items-center justify-center gap-2 text-xs sm:text-sm shadow-md cursor-pointer"
      >
        <Home className="w-4 h-4 fill-white/10" />
        <span>Book Home Repair</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </button>

      {/* Divider */}
      <div className="h-8 w-px bg-slate-700 shrink-0" />

      {/* Chat on WhatsApp Button */}
      <a
        href="https://wa.me/917036945947?text=Hi%20Santhosh,%20I%20need%20doorstep%20mobile%20repair%20service%20in%20Bhimavaram"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold py-3 px-3 rounded-xl flex items-center justify-center gap-2 text-xs sm:text-sm shadow-md"
      >
        <MessageSquare className="w-4 h-4 fill-current" />
        <span>WhatsApp Santhosh</span>
      </a>
    </div>
  );
};
