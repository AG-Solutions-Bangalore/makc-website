import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import FloatingWhatsApp from "./FloatingWhatsApp";
import FloatingCall from "./FloatingCall";

export default function FloatingContactMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);
  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative flex flex-col items-center justify-end transition-all duration-300 w-12 h-12 sm:w-14 sm:h-14 ${
        isOpen ? "h-[196px] sm:h-[228px]" : "h-12 sm:h-14"
      }`}
    >
      {/* Call Button Container */}
      <div
        className={`absolute bottom-0 transition-all duration-300 ease-out transform ${
          isOpen
            ? "translate-y-[-140px] sm:translate-y-[-160px] opacity-100 scale-100 pointer-events-auto delay-150"
            : "translate-y-0 opacity-0 scale-0 pointer-events-none delay-0"
        }`}
      >
        <FloatingCall />
      </div>

      {/* WhatsApp Button Container */}
      <div
        className={`absolute bottom-0 transition-all duration-300 ease-out transform ${
          isOpen
            ? "translate-y-[-70px] sm:translate-y-[-80px] opacity-100 scale-100 pointer-events-auto delay-0"
            : "translate-y-0 opacity-0 scale-0 pointer-events-none delay-100"
        }`}
      >
        <FloatingWhatsApp />
      </div>

      {/* Main Trigger Button */}
      <button
        onClick={handleToggle}
        className={`group relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#0a84ff] focus:ring-offset-2 ${
          isOpen
            ? "bg-bg-surface hover:bg-bg-main text-text-main shadow-black/10 dark:shadow-black/20 border border-border-main"
            : "bg-[#0a84ff] hover:bg-[#0070e0] !text-white shadow-[#0a84ff]/20"
        }`}
        aria-label={isOpen ? "Close Contact Us" : "Contact Us"}
      >
        {/* Pulsing glow ring when closed */}
        {!isOpen && (
          <span className="absolute inset-0 -z-10 rounded-full bg-[#0a84ff]/40 animate-ping opacity-75 duration-1000" />
        )}

        {/* Morphing Icons */}
        <div className="relative h-6 w-6 flex items-center justify-center">
          <MessageCircle
            className={`absolute h-5 w-5 sm:h-6 sm:w-6 transition-all duration-300 ${
              isOpen ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
            }`}
          />
          <X
            className={`absolute h-5 w-5 sm:h-6 sm:w-6 transition-all duration-300 ${
              isOpen ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
            }`}
          />
        </div>

        {/* Tooltip */}
        <span className="absolute right-14 sm:right-16 scale-0 group-hover:scale-100 bg-bg-surface text-text-main text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-md transition-all duration-200 origin-right border border-border-main pointer-events-none">
          {isOpen ? "Close Menu" : "Contact Us"}
        </span>
      </button>
    </div>
  );
}
