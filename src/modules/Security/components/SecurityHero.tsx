import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import { getImageUrl } from "@/utils/image";

export default function SecurityHero() {
  const heroRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

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
        )
        .from(
          ".hero-cta",
          { y: 20, autoAlpha: 0, duration: 0.6 },
          "-=0.4",
        );
    },
    { scope: heroRef },
  );

  return (
    <section ref={heroRef} className="relative w-full overflow-hidden">
      {/* ======================================================== */}
      {/* DESKTOP HERO (hidden lg:flex) — 100% Unchanged Desktop   */}
      {/* ======================================================== */}
      <div
        className="hidden lg:flex relative w-full items-center justify-start bg-cover bg-no-repeat transition-colors duration-300 [background-position:90%_center] sm:bg-center min-h-screen py-0 overflow-hidden"
        style={{
          backgroundImage: `url('${getImageUrl("security_banner.webp")}')`,
        }}
      >
        {/* Dark overlay across both light and dark mode for consistent premium contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/75 to-black/35 pointer-events-none" />

        {/* Bottom gradient blend into next section (dark mode only) */}
        <div className="hidden dark:block absolute bottom-0 left-0 right-0 h-24 md:h-36 bg-gradient-to-t from-bg-main to-transparent pointer-events-none z-[5]" />

        {/* Hero content container */}
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10 pt-24 pb-16 flex flex-col justify-center min-h-screen">
          <div className="max-w-2xl xl:max-w-3xl space-y-4 lg:space-y-5 my-auto">
            {/* Badge */}
            <div className="hero-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 !text-white text-white text-xs tracking-widest uppercase font-bold shadow-md w-fit">
              <span className="text-accent-blue font-extrabold text-sm leading-none">#1</span>
              <span>Choice for Smart Security</span>
            </div>

            {/* Main Heading */}
            <h1 className="hero-heading text-5xl lg:text-6xl xl:text-7xl font-bold font-sans tracking-tight !text-white text-white leading-[1.05] drop-shadow-[0_3px_12px_rgba(0,0,0,0.85)] text-balance">
              Security <br />
              <span className="text-accent-blue">System</span>
            </h1>

            {/* Subtitle */}
            <div className="hero-subtitle max-w-xl xl:max-w-2xl">
              <p className="text-base lg:text-lg !text-white/95 text-white/95 font-normal leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)]">
                Security is not just about Cameras — it's about knowing your Home
                or Business is Protected, even when you're not there. With
                Professionally Designed Smart Home and Commercial Security
                Systems, MAKc Automation helps you Monitor, Control, and Secure
                your Residential and Commercial Spaces from anywhere.
                <img
                  src={getImageUrl("star.webp")}
                  alt="Five-star rating icon representing premium smart security and surveillance solutions"
                  title="5 Star Smart Security Solutions"
                  aria-hidden="true"
                  className="w-5 h-5 inline-block ml-2 mb-1 select-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]"
                />
              </p>
            </div>

            {/* Features check list */}
            <div className="space-y-2 pt-1">
              {[
                "Intelligent Motion Detection & Threat Classification",
                "Seamless Remote Access & Real-Time Monitoring via Mobile apps",
                "Instant Alerts, Local Sirens, and Automatic Emergency Actions",
              ].map((text, idx) => (
                <div
                  key={idx}
                  className="hero-check flex items-center gap-3"
                >
                  <div className="flex items-center justify-center w-5.5 h-5.5 rounded-full bg-[#00A551] text-white shrink-0 shadow-md">
                    <svg
                      className="w-3 h-3 stroke-[3] text-white"
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
                  <span className="!text-white text-white font-medium text-base drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)] leading-snug">
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hero-cta flex items-center gap-5 pt-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-accent-blue hover:bg-accent-blue/90 !text-white text-white font-semibold text-sm shadow-md shadow-accent-blue/35 hover:shadow-lg hover:shadow-accent-blue/50 hover:scale-[1.02] active:scale-95 transition-all duration-200 group cursor-pointer w-auto"
              >
                <span>Get a Free Consultation</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href="#security-solutions"
                onClick={(e) => {
                  e.preventDefault();
                  const target =
                    document.querySelector("#security-solutions") ||
                    document.querySelector("section:nth-of-type(2)");
                  if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="inline-flex items-center justify-center gap-2.5 text-white/90 !text-white/90 hover:!text-white font-medium text-sm transition-colors group cursor-pointer py-1"
              >
                <div className="w-10 h-10 rounded-full border border-white/40 group-hover:border-white group-hover:bg-white/10 flex items-center justify-center transition-all duration-200 shadow-sm shrink-0">
                  <Play className="w-3.5 h-3.5 fill-white text-white ml-0.5" />
                </div>
                <span>See How It Works</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* MOBILE / TABLET HERO (flex lg:hidden) — Homepage Flow   */}
      {/* ======================================================== */}
      <div className="flex lg:hidden flex-col justify-between w-full relative bg-bg-main overflow-hidden h-[100svh] min-h-[100svh] max-h-[100svh]">
        {/* Top Hero Image Showcase */}
        <div className="relative w-full flex-1 min-h-[220px] overflow-hidden bg-slate-900">
          <img
            src={getImageUrl("security_banner.webp")}
            alt="Smart Home Security Installation in Bangalore"
            className="absolute inset-0 w-full h-full object-cover object-[90%_center]"
            loading="eager"
            fetchPriority="high"
          />
          {/* Top vignette for Header readability */}
          <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-black/70 via-black/20 to-transparent pointer-events-none z-10" />

          {/* Top-Left #1 Badge (Under Header) */}
          <div className="absolute top-[72px] left-4 sm:left-6 z-20 pointer-events-none">
            <div className="inline-flex items-center gap-1.5 border border-white/25 bg-black/60 backdrop-blur-md rounded-full px-3 py-1 select-none shadow-md">
              <span className="text-accent-blue font-extrabold text-xs leading-none">
                #1
              </span>
              <span className="text-[10px] font-sans font-bold tracking-wider uppercase text-white">
                Choice for Smart Security
              </span>
            </div>
          </div>

          {/* Bottom gradient fade into page background */}
          <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-bg-main via-bg-main/60 to-transparent pointer-events-none z-10" />
        </div>

        {/* Bottom Content Area on bg-bg-main */}
        <div className="-mt-8 relative z-20 px-5 sm:px-8 pb-[calc(1.25rem+env(safe-area-inset-bottom))] sm:pb-8 flex flex-col text-left max-w-lg mx-auto w-full shrink-0">
          {/* Editorial Headline */}
          <h1 className="text-[24px] sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.2]">
            <span className="block">Security</span>
            <span className="block text-accent-blue mt-0.5">System</span>
          </h1>

          {/* Subtitle / Narrative */}
          <p className="mt-2 text-xs sm:text-[13px] text-slate-600 dark:text-slate-400 font-normal leading-relaxed">
            Security is not just about Cameras — it's about knowing your Home or Business is Protected 24/7.
          </p>

          {/* CTA Buttons */}
          <div className="mt-4 flex items-center gap-2.5">
            <Link
              to="/contact"
              className="flex-1 py-2.5 px-4 rounded-full bg-accent-blue hover:bg-accent-blue/90 active:scale-[0.98] text-white font-sans font-bold text-xs tracking-wide shadow-[0_4px_16px_rgba(10,132,255,0.3)] flex items-center justify-center gap-1.5 transition-all cursor-pointer whitespace-nowrap"
            >
              <span>Free Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <a
              href="#security-solutions"
              onClick={(e) => {
                e.preventDefault();
                const target =
                  document.querySelector("#security-solutions") ||
                  document.querySelector("section:nth-of-type(2)");
                if (target) {
                  target.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="py-2 px-3 rounded-full border border-slate-200 dark:border-white/15 bg-white/80 dark:bg-white/5 text-slate-700 dark:text-slate-200 text-xs font-medium flex items-center gap-1.5 shrink-0 transition-colors shadow-xs"
            >
              <div className="w-5 h-5 rounded-full bg-accent-blue/15 flex items-center justify-center text-accent-blue">
                <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
              </div>
              <span>How It Works</span>
            </a>
          </div>

          {/* Features Auto-Scrolling Marquee (Full-Width with Left/Right Fades) */}
          <div className="mt-4 pt-3 border-t border-slate-200/70 dark:border-white/10 w-full">
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Security Protection
              </span>
            </div>

            {/* Full width breakout container with left & right gradient overlays */}
            <div className="relative -mx-5 sm:-mx-8 overflow-hidden py-0.5">
              {/* Left gradient overlay */}
              <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-12 bg-gradient-to-r from-bg-main to-transparent z-10 pointer-events-none" />

              {/* Right gradient overlay */}
              <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-12 bg-gradient-to-l from-bg-main to-transparent z-10 pointer-events-none" />

              {/* Marquee Track */}
              <div className="flex overflow-hidden w-full select-none">
                <div className="animate-hero-marquee items-center gap-2 pr-2">
                  {[
                    "Motion Detection & Threat Alerts",
                    "Remote Access & Real-Time Monitoring",
                    "Instant Alerts, Sirens & Emergency",
                  ].map((text, idx) => (
                    <div
                      key={`m1-${idx}`}
                      className="shrink-0 inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-white/80 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 text-slate-800 dark:text-slate-200 shadow-xs"
                    >
                      <div className="w-4 h-4 rounded-full bg-[#00A551] text-white flex items-center justify-center shrink-0">
                        <svg
                          className="w-2.5 h-2.5 stroke-[3] text-white"
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
                      <span className="whitespace-nowrap">{text}</span>
                    </div>
                  ))}
                </div>

                <div className="animate-hero-marquee items-center gap-2 pr-2" aria-hidden="true">
                  {[
                    "Motion Detection & Threat Alerts",
                    "Remote Access & Real-Time Monitoring",
                    "Instant Alerts, Sirens & Emergency",
                  ].map((text, idx) => (
                    <div
                      key={`m2-${idx}`}
                      className="shrink-0 inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-white/80 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 text-slate-800 dark:text-slate-200 shadow-xs"
                    >
                      <div className="w-4 h-4 rounded-full bg-[#00A551] text-white flex items-center justify-center shrink-0">
                        <svg
                          className="w-2.5 h-2.5 stroke-[3] text-white"
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
                      <span className="whitespace-nowrap">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
