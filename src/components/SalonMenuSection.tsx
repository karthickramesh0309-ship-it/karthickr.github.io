import React, { useState, useMemo } from 'react';
import {
  Search,
  Sparkles,
  ChevronRight,
  Scissors,
  Flower2,
  Sun,
  Flame,
  Gem,
  Palette,
  Wind,
  Droplets,
  Heart,
  Star,
  X,
  Info
} from 'lucide-react';
import { SALON_MENU_CATEGORIES } from '../data/salonData';
import { SalonServiceItem } from '../types';

interface SalonMenuSectionProps {
  onSelectService?: (serviceName: string) => void;
}

// Aesthetic Theme Configuration for each service type
interface ServiceTheme {
  cardBg: string;
  cardBorder: string;
  hoverBorder: string;
  hoverShadow: string;
  badgeBg: string;
  badgeText: string;
  badgeBorder: string;
  iconColor: string;
  priceBg: string;
  priceText: string;
  priceBorder: string;
  accentText: string;
  popularBadge: string;
  bookBtn: string;
  bookBtnHover: string;
}

// Clean price formatter: removes unnecessary ".00" for instant, punchy readability
const formatPrice = (priceStr: string) => {
  if (!priceStr) return '';
  return priceStr.replace(/\.00/g, '');
};

