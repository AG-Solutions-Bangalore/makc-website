import { Loader2 } from "lucide-react";
import { useContactForm } from "../hooks/useContactForm";

export function ContactForm() {
  const { register, handleSubmit, errors, isSubmitting } = useContactForm();

  return (
    <div
      className="lg:col-span-7 bg-[#f8fafc] dark:bg-[#071326] backdrop-blur-xl border border-slate-200/90 dark:border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-5 lg:p-6 flex flex-col justify-between shadow-[0_15px_35px_rgba(0,0,0,0.06)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:border-accent-blue/40 transition-all duration-500 reveal-on-scroll reveal-left"
      data-reveal-duration="0.9s"
    >
      <div className="mb-3 sm:mb-4">
        <h3 className="text-xl sm:text-2xl font-bold font-serif text-text-main mb-0.5 tracking-tight">
          Send us a message
        </h3>
        <p className="text-xs text-text-muted">
          Fill out the form below and we'll get back to you within 24 hours.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-2.5 sm:space-y-3">
        {/* Name, Phone, Email - single compact row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
          <div>
            <label
              htmlFor="name"
              className="block text-text-muted text-[10px] font-bold uppercase tracking-wider mb-1"
            >
              Name
            </label>
            <input
              {...register("name")}
              type="text"
              id="name"
              className="w-full bg-slate-50 dark:bg-black/35 border border-slate-200/90 dark:border-white/10 focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 rounded-xl px-3 py-2 sm:py-2.5 text-text-main transition-all duration-300 outline-none text-xs sm:text-sm shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]"
              placeholder="John Doe"
            />
            {errors.name && (
              <p role="alert" className="text-red-500 text-[11px] mt-1 font-medium">
                {errors.name.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-text-muted text-[10px] font-bold uppercase tracking-wider mb-1"
            >
              Phone
            </label>
            <input
              {...register("phone")}
              type="tel"
              id="phone"
              className="w-full bg-slate-50 dark:bg-black/35 border border-slate-200/90 dark:border-white/10 focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 rounded-xl px-3 py-2 sm:py-2.5 text-text-main transition-all duration-300 outline-none text-xs sm:text-sm shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]"
              placeholder="+91 90000 00000"
            />
            {errors.phone && (
              <p role="alert" className="text-red-500 text-[11px] mt-1 font-medium">
                {errors.phone.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-text-muted text-[10px] font-bold uppercase tracking-wider mb-1"
            >
              Email
            </label>
            <input
              {...register("email")}
              type="email"
              id="email"
              className="w-full bg-slate-50 dark:bg-black/35 border border-slate-200/90 dark:border-white/10 focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 rounded-xl px-3 py-2 sm:py-2.5 text-text-main transition-all duration-300 outline-none text-xs sm:text-sm shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]"
              placeholder="john.doe@example.com"
            />
            {errors.email && (
              <p role="alert" className="text-red-500 text-[11px] mt-1 font-medium">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        {/* Services Checkbox Grid */}
        <div>
          <span className="block text-text-muted text-[10px] font-bold uppercase tracking-wider mb-1.5">
            Services
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5">
            {[
              { id: "automation", label: "Automation" },
              { id: "security", label: "Security" },
              { id: "lighting", label: "Lighting" },
              { id: "networking", label: "Networking" },
              { id: "audio", label: "Audio & Video" },
              { id: "general", label: "General Inquiry" },
            ].map((service) => (
              <label
                key={service.id}
                className="flex items-center gap-2 bg-slate-50 dark:bg-black/35 border border-slate-200/90 dark:border-white/10 hover:border-accent-blue/50 has-[:checked]:border-accent-blue/80 has-[:checked]:bg-accent-blue/10 rounded-xl px-2.5 sm:px-3.5 py-2 cursor-pointer select-none transition-all duration-300 text-text-main text-xs sm:text-sm font-medium leading-tight justify-start"
              >
                <input
                  type="checkbox"
                  value={service.label}
                  {...register("services")}
                  className="shrink-0 rounded border-border-main/80 text-accent-blue focus:ring-accent-blue/30 h-3.5 w-3.5 cursor-pointer accent-accent-blue"
                />
                <span className="whitespace-nowrap">{service.label}</span>
              </label>
            ))}
          </div>
          {errors.services && (
            <p role="alert" className="text-red-500 text-[11px] mt-1 font-medium">
              {errors.services.message}
            </p>
          )}
        </div>

        {/* Message Input */}
        <div>
          <label
            htmlFor="message"
            className="block text-text-muted text-[10px] font-bold uppercase tracking-wider mb-1"
          >
            Message
          </label>
          <textarea
            {...register("message")}
            id="message"
            rows={2}
            className="w-full bg-slate-50 dark:bg-black/35 border border-slate-200/90 dark:border-white/10 focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 rounded-xl px-3 py-2 text-text-main transition-all duration-300 outline-none text-xs sm:text-sm shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] resize-none"
            placeholder="Tell us about your smart home project..."
          />
          {errors.message && (
            <p role="alert" className="text-red-500 text-[11px] mt-1 font-medium">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Submit Button Centered */}
        <div className="pt-1 flex justify-center items-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto min-w-[200px] bg-accent-blue hover:bg-[#0055d4] text-white! font-bold tracking-wide py-2.5 px-8 rounded-xl transition-all duration-300 flex justify-center items-center shadow-[0_4px_16px_rgba(10,132,255,0.3)] hover:shadow-[0_6px_22px_rgba(10,132,255,0.5)] hover:-translate-y-0.5 disabled:opacity-60 disabled:pointer-events-none disabled:shadow-none disabled:translate-y-0 apple-border-shine cursor-pointer text-xs sm:text-sm"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin mr-2" />
                <span>Sending...</span>
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
