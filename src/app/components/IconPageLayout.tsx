import React from "react";
import { BrandKitHeader } from "./BrandKitHeader";
import { MBHLogo } from "./MBHLogo";
import { IconLibraryPage } from "./icons/IconLibraryPage";

export function IconPageLayout() {
  return (
    <div style={{ background: "#faf6f1", minHeight: "100vh", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <BrandKitHeader />
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(16px, 4vw, 80px)" }}>
        <IconLibraryPage />
        <div style={{ borderTop: "1px solid rgba(16,70,78,0.1)", padding: "32px 0", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <MBHLogo variant="wordmark" theme="blue" size="sm" />
          <span style={{ fontSize: 11, color: "#b9bcac", letterSpacing: "0.1em" }}>BRAND KIT v1.0 · 2026 · MB HYDRAULIKK AS · MJOSUNDET, AURE</span>
        </div>
      </div>
    </div>
  );
}
