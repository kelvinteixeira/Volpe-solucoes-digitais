import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-volpe-primary/50 bg-transparent px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-volpe-primary",
        className,
      )}
    >
      {children}
    </span>
  );
}
