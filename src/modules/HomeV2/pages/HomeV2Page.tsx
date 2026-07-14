import useSEO from "@/hooks/useSEO";
import HeroSectionV2 from "../sections/HeroSectionV2";
import StatsSectionV2 from "../sections/StatsSectionV2";
import ServicesSectionV2 from "../sections/ServicesSectionV2";
import ProjectsSection from "../sections/ProjectsSection";
import PartnerLogosSection from "../sections/PartnerLogosSection";
import ClientTestimonialsSection from "../sections/ClientTestimonialsSection";
import TestimonialsSection from "../sections/TestimonialsSection";
import SmarterWaySection from "../sections/SmarterWaySection";
import GetInTouchSection from "../sections/GetInTouchSection";
import CtaSection from "../sections/CtaSection";
import SolutionsGallery from "@/components/common/SolutionsGallery";

export default function HomeV2Page() {
  useSEO({
    title: "Home Automation Company in Bangalore | MAKc Automation",
    description: "MAKc Automation is a leading home automation company in Bangalore. Get complete smart home automation solutions for enhanced security, safety, comfort, and convenience.",
    keywords: "home automation company in bangalore, home automation bangalore, smart home automation",
    canonicalUrl: "https://makcautomations.com/",
    robots: "INDEX, FOLLOW, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, MAX-IMAGE-PREVIEW:LARGE",
  });

  return (
    <div className="relative bg-bg-main min-h-screen text-text-main">
      {/* V2 Hero Section */}
      <HeroSectionV2 />

      {/* V2 Stats Section */}
      <StatsSectionV2 />

      {/* V2 Services Section */}
      <ServicesSectionV2 />

      {/* V2 Featured Projects Section */}
      <ProjectsSection />

      {/* V2 Partner Logos Section */}
      <PartnerLogosSection />

      {/* Solutions Gallery Showcase */}
      <SolutionsGallery />

      {/* V2 Smarter Way Section */}
      <SmarterWaySection />

      {/* V2 Client Testimonials Grid Section */}
      <ClientTestimonialsSection />

      {/* V2 Testimonials Section */}
      <TestimonialsSection />

      {/* V2 Get In Touch Section */}
      <GetInTouchSection />

      {/* V2 Call To Action Banner Section */}
      <CtaSection />
    </div>
  );
}
