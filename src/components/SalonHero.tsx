import React, { useState, useRef, useCallback } from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  ArrowDown,
  ShieldCheck,
  HeartHandshake,
  CheckCircle2,
  ChevronsLeftRight
} from 'lucide-react';
import balayageBlowDryAfter from '../assets/images/after.jpeg';
import balayageBlowDryBefore from '../assets/images/before.png';
import hairSmoothingAfter from '../assets/images/hair_keratin_after_1790248305794.jpg';
import hairSmoothingBefore from '../assets/images/hair_keratin_before_1790248326719.jpg';

interface SalonHeroProps {
  onExploreTransformations: () => void;
  onViewMenu: () => void;
}

const HERO_TRANSFORMATIONS = [
  {
    id: 'blowdry',
    title: 'Royal Ethnic Look',
    category: 'Hair Styling',
    price: '',
    duration: '',
    beforeImage: balayageBlowDryBefore,
    afterImage: balayageBlowDryAfter,
    highlight: '',
  },
  {
    id: 'smoothing',
    title: 'Hair Smoothing',
    category: 'Hair Care',
    price: '',
    duration: '',
    beforeImage: hairSmoothingBefore,
    afterImage: hairSmoothingAfter,
    highlight: '',
  },
];

export const SalonHero: React.FC<SalonHeroProps> = ({
  onExploreTransformations,
  onViewMenu,
}) => {
  const [activeHeroIdx, setActiveHeroIdx] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const activeHeroItem = HERO_TRANSFORMATIONS[activeHeroIdx];

  const handleSliderMove = useCallback((clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 3) percentage = 3;
    if (percentage > 97) percentage = 97;
    setSliderPos(percentage);
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
    handleSliderMove(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    handleSliderMove(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // safe fallback
    }
  };

  return (
    <section className="relative pt-6 pb-12 sm:pt-10 sm:pb-16 bg-[#fcfaf7] overflow-hidden border-b border-neutral-200/70">
      {/* Decorative botanical background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#143d23]/8 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* LEFT COLUMN: Hero Brand Narrative & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* PLACE 1: Official Brand Logo Emblem */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-4 inline-flex items-center gap-3.5"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden shadow-md border-2 border-[#143d23]/40 bg-[#0c5c24] hover:scale-105 transition-all duration-300">
                <img
                  src="/prakruthi_logo.png"
                  alt="Prakruthi Beauty Salon Official Logo"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-left">
                <span className="text-[11px] font-bold tracking-widest uppercase text-[#143d23] bg-[#143d23]/10 px-3 py-1 rounded-full border border-[#143d23]/20 inline-block">
                  Official Salon Mark
                </span>
                <p className="text-xs text-neutral-600 mt-1 font-serif italic">
                  Beauty with a personal touch • Pushpalatha R.
                </p>
              </div>
            </motion.div>

            {/* Eyebrow / About Link in Hero Header */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mb-4 flex flex-wrap items-center justify-center lg:justify-start gap-2"
            >
              <a
                href="#about"
                title="About: Beauty with a personal touch"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#143d23]/10 hover:bg-[#143d23]/15 text-[#143d23] text-xs font-semibold tracking-wider uppercase border border-[#143d23]/20 shadow-2xs transition-all group cursor-pointer"
              >
                <span className="text-sm">🌸</span>
                <span>About • Beauty with a personal touch</span>
                <span className="text-neutral-400 group-hover:text-[#143d23] transition-colors font-bold">&rarr;</span>
              </a>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-3xl sm:text-5xl lg:text-5xl font-bold text-neutral-900 tracking-tight leading-[1.18]"
            >
              Real Transformations. <br />
              <span className="italic font-normal text-[#143d23]">Natural Radiance.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed font-normal max-w-2xl mx-auto lg:mx-0"
            >
              Experience genuine salon craft without filters or digital retouching. Slide the live comparison frame to inspect authentic before-and-after results crafted with authentic L'Oreal and O3+ products.
            </motion.p>

            {/* Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3"
            >
              <button
                type="button"
                id="hero-explore-transformations-btn"
                onClick={onExploreTransformations}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#143d23] hover:bg-[#0e2a1b] text-white font-medium text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#e6ca65]" />
                <span>Explore Before &amp; After Gallery</span>
              </button>

              <button
                type="button"
                id="hero-view-menu-btn"
                onClick={onViewMenu}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white hover:bg-neutral-50 text-neutral-800 font-medium text-sm border border-neutral-300 shadow-xs hover:shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>View Service Rate Card</span>
                <ArrowDown className="w-4 h-4 text-neutral-500" />
              </button>

              <a
                href="#about"
                id="hero-about-btn"
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-emerald-50/80 hover:bg-emerald-100 text-[#143d23] font-semibold text-sm border border-emerald-300/70 shadow-2xs hover:shadow-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>About</span>
                <span className="text-xs">&rarr;</span>
              </a>
            </motion.div>

            {/* Hero Brand Verification & Trust Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-7 p-3.5 sm:p-4 rounded-2xl bg-white border border-[#143d23]/25 shadow-xs flex items-center gap-3.5 text-left max-w-xl mx-auto lg:mx-0"
            >
              <div className="w-12 h-12 rounded-xl overflow-hidden shadow-xs border border-[#143d23]/30 shrink-0 bg-[#0c5c24]">
                <img
                  src="/prakruthi_logo.png"
                  alt="Prakruthi Beauty Salon Official Logo"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h4 className="font-serif font-bold text-neutral-900 text-sm truncate">
                    Prakruthi Beauty Salon &amp; Spa
                  </h4>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-100 text-emerald-800 shrink-0">
                    Verified
                  </span>
                </div>
                <p className="text-xs text-neutral-600 mt-0.5">
                  Authentic hair care, rejuvenating facials &amp; bridal styling with transparent pricing.
                </p>
                <div className="flex items-center gap-2.5 mt-1 text-[11px] text-[#143d23] font-medium flex-wrap">
                  <span>★ 4.9 Google Rated</span>
                  <span>•</span>
                  <span>Pushpa &amp; Team</span>
                  <span>•</span>
                  <span>100% Real Client Care</span>
                </div>
              </div>
            </motion.div>

            {/* Trust points bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-6 pt-5 border-t border-neutral-200/80 grid grid-cols-3 gap-2.5 text-left max-w-xl mx-auto lg:mx-0"
            >
              <div className="flex items-center gap-2 text-xs text-neutral-700 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                <span>100% Real Results</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-neutral-700 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                <span>Zero Retouching</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-neutral-700 font-medium">
                <HeartHandshake className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                <span>Transparent Rates</span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Interactive Live Before & After Slider */}
          <div className="lg:col-span-5">
            {/* Tab switch for Hero transformations */}
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
              {HERO_TRANSFORMATIONS.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setActiveHeroIdx(idx);
                    setSliderPos(50);
                  }}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                    activeHeroIdx === idx
                      ? 'bg-[#143d23] text-white shadow-xs'
                      : 'bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200'
                  }`}
                >
                  {item.title.split(' ')[0]} {item.title.split(' ')[1]}
                </button>
              ))}
            </div>

            {/* Slider Container */}
            <div
              ref={sliderRef}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              className="relative w-full aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white select-none cursor-ew-resize bg-neutral-900 group"
            >
              {/* After Image (Background) */}
              <img
                src={activeHeroItem.afterImage}
                alt={`${activeHeroItem.title} After`}
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                referrerPolicy="no-referrer"
              />

              {/* Before Image (Clipped overlay) */}
              <div
                className="absolute inset-0 overflow-hidden pointer-events-none"
                style={{ width: `${sliderPos}%` }}
              >
                <img
                  src={activeHeroItem.beforeImage}
                  alt={`${activeHeroItem.title} Before`}
                  className="absolute inset-0 w-full h-full object-cover max-w-none"
                  style={{
                    width: sliderRef.current?.offsetWidth ? `${sliderRef.current.offsetWidth}px` : '100%',
                    height: '100%'
                  }}
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Divider Line */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-lg pointer-events-none -ml-0.5 z-20"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white shadow-xl flex items-center justify-center border-2 border-[#143d23] text-[#143d23]">
                  <ChevronsLeftRight className="w-4 h-4" />
                </div>
              </div>

              {/* Badges: Before & After */}
              <div className="absolute top-4 left-4 z-20 pointer-events-none">
                <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-black/75 text-white backdrop-blur-xs shadow-sm">
                  Before
                </span>
              </div>
              <div className="absolute top-4 right-4 z-20 pointer-events-none">
                <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-[#143d23]/85 text-white backdrop-blur-xs shadow-sm">
                  After
                </span>
              </div>

              {/* Bottom Info Banner */}
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/85 via-black/50 to-transparent text-white z-20 pointer-events-none">
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <h3 className="text-sm font-serif font-bold text-white leading-tight">
                      {activeHeroItem.title}
                    </h3>
                    <p className="text-[11px] text-neutral-300 mt-0.5">
                      {activeHeroItem.highlight}
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-xs font-bold font-serif text-[#e6ca65]">
                      {activeHeroItem.price}
                    </span>
                    <span className="block text-[10px] text-neutral-300">
                      {activeHeroItem.duration}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Instruction hint */}
            <p className="text-center text-xs text-neutral-500 mt-2.5 flex items-center justify-center gap-1.5">
              <ChevronsLeftRight className="w-3.5 h-3.5 text-neutral-400" />
              <span>Drag or click slider to compare real before &amp; after results</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
