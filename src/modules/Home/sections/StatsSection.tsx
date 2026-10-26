import { Home, Award, ShieldCheck, MapPin } from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      icon: Home,
      value: "800+",
      label: "Luxury Homes Automated",
    },
    {
      icon: Award,
      value: "8+",
      label: "Years of Excellence",
    },
    {
      icon: ShieldCheck,
      value: "5-Year Guarantee",
      label: "Installation Warranty",
    },
    {
      icon: MapPin,
      value: "5+ states",
      label: "Serving Across India",
    },
  ];

  return (
    <div className="relative w-full z-20 bg-transparent border-none py-4 sm:py-6 lg:pb-12">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-[auto_auto] justify-center gap-x-5 gap-y-5 sm:gap-x-10 sm:gap-y-6 xl:grid-cols-4 xl:justify-items-stretch xl:gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="relative flex items-center sm:items-start justify-start gap-2 min-[360px]:gap-2.5 sm:gap-3.5 md:gap-4 xl:gap-3 2xl:gap-4 px-0 xl:px-2 2xl:px-6 min-w-0 text-left group"
              >
                {/* Custom vertical gradient divider as border-right on desktop */}
                {index < stats.length - 1 && (
                  <div className="absolute right-0 top-0 bottom-0 w-[1.5px] bg-gradient-to-b from-[#0A84FF]/0 via-[#0A84FF]/40 to-[#0A84FF]/0 z-0 hidden xl:block" />
                )}
                {/* Icon wrapper */}
                <div className="h-6 w-6 sm:h-8 sm:w-8 lg:h-9 lg:w-9 xl:h-8 xl:w-8 2xl:h-10 2xl:w-10 shrink-0 flex items-center justify-center text-accent-blue transition-all duration-300">
                  <Icon className="h-full w-full stroke-[1.75]" />
                </div>

                {/* Text wrapper */}
                <div className="flex flex-col min-w-0">
                  <span className="text-[13px] min-[360px]:text-sm sm:text-xl md:text-2xl font-extrabold text-text-main tracking-tight leading-tight whitespace-normal min-[380px]:whitespace-nowrap group-hover:text-accent-blue transition-colors duration-200">
                    {stat.value}
                  </span>
                  <span className="text-[9.5px] min-[360px]:text-[10px] sm:text-xs text-text-muted tracking-wide font-medium mt-0.5 sm:mt-1 leading-tight sm:leading-snug">
                    {stat.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