// Resolve aesthetic color palette based on category and service name
const getServiceTheme = (category: string, name: string): ServiceTheme => {
  const cat = (category || '').toLowerCase();
  const n = (name || '').toLowerCase();

  // 1. Hair Cutting: Elegant Violet & Lavender
  if (cat.includes('cutting') || cat.includes('hair cut') || n.includes('cut')) {
    return {
      cardBg: 'bg-white hover:bg-violet-50/20',
      cardBorder: 'border-violet-100',
      hoverBorder: 'hover:border-violet-300',
      hoverShadow: 'hover:shadow-md hover:shadow-violet-100/50',
      badgeBg: 'bg-violet-50',
      badgeText: 'text-violet-700',
      badgeBorder: 'border-violet-200/80',
      iconColor: 'text-violet-600',
      priceBg: 'bg-violet-50/90',
      priceText: 'text-violet-950',
      priceBorder: 'border-violet-200',
      accentText: 'text-violet-700',
      popularBadge: 'bg-violet-100 text-violet-800 border-violet-200',
      bookBtn: 'text-violet-700 bg-violet-50 hover:bg-violet-600 hover:text-white border border-violet-200/60',
      bookBtnHover: 'hover:bg-violet-600 hover:text-white',
    };
  }

  // 2. Hair Setting & Blow Dry: Fresh Ocean Teal & Mint
  if (cat.includes('setting') || n.includes('blow dry') || n.includes('wash')) {
    return {
      cardBg: 'bg-white hover:bg-teal-50/20',
      cardBorder: 'border-teal-100',
      hoverBorder: 'hover:border-teal-300',
      hoverShadow: 'hover:shadow-md hover:shadow-teal-100/50',
      badgeBg: 'bg-teal-50',
      badgeText: 'text-teal-700',
      badgeBorder: 'border-teal-200/80',
      iconColor: 'text-teal-600',
      priceBg: 'bg-teal-50/90',
      priceText: 'text-teal-950',
      priceBorder: 'border-teal-200',
      accentText: 'text-teal-700',
      popularBadge: 'bg-teal-100 text-teal-800 border-teal-200',
      bookBtn: 'text-teal-700 bg-teal-50 hover:bg-teal-600 hover:text-white border border-teal-200/60',
      bookBtnHover: 'hover:bg-teal-600 hover:text-white',
    };
  }

  // 3. Hair & Scalp Treatment / Hair Spa: Botanical Emerald & Deep Sage
  if (cat.includes('scalp') || cat.includes('treatment') || n.includes('spa') || n.includes('dandruff') || n.includes('fall')) {
    return {
      cardBg: 'bg-white hover:bg-emerald-50/20',
      cardBorder: 'border-emerald-100',
      hoverBorder: 'hover:border-emerald-300',
      hoverShadow: 'hover:shadow-md hover:shadow-emerald-100/50',
      badgeBg: 'bg-emerald-50',
      badgeText: 'text-emerald-700',
      badgeBorder: 'border-emerald-200/80',
      iconColor: 'text-emerald-600',
      priceBg: 'bg-emerald-50/90',
      priceText: 'text-[#143d23]',
      priceBorder: 'border-emerald-200',
      accentText: 'text-emerald-800',
      popularBadge: 'bg-emerald-100 text-emerald-800 border-emerald-200',
      bookBtn: 'text-[#143d23] bg-emerald-50 hover:bg-[#143d23] hover:text-white border border-emerald-200/60',
      bookBtnHover: 'hover:bg-[#143d23] hover:text-white',
    };
  }

  // 4. Hair Straightening & Keratin: Warm Honey & Amber
  if (cat.includes('straightening') || n.includes('smoothing') || n.includes('keratin') || n.includes('curling') || n.includes('touch-up (smoothing)')) {
    return {
      cardBg: 'bg-white hover:bg-amber-50/20',
      cardBorder: 'border-amber-100',
      hoverBorder: 'hover:border-amber-300',
      hoverShadow: 'hover:shadow-md hover:shadow-amber-100/50',
      badgeBg: 'bg-amber-50',
      badgeText: 'text-amber-800',
      badgeBorder: 'border-amber-200/80',
      iconColor: 'text-amber-600',
      priceBg: 'bg-amber-50/90',
      priceText: 'text-amber-950',
      priceBorder: 'border-amber-200',
      accentText: 'text-amber-800',
      popularBadge: 'bg-amber-100 text-amber-900 border-amber-200',
      bookBtn: 'text-amber-800 bg-amber-50 hover:bg-amber-600 hover:text-white border border-amber-200/60',
      bookBtnHover: 'hover:bg-amber-600 hover:text-white',
    };
  }

  // 5. Hair Coloring & Streaks: Vibrant Rose & Coral
  if (cat.includes('color') || n.includes('color') || n.includes('streaks') || n.includes('wine')) {
    return {
      cardBg: 'bg-white hover:bg-rose-50/20',
      cardBorder: 'border-rose-100',
      hoverBorder: 'hover:border-rose-300',
      hoverShadow: 'hover:shadow-md hover:shadow-rose-100/50',
      badgeBg: 'bg-rose-50',
      badgeText: 'text-rose-700',
      badgeBorder: 'border-rose-200/80',
      iconColor: 'text-rose-600',
      priceBg: 'bg-rose-50/90',
      priceText: 'text-rose-950',
      priceBorder: 'border-rose-200',
      accentText: 'text-rose-800',
      popularBadge: 'bg-rose-100 text-rose-800 border-rose-200',
      bookBtn: 'text-rose-700 bg-rose-50 hover:bg-rose-600 hover:text-white border border-rose-200/60',
      bookBtnHover: 'hover:bg-rose-600 hover:text-white',
    };
  }

  // 6. Head Massage: Warm Terracotta & Sunset Amber
  if (cat.includes('massage') || n.includes('massage') || n.includes('oil')) {
    return {
      cardBg: 'bg-white hover:bg-orange-50/20',
      cardBorder: 'border-orange-100',
      hoverBorder: 'hover:border-orange-300',
      hoverShadow: 'hover:shadow-md hover:shadow-orange-100/50',
      badgeBg: 'bg-orange-50',
      badgeText: 'text-orange-800',
      badgeBorder: 'border-orange-200/80',
      iconColor: 'text-orange-600',
      priceBg: 'bg-orange-50/90',
      priceText: 'text-orange-950',
      priceBorder: 'border-orange-200',
      accentText: 'text-orange-800',
      popularBadge: 'bg-orange-100 text-orange-900 border-orange-200',
      bookBtn: 'text-orange-800 bg-orange-50 hover:bg-orange-600 hover:text-white border border-orange-200/60',
      bookBtnHover: 'hover:bg-orange-600 hover:text-white',
    };
  }

  // 7. De-Tanning, Clean-Up & Bleach: Sky Cyan & Oxygen Blue
  if (cat.includes('tan') || cat.includes('clean') || cat.includes('bleach') || n.includes('tan') || n.includes('clean') || n.includes('bleach')) {
    return {
      cardBg: 'bg-white hover:bg-sky-50/20',
      cardBorder: 'border-sky-100',
      hoverBorder: 'hover:border-sky-300',
      hoverShadow: 'hover:shadow-md hover:shadow-sky-100/50',
      badgeBg: 'bg-sky-50',
      badgeText: 'text-sky-700',
      badgeBorder: 'border-sky-200/80',
      iconColor: 'text-sky-600',
      priceBg: 'bg-sky-50/90',
      priceText: 'text-sky-950',
      priceBorder: 'border-sky-200',
      accentText: 'text-sky-800',
      popularBadge: 'bg-sky-100 text-sky-800 border-sky-200',
      bookBtn: 'text-sky-700 bg-sky-50 hover:bg-sky-600 hover:text-white border border-sky-200/60',
      bookBtnHover: 'hover:bg-sky-600 hover:text-white',
    };
  }

  // 8. Threading, Face Wax, Pedicure & Manicure: Royal Orchid & Fuchsia
  if (cat.includes('threading') || cat.includes('face wax') || cat.includes('pedicure') || cat.includes('manicure') || n.includes('nail')) {
    return {
      cardBg: 'bg-white hover:bg-fuchsia-50/20',
      cardBorder: 'border-fuchsia-100',
      hoverBorder: 'hover:border-fuchsia-300',
      hoverShadow: 'hover:shadow-md hover:shadow-fuchsia-100/50',
      badgeBg: 'bg-fuchsia-50',
      badgeText: 'text-fuchsia-700',
      badgeBorder: 'border-fuchsia-200/80',
      iconColor: 'text-fuchsia-600',
      priceBg: 'bg-fuchsia-50/90',
      priceText: 'text-fuchsia-950',
      priceBorder: 'border-fuchsia-200',
      accentText: 'text-fuchsia-800',
      popularBadge: 'bg-fuchsia-100 text-fuchsia-800 border-fuchsia-200',
      bookBtn: 'text-fuchsia-700 bg-fuchsia-50 hover:bg-fuchsia-600 hover:text-white border border-fuchsia-200/60',
      bookBtnHover: 'hover:bg-fuchsia-600 hover:text-white',
    };
  }

  // 9. Waxing & Body Polishing: Golden Honey & Warm Apricot
  if (cat.includes('wax') || cat.includes('polishing') || n.includes('wax')) {
    return {
      cardBg: 'bg-white hover:bg-amber-50/20',
      cardBorder: 'border-amber-100',
      hoverBorder: 'hover:border-amber-300',
      hoverShadow: 'hover:shadow-md hover:shadow-amber-100/50',
      badgeBg: 'bg-amber-50',
      badgeText: 'text-amber-800',
      badgeBorder: 'border-amber-200/80',
      iconColor: 'text-amber-600',
      priceBg: 'bg-amber-50/90',
      priceText: 'text-amber-950',
      priceBorder: 'border-amber-200',
      accentText: 'text-amber-800',
      popularBadge: 'bg-amber-100 text-amber-900 border-amber-200',
      bookBtn: 'text-amber-800 bg-amber-50 hover:bg-amber-600 hover:text-white border border-amber-200/60',
      bookBtnHover: 'hover:bg-amber-600 hover:text-white',
    };
  }

  // 10. Default / Facials & Skin: Regal Gold & Blush Warmth
  return {
    cardBg: 'bg-white hover:bg-amber-50/20',
    cardBorder: 'border-neutral-200/80',
    hoverBorder: 'hover:border-[#143d23]/40',
    hoverShadow: 'hover:shadow-md hover:shadow-emerald-100/50',
    badgeBg: 'bg-neutral-50',
    badgeText: 'text-neutral-700',
    badgeBorder: 'border-neutral-200',
    iconColor: 'text-[#143d23]',
    priceBg: 'bg-[#143d23]/5',
    priceText: 'text-[#143d23]',
    priceBorder: 'border-[#143d23]/20',
    accentText: 'text-[#143d23]',
    popularBadge: 'bg-amber-100 text-amber-900 border-amber-200',
    bookBtn: 'text-[#143d23] bg-emerald-50 hover:bg-[#143d23] hover:text-white border border-emerald-200/60',
    bookBtnHover: 'hover:bg-[#143d23] hover:text-white',
  };
};

