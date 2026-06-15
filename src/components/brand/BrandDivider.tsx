import { cn } from "@/lib/utils";

interface BrandDividerProps {
  children: React.ReactNode;
  className?: string;
  lineClassName?: string;
  dark?: boolean;
}

export function BrandDivider({
  children,
  className,
  lineClassName,
  dark = true,
}: BrandDividerProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-3 sm:gap-4",
        className,
      )}
    >
      <span
        className={cn(
          "h-px w-6 bg-volpe-primary/60 sm:w-10",
          lineClassName,
        )}
        aria-hidden="true"
      />
      <span
        className={cn(
          "text-xs font-semibold uppercase tracking-[0.2em] text-volpe-primary",
          !dark && "text-volpe-primary",
        )}
      >
        {children}
      </span>
      <span
        className={cn(
          "h-px w-6 bg-volpe-primary/60 sm:w-10",
          lineClassName,
        )}
        aria-hidden="true"
      />
    </div>
  );
}
