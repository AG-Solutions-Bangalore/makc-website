import { useEffect, useState, useRef } from "react";
import { useTheme } from "next-themes";
import WaveButton from "@/components/common/WaveButton";
import { getImageUrl } from "@/utils/image";
import { IMAGE_BASE_URL } from "@/config/constants";
import type { HotspotType } from "@/components/smarthome/types";
import Hotspot from "@/components/smarthome/Hotspot";
import Label from "@/components/smarthome/Label";
import Connector from "@/components/smarthome/Connector";
import { useResponsive } from "@/components/smarthome/hooks";
import {
  Lightbulb,
  ShieldCheck,
  ToggleLeft,
  Sliders,
  ShieldAlert,
  Blinds,
  Wifi,
  X,
  Play,
} from "lucide-react";
import InstagramEmbed from "@/components/common/InstagramEmbed";

const heroBgDark = getImageUrl("hero_bg.webp");
const heroBgLight = getImageUrl("hero_bg-light.webp");

// Responsive candidates (public/images, q72 webp). sizes="100vw": full-bleed hero.
const heroBgDarkSrcSet = [
  `${getImageUrl("hero_bg-768.webp")} 768w`,
  `${getImageUrl("hero_bg-1280.webp")} 1280w`,
  `${getImageUrl("hero_bg-1440.webp")} 1440w`,
  `${heroBgDark} 1920w`,
].join(", ");
const heroBgLightSrcSet = [
  `${getImageUrl("hero_bg-light-768.webp")} 768w`,
  `${getImageUrl("hero_bg-light-1280.webp")} 1280w`,
  `${heroBgLight} 1392w`,
].join(", ");

const VIDEO_BASE_URL = `${IMAGE_BASE_URL}/reels/`;

const hotspotsList: HotspotType[] = [
  {
    id: "curtains",
    label: "Curtains Automation",
    anchor: { x: 60.5, y: 26 },
    labelPos: { x: 75.2, y: 24 },
    icon: Blinds,
    videoFile: "https://www.instagram.com/reel/DZpb-JNSo5Y/",
  },
  {
    id: "lighting",
    label: "Lighting Automation",
    anchor: { x: 58.5, y: 36 },
    labelPos: { x: 72.6, y: 32.4 },
    icon: Lightbulb,
    // videoFile: "https://www.instagram.com/reel/DZICTsA9KjuW/",
    videoFile: "https://www.instagram.com/reel/Dc_AnDQNJEM/",
  },
  {
    id: "switches",
    label: "Smart Switches",
    anchor: { x: 77.2, y: 53 },
    labelPos: { x: 86.2, y: 43.5 },
    icon: ToggleLeft,
    videoFile: "https://www.instagram.com/reel/Dc_K30LN-ji/",
  },
  {
    id: "door",
    label: "Door Automation",
    anchor: { x: 61.3, y: 65 },
    labelPos: { x: 68.2, y: 57.5 },
    icon: Sliders,
    videoFile: "https://www.instagram.com/reel/DDE2L2ByII8/",
  },
  {
    id: "networking",
    label: "Networking",
    anchor: { x: 83, y: 69.5 },
    labelPos: { x: 89, y: 62 },
    icon: Wifi,
    videoFile: "https://www.instagram.com/reel/Dc_LDuENigi/",
  },
  {
    id: "security",
    label: "Security",
    anchor: { x: 78.3, y: 69 },
    labelPos: { x: 60.8, y: 74.5 },
    icon: ShieldCheck,
    videoFile: "https://www.instagram.com/reel/DSC30D1jZ1h/",
  },
  {
    id: "gate",
    label: "Gate Automation",
    anchor: { x: 73.2, y: 78 },
    labelPos: { x: 83, y: 75 },
    icon: ShieldAlert,
    videoFile: "https://www.instagram.com/reel/DTp5xiDj82a/",
  },
];

