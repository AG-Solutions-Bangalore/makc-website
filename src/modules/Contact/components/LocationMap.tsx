import { ArrowRight } from "lucide-react";

const ADDRESS = "141/6, 4th Main, 12th Cross Rd, BEML Layout, Brookefield, Bengaluru, Karnataka 560066";
const MAPS_QUERY = encodeURIComponent(ADDRESS);

export function LocationMap() {
  return (
    <div
      className="mt-6 lg:mt-8 relative h-[250px] lg:h-[320px] w-full rounded-3xl overflow-hidden border border-border-main/70 shadow-2xl group reveal-on-scroll reveal-up"
      data-reveal-duration="0.8s"
    >
      <div className="absolute top-4 right-4 z-20">
        <a
          href={`https://maps.google.com/?q=${MAPS_QUERY}`}
          target="_blank"
          rel="noreferrer"
          className="bg-bg-surface/80 backdrop-blur-xl border border-border-main shadow-[0_4px_15px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] text-text-main hover:text-accent-blue font-semibold text-xs py-2 px-4 rounded-lg flex items-center gap-2 hover:-translate-y-0.5 transition-all duration-300"
        >
          Open in Maps <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>

      <iframe
        src={`https://maps.google.com/maps?q=${MAPS_QUERY}&output=embed`}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="MAKc Automations Location — BEML Layout, Brookefield, Bengaluru"
        className="w-full h-full filter dark:grayscale dark:invert-[92%] dark:contrast-[83%] transition-all duration-500"
      />
    </div>
  );
}
