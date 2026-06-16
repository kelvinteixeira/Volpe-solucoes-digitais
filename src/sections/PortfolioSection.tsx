"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { portfolioProjects, portfolioSection } from "@/data/portfolio";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";
import type { PortfolioProject } from "@/types";

const themeStyles = {
  barber: {
    header: "bg-volpe-black",
    glow: "bg-white/5",
    tag: "border-white/10 bg-white/5 text-volpe-text-secondary",
  },
  dental: {
    header: "bg-volpe-black",
    glow: "bg-sky-400/10",
    tag: "border-sky-400/20 bg-sky-400/10 text-sky-100/80",
  },
  legal: {
    header: "bg-volpe-black",
    glow: "bg-amber-400/10",
    tag: "border-amber-400/20 bg-amber-400/10 text-amber-100/80",
  },
} as const;

function getProjectDomain(href: string) {
  try {
    return new URL(href).hostname.replace("www.", "");
  } catch {
    return href;
  }
}

function PortfolioCard({
  project,
  enableHover = true,
}: {
  project: PortfolioProject;
  enableHover?: boolean;
}) {
  const theme = themeStyles[project.theme];

  return (
    <motion.article
      whileHover={enableHover ? { y: -6 } : undefined}
      transition={{ duration: 0.3 }}
      className="group volpe-card flex h-full flex-col overflow-hidden transition-colors hover:border-volpe-primary/40"
    >
      <div
        className={cn(
          "relative flex h-48 shrink-0 items-center justify-center overflow-hidden px-8 py-6",
          theme.header,
        )}
      >
        <div
          className={cn(
            "pointer-events-none absolute inset-8 rounded-2xl blur-2xl",
            theme.glow,
          )}
          aria-hidden="true"
        />
        <div className="relative h-full w-full max-w-[220px]">
          <Image
            src={project.image}
            alt={`Logo ${project.name}`}
            fill
            className="object-contain object-center transition-transform duration-500 group-hover:scale-105"
            sizes="220px"
            quality={95}
          />
        </div>
        <span className="absolute top-4 left-4 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
          {project.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div>
          <h3 className="font-display text-lg font-bold text-white">
            {project.name}
          </h3>
          <p className="mt-1 flex items-center gap-1.5 text-xs text-volpe-text-muted">
            <ExternalLink className="h-3 w-3 shrink-0" aria-hidden="true" />
            {getProjectDomain(project.href)}
          </p>
        </div>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-volpe-text-secondary">
          {project.description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className={cn(
                "rounded-full border px-2.5 py-1 text-[11px] font-medium",
                theme.tag,
              )}
            >
              {tag}
            </li>
          ))}
        </ul>

        <Button
          href={project.href}
          external
          variant="ghost"
          showArrow
          className="mt-5 shrink-0 px-0 py-0 text-sm hover:bg-transparent"
          ariaLabel={`Acessar site ${project.name}`}
        >
          Acessar site
        </Button>
      </div>
    </motion.article>
  );
}

function CarouselNavButton({
  direction,
  onClick,
  label,
}: {
  direction: "prev" | "next";
  onClick: () => void;
  label: string;
}) {
  const Icon = direction === "prev" ? ChevronLeft : ChevronRight;

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-volpe-gray-medium bg-volpe-gray-dark text-white transition-colors hover:border-volpe-primary/50 hover:bg-volpe-black-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-volpe-primary focus-visible:ring-offset-2 focus-visible:ring-offset-volpe-black-secondary"
    >
      <Icon className="h-5 w-5" aria-hidden="true" />
    </button>
  );
}

export function PortfolioSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = portfolioProjects.length;

  const goToPrev = () => {
    setActiveIndex((index) => (index === 0 ? total - 1 : index - 1));
  };

  const goToNext = () => {
    setActiveIndex((index) => (index === total - 1 ? 0 : index + 1));
  };

  return (
    <section id="portfolio" className="bg-volpe-black-secondary py-20 lg:py-28">
      <Container>
        <ScrollReveal>
          <SectionHeading
            badge={portfolioSection.badge}
            title={portfolioSection.title}
            subtitle={portfolioSection.subtitle}
            dark
          />
        </ScrollReveal>

        <div className="mt-16 md:hidden">
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={portfolioProjects[activeIndex].id}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <PortfolioCard
                  project={portfolioProjects[activeIndex]}
                  enableHover={false}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-center gap-5">
            <CarouselNavButton
              direction="prev"
              onClick={goToPrev}
              label="Projeto anterior"
            />
            <span
              className="min-w-[4rem] text-center text-sm font-medium text-volpe-text-secondary"
              aria-live="polite"
            >
              {activeIndex + 1} / {total}
            </span>
            <CarouselNavButton
              direction="next"
              onClick={goToNext}
              label="Próximo projeto"
            />
          </div>
        </div>

        <div className="mt-16 hidden auto-rows-fr gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">
          {portfolioProjects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.08} className="h-full">
              <PortfolioCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
