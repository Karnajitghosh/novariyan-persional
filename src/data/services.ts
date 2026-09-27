export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceSectionBlock {
  label: string;
  title: string;
  description: string;
  items: {
    title: string;
    detail: string;
  }[];
}

export interface ServiceItem {
  id: string;
  number: string;
  slug: string;
  title: string;
  shortTitle: string;
  shortDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  iconName: 'code' | 'layout' | 'shopping-bag' | 'box' | 'search' | 'shield';
  deliverables: string[];
  technologies: string[];
  problemStatement: {
    headline: string;
    description: string;
    painPoints: string[];
  };
  solutionStatement: {
    headline: string;
    description: string;
    outcomes: string[];
  };
  specializedSections: ServiceSectionBlock[];
  processSummary: {
    step: string;
    title: string;
    detail: string;
  }[];
  faqs: ServiceFAQ[];
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'web-development',
    number: '01',
    slug: 'web-development',
    title: 'Web Development',
    shortTitle: 'Web Development',
    shortDescription:
      'Custom, fast, and scalable web architectures engineered with modern frameworks and clean code.',
    heroHeadline: 'ENGINEERING HIGH-PERFORMANCE WEB ARCHITECTURES.',
    heroSubheadline:
      'We build bespoke, resilient websites and web applications using React, TypeScript, and modern edge infrastructure—designed for speed, longevity, and conversion.',
    iconName: 'code',
    deliverables: [
      'Custom Frontend & Full-Stack Architecture',
      'Headless CMS Integration & Content Modeling',
      'API Integrations & Custom Business Logic',
      'Core Web Vitals & Sub-Second Load Optimization',
      'WCAG AA Accessibility & Cross-Browser QA',
    ],
    technologies: ['React', 'TypeScript', 'Next.js', 'Vite', 'Tailwind CSS', 'Node.js', 'GraphQL / REST'],
    problemStatement: {
      headline: 'Why off-the-shelf templates hold ambitious companies back.',
      description:
        'Bloated page builders and rigid templates introduce sluggish load times, fragile plugin dependencies, and generic layouts that erode brand trust.',
      painPoints: [
        'Slow mobile performance that hurts both search rankings and visitor retention',
        'Rigid templates that cannot adapt to custom brand storytelling or product flows',
        'Fragile third-party plugins that break during routine updates',
        'Inconsistent rendering across modern desktop, tablet, and mobile viewports',
      ],
    },
    solutionStatement: {
      headline: 'Purpose-built code tailored to your business objectives.',
      description:
        'Novariyan engineers every website from clean, modular TypeScript components—giving your team a fast, secure, and effortlessly maintainable digital flagship.',
      outcomes: [
        'Sub-second page transitions and optimized asset delivery',
        'Modular component library built to scale as your company grows',
        'Semantic HTML5 structure prepared for search engines and screen readers',
        'Clean CMS workflows so your marketing team can publish without developer bottlenecks',
      ],
    },
    specializedSections: [
      {
        label: 'CORE FEATURES',
        title: 'ENGINEERED FOR RELIABILITY & SCALE',
        description:
          'Every line of code is written with strict performance budgets, type safety, and long-term maintainability.',
        items: [
          {
            title: 'Component-Driven Architecture',
            detail:
              'Reusable, strictly typed UI primitives ensure visual consistency across every route and future landing page.',
          },
          {
            title: 'Performance-First Asset Pipeline',
            detail:
              'Code splitting, lazy loading, modern image formats, and minimal JavaScript bundles keep interaction latency near zero.',
          },
          {
            title: 'Headless CMS Freedom',
            detail:
              'Structured content schemas allow non-technical editors to update copy, case studies, and articles safely.',
          },
          {
            title: 'Security & Edge Deployment',
            detail:
              'Static and hybrid edge rendering with SSL, strict security headers, and automated CI/CD deployment pipelines.',
          },
        ],
      },
    ],
    processSummary: [
      {
        step: '01',
        title: 'Technical Discovery & Architecture',
        detail: 'Defining stack requirements, data models, integration endpoints, and performance targets.',
      },
      {
        step: '02',
        title: 'Component & System Engineering',
        detail: 'Developing responsive layouts, interactive states, and clean CMS schemas in TypeScript.',
      },
      {
        step: '03',
        title: 'Performance Tuning & QA',
        detail: 'Auditing Core Web Vitals, keyboard accessibility, device responsiveness, and SEO metadata.',
      },
      {
        step: '04',
        title: 'Deployment & Handover',
        detail: 'Zero-downtime launch on global edge networks with comprehensive documentation.',
      },
    ],
    faqs: [
      {
        question: 'Do you use WordPress templates or custom code?',
        answer:
          'We specialize in custom-engineered websites using modern frameworks like React, Next.js, and TypeScript, paired with headless CMS platforms when content management is required.',
      },
      {
        question: 'Will my team be able to edit text and images after launch?',
        answer:
          'Yes. We structure content cleanly so your team can update copy, portfolio items, and blog posts without touching code.',
      },
      {
        question: 'How long does a typical custom web development project take?',
        answer:
          'Timeline depends on scope, integrations, and custom interactive features. During our initial discovery call, we provide a transparent milestone schedule.',
      },
    ],
  },
  {
    id: 'web-design',
    number: '02',
    slug: 'web-design',
    title: 'Web Design',
    shortTitle: 'Web Design',
    shortDescription:
      'Editorial, conversion-focused digital design systems that make your brand unmistakable.',
    heroHeadline: 'EDITORIAL DESIGN SYSTEMS WITH COMMERCIAL CLARITY.',
    heroSubheadline:
      'We combine architectural typography, intentional whitespace, and intuitive user journeys to turn first impressions into lasting brand authority.',
    iconName: 'layout',
    deliverables: [
      'Digital Art Direction & Visual Identity Extension',
      'Information Architecture & UX Wireframing',
      'Bespoke Typography & Grid Systems',
      'Interactive Figma Prototypes & Motion Direction',
      'Multi-Breakpoint Responsive Design Specifications',
    ],
    technologies: ['Figma', 'Design Tokens', 'Editorial Grid Systems', 'Interactive Prototyping', 'WCAG Contrast Systems'],
    problemStatement: {
      headline: 'When every competitor uses the same SaaS layout, nobody stands out.',
      description:
        'Most websites rely on predictable three-column icon rows and generic stock visuals that fail to communicate the true caliber of the business behind them.',
      painPoints: [
        'Visual identity that feels disconnected from the quality of your actual product or service',
        'Cluttered pages where competing calls-to-action confuse prospective clients',
        'Weak typographic hierarchy that forces visitors to hunt for key information',
        'Mobile layouts that feel like cramped afterthoughts rather than intentional experiences',
      ],
    },
    solutionStatement: {
      headline: 'Intentional design where every pixel serves perception and conversion.',
      description:
        'We craft bespoke visual systems anchored by strong typography, balanced asymmetry, and clear narrative pacing.',
      outcomes: [
        'Immediate visual authority within the first three seconds of page load',
        'Cohesive design tokens covering typography, spacing, borders, and dark/light surfaces',
        'Guided narrative flow that leads visitors naturally toward booking or enquiry',
        'Dedicated layouts crafted specifically for desktop, tablet, and mobile viewports',
      ],
    },
    specializedSections: [
      {
        label: 'DESIGN PHILOSOPHY',
        title: 'ARCHITECTURAL RESTRAINT OVER VISUAL NOISE',
        description:
          'We believe luxury and authority come from clarity, proportion, and restraint—never from excessive decoration.',
        items: [
          {
            title: 'UX Process & Narrative Pacing',
            detail:
              'We map user intent before drawing a single frame—structuring pages from proposition to capability, proof, and action.',
          },
          {
            title: 'Scalable Design Systems',
            detail:
              'Every project includes a documented system of type scales, grid columns, button states, and form patterns.',
          },
          {
            title: 'Intentional Responsive Design',
            detail:
              'Rather than merely shrinking desktop screens, we re-compose spacing, navigation, and touch targets for mobile ergonomics.',
          },
          {
            title: 'Motion as Communication',
            detail:
              'Subtle transitions and hover micro-interactions guide attention and provide tactile feedback without slowing down the user.',
          },
        ],
      },
    ],
    processSummary: [
      {
        step: '01',
        title: 'Brand & Visual Direction',
        detail: 'Establishing moodboards, typographic pairings, monochrome/accent ratios, and grid rules.',
      },
      {
        step: '02',
        title: 'UX Architecture & Wireframes',
        detail: 'Structuring page hierarchy, navigation flows, and conversion checkpoints.',
      },
      {
        step: '03',
        title: 'High-Fidelity Interface Design',
        detail: 'Crafting desktop and mobile screens with real copy structure and interactive states.',
      },
      {
        step: '04',
        title: 'Design System & Engineering Sync',
        detail: 'Translating design tokens directly into production CSS and React components.',
      },
    ],
    faqs: [
      {
        question: 'Can you work with our existing brand guidelines?',
        answer:
          'Absolutely. We can either extend your existing brand identity into a comprehensive web design system or establish a fresh digital art direction from scratch.',
      },
      {
        question: 'Do you design for mobile devices separately?',
        answer:
          'Yes. Every key template is designed across desktop (1440px+), tablet, and mobile viewports to ensure effortless readability and touch usability.',
      },
    ],
  },
  {
    id: 'ecommerce',
    number: '03',
    slug: 'ecommerce',
    title: 'E-Commerce',
    shortTitle: 'E-Commerce',
    shortDescription:
      'High-conversion online flagships engineered for tactile product presentation and frictionless checkout.',
    heroHeadline: 'DIGITAL FLAGSHIPS BUILT FOR MODERN COMMERCE.',
    heroSubheadline:
      'We design and develop bespoke e-commerce experiences that elevate product perception, eliminate checkout friction, and perform instantaneously on mobile.',
    iconName: 'shopping-bag',
    deliverables: [
      'Custom Storefront Design & Development',
      'High-Conversion Product Detail Pages (PDP)',
      'Slide-Out Cart & Streamlined Checkout UX',
      'Catalog Architecture, Filtering & Search',
      'Payment Gateway & Inventory CMS Integration',
    ],
    technologies: ['Shopify Headless / Hydrogen', 'Next.js Commerce', 'React', 'Stripe / Razorpay', 'Tailwind CSS'],
    problemStatement: {
      headline: 'Standard store themes commoditize premium products.',
      description:
        'When your storefront looks identical to thousands of other shops, customers judge you solely on price rather than craftsmanship and brand value.',
      painPoints: [
        'Clunky product galleries and slow variant selectors that cause mobile drop-off',
        'Multi-step checkout friction that leads to abandoned carts',
        'Heavy third-party tracking and app scripts that cripple mobile page speed',
        'Limited editorial storytelling space on product and collection pages',
      ],
    },
    solutionStatement: {
      headline: 'Tactile product storytelling paired with effortless purchasing.',
      description:
        'We combine luxury editorial presentation with rigorous conversion engineering so customers move smoothly from discovery to purchase.',
      outcomes: [
        'Instant collection filtering and zero-reload variant switching',
        'Editorial product pages that weave specifications, materials, and social proof together',
        'Mobile-first cart drawer and simplified checkout flow',
        'Clean inventory and order management backend for your operations team',
      ],
    },
    specializedSections: [
      {
        label: 'COMMERCE ARCHITECTURE',
        title: 'EVERY STAGE OF THE BUYING JOURNEY, REFINED',
        description:
          'From the first collection scroll to the order confirmation screen, we optimize for both brand desire and conversion velocity.',
        items: [
          {
            title: 'Store Experience & Collection Curation',
            detail:
              'Asymmetric lookbooks and fast multi-attribute filtering help shoppers discover the right product without cognitive overload.',
          },
          {
            title: 'Product UX & Variant Precision',
            detail:
              'High-resolution media zoom, clear sizing/specification tables, and sticky purchase controls keep buying actions within thumb reach.',
          },
          {
            title: 'Frictionless Cart & Checkout',
            detail:
              'Slide-over cart summaries with transparent shipping calculations and seamless payment gateway integration.',
          },
          {
            title: 'CMS & Commercial Performance',
            detail:
              'Structured merchandising controls and sub-second page loads that protect ad spend return and organic search visibility.',
          },
        ],
      },
    ],
    processSummary: [
      {
        step: '01',
        title: 'Catalog & Conversion Audit',
        detail: 'Mapping product taxonomy, customer buying questions, and checkout requirements.',
      },
      {
        step: '02',
        title: 'Storefront & PDP UX Design',
        detail: 'Designing collection grids, product storytelling modules, and mobile cart ergonomics.',
      },
      {
        step: '03',
        title: 'Commerce Engineering',
        detail: 'Building the frontend storefront, cart state, payment flows, and CMS sync.',
      },
      {
        step: '04',
        title: 'Load Testing & Launch',
        detail: 'Verifying transaction reliability, mobile speed, and analytics attribution.',
      },
    ],
    faqs: [
      {
        question: 'Which e-commerce platforms do you work with?',
        answer:
          'We build both custom headless storefronts (connected to Shopify or custom backends) and bespoke commerce frontends tailored to your catalog size and regional payment gateways.',
      },
      {
        question: 'Can you migrate our existing product catalog?',
        answer:
          'Yes. We handle structured product data migration and URL redirect mapping so you preserve search equity during a redesign.',
      },
    ],
  },
  {
    id: '3d-interactive',
    number: '04',
    slug: '3d-interactive',
    title: '3D & Interactive',
    shortTitle: '3D & Interactive',
    shortDescription:
      'Sophisticated WebGL, Three.js, and spatial web experiences that bring products and concepts to life.',
    heroHeadline: 'SPATIAL WEBGL & INTERACTIVE STORYTELLING.',
    heroSubheadline:
      'We engineer tasteful, hardware-accelerated 3D visuals and interactive product viewports using Three.js and React Three Fiber—balancing spectacle with performance.',
    iconName: 'box',
    deliverables: [
      'Custom Three.js & React Three Fiber Scenes',
      'Interactive 3D Product Viewers & Configurators',
      'Scroll-Linked Spatial Storytelling',
      'Custom PBR Materials & Studio Lighting Setups',
      'Graceful Low-Power & Mobile Fallbacks',
    ],
    technologies: ['Three.js', 'React Three Fiber', 'Drei', 'WebGL', 'GLSL Shaders', 'Framer Motion'],
    problemStatement: {
      headline: 'Flat images cannot always explain spatial products or technical depth.',
      description:
        'Yet poorly optimized 3D websites often suffer from long loading bars, overheated mobile batteries, and gimmicky effects that distract from the message.',
      painPoints: [
        'Static photography that fails to communicate physical form, finish, or spatial architecture',
        'Heavy, unoptimized WebGL canvases that freeze scrolling on laptops and phones',
        'Flashy effects that obscure navigation and hurt conversion clarity',
        'Lack of accessibility support for users who prefer reduced motion',
      ],
    },
    solutionStatement: {
      headline: 'Restrained, studio-lit 3D integrated seamlessly into semantic HTML.',
      description:
        'We treat 3D as an editorial focal anchor—pairing physically based materials and smooth damping with crisp DOM typography and strict frame-rate budgets.',
      outcomes: [
        'Interactive 3D objects that respond smoothly to cursor parallax, drag, and scroll',
        'Semantic HTML text overlays that remain 100% selectable, accessible, and SEO-crawlable',
        'Automatic device capability detection with instant fallback visuals when needed',
        'Full compliance with prefers-reduced-motion accessibility settings',
      ],
    },
    specializedSections: [
      {
        label: 'SPATIAL ENGINEERING',
        title: 'WEBGL CRAFTED WITH DISCIPLINE & PERFORMANCE',
        description:
          'Every 3D scene is engineered to load quickly, maintain 60fps, and support the core brand narrative.',
        items: [
          {
            title: 'Interactive 3D Product & Brand Objects',
            detail:
              'Allow visitors to inspect architectural forms, hardware products, or sculptural brand marks from every angle.',
          },
          {
            title: 'Scroll-Choreographed Storytelling',
            detail:
              'Synchronize camera movement, lighting shifts, and exploded views with natural page scrolling.',
          },
          {
            title: 'Three-Point Studio Lighting & PBR Shaders',
            detail:
              'Calibrated key, fill, and rim lighting over brushed metal, matte obsidian, and architectural glass materials.',
          },
          {
            title: 'Performance Budgets & Fallbacks',
            detail:
              'Compressed geometries, on-demand rendering, WebGL context recovery, and automatic mobile fallback handling.',
          },
        ],
      },
    ],
    processSummary: [
      {
        step: '01',
        title: 'Spatial Concept & Storyboarding',
        detail: 'Defining how 3D interaction supports the product story without blocking usability.',
      },
      {
        step: '02',
        title: 'Geometry & Material Look-Dev',
        detail: 'Crafting low-poly optimized forms, studio lighting rigs, and metallic/matte shaders.',
      },
      {
        step: '03',
        title: 'React Three Fiber Integration',
        detail: 'Connecting 3D scenes with DOM scroll, cursor physics, and interactive UI controls.',
      },
      {
        step: '04',
        title: 'Frame-Rate & Device Profiling',
        detail: 'Benchmarking GPU memory, mobile performance, and reduced-motion accessibility.',
      },
    ],
    faqs: [
      {
        question: 'Will 3D graphics slow down my website on mobile phones?',
        answer:
          'No. We use lightweight procedural geometries, compressed assets, and intelligent device capability detection that automatically serves simplified visuals or static fallbacks on low-power devices.',
      },
      {
        question: 'Does a 3D website hurt SEO?',
        answer:
          'Not when architected properly. All headings, body copy, and navigation live in semantic HTML DOM layers above the WebGL canvas, ensuring full search engine indexability.',
      },
    ],
  },
  {
    id: 'seo',
    number: '05',
    slug: 'seo',
    title: 'SEO Optimization',
    shortTitle: 'SEO Optimization',
    shortDescription:
      'Technical SEO architecture, semantic HTML, Core Web Vitals optimization, and structured schema.',
    heroHeadline: 'TECHNICAL SEO ENGINEERED INTO THE CODEBASE.',
    heroSubheadline:
      'Search visibility is not an afterthought plugin. We build clean semantic markup, fast Core Web Vitals, and structured data directly into your website foundation.',
    iconName: 'search',
    deliverables: [
      'Comprehensive Technical SEO Audit & Remediation',
      'Semantic HTML5 Heading & Landmark Architecture',
      'Schema.org JSON-LD Structured Data Implementation',
      'Core Web Vitals (LCP, INP, CLS) Optimization',
      'Canonical URL, Sitemap & Robots Configuration',
    ],
    technologies: ['Schema.org JSON-LD', 'Semantic HTML5', 'Core Web Vitals', 'OpenGraph Protocol', 'Search Console Analytics'],
    problemStatement: {
      headline: 'Beautiful websites fail if qualified buyers cannot find them.',
      description:
        'Many visually impressive agency websites hide content inside non-semantic divs, ship megabytes of unoptimized scripts, and neglect metadata hierarchy.',
      painPoints: [
        'Poor Core Web Vitals scores that suppress organic ranking potential',
        'Missing or duplicate meta titles, descriptions, and canonical tags across routes',
        'Broken heading hierarchy (multiple H1s or skipped levels) that confuses crawlers',
        'Lack of structured JSON-LD schema for services, articles, and organization entities',
      ],
    },
    solutionStatement: {
      headline: 'Search-ready engineering designed for long-term organic compounding.',
      description:
        'We align code quality, site speed, information architecture, and on-page semantics with how modern search engines crawl and evaluate authority.',
      outcomes: [
        'Clean URL taxonomy and internal linking across services, case studies, and insights',
        'Rich snippet eligibility via validated JSON-LD structured data',
        'Fast Largest Contentful Paint (LCP) and zero Cumulative Layout Shift (CLS)',
        'Clear analytics and conversion tracking setup for measurable ROI',
      ],
    },
    specializedSections: [
      {
        label: 'SEARCH FOUNDATIONS',
        title: 'FIVE PILLARS OF TECHNICAL SEARCH VISIBILITY',
        description:
          'We focus on engineering-grade SEO fundamentals that compound over time without spammy keyword stuffing.',
        items: [
          {
            title: 'Technical SEO & Crawlability',
            detail:
              'Clean robots.txt rules, XML sitemaps, canonical URL resolution, and zero orphan pages across your domain.',
          },
          {
            title: 'On-Page Semantic Hierarchy',
            detail:
              'Strict H1–H3 structure, descriptive alt attributes, and intent-aligned service and location architecture.',
          },
          {
            title: 'Core Web Vitals Performance',
            detail:
              'Optimizing server response, image sizing, font loading, and main-thread JavaScript for top-tier speed metrics.',
          },
          {
            title: 'Content Structure & Analytics',
            detail:
              'Topic-cluster blog architecture and privacy-friendly conversion tracking to measure qualified organic enquiries.',
          },
        ],
      },
    ],
    processSummary: [
      {
        step: '01',
        title: 'Technical & Search Intent Audit',
        detail: 'Analyzing current crawl health, speed bottlenecks, and high-intent commercial queries.',
      },
      {
        step: '02',
        title: 'Information & URL Architecture',
        detail: 'Structuring service pages, case studies, and insights around clear search topics.',
      },
      {
        step: '03',
        title: 'Code & Schema Implementation',
        detail: 'Deploying semantic markup, OpenGraph tags, JSON-LD schema, and speed optimizations.',
      },
      {
        step: '04',
        title: 'Indexing & Analytics Verification',
        detail: 'Validating sitemaps, structured data, and conversion event tracking.',
      },
    ],
    faqs: [
      {
        question: 'Do you guarantee #1 rankings overnight?',
        answer:
          'No ethical agency can promise instant #1 rankings. We guarantee a rock-solid technical SEO foundation, fast performance, and semantic content structure that gives your domain the strongest possible competitive advantage.',
      },
      {
        question: 'Is SEO included when you build a new website?',
        answer:
          'Yes—every website we build includes technical SEO foundations (semantic HTML, meta tags, sitemap, schema, and speed optimization) as standard, with deeper ongoing SEO campaigns available.',
      },
    ],
  },
  {
    id: 'maintenance',
    number: '06',
    slug: 'maintenance',
    title: 'Website Maintenance',
    shortTitle: 'Maintenance',
    shortDescription:
      'Proactive security updates, performance monitoring, content updates, and continuous engineering support.',
    heroHeadline: 'PROACTIVE CARE FOR MISSION-CRITICAL WEBSITES.',
    heroSubheadline:
      'Your website is a living business asset. We provide ongoing engineering support, security patching, performance audits, and rapid content updates.',
    iconName: 'shield',
    deliverables: [
      'Proactive Dependency & Security Patching',
      '24/7 Uptime & SSL Certificate Monitoring',
      'Monthly Core Web Vitals & Speed Audits',
      'Scheduled Backups & Instant Rollback Protection',
      'Dedicated Priority Engineering Hours for New Features',
    ],
    technologies: ['Automated CI/CD', 'Edge Monitoring', 'Lighthouse CI', 'Dependency Auditing', 'Git Version Control'],
    problemStatement: {
      headline: 'Unmaintained websites quietly degrade in speed, security, and conversion.',
      description:
        'After launch, outdated dependencies, unoptimized media uploads, and expired scripts can introduce regressions at the worst possible moment.',
      painPoints: [
        'Outdated packages and security vulnerabilities left unpatched for months',
        'Gradual performance slowdown as new images and scripts are added without oversight',
        'No dedicated engineer available when you need a new landing page or urgent update',
        'Broken forms or third-party integrations going unnoticed until leads drop',
      ],
    },
    solutionStatement: {
      headline: 'Peace of mind with a dedicated engineering partner on retainer.',
      description:
        'Novariyan keeps your digital presence fast, secure, and continuously evolving—acting as your on-call web engineering studio.',
      outcomes: [
        'Zero-downtime dependency updates tested in staging environments before release',
        'Continuous uptime and form-health monitoring',
        'Consistent Core Web Vitals performance month after month',
        'Direct access to senior engineering support via WhatsApp and email',
      ],
    },
    specializedSections: [
      {
        label: 'CARE & CONTINUITY',
        title: 'FIVE LAYERS OF ONGOING PROTECTION & GROWTH',
        description:
          'Structured maintenance retainers designed for businesses that cannot afford downtime or digital stagnation.',
        items: [
          {
            title: 'Security & Dependency Hardening',
            detail:
              'Regular package audits, security header verification, SSL management, and vulnerability remediation.',
          },
          {
            title: 'Routine Content & Feature Updates',
            detail:
              'Fast turnaround on new sections, campaign landing pages, case study uploads, and copy refinements.',
          },
          {
            title: 'Performance & Speed Preservation',
            detail:
              'Monthly Lighthouse and Core Web Vitals audits to ensure newly added media never slows down your site.',
          },
          {
            title: 'Uptime Monitoring & Priority Support',
            detail:
              'Automated health checks on critical routes and enquiry forms, backed by responsive engineering support.',
          },
        ],
      },
    ],
    processSummary: [
      {
        step: '01',
        title: 'Codebase & Infrastructure Onboarding',
        detail: 'Auditing repository health, deployment pipelines, backups, and current performance baselines.',
      },
      {
        step: '02',
        title: 'Stabilization & Hardening',
        detail: 'Resolving immediate technical debt, updating core packages, and configuring uptime alerts.',
      },
      {
        step: '03',
        title: 'Monthly Proactive Maintenance',
        detail: 'Scheduled security updates, speed verification, and backup integrity checks.',
      },
      {
        step: '04',
        title: 'Iterative Feature Evolution',
        detail: 'Deploying new pages, UX enhancements, and conversion experiments as your business grows.',
      },
    ],
    faqs: [
      {
        question: 'Can you maintain a website that was built by another agency?',
        answer:
          'We begin with a technical codebase audit. If the existing architecture is clean and modern, we can onboard it directly; if it has severe structural issues, we will recommend a pragmatic remediation plan.',
      },
      {
        question: 'How quickly do you respond to support requests?',
        answer:
          'Retainer clients receive priority engineering response via WhatsApp and email, with critical uptime or form issues addressed immediately.',
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return SERVICES_DATA.find((s) => s.slug === slug);
}
