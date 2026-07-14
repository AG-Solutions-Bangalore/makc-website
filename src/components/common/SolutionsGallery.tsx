import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { getImageUrl } from "@/utils/image";


gsap.registerPlugin(ScrollTrigger);

const columns = [
  // Column 1 (Left column in wireframe)
  [
    { src: getImageUrl("Rectangle 54361.webp"), alt: "Cozy interior living room swing and sofa layout" },
       { src: getImageUrl("Rectangle 54366.webp"), alt: "Smart touch panel control plate on grooved wall panels" },
    { src: getImageUrl("Rectangle 54367.webp"), alt: "Modern double story villa facade view at sunset" }
  ],
  // Column 2 (Middle column in wireframe)
  [
    { src: getImageUrl("Rectangle 54360.webp"), alt: "Close up of touch pad switch mounted on wood panels" },
    { src: getImageUrl("Rectangle 54368.webp"), alt: "Luxury bedroom design with warm cove lights and watermark" },
    { src: getImageUrl("Rectangle 54364.webp"), alt: "Matte black socket outlets on wood boards with leaves decoration" }
  ],
  // Column 3 (Right column in wireframe)
  [
    { src: getImageUrl("Rectangle 54362.webp"), alt: "Sleek biometric finger print door lock panel" },

     { src: getImageUrl("Rectangle 54363.webp"), alt: "Temple room background with backlit wall decoration" },
    { src: getImageUrl("Group 212355.webp"), alt: "Luxury entrance door lock handle mechanism close up" }
  ]
];

export default function SolutionsGallery() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });

    tl.from(".gallery-title", {
      y: 30,
      autoAlpha: 0,
      duration: 0.8,
      ease: "power3.out"
    })
      .from(".gallery-col", {
        y: 40,
        autoAlpha: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.55");
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto no-reveal">
      
      {/* Title */}
      <h2 className="gallery-title text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-main text-center mb-16 font-sans">
        MAKc Automation And <br className="hidden sm:inline" /> Solutions Gallery
      </h2>

      {/* Masonry Layout: 3 Columns */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center">
        {columns.map((col, colIdx) => (
          <div 
            key={colIdx} 
            className="gallery-col w-full md:w-1/3 flex flex-col gap-6 md:gap-8"
          >
            {col.map((item, itemIdx) => (
              <div 
                key={itemIdx}
                className="relative overflow-hidden rounded-[2rem] border border-border-main/30 shadow-md group bg-neutral-900 aspect-[4/3] md:aspect-auto"
              >
                <img 
                  src={item.src} 
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                {/* Subtle dark ambient overlay on hover */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
              </div>
            ))}
          </div>
        ))}
      </div>

    </section>
  );
}
