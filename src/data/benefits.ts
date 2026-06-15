import { Globe, Rocket, Sparkles, Target } from "lucide-react";
import type { Benefit } from "@/types";

export const benefitsSection = {
  badge: "Por que a Volpe",
  title: "O que você ganha",
  subtitle:
    "Um site pensado para apresentar seu negócio e transformar visitas em contatos.",
};

export const benefits: Benefit[] = [
  {
    title: "Entrega em poucos dias",
    description:
      "Briefing objetivo, desenvolvimento ágil e publicação sem burocracia.",
    icon: Rocket,
  },
  {
    title: "Design moderno e responsivo",
    description:
      "Layout atual, otimizado para celular, tablet e desktop.",
    icon: Globe,
  },
  {
    title: "Estrutura que converte",
    description:
      "Seções e CTAs pensados para gerar contatos pelo WhatsApp e formulário.",
    icon: Target,
  },
  {
    title: "Investimento acessível",
    description:
      "Qualidade profissional sem o custo de agências tradicionais.",
    icon: Sparkles,
  },
];
