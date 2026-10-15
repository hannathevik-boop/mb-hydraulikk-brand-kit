export const ICON_CATEGORIES = ["Kontakt", "Sosiale medier", "Sted", "Handling", "Generelt"] as const;
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
  mail: { label: "E-post", category: "Kontakt", paths: ["M3 6.5h18v12H3z", "m3 7 9 7 9-7"], fills: ["M3 7h18v11.5H3z", "m3 7 6 4.7c1.8 1.4 4.2 1.4 6 0L21 7z"] },
  phone: { label: "Telefon", category: "Kontakt", paths: ["M7.2 3.5 10 7l-2 2.2c1.3 2.8 3.6 5.1 6.4 6.4l2.1-2 4 3.1-1.5 3c-.5 1-1.6 1.5-2.7 1.2C9.8 19 5 14.2 3.1 7.7c-.3-1.1.2-2.2 1.2-2.7z"], fills: ["M7.2 3.5 10 7l-2 2.2c1.3 2.8 3.6 5.1 6.4 6.4l2.1-2 4 3.1-1.5 3c-.5 1-1.6 1.5-2.7 1.2C9.8 19 5 14.2 3.1 7.7c-.3-1.1.2-2.2 1.2-2.7z", "M7.2 3.5 10 7 8 9.2 4.3 5z"] },
  chat: { label: "Melding", category: "Kontakt", paths: ["M4 5h16v11H9l-5 4z", "M8 10h.01M12 10h.01M16 10h.01"], fills: ["M4 5h16v11H9l-5 4z", "M4 5h16v4H4z"] },
  at: { label: "Kontakt", category: "Kontakt", paths: ["M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8", "M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"], fills: ["M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0z", "M17 4a9 9 0 0 1 5 8v1a3 3 0 0 1-3 3"] },
  instagram: { label: "Instagram", category: "Sosiale medier", paths: ["M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4z", "M16 11.4a4 4 0 1 1-7.8 1.2 4 4 0 0 1 7.8-1.2z", "M17.5 6.5h.01"], fills: ["M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4z", "M16 11.4a4 4 0 1 1-7.8 1.2 4 4 0 0 1 7.8-1.2z"] },
  facebook: { label: "Facebook", category: "Sosiale medier", paths: ["M14 21v-8h3l.5-4H14V7c0-1.2.8-2 2.2-2H18V2.2c-.8-.1-1.8-.2-2.8-.2C12 2 10 3.9 10 7v2H7v4h3v8"], fills: ["M4 3h16v18H4z", "M10 13H7V9h3V7c0-3.1 2-5 5.2-5 1 0 2 .1 2.8.2V5h-1.8C14.8 5 14 5.8 14 7v2h3.5l-.5 4h-3v8h-4z"] },
  linkedin: { label: "LinkedIn", category: "Sosiale medier", paths: ["M5 9v12M5 5v.01M10 21V9h4v2a4 4 0 0 1 7 2.6V21"], fills: ["M3 3h18v18H3z", "M10 9h4v2a4 4 0 0 1 7 2.6V21H10z"] },
  share: { label: "Del", category: "Sosiale medier", paths: ["M18 8a3 3 0 1 0-2.8-4A3 3 0 0 0 18 8zM6 15a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM18 16a3 3 0 1 0 0 6 3 3 0 0 0 0-6z", "m8.7 16.5 6.6 3M15.4 6.5 8.7 10"], fills: ["M15.2 5a3 3 0 1 0 5.6 0 3 3 0 0 0-5.6 0zM3.2 18a3 3 0 1 0 5.6 0 3 3 0 0 0-5.6 0zM15.2 19a3 3 0 1 0 5.6 0 3 3 0 0 0-5.6 0z", "m8.7 16.5 6.6 3M15.4 6.5 8.7 10"] },
  pin: { label: "Sted", category: "Sted", paths: ["M20 10c0 5.5-8 12-8 12S4 15.5 4 10a8 8 0 1 1 16 0z", "M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"], fills: ["M20 10c0 5.5-8 12-8 12S4 15.5 4 10a8 8 0 1 1 16 0z", "M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"] },
  map: { label: "Kart", category: "Sted", paths: ["m3 6 5-3 8 3 5-3v15l-5 3-8-3-5 3z", "M8 3v15M16 6v15"], fills: ["M3 6l5-3v15l-5 3zM16 6l5-3v15l-5 3z", "M8 3l8 3v15l-8-3z"] },
  globe: { label: "Nettside", category: "Sted", paths: ["M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0z", "M2 12h20M12 2c2.5 2.7 4 6 4 10s-1.5 7.3-4 10c-2.5-2.7-4-6-4-10s1.5-7.3 4-10z"], fills: ["M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0z", "M12 2a10 10 0 0 1 0 20c2.5-2.7 4-6 4-10s-1.5-7.3-4-10z"] },
  compass: { label: "Veibeskrivelse", category: "Sted", paths: ["M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0z", "m15.5 8.5-2 5-5 2 2-5z"], fills: ["M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0z", "m15.5 8.5-2 5-5 2 2-5z"] },
  "arrow-right": { label: "Neste", category: "Handling", paths: ["M5 12h14M13 6l6 6-6 6"], fills: ["M4 8h10v-3l7 7-7 7v-3H4z", "M14 5l7 7-7 7z"] },
  download: { label: "Last ned", category: "Handling", paths: ["M12 3v12M7 10l5 5 5-5", "M5 21h14"], fills: ["M8 3h8v8h4l-8 7-8-7h4z", "M5 18h14v3H5z"] },
  upload: { label: "Last opp", category: "Handling", paths: ["M12 16V4M7 9l5-5 5 5", "M5 21h14"], fills: ["M8 10H4l8-7 8 7h-4v8H8z", "M5 18h14v3H5z"] },
  search: { label: "Søk", category: "Handling", paths: ["M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16z", "m21 21-4.4-4.4"], fills: ["M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16z", "M15.5 17.5 18 15l4 4-2.5 2.5z"] },
  calendar: { label: "Kalender", category: "Generelt", paths: ["M4 5h16v16H4zM8 2v6M16 2v6M4 10h16", "M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"], fills: ["M4 5h16v16H4z", "M4 5h16v5H4z"] },
  clock: { label: "Tid", category: "Generelt", paths: ["M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0z", "M12 6v6l4 2"], fills: ["M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0z", "M12 6v6l4 2-1.5 2-5-3V6z"] },
  user: { label: "Person", category: "Generelt", paths: ["M20 21a8 8 0 0 0-16 0", "M12 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10z"], fills: ["M4 21a8 8 0 0 1 16 0z", "M12 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10z"] },
  users: { label: "Mennesker", category: "Generelt", paths: ["M16 21a6 6 0 0 0-12 0", "M10 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8z", "M17 11a3 3 0 1 0 0-6M22 21a5 5 0 0 0-6-5"], fills: ["M4 21a6 6 0 0 1 12 0z", "M6 6a4 4 0 1 0 8 0 4 4 0 0 0-8 0z"] },
  heart: { label: "Hjerte", category: "Generelt", paths: ["M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.7-7.5 1.1-1.1a5.5 5.5 0 0 0 0-7.8z"], fills: ["M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8z", "M3.1 5.7a5.5 5.5 0 0 1 7.8-1.1L12 5.7l-7.8 7.8-1.1-1.1a5.5 5.5 0 0 1 0-6.7z"] },
  info: { label: "Informasjon", category: "Generelt", paths: ["M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0z", "M12 11v6M12 7h.01"], fills: ["M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0z", "M9.5 10h5v8h-5z"] },
  document: { label: "Dokument", category: "Generelt", paths: ["M6 2h8l5 5v15H6z", "M14 2v6h5M9 13h6M9 17h6"], fills: ["M6 2h8l5 5v15H6z", "M14 2l5 5h-5z"] },
  check: { label: "Godkjent", category: "Generelt", paths: ["M22 11.1V12a10 10 0 1 1-5.9-9.1", "m22 4-10 10-3-3"], fills: ["M12 22a10 10 0 1 1 5.7-18.2L15 7a6 6 0 1 0 3 5h4a10 10 0 0 1-10 10z", "m9 11 3 3L22 4l-3-2-7 7z"] },
} as const satisfies Record<string, Def>;

export type MbhIconName = keyof typeof defs;

export type IconDefinition = Def & { name: MbhIconName };

export const ICON_DEFINITIONS: Record<MbhIconName, Def> = defs;

export const ICON_LIST: IconDefinition[] = (Object.keys(defs) as MbhIconName[]).map((name) => ({
  name,
  ...(defs[name] as Def),
}));

export const ICON_STROKE_WIDTH = 1.45;
