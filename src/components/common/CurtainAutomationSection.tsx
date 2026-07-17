import AutomationMosaicSection from "./AutomationMosaicSection";

const types = [
  "Automatic open and close",
  "Time-based and sunlight-based control",
];

const features = ["Privacy control", "One-touch and voice commands"];

const images = [
  { src: "Curtain Automation.webp", alt: "Circadian curtain automation in master bedroom" },
  { src: "service_automation.webp", alt: "Sleek automatic blind track details" },
  { src: "project_villas.webp", alt: "Luxury villa bedroom with smart curtains" },
];

export default function CurtainAutomationSection() {
  return (
    <AutomationMosaicSection
      title="Curtain Automation"
      description="Automate curtains and blinds for comfort, privacy, and energy efficiency."
      types={types}
      features={features}
      suitableText="Perfect for bedrooms, living rooms, conference rooms, and large window areas."
      images={images}
      imagePosition="right"
      prefix="curt"
      serviceName="Curtain Automation"
    />
  );
}
