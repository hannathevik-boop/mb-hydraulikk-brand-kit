import React from "react";
import { MbhIcon } from "./icons/Icon";
import type { MbhIconName } from "./icons/iconDefinitions";

interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
}

// Gamle ikoner er nå wrappere rundt MbhIcon; lyse farger gir hvit palett, ellers teal.
function legacy(name: MbhIconName) {
  return function LegacyIcon({ size = 32, color = "#10464e", className }: IconProps) {
    const light = /^#(fa|ff|f[0-9a-f])/i.test(color);
    return <MbhIcon name={name} palette={light ? "white" : "teal"} size={size} className={className} />;
  };
}

export const IconAnchor = legacy("anchor");
export const IconValve = legacy("valve");
export const IconPiston = legacy("piston");
export const IconPressureGauge = legacy("pressure-gauge");
export const IconPropeller = legacy("propeller");
export const IconWave = legacy("wave");
export const IconShip = legacy("ship");
export const IconBoat = legacy("boat");
export const IconCrane = legacy("crane");
export const IconWinch = legacy("winch");
export const IconCompass = legacy("compass");
export const IconChain = legacy("chain");
export const IconGear = legacy("gear");
export const IconPipe = legacy("pipe");
export const IconHydraulic = legacy("hydraulic");
export const IconCylinder = legacy("cylinder");
export const IconPump = legacy("pump");
export const IconBuoy = legacy("buoy");
export const IconWrench = legacy("wrench");
export const IconOilDrop = legacy("oil-drop");
export const IconShield = legacy("shield");
