import { useState, useRef, useEffect } from "react";
import { getImageUrl } from "@/utils/image";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

interface GalleryItem {
  src: string;
  alt: string;
  title: string;
  category: string;
}

const galleryItems: GalleryItem[] = [
  {
    src: getImageUrl("Rectangle 54361.webp"),
    alt: "Cozy interior living room swing and sofa layout",
    title: "Luxury Smart Living Room",
    category: "Living Automation",
  },
  {
    src: getImageUrl("Rectangle 54366.webp"),
    alt: "Smart touch panel control plate on grooved wall panels",
    title: "Smart Touch Panel System",
    category: "Control Plates",
  },
  {
    src: getImageUrl("Rectangle 54367.webp"),
    alt: "Modern double story villa facade view at sunset",
    title: "Modern Smart Villa Design",
    category: "Exterior Design",
  },
  {
    src: getImageUrl("Rectangle 54360.webp"),
    alt: "Close up of touch pad switch mounted on wood panels",
    title: "Smart Touch Switch Plates",
    category: "Switch Panels",
  },
  {
    src: getImageUrl("Rectangle 54368.webp"),
    alt: "Luxury bedroom design with warm cove lights and watermark",
    title: "Luxury Bedroom Lighting",
    category: "Mood Lighting",
  },
  {
    src: getImageUrl("Rectangle 54364.webp"),
    alt: "Matte black socket outlets on wood boards with leaves decoration",
    title: "Modern Sockets & Switches",
    category: "Power Sockets",
  },
  {
    src: getImageUrl("Rectangle 54362.webp"),
    alt: "Sleek biometric finger print door lock panel",
    title: "Biometric Fingerprint Lock",
    category: "Smart Access",
  },
  {
    src: getImageUrl("Rectangle 54363.webp"),
    alt: "Temple room background with backlit wall decoration",
    title: "Smart Temple Room Lights",
    category: "Custom Ambience",
  },
  {
    src: getImageUrl("Group 212355.webp"),
    alt: "Luxury entrance door lock handle mechanism close up",
    title: "Luxury Door Lock System",
    category: "Digital Security",
  },
];

// Desktop masonry split (3 columns)
const desktopColumns = [
  galleryItems.slice(0, 3),
  galleryItems.slice(3, 6),
  galleryItems.slice(6, 9),
];

