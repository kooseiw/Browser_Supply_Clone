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
        "inline-flex items-center gap-2 rounded-sm border border-white/10 bg-[#1f1f1f] px-3 py-2",
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
          style={{ width: "18px", height: "18px" }}
        />
      ) : null}
      <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#a3a3a3]">
        {label}
      </span>
    </div>
  );
}
