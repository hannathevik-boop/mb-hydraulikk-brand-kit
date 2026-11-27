import { useMemo, useState, type CSSProperties } from 'react'

type IconDefinition = {
  name: string
  label: string
  category: 'Kontakt' | 'Sosiale medier' | 'Sted' | 'Handling' | 'Generelt' | 'Hydraulikk' | 'Maritim'
  paths: string[]
}

const icons: IconDefinition[] = [
  { name: 'mail', label: 'E-post', category: 'Kontakt', paths: ['M3 6.5h18v12H3z', 'm3 7 9 7 9-7'] },
  { name: 'phone', label: 'Telefon', category: 'Kontakt', paths: ['M7.2 3.5 10 7l-2 2.2c1.3 2.8 3.6 5.1 6.4 6.4l2.1-2 4 3.1-1.5 3c-.5 1-1.6 1.5-2.7 1.2C9.8 19 5 14.2 3.1 7.7c-.3-1.1.2-2.2 1.2-2.7z'] },
  { name: 'chat', label: 'Melding', category: 'Kontakt', paths: ['M4 5h16v11H9l-5 4z', 'M8 10h.01M12 10h.01M16 10h.01'] },
  { name: 'at', label: 'Kontakt', category: 'Kontakt', paths: ['M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8', 'M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0z'] },
  { name: 'instagram', label: 'Instagram', category: 'Sosiale medier', paths: ['M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4z', 'M16 11.4a4 4 0 1 1-7.8 1.2 4 4 0 0 1 7.8-1.2z', 'M17.5 6.5h.01'] },
  { name: 'facebook', label: 'Facebook', category: 'Sosiale medier', paths: ['M14 21v-8h3l.5-4H14V7c0-1.2.8-2 2.2-2H18V2.2c-.8-.1-1.8-.2-2.8-.2C12 2 10 3.9 10 7v2H7v4h3v8'] },
  { name: 'linkedin', label: 'LinkedIn', category: 'Sosiale medier', paths: ['M5 9v12M5 5v.01M10 21V9h4v2a4 4 0 0 1 7 2.6V21'] },
  { name: 'share', label: 'Del', category: 'Sosiale medier', paths: ['M18 8a3 3 0 1 0-2.8-4A3 3 0 0 0 18 8zM6 15a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM18 16a3 3 0 1 0 0 6 3 3 0 0 0 0-6z', 'm8.7 16.5 6.6 3M15.4 6.5 8.7 10'] },
  { name: 'pin', label: 'Sted', category: 'Sted', paths: ['M20 10c0 5.5-8 12-8 12S4 15.5 4 10a8 8 0 1 1 16 0z', 'M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'] },
  { name: 'map', label: 'Kart', category: 'Sted', paths: ['m3 6 5-3 8 3 5-3v15l-5 3-8-3-5 3z', 'M8 3v15M16 6v15'] },
  { name: 'globe', label: 'Nettside', category: 'Sted', paths: ['M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0z', 'M2 12h20M12 2c2.5 2.7 4 6 4 10s-1.5 7.3-4 10c-2.5-2.7-4-6-4-10s1.5-7.3 4-10z'] },
  { name: 'compass', label: 'Veibeskrivelse', category: 'Sted', paths: ['M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0z', 'm15.5 8.5-2 5-5 2 2-5z'] },
  { name: 'arrow-right', label: 'Neste', category: 'Handling', paths: ['M5 12h14M13 6l6 6-6 6'] },
  { name: 'download', label: 'Last ned', category: 'Handling', paths: ['M12 3v12M7 10l5 5 5-5', 'M5 21h14'] },
  { name: 'upload', label: 'Last opp', category: 'Handling', paths: ['M12 16V4M7 9l5-5 5 5', 'M5 21h14'] },
  { name: 'search', label: 'Søk', category: 'Handling', paths: ['M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16z', 'm21 21-4.4-4.4'] },
  { name: 'calendar', label: 'Kalender', category: 'Generelt', paths: ['M4 5h16v16H4zM8 2v6M16 2v6M4 10h16', 'M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01'] },
  { name: 'clock', label: 'Tid', category: 'Generelt', paths: ['M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0z', 'M12 6v6l4 2'] },
  { name: 'user', label: 'Person', category: 'Generelt', paths: ['M20 21a8 8 0 0 0-16 0', 'M12 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10z'] },
  { name: 'users', label: 'Mennesker', category: 'Generelt', paths: ['M16 21a6 6 0 0 0-12 0', 'M10 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8z', 'M17 11a3 3 0 1 0 0-6M22 21a5 5 0 0 0-6-5'] },
  { name: 'heart', label: 'Hjerte', category: 'Generelt', paths: ['M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.7-7.5 1.1-1.1a5.5 5.5 0 0 0 0-7.8z'] },
  { name: 'info', label: 'Informasjon', category: 'Generelt', paths: ['M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0z', 'M12 11v6M12 7h.01'] },
  { name: 'document', label: 'Dokument', category: 'Generelt', paths: ['M6 2h8l5 5v15H6z', 'M14 2v6h5M9 13h6M9 17h6'] },
  { name: 'check', label: 'Godkjent', category: 'Generelt', paths: ['M22 11.1V12a10 10 0 1 1-5.9-9.1', 'm22 4-10 10-3-3'] },
  { name: 'valve', label: 'Ventil', category: 'Hydraulikk', paths: ['M12 3v3M9 3h6', 'M12 6 8 19h8L12 6z', 'M4 10h16v4H4z'] },
  { name: 'piston', label: 'Stempel', category: 'Hydraulikk', paths: ['M7 5h10v14H7z', 'M9 7h6v10H9z', 'M3 12h4M17 12h4'] },
  { name: 'pressure-gauge', label: 'Manometer', category: 'Hydraulikk', paths: ['M19 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0z', 'M12 17v4M9 21h6', 'm12 10 4-4M7.5 7.5 9 9'] },
  { name: 'hydraulic-unit', label: 'Hydraulikkaggregat', category: 'Hydraulikk', paths: ['M4 5h7v14H4z', 'M6 7h3v5H6z', 'M5.5 19v2M4 21h3', 'M11 12h7v3M18 15h2v5h-6v-5h4'] },
  { name: 'cylinder', label: 'Sylinder', category: 'Hydraulikk', paths: ['M5 9h12v6H5z', 'M3 10h2v4H3zM17 10h3v4h-3z', 'M8 7v2M12 7v2'] },
  { name: 'pump', label: 'Pumpe', category: 'Hydraulikk', paths: ['M6 6h12v11H6z', 'M12 17v3', 'M9 11a3 3 0 1 0 6 0 3 3 0 0 0-6 0z', 'm6 7 3 2M18 7l-3 2M6 16l3-2M18 16l-3-2'] },
  { name: 'pipe', label: 'Rør', category: 'Hydraulikk', paths: ['M5 9h14a3 3 0 0 1 0 6H5a3 3 0 0 1 0-6z', 'M7 8v8M17 8v8'] },
  { name: 'oil', label: 'Olje', category: 'Hydraulikk', paths: ['M12 3s-5 6.2-5 11a5 5 0 0 0 10 0c0-4.8-5-11-5-11z', 'M9 15c0-2 1-3.2 3-4'] },
  { name: 'gear', label: 'Tannhjul', category: 'Hydraulikk', paths: ['M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10z', 'M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8'] },
  { name: 'tool', label: 'Verktøy', category: 'Hydraulikk', paths: ['M14 6a4 4 0 0 0 4.7 5.8L9 21.5a2 2 0 1 1-2.8-2.8l9.7-9.7A4 4 0 0 0 14 4z', 'M7.5 19.5h.01'] },
  { name: 'anchor', label: 'Anker', category: 'Maritim', paths: ['M12 7v13', 'M8 10H5c0 5 2.5 8 7 10 4.5-2 7-5 7-10h-3', 'M10 5a2 2 0 1 1 4 0 2 2 0 0 1-4 0zM8 10h8'] },
  { name: 'propeller', label: 'Propell', category: 'Maritim', paths: ['M12 12C8 11 5 7 5 4c3 0 7 3 7 8z', 'M12 12c1-4 5-7 8-7 0 3-3 7-8 7z', 'M12 12c4 1 7 5 7 8-3 0-7-3-7-8z', 'M12 12c-1 4-5 7-8 7 0-3 3-7 8-7z', 'M12 12h.01'] },
  { name: 'wave', label: 'Bølge', category: 'Maritim', paths: ['M3 9c2-3 4-3 6 0s4 3 6 0 4-3 6 0', 'M3 14c2-3 4-3 6 0s4 3 6 0 4-3 6 0', 'M3 14v5h18v-5'] },
  { name: 'ship', label: 'Skip', category: 'Maritim', paths: ['M5 15h14l2 4c-6 2-12 2-18 0z', 'M7 15V9h10v6M9 9V6h6v3M12 3v3', 'M9 12h2M13 12h2'] },
  { name: 'boat', label: 'Båt', category: 'Maritim', paths: ['M5 16h14l2 3H3z', 'M7 16 8 10h4l2 3 2-2 2 5', 'M12 10V6M15 11V8'] },
  { name: 'crane', label: 'Kran', category: 'Maritim', paths: ['M5 18h14v3H5z', 'M9 18V7l9-2', 'M9 7l8 3M17 5l1 5', 'M15 10v4c0 2-3 2-3 0'] },
  { name: 'winch', label: 'Vinsj', category: 'Maritim', paths: ['M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10z', 'M12 3v4M12 17v4M3 12h4M17 12h4M5.5 5.5l3 3M15.5 15.5l3 3M18.5 5.5l-3 3M8.5 15.5l-3 3', 'M12 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4z'] },
  { name: 'chain', label: 'Kjetting', category: 'Maritim', paths: ['M9 7a5 5 0 0 0 0 10', 'M15 7a5 5 0 0 1 0 10', 'M9 7c2-2 4-2 6 0M9 17c2 2 4 2 6 0', 'M8 9h8M8 15h8'] },
  { name: 'buoy', label: 'Bøye', category: 'Maritim', paths: ['M18 10a6 6 0 1 1-12 0 6 6 0 0 1 12 0z', 'M6 10h12M12 16v5M9 21h6'] },
]

