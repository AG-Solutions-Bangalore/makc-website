
// Import module-specific components
import MeshWifiSolutionsSection from "../components/MeshWifiSolutionsSection";
import NetworkingHero from "../components/NetworkingHero";
import WiredNetworkSection from "../components/WiredNetworkSection";

// Import images
// const serviceNetworkingImg = getImageUrl("service_networking.webp");

import useSEO from "@/hooks/useSEO";

export default function NetworkingPage() {
  useSEO({
    title: "Home Networking Solutions in Bangalore | MAKc Automations",
    description:
      "MAKc Automations offers enterprise-grade home networking solutions in Bangalore, including mesh Wi-Fi systems, high-speed wired networks & seamless coverage for luxury villas.",
    keywords: "home networking solutions in bangalore, mesh wireless network, high speed home wifi, enterprise networking bangalore",
    canonicalUrl: "https://makcautomations.com/networking",
    robots:
      "INDEX, FOLLOW, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, MAX-IMAGE-PREVIEW:LARGE",
  });






  return (
    <div className="min-h-screen bg-bg-main text-text-main overflow-hidden transition-colors duration-300">
      {/* CUSTOM HERO SECTION */}
      <NetworkingHero />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24 pb-16">
        {/* WIRED NETWORK PLANNING SECTION */}
        <WiredNetworkSection />

        {/* MESH WI-FI NETWORK SOLUTIONS SECTION */}
        <MeshWifiSolutionsSection />
      </div>
    </div>
  );
}
