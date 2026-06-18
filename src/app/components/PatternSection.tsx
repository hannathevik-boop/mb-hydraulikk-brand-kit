import React, { useRef, useState } from "react";
import { toPng } from "html-to-image";
import { SectionLabel } from "./BrandSection";
import { MBHMark } from "./MBHLogo";
import { IconHydraulic, IconPropeller, IconBoat, IconPump, IconCylinder } from "./MBHIcons";
import lynetSvg from "./ui/svg-logos-test/lynet_.svg";
import mbLightSvg from "./ui/svg-logos-test/mb-light.svg";

type PatternKey = "hex" | "wave" | "watermark" | "grid" | "hatch" | "scatter";

function PatternTile({
  bg,
  children,
  label,
  onClick,
}: {
  bg: string;
  children: React.ReactNode;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        width: "100%",
        textAlign: "left",
        background: "transparent",
        border: "none",
        cursor: "pointer",
        padding: 0,
      }}
      aria-label={`Opne ${label} som A4 og last ned`}
    >
      <div style={{ background: bg, height: 180, overflow: "hidden", position: "relative" }}>
        {children}
      </div>
      <div style={{ fontSize: 11, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, letterSpacing: "0.12em", color: "#858f8f", marginTop: 10 }}>{label}</div>
    </button>
  );
}

