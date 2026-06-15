import { BrandDivider } from "@/components/brand/BrandDivider";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
  highlightWord?: string;
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
  dark = false,
  className,
  highlightWord,
}: SectionHeadingProps) {
  const titleParts = highlightWord
    ? title.split(highlightWord)
    : null;

  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {badge && (
        <div className={cn("mb-5", align === "center" && "flex justify-center")}>
          <BrandDivider dark={dark}>{badge}</BrandDivider>
        </div>
      )}
      <h2
        className={cn(
          "font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl",
          dark ? "text-white" : "text-volpe-black",
        )}
      >
        {titleParts ? (
          <>
            {titleParts[0]}
            <span className="text-volpe-primary">{highlightWord}</span>
            {titleParts[1]}
          </>
        ) : (
          title
        )}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            dark ? "text-volpe-text-secondary" : "text-volpe-text-muted",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
