"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline" | "hero-outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  showArrow?: boolean;
  type?: "button" | "submit";
  external?: boolean;
  ariaLabel?: string;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-volpe-gradient-btn text-white shadow-glow-orange hover:shadow-glow-orange-lg border border-volpe-primary/40",
  secondary:
    "bg-volpe-gray-dark text-white border border-volpe-gray-medium hover:border-volpe-primary/50 hover:bg-volpe-black-secondary",
  ghost:
    "bg-transparent text-volpe-text-secondary border border-volpe-gray-medium hover:border-volpe-primary/50 hover:text-white",
  outline:
    "bg-transparent text-volpe-primary border border-volpe-primary/70 hover:bg-volpe-primary/10 hover:border-volpe-primary hover:shadow-glow-orange",
  "hero-outline":
    "bg-transparent text-white border border-white/35 hover:border-volpe-primary/70 hover:bg-volpe-primary/5",
};

const sizes: Record<ButtonSize, string> = {
  sm: "rounded-lg px-4 py-2 text-sm font-medium",
  md: "rounded-lg px-5 py-2.5 text-sm font-semibold",
  lg: "rounded-lg px-6 py-3.5 text-sm font-semibold",
};

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className,
  showArrow = false,
  type = "button",
  external = false,
  ariaLabel,
}: ButtonProps) {
  const classes = cn(
    "group inline-flex items-center justify-center gap-2 normal-case transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-volpe-primary focus-visible:ring-offset-2 focus-visible:ring-offset-volpe-black",
    variants[variant],
    sizes[size],
    className,
  );

  const content = (
    <>
      {children}
      {showArrow && (
        <ArrowRight
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      )}
    </>
  );

  if (href) {
    if (external) {
      return (
        <motion.a
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ariaLabel}
        >
          {content}
        </motion.a>
      );
    }

    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Link href={href} className={classes} aria-label={ariaLabel}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      type={type}
      onClick={onClick}
      className={classes}
      aria-label={ariaLabel}
    >
      {content}
    </motion.button>
  );
}
