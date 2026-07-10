import Image from "next/image";
import AccentTitle from "@/components/ui/accent-title";
import Badge from "@/components/ui/badge";
import benefitsData from "@/common/data/benefits.json";
import { FaArrowTrendUp } from "react-icons/fa6";

export default function Benefits() {
  const { badge, title, description, noCode, convert, pricing, tutorials } =
    benefitsData;

  return (
    <section className="relative z-10 mx-auto w-full max-w-7xl">
      <div className="mb-16 flex flex-col items-center px-8 text-center">
        <Badge label={badge} className="mb-6" />
        <AccentTitle
          as="h2"
          segments={title}
          className="mb-4 max-w-[750px] font-display text-[72px] font-medium leading-[1.1] text-white"
        />
        <p className="max-w-md text-base font-normal leading-[1.7] text-muted">
          {description}
        </p>
      </div>

      <div className="grid grid-cols-3 border border-white/10">
        <div className="flex flex-col border-r border-white/10">
          <div className="flex flex-1 flex-col gap-3 p-8">
            <h3 className="font-display text-3xl font-medium leading-tight text-white">
              {noCode.title}
            </h3>
            <p className="text-base leading-[1.7] text-muted">
              {noCode.description}
            </p>
          </div>
          <div className="relative mt-auto aspect-4/3 w-full overflow-hidden">
            <video
              src={noCode.video}
              autoPlay
              muted
              loop
              playsInline
              className="size-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col border-r border-white/10">
          <div className="flex flex-1 flex-col gap-5 border-b border-white/10 p-8">
            <div className="flex items-center gap-2">
              {convert.integrations.map((item) => (
                <Image
                  key={item.name}
                  src={item.src}
                  alt={item.name}
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
              ))}
            </div>

            <div className="flex items-center gap-2 mt-4">
              <FaArrowTrendUp className="size-6 text-[#33D478]" />
              <span className="text-xs font-normal uppercase tracking-[0.12em] text-[#ABABAB]">
                {convert.label}
              </span>
            </div>

            <p className="text-base font-medium leading-snug text-white">
              {convert.title}
            </p>
          </div>

          <div className="flex flex-1 flex-col gap-5 p-8">
            <p className="w-[300px] text-base font-normal leading-snug text-white">
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

        <div className="relative min-h-[560px] overflow-hidden">
          <video
            src={tutorials.video}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 size-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-8">
            <h3 className="w-[300px] font-display text-3xl font-medium leading-tight text-white">
              {tutorials.title}
            </h3>
            <p className="w-[330px] text-base leading-[1.7] text-[#ABABAB]">
              {tutorials.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
