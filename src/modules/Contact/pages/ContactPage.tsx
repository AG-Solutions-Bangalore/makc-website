import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Phone, Mail, Facebook, Linkedin, Instagram, ArrowRight, Loader2, MapPin } from "lucide-react";
import { toast } from "sonner";
import bgImage from "@/assets/images/home_v2/contact_villa_night.png";

// Custom Google Plus SVG to match legacy requirement
function GooglePlusIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12.3 9.92h-4.3v1.85h2.5c-.24 1.26-1.32 2.15-2.5 2.15-1.53 0-2.77-1.24-2.77-2.77s1.24-2.77 2.77-2.77c.68 0 1.3.25 1.78.67l1.32-1.32C10.1 6.88 8.87 6.23 7.5 6.23 4.46 6.23 2 8.69 2 11.73s2.46 5.5 5.5 5.5c3.18 0 5.29-2.24 5.29-5.38 0-.36-.03-.7-.09-1.03h-2.9v1.1h1.5zm8.7 0H19v-2h-1.5v2h-2v1.5h2v2h1.5v-2h2v-1.5z"/>
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
    <div className="pt-24 lg:pt-32 pb-16 min-h-screen bg-bg-main relative w-full overflow-hidden transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Hero Header */}
        <div className="mb-12 lg:mb-16">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-serif text-text-main tracking-tight leading-[1.1] mb-6">
            Let's build the <br />
            <span className="text-accent-blue">
              future of your home.
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-text-muted max-w-2xl leading-relaxed">
            Whether you are ready to start a project or simply have a question, our smart living experts are here to help.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Main Contact Form Panel */}
          <div className="lg:col-span-7 bg-bg-surface border border-border-main rounded-3xl p-8 sm:p-10 lg:p-12 apple-border-shine flex flex-col justify-between shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.3)] transition-all">
            <div className="mb-8">
              <h3 className="text-3xl font-bold font-serif text-text-main mb-2 tracking-tight">Send us a message</h3>
              <p className="text-sm text-text-muted">Fill out the form below and we'll get back to you within 24 hours.</p>
            </div>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-text-muted text-[11px] font-bold uppercase tracking-wider mb-2">Name</label>
                  <input 
                    {...register("name")}
                    type="text"
                    id="name"
                    className="w-full bg-bg-main border border-border-main focus:border-accent-blue focus:ring-1 focus:ring-accent-blue rounded-xl px-4 py-3.5 text-text-main transition-all outline-none text-sm shadow-inner"
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.name.message}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-text-muted text-[11px] font-bold uppercase tracking-wider mb-2">Phone</label>
                  <input 
                    {...register("phone")}
                    type="tel"
                    id="phone"
                    className="w-full bg-bg-main border border-border-main focus:border-accent-blue focus:ring-1 focus:ring-accent-blue rounded-xl px-4 py-3.5 text-text-main transition-all outline-none text-sm shadow-inner"
                    placeholder="+91 90000 00000"
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.phone.message}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-text-muted text-[11px] font-bold uppercase tracking-wider mb-2">Subject</label>
                <input 
                  {...register("subject")}
                  type="text"
                  id="subject"
                  className="w-full bg-bg-main border border-border-main focus:border-accent-blue focus:ring-1 focus:ring-accent-blue rounded-xl px-4 py-3.5 text-text-main transition-all outline-none text-sm shadow-inner"
                  placeholder="How can we help?"
                />
                {errors.subject && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.subject.message}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-text-muted text-[11px] font-bold uppercase tracking-wider mb-2">Message</label>
                <textarea 
                  {...register("message")}
                  id="message"
                  rows={5}
                  className="w-full bg-bg-main border border-border-main focus:border-accent-blue focus:ring-1 focus:ring-accent-blue rounded-xl px-4 py-3.5 text-text-main transition-all outline-none text-sm shadow-inner resize-none"
                  placeholder="Tell us about your smart home project..."
                />
                {errors.message && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.message.message}</p>}
              </div>

              <div className="pt-2">
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto bg-accent-blue hover:bg-[#0055d4] text-white font-bold tracking-wide py-4 px-10 rounded-xl transition-all duration-300 flex justify-center items-center shadow-[0_4px_20px_rgba(10,132,255,0.4)] hover:shadow-[0_8px_30px_rgba(10,132,255,0.6)] hover:-translate-y-0.5 apple-border-shine"
                >
                  {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : "Send Message"}
                </button>
              </div>
            </form>
          </div>

          {/* Visual/Image Panel */}
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden min-h-[300px] lg:min-h-full apple-border-shine group border border-border-main shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.3)]">
            <img 
              src={bgImage} 
              alt="Luxury Villa Integration"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 z-10">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-5 h-5 text-accent-blue" />
                <h4 className="text-white text-xl lg:text-2xl font-serif font-bold drop-shadow-md">Smart Experience Center</h4>
              </div>
              <p className="text-white/80 text-sm drop-shadow font-medium border-l-2 border-accent-blue pl-4">
                Dubai Silicon Oasis, UAE <br/>
                Hyderabad & Bangalore, India
              </p>
            </div>
          </div>

          {/* Quick-Contact Chips */}
          
          {/* Phone Chip */}
          <a href="tel:+918197783287" className="lg:col-span-4 bg-bg-surface border border-border-main rounded-3xl p-6 lg:p-8 apple-border-shine flex items-center gap-5 group cursor-pointer transition-transform hover:-translate-y-1 duration-300 shadow-[0_4px_15px_rgb(0,0,0,0.02)] dark:shadow-[0_4px_20px_rgb(0,0,0,0.2)]">
            <div className="w-14 h-14 rounded-full bg-accent-blue/10 text-accent-blue flex items-center justify-center shrink-0 border border-accent-blue/20 group-hover:bg-accent-blue group-hover:text-white transition-all duration-300">
              <Phone className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div>
              <p className="text-[10px] sm:text-xs font-bold text-text-muted uppercase tracking-widest mb-1.5">Call Us Directly</p>
              <p className="text-lg font-semibold text-text-main leading-tight">+91-8197783287</p>
              <p className="text-sm font-medium text-text-muted mt-0.5">+91-9324226077</p>
            </div>
          </a>

          {/* Email Chip */}
          <a href="mailto:info@makcautomations.com" className="lg:col-span-4 bg-bg-surface border border-border-main rounded-3xl p-6 lg:p-8 apple-border-shine flex items-center gap-5 group cursor-pointer transition-transform hover:-translate-y-1 duration-300 shadow-[0_4px_15px_rgb(0,0,0,0.02)] dark:shadow-[0_4px_20px_rgb(0,0,0,0.2)]">
            <div className="w-14 h-14 rounded-full bg-accent-blue/10 text-accent-blue flex items-center justify-center shrink-0 border border-accent-blue/20 group-hover:bg-accent-blue group-hover:text-white transition-all duration-300">
              <Mail className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="overflow-hidden">
              <p className="text-[10px] sm:text-xs font-bold text-text-muted uppercase tracking-widest mb-1.5">Email Us</p>
              <p className="text-base sm:text-lg font-semibold text-text-main truncate">info@makcautomations.com</p>
            </div>
          </a>

          {/* Social Media Bar */}
          <div className="lg:col-span-4 bg-bg-surface border border-border-main rounded-3xl p-6 lg:p-8 apple-border-shine flex flex-col justify-center gap-4 shadow-[0_4px_15px_rgb(0,0,0,0.02)] dark:shadow-[0_4px_20px_rgb(0,0,0,0.2)]">
            <p className="text-[10px] sm:text-xs font-bold text-text-muted uppercase tracking-widest text-center sm:text-left">Follow Us On</p>
            <div className="flex items-center justify-center sm:justify-start gap-4">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-border-main bg-bg-main flex items-center justify-center text-text-muted hover:text-[#1877F2] hover:border-[#1877F2] hover:shadow-[0_4px_15px_rgba(24,119,242,0.2)] transition-all duration-300 apple-border-shine">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-border-main bg-bg-main flex items-center justify-center text-text-muted hover:text-[#0A66C2] hover:border-[#0A66C2] hover:shadow-[0_4px_15px_rgba(10,102,194,0.2)] transition-all duration-300 apple-border-shine">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-border-main bg-bg-main flex items-center justify-center text-text-muted hover:text-[#E4405F] hover:border-[#E4405F] hover:shadow-[0_4px_15px_rgba(228,64,95,0.2)] transition-all duration-300 apple-border-shine">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://plus.google.com" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-border-main bg-bg-main flex items-center justify-center text-text-muted hover:text-[#db4a39] hover:border-[#db4a39] hover:shadow-[0_4px_15px_rgba(219,74,57,0.2)] transition-all duration-300 apple-border-shine">
                <GooglePlusIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>

        {/* Map Section - Edge-to-edge container styling */}
        <div className="mt-6 lg:mt-8 relative h-[400px] lg:h-[500px] w-full rounded-3xl overflow-hidden border border-border-main shadow-lg apple-border-shine group">
          <div className="absolute top-6 right-6 lg:top-8 lg:right-8 z-20">
            <a 
              href="https://maps.google.com/?q=Bommasandra,Bengaluru,Karnataka" 
              target="_blank" 
              rel="noreferrer"
              className="bg-bg-surface/80 backdrop-blur-xl border border-border-main shadow-[0_8px_30px_rgb(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.5)] text-text-main hover:text-accent-blue font-semibold text-sm py-3 px-6 rounded-xl flex items-center gap-3 hover:-translate-y-0.5 transition-all duration-300 apple-border-shine"
            >
              Open in Maps <ArrowRight className="w-4 h-4" />
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
