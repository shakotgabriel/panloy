import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  inverted?: boolean;
};

export function Logo({ inverted = false }: LogoProps) {
  return (
    <Link
      href="/"
      className={`flex items-center no-underline ${inverted ? "bg-white px-2 py-1.5" : ""}`}
      aria-label="Panloy Group home"
    >
      <Image
        src="/brand/logo.png"
        alt="Panloy"
        width={180}
        height={56}
        className="h-11 w-auto"
        priority
      />
    </Link>
  );
}

export function Mark({ className = "h-11 w-auto" }: { className?: string }) {
  return (
    <Image
      src="/brand/logo.png"
      alt=""
      width={64}
      height={64}
      className={`shrink-0 ${className}`}
    />
  );
}
