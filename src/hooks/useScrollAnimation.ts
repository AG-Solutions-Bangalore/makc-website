import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const elements = ref.current.querySelectorAll('[data-scroll-animate]');
    
    const animations: gsap.core.Tween[] = [];
    const triggers: ScrollTrigger[] = [];

    elements.forEach((el) => {
      const animationType = el.getAttribute('data-scroll-animate') || 'fade-in-up';
      const delay = parseFloat(el.getAttribute('data-scroll-delay') || '0');
      const duration = parseFloat(el.getAttribute('data-scroll-duration') || '1');

      let tween: gsap.core.Tween;

      switch (animationType) {
        case 'fade-in-up':
          tween = gsap.fromTo(el,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration,
              delay,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: ref.current,
                start: 'top 95%',
                once: true,
              },
            }
          );
          break;
        case 'fade-in':
          tween = gsap.fromTo(el,
            { opacity: 0 },
            {
              opacity: 1,
              duration,
              delay,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: ref.current,
                start: 'top 95%',
                once: true,
              },
            }
          );
          break;
        case 'slide-in-right':
          tween = gsap.fromTo(el,
            { opacity: 0, x: 40 },
            {
              opacity: 1,
              x: 0,
              duration,
              delay,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: ref.current,
                start: 'top 95%',
                once: true,
              },
            }
          );
          break;
        case 'slide-in-left':
          tween = gsap.fromTo(el,
            { opacity: 0, x: -20 },
            {
              opacity: 1,
              x: 0,
              duration,
              delay,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: ref.current,
                start: 'top 95%',
                once: true,
              },
            }
          );
          break;
        case 'scale-in':
          tween = gsap.fromTo(el,
            { opacity: 0, scale: 0.9 },
            {
              opacity: 1,
              scale: 1,
              duration,
              delay,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: ref.current,
                start: 'top 95%',
                once: true,
              },
            }
          );
          break;
        default:
          tween = gsap.fromTo(el,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration,
              delay,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: ref.current,
                start: 'top 95%',
                once: true,
              },
            }
          );
      }

      if (tween) {
        animations.push(tween);
        if (tween.scrollTrigger) triggers.push(tween.scrollTrigger);
      }
    });

    return () => {
      triggers.forEach(st => st.kill());
      animations.forEach(tw => tw.kill());
    };
  }, []);

  return ref;
}

export function useStaggerAnimation(staggerDelay = 0.1) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const children = ref.current.querySelectorAll('[data-stagger-child]');
    
    const tween = gsap.fromTo(children,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: staggerDelay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 85%',
          once: true,
        },
      }
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [staggerDelay]);

  return ref;
}
