import AccentTitle from "@/components/ui/accent-title";
import Badge from "@/components/ui/badge";
import LazyVideo from "@/components/ui/lazy-video";
import IntegrationIcons from "@/components/ui/integration-icons";
import Reveal, { RevealGroup } from "@/components/ui/reveal";
import benefitsData from "@/common/data/benefits.json";
import { FaArrowTrendUp } from "react-icons/fa6";

export default function Benefits() {
  const { badge, title, description, noCode, convert, pricing, tutorials } =
    benefitsData;

  return (
    <section className="relative z-30 mx-auto mt-0 w-full max-w-[1440px] md:z-10 md:mt-10 lg:mt-0">
      <Reveal>
        <div className="mb-10 flex flex-col items-center px-8 text-center md:mb-16">
          <Badge label={badge} className="mb-6" />
          <AccentTitle
            as="h2"
            segments={title}
            className="mb-4 max-w-[300px] font-display text-[50px] font-medium leading-[1.1] text-white md:max-w-[600px] md:text-[60px] lg:max-w-[750px] lg:text-[72px]"
          />
          <p className="max-w-md text-sm font-normal leading-[1.7] text-muted md:text-base">
            {description}
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 border border-white/10 md:grid-cols-3">
        <RevealGroup itemClassName="h-full min-h-0">
          <div className="flex h-full flex-col border-b border-white/10 md:border-r md:border-b-0">
            <div className="flex flex-1 flex-col gap-3 p-8 md:gap-4 md:p-5 lg:gap-3 lg:p-8">
              <h3 className="max-w-[280px] font-display text-3xl font-medium leading-tight text-white md:max-w-[280px] md:text-[26px] md:leading-[1.2] lg:max-w-none lg:text-3xl lg:leading-tight">
                {noCode.title}
              </h3>
              <p className="max-w-[320px] text-sm leading-[1.7] text-muted md:max-w-[180px] md:text-[13px] md:leading-[1.65] lg:max-w-full lg:text-base lg:leading-[1.7]">
                {noCode.description}
              </p>
            </div>
            <div className="relative mx-5 mt-auto mb-5 aspect-video w-auto overflow-hidden md:mx-0 md:mb-0 md:aspect-4/3 md:w-full">
              <LazyVideo src={noCode.video} className="size-full object-cover" />
            </div>
          </div>

          <div className="flex h-full flex-col border-b border-white/10 md:border-r md:border-b-0">
            <div className="flex flex-1 flex-col gap-5 border-b border-white/10 p-8 md:gap-4 md:p-5 lg:gap-5 lg:p-8">
              <IntegrationIcons items={convert.integrations} />

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

            <div className="flex flex-1 flex-col gap-5 p-8 md:gap-4 md:p-5 lg:gap-5 lg:p-8">
              <p className="w-full text-base font-normal leading-snug text-white md:text-sm lg:w-[300px] lg:text-base">
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

          <div className="relative h-full min-h-[420px] overflow-hidden bg-black md:min-h-[400px] md:bg-transparent lg:min-h-[560px]">
            <LazyVideo
              src={tutorials.video}
              className="absolute inset-0 size-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-8 md:gap-2 md:p-5 lg:gap-3 lg:p-8">
              <h3 className="w-full max-w-[300px] font-display text-2xl font-medium leading-tight text-white md:max-w-[160px] md:text-[22px] md:leading-[1.2] lg:w-[300px] lg:max-w-none lg:text-3xl lg:leading-tight">
                {tutorials.title}
              </h3>
              <p className="w-full max-w-[330px] text-sm leading-[1.7] text-[#ABABAB] md:max-w-[180px] md:text-[13px] md:leading-[1.65] lg:w-[330px] lg:max-w-none lg:text-base lg:leading-[1.7]">
                {tutorials.description}
              </p>
            </div>
          </div>
        </RevealGroup>
      </div>
    </section>
  );
}
