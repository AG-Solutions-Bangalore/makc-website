import { useRef, useEffect } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import Gear3D from "@/components/3d/Gear3D";
import type { ServiceData } from "@/data/servicesData";

interface ServiceHeroProps {
  service: ServiceData;
}

export default function ServiceHero({ service }: ServiceHeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const titleParts = service.title.split(service.highlightedWord);

  useEffect(() => {
    if (!sectionRef.current || !textRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current!.children,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          delay: 0.3,
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [service]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[60vh] lg:min-h-[500px] bg-ma-darkgray overflow-hidden"
    >
      <div className="container-grid max-w-[1600px] mx-auto h-full min-h-[60vh] lg:min-h-[500px] px-5 lg:px-10 pt-[100px] lg:pt-[120px] pb-16">
        {/* Left Column - 3D Gear (hidden on mobile) */}
        <div className="hidden lg:flex col-span-5 items-center justify-center">
          <Gear3D
            size={350}
            teeth={16}
            rotationSpeed={0.4}
            mouseReactive={false}
            multiGear={false}
          />
        </div>

        {/* Right Column - Title */}
        <div className="col-span-12 lg:col-span-7 flex flex-col justify-center">
          <div ref={textRef}>
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-6 opacity-0">
              <Link
                to="/"
                className="text-tiny text-ma-gray-5 hover:text-white transition-colors"
              >
                Home
              </Link>
              <span className="text-tiny text-ma-gray-5">/</span>
              <span className="text-tiny text-ma-gray-5">
                {service.title.replace("&", "\u0026")}
              </span>
            </div>

            {/* Title */}
            <h1 className="heading-display text-hero text-white opacity-0">
              {titleParts[0]}
              <span className="text-highlight">{service.highlightedWord}</span>
              {titleParts[1] || ""}
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-body-lg text-white/80 max-w-[80vw] lg:max-w-[40vw] font-body leading-relaxed opacity-0">
              {service.subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
