import { ContactForm } from "@/modules/Contact/components/ContactForm";
import QueryProvider from "@/components/common/QueryProvider";

export default function ContactEnquirySection() {
  return (
    <QueryProvider>
      <section
        id="contact-enquiry"
        className="w-full bg-bg-main relative pt-8 sm:pt-12 lg:pt-16 pb-2 sm:pb-4 lg:pb-6 scroll-mt-24 sm:scroll-mt-28 lg:scroll-mt-32"
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-10 lg:mb-14">
            <span className="text-[10px] font-bold text-accent-blue uppercase tracking-[0.25em] block mb-2 sm:mb-3">
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-text-main font-display leading-tight text-balance">
              Start Your{" "}
              <span className="text-[#0A84FF]">Smart Home</span> Journey
            </h2>
            <p className="mt-3 text-sm sm:text-base text-text-muted max-w-xl mx-auto">
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
