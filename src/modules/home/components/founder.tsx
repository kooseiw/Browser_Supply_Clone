import Badge from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/common/utils/cn";
import { FaArrowRight } from "react-icons/fa";
import LazyVideo from "@/components/ui/lazy-video";
import founderData from "@/common/data/founder.json";

export default function Founder() {
  return (
    <section className="relative mx-auto grid w-full max-w-[1440px] grid-cols-1 border-t border-white/10 md:z-10 md:grid-cols-2 md:items-stretch">
      <div className="relative z-30 order-2 aspect-square overflow-hidden md:z-auto md:order-1 md:aspect-auto md:min-h-[640px] lg:min-h-0">
        <LazyVideo
          src={founderData.video}
          className="h-full w-full object-cover object-bottom"
        />
      </div>

      <div className="order-1 flex flex-col md:order-2">
        <div className="flex flex-1 flex-col justify-center px-5 py-12 md:px-6 md:py-10 lg:px-12 lg:py-20">
          <Badge
            label={founderData.badge}
            className="mb-6 w-fit md:mb-5 lg:mb-8"
          />

          <h2 className="mb-1 font-display text-4xl font-medium leading-[1.1] text-white md:text-[45px] lg:text-[61px]">
            {founderData.name}
          </h2>
          <p className="mb-6 font-display text-4xl font-medium leading-[1.1] text-white md:mb-6 md:text-[45px] lg:mb-8 lg:text-[61px]">
            {founderData.role}
          </p>

          <div className="mb-8 flex w-[320px] flex-col gap-4 md:w-full md:max-w-[350px] lg:w-[490px] lg:max-w-none">
            {founderData.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-sm leading-[1.7] text-[#ABABAB] md:text-base"
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
                "flex flex-col items-center justify-center px-4 py-8 text-center md:px-3 md:py-6 lg:px-6 lg:py-10",
                index % 2 === 0 && "border-r border-white/10",
                index < 2 && "border-b border-white/10",
              )}
            >
              <p className="mb-2 font-display text-4xl font-medium text-white md:text-4xl lg:text-5xl">
                {stat.value}
              </p>
              <p className="text-[12px] leading-[1.6] text-[#ABABAB] md:text-sm lg:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <Button className="relative z-30 w-full gap-2 rounded-none bg-white py-6 text-base font-semibold text-black md:z-auto">
          {founderData.cta}
          <FaArrowRight className="size-3" />
        </Button>
      </div>
    </section>
  );
}
