import useSEO from "@/hooks/useSEO";
import HeroSection from '@/modules/Home/sections/HeroSection';
import ServicesSection from '@/modules/Home/sections/ServicesSection';
import IndustriesSection from '@/modules/Home/sections/IndustriesSection';
import OurVendorsSection from '@/modules/Home/sections/OurVendorsSection';
import AboutSection from '@/modules/Home/sections/AboutSection';
import WhyMAKcSection from '@/modules/Home/sections/WhyMAKcSection';
import LocationSection from '@/modules/Home/sections/LocationSection';
import FAQSection from '@/modules/Home/sections/FAQSection';

const homeFAQs = [
  {
    question: "WHAT SERVICES DO YOU SPECIALIZE IN?",
    answer: "We deliver end-to-end design, contracting, and integration services across smart home automation, security surveillance, architectural lighting control, high-performance IT/OT networking, and motorized shades/AV interior systems."
  },
  {
    question: "DO YOU WORK ON RESIDENTIAL AND COMMERCIAL PROJECTS?",
    answer: "Yes. We execute projects ranging from luxury residential villas and high-rise apartments to corporate offices, hospitality spaces, and retail environments across the region."
  },
  {
    question: "CAN YOU INTEGRATE MULTIPLE PROTOCOLS AND BRANDS?",
    answer: "Yes, integration is our core strength. We unify systems running on KNX, Lutron, Crestron, Control4, Modbus, and BACnet, allowing them to communicate seamlessly and be controlled from a single interface."
  },
  {
    question: "DO YOU PROVIDE POST-HANDOVER SUPPORT?",
    answer: "Absolutely. We offer tailored maintenance agreements (SLA) that include 24/7 technical support, remote troubleshooting, system health checks, and firmware updates to ensure long-term reliability."
  },
  {
    question: "HOW CAN I GET A QUOTATION FOR MY PROPERTY?",
    answer: "Simply get in touch with us using the Contact Us form or phone number. Our design engineers will study your electrical layouts or architectural drawings to prepare a comprehensive, customized proposal."
  }
];

export default function HomePage() {
  useSEO({
    title: "Home Automation Company in Bangalore | MAKc Automation",
    description: "MAKc Automation is a leading home automation company in Bangalore. Get complete smart home automation solutions for enhanced security, safety, comfort, and convenience.",
    keywords: "home automation company in bangalore, home automation bangalore, smart home automation",
    canonicalUrl: "https://makcautomations.com/",
    robots: "INDEX, FOLLOW, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, MAX-IMAGE-PREVIEW:LARGE",
  });

  return (
    <>
      <HeroSection />
      <ServicesSection />
      <IndustriesSection />
      <OurVendorsSection />
      <AboutSection />
      <WhyMAKcSection />
      <LocationSection />
      <FAQSection faqs={homeFAQs} />
    </>
  );
}
