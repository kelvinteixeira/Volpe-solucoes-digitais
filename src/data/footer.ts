import type { FooterLinkGroup, SocialLink } from "@/types";

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    title: "Navegação",
    links: [
      { label: "Início", href: "#inicio" },
      { label: "Soluções", href: "#solucoes" },
      { label: "Portfólio", href: "#portfolio" },
      { label: "Como Funciona", href: "#como-funciona" },
    ],
  },
  {
    title: "Serviços",
    links: [
      { label: "Sites Institucionais", href: "#solucoes" },
      { label: "Sites para Clínicas", href: "#solucoes" },
      { label: "Sites para Advogados", href: "#solucoes" },
      { label: "Sites para Autônomos", href: "#solucoes" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Sobre nós", href: "#sobre" },
      { label: "Depoimentos", href: "#depoimentos" },
      { label: "Contato", href: "#contato" },
      { label: "Solicitar Orçamento", href: "#contato" },
    ],
  },
];

export const socialLinks: SocialLink[] = [
  {
    label: "Instagram",
    href: "https://instagram.com/volpesolucoesdigitais",
    icon: "instagram",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/volpesolucoesdigitais",
    icon: "linkedin",
  },
  {
    label: "WhatsApp",
    href: "whatsapp",
    icon: "whatsapp",
  },
  {
    label: "E-mail",
    href: "mailto:contato@volpesolucoesdigitais.com.br",
    icon: "mail",
  },
];
