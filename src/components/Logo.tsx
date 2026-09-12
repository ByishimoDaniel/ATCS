import { company } from "@/data/company";

type LogoProps = {
  className?: string;
  compact?: boolean;
};

export function Logo({ className = "", compact = false }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span
        className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-cyan-400 to-sky-500 shadow-[0_0_24px_rgba(34,211,238,0.35)]"
        aria-hidden="true"
      >
        <svg viewBox="0 0 40 40" className="h-10 w-10">
          <rect x="8" y="8" width="24" height="24" rx="6" fill="none" stroke="#062033" strokeWidth="1.6" />
          <path d="M14 26V14h4.2l1.8 6.6L21.8 14H26v12h-3.1V19l-2.2 7h-3.4l-2.2-7v7H14z" fill="#062033" />
        </svg>
      </span>
      {!compact ? (
        <span className="leading-tight">
          <span className="block text-[15px] font-semibold tracking-tight text-white">
            {company.shortName}
          </span>
          <span className="block text-[11px] font-medium uppercase tracking-[0.16em] text-slate-400">
            Company Ltd
          </span>
        </span>
      ) : null}
    </span>
  );
}
