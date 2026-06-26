import bigDarkSvg from "./ui/logos_test_2/mbh_stor_blaa.svg";
import bigLightSvg from "./ui/logos_test_2/mbh_stor_hvit.svg";
import mbDarkSvg from "./ui/logos_test_2/mbh_hvit.svg";
import mbLightSvg from "./ui/logos_test_2/mbh_bla.svg";
import smallDarkSvg from "./ui/logos_test_2/small_blaa.svg";
import smallLightSvg from "./ui/logos_test_2/small_hvit.svg";
import midSmallDarkSvg from "./ui/logos_test_2/mid_small_blue.svg";
import midSmallLightSvg from "./ui/logos_test_2/mid_small_hvit.svg";

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
    return theme === "dark" ? mbDarkSvg : mbLightSvg;
  }

  if (variant === "wordmark") {
    return theme === "light" ? mbLightSvg : mbDarkSvg;
  }

  // Full logo
  if (size === "sm" || size === "md") {
    return theme === "light"
      ? smallDarkSvg
      : theme === "crimson"
        ? smallLightSvg
        : smallLightSvg;
  }

  // lg and xl sizes
  return theme === "light"
    ? bigDarkSvg
    : theme === "crimson"
      ? bigLightSvg
      : bigLightSvg;
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