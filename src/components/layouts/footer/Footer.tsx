import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { servicesData } from "@/data/servicesData";
import { Instagram, Linkedin, Twitter, Sun, Moon } from "lucide-react";
import OceanAnimation from "@/components/common/OceanAnimation";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function Footer() {
  const scrollRef = useScrollAnimation();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <footer ref={scrollRef} className="bg-bg-main border-t border-border-main">
      <div className="px-5 lg:px-10 py-16 lg:py-20">
        {/* Top Row */}
        <div
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
          data-scroll-animate="fade-in-up"
        >
          {/* Unified Serif Logo */}
          <Link to="/" className="flex flex-col group text-left">
            <div className="font-serif text-2xl lg:text-3xl font-extrabold tracking-[0.2em] text-text-main leading-none uppercase">
              <span>MAKC</span>
            </div>
            <span className="text-[7.5px] font-bold tracking-[0.45em] text-gold-primary mt-1.5 uppercase leading-none pl-[2px]">
              AUTOMATIONS
            </span>
          </Link>
          
          <a
            href="tel:+971551234567"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-gold-primary text-black font-bold text-xs tracking-[0.15em] uppercase rounded-none transition-all duration-300 hover:bg-gold-hover hover:text-black hover:scale-105 active:scale-95 shrink-0 shadow-[0_4px_15px_rgba(10,132,255,0.3)]"
          >
            CONTACT US
          </a>
        </div>

        {/* Divider */}
        <div className="h-px bg-border-main my-10 lg:my-16" />

        {/* Nav Links */}
        <div
          className="flex flex-wrap gap-x-8 gap-y-3"
          data-scroll-animate="fade-in-up"
          data-scroll-delay="0.1"
        >
          {servicesData.map((service) => (
            <Link
              key={service.slug}
              to={service.slug}
              className="heading-display text-small-heading text-text-main link-underline"
            >
              {service.title.replace("&", "\u0026")}
            </Link>
          ))}
        </div>

        {/* Contact Row */}
        <div
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mt-10 lg:mt-16"
          data-scroll-animate="fade-in-up"
          data-scroll-delay="0.2"
        >
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            <a
              href="tel:+971551234567"
              className="heading-display text-h6 text-text-main link-underline"
            >
              +971 55 123 4567
            </a>
            <a
              href="mailto:info@makcautomations.com"
              className="heading-display text-h6 text-text-main link-underline"
            >
              info@makcautomations.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-text-main hover:opacity-70 transition-opacity duration-200"
              aria-label="Instagram"
            >
              <Instagram size={28} />
            </a>
            <a
              href="#"
              className="text-text-main hover:opacity-70 transition-opacity duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="#"
              className="text-text-main hover:opacity-70 transition-opacity duration-200"
              aria-label="Twitter"
            >
              <Twitter size={28} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border-main my-10 lg:my-16" />

        {/* Bottom Row */}
        <div
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
          data-scroll-animate="fade-in-up"
          data-scroll-delay="0.3"
        >
          <p className="text-tiny text-text-muted">
            &copy; 2025 Makc Automations. All rights reserved.
          </p>
          <div className="flex gap-5 items-center">
            {/* Theme Toggle Button */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex h-9 w-9 items-center justify-center border border-border-main text-text-main hover:bg-bg-surface hover:text-gold-primary transition-all duration-300 rounded-none shrink-0 cursor-pointer"
              title="Toggle Theme"
            >
              {mounted && theme === "dark" ? (
                <Sun className="h-4.5 w-4.5" />
              ) : (
                <Moon className="h-4.5 w-4.5" />
              )}
            </button>
            <span className="text-border-main/50 text-[10px] select-none">|</span>
            <a href="#" className="text-tiny text-text-muted link-underline">
              Privacy Policy
            </a>
            <a href="#" className="text-tiny text-text-muted link-underline">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
      <div className="relative h-[200px] lg:h-[300px] overflow-hidden">
        <OceanAnimation />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-bg-main/60 to-bg-main pointer-events-none" />
      </div>
    </footer>
  );
}
