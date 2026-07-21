import AutomationMosaicSection from "@/components/common/AutomationMosaicSection";

const scenes = [
  "Morning Mode",
  "Evening Relax Mode",
  "Movie / TV Mode",
  "Party Mode",
  "Night Mode",
  "Time-Based",
];

const images = [
  {
    src: "lightimage1.webp",
    alt: "Circadian ambient lighting layout",
  },
  {
    src: "lightimage2.webp",
    alt: "Warm lighting in modern dining room",
  },
  {
    src: "lightimage3.webp",
    alt: "Warm mood lights in a modern living room",
  },
];

export default function SceneBasedLightingSection() {
  return (
    <AutomationMosaicSection
      title="Scene-Based Lighting"
      description="Create different lighting environments for any occasion or time of day."
      types={scenes}
      suitableText="Perfect for creating relaxing environments, productivity zones, dinner parties, and automated night schedules."
      images={images}
      imagePosition="left"
      prefix="sbl"
      serviceName="Scene-Based Lighting"
    />
  );
}
