import { siteConfig } from "@/data/site.config";

export function getWhatsAppUrl(customMessage?: string): string {
  const message = encodeURIComponent(
    customMessage ?? siteConfig.whatsapp.message,
  );
  return `https://wa.me/${siteConfig.whatsapp.number}?text=${message}`;
}
