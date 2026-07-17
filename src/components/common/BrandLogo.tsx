import { getImageUrl } from "@/utils/image";
export default function BrandLogo({ className = "h-10 w-auto" }: { className?: string }) {
  return (
    <>
      {/* Light Mode Logo: Official Colored SVG */}
      <img
        src={getImageUrl("MAKc-Logo.svg")}
        alt="MAKc Automation Logo"
        className={`${className} block dark:hidden object-contain`}
        width={1748}
        height={624}
      />
      {/* Dark Mode Logo: Official White PNG */}
      <img
        src={getImageUrl("MAKc-Logo-white.webp")}
        srcSet="/icons/MAKc-Logo-white-180.webp 180w, /icons/MAKc-Logo-white-360.webp 360w"
        sizes="(max-width: 640px) 157px, 220px"
        alt="MAKc Automation Logo"
        className={`${className} hidden dark:block object-contain`}
        width={1748}
        height={624}
      />
    </>
  );
}
