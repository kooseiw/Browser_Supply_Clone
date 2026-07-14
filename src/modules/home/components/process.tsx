import AccentTitle from "@/components/ui/accent-title";
import Badge from "@/components/ui/badge";
import StepMedia from "@/components/ui/step-media";
import processData from "@/common/data/process.json";
import { cn } from "@/common/utils/cn";

export default function Process() {
  return (
    <section className="relative z-30 mx-auto w-full max-w-[1440px] border-t border-white/10">
      <div className="flex flex-col items-center px-5 py-16 text-center md:px-8 md:py-24">
        <Badge label={processData.badge} className="mb-6" />

        <AccentTitle
          as="h2"
          segments={processData.title}
          className="mb-5 font-display text-[45px] font-medium leading-[1.05] text-white md:text-[72px]"
        />

        <p className="max-w-[250px] md:max-w-[430px] text-sm font-normal leading-[1.7] text-muted md:text-base">
          {processData.description}
        </p>
      </div>

      <div className="grid grid-cols-1 border-t border-white/10 md:h-[500px] md:grid-cols-3">
        {processData.steps.map((step, index) => (
          <div
            key={step.id}
            className={cn(
              "relative z-0 h-[300px] overflow-hidden md:h-auto",
              index < processData.steps.length - 1 &&
                "border-b border-white/10 md:border-r md:border-b-0",
            )}
          >
            <StepMedia step={step} />

            <div className="absolute inset-0 z-10 bg-linear-to-b from-black via-black/65 to-transparent" />

            <div className="absolute inset-0 z-20 mt-5 p-5 md:mt-0 md:p-8">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/50 md:mb-4 md:text-white/40">
                {step.label}
              </p>
              <h3 className="mb-2 font-display text-3xl font-medium text-white md:text-2xl">
                {step.title}
              </h3>
              <p className="max-w-[200px] text-sm leading-[1.6] text-white/60 md:max-w-xs">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
