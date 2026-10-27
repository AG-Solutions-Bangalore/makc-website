import AutomationMosaicSection from "./AutomationMosaicSection";

const types = [
  "Automatic Open and Close",
  "Time-Based and Sunlight-Based control",
];

const features = ["Privacy Control", "One-Touch and Voice Commands"];

const images = [
  {
    src: "curtain_automation.webp",
    alt: "Smart curtain and motorized blind automation in luxury home",
    title: "Smart Motorized Curtain Automation",
  },
  {
    src: "service/CA1.webp",
    alt: "Sleek automatic blind track details",
    title: "Motorized Smart Blinds",
  },
  {
    src: "service/CA2.webp",
    alt: "Luxury villa bedroom with smart curtains",
    title: "Luxury Smart Villa Bedroom",
  },
];

export default function CurtainAutomationSection() {
  return (
    <AutomationMosaicSection
      title="Curtain Automation"
      description="Automate Curtains and Blinds for Comfort, Privacy, and Energy Efficiency."
      types={types}
      features={features}
      suitableText="Perfect for Bedrooms, Living rooms, Conference rooms, and Large Window areas."
      images={images}
      imagePosition="left"
      prefix="curt"
      serviceName="Curtain Automation"
      reelUrl="https://www.instagram.com/reel/De9Hhj3K0bq"
      reelTitles={["Watch Curtain Automation Reel on Instagram"]}
    />
  );
}
