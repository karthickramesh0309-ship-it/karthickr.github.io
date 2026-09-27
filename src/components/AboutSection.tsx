import React from 'react';
import { Sparkles, CheckCircle2, Award, Users, Clock, ArrowRight } from 'lucide-react';
import founderPhoto from '../assets/images/pushpha.png';

interface AboutSectionProps {
  onOpenBooking?: () => void;
  onExploreServices?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenBooking,
  onExploreServices,
}) => {
  return (
    <section id="about" className="scroll-mt-16 bg-[#fcfaf7] text-neutral-800">
      
      {/* =========================================================================
          TOP BANNER: Reference Design ("About" + "HOME > ABOUT")
         ========================================================================= */}
      <div className="relative py-6 sm:py-7 bg-gradient-to-b from-[#f5eee6] via-[#faf4ed] to-[#fcfaf7] border-b border-neutral-200/60 overflow-hidden">
        {/* Subtle decorative botanical / beauty accessories ambiance */}
        <div className="absolute top-0 right-0 w-96 h-full opacity-20 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-600/30 via-emerald-800/10 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-row items-center justify-between gap-4">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-900 leading-tight">
                About
              </h2>
              <div className="mt-1 flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-neutral-500">
                <a href="#" className="hover:text-[#143d23] transition-colors">
                  Home
                </a>
                <span className="text-neutral-400 font-normal">&gt;</span>
                <span className="text-[#143d23] font-bold">About</span>
              </div>
            </div>

            {/* Quick Stylist Badge in Banner */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-xs border border-neutral-200/90 shadow-2xs shrink-0">
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
              <span className="text-[11px] sm:text-xs font-medium text-neutral-700">
                Founded &amp; Directed by <strong className="text-neutral-900 font-semibold">Pushpalatha R.</strong>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          MAIN ABOUT SECTION: Split Layout (Image + Floating Quote | Text Story)
         ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 pb-10 sm:pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* LEFT COLUMN: Styled Image Frame with Offset Green Backdrop & Floating Quote Card */}
          <div className="lg:col-span-6 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-md sm:max-w-lg">
              
              {/* Offset Background Accent Panel (matches green drop block in reference image) */}
              <div className="absolute -inset-2 sm:-inset-3 bg-[#507a5f]/40 rounded-3xl -rotate-1 sm:-rotate-2 -z-10 transition-transform duration-500" />
              <div className="absolute -inset-1 sm:-inset-2 bg-[#143d23]/20 rounded-3xl rotate-1 sm:rotate-1 -z-10" />

              {/* Main Photo Container */}
              <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-neutral-100 aspect-4/3 sm:aspect-4/3 group">
                <img
                  src={founderPhoto}
                  alt="Pushpalatha R. - Founder of Prakruthi Beauty Salon & Spa"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                  loading="lazy"
                />
                
                {/* Subtle soft gradient scrim at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent pointer-events-none" />

                {/* Bottom Photo Caption */}
                <div className="absolute bottom-3.5 left-4 right-4 text-white pointer-events-none">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-serif text-sm sm:text-base font-bold text-white drop-shadow-xs">
                        Pushpalatha R.
                      </p>
                      <p className="text-[11px] text-emerald-200 drop-shadow-xs">
                        Founder & Master Stylist • Prakruthi Beauty Salon
                      </p>
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-[#143d23]/90 text-white border border-emerald-400/40">
                      Yelahanka
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: Text Content (Exact User Caption & Reference Structure) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Small uppercase category label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#143d23]/10 text-[#143d23] text-xs font-bold uppercase tracking-[0.2em]">
              <Sparkles className="w-3.5 h-3.5 text-[#143d23]" />
              <span>Who We Are</span>
            </div>

            {/* Main Headline (User-provided) */}
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-900 leading-tight">
              Beauty with a personal touch. 🌸
            </h3>

            {/* User-provided Core Story Caption */}
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-light">
              Founded by <strong>Pushpalatha R.</strong>, <strong>Prakruthi Beauty Salon</strong> brings together beauty, care, creativity, and style to help every client feel confident and beautiful. From everyday beauty care to hair styling, skincare, bridal makeup, and special occasions, we provide personalized services in a warm and comfortable environment. We believe every person has their own unique style, and our goal is to bring out the best in you.
            </p>

            {/* Feature Highlights (Matching "Personalized Design" & "Fashion Trendsetter" in Reference) */}
            <div className="space-y-4 pt-1">
              {/* Feature 1 */}
              <div className="border-l-2 border-[#143d23] pl-4 space-y-1">
                <h4 className="font-serif text-base font-bold text-neutral-900">
                  Personalized Hair & Skin Care
                </h4>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-light">
                  Tailored hair smoothing, keratin renewal, therapeutic L'Oréal hair spa, and custom skin facials aligned with your unique hair texture and complexion.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="border-l-2 border-[#e6ca65] pl-4 space-y-1">
                <h4 className="font-serif text-base font-bold text-neutral-900">
                  Bridal & Special Occasion Artistry
                </h4>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-light">
                  Traditional muhurtham styling, flawless HD makeup, expert saree draping, and customized pre-bridal packages in a comfortable, welcoming ambiance.
                </p>
              </div>
            </div>

            {/* Action Buttons (Matches "DISCOVER MORE" in Reference) */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              {onOpenBooking ? (
                <button
                  type="button"
                  id="about-book-btn"
                  onClick={onOpenBooking}
                  className="px-6 py-3 rounded-xl bg-[#143d23] hover:bg-[#0d2a18] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer active:scale-98"
                >
                  <span>Book Consultation</span>
                  <ArrowRight className="w-4 h-4 text-[#e6ca65]" />
                </button>
              ) : (
                <a
                  href="#contact"
                  className="px-6 py-3 rounded-xl bg-[#143d23] hover:bg-[#0d2a18] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Book Consultation</span>
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
                  Discover Services
                </button>
              ) : (
                <a
                  href="#services-menu"
                  className="px-6 py-3 rounded-xl bg-white hover:bg-neutral-50 text-neutral-800 font-bold text-xs sm:text-sm uppercase tracking-wider border border-neutral-300 shadow-2xs hover:shadow-xs transition-all cursor-pointer"
                >
                  Discover Services
                </a>
              )}
            </div>

          </div>

        </div>

        {/* =========================================================================
            BOTTOM STATS ROW: Exact Reference Layout (4 Stats with Vertical Dividers)
            "1.4K+ Product Sold | 720+ Completed Projects | 899+ Happy Customer | 15+ Years Experience"
           ========================================================================= */}
        <div className="mt-16 pt-10 border-t border-neutral-200/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-neutral-200">
            
            {/* Stat 1 */}
            <div className="pt-4 md:pt-0 px-2 space-y-1">
              <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#143d23] tracking-tight">
                15+
              </div>
              <div className="text-xs sm:text-sm font-medium text-neutral-600">
                Years of Salon Experience
              </div>
            </div>

            {/* Stat 2 */}
            <div className="pt-4 md:pt-0 px-2 space-y-1">
              <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#143d23] tracking-tight">
                2,500+
              </div>
              <div className="text-xs sm:text-sm font-medium text-neutral-600">
                Happy Customers Served
              </div>
            </div>

            {/* Stat 3 */}
            <div className="pt-4 md:pt-0 px-2 space-y-1">
              <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#143d23] tracking-tight">
                100%
              </div>
              <div className="text-xs sm:text-sm font-medium text-neutral-600">
                Authentic Brand Products
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
