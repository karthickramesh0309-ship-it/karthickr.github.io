import { SalonTransformation, SalonServiceCategory, SalonTestimonial, SalonFAQ } from '../types';
import hairSmoothingAfter from '../assets/images/hair_keratin_after_1790248305794.jpg';
import hairSmoothingBefore from '../assets/images/hair_keratin_before_1790248326719.jpg';
import balayageBlowDryAfter from '../assets/images/balayage_blowdry_after_1790250808132.jpg';
import balayageBlowDryBefore from '../assets/images/balayage_blowdry_before_1790250839487.jpg';

export const INITIAL_TRANSFORMATIONS: SalonTransformation[] = [
  {
    id: 'hair-smoothing-loreal',
    title: 'Hair Transformation',
    serviceName: 'Full Hair Smoothing & Keratin Treatment',
    category: 'Hair',
    beforeImage: hairSmoothingBefore,
    afterImage: hairSmoothingAfter,
    description: 'Transforming dry, frizzy, unmanageable curls into sleek, mirror-shine silk smoothness with deep keratin nourishment.',
    servicePrice: '₹4,000 - ₹6,000',
    duration: '3.5 Hours',
    altText: 'Before and after hair styling transformation at Prakruthi Beauty Salon',
    clientConsentVerified: true,
    highlights: ['Zero Heat Damage', 'Frizz Tamed for 6+ Months', 'High Mirror Shine']
  },
  {
    id: 'bridal-hd-makeover',
    title: 'Bridal Makeover',
    serviceName: 'Traditional South Indian Bridal Makeover & Hair Styling',
    category: 'Bridal',
    beforeImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=900&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=900&auto=format&fit=crop',
    description: 'Flawless HD bridal glow with precision eye definition, traditional flower-adorned hairstyle, and immaculate saree draping.',
    servicePrice: 'Custom Bridal Package',
    duration: '4 Hours',
    altText: 'Before and after bridal makeover transformation at Prakruthi Beauty Salon',
    clientConsentVerified: true,
    highlights: ['16-Hour Sweatproof HD Base', 'Traditional Temple Jewelry Styling', 'Custom Floral Bun']
  },
  {
    id: 'hair-global-color-gloss',
    title: 'Hair Cut & Styling',
    serviceName: 'Advanced Layered Haircut & Voluminous Blow Dry Setting',
    category: 'Hair',
    beforeImage: balayageBlowDryBefore,
    afterImage: balayageBlowDryAfter,
    description: 'Expert dimensional layer cut and bouncy voluminous outward blow dry styling that enhances natural hair density and movement.',
    servicePrice: '₹800 - ₹1,200',
    duration: '75 Mins',
    altText: 'Before and after advanced layered haircut and voluminous blow dry at Prakruthi Beauty Salon',
    clientConsentVerified: true,
    highlights: ['Bouncy Curled Out Ends', 'Face-Framing Curtain Layers', 'Silky Gloss Setting']
  },
  {
    id: 'makeup-cocktail-glam',
    title: 'Party & Occasion Glam',
    serviceName: 'Soft Glam Makeup & Voluminous Waves',
    category: 'Makeup',
    beforeImage: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=900&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=900&auto=format&fit=crop',
    description: 'Subtle elegance with luminous glass skin, feathered brows, soft rose-gold lids, and romantic textured blow-dry waves.',
    servicePrice: '₹1,800',
    duration: '90 Mins',
    altText: 'Before and after soft glam makeup transformation at Prakruthi Beauty Salon',
    clientConsentVerified: true,
    highlights: ['Lightweight Dewy Finish', 'Smudge-Free Kohl', 'Custom Lashes']
  },
  {
    id: 'skin-o3-radiance-glow',
    title: 'Facial & Glow Care',
    serviceName: 'O3+ Bridal D-Tan & Radiance Oxygen Glow Facial',
    category: 'Skin',
    beforeImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=900&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=900&auto=format&fit=crop',
    description: 'Targeted deep-pore purification and oxygen peel infusion that eliminates stubborn sun tanning, leaving the complexion glowing and dewy.',
    servicePrice: '₹1,500',
    duration: '60 Mins',
    altText: 'Before and after O3+ radiance facial glow transformation at Prakruthi Beauty Salon',
    clientConsentVerified: true,
    highlights: ['Deep Tan Removal', 'Oxygen Glow Infusion', 'Velvet Dewy Texture']
  },
  {
    id: 'hair-botox-nourish',
    title: 'Hair Repair & Spa',
    serviceName: 'Deep Keratin Protein & Hair Botox Revitalization',
    category: 'Hair',
    beforeImage: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=900&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=900&auto=format&fit=crop',
    description: 'Intensive peptide renewal for distressed and dry hair. Restores natural elasticity, seals split ends, and infuses long-lasting silky bounce.',
    servicePrice: '₹2,500 - ₹3,500',
    duration: '2 Hours',
    altText: 'Before and after hair botox revitalization at Prakruthi Beauty Salon',
    clientConsentVerified: true,
    highlights: ['Restores Elasticity', 'Seals Split Ends', 'Silky Bounce & Shine']
  }
];

