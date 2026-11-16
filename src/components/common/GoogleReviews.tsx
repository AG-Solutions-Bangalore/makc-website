import { useEffect, useRef } from "react";
import { Star, ExternalLink, Quote } from "lucide-react";
import { COMPANY_INFO } from "@/config/constants";

interface GoogleReview {
  author: string;
  text: string;
  stars: number;
}

const reviews: GoogleReview[] = [
  {
    author: "Prabhakara Sastry",
    text: "MAKc Automation and Solutions, under the leadership of Abhay Kumar, transformed my new house into a fully automated haven. From installation to technical support, including security cameras and doors, every aspect was exemplary. Their professionalism, punctuality, and quality exceeded my expectations.",
    stars: 5,
  },
  {
    author: "Harish Bhat",
    text: "Professional service, great quality material and efficient and well managed service. Their Ajax systems are excellent.",
    stars: 5,
  },
  {
    author: "Awes Desai",
    text: "I had a good experience with Mak automation. They are very accommodating of the changes on the fly and post completion support is also good.",
    stars: 5,
  },
  {
    author: "Sanjay Kumar",
    text: "Makc automation and solution helped me get my new house completely automated so I can have the control overseas. They are really good when it comes to work on time. Thanks to Abhay Kumar, MD of MAKc Automation.",
    stars: 5,
  },
];

const GOOGLE_REVIEWS_URL = COMPANY_INFO.socials.googleReviews;

export default function GoogleReviews() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    // Set initial scroll position to the middle set (set 2 of 3) for seamless loop
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
    el.scrollBy({ left: -420, behavior: "smooth" });
  };

  const handleScrollRight = () => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: 420, behavior: "smooth" });
  };

  return (
    <section className="relative w-full py-4 sm:py-16 md:py-20 border-t border-border-main/40 overflow-hidden bg-bg-surface transition-colors duration-300">
      {/* Subtle glow overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(10,132,255,0.05)_0%,transparent_60%)] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-5 sm:mb-8">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-text-main mb-1.5 sm:mb-2 font-display">
            Trusted by Homeowners
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-text-muted max-w-2xl mx-auto">
            See what our clients have to say about their smart home experience
            with MAKc Automations.
          </p>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 z-10 relative group">
        {/* Scroll Buttons — revealed on hover / keyboard focus */}
        <button
          type="button"
          onClick={handleScrollLeft}
          aria-label="Scroll reviews left"
          className="hidden sm:flex absolute left-1 md:left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-slate-200/90 dark:border-white/20 bg-white/85 dark:bg-[#0b1b36]/90 backdrop-blur-md items-center justify-center text-text-main shadow-[0_6px_20px_rgba(2,6,23,0.12)] hover:bg-accent-blue hover:text-white hover:border-transparent hover:scale-105 transition-all duration-300 cursor-pointer opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:pointer-events-auto focus-visible:opacity-100 focus-visible:pointer-events-auto focus-visible:ring-2 focus-visible:ring-accent-blue/60 focus-visible:outline-none"
        >
          <svg className="w-5 h-5 stroke-[2.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          type="button"
          onClick={handleScrollRight}
          aria-label="Scroll reviews right"
          className="hidden sm:flex absolute right-1 md:right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-slate-200/90 dark:border-white/20 bg-white/85 dark:bg-[#0b1b36]/90 backdrop-blur-md items-center justify-center text-text-main shadow-[0_6px_20px_rgba(2,6,23,0.12)] hover:bg-accent-blue hover:text-white hover:border-transparent hover:scale-105 transition-all duration-300 cursor-pointer opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:pointer-events-auto focus-visible:opacity-100 focus-visible:pointer-events-auto focus-visible:ring-2 focus-visible:ring-accent-blue/60 focus-visible:outline-none"
        >
          <svg className="w-5 h-5 stroke-[2.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Full-width infinite reviews scroll */}
        <style>{`.review-scroll { scrollbar-width: none; -ms-overflow-style: none; }
          .review-scroll::-webkit-scrollbar { display: none; }`}</style>
        <div
          ref={scrollRef}
          className="review-scroll flex items-stretch gap-3 sm:gap-6 pr-3 sm:pr-6 overflow-x-auto"
          onMouseEnter={() => { pausedRef.current = true; }}
          onMouseLeave={() => { pausedRef.current = false; }}
        >
          {[...reviews, ...reviews, ...reviews].map((review, index) => (
            <div
              key={review.author + index}
              className="flex h-[210px] min-h-[210px] w-[80vw] max-w-[280px] shrink-0 sm:h-[230px] sm:min-h-[230px] sm:w-[360px] sm:max-w-none md:w-[400px] lg:h-[250px] lg:min-h-[250px] lg:w-[440px]"
            >
              <div className="h-full w-full bg-white dark:bg-[#0a182d] border border-slate-200/90 dark:border-white/15 hover:border-accent-blue/50 dark:hover:border-accent-blue/50 transition-colors duration-300 rounded-2xl p-4 sm:p-5 lg:p-6 flex flex-col justify-between gap-2 sm:gap-3 overflow-hidden group">
                {/* Top: Stars + Quote icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-0.5">
                    {[...Array(review.stars)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <Quote className="h-5 w-5 sm:h-6 sm:w-6 text-accent-blue/15 dark:text-accent-blue/10 shrink-0 group-hover:scale-110 transition-transform duration-300" />
                </div>

                {/* Review text */}
                <blockquote className="text-xs sm:text-sm md:text-[15px] text-text-main/90 font-normal leading-relaxed italic flex-1 line-clamp-5 overflow-hidden">
                  &ldquo;{review.text}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-2.5 sm:gap-3 pt-2.5 sm:pt-3 border-t border-border-main/30 dark:border-border-main/10">
                  <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-accent-blue/10 text-accent-blue flex items-center justify-center text-[10px] sm:text-xs font-bold shrink-0">
                    {review.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)}
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-text-main">
                    {review.author}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Edge fading overlays */}
        <div className="absolute inset-y-0 left-0 w-12 sm:w-24 lg:w-40 bg-gradient-to-r from-[#f1f5f9] dark:from-[#030712] to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-12 sm:w-24 lg:w-40 bg-gradient-to-l from-[#f1f5f9] dark:from-[#030712] to-transparent pointer-events-none z-10" />
      </div>

      {/* View More Reviews CTA */}
      <div className="relative mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 z-10 mt-5 sm:mt-7 flex flex-col items-center gap-2.5 sm:gap-0">
        <a
          href={GOOGLE_REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-[#0055ff] to-[#0A84FF] text-white! font-bold text-xs sm:text-sm tracking-wider uppercase rounded-xl shadow-[0_4px_20px_rgba(10,132,255,0.45)] hover:shadow-[0_6px_25px_rgba(10,132,255,0.65)] hover:scale-[1.02] transition-all duration-300 group cursor-pointer"
        >
          <span>View More Reviews on Google</span>
          <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </section>
  );
}
