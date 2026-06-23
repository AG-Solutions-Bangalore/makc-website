import { useState, useEffect } from "react";
import { 
  Play, 
  Pause, 
  X, 
  Sparkles, 
  CheckCircle2, 
  Loader2, 
  Info,
  CalendarClock,
  Sliders,
  Lock,
  Fan,
  Bell,
  Layers,
  ArrowRight,
  ShieldAlert,
  BellRing,
  Smartphone,
  ChevronRight
} from "lucide-react";


// Import custom UI components
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

// Import shared common components
import SolutionHero from "@/components/common/SolutionHero";
import OneTouchSection from "@/components/common/OneTouchSection";
import TrendingCarousel from "@/components/common/TrendingCarousel";
import ConnectBanner from "@/components/common/ConnectBanner";

// Import images
import serviceAutomationImg from "@/assets/images/home_v2/service_automation.png";
import villaNightImg from "@/assets/images/home_v2/contact_villa_night.png";
import serviceLightingImg from "@/assets/images/home_v2/service_lighting.png";
import whyChooseUsImg from "@/assets/images/home_v2/why_choose_us.png";
import projectVillasImg from "@/assets/images/home_v2/project_villas.png";
import projectApartmentsImg from "@/assets/images/home_v2/project_apartments.png";
import projectFarmhousesImg from "@/assets/images/home_v2/project_farmhouses.png";
import projectPenthousesImg from "@/assets/images/home_v2/project_penthouses.png";
import projectCommercialImg from "@/assets/images/home_v2/project_commercial.png";

