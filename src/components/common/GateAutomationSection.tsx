import AutomationMosaicSection from "./AutomationMosaicSection";

const types = [
  "Sliding Gate Automation",
  "Rolling / Shutter Gate Automation",
  "Swing Gate Automation",
];

const features = [
  "Remote & App-Based Access",
  "Smooth and Silent Operation",
  "Safety Sensors & Obstruction Detection",
];

const images = [
  {
    src: "getAuto1.webp",
    alt: "Automated rolling shutter garage door layout",
    title: "Automatic Garage Door Automation",
  },
  {
    src: "service/GA1.webp",
    alt: "Automatic swing arm motors installed on driveway gates",
    title: "Automatic Swing Gate Automation",
  },
  {
    src: "service/GA2.webp",
    alt: "Automatic sliding gate automation system on a residential driveway",
    title: "Automatic Sliding Gate Automation",
  },
];

export default function GateAutomationSection() {
  return (
    <AutomationMosaicSection
      title="Gate Automation"
      description="Automate your Gates and Shutters for Security, Safety, and Convenience."
      types={types}
      features={features}
      suitableText="Perfect for Residential Gates, Commercial Shutters, Security Checkpoints, and Private Driveways."
      images={images}
      imagePosition="left"
      prefix="gate"
      serviceName="Gate Automation"
      reelUrl="https://www.instagram.com/reel/DdNJx4tKGAK/"
      reelTitles={["Watch Gate Automation Reel on Instagram"]}
    />
  );
}