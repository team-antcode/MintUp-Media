import type {
  NavItem,
  FeatureCard,
  ServiceCard,
  PortfolioProject,
  Stat,
} from '@/types';

export const navItems: NavItem[] = [
  { label: 'Team', href: '#about' },
  { label: 'Impact', href: '#why-us' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Testimonials', href: '#testimonials' },
];

export const heroContent = {
  badge: '✦ Available for Projects',
  headline: ['Digital Experiences', 'That Speak', 'Results'],
  subheading:
    'From pixel-perfect web apps to powerful social media strategies, we deliver digital solutions that actually drive business growth.',
  ctaPrimary: 'Book a Free Call',
  ctaSecondary: 'View My Work',
};

export const aboutContent = {
  label: 'About Me',
  headline: 'Turning Ideas into Polished Digital Products',
  paragraphs: [
    "I'm a creative developer and designer with a passion for building modern, high-performance web experiences. I work at the intersection of design and engineering — ensuring every pixel is intentional and every line of code is clean.",
    'From early-stage startups to established SaaS products, I help founders and teams ship beautiful software fast.',
  ],
  stats: [
    { value: '50+', label: 'Projects Shipped' },
    { value: '3+', label: 'Years Experience' },
    { value: '100%', label: 'Client Satisfaction' },
    { value: '24h', label: 'Avg. Response Time' },
  ] as Stat[],
};

export const features: FeatureCard[] = [
  {
    icon: '⚡',
    title: 'Blazing Fast Delivery',
    description:
      'Ship production-ready code in days, not months. I move with urgency without sacrificing quality.',
  },
  {
    icon: '🎨',
    title: 'Design-First Thinking',
    description:
      'Every project starts with a deep understanding of the user experience before a single line of code is written.',
  },
  {
    icon: '📱',
    title: 'Pixel-Perfect Responsive',
    description:
      'Flawless on every screen — from the latest MacBook to the smallest Android phone.',
  },
  {
    icon: '🔧',
    title: 'Clean, Scalable Code',
    description:
      'TypeScript-first, component-driven architecture that your future team will actually enjoy working with.',
  },
];

export const services: ServiceCard[] = [
  {
    icon: '🚀',
    title: 'SaaS Development',
    description:
      'Full-stack SaaS products built with Next.js, TypeScript, and modern cloud infrastructure. From MVP to scale.',
    tags: ['Next.js', 'TypeScript', 'Supabase'],
  },
  {
    icon: '🎯',
    title: 'Landing Pages',
    description:
      'High-converting, visually stunning landing pages that communicate your value proposition and drive signups.',
    tags: ['Conversion', 'Motion', 'CRO'],
  },
  {
    icon: '🖌️',
    title: 'UI/UX Design',
    description:
      'Premium interface design with meticulous attention to spacing, typography, and visual hierarchy.',
    tags: ['Figma', 'Design Systems', 'Prototyping'],
  },
  {
    icon: '⚙️',
    title: 'Web Applications',
    description:
      'Robust, scalable web apps with real-time features, complex state management, and seamless integrations.',
    tags: ['React', 'APIs', 'Databases'],
  },
  {
    icon: '📊',
    title: 'Performance Optimization',
    description:
      'Turn slow, bloated sites into lean, lightning-fast experiences with Core Web Vitals that Google loves.',
    tags: ['Core Web Vitals', 'SEO', 'Caching'],
  },
  {
    icon: '🔗',
    title: 'API & Integrations',
    description:
      'Seamlessly connect your product to third-party services — payments, auth, CRMs, analytics, and more.',
    tags: ['REST', 'GraphQL', 'Webhooks'],
  },
];

export const projects: PortfolioProject[] = [
  {
    title: 'NexaFlow — SaaS Dashboard',
    description:
      'A real-time analytics dashboard for SaaS teams with custom reporting and role-based access control.',
    tags: ['Next.js', 'TypeScript', 'Prisma'],
  },
  {
    title: 'Verida — AI Writing Tool',
    description:
      'AI-powered content creation platform with collaborative editing and brand voice customization.',
    tags: ['React', 'OpenAI', 'Supabase'],
  },
  {
    title: 'Cartly — E-commerce Platform',
    description:
      'Modern headless e-commerce storefront with custom CMS, inventory management, and checkout flow.',
    tags: ['Next.js', 'Stripe', 'Sanity'],
  },
  {
    title: 'Pulse — Health Tracker App',
    description:
      'Mobile-first health tracking application with biometric data visualization and coach integrations.',
    tags: ['React Native', 'Charts', 'Firebase'],
  },
  {
    title: 'LaunchKit — Startup Template',
    description:
      'A premium Next.js starter kit for startups — auth, billing, teams, and onboarding out of the box.',
    tags: ['Next.js', 'Stripe', 'Auth.js'],
  },
  {
    title: 'Spectral — Design Agency',
    description:
      'Award-winning agency website with immersive scroll animations and a portfolio showcase system.',
    tags: ['Next.js', 'GSAP', 'Framer'],
  },
];
