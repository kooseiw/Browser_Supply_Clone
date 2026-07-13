import Badge from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import LazyVideo from "@/components/ui/lazy-video";
import { cn } from "@/common/utils/cn";
import { FaArrowRight } from "react-icons/fa";
import founderData from "@/common/data/founder.json";

export default function Founder() {
  return (
    <section className="relative z-10 mx-auto grid w-full max-w-[1440px] grid-cols-2 border-t border-white/10">
      <div className="overflow-hidden">
        <LazyVideo
          src={founderData.video}
          className="h-full w-full object-cover object-bottom"
        />
      </div>

      <div className="flex flex-col">
        <div className="flex flex-1 flex-col justify-center px-12 py-20">
          <Badge label={founderData.badge} className="mb-8 w-fit" />

          <h2 className="mb-1 font-display text-[61px] font-medium leading-[1.1] text-white">
            {founderData.name}
          </h2>
          <p className="mb-8 font-display text-[61px] font-medium leading-[1.1] text-white">
            {founderData.role}
          </p>

          <div className="mb-8 flex w-[490px] flex-col gap-4">
            {founderData.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-base leading-[1.7] text-[#ABABAB]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 border-t border-white/10">
          {founderData.stats.map((stat, index) => (
            <div
              key={stat.label}
              className={cn(
                "flex flex-col items-center justify-center px-6 py-10 text-center",
                index % 2 === 0 && "border-r border-white/10",
                index < 2 && "border-b border-white/10",
              )}
            >
              <p className="mb-2 font-display text-5xl font-medium text-white">
                {stat.value}
              </p>
              <p className="text-base leading-[1.6] text-[#ABABAB]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <Button className="w-full gap-2 py-6 rounded-none text-base font-semibold bg-white text-black">
          {founderData.cta}
          <FaArrowRight className="size-3" />
        </Button>
      </div>
    </section>
  );
}
