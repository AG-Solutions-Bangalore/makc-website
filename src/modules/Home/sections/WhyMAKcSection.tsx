import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionLabel from "@/components/common/SectionLabel";

gsap.registerPlugin(ScrollTrigger);

// Professionally-engineered line-art SVG icons matching the Figma design reference exactly
const LoyalCustomerIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="text-white/95">
    {/* Outlined hand */}
    <path
      d="M20 46C20 46 25.5 42.5 30.5 42.5C35.5 42.5 42 45 43.5 46.5C46 48 47.5 50.5 44 53C40.5 55.5 30.5 55.5 25.5 55.5C18.5 55.5 16.5 50.5 20 46Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 46L14 50L11 46L18 41"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Outlined people profiles */}
    {/* Center person */}
    <circle cx="32.5" cy="28" r="4.5" stroke="currentColor" strokeWidth="2" />
    <path
      d="M24.5 37.5C24.5 33.5 28.5 32 32.5 32C36.5 32 40.5 33.5 40.5 37.5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    {/* Left person */}
    <circle cx="22" cy="24" r="3.5" stroke="currentColor" strokeWidth="2" />
    <path
      d="M15 32C15 29 18 27.5 22 27.5C26 27.5 29 29 29 32"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    {/* Right person */}
    <circle cx="43" cy="24" r="3.5" stroke="currentColor" strokeWidth="2" />
    <path
      d="M36 32C36 29 39 27.5 43 27.5C47 27.5 50 29 50 32"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    {/* Yellow stars above profiles */}
    <path
      d="M32.5 8L34 11.5L37.5 11.5L34.5 13.5L35.5 17L32.5 15L29.5 17L30.5 13.5L27.5 11.5L31 11.5L32.5 8Z"
      fill="#313294"
      stroke="#313294"
      strokeWidth="0.5"
      strokeLinejoin="round"
    />
    <path
      d="M20.5 7L21.5 9.5L24 9.5L22 11L22.5 13.5L20.5 12L18.5 13.5L19 11L17 9.5L19.5 9.5L20.5 7Z"
      fill="#313294"
      stroke="#313294"
      strokeWidth="0.5"
      strokeLinejoin="round"
    />
    <path
      d="M44.5 7L45.5 9.5L48 9.5L46 11L46.5 13.5L44.5 12L42.5 13.5L43 11L41 9.5L43.5 9.5L44.5 7Z"
      fill="#313294"
      stroke="#313294"
      strokeWidth="0.5"
      strokeLinejoin="round"
    />
  </svg>
);

const WarrantyIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="text-white/95">
    {/* Shield */}
    <path
      d="M32 6C42 6 48 9 48 9C48 9 48 34 32 46C16 34 16 9 16 9C16 9 22 6 32 6Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Isometric sheets (Middle sheet is highlighted brand yellow) */}
    <path
      d="M24 23L32 19L40 23L32 27L24 23Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M24 29L32 25L40 29L32 33L24 29Z"
      stroke="#313294"
      strokeWidth="2"
      fill="#313294"
      fillOpacity="0.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M24 35L32 31L40 35L32 39L24 35Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const AssureIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="text-white/95">
    {/* Scalloped badge border */}
    <path
      d="M32 11C33.5 11 34.5 11.8 35.5 13C37 12.5 38.5 12.5 39.5 13C41 14 41.5 15.5 41.5 16.5C43 17.5 43.5 19 43.5 20C43.5 21.5 43 23 42.2 24C43 25.5 43 27 42.2 28.5C41.5 29.8 40 30.5 39.5 30.5C38.5 31.8 37 31.8 35.5 31.5C34.5 32.5 33.5 33 32 33C30.5 33 29.5 32.5 28.5 31.5C27 31.8 25.5 31.8 24.5 31.5C23 30.5 22.5 29.8 22.5 28.5C21 27 21 25.5 21.8 24C21 23 20.5 21.5 20.5 20C20.5 19 21 17.5 22.5 16.5C22.5 15.5 23 14 24.5 13C25.5 11.8 27 11.8 28.5 13C29.5 11.8 30.5 11 32 11Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Hanging Ribbons */}
    <path
      d="M26.5 30.5L22.5 43L29.5 40L32.5 33"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M37.5 30.5L41.5 43L34.5 40L32.5 33"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Accent Checkmark */}
    <path
      d="M26 21L30 25L38 16"
      stroke="#313294"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ClientIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="text-white/95">
    {/* House walls and roof */}
    <path
      d="M20 31V49H44V31"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 33L32 17L49 33"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Heart in center (Yellow Accent) */}
    <path
      d="M32 40.5C32 40.5 27.5 37.5 27.5 33.5C27.5 31.2 29.2 29.5 31.5 29.5C32.8 29.5 32.8 30.5 32.8 30.5C32.8 30.5 32.8 29.5 34.2 29.5C36.5 29.5 38.2 31.2 38.2 33.5C38.2 37.5 32 40.5 32 40.5Z"
      stroke="#313294"
      strokeWidth="2"
      fill="#313294"
      fillOpacity="0.15"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const features = [
  {
    icon: LoyalCustomerIcon,
    title: "Best Customer Services",
    description: "Our customer-centric approach ensures that you receive exceptional support at every stage of your smart home journey.",
  },
  {
    icon: WarrantyIcon,
    title: "Flat 5-Year Warranty",
    description: "We stand by the quality of our work. That’s why we offer a flat 5-year warranty on all our installations, giving you peace of mind.",
  },
  {
    icon: AssureIcon,
    title: "Quality Assured",
    description: "Our commitment to quality is unwavering. We strive to exceed your expectations by ensuring your smart home meets the highest standards.",
  },
  {
    icon: ClientIcon,
    title: "500+ Happy Customers",
    description: "Join our ever-growing community of satisfied customers who have experienced the transformation of their homes with MAKc Automation.",
  },
];

export default function WhyMAKcSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo(
        sectionRef.current!.querySelectorAll(".why-header"),
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );

      // Connected columns animation
      gsap.fromTo(
        containerRef.current!.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-ma-black section-padding border-t border-white/5">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-20">
          <div className="why-header">
            <SectionLabel text="WHY US" />
          </div>
          <h2 className="why-header heading-display text-h2 text-white mt-4">
            WHY MAKC AUTOMATIONS
          </h2>
        </div>

        {/* Connected Row (Connected panels instead of individual floating cards) */}
        <div
          ref={containerRef}
          className="flex flex-col lg:flex-row w-full border-white/10 overflow-hidden shadow-2xl"
        >
          {features.map((feat, index) => {
            const IconComponent = feat.icon;
            return (
              <div
                key={index}
                className="flex-1 flex flex-col items-center text-center p-8 lg:p-10 border-b border-white/10 lg:border-b-0 lg:border-r border-white/10 last:border-b-0 last:border-r-0 transition-colors duration-300 hover:bg-white/[0.03] group"
              >
                {/* Custom Line Art Icon */}
                <div className="flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-105">
                  <IconComponent />
                </div>

                {/* Title */}
                <h3 className="heading-display text-small-heading text-white mb-3 group-hover:text-ma-yellow transition-colors duration-300">
                  {feat.title}
                </h3>

                {/* Description */}
                <p className="text-body-sm text-white/65 font-body leading-relaxed max-w-sm">
                  {feat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
