import AutomationMosaicSection from "@/components/common/AutomationMosaicSection";

const checklist = [
  "HD indoor & outdoor CCTV cameras",
  "Night vision monitoring",
  "Motion-triggered recording",
  "Live and recorded access via mobile app",
];

const images = [
  {
    src: "cam1.webp",
    alt: "Wall-mounted high-definition outdoor CCTV camera monitoring entry point",
  },
  {
    src: "cam2.webp",
    alt: "Tactile dome smart surveillance camera on travertine stone wall",
  },
  {
    src: "service_security.webp",
    alt: "Surveillance feed on a mobile screen",
  },
];

export default function CCTVMonitoringSection() {
  return (
    <AutomationMosaicSection
      title="CCTV & Video Monitoring"
      description="24×7 smart surveillance for complete peace of mind."
      types={checklist}
      suitableText="Suitable for homes, offices, retail outlets, warehouses, and commercial premises."
      images={images}
      imagePosition="left"
      prefix="cctv"
      serviceName="CCTV & Video"
    />
  );
}
