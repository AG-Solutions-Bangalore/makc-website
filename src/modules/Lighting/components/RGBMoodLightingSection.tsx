import AutomationMosaicSection from "@/components/common/AutomationMosaicSection";

const types = [
  "Bedrooms & kids rooms",
  "Living rooms",
  "Home theatres",
  "Accent walls & false ceilings",
];

const images = [
  { src: "rgbmod.webp", alt: "Circadian RGB luxury lighting with warm tone in modern living room layout" },
  { src: "service_lighting.webp", alt: "Smart light control interface panel" },
  { src: "project_apartments.webp", alt: "Color-changing RGB LED strip lights" },
];

export default function RGBMoodLightingSection() {
  return (
    <AutomationMosaicSection
      title="RGB & Mood Lighting"
      description="Create ambience and personality with dynamic lighting."
      types={types}
      suitableText="Choose colours, brightness, and effects directly from your phone or panel."
      images={images}
      imagePosition="right"
      prefix="rgb"
      serviceName="RGB & Mood Lighting"
    />
  );
}
