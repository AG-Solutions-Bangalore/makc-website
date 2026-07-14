import { Loader2, ChevronDown } from "lucide-react";
import { useContactForm } from "../hooks/useContactForm";

export function ContactForm() {
  const { register, handleSubmit, errors, isSubmitting } = useContactForm();

  return (
    <div
      className="lg:col-span-7 bg-bg-surface/50 backdrop-blur-xl border border-border-main/70 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.03)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:border-border-main/90 transition-all duration-500 reveal-on-scroll reveal-left"
      data-reveal-duration="0.9s"
    >
      <div className="mb-6">
        <h3 className="text-2.5xl font-bold font-serif text-text-main mb-1.5 tracking-tight">
          Send us a message
        </h3>
        <p className="text-xs sm:text-sm text-text-muted">
          Fill out the form below and we'll get back to you within 24 hours.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="name"
              className="block text-text-muted text-[10px] font-bold uppercase tracking-wider mb-1.5"
            >
              Name
            </label>
            <input
              {...register("name")}
              type="text"
              id="name"
              className="w-full bg-bg-main/30 border border-border-main/70 focus:border-accent-blue focus:ring-4 focus:ring-accent-blue/10 rounded-xl px-4 py-3 text-text-main transition-all duration-300 outline-none text-sm shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]"
              placeholder="John Doe"
            />
            {errors.name && (
              <p role="alert" className="text-red-500 text-xs mt-1.5 font-medium">
                {errors.name.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-text-muted text-[10px] font-bold uppercase tracking-wider mb-1.5"
            >
              Phone
            </label>
            <input
              {...register("phone")}
              type="tel"
              id="phone"
              className="w-full bg-bg-main/30 border border-border-main/70 focus:border-accent-blue focus:ring-4 focus:ring-accent-blue/10 rounded-xl px-4 py-3 text-text-main transition-all duration-300 outline-none text-sm shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]"
              placeholder="+91 90000 00000"
            />
            {errors.phone && (
              <p role="alert" className="text-red-500 text-xs mt-1.5 font-medium">
                {errors.phone.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-text-muted text-[10px] font-bold uppercase tracking-wider mb-1.5"
          >
            Email
          </label>
          <input
            {...register("email")}
            type="email"
            id="email"
            className="w-full bg-bg-main/30 border border-border-main/70 focus:border-accent-blue focus:ring-4 focus:ring-accent-blue/10 rounded-xl px-4 py-3 text-text-main transition-all duration-300 outline-none text-sm shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]"
            placeholder="john.doe@example.com"
          />
          {errors.email && (
            <p role="alert" className="text-red-500 text-xs mt-1.5 font-medium">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-text-muted text-[10px] font-bold uppercase tracking-wider mb-1.5"
          >
            Subject
          </label>
          <div className="relative">
            <select
              {...register("subject")}
              id="subject"
              className="w-full bg-bg-main/30 border border-border-main/70 focus:border-accent-blue focus:ring-4 focus:ring-accent-blue/10 rounded-xl px-4 py-3 text-text-main transition-all duration-300 outline-none text-sm shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] appearance-none cursor-pointer pr-10"
              defaultValue=""
            >
              <option value="" disabled className="bg-bg-surface text-text-muted">
                Select a service...
              </option>
              <option value="Automation" className="bg-bg-surface text-text-main">
                Automation
              </option>
              <option value="Security" className="bg-bg-surface text-text-main">
                Security
              </option>
              <option value="Lighting" className="bg-bg-surface text-text-main">
                Lighting
              </option>
              <option value="Networking" className="bg-bg-surface text-text-main">
                Networking
              </option>
              <option value="General Inquiry" className="bg-bg-surface text-text-main">
                General Inquiry
              </option>
            </select>
            <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-text-muted">
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
          {errors.subject && (
            <p role="alert" className="text-red-500 text-xs mt-1.5 font-medium">
              {errors.subject.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-text-muted text-[10px] font-bold uppercase tracking-wider mb-1.5"
          >
            Message
          </label>
          <textarea
            {...register("message")}
            id="message"
            rows={4}
            className="w-full bg-bg-main/30 border border-border-main/70 focus:border-accent-blue focus:ring-4 focus:ring-accent-blue/10 rounded-xl px-4 py-3 text-text-main transition-all duration-300 outline-none text-sm shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] resize-none"
            placeholder="Tell us about your smart home project..."
          />
          {errors.message && (
            <p role="alert" className="text-red-500 text-xs mt-1.5 font-medium">
              {errors.message.message}
            </p>
          )}
        </div>

        <div className="pt-1">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto bg-accent-blue hover:bg-[#0055d4] text-white font-bold tracking-wide py-3.5 px-10 rounded-xl transition-all duration-300 flex justify-center items-center shadow-[0_4px_20px_rgba(10,132,255,0.35)] hover:shadow-[0_6px_25px_rgba(10,132,255,0.55)] hover:-translate-y-0.5 disabled:opacity-60 disabled:pointer-events-none disabled:shadow-none disabled:translate-y-0 apple-border-shine cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin mr-2" />
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
