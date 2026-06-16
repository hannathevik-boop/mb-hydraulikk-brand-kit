# MB Hydraulikk — Brand Kit

Komplett visuell identitet for MB Hydraulikk AS.
Hydraulisk utstyr for maritimt miljø sidan 1926 · Mjosundet, Aure · mbh.no

## Innhald

| Seksjon | Skildring |
|---------|-----------|
| Logo system | Merke, wordmark og full logo i alle varianter |
| Fargepalett | 8 merkevarefargerar med hex-kodar og bruksrettleiing |
| Typografi | Plus Jakarta Sans — komplett typeskala og vekter |
| Ikonsettet | 16 SVG-ikon for hydraulikk og maritimt bruk |
| UI-komponentar | Knappar, kort, merke og skjemakomponentar |
| Datavisualisering | Grafar og KPI-fliser (illustrative figurar) |
| Mønster og teksturar | Gjenbrukbare bakgrunnsmotiv |
| Nettside-mockup | Komplett nettside — nav, hero, tenester, footer |

## Kome i gang

```bash
# Installer avhengigheitar
pnpm install

# Start utviklingsserver
pnpm dev

# Bygg for produksjon
pnpm build

# Førehandsvis produksjonsbygg
pnpm preview
```

Ope i nettlesar: **http://localhost:5173**

## Prosjektstruktur

```
src/
├── app/
│   ├── App.tsx                    # Hovudkomponent
│   └── components/
│       ├── MBHLogo.tsx            # Logo og merke
│       ├── MBHIcons.tsx           # SVG-ikon (16 stk)
│       ├── BrandSection.tsx       # Logo + fargepalett
│       ├── TypographySection.tsx  # Typografiskala
│       ├── IconSection.tsx        # Ikonseksjon
│       ├── UIComponentsSection.tsx# UI-komponentar
│       ├── MarketingFigures.tsx   # Grafar og figurar
│       ├── PatternSection.tsx     # Mønster og teksturar
│       └── WebsitePreview.tsx     # Nettside-mockup
└── styles/
    ├── index.css                  # Hovudimport
    ├── fonts.css                  # Plus Jakarta Sans
    ├── theme.css                  # MB Hydraulikk designtokens
    └── globals.css                # Globale stilar
```

## Designtokens

| Token | Verdi | Bruk |
|-------|-------|------|
| `--mbh-warm` | `#faf6f1` | Bakgrunn, papir |
| `--mbh-teal` | `#10464e` | Primær, overskrifter |
| `--mbh-crimson` | `#641919` | Aksent, CTA |
| `--mbh-sage` | `#b9bcac` | Sekundær, skiljelinjer |
| `--mbh-slate` | `#858f8f` | Brødtekst, etiketter |
| `--mbh-teal-dark` | `#0a2e35` | Footer, mørk UI |

## Merke

**MB Hydraulikk AS**
- Stifta: 1926 (100-årsjubileum 2026)
- Stad: Mjosundet, 6697 Aure, Noreg
- Nett: mbh.no
- Slagord: *Lokal kompetanse, global rekkevidde*

## Teknologi

- React 18 + TypeScript
- Vite 6
- Tailwind CSS v4
- Plus Jakarta Sans (Google Fonts)
- Pure SVG-ikon (ingen ikonbibliotek)
