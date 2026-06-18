import React from "react";
import { SectionLabel } from "./BrandSection";
import { MBHMark } from "./MBHLogo";
import { IconHydraulic, IconPropeller, IconBoat, IconPump, IconCylinder } from "./MBHIcons";
import lynetSvg from "./ui/svg-logos-test/lynet_.svg";
import mbLightSvg from "./ui/svg-logos-test/mb-light.svg";

function PatternTile({ bg, children, label }: { bg: string; children: React.ReactNode; label: string }) {
  return (
    <div>
      <div style={{ background: bg, height: 180, overflow: "hidden", position: "relative" }}>
        {children}
      </div>
      <div style={{ fontSize: 11, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, letterSpacing: "0.12em", color: "#858f8f", marginTop: 10 }}>{label}</div>
    </div>
  );
}

export function PatternSection() {
  return (
    <section style={{ padding: "80px 0" }}>
      <SectionLabel>08 — MØNSTRE OG TEKSTURER</SectionLabel>
      <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 36, color: "#10464e", marginBottom: 8 }}>
        Merkevaremønstre
      </h2>
      <p style={{ color: "#858f8f", fontSize: 15, marginBottom: 48, maxWidth: 480 }}>
        Gjentakende grafiske motiver for bakgrunner, emballasje og trykt materiale.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>

        {/* Hex grid pattern */}
        <PatternTile bg="#10464e" label="HEX GRID — On Teal">
          <svg width="100%" height="100%" style={{ position: "absolute", inset: 0 }}>
            {Array.from({ length: 6 }).map((_, row) =>
              Array.from({ length: 8 }).map((_, col) => {
                const x = col * 40 + (row % 2 === 0 ? 0 : 20);
                const y = row * 36 - 10;
                return (
                  <polygon
                    key={`${row}-${col}`}
                    points={`${x+20},${y} ${x+36},${y+10} ${x+36},${y+30} ${x+20},${y+40} ${x+4},${y+30} ${x+4},${y+10}`}
                    fill="none"
                    stroke="rgba(250,246,241,0.12)"
                    strokeWidth="1"
                  />
                );
              })
            )}
          </svg>
        </PatternTile>

        {/* Wave repeat */}
        <PatternTile bg="#faf6f1" label="WAVE REPEAT — On Warm">
          <svg width="100%" height="100%" style={{ position: "absolute", inset: 0 }}>
            {Array.from({ length: 8 }).map((_, i) => (
              <path
                key={i}
                d={`M-20 ${i * 24 + 4} Q15 ${i * 24 - 6} 50 ${i * 24 + 4} Q85 ${i * 24 + 14} 120 ${i * 24 + 4} Q155 ${i * 24 - 6} 190 ${i * 24 + 4} Q225 ${i * 24 + 14} 260 ${i * 24 + 4} Q295 ${i * 24 - 6} 340 ${i * 24 + 4} Q375 ${i * 24 + 14} 420 ${i * 24 + 4}`}
                fill="none"
                stroke="rgba(16,70,78,0.1)"
                strokeWidth="1.5"
              />
            ))}
          </svg>
        </PatternTile>

        {/* Mark watermark */}
        <PatternTile bg="#0a2e35" label="MARK WATERMARK — On Dark">
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ position: "relative", width: 280, height: 280, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img src={lynetSvg} alt="lightning" style={{ width: 280, height: 280, opacity: 0.08 }} />
              <img src={mbLightSvg} alt="MB" style={{ position: "absolute", width: 200, height: 200, opacity: 0.06 }} />
            </div>
          </div>
          <div style={{ position: "absolute", bottom: 20, left: 20, display: "flex", alignItems: "center", gap: 6 }}>
            <img src={lynetSvg} alt="lightning" style={{ width: 24, height: 24, opacity: 0.7 }} />
            <img src={mbLightSvg} alt="MB" style={{ width: 28, height: 28, opacity: 0.7 }} />
          </div>
        </PatternTile>

        {/* Grid ruled */}
        <PatternTile bg="#641919" label="RULED GRID — On Crimson">
          <svg width="100%" height="100%" style={{ position: "absolute", inset: 0 }}>
            {Array.from({ length: 12 }).map((_, i) => (
              <line key={`h${i}`} x1="0" y1={i * 16} x2="400" y2={i * 16} stroke="rgba(250,246,241,0.1)" strokeWidth="0.75" />
            ))}
            {Array.from({ length: 20 }).map((_, i) => (
              <line key={`v${i}`} x1={i * 20} y1="0" x2={i * 20} y2="200" stroke="rgba(250,246,241,0.1)" strokeWidth="0.75" />
            ))}
          </svg>
        </PatternTile>

        {/* Diagonal lines */}
        <PatternTile bg="#ede8e1" label="HATCH — On Warm Dark">
          <svg width="100%" height="100%" style={{ position: "absolute", inset: 0 }}>
            <defs>
              <pattern id="hatch" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <line x1="0" y1="0" x2="0" y2="20" stroke="rgba(16,70,78,0.12)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hatch)" />
          </svg>
        </PatternTile>

        {/* Icon scatter */}
        <PatternTile bg="#b9bcac" label="ICON SCATTER — On Sage">
          <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
            {[
              { Icon: IconHydraulic, x: 20, y: 20, rot: -15, op: 0.3, type: "icon" },
              { Icon: IconPump, x: 80, y: 60, rot: 0, op: 0.2, type: "icon" },
              { Icon: IconPropeller, x: 160, y: 10, rot: 5, op: 0.3, type: "icon" },
              { Icon: IconBoat, x: 250, y: 80, rot: 20, op: 0.15, type: "icon" },
              { Icon: IconCylinder, x: 320, y: 30, rot: -10, op: 0.25, type: "icon" },
              { Icon: IconHydraulic, x: 60, y: 120, rot: 0, op: 0.2, type: "icon" },
              { Icon: null, x: 200, y: 130, rot: 10, op: 0.2, type: "lightning" },
            ].map(({ Icon, x, y, rot, op, type }, i) => (
              <div key={i} style={{ position: "absolute", left: x, top: y, transform: `rotate(${rot}deg)`, opacity: op }}>
                {type === "lightning" ? (
                  <img src={lynetSvg} alt="lightning" style={{ width: 48, height: 48 }} />
                ) : (
                  <Icon size={48} color="#10464e" strokeWidth={1.5} />
                )}
              </div>
            ))}
          </div>
        </PatternTile>

      </div>
    </section>
  );
}
