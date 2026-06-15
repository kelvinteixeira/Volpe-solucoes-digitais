export function InstitutionalSiteIllustration() {
  return (
    <svg
      viewBox="0 0 560 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="screen-grad" x1="0" y1="0" x2="560" y2="420">
          <stop stopColor="#FF6B00" stopOpacity="0.15" />
          <stop offset="1" stopColor="#FFB347" stopOpacity="0.05" />
        </linearGradient>
        <linearGradient id="fox-mini" x1="0" y1="0" x2="80" y2="80">
          <stop stopColor="#FF6B00" />
          <stop offset="1" stopColor="#E85D00" />
        </linearGradient>
      </defs>

      {/* Glow */}
      <ellipse cx="280" cy="210" rx="200" ry="160" fill="url(#screen-grad)" />

      {/* Laptop base */}
      <rect x="80" y="60" width="400" height="260" rx="12" fill="#161B22" stroke="#FF6B00" strokeOpacity="0.35" strokeWidth="1.5" />
      <rect x="96" y="76" width="368" height="210" rx="6" fill="#050505" />

      {/* Browser bar */}
      <rect x="96" y="76" width="368" height="28" rx="6" fill="#161B22" />
      <circle cx="112" cy="90" r="4" fill="#FF6B00" opacity="0.7" />
      <circle cx="126" cy="90" r="4" fill="#30363D" />
      <circle cx="140" cy="90" r="4" fill="#30363D" />
      <rect x="160" y="84" width="180" height="12" rx="6" fill="#0D1117" stroke="#30363D" strokeWidth="0.5" />

      {/* Site mockup content */}
      <rect x="112" y="120" width="140" height="12" rx="2" fill="#FF6B00" opacity="0.8" />
      <rect x="112" y="142" width="220" height="8" rx="2" fill="#30363D" />
      <rect x="112" y="156" width="190" height="8" rx="2" fill="#30363D" />
      <rect x="112" y="178" width="100" height="28" rx="6" fill="#FF6B00" opacity="0.9" />

      {/* Cards row */}
      <rect x="112" y="220" width="100" height="52" rx="6" fill="#161B22" stroke="#30363D" strokeWidth="0.8" />
      <rect x="224" y="220" width="100" height="52" rx="6" fill="#161B22" stroke="#30363D" strokeWidth="0.8" />
      <rect x="336" y="220" width="100" height="52" rx="6" fill="#161B22" stroke="#30363D" strokeWidth="0.8" />
      <rect x="124" y="232" width="60" height="6" rx="2" fill="#FF6B00" opacity="0.5" />
      <rect x="236" y="232" width="60" height="6" rx="2" fill="#FF6B00" opacity="0.5" />
      <rect x="348" y="232" width="60" height="6" rx="2" fill="#FF6B00" opacity="0.5" />

      {/* Laptop bottom */}
      <path d="M60 320 H500 L520 340 H40 Z" fill="#161B22" stroke="#30363D" strokeWidth="1" />

      {/* Phone */}
      <rect x="420" y="130" width="72" height="130" rx="10" fill="#161B22" stroke="#FF6B00" strokeOpacity="0.4" strokeWidth="1.2" />
      <rect x="430" y="142" width="52" height="96" rx="4" fill="#050505" />
      <rect x="438" y="152" width="36" height="6" rx="2" fill="#FF6B00" opacity="0.7" />
      <rect x="438" y="164" width="28" height="4" rx="1" fill="#30363D" />
      <rect x="438" y="178" width="36" height="20" rx="3" fill="#161B22" stroke="#30363D" strokeWidth="0.5" />

      {/* Mini fox mark */}
      <circle cx="72" cy="300" r="36" fill="#161B22" stroke="#FF6B00" strokeOpacity="0.45" strokeWidth="1.5" />
      <path d="M52 290 L58 268 L66 284 Z" fill="url(#fox-mini)" />
      <path d="M68 284 L76 268 L82 290 Z" fill="url(#fox-mini)" />
      <path d="M50 292 C50 278 58 272 68 272 C78 272 86 278 86 292 C86 302 80 310 72 316 L68 322 L64 316 C56 310 50 302 50 292 Z" fill="url(#fox-mini)" />

      {/* Circuit dots */}
      <rect x="24" y="180" width="6" height="6" rx="1" fill="#FF6B00" opacity="0.5" />
      <rect x="34" y="170" width="4" height="4" rx="1" fill="#FF6B00" opacity="0.35" />
      <rect x="520" y="200" width="5" height="5" rx="1" fill="#FF6B00" opacity="0.4" />
      <path d="M500 180 H540 M20 200 H50" stroke="#FF6B00" strokeOpacity="0.25" strokeWidth="1" />
    </svg>
  );
}
