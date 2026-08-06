import whiteLogoSvg from "./ui/svg-logos-test/mbh-hvit.svg";
import blueLogoSvg from "./ui/svg-logos-test/mbh-blaa.svg";
import bigDarkSvg from "./ui/svg-logos-test/big-dark.svg";
import smallBlackSvg from "./ui/svg-logos-test/small-black.svg";
import midSmallLightSvg from "./ui/svg-logos-test/mid-small-light.svg";

interface LogoProps {
  variant?: "full" | "mark" | "wordmark";
  theme?: "dark" | "light" | "crimson";
  size?: "sm" | "md" | "lg" | "xl" | number;
  className?: string;
  color?: string;
}

const sizeMap = {
  sm: 24,
  md: 40,
  lg: 56,
  xl: 80,
};

export function getLogoAsset(
  variant: "full" | "mark" | "wordmark" = "full",
  theme: "dark" | "light" | "crimson" = "dark",
  size: "sm" | "md" | "lg" | "xl" | number = "md"
): string {
  if (variant === "mark") {
    return theme === "light" ? blueLogoSvg : whiteLogoSvg;
  }

  if (variant === "wordmark") {
    return theme === "light" ? midSmallLightSvg : whiteLogoSvg;
  }

  // Full logo
  if (size === "sm" || size === "md") return smallBlackSvg;
  return bigDarkSvg;
}

export function MBHMark({
  theme = "dark",
  className = "",
  size = "md",
  color,
}: Omit<LogoProps, "variant"> = {}) {
  const src = getLogoAsset("mark", theme, size);
  const px = typeof size === "number" ? size : sizeMap[size ?? "md"];
  const fillColor = color ?? (theme === "light" ? "#faf6f1" : "#10464e");
  const strokeColor = color ?? (theme === "light" ? "#10464e" : "#faf6f1");

  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: px, height: px }}
      className={className}
    >
      <polygon
        points="50,10 90,30 90,70 50,90 10,70 10,30"
        fill={theme === "light" ? "#faf6f1" : "#10464e"}
        stroke={theme === "light" ? "#10464e" : "#faf6f1"}
        strokeWidth="2"
      />
    </svg>
  );
}

export function MBHLogo({
  variant = "full",
  theme = "dark",
  size = "md",
  className = "",
}: LogoProps = {}) {
  const src = getLogoAsset(variant, theme, size);
  const px = typeof size === "number" ? size : sizeMap[size ?? "md"];

  return (
    <img
      src={src}
      alt={`MB Hydraulikk ${variant} logo`}
      style={{ maxWidth: "100%", maxHeight: px, width: "auto", height: "auto" }}
      className={className}
    />
  );
}

export default MBHLogo;