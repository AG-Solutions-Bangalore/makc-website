import { Compass, Cpu, Link, Ruler, ShieldCheck } from "lucide-react";
import imgWhyChooseUs from "../../../assets/images/home_v2/why_choose_us.png";

export default function WhyChooseUsSection() {
  const features = [
    {
      icon: Compass,
      title: "Custom Designed",
      description: "Every project is unique.",
    },
    {
      icon: Cpu,
      title: "Premium Brands",
      description: "Only globally trusted technology partners.",
    },
    {
      icon: Link,
      title: "Seamless Integration",
      description: "Everything works together beautifully.",
    },
    {
      icon: Ruler,
      title: "Clean Installations",
      description: "Invisible wiring. Flawless execution.",
    },
    {
      icon: ShieldCheck,
      title: "Dedicated Support",
      description: "Long after installation.",
    },
  ];

  return (
    <section id="about" className="relative w-full bg-bg-main py-10 lg:py-16 border-t border-border-main">
      <div className="mx-auto max-w-8xl px-4 sm:px-6">
        
        {/* Border container wrapping image and content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border border-border-main">
          
          {/* Left Column: Full height Image (Spans 5/12 cols) */}
          <div className="lg:col-span-5 relative min-h-[350px] lg:min-h-[520px] border-b lg:border-b-0 lg:border-r border-border-main overflow-hidden">
            <img
              src={imgWhyChooseUs}
              alt="Luxury Living Room Night View with Ambient Lighting"
              className="w-full h-full object-cover object-center absolute inset-0"
            />
          </div>

          {/* Right Column: Dark content panel (Spans 7/12 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between p-8 sm:p-12 lg:p-14 bg-bg-main text-left">
            
            {/* Top Text Content */}
            <div className="flex flex-col">
              <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-accent-blue uppercase">
                WHY HOMEOWNERS CHOOSE MAKC
              </span>
              <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-extrabold text-text-main tracking-tight leading-tight max-w-lg">
                Designed Around You, <br />
                Not Around Technology.
              </h2>
            </div>

            {/* Bottom Features Row (5 columns with vertical dividers on desktop) */}
            <div className="mt-12 lg:mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-10 lg:gap-y-0 lg:divide-x lg:divide-border-main">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center px-2 sm:px-4 first:pl-0 last:pr-0"
                  >
                    {/* Icon */}
                    <div className="text-accent-blue flex items-center justify-center h-10 w-10 shrink-0">
                      <Icon className="h-8 w-8 stroke-[1.5]" />
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
