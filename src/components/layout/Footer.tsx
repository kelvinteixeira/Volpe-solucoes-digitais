import Link from "next/link";
import { footerLinkGroups, socialLinks } from "@/data/footer";
import { siteConfig } from "@/data/site.config";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { Container } from "@/components/ui/Container";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { Logo } from "@/components/layout/Logo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-volpe-gray-medium/30 bg-volpe-black-secondary">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo size="footer" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-volpe-text-secondary">
              {siteConfig.description}
            </p>
            <div className="mt-6 space-y-2 text-sm text-volpe-text-secondary">
              <p>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-volpe-primary"
                >
                  WhatsApp: {siteConfig.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors hover:text-volpe-primary"
                >
                  {siteConfig.email}
                </a>
              </p>
              <p>{siteConfig.address}</p>
            </div>
          </div>

          {footerLinkGroups.map((group) => (
            <div key={group.title}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-volpe-text-secondary transition-colors hover:text-volpe-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-volpe-gray-medium/30 pt-8 sm:flex-row">
          <p className="text-sm text-volpe-text-secondary">
            © {currentYear} {siteConfig.name}. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const href =
                social.href === "whatsapp"
                  ? getWhatsAppUrl()
                  : social.href;
              const isExternal =
                social.href.startsWith("http") || social.href === "whatsapp";

              return (
                <a
                  key={social.label}
                  href={href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-volpe-gray-medium/50 text-volpe-text-secondary transition-all hover:border-volpe-primary/50 hover:text-volpe-primary"
                  aria-label={social.label}
                >
                  <SocialIcon icon={social.icon} className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>
      </Container>
    </footer>
  );
}
