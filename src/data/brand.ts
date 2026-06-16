export const brandIdentity = {
  name: "Volpe",
  fullName: "Volpe Soluções Digitais",
  tagline: "Soluções Digitais",
  servicesLine: "Sites Institucionais • Credibilidade • Resultados",
  meaning:
    "Volpe significa raposa em italiano — símbolo de inteligência, estratégia, agilidade e soluções eficientes.",
  centralMessage: "Seu negócio merece uma presença digital profissional.",
  secondaryMessages: [
    "Seu site pronto em poucos dias.",
    "Mais credibilidade para sua empresa.",
    "Design moderno e responsivo.",
    "Sites institucionais profissionais.",
    "Transformamos visitantes em clientes.",
  ],
  tone: ["Claro", "Direto", "Profissional", "Moderno", "Confiante"],
  positioning:
    "Empresa especializada em sites institucionais para pequenas empresas e profissionais autônomos.",
  colors: {
    primary: "#FF6B00",
    primaryDeep: "#E85D00",
    secondary: "#FF8A00",
    accent: "#FFB347",
    black: "#050505",
    blackSecondary: "#0D1117",
    grayDark: "#161B22",
    grayMedium: "#30363D",
    white: "#FFFFFF",
    textSecondary: "#C9D1D9",
    textMuted: "#8B949E",
    surfaceLight: "#F8F9FA",
  },
  gradients: {
    primary: "linear-gradient(135deg, #FF6B00 0%, #E85D00 50%, #FFB347 100%)",
    primaryButton: "linear-gradient(90deg, #FF6B00 0%, #E85D00 55%, #FF8A00 100%)",
    glow: "radial-gradient(ellipse at center, rgba(255,107,0,0.18) 0%, transparent 70%)",
  },
  typography: {
    display: "Poppins",
    body: "Inter",
    badgeTracking: "0.2em",
    taglineTracking: "0.14em",
  },
  shapes: {
    buttonRadius: "9999px",
    cardRadius: "1rem",
    iconRadius: "0.75rem",
  },
  effects: {
    glowOrange: "0 0 30px rgba(255, 107, 0, 0.25)",
    glowOrangeLg: "0 0 50px rgba(255, 107, 0, 0.35)",
    cardBorder: "rgba(255, 107, 0, 0.25)",
  },
} as const;

export const brandAssets = {
  logo: "/images/volpe-logo.png",
  logoTransparent: "/images/volpe-logo-transparent.png",
  logoFull: "/images/volpe-logo-transparent.png",
  logoCompact: "/images/volpe-logo-transparent.png",
  logoIcon: "/images/volpe-logo-icon.png",
  foxIcon: "/images/volpe-logo-icon.png",
  foxHero: "/images/volpe-fox-hero.png",
  foxHeroTransparent: "/images/volpe-fox-hero-transparent.png",
  fox: "/images/volpe-fox-hero-transparent.png",
  favicon: "/images/volpe-logo-icon.png",
  ogImage: "/images/volpe-logo-transparent.png",
  aboutIllustration: "/images/volpe-about-fox-transparent.png",
} as const;
