import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
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
  return (
    <section className="relative w-full py-6 sm:py-10 md:py-12 border-t border-border-main overflow-hidden bg-bg-main">
      {/* Subtle glow overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(10,132,255,0.04)_0%,transparent_60%)] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-3 sm:mb-5">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-text-main mb-1.5 sm:mb-2 font-display">
            Trusted by Homeowners
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-text-muted max-w-2xl mx-auto">
            See what our clients have to say about their smart home experience
            with MAKc Automations.
          </p>
        </div>

        {/* Reviews Carousel */}
        <div className="relative px-4 sm:px-10">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-3 sm:-ml-5">
              {reviews.map((review) => (
                <CarouselItem
                  key={review.author}
                  className="pl-3 sm:pl-5 basis-full md:basis-1/2"
                >
                  <div className="h-full bg-bg-surface/50 dark:bg-bg-surface/30 backdrop-blur-xl border border-border-main/50 dark:border-border-main/20 hover:border-accent-blue/40 hover:shadow-[0_8px_30px_rgb(10,132,255,0.04)] dark:hover:shadow-[0_8px_30px_rgb(10,132,255,0.1)] transition-all duration-500 rounded-2xl overflow-hidden p-4 sm:p-6 flex flex-col justify-between gap-3 group">
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
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute top-1/2 -left-3 -translate-y-1/2 sm:-left-2 z-20">
              <CarouselPrevious className="h-8 w-8 sm:h-9 sm:w-9 border-border-main/50 bg-bg-surface/80 text-text-main shadow-md hover:bg-accent-blue hover:text-white! transition-all duration-300 cursor-pointer" />
            </div>
            <div className="absolute top-1/2 -right-3 -translate-y-1/2 sm:-right-2 z-20">
              <CarouselNext className="h-8 w-8 sm:h-9 sm:w-9 border-border-main/50 bg-bg-surface/80 text-text-main shadow-md hover:bg-accent-blue hover:text-white! transition-all duration-300 cursor-pointer" />
            </div>
          </Carousel>
        </div>

        {/* View More Reviews CTA */}
        <div className="text-center mt-3.5 sm:mt-5">
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
