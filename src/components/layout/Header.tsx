"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { headerCta, navigation } from "@/data/navigation";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/layout/Logo";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeId = useScrollSpy(navigation.map((item) => item.href));

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isScrolled
          ? "border-b border-volpe-gray-medium/30 bg-volpe-black/90 backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <Container as="nav" aria-label="Navegação principal">
        <div className="flex min-h-[6rem] items-center justify-between gap-4 py-2 lg:min-h-[8.5rem] lg:py-3">
          <Logo size="header" />

          {/* Desktop nav */}
          <ul className="hidden items-center gap-0.5 lg:flex">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors duration-200 xl:px-4",
                    activeId === item.href
                      ? "text-white"
                      : "text-volpe-text-secondary hover:text-white",
                  )}
                >
                  {item.label}
                  {activeId === item.href && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-volpe-primary"
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Button href={headerCta.href} showArrow size="sm">
              {headerCta.label}
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-volpe-gray-medium text-white transition-colors hover:border-volpe-primary/50 lg:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-volpe-gray-medium/30 bg-volpe-black/95 backdrop-blur-xl lg:hidden"
          >
            <Container className="py-6">
              <ul className="flex flex-col gap-1">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "block rounded-lg px-4 py-3 text-base font-medium transition-colors",
                        activeId === item.href
                          ? "bg-volpe-primary/10 text-volpe-primary"
                          : "text-volpe-text-secondary hover:bg-volpe-gray-dark hover:text-white",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button href={headerCta.href} showArrow className="w-full">
                  {headerCta.label}
                </Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
