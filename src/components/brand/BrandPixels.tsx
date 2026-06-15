import { cn } from "@/lib/utils";

interface BrandPixelsProps {
  className?: string;
  size?: "sm" | "md";
}

const pixelSets = {
  sm: [
    { x: 0, y: 8, s: 4 },
    { x: 6, y: 0, s: 6 },
    { x: 14, y: 10, s: 4 },
    { x: 4, y: 16, s: 3 },
  ],
  md: [
    { x: 0, y: 12, s: 6 },
    { x: 10, y: 0, s: 9 },
    { x: 22, y: 14, s: 6 },
    { x: 6, y: 24, s: 5 },
    { x: 18, y: 28, s: 4 },
  ],
};

export function BrandPixels({ className, size = "sm" }: BrandPixelsProps) {
  const pixels = pixelSets[size];
  const dim = size === "sm" ? 24 : 36;

  return (
    <svg
      viewBox={`0 0 ${dim} ${dim}`}
      width={dim}
      height={dim}
      className={cn("shrink-0 opacity-80", className)}
      aria-hidden="true"
    >
      {pixels.map((p, i) => (
        <rect
          key={i}
          x={p.x}
          y={p.y}
          width={p.s}
          height={p.s}
          rx={1}
          fill="#FF6B00"
          opacity={0.5 + (i % 3) * 0.15}
        />
      ))}
    </svg>
  );
}
