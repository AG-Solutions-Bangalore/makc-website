export default function BrandLogo({ className = "h-10 w-auto" }: { className?: string }) {
  return (
    <img
      src="/icons/MAKc-Logo.svg"
      alt="MAKc Logo"
      className={`${className} object-contain`}
    />
  );
}
