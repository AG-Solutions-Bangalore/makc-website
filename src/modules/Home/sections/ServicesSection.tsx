import {
  Home,
  Lightbulb,
  Shield,
  Wifi,
  Volume2,
  Zap,
  Leaf,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import StatsSectionV2 from "./StatsSection";

const services = [
  {
    id: "automation",
    icon: Home,
    title: "Smart Home Automation",
    description: "One-touch control for your entire home.",
    bgImage: "/images/automation.avif",
    link: "/automation",
    linkTitle: "Smart Home Automation Services",
    imgTitle: "Smart Home Automation Solutions in Bangalore",
    isWide: true,
    overlay: {
      left: "linear-gradient(to top right, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.30) 40%, rgba(0,0,0,0) 100%)",
      bottom:
        "linear-gradient(to top, rgba(0,0,0,0.60) 0%, rgba(0,0,0,0) 50%)",
    },
  },
  {
    id: "lighting",
    icon: Lightbulb,
    title: "Smart Lighting",
    description: "Create moods with intelligent lighting scenes.",
    bgImage: "/images/ligting.avif",
    link: "/lighting",
    linkTitle: "Smart Lighting Solutions",
    imgTitle: "Smart Lighting Installation Services",
    isWide: false,
    overlay: {
      left: "linear-gradient(to top right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.22) 50%, rgba(0,0,0,0) 100%)",
      bottom:
        "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.40) 45%, rgba(0,0,0,0) 100%)",
    },
  },
  {
    id: "security",
    icon: Shield,
    title: "Advanced Security",
    description:
      "AI-powered surveillance, smart locks and intrusion protection.",
    bgImage: "/images/security.avif",
    link: "/security",
    linkTitle: "Smart Home Security Systems",
    imgTitle: "Advanced Smart Home Security Systems",
    isWide: false,
    overlay: {
      left: "linear-gradient(to top right, rgba(0,0,0,0.58) 0%, rgba(0,0,0,0.24) 50%, rgba(0,0,0,0) 100%)",
      bottom:
        "linear-gradient(to top, rgba(0,0,0,0.90) 0%, rgba(0,0,0,0.42) 45%, rgba(0,0,0,0) 100%)",
    },
  },
  {
    id: "networking",
    icon: Wifi,
    title: "Networking",
    description: "Enterprise-grade WiFi designed for luxury villas.",
    bgImage: "/images/networking.avif",
    link: "/networking",
    linkTitle: "Home Networking Solutions",
    imgTitle: "Home Networking Solutions in Bangalore",
    isWide: true,
    overlay: {
      left: "linear-gradient(to top right, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.32) 40%, rgba(0,0,0,0) 100%)",
      bottom:
        "linear-gradient(to top, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0) 50%)",
    },
  },
  {
    id: "audio",
    icon: Volume2,
    title: "Home Audio",
    description: "Multi-room sound that fills every corner with clarity.",
    bgImage: "/images/audio.avif",
    link: "/audio",
    linkTitle: "Home Audio Solutions",
    imgTitle: "Premium Home Audio Installation",
    isWide: false,
    overlay: {
      left: "linear-gradient(to top right, rgba(0,0,0,0.30) 0%, rgba(0,0,0,0.08) 50%, rgba(0,0,0,0) 100%)",
      bottom:
        "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.25) 45%, rgba(0,0,0,0) 100%)",
    },
  },
  {
    id: "electric",
    icon: Zap,
    title: "Home Electrical",
    description:
      "Intelligent power distribution, backups and energy monitoring.",
    bgImage: "/images/electricals.avif",
    link: "/automation",
    linkTitle: "Smart Home Automation Services",
    imgTitle: "Smart Home Electrical Solutions",
    isWide: false,
    overlay: {
      left: "linear-gradient(to top right, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.10) 50%, rgba(0,0,0,0) 100%)",
      bottom:
        "linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.25) 45%, rgba(0,0,0,0) 100%)",
    },
  },
];

export default function ServicesSection() {
  return (
    <section
      id="solutions"
      className="relative w-full py-8 bg-bg-surface border-t border-border-main/40 transition-colors duration-500 overflow-hidden"
    >
      {/* Top statistics section */}
      <StatsSectionV2 />

      {/* Subtle ambient lighting glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_35%,rgba(10,132,255,0.04)_0%,transparent_50%),radial-gradient(circle_at_85%_75%,rgba(10,132,255,0.03)_0%,transparent_50%)] pointer-events-none" />

      <div className="relative p-5 rounded-xl bg-bg-card mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 z-10 border border-border-main/50">
        <div className="grid grid-cols-1 lg:grid-cols-[28%_1fr] gap-6 lg:gap-6 xl:gap-8 items-center">
          {/* Left Column: Brand Story & Value Indicators (~28% width, +10% width) */}
          <div className="flex flex-col justify-between text-left py-1">
            <div>
              {/* Eyebrow Tag with blue dash */}
              <div className="flex items-center gap-2 mb-2">
                <span className="w-5 h-[2px] bg-[#0070e0] inline-block rounded-full" />
                <span className="font-sans text-[10px] sm:text-[10.5px] font-bold tracking-[0.18em] text-[#0070e0] uppercase">
                  EXPERIENCE SMART LIVING
                </span>
              </div>

              {/* Main Headline with Serif Typography */}
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-[32px] xl:text-[36px] font-bold text-slate-900 dark:text-white tracking-tight leading-[1.12]">
                <span className="block">Complete Smart</span>
                <span className="block italic font-normal font-serif">
                  Home Automation
                </span>
                <span className="block font-bold text-[#0070e0] dark:text-[#38bdf8]">
                  Solutions
                </span>
              </h2>

              {/* Description Paragraph */}
              <p className="mt-2.5 sm:mt-3 font-sans text-xs sm:text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed max-w-[320px]">
                Every room should anticipate your needs. Walk in. Lights welcome
                you. Climate adjusts automatically. Music follows you. Security
                protects silently. Your home becomes intelligent without looking
                technological.
              </p>

              {/* Primary CTA Button */}
              <div className="mt-4">
                <Link
                  to="/automation"
                  title="Explore All Smart Home Solutions"
                  className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0070e0] hover:bg-[#005bb5] text-white font-medium text-xs sm:text-[13px] transition-all duration-300 shadow-[0_4px_14px_rgba(0,112,224,0.3)] hover:shadow-[0_6px_20px_rgba(0,112,224,0.45)] hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span className="text-white! !text-white font-semibold tracking-wide">
                    Explore All Solutions
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-white! !text-white transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Bottom 3 Value Proposition Badges */}
            <div className="mt-6 pt-3.5 border-t border-slate-200/80 dark:border-white/10 flex items-start justify-between gap-2 sm:gap-3">
              {/* Badge 1: Smarter Living */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1.5">
                <div className="w-7 h-7 sm:w-7.5 sm:h-7.5 rounded-lg bg-slate-100 dark:bg-white/10 border border-slate-200/80 dark:border-white/10 flex items-center justify-center text-slate-700 dark:text-slate-200 shrink-0">
                  <Home className="w-3.5 h-3.5 stroke-[1.8]" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[9.5px] sm:text-[10px] font-bold tracking-wider text-slate-900 dark:text-white uppercase leading-tight">
                    SMARTER LIVING
                  </span>
                  <span className="text-[8.5px] sm:text-[9px] text-slate-500 dark:text-slate-400 font-medium leading-tight">
                    Comfort &amp; Convenience
                  </span>
                </div>
              </div>

              {/* Badge 2: Safer Homes */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1.5">
                <div className="w-7 h-7 sm:w-7.5 sm:h-7.5 rounded-lg bg-sky-100/70 dark:bg-sky-950/50 border border-sky-200/80 dark:border-sky-800/40 flex items-center justify-center text-[#0070e0] dark:text-[#38bdf8] shrink-0">
                  <Shield className="w-3.5 h-3.5 stroke-[1.8]" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[9.5px] sm:text-[10px] font-bold tracking-wider text-slate-900 dark:text-white uppercase leading-tight">
                    SAFER HOMES
                  </span>
                  <span className="text-[8.5px] sm:text-[9px] text-slate-500 dark:text-slate-400 font-medium leading-tight">
                    24/7 Protection
                  </span>
                </div>
              </div>

              {/* Badge 3: Greener Tomorrow */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1.5">
                <div className="w-7 h-7 sm:w-7.5 sm:h-7.5 rounded-lg bg-emerald-100/70 dark:bg-emerald-950/50 border border-emerald-200/80 dark:border-emerald-800/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                  <Leaf className="w-3.5 h-3.5 stroke-[1.8]" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[9.5px] sm:text-[10px] font-bold tracking-wider text-slate-900 dark:text-white uppercase leading-tight">
                    GREENER TOMORROW
                  </span>
                  <span className="text-[8.5px] sm:text-[9px] text-slate-500 dark:text-slate-400 font-medium leading-tight">
                    Energy Efficient
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 6-Card Bento Grid (~72% width with 1.55fr : 1fr : 1fr layout) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.55fr_1fr_1fr] gap-2.5 sm:gap-2.5 lg:gap-2.5">
            {services.map((service) => {
              const Icon = service.icon;
              const isWide = service.isWide;
              return (
                <Link
                  key={service.id}
                  to={service.link}
                  title={service.linkTitle}
                  id={service.id}
                  className={`group relative rounded-[18px] sm:rounded-[20px] overflow-hidden p-3.5 sm:p-4 flex flex-col justify-between cursor-pointer border border-slate-200/50 dark:border-white/10 shadow-[0_3px_12px_rgba(0,0,0,0.06)] dark:shadow-[0_6px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_12px_30px_rgba(0,0,0,0.55)] transition-all duration-500 h-[185px] sm:h-[195px] lg:h-[200px] xl:h-[210px] ${
                    isWide ? "sm:col-span-2 lg:col-span-1" : "sm:col-span-1"
                  }`}
                >
                  {/* Card Background Image with Natural Contrast & Hover Scale */}
                  <img
                    src={service.bgImage}
                    alt={service.title}
                    title={service.imgTitle}
                    className="absolute inset-0 w-full h-full object-cover object-center brightness-[1.03] contrast-[1.04] transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />

                  {/* Separate per-card overlays: left for text contrast, bottom for fade */}
                  <div
                    className="absolute inset-0 pointer-events-none transition-opacity duration-300 group-hover:opacity-90"
                    style={{ backgroundImage: service.overlay.left }}
                  />
                  <div
                    className="absolute inset-0 pointer-events-none transition-opacity duration-300 group-hover:opacity-90"
                    style={{ backgroundImage: service.overlay.bottom }}
                  />

                  {/* Top: Subtle Translucent Frosted Glass Icon Badge */}
                  <div className="relative z-10 w-8 h-8 sm:w-8.5 sm:h-8.5 rounded-xl bg-black/25 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/95 shadow-sm transition-transform duration-300 group-hover:scale-105">
                    <Icon className="w-4 h-4 stroke-[1.8]" />
                  </div>

                  {/* Card Content Layout: Wide cards restrict text width & group actions on left; standard cards space-between */}
                  {isWide ? (
                    <div className="relative z-10 mt-auto pt-1 text-left max-w-[190px] sm:max-w-[210px]">
                      <h3 className="font-sans text-[15px] sm:text-base font-bold text-white tracking-tight leading-snug drop-shadow-sm">
                        {service.title}
                      </h3>
                      <p className="mt-0.5 font-sans text-[11px] sm:text-xs text-white/80 leading-tight font-normal line-clamp-2">
                        {service.description}
                      </p>

                      {/* Bottom Action: View More with Circular Arrow Button directly next to it */}
                      <div className="mt-2 flex items-center gap-2">
                        <span className="text-[11.5px] font-handwriting sm:text-xs font-medium text-white/90 group-hover:text-white transition-colors duration-200 group-hover:decoration-white">
                          View More
                        </span>
                        <div className="w-6 h-6 rounded-full border border-white/45 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-300 shadow-sm shrink-0">
                          <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="relative z-10 mt-auto pt-1 text-left w-full">
                      <h3 className="font-sans text-[15px] sm:text-base font-bold text-white tracking-tight leading-snug drop-shadow-sm">
                        {service.title}
                      </h3>
                      <p className="mt-0.5 font-sans leading-tight text-[11px] sm:text-xs text-white/80 leading-relaxed font-normal line-clamp-2">
                        {service.description}
                      </p>

                      {/* Bottom Action: View More on left, Circular Arrow on right */}
                      <div className="mt-2 flex items-center justify-between w-full">
                        <span className="text-[11.5px] font-handwriting sm:text-xs font-medium text-white/90 group-hover:text-white transition-colors duration-200 group-hover:decoration-white">
                          View More
                        </span>
                        <div className="w-6 h-6 rounded-full border border-white/45 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-300 shadow-sm shrink-0">
                          <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5" />
                        </div>
                      </div>
                    </div>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
