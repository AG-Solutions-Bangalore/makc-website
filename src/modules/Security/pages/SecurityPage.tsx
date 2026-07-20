// Import module-specific components
import CCTVMonitoringSection from "../components/CCTVMonitoringSection";
import SecurityHero from "../components/SecurityHero";
import SensorBasedProtection from "../components/SensorBasedProtection";

import WhatWeAutomateSection from "@/components/common/WhatWeAutomateSection";
import AutomationShowcase from "@/components/common/AutomationShowcase";
import { getImageUrl } from "@/utils/image";
import useSEO from "@/hooks/useSEO";

const securitySystems = [
  {
    title: "Homes & Apartments",
    detail: "Secure and monitor residential apartments with intelligent alarms and surveillance.",
    img: getImageUrl("Homes & Apartments.webp"),
    link: "#cctv-monitoring",
  },
  {
    title: "Villas & Independent Houses",
    detail: "Comprehensive perimeter monitoring and digital locking solutions for larger estates.",
    img: getImageUrl("Villas.webp"),
    link: "#sensor-based-protection",
  },
  {
    title: "Offices & Workspaces",
    detail: "Access control, biometric logs, and secure environments for office setups.",
    img: getImageUrl("Offices & Workspaces.webp"),
    link: "#cctv-monitoring",
  },
  {
    title: "Retail & Commercial Spaces",
    detail: "Anti-intrusion systems, smart sensors, and high-definition commercial CCTV setups.",
    img: getImageUrl("Retail & Commercial Spaces.webp"),
    link: "#sensor-based-protection",
  },
];

export default function SecurityPage() {
  useSEO({
    title: "Home security system bangalore - Makcautomations",
    description:
      "Secure your home with the home security system from Mac Automation. Get your Secured Door Locks, Gas leakage detection system...",
    keywords:
      "home security system Bangalore, home security camera system, digital door locks",
    canonicalUrl: "https://makcautomations.com/index.php/security/",
    robots:
      "INDEX, FOLLOW, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, MAX-IMAGE-PREVIEW:LARGE",
  });

  return (
    <div className="min-h-screen bg-bg-main text-text-main overflow-hidden transition-colors duration-300">
      {/* CUSTOM HERO SECTION */}
      <SecurityHero />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24 pb-0">
        {/* WHAT IS SECURITY SYSTEM SECTION */}
        <WhatWeAutomateSection
          systems={securitySystems}
          title="What is Security System"
          description="Security automation allows you to monitor and protect your space using CCTV cameras, mobile apps, sensors, alerts, and remote access — instead of manual checks. Surveillance responds automatically based on movement, time, or predefined security rules, giving you real-time monitoring and peace of mind."
          badgeText="Intelligent Surveillance"
          className="mb-24"
        />
      </div>

      {/* FULL WIDTH AUTOMATION SHOWCASE SECTION */}
      <AutomationShowcase initialSlideId="02" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24 pb-16">
        {/* CCTV & VIDEO MONITORING SECTION */}
        <CCTVMonitoringSection />

        {/* SENSOR-BASED PROTECTION SECTION */}
        <SensorBasedProtection />
      </div>
    </div>
  );
}
