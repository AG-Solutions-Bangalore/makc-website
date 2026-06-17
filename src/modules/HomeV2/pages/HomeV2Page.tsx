import HeroSectionV2 from "../sections/HeroSectionV2";
import StatsSectionV2 from "../sections/StatsSectionV2";
import ServicesSectionV2 from "../sections/ServicesSectionV2";
import WhyChooseUsSection from "../sections/WhyChooseUsSection";
import LifestyleProjectsSection from "../sections/LifestyleProjectsSection";
import PartnerLogosSection from "../sections/PartnerLogosSection";
import ProcessSection from "../sections/ProcessSection";
import ClientTestimonialsSection from "../sections/ClientTestimonialsSection";
import TestimonialsSection from "../sections/TestimonialsSection";
import SmarterWaySection from "../sections/SmarterWaySection";
import GetInTouchSection from "../sections/GetInTouchSection";
import CtaSection from "../sections/CtaSection";

export default function HomeV2Page() {
  return (
    <div className="relative bg-bg-main min-h-screen text-text-main">
      {/* V2 Hero Section */}
      <HeroSectionV2 />

      {/* V2 Stats Section */}
      <StatsSectionV2 />

      {/* V2 Services Section */}
      <ServicesSectionV2 />

      {/* V2 Why Choose Us Section */}
      <WhyChooseUsSection />

      {/* V2 Lifestyle and Projects Section */}
      <LifestyleProjectsSection />

      {/* V2 Partner Logos Section */}
      <PartnerLogosSection />

      {/* V2 Process Section */}
      <ProcessSection />

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
