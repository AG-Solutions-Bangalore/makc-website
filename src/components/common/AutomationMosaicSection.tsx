import { useRef, useState, useEffect } from "react";
import type { CSSProperties } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { getImageUrl } from "@/utils/image";

gsap.registerPlugin(ScrollTrigger);

interface AutomationMosaicImage {
  src: string;
  alt?: string;
}

interface AutomationMosaicSectionProps {
  title: string;
  description: string;
  types: string[];
  features?: string[];
  suitableText?: string;
  images: AutomationMosaicImage[]; // Expecting exactly 3 images
  imagePosition?: "left" | "right";
  prefix: string;
  serviceName: string; // The service name to match in the getWebReel API
}

export default function AutomationMosaicSection({
  title,
  description,
  types,
  features = [],
  suitableText,
  images,
  imagePosition = "left",
  prefix,
  serviceName,
}: AutomationMosaicSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
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
          (item: any) => item.services === serviceName
        );
        
        if (serviceData) {
          if (serviceData.services_type === "Reel") {
            setMediaData({
              type: "Reel",
              url: serviceData.services_url_image,
            });
          } else {
            // Find base image url for Reels
            const reelsBase = json.image_url?.find(
              (img: any) => img.image_for === "Reels"
            )?.image_url || "https://agsdemo.in/macapi/public/assets/images/reels_images/";
            
            // If the image path is a URL, use it, else concatenate with base URL
            const isFullUrl = serviceData.services_url_image.startsWith("http");
            setMediaData({
              type: "Image",
              url: isFullUrl ? serviceData.services_url_image : `${reelsBase}${serviceData.services_url_image}`,
            });
          }
        } else {
          // If no matching service, fallback to default props
          setMediaData({
            type: "Image",
            url: getImageUrl(images[0]?.src || ""),
          });
        }
      } catch (err) {
        console.error(`Failed to load media for ${serviceName}:`, err);
        setMediaData({
          type: "Image",
          url: getImageUrl(images[0]?.src || ""),
        });
      } finally {
        setLoading(false);
      }
    };

    fetchMedia();
  }, [serviceName, images]);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Animate the image mosaic
      tl.from(`.${prefix}-img`, {
        y: 40,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });

      // Stagger the text content blocks
      tl.from(
        `.${prefix}-content > *`,
        {
          y: 20,
          autoAlpha: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power3.out",
        },
        "-=0.6",
      );
    },
    { scope: sectionRef },
  );

  const renderContent = () => (
    <div className={`${prefix}-content flex flex-col gap-7 ${imagePosition === "right" ? "lg:order-first" : "lg:order-last"}`}>
      {/* Heading block */}
      <div>
        <h2
          className="text-4xl sm:text-5xl font-bold text-text-main leading-[1.1] tracking-tight mb-3"
          style={{ textWrap: "balance" } as CSSProperties}
        >
          {title}
        </h2>
        <p className="text-text-muted text-base leading-relaxed">
          {description}
        </p>
      </div>

      {/* Types checklist */}
      {types.length > 0 && (
        <ul className="space-y-3">
          {types.map((type) => (
            <li key={type} className="flex items-center gap-3">
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500 text-white shrink-0 shadow-md">
                <svg
                  className="w-3.5 h-3.5 stroke-[3]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span className="text-sm font-medium text-text-main">
                {type}
              </span>
            </li>
          ))}
        </ul>
      )}

      {/* Features panel */}
      {(features.length > 0 || suitableText) && (
        <div className="bg-bg-surface border border-border-main/30 rounded-xl p-6">
          {features.length > 0 && (
            <ul className="space-y-2.5 mb-5">
              {features.map((feat) => (
                <li key={feat} className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-blue shrink-0" />
                  <span className="text-sm text-text-muted">{feat}</span>
                </li>
              ))}
            </ul>
          )}
          {suitableText && (
            <p className={`text-sm font-semibold text-text-main leading-relaxed ${features.length > 0 ? "border-t border-border-main/30 pt-4" : ""}`}>
              {suitableText}
            </p>
          )}
        </div>
      )}
    </div>
  );

  return (
    <section ref={sectionRef} className="mb-28 no-reveal">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        
        {/* Left/Right Column: Image Mosaic */}
        <div className={`grid grid-cols-2 gap-3 ${imagePosition === "right" ? "lg:order-last" : "lg:order-first"}`}>
          
          {/* 1st Card: Tall left image (Dynamic content, Reel or Image from the API) */}
          <div className={`${prefix}-img row-span-2 relative rounded-2xl overflow-hidden bg-bg-surface border border-border-main/30 shadow-inner`}>
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
                      title={`${title} Video Demonstration`}
                    />
                  );
                })()
              ) : (
                <img
                  src={mediaData?.url || getImageUrl(images[0]?.src || "")}
                  alt={images[0]?.alt || `${title} demonstration`}
                  className="w-full h-full object-cover transition-transform duration-750 hover:scale-[1.04]"
                />
              )}
            </div>
            <div className="aspect-[9/16] lg:aspect-[3/4]" />
          </div>

          {/* 2nd Card: Top-right wider image */}
          <div className={`${prefix}-img relative rounded-2xl overflow-hidden aspect-[4/3] group border border-border-main/20 shadow-md`}>
            <img
              src={getImageUrl(images[1]?.src || "")}
              alt={images[1]?.alt || `${title} secondary view`}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-750 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
          </div>

          {/* 3rd Card: Bottom-right wider image */}
          <div className={`${prefix}-img relative rounded-2xl overflow-hidden aspect-[4/3] group border border-border-main/20 shadow-md`}>
            <img
              src={getImageUrl(images[2]?.src || "")}
              alt={images[2]?.alt || `${title} tertiary view`}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-750 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
          </div>

        </div>

        {/* Content Column */}
        {renderContent()}

      </div>
    </section>
  );
}
