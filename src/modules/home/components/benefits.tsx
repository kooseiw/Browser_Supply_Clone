import Image from "next/image";
import AccentTitle from "@/components/ui/accent-title";
import Badge from "@/components/ui/badge";
import LazyVideo from "@/components/ui/lazy-video";
import benefitsData from "@/common/data/benefits.json";
import { FaArrowTrendUp } from "react-icons/fa6";

export default function Benefits() {
  const { badge, title, description, noCode, convert, pricing, tutorials } =
    benefitsData;

  return (
    <section className="relative z-30 mx-auto w-full max-w-[1440px] md:z-10">
      <div className="mb-10 flex flex-col items-center px-5 text-center md:mb-16 md:px-8">
        <Badge label={badge} className="mb-6" />
        <AccentTitle
          as="h2"
          segments={title}
          className="mb-4 max-w-[300px] md:max-w-[750px] font-display text-[50px] font-medium leading-[1.1] text-white md:text-[72px]"
        />
        <p className="max-w-md text-sm font-normal leading-[1.7] text-muted md:text-base">
          {description}
        </p>
      </div>

      <div className="grid grid-cols-1 border border-white/10 md:grid-cols-3">
        <div className="flex flex-col border-b border-white/10 md:border-r md:border-b-0">
          <div className="flex flex-1 flex-col gap-3 p-5 md:p-8">
            <h3 className="font-display text-3xl font-medium leading-tight text-white md:text-3xl">
              {noCode.title}
            </h3>
            <p className="max-w-[320px] md:max-w-full text-sm leading-[1.7] text-muted md:text-base">
              {noCode.description}
            </p>
          </div>
          <div className="relative mx-5 mt-auto mb-5 aspect-video w-auto overflow-hidden md:mx-0 md:mb-0 md:aspect-4/3 md:w-full">
            <LazyVideo src={noCode.video} className="size-full object-cover" />
          </div>
        </div>

        <div className="flex flex-col border-b border-white/10 md:border-r md:border-b-0">
          <div className="flex flex-1 flex-col gap-5 border-b border-white/10 p-5 md:p-8">
            <div className="flex flex-wrap items-center gap-2">
              {convert.integrations.map((item) => (
                <Image
                  key={item.name}
                  src={item.src}
                  alt={item.name}
                  width={500}
                  height={500}
                  className="rounded-lg"
                  style={{ width: "40px", height: "40px" }}
                />
              ))}
            </div>

            <div className="mt-2 flex items-center gap-2 md:mt-4">
              <FaArrowTrendUp className="size-5 text-[#33D478] md:size-6" />
              <span className="text-xs font-normal uppercase tracking-[0.12em] text-[#ABABAB]">
                {convert.label}
              </span>
            </div>

            <p className="text-base font-medium leading-snug text-white">
              {convert.title}
            </p>
          </div>

          <div className="flex flex-1 flex-col gap-5 p-5 md:p-8">
            <p className="w-full text-base font-normal leading-snug text-white md:w-[300px]">
              {pricing.title}
            </p>

            <div className="flex flex-col gap-5">
              <div>
                <div className="w-full rounded-md bg-[#1a1a1a] px-5 py-4">
                  <p className="text-base font-semibold text-white">
                    {pricing.agency.price}
                  </p>
                </div>
                <p className="mt-2 text-xs font-medium uppercase tracking-[0.08em] text-white/50">
                  {pricing.agency.label}
                </p>
              </div>

              <div>
                <div className="w-fit rounded-md bg-[#404040] px-5 py-4">
                  <p className="text-sm font-semibold uppercase text-white">
                    {pricing.template.price}
                  </p>
                </div>
                <p className="mt-2 text-xs font-medium uppercase tracking-[0.08em] text-white/50">
                  {pricing.template.label}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative min-h-[420px] overflow-hidden bg-black md:bg-transparent md:min-h-[560px]">
          <LazyVideo
            src={tutorials.video}
            className="absolute inset-0 size-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-5 md:p-8">
            <h3 className="w-full max-w-[300px] font-display text-2xl font-medium leading-tight text-white md:w-[300px] md:text-3xl">
              {tutorials.title}
            </h3>
            <p className="w-full max-w-[330px] text-sm leading-[1.7] text-[#ABABAB] md:w-[330px] md:text-base">
              {tutorials.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
