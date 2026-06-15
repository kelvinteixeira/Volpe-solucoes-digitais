"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { portfolioProjects, portfolioSection } from "@/data/portfolio";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { PortfolioProject } from "@/types";

const categoryColors: Record<string, string> = {
  "Clínica Odontológica": "from-sky-500 to-blue-600",
  "Escritório de Advocacia": "from-slate-600 to-zinc-800",
  Psicologia: "from-emerald-500 to-teal-600",
  Barbearia: "from-amber-500 to-orange-600",
  Academia: "from-red-500 to-orange-500",
  Contabilidade: "from-indigo-500 to-blue-600",
};

function PortfolioCard({
  project,
  enableHover = true,
}: {
  project: PortfolioProject;
  enableHover?: boolean;
}) {
  return (
    <motion.article
      whileHover={enableHover ? { y: -6 } : undefined}
      transition={{ duration: 0.3 }}
      className="group volpe-card overflow-hidden transition-colors hover:border-volpe-primary/40"
    >
      <div
        className={`relative flex h-48 items-center justify-center bg-gradient-to-br ${categoryColors[project.category] ?? "from-volpe-primary to-volpe-secondary"}`}
      >
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15)_0%,transparent_50%)]"
          aria-hidden="true"
        />
        <span className="relative font-display text-4xl font-extrabold text-white/20">
          {project.name.split(" ")[0]}
        </span>
        <span className="absolute top-4 left-4 rounded-full bg-black/40 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
          {project.category}
        </span>
      </div>
      <div className="p-6">
        <h3 className="font-display text-lg font-bold text-white">
          {project.name}
        </h3>
        <p className="mt-1 text-sm text-volpe-text-secondary">
          {project.category}
        </p>
        <Button
          href={project.href}
          variant="ghost"
          showArrow
          className="mt-4 px-0 py-0 text-sm hover:bg-transparent"
          ariaLabel={`Ver projeto ${project.name}`}
        >
          Ver Projeto
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

        <div className="mt-16 hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">
          {portfolioProjects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.08}>
              <PortfolioCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