export default function AutomationPage() {
  const [activeFeature, setActiveFeature] = useState("scheduling");
  
  // Mock video player states
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoProgress, setVideoProgress] = useState(0);
  const [videoTime, setVideoTime] = useState(0);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isPlaying) {
      interval = setInterval(() => {
        setVideoProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false);
            setVideoTime(0);
            return 0;
          }
          return prev + 1.5;
        });
        setVideoTime((prev) => prev + 1);
      }, 500);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

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
      id: "notifications",
      title: "Live Notifications",
      icon: Bell,
      desc: "Get real-time push alerts when motion is detected, doors are unlocked, or energy usage spikes, keeping you connected and in control of your home's integrity 24/7.",
    },
    {
      id: "scenes",
      title: "Custom Scenes",
      icon: Layers,
      desc: "Create complex multi-device routines. A single tap on 'Good Night' can lock your doors, turn off all main zone lights, arm security sensors, and adjust thermostats to sleep settings.",
    },
  ];

  const oneTouchItems = [
    {
      title: "Simplify All Your Daily Routine Tasks",
      desc: "With a single click, manage your lights, thermostats, and more, streamlining your daily chores.",
      icon: Sparkles,
      iconColorClass: "text-accent-blue bg-accent-blue/10 border-accent-blue/20",
    },
    {
      title: "Remain Stress-Free",
      desc: "Monitor your devices from anywhere, anytime, ensuring that your home is always secure and energy-efficient.",
      icon: CheckCircle2,
      iconColorClass: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
    },
    {
      title: "Your Security is Our Priority",
      desc: "Our smart security solutions provide robust protection for your home and your peace of mind.",
      icon: ShieldAlert,
      iconColorClass: "text-red-500 bg-red-500/10 border-red-500/20",
    },
    {
      title: "Get Real-Time Updates",
      desc: "Stay informed with instant updates and alerts, keeping you connected to your home no matter where you are.",
      icon: BellRing,
      iconColorClass: "text-amber-500 bg-amber-500/10 border-amber-500/20",
    },
    {
      title: "Automate Everyday Events",
      desc: "Save time and energy by automating repetitive tasks, like turning on lights as you approach home.",
      icon: CalendarClock,
      iconColorClass: "text-cyan-500 bg-cyan-500/10 border-cyan-500/20",
    },
    {
      title: "Access Anywhere, Anytime",
      desc: "Control your devices remotely, ensuring your home is ready to welcome you, no matter when you arrive.",
      icon: Smartphone,
      iconColorClass: "text-indigo-500 bg-indigo-500/10 border-indigo-500/20",
    },
  ];

  const trendingProducts = [
    {
      id: "cl-7",
      name: "CL-7 Elite",
      tag: "Interactive Touch Panel",
      img: projectApartmentsImg,
      desc: "A stunning bezel-less control console featuring high-definition haptic response, allowing effortless management of lighting, climate, and security with a single interface.",
    },
    {
      id: "KB3_2651",
      name: "KB3_2651",
      tag: "Tactile Smart Keypad",
      img: projectFarmhousesImg,
      desc: "Premium mechanical smart switches with back-lit indicators, finished in brush champagne metal. Perfectly integrates with premium custom scenes.",
    },
    {
      id: "automation-4",
      name: "Automation-4 Hub",
      tag: "Central Processor Unit",
      img: projectPenthousesImg,
      desc: "The hyper-fast central brain of your smart home network. Seamlessly processes Zigbee, Wi-Fi, and Bluetooth devices with zero latency and robust local processing.",
    },
    {
      id: "THE_6605",
      name: "THE_6605 Panel",
      tag: "Premium Glass Dimmer",
      img: projectCommercialImg,
      desc: "An elegant glass-surface interface specifically designed for fluid dimming operations, multi-room zoning, and automated lighting profiles.",
    },
  ];

  const formatTime = (secs: number) => {
    const minutes = Math.floor(secs / 60);
    const seconds = secs % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="pt-24 lg:pt-32 pb-16 min-h-screen bg-bg-main text-text-main overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* REUSABLE HERO SECTION */}
        <SolutionHero 
          badgeText="Next-Gen Home Automation"
          badgeIcon={Sparkles}
          headingNormal="Future of Living with"
          headingHighlighted="Smart Home Devices"
          subtitle="Experience a more convenient lifestyle with our advanced Smart Home Devices. Elevate comfort, enhance security, and save energy effortlessly."
          imageSrc={serviceAutomationImg}
          imageTag="Premium Switch series"
          imageTitle="THE_6605 Glass Dimmer"
          imageDesc="Our modern brush finish luxury switch interfaces designed to elevate modern interior styles."
          formTitle="Request Consultation"
          formSubtitle="Connect with our design engineers to plan your automated smart space."
          formButtonText="Schedule Consultation"
          formToastMessage="Thank you! Our home automation experts will contact you shortly."
        />

        {/* CORE CONCEPTS SECTION */}
        <section className="border-t border-border-main/50 pt-20 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-accent-blue text-xs font-bold uppercase tracking-widest block mb-3">Core Technology</span>
              <h2 className="text-4xl sm:text-5xl font-serif font-bold tracking-tight text-text-main mb-6 leading-tight">
                What is a Smart Home Device and How it Works?
              </h2>
              <p className="text-text-muted text-base sm:text-lg leading-relaxed mb-6 font-medium">
                The heart of modern living – Smart Home Devices. But what exactly are they, and how do they work?
              </p>
              
              <div className="space-y-6 text-sm text-text-muted leading-relaxed">
                <div className="border-l-2 border-accent-blue pl-4">
                  <h4 className="font-bold text-text-main mb-1.5 text-sm uppercase tracking-wide">Introducing Smart Home Devices</h4>
                  <p>
                    Smart Home Devices, often called the “magic” behind home automation, are the brainy gadgets that turn your living space into an intelligent haven. These ingenious devices connect to your home network, allowing you to control them remotely via your smartphone, tablet, or voice commands. From lights to locks, thermostats to cameras, they are designed to make your daily life simpler, safer, and more enjoyable.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              {/* Mock video card */}
              <div 
                onClick={() => { if(!isPlaying) setIsPlaying(true); }}
                className="relative rounded-3xl overflow-hidden aspect-video lg:aspect-[4/3] bg-bg-surface border border-border-main apple-border-shine shadow-xl group cursor-pointer"
              >
                {!isPlaying ? (
                  <>
                    <img 
                      src={villaNightImg} 
                      alt="Smart Experience Villa Video" 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/55 backdrop-blur-[1px] transition-all duration-300 group-hover:bg-black/45" />
                    
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                      <div className="w-16 h-16 rounded-full bg-accent-blue/95 hover:bg-accent-blue text-white flex items-center justify-center shadow-[0_4px_25px_rgba(10,132,255,0.4)] group-hover:scale-110 active:scale-95 transition-all duration-300 mb-4 cursor-pointer">
                        <Play className="w-7 h-7 fill-current translate-x-0.5" />
                      </div>
                      <span className="text-white text-xs font-bold uppercase tracking-widest">Watch How It Works</span>
                      <span className="text-white/60 text-[10px] mt-1">1:30 min experience video</span>
                    </div>
                  </>
                ) : (
                  // Active Interactive Mock Video Player UI
                  <div className="absolute inset-0 bg-black flex flex-col justify-between p-4 font-mono select-none">
                    <div className="flex items-center justify-between text-white/70 text-xs">
                      <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full backdrop-blur-md">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                        <span>SIMULATED VIDEO PLAYBACK</span>
                      </div>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsPlaying(false);
                          setVideoProgress(0);
                          setVideoTime(0);
                        }}
                        className="p-1 hover:bg-white/10 rounded-full transition-all"
                      >
                        <X className="w-5 h-5 text-white" />
                      </button>
                    </div>

                    <div className="flex flex-col items-center text-center p-4">
                      {videoProgress < 20 ? (
                        <div className="space-y-2">
                          <Loader2 className="w-8 h-8 text-accent-blue animate-spin mx-auto" />
                          <p className="text-xs text-white/50">Establishing connection to Villa CCTV & Lights...</p>
                        </div>
                      ) : videoProgress < 60 ? (
                        <div className="space-y-1">
                          <Sparkles className="w-10 h-10 text-gold-primary animate-bounce mx-auto" />
                          <p className="text-sm font-serif font-bold text-white">Scene Action: "Welcome Home" Mode</p>
                          <p className="text-xs text-white/60">System lighting levels fading to 40% & climate active</p>
                        </div>
                      ) : (
                        <div className="space-y-1">
                          <CheckCircle2 className="w-10 h-10 text-green-500 animate-pulse mx-auto" />
                          <p className="text-sm font-serif font-bold text-white">Security Verification Active</p>
                          <p className="text-xs text-white/60">Perimeter locks engaged. Smart sensors online.</p>
                        </div>
                      )}
                    </div>

                    {/* Controls overlay */}
                    <div className="bg-black/60 border border-white/10 rounded-xl p-3 backdrop-blur-md space-y-2">
                      <div className="w-full bg-white/20 h-1 rounded-full overflow-hidden">
                        <div className="bg-accent-blue h-full transition-all duration-300" style={{ width: `${videoProgress}%` }} />
                      </div>
                      <div className="flex items-center justify-between text-[10px] text-white/60">
                        <div className="flex items-center gap-3">
                          <button 
                            onClick={(e) => { e.stopPropagation(); setIsPlaying(!isPlaying); }} 
                            className="text-white hover:text-accent-blue transition-colors"
                          >
                            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                          </button>
                          <span className="text-white/50 font-sans">{formatTime(videoTime)} / 0:35</span>
                        </div>
                        <span className="text-[9px] bg-accent-blue/20 text-accent-blue border border-accent-blue/30 px-2 py-0.5 rounded font-sans uppercase">Demo Stream</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* HOW SMART DEVICES OPERATE SECTION */}
        <section className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            
            {/* Card A: How Smart Devices Operate */}
            <div className="bg-accent-blue/5 border border-accent-blue/15 hover:border-accent-blue/30 p-8 sm:p-10 rounded-3xl apple-border-shine flex flex-col justify-between transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
              <div>
                <div className="w-12 h-12 rounded-full bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center text-accent-blue mb-6">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-text-main mb-4">How Smart Devices Operate?</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Have you ever heard of smart devices? They’re like little digital helpers that do what you want them to do. They use fancy wireless tech like Wi-Fi, Bluetooth, or Zigbee to talk to a central hub or your phone. And they’re super smart – they have sensors and processors that let them collect data, process it, and respond in a flash. Like a thermostat that learns your temperature preferences or a smart lock that keeps your home safe with just a tap on your phone. Pretty cool, huh?
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-border-main/40 flex items-center gap-2 text-xs font-bold text-accent-blue tracking-wider uppercase">
                <span>Local Edge Computing</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>

            {/* Card B: Ecosystem offerings */}
            <div className="bg-bg-surface border border-border-main hover:border-border-main/80 p-8 sm:p-10 rounded-3xl apple-border-shine flex flex-col justify-between transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
              <div>
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-500 mb-6">
                  <Info className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-text-main mb-4">MAKc Automation Offerings</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  MAKc Automation offers a wide range of Smart Home Devices that can turn your home into an innovative and convenient space. Our devices can assist you in enhancing your security, reducing energy consumption, and making your daily routine smoother. We focus on seamless protocol integrations so you can control your entire architecture with absolutely zero friction.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-border-main/40 flex items-center gap-2 text-xs font-bold text-cyan-500 tracking-wider uppercase">
                <span>Multi-Protocol Integrations</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>

          </div>
        </section>

        {/* DO MORE WITH OUR SMART SOLUTIONS (INTERACTIVE BENTO TABS) */}
        <section className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-accent-blue text-xs font-bold uppercase tracking-widest block mb-3">Custom Features</span>
            <h2 className="text-4xl font-serif font-bold tracking-tight text-text-main mb-4">Do More with Our Smart Solutions</h2>
            <p className="text-text-muted text-sm leading-relaxed">
              Our Smart Home Devices open up a world of endless possibilities. Dive into the extraordinary, where control and customization know no bounds.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Image Card */}
            <div className="lg:col-span-5 relative rounded-3xl overflow-hidden min-h-[300px] lg:min-h-full border border-border-main apple-border-shine group">
              <img 
                src={serviceLightingImg} 
                alt="Cozy Smart Lighting Room" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 z-10">
                <span className="text-[10px] text-accent-blue font-bold uppercase tracking-widest">Active Scenario</span>
                <h4 className="text-white text-2xl font-serif font-bold mt-2">Personalized Atmosphere</h4>
                <p className="text-white/80 text-xs mt-1.5 leading-relaxed">
                  Dim lighting, adjust acoustics, and set the perfect thermostat parameters automatically based on preset behaviors.
                </p>
              </div>
            </div>

            {/* Right Tabs Panel */}
            <div className="lg:col-span-7 bg-bg-surface border border-border-main rounded-3xl p-6 sm:p-8 lg:p-10 apple-border-shine flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-serif font-bold text-text-main mb-6 pb-3 border-b border-border-main/50">Feature Control Hub</h3>
                
                {/* Horizontal / Grid selectors */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                  {features.map((feat) => {
                    const IconComponent = feat.icon;
                    const isActive = activeFeature === feat.id;
                    return (
                      <button
                        key={feat.id}
                        onClick={() => setActiveFeature(feat.id)}
                        className={`flex items-center gap-3 p-3 rounded-xl border text-xs font-semibold tracking-wide transition-all cursor-pointer select-none text-left ${
                          isActive 
                            ? "bg-accent-blue border-accent-blue text-white shadow-[0_4px_12px_rgba(10,132,255,0.25)]" 
                            : "bg-bg-main border-border-main hover:border-accent-blue/30 text-text-muted hover:text-text-main"
                        }`}
                      >
                        <IconComponent className={`w-4.5 h-4.5 shrink-0 ${isActive ? "text-white" : "text-text-muted group-hover:text-accent-blue"}`} />
                        <span>{feat.title}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Display active feature details */}
                {features.map((feat) => {
                  if (feat.id !== activeFeature) return null;
                  return (
                    <div key={feat.id} className="animate-in fade-in slide-in-from-bottom-2 duration-300 space-y-4">
                      <div className="flex items-center gap-3">
                        <span className="w-2.5 h-2.5 rounded-full bg-accent-blue animate-ping" />
                        <h4 className="text-lg font-serif font-bold text-text-main">{feat.title} Operation</h4>
                      </div>
                      <p className="text-sm text-text-muted leading-relaxed font-medium">
                        {feat.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 pt-6 border-t border-border-main/50 flex flex-wrap items-center justify-between gap-4 text-xs">
                <span className="text-text-muted font-medium">Want to integrate customized control?</span>
                <a 
                  href="#lead-form-scroll" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("phone")?.focus();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="flex items-center gap-1.5 font-bold text-accent-blue hover:underline uppercase tracking-wider"
                >
                  <span>Build custom layout</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* REUSABLE ONE-TOUCH GRID */}
        <OneTouchSection 
          title="Enjoy One-Touch Control of Everyday Life"
          subtitle="MAKc Automation offers Smart Home Devices that aim to make your life easier, safer and more enjoyable. Elevate your daily routine with these devices."
          items={oneTouchItems}
        />

        {/* 3-CARD HIGHLIGHTS */}
        <section className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Highlight 1: Seamless Control */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] md:aspect-[3/4] border border-border-main apple-border-shine group shadow-xl">
              <img 
                src={serviceLightingImg} 
                alt="Seamless Control Interface" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <span className="text-[9px] bg-accent-blue text-white font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full mb-2.5 inline-block">Integration</span>
                <h3 className="text-xl font-serif font-bold text-white mb-2">Seamless Control</h3>
                <p className="text-white/80 text-xs leading-relaxed">
                  No more arguments over who should turn OFF the Lights. Complete automation at your fingertips.
                </p>
              </div>
            </div>

            {/* Highlight 2: Blend with Interior */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] md:aspect-[3/4] border border-border-main apple-border-shine group shadow-xl">
              <img 
                src={whyChooseUsImg} 
                alt="Minimalist Living Space design" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <span className="text-[9px] bg-cyan-500 text-white font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full mb-2.5 inline-block">Design</span>
                <h3 className="text-xl font-serif font-bold text-white mb-2">Blend with any Interior</h3>
                <p className="text-white/80 text-xs leading-relaxed">
                  Right combination for any Interior Space. Keypads and dimmers customized to match your colors.
                </p>
              </div>
            </div>

            {/* Highlight 3: Luxurious Design */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] md:aspect-[3/4] border border-border-main apple-border-shine group shadow-xl">
              <img 
                src={projectVillasImg} 
                alt="Luxury Smart Villa exterior" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <span className="text-[9px] bg-amber-500 text-white font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full mb-2.5 inline-block">Aesthetics</span>
                <h3 className="text-xl font-serif font-bold text-white mb-2">Luxurious Design</h3>
                <p className="text-white/80 text-xs leading-relaxed">
                  Gives your home an aesthetic design. Sleek metallic finishes and elegant customizable glass switches.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* REUSABLE PRODUCT CAROUSEL */}
        <TrendingCarousel 
          title="Trending smart components"
          brandLabel="MAKc System v2"
          products={trendingProducts}
        />

        {/* FAQs SECTION */}
        <section className="mb-24 max-w-4xl mx-auto border-t border-border-main/50 pt-20">
          <div className="text-center mb-12">
            <span className="text-accent-blue text-xs font-bold uppercase tracking-widest block mb-3">Support Center</span>
            <h2 className="text-4xl font-serif font-bold tracking-tight text-text-main mb-4">Frequently Asked Questions (FAQs)</h2>
          </div>

          <div className="bg-bg-surface/50 border border-border-main rounded-3xl p-6 sm:p-8 apple-border-shine">
            <Accordion type="single" collapsible className="w-full">
              
              <AccordionItem value="faq-1" className="border-border-main/50">
                <AccordionTrigger className="text-base font-semibold text-text-main hover:text-accent-blue hover:no-underline py-5 text-left">
                  What distinguishes Smart Home Devices from regular devices?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-text-muted leading-relaxed pb-5">
                  Smart home devices are equipped with internal processors, sensors, and wireless radios (Wi-Fi, Bluetooth, or Zigbee). This enables them to capture data, schedule events, communicate with other household units, and be configured or triggered remotely via smartphones or voice commands. Regular devices lack networking features and require manual switches.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-2" className="border-border-main/50">
                <AccordionTrigger className="text-base font-semibold text-text-main hover:text-accent-blue hover:no-underline py-5 text-left">
                  Can I integrate smart devices with voice assistants?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-text-muted leading-relaxed pb-5">
                  Yes, absolutely. All our premium smart home systems are engineered for full cross-platform compatibility, integrating seamlessly with popular digital hubs including Apple Siri (HomeKit), Amazon Alexa, and Google Assistant for fluid hands-free voice commands.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-3" className="border-b-0">
                <AccordionTrigger className="text-base font-semibold text-text-main hover:text-accent-blue hover:no-underline py-5 text-left">
                  How do I set up and control my smart devices?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-text-muted leading-relaxed pb-5">
                  The initial technical configuration and network setup are entirely managed by MAKc Automation's certified design and field engineers. Once the installation is complete, you can control and customize all features using our sleek mobile application, wall-mounted touch panels, or intuitive voice integration.
                </AccordionContent>
              </AccordionItem>

            </Accordion>
          </div>
        </section>

        {/* REUSABLE BANNER CTA */}
        <ConnectBanner 
          title="Connect With Us"
          description="Our experts are ready to design your automated home. Contact us via phone or email for custom architecture pricing."
        />

      </div>
    </div>
  );
}
