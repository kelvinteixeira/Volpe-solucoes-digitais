"use client";

import { audienceSection, targetAudience } from "@/data/audience";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AudienceSection() {
  return (
    <section className="bg-volpe-black py-20 lg:py-28">
      <Container>
        <ScrollReveal>
          <SectionHeading
            badge={audienceSection.badge}
            title={audienceSection.title}
            subtitle={audienceSection.subtitle}
            dark
          />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {targetAudience.map((item) => (
              <div
                key={item.label}
                className="inline-flex items-center gap-2.5 rounded-full border border-volpe-gray-medium/40 bg-volpe-gray-dark/50 px-5 py-2.5 transition-colors hover:border-volpe-primary/40 hover:bg-volpe-primary/5"
              >
                <item.icon
                  className="h-4 w-4 text-volpe-primary"
                  aria-hidden="true"
                />
                <span className="text-sm font-medium text-volpe-text-secondary">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