// Exact rate card data transcribed directly from Prakruthi Beauty Salon's 5 official menu pages
export const SALON_MENU_CATEGORIES: SalonServiceCategory[] = [
  {
    title: 'Hair & Scalp Care',
    description: 'Professional cuts, blow dry styling, deep nourishing spas, and thermal straightening.',
    items: [
      { id: 'hc-1', name: 'Straight Cut', category: 'Hair Cutting', price: '₹200.00' },
      { id: 'hc-2', name: 'U Cut', category: 'Hair Cutting', price: '₹300.00' },
      { id: 'hc-3', name: 'V Cut', category: 'Hair Cutting', price: '₹600.00' },
      { id: 'hc-4', name: 'Step Cut', category: 'Hair Cutting', price: '₹600.00', popular: true },
      { id: 'hc-5', name: 'Advanced Cut', category: 'Hair Cutting', price: '₹800.00' },
      { id: 'hc-6', name: 'Front Cut', category: 'Hair Cutting', price: '₹150.00' },
      { id: 'hs-1', name: 'Hair Wash', category: 'Hair Setting', price: '₹200.00' },
      { id: 'hs-2', name: 'Straight Blow Dry', category: 'Hair Setting', price: '₹250.00' },
      { id: 'hs-3', name: 'Curly Blow Dry', category: 'Hair Setting', price: '₹300.00' },
      { id: 'ht-1', name: 'Dandruff Treatment', category: 'Hair & Scalp Treatment', price: '₹700.00' },
      { id: 'ht-2', name: 'Hair Fall Treatment', category: 'Hair & Scalp Treatment', price: '₹1,000.00' },
      { id: 'ht-3', name: 'Smoothing Treatment', category: 'Hair & Scalp Treatment', price: '₹900.00' },
      { id: 'ht-4', name: 'Loreal Hair Spa', category: 'Hair & Scalp Treatment', price: '₹1,000.00', popular: true },
      { id: 'hstr-1', name: 'Hair Straightening', category: 'Hair Straightening', price: 'From ₹1,000.00', priceNote: 'Depends on thickness & length' },
      { id: 'hstr-2', name: 'Hair Curling', category: 'Hair Straightening', price: 'From ₹1,000.00', priceNote: 'Depends on thickness & length' },
      { id: 'hstr-3', name: 'Root Touch-up (Smoothing)', category: 'Hair Straightening', price: '₹4,000.00' },
      { id: 'hstr-4', name: 'Full Hair Smoothing', category: 'Hair Straightening', price: '₹6,000.00', priceNote: 'Depends on thickness & length', popular: true },
      { id: 'hcol-1', name: 'Root Touch Up (Color)', category: 'Hair Coloring', price: '₹800.00' },
      { id: 'hcol-2', name: 'Global Color', category: 'Hair Coloring', price: '₹2,000.00', priceNote: 'Depends on thickness & length' },
      { id: 'hcol-3', name: 'Double Color', category: 'Hair Coloring', price: '₹2,500.00' },
      { id: 'hcol-4', name: 'Streaks', category: 'Hair Coloring', price: '₹250.00', priceNote: 'Per Streak' },
      { id: 'hm-1', name: 'Coconut Head Massage', category: 'Head Massage', price: '₹300.00' },
      { id: 'hm-2', name: 'Navarathna Oil Head Massage', category: 'Head Massage', price: '₹300.00' },
      { id: 'hm-3', name: 'Almond Oil Head Massage', category: 'Head Massage', price: '₹400.00' },
      { id: 'hm-4', name: 'Olive Oil Head Massage', category: 'Head Massage', price: '₹450.00' }
    ]
  },
  {
    title: 'Facials & Skin Rejuvenation',
    description: 'Therapeutic and herbal skin treatments using Lotus, VLCC, O3+, and premium fruit extracts.',
    items: [
      { id: 'fc-1', name: 'O3+ Facial', category: 'Facials', price: '₹2,500.00', popular: true },
      { id: 'fc-2', name: 'Whitening & Brightening Facial', category: 'Facials', price: '₹2,000.00', popular: true },
      { id: 'fc-3', name: 'Skin Whitening Facial', category: 'Facials', price: '₹1,500.00' },
      { id: 'fc-4', name: 'Shinaz Gold Facial', category: 'Facials', price: '₹1,300.00' },
      { id: 'fc-5', name: 'Charcoal Facial', category: 'Facials', price: '₹1,200.00' },
      { id: 'fc-6', name: 'VLCC - Diamond', category: 'Facials', price: '₹1,000.00' },
      { id: 'fc-7', name: 'VLCC - Pearl', category: 'Facials', price: '₹1,000.00' },
      { id: 'fc-8', name: 'VLCC - Gold', category: 'Facials', price: '₹800.00' },
      { id: 'fc-9', name: 'Lotus - Gold', category: 'Facials', price: '₹1,000.00' },
      { id: 'fc-10', name: 'Lotus - Diamond', category: 'Facials', price: '₹800.00' },
      { id: 'fc-11', name: 'Lotus - Herbal', category: 'Facials', price: '₹700.00' },
      { id: 'fc-12', name: 'Lotus - Basic', category: 'Facials', price: '₹600.00' },
      { id: 'fc-13', name: 'Red Wine Facial', category: 'Facials', price: '₹800.00', popular: true },
      { id: 'fc-14', name: 'Chocolate Facial', category: 'Facials', price: '₹800.00' },
      { id: 'fc-15', name: 'Biotique Facial', category: 'Facials', price: '₹600.00' },
      { id: 'fc-16', name: 'Fruit Facial', category: 'Facials', price: '₹600.00' },
      {
        id: 'fc-17',
        name: 'Hydra Facial',
        category: 'Facials',
        price: '₹2,500 – ₹4,500',
        priceNote: 'Price varies depending on the selected package and treatments included.',
        popular: true
      }
    ]
  },
  {
    title: 'De-Tanning, Clean-Up & Bleach',
    description: 'Instant tan removal, pore cleansing, and gentle brightening for face, hands, and body.',
    items: [
      { id: 'dt-1', name: 'De-Tanning Face & Neck', category: 'De-Tanning', price: '₹500.00', popular: true },
      { id: 'dt-2', name: 'De-Tanning Underarms', category: 'De-Tanning', price: '₹100.00' },
      { id: 'dt-3', name: 'De-Tanning Front / Back', category: 'De-Tanning', price: '₹600.00' },
      { id: 'dt-4', name: 'De-Tanning Full Hands', category: 'De-Tanning', price: '₹600.00' },
      { id: 'dt-5', name: 'De-Tanning Half Leg', category: 'De-Tanning', price: '₹600.00' },
      { id: 'dt-6', name: 'De-Tanning Feet', category: 'De-Tanning', price: '₹200.00' },
      { id: 'dt-7', name: 'De-Tanning Full Body', category: 'De-Tanning', price: '₹2,000.00' },
      { id: 'cu-1', name: 'Whitening & Brightening Clean-Up', category: 'Clean-Up', price: '₹1,200.00' },
      { id: 'cu-2', name: 'Skin Whitening Clean-Up', category: 'Clean-Up', price: '₹1,000.00' },
      { id: 'cu-3', name: 'Charcoal Clean-Up', category: 'Clean-Up', price: '₹800.00' },
      { id: 'cu-4', name: 'Lotus Diamond Clean-Up', category: 'Clean-Up', price: '₹500.00' },
      { id: 'cu-5', name: 'Fruit Clean-Up', category: 'Clean-Up', price: '₹400.00' },
      { id: 'bl-1', name: 'Bleach Face & Neck', category: 'Bleach', price: '₹500.00' },
      { id: 'bl-2', name: 'Bleach Full Hand', category: 'Bleach', price: '₹600.00' },
      { id: 'bl-3', name: 'Bleach Half Leg', category: 'Bleach', price: '₹600.00' },
      { id: 'bl-4', name: 'Bleach Feet', category: 'Bleach', price: '₹200.00' }
    ]
  },
  {
    title: 'Waxing & Body Polishing',
    description: 'Gentle hair removal with natural Honey, Chocolate, and premium Rica waxes.',
    items: [
      { id: 'wx-1', name: 'Sugar & Lemon (Homemade)', category: 'Waxing - Full Hands', price: '₹300.00' },
      { id: 'wx-2', name: 'Chocolate Wax Full Hands', category: 'Waxing - Full Hands', price: '₹400.00' },
      { id: 'wx-3', name: 'Honey Wax Full Hands', category: 'Waxing - Full Hands', price: '₹400.00' },
      { id: 'wx-4', name: 'Rica Wax Full Hands', category: 'Waxing - Full Hands', price: '₹600.00', popular: true },
      { id: 'wx-5', name: 'Under Arms Wax', category: 'Waxing', price: '₹100.00' },
      { id: 'wx-6', name: 'Full Leg Wax', category: 'Waxing', price: '₹600.00' },
      { id: 'wx-7', name: 'Full Leg Rica Wax', category: 'Waxing', price: '₹700.00' },
      { id: 'wx-8', name: 'Half Leg Wax', category: 'Waxing', price: '₹350.00' },
      { id: 'wx-9', name: 'Half Leg Rica Wax', category: 'Waxing', price: '₹450.00' },
      { id: 'wx-10', name: 'Front & Back Wax', category: 'Waxing', price: '₹600.00' },
      { id: 'wx-11', name: 'Stomach Wax', category: 'Waxing', price: '₹300.00' },
      { id: 'wx-12', name: 'Full Body Wax', category: 'Waxing', price: '₹2,000.00', priceNote: 'Depends on flavor' },
      { id: 'bp-1', name: 'Full Body Polishing', category: 'Body Polishing', price: '₹2,000.00', popular: true }
    ]
  },
  {
    title: 'Threading, Face Wax & Mani-Pedi',
    description: 'Precise facial threading, gentle peel wax, and therapeutic hand & foot spa therapies.',
    items: [
      { id: 'th-1', name: 'Eye Brows Threading', category: 'Threading', price: '₹40.00' },
      { id: 'th-2', name: 'Upper Lips Threading', category: 'Threading', price: '₹20.00' },
      { id: 'th-3', name: 'Forehead Threading', category: 'Threading', price: '₹20.00' },
      { id: 'th-4', name: 'Chin Threading', category: 'Threading', price: '₹20.00' },
      { id: 'th-5', name: 'Sides Threading', category: 'Threading', price: '₹20.00 / ₹50.00' },
      { id: 'th-6', name: 'Full Face Threading', category: 'Threading', price: '₹50.00 / ₹100.00' },
      { id: 'fw-1', name: 'Face Wax Upper Lip', category: 'Face Wax', price: '₹50.00' },
      { id: 'fw-2', name: 'Face Wax Chin', category: 'Face Wax', price: '₹50.00' },
      { id: 'fw-3', name: 'Face Wax Forehead', category: 'Face Wax', price: '₹50.00' },
      { id: 'fw-4', name: 'Face Wax Sides', category: 'Face Wax', price: '₹150.00' },
      { id: 'fw-5', name: 'Full Face Wax', category: 'Face Wax', price: '₹300.00' },
      { id: 'ped-1', name: 'Crystal Spa Pedicure', category: 'Pedicure', price: '₹800.00', popular: true },
      { id: 'ped-2', name: 'Basic Pedicure / Manicure', category: 'Pedicure', price: '₹500.00' },
      { id: 'ped-3', name: 'Nail Cutting & Filing', category: 'Pedicure', price: '₹100.00' },
      { id: 'ped-4', name: 'Change of Polish', category: 'Pedicure', price: '₹50.00' },
      { id: 'ped-5', name: 'Foot & Hand Massage', category: 'Pedicure', price: '₹300.00 / ₹250.00' }
    ]
  }
];

