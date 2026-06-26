import { useEffect } from "react";
import { useLocation } from "react-router";

export function useScrollReveal() {
  const location = useLocation();

  useEffect(() => {
    // Wait for page transition / Lenis setup to settle
    const timer = setTimeout(() => {
      const observerOptions: IntersectionObserverInit = {
        root: null,
        rootMargin: "0px 0px -8% 0px", // Trigger when 8% inside the viewport
        threshold: 0.05,
      };

      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.classList.add("is-visible");
            // Once element enters viewport, stop observing
            obs.unobserve(el);
          }
        });
      }, observerOptions);

      // Auto-register images inside active sections (excluding no-reveal sections)
      const images = document.querySelectorAll("section:not(.no-reveal) img:not(.no-reveal)");
      images.forEach((img) => {
        const htmlImg = img as HTMLElement;
        if (!htmlImg.classList.contains("reveal-on-scroll")) {
          htmlImg.classList.add("reveal-on-scroll", "reveal-fade");
          htmlImg.setAttribute("data-reveal-duration", "0.8s");
        }
      });

      // Find all reveal elements (which now correctly includes the auto-labeled images)
      const revealElements = document.querySelectorAll(
        ".reveal-on-scroll, [data-scroll-animate], section:not(.no-reveal)"
      );

      revealElements.forEach((el) => {
        const htmlEl = el as HTMLElement;

        // Apply default reveal-up to sections that don't have custom animations
        if (
          htmlEl.tagName === "SECTION" &&
          !htmlEl.classList.contains("reveal-on-scroll") &&
          !htmlEl.classList.contains("no-reveal")
        ) {
          htmlEl.classList.add("reveal-on-scroll", "reveal-up");
        }

        // Custom duration/delay support
        const delayAttr = htmlEl.getAttribute("data-reveal-delay") || htmlEl.getAttribute("data-scroll-delay");
        const durationAttr = htmlEl.getAttribute("data-reveal-duration") || htmlEl.getAttribute("data-scroll-duration");

        if (delayAttr) {
          const delayVal = delayAttr.trim();
          if (/^\d+(\.\d+)?$/.test(delayVal)) {
            htmlEl.style.setProperty("--reveal-delay", `${parseFloat(delayVal) * 1000}ms`);
          } else {
            htmlEl.style.setProperty("--reveal-delay", delayVal);
          }
        }

        if (durationAttr) {
          const durationVal = durationAttr.trim();
          if (/^\d+(\.\d+)?$/.test(durationVal)) {
            htmlEl.style.setProperty("--reveal-duration", `${parseFloat(durationVal) * 1000}ms`);
          } else {
            htmlEl.style.setProperty("--reveal-duration", durationVal);
          }
        }

        // Support backwards compatibility for data-scroll-animate
        const scrollAnimate = htmlEl.getAttribute("data-scroll-animate");
        if (scrollAnimate && !htmlEl.classList.contains("reveal-on-scroll")) {
          htmlEl.classList.add("reveal-on-scroll");
          if (scrollAnimate === "fade-in-up") {
            htmlEl.classList.add("reveal-up");
          } else if (scrollAnimate === "fade-in") {
            htmlEl.classList.add("reveal-fade");
          } else if (scrollAnimate === "slide-in-right") {
            htmlEl.classList.add("reveal-right");
          } else if (scrollAnimate === "slide-in-left") {
            htmlEl.classList.add("reveal-left");
          } else if (scrollAnimate === "scale-in") {
            htmlEl.classList.add("reveal-scale");
          }
        }

        observer.observe(htmlEl);
      });

      return () => {
        revealElements.forEach((el) => observer.unobserve(el));
        observer.disconnect();
      };
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname]);
}
