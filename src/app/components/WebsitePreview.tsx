import React, { useState } from "react";
import MBHLogo from "./MBHLogo";
import { IconAnchor, IconShip, IconGear, IconPropeller, IconShield, IconCompass } from "./MBHIcons";
import { SectionLabel } from "./BrandSection";

function DemoHeader({ currentPage, setCurrentPage, onClose }: { currentPage: string; setCurrentPage: (page: string) => void; onClose: () => void }) {
  const pages = [
    { key: "landingside", label: "Landingside" },
    { key: "produkter", label: "Produkter" },
    { key: "om-oss", label: "Om oss" },
    { key: "kontakt", label: "Kontakt" },
  ];

  return (
    <header style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center", justifyContent: "space-between", padding: "24px clamp(16px, 4vw, 40px)", background: "#10464e" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
        <MBHLogo variant="full" theme="light" size="md" />
        <span style={{ color: "rgba(250,246,241,0.7)", fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700 }}>Nettside-demo</span>
      </div>
      <nav style={{ display: "flex", flexWrap: "wrap", gap: 10, alignItems: "center" }}>
        {pages.map(page => (
          <button
            key={page.key}
            onClick={() => setCurrentPage(page.key)}
            style={{
              background: currentPage === page.key ? "#faf6f1" : "rgba(250,246,241,0.12)",
              color: currentPage === page.key ? "#10464e" : "#faf6f1",
              border: "none",
              borderRadius: 999,
              padding: "10px 16px",
              cursor: "pointer",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.08em",
            }}
          >
            {page.label}
          </button>
        ))}
      </nav>
      <button
        onClick={onClose}
        style={{ background: "#641919", color: "#faf6f1", border: "none", padding: "10px 18px", borderRadius: 999, cursor: "pointer", fontSize: 12, fontWeight: 700 }}
      >
        Tilbake
      </button>
    </header>
  );
}

function PageIntro({ title, description }: { title: string; description: string }) {
  return (
    <div style={{ maxWidth: 760, marginBottom: 32 }}>
      <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "clamp(2.5rem, 4vw, 4.5rem)", lineHeight: 1.05, color: "#10464e", marginBottom: 16 }}>{title}</h1>
      <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 17, color: "#585f5f", lineHeight: 1.8 }}>{description}</p>
    </div>
  );
}

