import type { PortfolioProject } from "@/types";

export const portfolioSection = {
  badge: "Portfólio",
  title: "Projetos que geram resultados",
  subtitle:
    "Sites institucionais reais desenvolvidos para negócios de diferentes segmentos.",
};

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "barbearia-prata",
    name: "Barbearia Prata",
    category: "Barbearia",
    description:
      "Site premium com apresentação dos serviços, equipe, galeria de trabalhos e agendamento online.",
    image: "/logo-barbearia-prata.png",
    href: "https://barbeariaprata.netlify.app",
    tags: ["Serviços", "Galeria", "Agendamento"],
    theme: "barber",
  },
  {
    id: "lumina-odontologia",
    name: "Lumina Odontologia",
    category: "Clínica Odontológica",
    description:
      "Site institucional para clínica odontológica com serviços, diferenciais, galeria e canal de contato.",
    image: "/logo-lumina.png",
    href: "https://consultorioluminaodonto.netlify.app",
    tags: ["Serviços", "Equipe", "Contato"],
    theme: "dental",
  },
  {
    id: "jv-advocacia",
    name: "JV Sousa Advocacia",
    category: "Escritório de Advocacia",
    description:
      "Site profissional para advogado com áreas de atuação, credenciais e formulário de contato.",
    image: "/logo-jv.png",
    href: "https://institucional-jv.netlify.app",
    tags: ["Áreas de atuação", "Credenciais", "WhatsApp"],
    theme: "legal",
  },
];
