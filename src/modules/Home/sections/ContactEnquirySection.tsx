import {
  Phone,
  MessageSquare,
  MapPin,
  Clock,
  ShieldCheck,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import QueryProvider from "@/components/common/QueryProvider";
import { COMPANY_INFO } from "@/config/constants";
import UnifiedContactForm from "./UnifiedContactForm";

export default function ContactEnquirySection() {
  return (
    <QueryProvider>
      <section
        id="contact-enquiry"
        className="relative w-full py-12 sm:py-16 lg:py-20 bg-bg-surface border-t border-border-main/40 transition-colors duration-500 overflow-hidden"
      >
        {/* Subtle Luxury Ambient Radial Glows */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(10,132,255,0.06)_0%,transparent_55%),radial-gradient(circle_at_85%_75%,rgba(56,189,248,0.04)_0%,transparent_55%)] pointer-events-none" />

        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
            {/* Left Column: Narrative, Quick Connect Options & Trust Badges */}
            <div className="lg:col-span-5 flex flex-col justify-between text-left py-2">
              <div>
                {/* Eyebrow Tag with blue dash */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-6 h-[2px] bg-accent-blue inline-block rounded-full" />
                  <span className="font-sans text-[11px] font-bold tracking-[0.2em] text-accent-blue uppercase">
                    GET IN TOUCH
                  </span>
                </div>

                {/* Editorial Headline */}
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] xl:text-[44px] font-bold text-text-main tracking-tight leading-[1.14]">
                  Start Your <br />
                  <span className="block italic font-normal font-serif">
                    Smart Living
                  </span>
                  <span className="block font-bold text-accent-blue">
                    Journey
                  </span>
                </h2>

                {/* Description */}
                <p className="mt-4 font-sans text-xs sm:text-sm text-text-muted leading-relaxed max-w-md">
                  Whether planning a newly built luxury villa, an architectural
                  renovation, or bespoke lighting controls, our smart home
                  architects are here to craft your ecosystem.
                </p>

                {/* Interactive Direct Contact Cards */}
                <div className="mt-6 sm:mt-7 space-y-3">
                  {/* Card 1: Direct Call */}
                  <a
                    href={`tel:${COMPANY_INFO.phones.primary.digits}`}
                    title="Call Sales & Consultation"
                    className="group flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-bg-surface border border-border-main hover:border-accent-blue/50 shadow-xs hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center text-accent-blue shrink-0 group-hover:scale-105 transition-transform duration-300">
                        <Phone className="w-4.5 h-4.5" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10.5px] font-bold uppercase tracking-wider text-text-muted">
                          Direct Sales &amp; Inquiries
                        </span>
                        <span className="text-sm sm:text-base font-bold text-text-main font-mono">
                          {COMPANY_INFO.phones.primary.display}
                        </span>
                      </div>
                    </div>
                    <div className="hidden sm:flex items-center gap-1 text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 dark:bg-emerald-950/40 px-2.5 py-1 rounded-full border border-emerald-500/30 dark:border-emerald-800/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>Mon - Sat</span>
                    </div>
                  </a>

                  {/* Card 2: WhatsApp Chat */}
                  <a
                    href={COMPANY_INFO.whatsapp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Chat on WhatsApp"
                    className="group flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-bg-surface border border-border-main hover:border-emerald-500/50 shadow-xs hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0 group-hover:scale-105 transition-transform duration-300">
                        <MessageSquare className="w-4.5 h-4.5" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10.5px] font-bold uppercase tracking-wider text-text-muted">
                          Instant WhatsApp Concierge
                        </span>
                        <span className="text-sm sm:text-base font-bold text-text-main">
                          Chat with our Engineers
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400 group-hover:translate-x-0.5 transition-transform">
                      <span>Chat Now</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </a>

                  {/* Card 3: Experience Studio */}
                  <div className="flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-bg-surface border border-border-main shadow-xs">
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 dark:text-amber-400 shrink-0">
                        <MapPin className="w-4.5 h-4.5" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10.5px] font-bold uppercase tracking-wider text-text-muted">
                          Flagship Experience Centre
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-text-main">
                          {COMPANY_INFO.address.cityState} • Brookefield
                        </span>
                      </div>
                    </div>
                    <span className="text-[11px] font-medium text-text-muted">
                      Private Tours
                    </span>
                  </div>
                </div>
              </div>

              {/* Trust Badges Footer */}
              <div className="mt-8 pt-5 border-t border-border-main grid grid-cols-3 gap-2">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-accent-blue shrink-0" />
                  <span className="text-[11px] font-semibold text-text-muted leading-tight">
                    24h Response
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span className="text-[11px] font-semibold text-text-muted leading-tight">
                    5-Yr Warranty
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
                  <span className="text-[11px] font-semibold text-text-muted leading-tight">
                    Free Site Audit
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Unified Consultation Form */}
            <div className="lg:col-span-7">
              <UnifiedContactForm />
            </div>
          </div>
        </div>
      </section>
    </QueryProvider>
  );
}
