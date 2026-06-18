import React, { useState } from "react";
import MBHLogo from "./MBHLogo";
import { IconHydraulic, IconCrane, IconPropeller, IconGear, IconShield, IconCompass } from "./MBHIcons";
import { SectionLabel } from "./BrandSection";

function NavPreview(): import("react/jsx-runtime").JSX.Element {
  return (
    <nav style={{ background: "#10464E", padding: "16px clamp(16px, 5vw, 48px)", minHeight: 72, display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
      <MBHLogo variant="full" theme="light" size="md" />
      <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center", justifyContent: "flex-end" }}>
        {["Produkt", "Tenester", "Kunder", "Om oss"].map(item => (
          <span key={item} style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: 12, letterSpacing: "0.04em", color: "#faf6f1", cursor: "pointer", whiteSpace: "nowrap" }}>
            {item}
          </span>
        ))}
        <span style={{
          background: "#641919", color: "#faf6f1",
          fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 12,
          letterSpacing: "0.1em", padding: "8px 20px", cursor: "pointer",
          whiteSpace: "nowrap"
        }}>
          KONTAKT OSS
        </span>
      </div>
    </nav>
  );
}

function HeroPreview(): import("react/jsx-runtime").JSX.Element {
  return (
    <div style={{ position: "relative", background: "#0a2e35", minHeight: "min(520px, 55vh)", display: "flex", flexDirection: "column", overflow: "hidden" }}>
      <img
        src="https://images.unsplash.com/photo-1573747326733-4f1faa8bc015?w=1400&h=600&fit=crop&auto=format"
        alt="Båt i hamn ved fjell"
        style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.25 }}
      />
      <div style={{ position: "relative", zIndex: 1, padding: "80px clamp(16px, 5vw, 80px) 60px", maxWidth: 760, width: "100%" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32, flexWrap: "wrap" }}>
          <div style={{ width: 32, height: 2, background: "#641919" }} />
          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 11, letterSpacing: "0.24em", color: "#ffffff" }}>
            HYDRAULISK UTSTYR FOR MARITIMT MILJØ · SIDAN 1926
          </span>
        </div>
        <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: 64, lineHeight: 1.05, color: "#faf6f1", marginBottom: 28, letterSpacing: "-0.02em" }}>
          Frå Aure<br />
          <span style={{ color: "#D6E1E4" }}>til verdshava.</span>
        </h1>
        <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 17, color: "rgba(250,246,241,0.65)", lineHeight: 1.7, maxWidth: 520, marginBottom: 48 }}>
          MB Hydraulikk utviklar og produserer vinsjar, kraner, davitar og sidepropellar i sjøvassbestandig aluminium — skreddarsydde for maritimt bruk over heile verda.
        </p>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <div style={{ background: "#641919", color: "#faf6f1", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 14, letterSpacing: "0.08em", padding: "14px 32px", cursor: "pointer", minWidth: "max-content" }}>
            SJÅ PRODUKT
          </div>
          <div style={{ border: "1.5px solid rgba(250,246,241,0.3)", color: "#faf6f1", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 14, letterSpacing: "0.08em", padding: "14px 32px", cursor: "pointer", minWidth: "max-content" }}>
            TA KONTAKT
          </div>
        </div>
      </div>
      <div style={{ position: "relative", zIndex: 1, marginTop: "auto", background: "rgba(16,70,78,0.8)", borderTop: "1px solid rgba(185,188,172,0.2)", padding: "24px clamp(16px, 5vw, 80px)", display: "flex", gap: 64, flexWrap: "wrap" }}>
        {[
          { value: "100 år", label: "STIFTA 1926" },
          { value: "Global", label: "REKKEVIDDE" },
          { value: "Aluminium", label: "SJØVASSBESTANDIG" },
          { value: "Mjosundet", label: "AURE, NOREG" },
        ].map(s => (
          <div key={s.label} style={{ minWidth: 160 }}>
            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: 22, color: "#faf6f1" }}>{s.value}</div>
            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 10, letterSpacing: "0.2em", color: "#858f8f", marginTop: 4 }}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ServicesPreview(): import("react/jsx-runtime").JSX.Element {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const services = [
    { icon: <IconHydraulic size={32} color="#10464e" strokeWidth={1.5} />, tag: "Vinsjar", title: "Vinsjar & Capstanar", desc: "Ankervinsjar, slepevinsjar, trålevinsjar og capstanar i aluminium og rustfritt stål for alle maritime bruksområde." },
    { icon: <IconCrane size={32} color="#10464e" strokeWidth={1.5} />, tag: "Løfteutstyr", title: "Kraner & Davitar", desc: "Kraner, bommar og davitar for last, redning og MOB-operasjonar. Tilpassa fartøy og plattformar." },
    { icon: <IconPropeller size={32} color="#10464e" strokeWidth={1.5} />, tag: "Framdrift", title: "Sidepropellar", desc: "Hydrauliske sidepropellar for presis manøvrering. Kompakt, kraftig og minimalt vedlikehald." },
    { icon: <IconGear size={32} color="#10464e" strokeWidth={1.5} />, tag: "LARS", title: "LARS & Systemløysingar", desc: "Komplette Launch and Recovery System og skreddarsydde systemløysingar for seismikk, subsea og forsvar." },
    { icon: <IconShield size={32} color="#10464e" strokeWidth={1.5} />, tag: "Forsvar", title: "Spesialprodukt Forsvar", desc: "Eigutvikla spesialprodukt til Den norske marine og andre forsvarskundar. Høg tryggleik og driftsikkerheit." },
    { icon: <IconCompass size={32} color="#10464e" strokeWidth={1.5} />, tag: "Service", title: "Service & Vedlikehald", desc: "Eigne servicefolk med djup produktkunnskap. Planlagte oppdrag og rask respons ved behov." },
  ];

  return (
    <div style={{ background: "#faf6f1", padding: "80px clamp(16px, 5vw, 80px)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16, flexWrap: "wrap" }}>
        <div style={{ width: 32, height: 2, background: "#641919" }} />
        <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 11, letterSpacing: "0.24em", color: "#641919" }}>PRODUKTOMRÅDE</span>
      </div>
      <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 40, color: "#10464e", marginBottom: 48, letterSpacing: "-0.01em" }}>
        Kompetanse som leverer
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
        {services.map(s => {
          const isHovered = hoveredCard === s.title;

          return (
          <div
            key={s.title}
            onMouseEnter={() => setHoveredCard(s.title)}
            onMouseLeave={() => setHoveredCard(null)}
            style={{
              background: "#ffffff",
              border: `1px solid ${isHovered ? "#10464e" : "rgba(16,70,78,0.12)"}`,
              padding: 32,
              borderRadius: 0,
              minWidth: 0,
              transition: "border-color 0.2s, transform 0.2s",
              transform: isHovered ? "translateY(-2px)" : "none",
              cursor: "default"
            }}
          >
            <div style={{ marginBottom: 20 }}>{s.icon}</div>
            <span style={{
              display: "inline-block",
              padding: "3px 10px",
              fontSize: 10,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              background: "transparent",
              color: "#10464e",
              border: "1px solid #10464e",
              marginBottom: 12
            }}>{s.tag}</span>
            <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 17, color: "#10464e", marginBottom: 10 }}>{s.title}</h3>
            <p style={{ fontSize: 13, color: "#858f8f", lineHeight: 1.65 }}>{s.desc}</p>
          </div>
          );
        })}
      </div>
    </div>
  );
}

