import AutomationMosaicSection from "@/components/common/AutomationMosaicSection";

const types = [
  "Smooth Dimming Control",
  "Preset Brightness Levels",
  "Night-Friendly Low-Light Modes",
];

export default function DimmingTuningSection() {
  return (
    <AutomationMosaicSection
      title="Dimming & Tuning of Lights"
      description="Adjust Lighting Intensity Smoothly for Comfort and Mood."
      types={types}
      suitableText="Perfect for Bedrooms, Living rooms, and Conference areas."
      imagePosition="right"
      prefix="dt"
      serviceName="Dimming & Tuning of Lights"
      reels={[
        "https://www.instagram.com/reel/De9JMcAKAau/?dlrf=ZnE2cjlhNjV3enVr",
        "https://www.instagram.com/reel/DdnOJVZtZFy/?psln=MXFnemNqcDR5OXdheQ==",
      ]}
      reelTitles={[
        "Watch Dimming & Tuning of Lights Reel on Instagram",
        "Watch Smart Dimming Control Reel on Instagram",
      ]}
    />
  );
}
