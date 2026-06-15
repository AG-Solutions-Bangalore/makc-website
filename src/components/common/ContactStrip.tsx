import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

interface ContactInfo {
  label?: string;
  value: string;
  href?: string;
}

interface CtaInfo {
  label: string;
  href: string;
}

interface ContactStripProps {
  /**
   * Section title on the left.
   * @default "Ready to Get Started?"
   */
  title?: string;

  /**
   * Description text below the title.
   * @default "Our team is ready to help you bring your smart living vision to life."
   */
  description?: string;

  /**
   * Phone contact details.
   */
  phone?: ContactInfo;

  /**
   * Email contact details.
   */
  email?: ContactInfo;

  /**
   * Address/Location contact details.
   */
  address?: ContactInfo;

  /**
   * Call to action button label and destination.
   */
  cta?: CtaInfo;

  /**
   * Additional wrapper class names.
   */
  className?: string;
}

export default function ContactStrip({
  title = "Ready to Get Started?",
  description = "Our team is ready to help you bring your smart living vision to life.",
  phone = {
    label: "Call Us",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  email = {
    label: "Email Us",
    value: "hello@makcsmartliving.com",
    href: "mailto:hello@makcsmartliving.com",
  },
  address = {
    label: "Visit Us",
    value: "123 Smart Living Way\nSan Francisco, CA 94107",
    href: "https://maps.google.com/?q=123+Smart+Living+Way+San+Francisco+CA+94107",
  },
  cta = {
    label: "Let's Build the Future",
    href: "#contact",
  },
  className = "",
}: ContactStripProps) {
  return (
    <div className={`relative w-full ${className}`}>
      {/* Premium Glassmorphic Outer Card container with glowing corners */}
      <div className="relative w-full bg-bg-surface/20 dark:bg-[#070D19]/40 border border-border-main/40 dark:border-accent-blue/10 rounded-2xl p-8 lg:p-10  overflow-hidden">
        
        {/* Glow corner highlights for luxury sci-fi aesthetic */}
        <div className="absolute top-[-1px] left-[-1px] w-6 h-6 border-t-2 border-l-2 border-accent-blue/40 rounded-tl-2xl shadow-[0_-2px_10px_rgba(10,132,255,0.15)] pointer-events-none" />
        <div className="absolute top-[-1px] right-[-1px] w-6 h-6 border-t-2 border-r-2 border-accent-blue/40 rounded-tr-2xl shadow-[0_-2px_10px_rgba(10,132,255,0.15)] pointer-events-none" />
        <div className="absolute bottom-[-1px] left-[-1px] w-6 h-6 border-b-2 border-l-2 border-accent-blue/40 rounded-bl-2xl shadow-[0_2px_10px_rgba(10,132,255,0.15)] pointer-events-none" />
        <div className="absolute bottom-[-1px] right-[-1px] w-6 h-6 border-b-2 border-r-2 border-accent-blue/40 rounded-br-2xl shadow-[0_2px_10px_rgba(10,132,255,0.15)] pointer-events-none" />

        {/* 5-Column Grid Layout: Stacks on mobile/tablet, displays horizontal on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-0 lg:divide-x lg:divide-border-main/20 items-center">
          
          {/* Column 1: Title and Description */}
          <div className="flex flex-col items-start text-left lg:pr-8">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-text-main tracking-tight leading-tight">
              {title}
            </h3>
            {/* Elegant tiny glowing divider */}
            <div className="w-12 h-[2px] bg-accent-blue my-3.5 shadow-[0_0_8px_rgba(10,132,255,0.6)]" />
            <p className="font-sans text-xs text-text-muted leading-relaxed max-w-xs">
              {description}
            </p>
          </div>

          {/* Column 2: Call Us */}
          <div className="flex flex-col items-center justify-center text-center px-4 lg:py-2">
            <div className="w-12 h-12 rounded-full border apple-border-shine border-accent-blue/30 bg-accent-blue/5 flex items-center justify-center text-accent-blue shadow-[0_0_12px_rgba(10,132,255,0.1)] transition-all duration-300 hover:scale-105 hover:bg-accent-blue/10 hover:border-accent-blue/50 mb-3 shrink-0">
              <Phone className="h-4.5 w-4.5 stroke-[1.5]" />
            </div>
            <h4 className="font-sans text-xs font-bold text-text-main tracking-wider uppercase">
              {phone.label}
            </h4>
            {phone.href ? (
              <a
                href={phone.href}
                className="font-sans text-xs  text-text-muted hover:text-accent-blue transition-colors duration-200 mt-1.5 font-medium"
              >
                {phone.value}
              </a>
            ) : (
              <span className="font-sans text-xs text-text-muted mt-1.5 font-medium">
                {phone.value}
              </span>
            )}
          </div>

          {/* Column 3: Email Us */}
          <div className="flex flex-col items-center justify-center text-center px-4 lg:py-2">
            <div className="w-12 h-12 apple-border-shine rounded-full border border-accent-blue/30 bg-accent-blue/5 flex items-center justify-center text-accent-blue shadow-[0_0_12px_rgba(10,132,255,0.1)] transition-all duration-300 hover:scale-105 hover:bg-accent-blue/10 hover:border-accent-blue/50 mb-3 shrink-0">
              <Mail className="h-4.5 w-4.5 stroke-[1.5]" />
            </div>
            <h4 className="font-sans text-xs font-bold text-text-main tracking-wider uppercase">
              {email.label}
            </h4>
            {email.href ? (
              <a
                href={email.href}
                className="font-sans text-xs text-text-muted hover:text-accent-blue transition-colors duration-200 mt-1.5 font-medium break-all"
              >
                {email.value}
              </a>
            ) : (
              <span className="font-sans text-xs text-text-muted mt-1.5 font-medium break-all">
                {email.value}
              </span>
            )}
          </div>

          {/* Column 4: Visit Us */}
          <div className="flex flex-col items-center justify-center text-center px-4 lg:py-2">
            <div className="w-12 h-12 rounded-full border apple-border-shine border-accent-blue/30 bg-accent-blue/5 flex items-center justify-center text-accent-blue shadow-[0_0_12px_rgba(10,132,255,0.1)] transition-all duration-300 hover:scale-105 hover:bg-accent-blue/10 hover:border-accent-blue/50 mb-3 shrink-0">
              <MapPin className="h-4.5 w-4.5 stroke-[1.5]" />
            </div>
            <h4 className="font-sans text-xs font-bold text-text-main tracking-wider uppercase">
              {address.label}
            </h4>
            {address.href ? (
              <a
                href={address.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-xs text-text-muted hover:text-accent-blue transition-colors duration-200 mt-1.5 font-medium whitespace-pre-line leading-relaxed"
              >
                {address.value}
              </a>
            ) : (
              <span className="font-sans text-xs text-text-muted mt-1.5 font-medium whitespace-pre-line leading-relaxed">
                {address.value}
              </span>
            )}
          </div>

          {/* Column 5: Call to Action Button */}
          <div className="flex items-center justify-center md:col-span-2 lg:col-span-1 lg:pl-8 w-full">
            <a
              href={cta.href}
              className="w-full max-w-[260px] apple-border-shine rounded-full py-3.5 px-5 sm:px-6 bg-accent-blue hover:bg-accent-blue/90 text-white transition-all duration-300 flex items-center justify-between gap-3 group cursor-pointer shadow-[0_4px_18_rgba(10,132,255,0.25)] hover:shadow-[0_6px_25px_rgba(10,132,255,0.35)] hover:scale-[1]"
            >
              <span className="text-left font-sans text-xs font-bold tracking-wider leading-tight uppercase max-w-[120px] block text-white select-none">
                {cta.label}
              </span>
              <div className="w-8 h-8 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white shrink-0 group-hover:bg-white/10 group-hover:border-white/40 transition-all duration-300">
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </div>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
