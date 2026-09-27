import React, { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  Filter,
  PlusCircle,
  ShieldCheck,
  Award,
  ChevronDown,
  Info,
  Layers,
  LayoutGrid,
} from 'lucide-react';

import { TransformationCardShuffle } from './TransformationCardShuffle';
import { TransformationCategory, SalonTransformation } from '../types';

interface BeforeAfterSectionProps {
  transformations: SalonTransformation[];
  onOpenUploadModal: () => void;
  onSelectServiceForBooking?: (serviceName: string) => void;
}

/* ============================================================
   FIXED PRAKRUTHI GALLERY
   ONLY THESE 7 IMAGES ARE USED
   ============================================================ */

const GALLERY_IMAGES = [
  {
    id: 'gallery-1',
    src: '/gallery1.png',
    title: 'Beauty & Makeup',
    serviceName: 'Beauty & Makeup',
    category: 'Makeup' as TransformationCategory,
  },
  {
    id: 'gallery-2',
    src: '/gallery2.jpeg',
    title: 'Bridal Makeup',
    serviceName: 'Bridal Makeup',
    category: 'Bridal' as TransformationCategory,
  },
  {
    id: 'gallery-3',
    src: '/gallery3.png',
    title: 'Bridal Hairstyle',
    serviceName: 'Bridal Hairstyle',
    category: 'Bridal' as TransformationCategory,
  },
  {
    id: 'gallery-4',
    src: '/gallery4.png',
    title: 'Hair Styling',
    serviceName: 'Hair Styling',
    category: 'Hair' as TransformationCategory,
  },
  {
    id: 'gallery-5',
    src: '/gallery5.png',
    title: 'Traditional Glam Look',
    serviceName: 'Traditional Glam Look',
    category: 'Makeup' as TransformationCategory,
  },
  {
    id: 'gallery-6',
    src: '/gallery6.png',
    title: 'Makeup Look',
    serviceName: 'Makeup Look',
    category: 'Makeup' as TransformationCategory,
  },
  {
    id: 'gallery-7',
    src: '/gallery7.png',
    title: 'Elegant Beauty Look',
    serviceName: 'Elegant Beauty Look',
    category: 'Hair' as TransformationCategory,
  },
];

/* ============================================================
   DATA FOR SHUFFLE COMPONENT

   We create a separate fixed array so the old
   INITIAL_TRANSFORMATIONS data is NOT displayed.
   ============================================================ */

const GALLERY_TRANSFORMATIONS_ARRAY =
  GALLERY_IMAGES.map((item) => ({
    id: item.id,
    title: item.title,
    serviceName: item.serviceName,
    category: item.category,

    // Same image is used for both fields because this
    // is now a normal gallery rather than before/after.
    beforeImage: item.src,
    afterImage: item.src,

    description: item.title,
  })) as unknown as SalonTransformation[];

/* ============================================================
   CATEGORIES
   ============================================================ */

const CATEGORIES: TransformationCategory[] = [
  'All',
  'Hair',
  'Skin',
  'Bridal',
  'Makeup',
  'Other',
];

/* ============================================================
   COMPONENT
   ============================================================ */

