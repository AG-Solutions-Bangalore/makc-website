import CCTVMonitoringSection from "../components/CCTVMonitoringSection";
import SecurityHero from "../components/SecurityHero";
import SensorBasedProtection from "../components/SensorBasedProtection";
import useSEO from "@/hooks/useSEO";
import { SEO_ROUTES } from "@/config/seoData";
import AutomationShowcase from "@/components/common/AutomationShowcase";
import {
  Video,
  Fingerprint,
  BellRing,
  Calendar,
  Sliders,
  Shield,
  Lock,
} from "lucide-react";
import { getImageUrl } from "@/utils/image";

const SECURITY_SLIDES = [
  {
    id: "01",
    title: "CCTV & Video Surveillance",
    shortTitle: "Surveillance",
    description:
      "Monitor your premises 24/7 with high-definition night-vision cameras and motion-triggered recordings accessible directly on your smartphone.",
    image: getImageUrl("service_security.webp"),
    imageAlt: "AI CCTV surveillance feed on phone screen",
    imageTitle: "Smart CCTV Surveillance",
    icon: Video,
    exploreHref: "#security-services",
    mobileTextLight: true,
    features: [
      {
        icon: Shield,
        title: "24/7 Monitoring",
        subtitle: "Always-on AI surveillance coverage.",
        shortTitle: "24/7",
        shortSubtitle: "Monitoring",
      },
      {
        icon: Calendar,
        title: "Event Recording",
        subtitle: "Motion-triggered cloud video history.",
        shortTitle: "Event",
        shortSubtitle: "Recording",
      },
      {
        icon: Sliders,
        title: "Mobile Access",
        subtitle: "Live view and playback from anywhere.",
        shortTitle: "Mobile",
        shortSubtitle: "Access",
      },
    ],
    gallery: [
      {
        image: getImageUrl("CC1.webp"),
        alt: "Indoor security camera monitoring a living space",
      },
      {
        image: getImageUrl("CC2.webp"),
        alt: "Outdoor CCTV camera protecting a home entrance",
      },
      {
        image: getImageUrl("service_security.webp"),
        alt: "AI CCTV surveillance feed on a phone screen",
      },
    ],
  },
  {
    id: "02",
    title: "Smart Access & Biometric Locks",
    shortTitle: "Smart Locks",
    description:
      "Secure entry points with digital biometric smart door locks, keyless numeric pins, RFID cards, or face recognition logs.",
    image: getImageUrl("project_apartments.webp"),
    imageAlt: "Biometric smart door lock handle on apartment door",
    imageTitle: "Biometric Smart Door Lock",
    icon: Fingerprint,
    exploreHref: "#security-services",
    mobileTextLight: true,
    features: [
      {
        icon: Lock,
        title: "Biometric Entry",
        subtitle: "Fingerprint and face recognition access.",
        shortTitle: "Biometric",
        shortSubtitle: "Entry",
      },
      {
        icon: Calendar,
        title: "Access Logs",
        subtitle: "Real-time entry history and alerts.",
        shortTitle: "Access",
        shortSubtitle: "Logs",
      },
      {
        icon: Sliders,
        title: "Remote Unlock",
        subtitle: "Grant access securely from your phone.",
        shortTitle: "Remote",
        shortSubtitle: "Unlock",
      },
    ],
    gallery: [
      {
        image: getImageUrl("DA1.webp"),
        alt: "Biometric smart door lock handle",
      },
      {
        image: getImageUrl("DA2.webp"),
        alt: "Digital entrance keypad with NFC reader",
      },
      {
        image: getImageUrl("project_apartments.webp"),
        alt: "Apartment entrance with smart biometric access",
      },
    ],
  },
  {
    id: "03",
    title: "Intrusion & Threat Detection",
    shortTitle: "Alerts",
    description:
      "Detect motion, door/window movements, glass breaks, smoke, or water leaks with continuous real-time smart sensor alerts.",
    image: getImageUrl("why_choose_us.webp"),
    imageAlt: "Wireless motion sensor and alarm system",
    imageTitle: "Wireless Safety Sensors",
    icon: BellRing,
    exploreHref: "#security-services",
    mobileTextLight: true,
    features: [
      {
        icon: Shield,
        title: "Motion Detection",
        subtitle: "Instant alerts for unexpected movement.",
        shortTitle: "Motion",
        shortSubtitle: "Detection",
      },
      {
        icon: BellRing,
        title: "Instant Alerts",
        subtitle: "Push notifications the moment it matters.",
        shortTitle: "Instant",
        shortSubtitle: "Alerts",
      },
      {
        icon: Sliders,
        title: "Smart Triggers",
        subtitle: "Automate lights, sirens, and door locks.",
        shortTitle: "Smart",
        shortSubtitle: "Triggers",
      },
    ],
    gallery: [
      {
        image: getImageUrl("SB1.webp"),
        alt: "Motion sensor protecting a modern home",
      },
      {
        image: getImageUrl("SB2.webp"),
        alt: "Wireless smart sensor installed indoors",
      },
      {
        image: getImageUrl("why_choose_us.webp"),
        alt: "Smart sensor and alarm system",
      },
    ],
  },
];

export default function SecurityPage() {
  useSEO(SEO_ROUTES["/security"]);

  return (
    <div className="min-h-screen bg-bg-main text-text-main overflow-hidden transition-colors duration-300">
      {/* CUSTOM HERO SECTION */}
      <SecurityHero />

      {/* FULL WIDTH AUTOMATION SHOWCASE SECTION */}
      <AutomationShowcase
        slides={SECURITY_SLIDES}
        initialSlideId="01"
        eyebrow="Smart Security"
        heading={
          <>
            Intelligent security control <br />
            for a <span className="text-[#0A84FF]">safer home</span>
          </>
        }
        introduction="Secure what matters most with smart AI cameras, biometric locks, and real-time sensors integrated into your daily routines."
        accentColor="#0A84FF"
      />

      <div
        id="security-services"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-8 sm:pt-14 lg:pt-20 scroll-mt-28"
      >
        {/* CCTV & VIDEO MONITORING SECTION */}
        <CCTVMonitoringSection />

        {/* SENSOR-BASED PROTECTION SECTION */}
        <SensorBasedProtection />
      </div>
    </div>
  );
}
