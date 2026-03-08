import * as React from "react";

import { cn } from "@/lib/utils";

const baseStyles =
  "inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:scale-[0.98]";

const variants = {
  primary:
    "bg-foreground text-background hover:bg-black/80 dark:hover:bg-white/80",
  secondary:
    "border border-black/10 bg-background hover:bg-black/[.04] dark:border-white/[.12] dark:hover:bg-white/10",
  ghost: "hover:bg-black/[.04] dark:hover:bg-white/10",
} as const;

const sizes = {
  sm: "h-9 px-4 text-xs",
  md: "h-10",
  lg: "h-11 px-6 text-base",
} as const;

export type ButtonVariant = keyof typeof variants;
export type ButtonSize = keyof typeof sizes;

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}
