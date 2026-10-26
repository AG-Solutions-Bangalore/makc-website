import { useState, useRef, useEffect } from "react";
import { getImageUrl } from "@/utils/image";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

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

export default function SolutionsGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const [isPaused, setIsPaused] = useState(false);

  // Update active slide on scroll
  const handleScroll = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const card0 = el.children[0] as HTMLElement;
    const card1 = el.children[1] as HTMLElement;
    if (!card0) return;
    const cardStep = card1 ? (card1.offsetLeft - card0.offsetLeft) : (card0.offsetWidth + 16);
    const scrollPosition = el.scrollLeft;
    const index = Math.round(scrollPosition / cardStep);
    if (index >= 0 && index < galleryItems.length && index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  const scrollToIndex = (index: number) => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const card = el.children[index] as HTMLElement;
    if (card) {
      const left = index === 0 ? 0 : card.offsetLeft;
      el.scrollTo({ left, behavior: "smooth" });
      setActiveIndex(index);
    }
  };



  // Auto-advance slides every 5s, cycling back from the last image to the 1st image
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      const nextIdx = activeIndex >= galleryItems.length - 1 ? 0 : activeIndex + 1;
      scrollToIndex(nextIdx);
    }, 5000);

    return () => clearInterval(timer);
  }, [activeIndex, isPaused]);

  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-20 bg-white dark:bg-[#0b1626] border-y border-slate-200/90 dark:border-white/10 transition-colors duration-300 overflow-hidden no-reveal">
      {/* Decorative ambient radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(10,132,255,0.06)_0%,transparent_60%)] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
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

        {/* Interactive Gallery Snap Slider (Responsive for Mobile, Tablet & Desktop) */}
        <div>
          {/* Top Info Bar with category */}
          <div className="flex items-center px-2 mb-3 sm:mb-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-[11px] sm:text-xs font-bold tracking-wide">
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span>{galleryItems[activeIndex]?.category}</span>
            </div>
          </div>

          {/* Horizontal Snap Viewport */}
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
            className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 pt-1 px-0 snap-x snap-mandatory scrollbar-none scroll-smooth"
          >
            {galleryItems.map((item, idx) => {
              const isActive = idx === activeIndex;
              return (
                <div
                  key={idx}
                  onClick={() => scrollToIndex(idx)}
                  className={`shrink-0 w-[82vw] sm:w-[65vw] md:w-[480px] lg:w-[560px] max-w-[620px] snap-start transition-all duration-300 cursor-pointer ${
                    isActive ? "scale-100 opacity-100" : "scale-[0.98] opacity-80 hover:opacity-100"
                  }`}
                >
                  <div className="relative aspect-[4/3] sm:aspect-[16/10] rounded-[1.75rem] sm:rounded-[2rem] overflow-hidden border border-border-main/50 shadow-xl bg-neutral-900 group">
                    <img
                      src={item.src}
                      alt={item.alt}
                      title={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                    {/* Natural transparent dark gradient for text legibility without blocking the photo */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 via-35% to-transparent pointer-events-none" />

                    {/* Transparent caption overlay - fully visible in both light & dark modes */}
                    <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 pointer-events-none z-10">
                      <span className="text-[#38bdf8] font-bold text-[10px] sm:text-xs uppercase tracking-wider block mb-1 drop-shadow-[0_1px_3px_rgba(0,0,0,0.95)]">
                        {item.category}
                      </span>
                      <h3 className="!text-white text-white! text-base sm:text-xl md:text-2xl font-bold tracking-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.95)] line-clamp-1">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Centered Progress Indicator Dots */}
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 px-2 mt-4 sm:mt-6">
            {galleryItems.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToIndex(idx)}
                aria-label={`Jump to slide ${idx + 1}`}
                className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === activeIndex
                    ? "w-6 sm:w-8 bg-accent-blue"
                    : "w-1.5 sm:w-2 bg-border-main hover:bg-text-muted"
                }`}
              />
            ))}
          </div>
        </div>

        {/* View More Button - Centered in Gallery Section */}
        <div className="flex justify-center items-center mt-6 sm:mt-8">
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
      </div>
    </section>
  );
}
