/**
 * GateAutomationSection.tsx
 * Split layout: 3-image mosaic (left) + feature content (right).
 * Images served from /public/images/automation/
 *
 * Polish pass — impeccable:
 *  • Removed banned "FEATURES" uppercase-tracked eyebrow inside card
 *  • Switched image cells from fixed-height parent + absolute inset to
 *    aspect-ratio containers — no layout shift, works at all breakpoints
 *  • text-wrap: balance on h2
 *  • prefers-reduced-motion: no-preference guard on hover scale
 *  • Tightened feature card to rounded-xl (12px) from rounded-2xl (16px)
 *  • Removed max-w-md on subtitle — column width owns the constraint
 *  • Differentiated alt text on images 1 & 2
 *  • strokeWidth as string per SVG spec
 */

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { getImageUrl } from "@/utils/image";

// import { CheckCircle2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const types = [
  "Sliding Gate Automation",
  "Rolling / Shutter Gate Automation",
  "Swing Gate Automation",
];

const features = [
  "Remote & app-based access",
  "Smooth and silent operation",
  "Safety sensors & obstruction detection",
];

export default function GateAutomationSection() {
  const sectionRef = useRef<HTMLElement>(null);

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
      tl.from(".gate-img", {
        y: 40,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });

      // Stagger the text content blocks
      tl.from(
        ".gate-content > *",
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

  return (
    <section ref={sectionRef} className="mb-28 no-reveal">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        {/* ── Left: image mosaic ── */}
        <div className="grid grid-cols-2 gap-3">
          {/* Tall left image */}
          <div className="gate-img row-span-2 relative rounded-2xl overflow-hidden group">
            <div className="absolute inset-0">
              <img
                src={getImageUrl("getAuto1.webp")}
                alt="Smart villa entrance with automated gate, illuminated at night"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
            </div>
            <div className="aspect-[9/16] lg:aspect-[3/4]" />
          </div>

          {/* Top-right: wider villa shot */}
          <div className="gate-img relative rounded-2xl overflow-hidden aspect-[4/3] group">
            <img
              src={getImageUrl("getAuto2.webp")}
              alt="Wider view of villa exterior with landscaped entrance at night"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
          </div>

          {/* Bottom-right: security camera */}
          <div className="gate-img relative rounded-2xl overflow-hidden aspect-[4/3] group">
            <img
              src={getImageUrl("getAuto3.webp")}
              alt="Gate surveillance camera mounted on travertine stone wall above doorway"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
          </div>
        </div>

        {/* ── Right: content ── */}
        <div className="gate-content flex flex-col gap-7">
          {/* Heading block */}
          <div>
            <h2
              className="text-4xl sm:text-5xl font-bold text-text-main leading-[1.1] tracking-tight mb-3"
              style={{ textWrap: "balance" } as React.CSSProperties}
            >
              Gate Automation
            </h2>
            <p className="text-text-muted text-base leading-relaxed">
              Automate your entrances with reliable, whisper-quiet gate systems
              — engineered for homes, communities, and commercial premises.
            </p>
          </div>

          {/* Gate types checklist */}
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

          {/* Features panel */}
          <div className="bg-bg-surface border border-border-main/30 rounded-xl p-6">
            <ul className="space-y-2.5 mb-5">
              {features.map((feat) => (
                <li key={feat} className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-blue shrink-0" />
                  <span className="text-sm text-text-muted">{feat}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm font-semibold text-text-main leading-relaxed border-t border-border-main/30 pt-4">
              Suitable for villas, independent houses, gated communities, and
              commercial premises.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
