import React, { useState, useEffect } from "react";
import { SectionLabel } from "./BrandSection";
import {
  IconAnchor, IconValve, IconPiston, IconPressureGauge, IconPropeller,
  IconWave, IconShip, IconBoat, IconCrane, IconWinch, IconCompass,
  IconChain, IconGear, IconPipe, IconHydraulic, IconCylinder, IconPump,
  IconBuoy, IconWrench, IconOilDrop, IconShield
} from "./MBHIcons";

type DownloadPopover = { name: string; svg: SVGSVGElement } | null;

function downloadSVG(name: string, svgEl: SVGSVGElement) {
  const clone = svgEl.cloneNode(true) as SVGSVGElement;
  clone.setAttribute("width", "48");
  clone.setAttribute("height", "48");
  clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  const svgString = new XMLSerializer().serializeToString(clone);
  const blob = new Blob([svgString], { type: "image/svg+xml" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `mbh-icon-${name.toLowerCase().replace(/\s+/g, "-")}.svg`;
  a.click();
  URL.revokeObjectURL(url);
}

function downloadPNG(name: string, svgEl: SVGSVGElement) {
  const dlSize = 192;
  const clone = svgEl.cloneNode(true) as SVGSVGElement;
  clone.setAttribute("width", String(dlSize));
  clone.setAttribute("height", String(dlSize));
  clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  const svgString = new XMLSerializer().serializeToString(clone);
  const blob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const img = new Image();
  img.onload = () => {
    const canvas = document.createElement("canvas");
    canvas.width = dlSize;
    canvas.height = dlSize;
    const ctx = canvas.getContext("2d")!;
    ctx.drawImage(img, 0, 0);
    URL.revokeObjectURL(url);
    canvas.toBlob(pngBlob => {
      if (!pngBlob) return;
      const pngUrl = URL.createObjectURL(pngBlob);
      const a = document.createElement("a");
      a.href = pngUrl;
      a.download = `mbh-icon-${name.toLowerCase().replace(/\s+/g, "-")}.png`;
      a.click();
      URL.revokeObjectURL(pngUrl);
    });
  };
  img.src = url;
}

const ICONS = [
  { name: "Anchor", component: IconAnchor },
  { name: "Valve", component: IconValve },
  { name: "Piston", component: IconPiston },
  { name: "Pressure Gauge", component: IconPressureGauge },
  { name: "Propeller", component: IconPropeller },
  { name: "Wave", component: IconWave },
  { name: "Ship", component: IconShip },
  { name: "Boat", component: IconBoat },
  { name: "Crane", component: IconCrane },
  { name: "Winch", component: IconWinch },
  { name: "Hydraulic", component: IconHydraulic },
  { name: "Cylinder", component: IconCylinder },
  { name: "Pump", component: IconPump },
  { name: "Compass", component: IconCompass },
  { name: "Chain", component: IconChain },
  { name: "Gear", component: IconGear },
  { name: "Pipe", component: IconPipe },
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
  const [popover, setPopover] = useState<DownloadPopover>(null);
  const cv = COLOR_VARIANTS[activeColor];

  useEffect(() => {
    if (!popover) return;
    const handler = () => setPopover(null);
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [popover]);

  return (
    <section style={{ padding: "80px 0" }}>
      <SectionLabel>04 — ICON SET</SectionLabel>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 24, marginBottom: 48 }}>
        <div>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 36, color: "#10464e", marginBottom: 8 }}>
            Hydrauliske og maritime ikoner
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
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 12,
                padding: "24px 16px",
                cursor: "pointer",
                transition: "background 0.15s",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.06)")}
              onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
              onClick={(e) => {
                e.stopPropagation();
                const svgEl = e.currentTarget.querySelector("svg");
                if (svgEl) {
                  setPopover(p => p?.name === name ? null : { name, svg: svgEl as SVGSVGElement });
                }
              }}
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
              {popover?.name === name && (
                <div
                  onClick={e => e.stopPropagation()}
                  style={{
                    position: "absolute",
                    top: "calc(100% + 4px)",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "#10464e",
                    border: "1px solid rgba(185,188,172,0.25)",
                    padding: "6px",
                    zIndex: 100,
                    display: "flex",
                    gap: 6,
                    boxShadow: "0 4px 16px rgba(0,0,0,0.25)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {(["SVG", "PNG"] as const).map(fmt => (
                    <button
                      key={fmt}
                      onClick={() => {
                        fmt === "SVG"
                          ? downloadSVG(name, popover.svg)
                          : downloadPNG(name, popover.svg);
                        setPopover(null);
                      }}
                      style={{
                        background: "transparent",
                        border: "1px solid rgba(185,188,172,0.4)",
                        color: "#faf6f1",
                        padding: "4px 10px",
                        fontSize: 11,
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 600,
                        letterSpacing: "0.1em",
                        cursor: "pointer",
                        transition: "background 0.1s",
                      }}
                      onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
                      onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                    >
                      {fmt}
                    </button>
                  ))}
                </div>
              )}
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