const accentPaths: Record<string, [string, string?]> = {
  mail: ['M3 7h18v11.5H3z', 'm3 7 6 4.7c1.8 1.4 4.2 1.4 6 0L21 7z'],
  phone: ['M7.2 3.5 10 7l-2 2.2c1.3 2.8 3.6 5.1 6.4 6.4l2.1-2 4 3.1-1.5 3c-.5 1-1.6 1.5-2.7 1.2C9.8 19 5 14.2 3.1 7.7c-.3-1.1.2-2.2 1.2-2.7z', 'M7.2 3.5 10 7 8 9.2 4.3 5z'],
  chat: ['M4 5h16v11H9l-5 4z', 'M4 5h16v4H4z'],
  at: ['M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0z', 'M17 4a9 9 0 0 1 5 8v1a3 3 0 0 1-3 3'],
  instagram: ['M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4z', 'M16 11.4a4 4 0 1 1-7.8 1.2 4 4 0 0 1 7.8-1.2z'],
  facebook: ['M4 3h16v18H4z', 'M10 13H7V9h3V7c0-3.1 2-5 5.2-5 1 0 2 .1 2.8.2V5h-1.8C14.8 5 14 5.8 14 7v2h3.5l-.5 4h-3v8h-4z'],
  linkedin: ['M3 3h18v18H3z', 'M10 9h4v2a4 4 0 0 1 7 2.6V21H10z'],
  share: ['M15.2 5a3 3 0 1 0 5.6 0 3 3 0 0 0-5.6 0zM3.2 18a3 3 0 1 0 5.6 0 3 3 0 0 0-5.6 0zM15.2 19a3 3 0 1 0 5.6 0 3 3 0 0 0-5.6 0z', 'm8.7 16.5 6.6 3M15.4 6.5 8.7 10'],
  pin: ['M20 10c0 5.5-8 12-8 12S4 15.5 4 10a8 8 0 1 1 16 0z', 'M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'],
  map: ['M3 6l5-3v15l-5 3zM16 6l5-3v15l-5 3z', 'M8 3l8 3v15l-8-3z'],
  globe: ['M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0z', 'M12 2a10 10 0 0 1 0 20c2.5-2.7 4-6 4-10s-1.5-7.3-4-10z'],
  compass: ['M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0z', 'm15.5 8.5-2 5-5 2 2-5z'],
  'arrow-right': ['M4 8h10v-3l7 7-7 7v-3H4z', 'M14 5l7 7-7 7z'],
  download: ['M8 3h8v8h4l-8 7-8-7h4z', 'M5 18h14v3H5z'],
  upload: ['M8 10H4l8-7 8 7h-4v8H8z', 'M5 18h14v3H5z'],
  search: ['M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16z', 'M15.5 17.5 18 15l4 4-2.5 2.5z'],
  calendar: ['M4 5h16v16H4z', 'M4 5h16v5H4z'],
  clock: ['M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0z', 'M12 6v6l4 2-1.5 2-5-3V6z'],
  user: ['M4 21a8 8 0 0 1 16 0z', 'M12 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10z'],
  users: ['M4 21a6 6 0 0 1 12 0z', 'M6 6a4 4 0 1 0 8 0 4 4 0 0 0-8 0z'],
  heart: ['M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8z', 'M3.1 5.7a5.5 5.5 0 0 1 7.8-1.1L12 5.7l-7.8 7.8-1.1-1.1a5.5 5.5 0 0 1 0-6.7z'],
  info: ['M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0z', 'M9.5 10h5v8h-5z'],
  document: ['M6 2h8l5 5v15H6z', 'M14 2l5 5h-5z'],
  check: ['M12 22a10 10 0 1 1 5.7-18.2L15 7a6 6 0 1 0 3 5h4a10 10 0 0 1-10 10z', 'm9 11 3 3L22 4l-3-2-7 7z'],
  valve: ['M4 10h16v4H4z', 'M12 6 9.6 10h4.8zM12 18l-2.4-4h4.8z'],
  piston: ['M7 5h10v14H7z', 'M9 7h6v10H9z'],
  'pressure-gauge': ['M5 10a7 7 0 0 1 14 0H5z', 'M5.6 13h12.8a7 7 0 0 1-12.8 0z'],
  'hydraulic-unit': ['M4 5h7v14H4z', 'M6 7h3v5H6zM14 15h6v5h-6z'],
  cylinder: ['M5 9h12v6H5z', 'M17 10h3v4h-3z'],
  pump: ['M6 6h12v11H6z', 'M9 11a3 3 0 1 0 6 0 3 3 0 0 0-6 0z'],
  pipe: ['M5 9h14a3 3 0 0 1 0 6H5a3 3 0 0 1 0-6z', 'M7 9h10v6H7z'],
  oil: ['M12 3s-5 6.2-5 11a5 5 0 0 0 10 0c0-4.8-5-11-5-11z', 'M9 15c0-2 1-3.2 3-4'],
  gear: ['M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10z', 'M12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z'],
  tool: ['M14 6a4 4 0 0 0 4.7 5.8L9 21.5a2 2 0 0 1-2.8-2.8l9.7-9.7A4 4 0 0 0 14 4z', 'M6.2 18.7 9 21.5a2 2 0 1 1-2.8-2.8z'],
  anchor: ['M5 10c0 5 2.5 8 7 10 4.5-2 7-5 7-10h-3v5c-2 2-6 2-8 0v-5z', 'M10 5a2 2 0 1 1 4 0 2 2 0 0 1-4 0z'],
  propeller: ['M12 12C8 11 5 7 5 4c3 0 7 3 7 8zM12 12c4 1 7 5 7 8-3 0-7-3-7-8z', 'M12 12c1-4 5-7 8-7 0 3-3 7-8 7zM12 12c-1 4-5 7-8 7 0-3 3-7 8-7z'],
  wave: ['M3 14c2-3 4-3 6 0s4 3 6 0 4-3 6 0v5H3z', 'M3 9c2-3 4-3 6 0s4 3 6 0 4-3 6 0'],
  ship: ['M5 15h14l2 4c-6 2-12 2-18 0z', 'M7 15V9h10v6z'],
  boat: ['M5 16h14l2 3H3z', 'M7 16 8 10h4l2 3 2-2 2 5z'],
  crane: ['M5 18h14v3H5z', 'M9 7l9-2-1 5z'],
  winch: ['M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10z', 'M12 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4z'],
  chain: ['M9 7a5 5 0 0 0 0 10c2 2 4 2 6 0a5 5 0 0 0 0-10c-2-2-4-2-6 0z', 'M8 9h8v6H8z'],
  buoy: ['M18 10a6 6 0 1 1-12 0 6 6 0 0 1 12 0z', 'M6 7h12v6H6z'],
}