function LandingPage() {
  return (
    <div style={{ padding: "40px 32px 80px", background: "#eef4f6" }}>
      <PageIntro
        title="Hydraulikk for havet"
        description="MB Hydraulikk bygger maritime løysingar for ankerhandtering, drivsystem og løft. Frå Mjosundet til verdshava — robust, sjøvassbestandig og presist." 
      />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
        {[
          { title: "Vinsjar", description: "Kraftige og presise vinsjar for slep, fiskeri og tauing." },
          { title: "Kraner", description: "Hydrauliske kraner designa for krevjande marine miljø." },
          { title: "Sidepropellar", description: "Presis manøvrering og trygg drift i tronge farvatn." },
        ].map(card => (
          <div key={card.title} style={{ background: "#ffffff", borderRadius: 24, padding: 28, minHeight: 180, boxShadow: "0 20px 50px rgba(16,70,78,0.08)" }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: "#641919", marginBottom: 12 }}>{card.title}</div>
            <p style={{ color: "#585f5f", lineHeight: 1.8 }}>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProductsPage() {
  const products = [
    { title: "Vinsjserien MBH-300", subtitle: "Sjøvassbestandig aluminium", details: "Optimalisert for fiskeri, off-shore og servicefartøy." },
    { title: "Kran MBH-500", subtitle: "Kompakt hydraulisk løft", details: "Høg rekkevidde og låg vekt med integrert styring." },
    { title: "Sidepropell", subtitle: "Støyredusert og presis", details: "For bedra manøvrering på bratte og krevjande fartøy." },
  ];

  return (
    <div style={{ padding: "40px 32px 80px", background: "#ffffff" }}>
      <PageIntro title="Produkter" description="Eit utval av hydrauliske produkt for maritime operasjonar — designa for drift i røffe forhold." />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
        {products.map(item => (
          <article key={item.title} style={{ border: "1px solid rgba(16,70,78,0.1)", borderRadius: 24, padding: 28, minHeight: 220 }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: "#10464e", marginBottom: 10 }}>{item.title}</div>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#641919", marginBottom: 12 }}>{item.subtitle}</div>
            <p style={{ color: "#585f5f", lineHeight: 1.8 }}>{item.details}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

function AboutPage() {
  return (
    <div style={{ padding: "40px 32px 80px", background: "#f7fafb" }}>
      <PageIntro title="Om MB Hydraulikk" description="Familiedrive, lokal produksjon og norsk maritim historie. Vi kombinerer maskinteknikk med sjøkompetanse." />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
        {[
          { title: "Sjøvassbestandig", text: "Alle produkt er bygd for saltvass og krevjande kystklima." },
          { title: "Skreddarsydd", text: "Løysingar for fiskeri, forsking, forsvar og offshore." },
          { title: "Norsk kvalitet", text: "Lokal produksjon og tett samarbeid med kunden frå idé til ferdig installasjon." },
        ].map(item => (
          <div key={item.title} style={{ background: "#ffffff", borderRadius: 24, padding: 28, border: "1px solid rgba(16,70,78,0.08)" }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: "#10464e", marginBottom: 10 }}>{item.title}</div>
            <p style={{ color: "#585f5f", lineHeight: 1.8 }}>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ContactPage() {
  return (
    <div style={{ padding: "40px 32px 80px", background: "#eef4f6" }}>
      <PageIntro title="Kontakt oss" description="Ta kontakt for utstyrsforespurnader, prosjekttilpassingar og service. Vi svarer raskt på spørsmål frå industri og båteigarar." />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
        <div style={{ background: "#ffffff", borderRadius: 24, padding: 28, border: "1px solid rgba(16,70,78,0.08)" }}>
          <div style={{ fontWeight: 700, color: "#10464e", marginBottom: 16 }}>Kontaktinformasjon</div>
          <p style={{ color: "#585f5f", lineHeight: 1.8 }}>
            MB Hydraulikk AS<br />
            Mjosundet 12<br />
            6697 Aure, Norge<br />
            post@mbh.no<br />
            +47 71 22 33 44
          </p>
        </div>
        <div style={{ background: "#ffffff", borderRadius: 24, padding: 28, border: "1px solid rgba(16,70,78,0.08)" }}>
          <div style={{ fontWeight: 700, color: "#10464e", marginBottom: 16 }}>Kort beskrivelse</div>
          <p style={{ color: "#585f5f", lineHeight: 1.8 }}>
            Vi tilbyr rådgjeving, design, produksjon og service av hydraulisk utstyr for maritime verksemder. Frå konsept til ferdig levert løysing.
          </p>
        </div>
      </div>
    </div>
  );
}

function PreviewFrame({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ border: "1px solid rgba(16,70,78,0.15)", borderRadius: 24, overflow: "hidden", boxShadow: "0 30px 70px rgba(16,70,78,0.08)", background: "#ffffff" }}>
      {children}
    </div>
  );
}

export function WebsitePreviewPage({ onClose }: { onClose: () => void }) {
  const [currentPage, setCurrentPage] = useState("landingside");
  const pageContent = {
    landingside: <LandingPage />,
    produkter: <ProductsPage />,
    "om-oss": <AboutPage />,
    kontakt: <ContactPage />,
  };

  return (
    <div style={{ minHeight: "100vh", background: "#faf6f1", padding: "24px clamp(12px, 4vw, 40px)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <PreviewFrame>
          <DemoHeader currentPage={currentPage} setCurrentPage={setCurrentPage} onClose={onClose} />
          {pageContent[currentPage as keyof typeof pageContent]}
        </PreviewFrame>
      </div>
    </div>
  );
}

export function WebsitePreviewSection({ onOpenPreview }: { onOpenPreview?: () => void }) {
  return (
    <section style={{ padding: "80px 0" }}>
      <SectionLabel>07 — NETTSIDE PREVIEW</SectionLabel>
      <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 36, color: "#10464e", marginBottom: 8 }}>
        Nettside Mockup
      </h2>
      <p style={{ color: "#858f8f", fontSize: 15, marginBottom: 40, maxWidth: 480 }}>
        Merkevare brukt på nettside — navigasjon, hero, produktseksjon og footer.
      </p>
      <div
        style={{ border: "1px solid rgba(16,70,78,0.15)", overflow: "hidden", cursor: onOpenPreview ? "pointer" : "default" }}
        onClick={onOpenPreview}
      >
        <nav style={{ background: "#10464eb8", padding: "0 clamp(16px, 4vw, 48px)", minHeight: 72, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <MBHLogo variant="full" theme="light" size="md" />
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
            {['Produkt', 'Tenester', 'Kunder', 'Om oss'].map(item => (
              <span key={item} style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: 14, letterSpacing: "0.04em", color: "#faf6f1" }}>
                {item}
              </span>
            ))}
            <span style={{ background: "#641919", color: "#faf6f1", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 12, letterSpacing: "0.1em", padding: "8px 20px" }}>
              KONTAKT OSS
            </span>
          </div>
        </nav>
        <div style={{ position: "relative", background: "#0a2e35", minHeight: 420, display: "flex", flexDirection: "column", overflow: "hidden" }}>
          <img
            src="https://images.unsplash.com/photo-1573747326733-4f1faa8bc015?w=1400&h=600&fit=crop&auto=format"
            alt="Båt i hamn ved fjell"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.25 }}
          />
          <div style={{ position: "relative", zIndex: 1, padding: "60px clamp(20px, 4vw, 80px) 50px", maxWidth: 760 }}>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 12, marginBottom: 28 }}>
              <div style={{ width: 32, height: 2, background: "#641919" }} />
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 11, letterSpacing: "0.24em", color: "#ffffff" }}>
                HYDRAULISK UTSTYR FOR MARITIMT MILJØ · SIDAN 1926
              </span>
            </div>
            <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1.05, color: "#faf6f1", marginBottom: 24, letterSpacing: "-0.02em" }}>
              Frå Aure<br />
              <span style={{ color: "#D6E1E4" }}>til verdshava.</span>
            </h1>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 17, color: "rgba(250,246,241,0.65)", lineHeight: 1.7, maxWidth: 520, marginBottom: 32 }}>
              MB Hydraulikk utviklar og produserer vinsjar, kraner, davitar og sidepropellar i sjøvassbestandig aluminium — skreddarsydde for maritimt bruk over heile verda.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <div style={{ background: "#641919", color: "#faf6f1", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 14, letterSpacing: "0.08em", padding: "14px 32px" }}>
                SJÅ DEMO
              </div>
              <div style={{ border: "1.5px solid rgba(250,246,241,0.3)", color: "#faf6f1", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 14, letterSpacing: "0.08em", padding: "14px 32px" }}>
                TA KONTAKT
              </div>
            </div>
          </div>
          <div style={{ position: "relative", zIndex: 1, marginTop: "auto", background: "rgba(16,70,78,0.8)", borderTop: "1px solid rgba(185,188,172,0.2)", padding: "24px clamp(20px, 4vw, 80px)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 16 }}>
            {[
              { value: "100 år", label: "STIFTA 1926" },
              { value: "Global", label: "REKKEVIDDE" },
              { value: "Aluminium", label: "SJØVASSBESTANDIG" },
              { value: "Mjosundet", label: "AURE, NOREG" },
            ].map(s => (
              <div key={s.label}>
                <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: 20, color: "#faf6f1" }}>{s.value}</div>
                <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 10, letterSpacing: "0.2em", color: "#858f8f", marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
