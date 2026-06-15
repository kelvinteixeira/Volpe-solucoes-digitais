"use client";

import { motion } from "framer-motion";
import { FileText, Rocket } from "lucide-react";

const iconProps = {
  strokeWidth: 1.5,
} as const;

const FALLING_PAPERS = [
  { delay: 0, offsetX: 0 },
  { delay: 0.55, offsetX: -2 },
  { delay: 1.1, offsetX: 2 },
];

export function FallingPaperIcon() {
  return (
    <div className="relative h-8 w-8 overflow-hidden" aria-hidden="true">
      <FileText
        className="absolute bottom-0.5 left-1/2 h-4 w-4 -translate-x-1/2 text-volpe-primary/25"
        strokeWidth={iconProps.strokeWidth}
      />

      {FALLING_PAPERS.map((paper, index) => (
        <motion.div
          key={index}
          className="absolute left-1/2 top-0 -translate-x-1/2"
          animate={{
            y: [-4, 5],
            x: [paper.offsetX, 0],
            opacity: [0, 0.95, 0.95, 0],
            rotate: [-3, 0],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            delay: paper.delay,
            ease: [0.33, 0, 0.2, 1],
            times: [0, 0.18, 0.82, 1],
          }}
        >
          <FileText
            className="h-4 w-4 text-volpe-primary"
            strokeWidth={iconProps.strokeWidth}
          />
        </motion.div>
      ))}
    </div>
  );
}

export function FlyingRocketIcon() {
  return (
    <div
      className="relative flex h-8 w-8 items-center justify-center"
      aria-hidden="true"
    >
      <motion.div
        animate={{ y: [5, -7, 5] }}
        transition={{
          duration: 2.4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative"
      >
        <Rocket
          className="h-7 w-7 -rotate-45 text-volpe-primary"
          strokeWidth={iconProps.strokeWidth}
        />
        <motion.span
          className="absolute -bottom-1 left-1/2 block h-2.5 w-1 -translate-x-1/2 rounded-full bg-gradient-to-t from-volpe-primary/20 to-volpe-accent"
          animate={{ scaleY: [0.7, 1.15, 0.7], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 0.7, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "center top" }}
        />
      </motion.div>
    </div>
  );
}

export function LookingEyeIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className="h-8 w-8 text-volpe-primary"
      aria-hidden="true"
    >
      <path
        d="M5 16 C5 16 10.5 9 16 9 C21.5 9 27 16 27 16 C27 16 21.5 23 16 23 C10.5 23 5 16 5 16 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <motion.circle
        r="2.75"
        fill="currentColor"
        animate={{ cx: [12.5, 19.5, 12.5] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        cy={16}
      />
    </svg>
  );
}

export function RisingUploadIcon() {
  return (
    <div
      className="relative flex h-8 w-8 items-center justify-center"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-7 w-7 text-volpe-primary"
      >
        {/* Colchete/tray fixo embaixo */}
        <path
          d="M5 18H19"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>

      {/* Apenas a seta sobe */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-x-0 flex justify-center"
          animate={{ y: [6, -8] }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-7 w-7 text-volpe-primary"
          >
            <path
              d="M12 15V5M12 5L8 9M12 5L16 9"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </div>
    </div>
  );
}

const stepIconMap = {
  1: FallingPaperIcon,
  2: FlyingRocketIcon,
  3: LookingEyeIcon,
  4: RisingUploadIcon,
} as const;

export function ProcessStepIcon({ step }: { step: number }) {
  const Icon = stepIconMap[step as keyof typeof stepIconMap];
  if (!Icon) return null;
  return <Icon />;
}
