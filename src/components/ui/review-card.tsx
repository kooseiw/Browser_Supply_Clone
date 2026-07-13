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
      className={cn(
        "flex flex-col justify-between gap-6 p-8 md:gap-8 md:p-6",
        className,
      )}
    >
      <div>
        <span
          aria-hidden="true"
          className="block font-display text-6xl leading-none text-[#ABABAB]"
        >
          "
        </span>
        <p className="w-[320px] md:w-full font-display text-3xl leading-[1.35] text-white md:text-[28px]">
          {quote}
        </p>
      </div>

      <div>
        <div className="mb-5 flex items-center gap-1.5 text-white md:gap-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <FaStar key={index} className="size-6" />
          ))}
        </div>

        <div className="mt-5 flex items-center gap-3 md:mt-7">
          <Image
            src={avatar}
            alt={name}
            width={36}
            height={36}
            className="size-11 rounded-md object-cover md:size-10"
          />
          <span className="text-base text-[#ABABAB]">{name}</span>
        </div>
      </div>
    </article>
  );
}
