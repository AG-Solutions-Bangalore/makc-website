import { useState, useRef } from "react";
import { Star, ExternalLink, Quote } from "lucide-react";

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

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?q=MAKc+Automation+and+Solutions+LLP+reviews";

export default function GoogleReviews() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Mouse drag-to-scroll support for desktop
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);

  const handleScroll = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const card0 = el.children[0] as HTMLElement;
    const card1 = el.children[1] as HTMLElement;
    if (!card0) return;
    const cardStep = card1 ? (card1.offsetLeft - card0.offsetLeft) : (card0.offsetWidth + 16);
    const scrollPosition = el.scrollLeft;
    const index = Math.round(scrollPosition / cardStep);
    const clampedIndex = Math.max(0, Math.min(reviews.length - 1, index));
    if (clampedIndex !== activeIndex) {
      setActiveIndex(clampedIndex);
    }
  };

  const scrollToIndex = (index: number) => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const card = el.children[index] as HTMLElement;
    if (card) {
      const left = index === 0 ? 0 : card.offsetLeft;
      el.scrollTo({ left, behavior: "smooth" });
      setActiveIndex(index);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    const el = scrollContainerRef.current;
    if (!el) return;
    isDragging.current = true;
    startX.current = e.pageX - el.offsetLeft;
    scrollLeftStart.current = el.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const el = scrollContainerRef.current;
    if (!el) return;
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    el.scrollLeft = scrollLeftStart.current - walk;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  return (
    <section className="relative w-full py-12 sm:py-16 md:py-20 border-t border-slate-200 dark:border-white/10 overflow-hidden bg-[#f1f5f9] dark:bg-[#030712] transition-colors duration-300">
      {/* Subtle glow overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(10,132,255,0.05)_0%,transparent_60%)] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-5 sm:mb-8">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-text-main mb-1.5 sm:mb-2 font-display">
            Trusted by Homeowners
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-text-muted max-w-2xl mx-auto">
            See what our clients have to say about their smart home experience
            with MAKc Automations.
          </p>
        </div>

        {/* Reviews Horizontal Snap Container (100% native touch swipe on mobile, drag on desktop) */}
        <div className="relative px-1 sm:px-4">
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 pt-1 px-1 snap-x snap-mandatory scrollbar-none scroll-smooth touch-pan-x cursor-grab active:cursor-grabbing select-none"
          >
            {reviews.map((review, idx) => (
              <div
                key={review.author}
                onClick={() => scrollToIndex(idx)}
                className="shrink-0 w-[84vw] sm:w-[380px] md:w-[calc(50%-12px)] max-w-[550px] snap-start transition-transform duration-300 cursor-pointer"
              >
                <div className="h-full bg-white dark:bg-[#0a182d] border border-slate-200/90 dark:border-white/15 shadow-md shadow-slate-200/60 dark:shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-accent-blue/50 dark:hover:border-accent-blue/50 hover:shadow-lg dark:hover:shadow-[0_8px_30px_rgba(10,132,255,0.2)] transition-all duration-300 rounded-2xl p-5 sm:p-7 flex flex-col justify-between gap-4 group">
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
                  <blockquote className="text-xs sm:text-[14px] md:text-[15px] text-text-main/90 font-normal leading-relaxed italic flex-1">
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

          {/* Centered Clickable Progress Dots */}
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-5">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToIndex(idx)}
                aria-label={`Jump to review ${idx + 1}`}
                className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === activeIndex
                    ? "w-6 sm:w-8 bg-accent-blue"
                    : "w-1.5 sm:w-2 bg-border-main hover:bg-text-muted"
                }`}
              />
            ))}
          </div>
        </div>

        {/* View More Reviews CTA */}
        <div className="text-center mt-4 sm:mt-6">
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
      </div>
    </section>
  );
}
