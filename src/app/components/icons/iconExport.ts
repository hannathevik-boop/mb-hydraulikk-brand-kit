import JSZip from "jszip";
import { ICON_DEFINITIONS, ICON_LIST, ICON_STROKE_WIDTH, type MbhIconName } from "./iconDefinitions";
import { ICON_PALETTES, type IconPaletteName } from "./iconPalettes";

export const PNG_SIZE = 512;

export function paletteSlug(palette: IconPaletteName) {
  return ICON_PALETTES[palette].label.toLowerCase().replace(/ /g, "-");
}

/** Standalone SVG markup. Never includes a background, regardless of palette. */
export function iconToSvg(name: MbhIconName, palette: IconPaletteName, size?: number) {
  const def = ICON_DEFINITIONS[name];
  const colors = ICON_PALETTES[palette];
  const [primary, secondary] = def.fills;
  const dims = size ? ` width="${size}" height="${size}"` : "";
  const fills = [
    `  <path d="${primary}" fill="${colors.primary}" stroke="none" />`,
    secondary ? `  <path d="${secondary}" fill="${colors.secondary}" stroke="none" />` : "",
  ].filter(Boolean);
  const paths = def.paths.map((d) => `  <path d="${d}" />`);
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"${dims} fill="none" stroke="${colors.ink}" stroke-width="${ICON_STROKE_WIDTH}" stroke-linecap="round" stroke-linejoin="round">\n${[...fills, ...paths].join("\n")}\n</svg>`;
}

export async function iconToPngBlob(name: MbhIconName, palette: IconPaletteName, size = PNG_SIZE): Promise<Blob> {
  const url = URL.createObjectURL(new Blob([iconToSvg(name, palette, size)], { type: "image/svg+xml;charset=utf-8" }));
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

export async function buildIconZip(format: "svg" | "png", palette: IconPaletteName): Promise<Blob> {
  const zip = new JSZip();
  const folder = zip.folder(paletteSlug(palette))!;
  for (const { name } of ICON_LIST) {
    if (format === "svg") folder.file(`${name}.svg`, iconToSvg(name, palette));
    else folder.file(`${name}.png`, await iconToPngBlob(name, palette));
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

export function downloadIconSvg(name: MbhIconName, palette: IconPaletteName) {
  downloadBlob(new Blob([iconToSvg(name, palette)], { type: "image/svg+xml" }), `${name}-${paletteSlug(palette)}.svg`);
}

export async function downloadIconZip(format: "svg" | "png", palette: IconPaletteName) {
  downloadBlob(await buildIconZip(format, palette), `ikoner-${paletteSlug(palette)}-${format}.zip`);
}
