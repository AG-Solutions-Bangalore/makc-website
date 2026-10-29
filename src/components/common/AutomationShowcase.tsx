import { useEffect, useState, type ComponentType, type ReactNode } from "react";
import {
  Lightbulb,
  ShieldCheck,
  DoorClosed,
} from "lucide-react";
import { getImageUrl } from "@/utils/image";

// Custom Blinds / Curtain SVG icon to match design
function CurtainIcon({
  className = "w-6 h-6",
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
    >
      <path d="M3 3h18" />
      <path d="M20 7H4" />
      <path d="M20 11H4" />
      <path d="M20 15H4" />
      <path d="M19 19v-4" />
      <path d="M5 19v-4" />
      <path d="M8 19h8" />
    </svg>
  );
}

// Custom Gate SVG icon representing an automated sliding / swing gate
function GateIcon({
  className = "w-6 h-6",
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
    >
      {/* Outer gate pillars */}
      <path d="M3 21V5" />
      <path d="M21 21V5" />
      {/* Top and bottom horizontal rails */}
      <path d="M3 8h18" />
      <path d="M3 17h18" />
      {/* Vertical gate pickets */}
      <path d="M7 8v9" />
      <path d="M12 5v16" />
      <path d="M17 8v9" />
    </svg>
  );
}

export interface AutomationShowcaseSlide {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  image: string;
  imageAlt: string;
  imageTitle?: string;
  imagePosition?: string;
  icon: ComponentType<{ className?: string; style?: React.CSSProperties }>;
}

const DEFAULT_SLIDES: AutomationShowcaseSlide[] = [
  {
    id: "01",
    title: "Lighting",
    shortTitle: "Lighting",
    description:
      "Transform your spaces with adaptive lighting scenes tailored to your daily routines.",
    image: "/images/temp/lighting_image1.webp",
    imageAlt: "Industrial and Commercial Lighting Automation Solutions",
    imageTitle: "Lighting Services",
    imagePosition: "50% 10%",
    icon: Lightbulb,
  },
  {
    id: "02",
    title: "Gate Automation",
    shortTitle: "Gate",
    description:
      "Fortify your home with integrated alarms, access control, and smart surveillance.",
    image: getImageUrl("/service/ha1.2.webp"),
    imageAlt: "Industrial Security and Surveillance Automation Solutions",
    imageTitle: "Gate Automation Services",
    icon: GateIcon,
  },
  {
    id: "03",
    title: "Door Automation",
    shortTitle: "Door",
    description:
      "Keyless biometric access, video entry, and smart locks for everyday security.",
    image: getImageUrl("/service/ha1.3.webp"),
    imageAlt: "Luxury living room featuring automated smart Doors at sunset",
    imageTitle: "Smart Door Automation",
    icon: DoorClosed,
  },
  {
    id: "04",
    title: "Curtain Automation",
    shortTitle: "Curtains",
    description:
      "Shape daylight, privacy, and ambience with smart motorized curtains and blinds.",
    image: getImageUrl("curtain_automation.webp"),
    imageAlt: "Automated smart curtain system in modern living room",
    imageTitle: "Smart Curtain Automation Services",
    icon: CurtainIcon,
  },
];

export interface AutomationShowcaseProps {
  slides?: AutomationShowcaseSlide[];
  initialSlideId?: string;
  eyebrow?: string;
  heading?: ReactNode;
  introduction?: string;
  ctaLabel?: string;
  ctaHref?: string;
  accentColor?: string;
}

