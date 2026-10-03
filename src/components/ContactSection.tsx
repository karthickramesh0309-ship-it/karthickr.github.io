import React, { useState } from 'react';
import {
  Phone,
  PhoneCall,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ExternalLink,
  Youtube,
  Instagram,
  Facebook,
  Sparkles,
  Mail,
  User,
  MessageSquare
} from 'lucide-react';

interface ContactSectionProps {
  onOpenBooking?: (serviceName?: string) => void;
}

// Crisp official WhatsApp SVG icon
const WhatsAppIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenBooking }) => {
  // Form states
  const [formName, setFormName] = useState('');
  const [formContact, setFormContact] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Newsletter state
  const [newsletterInput, setNewsletterInput] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim() || !formContact.trim()) return;

    // Build WhatsApp message
    const waText = [
      `✨ *Inquiry from Website - Prakruthi Beauty Salon* ✨`,
      ``,
      `👤 *Name:* ${formName.trim()}`,
      `📱 *Contact:* ${formContact.trim()}`,
      formMessage.trim() ? `💬 *Message:* ${formMessage.trim()}` : null,
      ``,
      `Location: Allalasandra, Yelahanka, Bengaluru`
    ].filter(Boolean).join('\n');

    const waUrl = `https://wa.me/916360964901?text=${encodeURIComponent(waText)}`;
    
    // Open WhatsApp
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    setFormSubmitted(true);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterInput.trim()) return;
    setNewsletterSubscribed(true);
    setTimeout(() => {
      setNewsletterInput('');
    }, 2500);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#faf9f6] text-neutral-800 border-t border-neutral-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* =========================================================================
            TOP HEADER ROW (Matches Reference Layout: Left Title & Description, Right Arched Image)
           ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-14 sm:mb-16">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#143d23]/10 text-[#143d23] text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#143d23]" />
              <span>Get in Touch With Us</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 leading-tight">
              Contact Us
            </h2>

            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-2xl font-light">
              We look forward to welcoming you to <strong>Prakruthi Beauty Salon & Spa</strong>. Reach out to <strong>Pushpalatha R</strong> and our expert styling team for appointment bookings, personalized bridal consultations, hair smoothing transformations, and genuine skin care treatments in Yelahanka.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <div className="flex items-center gap-2 text-xs font-medium text-neutral-700 bg-white px-3.5 py-2 rounded-xl border border-neutral-200 shadow-2xs">
                <Clock className="w-4 h-4 text-[#143d23]" />
                <span>Mon – Sun: 9:30 AM – 8:30 PM</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-emerald-800 bg-emerald-50 px-3.5 py-2 rounded-xl border border-emerald-200/80 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Walk-ins & Appointments Welcome</span>
              </div>
            </div>
          </div>

          {/* Right Arched Aesthetic Visual (Reference Frame) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Arched Photo Container matching reference top arch design */}
              <div className="w-full h-72 sm:h-80 rounded-t-[140px] rounded-b-2xl overflow-hidden shadow-xl border-4 border-white bg-neutral-100 relative group">
                <img
                  src="/salon.png"
                  alt="Prakruthi Beauty Salon Ambience and Styling Station"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Salon Verified Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3 rounded-xl border border-white/50 shadow-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-serif text-sm font-bold text-neutral-900 leading-tight">
                        Pushpalatha R
                      </h4>
                      <p className="text-[11px] text-[#143d23] font-medium">
                        Lead Hair & Bridal Stylist • Prakruthi
                      </p>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#143d23] text-white">
                      Verified Salon
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative Accent Backdrop Ring */}
              <div className="absolute -top-4 -right-4 -z-10 w-44 h-44 rounded-full bg-[#e6ca65]/20 blur-2xl pointer-events-none" />
              <div className="absolute -bottom-4 -left-4 -z-10 w-44 h-44 rounded-full bg-[#143d23]/15 blur-2xl pointer-events-none" />
            </div>
          </div>
        </div>

        {/* =========================================================================
            CONTACT INFORMATION ROW (3 Clean Circular Icon Cards as in Reference)
           ========================================================================= */}
        <div className="mb-14">
          <div className="mb-6">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-neutral-900">
              Contact Information
            </h3>
            <p className="text-xs sm:text-sm text-neutral-500 mt-1">
              Reach out via call, WhatsApp message, or visit our salon location directly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Card 1: Phone Numbers */}
            <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-xs hover:shadow-md transition-shadow group flex flex-col justify-between">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#143d23]/10 text-[#143d23] group-hover:bg-[#143d23] group-hover:text-white transition-colors flex items-center justify-center shrink-0">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 block mb-1">
                    Direct Call Inquiries
                  </span>
                  <div className="space-y-0.5">
                    <a
                      href="tel:+916360964901"
                      className="font-mono font-bold text-base sm:text-lg text-neutral-900 hover:text-[#143d23] transition-colors block"
                    >
                      (+91) 63609 64901
                    </a>
                    <a
                      href="tel:+919739796134"
                      className="font-mono font-medium text-xs sm:text-sm text-neutral-600 hover:text-[#143d23] transition-colors block"
                    >
                      (+91) 97397 96134
                    </a>
                  </div>
                </div>
              </div>
              <p className="text-[11px] text-neutral-500 mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between">
                <span>Pushpalatha R</span>
                <span className="text-emerald-700 font-medium">Instant Dial &rarr;</span>
              </p>
            </div>

            {/* Card 2: WhatsApp & Online Booking */}
            <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-xs hover:shadow-md transition-shadow group flex flex-col justify-between">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#25D366]/15 text-[#128C7E] group-hover:bg-[#25D366] group-hover:text-white transition-colors flex items-center justify-center shrink-0">
                  <WhatsAppIcon className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 block mb-1">
                    WhatsApp Booking
                  </span>
                  <a
                    href="https://wa.me/916360964901?text=Hello%20Prakruthi%20Beauty%20Salon%2C%20I%20would%20like%20to%20book%20an%20appointment."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono font-bold text-base sm:text-lg text-neutral-900 hover:text-[#143d23] transition-colors block"
                  >
                    63609 64901
                  </a>
                  <p className="text-xs text-neutral-600 mt-0.5">
                    Fast slot confirmation & bridal queries
                  </p>
                </div>
              </div>
              <div className="text-[11px] text-neutral-500 mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between">
                <span>Online Chat Support</span>
                <a
                  href="https://wa.me/916360964901"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-700 font-medium hover:underline flex items-center gap-1"
                >
                  Chat Now <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Card 3: Address & Landmark */}
            <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-xs hover:shadow-md transition-shadow group flex flex-col justify-between">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-500/10 text-amber-700 group-hover:bg-amber-600 group-hover:text-white transition-colors flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 block mb-1">
                    Salon Address
                  </span>
                  <h4 className="font-semibold text-sm sm:text-base text-neutral-900 leading-snug">
                    Allalasandra, Yelahanka
                  </h4>
                  <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                    No.3, Janapriya Heavens, Allalasandra, Bengaluru – 560 065
                  </p>
                </div>
              </div>
              <p className="text-[11px] text-neutral-500 mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between">
                <span>Landmark: Janapriya Heavens</span>
                <a
                  href="https://maps.google.com/?q=No.3,+Janapriya+Heavens,+Allalasandra,+Yelahanka,+Bengaluru,+560065"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-800 font-medium hover:underline flex items-center gap-1"
                >
                  Open Maps <ExternalLink className="w-3 h-3" />
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* =========================================================================
            TWO-COLUMN MAIN SECTION (Left: Dark Forest Green "Get In Touch !" Card; Right: Map + Social Media)
           ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: Dark Forest Green Form Container (matches reference) */}
          <div className="lg:col-span-5 bg-[#143d23] text-white p-6 sm:p-8 rounded-3xl shadow-xl relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-2 mb-6">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white flex items-center gap-2">
                <span>Get In Touch !</span>
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed font-light">
                Have a question or looking to customize a hair smoothing or bridal package? Send us your message and our team will get back to you promptly.
              </p>
            </div>

            {formSubmitted ? (
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center space-y-3 border border-white/15 my-6">
                <div className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-lg font-bold text-white">
                  Message Sent to WhatsApp!
                </h4>
                <p className="text-xs text-emerald-100">
                  Thank you, <strong>{formName}</strong>. Your message is queued for <strong>63609 64901</strong>. We will reply as soon as possible.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormName('');
                    setFormContact('');
                    setFormMessage('');
                  }}
                  className="mt-2 px-4 py-2 bg-white text-[#143d23] text-xs font-semibold rounded-xl hover:bg-neutral-100 transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4 relative z-10">
                <div>
                  <label className="block text-xs font-medium text-emerald-200 mb-1.5">
                    Your Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      placeholder="e.g. Priya Sharma"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-emerald-200/50 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#e6ca65] focus:border-transparent transition-all"
                    />
                    <User className="w-4 h-4 text-emerald-300 absolute right-3.5 top-3.5 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-emerald-200 mb-1.5">
                    Mobile / Phone Number
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formContact}
                      onChange={(e) => setFormContact(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-emerald-200/50 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#e6ca65] focus:border-transparent transition-all"
                    />
                    <Phone className="w-4 h-4 text-emerald-300 absolute right-3.5 top-3.5 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-emerald-200 mb-1.5">
                    Your Message / Desired Service
                  </label>
                  <div className="relative">
                    <textarea
                      rows={3}
                      placeholder="e.g. Inquiring about Hair Smoothing pricing or Bridal Muhurtham availability..."
                      value={formMessage}
                      onChange={(e) => setFormMessage(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-emerald-200/50 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#e6ca65] focus:border-transparent transition-all resize-none"
                    />
                    <MessageSquare className="w-4 h-4 text-emerald-300 absolute right-3.5 top-3.5 pointer-events-none" />
                  </div>
                </div>

                {/* Submit Pill Button matching reference */}
                <div className="pt-2">
                  <button
                    type="submit"
                    id="contact-submit-btn"
                    className="w-full py-3.5 px-6 rounded-2xl bg-[#e6ca65] hover:bg-[#d4b74e] text-neutral-900 font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-neutral-900" />
                    <span>Send Message to WhatsApp</span>
                  </button>
                  <p className="text-center text-[10px] sm:text-[11px] text-emerald-200/70 mt-2">
                    Sends directly to Pushpalatha R (+91 63609 64901)
                  </p>
                </div>
              </form>
            )}

            {/* Quick Consultation Badge */}
            <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between text-xs text-emerald-200">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Response within 30 mins
              </span>
              {onOpenBooking && (
                <button
                  type="button"
                  onClick={() => onOpenBooking()}
                  className="text-[#e6ca65] font-semibold hover:underline cursor-pointer"
                >
                  Book Slot Online &rarr;
                </button>
              )}
            </div>
          </div>

          {/* Right Column: Our Location Map + Social Media (matches reference) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Header: Our Location */}
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-neutral-900">
                Our Location
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 mt-1 leading-relaxed">
                Conveniently located at <strong>No.3, Janapriya Heavens, Allalasandra, Yelahanka</strong>, Bengaluru. Easy parking and ground floor accessibility.
              </p>
            </div>

            {/* Responsive Google Maps Embed with pinpoint at Allalasandra, Yelahanka */}
            <div className="w-full h-64 sm:h-72 rounded-2xl overflow-hidden border border-neutral-300 shadow-sm relative bg-neutral-100">
              <iframe
                title="Prakruthi Beauty Salon Location at Allalasandra Yelahanka Bengaluru"
                src="https://maps.google.com/maps?q=No.3,+Janapriya+Heavens,+Allalasandra,+Yelahanka,+Bengaluru,+Karnataka+560065&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
              {/* Map Floating Location Chip */}
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-neutral-200 shadow-xs flex items-center gap-2 text-xs font-semibold text-neutral-800 pointer-events-none">
                <MapPin className="w-3.5 h-3.5 text-rose-600" />
                <span>Prakruthi Beauty Salon • Yelahanka</span>
              </div>
            </div>

            {/* =========================================================================
                SOCIAL MEDIA SECTION (Direct links to official accounts provided by user)
               ========================================================================= */}
            <div className="pt-2">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-serif text-lg font-bold text-neutral-900">
                  Social Media
                </h4>
                <span className="text-xs text-neutral-500">
                  Follow for latest transformations & bridal reels
                </span>
              </div>

              {/* 4 Social Media Buttons (Circular/Pill Style as in Reference) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {/* 1. YouTube */}
                <a
                  href="https://www.youtube.com/@prakruthibeautysalonmakeov7976"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-social-youtube"
                  title="Subscribe to Prakruthi Beauty Salon on YouTube"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-white hover:bg-red-50 border border-neutral-200/90 hover:border-red-300 shadow-2xs hover:shadow-xs transition-all group"
                >
                  <div className="w-8 h-8 rounded-lg bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white flex items-center justify-center transition-colors shrink-0">
                    <Youtube className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="font-bold text-xs text-neutral-900 group-hover:text-red-700 block leading-tight truncate">
                      YouTube
                    </span>
                    <span className="text-[10px] text-neutral-500 block truncate">
                      @prakruthibeautysalonmakeov7976
                    </span>
                  </div>
                </a>

                {/* 2. Instagram */}
                <a
                  href="https://www.instagram.com/pushpalatharamanand?stkn=MXVyZ3VsZ3VqOHlyaA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-social-instagram"
                  title="Follow Pushpalatha Ramanand on Instagram"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-white hover:bg-pink-50 border border-neutral-200/90 hover:border-pink-300 shadow-2xs hover:shadow-xs transition-all group"
                >
                  <div className="w-8 h-8 rounded-lg bg-pink-100 text-pink-600 group-hover:bg-pink-600 group-hover:text-white flex items-center justify-center transition-colors shrink-0">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="font-bold text-xs text-neutral-900 group-hover:text-pink-700 block leading-tight truncate">
                      Instagram
                    </span>
                    <span className="text-[10px] text-neutral-500 block truncate">
                      @pushpalatharamanand
                    </span>
                  </div>
                </a>

                {/* 3. Facebook */}
                <a
                  href="https://www.facebook.com/share/19bbadxPtj/"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-social-facebook"
                  title="Visit Prakruthi Beauty Salon on Facebook"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-white hover:bg-blue-50 border border-neutral-200/90 hover:border-blue-300 shadow-2xs hover:shadow-xs transition-all group"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-colors shrink-0">
                    <Facebook className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="font-bold text-xs text-neutral-900 group-hover:text-blue-700 block leading-tight truncate">
                      Facebook
                    </span>
                    <span className="text-[10px] text-neutral-500 block truncate">
                      Official Page
                    </span>
                  </div>
                </a>

                {/* 4. WhatsApp */}
                <a
                  href="https://wa.me/916360964901?text=Hello%20Prakruthi%20Beauty%20Salon%2C%20I%20would%20like%20to%20inquire%20about%20booking%20an%20appointment."
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-social-whatsapp"
                  title="Direct WhatsApp with Pushpalatha R at 63609 64901"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-white hover:bg-emerald-50 border border-neutral-200/90 hover:border-emerald-300 shadow-2xs hover:shadow-xs transition-all group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#25D366]/20 text-[#128C7E] group-hover:bg-[#25D366] group-hover:text-white flex items-center justify-center transition-colors shrink-0">
                    <WhatsAppIcon className="w-4 h-4 fill-current" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="font-bold text-xs text-neutral-900 group-hover:text-emerald-800 block leading-tight truncate">
                      WhatsApp
                    </span>
                    <span className="text-[10px] text-neutral-500 font-mono block truncate">
                      63609 64901
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            NEWSLETTER / SPECIAL OFFERS BANNER (Matches Reference Bottom Banner)
           ========================================================================= */}
        <div className="rounded-3xl bg-gradient-to-r from-[#143d23] via-[#0d2e1a] to-[#143d23] text-white p-6 sm:p-10 shadow-lg border border-emerald-800/40 relative overflow-hidden">
          {/* Decorative gold shimmer */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-60 h-60 bg-[#e6ca65]/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7 space-y-1.5">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#e6ca65]">
                Exclusive Salon Updates
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Our Newsletters & Festival Offers
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100/80 font-light max-w-xl">
                Stay updated with seasonal discount alerts, Diwali/Wedding packages, and authentic skin care grooming advice from Pushpalatha R.
              </p>
            </div>

            <div className="lg:col-span-5">
              {newsletterSubscribed ? (
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3.5 border border-white/20 text-center flex items-center justify-center gap-2 text-xs font-semibold text-[#e6ca65]">
                  <CheckCircle2 className="w-4 h-4 text-[#e6ca65]" />
                  <span>Subscribed! You'll receive our next salon offer.</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="text"
                    required
                    placeholder="Enter your phone or email..."
                    value={newsletterInput}
                    onChange={(e) => setNewsletterInput(e.target.value)}
                    className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/25 text-white placeholder-emerald-200/60 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#e6ca65]"
                  />
                  <button
                    type="submit"
                    id="newsletter-submit-btn"
                    className="px-6 py-3 rounded-xl bg-[#e6ca65] hover:bg-[#d4b74e] text-neutral-900 font-bold text-xs sm:text-sm shrink-0 transition-colors shadow-sm cursor-pointer"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
