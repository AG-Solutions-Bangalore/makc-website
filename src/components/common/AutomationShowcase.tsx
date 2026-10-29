import { useEffect, useState, type ComponentType, type ReactNode } from "react";
import {
  Lightbulb,
  DoorClosed,
  Calendar,
  Sun,
  Sliders,
  ArrowRight,
  Shield,
  Lock,
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
      <path d="M3 21V5" />
      <path d="M21 21V5" />
      <path d="M3 8h18" />
      <path d="M3 17h18" />
      <path d="M7 8v9" />
      <path d="M12 5v16" />
      <path d="M17 8v9" />
    </svg>
  );
}

export interface AutomationShowcaseFeature {
  icon: ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  shortTitle?: string;
  shortSubtitle?: string;
}

export interface AutomationShowcaseGalleryItem {
  image: string;
  alt: string;
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
  exploreHref?: string;
  features?: AutomationShowcaseFeature[];
  gallery?: AutomationShowcaseGalleryItem[];
  mobileTextLight?: boolean;
}

const DEFAULT_SLIDES: AutomationShowcaseSlide[] = [
  {
    id: "01",
    title: "Lighting",
    shortTitle: "Lighting",
    description:
      "Transform your spaces with adaptive lighting scenes tailored to your daily routines.",
    image: "/images/temp/lighting_image1.webp",
    imageAlt: "Luxury living room with warm architectural lighting",
    imageTitle: "Lighting Services",
    imagePosition: "50% 10%",
    icon: Lightbulb,
    exploreHref: "#electrical-automation",
    features: [
      {
        icon: Calendar,
        title: "Time-Based",
        subtitle: "Automatic scheduling for convenience.",
        shortTitle: "Time Based",
        shortSubtitle: "Scheduling",
      },
      {
        icon: Sun,
        title: "Adaptive",
        subtitle: "Adjusts to daylight and your activities.",
        shortTitle: "Adaptive",
        shortSubtitle: "Brightness",
      },
      {
        icon: Sliders,
        title: "Custom Scenes",
        subtitle: "Create the perfect ambience.",
        shortTitle: "Custom",
        shortSubtitle: "Scenes",
      },
    ],
    gallery: [
      {
        image: getImageUrl("lightimage1.webp"),
        alt: "Circadian scene-based architectural lighting",
      },
      {
        image: getImageUrl("smart_dimming_lighting.webp"),
        alt: "Architectural dimming and warm LED fixture",
      },
      {
        image: getImageUrl("smart_outdoor_lighting.webp"),
        alt: "Automated outdoor villa landscape lighting",
      },
    ],
  },
  {
    id: "02",
    title: "Gate Automation",
    shortTitle: "Gate",
    description:
      "Fortify your home with integrated access control, smooth motorized gates, and smart obstacle sensing.",
    image: getImageUrl("/service/ha1.2.webp"),
    imageAlt: "Industrial Security and Surveillance Automation Solutions",
    imageTitle: "Gate Automation Services",
    imagePosition: "center",
    icon: GateIcon,
    exploreHref: "#gate-automation",
    mobileTextLight: true,
    features: [
      {
        icon: Shield,
        title: "Biometric & RFID",
        subtitle: "Instant vehicle and resident verification.",
        shortTitle: "Biometric",
        shortSubtitle: "Access",
      },
      {
        icon: Sun,
        title: "Obstacle Sensors",
        subtitle: "Safe automatic halt and auto-reversing.",
        shortTitle: "Obstacle",
        shortSubtitle: "Sensing",
      },
      {
        icon: Sliders,
        title: "Remote Control",
        subtitle: "Operate gates worldwide via mobile app.",
        shortTitle: "Remote",
        shortSubtitle: "Control",
      },
    ],
    gallery: [
      {
        image: getImageUrl("GA1.webp"),
        alt: "Smart automatic swing gate installation",
      },
      {
        image: getImageUrl("GA2.webp"),
        alt: "Heavy-duty sliding gate motor automation",
      },
      {
        image: getImageUrl("ha1.2.webp"),
        alt: "Modern villa perimeter gate security",
      },
    ],
  },
  {
    id: "03",
    title: "Door Automation",
    shortTitle: "Door",
    description:
      "Keyless biometric access, video intercom, and tamper-proof smart locks for effortless everyday security.",
    image: getImageUrl("/service/ha1.3.webp"),
    imageAlt: "Luxury living room featuring automated smart Doors at sunset",
    imageTitle: "Smart Door Automation",
    imagePosition: "center",
    icon: DoorClosed,
    exploreHref: "#door-automation",
    mobileTextLight: true,
    features: [
      {
        icon: Lock,
        title: "Keyless Entry",
        subtitle: "Fingerprint, PIN, NFC, and mobile unlocking.",
        shortTitle: "Keyless",
        shortSubtitle: "Entry",
      },
      {
        icon: Calendar,
        title: "Access Logs",
        subtitle: "Real-time entry history and timestamp alerts.",
        shortTitle: "Access",
        shortSubtitle: "Logs",
      },
      {
        icon: Sliders,
        title: "Video Intercom",
        subtitle: "Two-way HD audio and visual verification.",
        shortTitle: "Video",
        shortSubtitle: "Intercom",
      },
    ],
    gallery: [
      {
        image: getImageUrl("DA1.webp"),
        alt: "Biometric smart door lock handle",
      },
      {
        image: getImageUrl("DA2.webp"),
        alt: "Digital entrance keypad with NFC reader",
      },
      {
        image: getImageUrl("doorautomation1.webp"),
        alt: "Automated magnetic glass door closer",
      },
    ],
  },
  {
    id: "04",
    title: "Curtain Automation",
    shortTitle: "Curtains",
    description:
      "Shape daylight, privacy, and ambience with smart motorized curtains and blinds that sync with your schedule.",
    image: getImageUrl("curtain_automation.webp"),
    imageAlt: "Automated smart curtain system in modern living room",
    imageTitle: "Smart Curtain Automation Services",
    imagePosition: "center",
    icon: CurtainIcon,
    exploreHref: "#curtain-automation",
    features: [
      {
        icon: Sun,
        title: "Sun Tracking",
        subtitle: "Auto-adjusts with sunlight and natural daylight.",
        shortTitle: "Sun Track",
        shortSubtitle: "Sensors",
      },
      {
        icon: Calendar,
        title: "Schedule Sync",
        subtitle: "Open at sunrise and close at dusk automatically.",
        shortTitle: "Schedule",
        shortSubtitle: "Sync",
      },
      {
        icon: Sliders,
        title: "Quiet Motors",
        subtitle: "Ultra-silent whisper smooth motorized tracks.",
        shortTitle: "Quiet",
        shortSubtitle: "Motors",
      },
    ],
    gallery: [
      {
        image: getImageUrl("CA1.webp"),
        alt: "Motorized curtain track system mechanism",
      },
      {
        image: getImageUrl("CA2.webp"),
        alt: "Smart bedroom motorized blackout curtains",
      },
      {
        image: getImageUrl("curtain_automation.webp"),
        alt: "Luxury living room motorized sheer drapes",
      },
    ],
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
  accentColor = "#00A551",
}: AutomationShowcaseProps) {
  const initialIndex = Math.max(
    0,
    slides.findIndex((slide) => slide.id === initialSlideId),
  );
  const [activeIndex, setActiveIndex] = useState(initialIndex);
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
      const timer = setTimeout(() => {
        setCachedIndex(activeIndex);
      }, 250);
      return () => clearTimeout(timer);
    }
  }, [activeIndex, cachedIndex]);

  if (slides.length === 0) return null;

  const activeTab = slides[cachedIndex] ?? slides[0];
  const ActiveTabIcon = activeTab.icon;

  const mobileHeadingTone = activeTab.mobileTextLight
    ? "text-white [text-shadow:0_2px_18px_rgba(0,0,0,0.7),0_1px_2px_rgba(0,0,0,0.5)]"
    : "text-text-main [text-shadow:0_2px_18px_rgba(255,255,255,0.85),0_1px_2px_rgba(255,255,255,0.65)] dark:text-white dark:[text-shadow:0_2px_18px_rgba(0,0,0,0.6),0_1px_2px_rgba(0,0,0,0.45)]";

  const mobileIntroTone = activeTab.mobileTextLight
    ? "text-white/85 [text-shadow:0_1px_12px_rgba(0,0,0,0.7)]"
    : "text-slate-800 [text-shadow:0_1px_10px_rgba(255,255,255,0.85)] dark:text-white/80 dark:[text-shadow:0_1px_10px_rgba(0,0,0,0.6)]";

  const activeFeatures =
    activeTab.features && activeTab.features.length > 0
      ? activeTab.features
      : DEFAULT_SLIDES[0].features!;

  const activeGallery =
    activeTab.gallery && activeTab.gallery.length > 0
      ? activeTab.gallery
      : DEFAULT_SLIDES[0].gallery!;

  return (
    <section
      style={accentStyle}
      className="w-full relative overflow-hidden bg-[#faf9f5] dark:bg-[#0a0d14] py-8 sm:py-12 lg:py-16 border-b border-border-main/40 select-none"
    >
      {/* ── MOBILE BACKGROUND IMAGE LAYER ── */}
      <div className="lg:hidden absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {slides.map((tab, idx) => (
          <img
            key={tab.id}
            src={tab.image}
            alt={tab.imageAlt}
            title={tab.imageTitle || tab.imageAlt}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${
              idx === cachedIndex
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105 pointer-events-none"
            }`}
            style={{ objectPosition: tab.imagePosition }}
          />
        ))}
        <div
          className={`absolute inset-x-0 top-0 h-[80%] bg-gradient-to-b from-black/60 via-black/30 to-transparent pointer-events-none transition-opacity duration-300 ${
            activeTab.mobileTextLight
              ? "opacity-100"
              : "opacity-0 dark:opacity-100 dark:from-black/55 dark:via-black/20"
          }`}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── TOP AREA (DESKTOP SPLIT: LEFT TEXT/TABS + RIGHT CURVED IMAGE) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
          {/* Left Column: Eyebrow, Main Heading, Subtitle, and Category Tabs */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left">
            {/* Eyebrow */}
            <div className="mb-3 sm:mb-4">
              <span className="text-[11px] sm:text-xs font-bold text-[var(--accent-color)] uppercase tracking-[0.25em] block mb-1 [text-shadow:0_1px_10px_rgba(255,255,255,0.7)] dark:[text-shadow:0_1px_10px_rgba(0,0,0,0.65)]">
                {eyebrow}
              </span>
              <div className="w-12 h-[2.5px] bg-[var(--accent-color)] rounded-full" />
            </div>

            {/* Main Heading */}
            <h2 className={`text-3xl sm:text-4xl xl:text-5xl font-bold font-display tracking-[-0.03em] leading-[1.14] mb-3 sm:mb-4 text-balance ${mobileHeadingTone} lg:text-text-main dark:lg:text-white`}>
              {heading}
            </h2>

            {/* Subtitle */}
            <p className={`text-sm sm:text-base max-w-md leading-relaxed mb-6 sm:mb-8 font-normal ${mobileIntroTone} lg:text-text-muted dark:lg:text-white/70`}>
              {introduction}
            </p>

            {/* Category Selector Tabs */}
            <div
              className="flex items-center gap-2 min-[360px]:gap-3.5 sm:gap-3 xl:gap-5 overflow-x-auto flex-nowrap scrollbar-none snap-x snap-mandatory touch-pan-x py-2 -mx-4 px-4 sm:mx-0 sm:px-0"
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
                    className="group flex flex-col items-center gap-2 shrink-0 snap-start cursor-pointer focus:outline-none select-none w-14 min-[360px]:w-16 sm:w-[4.5rem]"
                  >
                    {/* Circle Button */}
                    <div
                      className={`w-12 h-12 min-[360px]:w-14 min-[360px]:h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-all duration-300 relative ${
                        isActive
                          ? "border-2 border-[var(--accent-color)] bg-[var(--accent-color)] text-white ring-4 ring-[var(--accent-color)]/30 shadow-lg scale-105 shadow-[0_0_26px_rgba(var(--accent-color-rgb),0.5)] lg:bg-[var(--accent-color)]/10 lg:text-[var(--accent-color)] lg:shadow-[0_0_20px_rgba(var(--accent-color-rgb),0.3)]"
                          : "border border-white/60 dark:border-white/20 bg-white dark:bg-black/40 text-slate-700 dark:text-white/90 hover:border-white group-hover:scale-105 shadow-[0_4px_14px_rgba(15,23,42,0.18)]"
                      }`}
                    >
                      <Icon className="w-5 h-5 min-[360px]:w-6 min-[360px]:h-6 sm:w-7 sm:h-7 transition-colors" />
                    </div>

                    {/* Label below button */}
                    <div className="flex flex-col items-center">
                      {/* Desktop Label with underline */}
                      <span
                        className={`hidden lg:block text-xs sm:text-sm tracking-wide text-center leading-tight transition-all duration-200 whitespace-nowrap ${
                          isActive
                            ? "text-[var(--accent-color)] font-bold"
                            : "text-slate-600 dark:text-slate-300 font-semibold group-hover:text-text-main"
                        }`}
                      >
                        {tab.shortTitle}
                      </span>
                      {isActive && (
                        <div className="hidden lg:block w-7 h-[2px] bg-[var(--accent-color)] rounded-full mt-1.5" />
                      )}

                      {/* Mobile Label with green pill for active (matching reference image) */}
                      <span
                        className={`lg:hidden text-[10px] min-[360px]:text-xs font-semibold px-2 min-[360px]:px-3 py-1 rounded-full transition-all duration-200 whitespace-nowrap ${
                          isActive
                            ? "bg-[var(--accent-color)] text-white font-bold shadow-md shadow-[var(--accent-color)]/30"
                            : activeTab.mobileTextLight
                              ? "bg-black/35 text-white font-semibold backdrop-blur-[2px] [text-shadow:0_1px_8px_rgba(0,0,0,0.65)]"
                              : "text-slate-800 font-semibold [text-shadow:0_1px_8px_rgba(255,255,255,0.85)] dark:bg-black/35 dark:text-white dark:backdrop-blur-[2px] dark:[text-shadow:0_1px_8px_rgba(0,0,0,0.65)]"
                        }`}
                      >
                        {tab.shortTitle}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column (Desktop Only): Hero Living Room Image with Curved Border */}
          <div className="lg:col-span-7 hidden lg:block">
            <div className="relative w-full h-[470px] xl:h-[510px] rounded-l-[4rem] xl:rounded-l-[5rem] rounded-r-3xl overflow-hidden shadow-2xl bg-black border border-slate-200/50 dark:border-white/10">
              {/* Crossfading Hero Images */}
              {slides.map((tab, idx) => (
                <img
                  key={tab.id}
                  src={tab.image}
                  alt={tab.imageAlt}
                  title={tab.imageTitle || tab.imageAlt}
                  className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-700 ease-in-out ${
                    idx === cachedIndex
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-105 pointer-events-none"
                  }`}
                  style={{ objectPosition: tab.imagePosition }}
                />
              ))}

              {/* Subtle Ambient Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* ── MOBILE DOCKED GLASSMORPHIC CARD (MATCHING MOBILE REFERENCE IMAGE 1) ── */}
        <div
          className="lg:hidden mt-6 relative z-10"
          id="automation-showcase-detail"
          role="tabpanel"
        >
          <div className="w-full bg-[#0e1615]/92 dark:bg-[#0a0f0d]/95 backdrop-blur-xl border border-white/15 rounded-3xl p-5 sm:p-6 shadow-2xl text-left">
            {/* Top Row: 01 ─── and Floating Category Icon Badge */}
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2.5">
                <span className="text-3xl font-extrabold font-mono text-[var(--accent-color)] leading-none">
                  {activeTab.id}
                </span>
                <span className="w-12 h-[2px] bg-[var(--accent-color)]/70 rounded-full" />
              </div>

              {/* Floating circular icon badge */}
              <div className="w-11 h-11 rounded-full border border-[var(--accent-color)]/50 bg-[var(--accent-color)]/15 text-[var(--accent-color)] flex items-center justify-center shadow-sm">
                <ActiveTabIcon className="w-5 h-5" />
              </div>
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold font-display text-white tracking-tight mb-2">
              {activeTab.title}
            </h3>

            {/* Description */}
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-normal mb-5">
              {activeTab.description}
            </p>

            {/* Bottom Row: 3 Feature Pills */}
            <div className="grid grid-cols-3 gap-2">
              {activeFeatures.map((feat, idx) => {
                const FeatIcon = feat.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white/5 border border-white/10 rounded-xl p-2 sm:p-2.5 flex flex-col min-[360px]:flex-row items-center min-[360px]:items-center gap-1 min-[360px]:gap-2 text-center min-[360px]:text-left"
                  >
                    <FeatIcon className="w-4 h-4 text-[var(--accent-color)] shrink-0" />
                    <div className="min-w-0 w-full min-[360px]:w-auto">
                      <div className="text-[10px] sm:text-[11px] font-bold text-white leading-tight break-words">
                        {feat.shortTitle || feat.title}
                      </div>
                      <div className="text-[9px] text-white/60 leading-tight break-words">
                        {feat.shortSubtitle || feat.subtitle}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── DESKTOP BOTTOM DOCK CARD (MATCHING DESKTOP REFERENCE IMAGE 2) ── */}
        <div
          className="hidden lg:grid grid-cols-12 gap-6 xl:gap-8 items-center bg-white dark:bg-[#12161f] rounded-3xl p-6 sm:p-8 mt-6 lg:mt-8"
          role="tabpanel"
          id="automation-showcase-dock"
        >
          {/* Column 1: Number, Title, Description, and Explore Button */}
          <div className="col-span-4 flex flex-col justify-between pr-4 border-r border-slate-100 dark:border-white/10">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl font-extrabold font-mono text-[var(--accent-color)] leading-none">
                  {activeTab.id}
                </span>
                <span className="w-12 h-[2px] bg-[var(--accent-color)]/70 rounded-full" />
              </div>

              <h3 className="text-2xl xl:text-3xl font-bold font-display text-text-main dark:text-white tracking-tight mb-2">
                {activeTab.title}
              </h3>

              <p className="text-xs xl:text-sm text-text-muted dark:text-white/70 leading-relaxed font-normal mb-5">
                {activeTab.description}
              </p>
            </div>

            <a
              href={activeTab.exploreHref || "#"}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--accent-color)] hover:opacity-90 text-white font-semibold text-xs xl:text-sm transition-all duration-200 shadow-md shadow-[var(--accent-color)]/25 hover:shadow-lg hover:shadow-[var(--accent-color)]/35 group w-fit cursor-pointer"
            >
              <span>Explore {activeTab.shortTitle}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Column 2: 3 Feature highlights in a row with mint square icons */}
          <div className="col-span-4 grid grid-cols-3 gap-3 px-2 border-r border-slate-100 dark:border-white/10">
            {activeFeatures.map((feat, idx) => {
              const FeatIcon = feat.icon;
              return (
                <div key={idx} className="flex flex-col items-start text-left">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/20 text-[var(--accent-color)] flex items-center justify-center mb-3">
                    <FeatIcon className="w-5 h-5" />
                  </div>
                  <h4 className="text-xs font-bold text-text-main dark:text-white leading-tight mb-1">
                    {feat.title}
                  </h4>
                  <p className="text-[11px] text-text-muted dark:text-white/60 leading-snug">
                    {feat.subtitle}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Column 3: 3 Gallery Thumbnails in a row */}
          <div className="col-span-4 grid grid-cols-3 gap-2.5 pl-2">
            {activeGallery.map((item, idx) => (
              <div
                key={idx}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200/80 dark:border-white/10 shadow-sm group"
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