export default function AutomationShowcase({
  slides = DEFAULT_SLIDES,
  initialSlideId = "01",
  eyebrow = "Smart Automation",
  heading = (
    <>
      Intelligent automation <br />
      for a <span className="text-[var(--accent-color)]">smarter life</span>
    </>
  ),
  introduction = "Transform your home into a smart, connected space that adapts to your lifestyle.",
  accentColor = "#7784ff",
}: AutomationShowcaseProps) {
  const initialIndex = Math.max(
    0,
    slides.findIndex((slide) => slide.id === initialSlideId),
  );
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [cachedIndex, setCachedIndex] = useState(initialIndex);

  // Convert hex color to comma-separated RGB values for opacity/rgba usage
  const hexToRgb = (hex: string): string => {
    const cleanHex = hex.replace("#", "");
    const num = parseInt(cleanHex, 16);
    const r = (num >> 16) & 255;
    const g = (num >> 8) & 255;
    const b = num & 255;
    return `${r}, ${g}, ${b}`;
  };

  const accentColorRgb = hexToRgb(accentColor);
  const accentStyle = {
    "--accent-color": accentColor,
    "--accent-color-rgb": accentColorRgb,
  } as React.CSSProperties;

  const slidesSerialized = slides.map((slide) => slide.id).join(",");

  useEffect(() => {
    setActiveIndex(initialIndex);
    setCachedIndex(initialIndex);
  }, [slidesSerialized, initialSlideId, initialIndex]);

  useEffect(() => {
    if (activeIndex >= slides.length) {
      setActiveIndex(initialIndex);
      setCachedIndex(initialIndex);
    }
  }, [activeIndex, initialIndex, slides.length]);

  useEffect(() => {
    if (activeIndex !== cachedIndex) {
      setIsTransitioning(true);
      const timer = setTimeout(() => {
        setCachedIndex(activeIndex);
        setIsTransitioning(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [activeIndex, cachedIndex]);

  if (slides.length === 0) return null;

  const activeTab = slides[cachedIndex] ?? slides[0];

  return (
    <section
      style={accentStyle}
      className="w-full relative overflow-hidden bg-bg-surface dark:bg-black py-6 sm:py-10 lg:py-24 min-h-0 lg:h-[650px] flex items-center border-b border-border-main/40 select-none"
    >
      {/* Background Images Crossfade Layer (Only on the right half for desktop, full background for mobile) */}
      {slides.map((tab, idx) => (
        <img
          key={tab.id}
          src={tab.image}
          alt={tab.imageAlt}
          title={tab.imageTitle || tab.imageAlt}
          className={`absolute inset-y-0 right-0 h-full object-cover object-center z-0 transition-all duration-1000 ease-in-out lg:w-1/2 w-full brightness-105 contrast-105 ${
            idx === cachedIndex
              ? "opacity-100 scale-100"
              : "opacity-0 pointer-events-none"
          }`}
          style={{
            transitionProperty: "opacity, transform",
            objectPosition: tab.imagePosition,
          }}
        />
      ))}

      {/* Subtle edge blend only at the seam where left column meets the image, leaving the background image 100% crisp and unblurred */}
      <div className="absolute inset-y-0 left-1/2 w-12 bg-gradient-to-r from-bg-surface dark:from-black to-transparent z-10 hidden lg:block pointer-events-none" />
      {/* Mobile fade overlay to ensure text contrast without blacking out or blurring the background image */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-surface/85 via-bg-surface/30 to-bg-surface/90 dark:from-black/85 dark:via-black/25 dark:to-black/90 z-10 lg:hidden pointer-events-none" />

      {/* Grid Content Overlay */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-5 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-center">
          {/* Left Column: Heading, Subtitle, Tabs, and Arrows */}
          <div className="lg:col-span-7 flex flex-col justify-between text-left">
            <div>
              {/* Eyebrow */}
              <span className="text-[10px] font-bold text-[var(--accent-color)] uppercase tracking-[0.25em] block mb-2 sm:mb-4">
                {eyebrow}
              </span>

              {/* Main Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-text-main dark:text-white tracking-[-0.03em] leading-[1.15] mb-3 sm:mb-6 text-balance">
                {heading}
              </h2>

              {/* Subtext */}
              <p className="text-sm sm:text-base text-slate-800 dark:text-white/70 max-w-[27rem] leading-relaxed mb-3 sm:mb-6 font-medium sm:font-normal">
                {introduction}
              </p>

              {/* Short Line Divider */}
              <div className="w-10 h-[2px] bg-[rgba(var(--accent-color-rgb),0.7)] mb-4 sm:mb-8" />

              <div
                className="flex flex-wrap items-center gap-3 py-2 sm:gap-6 mt-4 sm:mt-6 lg:mt-8"
                role="tablist"
                aria-label="Automation solutions"
              >
                {slides.map((tab, idx) => {
                  const Icon = tab.icon;
                  const isActive = idx === activeIndex;

                  return (
                    <div key={tab.id} className="flex flex-col  items-center shrink-0 gap-2">
                      <button
                        onClick={() => setActiveIndex(idx)}
                        role="tab"
                        aria-selected={isActive}
                        aria-label={tab.title}
                        aria-controls="automation-showcase-detail"
                        className={`flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full transition-all duration-300 relative cursor-pointer group shadow-md ${
                          isActive
                            ? "bg-white dark:bg-black border-2 border-[var(--accent-color)] z-10 shadow-lg scale-105"
                            : "bg-white dark:bg-black/75 border border-slate-300 dark:border-white/20 hover:border-slate-500 hover:shadow-lg"
                        }`}
                      >
                        <Icon
                          className={`w-7 h-7 sm:w-8 sm:h-8 transition-transform duration-300 group-hover:scale-110 ${
                            isActive
                              ? "text-[var(--accent-color)]"
                              : "text-slate-800 dark:text-white/80 group-hover:text-black dark:group-hover:text-white"
                          }`}
                        />
                      </button>
                      <span
                        className={`text-xs sm:text-sm tracking-wide text-center leading-tight transition-all duration-200 select-none ${
                          isActive
                            ? "text-[var(--accent-color)] font-bold drop-shadow-sm"
                            : "text-slate-800 dark:text-slate-200 font-semibold hover:text-[var(--accent-color)]"
                        }`}
                      >
                        {tab.shortTitle}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Tab details floating directly over the image with transparent background */}
          <div
            className="lg:col-span-5 flex flex-col justify-center items-start text-left pl-0 lg:pl-6"
            id="automation-showcase-detail"
            role="tabpanel"
          >
            <div
              className={`transition-all duration-500 ease-out relative p-2 sm:p-4 max-w-lg ${
                isTransitioning
                  ? "opacity-0 translate-y-2"
                  : "opacity-100 translate-y-0"
              }`}
            >
              {/* Large glowing backdrop number */}
              <span className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-[var(--accent-color)] select-none leading-none block mb-1 drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
                {activeTab.id}
              </span>

              {/* Detail Title */}
              <h3
                style={{
                  color: "#ffffff",
                  textShadow:
                    "0 2px 12px rgba(0,0,0,0.95), 0 1px 4px rgba(0,0,0,0.9)",
                }}
                className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display !text-white text-white! tracking-tight mb-3 mt-1 text-balance drop-shadow-[0_3px_12px_rgba(0,0,0,0.95)]"
              >
                {activeTab.title}
              </h3>

              {/* Detail Description */}
              <p
                style={{
                  color: "#ffffff",
                  textShadow:
                    "0 2px 8px rgba(0,0,0,0.95), 0 1px 3px rgba(0,0,0,0.9)",
                }}
                className="!text-white text-white! text-base sm:text-lg leading-relaxed font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]"
              >
                {activeTab.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
