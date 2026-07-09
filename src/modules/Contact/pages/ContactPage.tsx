import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Phone,
  Mail,
  Facebook,
  Linkedin,
  Instagram,
  ArrowRight,
  Loader2,
  MapPin,
} from "lucide-react";
import { toast } from "sonner";
import bgImage from "@/assets/images/home_v2/contact_villa_night.png";

// Custom Google Plus SVG to match legacy requirement
function GooglePlusIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12.3 9.92h-4.3v1.85h2.5c-.24 1.26-1.32 2.15-2.5 2.15-1.53 0-2.77-1.24-2.77-2.77s1.24-2.77 2.77-2.77c.68 0 1.3.25 1.78.67l1.32-1.32C10.1 6.88 8.87 6.23 7.5 6.23 4.46 6.23 2 8.69 2 11.73s2.46 5.5 5.5 5.5c3.18 0 5.29-2.24 5.29-5.38 0-.36-.03-.7-.09-1.03h-2.9v1.1h1.5zm8.7 0H19v-2h-1.5v2h-2v1.5h2v2h1.5v-2h2v-1.5z" />
    </svg>
  );
}

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(8, "Valid phone number is required"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    // Simulate API submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form data submitted: ", data);
    toast.success("Message sent successfully! We will get back to you soon.");
    reset();
    setIsSubmitting(false);
  };

  return (
    <div
      className="pt-20 lg:pt-24 pb-12 min-h-screen bg-bg-main relative w-full overflow-hidden transition-colors duration-300"
      style={{
        backgroundImage:
          "radial-gradient(rgba(10, 132, 255, 0.04) 1.5px, transparent 1.5px)",
        backgroundSize: "24px 24px",
      }}
    >
      {/* SaaS Ambient Glow Circles */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-accent-blue/8 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-500/5 blur-[150px] rounded-full pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Header */}
        <div
          className="mb-8 lg:mb-10 reveal-on-scroll reveal-up"
          data-reveal-duration="0.8s"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-text-main tracking-tight leading-tight mb-3">
            Let's build the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-blue-400 to-[#3ea6ff]">
              future of your home.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-text-muted max-w-2xl leading-relaxed">
            Whether you are ready to start a project or simply have a question,
            our smart living experts are here to help.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Main Contact Form Panel - Upgraded to modern Glassmorphism */}
          <div
            className="lg:col-span-7 bg-bg-surface/50 backdrop-blur-xl border border-border-main/70 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.03)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:border-border-main/90 transition-all duration-500 reveal-on-scroll reveal-left"
            data-reveal-duration="0.9s"
          >
            <div className="mb-6">
              <h3 className="text-2.5xl font-bold font-serif text-text-main mb-1.5 tracking-tight">
                Send us a message
              </h3>
              <p className="text-xs sm:text-sm text-text-muted">
                Fill out the form below and we'll get back to you within 24
                hours.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
                    <p
                      role="alert"
                      className="text-red-500 text-xs mt-1.5 font-medium"
                    >
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
                    <p
                      role="alert"
                      className="text-red-500 text-xs mt-1.5 font-medium"
                    >
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-text-muted text-[10px] font-bold uppercase tracking-wider mb-1.5"
                >
                  Subject
                </label>
                <input
                  {...register("subject")}
                  type="text"
                  id="subject"
                  className="w-full bg-bg-main/30 border border-border-main/70 focus:border-accent-blue focus:ring-4 focus:ring-accent-blue/10 rounded-xl px-4 py-3 text-text-main transition-all duration-300 outline-none text-sm shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]"
                  placeholder="How can we help?"
                />
                {errors.subject && (
                  <p
                    role="alert"
                    className="text-red-500 text-xs mt-1.5 font-medium"
                  >
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
                  <p
                    role="alert"
                    className="text-red-500 text-xs mt-1.5 font-medium"
                  >
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

          {/* Visual/Image Panel */}
          <div
            className="lg:col-span-5 relative rounded-3xl overflow-hidden min-h-[250px] lg:min-h-full border border-border-main/70 shadow-[0_10px_30px_rgba(0,0,0,0.03)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.2)] group reveal-on-scroll reveal-right"
            data-reveal-duration="0.9s"
          >
            <img
              src={bgImage}
              alt="Luxury Villa Integration"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent z-10" />
            <div className="absolute bottom-6 left-6 right-6 z-20">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-9 h-9 rounded-lg bg-accent-blue/20 text-accent-blue flex items-center justify-center backdrop-blur-md border border-accent-blue/30">
                  <MapPin className="w-4.5 h-4.5" aria-hidden="true" />
                </div>
                <h4 className="text-white text-xl font-serif font-bold drop-shadow-md">
                  Smart Experience Center
                </h4>
              </div>
              <p className="text-white/80 text-sm drop-shadow font-light border-accent-blue pl-4 ml-7.5">
                Dubai Silicon Oasis, UAE <br />
                Hyderabad & Bangalore, India
              </p>
            </div>
          </div>

          {/* Quick-Contact Chips (Upgraded to interactive Bento Grid cards) */}

          {/* Phone Chip */}
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

          {/* Email Chip */}
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

          {/* Social Media Bar */}
          <div
            className="lg:col-span-4 bg-bg-surface/50 backdrop-blur-xl border border-border-main/70 rounded-3xl p-5 sm:p-6 flex flex-col justify-center gap-3 shadow-[0_4px_15px_rgba(0,0,0,0.015)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.15)] reveal-on-scroll reveal-up"
            data-reveal-delay="300ms"
            data-reveal-duration="0.6s"
          >
            <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest text-center sm:text-left">
              Follow Us On
            </p>
            <div className="flex items-center justify-center sm:justify-start gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Follow us on Facebook"
                className="w-11 h-11 rounded-xl border border-border-main bg-bg-main/30 flex items-center justify-center text-text-muted hover:text-white hover:bg-[#1877F2] hover:border-transparent hover:shadow-[0_0_15px_rgba(24,119,242,0.4)] transition-all duration-500"
              >
                <Facebook
                  className="w-5 h-5 transition-transform duration-300 hover:scale-105"
                  aria-hidden="true"
                />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Follow us on LinkedIn"
                className="w-11 h-11 rounded-xl border border-border-main bg-bg-main/30 flex items-center justify-center text-text-muted hover:text-white hover:bg-[#0A66C2] hover:border-transparent hover:shadow-[0_0_15px_rgba(10,102,194,0.4)] transition-all duration-500"
              >
                <Linkedin
                  className="w-5 h-5 transition-transform duration-300 hover:scale-105"
                  aria-hidden="true"
                />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Follow us on Instagram"
                className="w-11 h-11 rounded-xl border border-border-main bg-bg-main/30 flex items-center justify-center text-text-muted hover:text-white hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:border-transparent hover:shadow-[0_0_15px_rgba(238,42,123,0.4)] transition-all duration-500"
              >
                <Instagram
                  className="w-5 h-5 transition-transform duration-300 hover:scale-105"
                  aria-hidden="true"
                />
              </a>
              <a
                href="https://plus.google.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Follow us on Google Plus"
                className="w-11 h-11 rounded-xl border border-border-main bg-bg-main/30 flex items-center justify-center text-text-muted hover:text-white hover:bg-[#db4a39] hover:border-transparent hover:shadow-[0_0_15px_rgba(219,74,57,0.4)] transition-all duration-500"
              >
                <GooglePlusIcon className="w-5 h-5 transition-transform duration-300 hover:scale-105" />
              </a>
            </div>
          </div>
        </div>

        {/* Map Section - Edge-to-edge container styling with glass overlay */}
        <div
          className="mt-6 lg:mt-8 relative h-[250px] lg:h-[320px] w-full rounded-3xl overflow-hidden border border-border-main/70 shadow-2xl group reveal-on-scroll reveal-up"
          data-reveal-duration="0.8s"
        >
          <div className="absolute top-4 right-4 z-20">
            <a
              href="https://maps.google.com/?q=Bommasandra,Bengaluru,Karnataka"
              target="_blank"
              rel="noreferrer"
              className="bg-bg-surface/80 backdrop-blur-xl border border-border-main shadow-[0_4px_15px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] text-text-main hover:text-accent-blue font-semibold text-xs py-2 px-4 rounded-lg flex items-center gap-2 hover:-translate-y-0.5 transition-all duration-300"
            >
              Open in Maps <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15560.598276707323!2d77.67104085!3d12.8332677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6ce06fa3db7b%3A0xe21287cd5a5db8b0!2sBommasandra%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="MAKc Automations Location Bengaluru"
            className="w-full h-full filter dark:grayscale dark:invert-[92%] dark:contrast-[83%] transition-all duration-500"
          />
        </div>
      </div>
    </div>
  );
}
