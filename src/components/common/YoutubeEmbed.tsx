import { useEffect, useRef } from "react";

interface YoutubeEmbedProps {
  videoId: string;
  title: string;
  className?: string;
}

export default function YoutubeEmbed({ videoId, title, className = "absolute w-full h-full border-0 pointer-events-none" }: YoutubeEmbedProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    let isMounted = true;
    
    const initPlayer = () => {
      if (!isMounted || !iframeRef.current) return;
      
      const win = window as any;
      if (win.YT && win.YT.Player) {
        playerRef.current = new win.YT.Player(iframeRef.current, {
          events: {
            onReady: (event: any) => {
              event.target.mute();
              event.target.playVideo();
            },
            onStateChange: (event: any) => {
              // 0 means ended
              if (event.data === 0) {
                event.target.seekTo(0);
                event.target.playVideo();
              }
            }
          }
        });
      }
    };

    const win = window as any;
    if (win.YT && win.YT.Player) {
      initPlayer();
    } else {
      if (!win.onYouTubeIframeAPIReady) {
        win.onYouTubeIframeAPIReady = () => {
          window.dispatchEvent(new Event("youtube-api-ready"));
        };
        
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName("script")[0];
        firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
      }
      
      const handleApiReady = () => {
        initPlayer();
      };
      
      window.addEventListener("youtube-api-ready", handleApiReady);
      
      return () => {
        isMounted = false;
        window.removeEventListener("youtube-api-ready", handleApiReady);
        if (playerRef.current && playerRef.current.destroy) {
          playerRef.current.destroy();
        }
      };
    }

    return () => {
      isMounted = false;
      if (playerRef.current && playerRef.current.destroy) {
        playerRef.current.destroy();
      }
    };
  }, [videoId]);

  return (
    <iframe
      ref={iframeRef}
      src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1&autoplay=1&mute=1&controls=0&playsinline=1&modestbranding=1&rel=0&disablekb=1&fs=0&iv_load_policy=3`}
      className={className}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title={title}
    />
  );
}
