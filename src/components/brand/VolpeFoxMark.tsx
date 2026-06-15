import { cn } from "@/lib/utils";

interface VolpeFoxMarkProps {
  className?: string;
  size?: number;
}

export function VolpeFoxMark({ className, size = 44 }: VolpeFoxMarkProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="volpe-fox-grad" x1="8" y1="4" x2="56" y2="60">
          <stop stopColor="#FF6B00" />
          <stop offset="0.5" stopColor="#FF8A00" />
          <stop offset="1" stopColor="#FFB347" />
        </linearGradient>
        <linearGradient id="volpe-fox-shine" x1="20" y1="8" x2="44" y2="32">
          <stop stopColor="#FFFFFF" stopOpacity="0.35" />
          <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Ear left */}
      <path
        d="M12 28 L22 6 L30 24 Z"
        fill="url(#volpe-fox-grad)"
      />
      {/* Ear right */}
      <path
        d="M34 24 L42 6 L52 28 Z"
        fill="url(#volpe-fox-grad)"
      />
      {/* Head */}
      <path
        d="M10 30 C10 22 18 16 32 16 C46 16 54 22 54 30 C54 38 48 46 38 50 L32 58 L26 50 C16 46 10 38 10 30 Z"
        fill="url(#volpe-fox-grad)"
      />
      {/* Snout highlight */}
      <path
        d="M24 34 C24 30 28 28 32 28 C36 28 40 30 40 34 C40 38 36 42 32 42 C28 42 24 38 24 34 Z"
        fill="url(#volpe-fox-shine)"
      />
      {/* Eye */}
      <circle cx="40" cy="30" r="3.5" fill="#050505" />
      <circle cx="41" cy="29" r="1" fill="#FFFFFF" opacity="0.8" />
      {/* Nose */}
      <path
        d="M30 38 L32 41 L34 38 Z"
        fill="#050505"
        opacity="0.7"
      />
      {/* Tech accent line */}
      <path
        d="M6 48 H14 M50 48 H58"
        stroke="#FF6B00"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  );
}
