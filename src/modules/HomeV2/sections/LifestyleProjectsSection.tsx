import { Sun, Clapperboard, Lock, Music, Moon, ArrowRight } from "lucide-react";
import imgVillas from "../../../assets/images/home_v2/project_villas.png";
import imgApartments from "../../../assets/images/home_v2/project_apartments.png";
import imgFarmhouses from "../../../assets/images/home_v2/project_farmhouses.png";
import imgPenthouses from "../../../assets/images/home_v2/project_penthouses.png";
import imgCommercial from "../../../assets/images/home_v2/project_commercial.png";

export default function LifestyleProjectsSection() {
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

  const projects = [
    {
      name: "Luxury Villas",
      image: imgVillas,
    },
    {
      name: "Apartments",
      image: imgApartments,
    },
    {
      name: "Farmhouses",
      image: imgFarmhouses,
    },
    {
      name: "Penthouses",
      image: imgPenthouses,
    },
    {
      name: "Commercial Spaces",
      image: imgCommercial,
    },
  ];

  return (
    <section id="projects" className="relative w-full bg-bg-main py-20 lg:py-24 border-t border-border-main text-center">
      <div className="mx-auto max-w-8xl px-4 sm:px-6">
        
        {/* ================= LIFESTYLE MODES SUBSECTION ================= */}
        <div className="flex flex-col items-center">
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
                className="relative flex flex-col items-center text-center px-4"
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

        {/* ================= FEATURED PROJECTS SUBSECTION ================= */}
        <div id="interior" className="flex flex-col items-center mt-20 lg:mt-24">
          <span className="font-bold tracking-[0.2em] text-accent-blue uppercase">
            FEATURED PROJECTS
          </span>
        </div>

        {/* 5 Project Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 mt-8">
          {projects.map((project, index) => {
            return (
              <div
                key={index}
                className="relative overflow-hidden group aspect-[16/10] w-full border border-border-main cursor-pointer transition-all duration-300 hover:scale-[1.02]"
              >
                {/* Project Image with Zoom Effect */}
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover object-center transition-all duration-500 group-hover:scale-105"
                />
                
                {/* Semi-transparent Dark overlay */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-300" />
                
                {/* Project Label Bottom Left */}
                <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm px-3 py-1 font-sans text-[11px] sm:text-xs font-semibold text-white tracking-wide">
                  {project.name}
                </div>
              </div>
            );
          })}
        </div>

        {/* Explore Button */}
        <div className="flex justify-center mt-12">
          <button className="home-wave-cta cursor-pointer apple-border-shine flex rounded-full items-center gap-2 border border-border-main text-text-main px-8 py-3.5 uppercase text-[10px] sm:text-[11px] font-bold tracking-widest bg-transparent" style={{ '--cta-accent': '#0A84FF' } as React.CSSProperties}>
            <span className="relative z-10">Explore All Projects</span>
            <ArrowRight className="h-5 w-5 relative z-10" />
          </button>
        </div>

      </div>
    </section>
  );
}
