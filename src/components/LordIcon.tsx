"use client";

import { useRef } from "react";
import { Player } from "@lordicon/react";

interface LordIconProps {
  icon: object;
  size?: number;
  colors?: { primary?: string; secondary?: string };
}

export default function LordIcon({ icon, size = 150, colors }: LordIconProps) {
  const playerRef = useRef<Player>(null);

  const colorsString = [
    colors?.primary ? `primary:${colors.primary}` : null,
    colors?.secondary ? `secondary:${colors.secondary}` : null,
  ]
    .filter(Boolean)
    .join(",");

  return (
    <div
      onMouseEnter={() => playerRef.current?.playFromBeginning()}
      style={{ display: "inline-block", cursor: "default" }}
    >
      <Player
        ref={playerRef}
        icon={icon}
        size={size}
        colors={colorsString || undefined}
      />
    </div>
  );
}
