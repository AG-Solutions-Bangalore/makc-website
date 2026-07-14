import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import BrandLogo from "@/components/common/BrandLogo";
import {
  // Instagram,
  // Linkedin,

  // Youtube,
  Phone,
  Mail,
  Sun,
  Moon,
} from "lucide-react";
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
        {/* 6 Column Layout with Vertical Dividers on Desktop */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 lg:gap-0 lg:divide-x lg:divide-border-main/40"
          data-scroll-animate="fade-in-up"
        >
          {/* Column 1: Logo & Description */}
          <div className="flex flex-col text-left lg:pr-8 lg:pl-0">
            <Link to="/" className="flex items-center">
              <BrandLogo className="h-11 w-auto" />
            </Link>
            <p className="mt-5  text-xs text-text-muted leading-relaxed">
              Crafting intelligent living experiences through innovative
              automation, seamless design, and world-class technology.
            </p>
          </div>

          {/* Column 2: Solutions */}
          <div className="flex flex-col text-left lg:px-6">
            <h4 className=" text-[11px] font-bold tracking-[0.25em] text-accent-blue uppercase mb-6 select-none">
              Solutions
            </h4>
            <ul className="flex flex-col gap-3  text-xs text-text-muted">
              <li>
                <a
                  href="/#solutions"
                  className="hover:text-accent-blue transition-colors duration-200"
                >
                  Home Automation
                </a>
              </li>
              <li>
                <a
                  href="/#solutions"
                  className="hover:text-accent-blue transition-colors duration-200"
                >
                  Lighting
                </a>
              </li>
              <li>
                <a
                  href="/#solutions"
                  className="hover:text-accent-blue transition-colors duration-200"
                >
                  Security
                </a>
              </li>
              <li>
                <a
                  href="/#solutions"
                  className="hover:text-accent-blue transition-colors duration-200"
                >
                  Networking
                </a>
              </li>
              <li>
                <a
                  href="/#solutions"
                  className="hover:text-accent-blue transition-colors duration-200"
                >
                  Home Theatre
                </a>
              </li>
              <li>
                <a
                  href="/#solutions"
                  className="hover:text-accent-blue transition-colors duration-200"
                >
                  Energy Management
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Projects */}
          <div className="flex flex-col text-left lg:px-6">
            <h4 className=" text-[11px] font-bold tracking-[0.25em] text-accent-blue uppercase mb-6 select-none">
              Projects
            </h4>
            <ul className="flex flex-col gap-3  text-xs text-text-muted">
              <li>
                <a
                  href="/#projects"
                  className="hover:text-accent-blue transition-colors duration-200"
                >
                  Luxury Villas
                </a>
              </li>
              <li>
                <a
                  href="/#projects"
                  className="hover:text-accent-blue transition-colors duration-200"
                >
                  Apartments
                </a>
              </li>
              <li>
                <a
                  href="/#projects"
                  className="hover:text-accent-blue transition-colors duration-200"
                >
                  Farmhouses
                </a>
              </li>
              <li>
                <a
                  href="/#projects"
                  className="hover:text-accent-blue transition-colors duration-200"
                >
                  Penthouses
                </a>
              </li>
              <li>
                <a
                  href="/#projects"
                  className="hover:text-accent-blue transition-colors duration-200"
                >
                  Commercial Spaces
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: About */}
          <div className="flex flex-col text-left lg:px-6">
            <h4 className=" text-[11px] font-bold tracking-[0.25em] text-accent-blue uppercase mb-6 select-none">
              About
            </h4>
            <ul className="flex flex-col gap-3  text-xs text-text-muted">
              <li>
                <a
                  href="/why-us#about"
                  className="hover:text-accent-blue transition-colors duration-200"
                >
                  About MAKC
                </a>
              </li>
              <li>
                <a
                  href="/why-us#process"
                  className="hover:text-accent-blue transition-colors duration-200"
                >
                  Our Process
                </a>
              </li>
              <li>
                <a
                  href="/#careers"
                  className="hover:text-accent-blue transition-colors duration-200"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="/#blog"
                  className="hover:text-accent-blue transition-colors duration-200"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: Locations */}
          <div className="flex flex-col text-left lg:px-6">
            <h4 className=" text-[11px] font-bold tracking-[0.25em] text-accent-blue uppercase mb-6 select-none">
              Locations
            </h4>
            <ul className="flex flex-col gap-3  text-xs text-text-muted">
              <li>
                <span className="hover:text-text-main transition-colors duration-200 cursor-default">
                  Hyderabad
                </span>
              </li>
              <li>
                <span className="hover:text-text-main transition-colors duration-200 cursor-default">
                  Bangalore
                </span>
              </li>
              <li>
                <span className="hover:text-text-main transition-colors duration-200 cursor-default">
                  Mumbai
                </span>
              </li>
              <li>
                <span className="hover:text-text-main transition-colors duration-200 cursor-default">
                  Delhi
                </span>
              </li>
            </ul>
          </div>

          {/* Column 6: Contact */}
          <div className="flex flex-col text-left lg:pl-6 lg:pr-0">
            <h4 className=" text-[11px] font-bold tracking-[0.25em] text-accent-blue uppercase mb-6 select-none">
              Contact
            </h4>
            <div className="flex flex-col gap-4  text-xs text-text-muted">
              <a
                href="tel:+919948432444"
                className="flex items-center gap-3 hover:text-accent-blue transition-colors duration-200"
              >
                <Phone className="h-5 w-5 shrink-0 text-accent-blue stroke-[1.5]" />
                <span>+91 99484 32444</span>
              </a>
              <a
                href="mailto:info@makcautomations.com"
                className="flex items-center gap-3 hover:text-accent-blue transition-colors duration-200"
              >
                <Mail className="h-5 w-5 shrink-0 text-accent-blue stroke-[1.5]" />
                <span className="break-all">info@makcautomations.com</span>
              </a>
              <div className="flex items-center gap-2.5 mt-2">
                {/* <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full apple-border-shine border border-border-main flex items-center justify-center text-text-muted hover:text-accent-blue hover:border-accent-blue transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4.5 w-4.5 stroke-[1.5]" />
                </a> */}
                {/* <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full apple-border-shine border border-border-main flex items-center justify-center text-text-muted hover:text-accent-blue hover:border-accent-blue transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4.5 w-4.5 stroke-[1.5]" />
                </a> */}
                {/* <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full apple-border-shine border border-border-main flex items-center justify-center text-text-muted hover:text-accent-blue hover:border-accent-blue transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4.5 w-4.5 stroke-[1.5]" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 apple-border-shine rounded-full border border-border-main flex items-center justify-center text-text-muted hover:text-accent-blue hover:border-accent-blue transition-all duration-300"
                  aria-label="YouTube"
                >
                  <Youtube className="h-4.5 w-4.5 stroke-[1.5]" />
                </a> */}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border-main my-10 lg:my-16" />

        {/* Bottom Row */}
        <div
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
          data-scroll-animate="fade-in-up"
          data-scroll-delay="0.1"
        >
          <p className="text-tiny text-text-muted">
            &copy; {new Date().getFullYear()} Makc Automations. All rights
            reserved.
          </p>
          <div className="flex gap-5 items-center">
            {/* Theme Toggle Button */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex h-9 w-9 items-center justify-center border border-border-main text-text-main hover:bg-bg-surface hover:text-accent-blue transition-all duration-300 rounded-none shrink-0 cursor-pointer"
              title="Toggle Theme"
            >
              {mounted && theme === "dark" ? (
                <Sun className="h-5.5 w-5.5" />
              ) : (
                <Moon className="h-5.5 w-5.5" />
              )}
            </button>
            <span className="text-border-main/50 text-[10px] select-none">
              |
            </span>
            <a
              href="/#privacy"
              className="text-tiny text-text-muted link-underline"
            >
              Privacy Policy
            </a>
            <a
              href="/#terms"
              className="text-tiny text-text-muted link-underline"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
      <div className="relative h-[200px] lg:h-[200px] overflow-hidden">
        <OceanAnimation />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-bg-main/60 to-bg-main pointer-events-none" />
      </div>
    </footer>
  );
}
