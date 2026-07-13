import AccentTitle from "@/components/ui/accent-title";
import ReviewCard from "@/components/ui/review-card";
import reviewData from "@/common/data/review.json";
import { Button } from "@/components/ui/button";
import { cn } from "@/common/utils/cn";
import { FaArrowRight } from "react-icons/fa";

export default function Review() {
  return (
    <section className="relative z-10 mx-auto w-full max-w-[1440px] border-t border-white/10">
      <div className="flex items-end justify-between gap-10 border-b border-white/10 px-8 py-20">
        <div className="max-w-2xl">
          <AccentTitle
            as="h2"
            segments={reviewData.title}
            className="mb-5 font-display text-[56px] font-medium leading-[1.1] text-white"
          />
          <p className="max-w-sm text-base font-normal leading-[1.7] text-muted">
            {reviewData.description}
          </p>
        </div>

        <Button className="w-fit gap-2 bg-white px-5 py-6 text-base font-semibold text-black">
          {reviewData.cta}
          <FaArrowRight className="size-3" />
        </Button>
      </div>

      <div className="grid grid-cols-4">
        {reviewData.items.map((item, index) => (
          <ReviewCard
            key={item.id}
            quote={item.quote}
            name={item.name}
            avatar={item.avatar}
            className={cn(
              index % 4 !== 3 && "border-r border-white/10",
              index < reviewData.items.length - 4 && "border-b border-white/10",
            )}
          />
        ))}
      </div>
    </section>
  );
}
