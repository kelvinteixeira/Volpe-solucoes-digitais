"use client";

import { Mail } from "lucide-react";
import { contactSection } from "@/data/contact";
import { siteConfig } from "@/data/site.config";
import { ContactForm } from "@/components/ContactForm";
import { ScrollReveal } from "@/components/ScrollReveal";
import { BrandCard } from "@/components/ui/BrandCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ContactSection() {
  return (
    <section id="contato" className="bg-volpe-black py-20 lg:py-28">
      <Container>
        <ScrollReveal>
          <SectionHeading
            badge={contactSection.badge}
            title={contactSection.title}
            subtitle={contactSection.subtitle}
            dark
          />
        </ScrollReveal>

        <div className="mx-auto mt-16 max-w-2xl">
          <ScrollReveal>
            <BrandCard showPixels={false} className="!p-6 sm:!p-8">
              <ContactForm />

              <div className="mt-8 border-t border-volpe-gray-medium/40 pt-6">
                <p className="text-sm font-medium text-white">
                  {contactSection.aside.title}
                </p>
                <p className="mt-1 text-sm text-volpe-text-secondary">
                  {contactSection.aside.description}
                </p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-volpe-primary transition-colors hover:text-volpe-accent"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  {siteConfig.email}
                </a>
              </div>
            </BrandCard>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
