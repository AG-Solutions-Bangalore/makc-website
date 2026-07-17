// Smart LED Lighting Page

// Import module-specific components
import DimmingTuningSection from "../components/DimmingTuningSection";
import LightingHero from "../components/LightingHero";
import OutdoorLightingSection from "../components/OutdoorLightingSection";
import RGBMoodLightingSection from "../components/RGBMoodLightingSection";
import SceneBasedLightingSection from "../components/SceneBasedLightingSection";

import WhatWeAutomateSection from "@/components/common/WhatWeAutomateSection";
import { getImageUrl } from "@/utils/image";
import useSEO from "@/hooks/useSEO";

const lightingSystems = [
  {
    title: "Touch panels",
    detail: "Control brightness, mood, and scenes via sleek touch-capacitive wall screens.",
    img: getImageUrl("Touch panels.webp"),
    link: "#dimming-tuning",
  },
  {
    title: "Voice Commands",
    detail: "Adjust lighting hands-free using intuitive voice assistants like Alexa or Google Home.",
    img: getImageUrl("Voice Commands.webp"),
    link: "#",
  },
  {
    title: "Mood Lighting",
    detail: "Dynamically set scenes for dining, movie nights, work, or relaxing periods.",
    img: getImageUrl("Mood Lighting.webp"),
    link: "#rgb-mood-lighting",
  },
  {
    title: "Scheduling",
    detail: "Sync lighting schedules with sunrise, sunset, or your custom daily routine.",
    img: getImageUrl("Scheduling.webp"),
    link: "#scene-based-lighting",
  },
];

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

  return (
    <div className="min-h-screen bg-bg-main text-text-main overflow-hidden transition-colors duration-300">
      {/* CUSTOM HERO SECTION */}
      <LightingHero />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24 pb-16">
        {/* WHAT IS LIGHTING AUTOMATION SECTION */}
        <WhatWeAutomateSection
          systems={lightingSystems}
          title="What is Lighting Automation"
          description="Lighting automation allows you to control lights using touch panels, mobile apps, sensors, schedules, or voice commands — instead of traditional switches. Lights respond automatically based on time, movement, scenes, or your daily routine."
          badgeText="Advanced Light Control"
          className="mb-24"
        />

        {/* RGB & MOOD LIGHTING SECTION */}
        <RGBMoodLightingSection />

        {/* SCENE-BASED LIGHTING SECTION */}
        <SceneBasedLightingSection />

        {/* DIMMING & TUNING OF LIGHTS SECTION */}
        <DimmingTuningSection />

        {/* OUTDOOR & LANDSCAPE LIGHTING SECTION */}
        <OutdoorLightingSection />
      </div>
    </div>
  );
}
