import { useState, useEffect, useRef } from "react";
import { getImageUrl } from "@/utils/image";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

interface StoryScene {
  id: string;
  tag: string;
  category: string;
  title: string;
  storyTitle: string;
  description: string;
  mainPhoto: {
    src: string;
    alt: string;
    caption: string;
    annotation: string;
  };
  leftCard: {
    src: string;
    alt: string;
    annotation: string;
  };
  rightCard: {
    src: string;
    alt: string;
    annotation: string;
  };
}

const STORY_SCENES: StoryScene[] = [
  {
    id: "living-suite",
    tag: "01",
    category: "Living Automation",
    title: "Smart Living Suite",
    storyTitle: "A day in our Smart Villa.",
    description:
      "Where technology quietly anticipates every desire. Morning blinds raise to gentle sunlight, bespoke acoustic scenes accompany your espresso, and custom cove lighting sets the evening mood with a single whisper.",
    mainPhoto: {
      src: getImageUrl("service_automation.webp"),
      alt: "Luxury Smart Living Room",
      caption: "Living room at sunset",
      annotation: "One-touch sunset mood",
    },
    leftCard: {
      src: getImageUrl("Rectangle 54367.webp"),
      alt: "Modern Smart Villa Exterior",
      annotation: "Villa facade at 6:00 PM",
    },
    rightCard: {
      src: getImageUrl("curtain_automation.webp"),
      alt: "Automated Motorized Blinds",
      annotation: "Automated sheer curtains",
    },
  },
  {
    id: "touch-plates",
    tag: "02",
    category: "Control Plates",
    title: "Sculptural Keyplates",
    storyTitle: "Touch, Glass & Precision.",
    description:
      "Ditch visual clutter for sculptural minimalism. Custom CNC-milled aluminum, tempered matte glass, and tactile haptic switches turn everyday wall interactions into tactile art.",
    mainPhoto: {
      src: getImageUrl("Rectangle 54364.webp"),
      alt: "Matte Black Smart Touch Plate",
      caption: "Matte black glass touch surface",
      annotation: "Velvet-matte touch glass",
    },
    leftCard: {
      src: getImageUrl("Rectangle 54360.webp"),
      alt: "Smart Touch Switch Plates",
      annotation: "Backlit laser engravings",
    },
    rightCard: {
      src: getImageUrl("service_lighting.webp"),
      alt: "Mood Lighting Control",
      annotation: "Multi-scene lighting dim",
    },
  },
  {
    id: "master-sanctuary",
    tag: "03",
    category: "Mood & Wellness",
    title: "Master Suite Sanctuary",
    storyTitle: "The Master Sanctuary.",
    description:
      "Engineered for restorative calm. Say 'Goodnight' to extinguish every light in the villa, arm perimeter access points, and let circadian-calibrated indirect lighting ease you into restful slumber.",
    mainPhoto: {
      src: getImageUrl("Rectangle 54368.webp"),
      alt: "Luxury Bedroom Lighting",
      caption: "Indirect cove lighting headboard",
      annotation: "Circadian sleep dimmed to 10%",
    },
    leftCard: {
      src: getImageUrl("smart_dimming_lighting.webp"),
      alt: "Warm Dimming Lighting",
      annotation: "Warm 2400K cove light",
    },
    rightCard: {
      src: getImageUrl("smart_rgb_lighting.webp"),
      alt: "RGB Cove Accent",
      annotation: "Amber evening spectrum",
    },
  },
  {
    id: "digital-security",
    tag: "04",
    category: "Smart Access",
    title: "Fortress-Grade Security",
    storyTitle: "Fortress-Grade Peace.",
    description:
      "Invisible protection designed seamlessly around your family. 0.2s biometric recognition, encrypted remote access, and AI video intercoms ensure your home is always guarded and welcoming.",
    mainPhoto: {
      src: getImageUrl("doorautomation1.webp"),
      alt: "Smart Biometric Door Lock",
      caption: "3D fingerprint & keyless deadbolt",
      annotation: "0.2s 3D biometric thumb scan",
    },
    leftCard: {
      src: getImageUrl("service_security.webp"),
      alt: "AI Surveillance",
      annotation: "Perimeter AI radar sensor",
    },
    rightCard: {
      src: getImageUrl("contact_villa_night.webp"),
      alt: "Villa at Night",
      annotation: "Perimeter intrusion lighting",
    },
  },
  {
    id: "private-theatre",
    tag: "05",
    category: "Audio & Entertainment",
    title: "Private Acoustic Cinema",
    storyTitle: "Acoustic Cinema Magic.",
    description:
      "Hear every pin-drop and rumble exactly as the director intended. Concealed Dolby Atmos reference speakers, acoustic wall absorption, and a motorized 4K laser projector that glides into place on command.",
    mainPhoto: {
      src: getImageUrl("service_theatre.webp"),
      alt: "Acoustic Cinema Experience",
      caption: "Dolby Atmos 9.4.4 calibrated surround",
      annotation: "Dolby Atmos 9.4.4 surround",
    },
    leftCard: {
      src: getImageUrl("project_penthouses.webp"),
      alt: "Penthouse Media Lounge",
      annotation: "Concealed in-wall speakers",
    },
    rightCard: {
      src: getImageUrl("service_networking.webp"),
      alt: "Audiophile Rack",
      annotation: "Lossless digital audio bus",
    },
  },
];

