export function HeroCircuitBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,107,0,0.9) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-volpe-primary/8 blur-[120px]" />
      <div className="absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full bg-volpe-primary-deep/6 blur-[100px]" />

      <svg
        className="absolute top-0 right-0 h-full w-[65%] opacity-20 lg:w-[55%]"
        viewBox="0 0 600 800"
        fill="none"
        preserveAspectRatio="xMaxYMid slice"
      >
        <path
          d="M0 400 H80 L120 360 H220 L260 440 H400 L440 400 H600"
          stroke="url(#hero-circuit-1)"
          strokeWidth="1.5"
        />
        <path
          d="M40 520 H140 L180 480 H320 L360 540 H520"
          stroke="url(#hero-circuit-1)"
          strokeWidth="1"
        />
        <path
          d="M100 280 H200 L240 240 H380 L420 300 H560"
          stroke="url(#hero-circuit-1)"
          strokeWidth="1"
        />
        <circle
          cx="300"
          cy="400"
          r="200"
          stroke="url(#hero-circuit-1)"
          strokeWidth="1"
          strokeDasharray="6 12"
        />
        <circle cx="80" cy="400" r="3" fill="#FF6B00" opacity="0.5" />
        <circle cx="220" cy="360" r="2.5" fill="#FF8A00" opacity="0.45" />
        <circle cx="400" cy="440" r="2.5" fill="#FFB347" opacity="0.45" />
        <rect x="76" y="396" width="6" height="6" rx="1" fill="#FF6B00" opacity="0.4" />
        <rect x="216" y="356" width="5" height="5" rx="1" fill="#FF8A00" opacity="0.35" />
        <defs>
          <linearGradient id="hero-circuit-1" x1="0" y1="0" x2="600" y2="800">
            <stop stopColor="#FF6B00" stopOpacity="0.6" />
            <stop offset="0.5" stopColor="#E85D00" stopOpacity="0.35" />
            <stop offset="1" stopColor="#FFB347" stopOpacity="0.08" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
