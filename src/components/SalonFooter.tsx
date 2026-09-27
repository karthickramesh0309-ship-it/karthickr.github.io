import React from 'react';
import { Phone, Clock, MapPin, Sparkles, Heart, Youtube, Instagram, Facebook } from 'lucide-react';

const WhatsAppIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export const SalonFooter: React.FC = () => {
  return (
    <footer className="bg-[#0b2214] text-white border-t border-emerald-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden bg-[#0c5c24] border border-emerald-700/50 flex items-center justify-center shadow-xs shrink-0">
                <img
                  src="/prakruthi_logo.png"
                  alt="Prakruthi Beauty Salon Logo"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold tracking-tight text-white">
                  Prakruthi
                </h3>
                <p className="text-xs uppercase tracking-widest text-emerald-400 font-semibold">
                  Beauty Salon & Spa • Pushpalatha R
                </p>
              </div>
            </div>

            <p className="text-sm text-neutral-300 leading-relaxed max-w-md font-light">
              Dedicated to bringing out your natural radiance with authentic beauty treatments, certified hair care, rejuvenating facials, and traditional bridal styling in Yelahanka, Bengaluru.
            </p>

            {/* Social Media Links in Footer */}
            <div className="pt-1 flex items-center gap-2.5">
              <a
                href="https://www.youtube.com/@prakruthibeautysalonmakeov7976"
                target="_blank"
                rel="noopener noreferrer"
                title="YouTube: @prakruthibeautysalonmakeov7976"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-red-600 text-white flex items-center justify-center transition-colors shadow-xs"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/pushpalatharamanand?stkn=MXVyZ3VsZ3VqOHlyaA=="
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram: @pushpalatharamanand"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-pink-600 text-white flex items-center justify-center transition-colors shadow-xs"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/share/19bbadxPtj/"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook: Prakruthi Beauty Salon"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-blue-600 text-white flex items-center justify-center transition-colors shadow-xs"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/916360964901"
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp: +91 63609 64901"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#25D366] text-white flex items-center justify-center transition-colors shadow-xs"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2">
              <p className="font-serif italic text-xl text-[#e6ca65]">
                "Thank you • Visit Again"
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-base font-semibold text-white mb-4">
              Salon Services
            </h4>
            <ul className="space-y-2 text-xs text-neutral-300">
              <li><a href="#about" className="hover:text-[#e6ca65] transition-colors font-medium">About (Pushpalatha R.)</a></li>
              <li><a href="#services-menu" className="hover:text-emerald-300 transition-colors">Hair Smoothing & Straightening</a></li>
              <li><a href="#services-menu" className="hover:text-emerald-300 transition-colors">L'Oreal Hair Spa & Coloring</a></li>
              <li><a href="#services-menu" className="hover:text-emerald-300 transition-colors">O3+ & Lotus Diamond Facials</a></li>
              <li><a href="#services-menu" className="hover:text-emerald-300 transition-colors">De-Tanning & Clean-Up</a></li>
              <li><a href="#services-menu" className="hover:text-emerald-300 transition-colors">Rica Waxing & Body Polishing</a></li>
              <li><a href="#services-menu" className="hover:text-emerald-300 transition-colors">Crystal Spa Pedicure & Manicure</a></li>
              <li><a href="#faq" className="hover:text-[#e6ca65] transition-colors font-medium">Frequently Asked Questions (FAQ)</a></li>
              <li><a href="#contact" className="hover:text-[#e6ca65] transition-colors font-medium">Contact & Location</a></li>
            </ul>
          </div>

          {/* Salon Hours & Contact */}
          <div>
            <h4 className="font-serif text-base font-semibold text-white mb-4">
              Hours & Location
            </h4>
            <div className="space-y-3 text-xs text-neutral-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#e6ca65] shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-white block">Prakruthi Beauty Salon</span>
                  <span className="block text-neutral-200">No.3, Janapriya Heavens, Allalasandra, Yelahanka</span>
                  <span className="text-neutral-400 text-[11px] block">Bengaluru - 560 065</span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#e6ca65] shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-white block">Opening Hours</span>
                  <span>Monday – Sunday: 9:30 AM – 8:30 PM</span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-[#e6ca65] shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-white block">Call & WhatsApp Booking</span>
                  <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                    <a
                      href="tel:+916360964901"
                      className="text-[#e6ca65] hover:underline font-mono font-bold text-sm tracking-wide"
                    >
                      63609 64901
                    </a>
                    <span className="text-neutral-400">•</span>
                    <a
                      href="tel:+919739796134"
                      className="text-neutral-200 hover:underline font-mono text-xs"
                    >
                      97397 96134
                    </a>
                  </div>
                  <span className="text-neutral-300 text-[11px] block">Contact: Pushpalatha R</span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-[#e6ca65] shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-white block">Authenticity Promise</span>
                  <span>100% genuine results without digital distortion</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-12 pt-6 border-t border-emerald-900/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>© {new Date().getFullYear()} Prakruthi Beauty Salon. Pushpalatha R. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Carefully crafted with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" /> for natural beauty.
          </p>
        </div>
      </div>
    </footer>
  );
};
