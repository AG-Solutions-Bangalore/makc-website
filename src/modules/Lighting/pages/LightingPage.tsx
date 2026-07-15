// Smart LED Lighting Page
import {
  Users,
  Eye,
  Unlock,
  Zap,
  Sparkles,
  Clock,
  Sliders,
  Wrench,
  Search,
  HeartPulse,
  Shield,
} from "lucide-react";

// Import custom UI components
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

import OneTouchSection from "@/components/common/OneTouchSection";
import TrendingCarousel from "@/components/common/TrendingCarousel";

// Import module-specific components
import LightingHero from "../components/LightingHero";
import WhatIsLighting from "../components/WhatIsLighting";
import RGBMoodLightingSection from "../components/RGBMoodLightingSection";
import SceneBasedLightingSection from "../components/SceneBasedLightingSection";
import DimmingTuningSection from "../components/DimmingTuningSection";
import OutdoorLightingSection from "../components/OutdoorLightingSection";
import TimeBasedLightingSection from "../components/TimeBasedLightingSection";

// Import images
// const serviceLightingImg = getImageUrl("service_lighting.webp");
const whyChooseUsImg = getImageUrl("why_choose_us.webp");
const projectApartmentsImg = getImageUrl("project_apartments.webp");
const projectFarmhousesImg = getImageUrl("project_farmhouses.webp");
const projectPenthousesImg = getImageUrl("project_penthouses.webp");
const projectCommercialImg = getImageUrl("project_commercial.webp");

import useSEO from "@/hooks/useSEO";
import { getImageUrl } from "@/utils/image";


