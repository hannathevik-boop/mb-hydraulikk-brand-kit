import React from "react";
import { SectionLabel } from "./BrandSection";
import { MBHMark } from "./MBHLogo";
import { IconWave, IconAnchor, IconGear } from "./MBHIcons";

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
      <SectionLabel>08 — PATTERNS & TEXTURES</SectionLabel>
      <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 36, color: "#10464e", marginBottom: 8 }}>
        Brand Patterns
      </h2>
      <p style={{ color: "#858f8f", fontSize: 15, marginBottom: 48, maxWidth: 480 }}>
        Repeating graphic motifs for backgrounds, packaging, and print collateral.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>

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
            <MBHMark color="rgba(250,246,241,0.06)" size={280} />
          </div>
          <div style={{ position: "absolute", bottom: 20, left: 20 }}>
            <MBHMark color="rgba(250,246,241,0.7)" size={48} />
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
              { Icon: IconAnchor, x: 20, y: 20, rot: -15, op: 0.3 },
              { Icon: IconGear, x: 80, y: 60, rot: 0, op: 0.2 },
              { Icon: IconWave, x: 160, y: 10, rot: 5, op: 0.3 },
              { Icon: IconAnchor, x: 250, y: 80, rot: 20, op: 0.15 },
              { Icon: IconGear, x: 320, y: 30, rot: -10, op: 0.25 },
              { Icon: IconWave, x: 60, y: 120, rot: 0, op: 0.2 },
              { Icon: IconAnchor, x: 200, y: 130, rot: 10, op: 0.2 },
            ].map(({ Icon, x, y, rot, op }, i) => (
              <div key={i} style={{ position: "absolute", left: x, top: y, transform: `rotate(${rot}deg)`, opacity: op }}>
                <Icon size={48} color="#10464e" strokeWidth={1.5} />
              </div>
            ))}
          </div>
        </PatternTile>

      </div>
    </section>
  );
}
