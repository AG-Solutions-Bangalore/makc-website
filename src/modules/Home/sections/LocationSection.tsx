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
              <p className="text-body font-body">Dubai Silicon Oasis</p>
              <p className="text-body font-body">Dubai, United Arab Emirates</p>
            </div>
          </div>

          <a
            href="tel:+971551234567"
            className="location-left block heading-display text-h6 link-underline mb-4"
          >
            +971 55 123 4567
          </a>

          <a
            href="mailto:info@makcautomations.com"
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.8678!2d55.3910!3d25.1241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f682829c85c07%3A0xa5eda9fb3c93b69d!2sDubai%20Silicon%20Oasis!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
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
