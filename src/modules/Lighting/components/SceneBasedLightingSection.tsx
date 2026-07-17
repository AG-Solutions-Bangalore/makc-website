import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { getImageUrl } from "@/utils/image";

gsap.registerPlugin(ScrollTrigger);

const scenes = [
  "Morning Mode",
  "Evening Relax Mode",
  "Movie / TV Mode",
  "Party Mode",
  "Night Mode",
  "Time-Based",
];

export default function SceneBasedLightingSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mediaData, setMediaData] = useState<{
    type: "Reel" | "Image";
    url: string;
  } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const res = await fetch("https://agsdemo.in/macapi/public/api/getWebReel");
        if (!res.ok) throw new Error("API error");
        const json = await res.json();
        
        const serviceData = json.data?.find(
          (item: any) => item.services === "Scene-Based Lighting"
        );
        
        if (serviceData) {
          if (serviceData.services_type === "Reel") {
            setMediaData({
              type: "Reel",
              url: serviceData.services_url_image,
            });
          } else {
            const reelsBase = json.image_url?.find(
              (img: any) => img.image_for === "Reels"
            )?.image_url || "https://agsdemo.in/macapi/public/assets/images/reels_images/";
            
            setMediaData({
              type: "Image",
              url: `${reelsBase}${serviceData.services_url_image}`,
            });
          }
        }
      } catch (err) {
        console.error("Failed to load scene lighting media:", err);
        setMediaData({
          type: "Image",
          url: getImageUrl("lightimage1.webp"),
        });
      } finally {
        setLoading(false);
      }
    };

    fetchMedia();
  }, []);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Stagger the image mosaic
      tl.from(".sbl-img", {
        y: 40,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      }).from(
        ".sbl-content-fade > *",
        {
          y: 25,
          autoAlpha: 0,
          stagger: 0.12,
          duration: 0.7,
          ease: "power3.out",
        },
        "-=0.6",
      );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="mb-28 no-reveal border-t border-border-main/30 pt-20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Image Mosaic */}
        <div className="lg:col-span-6 grid grid-cols-2 gap-4">
          {/* Tall left image - Dynamic content from API (Reel or Image) */}
          <div className="sbl-img row-span-2 relative rounded-[2rem] overflow-hidden bg-bg-surface border border-border-main/20 shadow-md">
            <div className="absolute inset-0 overflow-hidden">
              {loading ? (
                <div className="w-full h-full flex items-center justify-center bg-bg-surface">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent-blue" />
                </div>
              ) : mediaData?.type === "Reel" ? (
                (() => {
                  const match = mediaData.url.match(/\/reel\/([a-zA-Z0-9_-]+)/) || mediaData.url.match(/\/p\/([a-zA-Z0-9_-]+)/);
                  const id = match ? match[1] : "DTp5xiDj82a";
                  return (
                    <iframe
                      src={`https://www.instagram.com/reel/${id}/embed`}
                      className="absolute w-full h-[calc(100%+120px)] -top-[60px] left-0 lg:w-[150%] lg:h-[150%] lg:-top-[25%] lg:-left-[25%] border-0"
                      allowFullScreen
                      scrolling="no"
                      allow="encrypted-media"
                      title="Scene-Based Lighting Video Demonstration"
                    />
                  );
                })()
              ) : (
                <img
                  src={mediaData?.url || getImageUrl("lightimage1.webp")}
                  alt="Circadian ambient lighting layout"
                  className="w-full h-full object-cover transition-transform duration-750 hover:scale-[1.04]"
                />
              )}
            </div>
            <div className="aspect-[9/16] lg:aspect-[3/4]" />
          </div>

          {/* Top-right: wider dining room */}
          <div className="sbl-img relative rounded-[2rem] overflow-hidden aspect-[4/3] group border border-border-main/20 shadow-md">
            <img
              src={getImageUrl("lightimage2.webp")}
              alt="Temple room design with backlit gold panels and chandelier"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-750 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-black/15" />
          </div>

          {/* Bottom-right: close-up switch */}
          <div className="sbl-img relative rounded-[2rem] overflow-hidden aspect-[4/3] group border border-border-main/20 shadow-md">
            <img
              src={getImageUrl("lightimage3.webp")}
              alt="Tactile wall lighting touch panel mounted near bedroom wall"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-750 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-black/15" />
          </div>
        </div>

        {/* Right Column: Features Content */}
        <div className="lg:col-span-6 sbl-content-fade flex flex-col gap-6 pl-0 lg:pl-6">
          {/* Heading */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-text-main leading-[1.1] tracking-tight mb-4 font-sans">
              Scene-Based Lighting
            </h2>
            <p className="text-text-muted text-sm sm:text-base leading-relaxed font-normal">
              Set multiple lights to work together with a single command.
            </p>
          </div>

          {/* Popular Scenes Panel card */}
          <div className="bg-bg-surface border border-border-main/30 rounded-3xl p-6 sm:p-8 shadow-sm">
            <h3 className="text-text-main text-base sm:text-lg font-bold mb-4 font-sans select-none">
              Popular Scenes
            </h3>
            <ul className="space-y-3.5 mb-6">
              {scenes.map((scene) => (
                <li key={scene} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 shadow-[0_0_8px_rgba(16,185,129,0.4)]" />
                  <span className="text-text-muted text-sm font-medium">
                    {scene}
                  </span>
                </li>
              ))}
            </ul>
            <div className="border-t border-border-main/40 pt-4 mt-2">
              <p className="text-text-main text-sm font-bold leading-relaxed">
                One tap adjusts brightness, colour, and light zones instantly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
