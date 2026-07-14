import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    title: "Homes & Apartments",
    img: "/images/security/Homes & Apartments.webp",
    alt: "Smart control apartment interior lighting at dusk"
  },
  {
    title: "Villas & Independent Houses",
    img: "/images/security/Villas.webp",
    alt: "Elegant modern villa architectural lights at night"
  },
  {
    title: "Offices & Workspaces",
    img: "/images/security/Offices & Workspaces.webp",
    alt: "Smart workspace lighting and corporate interior"
  },
  {
    title: "Retail & Commercial Spaces",
    img: "/images/security/Retail & Commercial Spaces.webp",
    alt: "Premium commercial store lighting design"
  }
];

export default function WhatIsSecurity() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState(0);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });

    // Stagger headings and description columns
    tl.from(".sec-headline", { y: 30, autoAlpha: 0, duration: 0.7 })
      .from(".sec-desc", { y: 20, autoAlpha: 0, duration: 0.6 }, "-=0.4")
      .from(".sec-accordion", { 
        y: 40, 
        autoAlpha: 0, 
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.3");
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="mb-24 no-reveal">
      {/* Split Header Layout matching Automation page exactly */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
        <div className="lg:col-span-7 sec-headline">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-main leading-[1.15]">
            What is Security System
          </h2>
        </div>
        
        <div className="lg:col-span-5 pt-2 sec-desc">
          <p className="text-text-muted text-sm sm:text-base leading-relaxed font-normal">
            Security automation allows you to monitor and protect your space using CCTV 
            cameras, mobile apps, sensors, alerts, and remote access — instead of manual checks.
            Surveillance responds automatically based on movement, time, or predefined 
            security rules, giving you real-time monitoring and peace of mind.
          </p>
        </div>
      </div>

      {/* Expanding Flex Accordion Grid on Hover */}
      <div 
        className="sec-accordion flex flex-col lg:flex-row gap-6 w-full items-stretch"
        onMouseLeave={() => setActiveCard(0)}
      >
        {categories.map((cat, idx) => {
          const isActive = activeCard === idx;
          return (
            <div
              key={idx}
              onMouseEnter={() => setActiveCard(idx)}
              className={`relative rounded-3xl overflow-hidden h-[200px] lg:h-[450px] w-full border border-border-main/55 group shadow-md hover:shadow-xl transition-all duration-500 ease-in-out cursor-pointer ${
                isActive ? "lg:flex-[1.6]" : "lg:flex-1"
              }`}
            >
              {/* Image styling based on active state */}
              <img
                src={cat.img}
                alt={cat.alt}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${
                  isActive ? "grayscale-0 scale-105" : "grayscale scale-100"
                }`}
              />

              {/* Bottom gradient overlay - fades in when active */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent transition-opacity duration-500 ${
                  isActive ? "opacity-100" : "opacity-0"
                }`}
              />

              {/* Text centered at the bottom - slides up when active */}
              <div
                className={`absolute bottom-8 left-0 right-0 text-center transition-all duration-500 ease-out ${
                  isActive
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0"
                }`}
              >
                <h3 className="text-white text-lg sm:text-xl font-bold tracking-wide">
                  {cat.title}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
