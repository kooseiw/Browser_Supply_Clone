import Image from "next/image";
import processData from "@/common/data/process.json";
import { cn } from "@/common/utils/cn";
import LazyVideo from "@/components/ui/lazy-video";

const STEP1_IMAGE_POSITIONS = [
  "w-[65%] top-[-12%] left-[-8%] rotate-20",
  "w-[75%] top-3 right-[-35%] rotate-20",
  "w-[65%] top-[55%] right-[-5%] rotate-20",
  "w-[75%] bottom-[15%] left-[-40%] rotate-20",
  "w-[75%] top-[105%] left-[21%] rotate-20",
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
        <LazyVideo
          src={step.video}
          className="h-full w-full object-cover"
        />
      </div>
    );
  }

  return null;
}
