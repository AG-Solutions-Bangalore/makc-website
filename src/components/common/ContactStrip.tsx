import { Phone, MessageSquare, MapPin, ArrowRight } from "lucide-react";

interface ContactStripProps {
  title?: string;
  description?: string;
  cta?: {
    label: string;
    href: string;
  };
  className?: string;
}

export default function ContactStrip({
  title = "Your Smart Living Journey Starts Now",
  description = "Book a free consultation and take the first step toward a smarter tomorrow.",
  cta,
  className = "",
}: ContactStripProps) {
  return (
    <div className={`relative w-full ${className}`}>
      <div className="relative w-full bg-bg-card border border-border-main/50 backdrop-blur-xl rounded-2xl p-5 sm:p-6 lg:p-7 shadow-[0_4px_25px_rgba(10,132,255,0.08)] dark:shadow-[0_4px_30px_rgba(10,132,255,0.18)] transition-all duration-300">
        {/* Header section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6 border-b border-border-main/40 pb-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full border border-[#0A84FF]/40 bg-[#0A84FF]/10 text-[#0A84FF] flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(10,132,255,0.2)]">
              <Phone className="h-5 w-5 stroke-[1.75]" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-text-main tracking-tight leading-snug">
                {title}
              </h3>
              <p className="text-xs text-text-muted leading-relaxed">
                {description}
              </p>
            </div>
          </div>

          {cta && (
            <a
              href={cta.href}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-accent-blue hover:bg-[#0070e0] text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-[0_4px_18px_rgba(10,132,255,0.4)] hover:shadow-[0_6px_24px_rgba(10,132,255,0.55)] hover:-translate-y-0.5"
            >
              {cta.label}
              <ArrowRight className="w-3.5 h-3.5 text-white transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          )}
        </div>

        {/* Quick Contact Chips */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <a
            href="tel:+918951934440"
            title="Call Sales & Consultation"
            className="flex items-center justify-between p-3.5 rounded-2xl bg-bg-surface border border-border-main hover:border-accent-blue/50 shadow-xs hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center text-accent-blue shrink-0 group-hover:scale-105 transition-transform duration-300">
                <Phone className="w-4.5 h-4.5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10.5px] font-bold uppercase tracking-wider text-text-muted">
                  Direct Sales
                </span>
                <span className="text-sm sm:text-base font-bold text-text-main font-mono">
                  +91 89519 34440
                </span>
              </div>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-text-muted group-hover:text-accent-blue transition-colors" />
          </a>

          <a
            href="https://wa.me/918951934440"
            target="_blank"
            rel="noopener noreferrer"
            title="Chat on WhatsApp"
            className="flex items-center justify-between p-3.5 rounded-2xl bg-bg-surface border border-border-main hover:border-emerald-500/50 shadow-xs hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0 group-hover:scale-105 transition-transform duration-300">
                <MessageSquare className="w-4.5 h-4.5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10.5px] font-bold uppercase tracking-wider text-text-muted">
                  WhatsApp Concierge
                </span>
                <span className="text-sm sm:text-base font-bold text-text-main">
                  Chat Now
                </span>
              </div>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-text-muted group-hover:text-emerald-400 transition-colors" />
          </a>

          <a
            href="https://www.google.com/maps/search/?api=1&query=MAKc+Automation+and+Solutions+LLP+Brookefield+Bengaluru"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit Experience Centre"
            className="flex items-center justify-between p-3.5 rounded-2xl bg-bg-surface border border-border-main hover:border-amber-500/50 shadow-xs hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 dark:text-amber-400 shrink-0">
                <MapPin className="w-4.5 h-4.5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10.5px] font-bold uppercase tracking-wider text-text-muted">
                  Experience Centre
                </span>
                <span className="text-xs sm:text-base font-bold text-text-main">
                  Brookefield, Bengaluru
                </span>
              </div>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-text-muted group-hover:text-amber-400 transition-colors" />
          </a>
        </div>
      </div>
    </div>
  );
}
