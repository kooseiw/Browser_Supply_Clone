import Image from "next/image";
import { cn } from "@/common/utils/cn";
import { FaStar } from "react-icons/fa";

type ReviewCardProps = {
  quote: string;
  name: string;
  avatar: string;
  className?: string;
};

export default function ReviewCard({
  quote,
  name,
  avatar,
  className,
}: ReviewCardProps) {
  return (
    <article
      className={cn("flex flex-col justify-between gap-8 p-6", className)}
    >
      <div>
        <span
          aria-hidden="true"
          className="block font-display text-6xl leading-none text-[#ABABAB]"
        >
          "
        </span>
        <p className="font-display text-[28px] leading-[1.35] text-white">
          {quote}
        </p>
      </div>

      <div>
        <div className="mb-5 flex items-center gap-2 text-white">
          {Array.from({ length: 5 }).map((_, index) => (
            <FaStar key={index} className="size-6" />
          ))}
        </div>

        <div className="flex items-center gap-3 mt-7">
          <Image
            src={avatar}
            alt={name}
            width={36}
            height={36}
            className="size-10 rounded-md object-cover"
          />
          <span className="text-base text-[#ABABAB]">{name}</span>
        </div>
      </div>
    </article>
  );
}
