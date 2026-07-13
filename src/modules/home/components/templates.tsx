import AccentTitle from "@/components/ui/accent-title";
import TemplateCard from "@/components/ui/template-card";
import templatesData from "@/common/data/templates.json";
import { FaArrowRight } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { cn } from "@/common/utils/cn";

export default function Templates() {
  return (
    <section className="relative z-10 mx-auto w-full max-w-[1440px] py-16 md:py-0 lg:py-32">
      <div className="mb-0 flex flex-col items-stretch gap-6 border-b border-white/10 px-8 pb-8 md:flex-row md:items-end md:justify-between md:gap-10 md:px-8 md:pb-12">
        <div className="max-w-xl">
          <AccentTitle
            as="h2"
            segments={templatesData.title}
            className="mb-4 font-display text-[40px] font-medium leading-[1.1] text-white md:text-[56px]"
          />
          <p className="max-w-[250px] md:max-w-md text-sm font-normal leading-[1.7] text-muted md:text-base">
            {templatesData.description}
          </p>
        </div>

        <Button className="w-full px-5 py-6 text-base font-semibold bg-white text-black md:w-fit">
          {templatesData.cta}
          <span aria-hidden="true" className="ml-2">
            <FaArrowRight className="size-3" />
          </span>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3">
        {templatesData.items.map((item, index) => (
          <TemplateCard
            key={item.id}
            name={item.name}
            category={item.category}
            price={item.price}
            image={item.image}
            isNew={item.isNew}
            className={cn(
              index < templatesData.items.length - 1 &&
                "border-b border-white/10 md:border-r md:border-b-0",
            )}
          />
        ))}
      </div>
    </section>
  );
}
