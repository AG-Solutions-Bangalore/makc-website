import { Link } from "react-router-dom";
import BrandLogo from "@/components/common/BrandLogo";
import { Phone, Mail, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import ContactStrip from "@/components/common/ContactStrip";

// Local SVG icon components for social media
function Facebook({ className = "w-4.5 h-4.5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function Linkedin({ className = "w-4.5 h-4.5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function Instagram({ className = "w-4.5 h-4.5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function Youtube({
  className = "w-4.5 h-4.5",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
    </svg>
  );
}

export default function Footer() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <footer className="bg-bg-main border-t border-border-main">
      <div className="my-8 px-4">
        <ContactStrip />
      </div>
      <div className="px-5 lg:px-10 py-10">
        {/* 5 Column Layout with Vertical Dividers on Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-0 lg:divide-x lg:divide-border-main/40">
          {/* Column 1: Logo & Description */}
          <div className="flex flex-col text-left lg:pr-8 lg:pl-0">
            <Link to="/" className="flex items-center">
              <BrandLogo className="h-11 w-auto" />
            </Link>
            <p className="mt-5 text-xs text-text-muted leading-relaxed">
              Crafting intelligent living experiences through innovative
              automation, seamless design, and world-class technology.
            </p>
          </div>

          {/* Column 2: Solutions */}
          <div className="flex flex-col text-left lg:px-6">
            <h3 className="text-[11px] font-bold tracking-[0.25em] text-accent-blue uppercase mb-6 select-none">
              Solutions
            </h3>
            <ul className="flex flex-col gap-3 text-xs text-text-muted">
              <li>
                <a
                  href="/#solutions"
                  className="hover:text-accent-blue transition-colors duration-200"
                >
                  Automation
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
                  Networking
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
                  Audio
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Projects */}
          <div className="flex flex-col text-left lg:px-6">
            <h3 className="text-[11px] font-bold tracking-[0.25em] text-accent-blue uppercase mb-6 select-none">
              Projects
            </h3>
            <ul className="flex flex-col gap-3 text-xs text-text-muted">
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
            <h3 className="text-[11px] font-bold tracking-[0.25em] text-accent-blue uppercase mb-6 select-none">
              About
            </h3>
            <ul className="flex flex-col gap-3 text-xs text-text-muted">
              <li>
                <a
                  href="/why-us#about"
                  className="hover:text-accent-blue transition-colors duration-200"
                >
                  About MAKc
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

          {/* Column 5: Let's Talk & Contact Info */}
          <div className="flex flex-col text-left lg:pl-6 lg:pr-0">
            <h3 className="text-[11px] font-bold tracking-[0.25em] text-accent-blue uppercase mb-4 select-none">
              Let’s Connect
            </h3>
            <div className="flex flex-col gap-3 text-xs text-text-muted">
              {/* Phone Sub-section */}
              <div className="mt-2">
                <div className="flex flex-col gap-2">
                  <a
                    href="tel:+919324226077"
                    className="flex items-center gap-2 hover:text-accent-blue transition-colors duration-200"
                  >
                    <Phone className="h-4 w-4 shrink-0 text-accent-blue stroke-[1.5]" />
                    <span>+91-9324226077</span>
                  </a>
                  <a
                    href="tel:+918197783287"
                    className="flex items-center gap-2 hover:text-accent-blue transition-colors duration-200"
                  >
                    <Phone className="h-4 w-4 shrink-0 text-accent-blue stroke-[1.5]" />
                    <span>+91-8197783287</span>
                  </a>
                </div>
              </div>

              {/* Email Sub-section */}
              <div className="mt-2">
                <a
                  href="mailto:info@makcautomations.com"
                  className="flex items-center gap-2 hover:text-accent-blue transition-colors duration-200"
                >
                  <Mail className="h-4 w-4 shrink-0 text-accent-blue stroke-[1.5]" />
                  <span className="break-all">info@makcautomations.com</span>
                </a>
              </div>

              {/* Social Media Links */}
              <div className="flex items-center gap-2 mt-3">
                <a
                  href="https://www.instagram.com/mak_automation/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-lg border border-border-main bg-bg-surface/30 flex items-center justify-center text-text-muted hover:text-white hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:border-transparent hover:shadow-[0_0_10px_rgba(238,42,123,0.4)] transition-all duration-300"
                >
                  <Instagram />
                </a>
                <a
                  href="https://www.linkedin.com/company/makc-automations/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="w-8 h-8 rounded-lg border border-border-main bg-bg-surface/30 flex items-center justify-center text-text-muted hover:text-white hover:bg-[#0A66C2] hover:border-transparent hover:shadow-[0_0_10px_rgba(10,102,194,0.4)] transition-all duration-300"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://www.facebook.com/makcautomation"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="w-8 h-8 rounded-lg border border-border-main bg-bg-surface/30 flex items-center justify-center text-text-muted hover:text-white hover:bg-[#1877F2] hover:border-transparent hover:shadow-[0_0_10px_rgba(24,119,242,0.4)] transition-all duration-300"
                >
                  <Facebook />
                </a>
                <a
                  href="https://www.youtube.com/@MAKcAutomation01"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                  className="w-8 h-8 rounded-lg border border-border-main bg-bg-surface/30 flex items-center justify-center text-text-muted hover:text-white hover:bg-[#FF0000] hover:border-transparent hover:shadow-[0_0_10px_rgba(255,0,0,0.4)] transition-all duration-300"
                >
                  <Youtube />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border-main my-10" />

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
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
              aria-label="Toggle Theme"
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
    </footer>
  );
}
