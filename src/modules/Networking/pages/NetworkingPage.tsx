import MeshWifiSolutionsSection from "../components/MeshWifiSolutionsSection";
import NetworkingHero from "../components/NetworkingHero";
import WiredNetworkSection from "../components/WiredNetworkSection";
import useSEO from "@/hooks/useSEO";
import { SEO_ROUTES } from "@/config/seoData";

export default function NetworkingPage() {
  useSEO(SEO_ROUTES["/networking"]);

  return (
    <div className="min-h-screen bg-bg-main text-text-main overflow-hidden transition-colors duration-300">
      {/* CUSTOM HERO SECTION */}
      <NetworkingHero />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-8 sm:pt-14 lg:pt-20">
        {/* WIRED NETWORK PLANNING SECTION */}
        <WiredNetworkSection />

        {/* MESH WI-FI NETWORK SOLUTIONS SECTION */}
        <MeshWifiSolutionsSection />
      </div>
    </div>
  );
}
