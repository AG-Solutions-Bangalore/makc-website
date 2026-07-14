import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { getImageUrl } from "@/utils/image";


gsap.registerPlugin(ScrollTrigger);

const scenes = [
  "Morning Mode",
  "Evening Relax Mode",
  "Movie / TV Mode",
  "Party Mode",
  "Night Mode"
];

export default function SceneBasedLightingSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });

    // Stagger the image mosaic
    tl.from(".sbl-img", {
      y: 40,
      autoAlpha: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out"
    })
      .from(".sbl-content-fade > *", {
        y: 25,
        autoAlpha: 0,
        stagger: 0.12,
        duration: 0.7,
        ease: "power3.out"
      }, "-=0.6");
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="mb-28 no-reveal border-t border-border-main/30 pt-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Image Mosaic */}
        <div className="lg:col-span-6 grid grid-cols-2 gap-4">
          {/* Tall left image */}
          <div className="sbl-img row-span-2 relative rounded-[2rem] overflow-hidden group border border-border-main/20 shadow-md">
            <div className="absolute inset-0">
              <img 
                src={getImageUrl("lightimage1.webp")} 
                alt="Smart bedroom layout with warm circadian ambient lighting"
                className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>
            <div className="aspect-[9/16] lg:aspect-[3/4]" />
          </div>

          {/* Top-right: wider dining room */}
          <div className="sbl-img relative rounded-[2rem] overflow-hidden aspect-[4/3] group border border-border-main/20 shadow-md">
            <img 
              src={getImageUrl("lightimage2.webp")} 
              alt="Temple room design with backlit gold panels and chandelier"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-750 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-black/15" />
          </div>

          {/* Bottom-right: close-up switch */}
          <div className="sbl-img relative rounded-[2rem] overflow-hidden aspect-[4/3] group border border-border-main/20 shadow-md">
            <img 
              src={getImageUrl("lightimage3.webp")} 
              alt="Tactile wall lighting touch panel mounted near bedroom wall"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-750 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-black/15" />
          </div>
        </div>

        {/* Right Column: Features Content */}
        <div className="lg:col-span-6 sbl-content-fade flex flex-col gap-6 pl-0 lg:pl-6">
          {/* Heading */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-text-main leading-[1.1] tracking-tight mb-4 font-sans">
              Scene-Based Lighting
            </h2>
            <p className="text-text-muted text-sm sm:text-base leading-relaxed font-normal">
              Set multiple lights to work together with a single command.
            </p>
          </div>

          {/* Popular Scenes Panel card */}
          <div className="bg-bg-surface border border-border-main/30 rounded-3xl p-6 sm:p-8 shadow-sm">
            <h3 className="text-text-main text-base sm:text-lg font-bold mb-4 font-sans select-none">
              Popular Scenes
            </h3>
            <ul className="space-y-3.5 mb-6">
              {scenes.map((scene) => (
                <li key={scene} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 shadow-[0_0_8px_rgba(16,185,129,0.4)]" />
                  <span className="text-text-muted text-sm font-medium">{scene}</span>
                </li>
              ))}
            </ul>
            <div className="border-t border-border-main/40 pt-4 mt-2">
              <p className="text-text-main text-sm font-bold leading-relaxed">
                One tap adjusts brightness, colour, and light zones instantly.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
