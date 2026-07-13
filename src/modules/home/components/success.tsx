import AccentTitle from "@/components/ui/accent-title";
import Badge from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import LazyVideo from "@/components/ui/lazy-video";
import successData from "@/common/data/success.json";

export default function Success() {
  return (
    <section className="relative z-30 mx-auto grid w-full max-w-[1440px] grid-cols-1 border-t border-white/10 md:z-10 md:grid-cols-2">
      <div className="flex flex-col justify-center px-5 py-12 md:px-8 md:py-14 lg:px-12 lg:py-20">
        <Badge
          label={successData.badge}
          className="mb-6 ml-2 w-fit md:mb-6 lg:mb-8"
        />

        <AccentTitle
          as="h2"
          segments={successData.title}
          className="mb-6 px-3 font-display text-[33px] font-medium leading-[1.1] text-white md:mb-6 md:px-0 md:text-[46px] lg:mb-8 lg:max-w-none lg:text-[48px]"
        />

        <div className="mb-6 flex w-full max-w-[340px] flex-col gap-4 px-3 md:max-w-[360px] md:px-0 lg:max-w-[420px]">
          {successData.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="text-sm leading-[1.7] text-muted md:text-base"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <blockquote className="mb-8 w-full border-l-2 border-white/30 pl-4 md:mb-8 lg:mb-10 lg:w-[300px]">
          <p className="text-sm leading-[1.6] text-white md:text-base">
            {successData.quote}
          </p>
        </blockquote>

        <div className="flex w-full flex-col gap-3 lg:w-auto lg:flex-row lg:items-center">
          <Button className="w-full bg-white px-5 py-6 text-base font-semibold text-black lg:w-fit">
            {successData.primaryCta}
          </Button>
          <Button className="w-full bg-[#1a1a1a] px-5 py-6 text-base font-semibold text-white lg:w-fit">
            {successData.secondaryCta}
          </Button>
        </div>
      </div>

      <div className="mx-5 mb-5 aspect-4/3 overflow-hidden bg-black md:mx-0 md:mb-0 md:aspect-auto md:min-h-[560px] md:h-full md:bg-transparent lg:min-h-0">
        <LazyVideo
          src={successData.video}
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
}
