import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { getImageUrl } from "@/utils/image";

export default function SecurityHero() {
  const heroRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Stagger entrance matching Automation/Security page hero animations
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
        backgroundImage: `url('${getImageUrl("security_banner.webp")}')`,
      }}
    >
      {/* Dark overlay across both light and dark mode for consistent premium contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 sm:via-black/40 to-black/20 pointer-events-none" />

      {/* Bottom gradient blend into next section (dark mode only so light mode doesn't wash out hero bottom) */}
      <div className="hidden dark:block absolute bottom-0 left-0 right-0 h-24 md:h-36 bg-gradient-to-t from-bg-main to-transparent pointer-events-none z-[5]" />

      {/* Hero content container */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10 pt-20 sm:pt-28 lg:pt-32 pb-8 sm:pb-14 lg:pb-20 flex flex-col justify-center min-h-[75vh] sm:min-h-[85vh] lg:min-h-screen">
        <div className="max-w-3xl space-y-6">
          {/* Badge */}
          <div className="hero-badge text-[11px] sm:text-xs tracking-widest uppercase font-bold !text-white text-white! drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] flex items-center gap-1.5">
            <span className="text-emerald-400 font-extrabold text-sm">#1</span>{" "}
            Choice for smart security
          </div>

          {/* Main Heading */}
          <h1 className="hero-heading text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold font-sans tracking-tight !text-white text-white! leading-[1.05] drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
            Security System
          </h1>

          {/* Subtitle */}
          <div className="hero-subtitle max-w-2xl">
            <p className="text-base sm:text-lg !text-white/95 text-white! font-medium leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.85)]">
              Security is not just about Cameras — it's about knowing your Home
              or Business is Protected, even when you're not there. With
              Professionally Designed Smart Home and Commercial Security Systems,
              MAKc Automation helps you Monitor, Control, and Secure your Residential and Commercial Spaces from anywhere.
              <img
                src={getImageUrl("star.webp")}
                alt="Five-star rating icon representing premium smart security and surveillance solutions"
                title="5 Star Smart Security Solutions"
                aria-hidden="true"
                className="w-6 h-6 inline-block ml-2 mb-1 select-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]"
              />
            </p>
          </div>

          {/* Features check list */}
          <div className="space-y-4 pt-2">
            {[
              "Intelligent Motion Detection & Threat Classification",
              "Seamless Remote Access & Real-Time Monitoring via Mobile apps",
              "Instant Alerts, Local Sirens, and Automatic Emergency Actions",
            ].map((text, idx) => (
              <div key={idx} className="hero-check flex items-center gap-3">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500 !text-white text-white! shrink-0 shadow-md">
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
                <span className="!text-white text-white! font-medium text-sm sm:text-base drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)]">
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
