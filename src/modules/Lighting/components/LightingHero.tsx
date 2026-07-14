import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface Hotspot {
  id: string;
  label: string;
  top: string;
  left: string;
  dotPosition: "left" | "right";
}

const hotspots: Hotspot[] = [
  { id: "curtains", label: "Curtains", top: "18%", left: "62%", dotPosition: "left" },
  { id: "lightings", label: "Lightings", top: "38%", left: "60%", dotPosition: "left" },
  { id: "doors", label: "Doors", top: "62%", left: "61%", dotPosition: "left" },
  { id: "electrical", label: "Electrical Automation", top: "58%", left: "80%", dotPosition: "left" },
  { id: "gates", label: "Gates", top: "80%", left: "72%", dotPosition: "right" },
];

export default function LightingHero() {
  const heroRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Stagger entrance matching Automation/Security/Lighting page hero animations
    tl.from(".hero-badge", { y: -20, autoAlpha: 0, duration: 0.6 })
      .from(".hero-heading", { y: 35, autoAlpha: 0, duration: 0.8 }, "-=0.45")
      .from(".hero-subtitle", { y: 28, autoAlpha: 0, duration: 0.75 }, "-=0.55")
      .from(".hero-check", { y: 20, autoAlpha: 0, stagger: 0.12, duration: 0.6 }, "-=0.5")
      .from(".hero-hotspots", { autoAlpha: 0, duration: 1 }, "-=0.4");

    // Float animations for hotspots
    hotspots.forEach((spot) => {
      gsap.to(`.hotspot-${spot.id}`, {
        y: "random(-6, 6)",
        x: "random(-4, 4)",
        duration: "random(2.5, 4)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });
  }, { scope: heroRef });

  return (
    <section
      ref={heroRef}
      className="relative min-h-[90vh] lg:min-h-screen w-full flex items-center justify-start bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/2151349208.webp')" }}
    >
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Smooth transition gradient to blend into the next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 md:h-48 bg-gradient-to-t from-bg-main to-transparent pointer-events-none" />

      {/* Hero content container */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10 pt-32 pb-20 flex flex-col justify-center min-h-[90vh] lg:min-h-screen">
        <div className="max-w-3xl space-y-6 md:space-y-8">
          
          {/* Badge */}
          <div className="hero-badge text-[11px] sm:text-xs tracking-widest uppercase font-bold text-white/90 flex items-center gap-1.5">
            <span className="text-emerald-500 font-extrabold text-sm">#1</span> Choice for Home Automation
          </div>

          {/* Main Heading */}
          <h1 className="hero-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-sans tracking-tight text-white leading-[1.05]">
            Smart Lighting <br />
            Automation
          </h1>

          {/* Subtitle */}
          <div className="hero-subtitle max-w-2xl">
            <p className="text-base sm:text-lg text-white/80 leading-relaxed">
              Lighting automation isn't just about switching lights ON or OFF — it's about creating the 
              right atmosphere, saving energy, and making everyday living effortless. With professionally 
              designed smart lighting automation in Bangalore, MAKc Automation helps you control every 
              light in your space with ease.
              <img
                src="/images/automation/star.webp"
                alt=""
                aria-hidden="true"
                className="w-6 h-6 inline-block ml-2 mb-1 select-none"
              />
            </p>
          </div>

          {/* Features check list */}
          <div className="space-y-4 pt-2">
            {[
              "Personalized mood scenes & automated dimming presets",
              "Circadian lighting adjustments for natural wellness",
              "Energy-efficient scheduling & eco-friendly settings"
            ].map((text, idx) => (
              <div key={idx} className="hero-check flex items-center gap-3">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500 text-white shrink-0 shadow-md">
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
                <span className="text-white/90 font-medium text-sm sm:text-base">
                  {text}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Floating Hotspots Overlay on Right Side */}
      <div className="absolute inset-0 z-25 pointer-events-none hidden lg:block hero-hotspots">
        <div className="max-w-7xl mx-auto w-full h-full relative">
          {hotspots.map((spot) => (
            <div
              key={spot.id}
              className={`absolute hotspot-${spot.id} hidden sm:flex transition-all duration-300 flex items-center gap-2 cursor-pointer group pointer-events-auto`}
              style={{ top: spot.top, left: spot.left }}
            >
              {spot.dotPosition === "left" && (
                <span className="relative flex h-3 w-3 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-white border border-black/40"></span>
                </span>
              )}

              <div className="bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-bold text-white tracking-wider px-3.5 py-1.5 rounded-full shadow-lg transition-all duration-200 group-hover:bg-accent-blue group-hover:border-accent-blue group-hover:scale-105 whitespace-nowrap">
                {spot.label}
              </div>

              {spot.dotPosition === "right" && (
                <span className="relative flex h-3 w-3 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-white border border-black/40"></span>
                </span>
              )}
            </div>
          ))}

          <div className="absolute bottom-6 right-6 pointer-events-none">
            <span className="text-[10px] text-white/40 tracking-widest font-mono uppercase bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-md border border-white/5">
              Home — Automation
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