const reelTabsList = hotspotsList.filter((h) => h.id !== "networking");

export default function HeroSectionV2() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { isMobile, isTablet, isDesktop } = useResponsive();
  // First paint is always dark (html class + defaultTheme). The day image
  // (~80-200KB) only downloads when light mode is actually active.
  const { resolvedTheme } = useTheme();
  const isLight = resolvedTheme === "light";

  // Interaction states
  const [activeId, setActiveId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [isInView, setIsInView] = useState<boolean>(
    () =>
      typeof window === "undefined" ||
      typeof IntersectionObserver === "undefined",
  );

  // Zero-JS replacement for motion's onViewportEnter (fires once)
  useEffect(() => {
    const element = sectionRef.current;
    if (!element || isInView) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [isInView]);

  const handleHotspotClick = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };

  // Close popup with Escape key
  useEffect(() => {
    if (!activeId) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveId(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeId]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="group relative w-full min-h-screen bg-bg-main flex items-center justify-between overflow-hidden py-20 sm:py-28 transition-colors duration-300 no-reveal"
    >
      {/* Background Image Container with Smooth Crossfade between Dark (Night) and Light (Day) Themes */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        {/* Dark Theme Hero Background (Night Villa) */}
        <img
          src={heroBgDark}
          srcSet={heroBgDarkSrcSet}
          sizes="100vw"
          width={1920}
          height={1080}
          alt="Smart Home Automation Installation in Bangalore - Night View"
          title="Smart Home Automation Installation in Bangalore"
          className="absolute inset-0 w-full h-full object-cover object-[72%_center] lg:object-center transition-opacity duration-700 ease-in-out dark:opacity-100 opacity-0"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
        {/* Light Theme Hero Background (Day Villa) — on demand only */}
        {isLight && (
          <img
            src={heroBgLight}
            srcSet={heroBgLightSrcSet}
            sizes="100vw"
            width={1392}
            height={768}
            alt="Smart Home Automation Installation in Bangalore - Day View"
            title="Smart Home Automation Installation in Bangalore"
            className="absolute inset-0 w-full h-full object-cover object-[72%_center] lg:object-center transition-opacity duration-700 ease-in-out dark:opacity-0 opacity-100"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        )}

        {/* Clean directional contrast so villa image is 100% visible and unblocked in both modes */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-transparent pointer-events-none z-[2] transition-colors duration-300" />

        {/* Right side ambient smart home glow behind hotspots (Dark mode only) */}
        <div className="absolute -right-20 top-1/4 w-[520px] h-[520px] bg-gradient-to-br from-amber-400/15 via-blue-500/8 to-transparent blur-[120px] rounded-full pointer-events-none z-[4] dark:opacity-100 opacity-0 transition-opacity duration-300" />

        {/* Bottom gradient blend into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 bg-gradient-to-t from-bg-main via-bg-main/40 to-transparent pointer-events-none z-[5]" />
      </div>

      {/* Shared SVG Connector Layer (Desktop only to prevent colliding with text on mobile/tablet) */}
      {isInView && isDesktop && (
        <svg
          className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-20"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {hotspotsList.map((hotspot, idx) => (
            <Connector
              key={`line-${hotspot.id}`}
              anchor={hotspot.anchor}
              labelPos={hotspot.labelPos}
              isHovered={hoveredId === hotspot.id}
              isActive={activeId === hotspot.id}
              color={hotspot.connectorColor}
              delay={idx * 0.18}
              isMobile={isMobile}
            />
          ))}
        </svg>
      )}

      {/* Interactive Hotspots and Labels Layer (Desktop only to keep mobile/tablet hero pristine and collision-free) */}
      {isInView && isDesktop && (
        <div className="hidden lg:block absolute inset-0 w-full h-full z-30 pointer-events-none">
          <div className="relative w-full h-full pointer-events-none">
            {hotspotsList.map((hotspot, idx) => {
              const isActive = activeId === hotspot.id;
              const isHovered = hoveredId === hotspot.id;
              const delay = idx * 0.24;

              return (
                <div key={hotspot.id}>
                  {/* Anchor Dot */}
                  <div className="pointer-events-auto">
                    <Hotspot
                      id={hotspot.id}
                      anchor={hotspot.anchor}
                      isHovered={isHovered}
                      isActive={isActive}
                      onHoverStart={() => setHoveredId(hotspot.id)}
                      onHoverEnd={() => setHoveredId(null)}
                      onClick={() => handleHotspotClick(hotspot.id)}
                      index={idx}
                      delay={delay}
                      isMobile={isMobile}
                    />
                  </div>

                  {/* Floating Labels */}
                  <div className="pointer-events-auto">
                    <Label
                      label={hotspot.label}
                      labelPos={hotspot.labelPos}
                      icon={hotspot.icon}
                      isHovered={isHovered}
                      isActive={isActive}
                      onHoverStart={() => setHoveredId(hotspot.id)}
                      onHoverEnd={() => setHoveredId(null)}
                      onClick={() => handleHotspotClick(hotspot.id)}
                      delay={delay}
                      isTablet={isTablet}
                      isMobile={isMobile}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Left-Side Content overlays above background and hotspots */}
      <div className="relative z-40 mx-auto max-w-8xl w-full px-4 sm:px-14 flex flex-col lg:flex-row lg:items-stretch justify-between gap-12 sm:gap-16 pointer-events-none">
        {/* Hero Left Content — 100% transparent, no white card, background image completely visible */}
        <div
          className="flex-1 flex flex-col justify-center text-left max-w-lg lg:max-w-[48%] xl:max-w-[46%] 2xl:max-w-2xl reveal-on-scroll reveal-left pointer-events-auto p-0 bg-transparent border-0 shadow-none"
          data-reveal-duration="0.9s"
        >
          <div className="mb-3">
            <div className="inline-flex items-center gap-2.5 border border-white/25 bg-black/40 backdrop-blur-md rounded-full px-3.5 py-1.5 select-none pointer-events-none shadow-xs">
              <img
                src="/images/iso-image.svg"
                alt="ISO Certified Logo"
                title="ISO Certified Home Automation Company"
                className="h-5.5 w-5.5 object-contain"
              />
              <span
                className="text-[11px] sm:text-xs font-sans font-bold tracking-wide leading-none"
                style={{
                  color: "#ffffff",
                  textShadow: "0 1px 3px rgba(0,0,0,0.9)",
                }}
              >
                ISO{" "}
                <span className="font-extrabold" style={{ color: "#00e676" }}>
                  9001:2015
                </span>{" "}
                Certified Company
              </span>
            </div>
          </div>

          <h1 className="mt-3 sm:mt-4 text-2xl sm:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-extrabold tracking-tight leading-[1.15]">
            <span
              className="block xl:text-nowrap font-extrabold"
              style={{
                color: "#ffffff",
                textShadow:
                  "0 2px 4px rgba(0,0,0,0.95), 0 0 12px rgba(0,0,0,0.9), 0 0 24px rgba(0,0,0,0.85)",
                filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.9))",
              }}
            >
              Smart Home Automation
            </span>
            <span
              className="block italic font-bold sm:font-semibold"
              style={{
                color: "#38bdf8",
                textShadow:
                  "0 2px 4px rgba(0,0,0,0.95), 0 0 12px rgba(0,0,0,0.9), 0 0 24px rgba(0,0,0,0.85)",
                filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.9))",
              }}
            >
              Company in Bangalore
            </span>
          </h1>

          <p
            className="mt-4 text-sm sm:text-base font-semibold leading-relaxed max-w-lg"
            style={{
              color: "#ffffff",
              textShadow:
                "0 1px 4px rgba(0,0,0,0.95), 0 2px 8px rgba(0,0,0,0.9), 0 0 16px rgba(0,0,0,0.85)",
              filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.9))",
            }}
          >
            Smart homes are not about gadgets — they are about how you live.
            With almost a decade of experience and 800+ projects delivered
            across homes and select commercial spaces, here's what you can
            expect from us.
          </p>

          <div className="mt-8 sm:mt-10">
            <WaveButton
              href="#contact-enquiry"
              title="Book a Free Smart Home Consultation"
              accentColor="#006ed6"
              foregroundColor="#fff"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("contact-enquiry");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                } else {
                  window.location.href = "/contact";
                }
              }}
              className="home-wave-cta--drain rounded-none px-8 py-3 w-fit md:text-nowrap hover:text-white! border font-bold text-[0.65rem] tracking-wide sm:tracking-[0.15em] uppercase shadow-[0_4px_20px_rgba(10,132,255,0.35)] flex items-center justify-center gap-2 text-center cursor-pointer"
            >
              <span className="leading-snug">
                Book a Free Smart Home Consultation
              </span>
            </WaveButton>
          </div>

          {/* Solution Reel Tabs (Mobile & Tablet only — Desktop uses interactive pointers on the villa with play icon) */}
          <div className="lg:hidden mt-7 sm:mt-9 pt-5 border-t border-white/20 max-w-xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#006ed6] text-white shadow-xs">
                <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
              </span>
              <span
                className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider"
                style={{
                  color: "#ffffff",
                  textShadow:
                    "0 1px 4px rgba(0,0,0,0.95), 0 0 8px rgba(0,0,0,0.85)",
                }}
              >
                Explore Solutions in Action
              </span>
              <span
                className="text-[10px] font-bold"
                style={{
                  color: "rgba(255, 255, 255, 0.9)",
                  textShadow: "0 1px 3px rgba(0,0,0,0.9)",
                }}
              >
                (Tap to watch Reel)
              </span>
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-2.5">
              {reelTabsList.map((pointer) => {
                const isActive = activeId === pointer.id;
                const Icon = pointer.icon;

                return (
                  <button
                    key={pointer.id}
                    type="button"
                    onClick={() => handleHotspotClick(pointer.id)}
                    className={`group inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full text-xs font-bold tracking-wide transition-all duration-200 cursor-pointer ${isActive
                        ? "bg-[#006ed6] text-white shadow-md shadow-[#006ed6]/40 border border-[#006ed6]"
                        : "bg-black/40 hover:bg-black/60 text-white border border-white/25 hover:border-[#38bdf8]/60 shadow-xs backdrop-blur-md"
                      }`}
                    aria-label={`Watch ${pointer.label} Showcase Reel`}
                  >
                    <Icon
                      className={`w-3.5 h-3.5 shrink-0 transition-colors ${isActive ? "text-white" : "text-[#38bdf8]"
                        }`}
                    />
                    <span
                      className="transition-colors font-bold"
                      style={{
                        color: "#ffffff",
                        textShadow: "0 1px 3px rgba(0,0,0,0.9)",
                      }}
                    >
                      {pointer.label}
                    </span>
                    {isActive ? (
                      <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-white/25 ml-1 shrink-0">
                        <X className="w-2.5 h-2.5 text-white" />
                      </span>
                    ) : (
                      <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-[#006ed6]/30 border border-[#38bdf8]/60 ml-1 shrink-0 group-hover:bg-[#006ed6]/50 transition-colors">
                        <Play className="w-2 h-2 fill-[#38bdf8] text-[#38bdf8] ml-0.5 drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]" />
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Empty Right Column on Desktop to preserve split visual layout */}
        <div className="w-full lg:max-w-[48%] xl:max-w-[50%] shrink-0 pointer-events-none hidden lg:block" />
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-2.5 pointer-events-none">
        <span
          className="text-[8px] font-bold tracking-[0.3em] uppercase"
          style={{
            color: "#ffffff",
            textShadow: "0 1px 3px rgba(0,0,0,0.9)",
          }}
        >
          SCROLL TO DISCOVER
        </span>
        <div className="w-[18px] h-[30px] border border-white/50 rounded-full flex justify-center p-1.5 opacity-100 bg-black/20 backdrop-blur-xs">
          <div className="w-[4px] h-[6px] bg-gold-primary rounded-full animate-bounce" />
        </div>
      </div>

      {/* Floating MP4 / Instagram Video Preview Popup with Backdrop & Prominent Close Cross Mark */}
      {activeId && (
        <>
          {/* Modal Backdrop on mobile & desktop so clicking outside closes it */}
          <div
            className="fixed inset-0 bg-black/65 backdrop-blur-xs z-[75] transition-opacity duration-200"
            onClick={() => setActiveId(null)}
            aria-hidden="true"
          />

          <div className="hero-popup fixed sm:absolute inset-x-3 sm:inset-x-auto top-20 sm:top-28 sm:right-6 lg:right-12 z-[80] w-auto max-w-[360px] sm:w-[350px] md:w-[370px] mx-auto sm:mx-0 bg-[#0c1017]/95 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.85)] overflow-hidden flex flex-col pointer-events-auto">
            {/* Card Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/5">
              <div className="flex flex-col text-left">
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#0A84FF]">
                  MAKc Smart Living Showcase
                </span>
                <h3 className="text-sm font-semibold text-white font-sans truncate max-w-[220px]">
                  {hotspotsList.find((h) => h.id === activeId)?.label}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveId(null)}
                className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 active:bg-white/35 text-white flex items-center justify-center border border-white/25 transition-all cursor-pointer shadow-sm"
                aria-label="Close Showcase Reel"
                title="Close"
              >
                <X className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>

            {/* Video Player Container */}
            {(() => {
              const activeHotspot = hotspotsList.find((h) => h.id === activeId);
              const isInstagram =
                activeHotspot?.videoFile?.includes("instagram.com");

              return (
                <div
                  className={`relative w-full ${
                    isInstagram
                      ? "min-h-[500px] sm:min-h-[540px]"
                      : "aspect-[4/5] max-h-[460px]"
                  } bg-black flex items-center justify-center overflow-hidden rounded-b-2xl`}
                >
                  {activeHotspot?.videoFile ? (
                    isInstagram ? (
                      <div className="relative w-full h-full min-h-[500px] sm:min-h-[540px] bg-black flex flex-col items-center justify-center">
                        <InstagramEmbed reelUrl={activeHotspot.videoFile} />
                      </div>
                    ) : (
                      <video
                        key={activeHotspot.id}
                        src={
                          activeHotspot.videoFile.startsWith("http")
                            ? activeHotspot.videoFile
                            : `${VIDEO_BASE_URL}${activeHotspot.videoFile}`
                        }
                        title={`MAKc ${activeHotspot.label} Video Showcase`}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover rounded-b-2xl pointer-events-auto"
                      />
                    )
                  ) : (
                    <div className="p-8 text-center flex flex-col items-center justify-center min-h-[300px]">
                      {(() => {
                        const ActiveIcon = activeHotspot?.icon || Sliders;
                        return (
                          <>
                            <div className="w-16 h-16 rounded-full bg-[#0A84FF]/10 border border-[#0A84FF]/30 text-[#0A84FF] flex items-center justify-center mb-4">
                              <ActiveIcon className="w-8 h-8" />
                            </div>
                            <h4 className="text-base font-bold text-white mb-2">
                              {activeHotspot?.label}
                            </h4>
                            <p className="text-xs text-white/70 max-w-xs leading-relaxed">
                              Video showcase for this category is coming soon.
                            </p>
                          </>
                        );
                      })()}
                    </div>
                  )}
                </div>
              );
            })()}
          </div>
        </>
      )}
    </section>
  );
}
