import React, { useState } from "react";
import { SectionLabel } from "./BrandSection";
import { IconShield, IconWrench, IconHydraulic, IconCrane, IconPropeller } from "./MBHIcons";

function Btn({
  children, variant = "primary", size = "md", icon, disabled = false
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  disabled?: boolean;
}) {
  const sizes = { sm: { px: 16, py: 8, fs: 12 }, md: { px: 24, py: 12, fs: 14 }, lg: { px: 32, py: 16, fs: 16 } };
  const s = sizes[size];
  const variants = {
    primary: { bg: "#10464e", color: "#faf6f1", border: "transparent", hbg: "#1a6070" },
    secondary: { bg: "#b9bcac", color: "#10464e", border: "transparent", hbg: "#a8ab9c" },
    outline: { bg: "transparent", color: "#10464e", border: "#10464e", hbg: "#f0ece6" },
    ghost: { bg: "transparent", color: "#858f8f", border: "transparent", hbg: "#ede8e1" },
    danger: { bg: "#641919", color: "#faf6f1", border: "transparent", hbg: "#8a2222" },
  };
  const v = variants[variant];
  const [hov, setHov] = useState(false);
  return (
    <button
      disabled={disabled}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        paddingLeft: s.px,
        paddingRight: s.px,
        paddingTop: s.py,
        paddingBottom: s.py,
        fontSize: s.fs,
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontWeight: 600,
        letterSpacing: "0.06em",
        background: disabled ? "#ede8e1" : hov ? v.hbg : v.bg,
        color: disabled ? "#b9bcac" : v.color,
        border: `1.5px solid ${disabled ? "#ede8e1" : v.border === "transparent" ? "transparent" : v.border}`,
        borderRadius: 0,
        cursor: disabled ? "not-allowed" : "pointer",
        transition: "all 0.15s",
        opacity: disabled ? 0.6 : 1,
      }}
    >
      {icon}
      {children}
    </button>
  );
}

function Badge({ label, variant = "teal" }: { label: string; variant?: "teal" | "crimson" | "sage" | "slate" | "outline" }) {
  const v = {
    teal: { bg: "#10464e", color: "#faf6f1" },
    crimson: { bg: "#641919", color: "#faf6f1" },
    sage: { bg: "#b9bcac", color: "#10464e" },
    slate: { bg: "#858f8f", color: "#faf6f1" },
    outline: { bg: "transparent", color: "#10464e", border: "#10464e" },
  }[variant];
  return (
    <span style={{
      display: "inline-block",
      padding: "3px 10px",
      fontSize: 10,
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      fontWeight: 700,
      letterSpacing: "0.18em",
      textTransform: "uppercase" as const,
      background: v.bg,
      color: v.color,
      border: `1px solid ${"border" in v ? v.border : v.bg}`,
    }}>
      {label}
    </span>
  );
}

function InputField({ label, placeholder, type = "text" }: { label: string; placeholder: string; type?: string }) {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <label style={{ fontSize: 12, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, letterSpacing: "0.08em", color: "#10464e" }}>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          padding: "10px 14px",
          fontSize: 14,
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          color: "#10464e",
          background: "#faf6f1",
          border: `1.5px solid ${focused ? "#10464e" : "rgba(16,70,78,0.2)"}`,
          outline: "none",
          transition: "border-color 0.15s",
        }}
      />
    </div>
  );
}

function Card({ title, tag, desc, icon }: { title: string; tag: string; desc: string; icon: React.ReactNode }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: "#ffffff",
        border: `1px solid ${hov ? "#10464e" : "rgba(16,70,78,0.12)"}`,
        padding: 32,
        transition: "border-color 0.2s, transform 0.2s",
        transform: hov ? "translateY(-2px)" : "none",
        cursor: "default",
      }}
    >
      <div style={{ marginBottom: 20 }}>{icon}</div>
      <Badge label={tag} variant="outline" />
      <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 18, color: "#10464e", marginTop: 12, marginBottom: 8 }}>{title}</h3>
      <p style={{ fontSize: 14, color: "#858f8f", lineHeight: 1.6 }}>{desc}</p>
      <div style={{ marginTop: 20, display: "flex", alignItems: "center", gap: 6 }}>
        <span style={{ fontSize: 12, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, color: "#641919", letterSpacing: "0.06em" }}>Les mer</span>
        <span style={{ color: "#641919", fontSize: 16 }}>→</span>
      </div>
    </div>
  );
}

