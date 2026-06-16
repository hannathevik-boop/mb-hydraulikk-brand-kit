import React from "react";

interface LogoProps {
  variant?: "full" | "mark" | "wordmark";
  theme?: "dark" | "light" | "crimson";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const sizes = {
  sm: { mark: 28, height: 28, fontSize: 14 },
  md: { mark: 40, height: 40, fontSize: 20 },
  lg: { mark: 56, height: 56, fontSize: 28 },
  xl: { mark: 80, height: 80, fontSize: 40 },
};

const themes = {
  dark: { bg: "#10464e", fg: "#faf6f1", accent: "#641919" },
  light: { bg: "#faf6f1", fg: "#10464e", accent: "#641919" },
  crimson: { bg: "#641919", fg: "#faf6f1", accent: "#b9bcac" },
};

export function MBHMark({ color = "#10464e", size = 48, className }: { color?: string; size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" className={className}>
      {/* Outer hexagon — industrial precision */}
      <polygon
        points="40,4 72,22 72,58 40,76 8,58 8,22"
        fill={color}
      />
      {/* Inner wave — maritime */}
      <path
        d="M18 40 Q25 32 32 40 Q39 48 46 40 Q53 32 62 40"
        stroke="#faf6f1"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Second wave */}
      <path
        d="M22 50 Q29 43 36 50 Q43 57 50 50 Q57 43 60 47"
        stroke="#faf6f1"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
      {/* Vertical line — piston / stability */}
      <line x1="40" y1="14" x2="40" y2="30" stroke="#641919" strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  );
}

export function MBHLogo({ variant = "full", theme = "light", size = "md", className }: LogoProps) {
  const s = sizes[size];
  const t = themes[theme];

  if (variant === "mark") {
    return <MBHMark color={t.fg} size={s.mark} className={className} />;
  }

  if (variant === "wordmark") {
    return (
      <div className={`flex items-center gap-0 ${className}`} style={{ height: s.height }}>
        <span
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 800,
            fontSize: s.fontSize,
            letterSpacing: "0.18em",
            color: t.fg,
            lineHeight: 1,
          }}
        >
          MB
        </span>
        <span
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 300,
            fontSize: s.fontSize * 0.55,
            letterSpacing: "0.24em",
            color: t.accent,
            lineHeight: 1,
            marginLeft: 6,
            alignSelf: "flex-end",
            paddingBottom: 2,
          }}
        >
          HYDRAULIKK
        </span>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <MBHMark color={t.fg === "#faf6f1" ? t.bg : t.fg} size={s.mark} />
      <div className="flex flex-col justify-center" style={{ gap: 1 }}>
        <span
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 800,
            fontSize: s.fontSize,
            letterSpacing: "0.18em",
            color: t.fg,
            lineHeight: 1,
          }}
        >
          MB
        </span>
        <span
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 300,
            fontSize: s.fontSize * 0.5,
            letterSpacing: "0.28em",
            color: t.accent,
            lineHeight: 1,
          }}
        >
          HYDRAULIKK
        </span>
      </div>
    </div>
  );
}