const colours = [
  { name: 'Bauxite mix', primary: '#a84f2e', secondary: '#f2b49d', ink: '#244f4a', dark: false },
  { name: 'Teal mix', primary: '#628086', secondary: '#b9ded9', ink: '#244f4a', dark: false },
  { name: 'Fullfarge', primary: '#9ad8d1', secondary: '#a84f2e', ink: '#244f4a', dark: false },
  { name: 'Svart', primary: '#171816', secondary: '#777872', ink: '#090a09', dark: false },
  { name: 'Hvit', primary: '#ffffff', secondary: '#d9d9d4', ink: '#ffffff', dark: true },
] as const

const simpleColours = [
  { name: 'Teal', primary: '#244f4a', secondary: '#244f4a', ink: '#244f4a', dark: false },
  { name: 'Hvit', primary: '#ffffff', secondary: '#ffffff', ink: '#ffffff', dark: true },
  { name: 'Bauxite', primary: '#a84f2e', secondary: '#a84f2e', ink: '#a84f2e', dark: false },
] as const

type IconVariant = 'illustrated' | 'circle'
type Palette = (typeof colours)[number] | (typeof simpleColours)[number]

const categories = ['Alle', 'Hydraulikk', 'Maritim', 'Kontakt', 'Sosiale medier', 'Sted', 'Handling', 'Generelt'] as const

