import { Handshake, MessageCircle, Target } from "lucide-react";

export const heroContent = {
  headline: "Seu negócio merece um",
  headlineHighlight: "site institucional",
  headlineEnd: "profissional.",
  subheadline:
    "Sites institucionais para empresas e profissionais autônomos — processo simples e investimento que cabe no seu bolso.",
  primaryCta: {
    label: "Quero meu site",
    href: "#contato",
  },
  secondaryCta: {
    label: "Ver soluções",
    href: "#solucoes",
  },
  features: [
    {
      title: "Orçamento gratuito",
      description: "Sem compromisso — entendemos sua necessidade antes de fechar.",
      icon: MessageCircle,
    },
    {
      title: "Acompanhamento total",
      description: "Do briefing à publicação, você nunca fica no escuro.",
      icon: Handshake,
    },
    {
      title: "Só site institucional",
      description: "Foco exclusivo no que o seu negócio precisa.",
      icon: Target,
    },
  ],
};
