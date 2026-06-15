import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionLabel from "@/components/common/SectionLabel";

gsap.registerPlugin(ScrollTrigger);

const textBlocks = [
  {
    heading: "OUR MISSION",
    body: "To deliver world-class automation solutions that empower industries to achieve unprecedented efficiency, safety, and reliability. We bridge the gap between cutting-edge technology and practical industrial applications.",
  },
  {
    heading: "OUR VISION",
    body: "To be the Middle East's most trusted partner in industrial automation and digital transformation. We envision a future where every industrial process is optimized through intelligent automation, creating safer workplaces and sustainable operations.",
  },
  {
    heading: "WHAT WE DO",
    body: "From PLC programming and SCADA system development to complete industrial control system design, electrical safety solutions, and IoT integration — we provide end-to-end automation services that transform how industries operate.",
  },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const blocksRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        sectionRef.current!.querySelectorAll(".about-header"),
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

      // Text blocks animation
      blocksRef.current.forEach((block) => {
        if (!block) return;
        gsap.fromTo(
          block,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: block,
              start: "top 85%",
              once: true,
            },
          },
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="bg-ma-darkgray section-padding scroll-mt-[120px]"
    >
      <div className="max-w-[1600px] mx-auto container-grid">
        {/* Left Column - Sticky Heading */}
        <div className="col-span-12 lg:col-span-5 mb-10 lg:mb-0">
          <div className="lg:sticky lg:top-[120px]">
            <div className="about-header">
              <SectionLabel text="ABOUT US" />
            </div>
            <h2 className="about-header heading-display leading-[1.2] text-h2 text-white mt-4">
              PRECISION IN EVERY
              <br />
              <span className="text-highlight">CONNECTION</span>
            </h2>
          </div>
        </div>

        {/* Right Column - Text Blocks */}
        <div className="col-span-12 lg:col-start-7 lg:col-span-6 flex flex-col gap-12">
          {textBlocks.map((block, index) => (
            <div
              key={block.heading}
              ref={(el) => {
                blocksRef.current[index] = el;
              }}
              className="opacity-0"
            >
              <h3 className="heading-display text-h5 text-white mb-4">
                {block.heading}
              </h3>
              <p className="text-body text-white/80 font-body leading-relaxed">
                {block.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