function iconStyle(palette: Palette = colours[0]) {
  return {
    '--icon-primary': palette.primary,
    '--icon-secondary': palette.secondary,
    '--icon-ink': palette.ink,
  } as CSSProperties
}

function Mark({
  icon,
  palette = colours[0],
  variant = 'illustrated',
  className = '',
}: {
  icon: IconDefinition
  palette?: Palette
  variant?: IconVariant
  className?: string
}) {
  if (variant === 'circle') {
    return (
      <svg className={className} style={iconStyle(palette)} viewBox="0 0 32 32" fill="none" stroke="var(--icon-ink)" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="16" cy="16" r="14" strokeWidth="1" />
        <g transform="translate(7 7) scale(.75)" strokeWidth="1.7">
          {icon.paths.map((path) => <path d={path} key={path} />)}
        </g>
      </svg>
    )
  }

  const accents = accentPaths[icon.name]
  return (
    <svg className={className} style={iconStyle(palette)} viewBox="0 0 24 24" fill="none" stroke="var(--icon-ink)" strokeWidth="1.45" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {accents?.[0] && <path d={accents[0]} fill="var(--icon-primary)" stroke="none" />}
      {accents?.[1] && <path d={accents[1]} fill="var(--icon-secondary)" stroke="none" />}
      {icon.paths.map((path) => <path d={path} key={path} />)}
    </svg>
  )
}