// Return tailored mini-icon for each category
const getServiceItemIcon = (category: string, name: string) => {
  const cat = (category || '').toLowerCase();
  const n = (name || '').toLowerCase();

  if (cat.includes('cutting') || n.includes('cut')) {
    return <Scissors className="w-3.5 h-3.5" />;
  }
  if (cat.includes('setting') || n.includes('blow dry') || n.includes('wash')) {
    return <Wind className="w-3.5 h-3.5" />;
  }
  if (cat.includes('scalp') || cat.includes('treatment') || n.includes('spa') || n.includes('dandruff')) {
    return <Droplets className="w-3.5 h-3.5" />;
  }
  if (cat.includes('straightening') || n.includes('smoothing') || n.includes('keratin') || n.includes('curling')) {
    return <Sparkles className="w-3.5 h-3.5" />;
  }
  if (cat.includes('color') || n.includes('color') || n.includes('streaks')) {
    return <Palette className="w-3.5 h-3.5" />;
  }
  if (cat.includes('massage') || n.includes('massage') || n.includes('oil')) {
    return <Heart className="w-3.5 h-3.5" />;
  }
  if (cat.includes('facial') || n.includes('facial')) {
    return <Flower2 className="w-3.5 h-3.5" />;
  }
  if (cat.includes('tan') || cat.includes('clean') || cat.includes('bleach')) {
    return <Sun className="w-3.5 h-3.5" />;
  }
  if (cat.includes('wax') || cat.includes('polish')) {
    return <Flame className="w-3.5 h-3.5" />;
  }
  if (cat.includes('threading') || cat.includes('pedi') || cat.includes('mani')) {
    return <Gem className="w-3.5 h-3.5" />;
  }
  return <Sparkles className="w-3.5 h-3.5" />;
};

