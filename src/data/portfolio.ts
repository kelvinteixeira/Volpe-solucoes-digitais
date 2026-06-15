import type { PortfolioProject } from "@/types";

export const portfolioSection = {
  badge: "Portfólio",
  title: "Projetos que geram resultados",
  subtitle:
    "Conheça alguns dos sites que desenvolvemos para profissionais e empresas de diversos segmentos.",
};

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "odontologia-sorriso",
    name: "Clínica Sorriso Premium",
    category: "Clínica Odontológica",
    image: "/images/portfolio/dental.jpg",
    gradient: "from-orange-500/20 via-amber-500/10 to-transparent",
    href: "#contato",
  },
  {
    id: "advocacia-silva",
    name: "Silva & Associados Advocacia",
    category: "Escritório de Advocacia",
    image: "/images/portfolio/law.jpg",
    gradient: "from-slate-500/20 via-zinc-500/10 to-transparent",
    href: "#contato",
  },
  {
    id: "psicologia-renovar",
    name: "Espaço Renovar Psicologia",
    category: "Psicologia",
    image: "/images/portfolio/psychology.jpg",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    href: "#contato",
  },
  {
    id: "barbearia-elite",
    name: "Barbearia Elite",
    category: "Barbearia",
    image: "/images/portfolio/barber.jpg",
    gradient: "from-amber-600/20 via-orange-600/10 to-transparent",
    href: "#contato",
  },
  {
    id: "academia-force",
    name: "Academia Force Fit",
    category: "Academia",
    image: "/images/portfolio/gym.jpg",
    gradient: "from-red-500/20 via-orange-500/10 to-transparent",
    href: "#contato",
  },
  {
    id: "contabilidade-prime",
    name: "Prime Contabilidade",
    category: "Contabilidade",
    image: "/images/portfolio/accounting.jpg",
    gradient: "from-blue-500/20 via-indigo-500/10 to-transparent",
    href: "#contato",
  },
];
