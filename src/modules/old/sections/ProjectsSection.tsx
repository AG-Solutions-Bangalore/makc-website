import { ArrowRight } from "lucide-react";
const imgVillas = getImageUrl("project_villas.webp");
const imgApartments = getImageUrl("project_apartments.webp");
const imgFarmhouses = getImageUrl("project_farmhouses.webp");
const imgPenthouses = getImageUrl("project_penthouses.webp");
const imgCommercial = getImageUrl("project_commercial.webp");
import { Link } from "react-router";
import { getImageUrl, getResponsiveHomeImageUrl } from "@/utils/image";


export default function ProjectsSection() {
  const projects = [
    {
      name: "Luxury Villas",
      image: imgVillas,
      imageMobile: getResponsiveHomeImageUrl("project_villas.webp", 480),
      imageDesktop: getResponsiveHomeImageUrl("project_villas.webp", 768),
    },
    {
      name: "Apartments",
      image: imgApartments,
      imageMobile: getResponsiveHomeImageUrl("project_apartments.webp", 480),
      imageDesktop: getResponsiveHomeImageUrl("project_apartments.webp", 768),
    },
    {
      name: "Farmhouses",
      image: imgFarmhouses,
      imageMobile: getResponsiveHomeImageUrl("project_farmhouses.webp", 480),
      imageDesktop: getResponsiveHomeImageUrl("project_farmhouses.webp", 768),
    },
    {
      name: "Penthouses",
      image: imgPenthouses,
      imageMobile: getResponsiveHomeImageUrl("project_penthouses.webp", 480),
      imageDesktop: getResponsiveHomeImageUrl("project_penthouses.webp", 768),
    },
    {
      name: "Commercial Spaces",
      image: imgCommercial,
      imageMobile: getResponsiveHomeImageUrl("project_commercial.webp", 480),
      imageDesktop: getResponsiveHomeImageUrl("project_commercial.webp", 768),
    },
  ];

  return (
    <section id="projects" className="relative w-full py-20 lg:py-24 border-t border-border-main text-center overflow-hidden">
      {/* Gradient background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F5F7FA] to-[#EBEFF5] dark:from-[#07152D] dark:via-[#051022] dark:to-[#01050E] transition-colors duration-300 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(10,132,255,0.08)_0%,rgba(10,132,255,0.03)_35%,transparent_70%)] dark:bg-[radial-gradient(circle_at_15%_20%,rgba(32,120,255,0.32)_0%,rgba(12,65,190,0.18)_22%,rgba(6,25,60,0.08)_48%,transparent_72%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_75%,rgba(10,132,255,0.04),transparent_70%)] dark:bg-[radial-gradient(circle_at_85%_75%,rgba(0,70,255,0.08),transparent_70%)] pointer-events-none" />

      <div className="relative mx-auto max-w-8xl px-4 sm:px-6 z-10">
        
        {/* ================= FEATURED PROJECTS SUBSECTION ================= */}
        <div id="interior" className="flex flex-col items-center reveal-on-scroll reveal-up" data-reveal-duration="0.8s">
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
                className="relative overflow-hidden group aspect-[16/10] w-full border border-border-main cursor-pointer transition-all duration-300 hover:scale-[1.02] reveal-on-scroll reveal-scale"
                data-reveal-delay={`${index * 100}ms`}
                data-reveal-duration="0.7s"
              >
                {/* Project Image with Zoom Effect */}
                <picture>
                  <source media="(max-width: 640px)" srcSet={project.imageMobile} type="image/avif" />
                  <source srcSet={project.imageDesktop} type="image/avif" />
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover object-center transition-all duration-500 group-hover:scale-105"
                    width={1024}
                    height={1024}
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                  />
                </picture>
                
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
          <Link to="/projects" className="home-wave-cta cursor-pointer apple-border-shine flex rounded-full items-center gap-2 border border-border-main text-text-main px-8 py-3.5 uppercase text-[10px] sm:text-[11px] font-bold tracking-widest bg-transparent" style={{ '--cta-accent': '#0A84FF' } as React.CSSProperties}>
            <span className="relative z-10">Explore All Projects</span>
            <ArrowRight className="h-5 w-5 relative z-10" />
          </Link>
        </div>

      </div>
    </section>
  );
}
