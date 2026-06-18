import React, { useState } from "react";
import { SectionLabel } from "./BrandSection";
import {
  IconAnchor, IconValve, IconPiston, IconPressureGauge, IconPropeller,
  IconWave, IconShip, IconCompass, IconChain, IconGear, IconPipe,
  IconHydraulic, IconBuoy, IconWrench, IconOilDrop, IconShield
} from "./MBHIcons";

const ICONS = [
  { name: "Anchor", component: IconAnchor },
  { name: "Valve", component: IconValve },
  { name: "Piston", component: IconPiston },
  { name: "Pressure Gauge", component: IconPressureGauge },
  { name: "Propeller", component: IconPropeller },
  { name: "Wave", component: IconWave },
  { name: "Ship", component: IconShip },
  { name: "Compass", component: IconCompass },
  { name: "Chain", component: IconChain },
  { name: "Gear", component: IconGear },
  { name: "Pipe", component: IconPipe },
  { name: "Hydraulic", component: IconHydraulic },
  { name: "Buoy", component: IconBuoy },
  { name: "Wrench", component: IconWrench },
  { name: "Oil Drop", component: IconOilDrop },
  { name: "Shield", component: IconShield },
];

const COLOR_VARIANTS = [
  { bg: "#faf6f1", color: "#10464e", label: "On Warm" },
  { bg: "#10464e", color: "#faf6f1", label: "On Teal" },
  { bg: "#641919", color: "#faf6f1", label: "On Crimson" },
  { bg: "#0a2e35", color: "#b9bcac", label: "On Dark" },
];

export function IconSection() {
  const [activeColor, setActiveColor] = useState(0);
  const cv = COLOR_VARIANTS[activeColor];

  return (
    <section style={{ padding: "80px 0" }}>
      <SectionLabel>04 — ICON SET</SectionLabel>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 24, marginBottom: 48 }}>
        <div>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 36, color: "#10464e", marginBottom: 8 }}>
            Maritime & Hydraulics Icons
          </h2>
          <p style={{ color: "#858f8f", fontSize: 15, maxWidth: 480 }}>
             20 tilpassa SVG-ikon teikna på eit 48 px rutenett. 2 px strek, avrunda samanføyingar. Utvikla for bruk i hydraulikk- og maritime kontekstar.          </p>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          {COLOR_VARIANTS.map((cv, i) => (
            <button
              key={i}
              onClick={() => setActiveColor(i)}
              style={{
                background: cv.bg,
                border: activeColor === i ? `2px solid #641919` : "2px solid rgba(16,70,78,0.2)",
                padding: "6px 14px",
                fontSize: 11,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 600,
                letterSpacing: "0.1em",
                color: cv.bg === "#faf6f1" ? "#10464e" : "#faf6f1",
                cursor: "pointer",
                transition: "all 0.15s",
              }}
            >
              {cv.label}
            </button>
          ))}
        </div>
      </div>

      <div
        style={{
          background: cv.bg,
          border: "1px solid rgba(16,70,78,0.1)",
          padding: 40,
          transition: "background 0.3s",
        }}
      >
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))", gap: 8 }}>
          {ICONS.map(({ name, component: Icon }) => (
            <div
              key={name}
              className="group"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 12,
                padding: "24px 16px",
                cursor: "default",
                transition: "background 0.15s",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.06)")}
              onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
            >
              <Icon size={40} color={cv.color} strokeWidth={2} />
              <div style={{
                fontSize: 11,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 600,
                letterSpacing: "0.08em",
                color: cv.color,
                opacity: 0.7,
                textAlign: "center",
              }}>
                {name}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sizes */}
      <div style={{ marginTop: 40, padding: "32px 40px", background: "#10464e", display: "flex", alignItems: "center", gap: 40, flexWrap: "wrap" }}>
        <div style={{ fontSize: 11, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, letterSpacing: "0.15em", color: "#b9bcac" }}>SIZES</div>
        {[16, 24, 32, 48, 64].map(sz => (
          <div key={sz} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
            <IconCompass size={sz} color="#faf6f1" strokeWidth={2} />
            <div style={{ fontSize: 10, color: "#858f8f", fontFamily: "monospace" }}>{sz}px</div>
          </div>
        ))}
      </div>
    </section>
  );
}
