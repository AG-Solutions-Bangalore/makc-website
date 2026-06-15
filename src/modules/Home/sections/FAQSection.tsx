import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionLabel from "@/components/common/SectionLabel";
import { ChevronDown } from "lucide-react";
import type { FAQItem } from "@/data/servicesData";

gsap.registerPlugin(ScrollTrigger);

interface FAQSectionProps {
  faqs: FAQItem[];
}

function FAQItemComponent({
  item,
  isOpen,
  onClick,
}: {
  item: FAQItem;
  isOpen: boolean;
  onClick: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const answerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current || !answerRef.current) return;

    if (isOpen) {
      const height = answerRef.current.scrollHeight;
      gsap.to(contentRef.current, {
        height,
        duration: 0.5,
        ease: "power2.inOut",
      });
    } else {
      gsap.to(contentRef.current, {
        height: 0,
        duration: 0.5,
        ease: "power2.inOut",
      });
    }
  }, [isOpen]);

  return (
    <div className="border-b border-ma-gray-8">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-6 cursor-pointer text-left"
      >
        <span className="heading-display text-h6 text-white pr-4">
          {item.question}
        </span>
        <ChevronDown
          size={20}
          className={`text-white shrink-0 transition-transform duration-500 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div ref={contentRef} className="overflow-hidden" style={{ height: 0 }}>
        <div ref={answerRef} className="pb-6">
          <p className="text-body text-ma-gray-4 font-body leading-relaxed">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQSection({ faqs }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        sectionRef.current!.querySelectorAll(".faq-header"),
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            once: true,
          },
        },
      );

      // FAQ items stagger
      const items = sectionRef.current!.querySelectorAll(".faq-item");
      gsap.fromTo(
        items,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: items[0],
            start: "top 85%",
            once: true,
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-ma-darkgray section-padding">
      <div className="max-w-[900px] mx-auto px-5 lg:px-0">
        {/* Header */}
        <div className="text-center mb-10 lg:mb-16">
          <div className="faq-header">
            <SectionLabel text="FAQ" />
          </div>
          <h2 className="faq-header heading-display text-h3 text-white mt-4">
            FREQUENTLY ASKED QUESTIONS
          </h2>
        </div>

        {/* FAQ Items */}
        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <FAQItemComponent
                item={faq}
                isOpen={openIndex === index}
                onClick={() => toggleItem(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
