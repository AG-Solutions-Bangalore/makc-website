import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { getImageUrl } from "@/utils/image";


gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    title: "Homes & Apartments",
    img: getImageUrl("home.webp"),
    alt: "Icon representing homes and apartments"
  },
  {
    title: "Villas & Independent Houses",
    img: getImageUrl("house.webp"),
    alt: "Icon representing villas and independent houses"
  },
  {
    title: "Offices & Workspaces",
    img: getImageUrl("workshop.webp"),
    alt: "Icon representing offices and workspaces"
  },
  {
    title: "Retail & Commercial Spaces",
    img: getImageUrl("commercial.webp"),
    alt: "Icon representing retail and commercial spaces"
  },
  {
    title: "Multi-floor & large properties",
    img: getImageUrl("Multi-floor.webp"),
    alt: "Icon representing multi-floor and large properties"
  }
];

export default function WhatIsNetworking() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });

    // Stagger headings and grid items
    tl.from(".sec-headline", { y: 30, autoAlpha: 0, duration: 0.7 })
      .from(".sec-desc", { y: 20, autoAlpha: 0, duration: 0.6 }, "-=0.4")
      .from(".sec-icon-card", { 
        y: 40, 
        autoAlpha: 0, 
        stagger: 0.12, 
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.3");
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="mb-24 no-reveal">
      {/* Split Header Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
        <div className="lg:col-span-7 sec-headline">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-main leading-[1.15] max-w-2xl font-sans">
            Smart Networking Solutions for modern living
          </h2>
        </div>
        
        <div className="lg:col-span-5 pt-2 sec-desc">
          <p className="text-text-muted text-sm sm:text-base leading-relaxed font-normal">
            Smart automation solutions designed to enhance comfort, security, and convenience 
            in your home. We connect intelligent technologies to create a seamless and 
            effortless living experience.
          </p>
        </div>
      </div>

      {/* Symmetrical 5-column grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8 justify-center">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="sec-icon-card group flex flex-col items-center text-center cursor-pointer"
          >
            {/* Soft blue-gray icon box wrapper */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-[#EBF0FA] dark:bg-white border border-border-main/10 flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_8px_30px_rgb(235,240,250,0.5)] dark:group-hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
              {/* Centered line-art icon */}
              <img
                src={cat.img}
                alt={cat.alt}
                className="w-12 h-12 sm:w-14 sm:h-14 object-contain filter dark:invert-[0.1]"
              />
            </div>

            {/* Title Text */}
            <h3 className="text-text-main text-xs sm:text-sm font-bold tracking-wide leading-snug max-w-[15ch] transition-colors duration-200 group-hover:text-accent-blue">
              {cat.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
