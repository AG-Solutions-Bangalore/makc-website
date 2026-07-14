import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const checklist = [
  "HD indoor & outdoor CCTV cameras",
  "Night vision monitoring",
  "Motion-triggered recording",
  "Live and recorded access via mobile app"
];

export default function CCTVMonitoringSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });

    tl.from(".cctv-img-left", {
      x: -40,
      autoAlpha: 0,
      duration: 0.8,
      ease: "power3.out"
    })
      .from(".cctv-img-right", {
        x: 40,
        autoAlpha: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.65")
      .from(".cctv-content-fade > *", {
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
          <div className="cctv-img-left col-span-7 relative rounded-[2rem] overflow-hidden group border border-border-main/20 shadow-md">
            <img 
              src="/images/security/cam1.webp" 
              alt="Wall-mounted high-definition outdoor CCTV camera monitoring entry point"
              className="w-full h-auto object-cover rounded-[2rem] transition-transform duration-750 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-black/5" />
          </div>
          {/* Square right image aligned at the bottom */}
          <div className="cctv-img-right col-span-5 relative rounded-[2rem] overflow-hidden group border border-border-main/20 shadow-md">
            <img 
              src="/images/security/cam2.webp" 
              alt="Tactile dome smart surveillance camera on travertine stone wall"
              className="w-full h-auto object-cover rounded-[2rem] transition-transform duration-750 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-black/5" />
          </div>
        </div>

        {/* Right Column: Features Content */}
        <div className="lg:col-span-6 cctv-content-fade flex flex-col gap-6 pl-0 lg:pl-6">
          {/* Heading */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-text-main leading-[1.1] tracking-tight mb-4 font-sans">
              CCTV & Video Monitoring
            </h2>
            <p className="text-text-muted text-sm sm:text-base leading-relaxed font-normal">
              24×7 smart surveillance for complete peace of mind.
            </p>
          </div>

          {/* Checklist */}
          <div className="space-y-3.5 pt-2">
            {checklist.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
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
                <span className="text-text-main text-sm sm:text-base font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Footer note */}
          <div className="border-t border-border-main/50 pt-5 mt-2">
            <p className="text-text-muted text-xs sm:text-sm leading-relaxed font-medium">
              Suitable for homes, offices, retail outlets, warehouses, and commercial premises.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
