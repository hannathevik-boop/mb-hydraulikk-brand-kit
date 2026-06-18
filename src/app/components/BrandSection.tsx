import React, { useState } from "react";
import { MBHLogo } from "./MBHLogo";

const COLORS = [
  { name: "Warm White", hex: "#faf6f1", token: "--mbh-warm", usage: "Background, paper", text: "#10464e" },
  { name: "Deep Teal", hex: "#10464e", token: "--mbh-teal", usage: "Primary, headings, navy", text: "#faf6f1" },
  { name: "Crimson", hex: "#641919", token: "--mbh-crimson", usage: "Accent, CTA, alert", text: "#faf6f1" },
  { name: "Sage", hex: "#b9bcac", token: "--mbh-sage", usage: "Secondary, dividers", text: "#10464e" },
  { name: "Slate", hex: "#858f8f", token: "--mbh-slate", usage: "Body text, labels", text: "#faf6f1" },
  { name: "Teal Light", hex: "#1a6070", token: "--mbh-teal-light", usage: "Hover, links, mid", text: "#faf6f1" },
  { name: "Teal Dark", hex: "#0a2e35", token: "--mbh-teal-dark", usage: "Footer, dark UI", text: "#faf6f1" },
  { name: "Warm Dark", hex: "#ede8e1", token: "--mbh-warm-dark", usage: "Muted bg, dividers", text: "#10464e" },
];

function ColorSwatch({ c }: { c: typeof COLORS[0] }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    try { navigator.clipboard?.writeText(c.hex); } catch (_) {}
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <button
      onClick={copy}
      className="group flex flex-col overflow-hidden transition-transform hover:-translate-y-1"
      style={{ border: `1px solid rgba(16,70,78,0.12)`, background: "#ffffff", padding: 0 }}
    >
      <div style={{ background: c.hex, height: 96 }} className="w-full" />
      <div className="p-3 bg-white" style={{ background: "#ffffff", textAlign: "left", margin: 8 }}>
        <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 13, color: "#10464e", letterSpacing: "0.04em", textAlign: "left" }}>{c.name}</div>
        <div style={{ fontFamily: "monospace", fontSize: 12, color: "#858f8f", marginTop: 2, textAlign: "left" }}>{c.hex}</div>
        <div style={{ fontSize: 11, color: "#b9bcac", marginTop: 4, textAlign: "left" }}>{c.usage}</div>
        <div style={{ fontSize: 10, color: copied ? "#641919" : "#b9bcac", marginTop: 4, transition: "color 0.2s", textAlign: "left" }}>
          {copied ? "Copied!" : "Click to copy"}
        </div>
      </div>
    </button>
  );
}

export function ColorPaletteSection() {
  return (
    <section style={{ padding: "80px 0" }}>
      <SectionLabel>02 — FARGEPALETT</SectionLabel>
      <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 36, color: "#10464e", marginBottom: 8 }}>
        Merkevarefarger
      </h2>
      <p style={{ color: "#858f8f", fontSize: 15, marginBottom: 48, maxWidth: 480 }}>
        Fargene er hentet fra materialene og omgivelsene vi arbeider med til daglig.
Fargane er henta frå materiala og miljøa vi jobbar i – aluminium, måla ståloverflater, maskineri og hav. Paletten byggjer på reelle referansar frå hydraulisk utstyr og maritim drift.      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 16 }}>
        {COLORS.map((c) => <ColorSwatch key={c.hex} c={c} />)}
      </div>
    </section>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      fontWeight: 600,
      fontSize: 11,
      letterSpacing: "0.2em",
      color: "#641919",
      marginBottom: 16,
      textTransform: "uppercase" as const,
    }}>
      {children}
    </div>
  );
}

const LOGO_VARIANTS: { variant: "full" | "mark" | "wordmark"; theme: "dark" | "light" | "crimson"; label: string; bg: string }[] = [
  { variant: "full", theme: "light", label: "Full — Light", bg: "#faf6f1" },
  { variant: "full", theme: "dark", label: "Full — Dark", bg: "#10464e" },
  { variant: "full", theme: "crimson", label: "Full — Crimson", bg: "#641919" },
  { variant: "mark", theme: "light", label: "Mark — Light", bg: "#faf6f1" },
  { variant: "mark", theme: "dark", label: "Mark — Dark", bg: "#10464e" },
  { variant: "wordmark", theme: "light", label: "Wordmark — Light", bg: "#faf6f1" },
  { variant: "wordmark", theme: "dark", label: "Wordmark — Dark", bg: "#10464e" },
  { variant: "wordmark", theme: "crimson", label: "Wordmark — Crimson", bg: "#641919" },
];

export function LogoSection() {
  return (
    <section style={{ padding: "80px 0" }}>
      <SectionLabel>01 — LOGO SYSTEM</SectionLabel>
      <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 36, color: "#10464e", marginBottom: 8 }}>
        Brand Identity
      </h2>
      <p style={{ color: "#858f8f", fontSize: 15, marginBottom: 48, maxWidth: 480 }}>
        MB Hydraulikk sitt merke refererer til industriell presisjon og norsk maritim arv — forankra i Mjosundet sidan 1926.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 16 }}>
        {LOGO_VARIANTS.map((v) => (
          <div
            key={v.label}
            style={{ background: v.bg, padding: 24, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16, border: "1px solid rgba(16,70,78,0.1)" }}
          >
            <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <MBHLogo variant={v.variant} theme={v.theme} size="lg" />
            </div>
            <div style={{ fontSize: 11, letterSpacing: "0.12em", color: v.bg === "#faf6f1" ? "#858f8f" : "rgba(255,255,255,0.5)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              {v.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
