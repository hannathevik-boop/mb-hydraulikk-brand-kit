import React from "react";
import { circleIconTransform, ICON_DEFINITIONS, ICON_STROKE_WIDTH, type MbhIconName } from "./iconDefinitions";
import { CIRCLE_PALETTE_COLORS, DEFAULT_ICON_PALETTE, ICON_PALETTES, type IconPaletteName } from "./iconPalettes";

export type IconVariant = "illustrated" | "circle";
export type MbhIconProps = Omit<React.SVGProps<SVGSVGElement>, "name" | "width" | "height"> & {
  name: MbhIconName;
  palette?: IconPaletteName;
  variant?: IconVariant;
  size?: number | string;
  "aria-label"?: string;
};

export function MbhIcon({ name, palette = DEFAULT_ICON_PALETTE, variant = "illustrated", size = 24, "aria-label": ariaLabel, ...rest }: MbhIconProps) {
  const def = ICON_DEFINITIONS[name];
  const colors = ICON_PALETTES[palette];
  const [primary, secondary] = def.fills;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={variant === "circle" ? "0 0 32 32" : "0 0 24 24"}
      width={size}
      height={size}
      fill="none"
      stroke={variant === "circle" ? CIRCLE_PALETTE_COLORS[palette] : colors.ink}
      strokeWidth={variant === "circle" ? 1 : ICON_STROKE_WIDTH}
      strokeLinecap="round"
      strokeLinejoin="round"
      role={ariaLabel ? "img" : undefined}
      aria-label={ariaLabel}
      aria-hidden={ariaLabel ? undefined : true}
      {...rest}
    >
      {variant === "circle" ? (
        <>
          <circle cx="16" cy="16" r="14" strokeWidth={1} />
          <g transform="translate(7 7) scale(.75)" strokeWidth={1.7}>
            <g transform={circleIconTransform(name)}>
              {def.paths.map((d) => <path d={d} key={d} />)}
            </g>
          </g>
        </>
      ) : (
        <>
          <path d={primary} fill={colors.primary} stroke="none" />
          {secondary && <path d={secondary} fill={colors.secondary} stroke="none" />}
          {def.paths.map((d) => <path d={d} key={d} />)}
        </>
      )}
    </svg>
  );
}

export { type MbhIconName, type IconPaletteName };
