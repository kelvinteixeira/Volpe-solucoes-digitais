"use client";

import { motion } from "framer-motion";
import { howItWorksSection, processSteps } from "@/data/howItWorks";
import { ProcessStepIcon } from "@/components/how-it-works/ProcessStepIcons";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const PROGRESS_DURATION = 6;
const PROGRESS_PAUSE = 1.2;

export function HowItWorksSection() {
  return (
    <section
      id="como-funciona"
      className="bg-volpe-black py-20 lg:py-28"
    >
      <Container>
        <ScrollReveal>
          <SectionHeading
            badge={howItWorksSection.badge}
            title={howItWorksSection.title}
            subtitle={howItWorksSection.subtitle}
            dark
          />
        </ScrollReveal>

        <div className="relative mt-16">
          {/* Progress bar — desktop */}
          <div
            className="pointer-events-none absolute top-12 right-[6.25%] left-[6.25%] hidden lg:block"
            aria-hidden="true"
          >
            <div className="relative h-px w-full bg-volpe-primary/20">
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-volpe-primary/70 to-volpe-accent/70"
                animate={{ width: ["0%", "100%"] }}
                transition={{
                  duration: PROGRESS_DURATION,
                  repeat: Infinity,
                  repeatDelay: PROGRESS_PAUSE,
                  ease: [0.4, 0, 0.2, 1],
                }}
              />
            </div>
          </div>

          {/* Progress bar — mobile (coluna única) */}
          <div
            className="pointer-events-none absolute top-24 bottom-12 left-1/2 hidden w-px -translate-x-1/2 max-md:block"
            aria-hidden="true"
          >
            <div className="relative h-full w-full bg-volpe-primary/20">
              <motion.div
                className="absolute inset-x-0 top-0 bg-gradient-to-b from-volpe-primary/70 to-volpe-accent/70"
                animate={{ height: ["0%", "100%"] }}
                transition={{
                  duration: PROGRESS_DURATION,
                  repeat: Infinity,
                  repeatDelay: PROGRESS_PAUSE,
                  ease: [0.4, 0, 0.2, 1],
                }}
              />
            </div>
          </div>

          <div className="grid auto-rows-fr gap-10 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <ScrollReveal key={step.step} delay={index * 0.15} className="h-full">
                <div className="relative flex h-full flex-col items-center text-center">
                  <div className="relative mb-6">
                    <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-2xl border border-volpe-primary/30 bg-volpe-gray-dark shadow-glow-orange">
                      <ProcessStepIcon step={step.step} />
                    </div>
                    <span className="absolute -top-2.5 -right-2.5 z-20 flex h-7 w-7 items-center justify-center rounded-full border-2 border-volpe-black bg-volpe-gradient-btn text-xs font-bold text-white shadow-glow-orange">
                      {step.step}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-xs text-sm leading-relaxed text-volpe-text-secondary">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
