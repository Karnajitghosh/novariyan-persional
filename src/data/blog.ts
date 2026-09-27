import { ASSETS } from '../config/assets';

export type BlogCategory = 'ALL' | 'WEB DEVELOPMENT' | 'DESIGN' | 'SEO';

export interface BlogArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: Exclude<BlogCategory, 'ALL'>;
  date: string;
  readingTime: string;
  featured: boolean;
  heroImage: string;
  author: {
    name: string;
    role: string;
  };
  keyTakeaways: string[];
  sections: {
    heading: string;
    paragraphs: string[];
  }[];
}

export const BLOG_CATEGORIES: BlogCategory[] = ['ALL', 'WEB DEVELOPMENT', 'DESIGN', 'SEO'];

export const BLOG_DATA: BlogArticle[] = [
  {
    id: 'high-performance-website-business-impact',
    slug: 'how-a-high-performance-website-can-improve-your-business',
    title: 'How a High-Performance Website Can Improve Your Business',
    excerpt:
      'Why sub-second load times, clean frontend architecture, and intentional conversion flows directly influence brand trust and qualified pipeline.',
    category: 'WEB DEVELOPMENT',
    date: 'September 2026',
    readingTime: '5 min read',
    featured: true,
    heroImage: ASSETS.projects.novaSystems,
    author: {
      name: 'Novariyan Editorial',
      role: 'Engineering & Strategy',
    },
    keyTakeaways: [
      'Every 100ms of latency directly shapes how prospective clients perceive your operational competence.',
      'Custom component architectures eliminate the plugin bloat that slows down template websites.',
      'Performance is both a user-experience requirement and a foundational Google ranking signal.',
    ],
    sections: [
      {
        heading: 'Speed as an Immediate Signal of Competence',
        paragraphs: [
          'Before a prospective client reads a single sentence of your value proposition, they experience how your website responds. A page that resolves instantaneously communicates precision, reliability, and respect for the visitor’s time.',
          'Conversely, when a website stutters during scroll, shifts layout as images load, or takes four seconds to become interactive on a mobile network, it introduces subconscious friction before the conversation even begins.',
        ],
      },
      {
        heading: 'Why Template Stacks Accumulate Hidden Technical Debt',
        paragraphs: [
          'Many businesses launch on multipurpose visual page builders because they promise speed to market. Within months, however, adding analytics scripts, sliders, form plugins, and high-resolution media results in megabytes of unused JavaScript shipped to every mobile visitor.',
          'At Novariyan, we engineer websites using modular TypeScript and React architectures with strict asset budgets. Only the code required for the current viewport is executed, keeping interaction latency under 100 milliseconds.',
        ],
      },
      {
        heading: 'Connecting Frontend Engineering to Conversion Clarity',
        paragraphs: [
          'High performance is not solely about benchmark scores—it is about preserving momentum across the buyer journey. When navigating from a service overview to a case study and into a consultation booking form feels instantaneous, qualified prospects stay engaged and complete their enquiry.',
        ],
      },
    ],
  },
  {
    id: 'what-makes-a-website-feel-premium',
    slug: 'what-makes-a-website-feel-premium',
    title: 'What Makes a Website Feel Premium?',
    excerpt:
      'An editorial breakdown of typography hierarchy, negative space, grid asymmetry, and restrained motion in modern digital design.',
    category: 'DESIGN',
    date: 'September 2026',
    readingTime: '6 min read',
    featured: false,
    heroImage: ASSETS.projects.aurelia,
    author: {
      name: 'Novariyan Editorial',
      role: 'Design Direction',
    },
    keyTakeaways: [
      'Luxury in digital design comes from architectural restraint and whitespace, never from visual clutter.',
      'Monumental condensed typography paired with crisp body prose creates unmistakable hierarchy.',
      'Motion should feel calm, weighted, and purposeful rather than flashy or distracting.',
    ],
    sections: [
      {
        heading: 'The Discipline of Negative Space',
        paragraphs: [
          'Walk into a high-end architectural gallery or luxury flagship store and notice what dominates the room: space. Nothing is crowded. Every object is given room to breathe so the eye knows exactly where to rest.',
          'The same principle governs premium web design. When every pixel of the viewport is packed with floating badges, competing banners, and nested card borders, the interface feels anxious. Generous margins and hairline structural dividers create immediate calm and authority.',
        ],
      },
      {
        heading: 'Typographic Contrast & Editorial Pacing',
        paragraphs: [
          'Generic websites rely on uniform medium-weight fonts where headings barely distinguish themselves from paragraphs. A premium digital experience establishes dramatic scale contrast—pairing bold, architectural display headlines with highly legible body prose measured to 65 characters per line.',
          'Metadata such as dates, categories, and numerical indices should whisper rather than shout, rendered as clean unboxed typography with subtle separators.',
        ],
      },
      {
        heading: 'Weighted, Purposeful Micro-Interactions',
        paragraphs: [
          'True polish lives in how buttons, links, and 3D forms respond to human input. Instead of constant spinning animations or bouncy effects, premium interfaces use smooth cubic-bezier settling curves and subtle parallax that reward curiosity without delaying access to content.',
        ],
      },
    ],
  },
  {
    id: 'technical-seo-foundations-for-modern-websites',
    slug: 'technical-seo-foundations-for-modern-websites',
    title: 'Technical SEO Foundations for Modern Websites',
    excerpt:
      'How semantic HTML5 landmarks, Schema.org JSON-LD structured data, and Core Web Vitals work together to build sustainable organic visibility.',
    category: 'SEO',
    date: 'August 2026',
    readingTime: '7 min read',
    featured: false,
    heroImage: ASSETS.projects.vertexHotel,
    author: {
      name: 'Novariyan Editorial',
      role: 'Technical SEO & Architecture',
    },
    keyTakeaways: [
      'Search engines reward semantic HTML hierarchy (H1–H3, nav, main, article) over div-soup layouts.',
      'JSON-LD structured data explicitly communicates your services, organization, and FAQs to crawlers.',
      'Core Web Vitals (LCP, INP, CLS) act as a technical tiebreaker in competitive commercial verticals.',
    ],
    sections: [
      {
        heading: 'Why SEO Starts in the Codebase, Not in a Plugin',
        paragraphs: [
          'Too often, search optimization is treated as a checklist applied after a website is already built. By then, structural issues—such as non-semantic heading tags, sluggish client-side rendering, or messy URL hierarchies—are already baked into the templates.',
          'When technical SEO is engineered into the component architecture from day one, every route automatically inherits clean canonical tags, OpenGraph metadata, and logical heading trees.',
        ],
      },
      {
        heading: 'Structured Data & Entity Clarity with Schema.org',
        paragraphs: [
          'Modern search engines do not just match keywords; they map entities and relationships. Embedding clean JSON-LD structured data for ProfessionalService, FAQPage, and Article schemas helps search engines understand exactly what your business offers and who you serve.',
        ],
      },
      {
        heading: 'Core Web Vitals and Layout Stability',
        paragraphs: [
          'Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS) measure real-world user experience. Specifying explicit image aspect ratios, preconnecting critical font origins, and keeping main-thread JavaScript lean ensures both search crawlers and human visitors experience a fast, stable site.',
        ],
      },
    ],
  },
];

export function getBlogBySlug(slug: string): BlogArticle | undefined {
  return BLOG_DATA.find((b) => b.slug === slug);
}
