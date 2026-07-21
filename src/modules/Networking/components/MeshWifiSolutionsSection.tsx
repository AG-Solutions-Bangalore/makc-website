import AutomationMosaicSection from "@/components/common/AutomationMosaicSection";

const benefits = [
  "Uniform Wi-Fi coverage",
  "Seamless roaming across rooms",
  "No signal drops or buffering",
  "Scalable network design",
];

const images = [
  {
    src: "netSolutionImage1.webp",
    alt: "Networking device layout",
  },
  {
    src: "netSolutionImage2.webp",
    alt: "Wireless smart hub panel with glowing green brand logo",
  },
  {
    src: "netSolutionImage3.webp",
    alt: "Smart intercom video door phone station on elegant marble wall",
  },
];

export default function MeshWifiSolutionsSection() {
  return (
    <AutomationMosaicSection
      title="Mesh Wi-Fi Solutions"
      description="Establish seamless, high-speed Wi-Fi across every corner of your home."
      types={benefits}
      suitableText="Perfect for streaming, working, online gaming, and connecting multiple smart devices concurrently without bottlenecks."
      images={images}
      imagePosition="left"
      prefix="mws"
      serviceName="Mesh Wi-Fi Network"
    />
  );
}
