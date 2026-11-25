import JSZip from "jszip";
import type { IconVariant } from "./Icon";
import { circleIconTransform, ICON_DEFINITIONS, ICON_LIST, ICON_STROKE_WIDTH, type MbhIconName } from "./iconDefinitions";
import { CIRCLE_PALETTE_COLORS, ICON_PALETTES, type IconPaletteName } from "./iconPalettes";

export const PNG_SIZE = 512;

export function paletteSlug(palette: IconPaletteName) {
  return ICON_PALETTES[palette].label.toLowerCase().replace(/ /g, "-");
}

/** Standalone SVG markup. Never includes a background, regardless of palette. */
export function iconToSvg(name: MbhIconName, palette: IconPaletteName, sizeOrVariant?: number | IconVariant, variant: IconVariant = "illustrated") {
  const def = ICON_DEFINITIONS[name];
  const colors = ICON_PALETTES[palette];
  const [primary, secondary] = def.fills;
  const size = typeof sizeOrVariant === "number" ? sizeOrVariant : undefined;
  variant = typeof sizeOrVariant === "string" ? sizeOrVariant : variant;
  const dims = size ? ` width="${size}" height="${size}"` : "";
  if (variant === "circle") {
    const paths = def.paths.map((d) => `      <path d="${d}" />`).join("\n");
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"${dims} fill="none" stroke="${CIRCLE_PALETTE_COLORS[palette]}" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">\n  <circle cx="16" cy="16" r="14" stroke-width="1" />\n  <g transform="translate(7 7) scale(.75)" stroke-width="1.7">\n    <g transform="${circleIconTransform(name)}">\n${paths}\n    </g>\n  </g>\n</svg>`;
  }
  const fills = [
    `  <path d="${primary}" fill="${colors.primary}" stroke="none" />`,
    secondary ? `  <path d="${secondary}" fill="${colors.secondary}" stroke="none" />` : "",
  ].filter(Boolean);
  const paths = def.paths.map((d) => `  <path d="${d}" />`);
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"${dims} fill="none" stroke="${colors.ink}" stroke-width="${ICON_STROKE_WIDTH}" stroke-linecap="round" stroke-linejoin="round">\n${[...fills, ...paths].join("\n")}\n</svg>`;
}

export async function iconToPngBlob(name: MbhIconName, palette: IconPaletteName, sizeOrVariant: number | IconVariant = PNG_SIZE, variant: IconVariant = "illustrated"): Promise<Blob> {
  const size = typeof sizeOrVariant === "number" ? sizeOrVariant : PNG_SIZE;
  variant = typeof sizeOrVariant === "string" ? sizeOrVariant : variant;
  const url = URL.createObjectURL(new Blob([iconToSvg(name, palette, size, variant)], { type: "image/svg+xml;charset=utf-8" }));
  try {
    const image = await new Promise<HTMLImageElement>((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = () => reject(new Error("Nettleseren kunne ikke lese SVG-filen"));
      img.src = url;
    });
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    if (!ctx) throw new Error("Kunne ikke opprette PNG");
    ctx.clearRect(0, 0, size, size);
    ctx.drawImage(image, 0, 0, size, size);
    return await new Promise<Blob>((resolve, reject) => {
      canvas.toBlob((b) => (b ? resolve(b) : reject(new Error("Kunne ikke eksportere PNG"))), "image/png");
    });
  } finally {
    URL.revokeObjectURL(url);
  }
}

export async function buildIconZip(format: "svg" | "png", palette: IconPaletteName, variant: IconVariant = "illustrated"): Promise<Blob> {
  const zip = new JSZip();
  const folder = zip.folder(paletteSlug(palette))!;
  for (const { name } of ICON_LIST) {
    if (format === "svg") folder.file(`${name}.svg`, iconToSvg(name, palette, variant));
    else folder.file(`${name}.png`, await iconToPngBlob(name, palette, variant));
  }
  return zip.generateAsync({ type: "blob" });
}

export function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export function downloadIconSvg(name: MbhIconName, palette: IconPaletteName, variant: IconVariant = "illustrated") {
  downloadBlob(new Blob([iconToSvg(name, palette, variant)], { type: "image/svg+xml" }), `${name}-${variant === "circle" ? "sirkel-" : ""}${paletteSlug(palette)}.svg`);
}

export async function downloadIconPng(name: MbhIconName, palette: IconPaletteName, variant: IconVariant = "illustrated") {
  downloadBlob(await iconToPngBlob(name, palette, variant), `${name}-${variant === "circle" ? "sirkel-" : ""}${paletteSlug(palette)}.png`);
}

export async function downloadIconZip(format: "svg" | "png", palette: IconPaletteName, variant: IconVariant = "illustrated") {
  downloadBlob(await buildIconZip(format, palette, variant), `ikoner-${variant === "circle" ? "sirkel-" : ""}${paletteSlug(palette)}-${format}.zip`);
}
