import {
  Phone,
  MessageSquare,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Loader2,
  Send,
} from "lucide-react";
import QueryProvider from "@/components/common/QueryProvider";
import { useContactForm } from "@/modules/Contact/hooks/useContactForm";
import { COMPANY_INFO } from "@/config/constants";

function HomeContactForm() {
  const { register, handleSubmit, errors, isSubmitting, watch } =
    useContactForm();
  const selectedServices = watch("services") || [];

  const servicesList = [
    { id: "automation", label: "Home Automation" },
    { id: "lighting", label: "Smart Lighting" },
    { id: "security", label: "Security & Access" },
    { id: "networking", label: "Enterprise WiFi" },
    { id: "audio", label: "Audio & Cinema" },
    { id: "electrical", label: "Home Electrical" },
  ];

  return (
    <div className="relative rounded-[24px] sm:rounded-[28px] bg-white/90 dark:bg-[#071326] p-5 sm:p-7 lg:p-8">
      {/* Top Form Header */}
      <div className="mb-5 sm:mb-6 text-left">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-[10.5px] font-bold uppercase tracking-wider mb-2">
          <Sparkles className="w-3 h-3" />
          <span>Priority Consultation</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 dark:text-white tracking-tight">
          Request a Bespoke Proposal
        </h3>
        <p className="mt-1 text-xs sm:text-[13px] text-slate-500 dark:text-slate-400">
          Share your requirements and a dedicated automation specialist will
          assist you within 24 hours.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-3 sm:space-y-3.5 text-left"
      >
        {/* Name and Phone Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label
              htmlFor="home-name"
              className="block text-slate-600 dark:text-slate-400 text-[10.5px] font-bold uppercase tracking-wider mb-1"
            >
              Full Name *
            </label>
            <input
              {...register("name")}
              type="text"
              id="home-name"
              placeholder="e.g. Rahul Sharma"
              className="w-full bg-slate-50/80 dark:bg-black/35 border border-slate-200/90 dark:border-white/10 focus:border-[#0070e0] focus:ring-2 focus:ring-[#0070e0]/20 rounded-xl px-3.5 py-2.5 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 text-xs sm:text-sm transition-all duration-200 outline-none"
            />
            {errors.name && (
              <p
                role="alert"
                className="text-red-500 text-[11px] mt-1 font-medium"
              >
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="home-phone"
              className="block text-slate-600 dark:text-slate-400 text-[10.5px] font-bold uppercase tracking-wider mb-1"
            >
              Phone Number *
            </label>
            <input
              {...register("phone")}
              type="tel"
              id="home-phone"
              placeholder="+91 98765 43210"
              className="w-full bg-slate-50/80 dark:bg-black/35 border border-slate-200/90 dark:border-white/10 focus:border-[#0070e0] focus:ring-2 focus:ring-[#0070e0]/20 rounded-xl px-3.5 py-2.5 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 text-xs sm:text-sm transition-all duration-200 outline-none"
            />
            {errors.phone && (
              <p
                role="alert"
                className="text-red-500 text-[11px] mt-1 font-medium"
              >
                {errors.phone.message}
              </p>
            )}
          </div>
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="home-email"
            className="block text-slate-600 dark:text-slate-400 text-[10.5px] font-bold uppercase tracking-wider mb-1"
          >
            Email Address *
          </label>
          <input
            {...register("email")}
            type="email"
            id="home-email"
            placeholder="rahul.sharma@example.com"
            className="w-full bg-slate-50/80 dark:bg-black/35 border border-slate-200/90 dark:border-white/10 focus:border-[#0070e0] focus:ring-2 focus:ring-[#0070e0]/20 rounded-xl px-3.5 py-2.5 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 text-xs sm:text-sm transition-all duration-200 outline-none"
          />
          {errors.email && (
            <p
              role="alert"
              className="text-red-500 text-[11px] mt-1 font-medium"
            >
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Services Multi-Select Badges */}
        <div>
          <label className="block text-slate-600 dark:text-slate-400 text-[10.5px] font-bold uppercase tracking-wider mb-1.5">
            Solutions Needed *
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {servicesList.map((service) => {
              const isChecked = selectedServices.includes(service.label);
              return (
                <label
                  key={service.id}
                  className={`flex items-center gap-1.5 sm:gap-2 px-2.5 py-2 rounded-xl border text-xs cursor-pointer transition-all duration-200 select-none ${
                    isChecked
                      ? "bg-[#0070e0]/10 border-[#0070e0] text-[#0070e0] dark:text-[#38bdf8] font-semibold shadow-xs"
                      : "border-slate-200/90 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-white/20 bg-slate-50/60 dark:bg-black/20"
                  }`}
                >
                  <input
                    type="checkbox"
                    value={service.label}
                    {...register("services")}
                    className="sr-only"
                  />
                  <div
                    className={`w-3.5 h-3.5 rounded-md border flex items-center justify-center shrink-0 transition-colors ${
                      isChecked
                        ? "bg-[#0070e0] border-[#0070e0] text-white"
                        : "border-slate-300 dark:border-slate-600 bg-white dark:bg-transparent"
                    }`}
                  >
                    {isChecked && (
                      <CheckCircle2 className="w-3 h-3 text-white" />
                    )}
                  </div>
                  <span className="truncate text-[11px] sm:text-xs">
                    {service.label}
                  </span>
                </label>
              );
            })}
          </div>
          {errors.services && (
            <p
              role="alert"
              className="text-red-500 text-[11px] mt-1 font-medium"
            >
              {errors.services.message}
            </p>
          )}
        </div>

        {/* Message / Project Details */}
        <div>
          <label
            htmlFor="home-message"
            className="block text-slate-600 dark:text-slate-400 text-[10.5px] font-bold uppercase tracking-wider mb-1"
          >
            Project Details &amp; Location *
          </label>
          <textarea
            {...register("message")}
            id="home-message"
            rows={3}
            placeholder="e.g. 4 BHK Villa in Whitefield, moving in next month. Interested in whole-home lighting and security..."
            className="w-full bg-slate-50/80 dark:bg-black/35 border border-slate-200/90 dark:border-white/10 focus:border-[#0070e0] focus:ring-2 focus:ring-[#0070e0]/20 rounded-xl px-3.5 py-2.5 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 text-xs sm:text-sm transition-all duration-200 outline-none resize-none"
          />
          {errors.message && (
            <p
              role="alert"
              className="text-red-500 text-[11px] mt-1 font-medium"
            >
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full group inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full bg-accent-blue hover:bg-[#0070e0] text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-[0_4px_18px_rgba(10,132,255,0.4)] hover:shadow-[0_6px_24px_rgba(10,132,255,0.55)] hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-white" />
                <span>Sending Proposal Request...</span>
              </>
            ) : (
              <>
                <span>Submit Consultation Request</span>
                <Send className="w-3.5 h-3.5 text-white transition-transform duration-300 group-hover:translate-x-0.5" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default function ContactEnquirySection() {
  return (
    <QueryProvider>
      <section
        id="contact-enquiry"
        className="relative w-full py-12 sm:py-16 lg:py-20 bg-[#faf8f5] dark:bg-[#070e18] border-t border-border-main transition-colors duration-500 overflow-hidden"
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
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] xl:text-[44px] font-bold text-slate-900 dark:text-white tracking-tight leading-[1.14]">
                  Start Your <br />
                  <span className="block italic font-normal font-serif">
                    Smart Living
                  </span>
                  <span className="block font-bold text-accent-blue">
                    Journey
                  </span>
                </h2>

                {/* Description */}
                <p className="mt-4 font-sans text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-md">
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
                    className="group flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/10 hover:border-accent-blue/50 dark:hover:border-accent-blue/50 shadow-xs hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center text-accent-blue shrink-0 group-hover:scale-105 transition-transform duration-300">
                        <Phone className="w-4.5 h-4.5" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10.5px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                          Direct Sales &amp; Inquiries
                        </span>
                        <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white font-mono">
                          {COMPANY_INFO.phones.primary.display}
                        </span>
                      </div>
                    </div>
                    <div className="hidden sm:flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-1 rounded-full border border-emerald-200/60 dark:border-emerald-800/30">
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
                    className="group flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/10 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 shadow-xs hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0 group-hover:scale-105 transition-transform duration-300">
                        <MessageSquare className="w-4.5 h-4.5" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10.5px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                          Instant WhatsApp Concierge
                        </span>
                        <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
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
                  <div className="flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/10 shadow-xs">
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 dark:text-amber-400 shrink-0">
                        <MapPin className="w-4.5 h-4.5" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10.5px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                          Flagship Experience Centre
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                          {COMPANY_INFO.address.cityState} • Brookefield
                        </span>
                      </div>
                    </div>
                    <span className="text-[11px] font-medium text-slate-400 dark:text-slate-500">
                      Private Tours
                    </span>
                  </div>
                </div>
              </div>

              {/* Trust Badges Footer */}
              <div className="mt-8 pt-5 border-t border-slate-200/80 dark:border-white/10 grid grid-cols-3 gap-2">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-accent-blue shrink-0" />
                  <span className="text-[11px] font-semibold text-slate-700 dark:text-slate-300 leading-tight">
                    24h Response
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span className="text-[11px] font-semibold text-slate-700 dark:text-slate-300 leading-tight">
                    5-Yr Warranty
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
                  <span className="text-[11px] font-semibold text-slate-700 dark:text-slate-300 leading-tight">
                    Free Site Audit
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Sleek Frosted Consultation Form */}
            <div className="lg:col-span-7">
              <HomeContactForm />
            </div>
          </div>
        </div>
      </section>
    </QueryProvider>
  );
}