function svgString(icon: IconDefinition, palette: Palette = colours[0], variant: IconVariant = 'illustrated') {
  if (variant === 'circle') {
    const paths = icon.paths.map((path) => `    <path d="${path}" />`).join('\n')
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="${palette.ink}" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="16" cy="16" r="14" stroke-width="1" />
  <g transform="translate(7 7) scale(.75)" stroke-width="1.7">
${paths}
  </g>
</svg>`
  }

  const accents = accentPaths[icon.name]
  const fills = [
    accents?.[0] ? `  <path d="${accents[0]}" fill="${palette.primary}" stroke="none" />` : '',
    accents?.[1] ? `  <path d="${accents[1]}" fill="${palette.secondary}" stroke="none" />` : '',
  ].filter(Boolean).join('\n')
  const paths = icon.paths.map((path) => `  <path d="${path}" />`).join('\n')
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="${palette.ink}" stroke-width="1.45" stroke-linecap="round" stroke-linejoin="round">\n${fills}\n${paths}\n</svg>`
}

type ExportFile = {
  name: string
  data: Uint8Array
}

const textEncoder = new TextEncoder()

function crc32(data: Uint8Array) {
  let crc = 0xffffffff
  for (const byte of data) {
    crc ^= byte
    for (let bit = 0; bit < 8; bit += 1) {
      crc = (crc >>> 1) ^ (crc & 1 ? 0xedb88320 : 0)
    }
  }
  return (crc ^ 0xffffffff) >>> 0
}

function zipFiles(files: ExportFile[]) {
  const localParts: Uint8Array[] = []
  const centralParts: Uint8Array[] = []
  let offset = 0

  const write16 = (view: DataView, position: number, value: number) => view.setUint16(position, value, true)
  const write32 = (view: DataView, position: number, value: number) => view.setUint32(position, value, true)

  files.forEach((file) => {
    const name = textEncoder.encode(file.name)
    const checksum = crc32(file.data)
    const local = new Uint8Array(30 + name.length + file.data.length)
    const localView = new DataView(local.buffer)
    write32(localView, 0, 0x04034b50)
    write16(localView, 4, 20)
    write16(localView, 6, 0x0800)
    write16(localView, 8, 0)
    write32(localView, 14, checksum)
    write32(localView, 18, file.data.length)
    write32(localView, 22, file.data.length)
    write16(localView, 26, name.length)
    local.set(name, 30)
    local.set(file.data, 30 + name.length)
    localParts.push(local)

    const central = new Uint8Array(46 + name.length)
    const centralView = new DataView(central.buffer)
    write32(centralView, 0, 0x02014b50)
    write16(centralView, 4, 20)
    write16(centralView, 6, 20)
    write16(centralView, 8, 0x0800)
    write16(centralView, 10, 0)
    write32(centralView, 16, checksum)
    write32(centralView, 20, file.data.length)
    write32(centralView, 24, file.data.length)
    write16(centralView, 28, name.length)
    write32(centralView, 42, offset)
    central.set(name, 46)
    centralParts.push(central)
    offset += local.length
  })

  const centralSize = centralParts.reduce((sum, part) => sum + part.length, 0)
  const end = new Uint8Array(22)
  const endView = new DataView(end.buffer)
  write32(endView, 0, 0x06054b50)
  write16(endView, 8, files.length)
  write16(endView, 10, files.length)
  write32(endView, 12, centralSize)
  write32(endView, 16, offset)
  return new Blob([...localParts, ...centralParts, end], { type: 'application/zip' })
}

function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  link.click()
  window.setTimeout(() => URL.revokeObjectURL(url), 1000)
}

