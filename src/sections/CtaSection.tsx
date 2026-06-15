"use client";

import { MessageCircle } from "lucide-react";
import { ctaSection } from "@/data/cta";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { ScrollReveal } from "@/components/ScrollReveal";
import { BrandCard } from "@/components/ui/BrandCard";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-volpe-black-secondary py-20 lg:py-28">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,107,0,0.15)_0%,_transparent_70%)]"
        aria-hidden="true"
      />

      <Container className="relative">
        <ScrollReveal>
          <BrandCard className="mx-auto max-w-3xl !p-10 text-center sm:!p-14">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {ctaSection.headline}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-volpe-text-secondary sm:text-lg">
              {ctaSection.description}
            </p>
            <div className="mt-8 flex justify-center">
              <Button
                href={getWhatsAppUrl()}
                external
                showArrow
                className="w-full sm:w-auto"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                {ctaSection.primaryButton.label}
              </Button>
            </div>
          </BrandCard>
        </ScrollReveal>
      </Container>
    </section>
  );
}
