import AccentTitle from "@/components/ui/accent-title";
import Badge from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import LazyVideo from "@/components/ui/lazy-video";
import successData from "@/common/data/success.json";

export default function Success() {
  return (
    <section className="relative z-30 mx-auto grid w-full max-w-[1440px] grid-cols-1 border-t border-white/10 md:z-10 md:grid-cols-2">
      <div className="flex flex-col justify-center px-5 py-12 md:px-12 md:py-20">
        <Badge label={successData.badge} className="ml-2 mb-6 w-fit md:mb-8" />

        <AccentTitle
          as="h2"
          segments={successData.title}
          className="mb-6 font-display text-[33px] px-3 md:px-0 font-medium leading-[1.1] text-white md:mb-8 md:text-[48px]"
        />

        <div className="mb-6 flex w-full flex-col gap-4 max-w-[340px] md:max-w-[420px] px-3 md:px-0">
          {successData.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="text-sm leading-[1.7] text-muted md:text-base"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <blockquote className="mb-8 w-full border-l-2 border-white/30 pl-4 md:mb-10 md:w-[300px]">
          <p className="text-sm leading-[1.6] text-white md:text-base">
            {successData.quote}
          </p>
        </blockquote>

        <div className="flex w-full flex-col gap-3 md:w-auto md:flex-row md:items-center">
          <Button className="w-full px-5 py-6 text-base font-semibold bg-white text-black md:w-fit">
            {successData.primaryCta}
          </Button>
          <Button className="w-full px-5 py-6 text-base font-semibold bg-[#1a1a1a] text-white md:w-fit">
            {successData.secondaryCta}
          </Button>
        </div>
      </div>

      <div className="mx-5 mb-5 aspect-4/3 overflow-hidden bg-black md:mx-0 md:mb-0 md:aspect-auto md:h-full md:bg-transparent">
        <LazyVideo
          src={successData.video}
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
}
