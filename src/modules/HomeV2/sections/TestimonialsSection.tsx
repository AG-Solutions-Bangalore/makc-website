import { useState } from "react";
import { Star, Home, Star as StarIcon, ShieldCheck, Headphones, ChevronLeft, ChevronRight } from "lucide-react";
import { getImageUrl } from "@/utils/image";

const imgVillaNight = getImageUrl("contact_villa_night.webp");
const imgAvatar1 = getImageUrl("why_choose_us.webp");
const imgAvatar2 = getImageUrl("project_apartments.webp");
const imgAvatar3 = getImageUrl("project_villas.webp");

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const stats = [
    {
      icon: Home,
      value: "500+",
      label: "HOMES TRANSFORMED",
      description: "Across residential and commercial spaces.",
    },
    {
      icon: StarIcon,
      value: "98%",
      label: "CLIENT SATISFACTION",
      description: "Trusted by hundreds of happy clients worldwide.",
    },
    {
      icon: ShieldCheck,
      value: "10+",
      label: "YEARS OF TRUST",
      description: "Delivering excellence in smart living since 2014.",
    },
    {
      icon: Headphones,
      value: "24/7",
      label: "DEDICATED SUPPORT",
      description: "Always here to support you, anytime.",
    },
  ];

  const testimonials = [
    {
      stars: 5,
      text: "MAKC Smart Living made our dream home smarter, safer, and more beautiful than we ever imagined. The team's attention to detail and support throughout the process was exceptional.",
      author: "Jennifer & Michael T.",
      role: "Homeowners, California",
      image: imgAvatar1,
    },
    {
      stars: 5,
      text: "MAKC transformed our villa into something that feels straight out of the future. The installation was flawless and the support has been exceptional.",
      author: "Arjun & Priya Mehta",
      role: "Villa Owner, Hyderabad",
      image: imgAvatar2,
    },
    {
      stars: 5,
      text: "The attention to detail is unmatched. Every light, curtain, and security feature works seamlessly. It's luxury living, made effortless.",
      author: "Rohan Sethi",
      role: "Penthouse Owner, Mumbai",
      image: imgAvatar3,
    },
  ];

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="relative w-full overflow-hidden bg-bg-main border-t border-border-main">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px] lg:min-h-[620px] w-full">
        
        {/* Left Column: Stats & Text */}
        <div className="lg:col-span-5 flex flex-col justify-between p-8 sm:p-12 lg:p-14 text-left border-b lg:border-b-0 lg:border-r border-border-main relative z-10 bg-bg-surface/50 dark:bg-[#030914] transition-colors duration-300">
          <div className="flex flex-col">
            <span className=" text-[10px] font-bold tracking-[0.2em] text-[#0A84FF] uppercase mt-2.5">
              CLIENT SUCCESS STORIES
            </span>
            {/* Elegant glowing horizontal line */}
            <div className="w-8 h-[1.5px] bg-[#0A84FF] my-4 shadow-[0_0_8px_rgba(10,132,255,0.6)]" />
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-text-main tracking-tight leading-tight">
              Real Homes. <br />
              <span className="text-[#0A84FF]">Real Transformations.</span>
            </h2>
            <p className="mt-4 text-xs sm:text-[13px] text-text-muted leading-relaxed max-w-sm">
              Discover how homeowners like you are transforming their spaces and elevating their lifestyles with smart living solutions from MAKC.
            </p>
          </div>

          {/* 4 Stats Grid */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 mt-10">
            {stats.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex flex-col items-start text-left group">
                  {/* Glowing Icon Wrapper */}
                  <div className="h-11 w-11 rounded-full border border-[#0A84FF]/40 bg-[#0A84FF]/10 flex items-center justify-center text-[#0A84FF] shadow-[0_0_12px_rgba(10,132,255,0.25)] group-hover:bg-[#0A84FF] group-hover:text-white group-hover:shadow-[0_0_16px_rgba(10,132,255,0.6)] transition-all duration-300">
                    <Icon className="h-5.5 w-5.5 stroke-[1.5]" />
                  </div>
                  
                  <span className=" text-xl sm:text-2xl font-black text-text-main mt-3 leading-none">
                    {item.value}
                  </span>
                  <span className=" text-[9px] font-bold tracking-wider text-text-main uppercase mt-1.5 leading-none">
                    {item.label}
                  </span>
                  <span className=" text-[10px] sm:text-[11px] text-text-muted mt-1.5 leading-snug">
                    {item.description}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Villa Night View & Floating Card */}
        <div className="lg:col-span-7 relative min-h-[450px] lg:min-h-full flex items-end justify-end p-6 sm:p-10 lg:p-12 overflow-hidden bg-black">
          {/* Villa Night Underlay */}
          <img
            src={imgVillaNight}
            alt="Luxury Villa Night View"
            className="absolute inset-0 w-full h-full object-cover object-center z-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/30 z-0" />
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black/60 to-transparent z-0 hidden lg:block" />

          {/* Testimonial Widget Box */}
          <div className="relative z-10 w-full max-w-[500px] bg-white/95 dark:bg-[#061121]/60 backdrop-blur-xl border border-border-main/50 dark:border-[#0A84FF]/35 rounded-2xl p-6 sm:p-8 shadow-2xl flex flex-col justify-between gap-6 transition-all duration-500">
            
            {/* Quote marks symbol */}
            <span className="absolute top-4 left-6 text-6xl font-serif text-[#0A84FF]/25 leading-none select-none">
              “
            </span>

            {/* Content text + Avatar container */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 relative z-10 items-start">
              
              {/* Quote text & Client info */}
              <div className="sm:col-span-8 flex flex-col justify-between h-full pt-4 text-left">
                <p className=" text-xs sm:text-sm text-text-main leading-relaxed font-medium">
                  {testimonials[current].text}
                </p>
                
                <div className="mt-4 flex flex-col">
                  <span className=" text-xs sm:text-sm font-bold text-[#0A84FF]">
                    {testimonials[current].author}
                  </span>
                  <span className=" text-[10px] sm:text-xs text-text-muted mt-1 font-medium">
                    {testimonials[current].role}
                  </span>
                </div>
              </div>

              {/* Client Avatar + Stars */}
              <div className="sm:col-span-4 flex flex-col items-center justify-center text-center shrink-0">
                <div className="w-20 h-20 rounded-full overflow-hidden border border-[#0A84FF]/40 shadow-[0_0_15px_rgba(10,132,255,0.3)]">
                  <img
                    src={testimonials[current].image}
                    alt={testimonials[current].author}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                
                {/* Gold Stars */}
                <div className="flex items-center gap-0.5 mt-3 text-[#FFB800]">
                  {[...Array(testimonials[current].stars)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current stroke-none" />
                  ))}
                </div>
              </div>

            </div>

            {/* Pagination Controls */}
            <div className="relative z-10 flex items-center justify-between border-t border-border-main/50 dark:border-white/10 pt-4">
              
              {/* Dot Indicators */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrent(idx)}
                    className={`h-2 w-2 rounded-full transition-all duration-300 cursor-pointer ${
                      idx === current ? "bg-[#0A84FF] w-4" : "bg-text-muted/30 dark:bg-white/20 hover:bg-text-muted/50"
                    }`}
                  />
                ))}
              </div>

              {/* Arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevTestimonial}
                  className="w-8 h-8 rounded-full border border-border-main dark:border-white/10 bg-bg-surface dark:bg-white/5 flex items-center justify-center text-text-main hover:bg-[#0A84FF] hover:text-white hover:border-transparent hover:shadow-[0_0_10px_rgba(10,132,255,0.6)] transition-all duration-200 cursor-pointer"
                >
                  <ChevronLeft className="h-4.5 w-4.5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-8 h-8 rounded-full border border-border-main dark:border-white/10 bg-bg-surface dark:bg-white/5 flex items-center justify-center text-text-main hover:bg-[#0A84FF] hover:text-white hover:border-transparent hover:shadow-[0_0_10px_rgba(10,132,255,0.6)] transition-all duration-200 cursor-pointer"
                >
                  <ChevronRight className="h-4.5 w-4.5" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
