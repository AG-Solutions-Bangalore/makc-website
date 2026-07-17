import useSEO from "@/hooks/useSEO";
import ComingSoon from "@/components/common/ComingSoon";
import { getImageUrl } from "@/utils/image";

export default function AudioPage() {
  useSEO({
    title: "Audio & Video Solutions | MAKc Automation",
    description: "Premium high-performance audio and video interior systems for luxury residences and smart home entertainment.",
    keywords: "audio systems, smart av, home theater, bangalore, MAKc",
  });

  return (
    <ComingSoon
      pageTitle="Audio & Video Solutions"
      bgImage={getImageUrl("audio_banner.webp")}
    />
  );
}
