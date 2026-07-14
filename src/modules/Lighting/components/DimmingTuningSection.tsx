import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Lightbulb } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const checklist = [
  "Smooth dimming control",
  "Preset brightness levels",
  "Night-friendly low-light modes"
];

export default function DimmingTuningSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });

    tl.from(".dt-card", {
      y: 50,
      autoAlpha: 0,
      duration: 0.85,
      ease: "power3.out"
    })
      .from(".dt-text-fade", {
        y: 20,
        autoAlpha: 0,
        stagger: 0.12,
        duration: 0.6,
        ease: "power3.out"
      }, "-=0.5")
      .from(".dt-check-fade", {
        y: 15,
        autoAlpha: 0,
        stagger: 0.08,
        duration: 0.5,
        ease: "power3.out"
      }, "-=0.45")
      .from(".dt-image-fade", {
        scale: 0.96,
        autoAlpha: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.65");
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="mb-28 no-reveal">
      {/* Premium indigo rounded container card */}
      <div className="dt-card bg-[#3A4CB4] rounded-[2.5rem] relative overflow-hidden p-8 sm:p-12 lg:p-16 border border-[#5263d5]/20 shadow-2xl">
        
        {/* Faded watermark icon in the background */}
        <Lightbulb className="absolute -left-12 -bottom-12 w-96 h-96 text-white/5 pointer-events-none transform -rotate-12 select-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
          
          {/* Left Column: Text & Bullet Points */}
          <div className="lg:col-span-6 space-y-6 flex flex-col justify-center text-white">
            
            {/* Title & Subtitle */}
            <div className="space-y-4">
              <h2 className="dt-text-fade text-3.5xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.1] font-sans">
                Dimming & Tuning of Lights
              </h2>
              <p className="dt-text-fade text-white/80 text-sm sm:text-base leading-relaxed font-normal">
                Adjust lighting intensity smoothly for comfort and mood.
              </p>
            </div>

            {/* Checklist */}
            <div className="space-y-3.5 pt-2">
              {checklist.map((item, idx) => (
                <div key={idx} className="dt-check-fade flex items-center gap-3">
                  <div className="flex items-center justify-center w-5.5 h-5.5 rounded-full bg-emerald-500 text-white shrink-0 shadow-md">
                    <svg
                      className="w-3.5 h-3.5 stroke-[3]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-white/95 text-sm sm:text-base font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom info note */}
            <div className="dt-text-fade border-t border-white/10 pt-5 mt-2">
              <p className="text-white/80 text-xs sm:text-sm leading-relaxed font-normal">
                Perfect for bedrooms, living rooms, and conference areas.
              </p>
            </div>

          </div>

          {/* Right Column: Panel Image */}
          <div className="dt-image-fade lg:col-span-6 aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-lg group bg-white/5 relative">
            <img
              src="/images/lighting/dimeLight.webp"
              alt="Dimming and color tuning of LED lights in modern luxury lobby area layout"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-750 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>

        </div>

      </div>
    </section>
  );
}
