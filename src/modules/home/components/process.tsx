import AccentTitle from "@/components/ui/accent-title";
import Badge from "@/components/ui/badge";
import StepMedia from "@/components/ui/step-media";
import processData from "@/common/data/process.json";
import { cn } from "@/common/utils/cn";

export default function Process() {
  return (
    <section className="relative z-10 mx-auto w-full max-w-[1440px] border-t border-white/10">
      <div className="flex flex-col items-center px-8 py-24 text-center">
        <Badge label={processData.badge} className="mb-6" />

        <AccentTitle
          as="h2"
          segments={processData.title}
          className="mb-5 font-display text-[72px] font-medium leading-[1.05] text-white"
        />

        <p className="max-w-[430px] text-base font-normal leading-[1.7] text-muted">
          {processData.description}
        </p>
      </div>

      <div className="grid h-[500px] grid-cols-3 border-t border-white/10">
        {processData.steps.map((step, index) => (
          <div
            key={step.id}
            className={cn(
              "relative overflow-hidden",
              index < processData.steps.length - 1 &&
                "border-r border-white/10",
            )}
          >
            <StepMedia step={step} />

            <div className="absolute inset-0 z-10 bg-linear-to-b from-black via-black/65 to-transparent" />

            <div className="absolute inset-0 z-20 p-8">
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/40">
                {step.label}
              </p>
              <h3 className="mb-2 font-display text-2xl font-medium text-white">
                {step.title}
              </h3>
              <p className="text-sm leading-[1.6] text-white/60">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
