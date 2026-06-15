import { Eye, FileText, Rocket, Upload } from "lucide-react";
import type { ProcessStep } from "@/types";

export const howItWorksSection = {
  badge: "Processo simples",
  title: "Seu site em 4 passos",
  subtitle:
    "Do primeiro contato à publicação, acompanhamos cada etapa para entregar um site que representa o seu negócio.",
};

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Briefing",
    description:
      "Entendemos seu negócio, público-alvo e objetivos para definir a estratégia ideal.",
    icon: FileText,
  },
  {
    step: 2,
    title: "Desenvolvimento",
    description:
      "Criamos o design e desenvolvemos seu site com foco em performance e conversão.",
    icon: Rocket,
  },
  {
    step: 3,
    title: "Revisão",
    description:
      "Você aprova cada detalhe. Ajustamos tudo até ficar exatamente como você imagina.",
    icon: Eye,
  },
  {
    step: 4,
    title: "Publicação",
    description:
      "Seu site vai ao ar otimizado, com suporte completo na entrega.",
    icon: Upload,
  },
];
