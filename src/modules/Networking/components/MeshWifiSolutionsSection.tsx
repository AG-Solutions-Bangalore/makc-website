import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  "Uniform Wi-Fi coverage",
  "Seamless roaming across rooms",
  "No signal drops or buffering",
  "Scalable network design"
];

export default function MeshWifiSolutionsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });

    tl.from(".mws-img", {
      y: 40,
      autoAlpha: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out"
    })
      .from(".mws-content-fade > *", {
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
          <div className="mws-img row-span-2 relative rounded-[2rem] overflow-hidden group border border-border-main/20 shadow-md">
            <div className="absolute inset-0">
              <img 
                src="/images/networking/netSolutionImage1.webp" 
                alt="Networking device mounted under sleek wooden shelves with strip lighting"
                className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>
            <div className="aspect-[9/16] lg:aspect-[3/4]" />
          </div>

          {/* Top-right: Ajax hub */}
          <div className="mws-img relative rounded-[2rem] overflow-hidden aspect-[4/3] group border border-border-main/20 shadow-md">
            <img 
              src="/images/networking/netSolutionImage2.webp" 
              alt="Wireless smart hub panel with glowing green brand logo"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-750 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-black/15" />
          </div>

          {/* Bottom-right: intercom intercom doorbell */}
          <div className="mws-img relative rounded-[2rem] overflow-hidden aspect-[4/3] group border border-border-main/20 shadow-md">
            <img 
              src="/images/networking/netSolutionImage3.webp" 
              alt="Smart intercom video door phone station on elegant marble wall"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-750 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-black/15" />
          </div>
        </div>

        {/* Right Column: Features Content */}
        <div className="lg:col-span-6 mws-content-fade flex flex-col gap-6 pl-0 lg:pl-6">
          {/* Heading */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-text-main leading-[1.1] tracking-tight mb-4 font-sans">
              Mesh Wi-Fi Network <br />Solutions
            </h2>
            <p className="text-text-muted text-sm sm:text-base leading-relaxed font-normal">
              Perfect for large homes and multi-floor spaces.
            </p>
          </div>

          {/* Benefits Panel card */}
          <div className="bg-bg-surface border border-border-main/30 rounded-3xl p-6 sm:p-8 shadow-sm">
            <h3 className="text-text-main text-base sm:text-lg font-bold mb-4 font-sans select-none">
              Benefits
            </h3>
            <ul className="space-y-3.5 mb-6">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 shadow-[0_0_8px_rgba(16,185,129,0.4)]" />
                  <span className="text-text-muted text-sm font-medium">{benefit}</span>
                </li>
              ))}
            </ul>
            <div className="border-t border-border-main/40 pt-4 mt-2">
              <p className="text-text-main text-sm font-bold leading-relaxed">
                Best suited for villas, duplex homes, offices, and commercial properties.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
