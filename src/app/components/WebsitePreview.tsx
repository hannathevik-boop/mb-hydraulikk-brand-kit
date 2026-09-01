import React, { useEffect, useState } from "react";
import MBHLogo from "./MBHLogo";
import { IconHydraulic, IconCrane, IconPropeller, IconGear, IconShield, IconCompass } from "./MBHIcons";
import { SectionLabel } from "./BrandSection";
import heroImage0014 from "../images/20260628_MBhydraulikk_0014.jpg";
import heroImage0134 from "../images/20260701_MBHdrone_Thevik_0134.jpg";
import heroImage0053 from "../images/20260628_MBhydraulikk_0053.jpg";
import heroImage1729 from "../images/D71_1729.JPG";
import heroImage0124 from "../images/20260628_MBhydraulikk_0124.jpg";
import heroImage0081 from "../images/20260628_MBhydraulikk_0081.jpg";

const HERO_IMAGES = [
  heroImage0014,
  heroImage0134,
  heroImage0053,
  heroImage1729,
  heroImage0124,
  heroImage0081,
];

function NavPreview(): import("react/jsx-runtime").JSX.Element {
  return (
    <nav style={{ background: "#0a2e35", padding: "16px clamp(16px, 5vw, 48px)", minHeight: 72, display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
      <MBHLogo variant="full" theme="warmWhite" size={30} />
      <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center", justifyContent: "flex-end" }}>
        {["Produkt", "Tenester", "Kunder", "Om oss"].map(item => (
          <span key={item} style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: 12, letterSpacing: "0.04em", color: "#faf6f1", cursor: "pointer", whiteSpace: "nowrap" }}>
            {item}
          </span>
        ))}
        <span style={{
          background: "#A84F2E", color: "#faf6f1",
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

function NewsPreview(): import("react/jsx-runtime").JSX.Element {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const news = [
    {
      id: "n1",
      title: "MB Hydraulikk markerer 100 år i 2026",
      desc: "Jubileumsåret blir markert med historisk tilbakeblikk, kundehistorier og fokus på vidare utvikling frå Mjosundet.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&h=600&fit=crop&auto=format",
      alt: "Møte med tekniske teikningar",
    },
    {
      id: "n2",
      title: "Ny leveranse til maritimt prosjekt",
      desc: "Skreddarsydd hydraulikkløysing med lågt vedlikehaldsbehov er levert til internasjonalt fartøy i operativ drift.",
      image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=900&h=600&fit=crop&auto=format",
      alt: "Maritimt fartøy i hamn",
    },
  ];

  return (
    <div style={{ background: "#faf6f1", padding: "0 clamp(16px, 5vw, 80px) 80px" }}>
      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", color: "#858f8f", marginBottom: 4 }}>ILLUSTRATIV NYHENDE-PREVIEW</div>
      <div style={{ fontWeight: 700, fontSize: 22, color: "#10464e", marginBottom: 20 }}>Siste nyhende</div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(440px, 1fr))", gap: 16 }}>
        {news.map((item) => {
          const isHovered = hoveredCard === item.id;

          return (
            <article
              key={item.id}
              onMouseEnter={() => setHoveredCard(item.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                background: "#ffffff",
                border: `1px solid ${isHovered ? "#A84F2E" : "rgba(16,70,78,0.12)"}`,
                display: "grid",
                gridTemplateColumns: "minmax(170px, 220px) 1fr",
                height: 320,
                minWidth: 0,
                transition: "border-color 0.2s, transform 0.2s",
                transform: isHovered ? "translateY(-2px)" : "none",
              }}
            >
              <div style={{ padding: "12px 0 12px 12px", height: "100%" }}>
                <img
                  src={item.image}
                  alt={item.alt}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: 22, display: "flex", flexDirection: "column" }}>
                <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 19, color: "#10464e", lineHeight: 1.25, marginBottom: 10 }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: "#858f8f", lineHeight: 1.65, display: "-webkit-box", WebkitLineClamp: 5, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{item.desc}</p>
                <div style={{ marginTop: "auto", paddingTop: 16, display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ fontSize: 12, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, color: "#641919", letterSpacing: "0.06em" }}>Les mer</span>
                  <span style={{ color: "#641919", fontSize: 16 }}>→</span>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

function HeroPreview(): import("react/jsx-runtime").JSX.Element {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveImage((currentImage) => (currentImage + 1) % HERO_IMAGES.length);
    }, 6000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <div style={{ position: "relative", background: "#0a2e35", minHeight: "min(520px, 55vh)", display: "flex", flexDirection: "column", overflow: "hidden" }}>
      {HERO_IMAGES.map((image, index) => (
        <img
          key={image}
          src={image}
          alt=""
          aria-hidden="true"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: index === activeImage ? 0.25 : 0, transition: "opacity 1.8s ease-in-out" }}
        />
      ))}
      <div style={{ position: "relative", zIndex: 1, padding: "80px clamp(16px, 5vw, 80px) 60px", maxWidth: 760, width: "100%" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32, flexWrap: "wrap" }}>
          <div style={{ width: 32, height: 2, background: "#A84F2E" }} />
          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 11, letterSpacing: "0.24em", color: "#ffffff" }}>
            HYDRAULISK UTSTYR FOR MARITIMT MILJØ · SIDAN 1926
          </span>
        </div>
        <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: 64, lineHeight: 1.05, color: "#faf6f1", marginBottom: 28, letterSpacing: "-0.02em" }}>
          Frå Aure<br />
          <span style={{ color: "#D6E1E4" }}>til verdshava.</span>
        </h1>
        <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 17, color: "rgba(250,246,241,0.65)", lineHeight: 1.7, maxWidth: 520, marginBottom: 48 }}>
          MB Hydraulikk AS utviklar og produserer vinsjar, kraner, capstaner, davitar og sidepropellar i sjøvassbestandig aluminium — skreddarsydde for maritimt bruk over heile verda.
        </p>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <div style={{ background: "#A84F2E", color: "#faf6f1", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 14, letterSpacing: "0.08em", padding: "14px 32px", cursor: "pointer", minWidth: "max-content" }}>
            SJÅ PRODUKT
          </div>
          <div style={{ background: "#10464e", border: "1.5px solid #1a6070", color: "#faf6f1", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 14, letterSpacing: "0.08em", padding: "14px 32px", cursor: "pointer", minWidth: "max-content" }}>
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
        <div style={{ width: 32, height: 2, background: "#A84F2E" }} />
        <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 11, letterSpacing: "0.24em", color: "#A84F2E" }}>PRODUKTOMRÅDE</span>
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
              border: `1px solid ${isHovered ? "#A84F2E" : "rgba(16,70,78,0.12)"}`, 
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
              background: "#A84F2E",
              color: "#faf6f1",
              border: "none",
              marginBottom: 12
            }}>{s.tag}</span>
            <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 17, color: "#10464e", marginBottom: 10 }}>{s.title}</h3>
            <p style={{ fontSize: 13, color: "#858f8f", lineHeight: 1.65 }}>{s.desc}</p>
            <div style={{ marginTop: 20, display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ fontSize: 12, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, color: "#641919", letterSpacing: "0.06em" }}>Les mer</span>
              <span style={{ color: "#641919", fontSize: 16 }}>→</span>
            </div>
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
          <MBHLogo variant="full" theme="warmWhite" size="md" />
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
            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: "0.2em", color: "#A84F2E", marginBottom: 20 }}>{col.title}</div>
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
        <NewsPreview />
        <FooterPreview />
      </div>
    </section>
  );
}
