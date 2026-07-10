import statsData from "@/common/data/stats.json";
import videoData from "@/common/data/video.json";
import { cn } from "@/common/utils/cn";

export default function Stats() {
  return (
    <section className="relative z-10 mx-auto mt-32 w-full max-w-7xl overflow-hidden rounded-lg bg-black/40">
      <div className="relative aspect-video w-full">
        <video src={videoData.src} autoPlay muted loop playsInline />
      </div>

      <div className="grid grid-cols-1 border-t border-white/10 md:grid-cols-3">
        {statsData.map((item, index) => (
          <div
            key={item.label}
            className={cn(
              "flex flex-col items-center justify-center gap-3 px-6 py-16 text-center",
              index < statsData.length - 1 && "md:border-r md:border-white/10",
            )}
          >
            <p className="font-display text-5xl font-medium leading-none text-white">
              {item.value}
            </p>
            <p className="text-sm font-normal text-white/70">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
