import React from "react";

interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
}

const base = (size: number, color: string, sw: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: color,
  strokeWidth: sw,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
});

export function IconAnchor({ size = 32, color = "#10464e", strokeWidth = 2, className }: IconProps) {
  return (
    <svg {...base(size, color, strokeWidth)} className={className}>
      <circle cx="24" cy="10" r="4" />
      <line x1="24" y1="14" x2="24" y2="40" />
      <path d="M10 20 Q10 38 24 40 Q38 38 38 20" />
      <line x1="14" y1="20" x2="34" y2="20" />
    </svg>
  );
}

export function IconValve({ size = 32, color = "#10464e", strokeWidth = 2, className }: IconProps) {
  return (
    <svg {...base(size, color, strokeWidth)} className={className}>
      <rect x="6" y="20" width="36" height="8" rx="1" />
      <polygon points="24,6 17,20 31,20" />
      <polygon points="24,42 17,28 31,28" />
      <line x1="24" y1="6" x2="24" y2="2" />
      <line x1="20" y1="2" x2="28" y2="2" />
    </svg>
  );
}

export function IconPiston({ size = 32, color = "#10464e", strokeWidth = 2, className }: IconProps) {
  return (
    <svg {...base(size, color, strokeWidth)} className={className}>
      <rect x="8" y="8" width="32" height="32" rx="2" />
      <rect x="14" y="14" width="20" height="20" rx="1" />
      <line x1="2" y1="24" x2="8" y2="24" />
      <line x1="40" y1="24" x2="46" y2="24" />
    </svg>
  );
}

export function IconPressureGauge({ size = 32, color = "#10464e", strokeWidth = 2, className }: IconProps) {
  return (
    <svg {...base(size, color, strokeWidth)} className={className}>
      <circle cx="24" cy="22" r="16" />
      <line x1="24" y1="38" x2="24" y2="44" />
      <line x1="18" y1="44" x2="30" y2="44" />
      <path d="M12 30 A14 14 0 0 1 36 30" />
      <line x1="24" y1="22" x2="32" y2="14" strokeWidth="2.5" />
      <circle cx="24" cy="22" r="2" fill={color} />
      <line x1="14" y1="14" x2="16" y2="16" />
      <line x1="34" y1="14" x2="32" y2="16" />
    </svg>
  );
}

export function IconPropeller({ size = 32, color = "#10464e", strokeWidth = 2, className }: IconProps) {
  return (
    <svg {...base(size, color, strokeWidth)} className={className}>
      <circle cx="24" cy="24" r="3" />
      <path d="M24 21 Q18 8 10 10 Q12 18 21 22" />
      <path d="M27 24 Q40 18 38 10 Q30 12 26 21" />
      <path d="M24 27 Q30 40 38 38 Q36 30 27 26" />
      <path d="M21 24 Q8 30 10 38 Q18 36 22 27" />
    </svg>
  );
}

export function IconWave({ size = 32, color = "#10464e", strokeWidth = 2, className }: IconProps) {
  return (
    <svg {...base(size, color, strokeWidth)} className={className}>
      <path d="M2 18 Q8 10 14 18 Q20 26 26 18 Q32 10 38 18 Q44 26 46 22" />
      <path d="M2 28 Q8 20 14 28 Q20 36 26 28 Q32 20 38 28 Q44 36 46 32" />
    </svg>
  );
}

export function IconShip({ size = 32, color = "#10464e", strokeWidth = 2, className }: IconProps) {
  return (
    <svg {...base(size, color, strokeWidth)} className={className}>
      <path d="M8 28 L4 36 Q24 42 44 36 L40 28 Z" />
      <rect x="14" y="16" width="20" height="12" />
      <rect x="18" y="8" width="12" height="8" />
      <line x1="24" y1="2" x2="24" y2="8" />
      <line x1="16" y1="20" x2="22" y2="20" />
      <line x1="26" y1="20" x2="32" y2="20" />
    </svg>
  );
}

