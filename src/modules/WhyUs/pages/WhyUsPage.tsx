import useSEO from "@/hooks/useSEO";
import WhyChooseUsSection from "../sections/WhyChooseUsSection";
import LifestyleSection from "../sections/LifestyleSection";
import ProcessSection from "../sections/ProcessSection";
import ConnectBanner from "@/components/common/ConnectBanner";

export default function WhyUsPage() {
  useSEO({
    title: "Why Choose Us | MAKc Automation",
    description: "Discover why homeowners choose MAKc Automation: custom smart home integration, premium materials, and a refined five-phase installation process.",
  });

  return (
    <div className="relative bg-bg-main min-h-screen text-text-main overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(10,132,255,0.06),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(10,132,255,0.03),transparent_50%)] pointer-events-none" />

      {/* HERO SECTION BANNER */}
      <section className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-black/60 z-0">
          <img
            src="/images/about/about-us.jpg"
            alt="MAKc Automation Team"
            className="w-full h-full object-cover scale-105 filter brightness-[45%] contrast-110"
          />
        </div>

        {/* Deep blue/black ambient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-bg-main/30 to-bg-main z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(10,132,255,0.15),transparent_60%)] z-10" />

        {/* Content */}
        <div className="relative z-20 max-w-5xl mx-auto text-center px-4 pt-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/25 text-accent-blue text-xs font-bold uppercase tracking-widest mb-2 backdrop-blur-md">
            <span>Our Value</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold font-serif tracking-tight text-white drop-shadow-md">
            Why Choose Us
          </h1>
          <p className="text-sm sm:text-base text-white/80 max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-sm">
            Discover the MAKc difference. We design around you, not around technology — creating spaces that respond to your presence and simplify your life.
          </p>
        </div>
      </section>

      {/* Sections Wrapper */}
      <div className="relative z-20">
        {/* V2 Why Choose Us Section */}
        <WhyChooseUsSection />

        {/* V2 Lifestyle Section */}
        <LifestyleSection />

        {/* V2 Process Section */}
        <ProcessSection />

        {/* Connect Banner at the bottom */}
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <ConnectBanner />
        </div>
      </div>
    </div>
  );
}
