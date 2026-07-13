import AccentTitle from "@/components/ui/accent-title";
import ReviewCard from "@/components/ui/review-card";
import reviewData from "@/common/data/review.json";
import { Button } from "@/components/ui/button";
import { cn } from "@/common/utils/cn";
import { FaArrowRight } from "react-icons/fa";

const MOBILE_REVIEW_IDS = ["renan", "samar", "roni"] as const;

export default function Review() {
  return (
    <section className="relative z-10 mx-auto w-full max-w-[1440px] border-t border-white/10">
      <div className="flex flex-col items-start gap-8 border-b border-white/10 px-7 py-12 md:flex-row md:items-end md:justify-between md:gap-10 md:px-8 md:py-20">
        <div className="max-w-2xl">
          <AccentTitle
            as="h2"
            segments={reviewData.title}
            className="max-w-[300px] md:max-w-2xl mb-5 font-display text-[35px] font-medium leading-[1.1] text-white md:text-[56px]"
          />
          <p className="max-w-sm text-sm font-normal leading-[1.7] text-muted md:text-base">
            {reviewData.description}
          </p>
        </div>

        <Button className="w-full gap-2 bg-white px-5 py-6 text-base font-semibold text-black md:w-fit">
          {reviewData.cta}
          <FaArrowRight className="size-3" />
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4">
        {reviewData.items.map((item, index) => {
          const mobileIndex = MOBILE_REVIEW_IDS.indexOf(
            item.id as (typeof MOBILE_REVIEW_IDS)[number],
          );
          const isMobileVisible = mobileIndex !== -1;

          return (
            <ReviewCard
              key={item.id}
              quote={item.quote}
              name={item.name}
              avatar={item.avatar}
              className={cn(
                !isMobileVisible && "hidden md:flex",
                isMobileVisible &&
                  mobileIndex < MOBILE_REVIEW_IDS.length - 1 &&
                  "border-b border-white/10",
                index % 4 !== 3 && "md:border-r md:border-white/10",
                index < reviewData.items.length - 4 &&
                  "md:border-b md:border-white/10",
              )}
            />
          );
        })}
      </div>
    </section>
  );
}
