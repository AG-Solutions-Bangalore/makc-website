import { useRef, useState, useEffect } from "react";
import type { CSSProperties } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { getImageUrl } from "@/utils/image";
import { API_BASE_URL } from "@/config/constants";
// import { ExternalLink } from "lucide-react";
import InstagramEmbed from "./InstagramEmbed";

gsap.registerPlugin(ScrollTrigger);

const VIDEO_BASE = getImageUrl("video/reels");

const VIDEO_MAP: Record<string, string> = {
  "Dimming & Tuning of Lights": "dimming-and-tuning.mp4",
  "Electrical Automation": "electrical-automation.mp4",
  "Mesh Wi-Fi Network": "mesh-wifi.mp4",
  "RGB Lighting": "rgb-mood-lighting.mp4",
  "Scene-Based Lighting": "scene-based-lighting.mp4",
  "Sensor-Based": "sensor-protection.mp4",
  "Wired Network": "wired-network.mp4",
  "Gate Automation": "gate-automation.mp4",
};

const REEL_MAP: Record<string, string> = {
  "Curtain Automation": "https://www.instagram.com/reel/DQ38odUkpZr/",
  "Gate Automation": "https://www.instagram.com/reel/DdNJx4tKGAK/",
  "Electrical Automation": "https://www.instagram.com/reel/DKHEqiVSl4-/",
  "Smart Switches": "https://www.instagram.com/reel/DKHEqiVSl4-/",
  "Wired Network": "https://www.instagram.com/reel/DKeUhreyEct/",
  "Mesh Wi-Fi Network": "https://www.instagram.com/reel/DKeUhreyEct/",
  Networking: "https://www.instagram.com/reel/DKeUhreyEct/",
  "Sensor-Based": "https://www.instagram.com/reel/DSC30D1jZ1h/",
  Security: "https://www.instagram.com/reel/DSC30D1jZ1h/",
  "CCTV & Video": "https://www.instagram.com/reel/DTJNMgzk284/",
  "Dimming & Tuning of Lights": "https://www.instagram.com/reel/DBYze7SySVh/",
  "Outdoor & Landscape Lighting": "https://www.instagram.com/reel/Dbt7nF7yjHG/",
};

interface AutomationMosaicImage {
  src: string;
  alt?: string;
  title?: string;
  objectPosition?: string;
  className?: string;
}

// Keep the fallback reference stable. A new [] on every render makes the media
// effect below run again, which in turn updates state and can lock the route.
const EMPTY_IMAGES: AutomationMosaicImage[] = [];

interface AutomationMosaicSectionProps {
  id?: string;
  title: string;
  description: string;
  types: string[];
  features?: string[];
  suitableText?: string;
  images?: AutomationMosaicImage[]; // Expecting exactly 3 images (optional when reels is provided)
  imagePosition?: "left" | "right";
  prefix: string;
  serviceName: string; // The service name to match in the getWebReel API
  reelUrl?: string; // Optional direct reel URL
  reels?: string[]; // Optional array of reel URLs to render side-by-side (replaces images)
  reelTitles?: string[]; // Optional titles for reel links (SEO/accessibility)
}



