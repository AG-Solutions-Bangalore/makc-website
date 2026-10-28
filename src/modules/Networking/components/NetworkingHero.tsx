import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { getImageUrl } from "@/utils/image";

export default function NetworkingHero() {
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
      className="relative w-full flex items-start justify-start bg-cover bg-no-repeat transition-colors duration-300 [background-position:82%_center] sm:min-h-[85vh] sm:items-center sm:bg-center lg:min-h-screen"
      style={{
        backgroundImage: `url('${getImageUrl("networking_banner.webp")}')`,
      }}
    >
      {/* Dark overlay across both light and dark mode for consistent premium contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40 sm:from-black/85 sm:via-black/60 sm:to-black/20 pointer-events-none" />

      {/* Bottom gradient blend into next section (dark mode only so light mode doesn't wash out hero bottom) */}
      <div className="hidden dark:block absolute bottom-0 left-0 right-0 h-24 md:h-36 bg-gradient-to-t from-bg-main to-transparent pointer-events-none z-[5]" />

      {/* Hero content container */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10 pt-24 sm:pt-28 lg:pt-32 pb-10 sm:pb-14 lg:pb-20 flex flex-col justify-start sm:justify-center sm:min-h-[85vh] lg:min-h-screen">
        <div className="max-w-3xl space-y-4 sm:space-y-3">
          {/* Badge */}
          <div className="hero-badge text-[10px] sm:text-xs tracking-widest uppercase font-bold !text-white text-white! drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] flex items-center gap-1.5">
            <span className="text-emerald-400 font-extrabold text-sm">#1</span>{" "}
            Choice for Home Networking
          </div>

          {/* Main Heading */}
          <h1 className="hero-heading text-[32px] leading-[1.08] sm:leading-[1.05] sm:text-5xl md:text-6xl lg:text-8xl font-bold font-sans tracking-tight !text-white text-white! drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] text-balance">
            Smart Networking
          </h1>

          {/* Subtitle */}
          <div className="hero-subtitle max-w-2xl">
            <p className="text-[15px] sm:text-lg !text-white/95 text-white! font-medium leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.85)]">
              A Smart Home or Office is only as good as its Network. With
              professionally designed Networking Solutions, MAKc Automation
              ensures Strong, Secure, and Uninterrupted Connectivity across
              every corner of your space. Designed for Homes, Villas,
              Apartments, Offices, and Commercial Spaces.
              <img
                src={getImageUrl("star.webp")}
                alt="Five-star rating icon representing premium networking and automation services"
                title="5 Star Networking Solutions"
                aria-hidden="true"
                className="w-5 h-5 sm:w-6 sm:h-6 inline-block ml-2 mb-1 select-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]"
              />
            </p>
          </div>

          {/* Features check list */}
          <div className="space-y-1 pt-1 sm:space-y-4 sm:pt-2">
            {[
              "High-Speed Gigabit throughput & Low-Latency Routing",
              "Reliable Mesh Configurations to eliminate dead zones",
              "Uninterrupted network across all Devices & Spaces",
            ].map((text, idx) => (
              <div
                key={idx}
                className="hero-check flex items-start gap-3 sm:items-center"
              >
                <div className="mt-0.5 sm:mt-0 flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500 !text-white text-white! shrink-0 shadow-md">
                  <svg
                    className="w-3.5 h-3.5 stroke-[3] !text-white text-white!"
                    style={{ color: "#ffffff", stroke: "#ffffff" }}
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
                <span className="!text-white text-white! font-medium text-[13px] leading-snug sm:text-base drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)]">
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
