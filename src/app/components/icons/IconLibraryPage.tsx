import React, { useMemo, useState, type CSSProperties } from "react";
import "../../../styles/icon-library.css";
import { SectionLabel } from "../BrandSection";
import { MbhIcon, type IconVariant } from "./Icon";
import { ICON_CATEGORIES, ICON_LIST, ICON_STROKE_WIDTH, type IconDefinition } from "./iconDefinitions";
import { CIRCLE_PALETTE_COLORS, CIRCLE_PALETTE_NAMES, ICON_PALETTES, ICON_PALETTE_NAMES, type IconPaletteName } from "./iconPalettes";
import { downloadIconPng, downloadIconSvg, downloadIconZip, iconToSvg } from "./iconExport";

type Category = "Alle" | (typeof ICON_CATEGORIES)[number];
const CATEGORIES: Category[] = ["Alle", ...ICON_CATEGORIES];

export function IconLibraryPage() {
  const [variant, setVariant] = useState<IconVariant>("illustrated");
  const [illustratedPalette, setIllustratedPalette] = useState<IconPaletteName>("teal");
  const [circlePalette, setCirclePalette] = useState<IconPaletteName>("teal");
  const [category, setCategory] = useState<Category>("Alle");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<IconDefinition>(ICON_LIST[0]);
  const [copied, setCopied] = useState<string | null>(null);
  const [bulk, setBulk] = useState<"svg" | "png" | null>(null);
  const [error, setError] = useState<string | null>(null);

  const palette = variant === "circle" ? circlePalette : illustratedPalette;
  const colors = ICON_PALETTES[palette];
  const paletteLabel = variant === "circle" && palette === "teal" ? "Teal" : variant === "circle" && palette === "bauxite" ? "Bauxite" : colors.label;
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ICON_LIST.filter(
      (i) => (category === "Alle" || i.category === category) && (!q || i.label.toLowerCase().includes(q) || i.name.includes(q)),
    );
  }, [category, query]);

  async function copy(icon: IconDefinition) {
    try {
      setError(null);
      await navigator.clipboard.writeText(iconToSvg(icon.name, palette, variant));
      setCopied(icon.name);
      window.setTimeout(() => setCopied(null), 1600);
    } catch (e) {
      console.error("Kopieringsfeil:", e);
      setError("Kunne ikke kopiere til utklippstavlen.");
    }
  }

  async function downloadAll(format: "svg" | "png") {
    setBulk(format);
    setError(null);
    try {
      await downloadIconZip(format, palette, variant);
    } catch (e) {
      console.error("Eksportfeil:", e);
      setError("Eksporten stoppet. Prøv igjen eller velg en annen palett.");
    } finally {
      setBulk(null);
    }
  }

  async function downloadPng() {
    setError(null);
    try {
      await downloadIconPng(selected.name, palette, variant);
    } catch (e) {
      console.error("Eksportfeil:", e);
      setError("Kunne ikke eksportere PNG. Prøv igjen.");
    }
  }

  return (
    <section className="mbh-icons" style={{ padding: "64px 0 80px" }}>
      <SectionLabel>IKONBIBLIOTEK</SectionLabel>
      <h1 style={{ fontWeight: 700, fontSize: 36, color: "#10464e", marginBottom: 8 }}>Ikoner for alle flater</h1>
      <p style={{ color: "#858f8f", fontSize: 15, marginBottom: 40, maxWidth: 560 }}>
        {ICON_LIST.length} ikoner med mørk tealgrønne konturer og tydelige fargeflater. Eksporterte filer har alltid transparent bakgrunn.
      </p>

      <div className="mi-layout">
        <div style={{ minWidth: 0 }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: 20, marginBottom: 24 }}>
            <div>
              <span className="mi-label">Velg stil</span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 12, marginBottom: 20 }}>
                <button type="button" className={`mi-chip ${variant === "illustrated" ? "is-active" : ""}`} onClick={() => setVariant("illustrated")}>Illustrativ</button>
                <button type="button" className={`mi-chip ${variant === "circle" ? "is-active" : ""}`} onClick={() => setVariant("circle")}>Enkel sirkel</button>
              </div>
              <span className="mi-label">Velg farge</span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 12 }}>
                {(variant === "circle" ? CIRCLE_PALETTE_NAMES : ICON_PALETTE_NAMES).map((name) => (
                  <button key={name} type="button" className={`mi-chip ${palette === name ? "is-active" : ""}`} onClick={() => variant === "circle" ? setCirclePalette(name) : setIllustratedPalette(name)}>
                    <span className="mi-dot" style={{ "--dot-one": variant === "circle" ? CIRCLE_PALETTE_COLORS[name] : ICON_PALETTES[name].primary, "--dot-two": variant === "circle" ? CIRCLE_PALETTE_COLORS[name] : ICON_PALETTES[name].secondary } as CSSProperties} />
                    {variant === "circle" && name === "teal" ? "Teal" : variant === "circle" && name === "bauxite" ? "Bauxite" : ICON_PALETTES[name].label}
                  </button>
                ))}
              </div>
            </div>
            <label className="mi-search">
              <MbhIcon name="search" palette="teal" size={16} />
              <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Søk i ikoner" aria-label="Søk i ikoner" />
            </label>
          </div>

          <div className="mi-scroll" style={{ display: "flex", gap: 8, overflowX: "auto", paddingBottom: 4, marginBottom: 24 }}>
            {CATEGORIES.map((c) => (
              <button key={c} type="button" className={`mi-chip ${category === c ? "is-active" : ""}`} onClick={() => setCategory(c)}>
                {c}
              </button>
            ))}
          </div>

          {visible.length ? (
            <div className="mi-grid">
              {visible.map((icon) => (
                <button
                  key={icon.name}
                  type="button"
                  className={`mi-card ${selected.name === icon.name ? "is-selected" : ""}`}
                  onClick={() => setSelected(icon)}
                  onDoubleClick={() => copy(icon)}
                >
                  <span className={`mi-tile ${colors.onDark ? "on-dark" : ""}`}>
                    <MbhIcon name={icon.name} palette={palette} variant={variant} size={56} />
                  </span>
                  <span style={{ marginTop: "auto", paddingTop: 20, display: "flex", width: "100%", alignItems: "flex-end", justifyContent: "space-between", gap: 8 }}>
                    <span>
                      <span style={{ display: "block", fontSize: 14, fontWeight: 600 }}>{icon.label}</span>
                      <span style={{ display: "block", fontSize: 12, color: "#858f8f", marginTop: 2 }}>{icon.category}</span>
                    </span>
                    <span className="mi-hint">{copied === icon.name ? "Kopiert" : "SVG"}</span>
                  </span>
                </button>
              ))}
            </div>
          ) : (
            <div style={{ display: "flex", minHeight: 240, alignItems: "center", justifyContent: "center", border: "1px solid var(--border)", background: "#fff", color: "#858f8f" }}>
              Ingen ikoner funnet.
            </div>
          )}
        </div>

        <aside className="mi-aside" style={{ position: "sticky", top: 24, minWidth: 0 }}>
          <div style={{ padding: 24, borderBottom: "1px solid var(--border)" }}>
            <span className="mi-label">Valgt ikon</span>
            <div className={`mi-stage ${colors.onDark ? "on-dark" : ""}`} style={{ marginTop: 16 }}>
              <MbhIcon name={selected.name} palette={palette} variant={variant} size={112} />
            </div>
          </div>
          <div style={{ padding: 24 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16 }}>
              <div>
                <h2 style={{ fontWeight: 700, fontSize: 22 }}>{selected.label}</h2>
                <p style={{ fontSize: 12, color: "#858f8f", marginTop: 4, fontFamily: "monospace" }}>{`<MbhIcon name="${selected.name}" />`}</p>
              </div>
              <span style={{ background: "var(--mbh-warm-dark)", padding: "4px 10px", fontSize: 12, fontWeight: 600 }}>{variant === "circle" ? "32 × 32" : "24 × 24"}</span>
            </div>
            <dl style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "var(--border)", border: "1px solid var(--border)", margin: "24px 0", fontSize: 14 }}>
              <div style={{ background: "#fff", padding: 12 }}><dt style={{ fontSize: 12, color: "#858f8f" }}>Strek</dt><dd style={{ fontWeight: 600, marginTop: 4 }}>{variant === "circle" ? 1 : ICON_STROKE_WIDTH} px</dd></div>
              <div style={{ background: "#fff", padding: 12 }}><dt style={{ fontSize: 12, color: "#858f8f" }}>Farge</dt><dd style={{ fontWeight: 600, marginTop: 4 }}>{paletteLabel}</dd></div>
            </dl>
            <button type="button" className="mi-btn primary" onClick={() => copy(selected)}>
              {copied === selected.name ? "SVG kopiert" : "Kopier SVG"}
              <MbhIcon name="document" palette="white" size={16} />
            </button>
            <button type="button" className="mi-btn secondary" style={{ marginTop: 8 }} onClick={() => downloadIconSvg(selected.name, palette, variant)}>
              Last ned .svg
              <MbhIcon name="download" palette="teal" size={16} />
            </button>
            <button type="button" className="mi-btn secondary" style={{ marginTop: 8 }} onClick={downloadPng}>
              Last ned .png
              <MbhIcon name="download" palette="teal" size={16} />
            </button>
            <p style={{ marginTop: 16, fontSize: 12, lineHeight: 1.6, color: "#858f8f" }}>Dobbeltklikk et ikon i oversikten for å kopiere det direkte.</p>

            <div style={{ borderTop: "1px solid var(--border)", margin: "24px 0" }} />
            <span className="mi-label">Last ned hele settet</span>
            <p style={{ marginTop: 8, fontSize: 14, lineHeight: 1.6, color: "#858f8f" }}>
              Alle {ICON_LIST.length} ikoner i <strong style={{ color: "#10464e" }}>{paletteLabel}</strong>, samlet i én ZIP.
            </p>
            <div style={{ marginTop: 16, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }} aria-live="polite">
              <button type="button" className="mi-bulk" disabled={bulk !== null} onClick={() => downloadAll("svg")}>
                <span style={{ fontFamily: "monospace" }}>SVG</span>
                <span>{bulk === "svg" ? "Pakker…" : `Alle ${ICON_LIST.length}`}</span>
              </button>
              <button type="button" className="mi-bulk" disabled={bulk !== null} onClick={() => downloadAll("png")}>
                <span style={{ fontFamily: "monospace" }}>PNG</span>
                <span>{bulk === "png" ? "Lager…" : `Alle ${ICON_LIST.length}`}</span>
              </button>
            </div>
            {error && <p role="alert" style={{ marginTop: 12, fontSize: 12, fontWeight: 600, color: "#a84f2e" }}>{error}</p>}
            <p style={{ marginTop: 12, fontSize: 12, lineHeight: 1.6, color: "#858f8f" }}>
              PNG-filene eksporteres i 512 × 512 px med transparent bakgrunn.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
