import Image from "next/image";
import Link from "next/link";
import { brandAssets } from "@/data/brand";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "header" | "footer" | "sm" | "md" | "lg";
}

/** Proporção real da logo (1024×682) */
const LOGO_ASPECT = 1024 / 682;

const sizeMap = {
  header: { height: 112, className: "h-24 w-auto sm:h-28 lg:h-32" },
  footer: { height: 128, className: "h-28 w-auto sm:h-32" },
  sm: { height: 80, className: "h-20 w-auto" },
  md: { height: 96, className: "h-24 w-auto" },
  lg: { height: 112, className: "h-28 w-auto" },
} as const;

export function Logo({ className, size = "header" }: LogoProps) {
  const { height, className: sizeClass } = sizeMap[size];

  return (
    <Link
      href="#inicio"
      className={cn("inline-flex shrink-0 items-center", className)}
      aria-label="Volpe Soluções Digitais - Início"
    >
      <Image
        src={brandAssets.logoTransparent}
        alt="Volpe Soluções Digitais"
        width={Math.round(height * LOGO_ASPECT)}
        height={height}
        className={cn("max-w-none object-contain object-left", sizeClass)}
        priority
      />
    </Link>
  );
}
