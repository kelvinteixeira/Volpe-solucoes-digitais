import type { Metadata } from "next";
import { brandAssets, brandIdentity } from "@/data/brand";
import { siteConfig } from "@/data/site.config";

export function createMetadata(): Metadata {
  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: `${siteConfig.name} | ${brandIdentity.centralMessage}`,
      template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: siteConfig.keywords,
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    icons: {
      icon: [
        { url: "/icon.png", type: "image/png", sizes: "512x512" },
        { url: "/favicon.png", type: "image/png", sizes: "32x32" },
      ],
      apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: siteConfig.url,
      siteName: siteConfig.name,
      title: `${siteConfig.name} | ${brandIdentity.centralMessage}`,
      description: siteConfig.description,
      images: [
        {
          url: brandAssets.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${siteConfig.name} | ${brandIdentity.centralMessage}`,
      description: siteConfig.description,
      images: [brandAssets.ogImage],
    },
    alternates: {
      canonical: siteConfig.url,
    },
  };
}

export function createJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    areaServed: "BR",
    serviceType: "Sites Institucionais",
    sameAs: [
      "https://instagram.com/volpesolucoesdigitais",
      "https://linkedin.com/company/volpesolucoesdigitais",
    ],
  };
}