export function PatternSection() {
  const [selectedPattern, setSelectedPattern] = useState<PatternKey | null>(null);
  const a4Ref = useRef<HTMLDivElement>(null);

  async function downloadA4Pattern() {
    if (!a4Ref.current || !selectedPattern) return;

    try {
      const dataUrl = await toPng(a4Ref.current, { cacheBust: true, pixelRatio: 2 });
      const link = document.createElement("a");
      link.download = `mbh-pattern-${selectedPattern}-A4.png`;
      link.href = dataUrl;
      link.click();
    } catch {
      window.alert("Kunne ikkje laste ned no. Prøv igjen.");
    }
  }

  function renderPatternContent(key: PatternKey, mode: "tile" | "a4") {
    const isA4 = mode === "a4";
    const iconSize = isA4 ? 120 : 48;

    if (key === "hex") {
      return (
        <svg width="100%" height="100%" style={{ position: "absolute", inset: 0 }}>
          {Array.from({ length: isA4 ? 18 : 6 }).map((_, row) =>
            Array.from({ length: isA4 ? 14 : 8 }).map((__, col) => {
              const xStep = isA4 ? 160 : 40;
              const yStep = isA4 ? 140 : 36;
              const x = col * xStep + (row % 2 === 0 ? 0 : xStep / 2);
              const y = row * yStep - 12;
              const scale = isA4 ? 4 : 1;

              return (
                <polygon
                  key={`${row}-${col}`}
                  points={`${x + 20 * scale},${y} ${x + 36 * scale},${y + 10 * scale} ${x + 36 * scale},${y + 30 * scale} ${x + 20 * scale},${y + 40 * scale} ${x + 4 * scale},${y + 30 * scale} ${x + 4 * scale},${y + 10 * scale}`}
                  fill="none"
                  stroke="rgba(250,246,241,0.12)"
                  strokeWidth="1"
                />
              );
            }),
          )}
        </svg>
      );
    }

    if (key === "wave") {
      return (
        <svg width="100%" height="100%" style={{ position: "absolute", inset: 0 }}>
          {Array.from({ length: isA4 ? 30 : 8 }).map((_, i) => {
            const yBase = isA4 ? i * 100 + 20 : i * 24 + 4;
            return (
              <path
                key={i}
                d={`M-20 ${yBase} Q15 ${yBase - 10} 50 ${yBase} Q85 ${yBase + 10} 120 ${yBase} Q155 ${yBase - 10} 190 ${yBase} Q225 ${yBase + 10} 260 ${yBase} Q295 ${yBase - 10} 340 ${yBase} Q375 ${yBase + 10} 420 ${yBase}`}
                fill="none"
                stroke="rgba(16,70,78,0.1)"
                strokeWidth={isA4 ? "4" : "1.5"}
              />
            );
          })}
        </svg>
      );
    }

    if (key === "watermark") {
      return (
        <>
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ position: "relative", width: isA4 ? 900 : 280, height: isA4 ? 900 : 280, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img src={lynetSvg} alt="lightning" style={{ width: isA4 ? 900 : 280, height: isA4 ? 900 : 280, opacity: 0.08 }} />
              <img src={mbLightSvg} alt="MB" style={{ position: "absolute", width: isA4 ? 620 : 200, height: isA4 ? 620 : 200, opacity: 0.06 }} />
            </div>
          </div>
          <div style={{ position: "absolute", bottom: isA4 ? 60 : 20, left: isA4 ? 60 : 20, display: "flex", alignItems: "center", gap: 6 }}>
            <img src={lynetSvg} alt="lightning" style={{ width: isA4 ? 72 : 24, height: isA4 ? 72 : 24, opacity: 0.7 }} />
            <img src={mbLightSvg} alt="MB" style={{ width: isA4 ? 84 : 28, height: isA4 ? 84 : 28, opacity: 0.7 }} />
          </div>
        </>
      );
    }

    if (key === "grid") {
      return (
        <svg width="100%" height="100%" style={{ position: "absolute", inset: 0 }}>
          {Array.from({ length: isA4 ? 72 : 12 }).map((_, i) => (
            <line key={`h${i}`} x1="0" y1={i * (isA4 ? 42 : 16)} x2="2400" y2={i * (isA4 ? 42 : 16)} stroke="rgba(250,246,241,0.1)" strokeWidth={isA4 ? "2" : "0.75"} />
          ))}
          {Array.from({ length: isA4 ? 72 : 20 }).map((_, i) => (
            <line key={`v${i}`} x1={i * (isA4 ? 34 : 20)} y1="0" x2={i * (isA4 ? 34 : 20)} y2="3400" stroke="rgba(250,246,241,0.1)" strokeWidth={isA4 ? "2" : "0.75"} />
          ))}
        </svg>
      );
    }

    if (key === "hatch") {
      return (
        <svg width="100%" height="100%" style={{ position: "absolute", inset: 0 }}>
          <defs>
            <pattern id={`hatch-${mode}`} x="0" y="0" width={isA4 ? "40" : "20"} height={isA4 ? "40" : "20"} patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2={isA4 ? "40" : "20"} stroke="rgba(16,70,78,0.12)" strokeWidth={isA4 ? "2" : "1"} />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#hatch-${mode})`} />
        </svg>
      );
    }

    return (
      <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
        {[
          { Icon: IconHydraulic, x: 20, y: 20, rot: -15, op: 0.3, type: "icon" },
          { Icon: IconPump, x: 80, y: 60, rot: 0, op: 0.2, type: "icon" },
          { Icon: IconPropeller, x: 160, y: 10, rot: 5, op: 0.3, type: "icon" },
          { Icon: IconBoat, x: 250, y: 80, rot: 20, op: 0.15, type: "icon" },
          { Icon: IconCylinder, x: 320, y: 30, rot: -10, op: 0.25, type: "icon" },
          { Icon: IconHydraulic, x: 60, y: 120, rot: 0, op: 0.2, type: "icon" },
          { Icon: IconPropeller, x: 220, y: 120, rot: -8, op: 0.22, type: "icon" },
          { Icon: IconPump, x: 300, y: 120, rot: 12, op: 0.18, type: "icon" },
          { Icon: IconHydraulic, x: 200, y: 130, rot: 10, op: 0.22, type: "lightning" },
          { Icon: IconHydraulic, x: 120, y: 24, rot: -12, op: 0.2, type: "lightning" },
          { Icon: IconHydraulic, x: 338, y: 96, rot: 8, op: 0.18, type: "lightning" },
        ].map(({ Icon, x, y, rot, op, type }, i) => {
          const scale = isA4 ? 4.8 : 1;
          return (
            <div key={i} style={{ position: "absolute", left: x * scale, top: y * scale, transform: `rotate(${rot}deg)`, opacity: op }}>
              {type === "lightning" ? (
                <img src={lynetSvg} alt="lightning" style={{ width: iconSize, height: iconSize }} />
              ) : (
                <Icon size={iconSize} color="#10464e" strokeWidth={1.5} />
              )}
            </div>
          );
        })}
      </div>
    );
  }

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
        <PatternTile bg="#10464e" label="HEX GRID — On Teal" onClick={() => setSelectedPattern("hex")}>
          {renderPatternContent("hex", "tile")}
        </PatternTile>

        {/* Wave repeat */}
        <PatternTile bg="#faf6f1" label="WAVE REPEAT — On Warm" onClick={() => setSelectedPattern("wave")}>
          {renderPatternContent("wave", "tile")}
        </PatternTile>

        {/* Mark watermark */}
        <PatternTile bg="#0a2e35" label="MARK WATERMARK — On Dark" onClick={() => setSelectedPattern("watermark")}>
          {renderPatternContent("watermark", "tile")}
        </PatternTile>

        {/* Grid ruled */}
        <PatternTile bg="#641919" label="RULED GRID — On Crimson" onClick={() => setSelectedPattern("grid")}>
          {renderPatternContent("grid", "tile")}
        </PatternTile>

        {/* Diagonal lines */}
        <PatternTile bg="#ede8e1" label="HATCH — On Warm Dark" onClick={() => setSelectedPattern("hatch")}>
          {renderPatternContent("hatch", "tile")}
        </PatternTile>

        {/* Icon scatter */}
        <PatternTile bg="#b9bcac" label="ICON SCATTER — On Sage" onClick={() => setSelectedPattern("scatter")}>
          {renderPatternContent("scatter", "tile")}
        </PatternTile>

      </div>

      {selectedPattern && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 60,
            background: "rgba(10,46,53,0.65)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 16,
          }}
          onClick={() => setSelectedPattern(null)}
        >
          <div
            style={{
              width: "min(92vw, 860px)",
              background: "#faf6f1",
              border: "1px solid rgba(16,70,78,0.15)",
              padding: 16,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12, gap: 8, flexWrap: "wrap" }}>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 14, color: "#10464e", letterSpacing: "0.08em" }}>
                A4 FORHÅNDSVISNING
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                <button
                  type="button"
                  onClick={downloadA4Pattern}
                  style={{ background: "#10464e", color: "#faf6f1", border: "none", padding: "10px 14px", fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", cursor: "pointer" }}
                >
                  LAST NED A4 (PNG)
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedPattern(null)}
                  style={{ background: "transparent", color: "#10464e", border: "1px solid #10464e", padding: "10px 14px", fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", cursor: "pointer" }}
                >
                  LUKK
                </button>
              </div>
            </div>

            <div
              ref={a4Ref}
              style={{
                width: "min(100%, 700px)",
                aspectRatio: "210 / 297",
                margin: "0 auto",
                position: "relative",
                overflow: "hidden",
                background:
                  selectedPattern === "hex"
                    ? "#10464e"
                    : selectedPattern === "wave"
                      ? "#faf6f1"
                      : selectedPattern === "watermark"
                        ? "#0a2e35"
                        : selectedPattern === "grid"
                          ? "#641919"
                          : selectedPattern === "hatch"
                            ? "#ede8e1"
                            : "#b9bcac",
              }}
            >
              {renderPatternContent(selectedPattern, "a4")}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
