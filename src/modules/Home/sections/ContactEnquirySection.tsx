import { ContactForm } from "@/modules/Contact/components/ContactForm";
import QueryProvider from "@/components/common/QueryProvider";

export default function ContactEnquirySection() {
  return (
    <QueryProvider>
      <section
        id="contact-enquiry"
        className="w-full relative pt-6 sm:pt-8 lg:pt-10 pb-6 sm:pb-8 lg:pb-10 scroll-mt-20 bg-white dark:bg-[#030712] border-t border-border-main overflow-hidden transition-colors duration-300"
      >
        {/* Ambient subtle glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(10,132,255,0.06)_0%,transparent_60%)] pointer-events-none" />
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-3 sm:mb-4 lg:mb-5">
            <span className="text-[10px] font-bold text-accent-blue uppercase tracking-[0.25em] block mb-1">
              Get In Touch
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-text-main font-display leading-tight text-balance">
              Start Your{" "}
              <span className="text-[#0A84FF]">Smart Home</span> Journey
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-text-muted max-w-xl mx-auto">
              Tell us about your project and our team will get back to you within 24 hours.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </QueryProvider>
  );
}
