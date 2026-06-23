// Reusable Trending carousel
import { ChevronRight } from "lucide-react";
import { toast } from "sonner";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

interface Product {
  id: string;
  name: string;
  tag: string;
  img: string;
  desc: string;
}

interface TrendingCarouselProps {
  title?: string;
  brandLabel: string;
  products: Product[];
}

export default function TrendingCarousel({
  title = "Trending smart components",
  brandLabel,
  products,
}: TrendingCarouselProps) {
  return (
    <section className="mb-24">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-accent-blue text-xs font-bold uppercase tracking-widest block mb-3">Product Catalog</span>
        <h2 className="text-4xl font-serif font-bold tracking-tight text-text-main">{title}</h2>
      </div>

      <div className="relative px-8 sm:px-12">
        <Carousel opts={{ align: "start", loop: true }} className="w-full">
          <CarouselContent>
            {products.map((product) => (
              <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3 p-4">
                <div className="bg-bg-surface border border-border-main rounded-3xl overflow-hidden h-full flex flex-col justify-between shadow-lg transition-transform hover:-translate-y-1 duration-300">
                  
                  <div className="relative overflow-hidden aspect-[16/10] border-b border-border-main/50">
                    <img 
                      src={product.img} 
                      alt={product.name} 
                      className="w-full h-full object-cover" 
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-black/60 text-white border border-white/10 text-[9px] font-bold px-3 py-1 rounded-full backdrop-blur-md font-mono">
                        {product.id}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-4">
                      <p className="text-[10px] text-accent-blue font-bold uppercase tracking-wider mb-1">{product.tag}</p>
                      <h4 className="text-xl font-serif font-bold text-text-main">{product.name}</h4>
                    </div>
                    <p className="text-xs text-text-muted leading-relaxed font-medium flex-grow">
                      {product.desc}
                    </p>
                    
                    <div className="pt-6 mt-6 border-t border-border-main/40 flex items-center justify-between">
                      <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest font-mono">{brandLabel}</span>
                      <button 
                        onClick={() => {
                          document.getElementById("phone")?.focus();
                          window.scrollTo({ top: 0, behavior: "smooth" });
                          toast.info(`Inquiring about ${product.name}. Please enter your number.`);
                        }}
                        className="text-xs font-bold text-accent-blue hover:text-[#0055d4] flex items-center gap-1 cursor-pointer"
                      >
                        <span>Inquire</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 -translate-x-4 border border-border-main bg-bg-surface/80 text-text-main shadow-md hover:bg-accent-blue hover:text-white" />
          <CarouselNext className="right-0 translate-x-4 border border-border-main bg-bg-surface/80 text-text-main shadow-md hover:bg-accent-blue hover:text-white" />
        </Carousel>
      </div>
    </section>
  );
}
