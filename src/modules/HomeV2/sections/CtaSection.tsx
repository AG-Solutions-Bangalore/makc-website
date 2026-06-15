import ContactStrip from "@/components/common/ContactStrip";

export default function CtaSection() {
  return (
    <section className="relative w-full bg-bg-main py-12 lg:py-16 border-t border-border-main">
      <div className="relative mx-auto max-w-8xl px-4 sm:px-12">
        <ContactStrip
          title="Ready to Get Started?"
          description="Our team is ready to help you bring your smart living vision to life."
          phone={{
            label: "Call Us",
            value: "+91 99484 32444",
            href: "tel:+919948432444",
          }}
          email={{
            label: "Email Us",
            value: "info@makcautomations.com",
            href: "mailto:info@makcautomations.com",
          }}
          address={{
            label: "Visit Us",
            value: "Smart Experience Center\nHyderabad, India",
            href: "#contact",
          }}
          cta={{
            label: "Let's Build the Future",
            href: "#contact",
          }}
        />
      </div>
    </section>
  );
}