export default function LightingPage() {
  useSEO({
    title: "Smart LED Lighting for Home in Bangalore | MAKc Automation",
    description:
      "Smart LED lights, dimmers, energy-saving lighting, and automation for modern homes. MAKc Automation provides expert smart lighting solutions in Bangalore.",
    keywords: "led lights for home, home smart light",
    canonicalUrl: "https://makcautomations.com/index.php/lighting/",
    robots:
      "INDEX, FOLLOW, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, MAX-IMAGE-PREVIEW:LARGE",
  });

  const solutions = [
    {
      title: "Solution Consultant",
      icon: Users,
      desc: "Let our Solution Consultants help you choose the perfect lighting for your unique home. We'll customize a solution that fits your style and needs.",
    },
    {
      title: "Energy Optimization",
      icon: Zap,
      desc: "Our LED lights save energy and provide optimal brightness with our Home Smart Light solutions tailored to your floorplans.",
    },
    {
      title: "Support (24*7)",
      icon: Clock,
      desc: "Our support team is available 24/7 to assist you with any lighting needs you may have. Your satisfaction is our top priority.",
    },
    {
      title: "LED Selection",
      icon: Sliders,
      desc: "We select only the best quality LED lights. Our experts consider factors like color temperature and brightness levels to offer the perfect intensity.",
    },
    {
      title: "Installation and Services",
      icon: Wrench,
      desc: "Our company provides precision installation of Home Smart Light, done by skilled technicians for a hassle-free experience.",
    },
    {
      title: "Energy Survey",
      icon: Search,
      desc: "Reduce energy waste and boost efficiency by taking our Energy Survey. We'll examine your layout and provide customized recommendations.",
    },
  ];

  const oneTouchItems = [
    {
      title: "Simplify Tasks",
      desc: "Simplify all your daily routine tasks with just one click.",
      icon: Sparkles,
      iconColorClass:
        "text-accent-blue bg-accent-blue/10 border-accent-blue/20",
    },
    {
      title: "Remain Stress Free",
      desc: "Remain stress free, monitor your devices anywhere, anytime.",
      icon: Eye,
      iconColorClass:
        "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
    },
    {
      title: "Security Priority",
      desc: "Your Security is our Priority, get real-time updates instantly.",
      icon: Shield,
      iconColorClass: "text-red-500 bg-red-500/10 border-red-500/20",
    },
    {
      title: "Automate Events",
      desc: "Automate everyday events to save time and energy.",
      icon: Zap,
      iconColorClass: "text-amber-500 bg-amber-500/10 border-amber-500/20",
    },
    {
      title: "Access Anywhere",
      desc: "Access anywhere, anytime, turn on your devices before you reach home.",
      icon: Unlock,
      iconColorClass: "text-indigo-500 bg-indigo-500/10 border-indigo-500/20",
    },
  ];

  const trendingLighting = [
    {
      id: "light",
      name: "Smart Downlight",
      tag: "Recessed Ceiling Module",
      img: projectApartmentsImg,
      desc: "Ultra-thin smart downlights with tunable white spectrum (2700K - 6500K) and fluent cellular network coordination.",
    },
    {
      id: "light-w1",
      name: "Linear Pendant",
      tag: "Architectural Suspension Light",
      img: projectFarmhousesImg,
      desc: "Elegantly finished linear profile fixture providing dynamic direct-indirect illumination with smartphone dimming ranges.",
    },
    {
      id: "light-13",
      name: "light-13 Smart Bulb",
      tag: "Color RGBW LED Bulb",
      img: projectPenthousesImg,
      desc: "High-intensity multi-color RGBW smart light bulb that syncs with voice assistants, schedules, and custom audio layers.",
    },
    {
      id: "light-11",
      name: "light-11 Spotlight",
      tag: "Landscape Directional Light",
      img: projectCommercialImg,
      desc: "Weatherproof exterior accent spotlights designed to highlight facade textures, garden pathways, and security zones.",
    },
  ];

  return (
    <div className="min-h-screen bg-bg-main text-text-main overflow-hidden transition-colors duration-300">
      {/* CUSTOM HERO SECTION */}
      <LightingHero />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24 pb-16">
        {/* WHAT IS LIGHTING AUTOMATION SECTION */}
        <WhatIsLighting />

        {/* RGB & MOOD LIGHTING SECTION */}
        <RGBMoodLightingSection />

        {/* SCENE-BASED LIGHTING SECTION */}
        <SceneBasedLightingSection />

        {/* DIMMING & TUNING OF LIGHTS SECTION */}
        <DimmingTuningSection />

        {/* OUTDOOR & LANDSCAPE LIGHTING SECTION */}
        <OutdoorLightingSection />

        {/* TIME-BASED & SCHEDULED LIGHTING SECTION */}
        <TimeBasedLightingSection />

        {/* INTRO SECTION */}
        <section className="border-t border-border-main/50 pt-20 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="rounded-3xl overflow-hidden border border-border-main aspect-video bg-bg-surface relative group">
              <img
                src={whyChooseUsImg}
                alt="Controlling Smart Lighting via Mobile Phone"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-102 transition-transform duration-750"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>

            <div>
              <span className="text-accent-blue text-xs font-bold uppercase tracking-widest block mb-3">
                Exceptional Ambiance
              </span>
              <h2 className="text-4xl font-serif font-bold tracking-tight text-text-main mb-6 leading-tight">
                Ambiance and Innovation
              </h2>
              <p className="text-text-muted text-sm leading-relaxed mb-6 font-medium">
                MAKc Automation’s – Smart LED lights for Home and innovative
                lighting solutions. Our commitment to providing exceptional
                lighting goes beyond mere illumination; it’s about crafting the
                perfect ambiance and enhancing your home environment. Explore
                how our LED Lights for Home can transform your living spaces.
              </p>
              <div className="border-l-2 border-accent-blue pl-4 text-xs text-text-muted leading-relaxed font-mono">
                CRITICAL CRI RATINGS & SELECTIVE BULB SPECTRUM CHOSEN BY
                ENGINEERS
              </div>
            </div>
          </div>
        </section>

        {/* OUR LED SOLUTIONS (6-CARD GRID) */}
        <section className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent-blue text-xs font-bold uppercase tracking-widest block mb-3">
              Service Areas
            </span>
            <h2 className="text-4xl font-serif font-bold tracking-tight text-text-main">
              Our LED Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {solutions.map((sol, index) => {
              const IconComponent = sol.icon;
              return (
                <div
                  key={index}
                  className="bg-bg-surface border border-border-main p-6 sm:p-8 rounded-3xl flex flex-col justify-between transition-all hover:-translate-y-1 shadow-md"
                >
                  <div>
                    {/* Clean Rounded-Full Icon wrapper with Apple Shine */}
                    <div className="w-12 h-12 rounded-full border border-border-main bg-bg-main flex items-center justify-center text-accent-blue mb-6 apple-border-shine">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-text-main mb-3">
                      {sol.title}
                    </h3>
                    <p className="text-xs text-text-muted leading-relaxed">
                      {sol.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* LIGHTING FOR BETTER HEALTH & STATISTICS SECTION */}
        <section className="bg-bg-surface/30 border-y border-border-main/50 py-20 mb-24 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-border-main bg-accent-blue/10 flex items-center justify-center text-accent-blue apple-border-shine">
                  <HeartPulse className="w-5 h-5" />
                </div>
                <span className="text-accent-blue text-xs font-bold uppercase tracking-widest">
                  Health & Wellness
                </span>
              </div>
              <h2 className="text-4xl font-serif font-bold tracking-tight text-text-main leading-tight">
                Smart LED Lighting Company for Better Health
              </h2>
              <p className="text-sm text-text-muted leading-relaxed">
                Do you know, LED Brightness, color, number of LEDs and
                placement, really affect you and your family health? <br />
                <strong>
                  Yes! This is the fact from which many of us are still unaware.
                </strong>{" "}
                LED specifications directly impact our health. Thus, it is
                really necessary to make the right decision while selecting the
                lights for your home.
              </p>

              <div className="pt-4 border-t border-border-main/50 space-y-4 text-xs text-text-muted">
                <p>
                  <strong>
                    So, are you looking for Experts for your LED Lights for Home
                    Solution?
                  </strong>{" "}
                  <br />
                  MAKc Automation & Solutions delivers smart home automation and
                  LED lighting solutions with top technology. Our experts ensure
                  safe LED selection and placement, guiding you from
                  consultation to installation.
                </p>
                <p>
                  We offer Smart Home solutions to create a better living
                  experience for you and your family. Our Home Smart Light
                  solutions can help you save up to 55% on costs while
                  prioritizing your safety and budget. Our goal is to make your
                  home a comfortable and affordable sanctuary.
                </p>
                <p className="font-semibold text-text-main">
                  Why Our Smart LED Light for Home? Choosing the right lighting
                  solution is a decision that shouldn’t be taken lightly. At
                  MAKc Automation & Solutions, we understand the significance of
                  your choice and strive to provide you with compelling reasons
                  to choose our LED Light for Home.
                </p>
              </div>
            </div>

            {/* Statistics panel */}
            <div className="lg:col-span-5 space-y-6">
              {/* Stat 1 */}
              <div className="bg-bg-surface border border-border-main p-6 rounded-3xl flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-text-muted uppercase tracking-wider block font-bold">
                    Energy Optimized
                  </span>
                  <span className="text-base font-serif font-bold text-text-main">
                    Cost Saving
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-4xl font-bold text-accent-blue font-serif block">
                    35%
                  </span>
                  <span className="text-[9px] text-text-muted font-bold uppercase tracking-widest">
                    Energy Saving
                  </span>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="bg-bg-surface border border-border-main p-6 rounded-3xl flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-text-muted uppercase tracking-wider block font-bold">
                    Budget Protection
                  </span>
                  <span className="text-base font-serif font-bold text-text-main">
                    Hardware Cost
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-4xl font-bold text-accent-blue font-serif block">
                    30%
                  </span>
                  <span className="text-[9px] text-text-muted font-bold uppercase tracking-widest">
                    Lighting Cost Cut
                  </span>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="bg-bg-surface border border-border-main p-6 rounded-3xl flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-text-muted uppercase tracking-wider block font-bold">
                    Long-Term Service
                  </span>
                  <span className="text-base font-serif font-bold text-text-main">
                    Device Guarantee
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-4xl font-bold text-accent-blue font-serif block">
                    3 Years
                  </span>
                  <span className="text-[9px] text-text-muted font-bold uppercase tracking-widest">
                    Warranty
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* THING WE CONSIDER FOR LED SELECTION (ACCORDION) */}
        <section className="mb-24 max-w-4xl mx-auto pt-10">
          <div className="text-center mb-12">
            <span className="text-accent-blue text-xs font-bold uppercase tracking-widest block mb-3">
              Selection Principles
            </span>
            <h2 className="text-4xl font-serif font-bold tracking-tight text-text-main mb-4">
              Things We Consider for LED Selection
            </h2>
          </div>

          <div className="bg-bg-surface/50 border border-border-main rounded-3xl p-6 sm:p-8">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="lit-1" className="border-border-main/50">
                <AccordionTrigger className="text-base font-semibold text-text-main hover:text-accent-blue hover:no-underline py-5 text-left">
                  Lumens, not watts
                </AccordionTrigger>
                <AccordionContent className="text-sm text-text-muted leading-relaxed pb-5">
                  Modern LED lighting uses lumens to measure brightness output,
                  whereas legacy incandescent bulbs relied on wattage (power
                  draw). We choose configurations based on actual foot-candles
                  and lumens required for each specific space, maximizing
                  efficiency.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="lit-2" className="border-border-main/50">
                <AccordionTrigger className="text-base font-semibold text-text-main hover:text-accent-blue hover:no-underline py-5 text-left">
                  LED vs Incandescent
                </AccordionTrigger>
                <AccordionContent className="text-sm text-text-muted leading-relaxed pb-5">
                  LED lights run cooler, draw a fraction of the electricity, and
                  last up to 25 times longer than standard incandescent bulbs,
                  representing massive structural utility bill reductions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="lit-3" className="border-border-main/50">
                <AccordionTrigger className="text-base font-semibold text-text-main hover:text-accent-blue hover:no-underline py-5 text-left">
                  Choosing the right color LED
                </AccordionTrigger>
                <AccordionContent className="text-sm text-text-muted leading-relaxed pb-5">
                  Lighting color directly coordinates with circadian rhythms.
                  Warm white (2700K) is optimal for evening relaxation, natural
                  white (4000K) for kitchens, and cool white (5000K+) for work
                  and focus zones.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="lit-4" className="border-border-main/50">
                <AccordionTrigger className="text-base font-semibold text-text-main hover:text-accent-blue hover:no-underline py-5 text-left">
                  You'll pay more for an LED
                </AccordionTrigger>
                <AccordionContent className="text-sm text-text-muted leading-relaxed pb-5">
                  While modern smart LED fixtures have a higher upfront cost,
                  they pay for themselves inside the first 12-18 months due to
                  low power utilization and zero replacement maintenance cycles.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="lit-5" className="border-b-0">
                <AccordionTrigger className="text-base font-semibold text-text-main hover:text-accent-blue hover:no-underline py-5 text-left">
                  Choose the right housing - LEDs
                </AccordionTrigger>
                <AccordionContent className="text-sm text-text-muted leading-relaxed pb-5">
                  Heat dissipation is critical to LED durability. We select
                  fixtures featuring custom aluminum housing extrusions and heat
                  sinks to maintain semiconductor integrity over decades.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* REUSABLE ONE-TOUCH GRID */}
        <OneTouchSection
          title="Enjoy One-Touch Control of Everyday Life"
          subtitle="Here are just a few of the many ways you can use Smart Home can help you on a daily basis:"
          items={oneTouchItems}
        />

        {/* REUSABLE TRENDING CAROUSEL */}
        <TrendingCarousel
          title="Trending fixtures"
          brandLabel="MAKc Light"
          products={trendingLighting}
        />

        {/* REUSABLE BANNER CTA */}
        {/* <ConnectBanner
          title="Connect With Us"
          description="Our smart lighting engineers are ready to design your home fixtures. Contact us via phone or email for customized estimates."
        /> */}
      </div>
    </div>
  );
}
