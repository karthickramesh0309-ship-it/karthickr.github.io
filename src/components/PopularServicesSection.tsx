import React, { useMemo } from 'react';
import { ChevronRight, Star, Sparkles } from 'lucide-react';
import { SALON_MENU_CATEGORIES } from '../data/salonData';
import { SalonServiceItem } from '../types';

interface PopularServicesSectionProps {
  onSelectService?: (serviceName: string) => void;
  onViewAllServices?: () => void;
}

const formatPrice = (price: string) => price.replace(/\.00/g, '');

export const PopularServicesSection: React.FC<PopularServicesSectionProps> = ({
  onSelectService,
  onViewAllServices,
}) => {
  const popularServices = useMemo<SalonServiceItem[]>(() => {
    const services: SalonServiceItem[] = [];

    SALON_MENU_CATEGORIES.forEach((category) => {
      category.items.forEach((item) => {
        if (item.popular) {
          services.push(item);
        }
      });
    });

    // Keep the homepage focused. The complete rate card remains on the Services section.
    return services.slice(0, 8);
  }, []);

  return (
    <section
      id="popular-services"
      aria-label="Popular salon services"
      className="py-16 sm:py-20 lg:py-24 bg-[#fcfaf7]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#143d23]/10 text-[#143d23] text-xs font-semibold tracking-wider uppercase border border-[#143d23]/15">
            <Sparkles className="w-3.5 h-3.5 text-[#c99839]" />
            <span>Our Services</span>
          </div>

          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight">
            Our Most Popular Services
          </h2>

          <p className="mt-3 text-sm sm:text-base text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Discover some of our most-loved beauty and salon treatments.
            Explore the complete service menu for more options.
          </p>
        </div>

        {/* Popular service cards */}
        {popularServices.length > 0 && (
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {popularServices.map((item) => (
              <article
                key={item.id}
                className="group bg-white rounded-2xl border border-[#143d23]/10 p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <div className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wide text-[#143d23] bg-[#143d23]/8 border border-[#143d23]/10 rounded-full px-2 py-1">
                      <Star className="w-2.5 h-2.5 fill-current text-[#c99839]" />
                      Popular
                    </div>

                    <h3 className="mt-3 font-serif font-bold text-lg text-neutral-900 leading-snug">
                      {item.name}
                    </h3>
                  </div>

                  <div className="shrink-0 text-right">
                    <div className="text-sm sm:text-base font-serif font-bold text-[#143d23]">
                      {formatPrice(item.price)}
                    </div>
                  </div>
                </div>

                <div className="mt-3 text-xs text-neutral-500">
                  {item.category}
                </div>

                {item.priceNote && (
                  <p className="mt-2 text-[11px] text-neutral-500 leading-relaxed">
                    {item.priceNote}
                  </p>
                )}

                <button
                  type="button"
                  onClick={() => onSelectService?.(`${item.name} (${item.price})`)}
                  className="mt-5 w-full inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#143d23] text-white px-4 py-2.5 text-xs font-semibold hover:bg-[#0f2f1b] transition-colors"
                >
                  Book Now
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </article>
            ))}
          </div>
        )}

        {/* View all services */}
        <div className="mt-9 text-center">
          <button
            type="button"
            onClick={onViewAllServices}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-[#143d23] border border-[#143d23]/20 text-sm font-semibold shadow-sm hover:bg-[#143d23] hover:text-white hover:border-[#143d23] transition-all duration-200"
          >
            View All Services
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
