import Image from "next/image";

type LogoProps = {
  className?: string;
  compact?: boolean;
};

export function Logo({ className = "", compact = false }: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src="/logo.png"
        alt="ATCS - All Tech Consultant Services"
        width={55}
        height={55}
        priority
        className="h-[55px] w-auto object-contain"
      />

      {!compact && (
        <span className="sr-only">
          All Tech Consultant Services
        </span>
      )}
    </div>
  );
}