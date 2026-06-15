import imgConsultation from "../../../assets/images/home_v2/process_consultation.png";
import imgDesign from "../../../assets/images/home_v2/process_design.png";
import imgInstallation from "../../../assets/images/home_v2/process_installation.png";
import imgSupport from "../../../assets/images/home_v2/process_support.png";

export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Private Consultation",
      description: "We understand your lifestyle.",
      image: imgConsultation,
    },
    {
      number: "02",
      title: "Design & Planning",
      description: "Custom automation blueprint.",
      image: imgDesign,
    },
    {
      number: "03",
      title: "Professional Installation",
      description: "Executed by certified engineers.",
      image: imgInstallation,
    },
    {
      number: "04",
      title: "White Glove Support",
      description: "Dedicated after-sales assistance.",
      image: imgSupport,
    },
  ];

  return (
    <section id="process" className="relative w-full bg-bg-main py-20 lg:py-24 border-t border-border-main text-center">
      <div className="mx-auto max-w-8xl px-4 sm:px-6">
        
        {/* Title */}
        <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-accent-blue uppercase mb-12 block select-none">
          OUR PROCESS
        </span>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 text-left">
          {steps.map((step, index) => {
            return (
              <div
                key={index}
                className="relative h-[180px] p-6 border border-border-main bg-bg-main flex flex-col justify-between overflow-hidden group rounded-xl hover:border-accent-blue/30 transition-all duration-300 cursor-pointer"
              >
                {/* Background Image on Right side fading left */}
                <div className="absolute inset-y-0 right-0 w-1/2 z-0">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover object-center filter opacity-40 group-hover:opacity-60 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-bg-main via-bg-main/60 to-transparent" />
                </div>

                {/* Card Top: Number + Title */}
                <div className="relative z-10 flex items-center gap-3">
                  {/* Badge */}
                  <div className="h-8 w-8 rounded-full bg-accent-blue text-white font-sans font-bold text-xs flex items-center justify-center shrink-0">
                    {step.number}
                  </div>
                  {/* Title */}
                  <h3 className="font-sans text-sm sm:text-base font-bold text-text-main group-hover:text-accent-blue transition-colors duration-300">
                    {step.title}
                  </h3>
                </div>

                {/* Card Bottom: Description */}
                <p className="relative z-10 text-xs text-text-muted max-w-[160px] leading-relaxed font-sans">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Timeline connector (Visible only on desktop lg screens) */}
        <div className="relative mt-8 w-full hidden lg:block">
          {/* Main Horizontal Timeline Line */}
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-border-main -translate-y-1/2 z-0" />
          
          {/* Grid matching the cards grid to align dots to the left of each column */}
          <div className="grid grid-cols-4 gap-6 lg:gap-8 w-full relative z-10">
            {steps.map((_, index) => (
              <div key={index} className="relative flex items-center justify-start">
                <div className="h-2 w-2 rounded-full bg-white border border-accent-blue -translate-x-1 -translate-y-1/2" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
