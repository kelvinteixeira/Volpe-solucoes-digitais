"use client";

import { heroContent } from "@/data/hero";
import { ScrollReveal } from "@/components/ScrollReveal";
import { HeroFoxBackground } from "@/components/HeroFoxBackground";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-volpe-black pt-28 pb-20 sm:pt-32 lg:min-h-screen lg:pt-40 lg:pb-24"
    >
      <HeroFoxBackground />

      <Container className="relative z-10">
        <div className="max-w-xl lg:max-w-2xl">
          <ScrollReveal>
            <h1 className="font-display text-[2rem] font-extrabold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-[3.25rem] xl:text-[3.5rem]">
              {heroContent.headline}{" "}
              <span className="text-volpe-primary">
                {heroContent.headlineHighlight}
              </span>{" "}
              {heroContent.headlineEnd}
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-volpe-text-secondary sm:mt-6 sm:text-lg">
              {heroContent.subheadline}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Button href={heroContent.primaryCta.href} showArrow size="lg">
                {heroContent.primaryCta.label}
              </Button>
              <Button
                href={heroContent.secondaryCta.href}
                variant="hero-outline"
                showArrow
                size="lg"
              >
                {heroContent.secondaryCta.label}
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="mt-12 grid gap-6 sm:grid-cols-3 sm:gap-4 lg:mt-14">
              {heroContent.features.map(({ title, description, icon: Icon }) => (
                <div key={title} className="flex flex-col gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-volpe-primary/30 bg-volpe-primary/10">
                    <Icon
                      className="h-5 w-5 text-volpe-primary"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{title}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-volpe-text-secondary sm:text-sm">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
