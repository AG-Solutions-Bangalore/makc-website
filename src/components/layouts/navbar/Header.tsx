/**
 * Header.tsx — Premium animated navbar with GSAP-powered drawer
 *
 * Skills applied:
 *  • gsap-core    — gsap.to/from/fromTo, autoAlpha, x/y transforms, ease strings
 *  • gsap-react   — useGSAP() hook with scope ref, contextSafe for event callbacks
 *  • gsap-timeline — gsap.timeline() with position param, defaults, stagger
 *  • gsap-performance — only x/y/autoAlpha (no layout props), will-change via GSAP
 */

import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import BrandLogo from "@/components/common/BrandLogo";

gsap.registerPlugin(useGSAP);

/* ─────────────────────────── data ─────────────────────────── */

interface NavLink {
  label: string;
  path: string;
  external?: boolean;
}

const allLinks: NavLink[] = [
  { label: "Home",       path: "/" },
  { label: "Automation", path: "/automation" },
  { label: "Lighting",   path: "/lighting" },
  { label: "Networking", path: "/networking" },
  { label: "Security",   path: "/security" },
  { label: "Audio",      path: "/audio" },
  // { label: "Interior",   path: "https://www.saavidesignstudio.com/", external: true },
  { label: "Contact Us", path: "/contact" },
];

const moreLinks = [
  { label: "About",      path: "/about",      desc: "Our story & mission" },
  { label: "Why Us",     path: "/why-us",     desc: "What sets us apart" },
  { label: "Service",    path: "/service",    desc: "Full solution catalog" },
  { label: "Blog",       path: "/blog",       desc: "Insights & updates" },
  { label: "Experience", path: "/experience", desc: "Visit our experience zone" },
];

/* ─────────────────────────── component ─────────────────────────── */

