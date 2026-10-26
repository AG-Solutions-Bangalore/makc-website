import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const PARTNERS = [
  { name: "JR Automation", tag: "Automation", url: "https://jrautotech.com/", logo: "/images/partners/jr-automation.png" },
  { name: "ALT Lighting", tag: "Lighting", url: "https://www.altlights.com/", logo: "/images/partners/alt-lighting.png" },
  { name: "Wipro Lighting", tag: "Smart Lighting", url: "https://www.wiprolighting.com/", logo: "/images/partners/wipro-lighting.svg" },
  { name: "Yale Locks", tag: "Smart Locks", url: "https://yaleonline.in/", logo: "/images/partners/yale.png" },
  { name: "TP-Link", tag: "Mesh Wi-Fi & Networking", url: "https://www.tp-link.com/in/mesh-wifi/", logo: "/images/partners/tp-link.svg" },
  { name: "Legrand", tag: "Switches & Automation", url: "https://www.legrand.co.in/", logo: "/images/partners/legrand.svg" },
  { name: "Hikvision", tag: "CCTV & Security", url: "https://www.hikvision.com/en/", logo: "/images/partners/hikvision.svg" },
  { name: "Finolex Wires", tag: "Cabling & Wires", url: "https://www.finolex.com/", logo: "/images/partners/finolex.svg" },
  { name: "Nefcon", tag: "Control Systems", url: "https://www.nefcon.in/", logo: "/images/partners/nefcon.png" },
  { name: "Golens Locks", tag: "Smart Locks", url: "https://golens.in/", logo: "/images/partners/golens.png" },
  { name: "Pure Acoustics", tag: "Audio Systems", url: "https://www.pure-acoustics.com/", logo: "/images/partners/pure-acoustics.svg" },
  { name: "Grandstream", tag: "Networking & IP Voice", url: "https://www.grandstream.com/", logo: "/images/partners/grandstream.png" },
  { name: "Foxtech", tag: "Smart Technology", url: "https://www.foxtechindia.com/", logo: "/images/partners/foxtech.png" },
  { name: "Akuvox", tag: "Intercom & Access", url: "https://www.akuvox.com/", logo: "/images/partners/akuvox.png" },
  { name: "OneTouch", tag: "Security & Intercom", url: "https://onetouchcomsec.com/", logo: "/images/partners/onetouch.png" },
  { name: "Tiron Lighting", tag: "Architectural Lighting", url: "https://www.tironlights.com/index-departments", logo: "/images/partners/tiron.png" },
  { name: "Srujana Unlimited", tag: "Lighting & Automation", url: "https://www.srujanaunlimited.com/", logo: "/images/partners/srujana.png" },
  { name: "Akubela", tag: "Smart Home Panels", url: "https://www.akubela.com/", logo: "/images/partners/akubela.png" },
  { name: "Lytiva", tag: "Smart Controls", url: "https://lytiva.com/", logo: "/images/partners/lytiva.svg" },
  { name: "Cavitak", tag: "AV & Automation", url: "https://cavitak.com/index.html", logo: "/images/partners/cavitak.png" },
  { name: "Ajax Systems", tag: "Security & Alarm Systems", url: "https://ajax.systems/", logo: "/images/partners/ajax.svg" },
  { name: "Finetech Controls", tag: "Smart Controls", url: "https://www.finetechcontrols.com/", logo: "/images/partners/finetech.png" },
];

