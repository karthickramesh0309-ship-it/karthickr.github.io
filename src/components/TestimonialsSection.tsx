import React, { useState, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Plus, CheckCircle, Sparkles, Pause, Play } from 'lucide-react';
import { SalonTestimonial } from '../types';

interface TestimonialsSectionProps {
  testimonials: SalonTestimonial[];
  onAddTestimonial: (testimonial: SalonTestimonial) => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  testimonials,
  onAddTestimonial,
}) => {
  // Active highlighted card ID (default to first review)
  const [activeCardId, setActiveCardId] = useState<string>(testimonials[0]?.id || '');
  // Active page index for the indicator
  const [currentPage, setCurrentPage] = useState<number>(1);
  // Manual pause toggle
  const [isUserPaused, setIsUserPaused] = useState<boolean>(false);
  // Mouse hover state
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Scroll container ref for manual arrow steps
  const marqueeContainerRef = useRef<HTMLDivElement>(null);

  // Review submission modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [headline, setHeadline] = useState('');
  const [service, setService] = useState('');
  const [rating, setRating] = useState(5);
  const [review, setReview] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const totalReviews = testimonials.length;

  // Duplicate testimonials array for continuous seamless infinite loop
  const displayReviews = [...testimonials, ...testimonials];

  // Manual navigation handlers
  const handlePrev = () => {
    setCurrentPage((prev) => (prev <= 1 ? totalReviews : prev - 1));
    if (marqueeContainerRef.current) {
      marqueeContainerRef.current.scrollBy({ left: -340, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev >= totalReviews ? 1 : prev + 1));
    if (marqueeContainerRef.current) {
      marqueeContainerRef.current.scrollBy({ left: 340, behavior: 'smooth' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !review.trim()) return;

    const newTestimonial: SalonTestimonial = {
      id: `custom-t-${Date.now()}`,
      clientName: name.trim(),
      headline: headline.trim() || 'Wonderful Salon Experience',
      service: service.trim() || 'Beauty & Spa Care',
      rating,
      review: review.trim(),
      badge: 'Verified Client',
      avatarBg: '#143d23',
      verified: true,
    };

    onAddTestimonial(newTestimonial);
    setActiveCardId(newTestimonial.id);
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setIsModalOpen(false);
      setName('');
      setHeadline('');
      setService('');
      setRating(5);
      setReview('');
    }, 1500);
  };

  // Format index as two digits (e.g. 01, 02)
  const formatIndex = (n: number) => String(n).padStart(2, '0');

  const isMotionPaused = isHovered || isUserPaused;

  return (
    <section
      id="testimonials"
      className="py-16 sm:py-24 bg-[#faf8f5] border-t border-neutral-200/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching the clean sample design */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="relative inline-block">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900">
                Testimonial
              </h2>
              {/* Distinctive accent underline under title matching sample style */}
              <div className="h-1 w-20 sm:w-28 bg-[#143d23] mt-2 rounded-full" />
            </div>
            <p className="mt-3 text-sm sm:text-base text-neutral-600 max-w-xl">
              Authentic Google reviews from clients who trust Prakruthi Beauty Salon for their regular hair care, facials, and bridal makeovers.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start sm:self-end">
            {/* Motion status indicator */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-100 text-xs text-neutral-600 border border-neutral-200/80">
              {isMotionPaused ? (
                <>
                  <Pause className="w-3 h-3 text-amber-600" />
                  <span className="font-medium text-amber-800">Paused (Hovering Review)</span>
                </>
              ) : (
                <>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Moving left • Hover review to pause</span>
                </>
              )}
            </div>

            <button
              type="button"
              id="open-review-modal-btn"
              onClick={() => setIsModalOpen(true)}
              className="px-4 py-2 rounded-full bg-white hover:bg-neutral-50 text-[#143d23] border border-[#143d23]/30 text-xs font-semibold shadow-xs flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5 text-[#143d23]" />
              <span>Share Feedback</span>
            </button>
          </div>
        </div>
      </div>

      {/* CONTINUOUS MOVING LEFT CAROUSEL TRACK (Only pauses when hovering directly over reviews) */}
      <div
        className="relative w-full overflow-hidden py-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
      >
        {/* Soft edge gradient fades */}
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[#faf8f5] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[#faf8f5] to-transparent z-10 pointer-events-none" />

        {/* Moving Left Track */}
        <div
          ref={marqueeContainerRef}
          className={`animate-marquee-left ${isMotionPaused ? 'is-paused' : ''} gap-6 px-4 sm:px-8`}
        >
          {displayReviews.map((item, idx) => {
            const isHighlighted = item.id === activeCardId;

            return (
              <div
                key={`${item.id}-${idx}`}
                onClick={() => {
                  setActiveCardId(item.id);
                  setCurrentPage((idx % totalReviews) + 1);
                }}
                className="w-[280px] sm:w-[330px] shrink-0 cursor-pointer group flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1 select-none"
              >
                {/* Upper Content Box */}
                <div
                  className={`p-7 rounded-2xl min-h-[300px] flex flex-col justify-between transition-all duration-300 ${
                    isHighlighted
                      ? 'bg-[#143d23] text-white shadow-xl ring-2 ring-[#143d23]/40'
                      : 'bg-[#f0eee9] text-neutral-800 hover:bg-[#eae8e2] shadow-xs'
                  }`}
                >
                  <div>
                    {/* Top Headline */}
                    <h3
                      className={`font-serif text-base sm:text-lg font-bold leading-snug line-clamp-2 ${
                        isHighlighted ? 'text-white' : 'text-neutral-900'
                      }`}
                    >
                      {item.headline}
                    </h3>

                    {/* Stylized Quotation Mark & Horizontal Divider Line */}
                    <div className="flex items-center gap-3 my-4">
                      <span
                        className={`text-3xl font-serif font-black leading-none ${
                          isHighlighted ? 'text-[#f7b8ba]' : 'text-[#143d23]'
                        }`}
                      >
                        ““
                      </span>
                      <div
                        className={`h-[2px] flex-1 rounded-full ${
                          isHighlighted ? 'bg-[#f7b8ba]/40' : 'bg-[#143d23]/30'
                        }`}
                      />
                    </div>

                    {/* Review Text */}
                    <p
                      className={`text-xs sm:text-sm leading-relaxed line-clamp-5 ${
                        isHighlighted ? 'text-neutral-100 font-light' : 'text-neutral-700 font-normal'
                      }`}
                    >
                      {item.review}
                    </p>
                  </div>

                  {/* Service Tag */}
                  {item.service && (
                    <div className="mt-4 pt-3 border-t border-current/10">
                      <span
                        className={`text-[11px] font-medium tracking-wide ${
                          isHighlighted ? 'text-[#f7b8ba]' : 'text-[#143d23]'
                        }`}
                      >
                        ✦ {item.service}
                      </span>
                    </div>
                  )}
                </div>

                {/* Bottom Profile Info - Placed right below the card matching sample image */}
                <div className="mt-4 px-2 flex items-center gap-3">
                  {/* Round Avatar */}
                  <div
                    style={{ backgroundColor: item.avatarBg || '#143d23' }}
                    className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-xs shrink-0 ring-2 ring-white"
                  >
                    {item.clientName.charAt(0)}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-sm text-neutral-900 truncate">
                      {item.clientName}
                    </h4>

                    {/* 5 Yellow Stars (Under client name matching sample image) */}
                    <div className="flex items-center text-amber-400 mt-0.5">
                      {[...Array(item.rating)].map((_, sIdx) => (
                        <Star key={sIdx} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    {/* Badge if present (e.g. Local Guide) */}
                    {item.badge && (
                      <span className="text-[10px] text-neutral-500 block truncate">
                        {item.badge}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Carousel Pagination Bottom Bar: ← 02 / 07 → */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-10 flex items-center justify-center gap-6 select-none">
          <button
            type="button"
            id="testimonial-prev-btn"
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="w-10 h-10 rounded-full bg-white hover:bg-neutral-100 border border-neutral-300 flex items-center justify-center text-neutral-700 transition-colors shadow-xs cursor-pointer active:scale-95"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Numeric Indicator: 02 / 07 */}
          <div className="font-mono text-sm font-bold tracking-widest text-neutral-800">
            <span>{formatIndex(currentPage)}</span>
            <span className="mx-1 text-neutral-400">/</span>
            <span className="text-neutral-500">{formatIndex(totalReviews)}</span>
          </div>

          <button
            type="button"
            id="testimonial-next-btn"
            onClick={handleNext}
            aria-label="Next testimonial"
            className="w-10 h-10 rounded-full bg-white hover:bg-neutral-100 border border-neutral-300 flex items-center justify-center text-neutral-700 transition-colors shadow-xs cursor-pointer active:scale-95"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Optional Play / Pause toggle button */}
          <button
            type="button"
            id="testimonial-pause-toggle-btn"
            onClick={() => setIsUserPaused(!isUserPaused)}
            title={isUserPaused ? 'Resume auto-scroll' : 'Pause auto-scroll'}
            aria-label={isUserPaused ? 'Resume auto-scroll' : 'Pause auto-scroll'}
            className="w-9 h-9 rounded-full bg-white hover:bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-600 transition-colors cursor-pointer text-xs"
          >
            {isUserPaused ? <Play className="w-3.5 h-3.5 fill-current" /> : <Pause className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Review Submission Modal (No dates or times requested) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden">
            <div className="px-6 py-4 bg-[#143d23] text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#f7b8ba]" />
                <h3 className="font-serif text-lg font-semibold">
                  Share Your Experience
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="p-1 rounded text-white/80 hover:text-white"
              >
                ✕
              </button>
            </div>

            {formSubmitted ? (
              <div className="p-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-xl font-bold text-neutral-900">
                  Thank You for Your Review!
                </h4>
                <p className="text-sm text-neutral-600">
                  Your feedback has been added to our verified client testimonials wall.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 space-y-4 text-sm">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Mridhula K"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-[#143d23] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Headline Summary *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Excellent service & very satisfied customer"
                    value={headline}
                    onChange={(e) => setHeadline(e.target.value)}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-[#143d23] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Service Taken
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Facial, Pedicure, Hair Spa, Waxing"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-[#143d23] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Rating
                  </label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setRating(star)}
                        className="p-1 cursor-pointer"
                      >
                        <Star
                          className={`w-6 h-6 ${
                            star <= rating
                              ? 'fill-amber-400 text-amber-400'
                              : 'text-neutral-300'
                          }`}
                        />
                      </button>
                    ))}
                    <span className="text-xs font-medium text-neutral-600 ml-2">
                      {rating} of 5 Stars
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Review Details *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe the treatments, staff hospitality, and overall experience..."
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-[#143d23] outline-none resize-none"
                  />
                </div>

                <div className="pt-2 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 border border-neutral-300 rounded-lg text-neutral-700 hover:bg-neutral-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-[#143d23] hover:bg-[#0e2a1b] text-white rounded-lg font-medium shadow-xs"
                  >
                    Post Testimonial
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
