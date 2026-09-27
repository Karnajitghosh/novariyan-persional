export interface TestimonialItem {
  id: string;
  isPlaceholder: true;
  quote: string;
  clientName: string;
  role: string;
  company: string;
  projectType: string;
  serviceCategory: 'Web Development' | 'Web Design' | 'E-Commerce' | '3D & Interactive' | 'SEO Optimization';
  rating: number;
  hasVideoPlaceholder?: boolean;
}

/**
 * IMPORTANT: All items below are explicitly marked as structured placeholder testimonials
 * until real verified client reviews are supplied by Novariyan.
 */
export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'placeholder-review-01',
    isPlaceholder: true,
    quote:
      '[Placeholder Client Review] Replace this block with a verified client quote describing how Novariyan redesigned your digital presence, improved page speed, and streamlined qualified enquiries.',
    clientName: '[Client Name — Placeholder]',
    role: 'Managing Director',
    company: '[Real Estate Development Brand]',
    projectType: 'Custom Web Architecture & 3D Showcase',
    serviceCategory: 'Web Development',
    rating: 5,
    hasVideoPlaceholder: true,
  },
  {
    id: 'placeholder-review-02',
    isPlaceholder: true,
    quote:
      '[Placeholder Client Review] Replace this block with a verified testimonial highlighting the editorial design system, mobile checkout ergonomics, and collaborative communication throughout the project.',
    clientName: '[Client Name — Placeholder]',
    role: 'Founder & Creative Director',
    company: '[Luxury D2C E-Commerce Brand]',
    projectType: 'Bespoke E-Commerce Flagship',
    serviceCategory: 'E-Commerce',
    rating: 5,
    hasVideoPlaceholder: true,
  },
  {
    id: 'placeholder-review-03',
    isPlaceholder: true,
    quote:
      '[Placeholder Client Review] Replace this block with a verified client statement regarding hospitality booking UX, visual storytelling, and direct reservation clarity.',
    clientName: '[Client Name — Placeholder]',
    role: 'General Manager',
    company: '[Boutique Hospitality Group]',
    projectType: 'Editorial Website & Booking Flow',
    serviceCategory: 'Web Design',
    rating: 5,
  },
  {
    id: 'placeholder-review-04',
    isPlaceholder: true,
    quote:
      '[Placeholder Client Review] Replace this block with a verified review covering technical SEO foundations, semantic architecture, and Core Web Vitals improvements.',
    clientName: '[Client Name — Placeholder]',
    role: 'Head of Growth',
    company: '[B2B Technology Platform]',
    projectType: 'Technical SEO & Interactive Product Site',
    serviceCategory: 'SEO Optimization',
    rating: 5,
  },
  {
    id: 'placeholder-review-05',
    isPlaceholder: true,
    quote:
      '[Placeholder Client Review] Replace this block with a verified client quote on how custom Three.js / WebGL product visualization helped explain complex engineering to enterprise buyers.',
    clientName: '[Client Name — Placeholder]',
    role: 'VP of Product',
    company: '[Industrial Hardware Systems]',
    projectType: '3D WebGL Configurator & Web Platform',
    serviceCategory: '3D & Interactive',
    rating: 5,
  },
];
