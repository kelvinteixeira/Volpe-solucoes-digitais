"use client";

import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { brandAssets } from "@/data/brand";
import { aboutSection } from "@/data/about";
import { BrandPixels } from "@/components/brand/BrandPixels";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AboutSection() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-volpe-black py-20 lg:py-28">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_left,_rgba(255,107,0,0.08)_0%,_transparent_55%)]"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <ScrollReveal direction="right">
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              <div
                className="pointer-events-none absolute top-1/2 left-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-volpe-primary/12 blur-[80px]"
                aria-hidden="true"
              />

              <BrandPixels
                size="md"
                className="pointer-events-none absolute top-4 left-2 opacity-50 lg:top-8 lg:left-4"
              />

              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={brandAssets.aboutIllustration}
                  alt="Volpe — inteligência, estratégia e agilidade na criação de sites institucionais"
                  fill
                  className="object-contain object-center drop-shadow-[0_0_50px_rgba(255,107,0,0.2)]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </ScrollReveal>

          <div>
            <ScrollReveal>
              <SectionHeading
                badge={aboutSection.badge}
                title={aboutSection.title}
                subtitle={aboutSection.subtitle}
                align="left"
                dark
              />
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <ul className="mt-8 space-y-4">
                {aboutSection.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-volpe-primary"
                      aria-hidden="true"
                    />
                    <span className="text-sm leading-relaxed text-volpe-text-secondary">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
