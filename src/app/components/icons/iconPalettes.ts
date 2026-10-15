export const ICON_PALETTES = {
  bauxite: { label: "Bauxite mix", primary: "#a84f2e", secondary: "#f2b49d", ink: "#10464e", onDark: false },
  teal: { label: "Teal mix", primary: "#628086", secondary: "#b9ded9", ink: "#10464e", onDark: false },
  full: { label: "Fullfarge", primary: "#9ad8d1", secondary: "#a84f2e", ink: "#10464e", onDark: false },
  black: { label: "Svart", primary: "#171816", secondary: "#777872", ink: "#090a09", onDark: false },
  white: { label: "Hvit", primary: "#ffffff", secondary: "#d9d9d4", ink: "#ffffff", onDark: true },
} as const;

export type IconPaletteName = keyof typeof ICON_PALETTES;
export type IconPalette = (typeof ICON_PALETTES)[IconPaletteName];

export const ICON_PALETTE_NAMES = Object.keys(ICON_PALETTES) as IconPaletteName[];
export const DEFAULT_ICON_PALETTE: IconPaletteName = "teal";
