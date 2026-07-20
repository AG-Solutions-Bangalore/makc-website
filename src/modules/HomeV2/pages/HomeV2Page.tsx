import useSEO from "@/hooks/useSEO";
import type { ReactNode } from "react";
import { lazy, Suspense, useEffect, useRef, useState } from "react";
import HeroSectionV2 from "../sections/HeroSectionV2";
import StatsSectionV2 from "../sections/StatsSectionV2";

// Lazy load below-the-fold sections to shrink the initial page load JS payload
const ServicesSectionV2 = lazy(() => import("../sections/ServicesSectionV2"));
const PartnerLogosSection = lazy(
  () => import("../sections/PartnerLogosSection"),
);
const SolutionsGallery = lazy(
  () => import("@/components/common/SolutionsGallery"),
);

function LazyOnView({
  children,
  minHeight = 520,
}: {
  children: ReactNode;
  minHeight?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (shouldRender) return;

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { rootMargin: "700px 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [shouldRender]);

  return (
    <div ref={ref} style={shouldRender ? undefined : { minHeight }}>
      {shouldRender ? <Suspense fallback={null}>{children}</Suspense> : null}
    </div>
  );
}

export default function HomeV2Page() {
  useSEO({
    title: "Home automation company in bangalore - Makcautomations",
    description:
      "Mac Automation - Best Home Automation company in Bangalore. Get all smart home automation solutions with security, safety, and convenient solutions.",
    keywords:
      "home automation company in bangalore, home automation bangalore, smart home automation",
    canonicalUrl: "https://makcautomations.com/",
    robots:
      "INDEX, FOLLOW, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, MAX-IMAGE-PREVIEW:LARGE",
  });

  return (
    <div className="relative bg-bg-main min-h-screen text-text-main">
      {/* V2 Hero Section */}
      <HeroSectionV2 />

      {/* V2 Stats Section */}
      <StatsSectionV2 />

      <LazyOnView minHeight={720}>
        <ServicesSectionV2 />
      </LazyOnView>

      <LazyOnView minHeight={520}>
        <SolutionsGallery />
      </LazyOnView>

      <LazyOnView minHeight={260}>
        <PartnerLogosSection />
      </LazyOnView>
    </div>
  );
}
