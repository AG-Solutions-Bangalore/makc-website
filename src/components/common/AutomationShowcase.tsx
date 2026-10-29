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
      className="w-full relative overflow-hidden bg-bg-surface dark:bg-black py-10 sm:py-14 lg:py-20 border-b border-border-main/40"
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 xl:gap-16 items-center">
          {/* Left Column: Heading, Subtitle and Tabs */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <span className="text-[10px] font-bold text-[var(--accent-color)] uppercase tracking-[0.25em] block mb-2 sm:mb-3">
              {eyebrow}
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-text-main dark:text-white tracking-[-0.03em] leading-[1.12] mb-4 sm:mb-5 text-balance">
              {heading}
            </h2>

            <p className="text-sm sm:text-base text-text-muted dark:text-white/70 max-w-[30rem] leading-relaxed mb-5 sm:mb-6">
              {introduction}
            </p>

            <div className="w-10 h-[2px] bg-[rgba(var(--accent-color-rgb),0.7)] mb-2 sm:mb-3" />

            <div
              className="flex items-start gap-2 sm:gap-4 lg:gap-5 w-full overflow-x-auto flex-nowrap scrollbar-none snap-x snap-mandatory touch-pan-x -mx-5 px-5 sm:mx-0 sm:px-0 pt-3 pb-1"
              role="tablist"
              aria-label="Automation solutions"
            >
              {slides.map((tab, idx) => {
                const Icon = tab.icon;
                const isActive = idx === activeIndex;

                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={(e) => {
                      setActiveIndex(idx);
                      e.currentTarget.scrollIntoView({
                        behavior: "smooth",
                        block: "nearest",
                        inline: "center",
                      });
                    }}
                    role="tab"
                    aria-selected={isActive}
                    aria-label={tab.title}
                    aria-controls="automation-showcase-detail"
                    className="group flex w-16 sm:w-20 shrink-0 snap-start cursor-pointer flex-col items-center gap-2.5 focus:outline-none"
                  >
                    <span
                      className={`flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                        isActive
                          ? "border-[var(--accent-color)] bg-bg-main dark:bg-white/10 shadow-[0_0_0_4px_rgba(var(--accent-color-rgb),0.12)]"
                          : "border-border-main bg-bg-main/70 dark:border-white/15 dark:bg-white/5 group-hover:border-[rgba(var(--accent-color-rgb),0.45)]"
                      }`}
                    >
                      <Icon
                        className={`h-6 w-6 sm:h-7 sm:w-7 transition-colors duration-300 ${
                          isActive
                            ? "text-[var(--accent-color)]"
                            : "text-text-main/70 dark:text-white/70 group-hover:text-text-main dark:group-hover:text-white"
                        }`}
                      />
                    </span>
                    <span
                      className={`text-[11px] sm:text-xs font-semibold tracking-wide text-center leading-tight whitespace-nowrap transition-colors duration-200 ${
                        isActive
                          ? "text-[var(--accent-color)]"
                          : "text-text-muted dark:text-white/60 group-hover:text-text-main dark:group-hover:text-white"
                      }`}
                    >
                      {tab.shortTitle}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Active image in a contained media card */}
          <div className="lg:col-span-6 w-full">
            <div className="relative h-[420px] sm:h-[500px] lg:h-[560px] w-full overflow-hidden rounded-3xl border border-border-main/40 dark:border-white/10 bg-slate-900 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.35)]">
              {slides.map((tab, idx) => (
                <img
                  key={tab.id}
                  src={tab.image}
                  alt={tab.imageAlt}
                  title={tab.imageTitle || tab.imageAlt}
                  aria-hidden={idx !== cachedIndex}
                  className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ease-in-out ${
                    idx === cachedIndex
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-[1.03] pointer-events-none"
                  }`}
                  style={{
                    transitionProperty: "opacity, transform",
                    objectPosition: tab.imagePosition,
                  }}
                />
              ))}

              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/5 pointer-events-none" />

              <span className="absolute top-4 right-4 z-10 rounded-full border border-white/15 bg-black/35 px-3 py-1 text-[11px] font-semibold tracking-[0.2em] text-white/80 backdrop-blur-md">
                {activeTab.id} / {String(slides.length).padStart(2, "0")}
              </span>

              <div
                id="automation-showcase-detail"
                role="tabpanel"
                className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-7 lg:p-8"
              >
                <div
                  className={`transition-all duration-500 ease-out ${
                    isTransitioning
                      ? "opacity-0 translate-y-2"
                      : "opacity-100 translate-y-0"
                  }`}
                >
                  <span className="text-4xl sm:text-5xl font-extrabold font-display tracking-tight text-[var(--accent-color)] leading-none block mb-2">
                    {activeTab.id}
                  </span>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-white tracking-tight mb-2 sm:mb-3 text-balance">
                    {activeTab.title}
                  </h3>

                  <p className="text-sm sm:text-base text-white/80 leading-relaxed font-medium max-w-xl">
                    {activeTab.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
