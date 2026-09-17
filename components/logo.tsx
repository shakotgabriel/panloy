import Link from "next/link";

type LogoProps = {
  inverted?: boolean;
  compact?: boolean;
};

export function Logo({ inverted = false, compact = false }: LogoProps) {
  const word = inverted ? "text-white" : "text-navy";
  const sub = inverted ? "text-white/70" : "text-muted";

  return (
    <Link href="/" className="group flex items-center gap-3 no-underline">
      <Mark />
      <span className={compact ? "hidden sm:flex flex-col leading-none" : "flex flex-col leading-none"}>
        <span className={`font-cond text-[1.35rem] font-semibold tracking-tight ${word}`}>
          Panloy
        </span>
        <span
          className={`mt-0.5 font-cond text-[0.68rem] font-semibold uppercase tracking-[0.18em] ${sub}`}
        >
          Group
        </span>
      </span>
    </Link>
  );
}

export function Mark({ className = "h-11 w-11" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={`shrink-0 ${className}`}
      aria-hidden="true"
    >
      <rect width="64" height="64" rx="6" fill="#2B40E0" />
      <rect x="10" y="10" width="44" height="44" fill="#fff" />
      <path d="M32 16v32" stroke="#2B40E0" strokeWidth="3.2" />
      <path d="M32 16h-12l12 9z" fill="#111" />
      <path
        d="M18 33c4.2-7 8.4-7 14-1 5.6 6 9.8 6 14 1"
        fill="none"
        stroke="#1C7A45"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path
        d="M22 46c5 5.5 15 5.5 20 0"
        fill="none"
        stroke="#D61F2A"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
