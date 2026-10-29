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

  const activeFeatures =
    activeTab.features && activeTab.features.length > 0
      ? activeTab.features
      : DEFAULT_SLIDES[0].features!;

  return (
    <section
      style={accentStyle}
      className="w-full relative overflow-hidden bg-bg-main dark:bg-[#070a12] text-text-main py-12 sm:py-16 lg:py-20 border-b border-border-main dark:border-white/10 select-none transition-colors duration-300"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/4 w-[480px] h-[480px] bg-[var(--accent-color)]/5 dark:bg-[var(--accent-color)]/8 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[480px] h-[480px] bg-[var(--accent-color)]/5 dark:bg-[var(--accent-color)]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
          {/* ── LEFT COLUMN: 1. Eyebrow, 2. Heading & Subtitle, 3. Category Icons ── */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left">
            {/* 1. Smart Automation (Eyebrow) */}
            <div className="mb-3 sm:mb-4">
              <span className="text-[11px] sm:text-xs font-bold text-[var(--accent-color)] uppercase tracking-[0.25em] block mb-1">
                {eyebrow}
              </span>
              <div className="w-12 h-[2.5px] bg-[var(--accent-color)] rounded-full" />
            </div>

            {/* 2. Intelligent automation (Heading & Subtitle) */}
            <h2 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold font-display tracking-tight leading-[1.14] mb-3 sm:mb-4 text-slate-900 dark:text-white text-balance">
              {heading}
            </h2>

            <p className="text-sm sm:text-base max-w-md leading-relaxed mb-6 sm:mb-8 font-normal text-slate-600 dark:text-slate-300">
              {introduction}
            </p>

            {/* 3. Comes Icons (Category Selector Buttons) */}
            <div
              className="flex items-center gap-2.5 min-[360px]:gap-3.5 sm:gap-4 overflow-x-auto flex-nowrap scrollbar-none snap-x snap-mandatory py-2 -mx-4 px-4 sm:mx-0 sm:px-0"
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
                    onClick={() => setActiveIndex(idx)}
                    role="tab"
                    aria-selected={isActive}
                    aria-label={tab.title}
                    className="group flex flex-col items-center gap-2 shrink-0 snap-start cursor-pointer focus:outline-none select-none w-14 min-[360px]:w-16 sm:w-[4.5rem] transition-all duration-300"
                  >
                    {/* Circle Button */}
                    <div
                      className={`w-12 h-12 min-[360px]:w-14 min-[360px]:h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-all duration-300 relative ${
                        isActive
                          ? "border-2 border-[var(--accent-color)] bg-[var(--accent-color)]/15 dark:bg-[var(--accent-color)]/20 text-[var(--accent-color)] ring-4 ring-[var(--accent-color)]/20 shadow-[0_0_24px_rgba(var(--accent-color-rgb),0.3)] scale-105"
                          : "border border-slate-200/90 dark:border-white/15 bg-white/80 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 text-slate-600 dark:text-white/70 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-white/30 group-hover:scale-105 shadow-xs"
                      }`}
                    >
                      <Icon className="w-5 h-5 min-[360px]:w-6 min-[360px]:h-6 sm:w-7 sm:h-7 transition-colors" />
                    </div>

                    {/* Label below button */}
                    <span
                      className={`text-[11px] sm:text-xs font-semibold tracking-wide text-center leading-tight transition-colors whitespace-nowrap ${
                        isActive
                          ? "text-[var(--accent-color)] font-bold"
                          : "text-slate-600 dark:text-white/70 group-hover:text-slate-900 dark:group-hover:text-white"
                      }`}
                    >
                      {tab.shortTitle}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ── RIGHT COLUMN: 4. A Card with Item Image and Blurred Bottom Overlay ── */}
          <div className="lg:col-span-7 w-full">
            <div className="relative w-full h-[460px] sm:h-[500px] lg:h-[520px] xl:h-[560px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-slate-900 dark:bg-black border border-slate-200/80 dark:border-white/10 group">
              {/* Blurred backdrop fills the letterbox around the contained full image */}
              {slides.map((tab, idx) => (
                <img
                  key={`bg-${tab.id}`}
                  src={tab.image}
                  alt=""
                  aria-hidden="true"
                  className={`absolute inset-0 w-full h-full object-cover scale-110 blur-2xl transition-opacity duration-700 ease-in-out ${
                    idx === cachedIndex ? "opacity-60" : "opacity-0"
                  }`}
                />
              ))}

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

              {/* Top ambient vignette */}
              <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-black/50 via-black/20 to-transparent pointer-events-none z-10" />

              {/* ── BOTTOM OVERLAY WITH BLUR BACKGROUND ── */}
              {/* ("add bg with blur background to avoid text blend in imnage and texts") */}
              <div className="absolute inset-x-3 bottom-3 sm:inset-x-5 sm:bottom-5 p-4 sm:p-5 lg:p-6 rounded-2xl sm:rounded-3xl bg-white/85 dark:bg-[#080d1a]/85 backdrop-blur-xl border border-white/60 dark:border-white/15 shadow-2xl text-left z-20 transition-all duration-500">
                {/* Top Row: 02 ─── Title and Explore CTA + Category Icon */}
                <div className="flex items-center justify-between gap-2 mb-2 sm:mb-2.5">
                  <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
                    <span className="text-2xl sm:text-3xl font-extrabold font-mono text-[var(--accent-color)] leading-none drop-shadow-sm shrink-0">
                      {activeTab.id}
                    </span>
                    <span className="w-5 sm:w-8 h-[2px] bg-[var(--accent-color)]/70 rounded-full shrink-0" />
                    <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-white/85 truncate">
                      {activeTab.shortTitle}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {activeTab.exploreHref && (
                      <a
                        href={activeTab.exploreHref}
                        className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[var(--accent-color)] hover:opacity-95 text-white font-semibold text-[11px] sm:text-xs transition-all shadow-md shadow-[var(--accent-color)]/30 hover:scale-105 active:scale-95"
                      >
                        <span>Explore</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-slate-200/80 dark:border-white/20 bg-slate-100/90 dark:bg-white/10 backdrop-blur-md flex items-center justify-center text-slate-800 dark:text-white shrink-0 shadow-xs">
                      <ActiveTabIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[var(--accent-color)]" />
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl xl:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight leading-tight mb-1.5 sm:mb-2 drop-shadow-sm">
                  {activeTab.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-white/90 leading-relaxed font-normal mb-3 sm:mb-4 max-w-xl drop-shadow-xs line-clamp-2 sm:line-clamp-none">
                  {activeTab.description}
                </p>

                {/* 3 in 1 Row: Feature Pills */}
                <div className="grid grid-cols-3 gap-1.5 sm:gap-2 pt-2.5 sm:pt-3 border-t border-slate-200/80 dark:border-white/10 w-full">
                  {activeFeatures.slice(0, 3).map((feat, idx) => {
                    const FeatIcon = feat.icon;
                    return (
                      <div
                        key={idx}
                        className="flex items-center justify-center gap-1 sm:gap-1.5 px-1.5 sm:px-2.5 py-1.5 sm:py-2 rounded-xl bg-slate-100/90 hover:bg-slate-200/90 dark:bg-white/10 dark:hover:bg-white/15 backdrop-blur-md border border-slate-200/80 dark:border-white/15 text-slate-800 dark:text-white text-[10px] min-[380px]:text-[11px] sm:text-xs font-medium transition-colors shadow-xs min-w-0"
                      >
                        <FeatIcon className="w-3.5 h-3.5 text-[var(--accent-color)] shrink-0" />
                        <span className="truncate">
                          {feat.shortTitle || feat.title}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
