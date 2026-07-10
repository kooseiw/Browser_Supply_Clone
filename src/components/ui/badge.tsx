import Image from "next/image";
import { cn } from "@/common/utils/cn";

type BadgeProps = {
  iconSrc?: string;
  iconAlt?: string;
  label: string;
  className?: string;
};

export default function Badge({
  iconSrc,
  iconAlt = "",
  label,
  className,
}: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-sm",
        className,
      )}
    >
      {iconSrc ? (
        <Image
          src={iconSrc}
          alt={iconAlt}
          width={12}
          height={14}
          className="opacity-80"
        />
      ) : null}
      <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-white/70">
        {label}
      </span>
    </div>
  );
}
