"use client";

import { problems, problemsSection, problemsSolution } from "@/data/problems";
import { ScrollReveal } from "@/components/ScrollReveal";
import { BrandCard } from "@/components/ui/BrandCard";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProblemsSection() {
  return (
    <section className="bg-volpe-black-secondary py-20 lg:py-28">
      <Container>
        <ScrollReveal>
          <SectionHeading
            badge={problemsSection.badge}
            title={problemsSection.title}
            subtitle={problemsSection.subtitle}
            dark
          />
        </ScrollReveal>

        <div className="mt-12 grid auto-rows-fr gap-4 sm:grid-cols-2">
          {problems.map((problem, index) => (
            <ScrollReveal key={problem.text} delay={index * 0.06} className="h-full">
              <BrandCard showPixels={false} className="flex h-full min-h-[120px] items-start gap-4 !p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-volpe-primary/20 bg-volpe-primary/10">
                  <problem.icon
                    className="h-5 w-5 text-volpe-primary"
                    aria-hidden="true"
                  />
                </div>
                <p className="text-sm leading-relaxed text-volpe-text-secondary">
                  {problem.text}
                </p>
              </BrandCard>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <BrandCard className="mt-12 flex flex-col items-center gap-6 !p-8 text-center sm:flex-row sm:text-left">
            <p className="flex-1 text-base font-medium leading-relaxed text-white sm:text-lg">
              {problemsSolution}
            </p>
            <Button href="#contato" showArrow className="shrink-0">
              Quero Meu Site
            </Button>
          </BrandCard>
        </ScrollReveal>
      </Container>
    </section>
  );
}
