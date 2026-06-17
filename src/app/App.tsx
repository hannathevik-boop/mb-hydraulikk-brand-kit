import React, { useState } from "react";
import { MBHLogo } from "./components/MBHLogo";
import { LogoSection, ColorPaletteSection } from "./components/BrandSection";
import { TypographySection } from "./components/TypographySection";
import { IconSection } from "./components/IconSection";
import { UIComponentsSection } from "./components/UIComponentsSection";
import { MarketingFigures } from "./components/MarketingFigures";
import { WebsitePreviewSection } from "./components/WebsitePreview";
import { PatternSection } from "./components/PatternSection";

const SECTIONS = [
  { id: "logo", label: "Logo" },
  { id: "colors", label: "Fargar" },
  { id: "type", label: "Typografi" },
  { id: "icons", label: "Ikon" },
  { id: "components", label: "Komponentar" },
  { id: "figures", label: "Figurar" },
  { id: "patterns", label: "Mønster" },
  { id: "website", label: "Nettside" },
];

export default function App() {
  const [active, setActive] = useState("logo");

  function goTo(id: string) {
    setActive(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div style={{ background: "#faf6f1", minHeight: "100vh", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>

      {/* Header */}
      <header style={{ background: "#10464e", padding: "0 40px", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <MBHLogo variant="full" theme="dark" size="sm" />
        <nav style={{ display: "flex", gap: 4 }}>
          {SECTIONS.map(s => (
            <button key={s.id} onClick={() => goTo(s.id)} style={{
              padding: "6px 12px", background: "transparent", border: "none",
              color: active === s.id ? "#faf6f1" : "rgba(250,246,241,0.45)",
              fontSize: 12, fontWeight: 600, cursor: "pointer",
            }}>
              {s.label}
            </button>
          ))}
        </nav>
        <span style={{ fontSize: 11, color: "rgba(250,246,241,0.35)", letterSpacing: "0.15em" }}>BRAND KIT v1.0</span>
      </header>

      {/* Cover */}
      <div style={{ background: "#10464e", padding: "80px 80px 80px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 40 }}>
          <div style={{ width: 48, height: 2, background: "#641919" }} />
          <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.24em", color: "#b9bcac" }}>
            VISUELL IDENTITET · mbh.no · MJOSUNDET, AURE
          </span>
        </div>
        <h1 style={{ fontWeight: 800, fontSize: 80, color: "#faf6f1", letterSpacing: "-0.03em", lineHeight: 1, marginBottom: 24 }}>
          MB <span style={{ color: "#b9bcac" }}>Hydraulikk</span>
        </h1>
        <p style={{ fontSize: 17, color: "rgba(250,246,241,0.6)", lineHeight: 1.75, maxWidth: 640, marginBottom: 56 }}>
          Komplett visuell identitet — logo, fargar, typografi, ikonografi, UI-komponentar og nettside. For eit selskap som har utvikla og produsert hydraulisk utstyr for maritimt miljø sidan 1926.
        </p>
        <div style={{ display: "flex", gap: 48, borderTop: "1px solid rgba(185,188,172,0.15)", paddingTop: 40 }}>
          {[
            ["100 år", "STIFTA 1926"],
            ["Global", "REKKEVIDDE"],
            ["Aluminium", "SJØVASSBESTANDIG"],
            ["Mjosundet", "AURE, NOREG"],
          ].map(([v, l]) => (
            <div key={l}>
              <div style={{ fontWeight: 800, fontSize: 24, color: "#faf6f1" }}>{v}</div>
              <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.2em", color: "#858f8f", marginTop: 4 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Sections */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 80px" }}>
        <div id="logo"><LogoSection /></div>
        <div style={{ height: 1, background: "rgba(16,70,78,0.1)" }} />
        <div id="colors"><ColorPaletteSection /></div>
        <div style={{ height: 1, background: "rgba(16,70,78,0.1)" }} />
        <div id="type"><TypographySection /></div>
        <div style={{ height: 1, background: "rgba(16,70,78,0.1)" }} />
        <div id="icons"><IconSection /></div>
        <div style={{ height: 1, background: "rgba(16,70,78,0.1)" }} />
        <div id="components"><UIComponentsSection /></div>
        <div style={{ height: 1, background: "rgba(16,70,78,0.1)" }} />
        <div id="figures"><MarketingFigures /></div>
        <div style={{ height: 1, background: "rgba(16,70,78,0.1)" }} />
        <div id="patterns"><PatternSection /></div>
        <div style={{ height: 1, background: "rgba(16,70,78,0.1)" }} />
        <div id="website"><WebsitePreviewSection /></div>

        <div style={{ borderTop: "1px solid rgba(16,70,78,0.1)", padding: "32px 0", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <MBHLogo variant="wordmark" theme="light" size="sm" />
          <span style={{ fontSize: 11, color: "#b9bcac", letterSpacing: "0.1em" }}>BRAND KIT v1.0 · 2026 · MB HYDRAULIKK AS · MJOSUNDET, AURE</span>
        </div>
      </div>

    </div>
  );
}
