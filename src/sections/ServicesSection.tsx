"use client";

import { CheckCircle2 } from "lucide-react";
import { institutionalSite, servicesSection } from "@/data/services";
import { InstitutionalSiteIllustration } from "@/components/InstitutionalSiteIllustration";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ServicesSection() {
  return (
    <section id="solucoes" className="relative bg-volpe-black-secondary py-20 lg:py-28">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,107,0,0.06)_0%,_transparent_60%)]"
        aria-hidden="true"
      />

      <Container className="relative">
        <ScrollReveal>
          <SectionHeading
            badge={servicesSection.badge}
            title={servicesSection.title}
            subtitle={servicesSection.subtitle}
            dark
          />
        </ScrollReveal>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <ScrollReveal direction="right">
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              <div
                className="pointer-events-none absolute top-1/2 left-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-volpe-primary/10 blur-[80px]"
                aria-hidden="true"
              />
              <div className="relative aspect-[4/3] w-full p-4">
                <InstitutionalSiteIllustration />
              </div>
            </div>
          </ScrollReveal>

          <div>
            <ScrollReveal delay={0.1}>
              <p className="text-base leading-relaxed text-volpe-text-secondary sm:text-lg">
                {institutionalSite.definition}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="mt-8">
                <h3 className="font-display text-lg font-bold text-white">
                  O que um site institucional inclui
                </h3>
                <ul className="mt-4 space-y-3">
                  {institutionalSite.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2
                        className="mt-0.5 h-5 w-5 shrink-0 text-volpe-primary"
                        aria-hidden="true"
                      />
                      <span className="text-sm leading-relaxed text-volpe-text-secondary">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="mt-8 text-sm leading-relaxed text-volpe-text-secondary sm:text-base">
                {institutionalSite.forWho}
              </p>
              <Button
                href={institutionalSite.cta.href}
                showArrow
                size="lg"
                className="mt-8"
              >
                {institutionalSite.cta.label}
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
