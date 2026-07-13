import AccentTitle from "@/components/ui/accent-title";
import Badge from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import LazyVideo from "@/components/ui/lazy-video";
import successData from "@/common/data/success.json";

export default function Success() {
  return (
    <section className="relative z-10 mx-auto grid w-full max-w-[1440px] grid-cols-2 border-t border-white/10">
      <div className="flex flex-col justify-center px-12 py-20">
        <Badge label={successData.badge} className="mb-8 w-fit" />

        <AccentTitle
          as="h2"
          segments={successData.title}
          className="mb-8 font-display text-[48px] font-medium leading-[1.1] text-white"
        />

        <div className="w-[420px] mb-6 flex flex-col gap-4">
          {successData.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-base leading-[1.7] text-muted">
              {paragraph}
            </p>
          ))}
        </div>

        <blockquote className="w-[300px] mb-10 border-l-2 border-white/30 pl-4">
          <p className="text-base leading-[1.6] text-white">
            {successData.quote}
          </p>
        </blockquote>

        <div className="flex items-center gap-3">
          <Button className="w-fit px-5 py-6 text-base font-semibold bg-white text-black">
            {successData.primaryCta}
          </Button>
          <Button className="w-fit px-5 py-6 text-base font-semibold bg-[#1a1a1a] text-white">
            {successData.secondaryCta}
          </Button>
        </div>
      </div>

      <div className="overflow-hidden">
        <LazyVideo
          src={successData.video}
          className="h-full w-full object-cover object-center"
        />
      </div>
    </section>
  );
}
