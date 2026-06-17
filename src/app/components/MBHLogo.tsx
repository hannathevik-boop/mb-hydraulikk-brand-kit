import React from "react";
import bigBlack from "./ui/svg-logos-test/big-black.svg";
import bigDark from "./ui/svg-logos-test/big-dark.svg";
import bigLight from "./ui/svg-logos-test/big-light.svg";
import mbDark from "./ui/svg-logos-test/mb-dark.svg";
import mbLight from "./ui/svg-logos-test/mb-light.svg";
import smallBlack from "./ui/svg-logos-test/small-black.svg";
import smallDark from "./ui/svg-logos-test/small-dark.svg";
import smallLight from "./ui/svg-logos-test/small-light.svg";
import midSmallDark from "./ui/svg-logos-test/mid-small-dark.svg";
import midSmallLight from "./ui/svg-logos-test/mid-small-light.svg";

interface LogoProps {
  variant?: "full" | "mark" | "wordmark";
  theme?: "dark" | "light" | "crimson";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const sizeMap: Record<NonNullable<LogoProps["size"]>, number> = {
  sm: 24,
  md: 40,
  lg: 56,
  xl: 80,
};

function getLogoAsset(
  variant: LogoProps["variant"],
  theme: LogoProps["theme"],
  size: LogoProps["size"],
) {
  if (variant === "mark") {
    if (theme === "light") return smallLight;
    if (theme === "crimson") return smallBlack;
    return smallDark;
  }

  if (variant === "wordmark") {
    if (theme === "light") return mbLight;
    return mbDark;
  }

  if (size === "sm") {
    if (theme === "light") return smallLight;
    if (theme === "crimson") return smallBlack;
    return smallDark;
  }

  if (size === "md") {
    if (theme === "light") return midSmallLight;
    return midSmallDark;
  }

  if (theme === "light") return bigLight;
  if (theme === "crimson") return bigBlack;
  return bigDark;
}

export function MBHMark({
  color = "#10464e",
  size = 48,
  className,
}: {
  color?: string;
  size?: number;
  className?: string;
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" className={className}>
      <polygon points="40,4 72,22 72,58 40,76 8,58 8,22" fill={color} />
      <path
        d="M18 40 Q25 32 32 40 Q39 48 46 40 Q53 32 62 40"
        stroke="#faf6f1"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M22 50 Q29 43 36 50 Q43 57 50 50 Q57 43 60 47"
        stroke="#faf6f1"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
      <line x1="40" y1="14" x2="40" y2="30" stroke="#641919" strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  );
}

export function MBHLogo({
  variant = "full",
  theme = "light",
  size = "md",
  className = "",
}: LogoProps) {
  const src = getLogoAsset(variant, theme, size);
  const height = sizeMap[size];

  return <img src={src} alt="MB Hydraulikk logo" className={className} style={{ height, width: "auto", display: "block" }} />;
}

export default MBHLogo;
