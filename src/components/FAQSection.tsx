import React, { useState, useMemo } from 'react';
import {
  ChevronDown,
  Search,
  HelpCircle,
  Sparkles,
  PhoneCall,
  CalendarCheck,
  CheckCircle2,
  Tag,
  Clock,
  ShieldCheck,
  Scissors
} from 'lucide-react';
import { SalonFAQ } from '../types';
import { SALON_FAQS } from '../data/salonData';

interface FAQSectionProps {
  onOpenBooking?: () => void;
}

type FAQCategoryFilter = 'All' | 'Pricing' | 'Booking' | 'Services' | 'Hygiene';

// Indian Rupee symbol icon matching Indian pricing
const RupeeIcon = ({ className = 'w-3.5 h-3.5' }: { className?: string }) => (
  <span className={`inline-flex items-center justify-center font-bold text-xs leading-none select-none ${className}`}>
    ₹
  </span>
);

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenBooking }) => {
  // Currently open accordion item ID (default to first question open)
  const [openId, setOpenId] = useState<string | null>(SALON_FAQS[0]?.id || null);
  // Category filter tab
  const [activeCategory, setActiveCategory] = useState<FAQCategoryFilter>('All');
  // Search query
  const [searchQuery, setSearchQuery] = useState<string>('');

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  // Filtered FAQs based on category tab and search input
  const filteredFaqs = useMemo(() => {
    return SALON_FAQS.filter((faq) => {
      const matchesCategory =
        activeCategory === 'All' || faq.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        faq.question.toLowerCase().includes(q) ||
        faq.answer.toLowerCase().includes(q) ||
        (faq.badge && faq.badge.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const categories: { key: FAQCategoryFilter; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { key: 'All', label: 'All Inquiries', icon: HelpCircle },
    { key: 'Pricing', label: 'Pricing & Charges', icon: RupeeIcon },
    { key: 'Booking', label: 'Appointments & Booking', icon: Clock },
    { key: 'Services', label: 'Hair & Skin Services', icon: Scissors },
    { key: 'Hygiene', label: 'Hygiene & Safety', icon: ShieldCheck },
  ];

  return (
    <section
      id="faq"
      className="py-16 sm:py-24 bg-[#faf8f5] border-t border-neutral-200/80"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#143d23]/10 text-[#143d23] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#143d23]" />
            <span>Got Questions? We Have Answers</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900">
            Frequently Asked Questions
          </h2>
          <div className="h-1 w-20 sm:w-28 bg-[#143d23] mt-3 mx-auto rounded-full" />
          
          <p className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed">
            Everything you need to know about our transparent rate card, walk-in availability, beauty treatments, and client safety measures.
          </p>

          {/* Quick Search Input */}
          <div className="mt-6 relative max-w-md mx-auto">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              id="faq-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search pricing, hair smoothing, rica wax, appointments..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-neutral-300 rounded-full text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#143d23] focus:border-transparent shadow-xs transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-neutral-400 hover:text-neutral-700 font-medium px-1.5 py-0.5"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                id={`faq-tab-${cat.key.toLowerCase()}`}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-3.5 py-2 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#143d23] text-white shadow-xs'
                    : 'bg-white hover:bg-neutral-100 text-neutral-700 border border-neutral-200/90'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-[#f7b8ba]' : 'text-neutral-500'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Clean Accordion List */}
        <div className="space-y-3.5">
          {filteredFaqs.length === 0 ? (
            <div className="p-8 text-center bg-white rounded-2xl border border-neutral-200">
              <HelpCircle className="w-10 h-10 text-neutral-400 mx-auto mb-2" />
              <h3 className="font-serif text-lg font-bold text-neutral-800">
                No matching questions found
              </h3>
              <p className="text-xs text-neutral-500 mt-1 max-w-sm mx-auto">
                Couldn&apos;t find what you were searching for? Feel free to contact our salon front desk or book a direct consultation with Pushpa & team.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('All');
                }}
                className="mt-4 px-4 py-2 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-medium cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;

              return (
                <div
                  key={faq.id}
                  id={`faq-item-${faq.id}`}
                  className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'border-[#143d23]/50 shadow-md ring-1 ring-[#143d23]/20'
                      : 'border-neutral-200/90 hover:border-neutral-300 shadow-xs'
                  }`}
                >
                  {/* Accordion Trigger Header */}
                  <button
                    type="button"
                    id={`faq-btn-${faq.id}`}
                    onClick={() => toggleAccordion(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <div className="flex-1 min-w-0 pr-2">
                      <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                        {faq.badge && (
                          <span
                            className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                              isOpen
                                ? 'bg-[#143d23] text-white'
                                : 'bg-[#143d23]/10 text-[#143d23]'
                            }`}
                          >
                            {faq.badge}
                          </span>
                        )}
                        <span className="text-[11px] font-medium text-neutral-400">
                          {faq.category} Inquiry
                        </span>
                      </div>

                      <h3
                        className={`font-serif text-base sm:text-lg font-bold leading-snug transition-colors ${
                          isOpen ? 'text-[#143d23]' : 'text-neutral-900 hover:text-neutral-950'
                        }`}
                      >
                        {faq.question}
                      </h3>
                    </div>

                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen
                          ? 'bg-[#143d23] text-white rotate-180'
                          : 'bg-neutral-100 text-neutral-600'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {/* Accordion Content */}
                  {isOpen && (
                    <div
                      id={`faq-content-${faq.id}`}
                      className="px-5 sm:px-6 pb-6 pt-1 text-sm text-neutral-700 leading-relaxed border-t border-neutral-100 animate-fadeIn"
                    >
                      <p className="font-normal text-neutral-700">
                        {faq.answer}
                      </p>

                      <div className="mt-4 pt-3 flex items-center gap-2 text-xs font-medium text-[#143d23] border-t border-neutral-100">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>Verified salon policy at Prakruthi Beauty Salon</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Bottom Help Box: Clean & Trust-building */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-white border border-[#143d23]/20 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h4 className="font-serif text-lg font-bold text-neutral-900">
              Have a specific hair, skin, or bridal question?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-600 mt-1">
              Pushpa and our experienced senior beauticians are always happy to advise you before you book.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 flex-wrap justify-center">
            {onOpenBooking && (
              <button
                type="button"
                id="faq-book-appointment-btn"
                onClick={onOpenBooking}
                className="px-4 py-2.5 rounded-xl bg-[#143d23] hover:bg-[#0f2e1a] text-white text-xs font-semibold shadow-xs flex items-center gap-2 transition-all cursor-pointer active:scale-95"
              >
                <CalendarCheck className="w-3.5 h-3.5 text-[#f7b8ba]" />
                <span>Book Appointment</span>
              </button>
            )}
            <a
              href="tel:+916360964901"
              id="faq-call-salon-btn"
              className="px-4 py-2.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-semibold border border-neutral-200/80 flex items-center gap-2 transition-all"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#143d23]" />
              <span>Call 63609 64901</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
