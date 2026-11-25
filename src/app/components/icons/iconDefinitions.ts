export const ICON_CATEGORIES = ["Hydraulikk", "Maritim", "Kontakt", "Sosiale medier", "Sted", "Handling", "Generelt"] as const;
export type IconCategory = (typeof ICON_CATEGORIES)[number];

type Def = {
  label: string;
  category: IconCategory;
  /** Outline paths (stroke) */
  paths: string[];
  /** Fill layers: [primary, secondary?] */
  fills: [string, string?];
};

const defs = {
  "mail": { label: "E-post", category: "Kontakt", paths: ["M3 6.5h18v12H3z","m3 7 9 7 9-7"], fills: ["M3 7h18v11.5H3z","m3 7 6 4.7c1.8 1.4 4.2 1.4 6 0L21 7z"] },
  "phone": { label: "Telefon", category: "Kontakt", paths: ["M7.2 3.5 10 7l-2 2.2c1.3 2.8 3.6 5.1 6.4 6.4l2.1-2 4 3.1-1.5 3c-.5 1-1.6 1.5-2.7 1.2C9.8 19 5 14.2 3.1 7.7c-.3-1.1.2-2.2 1.2-2.7z"], fills: ["M7.2 3.5 10 7l-2 2.2c1.3 2.8 3.6 5.1 6.4 6.4l2.1-2 4 3.1-1.5 3c-.5 1-1.6 1.5-2.7 1.2C9.8 19 5 14.2 3.1 7.7c-.3-1.1.2-2.2 1.2-2.7z","M7.2 3.5 10 7 8 9.2 4.3 5z"] },
  "chat": { label: "Melding", category: "Kontakt", paths: ["M4 5h16v11H9l-5 4z","M8 10h.01M12 10h.01M16 10h.01"], fills: ["M4 5h16v11H9l-5 4z","M4 5h16v4H4z"] },
  "at": { label: "Kontakt", category: "Kontakt", paths: ["M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8","M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"], fills: ["M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0z","M17 4a9 9 0 0 1 5 8v1a3 3 0 0 1-3 3"] },
  "instagram": { label: "Instagram", category: "Sosiale medier", paths: ["M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4z","M16 11.4a4 4 0 1 1-7.8 1.2 4 4 0 0 1 7.8-1.2z","M17.5 6.5h.01"], fills: ["M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4z","M16 11.4a4 4 0 1 1-7.8 1.2 4 4 0 0 1 7.8-1.2z"] },
  "facebook": { label: "Facebook", category: "Sosiale medier", paths: ["M14 21v-8h3l.5-4H14V7c0-1.2.8-2 2.2-2H18V2.2c-.8-.1-1.8-.2-2.8-.2C12 2 10 3.9 10 7v2H7v4h3v8"], fills: ["M4 3h16v18H4z","M10 13H7V9h3V7c0-3.1 2-5 5.2-5 1 0 2 .1 2.8.2V5h-1.8C14.8 5 14 5.8 14 7v2h3.5l-.5 4h-3v8h-4z"] },
  "linkedin": { label: "LinkedIn", category: "Sosiale medier", paths: ["M5 9v12M5 5v.01M10 21V9h4v2a4 4 0 0 1 7 2.6V21"], fills: ["M3 3h18v18H3z","M10 9h4v2a4 4 0 0 1 7 2.6V21H10z"] },
  "share": { label: "Del", category: "Sosiale medier", paths: ["M18 8a3 3 0 1 0-2.8-4A3 3 0 0 0 18 8zM6 15a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM18 16a3 3 0 1 0 0 6 3 3 0 0 0 0-6z","m8.7 16.5 6.6 3M15.4 6.5 8.7 10"], fills: ["M15.2 5a3 3 0 1 0 5.6 0 3 3 0 0 0-5.6 0zM3.2 18a3 3 0 1 0 5.6 0 3 3 0 0 0-5.6 0zM15.2 19a3 3 0 1 0 5.6 0 3 3 0 0 0-5.6 0z","m8.7 16.5 6.6 3M15.4 6.5 8.7 10"] },
  "pin": { label: "Sted", category: "Sted", paths: ["M20 10c0 5.5-8 12-8 12S4 15.5 4 10a8 8 0 1 1 16 0z","M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"], fills: ["M20 10c0 5.5-8 12-8 12S4 15.5 4 10a8 8 0 1 1 16 0z","M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"] },
  "map": { label: "Kart", category: "Sted", paths: ["m3 6 5-3 8 3 5-3v15l-5 3-8-3-5 3z","M8 3v15M16 6v15"], fills: ["M3 6l5-3v15l-5 3zM16 6l5-3v15l-5 3z","M8 3l8 3v15l-8-3z"] },
  "globe": { label: "Nettside", category: "Sted", paths: ["M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0z","M2 12h20M12 2c2.5 2.7 4 6 4 10s-1.5 7.3-4 10c-2.5-2.7-4-6-4-10s1.5-7.3 4-10z"], fills: ["M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0z","M12 2a10 10 0 0 1 0 20c2.5-2.7 4-6 4-10s-1.5-7.3-4-10z"] },
  "compass": { label: "Veibeskrivelse", category: "Sted", paths: ["M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0z","m15.5 8.5-2 5-5 2 2-5z"], fills: ["M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0z","m15.5 8.5-2 5-5 2 2-5z"] },
  "arrow-right": { label: "Neste", category: "Handling", paths: ["M5 12h14M13 6l6 6-6 6"], fills: ["M4 8h10v-3l7 7-7 7v-3H4z","M14 5l7 7-7 7z"] },
  "download": { label: "Last ned", category: "Handling", paths: ["M12 3v12M7 10l5 5 5-5","M5 21h14"], fills: ["M8 3h8v8h4l-8 7-8-7h4z","M5 18h14v3H5z"] },
  "upload": { label: "Last opp", category: "Handling", paths: ["M12 16V4M7 9l5-5 5 5","M5 21h14"], fills: ["M8 10H4l8-7 8 7h-4v8H8z","M5 18h14v3H5z"] },
  "search": { label: "Søk", category: "Handling", paths: ["M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16z","m21 21-4.4-4.4"], fills: ["M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16z","M15.5 17.5 18 15l4 4-2.5 2.5z"] },
  "calendar": { label: "Kalender", category: "Generelt", paths: ["M4 5h16v16H4zM8 2v6M16 2v6M4 10h16","M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"], fills: ["M4 5h16v16H4z","M4 5h16v5H4z"] },
  "clock": { label: "Tid", category: "Generelt", paths: ["M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0z","M12 6v6l4 2"], fills: ["M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0z","M12 6v6l4 2-1.5 2-5-3V6z"] },
  "user": { label: "Person", category: "Generelt", paths: ["M20 21a8 8 0 0 0-16 0","M12 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10z"], fills: ["M4 21a8 8 0 0 1 16 0z","M12 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10z"] },
  "users": { label: "Mennesker", category: "Generelt", paths: ["M16 21a6 6 0 0 0-12 0","M10 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8z","M17 11a3 3 0 1 0 0-6M22 21a5 5 0 0 0-6-5"], fills: ["M4 21a6 6 0 0 1 12 0z","M6 6a4 4 0 1 0 8 0 4 4 0 0 0-8 0z"] },
  "heart": { label: "Hjerte", category: "Generelt", paths: ["M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.7-7.5 1.1-1.1a5.5 5.5 0 0 0 0-7.8z"], fills: ["M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8z","M3.1 5.7a5.5 5.5 0 0 1 7.8-1.1L12 5.7l-7.8 7.8-1.1-1.1a5.5 5.5 0 0 1 0-6.7z"] },
  "info": { label: "Informasjon", category: "Generelt", paths: ["M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0z","M12 11v6M12 7h.01"], fills: ["M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0z","M9.5 10h5v8h-5z"] },
  "document": { label: "Dokument", category: "Generelt", paths: ["M6 2h8l5 5v15H6z","M14 2v6h5M9 13h6M9 17h6"], fills: ["M6 2h8l5 5v15H6z","M14 2l5 5h-5z"] },
  "check": { label: "Godkjent", category: "Generelt", paths: ["M22 11.1V12a10 10 0 1 1-5.9-9.1","m22 4-10 10-3-3"], fills: ["M12 22a10 10 0 1 1 5.7-18.2L15 7a6 6 0 1 0 3 5h4a10 10 0 0 1-10 10z","m9 11 3 3L22 4l-3-2-7 7z"] },
  "valve": { label: "Ventil", category: "Hydraulikk", paths: ["M12 3v3M9 3h6","M12 6 8 19h8L12 6z","M4 10h16v4H4z"], fills: ["M4 10h16v4H4z","M12 6 9.6 10h4.8zM12 18l-2.4-4h4.8z"] },
  "piston": { label: "Stempel", category: "Hydraulikk", paths: ["M7 5h10v14H7z","M9 7h6v10H9z","M3 12h4M17 12h4"], fills: ["M7 5h10v14H7z","M9 7h6v10H9z"] },
  "pressure-gauge": { label: "Manometer", category: "Hydraulikk", paths: ["M19 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0z","M12 17v4M9 21h6","m12 10 4-4M7.5 7.5 9 9"], fills: ["M5 10a7 7 0 0 1 14 0H5z","M5.6 13h12.8a7 7 0 0 1-12.8 0z"] },
  "hydraulic-unit": { label: "Hydraulikkaggregat", category: "Hydraulikk", paths: ["M4 5h7v14H4z","M6 7h3v5H6z","M5.5 19v2M4 21h3","M11 12h7v3M18 15h2v5h-6v-5h4"], fills: ["M4 5h7v14H4z","M6 7h3v5H6zM14 15h6v5h-6z"] },
  "cylinder": { label: "Sylinder", category: "Hydraulikk", paths: ["M5 9h12v6H5z","M3 10h2v4H3zM17 10h3v4h-3z","M8 7v2M12 7v2"], fills: ["M5 9h12v6H5z","M17 10h3v4h-3z"] },
  "pump": { label: "Pumpe", category: "Hydraulikk", paths: ["M6 6h12v11H6z","M12 17v3","M9 11a3 3 0 1 0 6 0 3 3 0 0 0-6 0z","m6 7 3 2M18 7l-3 2M6 16l3-2M18 16l-3-2"], fills: ["M6 6h12v11H6z","M9 11a3 3 0 1 0 6 0 3 3 0 0 0-6 0z"] },
  "pipe": { label: "Rør", category: "Hydraulikk", paths: ["M5 9h14a3 3 0 0 1 0 6H5a3 3 0 0 1 0-6z","M7 8v8M17 8v8"], fills: ["M5 9h14a3 3 0 0 1 0 6H5a3 3 0 0 1 0-6z","M7 9h10v6H7z"] },
  "oil": { label: "Olje", category: "Hydraulikk", paths: ["M12 3s-5 6.2-5 11a5 5 0 0 0 10 0c0-4.8-5-11-5-11z","M9 15c0-2 1-3.2 3-4"], fills: ["M12 3s-5 6.2-5 11a5 5 0 0 0 10 0c0-4.8-5-11-5-11z","M9 15c0-2 1-3.2 3-4"] },
  "gear": { label: "Tannhjul", category: "Hydraulikk", paths: ["M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10z","M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8"], fills: ["M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10z","M12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"] },
  "tool": { label: "Verktøy", category: "Hydraulikk", paths: ["M14 6a4 4 0 0 0 4.7 5.8L9 21.5a2 2 0 1 1-2.8-2.8l9.7-9.7A4 4 0 0 0 14 4z","M7.5 19.5h.01"], fills: ["M14 6a4 4 0 0 0 4.7 5.8L9 21.5a2 2 0 0 1-2.8-2.8l9.7-9.7A4 4 0 0 0 14 4z","M6.2 18.7 9 21.5a2 2 0 1 1-2.8-2.8z"] },
  "anchor": { label: "Anker", category: "Maritim", paths: ["M12 7v13","M8 10H5c0 5 2.5 8 7 10 4.5-2 7-5 7-10h-3","M10 5a2 2 0 1 1 4 0 2 2 0 0 1-4 0zM8 10h8"], fills: ["M5 10c0 5 2.5 8 7 10 4.5-2 7-5 7-10h-3v5c-2 2-6 2-8 0v-5z","M10 5a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"] },
  "propeller": { label: "Propell", category: "Maritim", paths: ["M12 12C8 11 5 7 5 4c3 0 7 3 7 8z","M12 12c1-4 5-7 8-7 0 3-3 7-8 7z","M12 12c4 1 7 5 7 8-3 0-7-3-7-8z","M12 12c-1 4-5 7-8 7 0-3 3-7 8-7z","M12 12h.01"], fills: ["M12 12C8 11 5 7 5 4c3 0 7 3 7 8zM12 12c4 1 7 5 7 8-3 0-7-3-7-8z","M12 12c1-4 5-7 8-7 0 3-3 7-8 7zM12 12c-1 4-5 7-8 7 0-3 3-7 8-7z"] },
  "wave": { label: "Bølge", category: "Maritim", paths: ["M3 9c2-3 4-3 6 0s4 3 6 0 4-3 6 0","M3 14c2-3 4-3 6 0s4 3 6 0 4-3 6 0","M3 14v5h18v-5"], fills: ["M3 14c2-3 4-3 6 0s4 3 6 0 4-3 6 0v5H3z","M3 9c2-3 4-3 6 0s4 3 6 0 4-3 6 0"] },
  "ship": { label: "Skip", category: "Maritim", paths: ["M5 15h14l2 4c-6 2-12 2-18 0z","M7 15V9h10v6M9 9V6h6v3M12 3v3","M9 12h2M13 12h2"], fills: ["M5 15h14l2 4c-6 2-12 2-18 0z","M7 15V9h10v6z"] },
  "boat": { label: "Båt", category: "Maritim", paths: ["M5 16h14l2 3H3z","M7 16 8 10h4l2 3 2-2 2 5","M12 10V6M15 11V8"], fills: ["M5 16h14l2 3H3z","M7 16 8 10h4l2 3 2-2 2 5z"] },
  "crane": { label: "Kran", category: "Maritim", paths: ["M5 18h14v3H5z","M9 18V7l9-2","M9 7l8 3M17 5l1 5","M15 10v4c0 2-3 2-3 0"], fills: ["M5 18h14v3H5z","M9 7l9-2-1 5z"] },
  "winch": { label: "Vinsj", category: "Maritim", paths: ["M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10z","M12 3v4M12 17v4M3 12h4M17 12h4M5.5 5.5l3 3M15.5 15.5l3 3M18.5 5.5l-3 3M8.5 15.5l-3 3","M12 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"], fills: ["M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10z","M12 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"] },
  "chain": { label: "Kjetting", category: "Maritim", paths: ["M9 7a5 5 0 0 0 0 10","M15 7a5 5 0 0 1 0 10","M9 7c2-2 4-2 6 0M9 17c2 2 4 2 6 0","M8 9h8M8 15h8"], fills: ["M9 7a5 5 0 0 0 0 10c2 2 4 2 6 0a5 5 0 0 0 0-10c-2-2-4-2-6 0z","M8 9h8v6H8z"] },
  "buoy": { label: "Bøye", category: "Maritim", paths: ["M18 10a6 6 0 1 1-12 0 6 6 0 0 1 12 0z","M6 10h12M12 16v5M9 21h6"], fills: ["M18 10a6 6 0 1 1-12 0 6 6 0 0 1 12 0z","M6 7h12v6H6z"] },
} as const satisfies Record<string, Def>;

