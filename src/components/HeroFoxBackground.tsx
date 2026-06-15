"use client";

import { motion } from "framer-motion";
import { BarChart3, Code2, Globe } from "lucide-react";
import Image from "next/image";
import { brandAssets } from "@/data/brand";

const floatingIcons = [
  { className: "right-[8%] top-[22%] lg:right-[12%] lg:top-[24%]", Icon: Code2, delay: 0 },
  { className: "right-[5%] top-[46%] lg:right-[8%] lg:top-[48%]", Icon: Globe, delay: 0.2 },
  { className: "right-[10%] top-[68%] lg:right-[14%] lg:top-[66%]", Icon: BarChart3, delay: 0.4 },
];

export function HeroFoxBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Grid sutil */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,107,0,0.9) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="absolute -top-40 -right-40 h-[700px] w-[700px] rounded-full bg-volpe-primary/10 blur-[140px]" />
      <div className="absolute top-1/2 right-0 h-[600px] w-[600px] -translate-y-1/2 translate-x-1/4 rounded-full bg-volpe-primary-deep/8 blur-[120px]" />

      {/* Máscara — texto legível à esquerda */}
      <div className="absolute inset-0 bg-gradient-to-r from-volpe-black from-35% via-volpe-black/70 via-55% to-transparent to-85% lg:from-40% lg:via-60% lg:to-90%" />

      {/* Circuitos */}
      <svg
        className="absolute top-0 right-0 h-full w-full opacity-[0.18] lg:w-[75%]"
        viewBox="0 0 600 800"
        fill="none"
        preserveAspectRatio="xMaxYMid slice"
      >
        <path
          d="M0 400 H80 L120 360 H220 L260 440 H400 L440 400 H600"
          stroke="url(#hero-circuit-bg)"
          strokeWidth="1.5"
        />
        <path
          d="M40 520 H140 L180 480 H320 L360 540 H520"
          stroke="url(#hero-circuit-bg)"
          strokeWidth="1"
        />
        <circle
          cx="380"
          cy="400"
          r="220"
          stroke="url(#hero-circuit-bg)"
          strokeWidth="1"
          strokeDasharray="6 12"
        />
        <defs>
          <linearGradient id="hero-circuit-bg" x1="0" y1="0" x2="600" y2="800">
            <stop stopColor="#FF6B00" stopOpacity="0.6" />
            <stop offset="1" stopColor="#FFB347" stopOpacity="0.08" />
          </linearGradient>
        </defs>
      </svg>

      {/* Raposa — parte do BG (-20% tamanho) */}
      <div className="absolute top-1/2 right-[-8%] h-[min(112vw,736px)] w-[min(112vw,736px)] -translate-y-1/2 sm:right-[-5%] sm:h-[min(96vw,800px)] sm:w-[min(96vw,800px)] lg:right-[-12%] lg:h-[min(72vw,1024px)] lg:w-[min(72vw,1024px)] xl:right-[-8%] xl:h-[1216px] xl:w-[1216px]">
        <motion.div
          className="relative h-full w-full"
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src={brandAssets.foxHeroTransparent}
            alt=""
            fill
            className="object-contain object-center opacity-[0.92]"
            sizes="(max-width: 1280px) 80vw, 1216px"
            priority
          />
        </motion.div>
      </div>

      {/* Ícones — integrados ao BG */}
      {floatingIcons.map(({ Icon, className, delay }) => (
        <motion.div
          key={className}
          className={`absolute ${className} z-[1] flex h-11 w-11 items-center justify-center rounded-md border border-volpe-primary/45 bg-volpe-black/50 shadow-glow-orange backdrop-blur-sm sm:h-12 sm:w-12 lg:h-14 lg:w-14`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, -8, 0] }}
          transition={{
            opacity: { delay: 0.5 + delay, duration: 0.6 },
            y: { delay: 1 + delay, duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <Icon className="h-5 w-5 text-volpe-primary lg:h-6 lg:w-6" />
        </motion.div>
      ))}
    </div>
  );
}
