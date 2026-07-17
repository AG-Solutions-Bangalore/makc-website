import { getImageUrl } from "@/utils/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  CheckCircle2,
  Loader2,
  Lock,
  Pause,
  Play,
  Sliders,
  Smartphone,
  Sparkles,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

gsap.registerPlugin(useGSAP);

const villaNightImg = getImageUrl("contact_villa_night.webp");

// Import custom UI components

// Import shared common components
// import OneTouchSection from "@/components/common/OneTouchSection";
// import TrendingCarousel from "@/components/common/TrendingCarousel";

function CoreConceptSection() {
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

  const formatTime = (secs: number) => {
    const minutes = Math.floor(secs / 60);
    const seconds = secs % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <section className="border-t border-border-main/50 pt-20 mb-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="space-y-6">
          <span className="text-accent-blue text-xs font-bold uppercase tracking-widest block">
            Core Technology
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-text-main leading-tight font-sans">
            What is a Smart Home Device and How it Works?
          </h2>
          <p className="text-text-muted text-base leading-relaxed">
            Smart Home Devices connect to your home network, allowing you to
            control them remotely via your smartphone, tablet, or voice
            commands. From lights to locks, thermostats to cameras, they are
            designed to make your daily life simpler, safer, and more enjoyable.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-border-main/40">
            <div className="space-y-2">
              <div className="w-8 h-8 rounded-lg bg-accent-blue/10 flex items-center justify-center text-accent-blue">
                <Smartphone className="w-4.5 h-4.5" />
              </div>
              <h4 className="font-bold text-text-main text-xs uppercase tracking-wider">
                Intelligent Control
              </h4>
              <p className="text-[11px] text-text-muted leading-relaxed">
                Connect and manage your entire system remotely via smartphone or
                voice commands.
              </p>
            </div>
            <div className="space-y-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                <Sliders className="w-4.5 h-4.5" />
              </div>
              <h4 className="font-bold text-text-main text-xs uppercase tracking-wider">
                Custom Scenes
              </h4>
              <p className="text-[11px] text-text-muted leading-relaxed">
                Automate lighting, temperature, and power settings to align with
                your daily schedules.
              </p>
            </div>
            <div className="space-y-2">
              <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500">
                <Lock className="w-4.5 h-4.5" />
              </div>
              <h4 className="font-bold text-text-main text-xs uppercase tracking-wider">
                Enhanced Security
              </h4>
              <p className="text-[11px] text-text-muted leading-relaxed">
                Integrate smart locks and security alerts to safeguard your
                space 24/7.
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          {/* Mock video card */}
          <div
            onClick={() => {
              if (!isPlaying) setIsPlaying(true);
            }}
            className="relative rounded-3xl overflow-hidden aspect-video lg:aspect-[4/3] bg-bg-surface border border-border-main/60 shadow-xl group cursor-pointer transition-all duration-300 hover:border-accent-blue/30"
          >
            {!isPlaying ? (
              <>
                <img
                  src={villaNightImg}
                  alt="Smart Experience Villa Video"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:blur-[1px]"
                />
                <div className="absolute inset-0 bg-black/55 backdrop-blur-[0.5px] transition-all duration-300 group-hover:bg-black/45" />

                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <div className="relative mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="absolute inset-0 rounded-full bg-accent-blue/30 animate-ping pointer-events-none" />
                    <div className="w-16 h-16 rounded-full bg-accent-blue text-white flex items-center justify-center shadow-[0_4px_25px_rgba(10,132,255,0.4)] hover:bg-accent-blue/90 relative z-10 transition-all duration-300">
                      <Play className="w-7 h-7 fill-current translate-x-0.5" />
                    </div>
                  </div>
                  <span className="text-white text-xs font-bold uppercase tracking-widest">
                    Watch How It Works
                  </span>
                  <span className="text-white/60 text-[10px] mt-1 font-mono">
                    1:30 min experience video
                  </span>
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
                      <p className="text-xs text-white/50">
                        Establishing connection to Villa CCTV & Lights...
                      </p>
                    </div>
                  ) : videoProgress < 60 ? (
                    <div className="space-y-1">
                      <Sparkles className="w-10 h-10 text-gold-primary animate-bounce mx-auto" />
                      <p className="text-sm font-bold text-white">
                        Scene Action: "Welcome Home" Mode
                      </p>
                      <p className="text-xs text-white/60">
                        System lighting levels fading to 40% & climate active
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-1">
                      <CheckCircle2 className="w-10 h-10 text-green-500 animate-pulse mx-auto" />
                      <p className="text-sm font-bold text-white">
                        Security Verification Active
                      </p>
                      <p className="text-xs text-white/60">
                        Perimeter locks engaged. Smart sensors online.
                      </p>
                    </div>
                  )}
                </div>

                {/* Controls overlay */}
                <div className="bg-black/60 border border-white/10 rounded-xl p-3 backdrop-blur-md space-y-2">
                  <div className="w-full bg-white/20 h-1 rounded-full overflow-hidden">
                    <div
                      className="bg-accent-blue h-full transition-all duration-300"
                      style={{ width: `${videoProgress}%` }}
                    />
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-white/60">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsPlaying(!isPlaying);
                        }}
                        className="text-white hover:text-accent-blue transition-colors"
                      >
                        {isPlaying ? (
                          <Pause className="w-4 h-4" />
                        ) : (
                          <Play className="w-4 h-4 fill-current" />
                        )}
                      </button>
                      <span className="text-white/50 font-sans">
                        {formatTime(videoTime)} / 0:35
                      </span>
                    </div>
                    <span className="text-[9px] bg-accent-blue/20 text-accent-blue border border-accent-blue/30 px-2 py-0.5 rounded font-sans uppercase">
                      Demo Stream
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CoreConceptSection;
