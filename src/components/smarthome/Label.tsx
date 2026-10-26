import type { ComponentType, CSSProperties } from "react";
import type { LucideProps } from "lucide-react";
import { Play } from "lucide-react";
import type { Coordinate } from "./types";

interface LabelProps {
  label: string;
  labelPos: Coordinate;
  icon: ComponentType<LucideProps>;
  isHovered: boolean;
  isActive: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
  onClick: () => void;
  delay?: number;
  isTablet?: boolean;
  isMobile?: boolean;
}

export default function Label({
  label,
  labelPos,
  icon: Icon,
  isHovered,
  isActive,
  onHoverStart,
  onHoverEnd,
  onClick,
  delay = 0,
  isTablet = false,
  isMobile = false,
}: LabelProps) {
  const highlighted = isHovered || isActive;
  return (
    <div
      style={
        {
          position: "absolute",
          left: `${labelPos.x - (isMobile ? 1 : 2)}%`,
          top: `${labelPos.y - (isMobile ? 1 : 2)}%`,
          transform: "translate(-50%, -50%)",
          zIndex: highlighted ? 40 : 30,
          "--enter-delay": `${delay + 0.8}s`,
        } as CSSProperties
      }
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      onClick={onClick}
      className={`
        hidden lg:flex hero-pop items-center cursor-pointer select-none group
        ${isHovered ? "scale-[1.06]" : ""}
        bg-black/55 hover:bg-black/75 backdrop-blur-md
        border ${
          highlighted
            ? "border-[#38bdf8] shadow-[0_0_18px_rgba(56,189,248,0.5)] bg-black/75"
            : "border-white/30 shadow-[0_4px_16px_rgba(0,0,0,0.4)]"
        }
        rounded-full transition-all duration-300
        ${
          isMobile
            ? "px-2.5 py-0.5 text-[8.5px] font-bold uppercase tracking-tight gap-1.5"
            : isTablet
            ? "px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider gap-2"
            : "px-4.5 py-2 text-xs font-bold uppercase tracking-wider gap-2"
        }
      `}
    >
      <div
        className={`transition-transform duration-300 shrink-0 text-[#38bdf8] drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] ${
          isHovered ? "rotate-[15deg]" : ""
        }`}
      >
        <Icon className={isMobile ? "h-2.5 w-2.5" : isTablet ? "h-3.5 w-3.5" : "h-4 w-4"} />
      </div>
      <span
        className="whitespace-nowrap font-sans font-bold tracking-wider uppercase"
        style={{
          color: "#ffffff",
          textShadow: "0 1px 4px rgba(0,0,0,0.95), 0 0 8px rgba(0,0,0,0.9)",
        }}
      >
        {label}
      </span>
      <div
        className={`ml-0.5 flex items-center justify-center transition-all duration-300 shrink-0 text-[#38bdf8] ${
          isHovered ? "scale-115 translate-x-0.5" : ""
        }`}
      >
        <Play
          className={`${
            isMobile ? "h-2 w-2" : isTablet ? "h-2.5 w-2.5" : "h-3 w-3"
          } fill-[#38bdf8] text-[#38bdf8] drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]`}
        />
      </div>
    </div>
  );
}
