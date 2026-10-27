import { useState, type MouseEvent } from "react";
import { Link } from "react-router-dom";
import BrandLogo from "@/components/common/BrandLogo";
import { Phone, Mail, PhoneCall } from "lucide-react";
import ContactStrip from "@/components/common/ContactStrip";
import QueryProvider from "@/components/common/QueryProvider";
import ScheduleVisitModal from "@/components/common/ScheduleVisitModal";
import { COMPANY_INFO } from "@/config/constants";
import { useLocation } from "react-router-dom";

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

function Youtube({ className = "w-4.5 h-4.5" }: { className?: string }) {
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
      <polygon
        points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"
        fill="currentColor"
      />
    </svg>
  );
}

const SOCIAL_LINKS = [
  {
    name: "Instagram",
    href: COMPANY_INFO.socials.instagram,
    title: `Follow ${COMPANY_INFO.name} on Instagram`,
    icon: Instagram,
    defaultClasses:
      "text-white bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] border-transparent shadow-[0_2px_8px_rgba(238,42,123,0.35)]",
    hoverClasses:
      "hover:brightness-110 hover:shadow-[0_6px_20px_rgba(238,42,123,0.6)]",
    rotateClass: "group-hover:rotate-6",
  },
  {
    name: "Facebook",
    href: COMPANY_INFO.socials.facebook,
    title: `Visit ${COMPANY_INFO.name} on Facebook`,
    icon: Facebook,
    defaultClasses:
      "text-white bg-[#1877F2] border-[#1877F2] shadow-[0_2px_8px_rgba(24,119,242,0.35)]",
    hoverClasses:
      "hover:brightness-110 hover:shadow-[0_6px_20px_rgba(24,119,242,0.6)]",
    rotateClass: "group-hover:-rotate-6",
  },
  {
    name: "LinkedIn",
    href: COMPANY_INFO.socials.linkedin,
    title: `Connect with ${COMPANY_INFO.name} on LinkedIn`,
    icon: Linkedin,
    defaultClasses:
      "text-white bg-[#0A66C2] border-[#0A66C2] shadow-[0_2px_8px_rgba(10,102,194,0.35)]",
    hoverClasses:
      "hover:brightness-110 hover:shadow-[0_6px_20px_rgba(10,102,194,0.6)]",
    rotateClass: "group-hover:rotate-6",
  },
  {
    name: "YouTube",
    href: COMPANY_INFO.socials.youtube,
    title: `Subscribe to ${COMPANY_INFO.name} on YouTube`,
    icon: Youtube,
    defaultClasses:
      "text-white bg-[#FF0000] border-[#FF0000] shadow-[0_2px_8px_rgba(255,0,0,0.35)]",
    hoverClasses:
      "hover:brightness-110 hover:shadow-[0_6px_20px_rgba(255,0,0,0.6)]",
    rotateClass: "group-hover:-rotate-6",
  },
];

