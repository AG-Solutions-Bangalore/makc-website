import { Compass, Cpu, Link, Ruler, ShieldCheck } from "lucide-react";
import imgWhyChooseUs from "../../../assets/images/home_v2/why_choose_us.png";

export default function WhyChooseUsSection() {
  const features = [
    {
      icon: Compass,
      title: "Customized Smart Home Solutions",
      description: "Tailored smart systems designed to fit your unique lifestyle, preferences, and home layout perfectly.",
    },
    {
      icon: Cpu,
      title: "Premium Automation Brands",
      description: "We partner with globally trusted, premium smart home brands to deliver reliable and luxurious systems.",
    },
    {
      icon: Link,
      title: "Certified Automation Experts",
      description: "Our experienced, certified integration engineers design and configure every automation touchpoint.",
    },
    {
      icon: Ruler,
      title: "Professional Installation",
      description: "Stress-free, clean installation with zero-friction configuration and clean wiring execution.",
    },
    {
      icon: ShieldCheck,
      title: "Dedicated After-Sales Support",
      description: "Round-the-clock support, maintenance, and system health checks for long-term peace of mind.",
    },
  ];

  return (
    <section id="about" className="relative w-full py-10 lg:py-16 border-t border-border-main overflow-hidden">
      {/* Gradient background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F5F7FA] to-[#EBEFF5] dark:from-[#07152D] dark:via-[#051022] dark:to-[#01050E] transition-colors duration-300 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_40%,rgba(10,132,255,0.08)_0%,rgba(10,132,255,0.03)_35%,transparent_70%)] dark:bg-[radial-gradient(circle_at_80%_40%,rgba(32,120,255,0.32)_0%,rgba(12,65,190,0.18)_22%,rgba(6,25,60,0.08)_48%,transparent_72%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(10,132,255,0.04),transparent_70%)] dark:bg-[radial-gradient(circle_at_30%_80%,rgba(0,70,255,0.08),transparent_70%)] pointer-events-none" />

      <div className="relative mx-auto max-w-8xl px-4 sm:px-6 z-10">
        
        {/* Border container wrapping image and content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border border-border-main backdrop-blur-sm">
          
          {/* Left Column: Full height Image (Spans 5/12 cols) */}
          <div className="lg:col-span-5 relative min-h-[350px] lg:min-h-[520px] border-b lg:border-b-0 lg:border-r border-border-main overflow-hidden">
            <img
              src={imgWhyChooseUs}
              alt="Luxury Living Room Night View with Ambient Lighting"
              className="w-full h-full object-cover object-center absolute inset-0 reveal-on-scroll reveal-left"
              data-reveal-duration="0.9s"
            />
            {/* Premium overlays for image depth and blending */}
            <div className="absolute inset-0 bg-black/10 dark:bg-black/35 z-10 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-bg-main/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-bg-main/30 lg:to-bg-main z-10 pointer-events-none" />
          </div>

          {/* Right Column: Dark content panel (Spans 7/12 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between p-8 sm:p-12 lg:p-14 bg-bg-main/40 dark:bg-bg-main/20 backdrop-blur-md text-left">
            
            {/* Top Text Content */}
            <div className="flex flex-col reveal-on-scroll reveal-up" data-reveal-duration="0.8s">
              <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-accent-blue uppercase">
                WHY HOMEOWNERS CHOOSE MAKC
              </span>
              <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-extrabold text-text-main tracking-tight leading-tight max-w-lg">
                Why Choose <br />
                MAKc Automation?
              </h2>
            </div>

            {/* Bottom Features Row (5 columns with glowing vertical dividers on desktop) */}
            <div className="mt-12 lg:mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-10 lg:gap-y-0">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="relative flex flex-col items-center text-center px-2 sm:px-4 reveal-on-scroll reveal-up"
                    data-reveal-delay={`${index * 100}ms`}
                    data-reveal-duration="0.6s"
                  >
                    {/* Custom vertical gradient divider as border-right on desktop */}
                    {index < features.length - 1 && (
                      <div className="absolute right-0 top-0 bottom-0 w-[1.5px] bg-gradient-to-b from-[#0A84FF]/0 via-[#0A84FF]/40 to-[#0A84FF]/0 z-0 hidden lg:block" />
                    )}
                    {/* Icon */}
                    <div className="text-accent-blue apple-border-shine rounded-full p-2 flex items-center justify-center h-12 w-12 shrink-0">
                      <Icon className="h-10 w-10 stroke-[1.5]" />
                    </div>

                    {/* Title */}
                    <h3 className="font-sans text-xs sm:text-[13px] font-bold text-text-main mt-4">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-2 font-sans text-[10px] sm:text-xs text-text-muted leading-relaxed font-normal max-w-[130px] mx-auto">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
        
      </div>
    </section>
  );
}