function FooterPreview() {
  return (
    <footer style={{ background: "#0a2e35", padding: "60px clamp(16px, 5vw, 80px) 32px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 48, marginBottom: 48 }}>
        <div>
          <MBHLogo variant="full" theme="light" size="md" />
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, color: "rgba(250,246,241,0.5)", marginTop: 16, lineHeight: 1.8, maxWidth: 280 }}>
            MB Hydraulikk AS — hydraulisk utstyr for maritimt miljø sidan 1926. Bygd i Mjosundet, Aure. Lokal kompetanse, global rekkevidde.
          </p>
        </div>
        {[
          { title: "PRODUKT", items: ["Vinsjar & Capstanar", "Kraner & Løfteutstyr", "MOB-davitar", "Sidepropellar", "LARS-system"] },
          { title: "MARKNADER", items: ["Fiskeri & Oppdrett", "Seismikk & Subsea", "Sjøforsvaret", "Forsking", "Verft"] },
          { title: "SELSKAP", items: ["Om MB Hydraulikk", "Kundar", "Utvikling", "Service", "Kontakt"] },
        ].map(col => (
          <div key={col.title}>
            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: "0.2em", color: "#641919", marginBottom: 20 }}>{col.title}</div>
            {col.items.map(item => (
              <div key={item} style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, color: "rgba(250,246,241,0.55)", marginBottom: 10 }}>{item}</div>
            ))}
          </div>
        ))}
      </div>
      <div style={{ borderTop: "1px solid rgba(185,188,172,0.12)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
        <span style={{ fontSize: 12, color: "rgba(250,246,241,0.3)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>© 2026 MB Hydraulikk AS · Mjosundet, 6697 Aure</span>
        <span style={{ fontSize: 12, color: "rgba(250,246,241,0.3)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>mbh.no · post@mbh.no</span>
      </div>
    </footer>
  );
}

export function WebsitePreviewSection() {
  return (
    <section style={{ padding: "80px 0" }}>
      <SectionLabel>07 — NETTSIDE PREVIEW</SectionLabel>
      <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 36, color: "#10464e", marginBottom: 8 }}>
        Nettside Mockup
      </h2>
      <p style={{ color: "#858f8f", fontSize: 15, marginBottom: 40, maxWidth: 480 }}>
        Merkevare brukt på nettside — navigasjon, hero, produktseksjon og footer.
      </p>
      <div style={{ border: "1px solid rgba(16,70,78,0.15)", overflow: "hidden", width: "100%", maxWidth: 1200, margin: "0 auto" }}>
        <NavPreview />
        <HeroPreview />
        <ServicesPreview />
        <FooterPreview />
      </div>
    </section>
  );
}
