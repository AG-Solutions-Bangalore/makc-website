import { useState, useRef, useEffect, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { ServiceData } from '@/data/servicesData';

gsap.registerPlugin(ScrollTrigger);

interface ServiceContentProps {
  service: ServiceData;
}

export default function ServiceContent({ service }: ServiceContentProps) {
  const [activeSection, setActiveSection] = useState(service.subsections[0]?.id || '');
  const sectionRef = useRef<HTMLElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }, []);

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return;

    const ctx = gsap.context(() => {
      // Sidebar entrance
      if (sidebarRef.current) {
        gsap.fromTo(
          sidebarRef.current,
          { opacity: 0, x: -20 },
          {
            opacity: 1, x: 0, duration: 1, ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 85%',
              once: true,
            },
          }
        );
      }

      // Subsections entrance
      const subsections = contentRef.current!.querySelectorAll('.subsection');
      subsections.forEach((sub) => {
        gsap.fromTo(
          sub,
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0, duration: 1, ease: 'power3.out',
            scrollTrigger: {
              trigger: sub,
              start: 'top 85%',
              once: true,
            },
          }
        );
      });

      // Active section tracking
      subsections.forEach((sub) => {
        ScrollTrigger.create({
          trigger: sub,
          start: 'top 150px',
          end: 'bottom 150px',
          onEnter: () => setActiveSection(sub.id),
          onEnterBack: () => setActiveSection(sub.id),
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [service]);

  return (
    <section ref={sectionRef} className="bg-ma-black section-padding">
      <div className="max-w-[1600px] mx-auto container-grid">
        {/* Left Column - Sidebar */}
        <div className="hidden lg:block col-span-3">
          <div ref={sidebarRef} className="sticky top-[120px] opacity-0">
            <nav className="flex flex-col gap-4">
              {service.sidebarLinks.map((link, index) => {
                const linkId = service.subsections[index]?.id || '';
                const isActive = activeSection === linkId;
                return (
                  <button
                    key={link}
                    onClick={() => scrollToSection(linkId)}
                    className={`text-left heading-display text-micro-heading transition-colors duration-200 border-l-2 pl-3 ${
                      isActive
                        ? 'text-white border-ma-yellow'
                        : 'text-ma-gray-6 border-transparent hover:text-white'
                    }`}
                  >
                    {link.toUpperCase()}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Right Column - Content */}
        <div ref={contentRef} className="col-span-12 lg:col-start-5 lg:col-span-8">
          {service.subsections.map((sub) => (
            <div
              key={sub.id}
              id={sub.id}
              className="subsection mb-16 lg:mb-20 opacity-0 scroll-mt-[120px]"
            >
              <h2 className="heading-display text-h3 text-white mb-6">
                {sub.heading}
              </h2>
              <p className="text-body text-white/80 font-body leading-relaxed mb-6">
                {sub.body}
              </p>

              {sub.features && sub.features.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">
                  {sub.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-ma-yellow mt-2 shrink-0" />
                      <span className="text-body text-white/80 font-body">{feature}</span>
                    </div>
                  ))}
                </div>
              )}

              {sub.image && (
                <div className="mt-8 overflow-hidden rounded-lg">
                  <img
                    src={sub.image}
                    alt={sub.heading}
                    className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
