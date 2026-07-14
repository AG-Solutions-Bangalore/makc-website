import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionLabel from "@/components/common/SectionLabel";
import { Link } from "react-router-dom";
import { getImageUrl } from "@/utils/image";


gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: "automation",
    name: "AUTOMATION",
    image: getImageUrl("industrial-automation-overview.webp"),
    link: "#automation",
    gridClass: "col-span-1 md:col-span-2 lg:col-span-2 lg:row-span-2 aspect-square md:aspect-auto md:min-h-[350px] lg:min-h-0 lg:h-full w-full",
  },
  {
    id: "security",
    name: "SECURITY",
    image: getImageUrl("industrial-cybersecurity.webp"),
    link: "#security",
    gridClass: "col-span-1 aspect-square lg:aspect-auto lg:h-full w-full",
  },
  {
    id: "lighting",
    name: "LIGHTING",
    image: getImageUrl("electrical-design.webp"),
    link: "#lighting",
    gridClass: "col-span-1 aspect-square lg:aspect-auto lg:h-full w-full",
  },
  {
    id: "networking",
    name: "NETWORKING",
    image: getImageUrl("system-integration.webp"),
    link: "#networking",
    gridClass: "col-span-1 aspect-square lg:aspect-auto lg:h-full w-full",
  },
  {
    id: "interior",
    name: "INTERIOR",
    image: getImageUrl("smart-interior.webp"),
    link: "#interior",
    gridClass: "col-span-1 lg:col-span-2 aspect-square lg:aspect-auto lg:h-full w-full",
  },
];

function ServiceCard({
  id,
  name,
  image,
  link,
  className = "",
}: {
  id: string;
  name: string;
  image: string;
  link: string;
  className?: string;
}) {
  return (
    <Link
      id={id}
      to={link}
      className={`group relative overflow-hidden block scroll-mt-[120px] ${className}`}
      data-stagger-child
    >
      {/* Background image */}
      <img
        src={image}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-110"
        loading="lazy"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-[1]" />
      
      {/* Yellow hover overlay */}
      <div className="absolute inset-0 bg-ma-yellow z-[2] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
      
      {/* Text */}
      <div className="absolute bottom-5 left-5 z-[3]">
        <h3 className="heading-display text-h5 text-white group-hover:text-ma-black transition-colors duration-200">
          {name}
        </h3>
      </div>
    </Link>
  );
}

export default function IndustriesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !gridRef.current) return;

    const ctx = gsap.context(() => {
      // Label and heading animation
      gsap.fromTo(
        sectionRef.current!.querySelectorAll(".section-header"),
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

      // Cards stagger animation
      gsap.fromTo(
        gridRef.current!.children,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-ma-black section-padding">
      <div className="max-w-[1600px] mx-auto">
        {/* Section header */}
        <div className="text-center mb-10 lg:mb-[7.29vw]">
          <div className="section-header">
            <SectionLabel text="OUR SOLUTIONS" />
          </div>
          <h2 className="section-header heading-display text-h2 text-white mt-4">
            SMART SYSTEMS & SOLUTIONS
          </h2>
        </div>

        {/* Bento Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-3 gap-2.5 lg:gap-4 lg:h-[600px]"
        >
          {services.map((service) => (
            <ServiceCard
              key={service.name}
              id={service.id}
              name={service.name}
              image={service.image}
              link={service.link}
              className={service.gridClass}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
