import Image from "next/image";
import Badge from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import quizData from "@/common/data/quiz.json";
import { cn } from "@/common/utils/cn";
import { FaArrowRight } from "react-icons/fa";

const QUIZ_IMAGE_POSITIONS = [
  "w-[70%] top-[-100%] left-[-7%] rotate-15",
  "w-[70%] top-[20%] left-[-20%] rotate-15",
  "w-[70%] top-[18%] right-[-25%] rotate-15",
] as const;

export default function Quiz() {
  return (
    <section className="relative z-30 overflow-hidden bg-black">
      <div className="relative mx-auto h-[650px] w-full max-w-[1540px] overflow-hidden">
        <div className="absolute inset-0">
          {quizData.images.map((src, i) => (
            <div
              key={src}
              className={cn(
                "absolute aspect-4/3 overflow-hidden rounded-lg shadow-xl",
                QUIZ_IMAGE_POSITIONS[i],
              )}
            >
              <Image
                src={src}
                alt=""
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
          ))}
        </div>

        <div
          aria-hidden="true"
          className="absolute inset-0 z-10 bg-linear-to-r from-black/80 via-black/80 to-black/40"
        />

        <div className="relative z-20 mx-auto flex h-[600px] w-full max-w-7xl items-end justify-between px-12 pb-16">
          <div className="flex flex-col">
            <Badge label={quizData.badge} className="mb-8 w-fit" />

            <h2 className="mb-5 max-w-lg font-display text-[52px] font-medium leading-[1.1] text-white">
              {quizData.title}
            </h2>

            <p className="max-w-sm text-sm leading-[1.7] text-muted">
              {quizData.description}{" "}
              <strong className="font-semibold text-white">
                {quizData.highlight}
              </strong>
            </p>
          </div>

          <Button className="shrink-0 gap-2 bg-white px-6 py-6 text-sm font-semibold text-black">
            {quizData.cta}
            <FaArrowRight className="size-3" />
          </Button>
        </div>
      </div>
    </section>
  );
}
