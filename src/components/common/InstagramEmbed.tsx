// ---- Official Instagram Embed Helper ----
// Renders Instagram's official iframe embed with only the reel visible.

function getReelEmbedUrl(reelUrl: string): string {
  const match = reelUrl.match(/(?:reel|p)\/([A-Za-z0-9_-]+)/);
  if (match && match[1]) {
    return `https://www.instagram.com/reel/${match[1]}/embed/`;
  }
  return reelUrl.endsWith("/embed/")
    ? reelUrl
    : reelUrl.endsWith("/embed")
    ? `${reelUrl}/`
    : `${reelUrl.replace(/\/$/, "")}/embed/`;
}

function InstagramGlyph({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

export default function InstagramEmbed({
  reelUrl,
  compact = false,
  fit = false,
}: {
  reelUrl: string;
  compact?: boolean;
  fit?: boolean;
}) {
  const embedUrl = getReelEmbedUrl(reelUrl);

  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[inherit] bg-black">
      {/* Reel-only viewport: fills all remaining card height, clips Instagram header & footer */}
      <div
        className={`relative min-h-0 overflow-hidden bg-black ${
          compact ? "shrink-0 aspect-[4/5]" : "flex-1"
        } ${fit && !compact ? "[container-type:size]" : ""}`}
      >
        <iframe
          src={embedUrl}
          className="absolute border-0"
          style={
            compact
              ? {
                  top: "-54px",
                  left: 0,
                  width: "100%",
                  height: "calc(100% + 54px)",
                }
              : fit
                ? {
                    top: "-54px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "80cqh",
                    height: "calc(100% + 54px)",
                  }
                : {
                    top: "-54px",
                    bottom: "-80px",
                    left: "-21.111%",
                    width: "142.222%",
                    height: "calc(100% + 134px)",
                  }
          }
          scrolling="no"
          loading="lazy"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          allowFullScreen
          title="Instagram Reel"
        />
      </div>

      {/* Watch on Instagram action panel */}
      <a
        href={reelUrl}
        target="_blank"
        rel="noopener noreferrer"
        title="Watch this reel on Instagram"
        className="group/cta relative shrink-0 flex flex-col items-center justify-center gap-1.5 sm:gap-2 overflow-hidden border-t border-white/10 bg-gradient-to-b from-[#121320] to-[#08080c] px-3 py-2.5 sm:py-3.5 transition-colors duration-200 hover:from-[#181a2a] hover:to-[#0c0d14] cursor-pointer"
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-12 left-1/2 h-36 w-36 -translate-x-1/2 rounded-full bg-gradient-to-tr from-[#f9ce34]/25 via-[#ee2a7b]/25 to-[#6228d7]/25 blur-2xl"
        />
        <InstagramGlyph className="pointer-events-none absolute -right-7 -bottom-10 h-32 w-32 fill-white/5" />
        <span className="relative text-[9px] font-semibold uppercase tracking-[0.22em] text-white/50">
          MAKc Reel
        </span>
        <span className="relative inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] px-3.5 py-1.5 text-center text-[10px] sm:text-[11px] font-semibold whitespace-nowrap text-white shadow-[0_4px_16px_-2px_rgba(238,42,123,0.6)] transition-all duration-200 group-hover/cta:scale-105 active:scale-95">
          <InstagramGlyph className="h-3.5 w-3.5 shrink-0 fill-current" />
          <span>Watch on Instagram</span>
        </span>
      </a>
    </div>
  );
}