async function svgToPng(svg: string, size = 512) {
  const source = svg.replace('<svg ', `<svg width="${size}" height="${size}" `)
  const sourceUrl = URL.createObjectURL(new Blob([source], { type: 'image/svg+xml;charset=utf-8' }))
  const image = await new Promise<HTMLImageElement>((resolve, reject) => {
    const element = new Image()
    element.onload = () => resolve(element)
    element.onerror = () => {
      URL.revokeObjectURL(sourceUrl)
      reject(new Error('Nettleseren kunne ikke lese SVG-filen'))
    }
    element.src = sourceUrl
  })
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  const context = canvas.getContext('2d')
  if (!context) {
    URL.revokeObjectURL(sourceUrl)
    throw new Error('Kunne ikke opprette PNG')
  }
  context.clearRect(0, 0, size, size)
  context.drawImage(image, 0, 0, size, size)
  URL.revokeObjectURL(sourceUrl)
  const blob = await new Promise<Blob>((resolve, reject) => {
    canvas.toBlob((result) => result ? resolve(result) : reject(new Error('Kunne ikke eksportere PNG')), 'image/png')
  })
  return new Uint8Array(await blob.arrayBuffer())
}

export default function App() {
  const [variant, setVariant] = useState<IconVariant>('illustrated')
  const [colourIndex, setColourIndex] = useState(0)
  const [simpleColourIndex, setSimpleColourIndex] = useState(0)
  const [category, setCategory] = useState<(typeof categories)[number]>('Alle')
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(icons[0])
  const [copied, setCopied] = useState<string | null>(null)
  const [bulkStatus, setBulkStatus] = useState<'svg' | 'png' | null>(null)
  const [exportError, setExportError] = useState<string | null>(null)

  const activeColours: readonly Palette[] = variant === 'illustrated' ? colours : simpleColours
  const activeColourIndex = variant === 'illustrated' ? colourIndex : simpleColourIndex
  const colour = activeColours[activeColourIndex] ?? activeColours[0]
  const variantLabel = variant === 'illustrated' ? 'Illustrativ' : 'Enkel sirkel'
  const visibleIcons = useMemo(() => icons.filter((icon) => {
    const matchesCategory = category === 'Alle' || icon.category === category
    const search = query.trim().toLowerCase()
    return matchesCategory && (!search || icon.label.toLowerCase().includes(search) || icon.name.includes(search))
  }), [category, query])

  const copyIcon = async (icon: IconDefinition) => {
    await navigator.clipboard.writeText(svgString(icon, colour, variant))
    setCopied(icon.name)
    window.setTimeout(() => setCopied(null), 1600)
  }

  const downloadIcon = () => {
    const variantSlug = variant === 'circle' ? 'sirkel' : 'illustrativ'
    const blob = new Blob([svgString(selected, colour, variant)], { type: 'image/svg+xml' })
    downloadBlob(blob, `${selected.name}-${variantSlug}-${colour.name.toLowerCase().replaceAll(' ', '-')}.svg`)
  }

  const downloadAll = async (format: 'svg' | 'png') => {
    setBulkStatus(format)
    setExportError(null)
    try {
      const variantSlug = variant === 'circle' ? 'sirkel' : 'illustrativ'
      const folder = `${variantSlug}-${colour.name.toLowerCase().replaceAll(' ', '-')}`
      const files: ExportFile[] = []
      for (const icon of icons) {
        const svg = svgString(icon, colour, variant)
        files.push({
          name: `${folder}/${icon.name}.${format}`,
          data: format === 'svg' ? textEncoder.encode(svg) : await svgToPng(svg),
        })
      }
      downloadBlob(zipFiles(files), `ikoner-${folder}-${format}.zip`)
    } catch (error) {
      console.error('Eksportfeil:', error)
      setExportError('Eksporten stoppet. Prøv igjen eller velg en annen palett.')
    } finally {
      setBulkStatus(null)
    }
  }

  return (
    <main className="min-h-screen bg-canvas text-ink">
      <header className="border-b border-line bg-canvas/95">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 lg:px-10">
          <div className="flex items-center gap-3">
            <div className="flex size-9 items-center justify-center rounded-full bg-ink text-canvas">
              <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 7h14M5 12h9M5 17h5" /></svg>
            </div>
            <span className="font-display text-lg font-semibold tracking-tight">Merkevarebibliotek</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden text-sm text-muted sm:block">Ikonsystem · v1.0</span>
            <a className="category-button" href="/mbh-icon-library-update.zip" download>
              Last ned kildekode
            </a>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-[1440px] px-6 pb-16 pt-14 lg:px-10 lg:pt-20">
        <div className="grid gap-10 border-b border-line pb-14 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em]">
              <span className="size-2 rounded-full bg-bauxite" />
              Digitalt designsystem
            </span>
            <h1 className="font-display text-[clamp(3rem,7vw,6.75rem)] font-semibold leading-[0.92] tracking-[-0.065em]">
              Ikoner for alle <em className="font-normal text-bauxite">flater.</em>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted">
              {icons.length} små illustrasjoner med tealgrønne konturer, tydelige fargeflater og lekne detaljer.
            </p>
          </div>

          <div className="flex items-end gap-1.5" aria-label="Eksempel på ikonfamilien">
            {icons.slice(0, 5).map((icon) => (
              <div className="flex size-14 items-center justify-center" key={icon.name}>
                <Mark icon={icon} palette={colour} variant={variant} className="size-8" />
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-8 pt-8 lg:grid-cols-[1fr_320px] xl:grid-cols-[1fr_360px]">
          <div>
            <div className="mb-7 flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
              <div className="space-y-5">
                <div>
                  <span className="label">Velg stil</span>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <button className={`category-button ${variant === 'illustrated' ? 'is-active' : ''}`} onClick={() => setVariant('illustrated')} type="button">
                      Illustrativ
                    </button>
                    <button className={`category-button ${variant === 'circle' ? 'is-active' : ''}`} onClick={() => setVariant('circle')} type="button">
                      Enkel sirkel
                    </button>
                  </div>
                </div>
                <div>
                <span className="label">Velg farge</span>
                <div className="mt-3 flex flex-wrap gap-2">
                  {activeColours.map((item, index) => (
                    <button
                      className={`colour-button ${activeColourIndex === index ? 'is-active' : ''} ${item.name === 'Hvit' ? 'is-white' : ''}`}
                      key={item.name}
                      onClick={() => variant === 'illustrated' ? setColourIndex(index) : setSimpleColourIndex(index)}
                      type="button"
                    >
                      <span className="palette-dot" style={{ '--dot-one': item.primary, '--dot-two': item.secondary } as CSSProperties} />
                      {item.name}
                    </button>
                  ))}
                </div>
                </div>
              </div>
              <label className="search-box">
                <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></svg>
                <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Søk i ikoner" />
              </label>
            </div>

            <div className="no-scrollbar mb-6 flex gap-2 overflow-x-auto pb-1">
              {categories.map((item) => (
                <button className={`category-button ${category === item ? 'is-active' : ''}`} key={item} onClick={() => setCategory(item)} type="button">
                  {item}
                </button>
              ))}
            </div>

            {visibleIcons.length ? (
              <div className="grid grid-cols-2 border-l border-t border-line sm:grid-cols-3 xl:grid-cols-4">
                {visibleIcons.map((icon, index) => (
                  <button
                    className={`icon-card group ${selected.name === icon.name ? 'is-selected' : ''}`}
                    key={icon.name}
                    onClick={() => setSelected(icon)}
                    onDoubleClick={() => copyIcon(icon)}
                    style={{ animationDelay: `${Math.min(index * 25, 250)}ms` }}
                    type="button"
                  >
                    <span className={`icon-tile ${colour.dark ? 'dark-tile' : ''}`}>
                      <Mark icon={icon} palette={colour} variant={variant} className="size-14 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:rotate-[-2deg]" />
                    </span>
                    <span className="mt-6 flex w-full items-end justify-between gap-2">
                      <span className="text-left">
                        <span className="block text-sm font-semibold">{icon.label}</span>
                        <span className="mt-1 block text-xs text-muted">{icon.category}</span>
                      </span>
                      <span className="copy-hint">{copied === icon.name ? 'Kopiert' : 'SVG'}</span>
                    </span>
                  </button>
                ))}
              </div>
            ) : (
              <div className="flex min-h-72 items-center justify-center border border-line bg-white text-muted">Ingen ikoner funnet.</div>
            )}
          </div>

          <aside className="h-fit border border-line bg-white lg:sticky lg:top-6">
            <div className="border-b border-line p-6">
              <span className="label">Valgt ikon</span>
              <div className={`preview-stage mt-4 ${colour.dark ? 'dark-stage' : ''}`}>
                <Mark icon={selected} palette={colour} variant={variant} className="size-28" />
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="font-display text-2xl font-semibold">{selected.label}</h2>
                  <p className="mt-1 font-mono text-xs text-muted">icon-{selected.name}.svg</p>
                </div>
                <span className="rounded-full bg-soft px-2.5 py-1 text-xs font-semibold">{variant === 'circle' ? '32 × 32' : '24 × 24'}</span>
              </div>

              <dl className="my-6 grid grid-cols-2 gap-px overflow-hidden border border-line bg-line text-sm">
                <div className="bg-white p-3"><dt className="text-xs text-muted">Stil</dt><dd className="mt-1 font-semibold">{variantLabel}</dd></div>
                <div className="bg-white p-3"><dt className="text-xs text-muted">Farge</dt><dd className="mt-1 font-semibold">{colour.name}</dd></div>
              </dl>

              <button className="primary-button" onClick={() => copyIcon(selected)} type="button">
                {copied === selected.name ? 'SVG kopiert' : 'Kopier SVG'}
                <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 9h11v11H9z" /><path d="M15 9V4H4v11h5" /></svg>
              </button>
              <button className="secondary-button mt-2" onClick={downloadIcon} type="button">
                Last ned .svg
                <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3v12m-5-5 5 5 5-5M5 21h14" /></svg>
              </button>
              <p className="mt-4 text-xs leading-relaxed text-muted">Dobbeltklikk et ikon i oversikten for å kopiere det direkte.</p>

              <div className="my-6 border-t border-line" />
              <span className="label">Last ned hele settet</span>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Alle {icons.length} ikoner i <strong className="font-semibold text-ink">{colour.name}</strong>, samlet i én ZIP.
              </p>
              <div className="mt-4 grid grid-cols-2 gap-2" aria-live="polite">
                <button className="bulk-button" disabled={bulkStatus !== null} onClick={() => downloadAll('svg')} type="button">
                  <span className="font-mono text-xs">SVG</span>
                  <span>{bulkStatus === 'svg' ? 'Pakker…' : `Alle ${icons.length}`}</span>
                </button>
                <button className="bulk-button" disabled={bulkStatus !== null} onClick={() => downloadAll('png')} type="button">
                  <span className="font-mono text-xs">PNG</span>
                  <span>{bulkStatus === 'png' ? 'Lager…' : `Alle ${icons.length}`}</span>
                </button>
              </div>
              {exportError && <p className="mt-3 text-xs font-semibold text-bauxite" role="alert">{exportError}</p>}
              <p className="mt-3 text-xs leading-relaxed text-muted">PNG-filene eksporteres i 512 × 512 px med transparent bakgrunn.</p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}
