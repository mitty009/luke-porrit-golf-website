// src/components/Logo.tsx
type LogoProps = {
  /** Tailwind height classes like "h-8", "h-10 md:h-12" */
  heightClass?: string;
  className?: string;
  title?: string;
  src?: string;
};

export default function Logo({
  heightClass = "h-10",                  // default height for nav
  className = "",
  title = "Luke Porritt Golf Academy",
  src = "/luke-porrit-logo.png",
}: LogoProps) {
  return (
    <img
      src={src}
      alt={title}
      className={`${heightClass} w-auto block object-contain shrink-0 ${className}`}
    />
  );
}
