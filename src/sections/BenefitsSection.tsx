"use client";

import { motion } from "framer-motion";
import { benefits, benefitsSection } from "@/data/benefits";
import { ScrollReveal } from "@/components/ScrollReveal";
import { BrandCard } from "@/components/ui/BrandCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function BenefitsSection() {
  return (
    <section className="relative bg-volpe-black py-20 lg:py-28">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(232,93,0,0.08)_0%,_transparent_55%)]"
        aria-hidden="true"
      />

      <Container className="relative">
        <ScrollReveal>
          <SectionHeading
            badge={benefitsSection.badge}
            title={benefitsSection.title}
            subtitle={benefitsSection.subtitle}
            dark
          />
        </ScrollReveal>

        <div className="mt-16 grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <ScrollReveal key={benefit.title} delay={index * 0.08} className="h-full">
              <motion.div
                className="h-full"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
              >
                <BrandCard className="group flex h-full min-h-[260px] flex-col sm:min-h-[280px] xl:min-h-[300px]">
                  <div className="mb-6 inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-volpe-primary/20 bg-volpe-primary/10 transition-colors group-hover:border-volpe-primary/40 group-hover:bg-volpe-primary/15">
                    <benefit.icon
                      className="h-7 w-7 text-volpe-primary"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="font-display shrink-0 text-lg font-bold leading-snug text-white">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-volpe-text-secondary">
                    {benefit.description}
                  </p>
                </BrandCard>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
