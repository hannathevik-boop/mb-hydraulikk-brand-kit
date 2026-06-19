import React, { useRef, useState } from "react";
import JSZip from "jszip";
import { SectionLabel } from "./BrandSection";
import {
  IconAnchor, IconValve, IconPiston, IconPressureGauge, IconPropeller,
  IconWave, IconShip, IconBoat, IconCrane, IconWinch, IconCompass,
  IconChain, IconGear, IconPipe, IconHydraulic, IconCylinder, IconPump,
  IconBuoy, IconWrench, IconOilDrop, IconShield
} from "./MBHIcons";

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
  const [downloadMenu, setDownloadMenu] = useState<string | null>(null);
  const [isGeneratingZip, setIsGeneratingZip] = useState(false);
  const iconRefs = useRef<Record<string, SVGSVGElement | null>>({});
  const cv = COLOR_VARIANTS[activeColor];

  function handleDownloadPng(name: string) {
    const key = `${name}-${activeColor}`;
    const svgEl = iconRefs.current[key];
    if (svgEl) {
      downloadPNG(name, svgEl);
    }
    setDownloadMenu(null);
  }

  function handleDownloadSvg(name: string) {
    const key = `${name}-${activeColor}`;
    const svgEl = iconRefs.current[key];
    if (svgEl) {
      downloadSVG(name, svgEl);
    }
    setDownloadMenu(null);
  }

  async function downloadAllIconsZip() {
    setIsGeneratingZip(true);
    const zip = new JSZip();

    for (const variant of COLOR_VARIANTS) {
      const folderName = variant.label.toLowerCase().replace(/\s+/g, "-");
      const svgFolder = zip.folder(`${folderName}/svg`);
      const pngFolder = zip.folder(`${folderName}/png`);

      for (const icon of ICONS) {
        const key = `${icon.name}-${COLOR_VARIANTS.indexOf(variant)}`;
        const svgEl = iconRefs.current[key];
        if (!svgEl) continue;

        const clone = svgEl.cloneNode(true) as SVGSVGElement;
        clone.setAttribute("width", "48");
        clone.setAttribute("height", "48");
        clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        const svgString = new XMLSerializer().serializeToString(clone);
        svgFolder?.file(
          `${icon.name.toLowerCase().replace(/\s+/g, "-")}.svg`,
          svgString
        );

        const dlSize = 192;
        const clone2 = svgEl.cloneNode(true) as SVGSVGElement;
        clone2.setAttribute("width", String(dlSize));
        clone2.setAttribute("height", String(dlSize));
        clone2.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        const svgString2 = new XMLSerializer().serializeToString(clone2);
        const blob = new Blob([svgString2], { type: "image/svg+xml;charset=utf-8" });
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
            if (pngBlob) {
              pngFolder?.file(
                `${icon.name.toLowerCase().replace(/\s+/g, "-")}.png`,
                pngBlob
              );
            }
          });
        };
        img.src = url;
      }
    }

    setTimeout(async () => {
      const blob = await zip.generateAsync({ type: "blob" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "mbh-icon-set.zip";
      a.click();
      URL.revokeObjectURL(url);
      setIsGeneratingZip(false);
    }, 1000);
  }

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
        <div style={{ display: "flex", gap: 8, flexDirection: "column", alignItems: "flex-end" }}>
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
          <button
            onClick={downloadAllIconsZip}
            disabled={isGeneratingZip}
            style={{
              marginTop: 8,
              background: "transparent",
              border: "1px solid #641919",
              padding: "6px 12px",
              fontSize: 10,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 600,
              letterSpacing: "0.1em",
              color: "#641919",
              cursor: isGeneratingZip ? "wait" : "pointer",
              transition: "all 0.15s",
              opacity: isGeneratingZip ? 0.6 : 1,
            }}
            onMouseEnter={e => !isGeneratingZip && (e.currentTarget.style.background = "rgba(100,25,25,0.08)")}
            onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
          >
            {isGeneratingZip ? "Genererer..." : "↓ Alle ikon (ZIP)"}
          </button>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
          gap: 16,
        }}
      >
        {ICONS.map(({ name, component: Icon }) => {
          const key = `${name}-${activeColor}`;
          return (
            <div key={key} style={{ position: "relative" }}>
              <button
                type="button"
                onClick={() => setDownloadMenu(downloadMenu === name ? null : name)}
                style={{
                  width: "100%",
                  background: cv.bg,
                  padding: 24,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 12,
                  border: "1px solid rgba(16,70,78,0.1)",
                  cursor: "pointer",
                }}
              >
                <div
                  ref={(el) => {
                    const svgEl = el?.querySelector("svg");
                    if (svgEl) iconRefs.current[key] = svgEl as SVGSVGElement;
                  }}
                  style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: cv.bg, padding: 8 }}
                >
                  <Icon size={48} color={cv.color} strokeWidth={2} />
                </div>
                <div style={{ fontSize: 11, letterSpacing: "0.12em", color: cv.bg === "#faf6f1" ? "#858f8f" : "rgba(255,255,255,0.5)", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600 }}>
                  {name}
                </div>
                <div style={{ fontSize: 9, letterSpacing: "0.1em", color: cv.bg === "#faf6f1" ? "#b9bcac" : "rgba(255,255,255,0.28)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  TRYKK FOR NEDLASTING
                </div>
              </button>
              {downloadMenu === name && (
                <div
                  style={{
                    position: "absolute",
                    bottom: "100%",
                    left: 0,
                    right: 0,
                    zIndex: 10,
                    background: "#ffffff",
                    border: "1px solid rgba(16,70,78,0.15)",
                    boxShadow: "0 4px 16px rgba(16,70,78,0.12)",
                    marginBottom: 4,
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    type="button"
                    onClick={() => handleDownloadPng(name)}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      textAlign: "left",
                      background: "transparent",
                      border: "none",
                      borderBottom: "1px solid rgba(16,70,78,0.08)",
                      cursor: "pointer",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: 12,
                      fontWeight: 600,
                      color: "#10464e",
                      letterSpacing: "0.06em",
                    }}
                  >
                    ↓  Last ned PNG
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDownloadSvg(name)}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      textAlign: "left",
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: 12,
                      fontWeight: 600,
                      color: "#10464e",
                      letterSpacing: "0.06em",
                    }}
                  >
                    ↓  Last ned SVG
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>

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
