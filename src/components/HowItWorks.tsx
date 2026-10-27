import React from 'react';
import { Smartphone, MapPin, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '1',
      icon: Smartphone,
      title: 'Choose Service',
      description: 'Select the repair service you need for your phone brand and model.',
    },
    {
      num: '2',
      icon: MapPin,
      title: 'Enter Address',
      description: 'Provide your Bhimavaram doorstep address and landmark.',
    },
    {
      num: '3',
      icon: Calendar,
      title: 'Submit Inquiry',
      description: 'Choose your preferred date and convenient time slot.',
    },
    {
      num: '4',
      icon: CheckCircle2,
      title: 'Get Confirmation',
      description: 'Santhosh Kumar confirms your booking on WhatsApp and arrives at your door.',
    },
  ];

  return (
    <section id="how-it-works" className="py-12 sm:py-16 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            How It Works
          </h2>
          <p className="mt-2 text-base text-slate-600 font-medium">
            Get your mobile repaired in just a few simple steps
          </p>
        </div>

        {/* 4 Steps Horizontal Chain */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="relative flex flex-col items-center text-center group">
                
                {/* Number & Icon Cluster */}
                <div className="relative mb-5">
                  <div className="w-18 h-18 rounded-2xl bg-indigo-50 border-2 border-indigo-100 flex items-center justify-center text-indigo-600 shadow-sm group-hover:scale-105 group-hover:border-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-200">
                    <Icon className="w-8 h-8 stroke-[2]" />
                  </div>

                  {/* Step Number Badge */}
                  <div className="absolute -top-2 -left-2 w-7 h-7 rounded-full bg-indigo-600 text-white font-black text-xs flex items-center justify-center shadow-md border-2 border-white">
                    {step.num}
                  </div>
                </div>

                {/* Arrow Connector for Desktop (between items) */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-9 left-[62%] w-[75%] pointer-events-none">
                    <div className="flex items-center justify-center">
                      <div className="w-full border-t-2 border-dashed border-indigo-200" />
                      <ArrowRight className="w-4 h-4 text-indigo-400 shrink-0 -ml-1" />
                    </div>
                  </div>
                )}

                {/* Title & Description */}
                <h3 className="text-lg font-bold text-slate-900">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1.5 max-w-xs leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-12 bg-slate-50 border border-slate-200/80 rounded-2xl p-4 sm:p-5 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-semibold text-slate-700">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Repaired in front of you</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Up to 90 Days Warranty</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>No Visit Charges If Not Fixed</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>100% Data Privacy Guaranteed</span>
          </div>
        </div>

      </div>
    </section>
  );
};
