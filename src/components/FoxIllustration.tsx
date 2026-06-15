"use client";

import { motion } from "framer-motion";
import { BarChart3, Bot, Code2 } from "lucide-react";
import Image from "next/image";
import { brandAssets } from "@/data/brand";

const floatingIcons = [
  { Icon: Code2, className: "right-[2%] top-[12%]", delay: 0 },
  { Icon: Bot, className: "right-[0%] top-[42%]", delay: 0.2 },
  { Icon: BarChart3, className: "right-[4%] bottom-[18%]", delay: 0.4 },
];

export function FoxIllustration() {
  return (
    <div className="relative flex w-full min-h-[320px] items-center justify-center lg:min-h-[520px] lg:justify-end">
      {/* Glow central */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-volpe-primary/15 blur-[100px]"
        aria-hidden="true"
      />

      {/* Arco circular — estilo logo */}
      <svg
        className="pointer-events-none absolute top-1/2 left-1/2 h-[85%] w-[85%] -translate-x-1/2 -translate-y-1/2 opacity-60"
        viewBox="0 0 500 500"
        fill="none"
        aria-hidden="true"
      >
        <circle
          cx="250"
          cy="250"
          r="200"
          stroke="url(#fox-arc)"
          strokeWidth="2"
          strokeDasharray="420 840"
          strokeLinecap="round"
          transform="rotate(-30 250 250)"
        />
        <defs>
          <linearGradient id="fox-arc" x1="0" y1="0" x2="500" y2="500">
            <stop stopColor="#FF6B00" stopOpacity="0.9" />
            <stop offset="1" stopColor="#FFB347" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>

      {/* Circuitos */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-30"
        viewBox="0 0 500 500"
        fill="none"
        aria-hidden="true"
      >
        <motion.path
          d="M20 250 H120 L160 210 H280 L320 290 H480"
          stroke="url(#fox-circuit)"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <motion.path
          d="M60 340 H160 L200 300 H340 L380 360 H480"
          stroke="url(#fox-circuit)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.5, ease: "easeInOut", delay: 0.3 }}
        />
        <circle cx="120" cy="210" r="3" fill="#FF6B00" opacity="0.6" />
        <circle cx="320" cy="290" r="3" fill="#FF8A00" opacity="0.5" />
        <circle cx="200" cy="300" r="2" fill="#FFB347" opacity="0.5" />
        <defs>
          <linearGradient id="fox-circuit" x1="0" y1="0" x2="500" y2="500">
            <stop stopColor="#FF6B00" stopOpacity="0.8" />
            <stop offset="1" stopColor="#FFB347" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>

      {/* Raposa — fundo preto integrado */}
      <motion.div
        className="relative z-10 w-full"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src={brandAssets.foxHero}
          alt="Volpe — raposa geométrica representando inteligência e agilidade digital"
          width={1200}
          height={1200}
          className="mx-auto h-auto w-full max-w-[400px] mix-blend-normal sm:max-w-[480px] md:max-w-[560px] lg:mx-0 lg:max-w-[640px] xl:max-w-[760px]"
          priority
        />
      </motion.div>

      {/* Ícones flutuantes — lado direito, caixas quadradas */}
      {floatingIcons.map(({ Icon, className, delay }) => (
        <motion.div
          key={className}
          className={`absolute ${className} z-20 flex h-12 w-12 items-center justify-center rounded-md border border-volpe-primary/50 bg-volpe-black/80 shadow-glow-orange sm:h-14 sm:w-14`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
          transition={{
            opacity: { delay: 0.6 + delay, duration: 0.5 },
            scale: { delay: 0.6 + delay, duration: 0.5 },
            y: { delay: 1.2 + delay, duration: 3, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <Icon className="h-5 w-5 text-volpe-primary sm:h-6 sm:w-6" aria-hidden="true" />
        </motion.div>
      ))}
    </div>
  );
}
