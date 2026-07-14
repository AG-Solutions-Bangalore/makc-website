import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { getImageUrl } from "@/utils/image";


gsap.registerPlugin(ScrollTrigger);

const includesList = [
  "Garden lighting",
  "Compound & pathway lights",
  "Facade & elevation lighting",
  "Time-based outdoor lighting"
];

export default function OutdoorLightingSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });

    tl.from(".out-img-left", {
      x: -40,
      autoAlpha: 0,
      duration: 0.8,
      ease: "power3.out"
    })
      .from(".out-img-right", {
        x: 40,
        autoAlpha: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.65")
      .from(".out-content-fade > *", {
        y: 25,
        autoAlpha: 0,
        stagger: 0.12,
        duration: 0.7,
        ease: "power3.out"
      }, "-=0.5");
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="mb-28 no-reveal border-t border-border-main/30 pt-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Image Mosaic */}
        <div className="lg:col-span-6 grid grid-cols-12 gap-4 items-end">
          {/* Tall left image */}
          <div className="out-img-left col-span-7 relative rounded-[2rem] overflow-hidden group border border-border-main/20 shadow-md">
            <img 
              src={getImageUrl("outdoorImage1.webp")} 
              alt="Luxury villa entrance facade with automated exterior lighting"
              className="w-full h-auto object-cover rounded-[2rem] transition-transform duration-750 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-black/5" />
          </div>
          {/* Square right image aligned at the bottom */}
          <div className="out-img-right col-span-5 relative rounded-[2rem] overflow-hidden group border border-border-main/20 shadow-md">
            <img 
              src={getImageUrl("outdoorImage2.webp")} 
              alt="Warm spots and accent lighting in modern living room"
              className="w-full h-auto object-cover rounded-[2rem] transition-transform duration-750 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-black/5" />
          </div>
        </div>

        {/* Right Column: Features Content */}
        <div className="lg:col-span-6 out-content-fade flex flex-col gap-6 pl-0 lg:pl-6">
          {/* Heading */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-text-main leading-[1.1] tracking-tight mb-4 font-sans">
              Outdoor & Landscape <br />Lighting Automation
            </h2>
            <p className="text-text-muted text-sm sm:text-base leading-relaxed font-normal">
              Automate exterior lights for security and aesthetics.
            </p>
          </div>

          {/* Includes Panel Card */}
          <div className="bg-bg-surface border border-border-main/30 rounded-3xl p-6 sm:p-8 shadow-sm">
            <h3 className="text-text-main text-base sm:text-lg font-bold mb-4 font-sans select-none">
              Includes
            </h3>
            <ul className="space-y-3.5 mb-6">
              {includesList.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 shadow-[0_0_8px_rgba(16,185,129,0.4)]" />
                  <span className="text-text-muted text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <div className="border-t border-border-main/40 pt-4 mt-2">
              <p className="text-text-main text-sm font-bold leading-relaxed">
                Lights operate automatically based on time or schedules.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
