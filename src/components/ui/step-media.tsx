import Image from "next/image";
import processData from "@/common/data/process.json";
import { cn } from "@/common/utils/cn";

const STEP1_IMAGE_POSITIONS = [
  "w-[65%] top-1 left-[-15%] rotate-20",
  "w-[65%] top-3 right-[-25%] rotate-20",
  "w-[75%] top-[45%] right-[-15%] rotate-20",
  "w-[65%] bottom-[15%] left-[-30%] rotate-20",
  "w-[75%] top-[95%] left-[20%] rotate-20",
] as const;

type Step = (typeof processData.steps)[number];

export default function StepMedia({ step }: { step: Step }) {
  if (step.type === "images" && step.images) {
    return (
      <div className="absolute inset-0">
        {step.images.map((src, i) => (
          <div
            key={src}
            className={cn(
              "absolute aspect-4/3 overflow-hidden rounded-lg shadow-xl",
              STEP1_IMAGE_POSITIONS[i],
            )}
          >
            <Image
              src={src}
              alt={`${step.title} preview ${i + 1}`}
              fill
              className="object-cover"
              sizes="25vw"
            />
          </div>
        ))}
      </div>
    );
  }

  if (step.type === "video" && step.video) {
    return (
      <div className="absolute inset-0">
        <video
          src={step.video}
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        />
      </div>
    );
  }

  return null;
}
