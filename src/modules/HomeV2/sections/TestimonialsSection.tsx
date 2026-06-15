import { Star } from "lucide-react";
import imgTestimonial1 from "../../../assets/images/home_v2/why_choose_us.png";
import imgTestimonial2 from "../../../assets/images/home_v2/project_apartments.png";

export default function TestimonialsSection() {
  const testimonials = [
    {
      stars: 5,
      text: "MAKC transformed our villa into something that feels straight out of the future. The installation was flawless and the support has been exceptional.",
      author: "Arjun & Priya Mehta",
      role: "Villa Owner, Hyderabad",
      image: imgTestimonial1,
    },
    {
      stars: 5,
      text: "The attention to detail is unmatched. Every light, curtain, and security feature works seamlessly. It's luxury living, made effortless.",
      author: "Rohan Sethi",
      role: "Penthouse Owner, Mumbai",
      image: imgTestimonial2,
    },
  ];

  return (
    <section className="relative w-full bg-bg-main py-20 lg:py-24 border-t border-border-main text-center">
      <div className="mx-auto max-w-8xl px-4 sm:px-6">
        
        {/* Title */}
        <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-accent-blue uppercase mb-12 block select-none">
          WHAT OUR CLIENTS SAY
        </span>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 text-left">
          {testimonials.map((t, index) => {
            return (
              <div
                key={index}
                className="flex flex-col sm:flex-row border border-border-main bg-bg-main overflow-hidden rounded-xl h-auto sm:h-[220px] transition-all duration-300 hover:border-accent-blue/20"
              >
                {/* Left Side: Image (Spans ~38% width on tablet/desktop) */}
                <div className="w-full sm:w-[38%] h-[160px] sm:h-full shrink-0 relative overflow-hidden">
                  <img
                    src={t.image}
                    alt={t.author}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* Right Side: Content (Spans ~62% width) */}
                <div className="w-full sm:w-[62%] p-6 flex flex-col justify-between bg-bg-main">
                  <div>
                    {/* Stars */}
                    <div className="flex items-center gap-1 text-accent-blue">
                      {[...Array(t.stars)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-current stroke-none" />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="mt-4 font-sans text-xs sm:text-sm text-text-main leading-relaxed font-normal">
                      "{t.text}"
                    </p>
                  </div>

                  {/* Author Info */}
                  <div className="mt-4 sm:mt-0">
                    <h4 className="font-sans text-xs sm:text-[13px] font-bold text-text-main leading-none">
                      — {t.author}
                    </h4>
                    <span className="font-sans text-[10px] sm:text-xs text-text-muted mt-1.5 block">
                      {t.role}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
