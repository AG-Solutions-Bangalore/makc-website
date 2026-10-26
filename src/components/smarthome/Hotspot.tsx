import type { CSSProperties } from "react";
import type { Coordinate } from "./types";

interface HotspotProps {
  id: string;
  anchor: Coordinate;
  isHovered: boolean;
  isActive: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
  onClick: () => void;
  index: number;
  delay?: number;
  isMobile?: boolean;
}

export default function Hotspot({
  id,
  anchor,
  isHovered,
  isActive,
  onHoverStart,
  onHoverEnd,
  onClick,
  index,
  delay = 0,
  isMobile = false,
}: HotspotProps) {
  const highlighted = isHovered || isActive;
  return (
    <button
      type="button"
      style={
        {
          position: "absolute",
          left: `${anchor.x - 0.5}%`,
          top: `${anchor.y - 0.1}%`,
          transform: "translate(-40%, -50%)",
          zIndex: 50,
          "--enter-delay": `${delay}s`,
          "--pop-from": 0,
        } as CSSProperties
      }
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      onFocus={onHoverStart}
      onBlur={onHoverEnd}
      onClick={onClick}
      aria-label={`Toggle info for ${id}`}
      className="hidden lg:block hero-pop outline-none select-none relative cursor-pointer rounded-full focus-visible:ring-2 focus-visible:ring-[#d4af37] focus-visible:ring-offset-2 focus-visible:ring-offset-black/50 before:absolute before:-inset-3 before:rounded-full before:content-['']"
    >
      {/* Solid center dot — same size/position as before, gold only on hover/active */}
      <div
        className={`
          relative flex items-center justify-center rounded-full border-2 border-black/80
          ${highlighted ? "bg-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.8)]" : "bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"}
          transition-all duration-300
          ${isMobile ? "w-2.5 h-2.5" : "w-3.5 h-3.5"}
        `}
      />
    </button>
  );
}
