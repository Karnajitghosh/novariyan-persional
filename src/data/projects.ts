import { ASSETS } from '../config/assets';

export type ProjectCategory =
  | 'ALL'
  | 'WEB'
  | 'E-COMMERCE'
  | '3D'
  | 'REAL ESTATE'
  | 'HOSPITALITY'
  | 'TECHNOLOGY';

export interface ProjectItem {
  id: string;
  number: string;
  slug: string;
  title: string;
  clientPlaceholderNote: string;
  industry: string;
  categories: ProjectCategory[];
  services: string[];
  year: string;
  featured: boolean;
  heroImage: string;
  galleryImages: {
    src: string;
    caption: string;
    aspect: '16:9' | '4:3';
  }[];
  summary: string;
  overview: string;
  challenge: string;
  approach: string;
  designDetails: string;
  developmentDetails: string;
  technologies: string[];
  resultsPlaceholder: {
    notice: string;
    metrics: {
      label: string;
      value: string;
      context: string;
    }[];
  };
}

export const PROJECT_FILTERS: ProjectCategory[] = [
  'ALL',
  'WEB',
  'E-COMMERCE',
  '3D',
  'REAL ESTATE',
  'HOSPITALITY',
  'TECHNOLOGY',
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'aurelia-residences',
    number: '01',
    slug: 'aurelia-residences',
    title: 'AURELIA RESIDENCES',
    clientPlaceholderNote: 'Sample Concept Case Study — Replace with verified client project details.',
    industry: 'Real Estate',
    categories: ['REAL ESTATE', 'WEB', '3D'],
    services: ['Web Design', 'Web Development', '3D & Interactive'],
    year: '2026',
    featured: true,
    heroImage: ASSETS.projects.aurelia,
    galleryImages: [
      {
        src: ASSETS.projects.aurelia,
        caption: 'Architectural Hero Viewport & Interactive Massing Explorer',
        aspect: '16:9',
      },
      {
        src: ASSETS.projects.vertexHotel,
        caption: 'Residence Floorplan Selector & Material Specification View',
        aspect: '16:9',
      },
    ],
    summary:
      'An architectural digital flagship and private viewing portal for a luxury brutalist residential development.',
    overview:
      'Aurelia Residences required a digital presence that matched the architectural permanence of its physical tower. We designed an editorial web experience featuring interactive floorplan inspection, daylight exposure previews, and a private consultation booking flow.',
    challenge:
      'Conventional real estate websites overwhelm prospective buyers with dense PDF brochures and cluttered listing grids, failing to convey spatial luxury or capture qualified private viewing appointments.',
    approach:
      'We structured the site like an architectural monograph—opening with dramatic twilight imagery and spatial typography, followed by an interactive residence finder that filters penthouses and duplexes without page reloads.',
    designDetails:
      'A restrained monochrome palette of raw concrete gray, obsidian black, and warm alabaster allows the architectural photography and floorplan linework to command full attention.',
    developmentDetails:
      'Engineered with React, TypeScript, and hardware-accelerated scroll transitions. Interactive SVG and WebGL spatial layers load progressively to preserve sub-second mobile performance.',
    technologies: ['React', 'TypeScript', 'Three.js / WebGL', 'Tailwind CSS', 'Framer Motion'],
    resultsPlaceholder: {
      notice: 'Placeholder Structure — Replace with verified post-launch client metrics.',
      metrics: [
        {
          label: 'ARCHITECTURE',
          value: 'Bespoke Portal',
          context: 'Interactive residence & floorplan exploration system',
        },
        {
          label: 'PERFORMANCE',
          value: '99 / 100',
          context: 'Target Lighthouse performance specification across desktop & mobile',
        },
        {
          label: 'CONVERSION FLOW',
          value: 'Direct Private Viewing',
          context: 'Integrated calendar & WhatsApp concierge booking workflow',
        },
      ],
    },
  },
  {
    id: 'noir-time',
    number: '02',
    slug: 'noir-time',
    title: 'NOIR TIME',
    clientPlaceholderNote: 'Sample Concept Case Study — Replace with verified client project details.',
    industry: 'Luxury E-Commerce',
    categories: ['E-COMMERCE', 'WEB', '3D'],
    services: ['E-Commerce', 'Web Design', '3D & Interactive'],
    year: '2026',
    featured: true,
    heroImage: ASSETS.projects.noirTime,
    galleryImages: [
      {
        src: ASSETS.projects.noirTime,
        caption: 'Macro Horology Product Showcase & Caliber Specification Module',
        aspect: '16:9',
      },
      {
        src: ASSETS.projects.novaSystems,
        caption: 'Slide-Out Collector Cart & Express Checkout Interface',
        aspect: '16:9',
      },
    ],
    summary:
      'A direct-to-collector horology e-commerce flagship built for tactile macro storytelling and frictionless acquisition.',
    overview:
      'Noir Time represents a modern independent watchmaker crafting limited-edition mechanical chronographs. The digital store needed to bridge the gap between a physical salon appointment and instant online acquisition.',
    challenge:
      'Selling high-value mechanical timepieces online requires extraordinary visual trust. Standard e-commerce templates compress macro photography and bury technical caliber specifications inside cramped tabs.',
    approach:
      'We created anobsidian-themed digital salon where each timepiece is presented through scroll-choreographed macro photography, movement schematics, and a single-click collector reservation drawer.',
    designDetails:
      'Deep obsidian surfaces (`#0A0A0A`) with hairline graphite borders and tabular monospace numerals echo the precision of a mechanical chronograph dial.',
    developmentDetails:
      'Built as a headless commerce frontend with instant variant state management, zero-layout-shift image preloading, and seamless payment & concierge inquiry routing.',
    technologies: ['React', 'TypeScript', 'Headless Commerce Architecture', 'Tailwind CSS', 'Framer Motion'],
    resultsPlaceholder: {
      notice: 'Placeholder Structure — Replace with verified post-launch client metrics.',
      metrics: [
        {
          label: 'STOREFRONT UX',
          value: 'Zero-Reload PDP',
          context: 'Instant strap, bezel, and edition switching with macro zoom',
        },
        {
          label: 'CHECKOUT FLOW',
          value: 'Slide-Over Drawer',
          context: 'Streamlined collector acquisition & WhatsApp concierge option',
        },
        {
          label: 'SEARCH & SCHEMA',
          value: 'Rich Product JSON-LD',
          context: 'Structured horology metadata for organic collector discovery',
        },
      ],
    },
  },
  {
    id: 'vertex-hotel',
    number: '03',
    slug: 'vertex-hotel',
    title: 'VERTEX HOTEL',
    clientPlaceholderNote: 'Sample Concept Case Study — Replace with verified client project details.',
    industry: 'Hospitality',
    categories: ['HOSPITALITY', 'WEB'],
    services: ['Web Design', 'Web Development', 'SEO Optimization'],
    year: '2026',
    featured: true,
    heroImage: ASSETS.projects.vertexHotel,
    galleryImages: [
      {
        src: ASSETS.projects.vertexHotel,
        caption: 'Sanctuary Courtyard Editorial Introduction & Suite Selector',
        aspect: '16:9',
      },
      {
        src: ASSETS.projects.aurelia,
        caption: 'Architectural Dining & Wellness Reservation Experience',
        aspect: '16:9',
      },
    ],
    summary:
      'A serene editorial booking platform designed to shift a boutique architectural hotel toward direct guest reservations.',
    overview:
      'Vertex Hotel is an architectural sanctuary defined by monumental concrete arches and tranquil water courts. Their digital flagship was engineered to immerse guests in the atmosphere of the property while streamlining direct room reservations.',
    challenge:
      'Over-reliance on third-party travel aggregators was costing the property significant commission margin and stripping away the bespoke hospitality experience prior to arrival.',
    approach:
      'We designed an unhurried editorial journey that pairs full-bleed architectural photography with a persistent, minimal availability bar—allowing guests to move from suite exploration to direct reservation in two clicks.',
    designDetails:
      'Warm stone neutrals paired with bold condensed display headings create the sensation of leafing through a curated architecture and travel journal.',
    developmentDetails:
      'Engineered with responsive image art-direction, localized SEO schema for hospitality entities, and a clean booking engine integration layer.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Hospitality Schema JSON-LD', 'Framer Motion'],
    resultsPlaceholder: {
      notice: 'Placeholder Structure — Replace with verified post-launch client metrics.',
      metrics: [
        {
          label: 'BOOKING PATH',
          value: '2-Click Suite Select',
          context: 'Direct reservation flow designed to reduce OTA dependency',
        },
        {
          label: 'MOBILE UX',
          value: 'Thumb-First Bar',
          context: 'Intentional mobile suite browsing for travelers on the move',
        },
        {
          label: 'SEO STRUCTURE',
          value: 'Hotel & Local Schema',
          context: 'Semantic architecture targeting high-intent destination queries',
        },
      ],
    },
  },
  {
    id: 'nova-systems',
    number: '04',
    slug: 'nova-systems',
    title: 'NOVA SYSTEMS',
    clientPlaceholderNote: 'Sample Concept Case Study — Replace with verified client project details.',
    industry: 'Technology',
    categories: ['TECHNOLOGY', 'WEB', '3D'],
    services: ['Web Development', '3D & Interactive', 'SEO Optimization'],
    year: '2026',
    featured: true,
    heroImage: ASSETS.projects.novaSystems,
    galleryImages: [
      {
        src: ASSETS.projects.novaSystems,
        caption: 'Hardware & Telemetry Platform Architecture Showcase',
        aspect: '16:9',
      },
      {
        src: ASSETS.projects.noirTime,
        caption: 'Interactive Component Specification & Documentation Grid',
        aspect: '16:9',
      },
    ],
    summary:
      'A precision B2B web platform and interactive product architecture showcase for an enterprise technology company.',
    overview:
      'Nova Systems builds mission-critical compute and industrial telemetry hardware. They needed a flagship website capable of explaining complex hardware-software integration to both C-level executives and systems engineers.',
    challenge:
      'Enterprise technology websites often fall into two extremes: vague marketing clichés with zero technical substance, or dense specification tables that alienate executive buyers.',
    approach:
      'We created a dual-layered narrative architecture: bold executive value propositions at the top level, paired with interactive 3D hardware breakdowns and expandable technical specifications underneath.',
    designDetails:
      'Inspired by industrial design manuals—combining a 12-column swiss grid, hairline technical borders, and crisp tabular numerals.',
    developmentDetails:
      'Built with React, TypeScript, and Three.js interactive geometry inspection, achieving instant route transitions and clean documentation indexing.',
    technologies: ['React', 'TypeScript', 'Three.js', 'React Three Fiber', 'Tailwind CSS'],
    resultsPlaceholder: {
      notice: 'Placeholder Structure — Replace with verified post-launch client metrics.',
      metrics: [
        {
          label: 'PRODUCT CLARITY',
          value: 'Interactive 3D Spec',
          context: 'Spatial hardware inspection layered with semantic DOM specs',
        },
        {
          label: 'LEAD CAPTURE',
          value: 'Enterprise Qualification',
          context: 'Structured technical consultation and RFQ routing flow',
        },
        {
          label: 'CODEBASE',
          value: '100% Type-Safe',
          context: 'Modular component system built for rapid product launches',
        },
      ],
    },
  },
  {
    id: 'kinetix-mobility',
    number: '05',
    slug: 'kinetix-mobility',
    title: 'KINETIX MOBILITY',
    clientPlaceholderNote: 'Sample Concept Case Study — Replace with verified client project details.',
    industry: 'Technology',
    categories: ['TECHNOLOGY', '3D', 'WEB'],
    services: ['3D & Interactive', 'Web Development', 'Web Design'],
    year: '2026',
    featured: false,
    heroImage: ASSETS.projects.novaSystems,
    galleryImages: [
      {
        src: ASSETS.projects.novaSystems,
        caption: 'Electric Drivetrain Spatial Overview & Range Calculator',
        aspect: '16:9',
      },
    ],
    summary:
      'An interactive launch platform and configurator concept for an urban electric mobility company.',
    overview:
      'Kinetix Mobility required a high-velocity launch experience to unveil their next-generation urban electric vehicle architecture and capture pre-order reservations.',
    challenge:
      'Communicating battery density, chassis rigidity, and modular accessories through static 2D slides failed to engage early adopters and fleet partners.',
    approach:
      'We engineered a scroll-synchronized presentation with interactive specification comparisons and a streamlined fleet consultation booking funnel.',
    designDetails:
      'High-contrast monochrome typography paired with technical diagrams and responsive comparison tables.',
    developmentDetails:
      'Engineered in React and TypeScript with strict bundle-size optimization so the configurator remains responsive on mobile networks.',
    technologies: ['React', 'TypeScript', 'Three.js', 'Tailwind CSS', 'Framer Motion'],
    resultsPlaceholder: {
      notice: 'Placeholder Structure — Replace with verified post-launch client metrics.',
      metrics: [
        {
          label: 'EXPERIENCE',
          value: 'Interactive Launch',
          context: 'Real-time trim and specification comparison interface',
        },
        {
          label: 'ACCESSIBILITY',
          value: 'WCAG AA Compliant',
          context: 'Full keyboard navigation and reduced-motion support',
        },
        {
          label: 'CONVERSION',
          value: 'Pre-Order Funnel',
          context: 'Direct reservation and fleet inquiry capture',
        },
      ],
    },
  },
  {
    id: 'solis-atelier',
    number: '06',
    slug: 'solis-atelier',
    title: 'SOLIS ATELIER',
    clientPlaceholderNote: 'Sample Concept Case Study — Replace with verified client project details.',
    industry: 'Architectural Lighting & E-Commerce',
    categories: ['E-COMMERCE', 'REAL ESTATE', 'WEB'],
    services: ['E-Commerce', 'Web Design', 'SEO Optimization'],
    year: '2026',
    featured: false,
    heroImage: ASSETS.projects.aurelia,
    galleryImages: [
      {
        src: ASSETS.projects.aurelia,
        caption: 'Architectural Lighting Lookbook & Trade Specification Portal',
        aspect: '16:9',
      },
    ],
    summary:
      'A hybrid digital lookbook and trade e-commerce platform for an architectural lighting studio.',
    overview:
      'Solis Atelier designs sculptural luminaires for architects and interior designers. They needed a unified platform serving both direct retail collectors and commercial trade specifiers.',
    challenge:
      'Architects needed immediate access to photometric data, CAD files, and finish samples, while retail buyers wanted an editorial shopping experience.',
    approach:
      'We designed a clean dual-mode product page where editorial installation photography sits alongside instant technical tear-sheet downloads and sample ordering.',
    designDetails:
      'Minimalist gallery framing with generous alabaster whitespace and precise typographic metadata separators.',
    developmentDetails:
      'Fast client-side catalog filtering by luminaire type, kelvin temperature, and architectural finish.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Schema.org Product JSON-LD'],
    resultsPlaceholder: {
      notice: 'Placeholder Structure — Replace with verified post-launch client metrics.',
      metrics: [
        {
          label: 'CATALOG UX',
          value: 'Dual Retail + Trade',
          context: 'Unified specification downloads and direct sample ordering',
        },
        {
          label: 'SPEED',
          value: 'Instant Filtering',
          context: 'Zero-latency filtering across architectural collections',
        },
        {
          label: 'SEO',
          value: 'Semantic Catalog',
          context: 'Structured product and trade specification indexability',
        },
      ],
    },
  },
];

export function getProjectBySlug(slug: string): ProjectItem | undefined {
  return PROJECTS_DATA.find((p) => p.slug === slug);
}
