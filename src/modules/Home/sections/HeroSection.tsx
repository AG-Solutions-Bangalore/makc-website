import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const carouselItems = [
  {
    image: "/assets/industrial-automation-overview.jpg",
  },
  {
    image: "/assets/industrial-cybersecurity.jpg",
  },
  {
    image: "/assets/electrical-design.jpg",
  },
  {
    image: "/assets/system-integration.jpg",
  },
  {
    image: "/assets/smart-interior.png",
  },
];

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const carouselContainerRef = useRef<HTMLDivElement>(null);

  const [loaded, setLoaded] = useState(false);
  const [api, setApi] = useState<CarouselApi>();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Set loaded state after mount for animations
  useEffect(() => {
    setLoaded(true);
  }, []);

  // Tracks the active slide index
  useEffect(() => {
    if (!api) return;

    setCurrentIndex(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrentIndex(api.selectedScrollSnap());
    });
  }, [api]);

  // Autoplay functionality
  useEffect(() => {
    if (!api) return;

    const autoplayInterval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 4500);

    return () => clearInterval(autoplayInterval);
  }, [api]);

  // GSAP entrance animation for the carousel
  useEffect(() => {
    if (!loaded) return;
    if (!sectionRef.current || !carouselContainerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        carouselContainerRef.current,
        { opacity: 0, scale: 0.98 },
        { opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [loaded]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative w-full h-[100dvh] bg-ma-black overflow-hidden"
    >
      {/* Top and Bottom Gradients for UI readability */}
      <div className="absolute top-0 left-0 right-0 h-[25%] bg-gradient-to-b from-black/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-black/90 to-transparent z-10 pointer-events-none" />

      {/* Fullscreen Carousel */}
      <div ref={carouselContainerRef} className="w-full h-full opacity-0">
        <Carousel setApi={setApi} className="w-full h-full">
          <CarouselContent className="-ml-0 h-full">
            {carouselItems.map((item, index) => (
              <CarouselItem key={index} className="pl-0 w-full h-full">
                <div className="w-full h-full relative select-none">
                  <img
                    src={item.image}
                    alt={`Banner ${index + 1}`}
                    className="w-full h-full object-cover select-none pointer-events-none"
                  />
                  {/* Subtle dark tint to unify colors */}
                  <div className="absolute inset-0 bg-black/20 z-[1]" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Floating Glassmorphic Controls Panel */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center justify-between w-[90%] max-w-[1200px] h-[64px] px-6 rounded-full border border-white/10 bg-black/60 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
        {/* Progress indicators */}
        <div className="flex gap-2">
          {carouselItems.map((_, idx) => (
            <button
              key={idx}
              onClick={() => api?.scrollTo(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentIndex === idx
                  ? "w-6 bg-ma-yellow"
                  : "w-2 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex gap-3">
          <button
            onClick={() => api?.scrollPrev()}
            className="w-10 h-10 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => api?.scrollNext()}
            className="w-10 h-10 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer"
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
