import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, X, ChevronRight } from "lucide-react";

// 3x3 dot grid icon matching the old header
function GridIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <circle cx="6" cy="6" r="2" />
      <circle cx="12" cy="6" r="2" />
      <circle cx="18" cy="6" r="2" />
      <circle cx="6" cy="12" r="2" />
      <circle cx="12" cy="12" r="2" />
      <circle cx="18" cy="12" r="2" />
      <circle cx="6" cy="18" r="2" />
      <circle cx="12" cy="18" r="2" />
      <circle cx="18" cy="18" r="2" />
    </svg>
  );
}

export default function Header() {
  const location = useLocation();

  // Scroll & Menu States
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [showGridDropdown, setShowGridDropdown] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");

  const dropdownRef = useRef<HTMLDivElement>(null);

  const mainLinks = [
    { label: "Home", path: "#home" },
    { label: "Automation", path: "#automation" },
    { label: "Security", path: "#security" },
    { label: "Lighting", path: "#lighting" },
    { label: "Networking", path: "#networking" },
    { label: "Interior", path: "#interior" },
    { label: "Contact Us", path: "#contact" },
  ];

  const gridDropdownLinks = [
    { label: "About", path: "#about" },
    { label: "Service", path: "#automation" },
    { label: "Blog", path: "#faq" }, // Links to FAQs on the landing page
    { label: "Experience", path: "#why-makc" }, // Links to why choose us section
  ];

  // Monitor scroll height for sticky background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Monitor scroll pos to set active link
  useEffect(() => {
    const handleScrollActive = () => {
      const scrollPos = window.scrollY + 150;

      const sections = [
        "home",
        "automation",
        "security",
        "lighting",
        "networking",
        "interior",
        "about",
        "why-makc",
        "faq",
        "contact",
      ];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveHash(section === "home" ? "#home" : `#${section}`);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScrollActive, { passive: true });
    return () => window.removeEventListener("scroll", handleScrollActive);
  }, []);

  // Close menus on path navigation
  useEffect(() => {
    setMenuOpen(false);
    setShowGridDropdown(false);
  }, [location.pathname]);

  // Click outside grid dropdown closes it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowGridDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Lock body scroll when mobile menu drawer is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Offset scroll calculations
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string,
  ) => {
    if (path.startsWith("#")) {
      if (location.pathname === "/") {
        e.preventDefault();
        const id = path.substring(1);
        scrollToSection(id);
        setActiveHash(path);
        setMenuOpen(false);
        setShowGridDropdown(false);
      }
    } else {
      setMenuOpen(false);
      setShowGridDropdown(false);
    }
  };

  // Trigger hash scroll on page load
  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const id = location.hash.substring(1);
      setTimeout(() => {
        scrollToSection(id);
      }, 150);
    }
  }, [location]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full border-b border-medium-border bg-medium-surface/90 backdrop-blur-md transition-all duration-300 ${
          isScrolled ? "py-1.5 shadow-[0_4px_20px_rgba(0,0,0,0.05)]" : "py-3"
        }`}
      >
        <div className="mx-auto flex max-w-7xl h-[64px] items-center justify-between gap-4 px-4 sm:px-6">
          {/* Logo Section */}
          <div className="flex items-center gap-3 shrink-0">
            <Link to="/" className="flex items-center gap-2 group">
              {/* Stylized Green Bulb SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-8 w-8 text-green-500 transition-transform duration-300 group-hover:scale-110"
              >
                <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .6 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                <path d="M9 18h6" />
                <path d="M10 22h4" />
                <circle cx="12" cy="8" r="1.5" className="fill-green-500" />
                <path d="M12 9.5v5" />
                <path d="M10.5 12h3" />
              </svg>

              <div className="flex flex-col">
                <div className="font-display text-lg lg:text-xl font-bold tracking-wider text-medium-text-primary flex items-baseline leading-none">
                  <span>MAK</span>
                  <span className="text-ma-yellow">c</span>
                  <span className="text-[8px] align-super text-ma-yellow ml-0.5 select-none">
                    &reg;
                  </span>
                </div>
                <span className="text-[6.5px] font-semibold tracking-wider text-medium-text-secondary mt-0.5 uppercase">
                  Experience the Smart Living
                </span>
              </div>
            </Link>

            {/* ISO certified badge stamp */}
            <div className="hidden md:flex items-center pl-3 border-l border-medium-border">
              <div className="flex flex-col border border-medium-border-strong rounded-lg px-2 py-0.5 text-[7px] font-bold text-medium-text-secondary leading-tight uppercase text-center bg-medium-surface-muted">
                <span>ISO Certified</span>
                <span className="text-[6.5px] text-ma-yellow">9001:2015</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {mainLinks.map((link) => {
              const isHash = link.path.startsWith("#");
              const href = isHash
                ? location.pathname === "/"
                  ? link.path
                  : `/${link.path}`
                : link.path;

              const isActive = activeHash === link.path;

              return (
                <Link
                  key={link.label}
                  to={href}
                  onClick={(e) => handleLinkClick(e, link.path)}
                  className={`px-3.5 py-1.5 text-sm font-semibold rounded-full transition-colors ${
                    isActive
                      ? "text-ma-yellow bg-ma-yellow/5"
                      : "text-medium-text-secondary hover:text-medium-text-primary hover:bg-medium-surface-hover"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Side Action Buttons */}
          <div className="flex items-center gap-2 shrink-0 relative">
            {/* Phone button */}
            <a
              href="tel:+919999999999"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-ma-yellow text-black transition-all hover:scale-105 active:scale-95 focus:outline-none shadow-[0_2px_8px_rgba(197,168,128,0.25)]"
              title="Call Us"
            >
              <Phone className="h-4 w-4" />
            </a>

            {/* Grid Icon dropdown menu trigger */}
            <div ref={dropdownRef} className="relative hidden lg:block">
              <button
                onClick={() => setShowGridDropdown(!showGridDropdown)}
                className={`flex h-9 w-9 items-center justify-center rounded-full text-medium-text-secondary transition-all hover:bg-medium-surface-hover hover:text-medium-text-primary focus:outline-none ${
                  showGridDropdown
                    ? "bg-medium-surface-hover text-medium-text-primary"
                    : ""
                }`}
                aria-label="More navigation"
                title="Explore More"
              >
                <GridIcon className="h-4.5 w-4.5" />
              </button>

              {/* Grid Dropdown Panel */}
              {showGridDropdown && (
                <div className="absolute right-0 top-11 z-50 w-[180px] overflow-hidden rounded-2xl border border-medium-border bg-medium-surface p-1.5 shadow-2xl transition-all">
                  {gridDropdownLinks.map((link) => {
                    const isHash = link.path.startsWith("#");
                    const href = isHash
                      ? location.pathname === "/"
                        ? link.path
                        : `/${link.path}`
                      : link.path;
                    return (
                      <Link
                        key={link.label}
                        to={href}
                        onClick={(e) => handleLinkClick(e, link.path)}
                        className="flex items-center justify-between rounded-xl px-4 py-2.5 text-xs font-semibold text-medium-text-secondary transition-colors hover:bg-medium-surface-hover hover:text-medium-text-primary"
                      >
                        <span>{link.label}</span>
                        <ChevronRight className="h-3.5 w-3.5 opacity-60" />
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Mobile Hamburger menu trigger */}
            <button
              onClick={() => setMenuOpen(!isMenuOpen)}
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-medium-text-secondary transition-all hover:bg-medium-surface-hover hover:text-medium-text-primary focus:outline-none lg:hidden ${
                isMenuOpen
                  ? "bg-medium-surface-hover text-medium-text-primary"
                  : ""
              }`}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <div className="relative flex h-4.5 w-4.5 flex-col justify-between transition-all duration-300">
                <span
                  className={`h-0.5 w-full bg-current rounded-full transition-all duration-300 origin-left ${
                    isMenuOpen
                      ? "rotate-45 translate-x-[2.2px] translate-y-[-0.2px]"
                      : ""
                  }`}
                />
                <span
                  className={`h-0.5 w-full bg-current rounded-full transition-all duration-300 ${
                    isMenuOpen ? "opacity-0 translate-x-2" : ""
                  }`}
                />
                <span
                  className={`h-0.5 w-full bg-current rounded-full transition-all duration-300 origin-left ${
                    isMenuOpen
                      ? "-rotate-45 translate-x-[2.2px] translate-y-[0.2px]"
                      : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Drawer Overlay (Mobile Navigation Drawer) */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop overlay */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />

        {/* Drawer slide-out panel */}
        <div
          className={`absolute right-0 top-0 bottom-0 z-50 w-[300px] max-w-[80vw] bg-medium-surface p-6 shadow-2xl transition-transform duration-300 ease-out border-l border-medium-border flex flex-col justify-between ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div>
            <div className="flex items-center justify-between pb-5 border-b border-medium-border">
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="font-display text-base font-bold tracking-wider text-medium-text-primary"
              >
                <span>MAK</span>
                <span className="text-ma-yellow">c</span>
              </Link>
              <button
                onClick={() => setMenuOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-full text-medium-text-secondary transition-colors hover:bg-medium-surface-hover hover:text-medium-text-primary"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Navigation links inside drawer */}
            <nav className="mt-5 flex flex-col gap-0.5">
              {/* Primary Solutions Links */}
              {mainLinks.map((link, idx) => {
                const isHash = link.path.startsWith("#");
                const href = isHash
                  ? location.pathname === "/"
                    ? link.path
                    : `/${link.path}`
                  : link.path;
                const isActive = activeHash === link.path;
                return (
                  <Link
                    key={link.label}
                    to={href}
                    onClick={(e) => handleLinkClick(e, link.path)}
                    className={`flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all ${
                      isActive
                        ? "text-ma-yellow bg-ma-yellow/5"
                        : "text-medium-text-secondary hover:bg-medium-surface-hover hover:text-medium-text-primary"
                    }`}
                  >
                    <span className="text-ma-yellow text-xs font-mono">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    {link.label}
                  </Link>
                );
              })}

              <div className="h-[1px] bg-medium-border my-3" />

              <div className="px-4 pb-1 text-[10px] font-bold uppercase tracking-wider text-medium-text-secondary">
                More Information
              </div>

              {/* Grid Menu Links */}
              {gridDropdownLinks.map((link) => {
                const isHash = link.path.startsWith("#");
                const href = isHash
                  ? location.pathname === "/"
                    ? link.path
                    : `/${link.path}`
                  : link.path;
                return (
                  <Link
                    key={link.label}
                    to={href}
                    onClick={(e) => handleLinkClick(e, link.path)}
                    className="flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold text-medium-text-secondary transition-all hover:bg-medium-surface-hover hover:text-medium-text-primary"
                  >
                    <ChevronRight className="h-3.5 w-3.5 opacity-60" />
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Drawer Footer Call Shortcut */}
          <div className="mt-auto border-t border-medium-border pt-4">
            <a
              href="tel:+919999999999"
              className="flex h-11 w-full items-center justify-center gap-2 rounded-full bg-ma-yellow text-sm font-bold text-black transition-all hover:bg-ma-white hover:text-ma-black"
            >
              <Phone className="h-4 w-4" />
              <span>CALL NOW</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