export const BeforeAfterSection: React.FC<BeforeAfterSectionProps> = ({
  onOpenUploadModal,
  onSelectServiceForBooking,
}) => {
  const [activeView, setActiveView] = useState<'shuffle' | 'grid'>(
    'shuffle'
  );

  const [selectedCategory, setSelectedCategory] =
    useState<TransformationCategory>('All');

  const [visibleCount, setVisibleCount] = useState<number>(6);

  /* ==========================================================
     FILTER ONLY THE 7 NEW GALLERY IMAGES
     ========================================================== */

  const filteredGallery = useMemo(() => {
    if (selectedCategory === 'All') {
      return GALLERY_IMAGES;
    }

    return GALLERY_IMAGES.filter(
      (item) => item.category === selectedCategory
    );
  }, [selectedCategory]);

  const displayedGallery = useMemo(() => {
    return filteredGallery.slice(0, visibleCount);
  }, [filteredGallery, visibleCount]);

  const hasMore = visibleCount < filteredGallery.length;

  /* ==========================================================
     SHOW MORE
     ========================================================== */

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  /* ==========================================================
     CATEGORY CHANGE
     ========================================================== */

  const handleCategoryChange = (
    category: TransformationCategory
  ) => {
    setSelectedCategory(category);
    setVisibleCount(6);
  };

  /* ==========================================================
     RETURN
     ========================================================== */

  return (
    <section
      id="transformations"
      aria-label="Prakruthi Beauty Salon Gallery"
      className="py-16 sm:py-24 bg-[#fcfaf7] relative overflow-hidden"
    >
      {/* ======================================================
          BACKGROUND ACCENTS
          ====================================================== */}

      <div className="absolute top-0 right-0 -mt-16 -mr-16 w-96 h-96 bg-[#143d23]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-96 h-96 bg-[#c99839]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ====================================================
            SECTION HEADER
            ==================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            margin: '-60px',
          }}
          transition={{
            duration: 0.6,
            ease: 'easeOut',
          }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#143d23]/10 text-[#143d23] text-xs font-semibold tracking-wider uppercase mb-3 border border-[#143d23]/15">
            <Sparkles className="w-3.5 h-3.5 text-[#c99839]" />

            Prakruthi Beauty Salon
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight leading-tight">
            Beauty & Style Gallery
          </h2>

          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
            Explore authentic styling, makeup, bridal artistry, and
            beauty looks from{' '}
            <span className="font-semibold text-neutral-900">
              Prakruthi Beauty Salon
            </span>
            . Watch the card shuffle motion below or browse all
            gallery photos.
          </p>
        </motion.div>

        {/* ====================================================
            VIEW MODE SWITCHER
            ==================================================== */}

        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3">

          <div className="p-1 bg-white rounded-2xl border border-neutral-200/90 shadow-2xs inline-flex items-center gap-1.5">

            {/* CARD SHUFFLE */}

            <button
              type="button"
              id="view-shuffle-btn"
              onClick={() => setActiveView('shuffle')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                activeView === 'shuffle'
                  ? 'bg-[#143d23] text-white shadow-sm'
                  : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
              }`}
            >
              <Layers className="w-4 h-4 text-[#e6ca65]" />

              <span>
                Card Shuffle Showcase ({GALLERY_IMAGES.length} Photos)
              </span>
            </button>

            {/* ALL PHOTOS */}

            <button
              type="button"
              id="view-grid-btn"
              onClick={() => setActiveView('grid')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                activeView === 'grid'
                  ? 'bg-[#143d23] text-white shadow-sm'
                  : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
              }`}
            >
              <LayoutGrid className="w-4 h-4" />

              <span>All Photos Grid</span>
            </button>

          </div>
        </div>

        {/* ====================================================
            MAIN CONTENT
            ==================================================== */}

        <div className="mt-8">

          {/* ==================================================
              SHUFFLE VIEW
              ================================================== */}

          {activeView === 'shuffle' ? (
            <div>

              <TransformationCardShuffle
                transformations={GALLERY_TRANSFORMATIONS_ARRAY}
                onSelectServiceForBooking={
                  onSelectServiceForBooking
                }
                onOpenUploadModal={
                  onOpenUploadModal
                }
              />

            </div>
          ) : (

            /* ==================================================
               GRID VIEW
               ================================================== */

            <div>

              {/* ================================================
                  CATEGORY + UPLOAD BAR
                  ================================================ */}

              <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-neutral-200/80 pb-6 mb-8">

                {/* CATEGORY FILTERS */}

                <div
                  role="tablist"
                  aria-label="Filter gallery by service category"
                  className="flex flex-wrap items-center justify-center gap-2 w-full md:w-auto"
                >

                  {CATEGORIES.map((category) => {

                    const count =
                      category === 'All'
                        ? GALLERY_IMAGES.length
                        : GALLERY_IMAGES.filter(
                            (item) =>
                              item.category === category
                          ).length;

                    const isSelected =
                      selectedCategory === category;

                    return (
                      <button
                        key={category}
                        type="button"
                        role="tab"
                        aria-selected={isSelected}
                        id={`cat-filter-${category.toLowerCase()}`}
                        onClick={() =>
                          handleCategoryChange(category)
                        }
                        className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                          isSelected
                            ? 'bg-[#143d23] text-white shadow-sm ring-2 ring-[#143d23]/20'
                            : 'bg-white text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 border border-neutral-200'
                        }`}
                      >
                        <span>{category}</span>

                        <span
                          className={`text-[11px] px-1.5 py-0.2 rounded-full font-mono ${
                            isSelected
                              ? 'bg-white/20 text-white'
                              : 'bg-neutral-100 text-neutral-500'
                          }`}
                        >
                          {count}
                        </span>
                      </button>
                    );
                  })}

                </div>

                {/* UPLOAD BUTTON */}

                <button
                  type="button"
                  id="add-transformation-trigger-btn"
                  onClick={onOpenUploadModal}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium bg-[#f3efe6] hover:bg-[#eae3d5] text-[#143d23] border border-[#143d23]/20 shadow-2xs transition-colors shrink-0 cursor-pointer"
                >
                  <PlusCircle className="w-4 h-4 text-[#143d23]" />

                  <span>Upload Client Photo</span>
                </button>

              </div>

              {/* ================================================
                  GALLERY GRID
                  ONLY gallery1.jpeg - gallery7.jpeg
                  ================================================ */}

              {displayedGallery.length > 0 ? (

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

                  {displayedGallery.map((item, index) => (

                    <motion.div
                      key={item.id}
                      initial={{
                        opacity: 0,
                        y: 25,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                        margin: '-40px',
                      }}
                      transition={{
                        duration: 0.5,
                        delay: (index % 3) * 0.1,
                      }}
                      className="rounded-2xl border border-neutral-200/90 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden bg-neutral-100 group"
                    >

                      {/* ==================================================
                          FULL IMAGE FRAME

                          IMPORTANT:
                          - Never use object-cover here.
                          - Never scale the image on hover.
                          - object-contain keeps the COMPLETE original
                            gallery image visible without cropping.
                          - The fixed frame gives the gallery a clean,
                            consistent layout.
                          ================================================== */}

                      <div
                        className="relative w-full h-[320px] sm:h-[360px] lg:h-[380px] overflow-hidden bg-neutral-50 flex items-center justify-center"
                      >
                      <img
  src={item.src}
  alt={item.title}
  className="w-full h-full object-contain object-center"
  style={{
    objectFit: 'contain',
    objectPosition: 'center',
  }}
/>

                        {/* IMAGE TITLE */}

                        <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                          <p className="text-white text-sm font-semibold">
                            {item.title}
                          </p>
                        </div>
                      </div>

                    </motion.div>

                  ))}

                </div>

              ) : (

                /* ==============================================
                   EMPTY CATEGORY
                   ============================================== */

                <div className="text-center py-16 px-4 bg-white rounded-2xl border border-dashed border-neutral-300">

                  <div className="w-12 h-12 mx-auto rounded-full bg-neutral-100 flex items-center justify-center text-neutral-400 mb-3">
                    <Filter className="w-6 h-6" />
                  </div>

                  <h3 className="font-serif text-lg font-semibold text-neutral-800">
                    No images in "{selectedCategory}" category
                  </h3>

                  <p className="text-sm text-neutral-500 mt-1 max-w-md mx-auto">
                    There are currently no gallery images assigned
                    to this category.
                  </p>

                </div>
              )}

              {/* ================================================
                  VIEW MORE
                  ================================================ */}

              {hasMore && (
                <div className="mt-10 text-center">

                  <button
                    type="button"
                    id="view-more-transformations-btn"
                    onClick={handleShowMore}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-neutral-50 text-[#143d23] font-medium text-sm border border-neutral-300 shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer"
                  >
                    <span>View More Photos</span>

                    <ChevronDown className="w-4 h-4 text-[#143d23]" />
                  </button>

                </div>
              )}

            </div>
          )}
        </div>

        {/* ====================================================
            TRUST BAR
            ==================================================== */}

        <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-[#0e2a1b] text-white relative overflow-hidden">

          <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-3xl">

            {/* ZERO RETOUCHING */}

            <div className="flex items-start gap-3.5">

              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/15">
                <ShieldCheck className="w-5 h-5 text-[#e6ca65]" />
              </div>

              <div>

                <h4 className="font-serif font-semibold text-base text-white">
                  Zero Retouching Filters
                </h4>

                <p className="text-xs text-white/75 mt-1 leading-relaxed">
                  Gallery photos are presented naturally to showcase
                  authentic salon styling and beauty work.
                </p>

              </div>
            </div>

            {/* PREMIUM PRODUCTS */}

            <div className="flex items-start gap-3.5">

              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/15">
                <Award className="w-5 h-5 text-[#e6ca65]" />
              </div>

              <div>

                <h4 className="font-serif font-semibold text-base text-white">
                  Premium Products
                </h4>

                <p className="text-xs text-white/75 mt-1 leading-relaxed">
                  Only authentic salon brands: L'Oreal Professionnel,
                  O3+, Lotus Herbals, VLCC, and Rica wax.
                </p>

              </div>
            </div>

            {/* PRIVACY */}

            <div className="flex items-start gap-3.5">

              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/15">
                <Info className="w-5 h-5 text-[#e6ca65]" />
              </div>

              <div>

                <h4 className="font-serif font-semibold text-base text-white">
                  Client Privacy Protected
                </h4>

                <p className="text-xs text-white/75 mt-1 leading-relaxed">
                  Published gallery images are displayed with appropriate
                  client consent and privacy considerations.
                </p>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default BeforeAfterSection;