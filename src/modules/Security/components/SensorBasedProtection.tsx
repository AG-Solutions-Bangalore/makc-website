import AutomationMosaicSection from "@/components/common/AutomationMosaicSection";

const checklist = [
  "Motion Detectors",
  "Door & Window Opening Sensors",
  "Glass Break Sensors",
  "Smoke, Temperature & Leakage Sensors",
];

const includesList = [
  "High-volume indoor & outdoor sirens",
  "Automatic alerts during intrusion or emergencies",
  "Weather-resistant and reliable devices",
];

const images = [
  { src: "sensor.webp", alt: "Tactile wall-mounted smart glass and vibration intrusion sensor" },
  { src: "service_security.webp", alt: "Wireless smoke detector and sirens installation" },
  { src: "project_commercial.webp", alt: "Commercial building safety sensor network" },
];

export default function SensorBasedProtection() {
  return (
    <AutomationMosaicSection
      title="Sensor-Based Protection"
      description="Detect security risks before they turn into emergencies."
      types={checklist}
      features={includesList}
      suitableText="These smart sensors operate continuously and send real-time alerts for both residential and commercial environments."
      images={images}
      imagePosition="right"
      prefix="sbp"
      serviceName="Sensor-Based"
    />
  );
}
