import React from 'react';
import { Shield, Zap, Home, MapPin } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const items = [
    {
      icon: Shield,
      title: 'Trusted Technician',
      subtitle: 'Verified & Certified',
      iconColor: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
    },
    {
      icon: Zap,
      title: 'Quick Service',
      subtitle: 'Repaired in 30 Mins',
      iconColor: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Home,
      title: 'Home Service Available',
      subtitle: 'No Need to Visit Shop',
      iconColor: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
    },
    {
      icon: MapPin,
      title: 'Your Area Coverage',
      subtitle: 'Across Bhimavaram, AP',
      iconColor: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4 sm:p-6 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-100">
        {items.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className={`flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left gap-3 ${
                idx > 1 ? 'pt-4 md:pt-0' : ''
              } ${idx % 2 === 1 ? 'md:pl-4' : ''} ${idx > 0 ? 'md:pl-6' : ''}`}
            >
              <div
                className={`w-12 h-12 rounded-xl ${item.bgColor} ${item.iconColor} flex items-center justify-center shrink-0 shadow-xs`}
              >
                <Icon className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-800 leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  {item.subtitle}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
