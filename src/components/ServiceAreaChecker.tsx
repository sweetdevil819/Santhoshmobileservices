import React, { useState } from 'react';
import { MapPin, CheckCircle2, XCircle, Navigation, Clock, AlertTriangle, Building2 } from 'lucide-react';
import {
  POPULAR_HYDERABAD_LOCATIONS,
  checkLocationServiceability,
} from '../data/hyderabadAreas';

interface ServiceAreaCheckerProps {
  onSelectAreaForBooking: (areaName: string) => void;
}

export const ServiceAreaChecker: React.FC<ServiceAreaCheckerProps> = ({ onSelectAreaForBooking }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [checkResult, setCheckResult] = useState<{
    searched: boolean;
    covered: boolean;
    areaName: string;
    pincode?: string;
    distance?: string;
    eta?: string;
    reason?: string;
  } | null>(null);

  const handleCheck = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const query = searchTerm.trim();
    if (!query) return;

    const res = checkLocationServiceability(query);
    if (res.isHyderabad) {
      setCheckResult({
        searched: true,
        covered: true,
        areaName: res.areaName,
        pincode: res.pincode,
        distance: res.distanceFromAmeerpet,
        eta: res.etaFromAmeerpet,
      });
    } else {
      setCheckResult({
        searched: true,
        covered: false,
        areaName: res.areaName,
        pincode: res.pincode,
        reason: res.reason,
      });
    }
  };

  const selectQuickLocation = (loc: string) => {
    const cleanLoc = loc.replace(' (Shop Base)', '');
    setSearchTerm(cleanLoc);
    const res = checkLocationServiceability(cleanLoc);
    if (res.isHyderabad) {
      setCheckResult({
        searched: true,
        covered: true,
        areaName: res.areaName,
        pincode: res.pincode,
        distance: res.distanceFromAmeerpet,
        eta: res.etaFromAmeerpet,
      });
    }
  };

  return (
    <div id="service-area" className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-sm flex flex-col justify-between h-full">
      <div>
        {/* Header */}
        <div className="mb-4 pb-2 border-b border-slate-100 flex items-start justify-between">
          <div>
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span>Service Area Coverage</span>
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Available across <strong>Bhimavaram, Andhra Pradesh</strong> • Dispatched from <strong>Bhimavaram Base</strong>
            </p>
          </div>
          <span className="text-[11px] font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 px-2 py-0.5 rounded-full shrink-0">
            Bhimavaram Base
          </span>
        </div>

        {/* Map Graphic Illustration with Bhimavaram as the Center Hub */}
        <div className="relative w-full h-44 rounded-xl overflow-hidden border border-slate-200 bg-gradient-to-br from-indigo-50/70 via-blue-50/50 to-slate-100 flex items-center justify-center p-3 mb-4 select-none">
          {/* Subtle grid pattern & mock roads */}
          <svg className="absolute inset-0 w-full h-full opacity-35" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
                <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#94a3b8" strokeWidth="0.7" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            {/* Radial dispatch routes from center */}
            <path d="M 240,88 L 100,45" fill="none" stroke="#6366f1" strokeWidth="2" strokeDasharray="4 2" opacity="0.6" />
            <path d="M 240,88 L 380,45" fill="none" stroke="#6366f1" strokeWidth="2" strokeDasharray="4 2" opacity="0.6" />
            <path d="M 240,88 L 110,135" fill="none" stroke="#6366f1" strokeWidth="2" strokeDasharray="4 2" opacity="0.6" />
            <path d="M 240,88 L 370,135" fill="none" stroke="#6366f1" strokeWidth="2" strokeDasharray="4 2" opacity="0.6" />
          </svg>

          {/* Central Service Radius Circle centered on Bhimavaram */}
          <div className="relative flex items-center justify-center">
            {/* Animated Radar Pulse */}
            <div className="absolute w-36 h-36 rounded-full bg-indigo-500/15 border border-indigo-400/40 animate-ping opacity-75" />
            <div className="w-32 h-32 rounded-full bg-indigo-500/20 border-2 border-indigo-500/60 flex items-center justify-center backdrop-blur-xs">
              <div className="w-22 h-22 rounded-full bg-indigo-600/20 border border-indigo-500/80 flex items-center justify-center">
                {/* Center Pin Marker */}
                <div className="flex flex-col items-center">
                  <div className="w-9 h-9 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-lg border-2 border-white ring-2 ring-indigo-300">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-black text-indigo-900 bg-white/95 px-2 py-0.5 rounded-md shadow-xs border border-indigo-200 mt-1 whitespace-nowrap">
                    Bhimavaram Base
                  </span>
                </div>
              </div>
            </div>

            {/* Surrounding Local Area Badges on Map */}
            <span className="absolute -top-3 -left-14 text-[10px] font-bold text-slate-700 bg-white/95 px-2 py-0.5 rounded shadow-xs border border-slate-200">
              SRKR / Amiram
            </span>
            <span className="absolute -top-3 -right-14 text-[10px] font-bold text-slate-700 bg-white/95 px-2 py-0.5 rounded shadow-xs border border-slate-200">
              Gunupudi
            </span>
            <span className="absolute -bottom-2 -left-12 text-[10px] font-bold text-slate-700 bg-white/95 px-2 py-0.5 rounded shadow-xs border border-slate-200">
              DNR College
            </span>
            <span className="absolute -bottom-2 -right-12 text-[10px] font-bold text-slate-700 bg-white/95 px-2 py-0.5 rounded shadow-xs border border-slate-200">
              Gandhinagar
            </span>
          </div>

          <div className="absolute bottom-2 left-2 bg-slate-900/85 text-white text-[10px] font-medium px-2 py-0.5 rounded backdrop-blur-xs flex items-center gap-1 shadow">
            <Navigation className="w-2.5 h-2.5 text-amber-400" />
            <span>Bhimavaram &amp; AP Doorstep Service</span>
          </div>
        </div>

        {/* Input Field + Check Button */}
        <form onSubmit={handleCheck} className="relative flex items-center gap-2">
          <div className="relative flex-1">
            <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Enter Bhimavaram locality (e.g. Balusumudi, Gunupudi, SRKR Road, 534201)"
              className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs sm:text-sm bg-slate-50/50"
            />
          </div>
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-bold px-4 py-2.5 rounded-xl text-xs sm:text-sm transition-colors cursor-pointer shrink-0 shadow-sm"
          >
            Check Service
          </button>
        </form>

        {/* Quick Location Pills */}
        <div className="mt-2.5 flex items-center gap-1.5 flex-wrap">
          <span className="text-[11px] text-slate-400 font-medium">Quick Check:</span>
          {POPULAR_HYDERABAD_LOCATIONS.slice(0, 5).map((loc) => (
            <button
              key={loc}
              type="button"
              onClick={() => selectQuickLocation(loc)}
              className="text-[11px] bg-slate-100 hover:bg-indigo-50 hover:text-indigo-600 text-slate-600 px-2 py-0.5 rounded-md font-medium transition-colors cursor-pointer"
            >
              {loc}
            </button>
          ))}
        </div>

        {/* Feedback Card */}
        <div className="mt-4 p-3.5 rounded-xl border transition-all">
          {checkResult ? (
            checkResult.covered ? (
              /* Case 1: SERVICE AVAILABLE IN BHIMAVARAM */
              <div className="space-y-2.5 bg-emerald-50/60 -m-3.5 p-3.5 rounded-xl border border-emerald-200">
                <div className="flex items-start gap-2.5 text-emerald-800">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-bold text-emerald-900">
                      Service Available in {checkResult.areaName}, Bhimavaram!
                    </div>
                    <p className="text-xs text-emerald-700 mt-0.5">
                      Santhosh Kumar can come to your doorstep for on-the-spot mobile repair.
                    </p>
                  </div>
                </div>

                {/* Estimated Time and Distance */}
                <div className="bg-white/80 rounded-lg p-2.5 border border-emerald-200/80 space-y-1.5 text-xs text-slate-700">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 flex items-center gap-1">
                      <Building2 className="w-3.5 h-3.5 text-indigo-600" />
                      Dispatch Base:
                    </span>
                    <span className="font-semibold text-slate-800">Balusumudi / Main Road, Bhimavaram (534201)</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-amber-500" />
                      Estimated Arrival Time:
                    </span>
                    <span className="font-bold text-emerald-800 bg-emerald-100/70 px-2 py-0.5 rounded text-[11px]">
                      {checkResult.eta || '15 - 25 mins from Bhimavaram Base'}
                    </span>
                  </div>

                  {checkResult.distance && (
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 flex items-center gap-1">
                        <Navigation className="w-3.5 h-3.5 text-blue-500" />
                        Travel Distance:
                      </span>
                      <span className="font-medium text-slate-700">{checkResult.distance}</span>
                    </div>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => onSelectAreaForBooking(checkResult.areaName)}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-3 rounded-lg text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <span>Book Doorstep Repair for {checkResult.areaName}</span>
                </button>
              </div>
            ) : (
              /* Case 2: OUTSIDE BHIMAVARAM / NOT AVAILABLE */
              <div className="space-y-2.5 bg-rose-50/70 -m-3.5 p-3.5 rounded-xl border border-rose-200">
                <div className="flex items-start gap-2.5 text-rose-800">
                  <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-bold text-rose-900">
                      Service NOT Available in &ldquo;{checkResult.areaName}&rdquo;
                    </div>
                    <p className="text-xs text-rose-700 mt-1 leading-relaxed">
                      Santhosh Kumar&apos;s mobile repair base is located in <strong>Bhimavaram, Andhra Pradesh</strong>. Home repair service is available within Bhimavaram and surrounding areas.
                    </p>
                  </div>
                </div>

                <div className="bg-white/90 rounded-lg p-2.5 border border-rose-200 text-xs text-slate-600 space-y-1">
                  <div className="flex items-center gap-1.5 text-amber-700 font-semibold">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                    <span>No service in distant cities, districts, states, or countries.</span>
                  </div>
                  <p className="text-[11px] text-slate-500 pt-0.5">
                    If your device is in Bhimavaram, please search for your Bhimavaram locality (e.g., Balusumudi, Gunupudi, SRKR Road, DNR College Road, Gandhinagar) or a Bhimavaram pincode (534201 - 534208).
                  </p>
                </div>
              </div>
            )
          ) : (
            /* Case 3: Initial Helper State */
            <div className="flex items-start gap-2 text-slate-600 bg-slate-50/60 -m-3.5 p-3 rounded-xl border border-slate-100">
              <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold text-slate-800">
                  Doorstep Service in Bhimavaram, Andhra Pradesh
                </p>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  Dispatched directly from Santhosh Kumar&apos;s base in <strong>Bhimavaram</strong>. Enter your locality or pincode above to check travel time.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Emergency Call Box */}
      <div className="mt-4 pt-3 border-t border-slate-100 text-center">
        <span className="text-[11px] text-slate-500">Need urgent mobile repair in Bhimavaram, AP?</span>
        <a
          href="tel:7036945947"
          className="text-xs font-bold text-indigo-600 hover:text-indigo-800 block mt-0.5"
        >
          Call Santhosh Kumar Directly: 7036945947
        </a>
      </div>
    </div>
  );
};
