import type { Testimonial } from "@/types";

export const testimonialsSection = {
  badge: "Depoimentos",
  title: "Quem confiou na Volpe",
  subtitle:
    "Clientes reais que fortaleceram a presença digital do negócio com a Volpe.",
};

export const testimonials: Testimonial[] = [
  {
    id: "jv-advocacia",
    name: "João Vitor Barbosa",
    role: "Advogado",
    company: "JV Sousa Advocacia",
    content:
      "Precisava de um site que transmitisse seriedade e explicasse minhas áreas de atuação de forma clara. A Volpe entregou exatamente isso — hoje os clientes chegam já conhecendo meu trabalho.",
    rating: 5,
    avatar: "JB",
  },
  {
    id: "barbearia-prata",
    name: "Vitor Cavalcante",
    role: "Proprietário",
    company: "Barbearia Prata",
    content:
      "O site ficou no nível da barbearia: elegante, funciona perfeitamente no celular e facilita muito o agendamento. Recebo elogios dos clientes toda semana.",
    rating: 5,
    avatar: "VC",
  },
  {
    id: "lumina-odontologia",
    name: "Flavia Brandão",
    role: "Dentista",
    company: "Lumina Odontologia",
    content:
      "Queríamos passar confiança e modernidade desde o primeiro clique. O resultado superou a expectativa — pacientes comentam o quanto o site transmite profissionalismo.",
    rating: 5,
    avatar: "FB",
  },
];
