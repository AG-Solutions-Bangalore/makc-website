import AutomationMosaicSection from "@/components/common/AutomationMosaicSection";

const types = [
  "Wall-mounted volume controllers",
  "Centralized touch screens",
  "Siri, Alexa, and Google voice integration",
];

const features = [
  "Adjust volume in any room with one tap",
  "Trigger wake-up playlists automatically",
  "Mute audio instantly during incoming calls",
];

const images = [
  {
    src: "service_automation.webp",
    alt: "Touch screen automation control panel",
  },
  { src: "project_villas.webp", alt: "Wall-mounted smart switch controls" },
  { src: "smarter_way_bg.webp", alt: "Living room automation setup" },
];

export default function AudioControlsSection() {
  return (
    <AutomationMosaicSection
      title="Intuitive Audio Controls"
      description="Control your audio zones using custom touchpads, smartphone apps, or simple voice commands."
      types={types}
      features={features}
      suitableText="Integrate directly with your main smart home app, physical volume knobs, and standard voice assistants."
      images={images}
      imagePosition="left"
      prefix="ctrl"
      serviceName="Intuitive Audio Controls"
    />
  );
}
