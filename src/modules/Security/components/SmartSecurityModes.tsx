import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const modes = [
  {
    num: "01",
    title: "Night Mode",
    desc: "Activate selected sensors for a peaceful and secure night."
  },
  {
    num: "02",
    title: "Vacation Mode",
    desc: "Let your smart security system protect your home or business while you're away."
  },
  {
    num: "03",
    title: "Intrusion Detection",
    desc: "Automatically trigger sirens, lights, and mobile alerts when movement is detected."
  },
  {
    num: "04",
    title: "Fire & Safety Protection",
    desc: "Smart sensors detect smoke, temperature rise, or fire indicators and alert you instantly."
  }
];

export default function SmartSecurityModes() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });

    tl.from(".ssm-card", {
      y: 50,
      autoAlpha: 0,
      duration: 0.85,
      ease: "power3.out"
    })
      .from(".ssm-title", {
        y: 20,
        autoAlpha: 0,
        duration: 0.6
      }, "-=0.55")
      .from(".ssm-mode-item", {
        y: 30,
        autoAlpha: 0,
        stagger: 0.12,
        duration: 0.7,
        ease: "power3.out"
      }, "-=0.45");
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="mb-28 no-reveal">
      {/* Premium indigo rounded container card */}
      <div className="dark ssm-card bg-[#3A4CB4] rounded-[2.5rem] relative overflow-hidden p-10 sm:p-14 lg:p-16 border border-[#5263d5]/20 shadow-2xl text-center">
        
        {/* Decorative subtle ambient lights */}
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-white/5 rounded-full blur-3xl pointer-events-none select-none" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-white/5 rounded-full blur-3xl pointer-events-none select-none" />

        {/* Section Heading */}
        <h2 className="ssm-title text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-16 font-sans relative z-10">
          Smart Security Modes
        </h2>

        {/* 4-Column Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 relative z-10">
          {modes.map((mode, idx) => (
            <div
              key={idx}
              className="ssm-mode-item group flex flex-col items-center p-6 rounded-2xl transition-colors duration-300 hover:bg-white/5 hover:scale-102"
            >
              {/* Mode Number */}
              <span className="text-5xl md:text-6xl font-extrabold text-white/40 mb-5 tracking-tight font-sans select-none transition-colors duration-300 group-hover:text-white/60">
                {mode.num}
              </span>

              {/* Mode Title */}
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 tracking-wide">
                {mode.title}
              </h3>

              {/* Mode Description */}
              <p className="text-white/80 text-xs sm:text-sm leading-relaxed max-w-[28ch]">
                {mode.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
