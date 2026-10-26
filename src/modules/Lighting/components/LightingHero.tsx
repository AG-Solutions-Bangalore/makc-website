import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { getImageUrl } from "@/utils/image";

export default function LightingHero() {
  const heroRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Stagger entrance matching Automation/Security/Lighting page hero animations
      tl.from(".hero-badge", { y: -20, autoAlpha: 0, duration: 0.6 })
        .from(".hero-heading", { y: 35, autoAlpha: 0, duration: 0.8 }, "-=0.45")
        .from(
          ".hero-subtitle",
          { y: 28, autoAlpha: 0, duration: 0.75 },
          "-=0.55",
        )
        .from(
          ".hero-check",
          { y: 20, autoAlpha: 0, stagger: 0.12, duration: 0.6 },
          "-=0.5",
        );
    },
    { scope: heroRef },
  );

  return (
    <section
      ref={heroRef}
      className="relative min-h-[75vh] sm:min-h-[85vh] lg:min-h-screen w-full flex items-center justify-start bg-cover bg-center bg-no-repeat transition-colors duration-300"
      style={{
        backgroundImage: `url('${getImageUrl("lighting_banner.webp")}')`,
      }}
    >
      {/* Left side overlay - dark mode only to avoid washing out the image in light mode */}
      <div className="hidden dark:block absolute inset-0 bg-gradient-to-r from-bg-main via-bg-main/95 sm:via-bg-main/80 lg:via-bg-main/60 to-transparent pointer-events-none transition-colors duration-300" />

      {/* Bottom gradient blend - dark mode only */}
      <div className="hidden dark:block absolute bottom-0 left-0 right-0 h-24 md:h-36 bg-gradient-to-t from-bg-main to-transparent pointer-events-none z-[5]" />

      {/* Hero content container */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10 pt-20 sm:pt-28 lg:pt-32 pb-8 sm:pb-14 lg:pb-20 flex flex-col justify-center min-h-[75vh] sm:min-h-[85vh] lg:min-h-screen">
        <div className="max-w-3xl space-y-2">
          {/* Badge */}
          <div className="hero-badge text-[11px] sm:text-xs tracking-widest uppercase font-bold text-slate-900 dark:text-slate-200 drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)] dark:drop-shadow-none flex items-center gap-1.5">
            <span className="text-emerald-600 dark:text-emerald-400 font-extrabold text-sm">#1</span>{" "}
            Choice for Smart Lighting
          </div>

          {/* Main Heading */}
          <h1 className="hero-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-sans tracking-tight text-text-main leading-[1.1] drop-shadow-[0_1px_2px_rgba(255,255,255,0.6)] dark:drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
            Smart Lighting
          </h1>

          {/* Subtitle */}
          <div className="hero-subtitle max-w-2xl">
            <p className="text-base sm:text-lg text-slate-900 dark:text-slate-200 font-medium leading-relaxed drop-shadow-[0_1px_2px_rgba(255,255,255,0.85)] dark:drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
              Lighting Automation isn't just about switching lights ON or OFF —
              it's about creating the Right Ambience, Saving Energy, and making
              Everyday Living Effortless. With professionally designed Smart Lighting
              in Bangalore, MAKc Automation helps you control every light in your space with ease.
              <img
                src={getImageUrl("star.webp")}
                alt="Five-star rating icon representing premium smart lighting solutions"
                title="5 Star Smart Lighting Quality"
                aria-hidden="true"
                className="w-6 h-6 inline-block ml-2 mb-1 select-none"
              />
            </p>
          </div>

          {/* Features check list */}
          <div className="space-y-4 pt-2">
            {[
              "Personalized Mood Scenes & Automated Dimming",
              "Circadian Lighting Adjustments for Natural Wellness",
              "Energy-Efficient Scheduling & Eco-Friendly settings",
            ].map((text, idx) => (
              <div key={idx} className="hero-check flex items-center gap-3">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500 text-white! shrink-0 shadow-md">
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
                <span className="text-slate-900 dark:text-white font-semibold text-sm sm:text-base drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)] dark:drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
