// Import module-specific components
import CCTVMonitoringSection from "../components/CCTVMonitoringSection";
import SecurityHero from "../components/SecurityHero";
import SensorBasedProtection from "../components/SensorBasedProtection";
import useSEO from "@/hooks/useSEO";

export default function SecurityPage() {
  useSEO({
    title: "Smart Home Security Systems in Bangalore | MAKc Automations",
    description:
      "Advanced smart home security systems in Bangalore by MAKc Automations: AI CCTV surveillance, biometric digital door locks, motion & environmental leak detectors.",
    keywords:
      "smart home security systems, home security system bangalore, cctv surveillance, digital door locks bangalore",
    canonicalUrl: "https://makcautomations.com/security",
    robots:
      "INDEX, FOLLOW, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, MAX-IMAGE-PREVIEW:LARGE",
  });

  return (
    <div className="min-h-screen bg-bg-main text-text-main overflow-hidden transition-colors duration-300">
      {/* CUSTOM HERO SECTION */}
      <SecurityHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24 pb-16">
        {/* CCTV & VIDEO MONITORING SECTION */}
        <CCTVMonitoringSection />

        {/* SENSOR-BASED PROTECTION SECTION */}
        <SensorBasedProtection />
      </div>
    </div>
  );
}
