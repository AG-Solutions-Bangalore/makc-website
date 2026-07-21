// Import module-specific components
import CCTVMonitoringSection from "../components/CCTVMonitoringSection";
import SecurityHero from "../components/SecurityHero";
import SensorBasedProtection from "../components/SensorBasedProtection";
import useSEO from "@/hooks/useSEO";

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24 pb-16">
        {/* CCTV & VIDEO MONITORING SECTION */}
        <CCTVMonitoringSection />

        {/* SENSOR-BASED PROTECTION SECTION */}
        <SensorBasedProtection />
      </div>
    </div>
  );
}
