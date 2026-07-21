import useSEO from "@/hooks/useSEO";
import AudioHero from "../components/AudioHero";
import MultiRoomAudioSection from "../components/MultiRoomAudioSection";
import HiFiAudioSection from "../components/HiFiAudioSection";
import AudioControlsSection from "../components/AudioControlsSection";

export default function AudioPage() {
  useSEO({
    title: "Premium Smart Audio Solutions for Luxury Homes | MAKc Automation",
    description: "High-performance multi-room audio, invisible architectural speakers, and smart sound controls for luxury residences in Bangalore by MAKc Automation.",
    keywords: "smart audio, multi room audio bangalore, architectural speakers, high fidelity sound, MAKc",
  });

  return (
    <div className="min-h-screen bg-bg-main text-text-main overflow-hidden transition-colors duration-300">
      {/* CUSTOM HERO SECTION */}
      <AudioHero />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24 pb-16">
        {/* MULTI-ROOM AUDIO SECTION */}
        <MultiRoomAudioSection />

        {/* HI-FI ARCHITECTURAL AUDIO SECTION */}
        <HiFiAudioSection />

        {/* INTUITIVE AUDIO CONTROLS SECTION */}
        <AudioControlsSection />
      </div>
    </div>
  );
}