const legacyDefs = {
  hydraulic: defs["hydraulic-unit"],
  "oil-drop": defs.oil,
  wrench: defs.tool,
  shield: { label: "Sikkerhet", category: "Generelt", paths: ["M12 2l8 3v8q0 6-8 9-8-3-8-9V5z", "M8 12l3 3 5-6"], fills: ["M12 2l8 3v8q0 6-8 9-8-3-8-9V5z", "M4 13q0 6 8 9 8-3 8-9z"] },
} as const satisfies Record<string, Def>;

export type MbhIconName = keyof typeof defs | keyof typeof legacyDefs;

export type IconDefinition = Def & { name: MbhIconName };

export const ICON_DEFINITIONS: Record<MbhIconName, Def> = { ...defs, ...legacyDefs };

export const ICON_LIST: IconDefinition[] = (Object.keys(defs) as (keyof typeof defs)[]).map((name) => ({
  name,
  ...defs[name],
}));

export const ICON_STROKE_WIDTH = 1.45;

// Offsets center each outline's SVG bounds within its original 24 × 24 grid.
export const CIRCLE_ICON_OFFSETS: Record<MbhIconName, readonly [number, number]> = {
  mail: [0, -0.5],
  phone: [0.243, -0.243],
  chat: [0, -0.5],
  at: [0, 0],
  instagram: [0, 0],
  facebook: [-0.5, 0.5],
  linkedin: [-1, -1],
  share: [-0.014, 0],
  pin: [0, 0],
  map: [0, 0],
  globe: [0, 0],
  compass: [0, 0],
  "arrow-right": [0, 0],
  download: [0, 0],
  upload: [0, -0.5],
  search: [0, 0],
  calendar: [0, 0.5],
  clock: [0, 0],
  user: [0, 0],
  users: [-1.001, -1],
  heart: [0.046, 0.011],
  info: [0, 0],
  document: [-0.5, 0],
  check: [0, -0.021],
  valve: [0, 1],
  piston: [0, 0],
  "pressure-gauge": [0, 0],
  "hydraulic-unit": [0, -1],
  cylinder: [0.5, 1],
  pump: [0, -1],
  pipe: [0, 0],
  oil: [0, 1],
  gear: [0, 0],
  tool: [-0.05, -1.15],
  anchor: [0, 0.5],
  propeller: [0, 0],
  wave: [0, -0.875],
  ship: [0, 0.25],
  boat: [0, -0.5],
  crane: [0, -1],
  winch: [0, 0],
  chain: [0, 0],
  buoy: [0, -0.5],
  hydraulic: [0, -1],
  "oil-drop": [0, 1],
  wrench: [-0.05, -1.15],
  shield: [0, 0],
};

export function circleIconTransform(name: MbhIconName) {
  const [x, y] = CIRCLE_ICON_OFFSETS[name];
  return `translate(${x} ${y})`;
}
