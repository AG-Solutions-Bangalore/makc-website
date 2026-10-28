import {
  CheckCircle2,
  Loader2,
  Send,
  Sparkles,
} from "lucide-react";
import { useContactForm } from "@/modules/Contact/hooks/useContactForm";

export default function UnifiedContactForm() {
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
    <div className="relative rounded-[24px] sm:rounded-[28px] bg-bg-card p-5 sm:p-7 lg:p-8 border border-border-main/50">
      {/* Top Form Header */}
      <div className="mb-5 sm:mb-6 text-left">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-[10.5px] font-bold uppercase tracking-wider mb-2">
          <Sparkles className="w-3 h-3" />
          <span>Priority Consultation</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-serif font-bold text-text-main tracking-tight">
          Request a Bespoke Proposal
        </h3>
        <p className="mt-1 text-xs sm:text-[13px] text-text-muted">
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
              className="block text-text-muted text-[10.5px] font-bold uppercase tracking-wider mb-1"
            >
              Full Name *
            </label>
            <input
              {...register("name")}
              type="text"
              id="home-name"
              placeholder="e.g. Rahul Sharma"
              className="w-full bg-bg-main/50 border border-border-main focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 rounded-xl px-3.5 py-2.5 text-text-main placeholder:text-text-muted/60 text-xs sm:text-sm transition-all duration-200 outline-none"
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
              className="block text-text-muted text-[10.5px] font-bold uppercase tracking-wider mb-1"
            >
              Phone Number *
            </label>
            <input
              {...register("phone")}
              type="tel"
              id="home-phone"
              placeholder="+91 98765 43210"
              className="w-full bg-bg-main/50 border border-border-main focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 rounded-xl px-3.5 py-2.5 text-text-main placeholder:text-text-muted/60 text-xs sm:text-sm transition-all duration-200 outline-none"
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
            className="block text-text-muted text-[10.5px] font-bold uppercase tracking-wider mb-1"
          >
            Email Address *
          </label>
          <input
            {...register("email")}
            type="email"
            id="home-email"
            placeholder="rahul.sharma@example.com"
            className="w-full bg-bg-main/50 border border-border-main focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 rounded-xl px-3.5 py-2.5 text-text-main placeholder:text-text-muted/60 text-xs sm:text-sm transition-all duration-200 outline-none"
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
          <label className="block text-text-muted text-[10.5px] font-bold uppercase tracking-wider mb-1.5">
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
                      ? "bg-accent-blue/10 border-accent-blue text-accent-blue font-semibold shadow-xs"
                      : "border-border-main text-text-muted hover:border-border-main/50 bg-bg-main/40"
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
                        ? "bg-accent-blue border-accent-blue text-white"
                        : "border-border-main bg-bg-main/30"
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
            className="block text-text-muted text-[10.5px] font-bold uppercase tracking-wider mb-1"
          >
            Project Details &amp; Location *
          </label>
          <textarea
            {...register("message")}
            id="home-message"
            rows={3}
            placeholder="e.g. 4 BHK Villa in Whitefield, moving in next month. Interested in whole-home lighting and security..."
            className="w-full bg-bg-main/50 border border-border-main focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 rounded-xl px-3.5 py-2.5 text-text-main placeholder:text-text-muted/60 text-xs sm:text-sm transition-all duration-200 outline-none resize-none"
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
            className="shine-hover w-full group inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full bg-accent-blue hover:bg-[#0070e0] text-white font-bold text-xs sm:text-sm uppercase tracking-wider whitespace-nowrap transition-all duration-300 shadow-[0_4px_18px_rgba(10,132,255,0.4)] hover:shadow-[0_6px_24px_rgba(10,132,255,0.55)] hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
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
