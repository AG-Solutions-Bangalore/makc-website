import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  ArrowRight,
  // Info,
  CalendarClock,
  Fan,
  Layers,
  Lock,
  Sliders,
  PhoneCall,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

gsap.registerPlugin(useGSAP);

// Import custom UI components
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Import shared common components
// import OneTouchSection from "@/components/common/OneTouchSection";
import AutomationShowcase from "@/components/common/AutomationShowcase";
import InstagramEmbed from "@/components/common/InstagramEmbed";
import CurtainAutomationSection from "@/components/common/CurtainAutomationSection";
import ElectricalAutomationSection from "@/components/common/ElectricalAutomationSection";
import GateAutomationSection from "@/components/common/GateAutomationSection";
import DoorAutomationSection from "@/components/common/DoorAutomationSection";
import { submitPhoneEnquiry } from "@/modules/Contact/api/contact.api";
import { toast } from "react-hot-toast";
import useSEO from "@/hooks/useSEO";
import { SEO_ROUTES } from "@/config/seoData";
import { COMPANY_INFO } from "@/config/constants";
import { getImageUrl } from "@/utils/image";

// Import images
const projectVillasImg = getImageUrl("project_villas.webp");

export default function AutomationPage() {
  useSEO(SEO_ROUTES["/automation"]);

  const [activeFeature, setActiveFeature] = useState("scheduling");
  const [inlinePhone, setInlinePhone] = useState("");
  const [inlinePhoneError, setInlinePhoneError] = useState("");
  const [isInlineSubmitting, setIsInlineSubmitting] = useState(false);
  const [isInlineSubmitted, setIsInlineSubmitted] = useState(false);

  const handleInlineCallbackSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const digitsOnly = inlinePhone.replace(/\D/g, "");

    const isValidIndianMobile = /^[6-9]\d{9}$/.test(digitsOnly);
    const isAllSameDigit = /^(\d)\1{9}$/.test(digitsOnly);

    if (!isValidIndianMobile || isAllSameDigit) {
      setInlinePhoneError("Please enter a valid 10-digit mobile number");
      return;
    }

    setIsInlineSubmitting(true);
    setInlinePhoneError("");
    try {
      await submitPhoneEnquiry(digitsOnly);
      setIsInlineSubmitted(true);
      toast.success("Callback request submitted successfully!");
    } catch (err: any) {
      console.error("Callback API error:", err);
      toast.error(
        err?.response?.data?.message ||
          "Failed to submit request. Please try again.",
      );
    } finally {
      setIsInlineSubmitting(false);
    }
  };

  const heroRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.7 },
      });

      /* Badge slides down from above */
      tl.from(
        ".hero-badge",
        { y: -24, autoAlpha: 0, duration: 0.5, ease: "back.out(1.5)" },
        0.2,
      );

      /* Headline each line staggers up */
      tl.from(
        ".hero-heading",
        { y: 60, autoAlpha: 0, duration: 0.9, ease: "expo.out" },
        0.4,
      );

      /* Subtitle fades + rises */
      tl.from(".hero-subtitle", { y: 28, autoAlpha: 0 }, "-=0.55");

      /* Checklist items stagger */
      tl.from(
        ".hero-check",
        {
          x: -24,
          autoAlpha: 0,
          stagger: 0.12,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.45",
      );
    },
    { scope: heroRef },
  );

  // Mock video player states

  const features = [
    {
      id: "scheduling",
      title: "Scheduling",
      icon: CalendarClock,
      desc: "Shape your daily routine with precision. Schedule your devices to sync with your activities. Let your lights create the perfect ambiance, or let your thermostat manage the temperature, all on a set schedule.",
    },
    {
      id: "dimmer",
      title: "Smart Dimmer",
      icon: Sliders,
      desc: "Customize light intensity dynamically based on your mood or natural daylight. Set custom presets for dining, movie nights, or working hours to optimize focus and relaxation.",
    },
    {
      id: "lock",
      title: "Child Lock",
      icon: Lock,
      desc: "Safeguard your smart touch panels. Temporarily disable physical interface controls to prevent children from accidentally altering smart scenes or climate configurations.",
    },
    {
      id: "fan",
      title: "Fan Speed Control",
      icon: Fan,
      desc: "Multi-stage automated control for ceiling fans and climate fans. Synchronize motor speeds dynamically with humidity and ambient temperature sensors for absolute comfort.",
    },

    {
      id: "scenes",
      title: "Custom Scenes",
      icon: Layers,
      desc: "Create complex multi-device routines. A single tap on 'Good Night' can lock your doors, turn off all main zone lights, arm security sensors, and adjust thermostats to sleep settings.",
    },
  ];

  return (
    <div className="min-h-screen bg-bg-main text-text-main overflow-hidden transition-colors duration-300">
      {/* FULL-WIDTH HERO SECTION */}
      <section
        ref={heroRef}
        className="relative w-full flex items-start justify-start bg-cover bg-no-repeat transition-colors duration-300 [background-position:85%_center] sm:min-h-[90vh] sm:items-center sm:bg-center lg:min-h-screen"
        style={{
          backgroundImage: `url('${getImageUrl("automation_banner.webp")}')`,
        }}
      >
        {/* Dark overlay across both light and dark mode for consistent premium contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40 sm:from-black/85 sm:via-black/60 sm:to-black/20 pointer-events-none" />

        {/* Bottom gradient blend into next section (dark mode only so light mode doesn't wash out hero bottom) */}
        <div className="hidden dark:block absolute bottom-0 left-0 right-0 h-24 md:h-36 bg-gradient-to-t from-bg-main to-transparent pointer-events-none z-[5]" />

        {/* Hero content container */}
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10 pt-24 sm:pt-24 lg:pt-28 pb-10 sm:pb-14 lg:pb-20 flex flex-col justify-start sm:justify-center sm:min-h-[85vh] lg:min-h-screen">
          <div className="max-w-3xl space-y-4 sm:space-y-6">
            {/* Badge */}
            <div className="hero-badge inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 !text-white text-white! text-[10px] sm:text-xs tracking-widest uppercase font-bold shadow-md w-fit">
              <span className="text-emerald-400 font-extrabold text-sm">
                #1
              </span>{" "}
              Choice for Smart Automation
            </div>

            {/* Main Heading */}
            <h1 className="hero-heading text-[30px] leading-[1.08] sm:leading-[1.1] sm:text-4xl md:text-5xl lg:text-6xl font-bold font-sans tracking-tight !text-white text-white! drop-shadow-[0_3px_12px_rgba(0,0,0,0.85)] text-balance">
              Smart Home <br />
              Automation
            </h1>

            {/* Subtitle */}
            <div className="hero-subtitle max-w-2xl">
              <p className="text-[15px] sm:text-lg !text-white/95 text-white! font-normal sm:font-medium leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)]">
                Smart homes are not about gadgets — they are about how you live.
                With almost a decade of experience and 800+ projects delivered
                across homes and select commercial spaces, here's what you can
                expect from us.
                <img
                  src={getImageUrl("star.webp")}
                  alt="Five-star rating icon representing premium home automation services"
                  title="5 Star Home Automation Quality"
                  className="w-5 h-5 sm:w-6 sm:h-6 inline-block ml-2 mb-1 select-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                />
              </p>
            </div>

            {/* Features check list */}
            <div className="space-y-1 pt-1 sm:space-y-4 sm:pt-2">
              {[
                "Thoughtful Design & Planning",
                "Professional Execution, Installation and Configuration",
                "Seamless Delivery with Reliable After-Sales Support",
              ].map((text, idx) => (
                <div
                  key={idx}
                  className="hero-check flex items-start gap-3 sm:items-center"
                >
                  <div className="mt-0.5 sm:mt-0 flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500 !text-white text-white! shrink-0 shadow-md">
                    <svg
                      className="w-3.5 h-3.5 stroke-[3] !text-white text-white!"
                      style={{ color: "#ffffff", stroke: "#ffffff" }}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="!text-white text-white! font-medium text-[13px] leading-snug sm:text-base drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)]">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FULL WIDTH AUTOMATION SHOWCASE SECTION */}
      <AutomationShowcase initialSlideId="01" accentColor="#00A551" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-8 sm:pt-14 lg:pt-24">
        {/* ── ELECTRICAL AUTOMATION SECTION ── */}
        <ElectricalAutomationSection />

        {/* ── GATE AUTOMATION SECTION ── */}
        <GateAutomationSection />

        {/* ── DOOR AUTOMATION SECTION ── */}
        <DoorAutomationSection />

        {/* ── CURTAIN AUTOMATION SECTION ── */}
        <CurtainAutomationSection />

        {/* CORE CONCEPTS SECTION */}

        {/* HOW SMART DEVICES OPERATE SECTION */}
        {/* <section className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            
            
            <div className="bg-accent-blue/5 border border-accent-blue/15 hover:border-accent-blue/35 hover:-translate-y-1 p-8 sm:p-10 rounded-3xl flex flex-col justify-between transition-all duration-500 shadow-md hover:shadow-xl group">
              <div>
                <div className="w-12 h-12 rounded-full bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center text-accent-blue mb-6 group-hover:scale-105 transition-transform duration-300">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-text-main mb-4 font-sans">How Smart Devices Operate?</h3>
                <p className="text-sm text-text-muted leading-relaxed font-medium">
                  Smart devices act as digital helpers, talking to a central hub or phone via wireless protocols like Wi-Fi, Zigbee, or Bluetooth. Equipped with internal sensors and processors, they collect ambient data, process it in real-time, and act instantly. Whether it's a thermostat auto-tuning your climate or a lock verifying your identity, it happens with zero friction.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-border-main/40 flex items-center gap-2 text-xs font-bold text-accent-blue tracking-wider uppercase">
                <span>Local Edge Computing</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
              </div>
            </div>

            <div className="bg-bg-surface border border-border-main hover:border-border-main/80 hover:-translate-y-1 p-8 sm:p-10 rounded-3xl flex flex-col justify-between transition-all duration-500 shadow-md hover:shadow-xl group">
              <div>
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-500 mb-6 group-hover:scale-105 transition-transform duration-300">
                  <Info className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-text-main mb-4 font-sans">MAKc Automation Offerings</h3>
                <p className="text-sm text-text-muted leading-relaxed font-medium">
                  MAKc Automation delivers highly-scalable Smart Home Devices designed to unify security, climate, lighting, and everyday tasks. We focus on seamless protocol integrations to tie your entire layout together. Control your whole environment from a single responsive screen or with simple hands-free voice requests.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-border-main/40 flex items-center gap-2 text-xs font-bold text-cyan-500 tracking-wider uppercase">
                <span>Multi-Protocol Integrations</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
              </div>
            </div>

          </div>
        </section> */}
        <section className="mb-10 sm:mb-16 lg:mb-24">
          {/* Header no eyebrow, strong typographic contrast */}
          {/* <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
            <h2 className="text-4xl sm:text-5xl font-bold text-text-main leading-[1.1] tracking-tight max-w-sm">
              Do More with Our Smart Solutions
            </h2>
            <p className="text-text-muted text-sm leading-relaxed max-w-[28ch] sm:text-right">
              Where control meets customization every feature designed around how you actually live.
            </p>
          </div> */}

          {/* Bento grid 3-col, left spans 2 rows */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Left: tall reel card */}
            <div className="lg:row-span-2 relative rounded-2xl overflow-hidden bg-black min-h-[520px] lg:min-h-0">
              <div className="absolute inset-0">
                <InstagramEmbed
                  reelUrl="https://www.instagram.com/reel/Dbt7nF7yjHG/"
                  fit
                />
              </div>
            </div>

            {/* Right top: Feature hub panel */}
            <div className="lg:col-span-2 bg-bg-surface border border-border-main/40 rounded-2xl p-7">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-base font-semibold text-text-main">
                  Feature Control Hub
                </h3>
                <span className="flex gap-1.5 items-center text-xs text-text-muted">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
                  Active
                </span>
              </div>

              {/* Tab pills: horizontally scrollable on mobile, wrapping on sm+ */}
              <div className="flex items-center gap-2 mb-6 overflow-x-auto flex-nowrap sm:flex-wrap scrollbar-none pb-1.5 -mx-2 px-2 sm:mx-0 sm:px-0 touch-pan-x snap-x">
                {features.map((feat) => {
                  const isActive = activeFeature === feat.id;
                  const IconComponent = feat.icon;
                  return (
                    <button
                      key={feat.id}
                      onClick={() => setActiveFeature(feat.id)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer shrink-0 snap-start whitespace-nowrap min-h-[36px] ${
                        isActive
                          ? "bg-accent-blue text-white! shadow-[0_2px_10px_rgba(10,132,255,0.25)]"
                          : "text-text-muted hover:text-text-main bg-bg-main border border-border-main/50 hover:border-border-main"
                      }`}
                    >
                      <IconComponent className="w-3.5 h-3.5 shrink-0" />
                      {feat.title}
                    </button>
                  );
                })}
              </div>

              {/* Active feature detail */}
              {features.map((feat) => {
                if (feat.id !== activeFeature) return null;
                const IconComponent = feat.icon;
                return (
                  <div
                    key={feat.id}
                    className="animate-in fade-in duration-200"
                  >
                    <div className="flex items-start gap-4 p-4 rounded-xl bg-bg-main border border-border-main/30">
                      <div className="w-9 h-9 rounded-lg bg-accent-blue/10 flex items-center justify-center text-accent-blue shrink-0">
                        <IconComponent className="w-4.5 h-4.5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-text-main mb-1">
                          {feat.title}
                        </h4>
                        <p className="text-sm text-text-muted leading-relaxed">
                          {feat.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right bottom: two side-by-side info cells */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Stat plain surface, no gradient hero-metric */}
              <div className="bg-bg-surface border border-border-main/40 rounded-2xl p-6 flex flex-col justify-between">
                <span className="text-text-muted text-xs font-medium mb-4">
                  Experience
                </span>
                <div>
                  <p className="text-text-main text-4xl sm:text-5xl font-bold leading-none">
                    800
                    <span className="text-2xl font-semibold text-text-muted">
                      +
                    </span>
                  </p>
                  <p className="text-text-muted text-sm mt-1">
                    Projects delivered
                  </p>
                </div>
              </div>

              {/* CTA cell */}
              <div className="bg-accent-blue rounded-2xl p-6 flex flex-col justify-between">
                <span className="text-white/70 text-xs font-medium mb-4">
                  Ready to start?
                </span>
                <div>
                  <p className="text-white! text-base font-bold leading-snug mb-4">
                    Build your custom automation layout
                  </p>
                  <Link
                    to="/contact"
                    title="Contact MAKc Automations"
                    className="inline-flex items-center gap-2 text-xs font-bold text-white/90 hover:text-white transition-colors duration-150 group"
                  >
                    Get a Quote
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-150" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------- SECTION 4 */}
        {/* <section className="mb-28">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2
              className="text-4xl sm:text-5xl font-bold text-text-main mb-4 leading-[1.1] tracking-tight"
              style={{ textWrap: "balance" } as React.CSSProperties}
            >
              One Touch. Total Control.
            </h2>
            <p className="text-text-muted text-base leading-relaxed">
              MAKc smart home devices make your life easier, safer, and more
              enjoyable. Elevate every room, every routine.
            </p>
          </div>

         
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
           
            <div className="divide-y divide-border-main/40">
              {oneTouchItems.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="flex items-start gap-5 py-6 group">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center border shrink-0 mt-0.5 transition-transform duration-200 group-hover:scale-105 ${item.iconColorClass}`}
                    >
                      <IconComponent className="w-[18px] h-[18px]" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-text-main mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-text-muted leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

           
            <div className="flex flex-col gap-4">
              <div className="relative rounded-2xl overflow-hidden aspect-[16/9] group">
                  <img
                  src={whyChooseUsImg}
                  alt="Smart switches and panels setup"
                  title="Home Automation Control Panel"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="text-white text-lg font-bold leading-snug">
                    Blends Any Interior
                  </h3>
                  <p className="text-white/85 text-sm mt-1 leading-relaxed">
                    Customized to match your finishes and palette perfectly.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative rounded-2xl overflow-hidden aspect-square group">
                  <img
                    src={serviceLightingImg}
                    alt="Industrial and Commercial Lighting Automation Solutions"
                    title="Lighting Automation Services"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                  <p className="absolute bottom-4 left-4 right-4 text-white text-xs font-semibold leading-snug">
                    Seamless Control
                  </p>
                </div>
                <div className="relative rounded-2xl overflow-hidden aspect-square group">
                  <img
                    src={projectVillasImg}
                    alt="Luxury smart villa exterior with automated lighting at entrance"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                  <p className="absolute bottom-4 left-4 right-4 text-white text-xs font-semibold leading-snug">
                    Luxurious Finish
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* FAQ + CTA */}
        <section className="mb-10 sm:mb-16 lg:mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
            {/* FAQ left 3 cols */}
            <div className="lg:col-span-3">
              <h2 className="text-3xl font-bold text-text-main mb-2 tracking-tight">
                Common Questions
              </h2>
              <p className="text-text-muted text-sm leading-relaxed mb-8">
                Everything you need to know before getting started.
              </p>

              <div className="bg-bg-surface border border-border-main/30 rounded-2xl overflow-hidden divide-y divide-border-main/30">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="faq-1" className="border-0 px-6">
                    <AccordionTrigger className="text-sm font-semibold text-text-main hover:text-accent-blue hover:no-underline py-5 text-left">
                      What distinguishes Smart Home Devices from regular
                      devices?
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-text-muted leading-relaxed pb-5">
                      Smart home devices carry internal processors, sensors, and
                      wireless radios (Wi-Fi, Bluetooth, or Zigbee). They
                      capture data, schedule events, and connect with other
                      household units all manageable remotely via smartphone or
                      voice. Regular devices need manual switches and have no
                      network awareness.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-2" className="border-0 px-6">
                    <AccordionTrigger className="text-sm font-semibold text-text-main hover:text-accent-blue hover:no-underline py-5 text-left">
                      Can I integrate smart devices with voice assistants?
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-text-muted leading-relaxed pb-5">
                      Yes. All our systems are engineered for full
                      cross-platform compatibility seamlessly integrating with
                      Apple Siri (HomeKit), Amazon Alexa, and Google Assistant
                      for hands-free control.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem
                    value="faq-3"
                    className="border-0 border-b-0 px-6"
                  >
                    <AccordionTrigger className="text-sm font-semibold text-text-main hover:text-accent-blue hover:no-underline py-5 text-left">
                      How do I set up and control my smart devices?
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-text-muted leading-relaxed pb-5">
                      MAKc's certified field engineers handle all configuration
                      and network setup. Once installed, you control everything
                      via our mobile app, wall-mounted touch panels, or voice
                      integration.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            {/* CTA card right 2 cols */}
            <div className="lg:col-span-2 lg:sticky lg:top-28">
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={projectVillasImg}
                  alt="Smart luxury villa exterior"
                  title="Luxury Smart Villa Exterior"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/75 to-black/60" />
                <div className="relative z-10 p-6 sm:p-8 flex flex-col min-h-[320px] sm:min-h-[380px] justify-between">
                  <div>
                    <h3 className="text-white! text-2xl font-bold leading-tight mb-3">
                      Ready to automate your home?
                    </h3>
                    <p className="text-white/65! text-sm leading-relaxed">
                      Our experts design a custom plan tailored to your space,
                      lifestyle, and budget at no obligation.
                    </p>
                  </div>
                  <div className="mt-8">
                    {!isInlineSubmitted ? (
                      <form
                        onSubmit={handleInlineCallbackSubmit}
                        className="space-y-3"
                      >
                        <div>
                          <label
                            htmlFor="cta-phone"
                            className="block text-white/75 text-[11px] font-bold uppercase tracking-wider mb-1.5"
                          >
                            Enter Your Mobile Number
                          </label>
                          <input
                            id="cta-phone"
                            type="tel"
                            required
                            maxLength={10}
                            value={inlinePhone}
                            onChange={(e) => {
                              const cleaned = e.target.value
                                .replace(/\D/g, "")
                                .slice(0, 10);
                              setInlinePhone(cleaned);
                              setInlinePhoneError("");
                            }}
                            placeholder="e.g. 9876543210"
                            className="w-full bg-black/60 border border-white/25 focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/30 rounded-xl px-4 py-2.5 text-white text-base sm:text-sm outline-none transition-all font-mono tracking-wider placeholder:text-white/35"
                          />
                          {inlinePhoneError && (
                            <p className="text-red-400 text-xs mt-1.5 font-medium">
                              {inlinePhoneError}
                            </p>
                          )}
                        </div>

                        <button
                          type="submit"
                          disabled={isInlineSubmitting}
                          className="w-full cursor-pointer flex items-center justify-center gap-2 h-11 rounded-xl bg-accent-blue text-white! text-xs font-bold uppercase tracking-wider hover:bg-accent-blue/90 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-[0_4px_15px_rgba(10,132,255,0.35)] disabled:opacity-70"
                        >
                          {isInlineSubmitting ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin" />
                              <span>Submitting...</span>
                            </>
                          ) : (
                            <>
                              <PhoneCall className="w-4 h-4" />
                              <span>Request Callback</span>
                            </>
                          )}
                        </button>
                      </form>
                    ) : (
                      <div className="text-center py-4 px-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 animate-in fade-in duration-300">
                        <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-3">
                          <CheckCircle2 className="w-6 h-6" />
                        </div>
                        <h4 className="text-white text-base font-bold mb-1">
                          Request Received!
                        </h4>
                        <p className="text-white/70 text-xs leading-relaxed mb-4">
                          Thank you! Our automation expert will call you shortly
                          on{" "}
                          <span className="font-semibold text-white font-mono">
                            {inlinePhone}
                          </span>
                          .
                        </p>
                        <button
                          type="button"
                          onClick={() => {
                            setIsInlineSubmitted(false);
                            setInlinePhone("");
                          }}
                          className="cursor-pointer text-xs text-white/80 hover:text-white underline underline-offset-4 transition-colors"
                        >
                          Submit another number
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
