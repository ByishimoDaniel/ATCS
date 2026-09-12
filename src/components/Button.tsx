import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

const variants = {
  primary:
    "bg-cyan-400 text-navy-950 shadow-[0_10px_30px_rgba(34,211,238,0.25)] hover:bg-cyan-300",
  secondary:
    "border border-white/15 bg-white/5 text-white hover:border-cyan-300/40 hover:bg-white/10",
  outline:
    "border border-slate-200 bg-white text-navy-900 hover:border-cyan-400/60 hover:text-cyan-700",
  ghost: "text-cyan-300 hover:bg-white/5",
} as const;

const sizes = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-6 text-sm",
  lg: "h-12 px-7 text-[15px]",
} as const;

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
  external?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  external = false,
  type = "button",
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950 disabled:cursor-not-allowed disabled:opacity-60 ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}
