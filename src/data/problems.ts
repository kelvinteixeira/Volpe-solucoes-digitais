import {
  AlertTriangle,
  MonitorX,
  Share2,
  TrendingDown,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const problemsSection = {
  badge: "O problema",
  title: "Sua empresa está perdendo oportunidades?",
  subtitle:
    "Sem um site profissional, muitos negócios deixam clientes escaparem para a concorrência.",
};

export const problems: { text: string; icon: LucideIcon }[] = [
  {
    text: "Dependem só do Instagram ou não têm site nenhum",
    icon: Share2,
  },
  {
    text: "Sites antigos e desatualizados que afastam quem visita",
    icon: MonitorX,
  },
  {
    text: "Presença digital que não passa seriedade",
    icon: AlertTriangle,
  },
  {
    text: "Contatos e vendas perdidos todos os dias",
    icon: TrendingDown,
  },
];

export const problemsSolution =
  "A Volpe cria seu site institucional com processo simples e entrega ágil.";
