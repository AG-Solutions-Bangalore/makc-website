import type { ComponentType, CSSProperties } from "react";
import type { LucideProps } from "lucide-react";
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
    <button
      type="button"
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
      onFocus={onHoverStart}
      onBlur={onHoverEnd}
      onClick={onClick}
      aria-label={`Toggle info for ${label}`}
      aria-pressed={isActive}
      className={`
        hidden lg:flex hero-pop items-center cursor-pointer select-none
        bg-white/85 dark:bg-black/75 backdrop-blur-md
        border rounded-full transition-all duration-300
        outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37] focus-visible:ring-offset-2 focus-visible:ring-offset-black/50
        ${
          highlighted
            ? "border-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.4)] text-[#d4af37] scale-[1.02] -translate-y-0.5"
            : "border-black/10 dark:border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.25)] text-text-main dark:text-white hover:scale-[1.02] hover:-translate-y-0.5 hover:border-[#d4af37] hover:text-[#d4af37] hover:shadow-[0_0_15px_rgba(212,175,55,0.4)]"
        }
        ${
          isMobile
            ? "px-2 py-0.5 text-[8.5px] font-bold uppercase tracking-tight gap-1"
            : isTablet
            ? "px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider gap-1.5"
            : "px-4.5 py-2 text-xs font-semibold uppercase tracking-wider gap-2"
        }
      `}
    >
      <span
        className={`transition-all duration-300 ${highlighted ? "rotate-[15deg] text-[#d4af37]" : "text-text-main/70 dark:text-white/80"}`}
      >
        <Icon className={isMobile ? "h-2.5 w-2.5" : isTablet ? "h-3.5 w-3.5" : "h-4 w-4"} />
      </span>
      <span className="whitespace-nowrap font-sans">{label}</span>
    </button>
  );
}
