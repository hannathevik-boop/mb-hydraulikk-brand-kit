import React from "react";
import { SectionLabel } from "./BrandSection";

/* NB: Desse tala er illustrative døme for brand kit — ikkje reell forretningsdata */
const areaData = [
  { year: "2019", v: 60 }, { year: "2020", v: 52 }, { year: "2021", v: 71 },
  { year: "2022", v: 88 }, { year: "2023", v: 94 }, { year: "2024", v: 105 }, { year: "2025", v: 118 },
];
const barData = [
  { label: "Vinsjar", v: 35 }, { label: "Kraner", v: 28 }, { label: "Davitar", v: 18 },
  { label: "Sideprop.", v: 22 }, { label: "LARS", v: 15 }, { label: "Service", v: 30 },
];
const pieData = [
  { name: "Fiskeri/Oppdrett", pct: 38, color: "#10464e" },
  { name: "Seismikk/Subsea", pct: 26, color: "#641919" },
  { name: "Forsvar/Forsking", pct: 20, color: "#b9bcac" },
  { name: "Verft/Anna", pct: 16, color: "#858f8f" },
];

function BarChart() {
  const max = Math.max(...barData.map(d => d.v));
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 12, height: 160 }}>
      {barData.map(d => (
        <div key={d.label} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 6, height: "100%" }}>
          <div style={{ flex: 1, display: "flex", alignItems: "flex-end", width: "100%" }}>
            <div style={{ width: "100%", background: "#641919", height: `${(d.v / max) * 100}%`, transition: "height 0.3s" }} />
          </div>
          <div style={{ fontSize: 10, color: "#b9bcac", fontWeight: 600, letterSpacing: "0.05em" }}>{d.label}</div>
          <div style={{ fontSize: 12, color: "#faf6f1", fontWeight: 700 }}>{d.v}</div>
        </div>
      ))}
    </div>
  );
}

function AreaSparkline() {
  const max = Math.max(...areaData.map(d => d.v));
  const w = 400, h = 120, pad = 10;
  const pts = areaData.map((d, i) => ({
    x: pad + (i / (areaData.length - 1)) * (w - pad * 2),
    y: h - pad - ((d.v / max) * (h - pad * 2)),
  }));
  const polyline = pts.map(p => `${p.x},${p.y}`).join(" ");
  const area = `M${pts[0].x},${h - pad} ` + pts.map(p => `L${p.x},${p.y}`).join(" ") + ` L${pts[pts.length - 1].x},${h - pad} Z`;
  return (
    <div>
      <svg width="100%" viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" style={{ height: 120 }}>
        <defs>
          <linearGradient id="ag" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#10464e" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#10464e" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={area} fill="url(#ag)" />
        <polyline points={polyline} fill="none" stroke="#10464e" strokeWidth="2" />
        {pts.map((p, i) => <circle key={i} cx={p.x} cy={p.y} r="3" fill="#10464e" />)}
      </svg>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
        {areaData.map(d => <span key={d.year} style={{ fontSize: 10, color: "#858f8f" }}>{d.year}</span>)}
      </div>
    </div>
  );
}

function DonutChart() {
  const r = 60, cx = 80, cy = 80;
  let angle = -Math.PI / 2;
  const slices = pieData.map(d => {
    const sweep = (d.pct / 100) * 2 * Math.PI;
    const x1 = cx + r * Math.cos(angle);
    const y1 = cy + r * Math.sin(angle);
    angle += sweep;
    const x2 = cx + r * Math.cos(angle);
    const y2 = cy + r * Math.sin(angle);
    const large = sweep > Math.PI ? 1 : 0;
    return { ...d, d: `M${cx},${cy} L${x1},${y1} A${r},${r} 0 ${large},1 ${x2},${y2} Z` };
  });
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
      <svg width={160} height={160} viewBox="0 0 160 160">
        {slices.map(s => <path key={s.name} d={s.d} fill={s.color} />)}
        <circle cx={cx} cy={cy} r={35} fill="white" />
      </svg>
      <div>
        {pieData.map(d => (
          <div key={d.name} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
            <div style={{ width: 10, height: 10, background: d.color, flexShrink: 0 }} />
            <span style={{ fontSize: 13, color: "#10464e", flex: 1 }}>{d.name}</span>
            <span style={{ fontSize: 13, fontWeight: 700, color: "#10464e" }}>{d.pct}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function MarketingFigures() {
  return (
    <section style={{ padding: "80px 0" }}>
      <SectionLabel>06 — MARKETING FIGURES</SectionLabel>
      <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 36, color: "#10464e", marginBottom: 8 }}>
        Datavisualisering
      </h2>
      <p style={{ color: "#858f8f", fontSize: 15, marginBottom: 8, maxWidth: 560 }}>
        Merkevarekorrekt grafstil for rapportar, presentasjonar og web. Figurar er illustrative — faktiske tal er konfidensielle.
      </p>
      <div style={{ fontSize: 11, color: "#641919", fontWeight: 600, letterSpacing: "0.08em", marginBottom: 40 }}>
        ⚠ ILLUSTRATIVE FIGURAR — IKKJE REELL FORRETNINGSDATA
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 24 }}>
        <div style={{ background: "#ffffff", border: "1px solid rgba(16,70,78,0.1)", padding: 32 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", color: "#858f8f", marginBottom: 4 }}>ILLUSTRATIV VEKST (IKKJE REELL)</div>
          <div style={{ fontWeight: 700, fontSize: 22, color: "#10464e", marginBottom: 20 }}>Indeksert leveransevekst</div>
          <AreaSparkline />
        </div>
        <div style={{ background: "#ffffff", border: "1px solid rgba(16,70,78,0.1)", padding: 32 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", color: "#858f8f", marginBottom: 4 }}>ILLUSTRATIV MARKNADSDELING</div>
          <div style={{ fontWeight: 700, fontSize: 22, color: "#10464e", marginBottom: 16 }}>Etter segment (illustrativ)</div>
          <DonutChart />
        </div>
      </div>

      <div style={{ background: "#10464e", padding: 32, marginBottom: 24 }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", color: "#b9bcac", marginBottom: 4 }}>ILLUSTRATIV FORDELING PER PRODUKTLINJE</div>
        <div style={{ fontWeight: 700, fontSize: 22, color: "#faf6f1", marginBottom: 24 }}>Vinsjar, Kraner, Davitar, Sidepropellar, LARS, Service</div>
        <BarChart />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1, background: "rgba(16,70,78,0.1)" }}>
        {[
          { val: "100 år", label: "Stifta 1926", delta: "Jubileum 2026" },
          { val: "Global", label: "Rekkevidde", delta: "Lokal kompetanse" },
          { val: "Aluminium", label: "Sjøvassbestandig", delta: "Lågt vedlikehald" },
          { val: "Mjosundet", label: "Aure, Noreg", delta: "Heimebase" },
        ].map(k => (
          <div key={k.label} style={{ background: "#ffffff", padding: 28 }}>
            <div style={{ fontWeight: 800, fontSize: 32, color: "#10464e", lineHeight: 1 }}>{k.val}</div>
            <div style={{ fontSize: 12, color: "#858f8f", marginTop: 8 }}>{k.label}</div>
            <div style={{ fontWeight: 700, fontSize: 12, color: "#641919", marginTop: 6 }}>{k.delta}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
