import React from 'react';
import {
  Smartphone,
  BatteryCharging,
  Cable,
  Volume2,
  Camera,
  Code,
  Power,
  Droplets,
  Signal,
  Settings,
  ArrowRight,
  ShieldCheck,
  MessageSquare
} from 'lucide-react';
import { SERVICES } from '../data/servicesData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 stroke-[2]" />;
      case 'BatteryCharging':
        return <BatteryCharging className="w-6 h-6 stroke-[2]" />;
      case 'Cable':
        return <Cable className="w-6 h-6 stroke-[2]" />;
      case 'Volume2':
        return <Volume2 className="w-6 h-6 stroke-[2]" />;
      case 'Camera':
        return <Camera className="w-6 h-6 stroke-[2]" />;
      case 'Code':
        return <Code className="w-6 h-6 stroke-[2]" />;
      case 'Power':
        return <Power className="w-6 h-6 stroke-[2]" />;
      case 'Droplets':
        return <Droplets className="w-6 h-6 stroke-[2]" />;
      case 'Signal':
        return <Signal className="w-6 h-6 stroke-[2]" />;
      case 'Settings':
      default:
        return <Settings className="w-6 h-6 stroke-[2]" />;
    }
  };

  return (
    <section id="services" className="py-12 sm:py-16 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Mobile Repair Services
          </h2>
          <p className="mt-2 text-base text-slate-600 font-medium">
            All types of professional mobile repair services at your doorstep in Bhimavaram, Andhra Pradesh
          </p>
        </div>

        {/* 10 Services Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-5">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              onClick={() => onSelectService(service)}
              className="group relative bg-white border border-blue-100 hover:border-indigo-500 rounded-2xl p-4 sm:p-5 flex flex-col justify-between transition-all duration-200 hover:shadow-lg hover:shadow-indigo-50/80 cursor-pointer text-center sm:text-left"
            >
              {/* Icon Container & Title */}
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors flex items-center justify-center mx-auto sm:mx-0 shadow-xs mb-3.5">
                  {getIcon(service.iconName)}
                </div>

                {/* Service Title */}
                <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-snug group-hover:text-indigo-600 transition-colors">
                  {service.title}
                </h3>
              </div>

              {/* Booking Action Button */}
              <div className="mt-5">
                <button
                  type="button"
                  className="w-full py-2 px-3 rounded-xl border border-indigo-200 group-hover:border-indigo-600 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white font-bold text-xs transition-all flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
                >
                  <span>Request Home Service</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Not Sure Banner Callout */}
        <div className="mt-8 bg-gradient-to-r from-blue-50 via-indigo-50/60 to-blue-50 border border-blue-200/70 rounded-2xl p-4 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-xl bg-white text-indigo-600 shadow-sm flex items-center justify-center shrink-0">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-base">
                Not sure about the problem?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600">
                Just share your phone issue and Santhosh Kumar will inspect and guide you.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://wa.me/917036945947?text=Hi%20Santhosh,%20my%20phone%20has%20an%20issue%20and%20I'm%20not%20sure%20what's%20wrong.%20Can%20you%20help?"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl shadow-sm flex items-center gap-2 transition-colors"
            >
              <MessageSquare className="w-4 h-4 fill-white/20" />
              <span>Ask on WhatsApp</span>
            </a>
            <a
              href="tel:7036945947"
              className="bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl transition-colors"
            >
              Call 7036945947
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
