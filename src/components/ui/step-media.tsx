import Image from "next/image";
import processData from "@/common/data/process.json";
import { cn } from "@/common/utils/cn";
import LazyVideo from "@/components/ui/lazy-video";

const STEP1_IMAGE_POSITIONS = [
  {
    mobile: "w-[65%] top-[-45%] left-[-8%] rotate-20",
    tablet: "md:w-[90%] md:top-[5%] md:left-[-40%] md:rotate-20",
    desktop: "lg:w-[65%] lg:top-[-12%] lg:left-[-8%] lg:rotate-20",
  },
  {
    mobile: "w-[75%] top-[-25%] right-[-35%] rotate-20",
    tablet: "md:w-[90%] md:top-[10%] md:right-[-50%] md:rotate-20",
    desktop: "lg:w-[75%] lg:top-3 lg:right-[-35%] lg:rotate-20",
  },
  {
    mobile: "w-[75%] top-[55%] right-[-15%] rotate-20",
    tablet: "md:w-[90%] md:top-[55%] md:right-[-20%] md:rotate-20",
    desktop: "lg:w-[65%] lg:top-[55%] lg:right-[-5%] lg:rotate-20",
  },
  {
    mobile: "w-[75%] bottom-[-15%] left-[-40%] rotate-20",
    tablet: "md:w-[90%] md:bottom-[15%] md:left-[-65%] md:rotate-20",
    desktop: "lg:w-[75%] lg:bottom-[15%] lg:left-[-40%] lg:rotate-20",
  },
  {
    mobile: "w-[75%] top-[125%] left-[21%] rotate-20",
    tablet: "md:w-[90%] md:top-[95%] md:left-[8%] md:rotate-20",
    desktop: "lg:w-[75%] lg:top-[105%] lg:left-[21%] lg:rotate-20",
  },
] as const;

type Step = (typeof processData.steps)[number];

export default function StepMedia({ step }: { step: Step }) {
  if (step.type === "images" && step.images) {
    return (
      <div className="absolute inset-0 origin-top scale-90 md:origin-center md:scale-100">
        {step.images.map((src, i) => (
          <div
            key={src}
            className={cn(
              "absolute aspect-4/3 overflow-hidden rounded-lg shadow-xl",
              STEP1_IMAGE_POSITIONS[i].mobile,
              STEP1_IMAGE_POSITIONS[i].tablet,
              STEP1_IMAGE_POSITIONS[i].desktop,
            )}
          >
            <Image
              src={src}
              alt={`${step.title} preview ${i + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
          </div>
        ))}
      </div>
    );
  }

  if (step.type === "video" && step.video) {
    return (
      <div className="absolute inset-0">
        <LazyVideo src={step.video} className="h-full w-full object-cover" />
      </div>
    );
  }

  return null;
}
