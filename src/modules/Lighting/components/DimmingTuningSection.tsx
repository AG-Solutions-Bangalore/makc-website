import AutomationMosaicSection from "@/components/common/AutomationMosaicSection";

const types = [
  "Smooth dimming control",
  "Preset brightness levels",
  "Night-friendly low-light modes",
];

const images = [
  { src: "dimeLight.webp", alt: "Dimming and color tuning of LED lights in modern luxury lobby area layout" },
  { src: "service_lighting.webp", alt: "Smart mood lighting controller installation" },
  { src: "project_villas.webp", alt: "Dimmable architectural cove lighting" },
];

export default function DimmingTuningSection() {
  return (
    <AutomationMosaicSection
      title="Dimming & Tuning of Lights"
      description="Adjust lighting intensity smoothly for comfort and mood."
      types={types}
      suitableText="Perfect for bedrooms, living rooms, and conference areas."
      images={images}
      imagePosition="left"
      prefix="dt"
      serviceName="Dimming & Tuning of Lights"
    />
  );
}
