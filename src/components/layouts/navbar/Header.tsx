import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight, Phone } from "lucide-react";
import BrandLogo from "@/components/common/BrandLogo";

interface NavLink {
  label: string;
  path: string;
  external?: boolean;
}

const allLinks: NavLink[] = [
  { label: "Home", path: "/" },
  { label: "Automation", path: "/automation" },
  { label: "Lighting", path: "/lighting" },
  { label: "Networking", path: "/networking" },
  { label: "Security", path: "/security" },
  { label: "Audio", path: "/audio" },
  { label: "Contact Us", path: "/contact" },
];

const moreLinks = [
  { label: "About", path: "/about", desc: "Our story & mission" },
  { label: "Why Us", path: "/why-us", desc: "What sets us apart" },
  { label: "Service", path: "/service", desc: "Full solution catalog" },
  { label: "Blog", path: "/blog", desc: "Insights & updates" },
  { label: "Experience", path: "/experience", desc: "Visit our experience zone" },
];

export default function Header() {
  const location = useLocation();
  const [isScrolled, setScrolled] = useState(
    () => typeof window !== "undefined" && window.scrollY > 20,
  );
  const [drawerOpen, setDrawer] = useState(false);

  // Pages that have a full-bleed dark hero image — white nav text is safe on these
  const darkHeroRoutes = ["/", "/automation", "/lighting", "/networking", "/security", "/audio", "/about", "/why-us"];
  const hasDarkHero = darkHeroRoutes.includes(location.pathname);

  const close = () => {
    setDrawer(false);
    document.body.style.overflow = "";
  };

  const toggle = () => {
    setDrawer((open) => {
      const next = !open;
      document.body.style.overflow = next ? "hidden" : "";
      return next;
    });
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Each route starts with a transparent header; scrolling or hash navigation can activate it again.
    setScrolled(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    close();
  }, [location.pathname]);

  useEffect(() => () => {
    document.body.style.overflow = "";
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-[background,box-shadow,border-color] duration-300 ${
          isScrolled
            ? "bg-bg-surface/90 backdrop-blur-xl border-b border-border-main/40 shadow-[0_1px_30px_rgba(0,0,0,0.16)]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-8xl h-24 items-center justify-between gap-4 px-4 sm:px-6 lg:px-16">
          <Link to="/" className="flex items-center shrink-0 group">
            <BrandLogo className="h-10 w-auto transition-transform duration-300 group-hover:scale-[1.03]" />
          </Link>

          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Primary navigation">
            {allLinks.map((link) => {
              const isActive = location.pathname === link.path;
              const className = `relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                isActive
                  ? "text-accent-blue"
                  : isScrolled
                    ? "text-text-main hover:text-accent-blue"
                    : hasDarkHero
                      ? "!text-white/90 hover:!text-white"
                      : "text-text-main hover:text-accent-blue"
              }`;

              if (link.external) {
                return (
                  <a
                    key={link.label}
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
                  >
                    {link.label}
                  </a>
                );
              }

              return (
                <Link key={link.label} to={link.path} className={className}>
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href="tel:+919948432444"
              className="hidden sm:flex items-center gap-2 h-9 px-4 rounded-full bg-accent-blue text-[#ffffff] text-xs font-semibold tracking-wide hover:bg-accent-blue/90 hover:scale-[1.03] active:scale-95 transition-all duration-200 shadow-[0_4px_18px_rgba(10,132,255,0.35)] cursor-pointer"
              aria-label="Call MAKc Automation"
            >
              <Phone className="h-3.5 w-3.5 stroke-[2]" aria-hidden="true" />
              <span>Call Now</span>
            </a>

            <a
              href="tel:+919948432444"
              className="flex sm:hidden h-9 w-9 items-center justify-center rounded-full bg-accent-blue text-[#ffffff] hover:scale-105 active:scale-95 transition-all duration-200 shadow-[0_4px_15px_rgba(10,132,255,0.35)] cursor-pointer"
              aria-label="Call MAKc Automation"
            >
              <Phone className="h-4 w-4 stroke-[1.8]" aria-hidden="true" />
            </a>

            <button
              type="button"
              onClick={toggle}
              aria-label={drawerOpen ? "Close menu" : "Open menu"}
              aria-expanded={drawerOpen}
              className={`flex h-9 w-9 flex-col items-center justify-center rounded-full border transition-all duration-300 focus:outline-none cursor-pointer gap-[5px] ${
                isScrolled || drawerOpen
                  ? "border-border-main/60 hover:border-accent-blue/40 hover:bg-bg-surface"
                  : hasDarkHero
                    ? "border-white/25 hover:border-white/50 hover:!bg-white/10"
                    : "border-border-main/60 hover:border-accent-blue/40 hover:bg-bg-surface"
              }`}
            >
              <span
                className={`block h-[1.5px] w-[18px] rounded-full origin-center transition-transform duration-300 ${
                  drawerOpen ? "translate-y-[6.5px] rotate-45" : ""
                } ${isScrolled || drawerOpen || !hasDarkHero ? "bg-text-main" : "bg-white"}`}
              />
              <span
                className={`block h-[1.5px] w-[14px] rounded-full origin-center transition-all duration-200 ${
                  drawerOpen ? "translate-x-2 opacity-0" : "opacity-100"
                } ${isScrolled || drawerOpen || !hasDarkHero ? "bg-text-main" : "bg-white"}`}
              />
              <span
                className={`block h-[1.5px] w-[18px] rounded-full origin-center transition-transform duration-300 ${
                  drawerOpen ? "-translate-y-[6.5px] -rotate-45" : ""
                } ${isScrolled || drawerOpen || !hasDarkHero ? "bg-text-main" : "bg-white"}`}
              />
            </button>
          </div>
        </div>
      </header>

      <div
        onClick={close}
        className={`fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          drawerOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      />

      <aside
        className={`fixed right-0 top-0 bottom-0 z-[70] w-[320px] max-w-[92vw] flex flex-col overflow-hidden transition-[transform,opacity,visibility] duration-500 ease-out ${
          drawerOpen ? "translate-x-0 opacity-100 visible" : "translate-x-full opacity-0 invisible"
        }`}
        aria-hidden={!drawerOpen}
      >
        <div className="absolute inset-0 bg-bg-surface border-l border-border-main/30" />

        <div className="relative flex items-center justify-between px-6 pt-6 pb-5 border-b border-border-main/20">
          <Link to="/" onClick={close} className="flex items-center">
            <BrandLogo className="h-7 w-auto" />
          </Link>
          <button
            type="button"
            onClick={close}
            aria-label="Close menu"
            className="relative flex h-8 w-8 items-center justify-center rounded-lg border border-border-main/40 hover:border-border-main hover:bg-bg-main transition-all duration-200 focus:outline-none cursor-pointer group"
          >
            <span className="absolute block h-[1.5px] w-3.5 rounded-full bg-text-muted rotate-45" />
            <span className="absolute block h-[1.5px] w-3.5 rounded-full bg-text-muted -rotate-45" />
          </button>
        </div>

        <nav className="relative flex-1 overflow-y-auto px-4 py-5" aria-label="Secondary navigation">
          {/* Primary nav links — only shown on mobile (hidden on lg+ where desktop nav renders them) */}
          <div className="lg:hidden">
            <p className="text-xs font-medium text-text-muted px-2 mb-3 uppercase tracking-widest">
              Pages
            </p>
            <ul className="space-y-0.5 mb-6">
              {allLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      onClick={close}
                      className={`group flex items-center gap-3 rounded-xl px-3 py-3 transition-all duration-200 ${
                        isActive
                          ? "bg-accent-blue/10 text-accent-blue"
                          : "text-text-main hover:bg-bg-main"
                      }`}
                    >
                      <p className={`flex-1 text-sm font-semibold leading-tight ${isActive ? "text-accent-blue" : "text-text-main"}`}>
                        {link.label}
                      </p>
                      <ArrowUpRight
                        className={`w-3.5 h-3.5 shrink-0 transition-all duration-200 ${
                          isActive
                            ? "text-accent-blue"
                            : "text-text-muted/40 group-hover:text-text-muted group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        }`}
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Secondary / more links */}
          <p className="text-xs font-medium text-text-muted px-2 mb-3 uppercase tracking-widest">
            Explore
          </p>

          <ul className="space-y-0.5">
            {moreLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    onClick={close}
                    className={`group flex items-center gap-3 rounded-xl px-3 py-3 transition-all duration-200 ${
                      isActive
                        ? "bg-accent-blue/10 text-accent-blue"
                        : "text-text-main hover:bg-bg-main"
                    }`}
                  >
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm font-semibold leading-tight ${isActive ? "text-accent-blue" : "text-text-main"}`}>
                        {link.label}
                      </p>
                      <p className="text-xs text-text-muted mt-0.5 leading-tight truncate">
                        {link.desc}
                      </p>
                    </div>
                    <ArrowUpRight
                      className={`w-3.5 h-3.5 shrink-0 transition-all duration-200 ${
                        isActive
                          ? "text-accent-blue"
                          : "text-text-muted/40 group-hover:text-text-muted group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      }`}
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="relative px-4 pb-7 pt-4 border-t border-border-main/20 space-y-2.5">
          <a
            href="tel:+919948432444"
            className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-accent-blue text-sm font-bold text-white transition-all duration-200 hover:bg-accent-blue/90 hover:scale-[1.01] active:scale-[0.98] cursor-pointer"
          >
            <Phone className="h-4 w-4 stroke-[2]" aria-hidden="true" />
            Call Now
          </a>
          <p className="text-center text-xs text-text-muted tracking-wide">
            +91 99484 32444
          </p>
        </div>
      </aside>
    </>
  );
}
