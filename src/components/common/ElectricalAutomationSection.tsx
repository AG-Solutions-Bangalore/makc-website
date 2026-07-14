import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Lightbulb } from "lucide-react";
import { getImageUrl } from "@/utils/image";


gsap.registerPlugin(ScrollTrigger);

const checklist = [
  "Smart switch boards",
  "Fan speed control",
  "Appliance automation",
  "Scheduling and load management",
  "RGB and mood lighting",
  "Sensor-based lights",
  "Scene-based lighting control"
];

export default function ElectricalAutomationSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });

    tl.from(".ea-card", {
      y: 50,
      autoAlpha: 0,
      duration: 0.85,
      ease: "power3.out"
    })
      .from(".ea-text-fade", {
        y: 20,
        autoAlpha: 0,
        stagger: 0.12,
        duration: 0.6,
        ease: "power3.out"
      }, "-=0.5")
      .from(".ea-check-fade", {
        y: 15,
        autoAlpha: 0,
        stagger: 0.08,
        duration: 0.5,
        ease: "power3.out"
      }, "-=0.45")
      .from(".ea-image-fade", {
        scale: 0.96,
        autoAlpha: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.65");
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="mb-28 no-reveal">
      {/* Premium indigo rounded container card */}
      <div className="ea-card bg-[#3A4CB4] rounded-[2.5rem] relative overflow-hidden p-8 sm:p-12 lg:p-16 border border-[#5263d5]/20 shadow-2xl">
        
        {/* Faded watermark icon in the background */}
        <Lightbulb className="absolute -left-12 -bottom-12 w-96 h-96 text-white/5 pointer-events-none transform -rotate-12 select-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
          
          {/* Left Column: Text & Bullet Points */}
          <div className="lg:col-span-6 space-y-6 flex flex-col justify-center">
            
            {/* Title & Subtitle */}
            <div className="space-y-4">
              <h2 className="ea-text-fade text-3.5xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.1] font-sans">
                Electrical Automation
              </h2>
              <p className="ea-text-fade text-white/80 text-sm sm:text-base leading-relaxed font-normal">
                Control your lighting and electrical systems with ease using touch panels, 
                mobile apps, or voice commands.
              </p>
            </div>

            {/* Checklist */}
            <div className="space-y-3.5 pt-2">
              {checklist.map((item, idx) => (
                <div key={idx} className="ea-check-fade flex items-center gap-3">
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
                  <span className="text-white/90 text-sm sm:text-base font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom info note */}
            <div className="ea-text-fade border-t border-white/10 pt-5 mt-2">
              <p className="text-white/85 text-xs sm:text-sm leading-relaxed font-normal">
                Works for new homes, retrofit automation projects, and small commercial 
                spaces such as offices and studios.
              </p>
            </div>

          </div>

          {/* Right Column: Panel Image */}
          <div className="ea-image-fade lg:col-span-6 aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-lg group bg-white/5 relative">
            <img
              src={getImageUrl("electric automation.webp")}
              alt="Bedside wall-mounted tactile smart touch automation panel"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-750 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>

        </div>

      </div>
    </section>
  );
}
