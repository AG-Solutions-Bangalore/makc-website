import AutomationMosaicSection from "./AutomationMosaicSection";

const types = [
  "Smart switch boards",
  "Fan speed control",
  "Appliance automation",
  "RGB and mood lighting",
];

const features = [
  "Scheduling and load management",
  "Sensor-based lights",
  "Mood-Based Lighting control",
];

const images = [
  {
    src: "electric automation.webp",
    alt: "Bedside wall-mounted tactile smart touch automation panel",
  },
  { src: "service_automation.webp", alt: "Smart switches and panels setup" },
  { src: "smarter_way_bg.webp", alt: "Modern living room lighting scene" },
];

export default function ElectricalAutomationSection() {
  return (
    <AutomationMosaicSection
      title="Electrical Automation"
      description="Control your lighting and electrical systems with ease using touch panels, mobile apps, or voice commands."
      types={types}
      features={features}
      suitableText="Works for new homes, retrofit automation projects, and small commercial spaces such as offices and studios."
      images={images}
      imagePosition="right"
      prefix="elec"
      serviceName="Electrical Automation"
    />
  );
}
