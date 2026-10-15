import React from "react";
import { Link } from "react-router";
import { SectionLabel } from "./BrandSection";
import { MbhIcon } from "./icons/Icon";
import { ICON_LIST } from "./icons/iconDefinitions";
import { ICON_PAGE_PATH } from "./BrandKitHeader";

export function IconSection() {
  return (
    <section style={{ padding: "80px 0" }}>
      <SectionLabel>04 — ICON SET</SectionLabel>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 24, marginBottom: 48 }}>
        <div>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 36, color: "#10464e", marginBottom: 8 }}>
            Ikoner for hydraulikk, maritim og digitale flater
          </h2>
          <p style={{ color: "#858f8f", fontSize: 15, maxWidth: 520 }}>
            {ICON_LIST.length} ikoner i ett felles system: 24 px-rutenett, mørk tealgrønn kontur og to fargelag. Søk, velg palett og last ned som SVG eller PNG i ikonbiblioteket.
          </p>
        </div>
        <Link
          to={ICON_PAGE_PATH}
          style={{ background: "#10464e", color: "#faf6f1", padding: "10px 20px", fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textDecoration: "none" }}
        >
          Åpne ikonbiblioteket →
        </Link>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(96px, 1fr))", gap: 1, background: "rgba(16,70,78,0.1)", border: "1px solid rgba(16,70,78,0.1)" }}>
        {ICON_LIST.map((icon) => (
          <div key={icon.name} style={{ background: "#fff", padding: "20px 8px 12px", display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
            <MbhIcon name={icon.name} palette="bauxite" size={36} />
            <span style={{ fontSize: 10, letterSpacing: "0.1em", color: "#858f8f", fontWeight: 600 }}>{icon.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
