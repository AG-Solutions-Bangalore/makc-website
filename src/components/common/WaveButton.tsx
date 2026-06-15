import React from "react";

interface WaveButtonProps {
  /**
   * Destination URL. If provided, renders as an anchor link (<a>).
   * Otherwise renders as a button (<button>).
   */
  href?: string;

  /**
   * Click event handler.
   */
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;

  /**
   * Additional Tailwind classes.
   */
  className?: string;

  /**
   * The custom accent color of the rising wave on hover.
   * Maps to the CSS variable --cta-accent.
   * @default "var(--color-gold-primary)"
   */
  accentColor?: string;

  /**
   * The custom text/foreground color on hover.
   * Maps to the CSS variable --cta-foreground.
   * @default "#ffffff"
   */
  foregroundColor?: string;

  /**
   * The inner elements of the button.
   */
  children: React.ReactNode;

  /**
   * Target window for links (e.g. "_blank").
   */
  target?: string;

  /**
   * Relationship parameter for links (e.g. "noopener noreferrer").
   */
  rel?: string;

  /**
   * Button type (only applicable when href is not specified).
   */
  type?: "button" | "submit" | "reset";

  /**
   * Disables the button.
   */
  disabled?: boolean;
}

export default function WaveButton({
  href,
  onClick,
  className = "",
  accentColor = "var(--color-gold-primary)",
  foregroundColor = "#000000",
  children,
  target,
  rel,
  type = "button",
  disabled = false,
}: WaveButtonProps) {
  // Define custom styles mapping colors to CSS variables
  const style = {
    "--cta-accent": accentColor,
    "--cta-foreground": foregroundColor,
  } as React.CSSProperties;

  // Common wrapper class that applies the hover effect rules
  const baseClass = `home-wave-cta ${className}`;

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        target={target}
        rel={rel}
        className={baseClass}
        style={style}
      >
        {/* Render child elements inside relative z-10 block so they stay visible above the wave */}
        <span className="relative z-10 flex items-center gap-inherit justify-center w-full h-full">
          {children}
        </span>
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={baseClass}
      style={style}
    >
      <span className="relative z-10 flex items-center gap-inherit justify-center w-full h-full">
        {children}
      </span>
    </button>
  );
}
