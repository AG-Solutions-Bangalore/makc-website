import AutomationMosaicSection from "./AutomationMosaicSection";

const types = [
  "Video Door Bell",
  "Indoor Monitor",
  "Smart Door Lock",
  "Smart Gate Lock",
];

const features = [
  "Two-way communication with visitors",
  "Unlock doors from anywhere in the world",
  "Instant mobile notifications",
  "Secure app-based, PIN, or biometric access",
];

const images = [
  {
    src: "service_security.webp",
    alt: "Smart door automation showing a video door bell and camera monitoring",
  },
  { src: "service_automation.webp", alt: "Touch screen automation control panel" },
  { src: "project_villas.webp", alt: "Entrance gate of a modern smart villa" },
];

export default function DoorAutomationSection() {
  return (
    <AutomationMosaicSection
      title="Door Automation"
      description="Manage access to your space from anywhere with smart door automation."
      types={types}
      features={features}
      suitableText="Suitable for homes, offices, and controlled-entry commercial properties."
      images={images}
      imagePosition="right"
      prefix="door"
      serviceName="Door Automation"
    />
  );
}
