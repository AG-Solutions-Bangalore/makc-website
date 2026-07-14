import { Phone, Mail } from "lucide-react";

export function ContactInfoChips() {
  return (
    <>
      <a
        href="tel:+918197783287"
        className="lg:col-span-4 bg-bg-surface/50 backdrop-blur-xl border border-border-main/70 rounded-3xl p-5 sm:p-6 flex items-center gap-4 group cursor-pointer transition-all hover:-translate-y-1 duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.015)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:border-accent-blue/40 hover:shadow-[0_8px_20px_rgba(10,132,255,0.06)] reveal-on-scroll reveal-up"
        data-reveal-delay="100ms"
        data-reveal-duration="0.6s"
      >
        <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-accent-blue/10 to-accent-blue/20 text-accent-blue flex items-center justify-center shrink-0 border border-accent-blue/25 group-hover:from-accent-blue group-hover:to-[#3ea6ff] group-hover:text-white group-hover:shadow-[0_0_15px_rgba(10,132,255,0.25)] transition-all duration-500">
          <Phone
            className="w-5.5 h-5.5 group-hover:scale-110 transition-transform duration-300"
            aria-hidden="true"
          />
        </div>
        <div>
          <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest mb-1">
            Call Us Directly
          </p>
          <p className="text-lg font-semibold text-text-main leading-tight transition-colors group-hover:text-accent-blue duration-300">
            +91-8197783287
          </p>
          <p className="text-xs font-medium text-text-muted mt-0.5">
            +91-9324226077
          </p>
        </div>
      </a>

      <a
        href="mailto:info@makcautomations.com"
        className="lg:col-span-4 bg-bg-surface/50 backdrop-blur-xl border border-border-main/70 rounded-3xl p-5 sm:p-6 flex items-center gap-4 group cursor-pointer transition-all hover:-translate-y-1 duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.015)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:border-accent-blue/40 hover:shadow-[0_8px_20px_rgba(10,132,255,0.06)] reveal-on-scroll reveal-up"
        data-reveal-delay="200ms"
        data-reveal-duration="0.6s"
      >
        <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-accent-blue/10 to-accent-blue/20 text-accent-blue flex items-center justify-center shrink-0 border border-accent-blue/25 group-hover:from-accent-blue group-hover:to-[#3ea6ff] group-hover:text-white group-hover:shadow-[0_0_15px_rgba(10,132,255,0.25)] transition-all duration-500">
          <Mail
            className="w-5.5 h-5.5 group-hover:scale-110 transition-transform duration-300"
            aria-hidden="true"
          />
        </div>
        <div className="overflow-hidden">
          <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest mb-1">
            Email Us
          </p>
          <p className="text-base sm:text-lg font-semibold text-text-main truncate transition-colors group-hover:text-accent-blue duration-300">
            info@makcautomations.com
          </p>
        </div>
      </a>
    </>
  );
}
