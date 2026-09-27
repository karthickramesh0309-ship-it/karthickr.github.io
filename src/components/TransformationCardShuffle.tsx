import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Pause, Sparkles } from 'lucide-react';

// ============================================================
// PRAKRUTHI BEAUTY SALON - GALLERY
// ONLY gallery1.jpeg TO gallery7.jpeg ARE USED
// ============================================================

const galleryImages = [
  {
    src: '/gallery1.png',
    title: 'Beauty & Makeup',
  },
  {
    src: '/gallery2.jpeg',
    title: 'Bridal Makeup',
  },
  {
    src: '/gallery3.png',
    title: 'Bridal Hairstyle',
  },
  {
    src: '/gallery4.png',
    title: 'Hair Styling',
  },
  {
    src: '/gallery5.png',
    title: 'Traditional Glam Look',
  },
  {
    src: '/gallery6.png',
    title: 'Makeup Look',
  },
  {
    src: '/gallery7.png',
    title: 'Elegant Beauty Look',
  },
];

export const TransformationCardShuffle: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isStopped, setIsStopped] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');

  const totalCards = galleryImages.length;

  // ============================================================
  // AUTOMATIC SHUFFLE
  // ============================================================

  useEffect(() => {
    if (isStopped || totalCards <= 1) {
      return;
    }

    const timer = setInterval(() => {
      setDirection('next');

      setCurrentIndex((prev) => {
        return (prev + 1) % totalCards;
      });
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, [isStopped, totalCards]);

  // ============================================================
  // NEXT
  // ============================================================

  const handleNext = () => {
    setDirection('next');

    setCurrentIndex((prev) => {
      return (prev + 1) % totalCards;
    });
  };

  // ============================================================
  // PREVIOUS
  // ============================================================

  const handlePrev = () => {
    setDirection('prev');

    setCurrentIndex((prev) => {
      return (prev - 1 + totalCards) % totalCards;
    });
  };

  // ============================================================
  // MAIN CARD CLICK - STOP / RESUME
  // ============================================================

  const handleCardClick = () => {
    setIsStopped((prev) => !prev);
  };

  // ============================================================
  // THUMBNAIL CLICK
  // ============================================================

  const handleSelectCard = (index: number) => {
    if (index === currentIndex) {
      setIsStopped((prev) => !prev);
      return;
    }

    setDirection(index > currentIndex ? 'next' : 'prev');
    setCurrentIndex(index);
    setIsStopped(true);
  };

  // ============================================================
  // KEYBOARD CONTROLS
  // ============================================================

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;

      if (
        target?.tagName === 'INPUT' ||
        target?.tagName === 'TEXTAREA' ||
        target?.isContentEditable
      ) {
        return;
      }

      if (event.key === 'ArrowLeft') {
        handlePrev();
      }

      if (event.key === 'ArrowRight') {
        handleNext();
      }

      if (event.key === ' ') {
        event.preventDefault();
        setIsStopped((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div
      className="relative w-full max-w-4xl mx-auto"
      role="region"
      aria-label="Prakruthi Beauty Salon Gallery"
    >
      {/* ======================================================
          MAIN SHUFFLE AREA
      ======================================================= */}

      <div className="relative min-h-0 flex items-center justify-center py-2">

        {galleryImages.map((item, index) => {
          const distance =
            (index - currentIndex + totalCards) % totalCards;

          // Show only the current card and 3 cards behind it.
          if (distance > 3) {
            return null;
          }

          const isActive = distance === 0;

          // ====================================================
          // STACKED CARD POSITION
          // ====================================================

          const scale = 1 - distance * 0.05;

          const yOffset = distance * 16;

          const xOffset =
            distance === 1
              ? 18
              : distance === 2
                ? -16
                : distance === 3
                  ? 10
                  : 0;

          const rotation =
            distance === 0
              ? 0
              : distance === 1
                ? 3.5
                : distance === 2
                  ? -3
                  : 2;

          const zIndex = 30 - distance * 5;

          const opacity =
            distance === 0
              ? 1
              : Math.max(0.35, 0.88 - distance * 0.2);

          // ====================================================
          // BACKGROUND STACKED CARDS
          // ====================================================

          if (!isActive) {
            return (
              <motion.div
                key={item.src}
                initial={false}
                animate={{
                  scale,
                  y: yOffset,
                  x: xOffset,
                  rotate: rotation,
                  opacity,
                  zIndex,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 280,
                  damping: 26,
                }}
                onClick={() => handleSelectCard(index)}
                className="
                  absolute
                  inset-x-2
                  sm:inset-x-8
                  max-w-2xl
                  sm:max-w-3xl
                  mx-auto
                  rounded-3xl
                  border-2
                  border-white/80
                  shadow-xl
                  cursor-pointer
                  overflow-hidden
                  select-none
                  bg-neutral-900
                "
                style={{
                  aspectRatio: '4/3',
                }}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="
                    w-full
                    h-full
                    object-cover
                    opacity-70
                    hover:opacity-90
                    transition-opacity
                    duration-300
                  "
                />

                <div className="absolute inset-0 bg-black/25" />
              </motion.div>
            );
          }

          // ====================================================
          // ACTIVE MAIN CARD
          // ====================================================

          return (
            <AnimatePresence
              mode="popLayout"
              key={`active-${item.src}`}
            >
              <motion.div
                layout
                initial={{
                  opacity: 0,
                  scale: 0.92,
                  x: direction === 'next' ? 65 : -65,
                  rotate: direction === 'next' ? 4 : -4,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: 0,
                  y: 0,
                  rotate: 0,
                  zIndex: 40,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.88,
                  x: direction === 'next' ? -85 : 85,
                  rotate: direction === 'next' ? -6 : 6,
                  transition: {
                    duration: 0.28,
                  },
                }}
                transition={{
                  type: 'spring',
                  stiffness: 280,
                  damping: 26,
                }}
                onClick={handleCardClick}
                className="
                  relative
                  w-full
                  max-w-2xl
                  sm:max-w-3xl
                  mx-auto
                  rounded-3xl
                  border-2
                  border-white
                  shadow-2xl
                  overflow-hidden
                  bg-neutral-900
                  cursor-pointer
                  group
                "
                style={{
                  aspectRatio: '16/11',
                }}
                title={
                  isStopped
                    ? 'Click to resume gallery'
                    : 'Click to stop gallery'
                }
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-[1.02]
                  "
                />

                {/* ==================================================
                    STOP INDICATOR
                =================================================== */}

                <div className="absolute top-4 right-4 pointer-events-none">
                  {isStopped ? (
                    <span
                      className="
                        inline-flex
                        items-center
                        gap-1.5
                        px-3
                        py-1.5
                        rounded-full
                        text-xs
                        font-semibold
                        bg-black/75
                        text-amber-300
                        border
                        border-amber-400/40
                        backdrop-blur-md
                        shadow-lg
                      "
                    >
                      <Pause className="w-3.5 h-3.5 fill-current" />
                      <span>Motion Stopped</span>
                    </span>
                  ) : (
                    <span
                      className="
                        inline-flex
                        items-center
                        gap-1.5
                        px-3
                        py-1.5
                        rounded-full
                        text-xs
                        font-semibold
                        bg-black/60
                        text-white/90
                        border
                        border-white/20
                        backdrop-blur-md
                        opacity-0
                        group-hover:opacity-100
                        transition-opacity
                        duration-200
                      "
                    >
                      Click to Stop Motion
                    </span>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          );
        })}
      </div>

      {/* ========================================================
          THUMBNAIL SECTION
      ========================================================= */}

      <div className="mt-4 border-t border-neutral-200/80 pt-4">

        <div className="flex items-center justify-between mb-2 px-1">

          <span
            className="
              text-xs
              font-semibold
              text-neutral-700
              uppercase
              tracking-wider
              flex
              items-center
              gap-1.5
            "
          >
            <Sparkles className="w-3.5 h-3.5 text-[#c99839]" />

            Gallery Photos ({totalCards} Images)
          </span>

          <span className="text-[11px] text-neutral-500">
            Click any image to select
          </span>
        </div>

        {/* ======================================================
            ONLY gallery1.jpeg - gallery7.jpeg
        ======================================================= */}

        <div className="grid grid-cols-3 sm:grid-cols-7 gap-2.5 sm:gap-3">

          {galleryImages.map((item, index) => {
            const isActive = index === currentIndex;

            return (
              <button
                key={item.src}
                type="button"
                onClick={() => handleSelectCard(index)}
                aria-label={`Select ${item.title}`}
                className={`
                  relative
                  aspect-[4/3]
                  rounded-xl
                  overflow-hidden
                  border-2
                  transition-all
                  cursor-pointer
                  group

                  ${
                    isActive
                      ? `
                        border-[#143d23]
                        ring-2
                        ring-[#143d23]/40
                        scale-105
                        shadow-md
                      `
                      : `
                        border-neutral-200/90
                        hover:border-neutral-400
                        opacity-75
                        hover:opacity-100
                      `
                  }
                `}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-300
                    group-hover:scale-105
                  "
                />

                {isActive && (
                  <div
                    className="
                      absolute
                      inset-0
                      bg-[#143d23]/10
                      pointer-events-none
                    "
                  />
                )}

                <span
                  className={`
                    absolute
                    bottom-1
                    right-1
                    px-1.5
                    py-0.5
                    rounded
                    text-[9px]
                    font-semibold

                    ${
                      isActive
                        ? 'bg-[#143d23] text-white'
                        : 'bg-black/60 text-white'
                    }
                  `}
                >
                  #{index + 1}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TransformationCardShuffle;