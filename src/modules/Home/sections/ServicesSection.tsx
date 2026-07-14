import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionLabel from "@/components/common/SectionLabel";
import {
  Thermometer,
  Headphones,
  Shield,
  Lightbulb,
  Smartphone,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Thermometer,
    title: "Climate Control",
    description:
      "Achieve the perfect ambiance in every room with our climate control solutions.",
    gridClass: "lg:col-span-3",
    color: "bg-[#CFFCE9]",
    textColor: "text-[#1a1a1a]",
    image: "/images/Home/3d-icon-weather-conditions.webp",
  },
  {
    icon: Headphones,
    title: "Entertainment Systems",
    description:
      "Enhance your entertainment experience with our integrated audio and video systems.",
    gridClass: "lg:col-span-3",
    color: "bg-[#F4FCCF]",
    textColor: "text-[#1a1a1a]",
    image: "/images/Home/Entertainment.webp",
  },
  {
    icon: Shield,
    title: "Home Security",
    description:
      "Keep your loved ones and property safe with our advanced security systems.",
    gridClass: "lg:col-span-2",
    color: "bg-[#F1F2F4]",
    textColor: "text-[#1a1a1a]",
  },
  {
    icon: Lightbulb,
    title: "Intelligent Lighting Solutions",
    description:
      "Improve the appearance of your home while conserving energy with our innovative lighting automation solutions.",
    gridClass: "lg:col-span-2",
    color: "bg-[#25266e]",
    textColor: "text-white",
  },
  {
    icon: Smartphone,
    title: "Voice and App Control",
    description:
      "Manage your smart home effortlessly with voice and app control options.",
    gridClass: "lg:col-span-2",
    color: "bg-[#EBE9FF]",
    textColor: "text-[#1a1a1a]",
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !gridRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current!.querySelectorAll(".services-header"),
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
        },
      );

      gsap.fromTo(
        gridRef.current!.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
            once: true,
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-ma-black section-paadding border-t border-white/5"
    >
      <div className="max-w-[1600px] mx-auto">
        <div className="text-center mb-12 lg:mb-20">
          <div className="services-header">
            <SectionLabel text="OUR SERVICES" />
          </div>
          <h2 className="services-header heading-display text-h2 text-white mt-4">
            Smart Home Automation Services
          </h2>
          <p className="services-header text-body text-white/65 font-body max-w-2xl mx-auto mt-6 leading-relaxed">
            Discover complete smart home automation solutions designed to simplify your everyday life while improving comfort, security, and energy efficiency.
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-lg p-8 lg:p-10 flex flex-col justify-between min-h-[280px] lg:min-h-[320px] ${service.gridClass} ${service.color} transition-transform duration-300 hover:scale-[1.02]`}
              >
                <div>
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-black/5 mb-5">
                    <IconComponent className={`w-6 h-6 ${service.textColor}`} />
                  </div>
                  <h3
                    className={`heading-display text-h5 ${service.textColor} mb-3`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`text-body-sm ${service.textColor} font-body leading-relaxed max-w-md opacity-80`}
                  >
                    {service.description}
                  </p>
                </div>
                {service.image && (
                  <div className="absolute h-80 w-80 -bottom-20 hover:-bottom-16 hover:transform hover:translate-y-3 -right-14 duration-300">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <p className="text-center text-body-sm text-white/50 font-body mt-12 max-w-4xl mx-auto leading-relaxed">
          Our commitment to excellence in home automation in Bangalore and Smart
          Home Automation sets us apart.
        </p>
      </div>
    </section>
  );
}
