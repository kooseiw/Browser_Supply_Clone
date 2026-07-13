import statsData from "@/common/data/stats.json";
import videoData from "@/common/data/video.json";
import { cn } from "@/common/utils/cn";
import LazyVideo from "@/components/ui/lazy-video";

export default function Stats() {
  return (
    <section className="relative z-10 mx-auto w-full max-w-[1440px] overflow-hidden md:mt-6 lg:mt-32">
      <div className="relative aspect-video w-full">
        <LazyVideo
          src={videoData.src}
          className="size-full object-contain lg:object-cover"
        />
      </div>

      <div className="grid grid-cols-2 border-t border-white/10 md:grid-cols-3">
        {statsData.map((item, index) => (
          <div
            key={item.label}
            className={cn(
              "flex flex-col items-center justify-center gap-2 px-4 py-12 text-center md:gap-3 md:px-6 md:py-16",
              index === 0 && "border-r border-b border-white/10 md:border-b-0",
              index === 1 &&
                "order-last col-span-2 border-white/10 md:order-0 md:col-span-1 md:border-r",
              index === 2 &&
                "border-b border-white/10 md:border-b-0 md:border-r-0",
              index < statsData.length - 1 && "md:border-r md:border-white/10",
            )}
          >
            <p className="font-display text-4xl font-medium leading-none text-white md:text-5xl">
              {item.value}
            </p>
            <p className="text-xs font-normal text-white/70 md:text-sm">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
