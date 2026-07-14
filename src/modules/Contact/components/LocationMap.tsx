import { ArrowRight } from "lucide-react";

export function LocationMap() {
  return (
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
  );
}
