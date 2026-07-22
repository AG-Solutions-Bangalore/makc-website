import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  robots?: string;
  author?: string;
  publisher?: string;
}

export default function useSEO({
  title,
  description,
  keywords,
  canonicalUrl,
  robots,
  author = "MAKc Automations",
  publisher = "MAKc Automations",
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
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (keywords) {
      if (!metaKeywords) {
        metaKeywords = document.createElement("meta");
        metaKeywords.setAttribute("name", "keywords");
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute("content", keywords);
    } else if (metaKeywords) {
      metaKeywords.remove();
    }

    // 4. Set Canonical URL
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (canonicalUrl) {
      if (!linkCanonical) {
        linkCanonical = document.createElement("link");
        linkCanonical.setAttribute("rel", "canonical");
        document.head.appendChild(linkCanonical);
      }
      linkCanonical.setAttribute("href", canonicalUrl);
    } else if (linkCanonical) {
      linkCanonical.remove();
    }

    // 5. Set Robots Tag
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (robots) {
      if (!metaRobots) {
        metaRobots = document.createElement("meta");
        metaRobots.setAttribute("name", "robots");
        document.head.appendChild(metaRobots);
      }
      metaRobots.setAttribute("content", robots);
    } else if (metaRobots) {
      metaRobots.remove();
    }

    // 6. Set Author Tag
    let metaAuthor = document.querySelector('meta[name="author"]');
    if (!metaAuthor) {
      metaAuthor = document.createElement("meta");
      metaAuthor.setAttribute("name", "author");
      document.head.appendChild(metaAuthor);
    }
    metaAuthor.setAttribute("content", author);

    // 7. Set Publisher Tag
    let metaPublisher = document.querySelector('meta[name="publisher"]');
    if (!metaPublisher) {
      metaPublisher = document.createElement("meta");
      metaPublisher.setAttribute("name", "publisher");
      document.head.appendChild(metaPublisher);
    }
    metaPublisher.setAttribute("content", publisher);
  }, [title, description, keywords, canonicalUrl, robots, author, publisher]);
}
