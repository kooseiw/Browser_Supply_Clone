import AccentTitle from "@/components/ui/accent-title";
import Badge from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import LazyVideo from "@/components/ui/lazy-video";
import framerData from "@/common/data/framer.json";

export default function Framer() {
  return (
    <section className="relative z-10 mx-auto grid w-full max-w-[1440px] grid-cols-2 items-center gap-16">
      <div className="relative aspect-square w-full overflow-hidden">
        <LazyVideo
          src={framerData.video}
          className="size-full object-cover"
        />
      </div>

      <div className="flex flex-col items-start px-8">
        <Badge label={framerData.badge} className="mb-6" />

        <AccentTitle
          as="h2"
          segments={framerData.title}
          className="mb-5 max-w-xl font-display text-[48px] font-medium leading-[1.15] text-white"
        />

        <p className="mb-8 max-w-md text-base font-normal leading-[1.7] text-muted">
          {framerData.description}
        </p>

        <div className="flex items-center gap-3">
          <Button className="w-fit px-5 py-6 text-base font-semibold bg-white text-black">
            {framerData.primaryCta}
          </Button>
          <Button className="w-fit px-5 py-6 text-base font-semibold bg-[#1a1a1a] text-white">
            {framerData.secondaryCta}
          </Button>
        </div>
      </div>
    </section>
  );
}
