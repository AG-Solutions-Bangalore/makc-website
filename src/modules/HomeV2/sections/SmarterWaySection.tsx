import { useState } from "react";
import {
  Smartphone,
  Globe,
  Clock,
  ShieldCheck,
  Lightbulb,
  Lock,
  Video,
  Music,
  Thermometer,
  Home,
  Sun,
  Laptop,
  ArrowRight,
  Eye,
} from "lucide-react";
import GlowingLine from "@/components/common/GlowingLine";
import imgSmarterWayBg from "../../../assets/images/home_v2/smarter_way_bg.png";

// Custom SVG Garage icon
function GarageIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M3 10V21a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V10" />
      <path d="M6 14h12" />
      <path d="M6 18h12" />
      <path d="M12 2v8" />
      <path d="m9 5 3-3 3 3" />
    </svg>
  );
}

// Custom SVG Window Blinds / Shades icon
function ShadesIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M3 3h18" />
      <path d="M20 7H4" />
      <path d="M20 11H4" />
      <path d="M20 15H4" />
      <path d="M19 19v-4" />
      <path d="M5 19v-4" />
      <path d="M8 19h8" />
    </svg>
  );
}

export default function SmarterWaySection() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const features = [
    {
      icon: Smartphone,
      title: "One App",
      description: "Control all your devices from a single app.",
    },
    {
      icon: Globe,
      title: "Anywhere",
      description: "Access your home from anywhere in the world.",
    },
    {
      icon: Clock,
      title: "Anytime",
      description: "Real-time updates and instant notifications.",
    },
    {
      icon: ShieldCheck,
      title: "Always Secure",
      description: "Advanced encryption keeps your home and family safe.",
    },
  ];

  // Coordinates matching the relative layout & SVG line overlays
  const nodes = [
    { id: "lighting", icon: Lightbulb, label: "Lighting", x: 35, y: 15 },
    { id: "security", icon: Lock, label: "Security", x: 55, y: 22 },
    { id: "cameras", icon: Video, label: "Cameras", x: 7, y: 45 },
    { id: "shades", icon: ShadesIcon, label: "Shades", x: 55, y: 68 },
    { id: "garage", icon: GarageIcon, label: "Garage", x: 35, y: 75 },
    { id: "music", icon: Music, label: "Audio", x: 15, y: 68 },
    { id: "climate", icon: Thermometer, label: "Climate", x: 15, y: 22 },
  ];

  const phoneCards = [
    { id: "lighting", icon: Lightbulb, title: "Lighting", status: "On" },
    { id: "security", icon: Lock, title: "Security", status: "Armed" },
    { id: "climate", icon: Thermometer, title: "Climate", status: "24°C" },
    { id: "cameras", icon: Video, title: "Cameras", status: "4 Active" },
    { id: "music", icon: Music, title: "Music", status: "Playing" },
    { id: "garage", icon: GarageIcon, title: "Garage", status: "Closed" },
  ];

  return (
    <section
      id="smarter-way"
      className="relative w-full bg-bg-main py-20 lg:py-28 border-t border-border-main overflow-hidden"
    >
      {/* Background Parallax Asset */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img
          src={imgSmarterWayBg}
          alt="Smart Home At Night"
          className="w-full h-full object-cover object-center filter opacity-15 dark:opacity-40 transition-opacity duration-300"
        />
        {/* Gradients to blend sections */}
        <div className="absolute inset-0 bg-gradient-to-r from-bg-main via-bg-main/80 to-bg-main/20 md:bg-gradient-to-r md:from-bg-main md:via-bg-main/75 md:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-transparent to-bg-main/30" />
      </div>

      <div className="relative mx-auto max-w-8xl px-4 sm:px-12 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          {/* Left Panel: Description and feature bullet grids (Spans 6/12) */}
          <div className="lg:col-span-6 flex flex-col text-left reveal-on-scroll reveal-left" data-reveal-duration="0.9s">
            <span className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.25em] text-accent-blue uppercase select-none mb-4">
              THE SMARTER WAY FORWARD
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-main tracking-tight leading-tight max-w-xl">
              Seamless Control. <br />
              <span className="font-serif italic font-normal text-accent-blue">
                Limitless Possibilities.
              </span>
            </h2>

            <GlowingLine
              direction="horizontal"
              length="w-20 sm:w-28"
              thickness="h-[1.5px]"
              className="mt-6 mb-8"
            />

            <p className="font-sans text-xs sm:text-sm text-text-muted leading-relaxed max-w-md mb-8">
              From one app to complete control — manage your home, your way.
              Anytime. Anywhere.
            </p>

            {/* Pill CTA button */}
            <div className="mb-14 lg:mb-20">
              <a
                href="/configurator"
                className="inline-flex items-center gap-3 border border-accent-blue/30 bg-accent-blue/5 hover:bg-accent-blue/15 text-text-main px-6 py-3.5 transition-all duration-300 text-xs font-bold tracking-widest apple-border-shine rounded-full uppercase select-none group"
              >
                <Smartphone className="h-5 w-5 text-accent-blue" />
                <span>Your Home. One Tap Away.</span>
                <ArrowRight className="h-5 w-5 text-accent-blue transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>

            {/* 4 Feature Columns with dividers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 lg:gap-y-0 lg:divide-x lg:divide-border-main/20">
              {features.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className={`flex flex-col items-start reveal-on-scroll reveal-up ${
                      index === 0
                        ? "lg:pr-6 lg:pl-0"
                        : index === features.length - 1
                          ? "lg:pl-6 lg:pr-0"
                          : "lg:px-6"
                    }`}
                    data-reveal-delay={`${index * 80}ms`}
                    data-reveal-duration="0.6s"
                  >
                    <div className="text-accent-blue apple-border-shine rounded-full p-2 mb-4 transition-transform duration-300 hover:scale-110">
                      <Icon className="h-9 w-9 stroke-[1.5]" />
                    </div>

                    <h4 className="font-sans text-xs font-bold text-text-main tracking-wider uppercase mb-2">
                      {item.title}
                    </h4>
                    <p className="font-sans text-[11px] text-text-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Panel: Interactive smart hub visualization (Spans 6/12) */}
          <div className="lg:col-span-6 w-full flex justify-center reveal-on-scroll reveal-right" data-reveal-duration="0.9s">
            {/* Visualizer Frame */}
            <div className="relative w-full max-w-[700px] h-[450px] sm:h-[500px] rounded-2xl   overflow-hidden flex items-center justify-center">
              {/* Parallax View inside visualizer */}
              <div className="absolute inset-0 select-none pointer-events-none z-0">
                {/* <img
                  src={imgSmarterWayBg}
                  alt="Modern Home View"
                  className="w-full h-full object-cover object-center filter opacity-45"
                /> */}
                {/* <div className="absolute inset-0 bg-gradient-to-t from-bg-surface/90 via-transparent to-transparent" /> */}
              </div>

              {/* Dotted connecting lines SVG */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none z-10 select-none"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                {nodes.map((node) => (
                  <line
                    key={node.id}
                    x1="35"
                    y1="45"
                    x2={node.x}
                    y2={node.y}
                    stroke="#0A84FF"
                    strokeWidth="0.5"
                    strokeDasharray="2 2"
                    className={`transition-all duration-300 ${
                      activeCategory === node.id
                        ? "opacity-100 stroke-[1.5]"
                        : "opacity-35"
                    }`}
                  />
                ))}
              </svg>

              {/* Floating Network Nodes */}
              <div className="absolute inset-0 z-20 pointer-events-none select-none">
                {/* Center Hub */}
                <div
                  className="absolute flex items-center justify-center w-14 h-14 rounded-full border-2 border-accent-blue bg-bg-main shadow-[0_0_20px_rgba(10,132,255,0.6)] cursor-default pointer-events-auto"
                  style={{
                    left: "35%",
                    top: "45%",
                    transform: "translate(-50%, -50%)",
                  }}
                  title="Central Hub"
                >
                  <Home className="h-8 w-8 text-accent-blue" />
                </div>

                {/* Outer Circular Nodes */}
                {nodes.map((node) => {
                  const Icon = node.icon;
                  const isActive = activeCategory === node.id;
                  return (
                    <button
                      key={node.id}
                      onMouseEnter={() => setActiveCategory(node.id)}
                      onMouseLeave={() => setActiveCategory(null)}
                      className={`absolute flex items-center  justify-center w-12 h-12 rounded-full border bg-bg-main/80 backdrop-blur-md transition-all duration-300 pointer-events-auto cursor-pointer ${
                        isActive
                          ? "border-accent-blue text-accent-blue scale-110 shadow-[0_0_15px_rgba(10,132,255,0.4)]"
                          : "border-border-main text-text-muted hover:border-accent-blue/50 hover:text-text-main"
                      }`}
                      style={{
                        left: `${node.x}%`,
                        top: `${node.y}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                      aria-label={node.label}
                    >
                      <Icon className="h-5.5 w-5.5 stroke-[1.5]" />
                    </button>
                  );
                })}
              </div>

              {/* CSS Smartphone Mockup */}
              <div
                className="absolute w-[180px] h-[330px] sm:w-[210px] sm:h-[395px] bg-[#090D16] border-[5px] border-[#222B3E] rounded-[32px] shadow-2xl overflow-hidden flex flex-col justify-between p-2.5 z-30 transition-all duration-500 hover:scale-[1.02]"
                style={{ right: "8%", bottom: "8%" }}
              >
                {/* Phone Notch/Dynamic Island */}
                <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-16 h-3.5 bg-black rounded-full z-40 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-900/60 ml-auto mr-2" />
                </div>

                {/* Status Bar */}
                <div className="flex items-center justify-between text-[8px] font-bold text-text-main/70 px-2 mt-0.5 select-none pointer-events-none">
                  <span>9:41</span>
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1 bg-current rounded-none opacity-60" />
                    <span className="w-2.5 h-1.5 border border-current rounded-sm flex items-center p-0.5">
                      <span className="w-1 h-full bg-current rounded-none" />
                    </span>
                  </div>
                </div>

                {/* Phone Content Panel */}
                <div className="flex-1 mt-3 px-1 flex flex-col justify-between">
                  {/* Weather/Header widget */}
                  <div className="flex items-center justify-between px-1">
                    <div className="flex flex-col text-left">
                      <span className="text-[10px] font-bold text-text-main leading-tight flex items-center gap-1">
                        My Home <span className="text-[7px]">▼</span>
                      </span>
                      <span className="text-[7px] text-text-muted mt-0.5">
                        Automations Active
                      </span>
                    </div>

                    <div className="flex items-center gap-1 bg-[#151D2A] border border-[#232F42] py-0.5 px-1.5 rounded-full select-none">
                      <Sun className="h-2.5 w-2.5 text-amber-500" />
                      <span className="text-[7px] font-bold text-text-main">
                        26°C
                      </span>
                    </div>
                  </div>

                  {/* 3x2 Grid of controller cards */}
                  <div className="grid grid-cols-2 gap-1.5 my-2">
                    {phoneCards.map((card) => {
                      const Icon = card.icon;
                      const isActive = activeCategory === card.id;
                      return (
                        <div
                          key={card.id}
                          onMouseEnter={() => setActiveCategory(card.id)}
                          onMouseLeave={() => setActiveCategory(null)}
                          className={`p-2.5 rounded-xl border text-left transition-all duration-300 flex flex-col justify-between h-[60px] sm:h-[72px] cursor-pointer ${
                            isActive
                              ? "bg-accent-blue/10 border-accent-blue/40 shadow-[0_0_10px_rgba(10,132,255,0.25)]"
                              : "bg-[#101622]/90 border-[#1F2B3E] hover:border-accent-blue/30"
                          }`}
                        >
                          <Icon
                            className={`h-5.5 w-5.5 stroke-[1.5] ${isActive ? "text-accent-blue" : "text-text-muted"}`}
                          />
                          <div className="flex flex-col">
                            <span
                              className={`text-[8px] font-bold leading-none ${isActive ? "text-text-main" : "text-text-main/80"}`}
                            >
                              {card.title}
                            </span>
                            <span className="text-[7px] text-text-muted mt-0.5 leading-none">
                              {card.status}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Tab menu bar */}
                  <div className="border-t border-[#1C2737] pt-1.5 pb-0.5 flex items-center justify-between px-1 text-text-muted text-[7px] select-none pointer-events-none">
                    <div className="flex flex-col items-center gap-0.5 text-accent-blue">
                      <Home className="h-4.5 w-4.5 stroke-[1.5]" />
                      <span className="font-bold scale-90">Home</span>
                    </div>
                    <div className="flex flex-col items-center gap-0.5 hover:text-text-main transition-colors">
                      <Sun className="h-4.5 w-4.5 stroke-[1.5]" />
                      <span className="scale-90">Scenes</span>
                    </div>
                    <div className="flex flex-col items-center gap-0.5 hover:text-text-main transition-colors">
                      <Laptop className="h-4.5 w-4.5 stroke-[1.5]" />
                      <span className="scale-90">Devices</span>
                    </div>
                    <div className="flex flex-col items-center gap-0.5 hover:text-text-main transition-colors">
                      <Eye className="h-4.5 w-4.5 stroke-[1.5]" />
                      <span className="scale-90">Cameras</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