export default function AutomationMosaicSection({
  id,
  title,
  description,
  types,
  features = [],
  suitableText,
  images = EMPTY_IMAGES,
  imagePosition = "left",
  prefix,
  serviceName,
  reelUrl,
  reels,
  // reelTitles,
}: AutomationMosaicSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const galleryScrollRef = useRef<HTMLDivElement>(null);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
  const [mediaData, setMediaData] = useState<{
    type: "Reel" | "Instagram" | "Image";
    url: string;
    embedUrl?: string;
  } | null>(null);
  const [loading, setLoading] = useState(true);

  const handleGalleryScroll = () => {
    const el = galleryScrollRef.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    if (!card) return;
    const cardWidth = card.offsetWidth + 14;
    const index = Math.round(el.scrollLeft / cardWidth);
    const totalCount = reels && reels.length > 1 ? reels.length : (images.length || 3);
    setActiveGalleryIndex(Math.min(Math.max(0, index), totalCount - 1));
  };

  useEffect(() => {
    const controller = new AbortController();
    let cancelled = false;
    const setMediaIfActive = (
      media: {
        type: "Reel" | "Instagram" | "Image";
        url: string;
        embedUrl?: string;
      } | null,
    ) => {
      if (!cancelled) setMediaData(media);
    };

    // 1. Priority: reelUrl prop or REEL_MAP (Instagram Reel Embeds)
    const targetReel = reelUrl || REEL_MAP[serviceName];
    if (targetReel) {
      if (targetReel.includes("instagram.com")) {
        const match = targetReel.match(/\/(?:reel|p)\/([A-Za-z0-9_-]+)/);
        const reelCode = match ? match[1] : "";
        if (reelCode) {
          setMediaIfActive({
            type: "Instagram",
            url: targetReel,
            embedUrl: `https://www.instagram.com/reel/${reelCode}/embed/`,
          });
          if (!cancelled) setLoading(false);
          return;
        }
      } else if (targetReel.endsWith(".mp4")) {
        setMediaIfActive({
          type: "Reel",
          url: targetReel.startsWith("http")
            ? targetReel
            : `${VIDEO_BASE}/${targetReel}`,
        });
        if (!cancelled) setLoading(false);
        return;
      }
    }

    // 2. Priority: VIDEO_MAP fallback
    const targetMp4 = VIDEO_MAP[serviceName];
    if (targetMp4) {
      setMediaIfActive({
        type: "Reel",
        url: targetMp4.startsWith("http")
          ? targetMp4
          : `${VIDEO_BASE}/${targetMp4}`,
      });
      if (!cancelled) setLoading(false);
      return;
    }

    // 3. Fallback: getWebReel API
    const fetchMedia = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/getWebReel`, {
          signal: controller.signal,
        });
        if (!res.ok) throw new Error("API error");
        const json = await res.json();

        const serviceData = json.data?.find(
          (item: any) => item.services === serviceName,
        );

        if (serviceData) {
          const reelsBase =
            json.image_url?.find((img: any) => img.image_for === "Reels")
              ?.image_url || `${VIDEO_BASE}/`;

          const isFullUrl = serviceData.services_url_image.startsWith("http");
          const finalUrl = isFullUrl
            ? serviceData.services_url_image
            : `${reelsBase}${serviceData.services_url_image}`;

          const isDirectVideo =
            finalUrl.toLowerCase().endsWith(".mp4") ||
            (serviceData.services_type === "Reel" &&
              !finalUrl.includes("instagram.com") &&
              !finalUrl.includes("youtube.com") &&
              !finalUrl.includes("youtu.be"));

          if (isDirectVideo) {
            setMediaIfActive({
              type: "Reel",
              url: finalUrl,
            });
          } else if (finalUrl.includes("instagram.com")) {
            const match = finalUrl.match(/\/(?:reel|p)\/([A-Za-z0-9_-]+)/);
            const reelCode = match ? match[1] : "";
            if (reelCode) {
              setMediaIfActive({
                type: "Instagram",
                url: finalUrl,
                embedUrl: `https://www.instagram.com/reel/${reelCode}/embed/`,
              });
              return;
            }
          } else {
            setMediaIfActive({
              type: "Image",
              url: getImageUrl(images[0]?.src || ""),
            });
          }
        } else {
          setMediaIfActive({
            type: "Image",
            url: getImageUrl(images[0]?.src || ""),
          });
        }
      } catch (err) {
        if ((err as Error).name !== "AbortError") {
          console.error(`Failed to load media for ${serviceName}:`, err);
        }
        setMediaIfActive({
          type: "Image",
          url: getImageUrl(images[0]?.src || ""),
        });
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchMedia();
    return () => {
      cancelled = true;
      controller.abort();
    };
  }, [serviceName, images, reelUrl]);

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
    <div
      className={`${prefix}-content flex flex-col gap-7 ${imagePosition === "right" ? "lg:order-first" : "lg:order-last"}`}
    >
      {/* Heading block */}
      <div>
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-main leading-[1.1] tracking-tight mb-3"
          style={{ textWrap: "balance" } as CSSProperties}
        >
          {title}
        </h2>
        <p className="text-text-muted text-base leading-relaxed">
          {description}
        </p>
      </div>

      {/* Types checklist (2-column layout) */}
      {types.length > 0 && (
        <ul className="grid grid-cols-2 gap-x-3 sm:gap-x-6 gap-y-3.5">
          {types.map((type) => (
            <li key={type} className="flex items-start gap-2.5 sm:gap-3 min-w-0 last:odd:col-span-2">
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500 text-white! shrink-0 shadow-md mt-0.5">
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
              <span className="text-sm font-medium text-text-main leading-snug min-w-0 break-words">{type}</span>
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
                  <span className="text-sm text-text-muted">{feat}</span>
                </li>
              ))}
            </ul>
          )}
          {suitableText && (
            <p
              className={`text-sm font-semibold text-text-main leading-relaxed ${features.length > 0 ? "border-t border-border-main/30 pt-4" : ""}`}
            >
              {suitableText}
            </p>
          )}
        </div>
      )}
    </div>
  );

  return (
    <section
      id={id}
      ref={sectionRef}
      className="mb-10 sm:mb-16 lg:mb-24 no-reveal scroll-mt-28"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
        <div className={`w-full max-w-lg mx-auto lg:max-w-none ${imagePosition === "right" ? "lg:order-last" : "lg:order-first"}`}>
          <div
            ref={galleryScrollRef}
            onScroll={handleGalleryScroll}
            className="flex lg:grid flex-nowrap lg:grid-cols-2 gap-3.5 lg:gap-3 overflow-x-auto lg:overflow-visible snap-x snap-mandatory scrollbar-none touch-pan-x -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0 pb-2 lg:pb-0"
          >
            {reels && reels.length > 1 ? (
              /* ── Double-Reel Layout ── */
              <>
                {reels.map((reel, idx) => (
                  <div
                    key={idx}
                    className={`${prefix}-img shrink-0 snap-center w-[82vw] sm:w-[70vw] max-w-[340px] h-[460px] sm:h-[480px] lg:w-full lg:max-w-none lg:h-[560px] relative rounded-2xl overflow-hidden bg-bg-surface border border-border-main/30 shadow-inner scrollbar-none`}
                  >
                    <div className="absolute inset-0 w-full h-full overflow-hidden">
                      <InstagramEmbed reelUrl={reel} />
                    </div>
                  </div>
                ))}
              </>
            ) : (
              /* ── Original 3-Image Mosaic Layout ── */
              <>
                {/* 1st Card: Tall left image (Dynamic content, Reel or Image from the API) */}
                <div
                  className={`${prefix}-img shrink-0 snap-center w-[82vw] sm:w-[70vw] max-w-[340px] h-[460px] sm:h-[480px] lg:w-full lg:max-w-none lg:h-full lg:min-h-[560px] lg:row-span-2 relative rounded-2xl overflow-hidden bg-bg-surface border border-border-main/30 shadow-inner scrollbar-none`}
                >
                  <div className="absolute inset-0 overflow-hidden w-full h-full">
                    {loading ? (
                      <div className="w-full h-full flex items-center justify-center bg-bg-surface">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent-blue" />
                      </div>
                    ) : mediaData?.type === "Instagram" && mediaData.embedUrl ? (
                      <InstagramEmbed reelUrl={mediaData.url} />
                    ) : mediaData?.type === "Reel" ? (
                      <div className="relative w-full h-full">
                        <video
                          src={mediaData.url}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover"
                        />
                        {(reelUrl || REEL_MAP[serviceName]) && (
                          <a
                            href={reelUrl || REEL_MAP[serviceName]}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Watch on Instagram"
                            className="absolute bottom-3 right-3 z-10 bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white text-[11px] font-semibold px-3 py-1.5 rounded-full shadow-lg hover:scale-105 transition-all duration-200 flex items-center gap-1.5 opacity-90 hover:opacity-100"
                          >
                            <svg
                              className="w-3.5 h-3.5 fill-current text-white"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                            <span>Watch on Instagram</span>
                          </a>
                        )}
                      </div>
                    ) : (
                      <img
                        src={mediaData?.url || getImageUrl(images[0]?.src || "")}
                        alt={images[0]?.alt || `${title} demonstration`}
                        title={
                          images[0]?.title ||
                          images[0]?.alt ||
                          `${title} demonstration`
                        }
                        className="w-full h-full object-cover transition-transform duration-750 hover:scale-[1.04]"
                      />
                    )}
                  </div>
                </div>

                {/* 2nd Card: Top-right wider image on desktop, swipe card on mobile */}
                <div
                  className={`${prefix}-img shrink-0 snap-center w-[82vw] sm:w-[70vw] max-w-[340px] h-[460px] sm:h-[480px] lg:w-full lg:max-w-none lg:h-auto lg:aspect-square relative rounded-2xl overflow-hidden group border border-border-main/20 shadow-md bg-bg-surface`}
                >
                  <img
                    src={getImageUrl(images[1]?.src || "")}
                    alt={images[1]?.alt || `${title} secondary view`}
                    title={
                      images[1]?.title ||
                      images[1]?.alt ||
                      `${title} secondary view`
                    }
                    style={images[1]?.objectPosition ? { objectPosition: images[1].objectPosition } : undefined}
                    className={`absolute inset-0 w-full h-full object-cover transition-transform duration-750 group-hover:scale-[1.04] ${images[1]?.className || ""}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent pointer-events-none" />
                  {(images[1]?.title || images[1]?.alt) && (
                    <div className="absolute bottom-3 left-3 right-3 z-10 lg:hidden">
                      <span className="inline-block max-w-full truncate bg-black/60 backdrop-blur-md text-white text-[11px] font-medium px-3 py-1.5 rounded-full border border-white/15">
                        {images[1]?.title || images[1]?.alt}
                      </span>
                    </div>
                  )}
                </div>

                {/* 3rd Card: Bottom-right wider image on desktop, swipe card on mobile */}
                <div
                  className={`${prefix}-img shrink-0 snap-center w-[82vw] sm:w-[70vw] max-w-[340px] h-[460px] sm:h-[480px] lg:w-full lg:max-w-none lg:h-auto lg:aspect-square relative rounded-2xl overflow-hidden group border border-border-main/20 shadow-md bg-bg-surface`}
                >
                  <img
                    src={getImageUrl(images[2]?.src || "")}
                    alt={images[2]?.alt || `${title} tertiary view`}
                    title={
                      images[2]?.title ||
                      images[2]?.alt ||
                      `${title} tertiary view`
                    }
                    style={images[2]?.objectPosition ? { objectPosition: images[2].objectPosition } : undefined}
                    className={`absolute inset-0 w-full h-full object-cover transition-transform duration-750 group-hover:scale-[1.04] ${images[2]?.className || ""}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent pointer-events-none" />
                  {(images[2]?.title || images[2]?.alt) && (
                    <div className="absolute bottom-3 left-3 right-3 z-10 lg:hidden">
                      <span className="inline-block max-w-full truncate bg-black/60 backdrop-blur-md text-white text-[11px] font-medium px-3 py-1.5 rounded-full border border-white/15">
                        {images[2]?.title || images[2]?.alt}
                      </span>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>

          {/* Mobile pagination indicator dots */}
          <div className="flex lg:hidden justify-center items-center gap-1.5 pt-3" aria-hidden="true">
            {Array.from({
              length: reels && reels.length > 1 ? reels.length : (images.length || 3),
            }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => {
                  const el = galleryScrollRef.current;
                  if (!el) return;
                  const targetCard = el.children[i] as HTMLElement;
                  if (targetCard) {
                    targetCard.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
                  }
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeGalleryIndex === i
                    ? "w-6 bg-accent-blue"
                    : "w-1.5 bg-border-main/60 dark:bg-white/20"
                }`}
                aria-label={`Go to card ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Content Column */}
        {renderContent()}
      </div>
    </section>
  );
}
