import Image from "next/image";
import { cn } from "@/common/utils/cn";

type TemplateCardProps = {
  name: string;
  category: string;
  price: string;
  image: string;
  isNew?: boolean;
  className?: string;
};

export default function TemplateCard({
  name,
  category,
  price,
  image,
  isNew = false,
  className,
}: TemplateCardProps) {
  return (
    <article className={cn("flex flex-col gap-5 p-8", className)}>
      <div className="relative aspect-4/3 w-full overflow-hidden rounded-sm">
        <Image
          src={image}
          alt={`${name} Framer template`}
          fill
          className="object-cover object-top"
          sizes="33vw"
        />
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <h3 className="font-display text-3xl font-medium text-white">
            {name}
          </h3>
          {isNew ? (
            <span className="rounded px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[#33D478] bg-[#33D478]/15">
              New
            </span>
          ) : null}
        </div>

        <p className="text-xs font-medium uppercase tracking-[0.08em] text-white/50">
          {category}
          <span className="mx-2 text-white/30">•</span>
          {price}
        </p>
      </div>
    </article>
  );
}
