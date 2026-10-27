import React, { useState } from 'react';
import { Smartphone, Menu, X, Phone, MessageSquare, Wrench, Instagram } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'About', href: '#about' },
    { label: 'Service Area', href: '#service-area' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-indigo-700 to-indigo-500 text-white flex items-center justify-center shadow-md shadow-indigo-100 group-hover:scale-105 transition-transform">
              <div className="relative">
                <Smartphone className="w-6 h-6 stroke-[2.2]" />
                <Wrench className="w-3 h-3 absolute -bottom-1 -right-1 text-amber-300" />
              </div>
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors block leading-tight">
                Santhosh Kumar
              </span>
              <span className="text-xs font-semibold text-slate-500 tracking-wide block">
                Doorstep Mobile Repair • Bhimavaram, AP
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors relative py-1 hover:font-semibold"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA & Direct Phone */}
          <div className="hidden md:flex items-center gap-2.5">
            <a
              href="https://instagram.com/mobile_melodies"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl text-slate-600 hover:text-pink-600 hover:bg-pink-50 transition-all border border-slate-200"
              title="Follow Instagram: @mobile_melodies"
            >
              <Instagram className="w-5 h-5 text-pink-600" />
            </a>
            <a
              href="https://wa.me/917036945947?text=Hi%20Santhosh,%20I%20need%20doorstep%20mobile%20repair%20service%20in%20Bhimavaram"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl text-slate-600 hover:text-emerald-600 hover:bg-emerald-50 transition-all border border-slate-200"
              title="Chat on WhatsApp (7036945947)"
            >
              <MessageSquare className="w-5 h-5 text-emerald-600" />
            </a>
            <button
              onClick={onOpenBooking}
              className="bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white px-5 py-2.5 rounded-xl font-semibold text-sm shadow-md shadow-indigo-200 hover:shadow-indigo-300 transition-all flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4 fill-white/20" />
              <span>Book Home Repair</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="https://instagram.com/mobile_melodies"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-pink-600 bg-pink-50 rounded-lg hover:bg-pink-100 transition-colors"
              aria-label="Instagram @mobile_melodies"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="tel:7036945947"
              className="p-2 text-indigo-600 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors"
              aria-label="Call Santhosh Kumar"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="grid grid-cols-3 gap-2 pb-3 border-b border-slate-100">
            <a
              href="tel:7036945947"
              className="flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg bg-blue-50 text-blue-700 font-semibold text-xs"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call</span>
            </a>
            <a
              href="https://wa.me/917036945947?text=Hi%20Santhosh,%20I%20need%20doorstep%20mobile%20repair%20service%20in%20Bhimavaram"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg bg-emerald-50 text-emerald-700 font-semibold text-xs"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
            <a
              href="https://instagram.com/mobile_melodies"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg bg-pink-50 text-pink-700 font-semibold text-xs"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>Insta</span>
            </a>
          </div>

          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full bg-indigo-600 text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-md shadow-indigo-100"
            >
              <Phone className="w-4 h-4" />
              <span>Book Home Repair</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
