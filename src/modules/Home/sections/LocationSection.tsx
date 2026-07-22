import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionLabel from "@/components/common/SectionLabel";
import { Settings } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function LocationSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Left column elements
      gsap.fromTo(
        sectionRef.current!.querySelectorAll(".location-left"),
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            once: true,
          },
        },
      );

      // Map
      if (mapRef.current) {
        gsap.fromTo(
          mapRef.current,
          { opacity: 0, x: 40 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power3.out",
            delay: 0.3,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 85%",
              once: true,
            },
          },
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="bg-ma-yellow section-padding scroll-mt-[120px]"
    >
      <div className="max-w-[1600px] mx-auto container-grid">
        {/* Left Column - Address */}
        <div className="col-span-12 lg:col-span-5 mb-8 lg:mb-0">
          <div className="location-left">
            <SectionLabel text="OUR LOCATION" variant="yellow" />
          </div>
          <h2 className="location-left heading-display leading-[1.2] text-h2 text-amber-100 mt-4 mb-8">
            VISIT OUR
            <br />
            <span className="text-white">HEADQUARTERS</span>
          </h2>

          <div className="location-left flex items-start gap-3 mb-6">
            <Settings size={20} className="mt-1 shrink-0" />
            <div>
              <p className="text-body font-body">141/6, 4th Main, 12th Cross Rd</p>
              <p className="text-body font-body">BEML Layout, Brookefield</p>
              <p className="text-body font-body">Bengaluru, Karnataka 560066</p>
            </div>
          </div>

          <a
            href="tel:+918197783287"
            title="Call MAKc Automations at +91 81977 83287"
            className="location-left block heading-display text-h6 link-underline mb-4"
          >
            +91-8197783287
          </a>

          <a
            href="mailto:info@makcautomations.com"
            title="Email MAKc Automations"
            className="location-left block heading-display text-h6 link-underline"
          >
            info@makcautomations.com
          </a>
        </div>

        {/* Right Column - Map */}
        <div className="col-span-12 lg:col-start-7 lg:col-span-6">
          <div
            ref={mapRef}
            className="w-full h-[400px] lg:h-[500px] rounded-lg overflow-hidden opacity-0"
          >
            <iframe
              src="https://maps.google.com/maps?q=141%2F6%2C+4th+Main%2C+12th+Cross+Rd%2C+BEML+Layout%2C+Brookefield%2C+Bengaluru%2C+Karnataka+560066&output=embed"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: "grayscale(100%) invert(92%) contrast(83%)",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Makc Automations Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
