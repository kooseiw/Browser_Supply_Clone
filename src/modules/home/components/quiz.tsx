import Image from "next/image";
import Badge from "@/components/ui/badge";
import quizData from "@/common/data/quiz.json";
import { cn } from "@/common/utils/cn";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa";

const QUIZ_IMAGE_POSITIONS = [
  {
    mobile: "w-[70%] top-[-8%] left-[-7%] rotate-15",
    desktop: "md:w-[70%] md:top-[-100%] md:left-[-7%] md:rotate-15",
  },
  {
    mobile: "w-[70%] top-[20%] left-[-20%] rotate-15",
    desktop: "md:w-[70%] md:top-[20%] md:left-[-20%] md:rotate-15",
  },
  {
    mobile: "w-[70%] top-[5%] right-[-35%] rotate-15",
    desktop: "md:w-[70%] md:top-[18%] md:right-[-25%] md:rotate-15",
  },
  {
    mobile: "w-[70%] top-[45%] left-[50%] rotate-15",
    desktop: "md:hidden",
  },
] as const;

export default function Quiz() {
  return (
    <section className="relative z-30 overflow-hidden bg-black">
      <div className="relative mx-auto h-[650px] w-full max-w-[1540px] overflow-hidden md:h-[650px]">
        <div className="absolute inset-0">
          {quizData.images.map((src, i) => (
            <div
              key={src}
              className={cn(
                "absolute aspect-square md:aspect-4/3 overflow-hidden rounded-lg shadow-xl",
                QUIZ_IMAGE_POSITIONS[i].mobile,
                QUIZ_IMAGE_POSITIONS[i].desktop,
              )}
            >
              <Image
                src={src}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          ))}
        </div>

        <div
          aria-hidden="true"
          className="absolute inset-0 z-10 bg-black/60 md:hidden"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 z-10 hidden bg-linear-to-r from-black/80 via-black/80 to-black/40 md:block"
        />

        <div className="relative z-20 mx-auto flex h-full w-full max-w-7xl flex-col justify-center gap-8 px-6 md:h-[600px] md:flex-row md:items-end md:justify-between md:gap-0 md:px-12 md:pb-16">
          <div className="flex flex-col">
            <Badge label={quizData.badge} className="mb-6 w-fit md:mb-8" />

            <h2 className="mb-4 max-w-[280px] font-display text-[40px] font-medium leading-[1.15] text-white md:mb-5 md:max-w-lg md:text-[52px] md:leading-[1.1]">
              {quizData.title}
            </h2>

            <p className="max-w-[300px] text-sm leading-[1.7] text-white/80 md:max-w-sm md:text-muted">
              {quizData.description}{" "}
              <strong className="font-semibold text-white">
                {quizData.highlight}
              </strong>
            </p>
          </div>

          <Button className="w-full shrink-0 gap-2 bg-white px-6 py-6 text-base font-semibold text-black md:w-fit mt-16 md:mt-0">
            {quizData.cta}
            <FaArrowRight className="size-3" />
          </Button>
        </div>
      </div>
    </section>
  );
}
