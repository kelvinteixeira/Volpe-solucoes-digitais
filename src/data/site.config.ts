import type { SiteConfig } from "@/types";
import { brandIdentity } from "@/data/brand";

export const siteConfig: SiteConfig = {
  name: brandIdentity.fullName,
  tagline: brandIdentity.tagline,
  domain: "volpesolucoesdigitais.com.br",
  url: "https://volpesolucoesdigitais.com.br",
  description:
    "Criação de sites institucionais modernos, rápidos e profissionais para pequenas empresas e profissionais autônomos. Seu site pronto em poucos dias.",
  keywords: [
    "criação de sites",
    "sites institucionais",
    "sites para advogados",
    "sites para dentistas",
    "sites para psicólogos",
    "sites para clínicas",
    "sites para barbearias",
    "sites para academias",
    "desenvolvimento web",
    "Volpe Soluções Digitais",
  ],
  whatsapp: {
    number: "5583994187614",
    message:
      "Olá! Vim pelo site da Volpe Soluções Digitais e gostaria de solicitar um orçamento para site institucional.",
  },
  email: "contato@volpesolucoesdigitais.com.br",
  phone: "(83) 99418-7614",
  locale: "pt-BR",
};
