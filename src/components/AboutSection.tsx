import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import founderPhoto from "../assets/images/pushphafounder.png";

interface AboutSectionProps {
  onOpenBooking?: () => void;
  onExploreServices?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenBooking,
  onExploreServices,
}) => {
  return (
    <section
      id="about"
      className="scroll-mt-16 bg-[#fcfaf7] text-neutral-800"
    >
      {/* =========================================================================
          TOP BANNER
         ========================================================================= */}
      <div className="relative py-6 sm:py-7 bg-gradient-to-b from-[#f5eee6] via-[#faf4ed] to-[#fcfaf7] border-b border-neutral-200/60 overflow-hidden">

        {/* Subtle decorative ambiance */}
        <div className="absolute top-0 right-0 w-96 h-full opacity-20 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-600/30 via-emerald-800/10 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-row items-center justify-between gap-4">

            <div>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-900 leading-tight">
                About
              </h2>

              <div className="mt-1 flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-neutral-500">
                <a
                  href="#"
                  className="hover:text-[#143d23] transition-colors"
                >
                  Home
                </a>

                <span className="text-neutral-400 font-normal">
                  &gt;
                </span>

                <span className="text-[#143d23] font-bold">
                  About
                </span>
              </div>
            </div>

            {/* Founder Badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-xs border border-neutral-200/90 shadow-2xs shrink-0">
              <span className="w-2 h-2 rounded-full bg-emerald-600" />

              <span className="text-[11px] sm:text-xs font-medium text-neutral-700">
                Founded &amp; Led by{' '}
                <strong className="text-neutral-900 font-semibold">
                  Pushpalatha R.
                </strong>
              </span>
            </div>

          </div>
        </div>
      </div>

      {/* =========================================================================
          MAIN ABOUT SECTION
         ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 pb-10 sm:pb-12">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">

          {/* =========================================================================
              LEFT COLUMN: FOUNDER IMAGE
             ========================================================================= */}
          <div className="lg:col-span-6 flex justify-center lg:justify-start">

           <div className="relative w-full max-w-xl sm:max-w-2xl">

              {/* Green offset background */}
              <div className="absolute -inset-2 sm:-inset-3 bg-[#507a5f]/40 rounded-3xl -rotate-1 sm:-rotate-2 -z-10 transition-transform duration-500" />

              <div className="absolute -inset-1 sm:-inset-2 bg-[#143d23]/20 rounded-3xl rotate-1 sm:rotate-1 -z-10" />

              {/* Main photo */}
              <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-neutral-100 aspect-4/3 sm:aspect-4/3 group">

                <img
                  src={founderPhoto}
                  alt="Pushpalatha R. - Founder of Prakruthi Beauty Salon & Spa"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                  loading="lazy"
                />

                {/* Bottom gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent pointer-events-none" />

                {/* Founder caption */}
                <div className="absolute bottom-3.5 left-4 right-4 text-white pointer-events-none">

                  <div className="flex items-center justify-between gap-3">

                    <div>
                      <p className="font-serif text-sm sm:text-base font-bold text-white drop-shadow-xs">
                        Pushpalatha R.
                      </p>

                      <p className="text-[11px] text-emerald-200 drop-shadow-xs">
                        Founder &amp; Master Stylist • Prakruthi Beauty Salon
                      </p>
                    </div>

                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-[#143d23]/90 text-white border border-emerald-400/40 shrink-0">
                      Yelahanka
                    </span>

                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* =========================================================================
              RIGHT COLUMN: ABOUT CONTENT
             ========================================================================= */}
          <div className="lg:col-span-6 space-y-6">

            {/* Section label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#143d23]/10 text-[#143d23] text-xs font-bold uppercase tracking-[0.2em]">
              <Sparkles className="w-3.5 h-3.5 text-[#143d23]" />
              <span>Who We Are</span>
            </div>

            {/* Main heading */}
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-900 leading-tight">
              Where Beauty Meets Personal Care. 🌸
            </h3>

            {/* Main About paragraph */}
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-light">
              Founded and led by <strong>Pushpalatha R.</strong>,{' '}
              <strong>Prakruthi Beauty Salon</strong> is a place where beauty,
              personal care, and individual style come together. We offer
              thoughtfully personalized services in hair styling, hair care,
              skincare, bridal makeup, and special occasions, creating an
              experience that is comfortable, welcoming, and truly personal.
            </p>

            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-light">
             
            </p>

            {/* =========================================================================
                FEATURE HIGHLIGHTS
               ========================================================================= */}
            <div className="space-y-5 pt-1">

              {/* Feature 1 */}
              <div className="border-l-2 border-[#143d23] pl-4 space-y-1.5">
                <h4 className="font-serif text-base sm:text-lg font-bold text-neutral-900">
                  Personalized Hair &amp; Skin Care
                </h4>

                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-light">
                  From hair smoothing, keratin care, and L&apos;Oréal Hair Spa
                  to personalized facials and skincare treatments, every
                  service is carefully selected to complement your hair type,
                  skin needs, and personal preferences.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="border-l-2 border-[#e6ca65] pl-4 space-y-1.5">
                <h4 className="font-serif text-base sm:text-lg font-bold text-neutral-900">
                  Bridal &amp; Special Occasion Artistry
                </h4>

                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-light">
                  From traditional Muhurtham styling and elegant saree draping
                  to refined HD makeup and pre-bridal care, we create a
                  complete beauty experience for weddings, celebrations, and
                  other special moments.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="border-l-2 border-[#143d23] pl-4 space-y-1.5">
                <h4 className="font-serif text-base sm:text-lg font-bold text-neutral-900">
                  Care, Comfort &amp; Quality
                </h4>

                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-light">
                  We focus on creating a welcoming salon experience through
                  attentive service, quality care, and authentic professional
                  products, so every visit feels comfortable, consistent, and
                  worth coming back to.
                </p>
              </div>

            </div>

            {/* =========================================================================
                ACTION BUTTONS
               ========================================================================= */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">

              {onOpenBooking ? (
                <button
                  type="button"
                  id="about-book-btn"
                  onClick={onOpenBooking}
                  className="px-6 py-3 rounded-xl bg-[#143d23] hover:bg-[#0d2a18] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer active:scale-98"
                >
                  <span>Book an Appointment</span>

                  <ArrowRight className="w-4 h-4 text-[#e6ca65]" />
                </button>
              ) : (
                <a
                  href="#contact"
                  className="px-6 py-3 rounded-xl bg-[#143d23] hover:bg-[#0d2a18] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Book an Appointment</span>

                  <ArrowRight className="w-4 h-4 text-[#e6ca65]" />
                </a>
              )}

              {onExploreServices ? (
                <button
                  type="button"
                  id="about-services-btn"
                  onClick={onExploreServices}
                  className="px-6 py-3 rounded-xl bg-white hover:bg-neutral-50 text-neutral-800 font-bold text-xs sm:text-sm uppercase tracking-wider border border-neutral-300 shadow-2xs hover:shadow-xs transition-all cursor-pointer"
                >
                  Explore Our Services
                </button>
              ) : (
                <a
                  href="#services-menu"
                  className="px-6 py-3 rounded-xl bg-white hover:bg-neutral-50 text-neutral-800 font-bold text-xs sm:text-sm uppercase tracking-wider border border-neutral-300 shadow-2xs hover:shadow-xs transition-all cursor-pointer"
                >
                  Explore Our Services
                </a>
              )}

            </div>

          </div>
        </div>

        {/* =========================================================================
            STATS ROW
           ========================================================================= */}
        <div className="mt-16 pt-10 border-t border-neutral-200/80">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-neutral-200">

            {/* Stat 1 */}
            <div className="pt-4 md:pt-0 px-2 space-y-1">
              <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#143d23] tracking-tight">
                15+
              </div>

              <div className="text-xs sm:text-sm font-medium text-neutral-600">
                Years of Beauty Experience
              </div>
            </div>

            {/* Stat 2 */}
            <div className="pt-4 md:pt-0 px-2 space-y-1">
              <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#143d23] tracking-tight">
                2,500+
              </div>

              <div className="text-xs sm:text-sm font-medium text-neutral-600">
                Clients Served
              </div>
            </div>

            {/* Stat 3 */}
            <div className="pt-4 md:pt-0 px-2 space-y-1">
              <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#143d23] tracking-tight">
                100%
              </div>

              <div className="text-xs sm:text-sm font-medium text-neutral-600">
                Authentic Professional Products
              </div>
            </div>

            {/* Stat 4 */}
            <div className="pt-4 md:pt-0 px-2 space-y-1">
              <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#143d23] tracking-tight">
                4.9 ★
              </div>

              <div className="text-xs sm:text-sm font-medium text-neutral-600">
                Google Client Rating
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};