export default function Header() {
  const location   = useLocation();
  const [isScrolled,  setScrolled]  = useState(() => typeof window !== "undefined" && window.scrollY > 20);
  const [drawerOpen,  setDrawer]    = useState(false);

  /* refs — GSAP targets */
  const headerRef     = useRef<HTMLElement>(null);
  const navLinksRef   = useRef<HTMLElement>(null);
  const drawerRef     = useRef<HTMLElement>(null);
  const backdropRef   = useRef<HTMLDivElement>(null);
  const drawerTlRef   = useRef<gsap.core.Timeline | null>(null);

  /* ── header mount animation ── */
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(headerRef.current, {
      y: -80,
      autoAlpha: 0,
      duration: 0.7,
    });

    if (navLinksRef.current) {
      tl.from(navLinksRef.current.querySelectorAll("a, [data-nav]"), {
        y: -12,
        autoAlpha: 0,
        stagger: 0.06,
        duration: 0.45,
      }, "-=0.3");
    }
  }, { scope: headerRef });

  /* ── drawer open/close timeline ── */
  const { contextSafe } = useGSAP(() => {
    /* build the drawer timeline once (paused) */
    const tl = gsap.timeline({
      paused: true,
      defaults: { ease: "power4.out" },
    });

    if (!drawerRef.current || !backdropRef.current) return;

    /* backdrop fade */
    tl.to(backdropRef.current, {
      autoAlpha: 1,
      duration: 0.35,
    }, 0);

    /* panel slide-in */
    tl.fromTo(
      drawerRef.current,
      { x: "100%", autoAlpha: 0 },
      { x: "0%",   autoAlpha: 1, duration: 0.5, ease: "expo.out" },
      0,
    );

    /* header label — immediateRender:false prevents from() snapping to hidden on a paused tl */
    tl.from(drawerRef.current.querySelector(".drawer-header"), {
      y: -16,
      autoAlpha: 0,
      duration: 0.35,
      immediateRender: false,
    }, 0.15);

    /* staggered nav items */
    tl.from(drawerRef.current.querySelectorAll(".drawer-item"), {
      x: 40,
      autoAlpha: 0,
      stagger: 0.07,
      duration: 0.4,
      ease: "back.out(1.4)",
      immediateRender: false,
    }, 0.2);

    /* footer CTA */
    tl.from(drawerRef.current.querySelector(".drawer-footer"), {
      y: 20,
      autoAlpha: 0,
      duration: 0.4,
      immediateRender: false,
    }, 0.35);

    drawerTlRef.current = tl;
  }, { scope: drawerRef });

  /* play/reverse on state change */
  useEffect(() => {
    if (!drawerTlRef.current) return;
    if (drawerOpen) {
      drawerTlRef.current.play();
    } else {
      drawerTlRef.current.reverse();
    }
  }, [drawerOpen]);

  /* ── hamburger bar GSAP refs ── */
  const bar1 = useRef<HTMLSpanElement>(null);
  const bar2 = useRef<HTMLSpanElement>(null);
  const bar3 = useRef<HTMLSpanElement>(null);

  const animateHamburger = contextSafe?.((open: boolean) => {
    if (!bar1.current || !bar2.current || !bar3.current) return;
    if (open) {
      gsap.to(bar1.current, { rotation: 45,  y: 8,  duration: 0.35, ease: "power2.inOut" });
      gsap.to(bar2.current, { autoAlpha: 0,  x: 10, duration: 0.2,  ease: "power2.in"   });
      gsap.to(bar3.current, { rotation: -45, y: -8, duration: 0.35, ease: "power2.inOut" });
    } else {
      gsap.to(bar1.current, { rotation: 0,  y: 0, duration: 0.35, ease: "power2.inOut" });
      gsap.to(bar2.current, { autoAlpha: 1, x: 0, duration: 0.3,  ease: "power2.out"   });
      gsap.to(bar3.current, { rotation: 0,  y: 0, duration: 0.35, ease: "power2.inOut" });
    }
  }) ?? (() => {});

  const toggle = () => {
    const next = !drawerOpen;
    setDrawer(next);
    animateHamburger(next);
    document.body.style.overflow = next ? "hidden" : "";
  };

  const close = contextSafe?.(() => {
    setDrawer(false);
    animateHamburger(false);
    document.body.style.overflow = "";
  }) ?? (() => { setDrawer(false); });

  /* ── scroll ── */
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  /* ── close on navigation ── */
  useEffect(() => { close(); }, [location.pathname]); // eslint-disable-line

  /* ── cleanup body scroll ── */
  useEffect(() => () => { document.body.style.overflow = ""; }, []);

  /* ──────────────────────────── JSX ──────────────────────────── */
  return (
    <>
      {/* ═══════════════ HEADER BAR ═══════════════ */}
      <header
        ref={headerRef}
        className={`fixed top-0 z-50 w-full transition-[background,box-shadow,border-color] duration-500 ${
          isScrolled
            ? "bg-bg-surface/85 backdrop-blur-2xl border-b border-border-main/40 shadow-[0_1px_40px_rgba(0,0,0,0.18)]"
            : "bg-transparent border-b border-transparent"
        }`}
        style={{ willChange: "transform", visibility: "hidden" }}
      >
        <div className="mx-auto flex max-w-8xl h-24 items-center justify-between gap-4 px-4 sm:px-6 lg:px-16">

          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0 group">
            <BrandLogo className="h-10 w-auto transition-transform duration-300 group-hover:scale-[1.03]" />
          </Link>

          {/* Desktop nav */}
          <nav ref={navLinksRef} className="hidden lg:flex items-center gap-0.5">
            {allLinks.map((link) => {
              const isActive = location.pathname === link.path;
              if (link.external) {
                return (
                  <a
                    key={link.label}
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-nav
                    className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                      isScrolled || drawerOpen
                        ? "text-text-muted hover:text-text-main"
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              }
              return (
                <Link
                  key={link.label}
                  to={link.path}
                  data-nav
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                    isActive
                      ? "text-accent-blue"
                      : isScrolled || drawerOpen
                        ? "text-text-muted hover:text-text-main"
                        : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.label}
                 
                </Link>
              );
            })}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-2.5 shrink-0">

            {/* Phone pill — desktop only */}
            <a
              href="tel:+919948432444"
              className="hidden sm:flex items-center gap-2 h-9 px-4 rounded-full bg-accent-blue text-white text-xs font-semibold tracking-wide hover:bg-accent-blue/90 hover:scale-[1.03] active:scale-95 transition-all duration-200 shadow-[0_4px_18px_rgba(10,132,255,0.35)] cursor-pointer"
              title="Call Us"
            >
              <Phone className="h-3.5 w-3.5 stroke-[2]" />
              <span>Call Now</span>
            </a>

            {/* Phone icon — mobile only */}
            <a
              href="tel:+919948432444"
              className="flex sm:hidden h-9 w-9 items-center justify-center rounded-full bg-accent-blue text-white hover:scale-105 active:scale-95 transition-all duration-200 shadow-[0_4px_15px_rgba(10,132,255,0.35)] cursor-pointer"
              title="Call Us"
            >
              <Phone className="h-4 w-4 stroke-[1.8]" />
            </a>

            {/* ── Hamburger ── */}
            <button
              onClick={toggle}
              aria-label={drawerOpen ? "Close menu" : "Open menu"}
              className={`flex h-9 w-9 flex-col items-center justify-center rounded-full border transition-all duration-300 focus:outline-none cursor-pointer gap-[5px] ${
                isScrolled || drawerOpen
                  ? "border-border-main/60 hover:border-accent-blue/40 hover:bg-bg-surface"
                  : "border-white/25 hover:border-white/50 hover:bg-white/10"
              }`}
              style={{ willChange: "transform" }}
            >
              <span ref={bar1} className={`block h-[1.5px] w-[18px] rounded-full origin-center ${isScrolled || drawerOpen ? "bg-text-main" : "bg-white"}`} />
              <span ref={bar2} className={`block h-[1.5px] w-[14px] rounded-full origin-center ${isScrolled || drawerOpen ? "bg-text-main" : "bg-white"}`} />
              <span ref={bar3} className={`block h-[1.5px] w-[18px] rounded-full origin-center ${isScrolled || drawerOpen ? "bg-text-main" : "bg-white"}`} />
            </button>
          </div>
        </div>
      </header>

      {/* ═══════════════ BACKDROP ═══════════════ */}
      <div
        ref={backdropRef}
        onClick={close}
        style={{ opacity: 0, visibility: "hidden", willChange: "opacity" }}
        className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm"
      />

      {/* ═══════════════ DRAWER PANEL ═══════════════ */}
      <aside
        ref={drawerRef}
        style={{ transform: "translateX(100%)", opacity: 0, visibility: "hidden", willChange: "transform, opacity" }}
        className="fixed right-0 top-0 bottom-0 z-[70] w-[320px] max-w-[92vw] flex flex-col overflow-hidden"
      >
        {/* Panel background — subtle surface, no decorative blobs */}
        <div className="absolute inset-0 bg-bg-surface border-l border-border-main/30" />

        {/* ── Drawer Header ── */}
        <div className="drawer-header relative flex items-center justify-between px-6 pt-6 pb-5 border-b border-border-main/20">
          <Link to="/" onClick={close} className="flex items-center">
            <BrandLogo className="h-7 w-auto" />
          </Link>
          <button
            onClick={close}
            aria-label="Close menu"
            className="relative flex h-8 w-8 items-center justify-center rounded-lg border border-border-main/40 hover:border-border-main hover:bg-bg-main transition-all duration-200 focus:outline-none cursor-pointer group"
          >
            <span className="absolute block h-[1.5px] w-3.5 rounded-full bg-text-muted rotate-45" />
            <span className="absolute block h-[1.5px] w-3.5 rounded-full bg-text-muted -rotate-45" />
          </button>
        </div>

        {/* ── Nav items ── */}
        <nav className="relative flex-1 overflow-y-auto px-4 py-5">

          {/* Section label — single, plain, not repeated per-item */}
          <p className="text-xs font-medium text-text-muted px-2 mb-3 uppercase tracking-widest">Explore</p>

          <ul className="space-y-0.5">
            {moreLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    onClick={close}
                    className={`drawer-item group flex items-center gap-3 rounded-xl px-3 py-3 transition-all duration-200 ${
                      isActive
                        ? "bg-accent-blue/10 text-accent-blue"
                        : "text-text-main hover:bg-bg-main"
                    }`}
                  >
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm font-semibold leading-tight ${isActive ? "text-accent-blue" : "text-text-main"}`}>
                        {link.label}
                      </p>
                      <p className="text-xs text-text-muted mt-0.5 leading-tight truncate">{link.desc}</p>
                    </div>
                    <ArrowUpRight
                      className={`w-3.5 h-3.5 shrink-0 transition-all duration-200 ${
                        isActive
                          ? "text-accent-blue"
                          : "text-text-muted/40 group-hover:text-text-muted group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* ── Footer CTA ── */}
        <div className="drawer-footer relative px-4 pb-7 pt-4 border-t border-border-main/20 space-y-2.5">
          <a
            href="tel:+919948432444"
            className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-accent-blue text-sm font-bold text-white transition-all duration-200 hover:bg-accent-blue/90 hover:scale-[1.01] active:scale-[0.98] cursor-pointer"
          >
            <Phone className="h-4 w-4 stroke-[2]" />
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

