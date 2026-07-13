import AccentTitle from "@/components/ui/accent-title";
import Badge from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import LazyVideo from "@/components/ui/lazy-video";
import framerData from "@/common/data/framer.json";

export default function Framer() {
  return (
    <section className="relative mt-10 md:mt-0 z-10 mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-5 md:grid-cols-2 md:gap-16">
      <div className="relative order-2 mx-5 aspect-square w-auto overflow-hidden md:order-1 md:mx-0 md:w-full">
        <LazyVideo src={framerData.video} className="size-full object-cover" />
      </div>

      <div className="order-1 flex flex-col items-start px-8 md:order-2">
        <Badge label={framerData.badge} className="mb-6" />

        <AccentTitle
          as="h2"
          segments={framerData.title}
          className="mb-5 max-w-[300px] md:max-w-xl font-display text-[36px] font-medium leading-[1.15] text-white md:text-[48px]"
        />

        <p className="mb-8 max-w-[290px] md:max-w-md text-sm font-normal leading-[1.7] text-muted md:text-base">
          {framerData.description}
        </p>

        <div className="flex w-full flex-col gap-3 md:w-auto md:flex-row md:items-center">
          <Button className="w-full px-5 py-6 text-base font-semibold bg-white text-black md:w-fit">
            {framerData.primaryCta}
          </Button>
          <Button className="w-full px-5 py-6 text-base font-semibold bg-[#1a1a1a] text-white md:w-fit">
            {framerData.secondaryCta}
          </Button>
        </div>
      </div>
    </section>
  );
}
