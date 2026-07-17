import AutomationMosaicSection from "@/components/common/AutomationMosaicSection";

const types = [
  "Home Mesh solutions",
  "Wired LAN networking",
  "Hybrid setups",
  "Dead-zone elimination",
];

const features = [
  "Site inspection & requirement analysis",
  "Coverage and load planning",
  "Scalable network design",
  "Clean and efficient layouts",
];

const images = [
  { src: "wiredNetwork.webp", alt: "Close-up of wall touch panel and outlets in autumn setting" },
  { src: "service_networking.webp", alt: "Clean rack mount and cable layout" },
  { src: "project_apartments.webp", alt: "Multi-floor Wi-Fi mesh planning schematic" },
];

export default function WiredNetworkSection() {
  return (
    <AutomationMosaicSection
      title="Wired Network Planning & Design"
      description="Reliable connectivity designed for modern usage."
      types={types}
      features={features}
      suitableText="Ideal for smooth browsing, streaming, smart devices, and work-from-home setups."
      images={images}
      imagePosition="right"
      prefix="wn"
      serviceName="Wired Network"
    />
  );
}
