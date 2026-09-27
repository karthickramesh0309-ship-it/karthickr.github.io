import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Phone, Calendar, Clock, Sparkles } from 'lucide-react';
import { SALON_MENU_CATEGORIES } from '../data/salonData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

const SALON_WHATSAPP_NUMBER = '916360964901';
const SALON_DISPLAY_PHONE = '63609 64901';

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  defaultService = '',
}) => {
  const [service, setService] = useState(defaultService || 'Full Hair Smoothing (₹6,000.00)');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('Morning (10:00 AM - 1:00 PM)');
  const [notes, setNotes] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  // Update default service if changed
  useEffect(() => {
    if (defaultService) {
      setService(defaultService);
    }
  }, [defaultService]);

  // Minimum date today
  const minDate = new Date().toISOString().split('T')[0];

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !service.trim()) return;

    // Generate local booking reference code
    const randomCode = `PBS-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingRef(randomCode);

    // Prepare WhatsApp message
    const formattedMessage = [
      `✨ *New Appointment Booking - Prakruthi Beauty Salon* ✨`,
      ``,
      `🔖 *Ref:* ${randomCode}`,
      `👤 *Name:* ${name.trim()}`,
      `📱 *Mobile:* ${phone.trim()}`,
      `💇‍♀️ *Service:* ${service.trim()}`,
      `📅 *Date:* ${date || 'Earliest Available'}`,
      `⏰ *Preferred Time:* ${time}`,
      notes.trim() ? `📝 *Notes:* ${notes.trim()}` : null,
      ``,
      `Please confirm slot availability. Thank you! 🙏`
    ].filter(Boolean).join('\n');

    const whatsappUrl = `https://wa.me/${SALON_WHATSAPP_NUMBER}?text=${encodeURIComponent(formattedMessage)}`;

    // Open WhatsApp in new tab/window immediately
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    // Show instant confirmation state
    setIsSuccess(true);
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    setName('');
    setPhone('');
    setDate('');
    setNotes('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-xs overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden my-auto">
        {/* Header */}
        <div className="px-5 sm:px-6 py-4.5 bg-[#143d23] text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-700/60 flex items-center justify-center text-[#e6ca65]">
              <Sparkles className="w-4 h-4 fill-current" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold leading-tight">
                Book Salon Appointment
              </h3>
              <p className="text-[11px] text-emerald-200">
                Prakruthi Beauty Salon • Direct Booking
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSuccess ? (
          <div className="p-6 text-center space-y-4">
            {/* Success Icon */}
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto ring-4 ring-emerald-50">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 mb-2">
                Booking Reference: {bookingRef}
              </span>
              <h4 className="font-serif text-2xl font-bold text-neutral-900">
                Booking Sent to WhatsApp!
              </h4>
              <p className="text-xs sm:text-sm text-neutral-600 mt-1 max-w-sm mx-auto">
                Thank you, <strong>{name}</strong>! Your appointment details have been prepared and sent to <strong>+91 {SALON_DISPLAY_PHONE}</strong> on WhatsApp for confirmation.
              </p>
            </div>

            {/* Summary card */}
            <div className="bg-[#faf8f5] border border-neutral-200 rounded-xl p-4 text-left text-xs sm:text-sm space-y-2 text-neutral-700">
              <div className="flex justify-between pb-2 border-b border-neutral-200 font-semibold text-neutral-900">
                <span>Appointment Summary</span>
                <span className="text-[#143d23] font-mono">{bookingRef}</span>
              </div>
              <div className="grid grid-cols-3 gap-1">
                <span className="text-neutral-500 font-medium">Service:</span>
                <span className="col-span-2 font-semibold text-neutral-900">{service}</span>
              </div>
              <div className="grid grid-cols-3 gap-1">
                <span className="text-neutral-500 font-medium">Client:</span>
                <span className="col-span-2 font-medium text-neutral-900">{name} ({phone})</span>
              </div>
              <div className="grid grid-cols-3 gap-1">
                <span className="text-neutral-500 font-medium">Date & Time:</span>
                <span className="col-span-2 font-medium text-neutral-900">{date || 'Earliest Available'} • {time}</span>
              </div>
              {notes && (
                <div className="grid grid-cols-3 gap-1 pt-1 border-t border-neutral-200/70 text-xs">
                  <span className="text-neutral-500">Note:</span>
                  <span className="col-span-2 text-neutral-700 italic">{notes}</span>
                </div>
              )}
            </div>

            {/* Call option if needed */}
            <div className="bg-emerald-50/70 border border-emerald-200/60 rounded-xl p-3 flex items-center justify-between text-xs">
              <div className="text-left">
                <p className="font-semibold text-emerald-950">Direct Front Desk Assistance</p>
                <p className="text-emerald-800">+91 {SALON_DISPLAY_PHONE}</p>
              </div>
              <a
                href={`tel:+916360964901`}
                className="py-1.5 px-3 bg-[#143d23] text-white rounded-lg font-medium flex items-center gap-1.5 hover:bg-[#0d2a17] transition-colors shrink-0"
              >
                <Phone className="w-3.5 h-3.5" />
                Call Now
              </a>
            </div>

            {/* Primary Action Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={handleResetAndClose}
                className="w-full py-3 bg-[#143d23] hover:bg-[#0e2a1b] text-white rounded-xl font-semibold text-sm transition-all shadow-md active:scale-98 cursor-pointer"
              >
                Done / Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4 text-sm">
            <div>
              <label htmlFor="booking-name-input" className="block text-xs font-semibold text-neutral-700 mb-1">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                id="booking-name-input"
                placeholder="e.g. Priya Sharma"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3.5 py-2.5 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#143d23] focus:border-[#143d23] outline-none text-neutral-900 transition-all text-sm"
              />
            </div>

            <div>
              <label htmlFor="booking-phone-input" className="block text-xs font-semibold text-neutral-700 mb-1">
                Mobile Number *
              </label>
              <input
                type="tel"
                required
                id="booking-phone-input"
                placeholder="e.g. +91 98765 43210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3.5 py-2.5 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#143d23] focus:border-[#143d23] outline-none text-neutral-900 transition-all text-sm"
              />
            </div>

            {/* Grouped Service Selection Dropdown List */}
            <div>
              <label htmlFor="booking-service-select" className="block text-xs font-semibold text-neutral-700 mb-1">
                Select Service (Dropdown List) *
              </label>
              <div className="relative">
                <select
                  required
                  id="booking-service-select"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-3.5 py-2.5 pr-8 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#143d23] focus:border-[#143d23] outline-none text-neutral-900 bg-white font-medium text-sm transition-all cursor-pointer"
                >
                  <option value="" disabled>-- Select a salon service --</option>
                  
                  {/* Popular Featured Highlights */}
                  <optgroup label="🌟 Featured Highlights">
                    <option value="Full Hair Smoothing & Keratin (₹6,000.00)">Full Hair Smoothing & Keratin (₹6,000)</option>
                    <option value="Loreal Hair Spa (₹1,000.00)">L'Oréal Hair Spa Treatment (₹1,000)</option>
                    <option value="O3+ Facial (₹2,500.00)">O3+ Whitening & Brightening Facial (₹2,500)</option>
                    <option value="Red Wine Facial (₹800.00)">Red Wine Glowing Facial (₹800)</option>
                    <option value="Crystal Spa Pedicure (₹800.00)">Crystal Spa Pedicure (₹800)</option>
                    <option value="Bridal Makeover & Hair Styling (Custom Package)">Bridal Makeover & Hair Styling (Custom)</option>
                  </optgroup>

                  {/* All Menu Categories dynamically loaded */}
                  {SALON_MENU_CATEGORIES.map((cat) => (
                    <optgroup key={cat.title} label={`💈 ${cat.title}`}>
                      {cat.items.map((item) => (
                        <option key={item.id} value={`${item.name} (${item.price})`}>
                          {item.name} — {item.price}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </select>
              </div>
              <p className="text-[11px] text-neutral-500 mt-1">
                Choose any service from hair, facials, waxing, de-tanning, or spa.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="booking-date-input" className="block text-xs font-semibold text-neutral-700 mb-1">
                  Preferred Date
                </label>
                <input
                  type="date"
                  id="booking-date-input"
                  min={minDate}
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-3 py-2 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#143d23] outline-none text-xs bg-white text-neutral-900"
                />
              </div>

              <div>
                <label htmlFor="booking-time-select" className="block text-xs font-semibold text-neutral-700 mb-1">
                  Preferred Time Slot
                </label>
                <select
                  id="booking-time-select"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full px-3 py-2 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#143d23] outline-none text-xs bg-white text-neutral-900 cursor-pointer"
                >
                  <option>Morning (10:00 AM - 1:00 PM)</option>
                  <option>Afternoon (1:00 PM - 4:00 PM)</option>
                  <option>Evening (4:00 PM - 7:30 PM)</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="booking-notes-input" className="block text-xs font-semibold text-neutral-700 mb-1">
                Optional Notes / Stylist Preference
              </label>
              <input
                type="text"
                id="booking-notes-input"
                placeholder="e.g. Request for Pushpa / Veda, sensitive skin"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-3 py-2 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#143d23] outline-none text-xs text-neutral-900"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                id="booking-submit-confirm-btn"
                className="w-full py-3.5 bg-[#143d23] hover:bg-[#0e2a1b] text-white rounded-xl font-semibold text-sm transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer active:scale-98"
              >
                <CheckCircle2 className="w-4 h-4 text-[#e6ca65]" />
                <span>Confirm Booking</span>
              </button>
              <p className="text-center text-[11px] text-neutral-500 mt-2">
                Instant salon reservation • Sent directly to salon WhatsApp (+91 {SALON_DISPLAY_PHONE})
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
