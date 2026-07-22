import React from "react";
import LeadForm from "./LeadForm";
import { Sparkles } from "lucide-react";

interface SolutionHeroProps {
  badgeText: string;
  badgeIcon: React.ComponentType<{ className?: string }>;
  headingNormal: string;
  headingHighlighted: string;
  subtitle: string;
  imageSrc: string;
  imageTag: string;
  imageTitle: string;
  imageDesc: string;
  formTitle?: string;
  formSubtitle?: string;
  formButtonText?: string;
  formToastMessage?: string;
  socialProofText?: string;
}

export default function SolutionHero({
  badgeText,
  badgeIcon: BadgeIcon,
  headingNormal,
  headingHighlighted,
  subtitle,
  imageSrc,
  imageTag,
  imageTitle,
  imageDesc,
  formTitle,
  formSubtitle,
  formButtonText,
  formToastMessage,
  socialProofText,
}: SolutionHeroProps) {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24 no-reveal">
      <div className="lg:col-span-7 flex flex-col justify-center reveal-on-scroll reveal-left" data-reveal-duration="0.9s">
        
        {/* Clean Rounded-Full Icon with Apple Shine */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full border border-border-main bg-accent-blue/10 flex items-center justify-center text-accent-blue apple-border-shine shrink-0">
            <BadgeIcon className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] text-accent-blue font-bold uppercase tracking-wider">
              {badgeText}
            </span>
            {socialProofText && (
              <span className="text-[9px] text-text-muted mt-0.5">
                {socialProofText}
              </span>
            )}
          </div>
        </div>
 
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-serif tracking-tight leading-[1.15] mb-6">
          {headingNormal} <br />
          <span className="text-accent-blue bg-gradient-to-r from-accent-blue to-cyan-500 bg-clip-text text-transparent">
            {headingHighlighted}
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-text-muted max-w-xl leading-relaxed mb-8">
          {subtitle}
        </p>
        
        {/* Reusable Lead Form */}
        <LeadForm 
          title={formTitle}
          subtitle={formSubtitle}
          buttonText={formButtonText}
          toastMessage={formToastMessage}
        />
      </div>
 
      {/* Visual device panel mockup - Clean border, no apple shine */}
      <div className="lg:col-span-5 relative reveal-on-scroll reveal-right" data-reveal-duration="0.9s">
        <div className="dark relative rounded-3xl overflow-hidden border border-border-main shadow-2xl group">
          <img 
            src={imageSrc} 
            alt={imageTitle} 
            title={imageTitle}
            className="w-full object-cover aspect-[4/3] lg:aspect-square transform group-hover:scale-102 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full border border-white/20 bg-black/40 flex items-center justify-center text-accent-blue apple-border-shine">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="text-[10px] text-white font-bold uppercase tracking-widest">{imageTag}</span>
            </div>
            <h4 className="text-white text-xl font-serif font-bold mt-2 drop-shadow">{imageTitle}</h4>
            <p className="text-white/70 text-xs mt-1">{imageDesc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
