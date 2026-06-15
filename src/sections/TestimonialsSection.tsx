"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials, testimonialsSection } from "@/data/testimonials";
import { ScrollReveal } from "@/components/ScrollReveal";
import { BrandCard } from "@/components/ui/BrandCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} de 5 estrelas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? "fill-volpe-primary text-volpe-primary" : "text-volpe-gray-medium"}`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="bg-volpe-black py-20 lg:py-28">
      <Container>
        <ScrollReveal>
          <SectionHeading
            badge={testimonialsSection.badge}
            title={testimonialsSection.title}
            subtitle={testimonialsSection.subtitle}
            dark
          />
        </ScrollReveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.id} delay={index * 0.08}>
              <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
                <BrandCard className="flex h-full flex-col">
                  <StarRating rating={testimonial.rating} />
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-volpe-text-secondary">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  <footer className="mt-6 flex items-center gap-3 border-t border-volpe-gray-medium/30 pt-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-volpe-gradient text-xs font-bold text-white">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <cite className="not-italic">
                        <p className="text-sm font-semibold text-white">
                          {testimonial.name}
                        </p>
                        <p className="text-xs text-volpe-text-muted">
                          {testimonial.role} — {testimonial.company}
                        </p>
                      </cite>
                    </div>
                  </footer>
                </BrandCard>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
