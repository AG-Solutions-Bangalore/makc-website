import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  robots?: string;
}

export default function useSEO({
  title,
  description,
  keywords,
  canonicalUrl,
  robots,
}: SEOProps) {
  useEffect(() => {
    // 1. Set Title
    document.title = title;

    // 2. Set Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", description);

    // 3. Set Keywords
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement("meta");
        metaKeywords.setAttribute("name", "keywords");
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute("content", keywords);
    }

    // 4. Set Canonical URL
    if (canonicalUrl) {
      let linkCanonical = document.querySelector('link[rel="canonical"]');
      if (!linkCanonical) {
        linkCanonical = document.createElement("link");
        linkCanonical.setAttribute("rel", "canonical");
        document.head.appendChild(linkCanonical);
      }
      linkCanonical.setAttribute("href", canonicalUrl);
    }

    // 5. Set Robots Tag
    if (robots) {
      let metaRobots = document.querySelector('meta[name="robots"]');
      if (!metaRobots) {
        metaRobots = document.createElement("meta");
        metaRobots.setAttribute("name", "robots");
        document.head.appendChild(metaRobots);
      }
      metaRobots.setAttribute("content", robots);
    }
  }, [title, description, keywords, canonicalUrl, robots]);
}
