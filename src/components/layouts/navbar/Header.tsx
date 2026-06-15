import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, X } from "lucide-react";

export default function Header() {
  const location = useLocation();

  // Scroll & Menu States
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");

  const mainLinks = [
    { label: "Solutions", path: "#solutions" },
    { label: "Projects", path: "#projects" },
    { label: "Smart Villas", path: "#smart-villas" },
    { label: "About", path: "#about" },
    { label: "Resources", path: "#resources" },
    { label: "Contact", path: "#contact" },
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
  }, [location.pathname]);

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
      }
    } else {
      setMenuOpen(false);
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
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "py-3 bg-bg-surface/90 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.05)]"
            : "py-3 border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-8xl h-[64px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-16">
          {/* Logo Section */}
          <div className="flex items-center gap-3 shrink-0">
            <Link to="/" className="flex flex-col group">
              <div className="font-serif text-2xl lg:text-3xl font-extrabold tracking-[0.2em] text-text-main leading-none uppercase">
                <span>MAKC</span>
              </div>
              <span className="text-[7.5px] font-bold tracking-[0.45em] text-gold-primary mt-1.5 uppercase leading-none pl-[2px]">
                AUTOMATIONS
              </span>
            </Link>
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
                      ? "text-gold-primary"
                      : "text-text-muted hover:text-text-main"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Side Action Buttons */}
          <div className="flex items-center gap-3 shrink-0 relative">
            {/* Book Consultation Button (Mockup styling) */}
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "#contact")}
              className="hidden sm:flex items-center justify-center px-6 py-2.5 bg-gold-primary text-black font-bold text-xs tracking-[0.12em] uppercase transition-all duration-300 hover:bg-gold-hover font-body rounded-none shadow-[0_4px_15px_rgba(197,168,128,0.2)]"
            >
              BOOK CONSULTATION{" "}
              <span className="ml-2 font-mono font-medium">&gt;</span>
            </a>

            {/* Mobile Hamburger menu trigger */}
            <button
              onClick={() => setMenuOpen(!isMenuOpen)}
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-text-muted transition-all hover:bg-bg-surface hover:text-text-main focus:outline-none lg:hidden ${
                isMenuOpen ? "bg-bg-surface text-text-main" : ""
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
          className={`absolute right-0 top-0 bottom-0 z-50 w-[300px] max-w-[80vw] bg-bg-surface p-6 shadow-2xl transition-transform duration-300 ease-out border-l border-border-main flex flex-col justify-between ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div>
            <div className="flex items-center justify-between pb-5 border-b border-border-main">
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="font-serif text-lg font-extrabold tracking-[0.2em] text-text-main leading-none uppercase"
              >
                <span>MAKC</span>
              </Link>
              <button
                onClick={() => setMenuOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-full text-text-muted transition-colors hover:bg-bg-surface hover:text-text-main"
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
                        ? "text-gold-primary bg-gold-primary/5"
                        : "text-text-muted hover:bg-bg-surface hover:text-text-main"
                    }`}
                  >
                    <span className="text-gold-primary text-xs font-mono">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Drawer Footer Call Shortcut */}
          <div className="mt-auto border-t border-border-main pt-4">
            <a
              href="tel:+919999999999"
              className="flex h-11 w-full items-center justify-center gap-2 rounded-none bg-gold-primary text-sm font-bold text-black transition-all hover:bg-gold-hover hover:text-black shadow-[0_4px_15px_rgba(197,168,128,0.2)]"
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