export default function SolutionsGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Update active slide on scroll
  const handleScroll = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const cardWidth = el.offsetWidth * 0.82;
    const scrollPosition = el.scrollLeft;
    const index = Math.round(scrollPosition / cardWidth);
    if (index >= 0 && index < galleryItems.length && index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  const scrollToIndex = (index: number) => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const card = el.children[index] as HTMLElement;
    if (card) {
      const left = card.offsetLeft - (el.offsetWidth - card.offsetWidth) / 2;
      el.scrollTo({ left, behavior: "smooth" });
      setActiveIndex(index);
    }
  };

  const handlePrev = () => {
    const nextIdx = Math.max(0, activeIndex - 1);
    scrollToIndex(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = Math.min(galleryItems.length - 1, activeIndex + 1);
    scrollToIndex(nextIdx);
  };

  return (
    <section className="py-6 sm:py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto no-reveal">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-6 sm:mb-10 lg:mb-14">
        <span className="text-[10px] font-bold text-accent-blue uppercase tracking-[0.25em] mb-2">
          Curated Portfolio
        </span>
        <h2 className="gallery-title text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-main font-sans">
          MAKc Gallery
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-text-muted max-w-md">
          A glimpse into handcrafted smart spaces and automated living environments.
        </p>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          1. UNIQUE MOBILE-ONLY INTERACTIVE GALLERY (compact snap slider)
          ───────────────────────────────────────────────────────────── */}
      <div className="block md:hidden">
        {/* Top Info Bar with category and counter */}
        <div className="flex items-center justify-between px-2 mb-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-[11px] font-bold tracking-wide">
            <Sparkles className="w-3 h-3" />
            <span>{galleryItems[activeIndex]?.category}</span>
          </div>
          <span className="text-xs font-mono font-bold tracking-wider text-text-muted">
            <span className="text-text-main font-bold">
              {String(activeIndex + 1).padStart(2, "0")}
            </span>{" "}
            / {String(galleryItems.length).padStart(2, "0")}
          </span>
        </div>

        {/* Horizontal Snap Viewport */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex gap-3.5 overflow-x-auto pb-4 pt-1 px-[8vw] snap-x snap-mandatory scrollbar-none scroll-smooth -mx-4"
        >
          {galleryItems.map((item, idx) => {
            const isActive = idx === activeIndex;
            return (
              <div
                key={idx}
                onClick={() => scrollToIndex(idx)}
                className={`shrink-0 w-[82vw] max-w-[320px] snap-center transition-all duration-300 cursor-pointer ${
                  isActive ? "scale-100 opacity-100" : "scale-[0.96] opacity-70"
                }`}
              >
                <div className="relative aspect-[4/3] rounded-[1.75rem] overflow-hidden border border-border-main/50 shadow-xl bg-neutral-900 group">
                  <img
                    src={item.src}
                    alt={item.alt}
                    title={item.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  {/* Subtle dark gradient for text legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                  {/* Caption overlay */}
                  <div className="absolute bottom-4 left-4 right-4 pointer-events-none">
                    <p className="text-white text-base font-bold tracking-tight drop-shadow-md">
                      {item.title}
                    </p>
                    <p className="text-white/70 text-[11px] font-medium mt-0.5">
                      {item.category}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Micro Navigation Controls */}
        <div className="flex items-center justify-between px-2 mt-2">
          {/* Progress Indicator Dots */}
          <div className="flex items-center gap-1.5">
            {galleryItems.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToIndex(idx)}
                aria-label={`Jump to slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === activeIndex
                    ? "w-6 bg-accent-blue"
                    : "w-1.5 bg-border-main hover:bg-text-muted"
                }`}
              />
            ))}
          </div>

          {/* Prev/Next arrows for effortless one-tap browsing */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              disabled={activeIndex === 0}
              aria-label="Previous gallery image"
              className="w-9 h-9 rounded-full border border-border-main bg-bg-surface text-text-main flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed hover:border-accent-blue active:scale-95 transition-all shadow-sm"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              disabled={activeIndex === galleryItems.length - 1}
              aria-label="Next gallery image"
              className="w-9 h-9 rounded-full border border-border-main bg-bg-surface text-text-main flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed hover:border-accent-blue active:scale-95 transition-all shadow-sm"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. DESKTOP/TABLET MASONRY LAYOUT (preserved 3 columns)
          ───────────────────────────────────────────────────────────── */}
      <div className="hidden md:flex flex-row gap-6 md:gap-8 justify-center">
        {desktopColumns.map((col, colIdx) => (
          <div
            key={colIdx}
            className="gallery-col w-1/3 flex flex-col gap-6 md:gap-8"
          >
            {col.map((item, itemIdx) => (
              <div
                key={itemIdx}
                className="relative overflow-hidden rounded-[2rem] border border-border-main/30 shadow-md group bg-neutral-900 aspect-auto"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  title={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  loading="lazy"
                  decoding="async"
                />
                {/* Subtle dark ambient overlay on hover */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <span className="text-[10px] font-bold text-accent-blue uppercase tracking-wider block mb-1">
                      {item.category}
                    </span>
                    <p className="text-white font-bold text-sm">
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="flex justify-center sm:justify-start mt-6 sm:mt-8">
        <Link
          to="/experience"
          title="Experience Smart Living"
          className="group home-wave-cta cursor-pointer apple-border-shine flex rounded-full items-center gap-2 border border-border-main/50 text-text-main px-8 py-3.5 uppercase text-[10px] sm:text-[11px] font-bold tracking-widest bg-transparent hover:border-accent-blue"
          style={{ "--cta-accent": "#0A84FF" } as React.CSSProperties}
        >
          <span className="relative z-10">View More</span>
          <ArrowRight className="h-4 w-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
