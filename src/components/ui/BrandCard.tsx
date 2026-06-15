import { BrandPixels } from "@/components/brand/BrandPixels";
import { cn } from "@/lib/utils";

interface BrandCardProps {
  children: React.ReactNode;
  className?: string;
  showPixels?: boolean;
  hover?: boolean;
}

export function BrandCard({
  children,
  className,
  showPixels = true,
  hover = true,
}: BrandCardProps) {
  return (
    <div
      className={cn(
        "volpe-card relative overflow-hidden p-6 sm:p-8",
        hover && "transition-all duration-300",
        className,
      )}
    >
      {showPixels && (
        <BrandPixels
          size="sm"
          className="pointer-events-none absolute top-3 right-3 opacity-60"
        />
      )}
      {children}
    </div>
  );
}
