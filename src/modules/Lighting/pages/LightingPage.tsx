// Smart LED Lighting Page

// Import module-specific components
import DimmingTuningSection from "../components/DimmingTuningSection";
import LightingHero from "../components/LightingHero";
import OutdoorLightingSection from "../components/OutdoorLightingSection";
import RGBMoodLightingSection from "../components/RGBMoodLightingSection";
import SceneBasedLightingSection from "../components/SceneBasedLightingSection";

import useSEO from "@/hooks/useSEO";
import { SEO_ROUTES } from "@/config/seoData";
import AutomationShowcase from "@/components/common/AutomationShowcase";
import { Sparkles, Palette, SunDim, Trees } from "lucide-react";
import { getImageUrl } from "@/utils/image";

const LIGHTING_SLIDES = [
  {
    id: "01",
    title: "Scene-Based Lighting",
    shortTitle: "Scenes",
    description:
      "Transform your space instantly with pre-set lighting scenes. Easily switch between Morning, Evening, Movie, or Party modes to create the perfect atmosphere.",
    image: getImageUrl("lightimage1.webp"),
    imageAlt: "Circadian ambient lighting layout for a modern smart home",
    imageTitle: "Circadian Smart Lighting",
    icon: Sparkles,
  },
  {
    id: "02",
    title: "Dimming & Tuning",
    shortTitle: "Dimming",
    description:
      "Smoothly adjust light intensity and color temperature from warm white to cool daylight, reducing eye strain and matching your natural circadian rhythm.",
    image: getImageUrl("smart_dimming_lighting.webp"),
    imageAlt: "Smart Architectural Dimmable LED Lighting Control Solution",
    imageTitle: "Architectural Dimmable LED Lighting",
    icon: SunDim,
  },
  {
    id: "03",
    title: "RGB Lighting",
    shortTitle: "RGB",
    description:
      "Express your style with millions of colors. Control brightness, warmth, and dynamic color-changing effects directly from your touch panel or smartphone.",
    image: getImageUrl("smart_rgb_lighting.webp"),
    imageAlt: "Smart RGB LED Mood Lighting System with Multi-Color Scene Control",
    imageTitle: "Smart RGB LED Mood Lighting",
    icon: Palette,
  },
  {
    id: "04",
    title: "Outdoor & Landscape Lighting",
    shortTitle: "Outdoor",
    description:
      "Enhance home curb appeal and security with automated exterior lighting. Program garden, compound, and facade lights to sync with sunset and sunrise.",
    image: getImageUrl("smart_outdoor_lighting.webp"),
    imageAlt:
      "High-Resolution Architectural Outdoor Landscape and Facade Lighting for Luxury Modern Villa",
    imageTitle: "Architectural Outdoor Landscape Lighting",
    icon: Trees,
  },
];

export default function LightingPage() {
  useSEO(SEO_ROUTES["/lighting"]);

  return (
    <div className="min-h-screen bg-bg-main text-text-main overflow-hidden transition-colors duration-300">
      {/* CUSTOM HERO SECTION */}
      <LightingHero />

      {/* FULL WIDTH AUTOMATION SHOWCASE SECTION */}
      <AutomationShowcase
        slides={LIGHTING_SLIDES}
        initialSlideId="01"
        eyebrow="Smart Lighting"
        heading={
          <>
            Intelligent light control <br />
            for a <span className="text-[#00A551]">smarter ambience</span>
          </>
        }
        introduction="Enhance your lifestyle and set the perfect mood with adaptive, automated lighting systems designed for your modern home."
        accentColor="#00A551"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-8 sm:pt-14 lg:pt-20">
        {/* DIMMING & TUNING OF LIGHTS SECTION */}
        <DimmingTuningSection />

        {/* Mood-Based Lighting SECTION */}
        <SceneBasedLightingSection />

        {/* RGB SECTION */}
        <RGBMoodLightingSection />

        {/* OUTDOOR & LANDSCAPE LIGHTING SECTION */}
        <OutdoorLightingSection />
      </div>
    </div>
  );
}
