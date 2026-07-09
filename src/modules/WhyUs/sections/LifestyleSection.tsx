import { Sun, Clapperboard, Lock, Music, Moon } from "lucide-react";

export default function LifestyleSection() {
  const modes = [
    {
      icon: Sun,
      title: "Morning Mode",
      description: "Wake to natural lighting and soft music.",
    },
    {
      icon: Clapperboard,
      title: "Movie Mode",
      description: "Lights dim. Curtains close. Theatre begins.",
    },
    {
      icon: Lock,
      title: "Away Mode",
      description: "Every security system activates automatically.",
    },
    {
      icon: Music,
      title: "Party Mode",
      description: "Lighting. Music. Climate. Everything synchronized.",
    },
    {
      icon: Moon,
      title: "Night Mode",
      description: "One touch. Entire home prepares for sleep.",
    },
  ];

  return (
    <section id="lifestyle" className="relative w-full py-20 lg:py-24 border-t border-border-main text-center overflow-hidden">
      {/* Gradient background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F5F7FA] to-[#EBEFF5] dark:from-[#07152D] dark:via-[#051022] dark:to-[#01050E] transition-colors duration-300 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(10,132,255,0.08)_0%,rgba(10,132,255,0.03)_35%,transparent_70%)] dark:bg-[radial-gradient(circle_at_15%_20%,rgba(32,120,255,0.32)_0%,rgba(12,65,190,0.18)_22%,rgba(6,25,60,0.08)_48%,transparent_72%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_75%,rgba(10,132,255,0.04),transparent_70%)] dark:bg-[radial-gradient(circle_at_85%_75%,rgba(0,70,255,0.08),transparent_70%)] pointer-events-none" />

      <div className="relative mx-auto max-w-8xl px-4 sm:px-6 z-10">
        
        {/* ================= LIFESTYLE MODES SUBSECTION ================= */}
        <div className="flex flex-col items-center reveal-on-scroll reveal-up" data-reveal-duration="0.8s">
          <span className="font-bold tracking-[0.2em] text-accent-blue uppercase">
            MORE THAN AUTOMATION
          </span>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-extrabold text-text-main tracking-tight leading-tight">
            A Lifestyle Upgrade.
          </h2>
        </div>

        {/* 5 Modes Row with Custom Glowing Dividers */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-10 lg:gap-y-0 mt-12 lg:mt-16">
          {modes.map((mode, index) => {
            const Icon = mode.icon;
            return (
              <div
                key={index}
                className="relative flex flex-col items-center text-center px-4 reveal-on-scroll reveal-up"
                data-reveal-delay={`${index * 100}ms`}
                data-reveal-duration="0.6s"
              >
                {/* Custom vertical gradient divider as border-right on desktop */}
                {index < modes.length - 1 && (
                  <div className="absolute right-0 top-0 bottom-0 w-[1.5px] bg-gradient-to-b from-[#0A84FF]/0 via-[#0A84FF]/40 to-[#0A84FF]/0 z-0 hidden lg:block" />
                )}
                {/* Mode Icon */}
                <div className="text-accent-blue apple-border-shine rounded-full p-2 flex items-center justify-center h-12 w-12 shrink-0">
                  <Icon className="h-10 w-10 stroke-[1.5]" />
                </div>

                {/* Mode Title */}
                <h3 className="font-sans text-xs sm:text-[13px] font-bold text-text-main mt-4">
                  {mode.title}
                </h3>

                {/* Mode Description */}
                <p className="mt-2 font-sans text-[10px] sm:text-xs text-text-muted leading-relaxed font-normal max-w-[130px] mx-auto">
                  {mode.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