export default function PartnerLogosSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    // Set initial scroll position to the middle set (set 2 of 3)
    const oneSetWidth = el.scrollWidth / 3;
    if (oneSetWidth > 0 && el.scrollLeft === 0) {
      el.scrollLeft = oneSetWidth;
    }

    let raf: number;
    const speed = 0.45; // px per frame
    const tick = () => {
      if (!pausedRef.current) {
        el.scrollLeft += speed;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      const oneSetWidth = el.scrollWidth / 3;
      if (oneSetWidth <= 0) return;

      // When scrolled past the 2nd set into the 3rd set, jump back to middle set
      if (el.scrollLeft >= oneSetWidth * 2) {
        el.scrollLeft -= oneSetWidth;
      }
      // When scrolled left before 1st set, jump forward to middle set
      else if (el.scrollLeft <= 10) {
        el.scrollLeft += oneSetWidth;
      }
    };

    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollLeft = () => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: -360, behavior: "smooth" });
  };

  const handleScrollRight = () => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: 360, behavior: "smooth" });
  };

  return (
    <section className="relative w-full py-14 sm:py-18 lg:py-20 border-y border-slate-300/70 dark:border-accent-blue/20 overflow-hidden bg-gradient-to-b from-[#eef3f9] via-[#e7edf5] to-[#eef3f9] dark:from-[#050e20] dark:via-[#07152b] dark:to-[#050e20] transition-colors duration-300">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(10,132,255,0.10)_0%,transparent_55%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(10,132,255,0.16)_0%,transparent_55%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-blue/40 to-transparent" />

      <div className="relative mx-auto max-w-8xl px-4 sm:px-6 flex flex-col gap-6 sm:gap-8 items-center">
        <div className="text-center max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-2.5 sm:mb-3">
            <span className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-accent-blue/60" />
            <span className="font-bold tracking-[0.25em] text-accent-blue text-[10px] sm:text-xs uppercase select-none">
              Authorized Brand Network
            </span>
            <span className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-accent-blue/60" />
          </div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-text-main tracking-tight">
            OUR TECHNOLOGY PARTNERS
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-text-muted max-w-lg mx-auto">
            World-class brands we design, install, and support — backed by
            certified expertise and dependable service.
          </p>
        </div>

        <style>{`.partner-scroll { scrollbar-width: none; -ms-overflow-style: none; }
          .partner-scroll::-webkit-scrollbar { display: none; }`}</style>
        <div
          className="w-full relative group"
          onMouseEnter={() => { pausedRef.current = true; }}
          onMouseLeave={() => { pausedRef.current = false; }}
        >
          {/* Scroll Buttons — revealed on hover / keyboard focus */}
          <button
            type="button"
            onClick={handleScrollLeft}
            aria-label="Scroll technology partners left"
            className="hidden sm:flex absolute left-1 md:left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-slate-200/90 dark:border-white/20 bg-white/85 dark:bg-[#0b1b36]/90 backdrop-blur-md items-center justify-center text-text-main shadow-[0_6px_20px_rgba(2,6,23,0.12)] hover:bg-accent-blue hover:text-white hover:border-transparent hover:scale-105 transition-all duration-300 cursor-pointer opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:pointer-events-auto focus-visible:opacity-100 focus-visible:pointer-events-auto focus-visible:ring-2 focus-visible:ring-accent-blue/60 focus-visible:outline-none"
          >
            <svg className="w-5 h-5 stroke-[2.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            type="button"
            onClick={handleScrollRight}
            aria-label="Scroll technology partners right"
            className="hidden sm:flex absolute right-1 md:right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-slate-200/90 dark:border-white/20 bg-white/85 dark:bg-[#0b1b36]/90 backdrop-blur-md items-center justify-center text-text-main shadow-[0_6px_20px_rgba(2,6,23,0.12)] hover:bg-accent-blue hover:text-white hover:border-transparent hover:scale-105 transition-all duration-300 cursor-pointer opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:pointer-events-auto focus-visible:opacity-100 focus-visible:pointer-events-auto focus-visible:ring-2 focus-visible:ring-accent-blue/60 focus-visible:outline-none"
          >
            <svg className="w-5 h-5 stroke-[2.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div
            ref={scrollRef}
            className="partner-scroll flex items-center gap-4 sm:gap-6 py-3 sm:py-4 overflow-x-auto"
          >
            {[...PARTNERS, ...PARTNERS, ...PARTNERS].map((partner, index) => (
              <a
                key={index}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                title={`Visit ${partner.name} - Official Technology Partner`}
                className="group/card relative shrink-0 w-[200px] sm:w-[230px] h-[126px] sm:h-[136px] overflow-hidden rounded-4xl bg-white  flex flex-col transition-all duration-300 hover:-translate-y-1  cursor-pointer no-underline"
              >
                {/* Layered surface */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white via-white to-slate-50" />
                <div className="pointer-events-none absolute -left-10 -top-12 h-28 w-28 rounded-full bg-accent-blue/[0.06] blur-2xl transition-all duration-500 group-hover/card:bg-accent-blue/15" />
              
                {/* Top meta row */}
                <div className="relative flex items-center justify-between px-3 pt-2.5">
                  <span className="rounded-full border border-slate-200/80 bg-slate-50 px-2 py-0.5 text-[7px] font-mono font-semibold uppercase tracking-[0.14em] text-slate-400 transition-colors duration-300 group-hover/card:border-accent-blue/30 group-hover/card:text-accent-blue">
                    {partner.tag}
                  </span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-slate-300 transition-all duration-300 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5 group-hover/card:text-accent-blue" />
                </div>

                {/* Logo */}
                <div className="relative flex flex-1 items-center justify-center px-5 pb-4 pt-1">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    loading="lazy"
                    decoding="async"
                    className="max-h-11 sm:max-h-12 max-w-[88%] object-contain mix-blend-multiply transition-transform duration-500 group-hover/card:scale-[1.06]"
                  />
                </div>
              </a>
            ))}
          </div>

          <div className="absolute inset-y-0 left-0 w-16 sm:w-28 lg:w-40 bg-gradient-to-r from-[#e9eff6] via-[#e9eff6]/70 to-transparent dark:from-[#061225] dark:via-[#061225]/70 pointer-events-none z-10" />
          <div className="absolute inset-y-0 right-0 w-16 sm:w-28 lg:w-40 bg-gradient-to-l from-[#e9eff6] via-[#e9eff6]/70 to-transparent dark:from-[#061225] dark:via-[#061225]/70 pointer-events-none z-10" />
        </div>
      </div>
    </section>
  );
}
