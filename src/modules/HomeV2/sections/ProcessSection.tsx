import imgConsultation from "../../../assets/images/home_v2/process_consultation.png";
import imgDesign from "../../../assets/images/home_v2/process_design.png";
import imgInstallation from "../../../assets/images/home_v2/process_installation.png";
import imgSupport from "../../../assets/images/home_v2/process_support.png";

export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Private Consultation",
      description:
        "We sit down with you to understand your lifestyle, preferences, and how you envision your smart home. Every detail matters.",
      image: imgConsultation,
    },
    {
      number: "02",
      title: "Design & Planning",
      description:
        "Our engineers craft a custom automation blueprint — optimised for seamless integration, aesthetics, and future scalability.",
      image: imgDesign,
    },
    {
      number: "03",
      title: "Professional Installation",
      description:
        "Certified technicians handle every wire, device, and connection with precision — zero compromise on quality or safety.",
      image: imgInstallation,
    },
    {
      number: "04",
      title: "White Glove Support",
      description:
        "Dedicated after-sales assistance, proactive system monitoring, and priority maintenance — we're always a call away.",
      image: imgSupport,
    },
  ];

  return (
    <section
      id="process"
      className="relative w-full py-24 lg:py-32 border-t border-border-main text-center overflow-hidden"
    >
      {/* Gradient background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F5F7FA] to-[#EBEFF5] dark:from-[#07152D] dark:via-[#051022] dark:to-[#01050E] transition-colors duration-300 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(10,132,255,0.08)_0%,rgba(10,132,255,0.03)_35%,transparent_70%)] dark:bg-[radial-gradient(circle_at_50%_30%,rgba(32,120,255,0.32)_0%,rgba(12,65,190,0.18)_22%,rgba(6,25,60,0.08)_48%,transparent_72%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(10,132,255,0.04),transparent_70%)] dark:bg-[radial-gradient(circle_at_bottom,rgba(0,70,255,0.08),transparent_70%)] pointer-events-none" />

      <div className="relative mx-auto max-w-8xl px-4 sm:px-6 z-10">
        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <span className="text font-bold tracking-[0.25em] text-accent-blue uppercase mb-4 block select-none">
            OUR PROCESS
          </span>
          <h2 className="text-center font-display text-3xl md:text-nowrap md:max-w-none sm:text-4xl lg:text-5xl font-bold text-text-main leading-tight max-w-2xl mx-auto">
            From Vision to{" "}
            <span className="text-accent-blue">Reality</span>, Step by Step
          </h2>
          <p className="mt-4 text-text-muted text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            A refined, four-phase approach designed to deliver a flawless smart
            home experience — without the complexity.
          </p>
        </div>

        {/* Desktop: 4-column grid with custom glowing vertical dividers */}
        <div className="relative hidden lg:grid grid-cols-4 gap-8 text-left">
          {steps.map((step, index) => {
            const isTop = index % 2 === 0;
            return (
              <div key={index} className="relative z-10 flex flex-col items-center w-full">
                {/* Custom vertical gradient divider as border-right on desktop */}
                {index < steps.length - 1 && (
                  <div className="absolute right-[-16px] top-0 bottom-0 w-[1.5px] bg-gradient-to-b from-[#0A84FF]/0 via-[#0A84FF]/40 to-[#0A84FF]/0 z-0 hidden lg:block" />
                )}
                {/* Timeline dot
                <div className="relative mb-6">
                  <div className="h-4 w-4 rounded-full bg-[#0A84FF] shadow-[0_0_14px_rgba(10,132,255,0.7),0_0_28px_rgba(10,132,255,0.3)]" />
                  <div className="absolute inset-0 h-4 w-4 rounded-full bg-[#0A84FF] animate-ping opacity-20" />
                </div> */}

                {/* Card */}
                <div
                  className={`relative w-full rounded-2xl border border-border-main dark:border-[#0A84FF]/15 bg-white/60 dark:bg-[#061121]/50 backdrop-blur-xl overflow-hidden group transition-all duration-500 hover:border-[#0A84FF]/50 dark:hover:border-[#0A84FF]/50 hover:shadow-[0_0_30px_rgba(10,132,255,0.08)] dark:hover:shadow-[0_0_30px_rgba(10,132,255,0.15)] ${
                    isTop ? "order-first" : "order-last"
                  }`}
                >
                  {/* Image area */}
                  <div className="relative h-[160px] overflow-hidden">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover object-center filter opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/50 to-white dark:from-[#061121]/30 dark:via-[#061121]/70 dark:to-[#061121]" />
                    {/* Step number overlay */}
                    <div className="absolute bottom-4 left-5">
                      <span className="font-display text-5xl font-black text-[#0A84FF]/10 group-hover:text-[#0A84FF]/20 transition-colors duration-500 select-none">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Content area */}
                  <div className="p-5 pt-4">
                    <h3 className="font-sans text-base font-bold text-text-main group-hover:text-accent-blue transition-colors duration-300 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs text-text-muted leading-relaxed font-sans group-hover:text-text-main transition-colors duration-300">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile: Stacked cards with left vertical timeline */}
        <div className="relative lg:hidden">
          {/* Left vertical line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-[1.5px] bg-gradient-to-b from-[#0A84FF]/0 via-[#0A84FF]/40 to-[#0A84FF]/0 z-0" />

          <div className="flex flex-col gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative flex gap-5">
                {/* Timeline dot */}
                <div className="relative shrink-0 mt-1">
                  <div className="h-[15px] w-[15px] rounded-full bg-[#0A84FF] shadow-[0_0_10px_rgba(10,132,255,0.6)] z-10 relative" />
                </div>

                {/* Card */}
                <div className="relative flex-1 rounded-2xl border border-border-main dark:border-[#0A84FF]/15 bg-white/60 dark:bg-[#061121]/50 backdrop-blur-xl overflow-hidden group transition-all duration-500 hover:border-[#0A84FF]/40 dark:hover:border-[#0A84FF]/40">
                  {/* Image area */}
                  <div className="relative h-[140px] overflow-hidden">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover object-center filter opacity-40 group-hover:opacity-55 transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/50 to-white dark:from-[#061121]/20 dark:via-[#061121]/60 dark:to-[#061121]" />
                    <div className="absolute bottom-3 left-4">
                      <span className="font-display text-4xl font-black text-[#0A84FF]/15 select-none">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 pt-3">
                    <h3 className="font-sans text-sm font-bold text-text-main group-hover:text-accent-blue transition-colors duration-300 mb-1.5">
                      {step.title}
                    </h3>
                    <p className="text-xs text-text-muted leading-relaxed font-sans group-hover:text-text-main transition-colors duration-300">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
