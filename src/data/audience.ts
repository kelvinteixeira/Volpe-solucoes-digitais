import {
  Briefcase,
  Building2,
  Calculator,
  Dumbbell,
  HeartPulse,
  Home,
  Scale,
  Scissors,
  Stethoscope,
  User,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const audienceSection = {
  badge: "Público-alvo",
  title: "Feito para o seu segmento",
  subtitle:
    "Atendemos profissionais autônomos e pequenas empresas que precisam de presença digital profissional.",
};

export const targetAudience: { label: string; icon: LucideIcon }[] = [
  { label: "Advogados", icon: Scale },
  { label: "Dentistas", icon: Stethoscope },
  { label: "Psicólogos", icon: User },
  { label: "Contadores", icon: Calculator },
  { label: "Corretores", icon: Home },
  { label: "Clínicas", icon: HeartPulse },
  { label: "Academias", icon: Dumbbell },
  { label: "Barbearias", icon: Scissors },
  { label: "Pequenas empresas", icon: Building2 },
  { label: "Autônomos", icon: Briefcase },
];
