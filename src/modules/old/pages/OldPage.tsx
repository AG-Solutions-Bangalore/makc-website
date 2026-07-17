import useSEO from "@/hooks/useSEO";
import SmarterWaySection from "../sections/SmarterWaySection";
import OldLightingSection from "../sections/OldLightingSection";
import OldNetworkingSection from "../sections/OldNetworkingSection";
import OldSecuritySection from "../sections/OldSecuritySection";
import TestimonialsSection from "../sections/TestimonialsSection";
import ProjectsSection from "../sections/ProjectsSection";
import GetInTouchSection from "../sections/GetInTouchSection";
import SmartSecurityModes from "../sections/SmartSecurityModes";
import CoreConceptSection from "../sections/CoreConceptSection";

export default function OldPage() {
  useSEO({
    title: "Legacy Features & Testimonials | MAKc Automation",
    description:
      "Explore our classic control interfaces, interactive smart home visualization systems, and customer success testimonials.",
    keywords:
      "legacy features, smart home control, smart living, testimonials, reviews, MAKc Bangalore",
    robots: "INDEX, FOLLOW",
  });

  return (
    <div className="relative bg-bg-main min-h-screen text-text-main pt-20 lg:pt-24">
      {/* Smarter Way Interactive Control Section */}
      <SmarterWaySection />
      {/* SMART SECURITY MODES SECTION */}
      <SmartSecurityModes />

      {/* Legacy Lighting Section */}
      <OldLightingSection />

      {/* Legacy Networking Section */}
      <OldNetworkingSection />

      {/* Legacy Security Section */}
      <OldSecuritySection />

      {/* Testimonials and Client Success Stories Section */}
      <TestimonialsSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Get In Touch Section */}
      <GetInTouchSection />

      {/* Core Concept Section */}
      <CoreConceptSection />
    </div>
  );
}
