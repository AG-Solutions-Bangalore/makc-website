import React from "react";

interface OneTouchItem {
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  iconColorClass?: string; // e.g. "text-accent-blue bg-accent-blue/10 border-accent-blue/20"
}

interface OneTouchSectionProps {
  title?: string;
  subtitle?: string;
  items: OneTouchItem[];
}

export default function OneTouchSection({
  title = "Enjoy One-Touch Control of Everyday Life",
  subtitle = "MAKc Automation offers solutions that aim to make your life easier, safer and more enjoyable.",
  items,
}: OneTouchSectionProps) {
  const isFiveItems = items.length === 5;

  return (
    <section className="bg-bg-surface/30 border-y border-border-main/50 py-20 mb-24 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 no-reveal">
      <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll reveal-up" data-reveal-duration="0.8s">
        <span className="text-accent-blue text-xs font-bold uppercase tracking-widest block mb-3">Convenience & Control</span>
        <h2 className="text-4xl font-serif font-bold tracking-tight text-text-main mb-4">{title}</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          {subtitle}
        </p>
      </div>

      <div className={
        isFiveItems 
          ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6" 
          : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
      }>
        {items.map((item, index) => {
          const IconComponent = item.icon;
          const colorClass = item.iconColorClass || "text-accent-blue bg-accent-blue/10 border-accent-blue/20";
          
          return (
            <div
              key={index}
              className="bg-bg-surface border border-border-main p-6 sm:p-8 rounded-3xl transition-all hover:-translate-y-1 shadow-sm group reveal-on-scroll reveal-up"
              data-reveal-delay={`${index * 100}ms`}
              data-reveal-duration="0.6s"
            >
              {/* Icon wrapper - Clean rounded-full with Apple Shine */}
              <div className={`w-10 h-10 rounded-full border flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300 apple-border-shine ${colorClass}`}>
                <IconComponent className="w-4.5 h-4.5" />
              </div>
              <h3 className="text-base sm:text-lg font-serif font-bold text-text-main mb-2.5">{item.title}</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
