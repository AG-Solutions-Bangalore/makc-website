import { getImageUrl } from "@/utils/image";

export default function BrandLogo({
  className = "h-10 w-auto",
  forceWhite = false,
}: {
  className?: string;
  forceWhite?: boolean;
}) {
  return (
    <>
      {/* Light Mode Logo: Official Colored SVG (hidden when forceWhite is true) */}
      {!forceWhite && (
        <img
          src={getImageUrl("MAKc-Logo.svg")}
          alt="MAKc Automation Logo"
          title="MAKc Automations Official Logo"
          className={`${className} block dark:hidden object-contain drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)]`}
          width={1748}
          height={624}
        />
      )}
      {/* Dark Mode or Forced White Logo: for transparent headers over dark imagery */}
      <img
        src={getImageUrl("MAKc-Logo-white.webp")}
        srcSet="/icons/MAKc-Logo-white-180.webp 180w, /icons/MAKc-Logo-white-360.webp 360w"
        sizes="(max-width: 640px) 157px, 220px"
        alt="MAKc Automation Logo"
        title="MAKc Automations Logo"
        className={`${className} ${
          forceWhite ? "block" : "hidden dark:block"
        } object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]`}
        width={1748}
        height={624}
      />
    </>
  );
}