export default function Footer() {
  const [isCallbackModalOpen, setIsCallbackModalOpen] = useState(false);
  const location = useLocation();
  const isFormPage =
    location.pathname === "/" ||
    location.pathname === "/contact" ||
    location.pathname === "";

  const handleHomeLogoClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === "/" && location.hash === "#home-top") {
      event.preventDefault();
      document.getElementById("home-top")?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <QueryProvider>
      <footer className="bg-[#f1f5f9] dark:bg-[#02050b] border-t-2 border-slate-300/80 dark:border-white/10 transition-colors duration-300">
        {!isFormPage && (
          <div className="mt-2 mb-8 sm:mt-4 sm:mb-10 px-4">
            <ContactStrip />
          </div>
        )}
        <div className="max-w-[1600px] mx-auto px-5 lg:px-10 py-10">
          {/* Equal 5-Column Layout (Exact equal width per column) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-0 lg:divide-x lg:divide-border-main/40">
            {/* Column 1: Logo & Description (Equal width) */}
            <div className="flex flex-col text-left lg:pr-6 lg:pl-0">
              <Link
                to="/#home-top"
                title={`${COMPANY_INFO.name} Home`}
                className="flex items-center"
                onClick={handleHomeLogoClick}
              >
                <BrandLogo className="h-11 w-auto" />
              </Link>
              <p className="mt-5 text-xs text-text-muted leading-relaxed">
                {COMPANY_INFO.tagline}
              </p>
            </div>

            {/* Column 2 & 3: Solutions & About (Aligned side-by-side on all mobile/small screens) */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:contents col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2">
              {/* Column 2: Solutions */}
              <div className="flex flex-col text-left px-0 lg:px-6">
                <h3 className="text-[11px] font-bold tracking-[0.25em] text-accent-blue uppercase mb-6 select-none">
                  Solutions
                </h3>
                <ul className="flex flex-col gap-3 text-xs text-text-muted">
                  <li>
                    <Link
                      to="/automation"
                      title="Smart Home Automation Services"
                      className="hover:text-accent-blue transition-colors duration-200"
                    >
                      Automation
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/lighting"
                      title="Smart Lighting Solutions"
                      className="hover:text-accent-blue transition-colors duration-200"
                    >
                      Lighting
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/networking"
                      title="Home Networking Solutions"
                      className="hover:text-accent-blue transition-colors duration-200"
                    >
                      Networking
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/security"
                      title="Smart Home Security Systems"
                      className="hover:text-accent-blue transition-colors duration-200"
                    >
                      Security
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/audio"
                      title="Home Audio Solutions"
                      className="hover:text-accent-blue transition-colors duration-200"
                    >
                      Audio
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 3: About (Positioned on the right side of Solutions) */}
              <div className="flex flex-col text-left px-0 lg:px-6">
                <h3 className="text-[11px] font-bold tracking-[0.25em] text-accent-blue uppercase mb-6 select-none">
                  About
                </h3>
                <ul className="flex flex-col gap-3 text-xs text-text-muted">
                  <li>
                    <Link
                      to="/about"
                      title="About Our Company"
                      className="hover:text-accent-blue transition-colors duration-200"
                    >
                      About MAKc
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/why-us"
                      title="Our Work Process"
                      className="hover:text-accent-blue transition-colors duration-200"
                    >
                      Our Process
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      title="Careers & Contact at MAKc Automations"
                      className="hover:text-accent-blue transition-colors duration-200"
                    >
                      Careers
                    </Link>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        toast("Blog coming soon!");
                      }}
                      title="MAKc Automations Blog"
                      className="hover:text-accent-blue transition-colors duration-200 cursor-pointer text-left bg-transparent border-0 p-0 font-inherit text-xs text-text-muted"
                    >
                      Blog
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            {/* Column 4: Live Experience Centre Video & Visit Request (20% width) */}
            <div className="flex flex-col text-left lg:px-6">
              <h3 className="text-[11px] font-bold tracking-[0.25em] text-accent-blue uppercase mb-4 select-none">
                Live Experience Centre
              </h3>
              {/* Loop Video GIF */}
              <div className="relative overflow-hidden rounded-xl border border-border-main bg-bg-surface/30 shadow-md group mb-3 aspect-video">
                <video
                  src="/images/video/living_room_animation.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105 pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Like To Visit Button */}
              <button
                type="button"
                onClick={() => setIsCallbackModalOpen(true)}
                className="w-full cursor-pointer bg-accent-blue hover:bg-[#0070e0] text-white! font-bold text-xs tracking-wider uppercase py-2.5 px-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_4px_15px_rgba(10,132,255,0.3)] hover:shadow-[0_6px_20px_rgba(10,132,255,0.4)] hover:-translate-y-0.5 active:translate-y-0"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Like to Visit</span>
              </button>
            </div>

            {/* Column 5: Let's Talk & Contact Info (20% width) */}
            <div className="flex flex-col text-left lg:pl-6 lg:pr-0">
              <h3 className="text-[11px] font-bold tracking-[0.25em] text-accent-blue uppercase mb-4 select-none">
                Let’s Connect
              </h3>
              <div className="flex flex-col gap-3 text-xs text-text-muted">
                {/* Phone Sub-section */}
                <div className="mt-2">
                  <div className="flex flex-col gap-2">
                    <a
                      href={`tel:${COMPANY_INFO.phones.primary.digits}`}
                      title={`Call ${COMPANY_INFO.name} Sales at ${COMPANY_INFO.phones.primary.display}`}
                      className="flex items-center gap-2 hover:text-accent-blue transition-colors duration-200"
                    >
                      <Phone className="h-4 w-4 shrink-0 text-accent-blue stroke-[1.5]" />
                      <span>{COMPANY_INFO.phones.primary.number}</span>
                    </a>
                    <a
                      href={`tel:${COMPANY_INFO.phones.support.digits}`}
                      title={`Call ${COMPANY_INFO.name} Support at ${COMPANY_INFO.phones.support.display}`}
                      className="flex items-center gap-2 hover:text-accent-blue transition-colors duration-200"
                    >
                      <Phone className="h-4 w-4 shrink-0 text-accent-blue stroke-[1.5]" />
                      <span>{COMPANY_INFO.phones.support.number}</span>
                    </a>
                  </div>
                </div>

                {/* Email Sub-section */}
                <div className="mt-2">
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    title={`Email ${COMPANY_INFO.name}`}
                    className="flex items-center gap-2 hover:text-accent-blue transition-colors duration-200"
                  >
                    <Mail className="h-4 w-4 shrink-0 text-accent-blue stroke-[1.5]" />
                    <span className="break-all">{COMPANY_INFO.email}</span>
                  </a>
                </div>

                {/* Social Media Links */}
                <div className="flex items-center gap-2 mt-3">
                  {SOCIAL_LINKS.map(
                    ({
                      name,
                      href,
                      title,
                      icon: Icon,
                      defaultClasses,
                      hoverClasses,
                      rotateClass,
                    }) => (
                      <a
                        key={name}
                        href={href}
                        title={title}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={name}
                        className={`group relative w-8 h-8 rounded-lg border flex items-center justify-center transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-110 active:scale-95 ${defaultClasses} ${hoverClasses}`}
                      >
                        <Icon
                          className={`w-4.5 h-4.5 transition-transform duration-300 ease-out group-hover:scale-110 ${rotateClass}`}
                        />
                      </a>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-border-main my-10" />

          {/* Bottom Row */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <p className="text-tiny text-text-muted">
              &copy; {new Date().getFullYear()} MAKc Automations. All rights
              reserved.
            </p>
            <div className="flex gap-5 items-center">
              <a
                href="/#privacy"
                title="Privacy Policy"
                className="text-tiny text-text-muted link-underline"
              >
                Privacy Policy
              </a>
              <a
                href="/#terms"
                title="Terms and Conditions"
                className="text-tiny text-text-muted link-underline"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Schedule Visit Modal */}
        <ScheduleVisitModal
          isOpen={isCallbackModalOpen}
          onClose={() => setIsCallbackModalOpen(false)}
        />
      </footer>
    </QueryProvider>
  );
}
