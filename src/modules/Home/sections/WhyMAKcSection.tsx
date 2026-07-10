import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionLabel from "@/components/common/SectionLabel";
import { Sliders, UserCheck, Crown, Wrench, Headphones } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// Professionally-engineered line-art SVG icons matching the Figma design reference exactly
const CustomizedIcon = () => <Sliders className="w-12 h-12 stroke-[1.25] text-white/95" />;
const ExpertsIcon = () => <UserCheck className="w-12 h-12 stroke-[1.25] text-white/95" />;
const BrandsIcon = () => <Crown className="w-12 h-12 stroke-[1.25] text-white/95" />;
const InstallationIcon = () => <Wrench className="w-12 h-12 stroke-[1.25] text-white/95" />;
const SupportIcon = () => <Headphones className="w-12 h-12 stroke-[1.25] text-white/95" />;

const features = [
  {
    icon: CustomizedIcon,
    title: "Customized Smart Home Solutions",
    description: "Tailored automation systems designed to fit your unique lifestyle, preferences, and home layout perfectly.",
  },
  {
    icon: ExpertsIcon,
    title: "Certified Automation Experts",
    description: "Our team of certified design and field engineers ensures industry-standard integration and smart setups.",
  },
  {
    icon: BrandsIcon,
    title: "Premium Automation Brands",
    description: "We partner with globally trusted, premium smart home brands to deliver reliable and luxurious systems.",
  },
  {
    icon: InstallationIcon,
    title: "Professional Installation",
    description: "Stress-free, clean installation with zero-friction configuration and clean wiring execution.",
  },
  {
    icon: SupportIcon,
    title: "Dedicated After-Sales Support",
    description: "Round-the-clock support, maintenance, and system health checks for long-term peace of mind.",
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
            Why Choose MAKc Automation?
          </h2>
        </div>

        {/* Connected Row (Connected panels instead of individual floating cards) */}
        <div
          ref={containerRef}
          className="flex flex-col lg:flex-row w-full border border-white/10 overflow-hidden shadow-2xl"
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

        {/* Commitment & Pricing Subsection */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-20 lg:mt-28 border-t border-white/10 pt-16">
          {/* Commitment to Quality Column */}
          <div className="flex flex-col text-left space-y-6">
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] text-ma-yellow uppercase">
              MAKc Guarantee
            </span>
            <h3 className="heading-display text-h3 text-white">
              Our Commitment to Quality
            </h3>
            <p className="text-body-sm text-white/60 leading-relaxed font-body max-w-xl">
              We stand by our work and products. Our standard of execution ensures long-term reliability and premium operation for your smart home devices.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "On-Time Project Delivery",
                "Competitive Pricing",
                "Premium Quality Products",
                "Certified Installation",
                "Reliable Customer Support"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3.5 text-body text-white/80 font-body">
                  <span className="text-ma-yellow text-lg font-bold">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pricing Column */}
          <div className="flex flex-col justify-center items-start lg:items-end">
            <div className="w-full max-w-md bg-white/[0.02] border border-white/10 p-8 sm:p-10 rounded-2xl flex flex-col text-left space-y-6 relative overflow-hidden group hover:border-ma-yellow/30 transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-ma-yellow/5 rounded-full blur-3xl pointer-events-none" />
              <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] text-ma-yellow uppercase">
                Pricing
              </span>
              <h4 className="heading-display text-h4 text-white">
                Starting Price
              </h4>
              <p className="text-body-sm text-white/60 leading-relaxed font-body">
                Premium, customized smart home automation solutions engineered to fit your specific architectural scale and lifestyle requirements.
              </p>
              <div className="border-t border-white/10 pt-6">
                <span className="text-body-sm text-white/50 block">Investment starts from</span>
                <span className="text-2xl sm:text-3xl font-extrabold text-white heading-display mt-1 block">
                  INR 1,20,000
                </span>
                <span className="text-xs text-ma-yellow font-bold uppercase tracking-wider mt-4 block">
                  Smart Home Automation Solutions Starting from INR 1,20,000
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
