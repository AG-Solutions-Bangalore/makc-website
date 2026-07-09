import ContactStrip from "@/components/common/ContactStrip";

export default function CtaSection() {
  return (
    <section className="relative w-full bg-bg-main py-12 lg:py-16 border-t border-border-main/20">
      <div className="relative mx-auto max-w-8xl px-4 sm:px-12">
        <ContactStrip
          title="Your Smart Living Journey Starts Now"
          description="Book a free consultation and take the first step toward a smarter tomorrow."
          cta={{
            label: "Book Your Free Consultation",
            href: "/contact",
          }}
        />
      </div>
    </section>
  );
}
