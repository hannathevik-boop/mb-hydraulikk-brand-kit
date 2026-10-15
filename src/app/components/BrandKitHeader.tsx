import React from "react";
import { useLocation, useNavigate } from "react-router";
import { MBHLogo } from "./MBHLogo";
import { Button } from "./ui/button";

export const ICON_PAGE_PATH = "/brand-kit/ikoner";

export const SECTIONS = [
  { id: "colors", label: "Farger" },
  { id: "type", label: "Typografi" },
  { id: "icons", label: "Ikon" },
  { id: "components", label: "Komponenter" },
  { id: "figures", label: "Figurer" },
  { id: "presentation", label: "Presentasjon" },
  { id: "website", label: "Nettside" },
];

const navClass = "bg-[#0a2e35] px-4 text-[11px] tracking-[0.08em] text-[#faf6f1] hover:bg-[#A84F2E] hover:text-[#faf6f1]";

export function BrandKitHeader({ active, onSectionClick }: { active?: string; onSectionClick?: (id: string) => void }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const onIconPage = pathname === ICON_PAGE_PATH;

  const go = (id: string) => (onSectionClick && !onIconPage ? onSectionClick(id) : navigate(`/#${id}`));
  const underline = (on: boolean) => ({ borderBottom: on ? "1px solid #faf6f1" : "1px solid transparent", paddingBottom: 2 });

  return (
    <header style={{ background: "#0a2e35", padding: "0 clamp(12px, 4vw, 40px)", minHeight: 60, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
      <button type="button" onClick={() => navigate("/")} aria-label="Til forsiden" style={{ background: "none", border: 0, padding: 0, cursor: "pointer" }}>
        <MBHLogo variant="full" theme="warmWhite" size="sm" />
      </button>
      <nav style={{ display: "flex", flexWrap: "wrap", gap: 6, justifyContent: "center" }}>
        {SECTIONS.map((s) => (
          <Button key={s.id} variant="ghost" size="sm" className={navClass} style={{ borderRadius: 0, boxShadow: "none" }} onClick={() => go(s.id)}>
            <span style={underline(!onIconPage && active === s.id)}>{s.label}</span>
          </Button>
        ))}
        <Button variant="ghost" size="sm" className={navClass} style={{ borderRadius: 0, boxShadow: "none" }} onClick={() => navigate(ICON_PAGE_PATH)}>
          <span style={underline(onIconPage)}>Ikoner</span>
        </Button>
      </nav>
      <Button
        variant="ghost"
        size="sm"
        className="bg-[#A84F2E] px-4 text-[11px] tracking-[0.08em] text-[#faf6f1] hover:bg-[#73331f] hover:text-[#faf6f1]"
        style={{ borderRadius: 0, boxShadow: "none" }}
        onClick={() => go("website")}
      >
        Preview demo
      </Button>
    </header>
  );
}
