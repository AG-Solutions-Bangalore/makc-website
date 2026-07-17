import { useState, useEffect } from "react";
import {
  Unlock,
  Bell,
  Users,
  Eye,
  CheckCircle2,
  Sparkles,
  ShieldAlert,
  BellRing,
  CalendarClock,
  Smartphone,
  Shield,
  Flame,
  Moon,
} from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { getImageUrl } from "@/utils/image";
import OneTouchSection from "@/components/common/OneTouchSection";
import TrendingCarousel from "@/components/common/TrendingCarousel";
import { toast } from "react-hot-toast";

export default function OldSecuritySection() {
  const whyChooseUsImg = getImageUrl("why_choose_us.webp");
  const villaNightImg = getImageUrl("contact_villa_night.webp");
  const projectVillasImg = getImageUrl("project_villas.webp");
  const projectCommercialImg = getImageUrl("project_commercial.webp");
  const projectApartmentsImg = getImageUrl("project_apartments.webp");
  const projectFarmhousesImg = getImageUrl("project_farmhouses.webp");
  const projectPenthousesImg = getImageUrl("project_penthouses.webp");

  const trendingSecurity = [
    {
      id: "tre-4",
      name: "tre-4 motion sensor",
      tag: "Microwave + PIR Sensor",
      img: projectApartmentsImg,
      desc: "An intelligent motion tracker designed to prevent false alarms by correlating heat signals with physical movement sizes.",
    },
    {
      id: "tre-3",
      name: "tre-3 street siren",
      tag: "Audible & Visual Alert",
      img: projectFarmhousesImg,
      desc: "Dust and moisture-resistant high-decibel siren. Instantly triggers audible alarms and flashing LED strobes during alerts.",
    },
    {
      id: "tre-2",
      name: "tre-2 dome camera",
      tag: "2K HD Infrared Camera",
      img: projectPenthousesImg,
      desc: "Weatherproof surveillance dome camera with high-end night vision, tracking, and seamless smart-app streaming.",
    },
    {
      id: "auto-1",
      name: "auto-1 control pad",
      tag: "Tactile Smart Panel",
      img: projectCommercialImg,
      desc: "A wireless touch command interface designed to configure security partitions, bypass zones, and schedule automation presets.",
    },
  ];

  const oneTouchItems = [
    {
      title: "Simplify All Your Daily Routine Tasks",
      desc: "With a single click, manage your lights, thermostats, and more, streamlining your daily chores.",
      icon: Sparkles,
      iconColorClass:
        "text-accent-blue bg-accent-blue/10 border-accent-blue/20",
    },
    {
      title: "Remain Stress-Free",
      desc: "Monitor your devices from anywhere, anytime, ensuring that your home is always secure and energy-efficient.",
      icon: CheckCircle2,
      iconColorClass:
        "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
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

  const [activeCam, setActiveCam] = useState(0);
  const [isRecording] = useState(true);
  const [timeString, setTimeString] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString() + " - " + now.toLocaleDateString(),
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const cameraFeeds = [
    {
      id: 0,
      name: "CAM-01: Main Entrance Gate",
      status: "Live Feed",
      image: villaNightImg,
    },
    {
      id: 1,
      name: "CAM-02: Backyard & Perimeter",
      status: "Infrared Active",
      image: whyChooseUsImg,
    },
    {
      id: 2,
      name: "CAM-03: Living Room Zone A",
      status: "No Motion",
      image: projectVillasImg,
    },
    {
      id: 3,
      name: "CAM-04: Driveway & Garage",
      status: "Live Feed",
      image: projectCommercialImg,
    },
  ];

  return (
    <>
      {/* CAMERA SYSTEM & DOOR LOCKS */}
      <section className="border-t border-border-main/50 pt-20 mb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <span className="text-accent-blue text-xs font-bold uppercase tracking-widest block mb-3">
              Surveillance & Control
            </span>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold tracking-tight text-text-main mb-6 leading-tight">
              Easy Control and Monitoring
            </h2>
            <p className="text-text-muted text-base leading-relaxed mb-6 font-medium">
              Unlock the power of seamless control and vigilant monitoring
              with our Home Security System in Bangalore. Gain peace of mind
              knowing that your home is secure no matter where you are.
            </p>

            <div className="rounded-3xl overflow-hidden border border-border-main aspect-video bg-bg-surface relative group">
              <img
                src={whyChooseUsImg}
                alt="Monitoring room integration"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-102 transition-transform duration-750"
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            {/* Point 1 */}
            <div className="bg-bg-surface border border-border-main rounded-3xl p-6 sm:p-8 flex gap-5 items-start transition-all hover:border-accent-blue/10">
              <div className="w-12 h-12 rounded-full border border-border-main bg-bg-main flex items-center justify-center text-accent-blue shrink-0 apple-border-shine">
                <Unlock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-serif font-bold text-text-main mb-2">
                  Unlock Your Doors From Anywhere
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Remotely control your door locks from anywhere in the world.
                  Provide instant access to surprise visitors and your loved
                  ones, ensuring your home is always welcoming and secure.
                </p>
              </div>
            </div>

            {/* Point 2 */}
            <div className="bg-bg-surface border border-border-main rounded-3xl p-6 sm:p-8 flex gap-5 items-start transition-all hover:border-accent-blue/10">
              <div className="w-12 h-12 rounded-full border border-border-main bg-bg-main flex items-center justify-center text-accent-blue shrink-0 apple-border-shine">
                <Bell className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-serif font-bold text-text-main mb-2">
                  Instant Alerts and Notifications
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Receive immediate alerts on your mobile device in case of
                  any security breach. Take swift action with instant alarms,
                  allowing you to respond promptly.
                </p>
              </div>
            </div>

            {/* Point 3 */}
            <div className="bg-bg-surface border border-border-main rounded-3xl p-6 sm:p-8 flex gap-5 items-start transition-all hover:border-accent-blue/10">
              <div className="w-12 h-12 rounded-full border border-border-main bg-bg-main flex items-center justify-center text-accent-blue shrink-0 apple-border-shine">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-serif font-bold text-text-main mb-2">
                  Talk to your guests from anywhere
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Stay connected with your home no matter where you are in the
                  world. Communicate with your guests, instruct delivery
                  personnel, and deter suspicious individuals easily.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MONITORING 24x7 & INTERACTIVE CCTV FEED */}
      <section className="bg-bg-surface/30 border-y border-border-main/50 py-20 mb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-border-main bg-accent-blue/10 flex items-center justify-center text-accent-blue apple-border-shine">
                <Eye className="w-5 h-5" />
              </div>
              <span className="text-accent-blue text-xs font-bold uppercase tracking-widest">
                Real-Time Vigilance
              </span>
            </div>
            <h2 className="text-4xl font-serif font-bold tracking-tight text-text-main leading-tight">
              Monitoring 24×7
            </h2>
            <p className="text-sm text-text-muted leading-relaxed">
              Our home security devices are equipped with night vision
              cameras, ensuring 24/7 monitoring of your home. Video doorbells
              with built-in motion detection sensors alert you to any
              suspicious activity at your main door. You can also integrate
              third-party devices to activate lights when detecting motion,
              enhancing your security.
            </p>

            <div className="pt-4 border-t border-border-main/50 space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-text-main">
                <CheckCircle2 className="w-4.5 h-4.5 text-accent-blue" />
                <span>Integrated Intelligent Night Vision Sensors</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-text-main">
                <CheckCircle2 className="w-4.5 h-4.5 text-accent-blue" />
                <span>Motion Cascade Lighting Integration</span>
              </div>
            </div>
          </div>

          {/* Interactive CCTV dashboard */}
          <div className="lg:col-span-7">
            <div className="bg-black border border-white/10 rounded-3xl p-4 sm:p-6 shadow-2xl font-mono text-white/80 select-none">
              {/* Header info bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4 pb-4 border-b border-white/10 text-xs">
                <div className="flex items-center gap-2">
                  <span
                    className={`w-2.5 h-2.5 rounded-full bg-red-600 ${isRecording ? "animate-pulse" : ""}`}
                  />
                  <span className="font-bold tracking-wider text-white">
                    SYSTEM MON-04
                  </span>
                </div>
                <div className="text-[10px] text-white/50">{timeString}</div>
              </div>

              {/* Main active feed screen */}
              <div className="relative rounded-2xl overflow-hidden aspect-video bg-neutral-900 border border-white/10 mb-4 group">
                <img
                  src={cameraFeeds[activeCam].image}
                  alt="Active Security Camera Feed"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102 filter grayscale brightness-90 contrast-110"
                />
                <div className="absolute inset-0 bg-cyan-500/5 mix-blend-overlay" />

                {/* CCTV Scan Lines Overlay */}
                <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,3px_100%] opacity-40" />

                {/* Feed Status overlay */}
                <div className="absolute top-4 left-4 bg-black/60 px-3 py-1 rounded border border-white/10 backdrop-blur-md text-[10px] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping" />
                  <span className="text-white uppercase font-bold tracking-wider">
                    {cameraFeeds[activeCam].status}
                  </span>
                </div>

                <div className="absolute top-4 right-4 bg-black/60 px-2.5 py-1 rounded border border-white/10 backdrop-blur-md text-[9px] text-white/70">
                  ZOOM: 1.0X
                </div>

                <div className="absolute bottom-4 left-4 right-4 bg-black/70 p-3 rounded-lg border border-white/10 backdrop-blur-md flex justify-between items-center text-[10px]">
                  <span className="font-bold text-white uppercase">
                    {cameraFeeds[activeCam].name}
                  </span>
                  <span className="text-white/50">SECURE LINK V2</span>
                </div>
              </div>

              {/* Mini feed grid selectors */}
              <div className="grid grid-cols-4 gap-3">
                {cameraFeeds.map((feed) => {
                  const isActive = activeCam === feed.id;
                  return (
                    <button
                      key={feed.id}
                      onClick={() => setActiveCam(feed.id)}
                      className={`relative rounded-xl overflow-hidden aspect-[4/3] border text-left cursor-pointer transition-all ${
                        isActive
                          ? "border-accent-blue ring-1 ring-accent-blue"
                          : "border-white/10 hover:border-white/30"
                      }`}
                    >
                      <img
                        src={feed.image}
                        alt={feed.name}
                        className="w-full h-full object-cover filter grayscale contrast-125"
                      />
                      <div
                        className={`absolute inset-0 transition-colors ${isActive ? "bg-accent-blue/10" : "bg-black/40 hover:bg-black/20"}`}
                      />
                      <div className="absolute bottom-1.5 left-1.5 right-1.5 bg-black/60 px-1 py-0.5 rounded text-[8px] truncate text-white/80">
                        CAM-0{feed.id + 1}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SMART SECURITY SOLUTIONS ACCORDION */}
      <section className="mb-24 max-w-4xl mx-auto pt-10 px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-accent-blue text-xs font-bold uppercase tracking-widest block mb-3">
            Presets & Solutions
          </span>
          <h2 className="text-4xl font-serif font-bold tracking-tight text-text-main mb-4">
            Smart Home Security Solution
          </h2>
        </div>

        <div className="bg-bg-surface/50 border border-border-main rounded-3xl p-6 sm:p-8">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="sec-1" className="border-border-main/50">
              <AccordionTrigger className="text-base font-semibold text-text-main hover:text-accent-blue hover:no-underline py-5 text-left">
                Schedule Night Mode
              </AccordionTrigger>
              <AccordionContent className="text-sm text-text-muted leading-relaxed pb-5">
                Automatically configure perimeter sensors to active state
                while shutting down interior motion sensors. Enables full
                security barrier protection during night sleep while allowing
                occupancy movement in bedrooms.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="sec-2" className="border-border-main/50">
              <AccordionTrigger className="text-base font-semibold text-text-main hover:text-accent-blue hover:no-underline py-5 text-left">
                Spot the Trespassers
              </AccordionTrigger>
              <AccordionContent className="text-sm text-text-muted leading-relaxed pb-5">
                Our advanced AI-infused camera systems detect human shapes,
                filtering out neighborhood pets, swaying foliage, or wind
                debris to reduce false warning counts.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="sec-3" className="border-border-main/50">
              <AccordionTrigger className="text-base font-semibold text-text-main hover:text-accent-blue hover:no-underline py-5 text-left">
                Schedule Vacation Mode
              </AccordionTrigger>
              <AccordionContent className="text-sm text-text-muted leading-relaxed pb-5">
                Activates simulation sequences, randomly flipping lights and
                playing audio logs to make the property appear occupied while
                you are away, complemented by continuous push alarms.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="sec-4" className="border-b-0">
              <AccordionTrigger className="text-base font-semibold text-text-main hover:text-accent-blue hover:no-underline py-5 text-left">
                Fire Protection
              </AccordionTrigger>
              <AccordionContent className="text-sm text-text-muted leading-relaxed pb-5">
                Links smart smoke modules, carbon oxide monitors, and
                temperature threshold sensors. Upon fire signs, it rings local
                sirens, shuts main gas gates, unlocks exit paths, and notifies
                emergency cascades.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* REUSABLE ONE-TOUCH GRID */}
      <OneTouchSection
        title="Enjoy One-Touch Control of Everyday Life"
        subtitle="MAKc Automation offers Smart Home Devices that aim to make your life easier, safer and more enjoyable. Elevate your daily routine with these devices."
        items={oneTouchItems}
      />

      {/* REUSABLE TRENDING CAROUSEL */}
      <TrendingCarousel
        title="Trending smart security tech"
        brandLabel="MAKc Secure"
        products={trendingSecurity}
      />

      {/* INTRUDER & FIRE PROTECTION */}
      <section className="mb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Card A: Protection from Intruder */}
          <div className="bg-bg-surface border border-border-main p-8 sm:p-10 rounded-3xl flex flex-col justify-between transition-all hover:border-accent-blue/15 shadow-md">
            <div>
              <div className="w-12 h-12 rounded-full border border-border-main bg-bg-main flex items-center justify-center text-accent-blue mb-6 apple-border-shine">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-text-main mb-4">
                Protection from Intruder
              </h3>
              <p className="text-sm text-text-muted leading-relaxed mb-6">
                We use renowned brand sensors to identify threats and trigger
                sirens and automatic lighting to deter intruders. Our indoor
                and outdoor security systems provide comprehensive protection.
              </p>
              <div className="border-t border-border-main/50 pt-5">
                <h4 className="font-bold text-text-main mb-2 text-xs uppercase tracking-wider">
                  Indoor Security Features
                </h4>
                <p className="text-xs text-text-muted leading-relaxed">
                  Our indoor security features include motion detectors,
                  window or door opening detectors, and window or door break
                  detectors.
                </p>
              </div>
            </div>
            <div className="mt-8 pt-4 flex flex-wrap gap-4">
              <button
                onClick={() =>
                  toast.success("Simulated Event: Perimeter Armed")
                }
                className="bg-accent-blue hover:bg-[#0055d4] text-white text-xs font-bold py-2.5 px-5 rounded-xl cursor-pointer transition-colors"
              >
                Configure Intruder Barriers
              </button>
            </div>
          </div>

          {/* Card B: Fire Protection */}
          <div className="bg-bg-surface border border-border-main p-8 sm:p-10 rounded-3xl flex flex-col justify-between transition-all hover:border-accent-blue/15 shadow-md">
            <div>
              <div className="w-12 h-12 rounded-full border border-border-main bg-bg-main flex items-center justify-center text-accent-blue mb-6 apple-border-shine">
                <Flame className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-text-main mb-4">
                Protect Against Signs of Fire
              </h3>
              <p className="text-sm text-text-muted leading-relaxed mb-6">
                Our intelligent sensors can detect fire signs, such as smoke,
                increased carbon dioxide levels, or a rapid temperature rise.
                Our system activates alarms to notify you promptly when a
                threat is identified. Sensors are smart enough to assess the
                severity of smoke or temperature and trigger warnings
                accordingly.
              </p>
              <div className="border-t border-border-main/50 pt-5">
                <div className="flex items-center gap-2 text-xs font-bold text-accent-blue tracking-wide uppercase">
                  <Moon className="w-4.5 h-4.5" />
                  <span>Night Guard Preset</span>
                </div>
                <p className="text-xs text-text-muted leading-relaxed mt-2">
                  Activate specific sensors and detectors for a secure night’s
                  sleep.
                </p>
              </div>
            </div>
            <div className="mt-8 pt-4">
              <button
                onClick={() => {
                  toast.success(
                    "Night Mode Guard Activated. Select sensors configured.",
                  );
                }}
                className="w-full bg-bg-main border border-border-main hover:border-accent-blue text-text-main hover:text-accent-blue text-xs font-bold py-3 px-6 rounded-xl cursor-pointer transition-all"
              >
                Activate Night Mode Sensors
              </button>
              <p className="text-[10px] text-text-muted mt-3 text-center">
                With our Home Security System in Bangalore, safeguarding your
                home is no longer a concern. Experience advanced security,
                control, and peace of mind with MAKc Automation. Your security
                is our promise.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
