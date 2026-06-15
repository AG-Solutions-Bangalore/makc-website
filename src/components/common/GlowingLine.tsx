import React from "react";

interface GlowingLineProps {
  /**
   * Orientation of the line.
   * - "horizontal": Fades out on the left and right edges.
   * - "vertical": Fades out on the top and bottom edges.
   * @default "horizontal"
   */
  direction?: "horizontal" | "vertical";

  /**
   * Length of the line (e.g. "w-full", "h-32", "w-[150px]", "h-[70%]").
   * @default "w-full" (for horizontal) or "h-full" (for vertical)
   */
  length?: string;

  /**
   * Thickness of the line core.
   * @default "h-[1px]" (for horizontal) or "w-[1px]" (for vertical)
   */
  thickness?: string;

  /**
   * Theme-friendly color variable name or custom class for the line core.
   * @default "bg-accent-blue"
   */
  colorClass?: string;

  /**
   * Color class used for the soft glow layer.
   * @default "from-accent-blue"
   */
  glowColorClass?: string;

  /**
   * Whether to display the bright central flare point.
   * @default true
   */
  flare?: boolean;

  /**
   * Custom Tailwind classes to style the central flare size.
   * @default "w-4 h-4"
   */
  flareSizeClass?: string;

  /**
   * Rotation angle in degrees.
   * @default 0
   */
  rotation?: number;

  /**
   * Whether the central flare point should slowly pulse in intensity.
   * @default true
   */
  pulse?: boolean;

  /**
   * Additional custom CSS classes for positioning (e.g. "absolute top-1/2 left-0 -translate-y-1/2")
   */
  className?: string;

  /**
   * Inline style object for arbitrary properties.
   */
  style?: React.CSSProperties;
}

export default function GlowingLine({
  direction = "horizontal",
  length,
  thickness,
  colorClass = "text-accent-blue",
  glowColorClass = "text-accent-blue",
  flare = true,
  flareSizeClass = "w-4 h-4",
  rotation = 0,
  pulse = true,
  className = "",
  style = {},
}: GlowingLineProps) {
  const isHorizontal = direction === "horizontal";

  // Resolve default length and thickness classes based on orientation
  const resolvedLength = length || (isHorizontal ? "w-full" : "h-full");
  const resolvedThickness = thickness || (isHorizontal ? "h-[1px]" : "w-[1px]");

  // Construct inline rotation styles if specified
  const rotationStyle: React.CSSProperties = rotation
    ? { transform: `rotate(${rotation}deg)`, transformOrigin: "center" }
    : {};

  return (
    <div
      className={`relative flex items-center justify-center select-none ${resolvedLength} ${resolvedThickness} ${className}`}
      style={{ ...rotationStyle, ...style }}
    >
      {/* 1. Base Gradient Core Line (Fading to transparent at ends) */}
      <div
        className={`absolute inset-0 opacity-80 bg-current ${
          isHorizontal
            ? `bg-gradient-to-r from-transparent via-current to-transparent ${colorClass}`
            : `bg-gradient-to-b from-transparent via-current to-transparent ${colorClass}`
        }`}
      />

      {/* 2. Soft Ambient Glow Layer (Blurred and wider background) */}
      <div
        className={`absolute blur-[4px] opacity-40 bg-current ${
          isHorizontal
            ? `h-[6px] w-full bg-gradient-to-r from-transparent via-current to-transparent ${glowColorClass}`
            : `w-[6px] h-full bg-gradient-to-b from-transparent via-current to-transparent ${glowColorClass}`
        }`}
      />

      {/* 3. Bright Central Flare Point */}
      {flare && (
        <div
          className={`absolute rounded-full pointer-events-none flex items-center justify-center ${flareSizeClass} ${
            pulse ? "animate-pulse" : ""
          }`}
        >
          {/* Flare Core: White hot center */}
          <div className="absolute w-[25%] h-[25%] bg-white rounded-full z-20" />
          
          {/* Flare Inner Glow: High intensity accent blue glow */}
          <div className={`absolute w-[60%] h-[60%] rounded-full blur-[1px] opacity-90 bg-white shadow-[0_0_8px_4px_currentColor] ${colorClass}`} />
          
          {/* Flare Outer Halo: Soft ambient halo */}
          <div className={`absolute w-full h-full rounded-full blur-[3px] opacity-55 bg-white shadow-[0_0_12px_6px_currentColor] ${glowColorClass}`} />
        </div>
      )}
    </div>
  );
}