export const INITIAL_TESTIMONIALS: SalonTestimonial[] = [
  {
    id: 't-1',
    clientName: 'Mridhula K',
    headline: 'Excellent service & caring staff',
    service: 'Facials, Pedicure, Hair Spa & Waxing',
    rating: 5,
    review: 'Excellent service be it facial, pedicure, head massage, hair spa, hair wash, waxing or any other service. Veda does it all professionally & with love. She takes care of the customer very well, not just her even the owner (Pushpa). No pushing for extra services like other salons, and they don\'t recommend unnecessary treatments just for money. Highly recommend this salon and very satisfied customer!',
    badge: 'Local Guide • 12 reviews',
    avatarBg: '#0f5a9e',
    verified: true
  },
  {
    id: 't-2',
    clientName: 'Lakshmi kushal',
    headline: 'Regular customer & awesome facial massage',
    service: 'Haircut, Manicure & Facial Massage',
    rating: 5,
    review: 'They provide all the services beautifully and I loved it! I became a regular customer here, the facial massage is awesome, not only that, even hair cut, pedicure, etc. I refer here for everyone to take an experience once, even you people will love it!',
    badge: 'Local Guide • 15 reviews',
    avatarBg: '#c25816',
    verified: true
  },
  {
    id: 't-3',
    clientName: 'Sahana Veda',
    headline: 'Friendly staff & comfortable massage',
    service: 'Body Waxing, Pedicure & Manicure',
    rating: 5,
    review: 'The service was very good... Staffs are very friendly. And pedicure and manicure massage was very comfortable. The atmosphere is relaxing and hygienic.',
    badge: '7 reviews • 1 photo',
    avatarBg: '#b72e12',
    verified: true
  },
  {
    id: 't-4',
    clientName: 'Susmita Bhuyan',
    headline: 'Perfect manicure & eyebrow shaping',
    service: 'Manicure, Nail Shapes & Eyebrows',
    rating: 5,
    review: 'I took manicure and eyebrows. Manicure nail shapes are perfect and massage is relaxing. Eyebrows shape are also perfect!',
    badge: '3 reviews',
    avatarBg: '#603c8b',
    verified: true
  },
  {
    id: 't-5',
    clientName: 'Arathi Shrinath',
    headline: 'Very hygienic with a homely spa feel',
    service: 'Facial, Eyebrows, Haircuts & Hair Colours',
    rating: 5,
    review: 'I usually go and get my facial, eyebrows, haircuts, and hair colours done by them. Very hygienic & professional way of rendering services. Overall very good and homely feel while getting spa services.',
    badge: 'Local Guide • 25 reviews',
    avatarBg: '#2e7d32',
    verified: true
  },
  {
    id: 't-6',
    clientName: 'kumari bai Pooja',
    headline: 'Clean atmosphere & very friendly staff',
    service: 'Facial, Pedicure & Hair Cut',
    rating: 5,
    review: 'Excellent service... Facial, pedicure and hair cuts are very good. Atmosphere and cleanliness is maintained well! Staff is very friendly. I hope you guys visit this parlour and enjoy their service.',
    badge: '3 reviews',
    avatarBg: '#0288d1',
    verified: true
  },
  {
    id: 't-7',
    clientName: 'Ashwini Kondapur',
    headline: 'Professional staff & humble service',
    service: 'Pedicure & Hair Growth Treatments',
    rating: 5,
    review: 'Service is very good and I took pedicure and hair growth treatments. The staff are very professional and friendly. Whoever wants any beauty services, please visit. Thank you Pushpa and Vaishali, very humble and friendly!',
    badge: '6 reviews • 2 photos',
    avatarBg: '#5d4037',
    verified: true
  }
];

