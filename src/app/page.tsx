import { AboutSection } from "@/sections/AboutSection";
import { BenefitsSection } from "@/sections/BenefitsSection";
import { ContactSection } from "@/sections/ContactSection";
import { CtaSection } from "@/sections/CtaSection";
import { HeroSection } from "@/sections/HeroSection";
import { HowItWorksSection } from "@/sections/HowItWorksSection";
import { PortfolioSection } from "@/sections/PortfolioSection";
import { ProblemsSection } from "@/sections/ProblemsSection";
import { ServicesSection } from "@/sections/ServicesSection";
import { TestimonialsSection } from "@/sections/TestimonialsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemsSection />
      <ServicesSection />
      <BenefitsSection />
      <HowItWorksSection />
      <PortfolioSection />
      <TestimonialsSection />
      <AboutSection />
      <CtaSection />
      <ContactSection />
    </>
  );
}