export function IconBoat({ size = 32, color = "#10464e", strokeWidth = 2, className }: IconProps) {
  return (
    <svg {...base(size, color, strokeWidth)} className={className}>
      <path d="M6 30 C14 36 34 36 42 30 L38 26 H10 Z" />
      <path d="M10 26 L12 18 H24 L30 22 L34 18 H36 L38 26" />
      <path d="M12 30 H18 M22 30 H30" />
      <line x1="20" y1="18" x2="20" y2="10" />
      <line x1="28" y1="18" x2="28" y2="12" />
      <path d="M4 34 H44" />
    </svg>
  );
}

export function IconCrane({ size = 32, color = "#10464e", strokeWidth = 2, className }: IconProps) {
  return (
    <svg {...base(size, color, strokeWidth)} className={className}>
      <rect x="8" y="34" width="32" height="8" rx="2" />
      <line x1="16" y1="34" x2="16" y2="14" />
      <path d="M16 14 L34 10 L36 18" />
      <line x1="32" y1="12" x2="32" y2="26" />
      <line x1="20" y1="24" x2="30" y2="20" />
      <path d="M30 20 L34 24 L30 28" />
      <line x1="26" y1="26" x2="26" y2="38" />
      <path d="M22 34 L30 34" />
      <path d="M18 20 L28 24" strokeWidth="1.5" />
    </svg>
  );
}

export function IconWinch({ size = 32, color = "#10464e", strokeWidth = 2, className }: IconProps) {
  return (
    <svg {...base(size, color, strokeWidth)} className={className}>
      <circle cx="24" cy="24" r="10" />
      <path d="M24 14 V8" />
      <path d="M24 34 V40" />
      <path d="M14 24 H8" />
      <path d="M34 24 H40" />
      <path d="M18 18 L12 12" />
      <path d="M30 18 L36 12" />
      <path d="M18 30 L12 36" />
      <path d="M30 30 L36 36" />
    </svg>
  );
}

export function IconCompass({ size = 32, color = "#10464e", strokeWidth = 2, className }: IconProps) {
  return (
    <svg {...base(size, color, strokeWidth)} className={className}>
      <circle cx="24" cy="24" r="20" />
      <polygon points="24,8 27,24 24,28 21,24" fill={color} />
      <polygon points="24,40 21,24 24,20 27,24" fill={color} fillOpacity="0.35" />
      <circle cx="24" cy="24" r="2.5" fill="none" />
    </svg>
  );
}

export function IconChain({ size = 32, color = "#10464e", strokeWidth = 2, className }: IconProps) {
  return (
    <svg {...base(size, color, strokeWidth)} className={className}>
      <ellipse cx="14" cy="24" rx="6" ry="10" />
      <ellipse cx="34" cy="24" rx="6" ry="10" />
      <line x1="20" y1="24" x2="28" y2="24" />
      <ellipse cx="24" cy="14" rx="10" ry="6" />
      <ellipse cx="24" cy="34" rx="10" ry="6" />
    </svg>
  );
}

export function IconGear({ size = 32, color = "#10464e", strokeWidth = 2, className }: IconProps) {
  return (
    <svg {...base(size, color, strokeWidth)} className={className}>
      <circle cx="24" cy="24" r="8" />
      <path d="M24 4 L26 10 L22 10 Z M24 44 L22 38 L26 38 Z M4 24 L10 22 L10 26 Z M44 24 L38 26 L38 22 Z M8.3 8.3 L13.5 12.8 L10.6 15.7 Z M39.7 39.7 L34.5 35.2 L37.4 32.3 Z M39.7 8.3 L35.2 13.5 L32.3 10.6 Z M8.3 39.7 L12.8 34.5 L15.7 37.4 Z" fill={color} stroke="none" />
    </svg>
  );
}

export function IconPipe({ size = 32, color = "#10464e", strokeWidth = 2, className }: IconProps) {
  return (
    <svg {...base(size, color, strokeWidth)} className={className}>
      <rect x="4" y="18" width="40" height="12" rx="6" />
      <ellipse cx="4" cy="24" rx="2" ry="6" />
      <ellipse cx="44" cy="24" rx="2" ry="6" />
    </svg>
  );
}

