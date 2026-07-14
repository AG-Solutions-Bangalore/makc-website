import { Sun, ShieldCheck, Volume2, Wifi, Zap } from "lucide-react";
import React from "react";

// Import images
import imgAutomation from "../../../assets/images/home_v2/service_automation.webp";
import imgLighting from "../../../assets/images/home_v2/service_lighting.webp";
import imgSecurity from "../../../assets/images/home_v2/service_security.webp";
import imgNetworking from "../../../assets/images/home_v2/service_networking.webp";
import imgAudio from "../../../assets/images/home_v2/service_theatre.webp";
import imgEnergy from "../../../assets/images/home_v2/service_energy.webp";

// Custom icons matching luxury styles
function SmartHomeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <path d="M9 22V12h6v10" />
    </svg>
  );
}

export default function ServicesSectionV2() {
  const services = [
    {
      id: "automation",
      icon: SmartHomeIcon,
      title: "Smart Home Automation",
      description: "One-touch control for your entire home.",
      bgImage: imgAutomation,
    },
    {
      id: "lighting",
      icon: Sun,
      title: "Smart Lighting",
      description: "Create moods with intelligent lighting scenes.",
      bgImage: imgLighting,
    },
    {
      id: "security",
      icon: ShieldCheck,
      title: "Advanced Security",
      description:
        "AI-powered surveillance, smart locks and intrusion protection.",
      bgImage: imgSecurity,
    },
    {
      id: "networking",
      icon: Wifi,
      title: "Networking",
      description: "Enterprise-grade WiFi designed for luxury villas.",
      bgImage: imgNetworking,
    },
    {
      id: "audio",
      icon: Volume2,
      title: "Home Audio",
      description: "Multi-room sound that fills every corner with clarity.",
      bgImage: imgAudio,
    },
    {
      id: "electric",
      icon: Zap,
      title: "Home Electric",
      description: "Intelligent power distribution, backups and energy monitoring.",
      bgImage: imgEnergy,
    },
  ];

  return (
    <section
      id="solutions"
      className="relative w-full py-20 lg:py-28 border-t border-border-main overflow-hidden"
    >
      {/* Gradient background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F5F7FA] to-[#EBEFF5] dark:from-[#07152D] dark:via-[#051022] dark:to-[#01050E] transition-colors duration-300 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(10,132,255,0.08)_0%,rgba(10,132,255,0.03)_35%,transparent_70%)] dark:bg-[radial-gradient(circle_at_25%_25%,rgba(32,120,255,0.32)_0%,rgba(12,65,190,0.18)_22%,rgba(6,25,60,0.08)_48%,transparent_72%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_75%,rgba(10,132,255,0.04),transparent_70%)] dark:bg-[radial-gradient(circle_at_85%_75%,rgba(0,70,255,0.08),transparent_70%)] pointer-events-none" />

      <div className="relative mx-auto max-w-8xl px-4 sm:px-6 z-10">
        {/* Main Grid Layout: Intro Card + 3x2 Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 border border-border-main backdrop-blur-sm">
          {/* Left Column: Intro Section (Spans 4/12 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between p-8 sm:p-12 lg:p-14 bg-bg-main/40 dark:bg-bg-main/20 backdrop-blur-md border-b lg:border-b-0 lg:border-r border-border-main text-left reveal-on-scroll reveal-up" data-reveal-duration="0.8s">
            <div className="flex flex-col">
              <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-accent-blue uppercase">
                EXPERIENCE SMART LIVING
              </span>
 
              <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-extrabold text-text-main tracking-tight leading-tight">
                The Future <br />
                Doesn't Wait. <br />
                <span className="font-serif italic font-normal text-text-main">
                  Neither Should <br />
                  Your Home.
                </span>
              </h2>
            </div>
 
            <p className="mt-8 lg:mt-0 font-sans text-xs sm:text-sm text-text-muted leading-relaxed">
              Every room should anticipate your needs. <br />
              Walk in. Lights welcome you. <br />
              Climate adjusts automatically. <br />
              Music follows you. <br />
              Security protects silently. <br />
              Your home becomes intelligent <br />
              without looking technological.
            </p>
          </div>
 
          {/* Right Column: 6 Services Grid (Spans 8/12 cols with clean border gap) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 bg-border-main gap-[1px]">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  id={service.id}
                  className="relative group min-h-[260px] flex flex-col justify-start items-start p-6 sm:p-8 bg-bg-main overflow-hidden cursor-pointer transition-all duration-300 hover:bg-bg-surface reveal-on-scroll reveal-up"
                  data-reveal-delay={`${index * 80}ms`}
                  data-reveal-duration="0.7s"
                >
                  {/* Card Background Image with Hover Zoom */}
                  <div className="absolute inset-0 z-0 group-hover:scale-105 transition-all duration-500">
                    <img
                      src={service.bgImage}
                      alt={service.id === "security" ? "Smart Home Security System" : service.id === "networking" ? "Home Networking Solutions" : service.title}
                      className="w-full h-full object-cover object-center filter transition-all duration-500"
                    />
                    {/* Shadow overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-bg-main via-bg-main/80 to-transparent" />
                  </div>

                  {/* Card Top: Icon (Accent Blue) */}
                  <div className="relative z-10 text-left">
                    <div className="text-accent-blue group-hover:text-accent-blue/80 transition-all duration-300 shrink-0 flex items-center justify-start w-12 h-12">
                      <Icon className="h-10 w-10 stroke-[1.25]" />
                    </div>
                  </div>

                  {/* Card Body: Text info (Stacked right below icon) */}
                  <div className="relative z-10 text-left mt-4 flex-1 flex flex-col justify-start w-full max-w-[210px]">
                    <h3 className="font-sans text-lg font-bold text-text-main group-hover:text-accent-blue transition-colors duration-300 max-w-[160px]">
                      {service.title}
                    </h3>
                    <p className="mt-3 font-sans text-xs sm:text-[13px] text-text-muted leading-relaxed font-normal group-hover:text-text-main transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