export function UIComponentsSection() {
  return (
    <section style={{ padding: "80px 0" }}>
      <SectionLabel>05 — UI KOMPONENTER</SectionLabel>
      <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 36, color: "#10464e", marginBottom: 48 }}>
        Komponentbibliotek for digitale flater
      </h2>

      {/* Buttons */}
      <div style={{ marginBottom: 56 }}>
        <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.15em", color: "#858f8f", fontFamily: "'Plus Jakarta Sans', sans-serif", marginBottom: 20 }}>KNAPPER</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center", marginBottom: 16 }}>
          <Btn variant="primary" size="lg">Primary Large</Btn>
          <Btn variant="primary">Primary</Btn>
          <Btn variant="primary" size="sm">Primary Small</Btn>
          <Btn variant="primary" icon={<IconShield size={16} color="#faf6f1" strokeWidth={2.5} />}>With Icon</Btn>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center", marginBottom: 16 }}>
          <Btn variant="secondary">Secondary</Btn>
          <Btn variant="outline">Outline</Btn>
          <Btn variant="ghost">Ghost</Btn>
          <Btn variant="danger">Danger</Btn>
          <Btn variant="primary" disabled>Disabled</Btn>
        </div>
      </div>

      {/* Badges */}
      <div style={{ marginBottom: 56 }}>
        <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.15em", color: "#858f8f", fontFamily: "'Plus Jakarta Sans', sans-serif", marginBottom: 20 }}>MERKER OG TAGS</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          <Badge label="Hydraulikk" variant="teal" />
          <Badge label="Maritim" variant="crimson" />
          <Badge label="Offshore" variant="sage" />
          <Badge label="Industri" variant="slate" />
          <Badge label="Sertifisert" variant="outline" />
          <Badge label="ISO 9001" variant="teal" />
          <Badge label="Tilgjengelig" variant="sage" />
        </div>
      </div>

      {/* Inputs */}
      <div style={{ marginBottom: 56 }}>
        <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.15em", color: "#858f8f", fontFamily: "'Plus Jakarta Sans', sans-serif", marginBottom: 20 }}>INNDATA</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 20, maxWidth: 700 }}>
          <InputField label="Navn" placeholder="Ola Nordmann" />
          <InputField label="E-post" placeholder="post@bedrift.no" type="email" />
          <InputField label="Telefon" placeholder="+47 000 00 000" />
          <InputField label="Selskap" placeholder="Bedrift AS" />
        </div>
      </div>

      {/* Cards */}
      <div>
        <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.15em", color: "#858f8f", fontFamily: "'Plus Jakarta Sans', sans-serif", marginBottom: 20 }}>SERVICE CARDS</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16 }}>
          <Card icon={<IconHydraulic size={36} color="#10464e" strokeWidth={1.5} />} tag="Vinsjar" title="Vinsjar & Capstanar" desc="Ankervinsjar, slepevinsjar, trålevinsjar og capstanar i sjøvassbestandig aluminium. Skreddarsydd for fartøyet ditt." />
          <Card icon={<IconCrane size={36} color="#10464e" strokeWidth={1.5} />} tag="Løfteutstyr" title="Kraner & Davitar" desc="MOB-davitar, lastekraner og LARS-system. Kritisk utstyr for redning, last og subsea-operasjonar." />
          <Card icon={<IconPropeller size={36} color="#10464e" strokeWidth={1.5} />} tag="Framdrift" title="Sidepropellar" desc="Hydrauliske sidepropellar for presis manøvrering. Kompakt kraft, minimalt vedlikehald, lang levetid." />
          <Card icon={<IconWrench size={36} color="#10464e" strokeWidth={1.5} />} tag="Service" title="Service & Vedlikehald" desc="Eigne servicefolk med inngåande produktkunnskap. Planlagte oppdrag og rask respons ved behov." />
        </div>
      </div>
    </section>
  );
}