export const SALON_FAQS: SalonFAQ[] = [
  {
    id: 'faq-1',
    category: 'Pricing',
    badge: 'Ethical Pricing',
    question: 'Are your salon prices transparent, and are there any hidden fees or forced add-ons?',
    answer: 'All prices displayed on our verified rate menu are 100% transparent and all-inclusive. As our valued clients highlight in their genuine Google reviews, Pushpa and our therapists maintain a strict ethical policy: no pushy upselling, no surprise add-on charges, and no recommending unnecessary treatments just for money.'
  },
  {
    id: 'faq-2',
    category: 'Pricing',
    badge: 'Payment Modes',
    question: 'What payment options and payment methods do you accept?',
    answer: 'We accept all popular digital UPI options (Google Pay, PhonePe, Paytm, BHIM), debit and credit cards (Visa, Mastercard, RuPay), and direct cash payments at the salon billing reception.'
  },
  {
    id: 'faq-3',
    category: 'Booking',
    badge: 'Appointments & Walk-ins',
    question: 'Do I need an advance appointment, or can I walk in directly?',
    answer: 'Both walk-ins and advance appointments are warmly welcomed! However, to guarantee your preferred therapist (like Veda, Pushpa, or Vaishali) and ensure zero waiting time during peak evening or weekend hours, we recommend booking online or calling our front desk ahead of time.'
  },
  {
    id: 'faq-4',
    category: 'Booking',
    badge: 'Bridal Booking',
    question: 'How early should I book for Bridal makeup and pre-wedding packages?',
    answer: 'For bridal makeovers, Muhurtham styling, and reception grooming, we advise booking at least 2 to 4 weeks in advance. This gives us ample time for a comprehensive bridal consultation, skin preparation schedule, and saree draping / flower styling customization.'
  },
  {
    id: 'faq-5',
    category: 'Booking',
    badge: 'Rescheduling',
    question: 'What is your appointment rescheduling or cancellation policy?',
    answer: 'We understand that unexpected delays happen. You can reschedule or cancel your appointment at any time without penalty by giving us a quick call or WhatsApp message at least 2 hours before your scheduled slot so we can reallocate chair time.'
  },
  {
    id: 'faq-6',
    category: 'Services',
    badge: 'Hair Smoothing & Keratin',
    question: 'Which brands and formulas are used for Hair Smoothing and Keratin treatments?',
    answer: 'We exclusively apply authentic, dermatologically tested professional hair brands like L’Oréal Professionnel, Streax Professional, and matrix keratin complexes. All treatments are opened and mixed right before your eyes, guaranteeing hair cuticle protection, intense shine, and long-lasting smoothness.'
  },
  {
    id: 'faq-7',
    category: 'Services',
    badge: 'Facials & Skin Care',
    question: 'Which facial is best suited for sensitive or sun-tanned skin?',
    answer: 'For instant tan removal and long-lasting radiance, our clients love the O3+ Whitening & Glow Facial or the Lotus Herbal De-Tan. If your skin is sensitive, prone to breakouts, or requires gentle care, our specialists perform a complimentary skin analysis to recommend the most soothing botanical blend.'
  },
  {
    id: 'faq-8',
    category: 'Services',
    badge: 'Waxing Care',
    question: 'What is the key difference between Normal Honey Wax and Italian Rica Wax?',
    answer: 'Normal Honey Wax works well for regular skin. Italian Rica Wax is a 100% colophony-free liposoluble wax with natural vegetable oils; it grips fine stubborn hair gently from the root with significantly reduced pain, no sticky residue, and zero redness or irritation on sensitive skin.'
  },
  {
    id: 'faq-9',
    category: 'Hygiene',
    badge: 'Sanitization & Safety',
    question: 'What hygiene and sterilization protocols are followed inside the salon?',
    answer: 'Cleanliness and client safety are our cornerstone. We use single-use disposable bed sheets, fresh sanitized towels, disposable wax strips and spatulas, and hospital-grade UV tool sterilization for all scissors, threading accessories, and pedicure equipment after every single client.'
  }
];
