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
  label: 'About Us',
  headline: 'We Build Your Landing Pages & Grow Your Brand',
  paragraphs: [
    'MintUp Media is a powerhouse for digital growth. We specialize in building high-converting landing pages, expert content creation, and comprehensive social media handling that puts your brand in front of the right audience.',
    'From strategic social media management to pixel-perfect web development, we ensure your digital presence is not just beautiful, but a results-driven asset for your business.',
  ],
  stats: [
    { value: '100+', label: 'Landing Pages Built' },
    { value: '500K+', label: 'Total Reach' },
    { value: '100%', label: 'Client Satisfaction' },
    { value: '24/7', label: 'Support & Strategy' },
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
    title: 'Neil Bakery - Marketing Website',
    description:
      'A responsive marketing website for a local bakery with an integrated online ordering system.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'Hired - AI Based Mock interview Platform',
    description:
      'An AI-powered mock interview platform that simulates real interview scenarios and provides feedback to users.',
    tags: ['React', 'OpenAI', 'Supabase', 'FastAPI'],
  },
  {
    title: 'Formar - E-commerce Platform',
    description:
      'Modern headless e-commerce storefront with custom CMS, inventory management, and checkout flow.',
    tags: ['Next.js', 'T3 stack', 'Prisma', 'Tailwind CSS'],
  },
  // {
  //   title: 'Pulse — Health Tracker App',
  //   description:
  //     'Mobile-first health tracking application with biometric data visualization and coach integrations.',
  //   tags: ['React Native', 'Charts', 'Firebase'],
  // },
  // {
  //   title: 'LaunchKit — Startup Template',
  //   description:
  //     'A premium Next.js starter kit for startups — auth, billing, teams, and onboarding out of the box.',
  //   tags: ['Next.js', 'Stripe', 'Auth.js'],
  // },
  // {
  //   title: 'Spectral — Design Agency',
  //   description:
  //     'Award-winning agency website with immersive scroll animations and a portfolio showcase system.',
  //   tags: ['Next.js', 'GSAP', 'Framer'],
  // },
];
