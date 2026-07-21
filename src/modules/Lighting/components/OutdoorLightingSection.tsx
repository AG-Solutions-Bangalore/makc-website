import AutomationMosaicSection from "@/components/common/AutomationMosaicSection";

const includesList = [
  "Garden lighting",
  "Compound & pathway lights",
  "Facade & elevation lighting",
  "Time-based outdoor lighting",
];

const images = [
  {
    src: "outdoorImage1.webp",
    alt: "Luxury villa entrance facade with automated exterior lighting",
  },
  {
    src: "outdoorImage2.webp",
    alt: "Warm spots and accent lighting in modern living room",
  },
  {
    src: "service_lighting.webp",
    alt: "Smart garden and facade lighting controls",
  },
];

export default function OutdoorLightingSection() {
  return (
    <AutomationMosaicSection
      title="Outdoor & Landscape Lighting"
      description="Automate exterior lights for security and aesthetics."
      types={includesList}
      suitableText="Lights operate automatically based on time, daylight intensity, or custom schedules."
      images={images}
      imagePosition="left"
      prefix="out"
      serviceName="Outdoor & Landscape Lighting"
    />
  );
}
