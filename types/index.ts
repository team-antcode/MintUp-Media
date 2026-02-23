// Navigation
export interface NavItem {
  label: string;
  href: string;
}

// Features / Why Choose Us
export interface FeatureCard {
  icon: string;
  title: string;
  description: string;
}

// Services
export interface ServiceCard {
  icon: string;
  title: string;
  description: string;
  tags: string[];
}

// Portfolio Projects
export interface PortfolioProject {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  link?: string;
}

// Stats
export interface Stat {
  value: string;
  label: string;
}
