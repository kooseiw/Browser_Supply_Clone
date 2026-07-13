import AccentTitle from "@/components/ui/accent-title";
import Badge from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import LazyVideo from "@/components/ui/lazy-video";
import framerData from "@/common/data/framer.json";

export default function Framer() {
  return (
    <section className="relative z-10 mx-auto mt-10 grid w-full max-w-[1440px] grid-cols-1 items-center gap-5 md:mt-0 md:min-h-[700px] md:grid-cols-2 md:items-stretch md:gap-8 lg:min-h-0 lg:items-center lg:gap-16">
      <div className="relative order-2 mx-5 aspect-square w-auto overflow-hidden md:order-1 md:mx-0 md:aspect-auto md:w-full lg:aspect-square">
        <LazyVideo src={framerData.video} className="size-full object-cover" />
      </div>

      <div className="order-1 flex flex-col items-start justify-center px-8 md:order-2 md:px-6 lg:px-8">
        <Badge label={framerData.badge} className="mb-6 md:mb-5 lg:mb-6" />

        <AccentTitle
          as="h2"
          segments={framerData.title}
          className="mb-5 max-w-[300px] font-display text-[36px] font-medium leading-[1.15] text-white md:mb-4 md:max-w-[340px] md:text-[48px] lg:mb-5 lg:max-w-xl lg:text-[48px]"
        />

        <p className="mb-8 max-w-[290px] text-sm font-normal leading-[1.7] text-muted md:mb-6 md:max-w-[420px] md:text-base lg:mb-8 lg:max-w-md">
          {framerData.description}
        </p>

        <div className="flex w-full flex-col gap-3 md:w-auto md:flex-row md:items-center">
          <Button className="w-full bg-white px-5 py-6 text-base font-semibold text-black md:w-fit">
            {framerData.primaryCta}
          </Button>
          <Button className="w-full bg-[#1a1a1a] px-5 py-6 text-base font-semibold text-white md:w-fit">
            {framerData.secondaryCta}
          </Button>
        </div>
      </div>
    </section>
  );
}
