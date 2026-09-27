import React, { useState, useEffect } from 'react';
import { Sparkles, Phone, Calendar, Menu, X, PlusCircle } from 'lucide-react';

interface SalonNavbarProps {
  onOpenUploadModal: () => void;
  onOpenBooking: () => void;
}

export const SalonNavbar: React.FC<SalonNavbarProps> = ({
  onOpenUploadModal,
  onOpenBooking,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 bg-white/95 backdrop-blur-md ${
        isScrolled
          ? 'shadow-xs border-b border-neutral-200/70 py-2.5 sm:py-3'
          : 'border-b border-neutral-100 py-3 sm:py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 lg:gap-6">
          
          {/* Brand Logo & Luxury Parlour Title */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl overflow-hidden bg-[#113a20] flex items-center justify-center shadow-xs group-hover:scale-103 transition-transform shrink-0 ring-1 ring-emerald-950/10 p-0.5">
              <img
                src="/prakruthi_logo.png"
                alt="Prakruthi Beauty Salon Logo"
                className="w-full h-full object-cover rounded-lg"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#111827] leading-none">
                Prakruthi
              </span>
              <span className="text-[9px] sm:text-[10px] font-semibold tracking-[0.22em] uppercase text-[#143d23] mt-0.5 leading-tight">
                Beauty Salon &amp; Spa
              </span>
            </div>
          </a>

          {/* Luxury Desktop Navigation Links (Clean, Balanced, Single Line) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-[13px] font-medium tracking-wide text-neutral-600">
            <a
              href="#about"
              className="text-neutral-900 font-semibold hover:text-[#143d23] transition-colors py-1"
            >
              About
            </a>

            <a
              href="#transformations"
              className="hover:text-[#143d23] text-neutral-700 transition-colors flex items-center gap-1.5 py-1"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
              <span className="text-left leading-none">Gallery</span>
            </a>

            <a
              href="#services-menu"
              className="hover:text-[#143d23] transition-colors py-1"
            >
              Services
            </a>

            <a
              href="#testimonials"
              className="hover:text-[#143d23] transition-colors py-1"
            >
              Testimonials
            </a>

            <a
              href="#faq"
              className="hover:text-[#143d23] transition-colors py-1"
            >
              FAQs
            </a>

            <a
              href="#contact"
              className="hover:text-[#143d23] transition-colors py-1"
            >
              Contact
            </a>
          </nav>

          {/* Right Action Controls: Luxury Deep Forest Pill Call Button + Elegant Outline Book Button */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            
            {/* CALL NOW Luxury Pill Button */}
            <a
              href="tel:+916360964901"
              id="nav-call-now-btn"
              title="Call Prakruthi Beauty Salon at 63609 64901"
              aria-label="Call Now at 63609 64901"
              className="group inline-flex items-center gap-2 sm:gap-2.5 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl bg-[#113a20] hover:bg-[#0c2b17] text-white shadow-xs transition-all active:scale-97 shrink-0 border border-[#1b4e2d]"
            >
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-white/10 group-hover:bg-white/15 flex items-center justify-center text-[#e6ca65] transition-colors shrink-0">
                <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </div>
              <div className="flex flex-col text-left">
                <div className="flex items-center gap-1 leading-none">
                  <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.12em] text-[#e6ca65]">
                    Call Now
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                </div>
                <span className="text-xs sm:text-[13px] font-bold font-mono tracking-tight text-white mt-0.5 leading-none">
                  63609 64901
                </span>
              </div>
            </a>

            {/* BOOK ONLINE Luxury Border Button */}
            <button
              type="button"
              id="nav-book-btn"
              onClick={onOpenBooking}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 sm:py-2 rounded-xl bg-white hover:bg-neutral-50 text-[#143d23] border border-neutral-300 hover:border-[#143d23]/50 text-xs sm:text-[13px] font-medium shadow-2xs transition-all active:scale-97 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-[#143d23]" />
              <span>Book Online</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <div className="flex lg:hidden items-center">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 rounded-lg text-neutral-700 hover:bg-neutral-100 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pt-3 pb-3 border-t border-neutral-100 mt-2.5 space-y-1.5">
            {/* Prominent Mobile Call Banner */}
            <a
              href="tel:+916360964901"
              id="mobile-call-banner"
              className="w-full py-2.5 px-3.5 rounded-xl bg-[#113a20] text-white flex items-center justify-between shadow-xs active:scale-95 transition-all mb-2.5"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-white/15 flex items-center justify-center text-[#e6ca65]">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] font-semibold text-[#e6ca65] uppercase tracking-wider">
                    Direct Phone Inquiries
                  </div>
                  <div className="text-sm font-mono font-bold text-white">
                    63609 64901
                  </div>
                </div>
              </div>
              <span className="text-[11px] bg-white/20 text-white px-2.5 py-1 rounded-lg font-semibold">
                Call Now
              </span>
            </a>

            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-[#143d23] hover:bg-emerald-50/70"
            >
              About
            </a>

            <a
              href="#transformations"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-neutral-700 hover:bg-neutral-50"
            >
              Gallery
            </a>
            <a
              href="#services-menu"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-neutral-700 hover:bg-neutral-50"
            >
              Services
            </a>
            <a
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-neutral-700 hover:bg-neutral-50"
            >
              Testimonials
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-neutral-700 hover:bg-neutral-50"
            >
              FAQs
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-neutral-700 hover:bg-neutral-50"
            >
              Contact
            </a>

            <div className="pt-2 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-2.5 px-3 text-xs font-semibold rounded-xl bg-[#113a20] text-white text-center flex items-center justify-center gap-1.5 shadow-xs"
              >
                <Calendar className="w-3.5 h-3.5 text-[#e6ca65]" />
                Book Online
              </button>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenUploadModal();
                }}
                className="w-full py-2 px-3 text-xs font-medium rounded-xl text-[#143d23] bg-[#143d23]/10 text-center flex items-center justify-center gap-1.5"
              >
                <PlusCircle className="w-3.5 h-3.5" />
                Upload Client Transformation
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
