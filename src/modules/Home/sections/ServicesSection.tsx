import {
  Home,
  Lightbulb,
  ShieldCheck,
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
  },
  {
    id: "security",
    icon: ShieldCheck,
    title: "Advanced Security",
    description:
      "AI-powered surveillance, smart locks and intrusion protection.",
    bgImage: "/images/security.avif",
    link: "/security",
    linkTitle: "Smart Home Security Systems",
    imgTitle: "Advanced Smart Home Security Systems",
    isWide: false,
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
  },
];

export default function ServicesSection() {
  return (
    <section
      id="solutions"
      className="relative w-full py-12 sm:py-16 bg-[#faf8f5] dark:bg-[#070e18] border-t border-border-main transition-colors duration-500 overflow-hidden"
    >
      {/* Top statistics section */}
      <StatsSectionV2 />

      {/* Subtle ambient lighting glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_35%,rgba(10,132,255,0.05)_0%,transparent_50%),radial-gradient(circle_at_85%_75%,rgba(10,132,255,0.04)_0%,transparent_50%)] pointer-events-none" />

      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-10 items-stretch">
          {/* Left Column: Brand Story & Value Indicators */}
          <div className="lg:col-span-4 xl:col-span-4 flex flex-col justify-between text-left py-2">
            <div>
              {/* Main Headline */}
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] xl:text-[44px] font-bold text-text-main tracking-tight leading-[1.12]">
                <span className="block">Complete Smart</span>
                <span className="block italic font-normal font-serif">
                  Home Automation
                </span>
                <span className="block font-bold text-accent-blue">
                  Solutions
                </span>
              </h2>

              {/* Description Paragraph */}
              <p className="mt-4 sm:mt-5 font-sans text-sm sm:text-[15px] text-text-muted leading-relaxed max-w-md">
                Every room should anticipate your needs. Walk in. Lights welcome
                you. Climate adjusts automatically. Music follows you. Security
                protects silently. Your home becomes intelligent without looking
                technological.
              </p>

              {/* Primary CTA Button */}
              <div className="mt-6 sm:mt-7">
                <Link
                  to="/automation"
                  title="Explore All Smart Home Solutions"
                  className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-accent-blue hover:bg-[#0070e0] text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-[0_4px_18px_rgba(10,132,255,0.4)] hover:shadow-[0_6px_24px_rgba(10,132,255,0.55)] hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span className="text-white! !text-white font-bold tracking-wide">
                    Explore All Solutions
                  </span>
                  <ArrowRight className="w-4 h-4 text-white! !text-white transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Bottom 3 Value Proposition Badges */}
            <div className="mt-8 pt-6 border-t border-border-main/70 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-2 xl:gap-3">
              {/* Badge 1: Smarter Living */}
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-white/10 border border-slate-200/80 dark:border-white/10 flex items-center justify-center text-slate-700 dark:text-slate-200 shrink-0">
                  <Home className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] sm:text-[11px] font-bold tracking-wider text-text-main uppercase">
                    SMARTER LIVING
                  </span>
                  <span className="text-[9px] sm:text-[10px] text-text-muted">
                    Comfort &amp; Convenience
                  </span>
                </div>
              </div>

              {/* Badge 2: Safer Homes */}
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-sky-50 dark:bg-sky-950/40 border border-sky-200/60 dark:border-sky-800/30 flex items-center justify-center text-accent-blue shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] sm:text-[11px] font-bold tracking-wider text-text-main uppercase">
                    SAFER HOMES
                  </span>
                  <span className="text-[9px] sm:text-[10px] text-text-muted">
                    24/7 Protection
                  </span>
                </div>
              </div>

              {/* Badge 3: Greener Tomorrow */}
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/60 dark:border-emerald-800/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                  <Leaf className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] sm:text-[11px] font-bold tracking-wider text-text-main uppercase">
                    GREENER TOMORROW
                  </span>
                  <span className="text-[9px] sm:text-[10px] text-text-muted">
                    Energy Efficient
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 6-Card Bento Grid (Asymmetric 1.55fr : 1fr : 1fr on desktop) */}
          <div className="lg:col-span-8 xl:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.55fr_1fr_1fr] gap-4 sm:gap-4 xl:gap-5">
            {services.map((service) => {
              const Icon = service.icon;
              const isWide = service.isWide;
              return (
                <Link
                  key={service.id}
                  to={service.link}
                  title={service.linkTitle}
                  id={service.id}
                  className={`group relative rounded-[20px] sm:rounded-[24px] overflow-hidden p-5 sm:p-6 flex flex-col justify-between cursor-pointer border border-slate-200/50 dark:border-white/10 shadow-[0_6px_20px_rgba(0,0,0,0.06)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.45)] hover:shadow-[0_14px_36px_rgba(0,0,0,0.18)] dark:hover:shadow-[0_18px_48px_rgba(0,0,0,0.65)] transition-all duration-500 min-h-[250px] sm:min-h-[265px] lg:min-h-[270px] xl:h-[285px] ${
                    isWide ? "sm:col-span-2 lg:col-span-1" : "sm:col-span-1"
                  }`}
                >
                  {/* Card Background Image with Subtle Hover Scale */}
                  <img
                    src={service.bgImage}
                    alt={service.title}
                    title={service.imgTitle}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />

                  {/* Dark Ambient Vignette Gradient Overlay for Crisp Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/35 pointer-events-none transition-opacity duration-300 group-hover:opacity-90" />

                  {/* Top: Frosted Translucent Icon Badge */}
                  <div className="relative z-10 w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-black/45 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/95 shadow-sm transition-transform duration-300 group-hover:scale-105">
                    <Icon className="w-5 h-5 stroke-[1.8]" />
                  </div>

                  {/* Mid-Lower: Title & Description */}
                  <div className="relative z-10 mt-auto pt-4 text-left">
                    <h3 className="font-sans text-base sm:text-lg lg:text-xl font-bold text-white tracking-tight leading-snug drop-shadow-sm">
                      {service.title}
                    </h3>
                    <p className="mt-1.5 font-sans text-xs sm:text-[13px] text-white/80 leading-relaxed font-normal line-clamp-2 max-w-[95%]">
                      {service.description}
                    </p>

                    {/* Bottom Action: View More with Circular Arrow Button */}
                    <div className="mt-3.5 pt-3 flex items-center justify-between border-t border-white/15">
                      <span className="text-xs sm:text-[13px] font-medium text-white/90 group-hover:text-white transition-colors duration-200 underline underline-offset-4 decoration-white/40 group-hover:decoration-white">
                        View More
                      </span>
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/40 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-300 shadow-sm shrink-0">
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
