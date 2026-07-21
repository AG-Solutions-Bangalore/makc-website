// Smart LED Lighting Page

// Import module-specific components
import DimmingTuningSection from "../components/DimmingTuningSection";
import LightingHero from "../components/LightingHero";
import OutdoorLightingSection from "../components/OutdoorLightingSection";
import RGBMoodLightingSection from "../components/RGBMoodLightingSection";
import SceneBasedLightingSection from "../components/SceneBasedLightingSection";

import useSEO from "@/hooks/useSEO";

export default function LightingPage() {
  useSEO({
    title: "Smart LED Lighting for Home in Bangalore | MAKc Automation",
    description:
      "Smart LED lights, dimmers, energy-saving lighting and automation for modern homes. MAKc Automation offers expert LED selection and smart lighting solutions in Bangalore.",
    keywords: "led lights for home, home smart light",
    canonicalUrl: "https://makcautomations.com/index.php/lighting/",
    robots:
      "INDEX, FOLLOW, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, MAX-IMAGE-PREVIEW:LARGE",
  });

  return (
    <div className="min-h-screen bg-bg-main text-text-main overflow-hidden transition-colors duration-300">
      {/* CUSTOM HERO SECTION */}
      <LightingHero />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 pb-16">
        {/* Mood-Based Lighting SECTION */}
        <SceneBasedLightingSection />

        {/* RGB SECTION */}
        <RGBMoodLightingSection />

        {/* DIMMING & TUNING OF LIGHTS SECTION */}
        <DimmingTuningSection />

        {/* OUTDOOR & LANDSCAPE LIGHTING SECTION */}
        <OutdoorLightingSection />
      </div>
    </div>
  );
}
