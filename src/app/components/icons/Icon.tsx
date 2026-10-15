import React from "react";
import { ICON_DEFINITIONS, ICON_STROKE_WIDTH, type MbhIconName } from "./iconDefinitions";
import { DEFAULT_ICON_PALETTE, ICON_PALETTES, type IconPaletteName } from "./iconPalettes";

export type MbhIconProps = Omit<React.SVGProps<SVGSVGElement>, "name" | "width" | "height"> & {
  name: MbhIconName;
  palette?: IconPaletteName;
  size?: number | string;
  "aria-label"?: string;
};

export function MbhIcon({ name, palette = DEFAULT_ICON_PALETTE, size = 24, "aria-label": ariaLabel, ...rest }: MbhIconProps) {
  const def = ICON_DEFINITIONS[name];
  const colors = ICON_PALETTES[palette];
  const [primary, secondary] = def.fills;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke={colors.ink}
      strokeWidth={ICON_STROKE_WIDTH}
      strokeLinecap="round"
      strokeLinejoin="round"
      role={ariaLabel ? "img" : undefined}
      aria-label={ariaLabel}
      aria-hidden={ariaLabel ? undefined : true}
      {...rest}
    >
      <path d={primary} fill={colors.primary} stroke="none" />
      {secondary && <path d={secondary} fill={colors.secondary} stroke="none" />}
      {def.paths.map((d) => (
        <path d={d} key={d} />
      ))}
    </svg>
  );
}

export { type MbhIconName, type IconPaletteName };