// Map each top-level category tab to a Lucide icon
const getCategoryIcon = (title: string, className = 'w-4 h-4') => {
  const t = title.toLowerCase();
  if (t.includes('hair') || t.includes('scalp')) {
    return <Scissors className={className} />;
  }
  if (t.includes('facial') || t.includes('skin')) {
    return <Flower2 className={className} />;
  }
  if (t.includes('de-tan') || t.includes('clean') || t.includes('bleach')) {
    return <Sun className={className} />;
  }
  if (t.includes('wax') || t.includes('polish')) {
    return <Flame className={className} />;
  }
  if (t.includes('threading') || t.includes('pedi') || t.includes('mani')) {
    return <Gem className={className} />;
  }
  return <Sparkles className={className} />;
};

export const SalonMenuSection: React.FC<SalonMenuSectionProps> = ({ onSelectService }) => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState<number>(0);
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const activeCategory = SALON_MENU_CATEGORIES[selectedCategoryIndex];

  // Reset subcategory filter when switching main category
  const handleCategoryChange = (index: number) => {
    setSelectedCategoryIndex(index);
    setSelectedSubCategory('All');
  };

  // Extract distinct subcategories in the active category
  const availableSubCategories = useMemo(() => {
    const subs = new Set<string>();
    activeCategory.items.forEach((item) => {
      if (item.category) subs.add(item.category);
    });
    return Array.from(subs);
  }, [activeCategory]);

  // Search across all items if query present, or filter active category by subcategory
  const filteredItems: SalonServiceItem[] = useMemo(() => {
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matches: SalonServiceItem[] = [];
      SALON_MENU_CATEGORIES.forEach((cat) => {
        cat.items.forEach((item) => {
          if (
            item.name.toLowerCase().includes(q) ||
            item.category.toLowerCase().includes(q)
          ) {
            matches.push(item);
          }
        });
      });
      return matches;
    }

    if (selectedSubCategory !== 'All') {
      return activeCategory.items.filter((item) => item.category === selectedSubCategory);
    }

    return activeCategory.items;
  }, [searchQuery, activeCategory, selectedSubCategory]);

  return (
    <section id="services-menu" className="py-16 sm:py-24 bg-gradient-to-b from-neutral-50/70 via-white to-neutral-50/80 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#143d23]/10 text-[#143d23] text-xs font-semibold tracking-wider uppercase mb-3.5 border border-[#143d23]/15">
            <Sparkles className="w-3.5 h-3.5 text-[#c99839]" />
            <span>Official Rate Card</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight">
            Services & Transparent Pricing
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-600 max-w-2xl mx-auto">
            Scan service names and transparent rates with instant clarity. Tap any service to book your appointment.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mt-8 max-w-md mx-auto relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
          <input
            type="text"
            id="salon-menu-search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by service name (e.g. O3+ Facial, Rica Wax, Layer Cut...)"
            className="w-full pl-10 pr-10 py-2.5 rounded-full border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#143d23] bg-white shadow-2xs transition-all placeholder:text-neutral-400"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 p-0.5"
              title="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Main Category Tabs */}
        {!searchQuery && (
          <div className="mt-8 flex items-center justify-start sm:justify-center overflow-x-auto gap-2 pb-2 no-scrollbar">
            {SALON_MENU_CATEGORIES.map((cat, idx) => {
              const isSelected = selectedCategoryIndex === idx;
              return (
                <button
                  key={idx}
                  type="button"
                  id={`menu-cat-tab-${idx}`}
                  onClick={() => handleCategoryChange(idx)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-[#143d23] text-white shadow-md shadow-[#143d23]/20 ring-1 ring-[#143d23]'
                      : 'bg-white text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 border border-neutral-200/80 shadow-2xs'
                  }`}
                >
                  <span className={isSelected ? 'text-[#e6ca65]' : 'text-[#143d23]'}>
                    {getCategoryIcon(cat.title, 'w-3.5 h-3.5 sm:w-4 sm:h-4')}
                  </span>
                  <span>{cat.title}</span>
                </button>
              );
            })}
          </div>
        )}

        {/* Sub-Category Filter Chips (Eliminates crowded feeling when navigating broad categories) */}
        {!searchQuery && availableSubCategories.length > 1 && (
          <div className="mt-4 flex items-center justify-center flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setSelectedSubCategory('All')}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                selectedSubCategory === 'All'
                  ? 'bg-neutral-900 text-white shadow-3xs'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200/80'
              }`}
            >
              All ({activeCategory.items.length})
            </button>
            {availableSubCategories.map((sub) => {
              const count = activeCategory.items.filter((i) => i.category === sub).length;
              const isSubActive = selectedSubCategory === sub;
              return (
                <button
                  key={sub}
                  type="button"
                  onClick={() => setSelectedSubCategory(sub)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors cursor-pointer flex items-center gap-1.5 ${
                    isSubActive
                      ? 'bg-neutral-900 text-white shadow-3xs'
                      : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200/80'
                  }`}
                >
                  <span>{sub}</span>
                  <span className={`text-[10px] ${isSubActive ? 'text-neutral-300' : 'text-neutral-400'}`}>
                    ({count})
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {/* Clean, Non-Crowded Service Rate Cards Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {filteredItems.map((item) => {
            const theme = getServiceTheme(item.category, item.name);
            const itemIcon = getServiceItemIcon(item.category, item.name);

            return (
              <div
                key={item.id}
                className={`group p-5 rounded-2xl border ${theme.cardBorder} ${theme.hoverBorder} ${theme.cardBg} ${theme.hoverShadow} shadow-2xs transition-all duration-200 flex flex-col justify-between hover:-translate-y-0.5`}
              >
                {/* Primary Glance: Clear Name & Distinct Price */}
                <div>
                  <div className="flex items-start justify-between gap-3.5">
                    {/* Service Name */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h4 className="font-serif font-bold text-neutral-900 text-base sm:text-[17px] tracking-tight group-hover:text-black leading-snug transition-colors">
                          {item.name}
                        </h4>
                        {item.popular && (
                          <span className={`inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full border shadow-3xs ${theme.popularBadge}`}>
                            <Star className="w-2.5 h-2.5 fill-current" />
                            <span>Popular</span>
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Distinct Prominent Price Tag - Instantly shows the price difference */}
                    <div className="shrink-0 text-right">
                      <div className={`inline-block px-3 py-1 rounded-xl text-base sm:text-lg font-serif font-bold tracking-tight shadow-3xs border ${theme.priceBg} ${theme.priceText} ${theme.priceBorder}`}>
                        {formatPrice(item.price)}
                      </div>
                    </div>
                  </div>

                  {/* Secondary Details: Only read after seeing Name & Price */}
                  <div className="mt-3 flex items-center gap-2 flex-wrap">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[11px] font-medium border ${theme.badgeBg} ${theme.badgeText} ${theme.badgeBorder}`}>
                      <span className={theme.iconColor}>{itemIcon}</span>
                      <span>{item.category}</span>
                    </span>

                    {item.priceNote && (
                      <span className="text-[11px] text-neutral-500 font-normal inline-flex items-center gap-1">
                        <Info className="w-3 h-3 text-neutral-400 shrink-0" />
                        <span>{item.priceNote}</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Action Row: Clean & Uncrowded */}
                <div className="mt-4 pt-3 border-t border-black/5 flex items-center justify-end">
                  <button
                    type="button"
                    onClick={() => onSelectService?.(`${item.name} (${item.price})`)}
                    className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-all duration-150 inline-flex items-center gap-1 cursor-pointer active:scale-95 shadow-3xs ${theme.bookBtn} ${theme.bookBtnHover}`}
                    title={`Book ${item.name}`}
                  >
                    <span>Book Service</span>
                    <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty state for search */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12 text-neutral-500 text-sm bg-white rounded-2xl border border-dashed border-neutral-300 max-w-md mx-auto mt-6">
            No service matching "{searchQuery}". Try searching "Hair", "Wax", or "Facial".
          </div>
        )}
      </div>
    </section>
  );
};
