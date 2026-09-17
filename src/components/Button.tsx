import Link from "next/link";
import type { ReactNode } from "react";

type CommonProps = {
  children: ReactNode;
  variant?: "primary" | "accent" | "onDark" | "secondary";
  className?: string;
};

const base =
  "inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full px-6 text-[15px] font-medium tracking-[0.01em] transition-colors duration-200 cursor-pointer";

const variants: Record<NonNullable<CommonProps["variant"]>, string> = {
  primary: "bg-pine text-bg hover:bg-pine-strong",
  accent: "bg-coral text-ink hover:bg-coral-strong",
  onDark: "bg-ink-dark-fg text-ink-dark-bg hover:bg-white",
  secondary:
    "border border-ink/20 text-ink hover:border-ink/40 hover:bg-ink/[0.04]",
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  type,
  onClick,
  disabled,
}: CommonProps & {
  href?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
}) {
  const cls = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type ?? "button"}
      onClick={onClick}
      disabled={disabled}
      className={`${cls} disabled:cursor-not-allowed disabled:opacity-60`}
    >
      {children}
    </button>
  );
}