export function IconHydraulic({ size = 32, color = "#10464e", strokeWidth = 2, className }: IconProps) {
  return (
    <svg {...base(size, color, strokeWidth)} className={className}>
      <rect x="6" y="6" width="16" height="28" rx="2" />
      <rect x="10" y="10" width="8" height="10" />
      <line x1="22" y1="20" x2="42" y2="20" />
      <line x1="42" y1="20" x2="42" y2="36" />
      <rect x="32" y="28" width="14" height="10" rx="1" />
      <line x1="14" y1="34" x2="14" y2="42" />
      <line x1="10" y1="42" x2="18" y2="42" />
    </svg>
  );
}

export function IconCylinder({ size = 32, color = "#10464e", strokeWidth = 2, className }: IconProps) {
  return (
    <svg {...base(size, color, strokeWidth)} className={className}>
      <rect x="8" y="14" width="28" height="16" rx="3" />
      <rect x="4" y="18" width="6" height="8" rx="2" />
      <rect x="38" y="18" width="6" height="8" rx="2" />
      <line x1="16" y1="22" x2="32" y2="22" strokeWidth="1.5" />
      <line x1="20" y1="14" x2="20" y2="8" />
      <line x1="28" y1="14" x2="28" y2="8" />
    </svg>
  );
}

export function IconPump({ size = 32, color = "#10464e", strokeWidth = 2, className }: IconProps) {
  return (
    <svg {...base(size, color, strokeWidth)} className={className}>
      <rect x="10" y="10" width="28" height="20" rx="4" />
      <circle cx="24" cy="20" r="6" />
      <path d="M16 14 L10 10" />
      <path d="M32 14 L38 10" />
      <path d="M16 26 L10 30" />
      <path d="M32 26 L38 30" />
      <line x1="24" y1="26" x2="24" y2="34" />
    </svg>
  );
}

export function IconBuoy({ size = 32, color = "#10464e", strokeWidth = 2, className }: IconProps) {
  return (
    <svg {...base(size, color, strokeWidth)} className={className}>
      <circle cx="24" cy="20" r="14" />
      <line x1="24" y1="34" x2="24" y2="44" />
      <line x1="20" y1="44" x2="28" y2="44" />
      <line x1="10" y1="20" x2="38" y2="20" />
      <path d="M14 10 Q24 4 34 10" />
    </svg>
  );
}

export function IconWrench({ size = 32, color = "#10464e", strokeWidth = 2, className }: IconProps) {
  return (
    <svg {...base(size, color, strokeWidth)} className={className}>
      <path d="M32 6 A10 10 0 0 1 42 16 A10 10 0 0 1 32 26 L32 22 A6 6 0 0 0 38 16 A6 6 0 0 0 32 10 Z" />
      <line x1="28" y1="22" x2="8" y2="42" strokeWidth="4" />
      <circle cx="8" cy="42" r="3" />
    </svg>
  );
}

export function IconOilDrop({ size = 32, color = "#10464e", strokeWidth = 2, className }: IconProps) {
  return (
    <svg {...base(size, color, strokeWidth)} className={className}>
      <path d="M24 6 Q34 18 34 28 A10 10 0 0 1 14 28 Q14 18 24 6 Z" />
      <path d="M18 30 Q18 24 24 22" strokeWidth="1.5" />
    </svg>
  );
}

export function IconShield({ size = 32, color = "#10464e", strokeWidth = 2, className }: IconProps) {
  return (
    <svg {...base(size, color, strokeWidth)} className={className}>
      <path d="M24 4 L40 10 L40 26 Q40 38 24 44 Q8 38 8 26 L8 10 Z" />
      <polyline points="16,24 22,30 32,18" />
    </svg>
  );
}

export function IconLightning({ size = 32, color = "#10464e", strokeWidth = 2, className }: IconProps) {
  return (
    <svg {...base(size, color, strokeWidth)} className={className}>
      <polyline points="24,2 14,18 20,18 14,42 34,24 28,24 32,2" fill={color} stroke="none" />
    </svg>
  );
}
