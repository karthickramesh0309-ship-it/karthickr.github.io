import React, { useState, useEffect } from 'react';
import { SalonNavbar } from './components/SalonNavbar';
import { SalonHero } from './components/SalonHero';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { PopularServicesSection } from './components/PopularServicesSection';
import { SalonMenuSection } from './components/SalonMenuSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { SalonFooter } from './components/SalonFooter';
import { UploadTransformationModal } from './components/UploadTransformationModal';
import { BookingModal } from './components/BookingModal';
import { INITIAL_TRANSFORMATIONS, INITIAL_TESTIMONIALS } from './data/salonData';
import { SalonTransformation, SalonTestimonial } from './types';

const STORAGE_KEY = 'prakruthi_salon_transformations_v7';
const TESTIMONIALS_STORAGE_KEY = 'prakruthi_salon_testimonials_v4';

export default function App() {
  const [transformations, setTransformations] = useState<SalonTransformation[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length >= 6) {
          return parsed
            .filter((item) => item.id !== 'skin-o3-whitening-facial' && item.id !== 'skin-detan-cleanup')
            .map((item) => {
              const initial = INITIAL_TRANSFORMATIONS.find((t) => t.id === item.id);
              if (initial && (item.id === 'hair-smoothing-loreal' || item.id === 'hair-global-color-gloss')) {
                return {
                  ...item,
                  title: initial.title,
                  serviceName: initial.serviceName,
                  description: initial.description,
                  servicePrice: initial.servicePrice,
                  highlights: initial.highlights,
                  beforeImage: initial.beforeImage,
                  afterImage: initial.afterImage
                };
              }
              return item;
            });
        }
      }
    } catch {
      // safe fallback
    }
    return INITIAL_TRANSFORMATIONS;
  });

  const [testimonials, setTestimonials] = useState<SalonTestimonial[]>(() => {
    try {
      const saved = localStorage.getItem(TESTIMONIALS_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch {
      // safe fallback
    }
    return INITIAL_TESTIMONIALS;
  });

  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState('');
  const [showAllServices, setShowAllServices] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(transformations));
    } catch (err) {
      console.warn('Could not persist transformations to local storage:', err);
    }
  }, [transformations]);

  useEffect(() => {
    try {
      localStorage.setItem(TESTIMONIALS_STORAGE_KEY, JSON.stringify(testimonials));
    } catch (err) {
      console.warn('Could not persist testimonials to local storage:', err);
    }
  }, [testimonials]);

  const handleAddTransformation = (newTransformation: SalonTransformation) => {
    setTransformations((prev) => [newTransformation, ...prev]);
  };

  const handleAddTestimonial = (newTestimonial: SalonTestimonial) => {
    setTestimonials((prev) => [newTestimonial, ...prev]);
  };

  const handleOpenBookingWithService = (serviceName: string) => {
    setSelectedServiceForBooking(serviceName);
    setIsBookingModalOpen(true);
  };

  const handleScrollToTransformations = () => {
    const el = document.getElementById('transformations');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToMenu = () => {
    // Reveal the complete service catalog only after the user requests it.
    setShowAllServices(true);

    // Wait for React to render the hidden section before scrolling to it.
    window.setTimeout(() => {
      const el = document.getElementById('services-menu');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 50);
  };

  return (
    <div className="min-h-screen bg-[#fcfaf7] text-neutral-900 flex flex-col selection:bg-[#143d23] selection:text-white">
      <SalonNavbar
        onOpenUploadModal={() => setIsUploadModalOpen(true)}
        onOpenBooking={() => {
          setSelectedServiceForBooking('');
          setIsBookingModalOpen(true);
        }}
      />

      <main className="flex-grow">
        <SalonHero
          onExploreTransformations={handleScrollToTransformations}
          onViewMenu={handleScrollToMenu}
        />

        <AboutSection
          onOpenBooking={() => setIsBookingModalOpen(true)}
          onExploreServices={handleScrollToMenu}
        />

        {/* NEW: Homepage shows only the 6–8 popular services */}
        <PopularServicesSection
          onSelectService={handleOpenBookingWithService}
          onViewAllServices={handleScrollToMenu}
        />

        <BeforeAfterSection
          transformations={transformations}
          onOpenUploadModal={() => setIsUploadModalOpen(true)}
          onSelectServiceForBooking={handleOpenBookingWithService}
        />

        {/* Complete service catalog is hidden on the homepage until View All Services is clicked */}
        {showAllServices && (
          <SalonMenuSection
            onSelectService={handleOpenBookingWithService}
          />
        )}

        <TestimonialsSection
          testimonials={testimonials}
          onAddTestimonial={handleAddTestimonial}
        />

        <FAQSection
          onOpenBooking={() => setIsBookingModalOpen(true)}
        />

        <ContactSection
          onOpenBooking={() => setIsBookingModalOpen(true)}
        />
      </main>

      <SalonFooter />

      <UploadTransformationModal
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
        onAddTransformation={handleAddTransformation}
      />

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        defaultService={selectedServiceForBooking}
      />

      <aside aria-label="WhatsApp quick chat" className="fixed bottom-5 right-5 z-40 flex items-center group">
        <a
          href="https://wa.me/916360964901?text=Hello%20Prakruthi%20Beauty%20Salon%2C%20I%20would%20like%20to%20book%20an%20appointment."
          target="_blank"
          rel="noopener noreferrer"
          id="floating-whatsapp-btn"
          aria-label="Chat on WhatsApp at 63609 64901"
          className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white px-3.5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 fill-white shrink-0"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          <span className="hidden sm:inline-block font-semibold text-xs tracking-wide pr-1">
            WhatsApp 63609 64901
          </span>
        </a>
      </aside>
    </div>
  );
}
