import { getImageUrl } from "@/utils/image";
export default function BrandLogo({ className = "h-10 w-auto" }: { className?: string }) {
  return (
    <>
      {/* Light Mode Logo: Official Colored SVG */}
      <img
        src={getImageUrl("MAKc-Logo.svg")}
        alt="MAKc Automation Logo"
        className={`${className} block dark:hidden object-contain`}
      />
      {/* Dark Mode Logo: Official White PNG */}
      <img
        src={getImageUrl("MAKc-Logo-white.webp")}
        alt="MAKc Automation Logo"
        className={`${className} hidden dark:block object-contain`}
      />
    </>
  );
}
