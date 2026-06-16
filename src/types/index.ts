import type { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

export interface HeroStat {
  value: string;
  label: string;
  icon: LucideIcon;
}

export interface Benefit {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface PortfolioProject {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  href: string;
  tags: string[];
  theme: "barber" | "dental" | "legal";
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface Stat {
  value: string;
  label: string;
  icon: LucideIcon;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "instagram" | "linkedin" | "whatsapp" | "mail";
}

export interface FooterLinkGroup {
  title: string;
  links: NavItem[];
}

export interface SiteConfig {
  name: string;
  tagline: string;
  domain: string;
  url: string;
  description: string;
  keywords: string[];
  whatsapp: {
    number: string;
    message: string;
  };
  email: string;
  phone: string;
  locale: string;
}
