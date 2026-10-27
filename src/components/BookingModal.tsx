import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Phone, MessageSquare, ShieldCheck } from 'lucide-react';
import { SERVICES, MOBILE_BRANDS } from '../data/servicesData';
import { HYDERABAD_AREAS } from '../data/hyderabadAreas';
import { ServiceItem, BookingFormData } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedService?: ServiceItem | null;
  prefilledArea?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  selectedService,
  prefilledArea,
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    serviceId: selectedService?.id || SERVICES[0].id,
    deviceBrand: 'Apple iPhone',
    deviceModel: '',
    area: prefilledArea || 'Balusumudi',
    address: '',
    preferredDate: 'Today',
    preferredTime: 'Morning (9 AM - 12 PM)',
    notes: '',
  });

  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingId, setBookingId] = useState('');

  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({ ...prev, serviceId: selectedService.id }));
    }
  }, [selectedService]);

  useEffect(() => {
    if (prefilledArea) {
      setFormData((prev) => ({ ...prev, area: prefilledArea }));
    }
  }, [prefilledArea]);

  if (!isOpen) return null;

  const activeService = SERVICES.find((s) => s.id === formData.serviceId) || SERVICES[0];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const generateWhatsAppMessage = () => {
    const message = `Hello Santhosh Kumar! I would like to book a Doorstep Mobile Repair service in Bhimavaram, Andhra Pradesh.%0A%0A` +
      `📱 *Service:* ${activeService.title}%0A` +
      `🏷️ *Brand & Model:* ${formData.deviceBrand} ${formData.deviceModel ? `(${formData.deviceModel})` : ''}%0A` +
      `👤 *Customer:* ${formData.fullName || 'Customer'}%0A` +
      `📞 *Phone:* ${formData.phone || 'Provided via WhatsApp'}%0A` +
      `📍 *Location:* ${formData.area}, Bhimavaram, AP%0A` +
      `🏠 *Address:* ${formData.address || 'Shared in chat'}%0A` +
      `📅 *Preferred Slot:* ${formData.preferredDate} - ${formData.preferredTime}%0A` +
      (formData.notes ? `📝 *Notes:* ${formData.notes}%0A` : '') +
      `%0APlease confirm if you can come for the doorstep repair. Thank you!`;
    return `https://wa.me/917036945947?text=${message}`;
  };

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) {
      alert('Please enter your Name and Mobile Number.');
      return;
    }
    const url = generateWhatsAppMessage();
    window.open(url, '_blank');
    setBookingId('SKM-' + Math.floor(100000 + Math.random() * 900000));
    setBookingConfirmed(true);
  };

  const handleOnlineBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) {
      alert('Please enter your Name and Mobile Number.');
      return;
    }
    setBookingId('SKM-' + Math.floor(100000 + Math.random() * 900000));
    setBookingConfirmed(true);
  };

  const resetAndClose = () => {
    setBookingConfirmed(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-white rounded-3xl max-w-xl w-full shadow-2xl border border-slate-100 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-indigo-700 via-indigo-600 to-blue-600 p-5 text-white flex items-center justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-200 uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-emerald-300" />
              <span>Mobile Repair Services Booking</span>
            </div>
            <h3 className="text-xl font-bold mt-0.5 text-white">
              {bookingConfirmed ? 'Booking Confirmed!' : 'Book Mobile Repair Services in Bhimavaram'}
            </h3>
          </div>
          <button
            onClick={resetAndClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 max-h-[80vh] overflow-y-auto">
          {bookingConfirmed ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Booking Reference</span>
                <h4 className="text-2xl font-black text-indigo-700 mt-0.5 tracking-wider">{bookingId}</h4>
              </div>

              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 text-left space-y-2 text-xs sm:text-sm">
                <div className="flex justify-between border-b border-slate-200/60 pb-2">
                  <span className="text-slate-500 font-medium">Customer:</span>
                  <span className="font-bold text-slate-800">{formData.fullName} ({formData.phone})</span>
                </div>
                <div className="flex justify-between border-b border-slate-200/60 pb-2">
                  <span className="text-slate-500 font-medium">Service:</span>
                  <span className="font-bold text-slate-800">{activeService.title}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200/60 pb-2">
                  <span className="text-slate-500 font-medium">Device:</span>
                  <span className="font-bold text-slate-800">{formData.deviceBrand} {formData.deviceModel}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200/60 pb-2">
                  <span className="text-slate-500 font-medium">Location:</span>
                  <span className="font-bold text-slate-800">{formData.area}, Bhimavaram, AP</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-medium">Slot:</span>
                  <span className="font-bold text-indigo-600">{formData.preferredDate} ({formData.preferredTime})</span>
                </div>
              </div>

              <p className="text-xs text-slate-600 max-w-sm mx-auto">
                Santhosh Kumar will review your request and call/message you shortly to confirm the technician arrival time.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <a
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-sm shadow-md transition-colors"
                >
                  <MessageSquare className="w-4 h-4 fill-white/20" />
                  <span>Send Details on WhatsApp</span>
                </a>
                <a
                  href="tel:7036945947"
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-sm shadow-md transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Santhosh Kumar (7036945947)</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleWhatsAppBooking} className="space-y-4">
              
              {/* Service Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Select Repair Service
                </label>
                <div className="relative">
                  <select
                    name="serviceId"
                    value={formData.serviceId}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Device Brand & Model */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Phone Brand
                  </label>
                  <select
                    name="deviceBrand"
                    value={formData.deviceBrand}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    {MOBILE_BRANDS.map((brand) => (
                      <option key={brand} value={brand}>
                        {brand}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Model (e.g. iPhone 14, Galaxy S23)
                  </label>
                  <input
                    type="text"
                    name="deviceModel"
                    value={formData.deviceModel}
                    onChange={handleInputChange}
                    placeholder="Enter phone model"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              {/* Name & Phone Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="e.g. Ramesh Varma"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="10-digit phone number"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              {/* Bhimavaram Area & Full Doorstep Address */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center justify-between">
                    <span>Bhimavaram Area / Locality</span>
                    <span className="text-[10px] text-indigo-600 font-normal">From Bhimavaram Base</span>
                  </label>
                  <select
                    name="area"
                    value={formData.area}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    {HYDERABAD_AREAS.map((a) => (
                      <option key={a.name} value={a.name}>
                        {a.name} ({a.pincode}) • {a.eta}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    House / Flat No &amp; Landmark (Bhimavaram, AP)
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="e.g. Near SRKR Gate, Main Road, Balusumudi..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              {/* Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Preferred Day
                  </label>
                  <select
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="Today">Today (Urgent / Same Day)</option>
                    <option value="Tomorrow">Tomorrow</option>
                    <option value="Day After Tomorrow">Day After Tomorrow</option>
                    <option value="Weekend (Saturday/Sunday)">This Weekend</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Preferred Time Slot
                  </label>
                  <select
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
                    <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                    <option value="Evening (4 PM - 8 PM)">Evening (4 PM - 8 PM)</option>
                    <option value="Immediate (Next 1-2 hours)">Immediate (ASAP)</option>
                  </select>
                </div>
              </div>

              {/* Problem Details */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Describe Problem (Optional)
                </label>
                <textarea
                  rows={2}
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="e.g. Screen glass broke after dropping, touch still works"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 space-y-2">
                <button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 text-sm shadow-md shadow-emerald-100 cursor-pointer transition-all"
                >
                  <MessageSquare className="w-5 h-5 fill-white/20" />
                  <span>Book Instantly on WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={handleOnlineBooking}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-sm shadow-sm transition-all cursor-pointer"
                >
                  <span>Submit Booking Request Online</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-4 text-[11px] text-slate-500 pt-1">
                <span>✓ No visit charge if unresolved</span>
                <span>✓ Pay after service</span>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
