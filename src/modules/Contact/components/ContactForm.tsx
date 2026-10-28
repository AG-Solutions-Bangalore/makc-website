import { Loader2, User, Phone, Mail, MessageSquare, Send, Check } from "lucide-react";
import { useContactForm } from "../hooks/useContactForm";

const SERVICES_LIST = [
  { id: "automation", label: "Home Automation" },
  { id: "lighting", label: "Smart Lighting" },
  { id: "security", label: "Security & CCTV" },
  { id: "networking", label: "Wi-Fi & Networking" },
  { id: "audio", label: "Home Theatre & Audio" },
  { id: "general", label: "General Inquiry" },
] as const;

export function ContactForm() {
  const { register, handleSubmit, errors, isSubmitting, watch, setValue } = useContactForm();
  const selectedServices = watch("services") || [];

  const toggleService = (label: string) => {
    const next = selectedServices.includes(label)
      ? selectedServices.filter((s) => s !== label)
      : [...selectedServices, label];
    setValue("services", next, { shouldValidate: true, shouldDirty: true });
  };

  return (
    <div
      className="lg:col-span-7 bg-bg-surface/90 dark:bg-[#071326]/95 backdrop-blur-2xl border border-border-main/80 dark:border-white/10 rounded-3xl p-5 sm:p-7 lg:p-8 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-300 reveal-on-scroll reveal-left"
      data-reveal-duration="0.9s"
    >
      <div className="mb-5 sm:mb-6">
        <span className="text-[11px] font-bold uppercase tracking-widest text-accent-blue block mb-1">
          Get in Touch
        </span>
        <h3 className="text-2xl sm:text-3xl font-bold font-serif text-text-main tracking-tight">
          Send us a message
        </h3>
        <p className="text-xs sm:text-sm text-text-muted mt-1 leading-relaxed">
          Tell us about your space. Our smart automation specialists will get back to you within 24 hours.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
        {/* Contact info: Name, Phone, Email */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-3.5">
          {/* Name */}
          <div className="space-y-1.5">
            <label
              htmlFor="name"
              className="flex items-center gap-1.5 text-text-muted text-[11px] font-bold uppercase tracking-wider"
            >
              <User className="w-3.5 h-3.5 text-accent-blue" />
              <span>Full Name</span>
            </label>
            <input
              {...register("name")}
              type="text"
              id="name"
              className="w-full bg-slate-50/80 dark:bg-black/40 border border-slate-200/90 dark:border-white/10 focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 rounded-xl px-3.5 py-2.5 text-text-main transition-all duration-200 outline-none text-xs sm:text-sm placeholder:text-text-muted/60"
              placeholder="e.g. Rahul Sharma"
            />
            {errors.name && (
              <p role="alert" className="text-red-500 text-[11px] font-medium">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Phone */}
          <div className="space-y-1.5">
            <label
              htmlFor="phone"
              className="flex items-center gap-1.5 text-text-muted text-[11px] font-bold uppercase tracking-wider"
            >
              <Phone className="w-3.5 h-3.5 text-accent-blue" />
              <span>Phone Number</span>
            </label>
            <input
              {...register("phone")}
              type="tel"
              id="phone"
              className="w-full bg-slate-50/80 dark:bg-black/40 border border-slate-200/90 dark:border-white/10 focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 rounded-xl px-3.5 py-2.5 text-text-main transition-all duration-200 outline-none text-xs sm:text-sm placeholder:text-text-muted/60"
              placeholder="+91 98765 43210"
            />
            {errors.phone && (
              <p role="alert" className="text-red-500 text-[11px] font-medium">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-1.5">
            <label
              htmlFor="email"
              className="flex items-center gap-1.5 text-text-muted text-[11px] font-bold uppercase tracking-wider"
            >
              <Mail className="w-3.5 h-3.5 text-accent-blue" />
              <span>Email Address</span>
            </label>
            <input
              {...register("email")}
              type="email"
              id="email"
              className="w-full bg-slate-50/80 dark:bg-black/40 border border-slate-200/90 dark:border-white/10 focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 rounded-xl px-3.5 py-2.5 text-text-main transition-all duration-200 outline-none text-xs sm:text-sm placeholder:text-text-muted/60"
              placeholder="rahul@example.com"
            />
            {errors.email && (
              <p role="alert" className="text-red-500 text-[11px] font-medium">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        {/* Services Chips */}
        <div className="space-y-2">
          <label className="block text-text-muted text-[11px] font-bold uppercase tracking-wider">
            Interested Services
          </label>
          <div className="flex flex-wrap gap-2">
            {SERVICES_LIST.map((service) => {
              const isSelected = selectedServices.includes(service.label);
              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => toggleService(service.label)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-[13px] font-medium cursor-pointer select-none transition-all duration-200 border active:scale-95 ${
                    isSelected
                      ? "bg-accent-blue border-accent-blue text-white! shadow-[0_4px_14px_rgba(10,132,255,0.35)]"
                      : "bg-slate-100/70 dark:bg-white/5 border-slate-200/90 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:border-accent-blue/50 hover:text-accent-blue"
                  }`}
                >
                  {isSelected && <Check className="w-3.5 h-3.5 stroke-[2.5]" />}
                  <span>{service.label}</span>
                </button>
              );
            })}
          </div>
          {errors.services && (
            <p role="alert" className="text-red-500 text-[11px] font-medium">
              {errors.services.message}
            </p>
          )}
        </div>

        {/* Message Input */}
        <div className="space-y-1.5">
          <label
            htmlFor="message"
            className="flex items-center gap-1.5 text-text-muted text-[11px] font-bold uppercase tracking-wider"
          >
            <MessageSquare className="w-3.5 h-3.5 text-accent-blue" />
            <span>Project Details / Message</span>
          </label>
          <textarea
            {...register("message")}
            id="message"
            rows={3}
            className="w-full bg-slate-50/80 dark:bg-black/40 border border-slate-200/90 dark:border-white/10 focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 rounded-xl p-3.5 text-text-main transition-all duration-200 outline-none text-xs sm:text-sm placeholder:text-text-muted/60 resize-none leading-relaxed"
            placeholder="Tell us about your home, villa, or commercial space and any specific automation or lighting requirements..."
          />
          {errors.message && (
            <p role="alert" className="text-red-500 text-[11px] font-medium">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-2 flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className="shine-hover w-full sm:w-auto min-w-[210px] bg-accent-blue hover:bg-[#0070e0] text-white! font-bold tracking-wide py-3 px-8 rounded-xl transition-all duration-300 flex justify-center items-center gap-2 shadow-[0_6px_20px_rgba(10,132,255,0.35)] hover:shadow-[0_8px_25px_rgba(10,132,255,0.5)] hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 disabled:pointer-events-none cursor-pointer text-xs sm:text-sm"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Sending Message...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4 stroke-[2.2]" />
                <span>Send Message</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
