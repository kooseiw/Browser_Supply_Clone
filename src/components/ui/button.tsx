import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/common/utils/cn";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export default function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={cn(
        "rounded px-6 py-4 text-base font-semibold transition-colors cursor-pointer",
        variant === "primary" && "bg-white text-black hover:bg-white/80",
        variant === "secondary" &&
          "bg-black text-white border border-white/10 hover:bg-white/10",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