// Hand-drawn Doodle Arrows tailored to point directly at cards
function ArrowDownRight({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <path
        d="M6 10 C 16 6, 28 12, 30 28"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M23 25 L 30 28 L 33 21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowUpRight({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <path
        d="M8 32 C 14 18, 22 12, 34 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M26 6 L 34 8 L 32 16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowDownLeft({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <path
        d="M34 8 C 24 8, 12 16, 8 30"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M15 28 L 8 30 L 7 22"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function SolutionsGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartXRef = useRef<number | null>(null);

  const activeScene = STORY_SCENES[activeIndex];

  // Auto-advance scenes every 6 seconds when not hovered/paused
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev >= STORY_SCENES.length - 1 ? 0 : prev + 1));
    }, 6000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev <= 0 ? STORY_SCENES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev >= STORY_SCENES.length - 1 ? 0 : prev + 1));
  };

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setIsPaused(false);
    if (touchStartXRef.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartXRef.current;
    if (Math.abs(deltaX) > 40) {
      if (deltaX > 0) {
        handlePrev();
      } else {
        handleNext();
      }
    }
    touchStartXRef.current = null;
  };

  return (
    <section
      className="relative w-full py-8 sm:py-12 lg:py-14 bg-[#faf8f5] dark:bg-[#070e18] border-y border-slate-200/80 dark:border-white/10 transition-colors duration-500 overflow-hidden no-reveal select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Subtle organic paper texture & ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(10,132,255,0.04)_0%,transparent_50%),radial-gradient(circle_at_80%_80%,rgba(238,42,123,0.03)_0%,transparent_50%)] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Top Header Tag */}
        <div className="flex flex-col items-center text-center mb-6 sm:mb-8">
        
          <h2 className="text-2xl font-handwriting sm:text-3xl md:text-4xl font-bold text-text-main tracking-tight">
            A Day in a MAKc Home
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-text-muted max-w-lg">
            Scattered glimpses of bespoke architectural spaces, intuitive touch surfaces, and calm automated living.
          </p>
        </div>

        {/* Main Editorial Collage Canvas (Tightened 6+6 Layout, Zero Empty White Space) */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-4 items-center">
          
          {/* Left Collage Section: Left Card + Focal Center Card (Separated with clean spacing, zero overlap) */}
          <div className="lg:col-span-6 flex items-center justify-center lg:justify-start gap-4 sm:gap-6 md:gap-8 relative pt-7 pb-7">
            
            {/* Card 1: Left Card (Tilted -4deg with dynamically anchored annotation, positioned comfortably to the left) */}
            <div className="relative w-38 sm:w-48 md:w-52 shrink-0 -rotate-4 hover:rotate-0 hover:scale-105 transition-all duration-300 z-10 cursor-pointer">
              {/* Annotation anchored directly to top of Left Card */}
              <div className="absolute -top-7 -left-1 sm:-left-3 z-20 flex items-center gap-1 pointer-events-none whitespace-nowrap">
                <span className="font-handwriting text-slate-800 dark:text-slate-200 text-xs sm:text-sm md:text-base font-semibold drop-shadow-sm">
                  {activeScene.leftCard.annotation}
                </span>
                <ArrowDownRight className="w-5 h-5 sm:w-6 sm:h-6 text-slate-600 dark:text-slate-300 shrink-0" />
              </div>

              <div className="p-1 sm:p-1.5 bg-white dark:bg-slate-800 rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.12)] dark:shadow-[0_10px_28px_rgba(0,0,0,0.5)] border border-slate-200/90 dark:border-white/20">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-slate-900">
                  <img
                    key={`left-${activeScene.id}`}
                    src={activeScene.leftCard.src}
                    alt={activeScene.leftCard.alt}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Card 2: Center Hero Card (Tilted +1.5deg with clean positive spacing, no overlap) */}
            <div className="relative w-48 sm:w-58 md:w-64 shrink-0 rotate-1.5 hover:rotate-0 hover:scale-105 transition-all duration-300 z-20 cursor-pointer">
              <div className="p-1 sm:p-1.5 bg-white dark:bg-slate-800 rounded-xl sm:rounded-2xl shadow-[0_14px_36px_rgba(0,0,0,0.2)] dark:shadow-[0_18px_48px_rgba(0,0,0,0.6)] border border-slate-200/90 dark:border-white/25">
                <div className="relative aspect-[3/4] sm:aspect-[4/5] rounded-lg sm:rounded-xl overflow-hidden bg-slate-900">
                  <img
                    key={`main-${activeScene.id}`}
                    src={activeScene.mainPhoto.src}
                    alt={activeScene.mainPhoto.alt}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="eager"
                  />
                  
                  {/* High-Contrast Pure White Frosted Bottom Caption Pill */}
                  <div className="absolute inset-x-0 bottom-0 p-2 sm:p-2.5 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/20 shadow-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] animate-pulse" />
                      <span className="text-white! !text-white text-[10px] sm:text-xs font-sans font-semibold tracking-wide drop-shadow-sm line-clamp-1">
                        {activeScene.mainPhoto.caption}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Annotation anchored directly to bottom-left of Center Card */}
              <div className="absolute -bottom-7 -left-2 sm:-left-5 z-20 flex items-center gap-1 pointer-events-none whitespace-nowrap">
                <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-slate-600 dark:text-slate-300 shrink-0" />
                <span className="font-handwriting text-slate-800 dark:text-slate-200 text-xs sm:text-sm md:text-base font-semibold drop-shadow-sm">
                  {activeScene.mainPhoto.annotation}
                </span>
              </div>
            </div>
          </div>

          {/* Right Narrative Section: Story + Right Card (6 cols on lg, positioned snug against Center Card) */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left lg:pl-4 xl:pl-6 relative z-20 max-w-lg">
            {/* Scene Category Chip */}
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[11px] font-mono font-bold tracking-[0.2em] text-accent-blue uppercase">
                {activeScene.category}
              </span>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <span className="text-[11px] font-mono text-text-muted">
                {activeScene.tag} / 05
              </span>
            </div>

            {/* Editorial Serif Heading */}
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-[38px] font-normal tracking-tight text-text-main leading-[1.18] transition-all duration-300">
              {activeScene.storyTitle}
            </h3>

            {/* Story Description Paragraph */}
            <p className="mt-2 text-xs sm:text-sm lg:text-[15px] text-text-muted leading-relaxed font-sans transition-all duration-300">
              {activeScene.description}
            </p>

            {/* Card 3: Right Accent Card with Annotation directly pointing into it */}
            <div className="relative mt-7 mb-2 w-44 sm:w-54 md:w-58 rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-300 cursor-pointer self-start">
              {/* Annotation directly above Right Card pointing into it */}
              <div className="absolute -top-7 -right-1 sm:-right-3 z-20 flex items-center gap-1 pointer-events-none whitespace-nowrap">
                <span className="font-handwriting text-slate-800 dark:text-slate-200 text-xs sm:text-sm md:text-base font-semibold drop-shadow-sm">
                  {activeScene.rightCard.annotation}
                </span>
                <ArrowDownLeft className="w-5 h-5 sm:w-6 sm:h-6 text-slate-600 dark:text-slate-300 shrink-0" />
              </div>

              <div className="p-1 sm:p-1.5 bg-white dark:bg-slate-800 rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.12)] dark:shadow-[0_10px_28px_rgba(0,0,0,0.5)] border border-slate-200/90 dark:border-white/20">
                <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-slate-900">
                  <img
                    key={`right-${activeScene.id}`}
                    src={activeScene.rightCard.src}
                    alt={activeScene.rightCard.alt}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>

            {/* View More Link CTA - High Contrast Pure White Text */}
            <div className="mt-4 flex items-center gap-3">
              <Link
                to="/experience"
                title="Explore MAKc Smart Living Experience"
                className="group inline-flex items-center gap-2 px-6 py-2.5 sm:py-3 rounded-full bg-accent-blue hover:bg-[#0070e0] text-white! !text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_4px_18px_rgba(10,132,255,0.4)] hover:shadow-[0_6px_24px_rgba(10,132,255,0.55)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span className="text-white! !text-white font-bold">Experience Living</span>
                <ArrowRight className="w-3.5 h-3.5 text-white! !text-white transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                to="/automation"
                title="Explore Automation Services"
                className="inline-flex items-center px-4 py-2.5 rounded-full border border-border-main bg-bg-surface/50 hover:bg-bg-surface text-text-main hover:text-accent-blue hover:border-accent-blue/40 text-xs font-bold uppercase tracking-wider transition-all duration-300"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>

        {/* Interactive Bottom Filmstrip Dock (Tightened Spacing & Crisp Typography) */}
        <div className="mt-6 sm:mt-7 pt-4 border-t border-slate-200/60 dark:border-white/10 flex flex-col items-center">
          
          {/* Active Thumbnail Title Tag */}
          <div className="flex flex-col items-center text-center mb-2 transition-all duration-300">
            <span className="font-handwriting text-slate-800 dark:text-slate-100 text-base sm:text-lg font-bold tracking-wide">
              {activeScene.title}
            </span>
            <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-accent-blue">
              {activeScene.category}
            </span>
          </div>

          {/* Miniature Thumbnail Dock */}
          <div className="flex items-center justify-center max-w-full overflow-x-auto px-3 py-2.5 scrollbar-none">
            <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
              {STORY_SCENES.map((scene, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={scene.id}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    aria-label={`Select ${scene.title}`}
                    className={`group relative rounded-xl overflow-hidden transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "w-11 h-11 sm:w-13 sm:h-13 ring-2 ring-accent-blue ring-offset-2 ring-offset-[#faf8f5] dark:ring-offset-[#070e18] scale-105 shadow-md z-10"
                        : "w-8 h-8 sm:w-10 sm:h-10 opacity-55 hover:opacity-100 hover:scale-105 border border-slate-200/80 dark:border-white/10"
                    }`}
                  >
                    <img
                      src={scene.mainPhoto.src}
                      alt={scene.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    {/* Dark overlay for contrast on unselected */}
                    {!isActive && (
                      <div className="absolute inset-0 bg-black/25 group-hover:bg-transparent transition-colors" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Dot progress indicator */}
          <div className="flex items-center gap-1.5 mt-2.5">
            {STORY_SCENES.map((_, idx) => (
              <span
                key={idx}
                className={`h-1 rounded-full transition-all duration-300 ${
                  idx === activeIndex
                    ? "w-5 bg-accent-blue"
                    : "w-1.5 bg-border-main"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
