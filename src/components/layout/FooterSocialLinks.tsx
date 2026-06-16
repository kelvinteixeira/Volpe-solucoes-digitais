"use client";

import { socialLinks } from "@/data/footer";
import { SocialIcon } from "@/components/ui/SocialIcon";

export function FooterSocialLinks() {
  return (
    <div className="flex items-center gap-4">
      {socialLinks.map((social) => (
        <div key={social.label} className="group relative">
          <span
            role="img"
            aria-label={`${social.label} — Em construção`}
            className="flex h-10 w-10 cursor-not-allowed items-center justify-center rounded-lg border border-volpe-gray-medium/40 text-volpe-text-secondary/45 opacity-60"
          >
            <SocialIcon icon={social.icon} className="h-4 w-4" />
          </span>
          <span
            role="tooltip"
            className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 whitespace-nowrap rounded-lg border border-volpe-gray-medium/50 bg-volpe-gray-dark px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100"
          >
            Em Construção
            <span
              className="absolute top-full left-1/2 -mt-px -translate-x-1/2 border-4 border-transparent border-t-volpe-gray-dark"
              aria-hidden="true"
            />
          </span>
        </div>
      ))}
    </div>
  );
}
