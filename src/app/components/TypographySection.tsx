import React from "react";
import { SectionLabel } from "./BrandSection";

const SCALE = [
  { label: "Display / H1", size: 56, weight: 800, ls: "-0.02em", sample: "Frå Aure til verdshava" },
  { label: "Heading / H2", size: 40, weight: 700, ls: "-0.01em", sample: "Lokal kompetanse, global rekkevidde" },
  { label: "Heading / H3", size: 28, weight: 700, ls: "0", sample: "Hydraulisk utstyr for maritimt miljø" },
  { label: "Subheading / H4", size: 20, weight: 600, ls: "0.02em", sample: "MB Hydraulikk AS, Mjosundet, Aure" },
  { label: "Body Large", size: 18, weight: 400, ls: "0", sample: "Vi utviklar og produserer vinsjar, kraner, davitar og sidepropellar i sjøvassbestandig aluminium for maritimt bruk over heile verda." },
  { label: "Body", size: 16, weight: 400, ls: "0", sample: "Kundedreve innovasjon og høg eigenproduksjon gjer oss til den kvalitetsbevisste kunden sitt fyrstevalg." },
  { label: "Caption / Label", size: 13, weight: 600, ls: "0.12em", sample: "SEISMIKK · SUBSEA · FORSVAR · FORSKING · OPPDRETT · FISKE" },
  { label: "Micro", size: 11, weight: 600, ls: "0.2em", sample: "EST. 1926 · MJOSUNDET, AURE · mbh.no" },
];

export function TypographySection() {
  return (
    <section style={{ padding: "80px 0" }}>
      <SectionLabel>03 — TYPOGRAFI</SectionLabel>
      <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 36, color: "#10464e", marginBottom: 8 }}>
        Typografisk skala — Plus Jakarta Sans
      </h2>
      <p style={{ color: "#858f8f", fontSize: 15, marginBottom: 48, maxWidth: 480 }}>
      Plus Jakarta Sans er ein moderne, geometrisk sans-serif med god lesbarheit og eit samtidsretta uttrykk. Éin skrifttype med fleire vekter byggjer eit fullt hierarki. Benytting av google fonts både på nettsida og i logoen gjer at alle, på tvers av landegrenser, kan få opp både nettside og logo korrekt, utan å måtte laste ned spesifikke fontfiler. 
      </p>

      {/* Font weights showcase */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16, marginBottom: 64, borderBottom: "1px solid rgba(16,70,78,0.12)", paddingBottom: 48 }}>
        {[
          { w: 300, label: "Light" },
          { w: 400, label: "Regular" },
          { w: 600, label: "SemiBold" },
          { w: 700, label: "Bold" },
          { w: 800, label: "ExtraBold" },
        ].map(({ w, label }) => (
          <div key={w}>
            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: w, fontSize: 32, color: "#10464e", lineHeight: 1 }}>Aa</div>
            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: w, fontSize: 13, color: "#10464e", marginTop: 8 }}>{label}</div>
            <div style={{ fontSize: 11, color: "#858f8f", letterSpacing: "0.1em", marginTop: 2 }}>{w}</div>
          </div>
        ))}
      </div>

      {/* Type scale */}
      <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
        {SCALE.map((item, i) => (
          <div
            key={i}
            style={{
              display: "grid",
              gridTemplateColumns: "160px 1fr",
              gap: 24,
              alignItems: "baseline",
              padding: "24px 0",
              borderBottom: "1px solid rgba(16,70,78,0.08)",
            }}
          >
            <div>
              <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", color: "#641919", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{item.label}</div>
              <div style={{ fontSize: 11, color: "#b9bcac", marginTop: 4 }}>{item.size}px / {item.weight}</div>
            </div>
            <div
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: item.size,
                fontWeight: item.weight,
                letterSpacing: item.ls,
                color: "#10464e",
                lineHeight: 1.2,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: item.size > 20 ? "nowrap" : "normal",
              }}
            >
              {item.sample}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
