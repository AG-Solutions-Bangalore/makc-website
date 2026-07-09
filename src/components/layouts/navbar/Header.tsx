import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, X, ChevronRight } from "lucide-react";
import BrandLogo from "@/components/common/BrandLogo";

// 3x3 dot grid icon matching the mockup
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

  const dropdownRef = useRef<HTMLDivElement>(null);

  const mainLinks = [
    { label: "Home", path: "/" },
    { label: "Automation", path: "/automation" },
    
    { label: "Lighting", path: "/lighting" },
    { label: "Networking", path: "/networking" },
    { label: "Security", path: "/security" },
    // { label: "Contact Us", path: "/contact" },
    { label: "Audio", path: "/audio" },
  ];

  const gridDropdownLinks = [
    { label: "About", path: "/about" },
    { label: "Why Us", path: "/why-us" },
    { label: "Service", path: "/service" },
    { label: "Blog", path: "/blog" },
    { label: "Experience", path: "/experience" },
  ];

  // Monitor scroll height for sticky background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
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

  const handleLinkClick = () => {
    setMenuOpen(false);
    setShowGridDropdown(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "py-4 bg-bg-surface/90 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.05)] border-b border-border-main/50"
            : "py-4 border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-8xl h-[64px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-16">
          {/* Logo Section */}
          <div className="flex items-center gap-3 shrink-0">
            <Link to="/" className="flex items-center">
              <BrandLogo className="h-10 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {mainLinks.map((link) => {
              const isActive = location.pathname === link.path;

              return (
                <Link
                  key={link.label}
                  to={link.path}
                  onClick={handleLinkClick}
                  className={`px-3.5 py-1.5 text-sm font-semibold rounded-full transition-all duration-200 ${
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
            {/* Phone button */}
            <a
              href="tel:+919948432444"
              className="flex h-9 w-9 items-center apple-border-shine justify-center rounded-full bg-gold-primary text-white transition-all hover:scale-105 active:scale-95 focus:outline-none shadow-[0_4px_15px_rgba(10,132,255,0.3)] cursor-pointer"
              title="Call Us"
            >
              <Phone className="h-4.5 w-4.5 stroke-[1.8]" />
            </a>

            {/* Grid Icon dropdown menu trigger */}
            <div ref={dropdownRef} className="relative hidden lg:block">
              <button
                onClick={() => setShowGridDropdown(!showGridDropdown)}
                className={`flex h-9 w-9 items-center justify-center rounded-full text-text-muted transition-all hover:bg-bg-surface hover:text-text-main focus:outline-none cursor-pointer ${
                  showGridDropdown ? "bg-bg-surface text-text-main" : ""
                }`}
                aria-label="More navigation"
                title="Explore More"
              >
                <GridIcon className="h-4.5 w-4.5" />
              </button>

              {/* Grid Dropdown Panel */}
              {showGridDropdown && (
                <div className="absolute right-0 top-12 z-50 w-[200px] overflow-hidden rounded-2xl border border-border-main/50 dark:border-[#0A84FF]/25 bg-white/95 dark:bg-[#061121]/90 backdrop-blur-xl p-2 shadow-2xl transition-all duration-300 animate-in fade-in slide-in-from-top-2">
                  <div className="px-3 py-1.5 text-[10px] font-bold tracking-wider text-text-muted/65 uppercase border-b border-border-main/40 dark:border-white/10 mb-1 select-none">
                    More Navigation
                  </div>
                  {gridDropdownLinks.map((link) => {
                    const isActive = location.pathname === link.path;
                    return (
                      <Link
                        key={link.label}
                        to={link.path}
                        onClick={handleLinkClick}
                        className={`flex items-center justify-between rounded-xl px-3.5 py-2.5 text-xs font-semibold hover:bg-[#0A84FF]/5 dark:hover:bg-[#0A84FF]/10 transition-all duration-200 ${
                          isActive ? "text-gold-primary" : "text-text-muted hover:text-text-main"
                        }`}
                      >
                        <span>{link.label}</span>
                        <ChevronRight className="h-4 w-4 opacity-50" />
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

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
                className="flex items-center"
              >
                <BrandLogo className="h-7 w-auto" />
              </Link>
              <button
                onClick={() => setMenuOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-full text-text-muted transition-colors hover:bg-bg-surface hover:text-text-main"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Navigation links inside drawer */}
            <nav className="mt-5 flex flex-col gap-0.5">
              {/* Primary Solutions Links */}
              {mainLinks.map((link, idx) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.label}
                    to={link.path}
                    onClick={handleLinkClick}
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

              <div className="h-[1px] bg-border-main my-3" />

              <div className="px-4 pb-1 text-[10px] font-bold uppercase tracking-wider text-text-muted/65">
                More Navigation
              </div>

              {/* Grid Menu Links */}
              {gridDropdownLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.label}
                    to={link.path}
                    onClick={handleLinkClick}
                    className={`flex items-center gap-3.5 rounded-xl px-4 py-2 text-sm font-semibold transition-all ${
                      isActive ? "text-gold-primary" : "text-text-muted hover:text-text-main"
                    }`}
                  >
                    <ChevronRight className="h-4 w-4 opacity-50" />
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Drawer Footer Call Shortcut */}
          <div className="mt-auto border-t border-border-main pt-4">
            <a
              href="tel:+919948432444"
              className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-gold-primary text-sm font-bold text-black transition-all hover:bg-gold-hover hover:text-black shadow-[0_4px_15px_rgba(10,132,255,0.3)]"
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
