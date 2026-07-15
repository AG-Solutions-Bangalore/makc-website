import { useState, useEffect } from "react";
import { Bot, X, Sparkles } from "lucide-react";

const BOT_QUOTES = [
  "Hey there! Looking to make your home smarter? 🏠✨",
  "Automate your lights and save up to 15% on electricity bills! 💡🔋",
  "Security you can control from anywhere. MKC has you covered! 🛡️📱",
  "Struggling with weak Wi-Fi? Our smart networking solutions fix dead zones! 🌐⚡",
  "Create the perfect movie night vibe with smart ambient lighting! 🎬🍿",
  "Control curtains, gates, lights, and AC all from one single tap! 📱🛋️",
  "Worried about leaks or fires? Smart sensors alert you instantly! 🚨🔥",
  "Get hands-free control of your home with Alexa or Google Assistant. 🗣️🎙️",
  "Schedule your geyser to turn on before you wake up! ☕🛀",
  "Need a custom automation setup? Reach out to us via Call or WhatsApp! 📞💬",
  "Welcome to MKC! We turn ordinary homes into futuristic living spaces. 🚀🌌",
  "Did you know? Smart locks let you generate temporary PINs for visitors! 🔑🚪",
  "We design network infrastructures that can handle all your smart devices at once! 📶💪"
];

export default function FloatingBot() {
  const [message, setMessage] = useState(BOT_QUOTES[0]);
  const [isBubbleVisible, setIsBubbleVisible] = useState(false);
  const [isBouncing, setIsBouncing] = useState(false);
  const [hasBeenDismissed, setHasBeenDismissed] = useState(false);

  // Function to show a new random quote
  const cycleQuote = () => {
    const currentIndex = BOT_QUOTES.indexOf(message);
    let nextIndex = currentIndex;
    while (nextIndex === currentIndex) {
      nextIndex = Math.floor(Math.random() * BOT_QUOTES.length);
    }
    setMessage(BOT_QUOTES[nextIndex]);
  };

  // Bot click handler
  const handleBotClick = () => {
    setIsBouncing(true);
    cycleQuote();
    setIsBubbleVisible(true);
    // Reset dismiss timer if they manually clicked
    setHasBeenDismissed(false);
    
    // Clear bouncing animation after 600ms
    setTimeout(() => {
      setIsBouncing(false);
    }, 600);
  };

  // Dismiss speech bubble
  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsBubbleVisible(false);
    setHasBeenDismissed(true);
  };

  // Cycle bubble every 20 seconds
  useEffect(() => {
    // Show initial message after 3 seconds
    const initialTimer = setTimeout(() => {
      if (!hasBeenDismissed) {
        setIsBubbleVisible(true);
      }
    }, 3000);

    // Set interval to periodically change quote
    const intervalTimer = setInterval(() => {
      if (!hasBeenDismissed) {
        cycleQuote();
        setIsBubbleVisible(true);
      }
    }, 20000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(intervalTimer);
    };
  }, [message, hasBeenDismissed]);

  return (
    <div className="relative flex flex-col items-end">
      {/* Speech Bubble Dialog */}
      <div
        className={`absolute bottom-full right-0 mb-4 w-64 sm:w-72 bg-bg-surface backdrop-blur-md border border-border-main text-text-main p-4 rounded-2xl shadow-xl shadow-black/10 dark:shadow-black/40 transition-all duration-300 origin-bottom-right ${
          isBubbleVisible
            ? "scale-100 opacity-100 translate-y-0 pointer-events-auto"
            : "scale-90 opacity-0 translate-y-2 pointer-events-none"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={handleDismiss}
          className="absolute top-2.5 right-2.5 p-1 rounded-full text-text-muted hover:text-text-main hover:bg-bg-main transition-colors"
          aria-label="Dismiss message"
        >
          <X className="h-3.5 w-3.5" />
        </button>

        {/* Bubble content */}
        <div className="flex gap-2.5 pr-4">
          <Sparkles className="h-4 w-4 text-violet-500 shrink-0 mt-0.5 animate-pulse" />
          <p className="text-xs sm:text-sm leading-relaxed font-medium">
            {message}
          </p>
        </div>

        {/* Small arrow pointing down to the bot */}
        <div className="absolute top-full right-5 w-3 h-3 bg-bg-surface border-r border-b border-border-main transform rotate-45 -translate-y-1.5" />
      </div>

      {/* Bot Icon Button */}
      <button
        onClick={handleBotClick}
        className={`group relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-gradient-to-tr from-[#0a84ff] to-[#6366f1] !text-white shadow-lg shadow-indigo-500/20 transition-all duration-300 hover:scale-110 hover:shadow-indigo-500/40 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-[#061121] ${
          isBouncing ? "animate-[bounce_0.6s_ease-in-out_infinite]" : "animate-float"
        }`}
        aria-label="Ask MKC Helper Bot"
      >
        {/* Glow circle background */}
        <span className="absolute inset-0 -z-10 rounded-full bg-indigo-500/30 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Tooltip */}
        <span className="absolute right-14 sm:right-16 scale-0 group-hover:scale-100 bg-bg-surface text-text-main text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-md transition-all duration-200 origin-right border border-border-main pointer-events-none">
          Ask Bot
        </span>

        {/* Bot Icon */}
        <Bot className="h-6 w-6 transition-transform duration-300 group-hover:rotate-12" />
      </button>
    </div>
  );
}
