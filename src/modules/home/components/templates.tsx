import AccentTitle from "@/components/ui/accent-title";
import TemplateCard from "@/components/ui/template-card";
import templatesData from "@/common/data/templates.json";
import { FaArrowRight } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { cn } from "@/common/utils/cn";

export default function Templates() {
  return (
    <section className="relative z-10 mx-auto w-full max-w-[1440px] py-32">
      <div className="mb-0 flex items-end justify-between gap-10 border-b border-white/10 px-8 pb-12">
        <div className="max-w-xl">
          <AccentTitle
            as="h2"
            segments={templatesData.title}
            className="mb-4 font-display text-[56px] font-medium leading-[1.1] text-white"
          />
          <p className="max-w-md text-base font-normal leading-[1.7] text-muted">
            {templatesData.description}
          </p>
        </div>

        <Button className="w-fit px-5 py-6 text-base font-semibold bg-white text-black">
          {templatesData.cta}
          <span aria-hidden="true" className="ml-2">
            <FaArrowRight className="size-3" />
          </span>
        </Button>
      </div>

      <div className="grid grid-cols-3">
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
                "border-r border-white/10",
            )}
          />
        ))}
      </div>
    </section>
  );
}
